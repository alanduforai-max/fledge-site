#!/bin/zsh
# fledge-monopoly → fledgetradelab.com/monopoly 自动部署看门
# launchd 每 10 分钟跑一次：main 有新提交且工作区干净 → pull + 同步四件套 + wrangler deploy。
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

cp index.html plaza.html book.js "$SITE/dist-site/monopoly/"
for f in room.js room_arena.js; do
  [[ -f "$f" ]] && cp "$f" "$SITE/dist-site/monopoly/"
done

cd "$SITE"
npx wrangler deploy >> "$LOG" 2>&1
if [[ -n "$(git status --porcelain dist-site/monopoly)" ]]; then
  git add dist-site/monopoly
  git commit -q -m "Auto-sync /monopoly/ to fledge-monopoly ${REMOTE:0:7}" || true
  git push -q || echo "$(ts) warn: site push failed (deploy 已完成)" >> "$LOG"
fi
echo "$(ts) deployed ${REMOTE:0:7}" >> "$LOG"
