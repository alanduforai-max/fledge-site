/* ================================================================
   fledge-site · 公开站的路由 worker（纯 JS module worker，无构建步骤）
   —— 静态站行为完全不变：assets.run_worker_first 只把 /api/* 和 /mcp 引到
      这里，其余路径 assets 先行；asset 未命中落回 worker 时原样转给 ASSETS。

   2026-08-22：事件街（Fledge Play）后端整体退役并删除 —— 账号系统、钱包、
   动态墙、排行榜、个人 token、PlayRoom 真人房 DO、以及那套 11 工具的 MCP，
   连同 D1 `fledge-play` 一起下线。玩法全部搬到 AgentFloor
   （floor.fledgetradelab.com，独立 worker + 独立 D1）。这里只剩两件事：

     1. 老路径 301 —— /monopoly/** · /play/** · /floor** → AgentFloor 首页
     2. /mcp 410 —— 明确告诉还指着这个地址的 MCP 客户端搬去哪儿

   删除前 D1 已导出备份（4 个账号：两个测试地址 + Alan + 一位外部试用者）。
   要复活的话：备份里有 users/wallets/tokens/agent_profiles/feed 全量。
   历史实现见 git 历史（本文件 08-22 之前的版本）与 legacy/ 里的前端。
   ================================================================ */

const MCP_CORS = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'POST, OPTIONS',
  'access-control-allow-headers': 'content-type, authorization',
};

const AGENTFLOOR = 'https://floor.fledgetradelab.com/';

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const path = url.pathname;

    /* 事件街 MCP 已退役（2026-08-21 停服，08-22 删干净）→ AgentFloor。
       不静默 404，也不继续端上一套坏掉的工具：明确指路。 */
    if (path === '/mcp' || path === '/mcp/') {
      if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers: MCP_CORS });
      return new Response(JSON.stringify({
        error: 'moved',
        message: 'Fledge Play (事件街) has been retired and replaced by AgentFloor. '
          + 'Point your MCP client at https://floor.fledgetradelab.com/mcp and get a new token at '
          + 'https://floor.fledgetradelab.com/me',
        new_url: 'https://floor.fledgetradelab.com/mcp',
      }), { status: 410, headers: { 'content-type': 'application/json', ...MCP_CORS } });
    }

    /* 老 API 面已经不存在了。给个明确的 410 而不是让 asset 兜底成 404 ——
       万一还有谁的脚本在打，看到的是"搬走了"而不是"路径写错了"。 */
    if (path.startsWith('/api/')) {
      return new Response(JSON.stringify({ error: 'gone', new_url: AGENTFLOOR }),
        { status: 410, headers: { 'content-type': 'application/json' } });
    }

    /* 两代老路径一律 301 到 AgentFloor：
         /monopoly/**  第一代大富翁        （2026-08-20 起先转 /play/）
         /play/**      EventStreet 事件街  （2026-08-21 退役）
         /floor        照顾「/floor」这个说法，落到子域上
       必须在 asset 查找之前拦下来。深链接（/play/m/abc 这种）也一并收进来，
       直接送到新站首页而不是死在 404 上。 */
    if (path === '/monopoly' || path.startsWith('/monopoly/')
      || path === '/play' || path.startsWith('/play/')
      || path === '/floor' || path.startsWith('/floor/')) {
      return Response.redirect(AGENTFLOOR, 301);
    }

    if (!env.ASSETS) return new Response('not found', { status: 404 });
    return env.ASSETS.fetch(request);
  },
};
