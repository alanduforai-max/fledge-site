window.DUNGEON_COVID_2020 = {
 "dungeon_id": "covid_2020",
 "name": "2020 熔断",
 "name_en": "The COVID Crash",
 "generated_for": "2026-08-20T14:16:56",
 "start_hidden": "2020-03",
 "resolved_from": "live",
 "n_stages": 5,
 "ended_early": null,
 "burst": {
  "label": "熔断",
  "label_en": "Circuit Breaker",
  "note": "走到这里，交易所把闸拉了 —— 这一关之后没有下一关。停牌那一刻你手上剩什么，就是这一局的成绩。",
  "note_en": "This is where the exchange pulls the switch — there is no stage after this one. Whatever you are holding when trading halts is what the run is worth.",
  "rule": "熔断不看日历，看你已经挺过几关、以及题目本身有多疯。熔断那一关就是本局终局。庄家被闲家打穿的话，本局也会提前结束。",
  "rule_en": "The halt is not on a calendar. It builds from how many stages you have survived and how crazy the events themselves are. The stage it hits is the last stage. If the dealer gets busted by the table first, the run also ends early."
 },
 "config": {
  "dealer_initial_cash": 10000,
  "player_initial_cash": 2000,
  "bankrupt_pct": 0.5,
  "dealer_min_stake": 1000,
  "player_min_stake": 200,
  "duel_cap": 2000
 },
 "dealer": {
  "id": "covid_2020-dealer",
  "name": "熔断时代的庄家",
  "emoji": "🦠",
  "start_cash": 10000.0,
  "cash": 11578.8,
  "bankrupt_day": null,
  "theme": "疫情崩盘与复苏 · 2020-2021",
  "theme_en": "Crash and melt-up · 2020-2021",
  "name_en": "The Circuit-Breaker Dealer"
 },
 "players": [
  {
   "id": "p03",
   "name": "杠精本精",
   "emoji": "🦂",
   "start_cash": 2000.0,
   "cash": 2749.05,
   "bankrupt_day": null,
   "return_pct": 0.3745,
   "name_en": "Pure Contrarian"
  },
  {
   "id": "p06",
   "name": "反骨仔",
   "emoji": "🐊",
   "start_cash": 2000.0,
   "cash": 2578.01,
   "bankrupt_day": null,
   "return_pct": 0.289,
   "name_en": "Contrarian Kid"
  },
  {
   "id": "p04",
   "name": "空军司令",
   "emoji": "🦇",
   "start_cash": 2000.0,
   "cash": 2338.07,
   "bankrupt_day": null,
   "return_pct": 0.169,
   "name_en": "Bear Commander"
  },
  {
   "id": "p01",
   "name": "快钱阿飞",
   "emoji": "🐆",
   "start_cash": 2000.0,
   "cash": 1912.79,
   "bankrupt_day": null,
   "return_pct": -0.0436,
   "name_en": "Fast-Money Flip"
  },
  {
   "id": "p02",
   "name": "稳字诀",
   "emoji": "🐘",
   "start_cash": 2000.0,
   "cash": 925.79,
   "bankrupt_day": 4,
   "return_pct": -0.5371,
   "name_en": "Steady Hand"
  },
  {
   "id": "p05",
   "name": "佛系躺赢",
   "emoji": "🐌",
   "start_cash": 2000.0,
   "cash": 760.0,
   "bankrupt_day": 4,
   "return_pct": -0.62,
   "name_en": "Zen Coaster"
  }
 ],
 "days": [
  {
   "day_idx": 1,
   "date": "2020-03-02",
   "ideas": [
    {
     "id": "2020-03-oil-price-war",
     "ticker": "USO",
     "company": "United States Oil Fund",
     "headline": "OPEC+ 谈崩，沙特选择在需求崩塌的时候打价格战",
     "question": "需求塌了、供给还要加，你猜这只跟踪原油期货的基金接下来怎么走？",
     "reason": "跌到这个位置，产油国自己也扛不住，快反弹了。",
     "mood": "恐慌",
     "price": 0.42,
     "holding_days": 4,
     "hype": 0.7,
     "lead_context": {
      "months": 3,
      "from": 97.12,
      "to": 79.36,
      "pct": -0.1829,
      "week_pct": -0.0764
     },
     "background": "OPEC+ 减产谈判破裂，沙特当即宣布增产并大幅下调官方售价。需求已经因为封城塌了一半，供给这时候还要往上加——原油单日跌幅创下 1991 年海湾战争以来最大。",
     "resolved_from": "live",
     "ref_close": 79.36,
     "ref_date": "2020-03-02",
     "outcome": "NO",
     "exit_close": 69.84,
     "exit_date": "2020-03-06",
     "move_pct": -0.12,
     "chart": [
      {
       "date": "2019-12-03",
       "open": 93.36,
       "high": 94.88,
       "low": 92.72,
       "close": 94.08,
       "volume": 23323679.0
      },
      {
       "date": "2019-12-04",
       "open": 96.48,
       "high": 98.0,
       "low": 96.4,
       "close": 97.52,
       "volume": 29361689.0
      },
      {
       "date": "2019-12-05",
       "open": 98.48,
       "high": 98.8,
       "low": 97.16,
       "close": 97.52,
       "volume": 23780145.0
      },
      {
       "date": "2019-12-06",
       "open": 97.04,
       "high": 99.96,
       "low": 96.96,
       "close": 98.56,
       "volume": 21012280.0
      },
      {
       "date": "2019-12-09",
       "open": 98.0,
       "high": 99.0,
       "low": 98.0,
       "close": 98.64,
       "volume": 12695296.0
      },
      {
       "date": "2019-12-10",
       "open": 98.48,
       "high": 99.44,
       "low": 98.16,
       "close": 99.12,
       "volume": 10271484.0
      },
      {
       "date": "2019-12-11",
       "open": 98.64,
       "high": 98.92,
       "low": 97.12,
       "close": 98.4,
       "volume": 15304123.0
      },
      {
       "date": "2019-12-12",
       "open": 98.4,
       "high": 99.76,
       "low": 98.4,
       "close": 98.96,
       "volume": 22300004.0
      },
      {
       "date": "2019-12-13",
       "open": 99.28,
       "high": 101.04,
       "low": 99.12,
       "close": 99.92,
       "volume": 17101076.0
      },
      {
       "date": "2019-12-16",
       "open": 100.64,
       "high": 100.944,
       "low": 100.48,
       "close": 100.72,
       "volume": 6412995.0
      },
      {
       "date": "2019-12-17",
       "open": 101.2,
       "high": 102.08,
       "low": 101.2,
       "close": 101.76,
       "volume": 11952552.0
      },
      {
       "date": "2019-12-18",
       "open": 101.28,
       "high": 102.3168,
       "low": 100.96,
       "close": 101.92,
       "volume": 11866691.0
      },
      {
       "date": "2019-12-19",
       "open": 102.0,
       "high": 102.8,
       "low": 101.6832,
       "close": 102.24,
       "volume": 7675599.0
      },
      {
       "date": "2019-12-20",
       "open": 101.76,
       "high": 101.76,
       "low": 100.48,
       "close": 101.04,
       "volume": 11434745.0
      },
      {
       "date": "2019-12-23",
       "open": 100.88,
       "high": 101.76,
       "low": 100.72,
       "close": 101.6,
       "volume": 7452837.0
      },
      {
       "date": "2019-12-24",
       "open": 101.84,
       "high": 102.32,
       "low": 101.8,
       "close": 102.16,
       "volume": 3453938.0
      },
      {
       "date": "2019-12-26",
       "open": 102.56,
       "high": 103.52,
       "low": 102.56,
       "close": 103.12,
       "volume": 6987104.0
      },
      {
       "date": "2019-12-27",
       "open": 103.36,
       "high": 103.68,
       "low": 102.56,
       "close": 103.28,
       "volume": 9103937.0
      },
      {
       "date": "2019-12-30",
       "open": 104.08,
       "high": 104.16,
       "low": 102.32,
       "close": 103.12,
       "volume": 8971671.0
      },
      {
       "date": "2019-12-31",
       "open": 101.68,
       "high": 103.64,
       "low": 101.52,
       "close": 102.48,
       "volume": 11605266.0
      },
      {
       "date": "2020-01-02",
       "open": 102.4,
       "high": 102.8,
       "low": 101.6,
       "close": 102.48,
       "volume": 12508063.0
      },
      {
       "date": "2020-01-03",
       "open": 106.16,
       "high": 106.5304,
       "low": 104.24,
       "close": 105.44,
       "volume": 34600043.0
      },
      {
       "date": "2020-01-06",
       "open": 106.4,
       "high": 106.56,
       "low": 104.96,
       "close": 105.28,
       "volume": 20786307.0
      },
      {
       "date": "2020-01-07",
       "open": 104.72,
       "high": 105.44,
       "low": 104.08,
       "close": 105.04,
       "volume": 13938313.0
      },
      {
       "date": "2020-01-08",
       "open": 104.48,
       "high": 104.56,
       "low": 99.12,
       "close": 101.28,
       "volume": 55311363.0
      },
      {
       "date": "2020-01-09",
       "open": 99.6,
       "high": 100.32,
       "low": 98.32,
       "close": 99.92,
       "volume": 27515630.0
      },
      {
       "date": "2020-01-10",
       "open": 99.44,
       "high": 99.84,
       "low": 98.68,
       "close": 99.28,
       "volume": 16133995.0
      },
      {
       "date": "2020-01-13",
       "open": 98.48,
       "high": 98.48,
       "low": 97.28,
       "close": 97.6,
       "volume": 22865070.0
      },
      {
       "date": "2020-01-14",
       "open": 98.16,
       "high": 98.56,
       "low": 97.6,
       "close": 98.24,
       "volume": 18692609.0
      },
      {
       "date": "2020-01-15",
       "open": 97.6,
       "high": 97.76,
       "low": 96.4,
       "close": 97.44,
       "volume": 15049858.0
      },
      {
       "date": "2020-01-16",
       "open": 97.6,
       "high": 98.84,
       "low": 97.56,
       "close": 98.32,
       "volume": 15675608.0
      },
      {
       "date": "2020-01-17",
       "open": 98.64,
       "high": 98.96,
       "low": 97.92,
       "close": 98.64,
       "volume": 17740192.0
      },
      {
       "date": "2020-01-21",
       "open": 97.76,
       "high": 98.72,
       "low": 97.68,
       "close": 97.92,
       "volume": 13626814.0
      },
      {
       "date": "2020-01-22",
       "open": 96.24,
       "high": 96.32,
       "low": 95.0,
       "close": 95.2,
       "volume": 25503372.0
      },
      {
       "date": "2020-01-23",
       "open": 92.8,
       "high": 93.68,
       "low": 92.0,
       "close": 93.28,
       "volume": 30855327.0
      },
      {
       "date": "2020-01-24",
       "open": 91.92,
       "high": 92.0,
       "low": 90.48,
       "close": 91.44,
       "volume": 24405961.0
      },
      {
       "date": "2020-01-27",
       "open": 88.88,
       "high": 89.92,
       "low": 88.16,
       "close": 88.8,
       "volume": 25127224.0
      },
      {
       "date": "2020-01-28",
       "open": 89.28,
       "high": 90.56,
       "low": 88.8912,
       "close": 90.0,
       "volume": 24252841.0
      },
      {
       "date": "2020-01-29",
       "open": 90.24,
       "high": 90.28,
       "low": 88.72,
       "close": 89.28,
       "volume": 21763788.0
      },
      {
       "date": "2020-01-30",
       "open": 87.44,
       "high": 88.72,
       "low": 86.8,
       "close": 88.64,
       "volume": 29460947.0
      },
      {
       "date": "2020-01-31",
       "open": 87.04,
       "high": 87.84,
       "low": 85.6,
       "close": 86.72,
       "volume": 32402858.0
      },
      {
       "date": "2020-02-03",
       "open": 85.96,
       "high": 86.6816,
       "low": 83.84,
       "close": 83.92,
       "volume": 40379978.0
      },
      {
       "date": "2020-02-04",
       "open": 85.44,
       "high": 85.6,
       "low": 83.2,
       "close": 83.52,
       "volume": 41450656.0
      },
      {
       "date": "2020-02-05",
       "open": 86.0,
       "high": 87.12,
       "low": 84.72,
       "close": 85.6,
       "volume": 40689398.0
      },
      {
       "date": "2020-02-06",
       "open": 85.12,
       "high": 86.16,
       "low": 84.4,
       "close": 85.92,
       "volume": 25757911.0
      },
      {
       "date": "2020-02-07",
       "open": 84.8,
       "high": 85.76,
       "low": 84.28,
       "close": 84.64,
       "volume": 20886028.0
      },
      {
       "date": "2020-02-10",
       "open": 83.84,
       "high": 84.48,
       "low": 83.04,
       "close": 83.36,
       "volume": 22463381.0
      },
      {
       "date": "2020-02-11",
       "open": 85.04,
       "high": 85.12,
       "low": 83.6,
       "close": 84.0,
       "volume": 24893377.0
      },
      {
       "date": "2020-02-12",
       "open": 86.56,
       "high": 86.88,
       "low": 85.68,
       "close": 86.48,
       "volume": 31173616.0
      },
      {
       "date": "2020-02-13",
       "open": 86.56,
       "high": 87.2,
       "low": 86.0,
       "close": 86.72,
       "volume": 28850868.0
      },
      {
       "date": "2020-02-14",
       "open": 87.68,
       "high": 87.92,
       "low": 86.72,
       "close": 87.6,
       "volume": 24440137.0
      },
      {
       "date": "2020-02-18",
       "open": 86.08,
       "high": 87.6,
       "low": 86.0,
       "close": 87.6,
       "volume": 21410868.0
      },
      {
       "date": "2020-02-19",
       "open": 89.04,
       "high": 89.84,
       "low": 88.16,
       "close": 89.44,
       "volume": 24901454.0
      },
      {
       "date": "2020-02-20",
       "open": 90.48,
       "high": 91.4,
       "low": 89.96,
       "close": 90.24,
       "volume": 27337825.0
      },
      {
       "date": "2020-02-21",
       "open": 88.64,
       "high": 89.64,
       "low": 87.92,
       "close": 89.28,
       "volume": 27045151.0
      },
      {
       "date": "2020-02-24",
       "open": 85.04,
       "high": 86.44,
       "low": 84.4,
       "close": 85.92,
       "volume": 37405292.0
      },
      {
       "date": "2020-02-25",
       "open": 86.08,
       "high": 86.2,
       "low": 83.2,
       "close": 83.2,
       "volume": 32959049.0
      },
      {
       "date": "2020-02-26",
       "open": 83.04,
       "high": 84.4,
       "low": 80.84,
       "close": 81.52,
       "volume": 39308780.0
      },
      {
       "date": "2020-02-27",
       "open": 77.76,
       "high": 79.92,
       "low": 76.8,
       "close": 78.24,
       "volume": 49202699.0
      },
      {
       "date": "2020-02-28",
       "open": 75.36,
       "high": 76.0,
       "low": 73.36,
       "close": 75.6,
       "volume": 42984807.0
      },
      {
       "date": "2020-03-02",
       "open": 77.36,
       "high": 79.36,
       "low": 76.32,
       "close": 79.36,
       "volume": 41149239.0
      },
      {
       "date": "2020-03-03",
       "open": 80.0,
       "high": 81.4,
       "low": 77.7864,
       "close": 79.12,
       "volume": 51017249.0
      },
      {
       "date": "2020-03-04",
       "open": 80.84,
       "high": 81.04,
       "low": 78.08,
       "close": 78.88,
       "volume": 46330548.0
      },
      {
       "date": "2020-03-05",
       "open": 78.48,
       "high": 78.8,
       "low": 76.4,
       "close": 76.88,
       "volume": 33091682.0
      },
      {
       "date": "2020-03-06",
       "open": 73.92,
       "high": 74.16,
       "low": 68.8,
       "close": 69.84,
       "volume": 78231674.0
      }
     ],
     "npc_bets": [
      {
       "player_id": "p01",
       "action": "反",
       "stake": 240,
       "side_price": 0.58,
       "result": {
        "won": true,
        "payout": 413.79
       }
      },
      {
       "player_id": "p02",
       "action": "跟",
       "stake": 240,
       "side_price": 0.42,
       "result": {
        "won": false,
        "payout": 0.0
       }
      },
      {
       "player_id": "p03",
       "action": "跟",
       "stake": 240,
       "side_price": 0.42,
       "result": {
        "won": false,
        "payout": 0.0
       }
      },
      {
       "player_id": "p04",
       "action": "对赌",
       "stake": 1000,
       "side_price": 0.58,
       "result": {
        "won": true,
        "dealer_delta": -724.14
       }
      },
      {
       "player_id": "p06",
       "action": "反",
       "stake": 240,
       "side_price": 0.58,
       "result": {
        "won": true,
        "payout": 413.79
       }
      }
     ],
     "commission": {
      "pool": 480.0,
      "rate": 0.0,
      "paid": -0.0
     },
     "is_burst": false,
     "q_en": "Demand collapsed and supply is still going up — you think how this crude futures tracking fund trades next?",
     "reason_en": "At these levels even oil producers can't take it, should bounce soon.",
     "mood_en": "Panic",
     "headline_en": "OPEC+ talks collapsed, Saudi Arabia chose a price war when demand was already tanking.",
     "background_en": "OPEC+ production cut talks collapsed, Saudi Arabia immediately announced increased production and sharply cut official pricing. Demand already halved from lockdowns, and supply is going up anyway — crude fell its biggest single day since the 1991 Gulf War."
    }
   ],
   "dealer_cash_after": 9275.86
  },
  {
   "day_idx": 2,
   "date": "2020-03-06",
   "ideas": [
    {
     "id": "2020-03-first-circuit-breaker",
     "ticker": "SPY",
     "company": "SPDR S&P 500 ETF",
     "headline": "标普开盘跌破 7%，二十三年来第一次触发全市场熔断",
     "question": "停牌十五分钟之后重新开盘，你猜这一段是止跌还是接着跌？",
     "reason": "熔断本来就是给市场喘口气用的，喘完该弹了。",
     "mood": "恐慌",
     "price": 0.45,
     "holding_days": 6,
     "hype": 0.8,
     "lead_context": {
      "months": 3,
      "from": 282.35,
      "to": 270.98,
      "pct": -0.0403,
      "week_pct": 0.0041
     },
     "background": "开盘跌破 7%，交易所层面的熔断机制被触发——这套机制 1997 年后就没真正用过。接下来的两周它还会再被触发三次。",
     "resolved_from": "live",
     "ref_close": 270.9797,
     "ref_date": "2020-03-06",
     "outcome": "NO",
     "exit_close": 226.0229,
     "exit_date": "2020-03-12",
     "move_pct": -0.1659,
     "chart": [
      {
       "date": "2019-12-09",
       "open": 285.0527,
       "high": 285.7236,
       "low": 284.4725,
       "close": 284.5451,
       "volume": 34788380.0
      },
      {
       "date": "2019-12-10",
       "open": 284.4907,
       "high": 285.1524,
       "low": 283.5751,
       "close": 284.2278,
       "volume": 52609340.0
      },
      {
       "date": "2019-12-11",
       "open": 284.681,
       "high": 285.2884,
       "low": 284.1462,
       "close": 285.0346,
       "volume": 46889653.0
      },
      {
       "date": "2019-12-12",
       "open": 285.0437,
       "high": 288.2709,
       "low": 284.808,
       "close": 287.4913,
       "volume": 96035635.0
      },
      {
       "date": "2019-12-13",
       "open": 287.2556,
       "high": 288.8874,
       "low": 286.4851,
       "close": 287.6636,
       "volume": 81489263.0
      },
      {
       "date": "2019-12-16",
       "open": 289.386,
       "high": 290.2291,
       "low": 287.6001,
       "close": 289.6398,
       "volume": 82723814.0
      },
      {
       "date": "2019-12-17",
       "open": 290.0206,
       "high": 290.3197,
       "low": 289.6217,
       "close": 289.7033,
       "volume": 61062693.0
      },
      {
       "date": "2019-12-18",
       "open": 290.0931,
       "high": 290.3197,
       "low": 289.667,
       "close": 289.7214,
       "volume": 48721894.0
      },
      {
       "date": "2019-12-19",
       "open": 289.9118,
       "high": 290.9815,
       "low": 289.6579,
       "close": 290.909,
       "volume": 85248597.0
      },
      {
       "date": "2019-12-20",
       "open": 291.9322,
       "high": 293.3077,
       "low": 290.9574,
       "close": 292.1781,
       "volume": 149214080.0
      },
      {
       "date": "2019-12-23",
       "open": 292.9616,
       "high": 293.0162,
       "low": 292.4788,
       "close": 292.6245,
       "volume": 52980805.0
      },
      {
       "date": "2019-12-24",
       "open": 292.8523,
       "high": 292.8978,
       "low": 292.333,
       "close": 292.6336,
       "volume": 20270007.0
      },
      {
       "date": "2019-12-26",
       "open": 293.0162,
       "high": 294.2005,
       "low": 293.0071,
       "close": 294.1914,
       "volume": 30854382.0
      },
      {
       "date": "2019-12-27",
       "open": 294.9202,
       "high": 294.9748,
       "low": 293.5901,
       "close": 294.1185,
       "volume": 42523486.0
      },
      {
       "date": "2019-12-30",
       "open": 294.2005,
       "high": 294.3372,
       "low": 292.0142,
       "close": 292.497,
       "volume": 49652827.0
      },
      {
       "date": "2019-12-31",
       "open": 291.9959,
       "high": 293.4535,
       "low": 291.6498,
       "close": 293.2075,
       "volume": 57059907.0
      },
      {
       "date": "2020-01-02",
       "open": 294.738,
       "high": 295.9678,
       "low": 293.8179,
       "close": 295.9496,
       "volume": 59037072.0
      },
      {
       "date": "2020-01-03",
       "open": 292.5699,
       "high": 294.8291,
       "low": 292.5152,
       "close": 293.7086,
       "volume": 77708081.0
      },
      {
       "date": "2020-01-06",
       "open": 291.9595,
       "high": 294.9111,
       "low": 291.8411,
       "close": 294.8291,
       "volume": 55596982.0
      },
      {
       "date": "2020-01-07",
       "open": 294.2643,
       "high": 294.738,
       "low": 293.5537,
       "close": 294.0001,
       "volume": 40461249.0
      },
      {
       "date": "2020-01-08",
       "open": 294.1914,
       "high": 296.7786,
       "low": 293.9454,
       "close": 295.567,
       "volume": 68177241.0
      },
      {
       "date": "2020-01-09",
       "open": 297.1247,
       "high": 297.644,
       "low": 296.5417,
       "close": 297.5711,
       "volume": 48421935.0
      },
      {
       "date": "2020-01-10",
       "open": 298.1542,
       "high": 298.309,
       "low": 296.2502,
       "close": 296.7148,
       "volume": 53028660.0
      },
      {
       "date": "2020-01-13",
       "open": 297.3343,
       "high": 298.7645,
       "low": 296.9061,
       "close": 298.7554,
       "volume": 47026115.0
      },
      {
       "date": "2020-01-14",
       "open": 298.3181,
       "high": 299.3658,
       "low": 297.7442,
       "close": 298.2999,
       "volume": 62784185.0
      },
      {
       "date": "2020-01-15",
       "open": 298.2088,
       "high": 299.7301,
       "low": 298.1268,
       "close": 298.974,
       "volume": 71870739.0
      },
      {
       "date": "2020-01-16",
       "open": 300.3496,
       "high": 301.461,
       "low": 300.1219,
       "close": 301.461,
       "volume": 53788867.0
      },
      {
       "date": "2020-01-17",
       "open": 302.1716,
       "high": 302.6088,
       "low": 301.3972,
       "close": 302.3993,
       "volume": 95778839.0
      },
      {
       "date": "2020-01-21",
       "open": 301.4428,
       "high": 302.6088,
       "low": 301.3699,
       "close": 301.8072,
       "volume": 77624157.0
      },
      {
       "date": "2020-01-22",
       "open": 302.6635,
       "high": 303.3103,
       "low": 301.6887,
       "close": 301.8436,
       "volume": 48705035.0
      },
      {
       "date": "2020-01-23",
       "open": 301.1968,
       "high": 302.5997,
       "low": 300.0854,
       "close": 302.1898,
       "volume": 51828259.0
      },
      {
       "date": "2020-01-24",
       "open": 302.8457,
       "high": 302.9277,
       "low": 298.2179,
       "close": 299.5024,
       "volume": 87465785.0
      },
      {
       "date": "2020-01-27",
       "open": 294.2734,
       "high": 296.1773,
       "low": 293.9363,
       "close": 294.7015,
       "volume": 83797934.0
      },
      {
       "date": "2020-01-28",
       "open": 296.1227,
       "high": 298.6643,
       "low": 294.7926,
       "close": 297.7898,
       "volume": 63519891.0
      },
      {
       "date": "2020-01-29",
       "open": 299.1471,
       "high": 299.3749,
       "low": 297.3434,
       "close": 297.5438,
       "volume": 53714641.0
      },
      {
       "date": "2020-01-30",
       "open": 295.485,
       "high": 298.719,
       "low": 294.738,
       "close": 298.5094,
       "volume": 75184385.0
      },
      {
       "date": "2020-01-31",
       "open": 297.89,
       "high": 298.0448,
       "low": 292.1781,
       "close": 293.0891,
       "volume": 113659402.0
      },
      {
       "date": "2020-02-03",
       "open": 294.5649,
       "high": 297.1247,
       "low": 294.4465,
       "close": 295.2663,
       "volume": 68931216.0
      },
      {
       "date": "2020-02-04",
       "open": 298.8647,
       "high": 300.632,
       "low": 298.5459,
       "close": 299.7666,
       "volume": 61704740.0
      },
      {
       "date": "2020-02-05",
       "open": 302.6908,
       "high": 303.4378,
       "low": 301.2333,
       "close": 303.2283,
       "volume": 64864742.0
      },
      {
       "date": "2020-02-06",
       "open": 304.1848,
       "high": 304.4399,
       "low": 303.1736,
       "close": 304.2486,
       "volume": 49982975.0
      },
      {
       "date": "2020-02-07",
       "open": 303.1919,
       "high": 304.2577,
       "low": 302.0805,
       "close": 302.6271,
       "volume": 64074382.0
      },
      {
       "date": "2020-02-10",
       "open": 301.7434,
       "high": 304.9501,
       "low": 301.707,
       "close": 304.8863,
       "volume": 41779456.0
      },
      {
       "date": "2020-02-11",
       "open": 306.2345,
       "high": 307.018,
       "low": 304.8863,
       "close": 305.4147,
       "volume": 54773045.0
      },
      {
       "date": "2020-02-12",
       "open": 306.8449,
       "high": 307.5919,
       "low": 306.4805,
       "close": 307.3824,
       "volume": 42844434.0
      },
      {
       "date": "2020-02-13",
       "open": 305.9612,
       "high": 308.02,
       "low": 305.6879,
       "close": 307.0544,
       "volume": 54038002.0
      },
      {
       "date": "2020-02-14",
       "open": 307.4644,
       "high": 307.6648,
       "low": 306.271,
       "close": 307.5463,
       "volume": 64518123.0
      },
      {
       "date": "2020-02-18",
       "open": 306.5534,
       "high": 307.6101,
       "low": 305.3691,
       "close": 306.7538,
       "volume": 57195407.0
      },
      {
       "date": "2020-02-19",
       "open": 307.7194,
       "high": 308.8946,
       "low": 307.437,
       "close": 308.2205,
       "volume": 48587393.0
      },
      {
       "date": "2020-02-20",
       "open": 307.6739,
       "high": 308.4938,
       "low": 303.9753,
       "close": 306.9542,
       "volume": 73891268.0
      },
      {
       "date": "2020-02-21",
       "open": 305.606,
       "high": 305.9157,
       "low": 302.9732,
       "close": 303.7931,
       "volume": 113656552.0
      },
      {
       "date": "2020-02-24",
       "open": 294.3736,
       "high": 303.866,
       "low": 292.6427,
       "close": 293.7177,
       "volume": 160991237.0
      },
      {
       "date": "2020-02-25",
       "open": 295.1024,
       "high": 295.7127,
       "low": 283.9429,
       "close": 284.8174,
       "volume": 217564684.0
      },
      {
       "date": "2020-02-26",
       "open": 286.2112,
       "high": 289.7914,
       "low": 283.041,
       "close": 283.7698,
       "volume": 192818004.0
      },
      {
       "date": "2020-02-27",
       "open": 278.2675,
       "high": 283.8245,
       "low": 271.0252,
       "close": 271.0252,
       "volume": 282544492.0
      },
      {
       "date": "2020-02-28",
       "open": 262.9995,
       "high": 271.3714,
       "low": 260.1208,
       "close": 269.8865,
       "volume": 384911854.0
      },
      {
       "date": "2020-03-02",
       "open": 271.6629,
       "high": 281.6381,
       "low": 268.2467,
       "close": 281.5743,
       "volume": 237377617.0
      },
      {
       "date": "2020-03-03",
       "open": 281.9478,
       "high": 285.9015,
       "low": 271.0799,
       "close": 273.5122,
       "volume": 298851919.0
      },
      {
       "date": "2020-03-04",
       "open": 278.8687,
       "high": 285.2274,
       "low": 276.3271,
       "close": 285.0087,
       "volume": 175893889.0
      },
      {
       "date": "2020-03-05",
       "open": 277.8302,
       "high": 281.0095,
       "low": 273.3027,
       "close": 275.5346,
       "volume": 185533970.0
      },
      {
       "date": "2020-03-06",
       "open": 267.0533,
       "high": 272.1822,
       "low": 264.3933,
       "close": 270.9797,
       "volume": 228315219.0
      },
      {
       "date": "2020-03-09",
       "open": 250.7924,
       "high": 258.891,
       "low": 249.1071,
       "close": 249.8176,
       "volume": 305980554.0
      },
      {
       "date": "2020-03-10",
       "open": 259.3009,
       "high": 262.8355,
       "low": 249.1526,
       "close": 262.7444,
       "volume": 274894230.0
      },
      {
       "date": "2020-03-11",
       "open": 255.7117,
       "high": 256.8413,
       "low": 246.7659,
       "close": 249.9361,
       "volume": 254604444.0
      },
      {
       "date": "2020-03-12",
       "open": 233.2105,
       "high": 242.9215,
       "low": 225.6312,
       "close": 226.0229,
       "volume": 389612072.0
      }
     ],
     "npc_bets": [
      {
       "player_id": "p01",
       "action": "跟",
       "stake": 261,
       "side_price": 0.45,
       "result": {
        "won": false,
        "payout": 0.0
       }
      },
      {
       "player_id": "p05",
       "action": "跟",
       "stake": 240,
       "side_price": 0.45,
       "result": {
        "won": false,
        "payout": 0.0
       }
      },
      {
       "player_id": "p06",
       "action": "反",
       "stake": 261,
       "side_price": 0.55,
       "result": {
        "won": true,
        "payout": 474.55
       }
      }
     ],
     "commission": {
      "pool": 501.0,
      "rate": 0.0,
      "paid": -0.0
     },
     "is_burst": false,
     "q_en": "After a 15-minute trading halt and reopening, you think this stretch stops the bleeding or keeps falling?",
     "reason_en": "Circuit breakers are supposed to let the market catch its breath, then it should bounce.",
     "mood_en": "Panic",
     "headline_en": "S&P 500 opens down over 7%, first market-wide circuit breaker in 23 years.",
     "background_en": "Opening down over 7%, the exchange-level circuit breaker triggered — this mechanism hasn't actually been used since 1997. Over the next two weeks it triggers three more times."
    }
   ],
   "dealer_cash_after": 9275.86
  },
  {
   "day_idx": 3,
   "date": "2020-03-12",
   "ideas": [
    {
     "id": "2020-03-pandemic-declared",
     "ticker": "SPY",
     "company": "SPDR S&P 500 ETF",
     "headline": "WHO 宣布大流行，NBA 停摆，市场迎来 1987 年以来最惨单日",
     "question": "一天跌掉近 10% 之后，你猜下一段是继续找底还是开始反弹？",
     "reason": "恐慌到这个程度，通常离底不远了。",
     "mood": "恐慌",
     "price": 0.44,
     "holding_days": 7,
     "hype": 0.85,
     "lead_context": {
      "months": 3,
      "from": 284.23,
      "to": 226.02,
      "pct": -0.2048,
      "week_pct": -0.1797
     },
     "background": "WHO 正式宣布大流行，同一周美国宣布对欧洲旅行禁令、NBA 停摆、汤姆·汉克斯确诊。3 月 12 日标普单日跌幅创下 1987 年黑色星期一以来之最。",
     "resolved_from": "live",
     "ref_close": 226.0229,
     "ref_date": "2020-03-12",
     "outcome": "NO",
     "exit_close": 219.0994,
     "exit_date": "2020-03-19",
     "move_pct": -0.0306,
     "chart": [
      {
       "date": "2019-12-13",
       "open": 287.2556,
       "high": 288.8874,
       "low": 286.4851,
       "close": 287.6636,
       "volume": 81489263.0
      },
      {
       "date": "2019-12-16",
       "open": 289.386,
       "high": 290.2291,
       "low": 287.6001,
       "close": 289.6398,
       "volume": 82723814.0
      },
      {
       "date": "2019-12-17",
       "open": 290.0206,
       "high": 290.3197,
       "low": 289.6217,
       "close": 289.7033,
       "volume": 61062693.0
      },
      {
       "date": "2019-12-18",
       "open": 290.0931,
       "high": 290.3197,
       "low": 289.667,
       "close": 289.7214,
       "volume": 48721894.0
      },
      {
       "date": "2019-12-19",
       "open": 289.9118,
       "high": 290.9815,
       "low": 289.6579,
       "close": 290.909,
       "volume": 85248597.0
      },
      {
       "date": "2019-12-20",
       "open": 291.9322,
       "high": 293.3077,
       "low": 290.9574,
       "close": 292.1781,
       "volume": 149214080.0
      },
      {
       "date": "2019-12-23",
       "open": 292.9616,
       "high": 293.0162,
       "low": 292.4788,
       "close": 292.6245,
       "volume": 52980805.0
      },
      {
       "date": "2019-12-24",
       "open": 292.8523,
       "high": 292.8978,
       "low": 292.333,
       "close": 292.6336,
       "volume": 20270007.0
      },
      {
       "date": "2019-12-26",
       "open": 293.0162,
       "high": 294.2005,
       "low": 293.0071,
       "close": 294.1914,
       "volume": 30854382.0
      },
      {
       "date": "2019-12-27",
       "open": 294.9202,
       "high": 294.9748,
       "low": 293.5901,
       "close": 294.1185,
       "volume": 42523486.0
      },
      {
       "date": "2019-12-30",
       "open": 294.2005,
       "high": 294.3372,
       "low": 292.0142,
       "close": 292.497,
       "volume": 49652827.0
      },
      {
       "date": "2019-12-31",
       "open": 291.9959,
       "high": 293.4535,
       "low": 291.6498,
       "close": 293.2075,
       "volume": 57059907.0
      },
      {
       "date": "2020-01-02",
       "open": 294.738,
       "high": 295.9678,
       "low": 293.8179,
       "close": 295.9496,
       "volume": 59037072.0
      },
      {
       "date": "2020-01-03",
       "open": 292.5699,
       "high": 294.8291,
       "low": 292.5152,
       "close": 293.7086,
       "volume": 77708081.0
      },
      {
       "date": "2020-01-06",
       "open": 291.9595,
       "high": 294.9111,
       "low": 291.8411,
       "close": 294.8291,
       "volume": 55596982.0
      },
      {
       "date": "2020-01-07",
       "open": 294.2643,
       "high": 294.738,
       "low": 293.5537,
       "close": 294.0001,
       "volume": 40461249.0
      },
      {
       "date": "2020-01-08",
       "open": 294.1914,
       "high": 296.7786,
       "low": 293.9454,
       "close": 295.567,
       "volume": 68177241.0
      },
      {
       "date": "2020-01-09",
       "open": 297.1247,
       "high": 297.644,
       "low": 296.5417,
       "close": 297.5711,
       "volume": 48421935.0
      },
      {
       "date": "2020-01-10",
       "open": 298.1542,
       "high": 298.309,
       "low": 296.2502,
       "close": 296.7148,
       "volume": 53028660.0
      },
      {
       "date": "2020-01-13",
       "open": 297.3343,
       "high": 298.7645,
       "low": 296.9061,
       "close": 298.7554,
       "volume": 47026115.0
      },
      {
       "date": "2020-01-14",
       "open": 298.3181,
       "high": 299.3658,
       "low": 297.7442,
       "close": 298.2999,
       "volume": 62784185.0
      },
      {
       "date": "2020-01-15",
       "open": 298.2088,
       "high": 299.7301,
       "low": 298.1268,
       "close": 298.974,
       "volume": 71870739.0
      },
      {
       "date": "2020-01-16",
       "open": 300.3496,
       "high": 301.461,
       "low": 300.1219,
       "close": 301.461,
       "volume": 53788867.0
      },
      {
       "date": "2020-01-17",
       "open": 302.1716,
       "high": 302.6088,
       "low": 301.3972,
       "close": 302.3993,
       "volume": 95778839.0
      },
      {
       "date": "2020-01-21",
       "open": 301.4428,
       "high": 302.6088,
       "low": 301.3699,
       "close": 301.8072,
       "volume": 77624157.0
      },
      {
       "date": "2020-01-22",
       "open": 302.6635,
       "high": 303.3103,
       "low": 301.6887,
       "close": 301.8436,
       "volume": 48705035.0
      },
      {
       "date": "2020-01-23",
       "open": 301.1968,
       "high": 302.5997,
       "low": 300.0854,
       "close": 302.1898,
       "volume": 51828259.0
      },
      {
       "date": "2020-01-24",
       "open": 302.8457,
       "high": 302.9277,
       "low": 298.2179,
       "close": 299.5024,
       "volume": 87465785.0
      },
      {
       "date": "2020-01-27",
       "open": 294.2734,
       "high": 296.1773,
       "low": 293.9363,
       "close": 294.7015,
       "volume": 83797934.0
      },
      {
       "date": "2020-01-28",
       "open": 296.1227,
       "high": 298.6643,
       "low": 294.7926,
       "close": 297.7898,
       "volume": 63519891.0
      },
      {
       "date": "2020-01-29",
       "open": 299.1471,
       "high": 299.3749,
       "low": 297.3434,
       "close": 297.5438,
       "volume": 53714641.0
      },
      {
       "date": "2020-01-30",
       "open": 295.485,
       "high": 298.719,
       "low": 294.738,
       "close": 298.5094,
       "volume": 75184385.0
      },
      {
       "date": "2020-01-31",
       "open": 297.89,
       "high": 298.0448,
       "low": 292.1781,
       "close": 293.0891,
       "volume": 113659402.0
      },
      {
       "date": "2020-02-03",
       "open": 294.5649,
       "high": 297.1247,
       "low": 294.4465,
       "close": 295.2663,
       "volume": 68931216.0
      },
      {
       "date": "2020-02-04",
       "open": 298.8647,
       "high": 300.632,
       "low": 298.5459,
       "close": 299.7666,
       "volume": 61704740.0
      },
      {
       "date": "2020-02-05",
       "open": 302.6908,
       "high": 303.4378,
       "low": 301.2333,
       "close": 303.2283,
       "volume": 64864742.0
      },
      {
       "date": "2020-02-06",
       "open": 304.1848,
       "high": 304.4399,
       "low": 303.1736,
       "close": 304.2486,
       "volume": 49982975.0
      },
      {
       "date": "2020-02-07",
       "open": 303.1919,
       "high": 304.2577,
       "low": 302.0805,
       "close": 302.6271,
       "volume": 64074382.0
      },
      {
       "date": "2020-02-10",
       "open": 301.7434,
       "high": 304.9501,
       "low": 301.707,
       "close": 304.8863,
       "volume": 41779456.0
      },
      {
       "date": "2020-02-11",
       "open": 306.2345,
       "high": 307.018,
       "low": 304.8863,
       "close": 305.4147,
       "volume": 54773045.0
      },
      {
       "date": "2020-02-12",
       "open": 306.8449,
       "high": 307.5919,
       "low": 306.4805,
       "close": 307.3824,
       "volume": 42844434.0
      },
      {
       "date": "2020-02-13",
       "open": 305.9612,
       "high": 308.02,
       "low": 305.6879,
       "close": 307.0544,
       "volume": 54038002.0
      },
      {
       "date": "2020-02-14",
       "open": 307.4644,
       "high": 307.6648,
       "low": 306.271,
       "close": 307.5463,
       "volume": 64518123.0
      },
      {
       "date": "2020-02-18",
       "open": 306.5534,
       "high": 307.6101,
       "low": 305.3691,
       "close": 306.7538,
       "volume": 57195407.0
      },
      {
       "date": "2020-02-19",
       "open": 307.7194,
       "high": 308.8946,
       "low": 307.437,
       "close": 308.2205,
       "volume": 48587393.0
      },
      {
       "date": "2020-02-20",
       "open": 307.6739,
       "high": 308.4938,
       "low": 303.9753,
       "close": 306.9542,
       "volume": 73891268.0
      },
      {
       "date": "2020-02-21",
       "open": 305.606,
       "high": 305.9157,
       "low": 302.9732,
       "close": 303.7931,
       "volume": 113656552.0
      },
      {
       "date": "2020-02-24",
       "open": 294.3736,
       "high": 303.866,
       "low": 292.6427,
       "close": 293.7177,
       "volume": 160991237.0
      },
      {
       "date": "2020-02-25",
       "open": 295.1024,
       "high": 295.7127,
       "low": 283.9429,
       "close": 284.8174,
       "volume": 217564684.0
      },
      {
       "date": "2020-02-26",
       "open": 286.2112,
       "high": 289.7914,
       "low": 283.041,
       "close": 283.7698,
       "volume": 192818004.0
      },
      {
       "date": "2020-02-27",
       "open": 278.2675,
       "high": 283.8245,
       "low": 271.0252,
       "close": 271.0252,
       "volume": 282544492.0
      },
      {
       "date": "2020-02-28",
       "open": 262.9995,
       "high": 271.3714,
       "low": 260.1208,
       "close": 269.8865,
       "volume": 384911854.0
      },
      {
       "date": "2020-03-02",
       "open": 271.6629,
       "high": 281.6381,
       "low": 268.2467,
       "close": 281.5743,
       "volume": 237377617.0
      },
      {
       "date": "2020-03-03",
       "open": 281.9478,
       "high": 285.9015,
       "low": 271.0799,
       "close": 273.5122,
       "volume": 298851919.0
      },
      {
       "date": "2020-03-04",
       "open": 278.8687,
       "high": 285.2274,
       "low": 276.3271,
       "close": 285.0087,
       "volume": 175893889.0
      },
      {
       "date": "2020-03-05",
       "open": 277.8302,
       "high": 281.0095,
       "low": 273.3027,
       "close": 275.5346,
       "volume": 185533970.0
      },
      {
       "date": "2020-03-06",
       "open": 267.0533,
       "high": 272.1822,
       "low": 264.3933,
       "close": 270.9797,
       "volume": 228315219.0
      },
      {
       "date": "2020-03-09",
       "open": 250.7924,
       "high": 258.891,
       "low": 249.1071,
       "close": 249.8176,
       "volume": 305980554.0
      },
      {
       "date": "2020-03-10",
       "open": 259.3009,
       "high": 262.8355,
       "low": 249.1526,
       "close": 262.7444,
       "volume": 274894230.0
      },
      {
       "date": "2020-03-11",
       "open": 255.7117,
       "high": 256.8413,
       "low": 246.7659,
       "close": 249.9361,
       "volume": 254604444.0
      },
      {
       "date": "2020-03-12",
       "open": 233.2105,
       "high": 242.9215,
       "low": 225.6312,
       "close": 226.0229,
       "volume": 389612072.0
      },
      {
       "date": "2020-03-13",
       "open": 239.6693,
       "high": 247.3124,
       "low": 226.3964,
       "close": 245.3447,
       "volume": 326142197.0
      },
      {
       "date": "2020-03-16",
       "open": 219.7098,
       "high": 234.0304,
       "low": 216.2299,
       "close": 218.4982,
       "volume": 295019288.0
      },
      {
       "date": "2020-03-17",
       "open": 223.2262,
       "high": 233.3654,
       "low": 215.9657,
       "close": 230.2954,
       "volume": 260566279.0
      },
      {
       "date": "2020-03-18",
       "open": 215.2187,
       "high": 226.2597,
       "low": 207.7213,
       "close": 218.6348,
       "volume": 324845381.0
      },
      {
       "date": "2020-03-19",
       "open": 217.9516,
       "high": 225.3579,
       "low": 211.5474,
       "close": 219.0994,
       "volume": 288124389.0
      }
     ],
     "npc_bets": [
      {
       "player_id": "p02",
       "action": "反",
       "stake": 211,
       "side_price": 0.56,
       "result": {
        "won": true,
        "payout": 376.79
       }
      },
      {
       "player_id": "p03",
       "action": "对赌",
       "stake": 1000,
       "side_price": 0.56,
       "result": {
        "won": true,
        "dealer_delta": -785.71
       }
      },
      {
       "player_id": "p04",
       "action": "反",
       "stake": 327,
       "side_price": 0.56,
       "result": {
        "won": true,
        "payout": 583.93
       }
      }
     ],
     "commission": {
      "pool": 0.0,
      "rate": 0.0,
      "paid": 0.0
     },
     "is_burst": false,
     "q_en": "After dropping nearly 10% in a day, you think the next leg finds the bottom or starts bouncing?",
     "reason_en": "When panic gets this extreme, you're usually not far from the bottom.",
     "mood_en": "Panic",
     "headline_en": "WHO declares pandemic, NBA suspends, market sees its worst single day since 1987.",
     "background_en": "WHO officially declares a pandemic; that same week the US announces travel ban on Europe, NBA suspends play, Tom Hanks tests positive. On March 12 the S&P 500's single-day drop is the worst since Black Monday 1987."
    }
   ],
   "dealer_cash_after": 8490.15
  },
  {
   "day_idx": 4,
   "date": "2020-03-19",
   "ideas": [
    {
     "id": "2020-03-fed-to-zero",
     "ticker": "TLT",
     "company": "iShares 20+ Year Treasury Bond ETF",
     "headline": "美联储周日晚紧急降息到零，外加 7000 亿量化宽松",
     "question": "央行把子弹一次性打完，你猜长债这段时间是涨还是跌？",
     "reason": "降息利好长债，这是教科书。",
     "mood": "混乱",
     "price": 0.6,
     "holding_days": 6,
     "hype": 0.75,
     "lead_context": {
      "months": 3,
      "from": 112.76,
      "to": 122.09,
      "pct": 0.0827,
      "week_pct": -0.0585
     },
     "background": "美联储在周日晚上紧急把利率砍到零，同时宣布 7000 亿美元的量化宽松。市场的反应不是感谢，而是「他们看到了什么我们没看到的东西」——周一开盘继续熔断。",
     "resolved_from": "live",
     "ref_close": 122.0875,
     "ref_date": "2020-03-19",
     "outcome": "YES",
     "exit_close": 133.8285,
     "exit_date": "2020-03-25",
     "move_pct": 0.0962,
     "chart": [
      {
       "date": "2019-12-20",
       "open": 111.7312,
       "high": 112.1909,
       "low": 111.5671,
       "close": 112.158,
       "volume": 5455919.0
      },
      {
       "date": "2019-12-23",
       "open": 112.2894,
       "high": 112.4207,
       "low": 111.6245,
       "close": 111.9939,
       "volume": 5175177.0
      },
      {
       "date": "2019-12-24",
       "open": 111.5589,
       "high": 112.4946,
       "low": 111.5343,
       "close": 112.314,
       "volume": 4667428.0
      },
      {
       "date": "2019-12-26",
       "open": 112.3714,
       "high": 112.6259,
       "low": 112.0431,
       "close": 112.5848,
       "volume": 5290981.0
      },
      {
       "date": "2019-12-27",
       "open": 112.8064,
       "high": 112.9624,
       "low": 112.6833,
       "close": 112.708,
       "volume": 7300695.0
      },
      {
       "date": "2019-12-30",
       "open": 111.5343,
       "high": 112.3632,
       "low": 111.3455,
       "close": 112.2976,
       "volume": 7979841.0
      },
      {
       "date": "2019-12-31",
       "open": 111.7969,
       "high": 112.0021,
       "low": 111.1157,
       "close": 111.1977,
       "volume": 10707518.0
      },
      {
       "date": "2020-01-02",
       "open": 112.273,
       "high": 112.8803,
       "low": 112.1745,
       "close": 112.4535,
       "volume": 11034459.0
      },
      {
       "date": "2020-01-03",
       "open": 113.4877,
       "high": 114.2182,
       "low": 113.1676,
       "close": 114.1853,
       "volume": 12366830.0
      },
      {
       "date": "2020-01-06",
       "open": 114.6532,
       "high": 114.6696,
       "low": 113.3892,
       "close": 113.5369,
       "volume": 11370199.0
      },
      {
       "date": "2020-01-07",
       "open": 113.4466,
       "high": 113.6518,
       "low": 112.9706,
       "close": 112.9788,
       "volume": 8456431.0
      },
      {
       "date": "2020-01-08",
       "open": 113.2086,
       "high": 113.5205,
       "low": 111.8872,
       "close": 112.2319,
       "volume": 10626391.0
      },
      {
       "date": "2020-01-09",
       "open": 111.6245,
       "high": 112.8064,
       "low": 111.5507,
       "close": 112.6259,
       "volume": 7412990.0
      },
      {
       "date": "2020-01-10",
       "open": 112.9952,
       "high": 113.6518,
       "low": 112.9624,
       "close": 113.6272,
       "volume": 8776937.0
      },
      {
       "date": "2020-01-13",
       "open": 113.1676,
       "high": 113.3399,
       "low": 112.7654,
       "close": 113.2825,
       "volume": 5965015.0
      },
      {
       "date": "2020-01-14",
       "open": 113.4138,
       "high": 113.9391,
       "low": 113.381,
       "close": 113.8652,
       "volume": 13921031.0
      },
      {
       "date": "2020-01-15",
       "open": 114.5136,
       "high": 114.7106,
       "low": 114.1033,
       "close": 114.6203,
       "volume": 6290520.0
      },
      {
       "date": "2020-01-16",
       "open": 114.3002,
       "high": 114.5219,
       "low": 113.8734,
       "close": 114.2592,
       "volume": 6798593.0
      },
      {
       "date": "2020-01-17",
       "open": 112.9214,
       "high": 113.381,
       "low": 112.7408,
       "close": 113.2825,
       "volume": 9693280.0
      },
      {
       "date": "2020-01-21",
       "open": 113.9309,
       "high": 114.6203,
       "low": 113.8981,
       "close": 114.4726,
       "volume": 6208953.0
      },
      {
       "date": "2020-01-22",
       "open": 114.6778,
       "high": 115.0225,
       "low": 114.5711,
       "close": 114.8748,
       "volume": 6317029.0
      },
      {
       "date": "2020-01-23",
       "open": 115.6053,
       "high": 116.0403,
       "low": 115.5478,
       "close": 115.6791,
       "volume": 9747418.0
      },
      {
       "date": "2020-01-24",
       "open": 116.0731,
       "high": 117.0006,
       "low": 115.9746,
       "close": 116.6148,
       "volume": 8584952.0
      },
      {
       "date": "2020-01-27",
       "open": 118.1497,
       "high": 118.4287,
       "low": 117.7803,
       "close": 118.4287,
       "volume": 10935243.0
      },
      {
       "date": "2020-01-28",
       "open": 118.1332,
       "high": 118.2646,
       "low": 117.2222,
       "close": 117.5012,
       "volume": 10612917.0
      },
      {
       "date": "2020-01-29",
       "open": 117.7311,
       "high": 118.7652,
       "low": 117.7229,
       "close": 118.6503,
       "volume": 9567654.0
      },
      {
       "date": "2020-01-30",
       "open": 118.9294,
       "high": 119.5614,
       "low": 118.4287,
       "close": 118.6667,
       "volume": 14711787.0
      },
      {
       "date": "2020-01-31",
       "open": 119.151,
       "high": 119.824,
       "low": 119.0853,
       "close": 119.7502,
       "volume": 14538096.0
      },
      {
       "date": "2020-02-03",
       "open": 119.1682,
       "high": 119.8341,
       "low": 118.4858,
       "close": 119.6533,
       "volume": 15310744.0
      },
      {
       "date": "2020-02-04",
       "open": 118.379,
       "high": 118.5023,
       "low": 117.6144,
       "close": 118.0419,
       "volume": 11388275.0
      },
      {
       "date": "2020-02-05",
       "open": 116.9896,
       "high": 117.3184,
       "low": 116.6607,
       "close": 116.7511,
       "volume": 10782161.0
      },
      {
       "date": "2020-02-06",
       "open": 116.8909,
       "high": 117.4664,
       "low": 116.7429,
       "close": 117.2773,
       "volume": 6683128.0
      },
      {
       "date": "2020-02-07",
       "open": 118.5681,
       "high": 118.9956,
       "low": 118.2803,
       "close": 118.7407,
       "volume": 11374834.0
      },
      {
       "date": "2020-02-10",
       "open": 119.2915,
       "high": 119.4149,
       "low": 118.9462,
       "close": 119.0696,
       "volume": 6699265.0
      },
      {
       "date": "2020-02-11",
       "open": 118.8722,
       "high": 118.9791,
       "low": 118.3379,
       "close": 118.4694,
       "volume": 7784102.0
      },
      {
       "date": "2020-02-12",
       "open": 117.8692,
       "high": 118.0172,
       "low": 117.5568,
       "close": 117.8692,
       "volume": 5595525.0
      },
      {
       "date": "2020-02-13",
       "open": 117.9268,
       "high": 118.5516,
       "low": 117.787,
       "close": 118.3214,
       "volume": 7883440.0
      },
      {
       "date": "2020-02-14",
       "open": 119.012,
       "high": 119.2751,
       "low": 118.7571,
       "close": 118.8394,
       "volume": 7137363.0
      },
      {
       "date": "2020-02-18",
       "open": 119.4888,
       "high": 120.0726,
       "low": 119.1436,
       "close": 119.6533,
       "volume": 6912053.0
      },
      {
       "date": "2020-02-19",
       "open": 119.308,
       "high": 119.719,
       "low": 119.1929,
       "close": 119.6451,
       "volume": 5707712.0
      },
      {
       "date": "2020-02-20",
       "open": 120.0972,
       "high": 120.8043,
       "low": 120.0315,
       "close": 120.5823,
       "volume": 9332916.0
      },
      {
       "date": "2020-02-21",
       "open": 121.5113,
       "high": 122.3992,
       "low": 121.388,
       "close": 121.7086,
       "volume": 13861573.0
      },
      {
       "date": "2020-02-24",
       "open": 124.0024,
       "high": 124.1092,
       "low": 123.32,
       "close": 123.5255,
       "volume": 15929281.0
      },
      {
       "date": "2020-02-25",
       "open": 123.4926,
       "high": 124.7669,
       "low": 123.4351,
       "close": 124.1832,
       "volume": 20802922.0
      },
      {
       "date": "2020-02-26",
       "open": 123.2789,
       "high": 124.7341,
       "low": 122.9747,
       "close": 123.5255,
       "volume": 22599515.0
      },
      {
       "date": "2020-02-27",
       "open": 125.5397,
       "high": 125.8522,
       "low": 124.0024,
       "close": 124.8656,
       "volume": 30687929.0
      },
      {
       "date": "2020-02-28",
       "open": 126.9785,
       "high": 128.2363,
       "low": 126.7401,
       "close": 127.6855,
       "volume": 45010774.0
      },
      {
       "date": "2020-03-02",
       "open": 127.8674,
       "high": 128.8555,
       "low": 126.5995,
       "close": 126.7477,
       "volume": 28152383.0
      },
      {
       "date": "2020-03-03",
       "open": 126.6406,
       "high": 131.4902,
       "low": 125.4468,
       "close": 128.7155,
       "volume": 38608024.0
      },
      {
       "date": "2020-03-04",
       "open": 128.7814,
       "high": 129.5553,
       "low": 126.9535,
       "close": 127.3487,
       "volume": 23463690.0
      },
      {
       "date": "2020-03-05",
       "open": 129.3742,
       "high": 130.7656,
       "low": 129.1107,
       "close": 130.5186,
       "volume": 17786220.0
      },
      {
       "date": "2020-03-06",
       "open": 137.7477,
       "high": 139.4191,
       "low": 135.1212,
       "close": 137.3113,
       "volume": 76288337.0
      },
      {
       "date": "2020-03-09",
       "open": 147.4633,
       "high": 147.9574,
       "low": 140.2507,
       "close": 141.0329,
       "volume": 41552819.0
      },
      {
       "date": "2020-03-10",
       "open": 139.6744,
       "high": 142.3832,
       "low": 133.4086,
       "close": 133.8038,
       "volume": 37728253.0
      },
      {
       "date": "2020-03-11",
       "open": 136.208,
       "high": 137.5254,
       "low": 128.1391,
       "close": 128.8802,
       "volume": 29594066.0
      },
      {
       "date": "2020-03-12",
       "open": 134.6272,
       "high": 136.9738,
       "low": 128.1638,
       "close": 129.6788,
       "volume": 24361836.0
      },
      {
       "date": "2020-03-13",
       "open": 127.6204,
       "high": 130.2552,
       "low": 125.3068,
       "close": 126.7477,
       "volume": 19812859.0
      },
      {
       "date": "2020-03-16",
       "open": 132.0501,
       "high": 136.8009,
       "low": 129.9341,
       "close": 134.9565,
       "volume": 30496696.0
      },
      {
       "date": "2020-03-17",
       "open": 134.619,
       "high": 136.3727,
       "low": 125.7349,
       "close": 125.9572,
       "volume": 18570872.0
      },
      {
       "date": "2020-03-18",
       "open": 125.842,
       "high": 126.9123,
       "low": 114.4549,
       "close": 118.8517,
       "volume": 44628796.0
      },
      {
       "date": "2020-03-19",
       "open": 120.9924,
       "high": 126.3442,
       "low": 119.5927,
       "close": 122.0875,
       "volume": 21175266.0
      },
      {
       "date": "2020-03-20",
       "open": 126.2207,
       "high": 131.2679,
       "low": 125.2409,
       "close": 131.2679,
       "volume": 20863060.0
      },
      {
       "date": "2020-03-23",
       "open": 129.6788,
       "high": 137.2455,
       "low": 128.9131,
       "close": 136.6774,
       "volume": 19971809.0
      },
      {
       "date": "2020-03-24",
       "open": 132.7664,
       "high": 136.2245,
       "low": 132.0748,
       "close": 134.1332,
       "volume": 11948557.0
      },
      {
       "date": "2020-03-25",
       "open": 134.6931,
       "high": 137.2372,
       "low": 133.071,
       "close": 133.8285,
       "volume": 10750564.0
      }
     ],
     "npc_bets": [
      {
       "player_id": "p02",
       "action": "对赌",
       "stake": 1000,
       "side_price": 0.4,
       "result": {
        "won": false,
        "dealer_delta": 1000
       }
      },
      {
       "player_id": "p03",
       "action": "跟",
       "stake": 305,
       "side_price": 0.6,
       "result": {
        "won": true,
        "payout": 508.33
       }
      },
      {
       "player_id": "p04",
       "action": "对赌",
       "stake": 1000,
       "side_price": 0.4,
       "result": {
        "won": false,
        "dealer_delta": 1000
       }
      },
      {
       "player_id": "p05",
       "action": "对赌",
       "stake": 1000,
       "side_price": 0.4,
       "result": {
        "won": false,
        "dealer_delta": 1000
       }
      },
      {
       "player_id": "p06",
       "action": "跟",
       "stake": 286,
       "side_price": 0.6,
       "result": {
        "won": true,
        "payout": 476.67
       }
      }
     ],
     "commission": {
      "pool": 591.0,
      "rate": 0.15,
      "paid": 88.65
     },
     "is_burst": false,
     "q_en": "The Fed fires all its bullets at once—do you think long bonds will rise or fall during this period?",
     "reason_en": "Rate cuts are bullish for long bonds, it's textbook.",
     "mood_en": "Chaos",
     "headline_en": "Fed emergency cuts rates to zero Sunday night, plus $700 billion quantitative easing.",
     "background_en": "The Federal Reserve emergency cuts rates to zero Sunday night, announcing $700 billion in quantitative easing. The market's reaction isn't gratitude but \"what did they see that we didn't\" — Monday opens with another circuit breaker."
    }
   ],
   "dealer_cash_after": 11578.8
  },
  {
   "day_idx": 5,
   "date": "2020-03-25",
   "ideas": [
    {
     "id": "2020-03-cruise-lines-halt",
     "ticker": "CCL",
     "company": "Carnival Corporation",
     "headline": "邮轮全面停航，而且被明确排除在美国救助方案之外",
     "question": "收入归零、救助无份，你猜这段时间市场怎么给它定价？",
     "reason": "船还在，品牌还在，跌成这样已经是清算价了。",
     "mood": "绝望",
     "price": 0.4,
     "holding_days": 462,
     "hype": 0.7,
     "lead_context": {
      "months": 3,
      "from": 49.87,
      "to": 15.31,
      "pct": -0.6931,
      "week_pct": 0.672
     },
     "background": "全球邮轮全面停航，且因为注册在巴拿马和利比里亚，美国的行业救助方案明确把邮轮公司排除在外。一家没有收入、又拿不到救助的重资产公司，账上现金能烧多久成了唯一的问题。",
     "resolved_from": "live",
     "ref_close": 15.3051,
     "ref_date": "2020-03-25",
     "outcome": "YES",
     "exit_close": 25.9448,
     "exit_date": "2021-06-30",
     "move_pct": 0.6952,
     "chart": [
      {
       "date": "2019-12-27",
       "open": 50.2162,
       "high": 50.333,
       "low": 49.7979,
       "close": 49.9341,
       "volume": 2093283.0
      },
      {
       "date": "2019-12-30",
       "open": 50.2357,
       "high": 50.2843,
       "low": 49.5547,
       "close": 49.6326,
       "volume": 2568524.0
      },
      {
       "date": "2019-12-31",
       "open": 49.6423,
       "high": 49.7396,
       "low": 49.3699,
       "close": 49.4477,
       "volume": 3130950.0
      },
      {
       "date": "2020-01-02",
       "open": 49.9536,
       "high": 50.2649,
       "low": 49.3504,
       "close": 49.9147,
       "volume": 4200997.0
      },
      {
       "date": "2020-01-03",
       "open": 48.6889,
       "high": 49.0294,
       "low": 48.222,
       "close": 48.5333,
       "volume": 4892328.0
      },
      {
       "date": "2020-01-06",
       "open": 48.008,
       "high": 48.0566,
       "low": 46.9573,
       "close": 47.0643,
       "volume": 6693927.0
      },
      {
       "date": "2020-01-07",
       "open": 46.8309,
       "high": 47.3465,
       "low": 46.8211,
       "close": 47.2103,
       "volume": 5748161.0
      },
      {
       "date": "2020-01-08",
       "open": 47.1811,
       "high": 47.6967,
       "low": 47.113,
       "close": 47.434,
       "volume": 5021358.0
      },
      {
       "date": "2020-01-09",
       "open": 47.8037,
       "high": 47.9496,
       "low": 47.5994,
       "close": 47.862,
       "volume": 2588897.0
      },
      {
       "date": "2020-01-10",
       "open": 47.9204,
       "high": 48.2317,
       "low": 47.4729,
       "close": 47.5216,
       "volume": 4362546.0
      },
      {
       "date": "2020-01-13",
       "open": 47.7648,
       "high": 48.2998,
       "low": 47.4924,
       "close": 48.0177,
       "volume": 4041739.0
      },
      {
       "date": "2020-01-14",
       "open": 48.0858,
       "high": 48.9127,
       "low": 48.0177,
       "close": 48.8446,
       "volume": 4406133.0
      },
      {
       "date": "2020-01-15",
       "open": 49.1364,
       "high": 49.5547,
       "low": 48.7376,
       "close": 49.0683,
       "volume": 3656045.0
      },
      {
       "date": "2020-01-16",
       "open": 49.2142,
       "high": 49.9633,
       "low": 49.0878,
       "close": 49.9536,
       "volume": 4772686.0
      },
      {
       "date": "2020-01-17",
       "open": 50.0509,
       "high": 50.5275,
       "low": 49.9147,
       "close": 50.4886,
       "volume": 6560212.0
      },
      {
       "date": "2020-01-21",
       "open": 49.9828,
       "high": 49.9828,
       "low": 48.9321,
       "close": 49.3115,
       "volume": 12094964.0
      },
      {
       "date": "2020-01-22",
       "open": 49.3018,
       "high": 49.652,
       "low": 48.3874,
       "close": 48.5236,
       "volume": 5107399.0
      },
      {
       "date": "2020-01-23",
       "open": 47.6967,
       "high": 48.2609,
       "low": 46.8211,
       "close": 48.1052,
       "volume": 6304993.0
      },
      {
       "date": "2020-01-24",
       "open": 47.8037,
       "high": 47.9593,
       "low": 45.8386,
       "close": 46.2277,
       "volume": 6470383.0
      },
      {
       "date": "2020-01-27",
       "open": 44.1654,
       "high": 44.8853,
       "low": 43.5136,
       "close": 44.0389,
       "volume": 8098022.0
      },
      {
       "date": "2020-01-28",
       "open": 44.5545,
       "high": 45.5857,
       "low": 44.1459,
       "close": 45.2355,
       "volume": 7154801.0
      },
      {
       "date": "2020-01-29",
       "open": 45.0993,
       "high": 45.6927,
       "low": 45.0117,
       "close": 45.2355,
       "volume": 3407193.0
      },
      {
       "date": "2020-01-30",
       "open": 42.57,
       "high": 44.5448,
       "low": 42.57,
       "close": 43.5331,
       "volume": 14853802.0
      },
      {
       "date": "2020-01-31",
       "open": 43.7665,
       "high": 43.9319,
       "low": 42.0349,
       "close": 42.3462,
       "volume": 11795354.0
      },
      {
       "date": "2020-02-03",
       "open": 42.5603,
       "high": 42.9105,
       "low": 40.9551,
       "close": 41.5874,
       "volume": 8335102.0
      },
      {
       "date": "2020-02-04",
       "open": 43.0175,
       "high": 43.2023,
       "low": 42.2003,
       "close": 42.3754,
       "volume": 6152586.0
      },
      {
       "date": "2020-02-05",
       "open": 43.1537,
       "high": 43.8152,
       "low": 42.7256,
       "close": 42.9396,
       "volume": 6671463.0
      },
      {
       "date": "2020-02-06",
       "open": 43.4163,
       "high": 43.6012,
       "low": 42.5505,
       "close": 42.5894,
       "volume": 4530607.0
      },
      {
       "date": "2020-02-07",
       "open": 41.8112,
       "high": 41.8598,
       "low": 40.8384,
       "close": 41.0524,
       "volume": 11246890.0
      },
      {
       "date": "2020-02-10",
       "open": 40.9357,
       "high": 41.247,
       "low": 40.5368,
       "close": 40.6438,
       "volume": 4824659.0
      },
      {
       "date": "2020-02-11",
       "open": 40.9649,
       "high": 42.1128,
       "low": 40.8968,
       "close": 41.782,
       "volume": 5805679.0
      },
      {
       "date": "2020-02-12",
       "open": 42.0544,
       "high": 43.2315,
       "low": 41.9085,
       "close": 42.8618,
       "volume": 6845076.0
      },
      {
       "date": "2020-02-13",
       "open": 42.0836,
       "high": 42.4143,
       "low": 41.5972,
       "close": 42.0252,
       "volume": 6661782.0
      },
      {
       "date": "2020-02-14",
       "open": 41.8987,
       "high": 41.9474,
       "low": 41.3442,
       "close": 41.4415,
       "volume": 3995905.0
      },
      {
       "date": "2020-02-18",
       "open": 41.4415,
       "high": 41.8015,
       "low": 41.3734,
       "close": 41.7528,
       "volume": 6245312.0
      },
      {
       "date": "2020-02-19",
       "open": 41.4026,
       "high": 42.2587,
       "low": 41.3734,
       "close": 42.1614,
       "volume": 4622499.0
      },
      {
       "date": "2020-02-20",
       "open": 41.9488,
       "high": 42.185,
       "low": 41.5255,
       "close": 41.8306,
       "volume": 5340218.0
      },
      {
       "date": "2020-02-21",
       "open": 41.4468,
       "high": 41.5255,
       "low": 40.994,
       "close": 41.0334,
       "volume": 8006963.0
      },
      {
       "date": "2020-02-24",
       "open": 38.7598,
       "high": 39.124,
       "low": 37.1653,
       "close": 37.1653,
       "volume": 15433153.0
      },
      {
       "date": "2020-02-25",
       "open": 37.4015,
       "high": 37.5098,
       "low": 35.1082,
       "close": 35.2755,
       "volume": 16149166.0
      },
      {
       "date": "2020-02-26",
       "open": 35.6003,
       "high": 35.62,
       "low": 31.87,
       "close": 32.6181,
       "volume": 23490494.0
      },
      {
       "date": "2020-02-27",
       "open": 32.1358,
       "high": 33.1692,
       "low": 29.7145,
       "close": 31.3484,
       "volume": 31481778.0
      },
      {
       "date": "2020-02-28",
       "open": 30.7381,
       "high": 32.9724,
       "low": 30.5708,
       "close": 32.933,
       "volume": 24854848.0
      },
      {
       "date": "2020-03-02",
       "open": 32.1948,
       "high": 32.5393,
       "low": 30.7578,
       "close": 32.5393,
       "volume": 19711292.0
      },
      {
       "date": "2020-03-03",
       "open": 32.5,
       "high": 32.8149,
       "low": 30.6692,
       "close": 31.3287,
       "volume": 19714472.0
      },
      {
       "date": "2020-03-04",
       "open": 31.7421,
       "high": 31.9488,
       "low": 30.4133,
       "close": 31.9488,
       "volume": 19494315.0
      },
      {
       "date": "2020-03-05",
       "open": 30.4232,
       "high": 30.4232,
       "low": 27.2145,
       "close": 27.4311,
       "volume": 33056604.0
      },
      {
       "date": "2020-03-06",
       "open": 26.4862,
       "high": 28.8385,
       "low": 25.6889,
       "close": 26.7224,
       "volume": 29694600.0
      },
      {
       "date": "2020-03-09",
       "open": 24.0551,
       "high": 24.3602,
       "low": 21.1712,
       "close": 21.3976,
       "volume": 33668701.0
      },
      {
       "date": "2020-03-10",
       "open": 23.1397,
       "high": 23.7992,
       "low": 19.8819,
       "close": 23.6417,
       "volume": 45416047.0
      },
      {
       "date": "2020-03-11",
       "open": 22.5295,
       "high": 23.3267,
       "low": 20.0886,
       "close": 21.4074,
       "volume": 38234589.0
      },
      {
       "date": "2020-03-12",
       "open": 17.6279,
       "high": 22.1456,
       "low": 14.4685,
       "close": 14.7342,
       "volume": 47701460.0
      },
      {
       "date": "2020-03-13",
       "open": 18.0512,
       "high": 18.1693,
       "low": 14.7736,
       "close": 17.3031,
       "volume": 55486986.0
      },
      {
       "date": "2020-03-16",
       "open": 14.813,
       "high": 17.6181,
       "low": 14.2716,
       "close": 14.3405,
       "volume": 50680785.0
      },
      {
       "date": "2020-03-17",
       "open": 14.5374,
       "high": 14.6555,
       "low": 11.8897,
       "close": 12.5098,
       "volume": 41551767.0
      },
      {
       "date": "2020-03-18",
       "open": 10.9842,
       "high": 11.3681,
       "low": 7.7756,
       "close": 9.1535,
       "volume": 69702661.0
      },
      {
       "date": "2020-03-19",
       "open": 8.9862,
       "high": 10.2362,
       "low": 8.4646,
       "close": 9.8425,
       "volume": 52549911.0
      },
      {
       "date": "2020-03-20",
       "open": 10.9153,
       "high": 13.5925,
       "low": 10.4331,
       "close": 11.811,
       "volume": 80012448.0
      },
      {
       "date": "2020-03-23",
       "open": 11.0925,
       "high": 12.2539,
       "low": 10.4429,
       "close": 11.811,
       "volume": 52361305.0
      },
      {
       "date": "2020-03-24",
       "open": 13.8386,
       "high": 16.4173,
       "low": 12.8937,
       "close": 13.4645,
       "volume": 64715137.0
      },
      {
       "date": "2020-03-25",
       "open": 14.813,
       "high": 16.8012,
       "low": 12.9134,
       "close": 15.3051,
       "volume": 77868838.0
      },
      {
       "date": "2020-03-26",
       "open": 15.2559,
       "high": 18.8386,
       "low": 14.813,
       "close": 17.5393,
       "volume": 97396096.0
      },
      {
       "date": "2020-03-27",
       "open": 15.748,
       "high": 15.9055,
       "low": 13.8287,
       "close": 14.1831,
       "volume": 64481734.0
      },
      {
       "date": "2020-03-30",
       "open": 13.2283,
       "high": 13.2579,
       "low": 11.5256,
       "close": 12.5984,
       "volume": 46110899.0
      },
      {
       "date": "2020-03-31",
       "open": 10.7775,
       "high": 14.3208,
       "low": 10.7775,
       "close": 12.9626,
       "volume": 112841719.0
      },
      {
       "date": "2020-04-01",
       "open": 12.4016,
       "high": 12.4114,
       "low": 8.4744,
       "close": 8.6614,
       "volume": 179262157.0
      },
      {
       "date": "2020-04-02",
       "open": 7.8838,
       "high": 8.3957,
       "low": 7.6772,
       "close": 7.8445,
       "volume": 261660751.0
      },
      {
       "date": "2020-04-03",
       "open": 8.1594,
       "high": 8.6023,
       "low": 7.8937,
       "close": 8.3563,
       "volume": 124136430.0
      },
      {
       "date": "2020-04-06",
       "open": 9.1338,
       "high": 10.7874,
       "low": 8.996,
       "close": 10.0492,
       "volume": 195184928.0
      },
      {
       "date": "2020-04-07",
       "open": 12.1555,
       "high": 12.746,
       "low": 10.876,
       "close": 11.122,
       "volume": 185108543.0
      },
      {
       "date": "2020-04-08",
       "open": 11.6732,
       "high": 11.998,
       "low": 11.1811,
       "close": 11.8012,
       "volume": 107421533.0
      },
      {
       "date": "2020-04-09",
       "open": 12.7067,
       "high": 13.5138,
       "low": 11.7323,
       "close": 12.2244,
       "volume": 144437173.0
      },
      {
       "date": "2020-04-13",
       "open": 11.5846,
       "high": 11.6338,
       "low": 10.7775,
       "close": 11.3189,
       "volume": 77185015.0
      },
      {
       "date": "2020-04-14",
       "open": 12.2638,
       "high": 12.9823,
       "low": 11.9783,
       "close": 12.313,
       "volume": 79412740.0
      },
      {
       "date": "2020-04-15",
       "open": 11.6929,
       "high": 12.2342,
       "low": 11.3878,
       "close": 12.185,
       "volume": 55626929.0
      },
      {
       "date": "2020-04-16",
       "open": 11.9488,
       "high": 12.0964,
       "low": 11.1909,
       "close": 11.6634,
       "volume": 56765448.0
      },
      {
       "date": "2020-04-17",
       "open": 12.5098,
       "high": 12.5689,
       "low": 12.0669,
       "close": 12.3622,
       "volume": 60476751.0
      },
      {
       "date": "2020-04-20",
       "open": 11.8897,
       "high": 12.3622,
       "low": 11.6732,
       "close": 12.0275,
       "volume": 41134451.0
      },
      {
       "date": "2020-04-21",
       "open": 11.6043,
       "high": 12.1063,
       "low": 11.437,
       "close": 11.6535,
       "volume": 40517322.0
      },
      {
       "date": "2020-04-22",
       "open": 11.8897,
       "high": 11.9882,
       "low": 11.2008,
       "close": 11.4567,
       "volume": 38539107.0
      },
      {
       "date": "2020-04-23",
       "open": 11.5059,
       "high": 12.1949,
       "low": 11.4665,
       "close": 11.9783,
       "volume": 46677338.0
      },
      {
       "date": "2020-04-24",
       "open": 12.0571,
       "high": 12.1555,
       "low": 11.437,
       "close": 11.7224,
       "volume": 39081590.0
      },
      {
       "date": "2020-04-27",
       "open": 11.8701,
       "high": 13.0413,
       "low": 11.811,
       "close": 12.7756,
       "volume": 54671980.0
      },
      {
       "date": "2020-04-28",
       "open": 13.7401,
       "high": 14.439,
       "low": 13.1594,
       "close": 14.2323,
       "volume": 90196656.0
      },
      {
       "date": "2020-04-29",
       "open": 15.5118,
       "high": 16.5649,
       "low": 15.3838,
       "close": 16.4271,
       "volume": 110436638.0
      },
      {
       "date": "2020-04-30",
       "open": 16.0039,
       "high": 16.4271,
       "low": 14.9409,
       "close": 15.6496,
       "volume": 87161498.0
      },
      {
       "date": "2020-05-01",
       "open": 14.6653,
       "high": 15.059,
       "low": 13.5138,
       "close": 13.7106,
       "volume": 63502862.0
      },
      {
       "date": "2020-05-04",
       "open": 12.9134,
       "high": 14.3504,
       "low": 12.5492,
       "close": 14.1142,
       "volume": 74522752.0
      },
      {
       "date": "2020-05-05",
       "open": 14.0256,
       "high": 14.6555,
       "low": 12.7264,
       "close": 12.8838,
       "volume": 89072857.0
      },
      {
       "date": "2020-05-06",
       "open": 13.2972,
       "high": 13.376,
       "low": 12.3819,
       "close": 12.6181,
       "volume": 50242292.0
      },
      {
       "date": "2020-05-07",
       "open": 12.7756,
       "high": 13.5236,
       "low": 12.7756,
       "close": 13.3169,
       "volume": 39498435.0
      },
      {
       "date": "2020-05-08",
       "open": 13.8484,
       "high": 14.1634,
       "low": 13.435,
       "close": 13.9862,
       "volume": 41456349.0
      },
      {
       "date": "2020-05-11",
       "open": 13.8484,
       "high": 14.0649,
       "low": 13.4252,
       "close": 13.6319,
       "volume": 36827073.0
      },
      {
       "date": "2020-05-12",
       "open": 13.8878,
       "high": 13.996,
       "low": 12.9527,
       "close": 12.9823,
       "volume": 35272071.0
      },
      {
       "date": "2020-05-13",
       "open": 12.7953,
       "high": 12.8051,
       "low": 11.7027,
       "close": 12.0669,
       "volume": 57086451.0
      },
      {
       "date": "2020-05-14",
       "open": 11.4862,
       "high": 12.4212,
       "low": 10.8268,
       "close": 12.0768,
       "volume": 56089991.0
      },
      {
       "date": "2020-05-15",
       "open": 11.939,
       "high": 12.8937,
       "low": 11.7618,
       "close": 12.5787,
       "volume": 36759961.0
      },
      {
       "date": "2020-05-18",
       "open": 13.8779,
       "high": 14.8327,
       "low": 13.7008,
       "close": 14.4882,
       "volume": 79741175.0
      },
      {
       "date": "2020-05-19",
       "open": 14.3799,
       "high": 14.5964,
       "low": 13.4153,
       "close": 13.8878,
       "volume": 51185618.0
      },
      {
       "date": "2020-05-20",
       "open": 14.3897,
       "high": 14.4586,
       "low": 13.6122,
       "close": 13.9271,
       "volume": 40046085.0
      },
      {
       "date": "2020-05-21",
       "open": 13.6811,
       "high": 14.8917,
       "low": 13.6811,
       "close": 14.3701,
       "volume": 50338730.0
      },
      {
       "date": "2020-05-22",
       "open": 14.685,
       "high": 14.9409,
       "low": 13.9271,
       "close": 14.2323,
       "volume": 29150302.0
      },
      {
       "date": "2020-05-26",
       "open": 15.689,
       "high": 16.2598,
       "low": 15.5708,
       "close": 16.0236,
       "volume": 59050826.0
      },
      {
       "date": "2020-05-27",
       "open": 17.874,
       "high": 17.874,
       "low": 15.8661,
       "close": 16.9685,
       "volume": 88224697.0
      },
      {
       "date": "2020-05-28",
       "open": 17.0669,
       "high": 17.126,
       "low": 15.4921,
       "close": 15.6791,
       "volume": 60774369.0
      },
      {
       "date": "2020-05-29",
       "open": 14.9901,
       "high": 15.6693,
       "low": 14.7638,
       "close": 15.4921,
       "volume": 50265475.0
      },
      {
       "date": "2020-06-01",
       "open": 15.7283,
       "high": 16.811,
       "low": 15.6201,
       "close": 16.5354,
       "volume": 42420129.0
      },
      {
       "date": "2020-06-02",
       "open": 17.0571,
       "high": 17.2047,
       "low": 16.2992,
       "close": 16.6043,
       "volume": 41538809.0
      },
      {
       "date": "2020-06-03",
       "open": 16.4468,
       "high": 17.372,
       "low": 16.309,
       "close": 16.9783,
       "volume": 52886544.0
      },
      {
       "date": "2020-06-04",
       "open": 17.0866,
       "high": 18.7598,
       "low": 16.3976,
       "close": 18.1889,
       "volume": 85727432.0
      },
      {
       "date": "2020-06-05",
       "open": 21.9488,
       "high": 22.5787,
       "low": 20.7283,
       "close": 21.1712,
       "volume": 113146814.0
      },
      {
       "date": "2020-06-08",
       "open": 24.183,
       "high": 24.8819,
       "low": 23.0413,
       "close": 24.5177,
       "volume": 106323853.0
      },
      {
       "date": "2020-06-09",
       "open": 23.5039,
       "high": 23.5236,
       "low": 21.5846,
       "close": 22.6771,
       "volume": 72186587.0
      },
      {
       "date": "2020-06-10",
       "open": 21.8504,
       "high": 22.1161,
       "low": 19.1929,
       "close": 20.2657,
       "volume": 82305674.0
      },
      {
       "date": "2020-06-11",
       "open": 17.0177,
       "high": 18.6909,
       "low": 16.4862,
       "close": 17.1653,
       "volume": 78755357.0
      },
      {
       "date": "2020-06-12",
       "open": 19.498,
       "high": 19.8819,
       "low": 18.2382,
       "close": 19.6653,
       "volume": 64986042.0
      },
      {
       "date": "2020-06-15",
       "open": 17.8543,
       "high": 19.5078,
       "low": 17.6673,
       "close": 19.1338,
       "volume": 58805973.0
      },
      {
       "date": "2020-06-16",
       "open": 21.4763,
       "high": 21.5059,
       "low": 19.3012,
       "close": 20.0984,
       "volume": 57964422.0
      },
      {
       "date": "2020-06-17",
       "open": 19.0157,
       "high": 19.4882,
       "low": 18.376,
       "close": 18.7893,
       "volume": 44464721.0
      },
      {
       "date": "2020-06-18",
       "open": 17.6771,
       "high": 19.2421,
       "low": 17.5197,
       "close": 18.5236,
       "volume": 59841238.0
      },
      {
       "date": "2020-06-19",
       "open": 18.996,
       "high": 19.0452,
       "low": 17.2145,
       "close": 17.5492,
       "volume": 54774056.0
      },
      {
       "date": "2020-06-22",
       "open": 17.0866,
       "high": 17.372,
       "low": 16.2795,
       "close": 16.9586,
       "volume": 44352268.0
      },
      {
       "date": "2020-06-23",
       "open": 17.2244,
       "high": 17.7559,
       "low": 16.8504,
       "close": 17.7165,
       "volume": 33797013.0
      },
      {
       "date": "2020-06-24",
       "open": 16.7618,
       "high": 17.0078,
       "low": 15.4134,
       "close": 15.748,
       "volume": 46874272.0
      },
      {
       "date": "2020-06-25",
       "open": 14.9803,
       "high": 15.9842,
       "low": 14.872,
       "close": 15.748,
       "volume": 37333654.0
      },
      {
       "date": "2020-06-26",
       "open": 15.9547,
       "high": 16.0925,
       "low": 14.9212,
       "close": 15.5315,
       "volume": 36768329.0
      },
      {
       "date": "2020-06-29",
       "open": 15.2756,
       "high": 16.5354,
       "low": 14.685,
       "close": 16.5157,
       "volume": 36047616.0
      },
      {
       "date": "2020-06-30",
       "open": 16.2893,
       "high": 16.4468,
       "low": 15.6004,
       "close": 16.1614,
       "volume": 25226246.0
      },
      {
       "date": "2020-07-01",
       "open": 16.6732,
       "high": 17.5492,
       "low": 15.935,
       "close": 16.1023,
       "volume": 37248345.0
      },
      {
       "date": "2020-07-02",
       "open": 16.7815,
       "high": 16.8996,
       "low": 15.5512,
       "close": 15.6299,
       "volume": 29944915.0
      },
      {
       "date": "2020-07-06",
       "open": 15.7874,
       "high": 15.9645,
       "low": 14.872,
       "close": 15.3642,
       "volume": 34123755.0
      },
      {
       "date": "2020-07-07",
       "open": 14.9212,
       "high": 15.1575,
       "low": 14.3307,
       "close": 14.3405,
       "volume": 31066016.0
      },
      {
       "date": "2020-07-08",
       "open": 14.3012,
       "high": 15.2362,
       "low": 14.0453,
       "close": 15.0787,
       "volume": 30167809.0
      },
      {
       "date": "2020-07-09",
       "open": 15.6004,
       "high": 15.748,
       "low": 14.2716,
       "close": 14.3504,
       "volume": 40095407.0
      },
      {
       "date": "2020-07-10",
       "open": 14.2421,
       "high": 16.0138,
       "low": 14.0748,
       "close": 15.9055,
       "volume": 61770031.0
      },
      {
       "date": "2020-07-13",
       "open": 16.2204,
       "high": 16.437,
       "low": 15.0098,
       "close": 15.0393,
       "volume": 41175350.0
      },
      {
       "date": "2020-07-14",
       "open": 14.7342,
       "high": 14.9409,
       "low": 14.3701,
       "close": 14.8031,
       "volume": 30318798.0
      },
      {
       "date": "2020-07-15",
       "open": 15.876,
       "high": 17.2834,
       "low": 15.6791,
       "close": 17.2047,
       "volume": 72140385.0
      },
      {
       "date": "2020-07-16",
       "open": 16.1811,
       "high": 16.3582,
       "low": 15.5315,
       "close": 15.5315,
       "volume": 42421201.0
      },
      {
       "date": "2020-07-17",
       "open": 15.3937,
       "high": 15.7382,
       "low": 14.9901,
       "close": 15.2264,
       "volume": 28032895.0
      },
      {
       "date": "2020-07-20",
       "open": 15.3149,
       "high": 15.6988,
       "low": 14.6752,
       "close": 14.7638,
       "volume": 25098715.0
      },
      {
       "date": "2020-07-21",
       "open": 15.0295,
       "high": 15.2362,
       "low": 14.7736,
       "close": 14.9508,
       "volume": 24679069.0
      },
      {
       "date": "2020-07-22",
       "open": 14.8622,
       "high": 15.0935,
       "low": 14.7342,
       "close": 14.9016,
       "volume": 17650093.0
      },
      {
       "date": "2020-07-23",
       "open": 14.7736,
       "high": 15.1378,
       "low": 14.2815,
       "close": 14.5669,
       "volume": 32436130.0
      },
      {
       "date": "2020-07-24",
       "open": 14.3602,
       "high": 15.1082,
       "low": 14.2323,
       "close": 14.5669,
       "volume": 26712209.0
      },
      {
       "date": "2020-07-27",
       "open": 14.3799,
       "high": 14.3996,
       "low": 13.4055,
       "close": 13.5334,
       "volume": 37462925.0
      },
      {
       "date": "2020-07-28",
       "open": 13.5925,
       "high": 14.3553,
       "low": 13.5334,
       "close": 14.1043,
       "volume": 31311282.0
      },
      {
       "date": "2020-07-29",
       "open": 14.2421,
       "high": 14.4685,
       "low": 13.8681,
       "close": 14.4193,
       "volume": 19415005.0
      },
      {
       "date": "2020-07-30",
       "open": 14.0059,
       "high": 14.2913,
       "low": 13.7894,
       "close": 14.1142,
       "volume": 15895342.0
      },
      {
       "date": "2020-07-31",
       "open": 13.996,
       "high": 14.1191,
       "low": 13.5039,
       "close": 13.6614,
       "volume": 20665782.0
      },
      {
       "date": "2020-08-03",
       "open": 13.2677,
       "high": 13.3268,
       "low": 12.6279,
       "close": 12.8642,
       "volume": 34967537.0
      },
      {
       "date": "2020-08-04",
       "open": 12.8937,
       "high": 13.7697,
       "low": 12.8642,
       "close": 13.5236,
       "volume": 24159787.0
      },
      {
       "date": "2020-08-05",
       "open": 13.9764,
       "high": 14.0453,
       "low": 13.4547,
       "close": 13.7992,
       "volume": 24391058.0
      },
      {
       "date": "2020-08-06",
       "open": 13.2382,
       "high": 13.7992,
       "low": 13.0905,
       "close": 13.563,
       "volume": 85130197.0
      },
      {
       "date": "2020-08-07",
       "open": 13.4055,
       "high": 14.0945,
       "low": 13.1201,
       "close": 13.996,
       "volume": 36316342.0
      },
      {
       "date": "2020-08-10",
       "open": 14.1437,
       "high": 15.2264,
       "low": 14.1142,
       "close": 15.1968,
       "volume": 41905601.0
      },
      {
       "date": "2020-08-11",
       "open": 16.2303,
       "high": 16.2598,
       "low": 15.3742,
       "close": 15.5708,
       "volume": 54167608.0
      },
      {
       "date": "2020-08-12",
       "open": 15.9449,
       "high": 15.9744,
       "low": 14.5817,
       "close": 14.9508,
       "volume": 35929872.0
      },
      {
       "date": "2020-08-13",
       "open": 14.7638,
       "high": 15.5019,
       "low": 14.6752,
       "close": 14.9803,
       "volume": 21416142.0
      },
      {
       "date": "2020-08-14",
       "open": 14.7834,
       "high": 15.4724,
       "low": 14.626,
       "close": 15.2264,
       "volume": 20937072.0
      },
      {
       "date": "2020-08-17",
       "open": 15.1575,
       "high": 15.1968,
       "low": 14.4488,
       "close": 14.4488,
       "volume": 33111573.0
      },
      {
       "date": "2020-08-18",
       "open": 14.4488,
       "high": 14.6703,
       "low": 14.0354,
       "close": 14.1831,
       "volume": 24744608.0
      },
      {
       "date": "2020-08-19",
       "open": 14.1929,
       "high": 14.9343,
       "low": 14.0256,
       "close": 14.3701,
       "volume": 26620331.0
      },
      {
       "date": "2020-08-20",
       "open": 14.124,
       "high": 14.4882,
       "low": 13.9468,
       "close": 14.311,
       "volume": 19955386.0
      },
      {
       "date": "2020-08-21",
       "open": 14.2421,
       "high": 14.6949,
       "low": 14.2126,
       "close": 14.4193,
       "volume": 18797387.0
      },
      {
       "date": "2020-08-24",
       "open": 14.7834,
       "high": 15.9547,
       "low": 14.4193,
       "close": 15.8858,
       "volume": 56417205.0
      },
      {
       "date": "2020-08-25",
       "open": 16.0334,
       "high": 16.1319,
       "low": 15.0886,
       "close": 15.6397,
       "volume": 38551525.0
      },
      {
       "date": "2020-08-26",
       "open": 15.4527,
       "high": 15.5315,
       "low": 14.9508,
       "close": 15.0393,
       "volume": 24425242.0
      },
      {
       "date": "2020-08-27",
       "open": 15.4232,
       "high": 16.4173,
       "low": 15.4035,
       "close": 15.8661,
       "volume": 48079419.0
      },
      {
       "date": "2020-08-28",
       "open": 16.3189,
       "high": 17.0669,
       "low": 15.9744,
       "close": 16.939,
       "volume": 51079101.0
      },
      {
       "date": "2020-08-31",
       "open": 17.0571,
       "high": 17.0669,
       "low": 16.2106,
       "close": 16.2204,
       "volume": 43771742.0
      },
      {
       "date": "2020-09-01",
       "open": 15.8366,
       "high": 16.437,
       "low": 15.7677,
       "close": 16.25,
       "volume": 26448191.0
      },
      {
       "date": "2020-09-02",
       "open": 16.3386,
       "high": 16.5059,
       "low": 15.9547,
       "close": 16.4468,
       "volume": 20720906.0
      },
      {
       "date": "2020-09-03",
       "open": 17.3425,
       "high": 18.4449,
       "low": 16.8307,
       "close": 17.3031,
       "volume": 94120081.0
      },
      {
       "date": "2020-09-04",
       "open": 18.1102,
       "high": 18.3563,
       "low": 17.126,
       "close": 18.2382,
       "volume": 66539728.0
      },
      {
       "date": "2020-09-08",
       "open": 17.5787,
       "high": 18.622,
       "low": 17.5787,
       "close": 18.0019,
       "volume": 46728133.0
      },
      {
       "date": "2020-09-09",
       "open": 17.8445,
       "high": 17.933,
       "low": 16.9882,
       "close": 17.3819,
       "volume": 36217892.0
      },
      {
       "date": "2020-09-10",
       "open": 17.5197,
       "high": 18.4547,
       "low": 17.5197,
       "close": 17.5984,
       "volume": 36598302.0
      },
      {
       "date": "2020-09-11",
       "open": 17.9527,
       "high": 17.9527,
       "low": 17.1653,
       "close": 17.4114,
       "volume": 23899453.0
      },
      {
       "date": "2020-09-14",
       "open": 17.6575,
       "high": 17.8346,
       "low": 17.2638,
       "close": 17.5689,
       "volume": 25838412.0
      },
      {
       "date": "2020-09-15",
       "open": 16.934,
       "high": 16.9586,
       "low": 15.6004,
       "close": 15.6791,
       "volume": 80598093.0
      },
      {
       "date": "2020-09-16",
       "open": 15.8464,
       "high": 16.4075,
       "low": 15.689,
       "close": 16.2008,
       "volume": 38351341.0
      },
      {
       "date": "2020-09-17",
       "open": 15.5512,
       "high": 16.25,
       "low": 15.4527,
       "close": 15.9842,
       "volume": 30506225.0
      },
      {
       "date": "2020-09-18",
       "open": 15.7086,
       "high": 15.8221,
       "low": 14.8327,
       "close": 15.0689,
       "volume": 51607644.0
      },
      {
       "date": "2020-09-21",
       "open": 14.5177,
       "high": 14.6555,
       "low": 13.7795,
       "close": 14.0649,
       "volume": 42775084.0
      },
      {
       "date": "2020-09-22",
       "open": 14.1732,
       "high": 14.5866,
       "low": 13.9567,
       "close": 14.1831,
       "volume": 30011098.0
      },
      {
       "date": "2020-09-23",
       "open": 14.3208,
       "high": 14.813,
       "low": 13.8878,
       "close": 13.9075,
       "volume": 31255198.0
      },
      {
       "date": "2020-09-24",
       "open": 13.8484,
       "high": 13.9419,
       "low": 13.189,
       "close": 13.5236,
       "volume": 32679842.0
      },
      {
       "date": "2020-09-25",
       "open": 14.3208,
       "high": 14.8523,
       "low": 13.9419,
       "close": 14.8327,
       "volume": 54137385.0
      },
      {
       "date": "2020-09-28",
       "open": 15.2953,
       "high": 15.3051,
       "low": 14.5472,
       "close": 15.0689,
       "volume": 36759402.0
      },
      {
       "date": "2020-09-29",
       "open": 15.0098,
       "high": 15.187,
       "low": 14.5817,
       "close": 14.8327,
       "volume": 23496032.0
      },
      {
       "date": "2020-09-30",
       "open": 15.1771,
       "high": 15.7086,
       "low": 14.872,
       "close": 14.9409,
       "volume": 44374821.0
      },
      {
       "date": "2020-10-01",
       "open": 15.187,
       "high": 15.187,
       "low": 14.4685,
       "close": 14.7933,
       "volume": 28158389.0
      },
      {
       "date": "2020-10-02",
       "open": 14.0354,
       "high": 14.9754,
       "low": 14.0059,
       "close": 14.9212,
       "volume": 30936083.0
      },
      {
       "date": "2020-10-05",
       "open": 14.872,
       "high": 14.9901,
       "low": 14.5669,
       "close": 14.7244,
       "volume": 22169265.0
      },
      {
       "date": "2020-10-06",
       "open": 15.0197,
       "high": 15.7185,
       "low": 14.8836,
       "close": 14.9508,
       "volume": 43724299.0
      },
      {
       "date": "2020-10-07",
       "open": 15.2362,
       "high": 15.7923,
       "low": 15.0492,
       "close": 15.7382,
       "volume": 30264955.0
      },
      {
       "date": "2020-10-08",
       "open": 15.9055,
       "high": 15.9153,
       "low": 15.1279,
       "close": 15.3642,
       "volume": 40986021.0
      },
      {
       "date": "2020-10-09",
       "open": 15.4724,
       "high": 15.812,
       "low": 15.2961,
       "close": 15.4429,
       "volume": 33815711.0
      },
      {
       "date": "2020-10-12",
       "open": 15.2067,
       "high": 15.2657,
       "low": 14.9606,
       "close": 14.9705,
       "volume": 25967974.0
      },
      {
       "date": "2020-10-13",
       "open": 14.4783,
       "high": 14.5964,
       "low": 13.7598,
       "close": 13.809,
       "volume": 49344220.0
      },
      {
       "date": "2020-10-14",
       "open": 14.1042,
       "high": 14.2027,
       "low": 13.6909,
       "close": 13.75,
       "volume": 34463881.0
      },
      {
       "date": "2020-10-15",
       "open": 13.5039,
       "high": 13.8189,
       "low": 13.4055,
       "close": 13.7992,
       "volume": 29283554.0
      },
      {
       "date": "2020-10-16",
       "open": 13.8287,
       "high": 14.1043,
       "low": 13.4941,
       "close": 13.8582,
       "volume": 39528633.0
      },
      {
       "date": "2020-10-19",
       "open": 13.9862,
       "high": 14.2716,
       "low": 13.7697,
       "close": 13.9271,
       "volume": 28037825.0
      },
      {
       "date": "2020-10-20",
       "open": 14.1929,
       "high": 14.4783,
       "low": 14.0059,
       "close": 14.3799,
       "volume": 27572775.0
      },
      {
       "date": "2020-10-21",
       "open": 14.3701,
       "high": 14.3996,
       "low": 14.0846,
       "close": 14.2519,
       "volume": 17538931.0
      },
      {
       "date": "2020-10-22",
       "open": 14.2962,
       "high": 15.0,
       "low": 14.2421,
       "close": 14.9508,
       "volume": 32572801.0
      },
      {
       "date": "2020-10-23",
       "open": 14.9508,
       "high": 15.2559,
       "low": 14.7933,
       "close": 15.1181,
       "volume": 25638423.0
      },
      {
       "date": "2020-10-26",
       "open": 14.5177,
       "high": 14.5964,
       "low": 13.6023,
       "close": 13.809,
       "volume": 49748360.0
      },
      {
       "date": "2020-10-27",
       "open": 13.8189,
       "high": 13.9468,
       "low": 13.5138,
       "close": 13.5433,
       "volume": 24449792.0
      },
      {
       "date": "2020-10-28",
       "open": 13.0315,
       "high": 13.0561,
       "low": 12.0964,
       "close": 12.1063,
       "volume": 58953156.0
      },
      {
       "date": "2020-10-29",
       "open": 12.1457,
       "high": 12.8838,
       "low": 11.9193,
       "close": 12.7756,
       "volume": 31579537.0
      },
      {
       "date": "2020-10-30",
       "open": 12.5787,
       "high": 14.2519,
       "low": 12.4212,
       "close": 13.4941,
       "volume": 76635508.0
      },
      {
       "date": "2020-11-02",
       "open": 13.2775,
       "high": 13.4301,
       "low": 12.7264,
       "close": 13.3366,
       "volume": 31928110.0
      },
      {
       "date": "2020-11-03",
       "open": 13.376,
       "high": 13.7598,
       "low": 13.2579,
       "close": 13.4941,
       "volume": 26494949.0
      },
      {
       "date": "2020-11-04",
       "open": 13.4744,
       "high": 13.6466,
       "low": 13.0512,
       "close": 13.1299,
       "volume": 27612981.0
      },
      {
       "date": "2020-11-05",
       "open": 13.3169,
       "high": 14.0059,
       "low": 13.2382,
       "close": 13.9567,
       "volume": 27600275.0
      },
      {
       "date": "2020-11-06",
       "open": 13.6909,
       "high": 13.9173,
       "low": 13.4449,
       "close": 13.6023,
       "volume": 19585587.0
      },
      {
       "date": "2020-11-09",
       "open": 18.1988,
       "high": 19.5472,
       "low": 17.4311,
       "close": 18.9468,
       "volume": 185304278.0
      },
      {
       "date": "2020-11-10",
       "open": 18.248,
       "high": 18.376,
       "low": 16.1417,
       "close": 16.4665,
       "volume": 119449520.0
      },
      {
       "date": "2020-11-11",
       "open": 16.683,
       "high": 16.7224,
       "low": 15.8267,
       "close": 15.9547,
       "volume": 57841359.0
      },
      {
       "date": "2020-11-12",
       "open": 15.3937,
       "high": 15.6004,
       "low": 14.6456,
       "close": 14.6949,
       "volume": 87726155.0
      },
      {
       "date": "2020-11-13",
       "open": 14.9508,
       "high": 15.9449,
       "low": 14.7441,
       "close": 15.7579,
       "volume": 159954801.0
      },
      {
       "date": "2020-11-16",
       "open": 17.0669,
       "high": 17.7165,
       "low": 16.6437,
       "close": 17.2933,
       "volume": 112274663.0
      },
      {
       "date": "2020-11-17",
       "open": 16.9291,
       "high": 18.2874,
       "low": 16.6732,
       "close": 17.7657,
       "volume": 63499716.0
      },
      {
       "date": "2020-11-18",
       "open": 17.2638,
       "high": 18.0118,
       "low": 17.1653,
       "close": 17.313,
       "volume": 72257819.0
      },
      {
       "date": "2020-11-19",
       "open": 17.3917,
       "high": 17.9626,
       "low": 17.185,
       "close": 17.9035,
       "volume": 44098257.0
      },
      {
       "date": "2020-11-20",
       "open": 17.874,
       "high": 17.9921,
       "low": 17.0571,
       "close": 17.0964,
       "volume": 52433267.0
      },
      {
       "date": "2020-11-23",
       "open": 17.5886,
       "high": 18.0708,
       "low": 17.3474,
       "close": 17.8937,
       "volume": 50751300.0
      },
      {
       "date": "2020-11-24",
       "open": 19.0846,
       "high": 20.1082,
       "low": 18.7622,
       "close": 19.9114,
       "volume": 78786567.0
      },
      {
       "date": "2020-11-25",
       "open": 20.1575,
       "high": 20.5708,
       "low": 19.6106,
       "close": 20.3248,
       "volume": 60387862.0
      },
      {
       "date": "2020-11-27",
       "open": 20.6693,
       "high": 21.8996,
       "low": 20.5315,
       "close": 21.2401,
       "volume": 46919073.0
      },
      {
       "date": "2020-11-30",
       "open": 21.4271,
       "high": 21.4271,
       "low": 19.5177,
       "close": 19.6653,
       "volume": 86740661.0
      },
      {
       "date": "2020-12-01",
       "open": 20.6594,
       "high": 20.6791,
       "low": 19.7342,
       "close": 19.8326,
       "volume": 47691999.0
      },
      {
       "date": "2020-12-02",
       "open": 19.498,
       "high": 20.935,
       "low": 18.9271,
       "close": 20.8267,
       "volume": 52282415.0
      },
      {
       "date": "2020-12-03",
       "open": 21.1417,
       "high": 23.1299,
       "low": 21.0334,
       "close": 22.5197,
       "volume": 92899306.0
      },
      {
       "date": "2020-12-04",
       "open": 23.1693,
       "high": 23.3366,
       "low": 22.2441,
       "close": 23.0807,
       "volume": 65203897.0
      },
      {
       "date": "2020-12-07",
       "open": 23.0216,
       "high": 23.0807,
       "low": 22.3425,
       "close": 22.8346,
       "volume": 47154957.0
      },
      {
       "date": "2020-12-08",
       "open": 22.6476,
       "high": 23.5433,
       "low": 22.5885,
       "close": 23.1988,
       "volume": 42765227.0
      },
      {
       "date": "2020-12-09",
       "open": 23.5925,
       "high": 23.996,
       "low": 21.624,
       "close": 22.3326,
       "volume": 66956150.0
      },
      {
       "date": "2020-12-10",
       "open": 21.8996,
       "high": 22.7067,
       "low": 21.811,
       "close": 21.9685,
       "volume": 50011840.0
      },
      {
       "date": "2020-12-11",
       "open": 22.2834,
       "high": 22.4606,
       "low": 20.9449,
       "close": 20.9842,
       "volume": 52517371.0
      },
      {
       "date": "2020-12-14",
       "open": 21.9685,
       "high": 22.3868,
       "low": 20.6004,
       "close": 20.6004,
       "volume": 55423546.0
      },
      {
       "date": "2020-12-15",
       "open": 20.8858,
       "high": 21.3681,
       "low": 19.6358,
       "close": 21.1909,
       "volume": 56875005.0
      },
      {
       "date": "2020-12-16",
       "open": 21.1909,
       "high": 21.8602,
       "low": 20.9744,
       "close": 21.4173,
       "volume": 35103713.0
      },
      {
       "date": "2020-12-17",
       "open": 21.5452,
       "high": 21.5551,
       "low": 20.9744,
       "close": 21.2893,
       "volume": 25810780.0
      },
      {
       "date": "2020-12-18",
       "open": 21.2697,
       "high": 21.6338,
       "low": 20.6693,
       "close": 21.122,
       "volume": 68420735.0
      },
      {
       "date": "2020-12-21",
       "open": 19.9015,
       "high": 20.9645,
       "low": 19.7167,
       "close": 20.7283,
       "volume": 51476709.0
      },
      {
       "date": "2020-12-22",
       "open": 20.7382,
       "high": 20.9252,
       "low": 19.4389,
       "close": 19.498,
       "volume": 40196933.0
      },
      {
       "date": "2020-12-23",
       "open": 19.8031,
       "high": 20.748,
       "low": 19.7145,
       "close": 20.6102,
       "volume": 31385171.0
      },
      {
       "date": "2020-12-24",
       "open": 20.6496,
       "high": 20.748,
       "low": 20.1082,
       "close": 20.5118,
       "volume": 14819299.0
      },
      {
       "date": "2020-12-28",
       "open": 20.9744,
       "high": 21.7027,
       "low": 20.6889,
       "close": 21.3681,
       "volume": 32673519.0
      },
      {
       "date": "2020-12-29",
       "open": 21.87,
       "high": 21.9193,
       "low": 21.0236,
       "close": 21.0925,
       "volume": 26851152.0
      },
      {
       "date": "2020-12-30",
       "open": 21.1811,
       "high": 21.7421,
       "low": 21.0433,
       "close": 21.4468,
       "volume": 23606415.0
      },
      {
       "date": "2020-12-31",
       "open": 21.2795,
       "high": 21.4468,
       "low": 20.5708,
       "close": 21.3189,
       "volume": 25679255.0
      },
      {
       "date": "2021-01-04",
       "open": 21.3582,
       "high": 21.3681,
       "low": 19.7244,
       "close": 20.059,
       "volume": 40642471.0
      },
      {
       "date": "2021-01-05",
       "open": 19.8622,
       "high": 20.5216,
       "low": 19.8326,
       "close": 20.2756,
       "volume": 32464370.0
      },
      {
       "date": "2021-01-06",
       "open": 20.2165,
       "high": 20.5856,
       "low": 19.8425,
       "close": 20.0787,
       "volume": 35295948.0
      },
      {
       "date": "2021-01-07",
       "open": 20.1575,
       "high": 20.9449,
       "low": 20.1476,
       "close": 20.4134,
       "volume": 28989022.0
      },
      {
       "date": "2021-01-08",
       "open": 20.5413,
       "high": 20.6889,
       "low": 19.8622,
       "close": 20.1476,
       "volume": 30369968.0
      },
      {
       "date": "2021-01-11",
       "open": 19.8523,
       "high": 20.1181,
       "low": 19.3208,
       "close": 19.8228,
       "volume": 31268875.0
      },
      {
       "date": "2021-01-12",
       "open": 19.7342,
       "high": 19.8228,
       "low": 19.3012,
       "close": 19.813,
       "volume": 33016775.0
      },
      {
       "date": "2021-01-13",
       "open": 19.5472,
       "high": 19.8868,
       "low": 19.3701,
       "close": 19.7834,
       "volume": 24791441.0
      },
      {
       "date": "2021-01-14",
       "open": 20.1378,
       "high": 21.2106,
       "low": 20.1279,
       "close": 20.5905,
       "volume": 46177603.0
      },
      {
       "date": "2021-01-15",
       "open": 20.4527,
       "high": 21.0623,
       "low": 20.2443,
       "close": 20.4626,
       "volume": 33762409.0
      },
      {
       "date": "2021-01-19",
       "open": 20.6693,
       "high": 20.9202,
       "low": 20.2854,
       "close": 20.5413,
       "volume": 21273465.0
      },
      {
       "date": "2021-01-20",
       "open": 20.6791,
       "high": 20.876,
       "low": 20.2657,
       "close": 20.4527,
       "volume": 21272484.0
      },
      {
       "date": "2021-01-21",
       "open": 20.374,
       "high": 20.5512,
       "low": 20.0,
       "close": 20.4134,
       "volume": 20241508.0
      },
      {
       "date": "2021-01-22",
       "open": 19.9901,
       "high": 20.1033,
       "low": 19.7244,
       "close": 19.9015,
       "volume": 24748752.0
      },
      {
       "date": "2021-01-25",
       "open": 19.4882,
       "high": 19.4977,
       "low": 18.435,
       "close": 18.9173,
       "volume": 55839486.0
      },
      {
       "date": "2021-01-26",
       "open": 19.0945,
       "high": 19.2027,
       "low": 18.3267,
       "close": 18.4252,
       "volume": 44110744.0
      },
      {
       "date": "2021-01-27",
       "open": 18.1201,
       "high": 19.1092,
       "low": 17.6771,
       "close": 18.6811,
       "volume": 50578903.0
      },
      {
       "date": "2021-01-28",
       "open": 19.7834,
       "high": 20.3445,
       "low": 19.3454,
       "close": 19.4291,
       "volume": 59670217.0
      },
      {
       "date": "2021-01-29",
       "open": 19.3897,
       "high": 19.498,
       "low": 18.0905,
       "close": 18.376,
       "volume": 50346108.0
      },
      {
       "date": "2021-02-01",
       "open": 18.6614,
       "high": 18.8287,
       "low": 18.1201,
       "close": 18.5039,
       "volume": 27139031.0
      },
      {
       "date": "2021-02-02",
       "open": 18.9173,
       "high": 19.2913,
       "low": 18.6811,
       "close": 19.1437,
       "volume": 27532305.0
      },
      {
       "date": "2021-02-03",
       "open": 19.3208,
       "high": 20.1673,
       "low": 19.1335,
       "close": 20.1181,
       "volume": 33548815.0
      },
      {
       "date": "2021-02-04",
       "open": 20.6693,
       "high": 20.9891,
       "low": 20.3346,
       "close": 20.7185,
       "volume": 32541113.0
      },
      {
       "date": "2021-02-05",
       "open": 21.0531,
       "high": 21.4057,
       "low": 20.7972,
       "close": 20.9744,
       "volume": 29887319.0
      },
      {
       "date": "2021-02-08",
       "open": 21.2598,
       "high": 21.4665,
       "low": 20.9104,
       "close": 21.2697,
       "volume": 22166644.0
      },
      {
       "date": "2021-02-09",
       "open": 21.0826,
       "high": 21.0826,
       "low": 20.3543,
       "close": 20.7185,
       "volume": 25713189.0
      },
      {
       "date": "2021-02-10",
       "open": 20.8169,
       "high": 21.309,
       "low": 20.5413,
       "close": 20.6004,
       "volume": 27636663.0
      },
      {
       "date": "2021-02-11",
       "open": 20.5708,
       "high": 20.7972,
       "low": 20.1378,
       "close": 20.3937,
       "volume": 22698383.0
      },
      {
       "date": "2021-02-12",
       "open": 19.7834,
       "high": 20.5019,
       "low": 19.7342,
       "close": 20.2756,
       "volume": 25063700.0
      },
      {
       "date": "2021-02-16",
       "open": 20.8267,
       "high": 22.2047,
       "low": 20.6299,
       "close": 22.1161,
       "volume": 55038112.0
      },
      {
       "date": "2021-02-17",
       "open": 21.9291,
       "high": 23.681,
       "low": 21.5354,
       "close": 22.8346,
       "volume": 59640819.0
      },
      {
       "date": "2021-02-18",
       "open": 22.6082,
       "high": 22.7854,
       "low": 22.0275,
       "close": 22.5295,
       "volume": 26606387.0
      },
      {
       "date": "2021-02-19",
       "open": 23.248,
       "high": 24.3307,
       "low": 23.1102,
       "close": 24.2027,
       "volume": 52483257.0
      },
      {
       "date": "2021-02-22",
       "open": 24.7441,
       "high": 26.8996,
       "low": 24.2618,
       "close": 25.561,
       "volume": 85198500.0
      },
      {
       "date": "2021-02-23",
       "open": 24.685,
       "high": 26.3041,
       "low": 23.0905,
       "close": 26.0433,
       "volume": 115819538.0
      },
      {
       "date": "2021-02-24",
       "open": 26.6633,
       "high": 27.7362,
       "low": 26.309,
       "close": 26.5846,
       "volume": 92985324.0
      },
      {
       "date": "2021-02-25",
       "open": 27.4704,
       "high": 27.7944,
       "low": 24.6752,
       "close": 25.0689,
       "volume": 69951570.0
      },
      {
       "date": "2021-02-26",
       "open": 25.4822,
       "high": 26.437,
       "low": 24.8733,
       "close": 26.3287,
       "volume": 57135289.0
      },
      {
       "date": "2021-03-01",
       "open": 27.1161,
       "high": 27.4754,
       "low": 25.6102,
       "close": 25.8956,
       "volume": 59643136.0
      },
      {
       "date": "2021-03-02",
       "open": 26.4862,
       "high": 27.4065,
       "low": 26.1221,
       "close": 27.1555,
       "volume": 49295032.0
      },
      {
       "date": "2021-03-03",
       "open": 28.0019,
       "high": 29.124,
       "low": 27.7362,
       "close": 28.2185,
       "volume": 71576010.0
      },
      {
       "date": "2021-03-04",
       "open": 28.6318,
       "high": 28.9665,
       "low": 25.8169,
       "close": 26.9685,
       "volume": 74016546.0
      },
      {
       "date": "2021-03-05",
       "open": 26.683,
       "high": 26.7322,
       "low": 22.8937,
       "close": 25.6791,
       "volume": 83747365.0
      },
      {
       "date": "2021-03-08",
       "open": 26.6141,
       "high": 26.8405,
       "low": 25.3887,
       "close": 26.2696,
       "volume": 48007739.0
      },
      {
       "date": "2021-03-09",
       "open": 26.5649,
       "high": 27.4097,
       "low": 25.3937,
       "close": 27.1456,
       "volume": 42549099.0
      },
      {
       "date": "2021-03-10",
       "open": 26.9685,
       "high": 27.9724,
       "low": 26.25,
       "close": 26.2795,
       "volume": 41997576.0
      },
      {
       "date": "2021-03-11",
       "open": 26.5944,
       "high": 27.3326,
       "low": 26.063,
       "close": 27.0374,
       "volume": 33297291.0
      },
      {
       "date": "2021-03-12",
       "open": 26.9488,
       "high": 28.0511,
       "low": 26.8602,
       "close": 28.0118,
       "volume": 32490608.0
      },
      {
       "date": "2021-03-15",
       "open": 28.5187,
       "high": 29.6456,
       "low": 28.4448,
       "close": 29.3208,
       "volume": 53603606.0
      },
      {
       "date": "2021-03-16",
       "open": 29.4783,
       "high": 29.5078,
       "low": 27.4114,
       "close": 27.8051,
       "volume": 51042736.0
      },
      {
       "date": "2021-03-17",
       "open": 27.7067,
       "high": 28.4941,
       "low": 27.3802,
       "close": 28.4744,
       "volume": 30463288.0
      },
      {
       "date": "2021-03-18",
       "open": 29.0255,
       "high": 29.2716,
       "low": 27.5787,
       "close": 27.8248,
       "volume": 47106754.0
      },
      {
       "date": "2021-03-19",
       "open": 28.0315,
       "high": 28.6318,
       "low": 26.7029,
       "close": 28.5039,
       "volume": 41506407.0
      },
      {
       "date": "2021-03-22",
       "open": 27.8641,
       "high": 28.0216,
       "low": 26.9193,
       "close": 27.0472,
       "volume": 33792021.0
      },
      {
       "date": "2021-03-23",
       "open": 26.5748,
       "high": 26.9094,
       "low": 24.7834,
       "close": 24.9311,
       "volume": 51242192.0
      },
      {
       "date": "2021-03-24",
       "open": 25.8366,
       "high": 26.9389,
       "low": 23.7697,
       "close": 24.4586,
       "volume": 72339087.0
      },
      {
       "date": "2021-03-25",
       "open": 23.5334,
       "high": 25.625,
       "low": 23.3464,
       "close": 25.4429,
       "volume": 47084989.0
      },
      {
       "date": "2021-03-26",
       "open": 25.8366,
       "high": 26.0925,
       "low": 24.813,
       "close": 25.6496,
       "volume": 28542043.0
      },
      {
       "date": "2021-03-29",
       "open": 25.6397,
       "high": 25.7282,
       "low": 24.8523,
       "close": 25.2263,
       "volume": 19988944.0
      },
      {
       "date": "2021-03-30",
       "open": 25.2952,
       "high": 26.4074,
       "low": 25.256,
       "close": 26.2303,
       "volume": 23735639.0
      },
      {
       "date": "2021-03-31",
       "open": 26.1614,
       "high": 26.3779,
       "low": 25.5019,
       "close": 26.122,
       "volume": 21560443.0
      },
      {
       "date": "2021-04-01",
       "open": 26.5649,
       "high": 26.6732,
       "low": 26.1148,
       "close": 26.437,
       "volume": 19640272.0
      },
      {
       "date": "2021-04-05",
       "open": 27.3622,
       "high": 28.2775,
       "low": 27.2539,
       "close": 27.6673,
       "volume": 40105746.0
      },
      {
       "date": "2021-04-06",
       "open": 27.7263,
       "high": 28.6285,
       "low": 27.4114,
       "close": 28.1496,
       "volume": 35528098.0
      },
      {
       "date": "2021-04-07",
       "open": 28.9567,
       "high": 30.1436,
       "low": 28.4153,
       "close": 28.5433,
       "volume": 70953693.0
      },
      {
       "date": "2021-04-08",
       "open": 28.6712,
       "high": 28.6712,
       "low": 27.3818,
       "close": 28.1102,
       "volume": 37870792.0
      },
      {
       "date": "2021-04-09",
       "open": 28.3464,
       "high": 29.1092,
       "low": 28.0403,
       "close": 28.8385,
       "volume": 36287654.0
      },
      {
       "date": "2021-04-12",
       "open": 28.4448,
       "high": 28.622,
       "low": 27.0472,
       "close": 27.313,
       "volume": 39161637.0
      },
      {
       "date": "2021-04-13",
       "open": 26.683,
       "high": 27.5,
       "low": 26.309,
       "close": 27.3818,
       "volume": 27690551.0
      },
      {
       "date": "2021-04-14",
       "open": 27.5689,
       "high": 28.2969,
       "low": 27.4114,
       "close": 27.5,
       "volume": 23267501.0
      },
      {
       "date": "2021-04-15",
       "open": 27.7362,
       "high": 27.7559,
       "low": 26.6929,
       "close": 26.8897,
       "volume": 24024367.0
      },
      {
       "date": "2021-04-16",
       "open": 27.0964,
       "high": 27.3523,
       "low": 26.3976,
       "close": 26.6043,
       "volume": 22092405.0
      },
      {
       "date": "2021-04-19",
       "open": 26.6683,
       "high": 26.8405,
       "low": 25.9695,
       "close": 26.4665,
       "volume": 22214543.0
      },
      {
       "date": "2021-04-20",
       "open": 26.063,
       "high": 26.0923,
       "low": 24.7244,
       "close": 25.3149,
       "volume": 31216985.0
      },
      {
       "date": "2021-04-21",
       "open": 25.246,
       "high": 26.9193,
       "low": 24.8474,
       "close": 26.8996,
       "volume": 31354129.0
      },
      {
       "date": "2021-04-22",
       "open": 26.5452,
       "high": 27.4606,
       "low": 26.3484,
       "close": 26.4862,
       "volume": 29698436.0
      },
      {
       "date": "2021-04-23",
       "open": 26.5748,
       "high": 26.9783,
       "low": 26.1466,
       "close": 26.8405,
       "volume": 19340618.0
      },
      {
       "date": "2021-04-26",
       "open": 27.3818,
       "high": 28.0511,
       "low": 26.8799,
       "close": 27.1161,
       "volume": 20033545.0
      },
      {
       "date": "2021-04-27",
       "open": 27.1555,
       "high": 27.4409,
       "low": 26.7126,
       "close": 27.372,
       "volume": 18145201.0
      },
      {
       "date": "2021-04-28",
       "open": 27.2637,
       "high": 27.8198,
       "low": 27.1358,
       "close": 27.3622,
       "volume": 17273037.0
      },
      {
       "date": "2021-04-29",
       "open": 28.3366,
       "high": 28.6791,
       "low": 26.7027,
       "close": 26.7815,
       "volume": 40714920.0
      },
      {
       "date": "2021-04-30",
       "open": 26.5748,
       "high": 27.5689,
       "low": 26.4468,
       "close": 27.5196,
       "volume": 21653518.0
      },
      {
       "date": "2021-05-03",
       "open": 27.5787,
       "high": 27.9084,
       "low": 27.0964,
       "close": 27.4901,
       "volume": 21866618.0
      },
      {
       "date": "2021-05-04",
       "open": 27.0472,
       "high": 27.1259,
       "low": 25.7874,
       "close": 26.2598,
       "volume": 33649315.0
      },
      {
       "date": "2021-05-05",
       "open": 26.3976,
       "high": 26.8799,
       "low": 25.9547,
       "close": 26.1023,
       "volume": 16545482.0
      },
      {
       "date": "2021-05-06",
       "open": 26.063,
       "high": 26.4074,
       "low": 25.1181,
       "close": 25.5413,
       "volume": 25871418.0
      },
      {
       "date": "2021-05-07",
       "open": 25.5807,
       "high": 26.437,
       "low": 25.4724,
       "close": 26.3385,
       "volume": 20185492.0
      },
      {
       "date": "2021-05-10",
       "open": 26.4074,
       "high": 26.4074,
       "low": 25.8169,
       "close": 25.8563,
       "volume": 18093864.0
      },
      {
       "date": "2021-05-11",
       "open": 24.9311,
       "high": 25.7086,
       "low": 24.6948,
       "close": 25.4724,
       "volume": 28145463.0
      },
      {
       "date": "2021-05-12",
       "open": 25.0984,
       "high": 25.433,
       "low": 24.2913,
       "close": 24.3897,
       "volume": 24001504.0
      },
      {
       "date": "2021-05-13",
       "open": 24.5669,
       "high": 25.1968,
       "low": 23.9074,
       "close": 24.7244,
       "volume": 28166980.0
      },
      {
       "date": "2021-05-14",
       "open": 25.1279,
       "high": 26.8307,
       "low": 25.1082,
       "close": 26.7716,
       "volume": 35569893.0
      },
      {
       "date": "2021-05-17",
       "open": 26.87,
       "high": 27.1653,
       "low": 26.3632,
       "close": 27.0866,
       "volume": 29753394.0
      },
      {
       "date": "2021-05-18",
       "open": 27.2145,
       "high": 28.1693,
       "low": 26.9881,
       "close": 27.559,
       "volume": 33424832.0
      },
      {
       "date": "2021-05-19",
       "open": 26.5846,
       "high": 27.3622,
       "low": 26.3189,
       "close": 27.2441,
       "volume": 26292124.0
      },
      {
       "date": "2021-05-20",
       "open": 27.2145,
       "high": 27.2441,
       "low": 26.5373,
       "close": 27.0964,
       "volume": 24022334.0
      },
      {
       "date": "2021-05-21",
       "open": 27.4507,
       "high": 27.5984,
       "low": 26.7273,
       "close": 26.7421,
       "volume": 20551460.0
      },
      {
       "date": "2021-05-24",
       "open": 26.9488,
       "high": 27.7067,
       "low": 26.4763,
       "close": 27.4606,
       "volume": 26473252.0
      },
      {
       "date": "2021-05-25",
       "open": 27.8051,
       "high": 28.9074,
       "low": 27.7854,
       "close": 28.1299,
       "volume": 38680722.0
      },
      {
       "date": "2021-05-26",
       "open": 28.3858,
       "high": 28.9567,
       "low": 28.1742,
       "close": 28.9074,
       "volume": 24530155.0
      },
      {
       "date": "2021-05-27",
       "open": 29.1043,
       "high": 29.5275,
       "low": 28.7598,
       "close": 29.5275,
       "volume": 30294501.0
      },
      {
       "date": "2021-05-28",
       "open": 29.4881,
       "high": 29.5915,
       "low": 28.9468,
       "close": 29.0944,
       "volume": 25635761.0
      },
      {
       "date": "2021-06-01",
       "open": 29.7145,
       "high": 30.2657,
       "low": 29.4389,
       "close": 29.6752,
       "volume": 36826675.0
      },
      {
       "date": "2021-06-02",
       "open": 29.8326,
       "high": 31.0039,
       "low": 29.4586,
       "close": 30.8169,
       "volume": 36078194.0
      },
      {
       "date": "2021-06-03",
       "open": 30.6496,
       "high": 30.807,
       "low": 29.872,
       "close": 30.187,
       "volume": 24269757.0
      },
      {
       "date": "2021-06-04",
       "open": 30.433,
       "high": 30.6151,
       "low": 29.7736,
       "close": 30.059,
       "volume": 19384111.0
      },
      {
       "date": "2021-06-07",
       "open": 30.2657,
       "high": 30.9596,
       "low": 30.1673,
       "close": 30.4035,
       "volume": 24165731.0
      },
      {
       "date": "2021-06-08",
       "open": 30.62,
       "high": 31.0236,
       "low": 30.1279,
       "close": 30.5905,
       "volume": 25061875.0
      },
      {
       "date": "2021-06-09",
       "open": 30.807,
       "high": 30.8563,
       "low": 29.9507,
       "close": 29.9704,
       "volume": 18447310.0
      },
      {
       "date": "2021-06-10",
       "open": 30.1574,
       "high": 30.2854,
       "low": 28.9468,
       "close": 29.3602,
       "volume": 30486474.0
      },
      {
       "date": "2021-06-11",
       "open": 29.0354,
       "high": 29.5669,
       "low": 28.8287,
       "close": 29.4586,
       "volume": 20215022.0
      },
      {
       "date": "2021-06-14",
       "open": 29.3996,
       "high": 29.5078,
       "low": 28.1791,
       "close": 28.2972,
       "volume": 24538322.0
      },
      {
       "date": "2021-06-15",
       "open": 28.3661,
       "high": 28.9271,
       "low": 27.9626,
       "close": 28.1594,
       "volume": 19070889.0
      },
      {
       "date": "2021-06-16",
       "open": 28.5236,
       "high": 29.0206,
       "low": 28.2381,
       "close": 28.8189,
       "volume": 25237888.0
      },
      {
       "date": "2021-06-17",
       "open": 28.7401,
       "high": 29.2519,
       "low": 27.9626,
       "close": 27.9724,
       "volume": 26049317.0
      },
      {
       "date": "2021-06-18",
       "open": 27.6771,
       "high": 28.0659,
       "low": 27.2883,
       "close": 27.7362,
       "volume": 26749908.0
      },
      {
       "date": "2021-06-21",
       "open": 27.8543,
       "high": 28.248,
       "low": 27.4704,
       "close": 28.2185,
       "volume": 21897560.0
      },
      {
       "date": "2021-06-22",
       "open": 28.1988,
       "high": 28.2381,
       "low": 27.3572,
       "close": 27.6181,
       "volume": 18403415.0
      },
      {
       "date": "2021-06-23",
       "open": 27.6673,
       "high": 28.0413,
       "low": 27.5795,
       "close": 27.7067,
       "volume": 17916707.0
      },
      {
       "date": "2021-06-24",
       "open": 27.687,
       "high": 28.0856,
       "low": 26.9586,
       "close": 27.0275,
       "volume": 31193619.0
      },
      {
       "date": "2021-06-25",
       "open": 27.0964,
       "high": 27.7854,
       "low": 27.0866,
       "close": 27.687,
       "volume": 31580678.0
      },
      {
       "date": "2021-06-28",
       "open": 26.9881,
       "high": 27.0964,
       "low": 25.5905,
       "close": 25.7382,
       "volume": 63786251.0
      },
      {
       "date": "2021-06-29",
       "open": 25.748,
       "high": 26.0728,
       "low": 25.3543,
       "close": 25.374,
       "volume": 33185820.0
      },
      {
       "date": "2021-06-30",
       "open": 25.3838,
       "high": 26.063,
       "low": 25.2854,
       "close": 25.9448,
       "volume": 22820187.0
      }
     ],
     "npc_bets": [
      {
       "player_id": "p04",
       "action": "跟",
       "stake": 238,
       "side_price": 0.4,
       "result": {
        "won": true,
        "payout": 595.0
       }
      }
     ],
     "commission": {
      "pool": 238.0,
      "rate": 0.0,
      "paid": 0.0
     },
     "is_burst": true,
     "q_en": "Zero revenue, no bailout—how do you think the market prices it during this period?",
     "reason_en": "The ships are still there, the brand is still there—this price drop is already liquidation value.",
     "mood_en": "Despair",
     "headline_en": "Cruises completely shut down and explicitly excluded from US bailout plans",
     "background_en": "Global cruises completely shut down, and because they're registered in Panama and Liberia, the US industry bailout plan explicitly excludes cruise companies. A heavy-asset company with zero revenue and no bailout access—the only question is how long the cash on the balance sheet will last."
    }
   ],
   "dealer_cash_after": 11578.8
  }
 ],
 "tickers": {}
};
