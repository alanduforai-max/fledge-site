#!/bin/zsh
# fledge-monopoly → fledgetradelab.com 自动部署看门
# launchd 每 10 分钟跑一次：main 有新提交且工作区干净 → pull → 两条产物线 → wrangler deploy。
#   老线 /monopoly/  ：五件套原样 cp（双轨保留至 Phase 4 301 切换后删除）
#   新线 /play/      ：web/ 里的 EventStreet（Vite+React）build 后 cp
# build 只在 Alan 机（launchd 宿主）发生，Jack 机不需要 node。
# 日志: /tmp/fledge-monopoly-autodeploy.log
set -euo pipefail
export PATH="/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin"

MONO=/Users/alandu/Claude/Projects/fledge-monopoly
SITE=/Users/alandu/Claude/Projects/fledge-site
LOG=/tmp/fledge-monopoly-autodeploy.log

ts() { date "+%F %T"; }

cd "$MONO"
# 工作区不干净（本机正在开发）就跳过，绝不覆盖本地改动
if [[ -n "$(git status --porcelain)" ]]; then
  echo "$(ts) skip: working tree dirty" >> "$LOG"; exit 0
fi
git fetch -q origin main
LOCAL=$(git rev-parse main)
REMOTE=$(git rev-parse origin/main)
[[ "$LOCAL" == "$REMOTE" ]] && exit 0

echo "$(ts) new commits: ${LOCAL:0:7} -> ${REMOTE:0:7}, deploying" >> "$LOG"
git merge -q --ff-only origin/main

# ---- 老线：/monopoly/ 五件套 ----
cp index.html plaza.html book.js "$SITE/dist-site/monopoly/"
for f in room.js room_arena.js; do
  [[ -f "$f" ]] && cp "$f" "$SITE/dist-site/monopoly/"
done

# ---- 新线：/play/ EventStreet ----
# build 失败绝不阻断老线部署 —— /monopoly 是当前唯一线上入口，不能被新 app 拖死。
if [[ -f "$MONO/web/package.json" ]]; then
  if (cd "$MONO/web" && npm ci --no-audit --no-fund && npm run build) >> "$LOG" 2>&1; then
    rm -rf "$SITE/dist-site/play"
    mkdir -p "$SITE/dist-site/play"
    cp -R "$MONO/web/dist/". "$SITE/dist-site/play/"
    echo "$(ts) play build ok" >> "$LOG"
  else
    echo "$(ts) ERROR: play build failed — 保留上一版 /play/，老线照常部署" >> "$LOG"
  fi
fi

cd "$SITE"
npx wrangler deploy >> "$LOG" 2>&1
if [[ -n "$(git status --porcelain dist-site)" ]]; then
  git add dist-site
  git commit -q -m "Auto-sync /monopoly/ + /play/ to fledge-monopoly ${REMOTE:0:7}" || true
  git push -q || echo "$(ts) warn: site push failed (deploy 已完成)" >> "$LOG"
fi
echo "$(ts) deployed ${REMOTE:0:7}" >> "$LOG"
