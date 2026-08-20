-- fledge-play D1 schema · 0001_init
-- apply:  npx wrangler d1 migrations apply fledge-play --remote
-- local:  npx wrangler d1 execute fledge-play --local --file migrations/0001_init.sql

CREATE TABLE IF NOT EXISTS users (
  id           TEXT PRIMARY KEY,
  email        TEXT UNIQUE,
  name         TEXT,
  avatar_emoji TEXT DEFAULT '🐯',
  google_sub   TEXT UNIQUE,
  created_at   INTEGER
);

CREATE TABLE IF NOT EXISTS wallets (
  user_id    TEXT PRIMARY KEY REFERENCES users(id),
  chips      INTEGER DEFAULT 1000,
  imported   INTEGER DEFAULT 0,
  updated_at INTEGER
);

CREATE TABLE IF NOT EXISTS email_codes (
  email      TEXT PRIMARY KEY,
  code       TEXT,
  expires_at INTEGER,
  tries      INTEGER DEFAULT 0
);

-- 个人 API token（MCP 接入用）：只存 SHA-256(token) 的 hex，明文生成时返回一次
CREATE TABLE IF NOT EXISTS tokens (
  token_hash   TEXT PRIMARY KEY,
  user_id      TEXT NOT NULL REFERENCES users(id),
  created_at   INTEGER,
  last_used_at INTEGER
);

-- agent 策略人格（与游戏内「捏 Agent」模板同构；traits = JSON 文本）
CREATE TABLE IF NOT EXISTS agent_profiles (
  user_id    TEXT PRIMARY KEY REFERENCES users(id),
  agent_name TEXT,
  preset     TEXT,     -- 'value' | 'hunter' | 'yolo' | 'custom'
  strategy   TEXT,     -- 自由 prompt，≤2000 字符
  traits     TEXT,     -- JSON: {kelly:0-1, edge_bar:0-0.15, duel_appetite:0-1, contrarian:-1..1}
  updated_at INTEGER
);

CREATE TABLE IF NOT EXISTS feed (
  id      INTEGER PRIMARY KEY AUTOINCREMENT,
  ts      INTEGER,
  user_id TEXT,
  name    TEXT,
  avatar  TEXT,
  kind    TEXT,
  text_zh TEXT,
  text_en TEXT
);

-- leaderboard reads: ORDER BY chips DESC
CREATE INDEX IF NOT EXISTS idx_wallets_chips ON wallets(chips DESC);
-- token rotate: delete-by-user
CREATE INDEX IF NOT EXISTS idx_tokens_user ON tokens(user_id);
-- feed reads: ORDER BY id DESC (PK already covers), ts kept for display only
