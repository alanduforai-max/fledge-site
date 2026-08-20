# Fledge Play（事件街）多人后端 · API 契约

Worker：`fledge-site`（同一个 Worker 同时服务静态站 + `/api/*` + `/mcp`）。
存储：D1 `fledge-play` + Durable Object `PlayRoom`（真人房）。
前端按本文件接；改动契约先改这里。

---

## 0. 总则

- 同源 JSON API：`https://fledgetradelab.com/api/...`。浏览器 fetch 默认带 cookie（SameSite=Lax），无需特殊 credentials 配置；不开 CORS（`/mcp` 除外）。
- 所有响应 `application/json`（`/api/room/main/ws` 和 OAuth 302 除外），错误统一 `{error:"code"}`。
- 金额一律**整数代币**（前端 ROOM_SCALE=100 换算后的口径）。
- 静态站行为完全不变：`run_worker_first` 只圈 `/api/*` 和 `/mcp`。

### 会话
- Cookie `fp_sess`（HttpOnly + Secure + SameSite=Lax，30 天）= `base64url(uid.exp)` + `.` + `base64url(HMAC-SHA256(uid.exp, SESSION_SECRET))`。
- `SESSION_SECRET` 未配置时：`/api/auth/*` 全部 `503 {error:"not_configured"}`；`GET /api/me` 返回 `{user:null}`；其余需登录端点 401。
- 登录三通道：Google OAuth / 邮箱验证码 / **DEV 码**（`DEV_LOGIN_CODE = fledge2026`，vars 里明文，验证码端点恒可用，无需先发码）。

### 通用错误码
`bad_input` `bad_email` `bad_code` `bad_kind` `rate_limited`(429) `locked`(429) `unauthorized`(401) `not_configured`(503) `google_not_configured`(501) `already_imported`(409) `send_failed`(502) `internal`(500)

---

## 1. 认证

### POST /api/auth/email/start
请求 `{email}` → 生成 6 位码存 `email_codes`（10 分钟有效）。
- Resend 已配置（`RESEND_API_KEY` + `EMAIL_FROM` 两个 secret 都在）→ 真发信（payload 结构与 fledge-grounds 相同：from/to/subject/text）。
- 未配置 → 不发信，只能用 DEV 码。响应：`{ok:true, dev:true|false}`（`dev:true` = 前端提示用 DEV 码）。
- 限速：**每 email 每 60 秒 1 次** → `429 {error:"rate_limited"}`；验证错 5 次锁 10 分钟（锁期发码也拒）→ `429 {error:"locked"}`。

### POST /api/auth/email/verify
请求 `{email, code, name?}`：
- `code` = 收到的 6 位码，或 DEV 码（恒可用，但锁定期同样被拒）。
- 错码计 tries，**5 次锁 10 分钟**（`429 locked`）。
- 成功 → upsert user（新用户才用 `name`，默认取邮箱前缀；老用户改名走 `/api/me/name`）+ wallet（初始 **1000** 代币）→ set cookie → `{user}`。

### GET /api/auth/google
- 未配 `GOOGLE_CLIENT_ID`/`GOOGLE_CLIENT_SECRET` → `501 {error:"google_not_configured"}`。
- 已配 → 302 到 Google（scope `openid email profile`，state=HMAC 签名防 CSRF，10 分钟窗口）。
- redirect_uri = `SITE_ORIGIN + /api/auth/google/callback`。

### GET /api/auth/google/callback
换 token → 解 `id_token`（对齐 Grounds：TLS 直连 Google，不本地验签、不打 userinfo）→ 按 `google_sub` → `email` 顺序 upsert（老邮箱账号首次 Google 登录自动挂 sub）→ set cookie → **302 `/monopoly/plaza.html`**。
失败：`400 bad_state` / `400 google_email_unverified` / `502 oauth_exchange_failed`。

### POST /api/auth/logout → 清 cookie，`{ok:true}`。

---

## 2. 账号与钱包

### GET /api/me
`{user:{id,name,email,avatar_emoji,chips,imported}}`，未登录 `{user:null}`（200）。

### POST /api/me/import
`{chips:int≥0}` → 仅 `imported=0` 时一次性入账 `min(chips, 20000)` 并置 `imported=1` → `{user}`；重复 → `409 already_imported`。用途：把本地单机存档的代币带上来，一人一次。

### POST /api/me/name — `{name}`（≤12 码点，服务端去控制字符/尖括号）→ `{user}`
### POST /api/me/avatar — `{emoji}`（白名单：🐯🐸🦊🐼🐵🦄🐳🦅🐺🐮🐷🐰🦁🐨🐙🦖🐢🐝🦉🐬）→ `{user}`

### POST /api/wallet/delta
`{amount:int, |amount|≤10000, reason:string 1..40}` → `chips = max(0, chips+amount)` → `{chips}`。
> ⚠️ 过渡期端点：单机玩法（新手村/锦标赛）目前由客户端记账后上报，服务端只 clamp 不验证。每笔留审计日志。**Roadmap：单机结算搬服务端后本端点收权/下线**，前端不要新增依赖。

---

## 3. 动态墙 & 排行榜

### POST /api/feed（登录）
`{kind, data}`，kind 白名单 4 种，**文案由服务端组装**（转义/截断服务端做，前端渲染时照常 esc）：

| kind | data | text_zh 示例 |
|---|---|---|
| `bet` | `{game:'village'\|'arena', ticker, action:'follow'\|'fade'\|'duel'\|'skip', stake:1..100}` | `🐯 小虎 在实战区域 跟 NVDA 押 10` |
| `settle` | `{game, ticker, won:bool, delta:int}` | `🐯 小虎 在新手村 揭晓 TSLA：赢 +12` |
| `room` | `{day:1..99, delta:int}` | `🐯 小虎 真人房第 3 天结算：净 +25` |
| `join` | `{game:'village'\|'arena'\|'room'}` | `🐯 小虎 进入了真人房` |

非法字段 `400 bad_input`；未登录 401；限速每用户 12 条/分钟（尽力而为）。响应 `{ok:true, event:{ts,kind,text_zh,text_en}}`。
真人房结算时 DO 会自动写 `room` 行（房间名义汇总 + 有 agent 档案的参与者按「`🐯 小虎 的 agent〈稳健猎手〉在真人房第 2 天赢了 +12`」署名）。

### GET /api/feed?limit=N — 公开。`{events:[{id,ts,name,avatar,kind,text_zh,text_en}]}`，id desc，limit 1..50 默认 30。
### GET /api/leaderboard?limit=N — 公开。`{rows:[{name,avatar,chips}]}`，chips desc，limit 1..20 默认 10。

---

## 4. agent 策略人格（网页设计器 & MCP 共用）

结构与游戏内「捏 Agent」模板同款；两边共用同一套服务端存取代码。

### GET /api/agent_profile（登录）
`{profile: {agent_name, preset, strategy, traits, updated_at} | null}`
- `preset`: `'value' | 'hunter' | 'yolo' | 'custom'`
- `traits`: `{kelly:0-1, edge_bar:0-0.15, duel_appetite:0-1, contrarian:-1..1}`（越界自动 clamp）

### POST /api/agent_profile（登录）
`{agent_name?, preset?, strategy?, traits?}` 全部可选、**部分更新**：
- 传 `preset:'value'|'hunter'|'yolo'` → 未显式给的 name/strategy/traits 用预设补齐；
- 显式给 `strategy`（≤2000 码点）或 `traits`（可只给部分键）→ preset 落为 `custom`（除非同时点名 preset）；
- `agent_name` ≤20 码点。
预设数值（与 tune_agent prompt、前端捏 Agent 一致）：

| preset | 名 | kelly | edge_bar | duel_appetite | contrarian |
|---|---|---|---|---|---|
| value | 稳健价值派 Steady Value | 0.125 | 0.08 | 0 | 0 |
| hunter | 事件猎手 Event Hunter | 0.25 | 0.05 | 0.5 | 0 |
| yolo | YOLO 赌狗 YOLO Degen | 0.9 | 0 | 1 | -0.6 |

> Roadmap：前端「捏 Agent」界面与服务端 profile 双向同步（登录态下网页模板直接存到账号）。

---

## 5. 个人 API token（MCP 接入）

- 形制仿 Grounds：`fp_` + 32 hex；D1 只存 SHA-256(token)，**明文只在生成时返回一次**。
- 每用户同时只有一枚（rotate = 旧的立即作废）。

### POST /api/token/rotate（登录）→ `{token:"fp_…", created_at}`
### GET /api/token/info（登录）→ `{token:{created_at,last_used_at}|null}`（不回明文）

---

## 6. 真人房（PlayRoom DO）

一个全局房间 `main`；WS 玩家与 MCP 玩家**同桌实时互见**（同一个 DO 实例，MCP 操作也触发 WS 广播）。

### 经济口径（与前端单机房同源）
- 题目源：`/monopoly/room_arena.js` 首次初始化时服务端拉取解析（金额 ÷100，chart 剥掉）。
- 5 天赛程；`dealer_cash` 初始 100，只有真人 duel 1:1 打它（赢 −net / 输 +stake）。
- 注码档 `[1,2,5,10]`；duel 固定 10（= min(dealer_min_stake, duel_cap)/100）。
- 结算公式与 plaza.html `roomWinNet` 完全一致：`net = max(1, round(stake/边价 − stake))`，边价 follow=price、fade/duel=1−price；follow 押 YES、fade/duel 押 NO。
- **下注即扣 D1 chips（退旧扣新，一条条件 UPDATE 原子完成）；赢家结算时 本金+net 一起回账。**

### GET /api/room/main/ws（登录 + Upgrade: websocket）

C→S 消息：
```jsonc
{"t":"bet","qid":"<idea id>","action":"follow|fade|duel|skip","stake":1|2|5|10}  // duel/skip 忽略 stake；改注=先退旧再扣新；改注会清掉自己的 ready
{"t":"ready"}      // betting 阶段：在座全员 ready → 当场结算揭晓
{"t":"unready"}
{"t":"next"}       // revealed 阶段：发送者视同 ready；在座全员 ready → 翻下一天；第 5 天后 → ended
```

S→C：
- `{"t":"state", ...}` 全量快照（任何变化后广播）：
  `phase('betting'|'revealed'|'ended')、day_num/days_total/day_idx/date、dealer_cash、duel_stake、stake_tiers、questions[]（betting 阶段不含 outcome/exit_*，揭晓后含）、players{uid:{name,avatar,ready,online,pnl,bets}}、result（当日 {outcomes, players{uid:{delta,detail}}, dealer_delta}）、ended（{standings[], dealer_cash}）`
- `{"t":"err","code":"bad_msg|not_betting|not_revealed|bad_qid|bad_action|bad_stake|no_chips|not_all_ready|ended|internal"}`

### 在座与断线语义
- 「在座」= WS 连接中 ∪ MCP 最近 3 分钟内有操作。ready 判定只看在座者（≥1 人即可玩，单人可测）。
- 掉线不阻塞别人，其**已下注单照常结算**；同 uid 重连恢复座位、注单、pnl（旧连接被踢）。
- MCP 的 `room_state` 只读不入座；`room_bet/ready/unready/next` 入座并刷新 3 分钟在座时钟。

---

## 7. /mcp — 游戏 MCP 端点（Streamable HTTP）

- 鉴权：`Authorization: Bearer fp_…`（§5 的个人 token）→ 定位用户，所有工具以该用户身份操作。
- JSON-RPC 2.0：`initialize` / `ping` / `tools/list` / `tools/call` / `prompts/list` / `prompts/get` / `resources/list`（空）；纯 notification → 202。协议版本支持 2025-06-18 / 2025-03-26 / 2024-11-05（echo 客户端请求的版本）。CORS 全开（claude.ai connector 需要）。
- 未带 token → `401 {error:"unauthorized", message:"…如何拿 token…"}`。

### 工具（11 个）
`whoami` · `lobby_feed(limit)` · `leaderboard(limit)` · `room_state` · `room_bet(question_id, action, stake)` · `room_ready` · `room_unready` · `room_next` · `agent_profile_get` · `agent_profile_set(agent_name?, preset?, strategy?, traits?)` · `daily_digest`

工具 description 内嵌完整玩法语义（跟/反/对赌/跳过、赔付公式、封盘、在座判定），agent 只靠 description 即可玩。`tools/list` 完整 JSON 见交付报告 / 直接 `curl` 拿：
```bash
curl -s https://fledgetradelab.com/mcp -H "Authorization: Bearer fp_…" \
  -H 'content-type: application/json' \
  -d '{"jsonrpc":"2.0","id":1,"method":"tools/list"}'
```

### prompts（Claude Code 里自动出现为斜杠命令）
| prompt | 斜杠命令 | 用途 | 参数 |
|---|---|---|---|
| `play` | `/mcp__fledge-play__play` | 按存档的策略人格完整打一轮真人房：读盘 → 逐题 EV 决策（edge<edge_bar 跳过、方向按 p̂ vs price、注码看 kelly、对赌看 duel_appetite）→ ready → 揭晓复盘。纪律硬写进模板：不许猜真实结果、每笔给一句理由。 | `lang`（默认 zh，可 en） |
| `tune_agent` | `/mcp__fledge-play__tune_agent` | 从三预设出发打磨策略：挑/改预设 → 3-5 个问题 → 写自由 strategy prompt → 核对四个 traits → `agent_profile_set` 存档。 | 同上 |
| `daily_review` | `/mcp__fledge-play__daily_review` | 调 `daily_digest` 复盘昨日输赢、检视策略（改动先问用户），收尾三句话总结。 | 同上 |

### daily_digest 返回
```jsonc
{
  "as_of": {"generated_for":"…","live_as_of":"…"},
  "resolved_markets": [ /* book.js ledger 中 status!=open 的盘（≤20）*/ ],
  "live_markets": [ {"id","ticker","question","side","price","horizon","date","bet_cutoff","status"} /* ≤20 */ ],
  "room_record": {"seated","pnl","days":[{"day_idx","date","delta"}],"phase","day_num","days_total","dealer_cash"},
  "wallet": {"chips": 1234, "rank": 3},
  "summary_zh": "已结算盘口 …；真人房累计净 +11（第1天 +11）；当前 1234 代币（第 3 名）；在售盘口 20 个，最早封盘 …",
  "summary_en": "…"
}
```

### MCP 接入示例

Claude Code（项目 `.mcp.json`）：
```json
{
  "mcpServers": {
    "fledge-play": {
      "type": "http",
      "url": "https://fledgetradelab.com/mcp",
      "headers": { "Authorization": "Bearer fp_你的token" }
    }
  }
}
```

claude.ai 自定义连接器（Settings → Connectors → Add custom connector）：
- Name: `Fledge Play`；URL: `https://fledgetradelab.com/mcp`
- Advanced → 无 OAuth，直接在「Personal access token / custom header」里填 `Authorization: Bearer fp_…`（当前版本仅支持 token 直连；MCP-OAuth 动态注册在 roadmap）。

每天自动战报（Claude Code 定时任务，一行）：
```
/schedule create "every day 08:30" "/mcp__fledge-play__daily_review"
```

---

## 8. D1 schema（migrations/0001_init.sql）

`users`(id PK, email UNIQUE, name, avatar_emoji 默认🐯, google_sub UNIQUE, created_at) ·
`wallets`(user_id PK→users, chips 默认1000, imported 默认0, updated_at) ·
`email_codes`(email PK, code, expires_at, tries) ·
`tokens`(token_hash PK, user_id→users, created_at, last_used_at) ·
`agent_profiles`(user_id PK→users, agent_name, preset, strategy, traits JSON文本, updated_at) ·
`feed`(id PK AUTOINCREMENT, ts, user_id, name, avatar, kind, text_zh, text_en)

---

## 9. Alan 的控制台待办（缩水版，两步）

**① Google OAuth —— 复用 Grounds 同一个 GCP client**
1. 打开 [console.cloud.google.com](https://console.cloud.google.com) → APIs & Services → Credentials → 找到 Grounds 在用的 OAuth 2.0 Client（client_id `49339612227-cljrun0cmmbdjfqbfojdugppap9q966p.apps.googleusercontent.com`）。
2. 点进去，在 **Authorized redirect URIs** 里**追加一行**（保留原有的）：
   ```
   https://fledgetradelab.com/api/auth/google/callback
   ```
   （可顺手在 Authorized JavaScript origins 加 `https://fledgetradelab.com`，非必需。）保存。
3. 同页复制 **Client secret**，连同 client_id 一起走下面的 `wrangler secret put`。

**② Resend —— 复用 Grounds 现有 key 和发信地址**
1. [resend.com](https://resend.com) 面板 → API Keys → 复制 Grounds 在用的那把 key（或新建一把限定 fledgetradelab.com 域的）。域名早已验证过（mcp 注册邮件同域），**无需再动 DNS**。
2. `EMAIL_FROM` 填与 fledge-grounds secret **同一个值**（Grounds 的发信地址，如 `Fledge Grounds <login@fledgetradelab.com>` 用的那格式；可查 `cd ../fledge-grounds/mcp && npx wrangler secret list` 确认名字存在，值以你 Resend 面板配置为准）。

---

## 10. 部署清单（Alan 执行）

```bash
cd ~/Claude/Projects/fledge-site

# 1. D1 建表（远端）
npx wrangler d1 migrations apply fledge-play --remote

# 2. secrets（五条；SESSION_SECRET 必须有，其余缺了对应功能优雅降级）
openssl rand -base64 32 | npx wrangler secret put SESSION_SECRET
npx wrangler secret put RESEND_API_KEY        # Resend 面板复制（同 Grounds）
npx wrangler secret put EMAIL_FROM            # 与 fledge-grounds 的 EMAIL_FROM 同值
npx wrangler secret put GOOGLE_CLIENT_ID      # 49339612227-cljrun0cmmbdjfqbfojdugppap9q966p.apps.googleusercontent.com
npx wrangler secret put GOOGLE_CLIENT_SECRET  # GCP 同一 client 页面复制

# 3. 部署（Durable Object 迁移 v1 随部署生效）
npx wrangler deploy

# 4. 冒烟
curl -s https://fledgetradelab.com/api/me                          # {"user":null}
curl -s -X POST https://fledgetradelab.com/api/auth/email/verify \
  -H 'content-type: application/json' \
  -d '{"email":"you@test.com","code":"fledge2026","name":"测试"}'   # DEV 登录
curl -s https://fledgetradelab.com/mcp -d '{}'                     # 401 unauthorized
```

秘钥缺省时的行为：无 `SESSION_SECRET` → auth 全 503；无 Resend 两件套 → 发码接口返回 `dev:true`、只能 DEV 码登录；无 Google 两件套 → `/api/auth/google` 501。

---

## 11. Roadmap（本次明确不做）

- **新手村（村）服务端完整玩法 via MCP**：需要 per-user 服务端对局状态表 + 村规则引擎搬进 worker，工程量大，二期。
- **邮件版每日战报**：worker cron trigger + Resend 群发 digest（数据源 `daily_digest` 已就绪）。
- **单机玩法收权**：浏览器登录态下新手村/锦标赛结算搬服务端，`/api/wallet/delta` 收窄或下线。
- **前端「捏 Agent」界面 ↔ 服务端 profile 双向同步**（REST 端点已备好，见 §4）。
- **MCP OAuth（动态注册/PKCE）**：目前仅个人 token 直连；照 Grounds 的 workers-oauth-provider 路线补。

## 12. 已知契约取舍（实现时拍的板）

- 「全员 ready」的「全员」= **在座者**（WS 连接中 ∪ MCP 3 分钟活跃），掉线者不阻塞、注单照结。
- 改注会清掉自己的 ready；`next` 把发送者视同 ready。
- 邮箱验证的 `name` 只在**建号**时生效。
- 锁定期内 DEV 码同样被拒（防爆破一致性）。
- `/api/me` 在秘钥未配时回 `{user:null}` 而非 503（503 仅 `/api/auth/*`）。
- DO 房不做倒庄/破产终局（数据里 dealer_cash 只被真人 duel 影响，5 天走完即 ended）。
- `daily_digest` 的真人房战绩查的是 DO 内的对局记录（非 D1）；D1 里只有 feed 文案行。
