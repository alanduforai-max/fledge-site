#!/bin/zsh
# fledge-monopoly → fledgetradelab.com/play/ 自动部署看门
# launchd 每 10 分钟跑一次：main 有新提交且工作区干净 → pull → build → wrangler deploy。
# 2026-08-20 全量切换完成：老线 /monopoly/ 已退役（worker 里 301 到 /play/），
# 这里只发 EventStreet 一条线。build 只在 Alan 机（launchd 宿主）发生，Jack 机不需要 node。
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

# ---- /play/ EventStreet ----
# build 失败就保留上一版产物、照常 deploy —— 半个 dist 比旧的一版更糟。
if [[ -f "$MONO/web/package.json" ]]; then
  if (cd "$MONO/web" && npm ci --no-audit --no-fund && npm run build) >> "$LOG" 2>&1; then
    rm -rf "$SITE/dist-site/play"
    mkdir -p "$SITE/dist-site/play/data"
    cp -R "$MONO/web/dist/". "$SITE/dist-site/play/"
    # 三个数据文件也发一份到 /play/data/ —— 前端从这儿 fetch，
    # 这样 Phase 4 把 /monopoly/* 301 掉之后新 app 不受影响。
    for f in book.js room.js room_arena.js; do
      [[ -f "$MONO/$f" ]] && cp "$MONO/$f" "$SITE/dist-site/play/data/"
    done
    echo "$(ts) play build ok" >> "$LOG"
  else
    echo "$(ts) ERROR: play build failed — 保留上一版 /play/" >> "$LOG"
  fi
fi

cd "$SITE"
npx wrangler deploy >> "$LOG" 2>&1
if [[ -n "$(git status --porcelain dist-site)" ]]; then
  git add dist-site
  git commit -q -m "Auto-sync /play/ to fledge-monopoly ${REMOTE:0:7}" || true
  git push -q || echo "$(ts) warn: site push failed (deploy 已完成)" >> "$LOG"
fi
echo "$(ts) deployed ${REMOTE:0:7}" >> "$LOG"
