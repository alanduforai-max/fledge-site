/* ================================================================
   fledge-site · 事件街多人后端（纯 JS module worker，无构建步骤）
   —— 静态站行为完全不变：assets.run_worker_first 只把 /api/* 引到这里，
      其余路径 assets 先行；asset 未命中落回 worker 时原样转给 ASSETS。
   路由总览（契约见 docs/play-api.md）：
     POST /api/auth/email/start     发 6 位登录码（Resend；无 key 仅 DEV 码）
     POST /api/auth/email/verify    验码 → upsert user+wallet → set cookie
     GET  /api/auth/google          302 → Google OAuth（未配 → 501）
     GET  /api/auth/google/callback 换 token → upsert → cookie → 302 plaza
     POST /api/auth/logout          清 cookie
     GET  /api/me                   当前用户（含钱包）或 {user:null}
     POST /api/me/import            一次性带入本地代币 min(chips,20000)
     POST /api/me/name              改昵称（≤12 字符）
     POST /api/me/avatar            改头像（emoji 白名单）
     POST /api/wallet/delta         过渡期客户端记账上报（|amount|≤10000）
     POST /api/feed                 发动态（kind 白名单，文案服务端组装）
     GET  /api/feed?limit           动态墙（id desc，≤50）
     GET  /api/leaderboard?limit    排行榜（chips desc，≤20）
     GET  /api/room/main/ws         真人房 WebSocket（需登录 → PlayRoom DO）
   Durable Object PlayRoom：真人房 MVP（SQLite storage + WS hibernation）。
   ================================================================ */

const COOKIE_NAME = 'fp_sess';
const SESSION_TTL_S = 30 * 24 * 3600;        // 30 天
const CODE_TTL_MS = 10 * 60 * 1000;          // 登录码 10 分钟有效
const CODE_LOCK_MS = 10 * 60 * 1000;         // 验证 5 次锁 10 分钟
const CODE_RESEND_MS = 60 * 1000;            // 每 email 每分钟 1 次发码
const CODE_MAX_TRIES = 5;
const IMPORT_CAP = 20000;                    // 一次性带入上限
const DELTA_CAP = 10000;                     // 单笔上报上限 |amount|
const NAME_MAX = 12;                         // 昵称长度（码点数）
const REASON_MAX = 40;
const BODY_MAX = 10 * 1024;

/* 与 plaza.html 单源常量对齐（ROOM_SCALE / 注码档 / 结算公式） */
const ROOM_SCALE = 100;
const STAKE_TIERS = [1, 2, 5, 10];

const AVATAR_EMOJI = [
  '🐯', '🐸', '🦊', '🐼', '🐵', '🦄', '🐳', '🦅', '🐺', '🐮',
  '🐷', '🐰', '🦁', '🐨', '🐙', '🦖', '🐢', '🐝', '🦉', '🐬',
];

/* ---------------- 小工具 ---------------- */

const enc = new TextEncoder();
const dec = new TextDecoder();

function json(data, status = 200, extraHeaders) {
  const headers = { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' };
  if (extraHeaders) Object.assign(headers, extraHeaders);
  return new Response(JSON.stringify(data), { status, headers });
}

async function readJson(request, maxBytes = BODY_MAX) {
  try {
    const buf = await request.arrayBuffer();
    if (buf.byteLength > maxBytes) return null;
    return JSON.parse(dec.decode(buf));
  } catch {
    return null;
  }
}

export function b64url(bytes) {
  let s = '';
  for (const b of bytes) s += String.fromCharCode(b);
  return btoa(s).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

export function b64urlDecode(s) {
  s = String(s).replace(/-/g, '+').replace(/_/g, '/');
  while (s.length % 4) s += '=';
  const bin = atob(s);
  const out = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
  return out;
}

export function randHex(bytes) {
  const b = new Uint8Array(bytes);
  crypto.getRandomValues(b);
  return [...b].map((x) => x.toString(16).padStart(2, '0')).join('');
}

export async function sha256Hex(s) {
  const digest = await crypto.subtle.digest('SHA-256', enc.encode(s));
  return [...new Uint8Array(digest)].map((x) => x.toString(16).padStart(2, '0')).join('');
}

async function hmacKey(secret, usages) {
  return crypto.subtle.importKey('raw', enc.encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, usages);
}

/* 会话 cookie 值 = base64url(uid.exp) + '.' + base64url(HMAC-SHA256(uid.exp)) */
export async function signSession(uid, expSec, secret) {
  const payload = `${uid}.${expSec}`;
  const key = await hmacKey(secret, ['sign']);
  const mac = await crypto.subtle.sign('HMAC', key, enc.encode(payload));
  return `${b64url(enc.encode(payload))}.${b64url(new Uint8Array(mac))}`;
}

export async function verifySession(token, secret, nowMs = Date.now()) {
  if (!token || !secret) return null;
  const parts = String(token).split('.');
  if (parts.length !== 2) return null;
  let payload;
  try {
    payload = dec.decode(b64urlDecode(parts[0]));
  } catch {
    return null;
  }
  const i = payload.lastIndexOf('.');
  if (i < 1) return null;
  const uid = payload.slice(0, i);
  const exp = Number(payload.slice(i + 1));
  if (!uid || !Number.isFinite(exp) || exp * 1000 < nowMs) return null;
  let macBytes;
  try {
    macBytes = b64urlDecode(parts[1]);
  } catch {
    return null;
  }
  const key = await hmacKey(secret, ['verify']);
  const ok = await crypto.subtle.verify('HMAC', key, macBytes, enc.encode(payload));
  return ok ? { uid, exp } : null;
}

function getCookie(request, name) {
  const h = request.headers.get('Cookie') || '';
  for (const part of h.split(/;\s*/)) {
    const eq = part.indexOf('=');
    if (eq > 0 && part.slice(0, eq).trim() === name) return part.slice(eq + 1);
  }
  return null;
}

function sessionSetCookie(token) {
  return `${COOKIE_NAME}=${token}; Max-Age=${SESSION_TTL_S}; Path=/; HttpOnly; Secure; SameSite=Lax`;
}

function sessionClearCookie() {
  return `${COOKIE_NAME}=; Max-Age=0; Path=/; HttpOnly; Secure; SameSite=Lax`;
}

/* OAuth state：payload = g.<ts 毫秒>，同一把 SESSION_SECRET 签名，10 分钟窗口 */
async function signState(secret) {
  return signSession('g', Math.floor((Date.now() + 10 * 60 * 1000) / 1000), secret);
}
async function verifyState(state, secret) {
  const v = await verifySession(state, secret);
  return !!(v && v.uid === 'g');
}

/* 文本清洗：服务端中和（去控制字符/HTML 尖括号）+ 按码点截断。
   存明文、去毒不转义——前端渲染时再 esc()，避免双重转义。 */
export function cleanText(s, maxCp) {
  if (typeof s !== 'string') return '';
  const stripped = s.replace(/[<>`]/g, '').replace(/[\u0000-\u001f\u007f]/g, '').replace(/\s+/g, ' ').trim();
  return [...stripped].slice(0, maxCp).join('');
}

function normEmail(v) {
  if (typeof v !== 'string') return null;
  const email = v.trim().toLowerCase();
  if (email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return null;
  return email;
}

function genCode() {
  const buf = new Uint32Array(1);
  const bound = Math.floor(0x100000000 / 1000000) * 1000000; // 拒绝采样去模偏
  do {
    crypto.getRandomValues(buf);
  } while (buf[0] >= bound);
  return String(buf[0] % 1000000).padStart(6, '0');
}

/* ---------------- 结算数学（与 plaza.html 同源，导出供单测） ---------------- */

/* follow 押 YES 按庄家挂价；fade/duel 押 NO 按 1-price（四位小数，同前端） */
export function sidePriceOf(action, price) {
  return action === 'follow' ? price : Math.round((1 - price) * 10000) / 10000;
}

/* 净赚 = stake/sidePrice − stake，round 到整数代币，赢家保底 +1（= 前端 roomWinNet） */
export function winNet(stake, sidePrice) {
  return Math.max(1, Math.round(stake / sidePrice - stake));
}

/* 单注结算：返回 {won, net, delta, dealerDelta}。dealerDelta 仅 duel 非零（1:1 打庄家）。 */
export function settleOne(action, stake, price, outcome) {
  const sp = sidePriceOf(action, price);
  const won = action === 'follow' ? outcome === 'YES' : outcome === 'NO';
  const net = winNet(stake, sp);
  const delta = won ? net : -stake;
  const dealerDelta = action === 'duel' ? (won ? -net : stake) : 0;
  return { won, net, delta, dealerDelta };
}

/* ---------------- 动态墙文案（服务端按 kind 白名单组装，导出供单测） ---------------- */

const FEED_GAMES = {
  village: { zh: '新手村', en: 'the Village' },
  arena: { zh: '实战区域', en: 'the Arena' },
  room: { zh: '真人房', en: 'the Live Room' },
};
const FEED_ACTIONS = {
  follow: { zh: '跟', en: 'followed' },
  fade: { zh: '反', en: 'faded' },
  duel: { zh: '对赌', en: 'dueled the dealer on' },
};

function fmtSigned(n) {
  return (n > 0 ? '+' : '') + n;
}

function validTicker(v) {
  if (typeof v !== 'string') return null;
  const t = v.trim().toUpperCase();
  return /^[A-Z][A-Z0-9.\-]{0,9}$/.test(t) ? t : null;
}

/* buildFeedText(kind, data, user) → {text_zh, text_en} 或 null（非法输入）。
   user = {name, avatar}（取自 DB，这里再清洗一遍兜底）。 */
export function buildFeedText(kind, data, user) {
  const name = cleanText(user && user.name, NAME_MAX) || '玩家';
  const avatar = AVATAR_EMOJI.includes(user && user.avatar) ? user.avatar : '🐯';
  const who = `${avatar} ${name}`;
  data = data && typeof data === 'object' ? data : {};

  if (kind === 'bet') {
    const game = FEED_GAMES[data.game === 'village' ? 'village' : data.game === 'arena' ? 'arena' : ''];
    const ticker = validTicker(data.ticker);
    if (!game || !ticker) return null;
    if (data.action === 'skip') {
      return {
        text_zh: `${who} 在${game.zh} 跳过了 ${ticker}`,
        text_en: `${who} skipped ${ticker} in ${game.en}`,
      };
    }
    const act = FEED_ACTIONS[data.action];
    const stake = data.stake;
    if (!act || !Number.isInteger(stake) || stake < 1 || stake > 100) return null;
    return {
      text_zh: `${who} 在${game.zh} ${act.zh} ${ticker} 押 ${stake}`,
      text_en: data.action === 'duel'
        ? `${who} ${act.en} ${ticker} for ${stake} chips in ${game.en}`
        : `${who} ${act.en} ${ticker} with ${stake} chips in ${game.en}`,
    };
  }

  if (kind === 'settle') {
    const game = FEED_GAMES[data.game === 'village' ? 'village' : data.game === 'arena' ? 'arena' : ''];
    const ticker = validTicker(data.ticker);
    const won = data.won === true;
    const delta = data.delta;
    if (!game || !ticker || !Number.isInteger(delta) || Math.abs(delta) > DELTA_CAP) return null;
    return {
      text_zh: `${who} 在${game.zh} 揭晓 ${ticker}：${won ? '赢' : '输'} ${fmtSigned(delta)}`,
      text_en: `${who} ${won ? 'won' : 'lost'} ${fmtSigned(delta)} on ${ticker} in ${game.en}`,
    };
  }

  if (kind === 'room') {
    const day = data.day;
    const delta = data.delta;
    if (!Number.isInteger(day) || day < 1 || day > 99) return null;
    if (!Number.isInteger(delta) || Math.abs(delta) > DELTA_CAP) return null;
    return {
      text_zh: `${who} 真人房第 ${day} 天结算：净 ${fmtSigned(delta)}`,
      text_en: `${who} settled day ${day} in the Live Room: net ${fmtSigned(delta)}`,
    };
  }

  if (kind === 'join') {
    const game = FEED_GAMES[data.game];
    if (!game) return null;
    return {
      text_zh: `${who} 进入了${game.zh}`,
      text_en: `${who} joined ${game.en}`,
    };
  }

  return null;
}

/* ---------------- agent 策略人格（与游戏内「捏 Agent」模板同款三预设） ---------------- */

export const PROFILE_PRESETS = {
  value: {
    agent_name: '稳健价值派',
    strategy: '你是一个极端保守的价值型交易员。只有当你的估计和庄家报价差距超过 8 个百分点才出手，用八分之一 Kelly，单注不超过资金的 10%。大多数盘直接跳过——不亏钱是第一原则。不碰对赌。',
    traits: { kelly: 0.125, edge_bar: 0.08, duel_appetite: 0, contrarian: 0 },
  },
  hunter: {
    agent_name: '事件猎手',
    strategy: '你是一个纪律严明的事件驱动交易员。只有当你的估计与庄家报价的差距超过 5 个百分点才下注，用四分之一 Kelly 控制仓位，单注不超过资金的 20%。财报事件你更有信心，宏观事件保持谦逊。看不懂的盘直接跳过，跳过不丢人。对赌只在 edge 极大时考虑。',
    traits: { kelly: 0.25, edge_bar: 0.05, duel_appetite: 0.5, contrarian: 0 },
  },
  yolo: {
    agent_name: 'YOLO 赌狗',
    strategy: '你是一个 YOLO 赌狗，逢盘必赌，从不跳过。你天然不信市场定价，喜欢和大众对着干，仓位越大越兴奋，单注可以到资金的 40%。要么起飞要么归零。有对赌必上。',
    traits: { kelly: 0.9, edge_bar: 0, duel_appetite: 1, contrarian: -0.6 },
  },
};

const TRAIT_BOUNDS = { kelly: [0, 1], edge_bar: [0, 0.15], duel_appetite: [0, 1], contrarian: [-1, 1] };
const DEFAULT_TRAITS = PROFILE_PRESETS.value.traits;

/* 部分更新：patch 里给了哪个 trait 就收哪个，全部 clamp 进边界；非法值丢弃 */
export function normTraits(patch, base) {
  const out = { ...(base || DEFAULT_TRAITS) };
  if (patch && typeof patch === 'object') {
    for (const [k, [lo, hi]] of Object.entries(TRAIT_BOUNDS)) {
      const v = patch[k];
      if (typeof v === 'number' && Number.isFinite(v)) out[k] = Math.max(lo, Math.min(hi, v));
    }
  }
  for (const [k, [lo, hi]] of Object.entries(TRAIT_BOUNDS)) {
    if (typeof out[k] !== 'number' || !Number.isFinite(out[k])) out[k] = DEFAULT_TRAITS[k];
    out[k] = Math.max(lo, Math.min(hi, out[k]));
  }
  return out;
}

function parseProfileRow(row) {
  if (!row) return null;
  let traits = null;
  try { traits = JSON.parse(row.traits); } catch { /* 落默认 */ }
  return {
    agent_name: row.agent_name || null,
    preset: row.preset || 'custom',
    strategy: row.strategy || '',
    traits: normTraits(null, traits),
    updated_at: row.updated_at || null,
  };
}

async function getProfile(env, uid) {
  const row = await env.DB.prepare(
    'SELECT agent_name, preset, strategy, traits, updated_at FROM agent_profiles WHERE user_id = ?'
  ).bind(uid).first();
  return parseProfileRow(row);
}

/* setProfile：REST 与 MCP 共用的唯一写入口。字段全可选、部分更新；
   preset ∈ value|hunter|yolo 时，未显式给的 agent_name/strategy/traits 用预设补。 */
async function setProfile(env, uid, patch) {
  patch = patch && typeof patch === 'object' ? patch : {};
  const cur = await getProfile(env, uid);
  const presetGiven = ['value', 'hunter', 'yolo', 'custom'].includes(patch.preset) ? patch.preset : null;
  const presetDef = presetGiven && PROFILE_PRESETS[presetGiven] ? PROFILE_PRESETS[presetGiven] : null;

  const agentName = patch.agent_name !== undefined
    ? cleanText(patch.agent_name, 20)
    : (cur && cur.agent_name) || (presetDef && presetDef.agent_name) || null;
  if (patch.agent_name !== undefined && !agentName) return { error: 'bad_agent_name' };

  let strategy;
  if (patch.strategy !== undefined) {
    if (typeof patch.strategy !== 'string' || [...patch.strategy].length > 2000) return { error: 'bad_strategy' };
    strategy = patch.strategy.replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/g, '').trim();
  } else {
    strategy = (presetDef && presetDef.strategy) || (cur && cur.strategy) || '';
  }

  const baseTraits = (presetDef && presetDef.traits) || (cur && cur.traits) || DEFAULT_TRAITS;
  if (patch.traits !== undefined && (typeof patch.traits !== 'object' || patch.traits === null || Array.isArray(patch.traits))) {
    return { error: 'bad_traits' };
  }
  const traits = normTraits(patch.traits, baseTraits);

  const preset = presetGiven
    || (patch.strategy !== undefined || patch.traits !== undefined ? 'custom' : (cur && cur.preset) || 'custom');

  const now = Date.now();
  await env.DB.prepare(
    `INSERT INTO agent_profiles (user_id, agent_name, preset, strategy, traits, updated_at)
     VALUES (?, ?, ?, ?, ?, ?)
     ON CONFLICT(user_id) DO UPDATE SET
       agent_name = excluded.agent_name, preset = excluded.preset,
       strategy = excluded.strategy, traits = excluded.traits, updated_at = excluded.updated_at`
  ).bind(uid, agentName, preset, strategy, JSON.stringify(traits), now).run();
  return { profile: { agent_name: agentName, preset, strategy, traits, updated_at: now } };
}

/* ---------------- DB 帮手 ---------------- */

async function loadUser(env, uid) {
  const row = await env.DB.prepare(
    `SELECT u.id, u.name, u.email, u.avatar_emoji,
            COALESCE(w.chips, 0) AS chips, COALESCE(w.imported, 0) AS imported
       FROM users u LEFT JOIN wallets w ON w.user_id = u.id
      WHERE u.id = ?`
  ).bind(uid).first();
  if (!row) return null;
  return {
    id: row.id, name: row.name, email: row.email, avatar_emoji: row.avatar_emoji,
    chips: row.chips | 0, imported: row.imported | 0,
  };
}

async function ensureWallet(env, uid) {
  await env.DB.prepare('INSERT OR IGNORE INTO wallets (user_id, chips, imported, updated_at) VALUES (?, 1000, 0, ?)')
    .bind(uid, Date.now()).run();
}

async function createUser(env, { email, name, googleSub }) {
  const id = crypto.randomUUID();
  const now = Date.now();
  await env.DB.batch([
    env.DB.prepare('INSERT INTO users (id, email, name, avatar_emoji, google_sub, created_at) VALUES (?, ?, ?, ?, ?, ?)')
      .bind(id, email, name, '🐯', googleSub || null, now),
    env.DB.prepare('INSERT INTO wallets (user_id, chips, imported, updated_at) VALUES (?, 1000, 0, ?)')
      .bind(id, now),
  ]);
  return id;
}

/* 会话中间件：返回 {uid} 或 null（未登录/秘钥未配/签名失效） */
async function sessionUid(request, env) {
  if (!env.SESSION_SECRET) return null;
  const v = await verifySession(getCookie(request, COOKIE_NAME), env.SESSION_SECRET);
  return v ? v.uid : null;
}

async function setSessionAnd(uid, env, body, status = 200, location = null) {
  const exp = Math.floor(Date.now() / 1000) + SESSION_TTL_S;
  const token = await signSession(uid, exp, env.SESSION_SECRET);
  const headers = { 'Set-Cookie': sessionSetCookie(token) };
  if (location) {
    headers.Location = location;
    return new Response(null, { status: 302, headers });
  }
  return json(body, status, headers);
}

/* /api/feed POST 的轻量限速位（每 isolate 尽力而为：每用户每分钟 12 条） */
const feedRate = new Map();
function feedRateOk(uid) {
  const now = Date.now();
  const arr = (feedRate.get(uid) || []).filter((t) => now - t < 60 * 1000);
  if (arr.length >= 12) return false;
  arr.push(now);
  feedRate.set(uid, arr);
  if (feedRate.size > 5000) feedRate.clear(); // 防内存膨胀，粗暴但够用
  return true;
}

/* ---------------- auth 端点 ---------------- */

async function handleEmailStart(request, env) {
  const body = await readJson(request);
  const email = normEmail(body && body.email);
  if (!email) return json({ error: 'bad_email' }, 400);

  const now = Date.now();
  const row = await env.DB.prepare('SELECT email, code, expires_at, tries FROM email_codes WHERE email = ?')
    .bind(email).first();
  if (row) {
    if ((row.tries | 0) >= CODE_MAX_TRIES && now < row.expires_at) {
      return json({ error: 'locked' }, 429); // 验证锁未过：发码也不放行
    }
    const issuedAt = row.expires_at - CODE_TTL_MS;
    if ((row.tries | 0) < CODE_MAX_TRIES && now - issuedAt < CODE_RESEND_MS) {
      return json({ error: 'rate_limited' }, 429); // 每 email 每分钟 1 次
    }
  }

  const code = genCode();
  await env.DB.prepare('INSERT OR REPLACE INTO email_codes (email, code, expires_at, tries) VALUES (?, ?, ?, 0)')
    .bind(email, code, now + CODE_TTL_MS).run();

  /* 发信 payload 结构对齐 fledge-grounds（from/to/subject/text，EMAIL_FROM 同值复用） */
  const hasMail = !!(env.RESEND_API_KEY && env.EMAIL_FROM);
  if (hasMail) {
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { authorization: `Bearer ${env.RESEND_API_KEY}`, 'content-type': 'application/json' },
      body: JSON.stringify({
        from: env.EMAIL_FROM,
        to: email,
        subject: `${code} is your Fledge Play code`,
        text: `Your Fledge Play (事件街) login code is ${code}. It expires in 10 minutes.\n你的事件街登录码是 ${code}，10 分钟内有效。不是你本人操作？忽略本邮件即可。`,
      }),
    });
    if (!r.ok) return json({ error: 'send_failed' }, 502);
  }
  return json({ ok: true, dev: !hasMail });
}

async function handleEmailVerify(request, env) {
  const body = await readJson(request);
  const email = normEmail(body && body.email);
  const code = typeof (body && body.code) === 'string' ? body.code.trim() : '';
  if (!email || !code || code.length > 64) return json({ error: 'bad_input' }, 400);

  const now = Date.now();
  const row = await env.DB.prepare('SELECT email, code, expires_at, tries FROM email_codes WHERE email = ?')
    .bind(email).first();
  if (row && (row.tries | 0) >= CODE_MAX_TRIES && now < row.expires_at) {
    return json({ error: 'locked' }, 429);
  }

  let ok = false;
  if (env.DEV_LOGIN_CODE && code === env.DEV_LOGIN_CODE) {
    ok = true; // DEV 码恒可用（锁定除外，上面已拦）
  } else if (row && row.code === code && now < row.expires_at && (row.tries | 0) < CODE_MAX_TRIES) {
    ok = true;
  }

  if (!ok) {
    if (row) {
      const tries = (row.tries | 0) + 1;
      if (tries >= CODE_MAX_TRIES) {
        await env.DB.prepare('UPDATE email_codes SET tries = ?, expires_at = ? WHERE email = ?')
          .bind(tries, now + CODE_LOCK_MS, email).run(); // 锁 10 分钟
      } else {
        await env.DB.prepare('UPDATE email_codes SET tries = ? WHERE email = ?').bind(tries, email).run();
      }
    }
    return json({ error: 'bad_code' }, 401);
  }

  await env.DB.prepare('DELETE FROM email_codes WHERE email = ?').bind(email).run();

  let uid;
  const existing = await env.DB.prepare('SELECT id FROM users WHERE email = ?').bind(email).first();
  if (existing) {
    uid = existing.id;
    await ensureWallet(env, uid);
  } else {
    const name = cleanText(body && body.name, NAME_MAX) || cleanText(email.split('@')[0], NAME_MAX) || '玩家';
    uid = await createUser(env, { email, name });
  }
  const user = await loadUser(env, uid);
  return setSessionAnd(uid, env, { user });
}

function googleRedirectUri(env) {
  return env.SITE_ORIGIN.replace(/\/$/, '') + '/api/auth/google/callback';
}

async function handleGoogleStart(env) {
  if (!env.GOOGLE_CLIENT_ID || !env.GOOGLE_CLIENT_SECRET) {
    return json({ error: 'google_not_configured' }, 501);
  }
  const state = await signState(env.SESSION_SECRET);
  const u = new URL('https://accounts.google.com/o/oauth2/v2/auth');
  u.searchParams.set('client_id', env.GOOGLE_CLIENT_ID);
  u.searchParams.set('redirect_uri', googleRedirectUri(env));
  u.searchParams.set('response_type', 'code');
  u.searchParams.set('scope', 'openid email profile');
  u.searchParams.set('state', state);
  u.searchParams.set('prompt', 'select_account');
  return Response.redirect(u.toString(), 302);
}

async function handleGoogleCallback(request, env) {
  if (!env.GOOGLE_CLIENT_ID || !env.GOOGLE_CLIENT_SECRET) {
    return json({ error: 'google_not_configured' }, 501);
  }
  const url = new URL(request.url);
  const code = url.searchParams.get('code');
  const state = url.searchParams.get('state');
  if (!code || !(await verifyState(state, env.SESSION_SECRET))) {
    return json({ error: 'bad_state' }, 400);
  }

  const tokenRes = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      code,
      client_id: env.GOOGLE_CLIENT_ID,
      client_secret: env.GOOGLE_CLIENT_SECRET,
      redirect_uri: googleRedirectUri(env),
      grant_type: 'authorization_code',
    }),
  });
  if (!tokenRes.ok) return json({ error: 'oauth_exchange_failed' }, 502);
  const tok = await tokenRes.json();
  /* 对齐 fledge-grounds：直接解 id_token payload——它由 Google token 端点经 TLS
     返回，无需本地验签。不再额外打 userinfo。 */
  if (!tok.id_token) return json({ error: 'oauth_exchange_failed' }, 502);
  let info;
  try {
    info = JSON.parse(dec.decode(b64urlDecode(String(tok.id_token).split('.')[1])));
  } catch {
    return json({ error: 'oauth_exchange_failed' }, 502);
  }
  const sub = typeof info.sub === 'string' ? info.sub : null;
  const email = normEmail(info.email);
  if (!sub) return json({ error: 'oauth_exchange_failed' }, 502);
  if (email && info.email_verified === false) return json({ error: 'google_email_unverified' }, 400);

  let uid;
  const bySub = await env.DB.prepare('SELECT id FROM users WHERE google_sub = ?').bind(sub).first();
  if (bySub) {
    uid = bySub.id;
    await ensureWallet(env, uid);
  } else {
    const byEmail = email
      ? await env.DB.prepare('SELECT id FROM users WHERE email = ?').bind(email).first()
      : null;
    if (byEmail) {
      uid = byEmail.id; // 老邮箱账号第一次用 Google 登录：挂上 google_sub
      await env.DB.prepare('UPDATE users SET google_sub = ? WHERE id = ?').bind(sub, uid).run();
      await ensureWallet(env, uid);
    } else {
      const name = cleanText(info.name, NAME_MAX)
        || (email ? cleanText(email.split('@')[0], NAME_MAX) : '') || '玩家';
      uid = await createUser(env, { email, name, googleSub: sub });
    }
  }
  return setSessionAnd(uid, env, null, 302, env.SITE_ORIGIN.replace(/\/$/, '') + '/monopoly/plaza.html');
}

/* ---------------- me / wallet / feed / leaderboard ---------------- */

async function handleMe(request, env) {
  const uid = await sessionUid(request, env);
  if (!uid) return json({ user: null });
  const user = await loadUser(env, uid);
  return json({ user: user || null });
}

async function handleImport(request, env, uid) {
  const body = await readJson(request);
  const want = body && body.chips;
  if (!Number.isInteger(want) || want < 0) return json({ error: 'bad_input' }, 400);
  const add = Math.min(want, IMPORT_CAP);
  const r = await env.DB.prepare(
    'UPDATE wallets SET chips = chips + ?, imported = 1, updated_at = ? WHERE user_id = ? AND imported = 0'
  ).bind(add, Date.now(), uid).run();
  if (!r.meta || !r.meta.changes) return json({ error: 'already_imported' }, 409);
  return json({ user: await loadUser(env, uid) });
}

async function handleName(request, env, uid) {
  const body = await readJson(request);
  const name = cleanText(body && body.name, NAME_MAX);
  if (!name) return json({ error: 'bad_input' }, 400);
  await env.DB.prepare('UPDATE users SET name = ? WHERE id = ?').bind(name, uid).run();
  return json({ user: await loadUser(env, uid) });
}

async function handleAvatar(request, env, uid) {
  const body = await readJson(request);
  const emoji = body && body.emoji;
  if (!AVATAR_EMOJI.includes(emoji)) return json({ error: 'bad_input' }, 400);
  await env.DB.prepare('UPDATE users SET avatar_emoji = ? WHERE id = ?').bind(emoji, uid).run();
  return json({ user: await loadUser(env, uid) });
}

async function handleWalletDelta(request, env, uid) {
  const body = await readJson(request);
  const amount = body && body.amount;
  const reason = cleanText(body && body.reason, REASON_MAX);
  if (!Number.isInteger(amount) || Math.abs(amount) > DELTA_CAP || !reason) {
    return json({ error: 'bad_input' }, 400);
  }
  /* 过渡期客户端记账上报：chips = max(0, chips + amount)。留审计日志，将来收权
     （见 docs/play-api.md——单机房结算会逐步搬到服务端，这个端点会变窄或下线）。 */
  console.log(JSON.stringify({ t: 'wallet_delta', uid, amount, reason }));
  await env.DB.prepare(
    'UPDATE wallets SET chips = MAX(0, chips + ?), updated_at = ? WHERE user_id = ?'
  ).bind(amount, Date.now(), uid).run();
  const row = await env.DB.prepare('SELECT chips FROM wallets WHERE user_id = ?').bind(uid).first();
  return json({ chips: row ? row.chips | 0 : 0 });
}

/* ---------------- 个人 API token（MCP 接入） ---------------- */

const TOKEN_RE = /^Bearer\s+(fp_[a-f0-9]{32})$/i;

async function handleTokenRotate(request, env, uid) {
  const token = `fp_${randHex(16)}`;             // fp_ + 32 hex，仿 Grounds fg_ 形制
  const hash = await sha256Hex(token);
  const now = Date.now();
  await env.DB.batch([
    env.DB.prepare('DELETE FROM tokens WHERE user_id = ?').bind(uid),   // 旋转 = 作废旧的
    env.DB.prepare('INSERT INTO tokens (token_hash, user_id, created_at, last_used_at) VALUES (?, ?, ?, NULL)')
      .bind(hash, uid, now),
  ]);
  return json({ token, created_at: now, note: 'shown once — store it now / 明文只此一次' });
}

async function handleTokenInfo(request, env, uid) {
  const row = await env.DB.prepare('SELECT created_at, last_used_at FROM tokens WHERE user_id = ?')
    .bind(uid).first();
  return json({ token: row ? { created_at: row.created_at, last_used_at: row.last_used_at } : null });
}

/* Bearer fp_… → user（MCP 鉴权）。顺手打 last_used_at。 */
async function userFromToken(request, env) {
  const m = (request.headers.get('Authorization') || '').match(TOKEN_RE);
  if (!m) return null;
  const hash = await sha256Hex(m[1].toLowerCase());
  const row = await env.DB.prepare('SELECT user_id FROM tokens WHERE token_hash = ?').bind(hash).first();
  if (!row) return null;
  const user = await loadUser(env, row.user_id);
  if (!user) return null;
  await env.DB.prepare('UPDATE tokens SET last_used_at = ? WHERE token_hash = ?')
    .bind(Date.now(), hash).run();
  return user;
}

/* ---------------- agent profile REST（与 MCP 工具共用 getProfile/setProfile） ---------------- */

async function handleProfileGet(request, env, uid) {
  return json({ profile: await getProfile(env, uid) });
}

async function handleProfilePost(request, env, uid) {
  const body = await readJson(request);
  if (!body || typeof body !== 'object') return json({ error: 'bad_input' }, 400);
  const r = await setProfile(env, uid, body);
  if (r.error) return json({ error: r.error }, 400);
  return json({ profile: r.profile });
}

async function handleFeedPost(request, env, uid) {
  if (!feedRateOk(uid)) return json({ error: 'rate_limited' }, 429);
  const body = await readJson(request);
  const kind = body && body.kind;
  if (!['bet', 'settle', 'room', 'join'].includes(kind)) return json({ error: 'bad_kind' }, 400);
  const user = await loadUser(env, uid);
  if (!user) return json({ error: 'unauthorized' }, 401);
  const text = buildFeedText(kind, body.data, { name: user.name, avatar: user.avatar_emoji });
  if (!text) return json({ error: 'bad_input' }, 400);
  const ts = Date.now();
  await env.DB.prepare(
    'INSERT INTO feed (ts, user_id, name, avatar, kind, text_zh, text_en) VALUES (?, ?, ?, ?, ?, ?, ?)'
  ).bind(ts, uid, user.name, user.avatar_emoji, kind, text.text_zh, text.text_en).run();
  return json({ ok: true, event: { ts, kind, ...text } });
}

function clampLimit(url, def, max) {
  const raw = url.searchParams.get('limit');
  if (raw === null || raw === '') return def; // 注意 Number(null)===0，不能直接 Number 再判
  const n = Number(raw);
  if (!Number.isFinite(n)) return def;
  return Math.max(1, Math.min(max, Math.trunc(n)));
}

async function handleFeedGet(request, env) {
  const limit = clampLimit(new URL(request.url), 30, 50);
  const rs = await env.DB.prepare(
    'SELECT id, ts, name, avatar, kind, text_zh, text_en FROM feed ORDER BY id DESC LIMIT ?'
  ).bind(limit).all();
  return json({ events: rs.results || [] });
}

async function handleLeaderboard(request, env) {
  const limit = clampLimit(new URL(request.url), 10, 20);
  const rs = await env.DB.prepare(
    `SELECT u.name, u.avatar_emoji AS avatar, w.chips
       FROM wallets w JOIN users u ON u.id = w.user_id
      ORDER BY w.chips DESC LIMIT ?`
  ).bind(limit).all();
  return json({ rows: rs.results || [] });
}

/* ---------------- 路由 ---------------- */

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const path = url.pathname;

    /* MCP 端点（Streamable HTTP，token 鉴权） */
    if (path === '/mcp' || path === '/mcp/') {
      try {
        return await handleMcp(request, env);
      } catch (e) {
        console.log(JSON.stringify({ t: 'mcp_fatal', err: String(e && e.stack || e) }));
        return new Response(JSON.stringify({ jsonrpc: '2.0', id: null, error: { code: -32603, message: 'Internal error' } }),
          { status: 500, headers: { 'content-type': 'application/json', ...MCP_CORS } });
      }
    }

    /* 非 /api/*：asset 未命中落回 worker（run_worker_first 只圈 /api/* 和 /mcp），
       原样转给静态资产——包括它自己的 404 行为，静态站语义不变。 */
    if (!path.startsWith('/api/')) {
      return env.ASSETS ? env.ASSETS.fetch(request) : new Response('not found', { status: 404 });
    }

    const method = request.method;

    try {
      /* auth 端点：SESSION_SECRET 未配置 → 一律 503 not_configured */
      if (path.startsWith('/api/auth/')) {
        if (!env.SESSION_SECRET) return json({ error: 'not_configured' }, 503);
        if (path === '/api/auth/email/start' && method === 'POST') return handleEmailStart(request, env);
        if (path === '/api/auth/email/verify' && method === 'POST') return handleEmailVerify(request, env);
        if (path === '/api/auth/google' && method === 'GET') return handleGoogleStart(env);
        if (path === '/api/auth/google/callback' && method === 'GET') return handleGoogleCallback(request, env);
        if (path === '/api/auth/logout' && method === 'POST') {
          return json({ ok: true }, 200, { 'Set-Cookie': sessionClearCookie() });
        }
        return json({ error: 'not_found' }, 404);
      }

      if (path === '/api/me' && method === 'GET') return handleMe(request, env);
      if (path === '/api/feed' && method === 'GET') return handleFeedGet(request, env);
      if (path === '/api/leaderboard' && method === 'GET') return handleLeaderboard(request, env);

      /* 以下端点全部要求登录 */
      const uid = await sessionUid(request, env);
      if (!uid) return json({ error: 'unauthorized' }, 401);

      if (path === '/api/me/import' && method === 'POST') return handleImport(request, env, uid);
      if (path === '/api/me/name' && method === 'POST') return handleName(request, env, uid);
      if (path === '/api/me/avatar' && method === 'POST') return handleAvatar(request, env, uid);
      if (path === '/api/wallet/delta' && method === 'POST') return handleWalletDelta(request, env, uid);
      if (path === '/api/feed' && method === 'POST') return handleFeedPost(request, env, uid);
      if (path === '/api/token/rotate' && method === 'POST') return handleTokenRotate(request, env, uid);
      if (path === '/api/token/info' && method === 'GET') return handleTokenInfo(request, env, uid);
      if (path === '/api/agent_profile' && method === 'GET') return handleProfileGet(request, env, uid);
      if (path === '/api/agent_profile' && method === 'POST') return handleProfilePost(request, env, uid);

      if (path === '/api/room/main/ws' && method === 'GET') {
        if ((request.headers.get('Upgrade') || '').toLowerCase() !== 'websocket') {
          return json({ error: 'expected_websocket' }, 426);
        }
        const user = await loadUser(env, uid);
        if (!user) return json({ error: 'unauthorized' }, 401);
        const stub = env.PLAY_ROOM.get(env.PLAY_ROOM.idFromName('main'));
        /* header 值必须 ASCII：中文昵称/emoji 走 encodeURIComponent，DO 里解码 */
        const fwd = new Request('https://play-room.internal/ws', {
          headers: {
            Upgrade: 'websocket',
            'X-Play-Uid': uid,
            'X-Play-Name': encodeURIComponent(user.name || '玩家'),
            'X-Play-Avatar': encodeURIComponent(user.avatar_emoji || '🐯'),
          },
        });
        return stub.fetch(fwd);
      }

      return json({ error: 'not_found' }, 404);
    } catch (e) {
      console.log(JSON.stringify({ t: 'api_error', path, err: String(e && e.stack || e) }));
      return json({ error: 'internal' }, 500);
    }
  },
};

/* ================================================================
   /mcp —— Streamable HTTP 的 MCP 服务器（JSON-RPC 2.0，无 SDK 手写调度，
   骨架仿 fledge-grounds worker）。鉴权：Authorization: Bearer fp_…（个人
   token，见 /api/token/rotate）。工具全部以 token 对应用户的身份操作；
   真人房工具直接打 PlayRoom DO 的 HTTP op——和 WS 玩家同一个房间实例、
   同一套结算代码，MCP 操作同样触发 WS 广播。
   ================================================================ */

const MCP_CORS = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, DELETE, OPTIONS',
  'access-control-allow-headers': 'Content-Type, Accept, Authorization, mcp-session-id, mcp-protocol-version',
};

const MCP_PROTOCOL_VERSIONS = ['2025-06-18', '2025-03-26', '2024-11-05'];

const MCP_INSTRUCTIONS = [
  'Fledge Play (事件街) — a prediction-market party game on real US-stock questions.',
  'You act as one player (the token owner) in the shared Live Room (真人房): a 5-day match where a dealer posts YES/NO questions about real tickers with a quoted YES price (0-1).',
  'Actions per question: follow (跟, bet YES at price), fade (反, bet NO at 1-price), duel (对赌, bet NO with a fixed stake straight against the dealer pocket), skip (跳过, free).',
  'Payout: win returns stake + max(1, round(stake/side_price - stake)); loss forfeits the stake. Stakes come off the account wallet the moment a bet is placed; refunds happen automatically when a bet is changed or skipped.',
  'Flow: while phase=betting everyone adjusts bets; when every seated player is ready the day settles and phase becomes revealed; when all are ready again, room_next advances the day. After day 5 the match ends.',
  'Never claim to know real outcomes in advance. Decide from the user\'s stored agent profile (agent_profile_get) and expected value. Use the play prompt for a guided session.',
].join(' ');

/* ---- 工具清单（tools/list 原样返回；description 即 agent 的玩法说明书） ---- */

export const MCP_TOOLS = [
  {
    name: 'whoami',
    description: 'Who am I in Fledge Play (事件街): player name, avatar, chips balance, and agent profile name if one is stored. Call this first to know your identity and bankroll.',
    inputSchema: { type: 'object', properties: {}, additionalProperties: false },
  },
  {
    name: 'lobby_feed',
    description: 'Read the public activity feed (动态墙): recent bets, settlements and room events from all players, newest first. Returns bilingual text lines (text_zh / text_en).',
    inputSchema: {
      type: 'object',
      properties: { limit: { type: 'integer', minimum: 1, maximum: 50, description: 'rows to return, default 20' } },
      additionalProperties: false,
    },
  },
  {
    name: 'leaderboard',
    description: 'Chips leaderboard (排行榜) across all registered players, richest first.',
    inputSchema: {
      type: 'object',
      properties: { limit: { type: 'integer', minimum: 1, maximum: 20, description: 'rows to return, default 10' } },
      additionalProperties: false,
    },
  },
  {
    name: 'room_state',
    description: 'Full Live Room (真人房) snapshot — equivalent to the WebSocket state frame: phase (betting|revealed|ended), day number, questions (id/ticker/question/price=dealer YES quote 0-1/reason), every player\'s bets and ready flags, dealer_cash, and current-day results once revealed. During betting the true outcome is hidden by design. Read-only: does NOT seat you at the table.',
    inputSchema: { type: 'object', properties: {}, additionalProperties: false },
  },
  {
    name: 'room_bet',
    description: 'Place, change or withdraw a bet on one Live Room question (only while phase=betting; your seat is taken automatically). action semantics: follow=bet YES at the quoted price; fade=bet NO at (1-price); duel=bet NO with a FIXED stake of 10 that also hits the dealer\'s pocket 1:1 (stake argument ignored); skip=withdraw/no bet (free, refunds any previous stake). stake must be one of 1|2|5|10 for follow/fade. Chips are debited from your wallet immediately; changing a bet refunds the old stake first. Win pays stake + max(1, round(stake/side_price - stake)); side_price is price for follow, 1-price for fade/duel. Placing a bet clears your ready flag.',
    inputSchema: {
      type: 'object',
      properties: {
        question_id: { type: 'string', description: 'the question id from room_state' },
        action: { type: 'string', enum: ['follow', 'fade', 'duel', 'skip'] },
        stake: { type: 'integer', enum: [1, 2, 5, 10], description: 'required for follow/fade; ignored for duel (fixed 10) and skip' },
      },
      required: ['question_id', 'action'],
      additionalProperties: false,
    },
  },
  {
    name: 'room_ready',
    description: 'Declare you are done betting this day (or ready to advance after a reveal). When every seated player is ready during betting, the day settles instantly: outcomes reveal, wallets are credited, phase becomes revealed. You stay seated ~3 minutes after your last action; a WebSocket (browser) player stays seated while connected. Only call after placing all intended bets — check room_state first.',
    inputSchema: { type: 'object', properties: {}, additionalProperties: false },
  },
  {
    name: 'room_unready',
    description: 'Withdraw your ready flag (e.g. you want to change a bet before others confirm).',
    inputSchema: { type: 'object', properties: {}, additionalProperties: false },
  },
  {
    name: 'room_next',
    description: 'Advance to the next day (only while phase=revealed; also marks you ready). Succeeds when every seated player is ready; after the 5th day this ends the match and the snapshot carries final standings.',
    inputSchema: { type: 'object', properties: {}, additionalProperties: false },
  },
  {
    name: 'agent_profile_get',
    description: 'Read my stored trading-agent persona (策略人格): agent_name, preset (value|hunter|yolo|custom), free-form strategy prompt, and traits {kelly 0-1 sizing aggression, edge_bar 0-0.15 minimum estimated edge to act, duel_appetite 0-1, contrarian -1..1 (negative = fades the crowd)}. Use it to decide every bet. Null if the user has not set one.',
    inputSchema: { type: 'object', properties: {}, additionalProperties: false },
  },
  {
    name: 'agent_profile_set',
    description: 'Create or partially update my trading-agent persona. All fields optional: pass preset value|hunter|yolo to load a template (稳健价值派 Steady Value: edge_bar .08/kelly .125/no duels · 事件猎手 Event Hunter: .05/.25/selective duels · YOLO 赌狗 Degen: 0/.9/always duels/contrarian), then override agent_name (≤20 chars), strategy (free prompt ≤2000 chars), or individual traits. Traits are clamped to their ranges. The stored profile signs your wins on the public feed.',
    inputSchema: {
      type: 'object',
      properties: {
        agent_name: { type: 'string', maxLength: 20 },
        preset: { type: 'string', enum: ['value', 'hunter', 'yolo', 'custom'] },
        strategy: { type: 'string', maxLength: 2000 },
        traits: {
          type: 'object',
          properties: {
            kelly: { type: 'number', minimum: 0, maximum: 1 },
            edge_bar: { type: 'number', minimum: 0, maximum: 0.15 },
            duel_appetite: { type: 'number', minimum: 0, maximum: 1 },
            contrarian: { type: 'number', minimum: -1, maximum: 1 },
          },
          additionalProperties: false,
        },
      },
      additionalProperties: false,
    },
  },
  {
    name: 'daily_digest',
    description: 'My daily battle report (每日战报), the data source for a scheduled morning briefing: recently resolved dealer markets from the public book, my Live Room day-by-day results and total pnl, currently open markets with bet cutoff times, and my chips + leaderboard rank. Returns structured JSON plus a ready-made bilingual summary string.',
    inputSchema: { type: 'object', properties: {}, additionalProperties: false },
  },
];

/* ---- prompts（Claude Code 里显示为 /mcp__fledge-play__play 等斜杠命令） ---- */

function promptPlay(lang) {
  if (lang === 'en') {
    return `Take my seat in the Fledge Play Live Room and play one full round. Use the tools for everything; never invent data.
1. Call whoami() and agent_profile_get() — identity, chips, my strategy persona (strategy text + traits). If no profile exists, default to Steady Value (edge_bar 0.08, kelly 0.125, no duels) and remind me about the tune_agent prompt.
2. Call room_state(): day, phase, and each question (ticker / question / dealer YES quote "price" / dealer reason).
3. While phase=betting, decide every question with discipline:
   - You do NOT know real outcomes and must never claim to. price is the dealer's YES quote (0-1).
   - Estimate p̂(YES) yourself with one sentence of reasoning. edge = |p̂ - price|. If edge < edge_bar → skip.
   - Direction: p̂ > price → follow (bet YES); p̂ < price → fade (bet NO). More negative contrarian → lean against the crowd/dealer.
   - Stake from [1,2,5,10], scaled by kelly. duel (fixed 10, hits the dealer pocket) only when duel_appetite is high AND the edge is extreme.
   - Payout: win = max(1, round(stake/side_price - stake)); side_price = price for follow, 1-price for fade/duel. Loss = -stake.
   - Before each room_bet(), state direction + stake + one-line why.
4. When done call room_ready(). If others are not ready, wait politely (poll room_state occasionally).
5. After the reveal (phase=revealed): review every bet — right/wrong, was the edge call sound, what to change. Ask me before room_next().
6. Report: net result this round, current chips, and one concrete improvement to my strategy.`;
  }
  return `你现在替我坐进事件街真人房打一轮。全程用工具拿数据，不许凭空编造。
1. 先调 whoami() 和 agent_profile_get()——确认身份、当前 chips、我的策略人格（strategy 文本 + traits 数值）。没有档案就按稳健价值派默认（edge_bar 0.08、kelly 0.125、不碰对赌），并提醒我可以用 tune_agent 打磨。
2. 调 room_state() 读盘：第几天、phase、每道题（ticker / 题面 / 庄家 YES 报价 price / 庄家理由 reason）。
3. phase=betting 时逐题决策，纪律如下：
   - 你不知道真实结果，也绝不许猜测或宣称知道。price 是庄家给 YES 开的价（0-1）。
   - 先自估这题 YES 的概率 p̂（给一句理由），edge = |p̂ − price|。edge < edge_bar → skip，跳过不丢人。
   - 方向：p̂ > price → follow（押 YES）；p̂ < price → fade（押 NO）。contrarian 越负越倾向反着大众和庄家来。
   - 注码从 [1,2,5,10] 里选，kelly 越高越敢重注；对赌 duel（固定 10，直接打庄家口袋）只在 duel_appetite 高且 edge 极大时用。
   - 赔付：赢 = max(1, round(stake/边价 − stake))，边价 follow=price、fade/duel=1−price；输 = 损失 stake。
   - 每次调 room_bet() 之前，用一句话讲清「方向 + 注码 + 为什么」。
4. 全部决策完调 room_ready()。房里还有人没 ready 就礼貌等待（隔一会儿 room_state() 看一眼）。
5. 揭晓（phase=revealed）后逐笔复盘：对了错了、edge 判断是否成立、下次改什么。调 room_next() 前先问我要不要继续下一天。
6. 收尾汇报：本轮净输赢、当前 chips、给我的策略提一条具体改进。`;
}

function promptTuneAgent(lang) {
  if (lang === 'en') {
    return `Help me shape my Fledge Play agent persona. Steps:
1. Call agent_profile_get() to see the current profile.
2. Offer the three presets (same as the in-game agent builder) to pick or tweak:
   - Steady Value (稳健价值派): act only when edge ≥ 8 points, one-eighth Kelly, never duels — traits {kelly 0.125, edge_bar 0.08, duel_appetite 0, contrarian 0}
   - Event Hunter (事件猎手): edge ≥ 5 points, quarter Kelly, more confident on earnings, selective duels — {kelly 0.25, edge_bar 0.05, duel_appetite 0.5, contrarian 0}
   - YOLO Degen (YOLO 赌狗): bets every market, heavy sizing, loves duels, fades the crowd — {kelly 0.9, edge_bar 0, duel_appetite 1, contrarian -0.6}
3. Ask me 3-5 questions (risk tolerance, appetite for duels, trust vs fade the dealer, bets per day) and draft/revise a free-form strategy prompt ≤2000 chars, second person, like a trader's operating manual.
4. Confirm the four trait numbers are consistent with the text (kelly 0-1 / edge_bar 0-0.15 / duel_appetite 0-1 / contrarian -1..1) and pick an agent name.
5. Save with agent_profile_set(...), then read the final profile back to me for confirmation.`;
  }
  return `帮我打磨事件街的策略人格（agent profile）。流程：
1. 调 agent_profile_get() 看现状。
2. 给我三个预设（和游戏内「捏 Agent」同款）让我挑或改：
   - 稳健价值派 Steady Value：edge ≥ 8 个百分点才出手、八分之一 Kelly、不碰对赌——traits {kelly 0.125, edge_bar 0.08, duel_appetite 0, contrarian 0}
   - 事件猎手 Event Hunter：edge ≥ 5 点出手、四分之一 Kelly、财报题更自信、对赌看情况——{kelly 0.25, edge_bar 0.05, duel_appetite 0.5, contrarian 0}
   - YOLO 赌狗 YOLO Degen：逢盘必赌、重仓、爱对赌、和大众对着干——{kelly 0.9, edge_bar 0, duel_appetite 1, contrarian -0.6}
3. 问我 3-5 个问题（风险承受、想不想碰对赌、更信庄家还是反庄家、每天想下几注），据此帮我写/改一段 ≤2000 字的自由 strategy prompt——第二人称，像给交易员的操作手册。
4. 和我核对四个 traits 数值（kelly 0-1 / edge_bar 0-0.15 / duel_appetite 0-1 / contrarian -1..1）与 strategy 文本自洽，给 agent 起个名字。
5. 调 agent_profile_set(...) 存档，最后把存好的 profile 复述给我确认。`;
}

function promptDailyReview(lang) {
  if (lang === 'en') {
    return `Give me my Fledge Play daily review. Steps:
1. Call daily_digest() — resolved markets, my Live Room results, open markets with cutoffs, chips and rank.
2. Review: which bets won/lost yesterday; for the losers, where the edge judgment went wrong (check against my strategy/traits — call agent_profile_get() if needed).
3. Strategy check: should edge_bar / kelly / duel_appetite move? Recommend, but ask me before changing anything via agent_profile_set.
4. Close with exactly three sentences: ① yesterday's net result ② today's markets worth a look (with cutoff times) ③ one discipline reminder.`;
  }
  return `给我做事件街每日战报。流程：
1. 调 daily_digest() 拿数据（已结算盘口、我的真人房输赢、当前在售盘口和封盘时间、我的 chips 和排名）。
2. 复盘：昨天哪几笔赢/输；输的那几笔当时的 edge 判断错在哪（对照我的 strategy/traits——需要的话调 agent_profile_get()）。
3. 检视策略：edge_bar / kelly / duel_appetite 要不要动？给建议，但改动必须先问我，确认后才用 agent_profile_set 改。
4. 收尾恰好三句话：① 昨天净结果 ② 今天值得看的盘（带封盘时间）③ 一条纪律提醒。`;
}

export const MCP_PROMPTS = [
  {
    name: 'play',
    title: '打一轮真人房 · Play a Live Room round',
    description: '引导 agent 按你的策略人格完整打一轮真人房：读盘 → 逐题决策下注 → ready → 复盘。Guided full round in the Live Room using your stored agent persona.',
    arguments: [{ name: 'lang', description: "'zh' (default) or 'en'", required: false }],
    get: promptPlay,
  },
  {
    name: 'tune_agent',
    title: '打磨策略人格 · Tune your agent persona',
    description: '和用户一起从三个预设出发打磨策略 prompt 与 traits，存进 agent profile。Interactive persona builder aligned with the in-game agent designer.',
    arguments: [{ name: 'lang', description: "'zh' (default) or 'en'", required: false }],
    get: promptTuneAgent,
  },
  {
    name: 'daily_review',
    title: '每日战报 · Daily review',
    description: '调 daily_digest 拿战报，复盘输赢、检视策略，最后三句话总结。Daily P&L review and strategy check, ends with a three-sentence summary.',
    arguments: [{ name: 'lang', description: "'zh' (default) or 'en'", required: false }],
    get: promptDailyReview,
  },
];

/* ---- DO 桥 & 工具实现 ---- */

async function roomOp(env, payload) {
  const stub = env.PLAY_ROOM.get(env.PLAY_ROOM.idFromName('main'));
  const res = await stub.fetch('https://play-room.internal/op', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(payload),
  });
  return res.json();
}

const ROOM_ERR_HINTS = {
  not_betting: 'the day is already settled — wait for room_next / 本日已结算',
  not_revealed: 'the day has not settled yet — everyone must be ready first / 还没揭晓',
  bad_qid: 'unknown question_id — take ids from room_state / 题目 id 不对',
  bad_action: 'action must be follow|fade|duel|skip',
  bad_stake: 'stake must be one of 1|2|5|10',
  no_chips: 'not enough chips in your wallet / 代币不足',
  not_all_ready: 'other seated players are not ready yet — wait and retry / 其他玩家还没 ready',
  ended: 'this 5-day match has ended / 本局已结束',
};

async function callMcpTool(env, user, name, args) {
  const okText = (obj) => ({ content: [{ type: 'text', text: JSON.stringify(obj, null, 2) }] });
  const failText = (msg) => ({ content: [{ type: 'text', text: msg }], isError: true });
  const roomCall = async (payload) => {
    const r = await roomOp(env, {
      ...payload, uid: user.id, name: user.name, avatar: user.avatar_emoji,
    });
    if (r && r.ok) return okText(payload.op === 'record' ? r.record : r.state);
    const code = (r && r.error) || 'internal';
    return failText(`room op rejected: ${code}${ROOM_ERR_HINTS[code] ? ' — ' + ROOM_ERR_HINTS[code] : ''}`);
  };

  switch (name) {
    case 'whoami': {
      const profile = await getProfile(env, user.id);
      return okText({
        name: user.name, avatar: user.avatar_emoji, email: user.email,
        chips: user.chips, imported: !!user.imported,
        agent_name: profile ? profile.agent_name : null,
      });
    }
    case 'lobby_feed': {
      const limit = Math.max(1, Math.min(50, Number.isInteger(args.limit) ? args.limit : 20));
      const rs = await env.DB.prepare(
        'SELECT id, ts, name, avatar, kind, text_zh, text_en FROM feed ORDER BY id DESC LIMIT ?'
      ).bind(limit).all();
      return okText({ events: rs.results || [] });
    }
    case 'leaderboard': {
      const limit = Math.max(1, Math.min(20, Number.isInteger(args.limit) ? args.limit : 10));
      const rs = await env.DB.prepare(
        'SELECT u.name, u.avatar_emoji AS avatar, w.chips FROM wallets w JOIN users u ON u.id = w.user_id ORDER BY w.chips DESC LIMIT ?'
      ).bind(limit).all();
      return okText({ rows: rs.results || [] });
    }
    case 'room_state': return roomCall({ op: 'state' });
    case 'room_bet': {
      if (typeof args.question_id !== 'string' || !args.question_id) return failText('question_id is required — take it from room_state');
      if (!['follow', 'fade', 'duel', 'skip'].includes(args.action)) return failText('action must be follow|fade|duel|skip');
      return roomCall({ op: 'bet', qid: args.question_id, action: args.action, stake: args.stake });
    }
    case 'room_ready': return roomCall({ op: 'ready' });
    case 'room_unready': return roomCall({ op: 'unready' });
    case 'room_next': return roomCall({ op: 'next' });
    case 'agent_profile_get': return okText({ profile: await getProfile(env, user.id) });
    case 'agent_profile_set': {
      const r = await setProfile(env, user.id, args);
      if (r.error) return failText(`profile rejected: ${r.error}`);
      return okText({ profile: r.profile });
    }
    case 'daily_digest': return okText(await buildDailyDigest(env, user));
    default: return failText(`unknown tool: ${name}`);
  }
}

/* 每日战报数据源：公共 book.js（庄家盘口账本）+ 真人房战绩 + 钱包排名 */
async function buildDailyDigest(env, user) {
  let book = null;
  try {
    const url = env.SITE_ORIGIN.replace(/\/$/, '') + '/monopoly/book.js';
    const res = env.ASSETS ? await env.ASSETS.fetch(url) : await fetch(url);
    if (res.ok) {
      const text = await res.text();
      book = JSON.parse(text.replace(/^\s*window\.BOOK\s*=\s*/, '').replace(/;\s*$/, ''));
    }
  } catch { /* book 挂了不影响其余板块 */ }

  const ledger = (book && book.ledger) || [];
  const lean = (l) => ({
    id: l.id, ticker: l.ticker, question: l.question, side: l.side, price: l.price,
    horizon: l.horizon, date: l.date, bet_cutoff: l.bet_cutoff, status: l.status,
    outcome: l.outcome, result: l.result, pnl: l.pnl,
  });
  const resolved = ledger.filter((l) => l.status && l.status !== 'open').slice(0, 20).map(lean);
  const live = ledger.filter((l) => l.status === 'open').slice(0, 20).map(lean);

  let room = null;
  try {
    const r = await roomOp(env, { op: 'record', uid: user.id });
    if (r && r.ok) room = r.record;
  } catch { /* 房间没起过也算正常 */ }

  let rank = null;
  try {
    const row = await env.DB.prepare(
      'SELECT COUNT(*) + 1 AS rank FROM wallets WHERE chips > (SELECT chips FROM wallets WHERE user_id = ?)'
    ).bind(user.id).first();
    rank = row ? row.rank : null;
  } catch { /* 排名失败不阻塞 */ }

  const cutoffs = live.map((l) => l.bet_cutoff).filter(Boolean).sort();
  const roomLine = room && room.days && room.days.length
    ? `真人房累计净 ${fmtSigned(room.pnl)}（${room.days.map((d) => `第${d.day_idx}天 ${fmtSigned(d.delta)}`).join('、')}）`
    : '真人房还没有战绩';
  const roomLineEn = room && room.days && room.days.length
    ? `Live Room total ${fmtSigned(room.pnl)} (${room.days.map((d) => `day ${d.day_idx}: ${fmtSigned(d.delta)}`).join(', ')})`
    : 'no Live Room record yet';

  return {
    as_of: book ? { generated_for: book.generated_for, live_as_of: book.live_as_of } : null,
    resolved_markets: resolved,
    live_markets: live,
    room_record: room,
    wallet: { chips: user.chips, rank },
    summary_zh: `已结算盘口 ${resolved.length} 个；${roomLine}；当前 ${user.chips} 代币${rank ? `（第 ${rank} 名）` : ''}；在售盘口 ${live.length} 个${cutoffs.length ? `，最早封盘 ${cutoffs[0]}` : ''}。`,
    summary_en: `${resolved.length} resolved market(s); ${roomLineEn}; ${user.chips} chips${rank ? ` (rank #${rank})` : ''}; ${live.length} open market(s)${cutoffs.length ? `, earliest cutoff ${cutoffs[0]}` : ''}.`,
  };
}

/* ---- JSON-RPC 调度（骨架仿 Grounds：单请求/批内取首个带 id 的请求） ---- */

function mcpJson(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'content-type': 'application/json', ...MCP_CORS },
  });
}

function mcpRpcError(id, code, message, status = 200) {
  return mcpJson({ jsonrpc: '2.0', id: id === undefined ? null : id, error: { code, message } }, status);
}

async function handleMcp(request, env) {
  const method = request.method;
  if (method === 'OPTIONS') return new Response(null, { status: 204, headers: MCP_CORS });
  if (method === 'GET') return new Response(null, { status: 405, headers: { allow: 'POST', ...MCP_CORS } });
  if (method === 'DELETE') return new Response(null, { status: 200, headers: MCP_CORS });
  if (method !== 'POST') return new Response('method not allowed', { status: 405, headers: MCP_CORS });

  const user = await userFromToken(request, env);
  if (!user) {
    return mcpJson({
      error: 'unauthorized',
      message: 'Fledge Play MCP needs a personal token: log in at https://fledgetradelab.com/monopoly/plaza.html, create one via POST /api/token/rotate, then send Authorization: Bearer fp_…',
    }, 401);
  }

  let body;
  try { body = await request.json(); } catch { return mcpRpcError(null, -32700, 'Parse error', 400); }
  const messages = Array.isArray(body) ? body : [body];
  const rpc = messages.find(
    (m) => m && typeof m === 'object' && 'method' in m && 'id' in m && m.id !== undefined
  );
  if (!rpc) return new Response(null, { status: 202, headers: MCP_CORS }); // 纯 notification

  const t0 = Date.now();
  const logUsage = (tool, status) => {
    try {
      console.log(JSON.stringify({ evt: 'usage', user: user.email || user.id, tool, status, ms: Date.now() - t0 }));
    } catch { /* 日志绝不影响服务 */ }
  };

  try {
    let result;
    switch (rpc.method) {
      case 'initialize': {
        const asked = rpc.params && rpc.params.protocolVersion;
        result = {
          protocolVersion: MCP_PROTOCOL_VERSIONS.includes(asked) ? asked : MCP_PROTOCOL_VERSIONS[0],
          capabilities: { tools: {}, prompts: {} },
          serverInfo: { name: 'fledge-play', title: 'Fledge 事件街 · Play', version: '1.0.0' },
          instructions: MCP_INSTRUCTIONS,
        };
        break;
      }
      case 'ping': result = {}; break;
      case 'tools/list': result = { tools: MCP_TOOLS }; break;
      case 'prompts/list':
        result = {
          prompts: MCP_PROMPTS.map(({ name, title, description, arguments: a }) => ({ name, title, description, arguments: a })),
        };
        break;
      case 'prompts/get': {
        const p = MCP_PROMPTS.find((x) => x.name === (rpc.params && rpc.params.name));
        if (!p) { logUsage(rpc.method, 'unknown_prompt'); return mcpRpcError(rpc.id, -32602, `Unknown prompt: ${rpc.params && rpc.params.name}`); }
        const lang = rpc.params && rpc.params.arguments && rpc.params.arguments.lang === 'en' ? 'en' : 'zh';
        result = {
          description: p.description,
          messages: [{ role: 'user', content: { type: 'text', text: p.get(lang) } }],
        };
        break;
      }
      case 'resources/list': result = { resources: [] }; break;
      case 'tools/call': {
        const toolName = String((rpc.params && rpc.params.name) || '?');
        const toolArgs = (rpc.params && rpc.params.arguments) || {};
        result = await callMcpTool(env, user, toolName, toolArgs);
        logUsage(toolName, result.isError ? 'error' : 'ok');
        return mcpJson({ jsonrpc: '2.0', id: rpc.id, result });
      }
      default:
        logUsage(rpc.method, 'method_not_found');
        return mcpRpcError(rpc.id, -32601, `Method not found: ${rpc.method}`);
    }
    logUsage(rpc.method, 'ok');
    return mcpJson({ jsonrpc: '2.0', id: rpc.id, result });
  } catch (e) {
    logUsage(rpc.method, 'exception');
    console.log(JSON.stringify({ t: 'mcp_error', err: String(e && e.stack || e) }));
    return mcpRpcError(rpc.id, -32603, e instanceof Error ? e.message : 'Internal error', 500);
  }
}

/* ================================================================
   PlayRoom —— 真人房 MVP（Durable Object，SQLite storage + WS hibernation）

   经济口径与前端单机房完全一致（ROOM_SCALE=100 后的代币尺度，全程整数）：
   - 题目源：首次初始化 fetch SITE_ORIGIN/monopoly/room_arena.js，剥
     `window.ROOM_ARENA=` 前缀 JSON.parse，逐天取题（去掉 chart 大数组）。
   - dealer_cash 初始 = config.dealer_initial_cash/100 = 100；只有真人 duel
     1:1 打它（won → −net，lost → +stake），NPC 轨迹不掺和。
   - duel 固定注 = min(dealer_min_stake, duel_cap)/100 = 10。
   - 下注即扣玩家 D1 chips（退旧扣新）；结算赢家 stake+net 一起回账。
   - phase: betting →（全员 ready 自动结算）→ revealed →（全员 ready + next）
     → 下一天 betting；5 天走完 → ended，广播总结。
   - 「全员」= 当前在线（连着 WS）的玩家；掉线玩家的注照常结算，但不阻塞
     别人 ready。断线重连（同 uid cookie）恢复原座位与已下注。
   ================================================================ */

const ROOM_ERR = {
  BAD_MSG: 'bad_msg',
  NOT_BETTING: 'not_betting',
  NOT_REVEALED: 'not_revealed',
  BAD_QID: 'bad_qid',
  BAD_ACTION: 'bad_action',
  BAD_STAKE: 'bad_stake',
  NO_CHIPS: 'no_chips',
  NOT_ALL_READY: 'not_all_ready',
  ENDED: 'ended',
};

/* MCP 玩家的「在座」判定：最近一次 MCP 操作在 3 分钟内。
   （WS 玩家 = 连着就在座；MCP 玩家没有长连接，用操作时间近似——
   下注/ready 会刷新，纯 room_state 查看不刷新、也不入座。） */
const MCP_PRESENCE_MS = 3 * 60 * 1000;

export class PlayRoom {
  constructor(state, env) {
    this.state = state;
    this.env = env;
    this._game = undefined; // 惰性从 storage 取（hibernation 后内存清零）
    this._days = undefined;
  }

  /* ---------- 初始化 & 存取 ---------- */

  async ensureInit() {
    if (this._days === undefined) {
      this._days = (await this.state.storage.get('days')) || null;
    }
    if (this._game === undefined) {
      this._game = (await this.state.storage.get('game')) || null;
    }
    if (this._days && this._game) return;

    const data = await this.fetchArena();
    const scale = (v) => Math.round((v || 0) / ROOM_SCALE);
    this._days = (data.days || []).map((d) => ({
      date: d.date,
      day_idx: d.day_idx,
      ideas: (d.ideas || []).map((i) => ({
        id: i.id, ticker: i.ticker, question: i.question, price: i.price,
        reason: i.reason, mood: i.mood, horizon: i.horizon,
        ref_close: i.ref_close, ref_date: i.ref_date,
        outcome: i.outcome, exit_close: i.exit_close, exit_date: i.exit_date,
        move_pct: i.move_pct,
      })),
    }));
    if (!this._days.length) throw new Error('room_arena.js has no days');
    const cfg = data.config || {};
    this._game = {
      created_at: Date.now(),
      phase: 'betting',            // betting | revealed | ended
      day_pos: 0,                  // 指向 this._days 的下标
      dealer_cash: scale(cfg.dealer_initial_cash != null ? cfg.dealer_initial_cash : 10000),
      duel_stake: Math.min(scale(cfg.dealer_min_stake != null ? cfg.dealer_min_stake : 1000),
        scale(cfg.duel_cap != null ? cfg.duel_cap : 2000)) || 10,
      players: {},                 // uid → {name, avatar, ready, bets{qid:{action,stake,price}}, pnl}
      results: {},                 // day_idx → {outcomes, players{uid:{delta,detail}}, dealer_delta}
    };
    await this.state.storage.put('days', this._days);
    await this.state.storage.put('game', this._game);
  }

  async fetchArena() {
    const url = this.env.SITE_ORIGIN.replace(/\/$/, '') + '/monopoly/room_arena.js';
    const res = this.env.ASSETS ? await this.env.ASSETS.fetch(url) : await fetch(url);
    if (!res.ok) throw new Error(`fetch room_arena.js: ${res.status}`);
    const text = await res.text();
    const jsonText = text.replace(/^\s*window\.ROOM_ARENA\s*=\s*/, '').replace(/;\s*$/, '');
    return JSON.parse(jsonText);
  }

  async saveGame() {
    await this.state.storage.put('game', this._game);
  }

  curDay() {
    return this._days[this._game.day_pos] || null;
  }

  connectedUids() {
    const out = new Set();
    for (const ws of this.state.getWebSockets()) {
      const att = ws.deserializeAttachment();
      if (att && att.uid) out.add(att.uid);
    }
    return out;
  }

  /* 在座名单 = WS 连接中 ∪ MCP 最近活跃。ready 判定看这份名单。 */
  presentUids() {
    const out = this.connectedUids();
    const now = Date.now();
    for (const [uid, p] of Object.entries(this._game.players)) {
      if (p.last_mcp && now - p.last_mcp < MCP_PRESENCE_MS) out.add(uid);
    }
    return out;
  }

  allPresentReady() {
    const g = this._game;
    const present = this.presentUids();
    if (!present.size) return false; // ≥1 人才能推进（单人也能测）
    for (const uid of present) {
      const p = g.players[uid];
      if (!p || !p.ready) return false;
    }
    return true;
  }

  /* ---------- 入口：WS upgrade 或 MCP 的 HTTP op ---------- */

  async fetch(request) {
    if ((request.headers.get('Upgrade') || '').toLowerCase() !== 'websocket') {
      if (request.method === 'POST') return this.handleOp(request);
      return new Response('expected websocket', { status: 426 });
    }
    const uid = request.headers.get('X-Play-Uid');
    if (!uid) return new Response('unauthorized', { status: 401 });
    let name = '玩家';
    let avatar = '🐯';
    try {
      name = decodeURIComponent(request.headers.get('X-Play-Name') || '') || name;
      avatar = decodeURIComponent(request.headers.get('X-Play-Avatar') || '') || avatar;
    } catch { /* 保底默认值 */ }

    await this.ensureInit();

    /* 同 uid 重连：踢掉旧连接，座位、已下注原样保留 */
    for (const old of this.state.getWebSockets(uid)) {
      try { old.close(1000, 'reconnect'); } catch { /* noop */ }
    }

    const pair = new WebSocketPair();
    const client = pair[0];
    const server = pair[1];
    this.state.acceptWebSocket(server, [uid]);
    server.serializeAttachment({ uid, name, avatar });

    const g = this._game;
    if (!g.players[uid]) {
      g.players[uid] = { name, avatar, ready: false, bets: {}, pnl: 0 };
    } else {
      g.players[uid].name = name;      // 资料以最新登录为准
      g.players[uid].avatar = avatar;
    }
    await this.saveGame();
    this.broadcast();

    return new Response(null, { status: 101, webSocket: client });
  }

  /* ---------- WS 消息 ---------- */

  async webSocketMessage(ws, raw) {
    let msg;
    try {
      msg = JSON.parse(typeof raw === 'string' ? raw : dec.decode(raw));
    } catch {
      return this.err(ws, ROOM_ERR.BAD_MSG);
    }
    const att = ws.deserializeAttachment();
    if (!att || !att.uid) return this.err(ws, ROOM_ERR.BAD_MSG);

    await this.ensureInit();
    const g = this._game;
    if (!g.players[att.uid]) { // hibernation 边角：座位还原
      g.players[att.uid] = { name: att.name, avatar: att.avatar, ready: false, bets: {}, pnl: 0 };
    }

    try {
      let err;
      switch (msg.t) {
        case 'bet': err = await this.doBet(att.uid, msg); break;
        case 'ready': err = await this.doReady(att.uid, true); break;
        case 'unready': err = await this.doReady(att.uid, false); break;
        case 'next': err = await this.doNext(att.uid); break;
        default: err = ROOM_ERR.BAD_MSG;
      }
      if (err) this.err(ws, err);
    } catch (e) {
      console.log(JSON.stringify({ t: 'room_error', err: String(e && e.stack || e) }));
      this.err(ws, 'internal');
    }
  }

  /* ---------- MCP 的 HTTP op（与 WS 完全同一套 do* 核心，广播照发） ---------- */

  async handleOp(request) {
    let body;
    try { body = await request.json(); } catch { return Response.json({ error: 'bad_op' }, { status: 400 }); }
    const uid = typeof body.uid === 'string' ? body.uid : null;
    const op = body.op;
    if (!uid || !op) return Response.json({ error: 'bad_op' }, { status: 400 });

    await this.ensureInit();
    const g = this._game;

    try {
      /* record：给 daily_digest 用——该用户逐日战绩，只读不入座 */
      if (op === 'record') {
        const p = g.players[uid];
        const days = [];
        for (const d of this._days) {
          const r = g.results[d.day_idx];
          if (r && r.players[uid] && Object.keys(r.players[uid].detail).length) {
            days.push({ day_idx: d.day_idx, date: d.date, delta: r.players[uid].delta });
          }
        }
        return Response.json({
          ok: true,
          record: {
            seated: !!p, pnl: p ? p.pnl | 0 : 0, days,
            phase: g.phase, day_num: g.day_pos + 1, days_total: this._days.length,
            dealer_cash: g.dealer_cash,
          },
        });
      }
      if (op === 'state') {
        /* 只读：不入座、不刷新在座时钟 */
        return Response.json({ ok: true, state: this.stateSnapshot() });
      }

      /* 变更类 op：先入座（MCP 玩家可能从没开过 WS）+ 刷新在座时钟 */
      if (!g.players[uid]) {
        g.players[uid] = {
          name: cleanText(body.name, NAME_MAX) || '玩家',
          avatar: AVATAR_EMOJI.includes(body.avatar) ? body.avatar : '🐯',
          ready: false, bets: {}, pnl: 0,
        };
      }
      g.players[uid].last_mcp = Date.now();

      let err = null;
      if (op === 'bet') err = await this.doBet(uid, { qid: body.qid, action: body.action, stake: body.stake });
      else if (op === 'ready') err = await this.doReady(uid, true);
      else if (op === 'unready') err = await this.doReady(uid, false);
      else if (op === 'next') err = await this.doNext(uid);
      else return Response.json({ error: 'bad_op' }, { status: 400 });

      if (err) {
        await this.saveGame();  // 入座/时钟已变，落盘
        this.broadcast();       // 新座位让 WS 端看得见
        return Response.json({ error: err }, { status: 400 });
      }
      return Response.json({ ok: true, state: this.stateSnapshot() });
    } catch (e) {
      console.log(JSON.stringify({ t: 'room_op_error', op, err: String(e && e.stack || e) }));
      return Response.json({ error: 'internal' }, { status: 500 });
    }
  }

  async webSocketClose() {
    /* 座位与注单保留（掉线不退注——他的注照常参与结算）；只刷新在线名单 */
    this.broadcast();
  }

  async webSocketError() {
    this.broadcast();
  }

  /* ---------- 动作核心（WS 与 MCP op 共用；成功 = 落盘+广播+返回 null，失败 = 返回错误码） ---------- */

  async doBet(uid, msg) {
    const g = this._game;
    if (g.phase === 'ended') return ROOM_ERR.ENDED;
    if (g.phase !== 'betting') return ROOM_ERR.NOT_BETTING;
    const day = this.curDay();
    const idea = day && day.ideas.find((i) => i.id === msg.qid);
    if (!idea) return ROOM_ERR.BAD_QID;
    if (!['follow', 'fade', 'duel', 'skip'].includes(msg.action)) return ROOM_ERR.BAD_ACTION;

    const p = g.players[uid];
    const old = p.bets[idea.id];
    const held = old && old.action !== 'skip' ? (old.stake | 0) : 0;

    let stake = 0;
    if (msg.action === 'duel') {
      stake = g.duel_stake;                       // 对赌固定注额
    } else if (msg.action !== 'skip') {
      stake = msg.stake;
      if (!STAKE_TIERS.includes(stake)) return ROOM_ERR.BAD_STAKE;
    }

    /* 真人房下注即扣服务器余额：退旧扣新，一条带条件的 UPDATE 原子完成 */
    const diff = stake - held;
    if (diff !== 0) {
      const r = await this.env.DB.prepare(
        'UPDATE wallets SET chips = chips - ?, updated_at = ? WHERE user_id = ? AND chips - ? >= 0'
      ).bind(diff, Date.now(), uid, diff).run();
      if (!r.meta || !r.meta.changes) return ROOM_ERR.NO_CHIPS;
    }

    p.bets[idea.id] = msg.action === 'skip'
      ? { action: 'skip' }
      : { action: msg.action, stake, price: idea.price };
    p.ready = false; // 改注 = 撤回自己的 ready，防止全员 ready 判定踩在改到一半的注上
    await this.saveGame();
    this.broadcast();
    return null;
  }

  async doReady(uid, val) {
    const g = this._game;
    if (g.phase === 'ended') return ROOM_ERR.ENDED;
    g.players[uid].ready = !!val;
    if (val && g.phase === 'betting' && this.allPresentReady()) {
      await this.settleDay(); // 在座全员 ready → 当天结算，phase → revealed
    }
    await this.saveGame();
    this.broadcast();
    return null;
  }

  async doNext(uid) {
    const g = this._game;
    if (g.phase === 'ended') return ROOM_ERR.ENDED;
    if (g.phase !== 'revealed') return ROOM_ERR.NOT_REVEALED;
    g.players[uid].ready = true; // 点「下一天」视同 ready
    if (!this.allPresentReady()) {
      await this.saveGame();
      this.broadcast();
      return ROOM_ERR.NOT_ALL_READY;
    }
    if (g.day_pos + 1 >= this._days.length) {
      g.phase = 'ended'; // 5 天走完：广播总结（state.ended 里带 standings）
    } else {
      g.day_pos += 1;
      g.phase = 'betting';
      for (const p of Object.values(g.players)) { p.bets = {}; p.ready = false; }
    }
    await this.saveGame();
    this.broadcast();
    return null;
  }

  /* ---------- 结算 ---------- */

  async settleDay() {
    const g = this._game;
    const day = this.curDay();
    const outcomes = {};
    for (const idea of day.ideas) outcomes[idea.id] = idea.outcome;

    const perPlayer = {};
    let dealerDelta = 0;
    let participants = 0;
    const credits = [];
    const now = Date.now();

    for (const [uid, p] of Object.entries(g.players)) {
      let delta = 0;
      let credit = 0;
      const detail = {};
      for (const idea of day.ideas) {
        const b = p.bets[idea.id];
        if (!b || b.action === 'skip') continue;
        const r = settleOne(b.action, b.stake, idea.price, idea.outcome);
        if (r.won) credit += b.stake + r.net; // 本金下注时已扣：赢了本金+净赚一起回账
        dealerDelta += r.dealerDelta;         // duel 1:1 打庄家口袋
        delta += r.delta;
        detail[idea.id] = { action: b.action, stake: b.stake, won: r.won, delta: r.delta };
      }
      if (Object.keys(detail).length) participants += 1;
      p.pnl = (p.pnl | 0) + delta;
      p.ready = false; // 揭晓后重新 ready 才能翻天
      perPlayer[uid] = { delta, detail };
      if (credit > 0) {
        credits.push(this.env.DB.prepare(
          'UPDATE wallets SET chips = chips + ?, updated_at = ? WHERE user_id = ?'
        ).bind(credit, now, uid));
      }
    }

    if (credits.length) await this.env.DB.batch(credits);
    g.dealer_cash += dealerDelta;
    g.results[day.day_idx] = { outcomes, players: perPlayer, dealer_delta: dealerDelta };
    g.phase = 'revealed';

    /* 动态墙：房间名义的汇总行 + 每个有 agent 档案的参与者一行（agent_name 署名） */
    const feedRows = [
      this.env.DB.prepare(
        'INSERT INTO feed (ts, user_id, name, avatar, kind, text_zh, text_en) VALUES (?, ?, ?, ?, ?, ?, ?)'
      ).bind(
        now, 'room:main', '真人房', '🎪', 'room',
        `🎪 真人房 第 ${day.day_idx} 天揭晓：${participants} 人下注，庄家 ${fmtSigned(dealerDelta)}`,
        `🎪 Live Room day ${day.day_idx} revealed: ${participants} player(s) bet, dealer ${fmtSigned(dealerDelta)}`
      ),
    ];
    const betUids = Object.keys(perPlayer).filter((uid) => Object.keys(perPlayer[uid].detail).length);
    if (betUids.length) {
      try {
        const rs = await this.env.DB.prepare(
          `SELECT user_id, agent_name FROM agent_profiles WHERE user_id IN (${betUids.map(() => '?').join(',')})`
        ).bind(...betUids).all();
        for (const row of (rs.results || [])) {
          if (!row.agent_name) continue;
          const p = g.players[row.user_id];
          const d = perPlayer[row.user_id].delta;
          const verdictZh = d > 0 ? `赢了 ${fmtSigned(d)}` : d < 0 ? `输了 ${fmtSigned(d)}` : '打平 ±0';
          const verdictEn = d > 0 ? `won ${fmtSigned(d)}` : d < 0 ? `lost ${fmtSigned(d)}` : 'broke even';
          feedRows.push(this.env.DB.prepare(
            'INSERT INTO feed (ts, user_id, name, avatar, kind, text_zh, text_en) VALUES (?, ?, ?, ?, ?, ?, ?)'
          ).bind(
            now, row.user_id, p.name, p.avatar, 'room',
            `${p.avatar} ${p.name} 的 agent〈${row.agent_name}〉在真人房第 ${day.day_idx} 天${verdictZh}`,
            `${p.avatar} ${p.name}'s agent "${row.agent_name}" ${verdictEn} on day ${day.day_idx} in the Live Room`
          ));
        }
      } catch (e) {
        console.log(JSON.stringify({ t: 'room_feed_error', err: String(e) })); // 署名行失败不阻塞结算
      }
    }
    await this.env.DB.batch(feedRows);
  }

  /* ---------- 广播 ---------- */

  stateSnapshot() {
    const g = this._game;
    const day = this.curDay();
    const betting = g.phase === 'betting';
    const online = this.presentUids(); // WS 连接中 ∪ MCP 最近活跃

    /* betting 阶段绝不下发 outcome/exit——answer 保密到揭晓那一刻 */
    const questions = (day ? day.ideas : []).map((i) => {
      const q = {
        id: i.id, ticker: i.ticker, question: i.question, price: i.price,
        reason: i.reason, mood: i.mood, horizon: i.horizon,
        ref_close: i.ref_close, ref_date: i.ref_date,
      };
      if (!betting) {
        q.outcome = i.outcome;
        q.exit_close = i.exit_close;
        q.exit_date = i.exit_date;
        q.move_pct = i.move_pct;
      }
      return q;
    });

    const players = {};
    for (const [uid, p] of Object.entries(g.players)) {
      players[uid] = {
        name: p.name, avatar: p.avatar, ready: !!p.ready,
        online: online.has(uid), pnl: p.pnl | 0, bets: p.bets,
      };
    }

    return {
      t: 'state',
      phase: g.phase,
      day_num: g.day_pos + 1,
      days_total: this._days.length,
      day_idx: day ? day.day_idx : null,
      date: day ? day.date : null,
      dealer_cash: g.dealer_cash,
      duel_stake: g.duel_stake,
      stake_tiers: STAKE_TIERS,
      questions,
      players,
      result: g.phase !== 'betting' && day ? (g.results[day.day_idx] || null) : null,
      ended: g.phase === 'ended'
        ? {
          standings: Object.entries(g.players)
            .map(([uid, p]) => ({ uid, name: p.name, avatar: p.avatar, pnl: p.pnl | 0 }))
            .sort((a, b) => b.pnl - a.pnl),
          dealer_cash: g.dealer_cash,
        }
        : null,
    };
  }

  broadcast() {
    if (!this._game || !this._days) return;
    const payload = JSON.stringify(this.stateSnapshot());
    for (const ws of this.state.getWebSockets()) {
      try { ws.send(payload); } catch { /* 死连接下次自己关 */ }
    }
  }

  err(ws, code) {
    try { ws.send(JSON.stringify({ t: 'err', code })); } catch { /* noop */ }
  }
}
