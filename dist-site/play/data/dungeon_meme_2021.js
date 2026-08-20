window.DUNGEON_MEME_2021 = {
 "dungeon_id": "meme_2021",
 "name": "散户逼空",
 "name_en": "The Squeeze",
 "generated_for": "2026-08-20T14:16:59",
 "start_hidden": "2020-12",
 "resolved_from": "live",
 "n_stages": 5,
 "ended_early": null,
 "burst": {
  "label": "轧空结束",
  "label_en": "The Squeeze Ends",
  "note": "走到这里，轧空就结束了 —— 这一关之后没有下一关。音乐停的时候你手上剩什么，就是这一局的成绩。",
  "note_en": "This is where the squeeze runs out — there is no stage after this one. Whatever you are holding when the music stops is what the run is worth.",
  "rule": "轧空什么时候结束不看日历，看你已经挺过几关、以及题目本身有多疯。结束那一关就是本局终局。庄家被闲家打穿的话，本局也会提前结束。",
  "rule_en": "When the squeeze ends is not on a calendar. It builds from how many stages you have survived and how crazy the events themselves are. The stage it ends on is the last stage. If the dealer gets busted by the table first, the run also ends early."
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
  "id": "meme_2021-dealer",
  "name": "论坛里的庄家",
  "emoji": "🚀",
  "start_cash": 10000.0,
  "cash": 13089.41,
  "bankrupt_day": null,
  "theme": "meme 股与散户浪潮 · 2020-2021",
  "theme_en": "Meme stocks and the retail wave · 2020-2021",
  "name_en": "The Forum Dealer"
 },
 "players": [
  {
   "id": "p04",
   "name": "空军司令",
   "emoji": "🦇",
   "start_cash": 2000.0,
   "cash": 2460.36,
   "bankrupt_day": null,
   "return_pct": 0.2302,
   "name_en": "Bear Commander"
  },
  {
   "id": "p05",
   "name": "佛系躺赢",
   "emoji": "🐌",
   "start_cash": 2000.0,
   "cash": 2164.91,
   "bankrupt_day": null,
   "return_pct": 0.0825,
   "name_en": "Zen Coaster"
  },
  {
   "id": "p02",
   "name": "稳字诀",
   "emoji": "🐘",
   "start_cash": 2000.0,
   "cash": 1971.0,
   "bankrupt_day": null,
   "return_pct": -0.0145,
   "name_en": "Steady Hand"
  },
  {
   "id": "p06",
   "name": "反骨仔",
   "emoji": "🐊",
   "start_cash": 2000.0,
   "cash": 1412.36,
   "bankrupt_day": null,
   "return_pct": -0.2938,
   "name_en": "Contrarian Kid"
  },
  {
   "id": "p01",
   "name": "快钱阿飞",
   "emoji": "🐆",
   "start_cash": 2000.0,
   "cash": 932.64,
   "bankrupt_day": 5,
   "return_pct": -0.5337,
   "name_en": "Fast-Money Flip"
  },
  {
   "id": "p03",
   "name": "杠精本精",
   "emoji": "🦂",
   "start_cash": 2000.0,
   "cash": 760.0,
   "bankrupt_day": 4,
   "return_pct": -0.62,
   "name_en": "Pure Contrarian"
  }
 ],
 "days": [
  {
   "day_idx": 1,
   "date": "2020-12-01",
   "ideas": [
    {
     "id": "2020-12-cohen-stake",
     "ticker": "GME",
     "company": "GameStop Corp",
     "headline": "Ryan Cohen 增持到 12.9% 并致信董事会，而这只票的空头占比已超 100%",
     "question": "一家线下游戏店的转型故事，配上超过 100% 的空头占比，你猜这段时间怎么走？",
     "reason": "实体游戏零售是夕阳行业，转型故事讲了十年了。",
     "mood": "观望",
     "price": 0.5,
     "holding_days": 34,
     "hype": 0.6,
     "lead_context": {
      "months": 3,
      "from": 1.91,
      "to": 3.95,
      "pct": 1.0654,
      "week_pct": 0.1367
     },
     "background": "Chewy 创始人 Ryan Cohen 把持股增持到 12.9% 并公开致信董事会，要求公司转型电商。此时 GameStop 的空头持仓占流通股比例超过 100% —— 被借出去做空的股票比实际存在的还多。",
     "resolved_from": "live",
     "ref_close": 3.95,
     "ref_date": "2020-12-01",
     "outcome": "YES",
     "exit_close": 4.3125,
     "exit_date": "2021-01-04",
     "move_pct": 0.0918,
     "chart": [
      {
       "date": "2020-09-04",
       "open": 1.945,
       "high": 1.98,
       "low": 1.7925,
       "close": 1.9125,
       "volume": 7661994.0
      },
      {
       "date": "2020-09-08",
       "open": 1.8875,
       "high": 2.07,
       "low": 1.87,
       "close": 1.925,
       "volume": 9816620.0
      },
      {
       "date": "2020-09-09",
       "open": 1.99,
       "high": 1.9975,
       "low": 1.8275,
       "close": 1.8375,
       "volume": 9068082.0
      },
      {
       "date": "2020-09-10",
       "open": 1.6625,
       "high": 1.7375,
       "low": 1.5475,
       "close": 1.5575,
       "volume": 15558278.0
      },
      {
       "date": "2020-09-11",
       "open": 1.565,
       "high": 1.5825,
       "low": 1.4675,
       "close": 1.5225,
       "volume": 6061190.0
      },
      {
       "date": "2020-09-14",
       "open": 1.7,
       "high": 1.75,
       "low": 1.6075,
       "close": 1.7275,
       "volume": 10118972.0
      },
      {
       "date": "2020-09-15",
       "open": 1.715,
       "high": 1.815,
       "low": 1.6712,
       "close": 1.7725,
       "volume": 5743489.0
      },
      {
       "date": "2020-09-16",
       "open": 1.7575,
       "high": 2.26,
       "low": 1.7575,
       "close": 2.17,
       "volume": 19346508.0
      },
      {
       "date": "2020-09-17",
       "open": 2.1425,
       "high": 2.4425,
       "low": 2.1025,
       "close": 2.3,
       "volume": 17026720.0
      },
      {
       "date": "2020-09-18",
       "open": 2.3,
       "high": 2.4425,
       "low": 2.2275,
       "close": 2.3675,
       "volume": 17407513.0
      },
      {
       "date": "2020-09-21",
       "open": 2.3375,
       "high": 2.4,
       "low": 2.095,
       "close": 2.1875,
       "volume": 7639806.0
      },
      {
       "date": "2020-09-22",
       "open": 2.6125,
       "high": 2.7925,
       "low": 2.475,
       "close": 2.64,
       "volume": 34752484.0
      },
      {
       "date": "2020-09-23",
       "open": 2.65,
       "high": 2.715,
       "low": 2.48,
       "close": 2.51,
       "volume": 10651152.0
      },
      {
       "date": "2020-09-24",
       "open": 2.4275,
       "high": 2.4525,
       "low": 2.2525,
       "close": 2.285,
       "volume": 7938838.0
      },
      {
       "date": "2020-09-25",
       "open": 2.2975,
       "high": 2.5457,
       "low": 2.275,
       "close": 2.505,
       "volume": 7515157.0
      },
      {
       "date": "2020-09-28",
       "open": 2.54,
       "high": 2.565,
       "low": 2.3875,
       "close": 2.5225,
       "volume": 6764323.0
      },
      {
       "date": "2020-09-29",
       "open": 2.5,
       "high": 2.6625,
       "low": 2.4825,
       "close": 2.5875,
       "volume": 5244339.0
      },
      {
       "date": "2020-09-30",
       "open": 2.5625,
       "high": 2.6899,
       "low": 2.515,
       "close": 2.55,
       "volume": 6079033.0
      },
      {
       "date": "2020-10-01",
       "open": 2.5225,
       "high": 2.5625,
       "low": 2.4225,
       "close": 2.4425,
       "volume": 4554055.0
      },
      {
       "date": "2020-10-02",
       "open": 2.345,
       "high": 2.445,
       "low": 2.325,
       "close": 2.3475,
       "volume": 4340484.0
      },
      {
       "date": "2020-10-05",
       "open": 2.36,
       "high": 2.3975,
       "low": 2.3125,
       "close": 2.365,
       "volume": 2804969.0
      },
      {
       "date": "2020-10-06",
       "open": 2.39,
       "high": 2.4588,
       "low": 2.275,
       "close": 2.2825,
       "volume": 4535421.0
      },
      {
       "date": "2020-10-07",
       "open": 2.3075,
       "high": 2.39,
       "low": 2.2919,
       "close": 2.34,
       "volume": 3308644.0
      },
      {
       "date": "2020-10-08",
       "open": 2.385,
       "high": 3.41,
       "low": 2.2975,
       "close": 3.3725,
       "volume": 76453557.0
      },
      {
       "date": "2020-10-09",
       "open": 3.2075,
       "high": 3.7,
       "low": 2.975,
       "close": 3.005,
       "volume": 77152780.0
      },
      {
       "date": "2020-10-12",
       "open": 2.915,
       "high": 3.1915,
       "low": 2.85,
       "close": 2.95,
       "volume": 23655701.0
      },
      {
       "date": "2020-10-13",
       "open": 2.9325,
       "high": 3.105,
       "low": 2.9125,
       "close": 2.97,
       "volume": 10179708.0
      },
      {
       "date": "2020-10-14",
       "open": 3.1675,
       "high": 3.17,
       "low": 3.0125,
       "close": 3.0625,
       "volume": 10776762.0
      },
      {
       "date": "2020-10-15",
       "open": 2.9975,
       "high": 3.775,
       "low": 2.9975,
       "close": 3.4575,
       "volume": 39894822.0
      },
      {
       "date": "2020-10-16",
       "open": 3.4425,
       "high": 3.475,
       "low": 3.27,
       "close": 3.3275,
       "volume": 11651578.0
      },
      {
       "date": "2020-10-19",
       "open": 3.36,
       "high": 3.625,
       "low": 3.345,
       "close": 3.4775,
       "volume": 13169073.0
      },
      {
       "date": "2020-10-20",
       "open": 3.5075,
       "high": 3.5358,
       "low": 3.4162,
       "close": 3.465,
       "volume": 6603951.0
      },
      {
       "date": "2020-10-21",
       "open": 3.475,
       "high": 3.605,
       "low": 3.45,
       "close": 3.525,
       "volume": 5361928.0
      },
      {
       "date": "2020-10-22",
       "open": 3.55,
       "high": 3.9675,
       "low": 3.5475,
       "close": 3.7275,
       "volume": 16212232.0
      },
      {
       "date": "2020-10-23",
       "open": 3.7625,
       "high": 3.845,
       "low": 3.6375,
       "close": 3.75,
       "volume": 6507324.0
      },
      {
       "date": "2020-10-26",
       "open": 3.7325,
       "high": 3.8625,
       "low": 3.315,
       "close": 3.3625,
       "volume": 13376269.0
      },
      {
       "date": "2020-10-27",
       "open": 3.4275,
       "high": 3.4275,
       "low": 3.09,
       "close": 3.1725,
       "volume": 7231006.0
      },
      {
       "date": "2020-10-28",
       "open": 3.0675,
       "high": 3.2625,
       "low": 2.945,
       "close": 2.955,
       "volume": 6388580.0
      },
      {
       "date": "2020-10-29",
       "open": 2.97,
       "high": 3.0625,
       "low": 2.92,
       "close": 2.9325,
       "volume": 4165843.0
      },
      {
       "date": "2020-10-30",
       "open": 2.91,
       "high": 2.91,
       "low": 2.59,
       "close": 2.6175,
       "volume": 11562367.0
      },
      {
       "date": "2020-11-02",
       "open": 2.705,
       "high": 2.7725,
       "low": 2.625,
       "close": 2.6875,
       "volume": 5227011.0
      },
      {
       "date": "2020-11-03",
       "open": 2.6875,
       "high": 2.965,
       "low": 2.6575,
       "close": 2.8925,
       "volume": 7454472.0
      },
      {
       "date": "2020-11-04",
       "open": 2.94,
       "high": 2.9425,
       "low": 2.6525,
       "close": 2.7275,
       "volume": 5807871.0
      },
      {
       "date": "2020-11-05",
       "open": 2.8175,
       "high": 2.96,
       "low": 2.765,
       "close": 2.8625,
       "volume": 4705245.0
      },
      {
       "date": "2020-11-06",
       "open": 2.88,
       "high": 3.0425,
       "low": 2.83,
       "close": 2.965,
       "volume": 5518243.0
      },
      {
       "date": "2020-11-09",
       "open": 3.19,
       "high": 3.2325,
       "low": 2.8125,
       "close": 2.8725,
       "volume": 6244865.0
      },
      {
       "date": "2020-11-10",
       "open": 2.875,
       "high": 2.915,
       "low": 2.7075,
       "close": 2.775,
       "volume": 3825963.0
      },
      {
       "date": "2020-11-11",
       "open": 2.875,
       "high": 2.9875,
       "low": 2.8025,
       "close": 2.9375,
       "volume": 4882569.0
      },
      {
       "date": "2020-11-12",
       "open": 2.935,
       "high": 2.9675,
       "low": 2.7425,
       "close": 2.7825,
       "volume": 4355892.0
      },
      {
       "date": "2020-11-13",
       "open": 2.84,
       "high": 2.8875,
       "low": 2.75,
       "close": 2.7525,
       "volume": 3546171.0
      },
      {
       "date": "2020-11-16",
       "open": 2.79,
       "high": 3.165,
       "low": 2.68,
       "close": 3.015,
       "volume": 9774824.0
      },
      {
       "date": "2020-11-17",
       "open": 2.9125,
       "high": 2.98,
       "low": 2.8075,
       "close": 2.9075,
       "volume": 6678176.0
      },
      {
       "date": "2020-11-18",
       "open": 2.95,
       "high": 3.01,
       "low": 2.89,
       "close": 2.8925,
       "volume": 3169222.0
      },
      {
       "date": "2020-11-19",
       "open": 2.9,
       "high": 3.1975,
       "low": 2.8625,
       "close": 3.115,
       "volume": 11787613.0
      },
      {
       "date": "2020-11-20",
       "open": 3.1375,
       "high": 3.365,
       "low": 3.135,
       "close": 3.1775,
       "volume": 8402347.0
      },
      {
       "date": "2020-11-23",
       "open": 3.225,
       "high": 3.53,
       "low": 3.1675,
       "close": 3.475,
       "volume": 9607973.0
      },
      {
       "date": "2020-11-24",
       "open": 3.5575,
       "high": 3.565,
       "low": 3.325,
       "close": 3.4175,
       "volume": 7130536.0
      },
      {
       "date": "2020-11-25",
       "open": 3.4,
       "high": 3.8125,
       "low": 3.355,
       "close": 3.6875,
       "volume": 8860092.0
      },
      {
       "date": "2020-11-27",
       "open": 3.8225,
       "high": 4.185,
       "low": 3.72,
       "close": 4.02,
       "volume": 12504197.0
      },
      {
       "date": "2020-11-30",
       "open": 4.5425,
       "high": 4.855,
       "low": 4.1394,
       "close": 4.14,
       "volume": 31983498.0
      },
      {
       "date": "2020-12-01",
       "open": 4.2775,
       "high": 4.35,
       "low": 3.94,
       "close": 3.95,
       "volume": 12260810.0
      },
      {
       "date": "2020-12-02",
       "open": 3.925,
       "high": 4.17,
       "low": 3.845,
       "close": 4.145,
       "volume": 7883380.0
      },
      {
       "date": "2020-12-03",
       "open": 4.12,
       "high": 4.16,
       "low": 3.9675,
       "close": 4.03,
       "volume": 6294965.0
      },
      {
       "date": "2020-12-04",
       "open": 4.075,
       "high": 4.3225,
       "low": 4.065,
       "close": 4.225,
       "volume": 8972672.0
      },
      {
       "date": "2020-12-07",
       "open": 4.25,
       "high": 4.375,
       "low": 4.055,
       "close": 4.0875,
       "volume": 7386258.0
      },
      {
       "date": "2020-12-08",
       "open": 4.0925,
       "high": 4.3025,
       "low": 3.9825,
       "close": 4.235,
       "volume": 16120163.0
      },
      {
       "date": "2020-12-09",
       "open": 3.48,
       "high": 3.6825,
       "low": 3.3062,
       "close": 3.415,
       "volume": 24357944.0
      },
      {
       "date": "2020-12-10",
       "open": 3.28,
       "high": 3.6025,
       "low": 3.2625,
       "close": 3.53,
       "volume": 7558922.0
      },
      {
       "date": "2020-12-11",
       "open": 3.4775,
       "high": 3.5,
       "low": 3.255,
       "close": 3.3275,
       "volume": 7496868.0
      },
      {
       "date": "2020-12-14",
       "open": 3.335,
       "high": 3.3584,
       "low": 3.035,
       "close": 3.18,
       "volume": 10007092.0
      },
      {
       "date": "2020-12-15",
       "open": 3.195,
       "high": 3.505,
       "low": 3.12,
       "close": 3.4625,
       "volume": 8192856.0
      },
      {
       "date": "2020-12-16",
       "open": 3.49,
       "high": 3.5762,
       "low": 3.395,
       "close": 3.4625,
       "volume": 5865123.0
      },
      {
       "date": "2020-12-17",
       "open": 3.49,
       "high": 3.745,
       "low": 3.3975,
       "close": 3.7075,
       "volume": 8194902.0
      },
      {
       "date": "2020-12-18",
       "open": 3.945,
       "high": 4.075,
       "low": 3.795,
       "close": 3.9075,
       "volume": 16618776.0
      },
      {
       "date": "2020-12-21",
       "open": 3.9525,
       "high": 4.087,
       "low": 3.82,
       "close": 3.8825,
       "volume": 9876128.0
      },
      {
       "date": "2020-12-22",
       "open": 4.055,
       "high": 5.01,
       "low": 4.0375,
       "close": 4.865,
       "volume": 30687718.0
      },
      {
       "date": "2020-12-23",
       "open": 5.0425,
       "high": 5.5875,
       "low": 4.7825,
       "close": 5.1425,
       "volume": 25830256.0
      },
      {
       "date": "2020-12-24",
       "open": 5.2525,
       "high": 5.37,
       "low": 4.9875,
       "close": 5.0375,
       "volume": 6262174.0
      },
      {
       "date": "2020-12-28",
       "open": 5.3275,
       "high": 5.4925,
       "low": 5.0875,
       "close": 5.2475,
       "volume": 8924279.0
      },
      {
       "date": "2020-12-29",
       "open": 5.205,
       "high": 5.2675,
       "low": 4.64,
       "close": 4.845,
       "volume": 9241441.0
      },
      {
       "date": "2020-12-30",
       "open": 4.845,
       "high": 5.0,
       "low": 4.7125,
       "close": 4.815,
       "volume": 5934391.0
      },
      {
       "date": "2020-12-31",
       "open": 4.8125,
       "high": 4.95,
       "low": 4.7,
       "close": 4.71,
       "volume": 6922652.0
      },
      {
       "date": "2021-01-04",
       "open": 4.75,
       "high": 4.775,
       "low": 4.2875,
       "close": 4.3125,
       "volume": 10022474.0
      }
     ],
     "npc_bets": [
      {
       "player_id": "p01",
       "action": "反",
       "stake": 240,
       "side_price": 0.5,
       "result": {
        "won": false,
        "payout": 0.0
       }
      },
      {
       "player_id": "p02",
       "action": "跟",
       "stake": 240,
       "side_price": 0.5,
       "result": {
        "won": true,
        "payout": 480.0
       }
      },
      {
       "player_id": "p03",
       "action": "反",
       "stake": 240,
       "side_price": 0.5,
       "result": {
        "won": false,
        "payout": 0.0
       }
      },
      {
       "player_id": "p05",
       "action": "跟",
       "stake": 240,
       "side_price": 0.5,
       "result": {
        "won": true,
        "payout": 480.0
       }
      }
     ],
     "commission": {
      "pool": 480.0,
      "rate": 0.0,
      "paid": 0.0
     },
     "is_burst": false,
     "q_en": "A turnaround story of a brick-and-mortar game retailer paired with short interest over 100%—what do you think happens next?",
     "reason_en": "Physical game retail is a dying industry; the turnaround narrative has been told for a decade.",
     "mood_en": "Waiting it out",
     "headline_en": "Ryan Cohen increased stake to 12.9% and wrote to the board, while the stock's short interest already exceeded 100%.",
     "background_en": "Chewy founder Ryan Cohen increased his stake to 12.9% and publicly wrote to the board demanding the company pivot to e-commerce. At this time, GameStop's short interest exceeded 100% of float—more shares had been borrowed for shorting than actually existed."
    }
   ],
   "dealer_cash_after": 10000.0
  },
  {
   "day_idx": 2,
   "date": "2021-01-04",
   "ideas": [
    {
     "id": "2021-01-jan13-spike",
     "ticker": "GME",
     "company": "GameStop Corp",
     "headline": "没有任何公告，GameStop 单日暴涨 57%",
     "question": "涨得毫无理由，你猜接下来这几天是回吐还是接着上？",
     "reason": "无消息暴涨都是资金炒作，来得快去得快。",
     "mood": "困惑",
     "price": 0.55,
     "holding_days": 4,
     "hype": 0.8,
     "lead_context": {
      "months": 3,
      "from": 2.35,
      "to": 4.31,
      "pct": 0.8371,
      "week_pct": -0.1439
     },
     "background": "1 月 13 日单日上涨约 57%，没有任何公司公告。成交量是平常的几十倍，论坛上开始出现「这次不一样」的讨论。做空方此时仍在加仓。",
     "resolved_from": "live",
     "ref_close": 4.3125,
     "ref_date": "2021-01-04",
     "outcome": "YES",
     "exit_close": 4.4225,
     "exit_date": "2021-01-08",
     "move_pct": 0.0255,
     "chart": [
      {
       "date": "2020-10-07",
       "open": 2.3075,
       "high": 2.39,
       "low": 2.2919,
       "close": 2.34,
       "volume": 3308644.0
      },
      {
       "date": "2020-10-08",
       "open": 2.385,
       "high": 3.41,
       "low": 2.2975,
       "close": 3.3725,
       "volume": 76453557.0
      },
      {
       "date": "2020-10-09",
       "open": 3.2075,
       "high": 3.7,
       "low": 2.975,
       "close": 3.005,
       "volume": 77152780.0
      },
      {
       "date": "2020-10-12",
       "open": 2.915,
       "high": 3.1915,
       "low": 2.85,
       "close": 2.95,
       "volume": 23655701.0
      },
      {
       "date": "2020-10-13",
       "open": 2.9325,
       "high": 3.105,
       "low": 2.9125,
       "close": 2.97,
       "volume": 10179708.0
      },
      {
       "date": "2020-10-14",
       "open": 3.1675,
       "high": 3.17,
       "low": 3.0125,
       "close": 3.0625,
       "volume": 10776762.0
      },
      {
       "date": "2020-10-15",
       "open": 2.9975,
       "high": 3.775,
       "low": 2.9975,
       "close": 3.4575,
       "volume": 39894822.0
      },
      {
       "date": "2020-10-16",
       "open": 3.4425,
       "high": 3.475,
       "low": 3.27,
       "close": 3.3275,
       "volume": 11651578.0
      },
      {
       "date": "2020-10-19",
       "open": 3.36,
       "high": 3.625,
       "low": 3.345,
       "close": 3.4775,
       "volume": 13169073.0
      },
      {
       "date": "2020-10-20",
       "open": 3.5075,
       "high": 3.5358,
       "low": 3.4162,
       "close": 3.465,
       "volume": 6603951.0
      },
      {
       "date": "2020-10-21",
       "open": 3.475,
       "high": 3.605,
       "low": 3.45,
       "close": 3.525,
       "volume": 5361928.0
      },
      {
       "date": "2020-10-22",
       "open": 3.55,
       "high": 3.9675,
       "low": 3.5475,
       "close": 3.7275,
       "volume": 16212232.0
      },
      {
       "date": "2020-10-23",
       "open": 3.7625,
       "high": 3.845,
       "low": 3.6375,
       "close": 3.75,
       "volume": 6507324.0
      },
      {
       "date": "2020-10-26",
       "open": 3.7325,
       "high": 3.8625,
       "low": 3.315,
       "close": 3.3625,
       "volume": 13376269.0
      },
      {
       "date": "2020-10-27",
       "open": 3.4275,
       "high": 3.4275,
       "low": 3.09,
       "close": 3.1725,
       "volume": 7231006.0
      },
      {
       "date": "2020-10-28",
       "open": 3.0675,
       "high": 3.2625,
       "low": 2.945,
       "close": 2.955,
       "volume": 6388580.0
      },
      {
       "date": "2020-10-29",
       "open": 2.97,
       "high": 3.0625,
       "low": 2.92,
       "close": 2.9325,
       "volume": 4165843.0
      },
      {
       "date": "2020-10-30",
       "open": 2.91,
       "high": 2.91,
       "low": 2.59,
       "close": 2.6175,
       "volume": 11562367.0
      },
      {
       "date": "2020-11-02",
       "open": 2.705,
       "high": 2.7725,
       "low": 2.625,
       "close": 2.6875,
       "volume": 5227011.0
      },
      {
       "date": "2020-11-03",
       "open": 2.6875,
       "high": 2.965,
       "low": 2.6575,
       "close": 2.8925,
       "volume": 7454472.0
      },
      {
       "date": "2020-11-04",
       "open": 2.94,
       "high": 2.9425,
       "low": 2.6525,
       "close": 2.7275,
       "volume": 5807871.0
      },
      {
       "date": "2020-11-05",
       "open": 2.8175,
       "high": 2.96,
       "low": 2.765,
       "close": 2.8625,
       "volume": 4705245.0
      },
      {
       "date": "2020-11-06",
       "open": 2.88,
       "high": 3.0425,
       "low": 2.83,
       "close": 2.965,
       "volume": 5518243.0
      },
      {
       "date": "2020-11-09",
       "open": 3.19,
       "high": 3.2325,
       "low": 2.8125,
       "close": 2.8725,
       "volume": 6244865.0
      },
      {
       "date": "2020-11-10",
       "open": 2.875,
       "high": 2.915,
       "low": 2.7075,
       "close": 2.775,
       "volume": 3825963.0
      },
      {
       "date": "2020-11-11",
       "open": 2.875,
       "high": 2.9875,
       "low": 2.8025,
       "close": 2.9375,
       "volume": 4882569.0
      },
      {
       "date": "2020-11-12",
       "open": 2.935,
       "high": 2.9675,
       "low": 2.7425,
       "close": 2.7825,
       "volume": 4355892.0
      },
      {
       "date": "2020-11-13",
       "open": 2.84,
       "high": 2.8875,
       "low": 2.75,
       "close": 2.7525,
       "volume": 3546171.0
      },
      {
       "date": "2020-11-16",
       "open": 2.79,
       "high": 3.165,
       "low": 2.68,
       "close": 3.015,
       "volume": 9774824.0
      },
      {
       "date": "2020-11-17",
       "open": 2.9125,
       "high": 2.98,
       "low": 2.8075,
       "close": 2.9075,
       "volume": 6678176.0
      },
      {
       "date": "2020-11-18",
       "open": 2.95,
       "high": 3.01,
       "low": 2.89,
       "close": 2.8925,
       "volume": 3169222.0
      },
      {
       "date": "2020-11-19",
       "open": 2.9,
       "high": 3.1975,
       "low": 2.8625,
       "close": 3.115,
       "volume": 11787613.0
      },
      {
       "date": "2020-11-20",
       "open": 3.1375,
       "high": 3.365,
       "low": 3.135,
       "close": 3.1775,
       "volume": 8402347.0
      },
      {
       "date": "2020-11-23",
       "open": 3.225,
       "high": 3.53,
       "low": 3.1675,
       "close": 3.475,
       "volume": 9607973.0
      },
      {
       "date": "2020-11-24",
       "open": 3.5575,
       "high": 3.565,
       "low": 3.325,
       "close": 3.4175,
       "volume": 7130536.0
      },
      {
       "date": "2020-11-25",
       "open": 3.4,
       "high": 3.8125,
       "low": 3.355,
       "close": 3.6875,
       "volume": 8860092.0
      },
      {
       "date": "2020-11-27",
       "open": 3.8225,
       "high": 4.185,
       "low": 3.72,
       "close": 4.02,
       "volume": 12504197.0
      },
      {
       "date": "2020-11-30",
       "open": 4.5425,
       "high": 4.855,
       "low": 4.1394,
       "close": 4.14,
       "volume": 31983498.0
      },
      {
       "date": "2020-12-01",
       "open": 4.2775,
       "high": 4.35,
       "low": 3.94,
       "close": 3.95,
       "volume": 12260810.0
      },
      {
       "date": "2020-12-02",
       "open": 3.925,
       "high": 4.17,
       "low": 3.845,
       "close": 4.145,
       "volume": 7883380.0
      },
      {
       "date": "2020-12-03",
       "open": 4.12,
       "high": 4.16,
       "low": 3.9675,
       "close": 4.03,
       "volume": 6294965.0
      },
      {
       "date": "2020-12-04",
       "open": 4.075,
       "high": 4.3225,
       "low": 4.065,
       "close": 4.225,
       "volume": 8972672.0
      },
      {
       "date": "2020-12-07",
       "open": 4.25,
       "high": 4.375,
       "low": 4.055,
       "close": 4.0875,
       "volume": 7386258.0
      },
      {
       "date": "2020-12-08",
       "open": 4.0925,
       "high": 4.3025,
       "low": 3.9825,
       "close": 4.235,
       "volume": 16120163.0
      },
      {
       "date": "2020-12-09",
       "open": 3.48,
       "high": 3.6825,
       "low": 3.3062,
       "close": 3.415,
       "volume": 24357944.0
      },
      {
       "date": "2020-12-10",
       "open": 3.28,
       "high": 3.6025,
       "low": 3.2625,
       "close": 3.53,
       "volume": 7558922.0
      },
      {
       "date": "2020-12-11",
       "open": 3.4775,
       "high": 3.5,
       "low": 3.255,
       "close": 3.3275,
       "volume": 7496868.0
      },
      {
       "date": "2020-12-14",
       "open": 3.335,
       "high": 3.3584,
       "low": 3.035,
       "close": 3.18,
       "volume": 10007092.0
      },
      {
       "date": "2020-12-15",
       "open": 3.195,
       "high": 3.505,
       "low": 3.12,
       "close": 3.4625,
       "volume": 8192856.0
      },
      {
       "date": "2020-12-16",
       "open": 3.49,
       "high": 3.5762,
       "low": 3.395,
       "close": 3.4625,
       "volume": 5865123.0
      },
      {
       "date": "2020-12-17",
       "open": 3.49,
       "high": 3.745,
       "low": 3.3975,
       "close": 3.7075,
       "volume": 8194902.0
      },
      {
       "date": "2020-12-18",
       "open": 3.945,
       "high": 4.075,
       "low": 3.795,
       "close": 3.9075,
       "volume": 16618776.0
      },
      {
       "date": "2020-12-21",
       "open": 3.9525,
       "high": 4.087,
       "low": 3.82,
       "close": 3.8825,
       "volume": 9876128.0
      },
      {
       "date": "2020-12-22",
       "open": 4.055,
       "high": 5.01,
       "low": 4.0375,
       "close": 4.865,
       "volume": 30687718.0
      },
      {
       "date": "2020-12-23",
       "open": 5.0425,
       "high": 5.5875,
       "low": 4.7825,
       "close": 5.1425,
       "volume": 25830256.0
      },
      {
       "date": "2020-12-24",
       "open": 5.2525,
       "high": 5.37,
       "low": 4.9875,
       "close": 5.0375,
       "volume": 6262174.0
      },
      {
       "date": "2020-12-28",
       "open": 5.3275,
       "high": 5.4925,
       "low": 5.0875,
       "close": 5.2475,
       "volume": 8924279.0
      },
      {
       "date": "2020-12-29",
       "open": 5.205,
       "high": 5.2675,
       "low": 4.64,
       "close": 4.845,
       "volume": 9241441.0
      },
      {
       "date": "2020-12-30",
       "open": 4.845,
       "high": 5.0,
       "low": 4.7125,
       "close": 4.815,
       "volume": 5934391.0
      },
      {
       "date": "2020-12-31",
       "open": 4.8125,
       "high": 4.95,
       "low": 4.7,
       "close": 4.71,
       "volume": 6922652.0
      },
      {
       "date": "2021-01-04",
       "open": 4.75,
       "high": 4.775,
       "low": 4.2875,
       "close": 4.3125,
       "volume": 10022474.0
      },
      {
       "date": "2021-01-05",
       "open": 4.3375,
       "high": 4.5191,
       "low": 4.3075,
       "close": 4.3425,
       "volume": 4961457.0
      },
      {
       "date": "2021-01-06",
       "open": 4.335,
       "high": 4.745,
       "low": 4.3325,
       "close": 4.59,
       "volume": 6056248.0
      },
      {
       "date": "2021-01-07",
       "open": 4.6175,
       "high": 4.8625,
       "low": 4.505,
       "close": 4.52,
       "volume": 6129276.0
      },
      {
       "date": "2021-01-08",
       "open": 4.545,
       "high": 4.575,
       "low": 4.27,
       "close": 4.4225,
       "volume": 6481960.0
      }
     ],
     "npc_bets": [
      {
       "player_id": "p01",
       "action": "跟",
       "stake": 211,
       "side_price": 0.55,
       "result": {
        "won": true,
        "payout": 383.64
       }
      },
      {
       "player_id": "p04",
       "action": "跟",
       "stake": 240,
       "side_price": 0.55,
       "result": {
        "won": true,
        "payout": 436.36
       }
      },
      {
       "player_id": "p06",
       "action": "跟",
       "stake": 240,
       "side_price": 0.55,
       "result": {
        "won": true,
        "payout": 436.36
       }
      }
     ],
     "commission": {
      "pool": 691.0,
      "rate": 0.075,
      "paid": 51.83
     },
     "is_burst": false,
     "q_en": "Gains with no reason—do you think it pulls back in the next few days or keeps going up?",
     "reason_en": "Rallies without news are all capital speculation, they come fast and go fast.",
     "mood_en": "Confused.",
     "headline_en": "GameStop surged 57% in a single day with no announcement.",
     "background_en": "On January 13th, single-day gain of about 57% with no company announcement. Trading volume was dozens of times normal; forums started discussions of \"this time it's different.\" Short sellers were still adding positions."
    }
   ],
   "dealer_cash_after": 10051.83
  },
  {
   "day_idx": 3,
   "date": "2021-01-08",
   "ideas": [
    {
     "id": "2021-01-amc-joins",
     "ticker": "AMC",
     "company": "AMC Entertainment Holdings",
     "headline": "刚警告过现金撑不到年中的影院公司，被论坛选中当下一个目标",
     "question": "基本面越差越被选中，你猜这段时间这个逻辑走得通吗？",
     "reason": "快破产的公司凭什么涨，这不合常理。",
     "mood": "荒诞",
     "price": 0.55,
     "holding_days": 7,
     "hype": 0.85,
     "lead_context": {
      "months": 3,
      "from": 41.38,
      "to": 21.39,
      "pct": -0.4831,
      "week_pct": 0.0094
     },
     "background": "影院公司被论坛点名成为下一个目标。此时它的影院大部分还在关闭状态，公司刚刚警告过现金可能撑不到年中，正在到处找钱。基本面越差、空头越多，反而越符合筛选标准。",
     "resolved_from": "live",
     "ref_close": 21.3912,
     "ref_date": "2021-01-08",
     "outcome": "YES",
     "exit_close": 23.2905,
     "exit_date": "2021-01-15",
     "move_pct": 0.0888,
     "chart": [
      {
       "date": "2020-10-13",
       "open": 38.984,
       "high": 39.084,
       "low": 35.1856,
       "close": 35.3855,
       "volume": 10164744.0
      },
      {
       "date": "2020-10-14",
       "open": 30.8874,
       "high": 31.9869,
       "low": 26.5891,
       "close": 29.5879,
       "volume": 31761265.0
      },
      {
       "date": "2020-10-15",
       "open": 28.3884,
       "high": 29.5879,
       "low": 27.5887,
       "close": 27.7886,
       "volume": 9808591.0
      },
      {
       "date": "2020-10-16",
       "open": 28.6883,
       "high": 32.8865,
       "low": 27.9885,
       "close": 30.3876,
       "volume": 18565805.0
      },
      {
       "date": "2020-10-19",
       "open": 33.0865,
       "high": 38.7841,
       "low": 32.2868,
       "close": 35.3855,
       "volume": 40385068.0
      },
      {
       "date": "2020-10-20",
       "open": 32.9865,
       "high": 33.0865,
       "low": 30.4875,
       "close": 30.8874,
       "volume": 15978782.0
      },
      {
       "date": "2020-10-21",
       "open": 30.9873,
       "high": 31.2862,
       "low": 29.7878,
       "close": 29.9877,
       "volume": 7277305.0
      },
      {
       "date": "2020-10-22",
       "open": 29.5879,
       "high": 31.4871,
       "low": 28.3884,
       "close": 31.1872,
       "volume": 12339596.0
      },
      {
       "date": "2020-10-23",
       "open": 31.2872,
       "high": 31.4871,
       "low": 29.4879,
       "close": 29.6879,
       "volume": 6634962.0
      },
      {
       "date": "2020-10-26",
       "open": 29.1881,
       "high": 29.288,
       "low": 26.789,
       "close": 27.4888,
       "volume": 10458790.0
      },
      {
       "date": "2020-10-27",
       "open": 28.7882,
       "high": 28.9881,
       "low": 26.0893,
       "close": 27.8886,
       "volume": 11251269.0
      },
      {
       "date": "2020-10-28",
       "open": 26.889,
       "high": 27.3888,
       "low": 25.7894,
       "close": 26.0893,
       "volume": 8141103.0
      },
      {
       "date": "2020-10-29",
       "open": 26.4892,
       "high": 26.789,
       "low": 24.7899,
       "close": 25.1897,
       "volume": 9019304.0
      },
      {
       "date": "2020-10-30",
       "open": 24.7899,
       "high": 24.8898,
       "low": 22.7907,
       "close": 23.5903,
       "volume": 11013232.0
      },
      {
       "date": "2020-11-02",
       "open": 22.9906,
       "high": 23.1905,
       "low": 21.0914,
       "close": 21.4912,
       "volume": 11180071.0
      },
      {
       "date": "2020-11-03",
       "open": 23.3904,
       "high": 25.8894,
       "low": 22.9906,
       "close": 23.3904,
       "volume": 15441929.0
      },
      {
       "date": "2020-11-04",
       "open": 23.9902,
       "high": 24.2891,
       "low": 22.3918,
       "close": 23.0906,
       "volume": 7609136.0
      },
      {
       "date": "2020-11-05",
       "open": 23.4904,
       "high": 25.6895,
       "low": 22.6907,
       "close": 24.5899,
       "volume": 8056242.0
      },
      {
       "date": "2020-11-06",
       "open": 24.2901,
       "high": 26.1893,
       "low": 23.2905,
       "close": 24.8898,
       "volume": 9049450.0
      },
      {
       "date": "2020-11-09",
       "open": 42.6825,
       "high": 43.882,
       "low": 32.2868,
       "close": 37.6846,
       "volume": 132510953.0
      },
      {
       "date": "2020-11-10",
       "open": 39.8837,
       "high": 40.2835,
       "low": 33.3863,
       "close": 35.0856,
       "volume": 42129263.0
      },
      {
       "date": "2020-11-11",
       "open": 32.2948,
       "high": 32.3867,
       "low": 29.9877,
       "close": 31.2872,
       "volume": 24066098.0
      },
      {
       "date": "2020-11-12",
       "open": 30.6874,
       "high": 30.6874,
       "low": 29.1881,
       "close": 29.388,
       "volume": 14836046.0
      },
      {
       "date": "2020-11-13",
       "open": 29.7878,
       "high": 29.8878,
       "low": 27.7886,
       "close": 29.6879,
       "volume": 22451870.0
      },
      {
       "date": "2020-11-16",
       "open": 33.8861,
       "high": 33.8861,
       "low": 30.4875,
       "close": 31.0873,
       "volume": 47604346.0
      },
      {
       "date": "2020-11-17",
       "open": 30.0877,
       "high": 30.3876,
       "low": 28.9881,
       "close": 29.7878,
       "volume": 22482959.0
      },
      {
       "date": "2020-11-18",
       "open": 30.7874,
       "high": 33.6862,
       "low": 30.0877,
       "close": 32.5867,
       "volume": 31717281.0
      },
      {
       "date": "2020-11-19",
       "open": 31.5871,
       "high": 33.7362,
       "low": 31.4871,
       "close": 31.887,
       "volume": 13986442.0
      },
      {
       "date": "2020-11-20",
       "open": 32.4867,
       "high": 33.6862,
       "low": 32.0869,
       "close": 33.4863,
       "volume": 17088783.0
      },
      {
       "date": "2020-11-23",
       "open": 35.0856,
       "high": 38.4843,
       "low": 34.0861,
       "close": 38.0844,
       "volume": 31514579.0
      },
      {
       "date": "2020-11-24",
       "open": 41.583,
       "high": 49.9796,
       "low": 41.483,
       "close": 45.7813,
       "volume": 62172590.0
      },
      {
       "date": "2020-11-25",
       "open": 45.6813,
       "high": 48.4802,
       "low": 41.9828,
       "close": 44.8816,
       "volume": 22647306.0
      },
      {
       "date": "2020-11-27",
       "open": 45.3814,
       "high": 46.1811,
       "low": 43.5822,
       "close": 44.4818,
       "volume": 10097374.0
      },
      {
       "date": "2020-11-30",
       "open": 44.082,
       "high": 44.4818,
       "low": 39.8837,
       "close": 42.6825,
       "volume": 16554987.0
      },
      {
       "date": "2020-12-01",
       "open": 44.2819,
       "high": 44.2819,
       "low": 40.8833,
       "close": 41.483,
       "volume": 12047814.0
      },
      {
       "date": "2020-12-02",
       "open": 40.7833,
       "high": 43.3822,
       "low": 39.4838,
       "close": 43.1823,
       "volume": 11847629.0
      },
      {
       "date": "2020-12-03",
       "open": 40.0836,
       "high": 42.1328,
       "low": 34.9857,
       "close": 36.2852,
       "volume": 66080891.0
      },
      {
       "date": "2020-12-04",
       "open": 37.4847,
       "high": 37.5846,
       "low": 32.9865,
       "close": 35.0856,
       "volume": 33157263.0
      },
      {
       "date": "2020-12-07",
       "open": 34.4859,
       "high": 37.3847,
       "low": 33.2864,
       "close": 35.5854,
       "volume": 20503852.0
      },
      {
       "date": "2020-12-08",
       "open": 36.0852,
       "high": 40.1836,
       "low": 36.0852,
       "close": 39.7837,
       "volume": 29530632.0
      },
      {
       "date": "2020-12-09",
       "open": 42.1827,
       "high": 43.2823,
       "low": 37.4847,
       "close": 38.5842,
       "volume": 20991197.0
      },
      {
       "date": "2020-12-10",
       "open": 37.8845,
       "high": 40.9832,
       "low": 37.6846,
       "close": 40.8833,
       "volume": 19872845.0
      },
      {
       "date": "2020-12-11",
       "open": 40.3835,
       "high": 42.4826,
       "low": 38.6842,
       "close": 39.184,
       "volume": 22310377.0
      },
      {
       "date": "2020-12-14",
       "open": 40.0836,
       "high": 40.0836,
       "low": 29.9877,
       "close": 31.887,
       "volume": 67158976.0
      },
      {
       "date": "2020-12-15",
       "open": 32.3867,
       "high": 32.3867,
       "low": 27.5887,
       "close": 28.5883,
       "volume": 54432125.0
      },
      {
       "date": "2020-12-16",
       "open": 28.6883,
       "high": 28.8882,
       "low": 27.1889,
       "close": 27.7886,
       "volume": 25423239.0
      },
      {
       "date": "2020-12-17",
       "open": 27.9885,
       "high": 29.4879,
       "low": 27.3888,
       "close": 28.4883,
       "volume": 23799298.0
      },
      {
       "date": "2020-12-18",
       "open": 28.4883,
       "high": 28.4883,
       "low": 27.5887,
       "close": 27.9885,
       "volume": 21941652.0
      },
      {
       "date": "2020-12-21",
       "open": 26.0893,
       "high": 27.3888,
       "low": 25.7894,
       "close": 26.789,
       "volume": 22699798.0
      },
      {
       "date": "2020-12-22",
       "open": 27.2888,
       "high": 27.4888,
       "low": 25.1897,
       "close": 25.8894,
       "volume": 21686612.0
      },
      {
       "date": "2020-12-23",
       "open": 25.7894,
       "high": 26.4892,
       "low": 25.3896,
       "close": 25.5895,
       "volume": 15724765.0
      },
      {
       "date": "2020-12-24",
       "open": 25.8894,
       "high": 25.9894,
       "low": 24.7899,
       "close": 25.0897,
       "volume": 11094189.0
      },
      {
       "date": "2020-12-28",
       "open": 26.2892,
       "high": 26.2892,
       "low": 23.5903,
       "close": 23.8902,
       "volume": 23241725.0
      },
      {
       "date": "2020-12-29",
       "open": 24.39,
       "high": 24.5899,
       "low": 22.7907,
       "close": 22.8906,
       "volume": 21086148.0
      },
      {
       "date": "2020-12-30",
       "open": 22.9906,
       "high": 22.9906,
       "low": 21.2913,
       "close": 21.5912,
       "volume": 40278438.0
      },
      {
       "date": "2020-12-31",
       "open": 21.6911,
       "high": 22.1909,
       "low": 20.7915,
       "close": 21.1913,
       "volume": 28234251.0
      },
      {
       "date": "2021-01-04",
       "open": 21.991,
       "high": 21.991,
       "low": 19.9918,
       "close": 20.0918,
       "volume": 29873796.0
      },
      {
       "date": "2021-01-05",
       "open": 19.8919,
       "high": 20.2917,
       "low": 19.0922,
       "close": 19.7919,
       "volume": 28148314.0
      },
      {
       "date": "2021-01-06",
       "open": 20.2917,
       "high": 22.2909,
       "low": 19.6919,
       "close": 20.0918,
       "volume": 67363337.0
      },
      {
       "date": "2021-01-07",
       "open": 20.7915,
       "high": 21.0914,
       "low": 20.1917,
       "close": 20.4916,
       "volume": 26150489.0
      },
      {
       "date": "2021-01-08",
       "open": 20.8915,
       "high": 22.101,
       "low": 20.6915,
       "close": 21.3912,
       "volume": 39553343.0
      },
      {
       "date": "2021-01-11",
       "open": 21.5912,
       "high": 22.6907,
       "low": 21.4912,
       "close": 21.991,
       "volume": 41695836.0
      },
      {
       "date": "2021-01-12",
       "open": 22.3908,
       "high": 23.8902,
       "low": 22.3409,
       "close": 22.8906,
       "volume": 41279713.0
      },
      {
       "date": "2021-01-13",
       "open": 23.2905,
       "high": 23.7903,
       "low": 21.2913,
       "close": 21.7911,
       "volume": 45847659.0
      },
      {
       "date": "2021-01-14",
       "open": 22.1909,
       "high": 23.1905,
       "low": 21.2913,
       "close": 21.7911,
       "volume": 49638794.0
      },
      {
       "date": "2021-01-15",
       "open": 21.991,
       "high": 25.4896,
       "low": 21.7911,
       "close": 23.2905,
       "volume": 162356375.0
      }
     ],
     "npc_bets": [
      {
       "player_id": "p05",
       "action": "反",
       "stake": 269,
       "side_price": 0.45,
       "result": {
        "won": false,
        "payout": 0.0
       }
      },
      {
       "player_id": "p06",
       "action": "跟",
       "stake": 264,
       "side_price": 0.55,
       "result": {
        "won": true,
        "payout": 480.0
       }
      }
     ],
     "commission": {
      "pool": 264.0,
      "rate": 0.075,
      "paid": 19.8
     },
     "is_burst": false,
     "q_en": "The worse the fundamentals, the more it gets selected—do you think this logic holds up?",
     "reason_en": "Why would a near-bankrupt company go up? This makes no sense.",
     "mood_en": "Absurdity",
     "headline_en": "A movie theater company that just warned cash won't last until mid-year was selected as the next target.",
     "background_en": "A movie theater company was singled out on forums as the next target. At this time, most of its theaters were still closed, the company had just warned that cash might not last through mid-year, and it was desperately raising money. The worse the fundamentals and the higher the short interest, the more it fits the selection criteria."
    }
   ],
   "dealer_cash_after": 10071.63
  },
  {
   "day_idx": 4,
   "date": "2021-01-15",
   "ideas": [
    {
     "id": "2021-01-blackberry-nokia",
     "ticker": "BB",
     "company": "BlackBerry Limited",
     "headline": "早就不做手机的黑莓被翻出来，筛选标准是怀旧加高空头占比",
     "question": "一个靠情感记忆被选中的标的，你猜这段时间能走多远？",
     "reason": "名字有情怀不代表生意有起色。",
     "mood": "荒诞",
     "price": 0.55,
     "holding_days": 10,
     "hype": 0.8,
     "lead_context": {
      "months": 3,
      "from": 5.16,
      "to": 9.84,
      "pct": 0.907,
      "week_pct": 0.3016
     },
     "background": "黑莓早就不做手机了，现在卖车载软件和安全服务。但它是一个所有人都认识的名字，而且散户对它有情感记忆——这一轮的筛选标准是「怀旧 + 高空头占比」，不是估值。",
     "resolved_from": "live",
     "ref_close": 9.84,
     "ref_date": "2021-01-15",
     "outcome": "YES",
     "exit_close": 18.03,
     "exit_date": "2021-01-25",
     "move_pct": 0.8323,
     "chart": [
      {
       "date": "2020-10-20",
       "open": 5.2,
       "high": 5.21,
       "low": 5.06,
       "close": 5.08,
       "volume": 4616522.0
      },
      {
       "date": "2020-10-21",
       "open": 5.1,
       "high": 5.14,
       "low": 5.0,
       "close": 5.1,
       "volume": 3555836.0
      },
      {
       "date": "2020-10-22",
       "open": 5.09,
       "high": 5.14,
       "low": 4.975,
       "close": 5.13,
       "volume": 2651978.0
      },
      {
       "date": "2020-10-23",
       "open": 5.13,
       "high": 5.13,
       "low": 4.99,
       "close": 5.12,
       "volume": 2568033.0
      },
      {
       "date": "2020-10-26",
       "open": 5.03,
       "high": 5.07,
       "low": 4.855,
       "close": 4.88,
       "volume": 3772836.0
      },
      {
       "date": "2020-10-27",
       "open": 4.9,
       "high": 4.94,
       "low": 4.84,
       "close": 4.85,
       "volume": 2077902.0
      },
      {
       "date": "2020-10-28",
       "open": 4.77,
       "high": 4.79,
       "low": 4.55,
       "close": 4.57,
       "volume": 4031206.0
      },
      {
       "date": "2020-10-29",
       "open": 4.6,
       "high": 4.64,
       "low": 4.53,
       "close": 4.61,
       "volume": 2557312.0
      },
      {
       "date": "2020-10-30",
       "open": 4.55,
       "high": 4.6078,
       "low": 4.44,
       "close": 4.49,
       "volume": 3573867.0
      },
      {
       "date": "2020-11-02",
       "open": 4.5,
       "high": 4.55,
       "low": 4.45,
       "close": 4.48,
       "volume": 2864480.0
      },
      {
       "date": "2020-11-03",
       "open": 4.53,
       "high": 4.69,
       "low": 4.52,
       "close": 4.67,
       "volume": 2781730.0
      },
      {
       "date": "2020-11-04",
       "open": 4.7,
       "high": 4.76,
       "low": 4.575,
       "close": 4.68,
       "volume": 3113912.0
      },
      {
       "date": "2020-11-05",
       "open": 4.78,
       "high": 4.92,
       "low": 4.74,
       "close": 4.86,
       "volume": 2597311.0
      },
      {
       "date": "2020-11-06",
       "open": 4.82,
       "high": 4.8877,
       "low": 4.76,
       "close": 4.83,
       "volume": 2853811.0
      },
      {
       "date": "2020-11-09",
       "open": 4.99,
       "high": 5.0578,
       "low": 4.89,
       "close": 4.93,
       "volume": 3986592.0
      },
      {
       "date": "2020-11-10",
       "open": 4.9,
       "high": 5.025,
       "low": 4.84,
       "close": 5.02,
       "volume": 4143562.0
      },
      {
       "date": "2020-11-11",
       "open": 5.06,
       "high": 5.23,
       "low": 5.0,
       "close": 5.19,
       "volume": 5724602.0
      },
      {
       "date": "2020-11-12",
       "open": 5.19,
       "high": 5.21,
       "low": 4.98,
       "close": 4.99,
       "volume": 2988412.0
      },
      {
       "date": "2020-11-13",
       "open": 5.02,
       "high": 5.15,
       "low": 5.01,
       "close": 5.11,
       "volume": 5360961.0
      },
      {
       "date": "2020-11-16",
       "open": 5.14,
       "high": 5.23,
       "low": 5.13,
       "close": 5.19,
       "volume": 3276284.0
      },
      {
       "date": "2020-11-17",
       "open": 5.22,
       "high": 5.3,
       "low": 5.15,
       "close": 5.29,
       "volume": 3229332.0
      },
      {
       "date": "2020-11-18",
       "open": 5.35,
       "high": 5.61,
       "low": 5.31,
       "close": 5.44,
       "volume": 6118709.0
      },
      {
       "date": "2020-11-19",
       "open": 5.49,
       "high": 5.49,
       "low": 5.285,
       "close": 5.36,
       "volume": 4367186.0
      },
      {
       "date": "2020-11-20",
       "open": 5.36,
       "high": 5.77,
       "low": 5.33,
       "close": 5.76,
       "volume": 6587242.0
      },
      {
       "date": "2020-11-23",
       "open": 5.81,
       "high": 5.835,
       "low": 5.59,
       "close": 5.66,
       "volume": 4999182.0
      },
      {
       "date": "2020-11-24",
       "open": 5.74,
       "high": 5.77,
       "low": 5.635,
       "close": 5.7,
       "volume": 5027954.0
      },
      {
       "date": "2020-11-25",
       "open": 5.7,
       "high": 5.94,
       "low": 5.675,
       "close": 5.91,
       "volume": 4992235.0
      },
      {
       "date": "2020-11-27",
       "open": 5.94,
       "high": 6.2,
       "low": 5.895,
       "close": 6.15,
       "volume": 3742511.0
      },
      {
       "date": "2020-11-30",
       "open": 6.15,
       "high": 6.16,
       "low": 5.82,
       "close": 5.87,
       "volume": 6862861.0
      },
      {
       "date": "2020-12-01",
       "open": 8.36,
       "high": 9.69,
       "low": 6.92,
       "close": 7.0,
       "volume": 327726501.0
      },
      {
       "date": "2020-12-02",
       "open": 7.68,
       "high": 8.41,
       "low": 7.09,
       "close": 7.45,
       "volume": 150129782.0
      },
      {
       "date": "2020-12-03",
       "open": 7.44,
       "high": 7.605,
       "low": 7.2,
       "close": 7.46,
       "volume": 40307221.0
      },
      {
       "date": "2020-12-04",
       "open": 7.39,
       "high": 8.55,
       "low": 7.39,
       "close": 8.52,
       "volume": 69814488.0
      },
      {
       "date": "2020-12-07",
       "open": 8.74,
       "high": 9.0,
       "low": 8.12,
       "close": 8.25,
       "volume": 44629082.0
      },
      {
       "date": "2020-12-08",
       "open": 8.26,
       "high": 8.72,
       "low": 8.24,
       "close": 8.52,
       "volume": 26885135.0
      },
      {
       "date": "2020-12-09",
       "open": 8.55,
       "high": 8.65,
       "low": 8.06,
       "close": 8.31,
       "volume": 19628026.0
      },
      {
       "date": "2020-12-10",
       "open": 8.1,
       "high": 8.4,
       "low": 8.08,
       "close": 8.37,
       "volume": 10923177.0
      },
      {
       "date": "2020-12-11",
       "open": 8.3,
       "high": 8.33,
       "low": 7.96,
       "close": 8.16,
       "volume": 11643153.0
      },
      {
       "date": "2020-12-14",
       "open": 8.28,
       "high": 8.57,
       "low": 8.165,
       "close": 8.25,
       "volume": 14675514.0
      },
      {
       "date": "2020-12-15",
       "open": 8.36,
       "high": 8.39,
       "low": 8.085,
       "close": 8.3,
       "volume": 9819740.0
      },
      {
       "date": "2020-12-16",
       "open": 8.35,
       "high": 8.35,
       "low": 8.17,
       "close": 8.24,
       "volume": 8043156.0
      },
      {
       "date": "2020-12-17",
       "open": 8.3,
       "high": 8.335,
       "low": 8.03,
       "close": 8.26,
       "volume": 17717855.0
      },
      {
       "date": "2020-12-18",
       "open": 7.83,
       "high": 7.83,
       "low": 6.88,
       "close": 6.95,
       "volume": 49470140.0
      },
      {
       "date": "2020-12-21",
       "open": 6.84,
       "high": 7.2,
       "low": 6.73,
       "close": 7.11,
       "volume": 17988339.0
      },
      {
       "date": "2020-12-22",
       "open": 7.18,
       "high": 7.44,
       "low": 7.05,
       "close": 7.19,
       "volume": 16822909.0
      },
      {
       "date": "2020-12-23",
       "open": 7.3,
       "high": 7.33,
       "low": 7.08,
       "close": 7.09,
       "volume": 9115529.0
      },
      {
       "date": "2020-12-24",
       "open": 7.12,
       "high": 7.24,
       "low": 7.05,
       "close": 7.06,
       "volume": 6088342.0
      },
      {
       "date": "2020-12-28",
       "open": 7.1,
       "high": 7.13,
       "low": 6.85,
       "close": 6.88,
       "volume": 9775411.0
      },
      {
       "date": "2020-12-29",
       "open": 6.98,
       "high": 7.0,
       "low": 6.675,
       "close": 6.77,
       "volume": 11284185.0
      },
      {
       "date": "2020-12-30",
       "open": 6.79,
       "high": 6.81,
       "low": 6.6,
       "close": 6.67,
       "volume": 9434913.0
      },
      {
       "date": "2020-12-31",
       "open": 6.68,
       "high": 6.8,
       "low": 6.63,
       "close": 6.63,
       "volume": 7530565.0
      },
      {
       "date": "2021-01-04",
       "open": 6.7,
       "high": 6.8199,
       "low": 6.515,
       "close": 6.58,
       "volume": 11139231.0
      },
      {
       "date": "2021-01-05",
       "open": 6.62,
       "high": 6.8,
       "low": 6.555,
       "close": 6.77,
       "volume": 9108900.0
      },
      {
       "date": "2021-01-06",
       "open": 6.71,
       "high": 6.91,
       "low": 6.63,
       "close": 6.71,
       "volume": 11022286.0
      },
      {
       "date": "2021-01-07",
       "open": 6.75,
       "high": 7.115,
       "low": 6.72,
       "close": 7.06,
       "volume": 13062758.0
      },
      {
       "date": "2021-01-08",
       "open": 7.22,
       "high": 7.6396,
       "low": 7.1,
       "close": 7.56,
       "volume": 23039275.0
      },
      {
       "date": "2021-01-11",
       "open": 7.64,
       "high": 7.79,
       "low": 7.32,
       "close": 7.65,
       "volume": 15749559.0
      },
      {
       "date": "2021-01-12",
       "open": 7.69,
       "high": 7.71,
       "low": 7.48,
       "close": 7.63,
       "volume": 9220473.0
      },
      {
       "date": "2021-01-13",
       "open": 7.65,
       "high": 7.66,
       "low": 7.4,
       "close": 7.44,
       "volume": 8345519.0
      },
      {
       "date": "2021-01-14",
       "open": 7.51,
       "high": 9.33,
       "low": 7.47,
       "close": 9.11,
       "volume": 65231338.0
      },
      {
       "date": "2021-01-15",
       "open": 10.68,
       "high": 11.56,
       "low": 9.4,
       "close": 9.84,
       "volume": 153854663.0
      },
      {
       "date": "2021-01-19",
       "open": 10.85,
       "high": 12.39,
       "low": 10.58,
       "close": 12.35,
       "volume": 112483169.0
      },
      {
       "date": "2021-01-20",
       "open": 13.23,
       "high": 13.64,
       "low": 12.38,
       "close": 12.79,
       "volume": 130140695.0
      },
      {
       "date": "2021-01-21",
       "open": 12.62,
       "high": 12.945,
       "low": 12.01,
       "close": 12.85,
       "volume": 63464952.0
      },
      {
       "date": "2021-01-22",
       "open": 12.37,
       "high": 14.28,
       "low": 12.17,
       "close": 14.04,
       "volume": 120473629.0
      },
      {
       "date": "2021-01-25",
       "open": 19.55,
       "high": 20.83,
       "low": 15.74,
       "close": 18.03,
       "volume": 363829082.0
      }
     ],
     "npc_bets": [
      {
       "player_id": "p03",
       "action": "对赌",
       "stake": 1000,
       "side_price": 0.45,
       "result": {
        "won": false,
        "dealer_delta": 1000
       }
      },
      {
       "player_id": "p05",
       "action": "跟",
       "stake": 237,
       "side_price": 0.55,
       "result": {
        "won": true,
        "payout": 430.91
       }
      },
      {
       "player_id": "p06",
       "action": "对赌",
       "stake": 1000,
       "side_price": 0.45,
       "result": {
        "won": false,
        "dealer_delta": 1000
       }
      }
     ],
     "commission": {
      "pool": 237.0,
      "rate": 0.075,
      "paid": 17.78
     },
     "is_burst": false,
     "q_en": "A stock picked for emotional memory—how far do you think it can go?",
     "reason_en": "A nostalgic name doesn't mean the business is improving.",
     "mood_en": "Absurdity",
     "headline_en": "BlackBerry, long out of the phone business, was dusted off; selection criteria is nostalgia plus high short interest.",
     "background_en": "BlackBerry stopped making phones long ago; now it sells automotive software and security services. But it's a name everyone knows, and retail investors have nostalgic memories of it—the selection criteria this round is \"nostalgia + high short interest,\" not valuation."
    }
   ],
   "dealer_cash_after": 12089.41
  },
  {
   "day_idx": 5,
   "date": "2021-01-25",
   "ideas": [
    {
     "id": "2021-01-koss-twenty-bagger",
     "ticker": "KOSS",
     "company": "Koss Corporation",
     "headline": "市值不到一亿的家族耳机公司，一周涨二十倍",
     "question": "极小的流通盘既能推上去也能砸下来，你猜这段时间是哪一边？",
     "reason": "二十倍之后还能有多少接盘的？",
     "mood": "疯狂",
     "price": 0.5,
     "holding_days": 340,
     "hype": 0.95,
     "lead_context": {
      "months": 3,
      "from": 2.15,
      "to": 6.0,
      "pct": 1.7907,
      "week_pct": 1.069
     },
     "background": "一家家族控股、市值不到一亿、日成交量常年只有几万股的耳机公司，一周内涨了二十倍。流通盘极小意味着很少的买盘就能推动价格——这既是它被选中的原因，也是它后来跌回去的原因。",
     "resolved_from": "live",
     "ref_close": 6.0,
     "ref_date": "2021-01-25",
     "outcome": "YES",
     "exit_close": 10.68,
     "exit_date": "2021-12-31",
     "move_pct": 0.78,
     "chart": [
      {
       "date": "2020-10-27",
       "open": 2.08,
       "high": 2.19,
       "low": 2.02,
       "close": 2.19,
       "volume": 7735.0
      },
      {
       "date": "2020-10-28",
       "open": 2.105,
       "high": 2.14,
       "low": 2.09,
       "close": 2.0963,
       "volume": 4888.0
      },
      {
       "date": "2020-10-29",
       "open": 2.1,
       "high": 2.11,
       "low": 2.0747,
       "close": 2.0747,
       "volume": 3878.0
      },
      {
       "date": "2020-10-30",
       "open": 2.0747,
       "high": 2.0747,
       "low": 2.0747,
       "close": 2.0747,
       "volume": 344.0
      },
      {
       "date": "2020-11-02",
       "open": 2.05,
       "high": 2.16,
       "low": 2.03,
       "close": 2.03,
       "volume": 3784.0
      },
      {
       "date": "2020-11-03",
       "open": 2.15,
       "high": 2.1699,
       "low": 2.105,
       "close": 2.105,
       "volume": 739.0
      },
      {
       "date": "2020-11-04",
       "open": 2.105,
       "high": 2.16,
       "low": 2.0632,
       "close": 2.1,
       "volume": 1559.0
      },
      {
       "date": "2020-11-05",
       "open": 2.15,
       "high": 2.15,
       "low": 2.06,
       "close": 2.06,
       "volume": 1885.0
      },
      {
       "date": "2020-11-06",
       "open": 2.06,
       "high": 2.06,
       "low": 2.06,
       "close": 2.06,
       "volume": 558.0
      },
      {
       "date": "2020-11-09",
       "open": 2.1,
       "high": 2.1,
       "low": 2.06,
       "close": 2.06,
       "volume": 515.0
      },
      {
       "date": "2020-11-10",
       "open": 2.1372,
       "high": 2.1372,
       "low": 2.105,
       "close": 2.105,
       "volume": 2515.0
      },
      {
       "date": "2020-11-11",
       "open": 2.08,
       "high": 2.16,
       "low": 2.0733,
       "close": 2.16,
       "volume": 2986.0
      },
      {
       "date": "2020-11-12",
       "open": 2.15,
       "high": 2.15,
       "low": 2.08,
       "close": 2.08,
       "volume": 1333.0
      },
      {
       "date": "2020-11-13",
       "open": 2.1596,
       "high": 2.16,
       "low": 2.1596,
       "close": 2.16,
       "volume": 3632.0
      },
      {
       "date": "2020-11-16",
       "open": 2.06,
       "high": 2.19,
       "low": 2.06,
       "close": 2.1,
       "volume": 7795.0
      },
      {
       "date": "2020-11-17",
       "open": 2.16,
       "high": 2.16,
       "low": 2.07,
       "close": 2.12,
       "volume": 4241.0
      },
      {
       "date": "2020-11-18",
       "open": 2.0939,
       "high": 2.1,
       "low": 2.09,
       "close": 2.09,
       "volume": 1055.0
      },
      {
       "date": "2020-11-19",
       "open": 2.1,
       "high": 2.1,
       "low": 2.05,
       "close": 2.09,
       "volume": 8313.0
      },
      {
       "date": "2020-11-20",
       "open": 2.09,
       "high": 2.09,
       "low": 2.0735,
       "close": 2.075,
       "volume": 1118.0
      },
      {
       "date": "2020-11-23",
       "open": 2.1395,
       "high": 2.1395,
       "low": 2.08,
       "close": 2.09,
       "volume": 989.0
      },
      {
       "date": "2020-11-24",
       "open": 2.12,
       "high": 2.28,
       "low": 2.12,
       "close": 2.1527,
       "volume": 18853.0
      },
      {
       "date": "2020-11-25",
       "open": 2.1206,
       "high": 2.19,
       "low": 2.1206,
       "close": 2.1312,
       "volume": 5054.0
      },
      {
       "date": "2020-11-27",
       "open": 2.1993,
       "high": 2.1993,
       "low": 2.1993,
       "close": 2.1993,
       "volume": 274.0
      },
      {
       "date": "2020-11-30",
       "open": 2.2,
       "high": 2.21,
       "low": 2.145,
       "close": 2.16,
       "volume": 7775.0
      },
      {
       "date": "2020-12-01",
       "open": 2.2,
       "high": 2.8,
       "low": 2.2,
       "close": 2.8,
       "volume": 123326.0
      },
      {
       "date": "2020-12-02",
       "open": 2.51,
       "high": 2.6157,
       "low": 2.31,
       "close": 2.56,
       "volume": 15056.0
      },
      {
       "date": "2020-12-03",
       "open": 2.68,
       "high": 2.74,
       "low": 2.5754,
       "close": 2.7,
       "volume": 9835.0
      },
      {
       "date": "2020-12-04",
       "open": 2.61,
       "high": 2.7773,
       "low": 2.5,
       "close": 2.54,
       "volume": 15278.0
      },
      {
       "date": "2020-12-07",
       "open": 2.53,
       "high": 2.69,
       "low": 2.53,
       "close": 2.57,
       "volume": 3416.0
      },
      {
       "date": "2020-12-08",
       "open": 2.4458,
       "high": 2.57,
       "low": 2.4458,
       "close": 2.51,
       "volume": 3185.0
      },
      {
       "date": "2020-12-09",
       "open": 2.4999,
       "high": 2.5326,
       "low": 2.31,
       "close": 2.5,
       "volume": 10089.0
      },
      {
       "date": "2020-12-10",
       "open": 2.41,
       "high": 2.62,
       "low": 2.3756,
       "close": 2.3756,
       "volume": 4334.0
      },
      {
       "date": "2020-12-11",
       "open": 2.3756,
       "high": 2.3756,
       "low": 2.3756,
       "close": 2.3756,
       "volume": 580.0
      },
      {
       "date": "2020-12-14",
       "open": 2.55,
       "high": 2.61,
       "low": 2.38,
       "close": 2.45,
       "volume": 3068.0
      },
      {
       "date": "2020-12-15",
       "open": 2.5,
       "high": 2.5,
       "low": 2.5,
       "close": 2.5,
       "volume": 685.0
      },
      {
       "date": "2020-12-16",
       "open": 2.4938,
       "high": 2.5871,
       "low": 2.48,
       "close": 2.55,
       "volume": 3531.0
      },
      {
       "date": "2020-12-17",
       "open": 2.574,
       "high": 2.58,
       "low": 2.5162,
       "close": 2.55,
       "volume": 2092.0
      },
      {
       "date": "2020-12-18",
       "open": 2.59,
       "high": 2.59,
       "low": 2.38,
       "close": 2.38,
       "volume": 7230.0
      },
      {
       "date": "2020-12-21",
       "open": 2.55,
       "high": 2.55,
       "low": 2.47,
       "close": 2.47,
       "volume": 15413.0
      },
      {
       "date": "2020-12-22",
       "open": 2.47,
       "high": 2.5,
       "low": 2.36,
       "close": 2.44,
       "volume": 4464.0
      },
      {
       "date": "2020-12-23",
       "open": 2.37,
       "high": 2.42,
       "low": 2.31,
       "close": 2.34,
       "volume": 8480.0
      },
      {
       "date": "2020-12-24",
       "open": 2.3201,
       "high": 2.405,
       "low": 2.3201,
       "close": 2.34,
       "volume": 4871.0
      },
      {
       "date": "2020-12-28",
       "open": 2.33,
       "high": 2.73,
       "low": 2.33,
       "close": 2.4,
       "volume": 61674.0
      },
      {
       "date": "2020-12-29",
       "open": 3.88,
       "high": 5.1,
       "low": 3.12,
       "close": 3.44,
       "volume": 15318971.0
      },
      {
       "date": "2020-12-30",
       "open": 3.156,
       "high": 3.89,
       "low": 3.11,
       "close": 3.7,
       "volume": 1002239.0
      },
      {
       "date": "2020-12-31",
       "open": 3.32,
       "high": 3.7,
       "low": 3.15,
       "close": 3.44,
       "volume": 333507.0
      },
      {
       "date": "2021-01-04",
       "open": 3.31,
       "high": 3.4,
       "low": 2.9,
       "close": 3.19,
       "volume": 245137.0
      },
      {
       "date": "2021-01-05",
       "open": 3.13,
       "high": 3.37,
       "low": 2.96,
       "close": 3.11,
       "volume": 116619.0
      },
      {
       "date": "2021-01-06",
       "open": 3.09,
       "high": 3.24,
       "low": 3.05,
       "close": 3.05,
       "volume": 34644.0
      },
      {
       "date": "2021-01-07",
       "open": 3.11,
       "high": 3.18,
       "low": 2.97,
       "close": 3.15,
       "volume": 84640.0
      },
      {
       "date": "2021-01-08",
       "open": 3.28,
       "high": 3.28,
       "low": 3.0,
       "close": 3.27,
       "volume": 62366.0
      },
      {
       "date": "2021-01-11",
       "open": 3.19,
       "high": 3.23,
       "low": 3.0216,
       "close": 3.2001,
       "volume": 40036.0
      },
      {
       "date": "2021-01-12",
       "open": 3.2,
       "high": 3.29,
       "low": 3.0901,
       "close": 3.24,
       "volume": 39993.0
      },
      {
       "date": "2021-01-13",
       "open": 3.24,
       "high": 3.3762,
       "low": 3.1,
       "close": 3.11,
       "volume": 28415.0
      },
      {
       "date": "2021-01-14",
       "open": 3.1,
       "high": 3.2197,
       "low": 3.031,
       "close": 3.07,
       "volume": 26262.0
      },
      {
       "date": "2021-01-15",
       "open": 3.07,
       "high": 3.17,
       "low": 2.82,
       "close": 2.9,
       "volume": 82853.0
      },
      {
       "date": "2021-01-19",
       "open": 3.03,
       "high": 3.84,
       "low": 3.03,
       "close": 3.62,
       "volume": 713510.0
      },
      {
       "date": "2021-01-20",
       "open": 3.9,
       "high": 4.3,
       "low": 3.4,
       "close": 3.43,
       "volume": 567654.0
      },
      {
       "date": "2021-01-21",
       "open": 3.48,
       "high": 3.69,
       "low": 3.2934,
       "close": 3.54,
       "volume": 97638.0
      },
      {
       "date": "2021-01-22",
       "open": 3.49,
       "high": 3.5394,
       "low": 3.21,
       "close": 3.34,
       "volume": 121833.0
      },
      {
       "date": "2021-01-25",
       "open": 3.65,
       "high": 6.0,
       "low": 3.45,
       "close": 6.0,
       "volume": 5984794.0
      },
      {
       "date": "2021-01-26",
       "open": 11.69,
       "high": 13.9,
       "low": 8.72,
       "close": 10.0,
       "volume": 34187036.0
      },
      {
       "date": "2021-01-27",
       "open": 17.52,
       "high": 69.79,
       "low": 14.19,
       "close": 58.0,
       "volume": 25073496.0
      },
      {
       "date": "2021-01-28",
       "open": 74.0,
       "high": 127.45,
       "low": 25.0,
       "close": 41.96,
       "volume": 11305184.0
      },
      {
       "date": "2021-01-29",
       "open": 72.865,
       "high": 105.4018,
       "low": 53.0,
       "close": 64.0,
       "volume": 11397851.0
      },
      {
       "date": "2021-02-01",
       "open": 60.0,
       "high": 60.0,
       "low": 34.0,
       "close": 35.0,
       "volume": 7671312.0
      },
      {
       "date": "2021-02-02",
       "open": 26.66,
       "high": 27.0,
       "low": 17.51,
       "close": 20.0,
       "volume": 6576205.0
      },
      {
       "date": "2021-02-03",
       "open": 26.75,
       "high": 30.0,
       "low": 23.81,
       "close": 25.59,
       "volume": 7228365.0
      },
      {
       "date": "2021-02-04",
       "open": 24.0,
       "high": 24.75,
       "low": 18.3,
       "close": 18.8,
       "volume": 2913442.0
      },
      {
       "date": "2021-02-05",
       "open": 17.95,
       "high": 24.49,
       "low": 17.01,
       "close": 19.98,
       "volume": 4844440.0
      },
      {
       "date": "2021-02-08",
       "open": 19.47,
       "high": 19.61,
       "low": 17.25,
       "close": 19.0,
       "volume": 2054976.0
      },
      {
       "date": "2021-02-09",
       "open": 18.15,
       "high": 18.67,
       "low": 17.51,
       "close": 17.92,
       "volume": 1146108.0
      },
      {
       "date": "2021-02-10",
       "open": 17.7,
       "high": 19.0,
       "low": 15.5,
       "close": 17.01,
       "volume": 2392245.0
      },
      {
       "date": "2021-02-11",
       "open": 16.5635,
       "high": 17.1588,
       "low": 15.34,
       "close": 15.92,
       "volume": 847129.0
      },
      {
       "date": "2021-02-12",
       "open": 15.17,
       "high": 15.7,
       "low": 14.51,
       "close": 14.78,
       "volume": 1076287.0
      },
      {
       "date": "2021-02-16",
       "open": 14.7,
       "high": 14.95,
       "low": 13.31,
       "close": 14.5,
       "volume": 1893512.0
      },
      {
       "date": "2021-02-17",
       "open": 14.21,
       "high": 14.2999,
       "low": 13.15,
       "close": 13.39,
       "volume": 530236.0
      },
      {
       "date": "2021-02-18",
       "open": 13.32,
       "high": 17.7,
       "low": 12.6,
       "close": 14.25,
       "volume": 6538969.0
      },
      {
       "date": "2021-02-19",
       "open": 13.75,
       "high": 14.22,
       "low": 13.02,
       "close": 14.05,
       "volume": 946146.0
      },
      {
       "date": "2021-02-22",
       "open": 13.9,
       "high": 15.2,
       "low": 13.15,
       "close": 13.31,
       "volume": 1302106.0
      },
      {
       "date": "2021-02-23",
       "open": 12.93,
       "high": 13.0799,
       "low": 11.44,
       "close": 11.9,
       "volume": 613452.0
      },
      {
       "date": "2021-02-24",
       "open": 12.08,
       "high": 20.28,
       "low": 11.88,
       "close": 18.44,
       "volume": 8642553.0
      },
      {
       "date": "2021-02-25",
       "open": 32.6,
       "high": 35.05,
       "low": 18.93,
       "close": 21.53,
       "volume": 37831440.0
      },
      {
       "date": "2021-02-26",
       "open": 19.0965,
       "high": 22.62,
       "low": 16.05,
       "close": 16.71,
       "volume": 8599039.0
      },
      {
       "date": "2021-03-01",
       "open": 16.82,
       "high": 20.88,
       "low": 16.0,
       "close": 18.95,
       "volume": 8323515.0
      },
      {
       "date": "2021-03-02",
       "open": 17.33,
       "high": 19.41,
       "low": 16.15,
       "close": 16.19,
       "volume": 3695689.0
      },
      {
       "date": "2021-03-03",
       "open": 16.93,
       "high": 17.71,
       "low": 16.11,
       "close": 16.92,
       "volume": 1755241.0
      },
      {
       "date": "2021-03-04",
       "open": 16.11,
       "high": 17.25,
       "low": 14.91,
       "close": 15.3,
       "volume": 2749450.0
      },
      {
       "date": "2021-03-05",
       "open": 15.53,
       "high": 16.13,
       "low": 13.53,
       "close": 14.78,
       "volume": 1900433.0
      },
      {
       "date": "2021-03-08",
       "open": 15.54,
       "high": 20.38,
       "low": 15.0,
       "close": 18.85,
       "volume": 9903592.0
      },
      {
       "date": "2021-03-09",
       "open": 19.35,
       "high": 20.68,
       "low": 17.08,
       "close": 17.9,
       "volume": 5707817.0
      },
      {
       "date": "2021-03-10",
       "open": 25.23,
       "high": 40.48,
       "low": 23.2,
       "close": 30.28,
       "volume": 60101808.0
      },
      {
       "date": "2021-03-11",
       "open": 26.99,
       "high": 29.73,
       "low": 24.4,
       "close": 25.22,
       "volume": 7933422.0
      },
      {
       "date": "2021-03-12",
       "open": 26.75,
       "high": 33.99,
       "low": 26.1,
       "close": 27.88,
       "volume": 16085255.0
      },
      {
       "date": "2021-03-15",
       "open": 30.23,
       "high": 31.98,
       "low": 27.0,
       "close": 28.9,
       "volume": 5022978.0
      },
      {
       "date": "2021-03-16",
       "open": 27.44,
       "high": 28.45,
       "low": 26.0,
       "close": 26.7,
       "volume": 2670765.0
      },
      {
       "date": "2021-03-17",
       "open": 27.7,
       "high": 29.88,
       "low": 27.0,
       "close": 27.44,
       "volume": 3196586.0
      },
      {
       "date": "2021-03-18",
       "open": 28.3,
       "high": 28.4865,
       "low": 25.35,
       "close": 25.51,
       "volume": 1588573.0
      },
      {
       "date": "2021-03-19",
       "open": 25.45,
       "high": 27.2,
       "low": 23.67,
       "close": 25.5,
       "volume": 1633895.0
      },
      {
       "date": "2021-03-22",
       "open": 24.93,
       "high": 25.2008,
       "low": 23.45,
       "close": 23.8,
       "volume": 925881.0
      },
      {
       "date": "2021-03-23",
       "open": 23.08,
       "high": 25.4699,
       "low": 20.4001,
       "close": 20.75,
       "volume": 1492635.0
      },
      {
       "date": "2021-03-24",
       "open": 20.36,
       "high": 20.55,
       "low": 16.26,
       "close": 16.42,
       "volume": 1392825.0
      },
      {
       "date": "2021-03-25",
       "open": 16.0,
       "high": 26.0,
       "low": 15.85,
       "close": 25.8,
       "volume": 19717183.0
      },
      {
       "date": "2021-03-26",
       "open": 25.0035,
       "high": 25.1362,
       "low": 19.5,
       "close": 21.13,
       "volume": 4595837.0
      },
      {
       "date": "2021-03-29",
       "open": 22.13,
       "high": 26.5,
       "low": 21.2,
       "close": 21.2,
       "volume": 3391847.0
      },
      {
       "date": "2021-03-30",
       "open": 22.66,
       "high": 24.6961,
       "low": 21.87,
       "close": 22.85,
       "volume": 3473951.0
      },
      {
       "date": "2021-03-31",
       "open": 23.45,
       "high": 23.81,
       "low": 21.74,
       "close": 22.49,
       "volume": 1907684.0
      },
      {
       "date": "2021-04-01",
       "open": 22.5,
       "high": 26.9,
       "low": 21.88,
       "close": 23.2,
       "volume": 4722233.0
      },
      {
       "date": "2021-04-05",
       "open": 23.2,
       "high": 24.78,
       "low": 22.5,
       "close": 23.06,
       "volume": 1525957.0
      },
      {
       "date": "2021-04-06",
       "open": 23.2,
       "high": 23.89,
       "low": 22.3701,
       "close": 22.68,
       "volume": 741605.0
      },
      {
       "date": "2021-04-07",
       "open": 22.9,
       "high": 22.91,
       "low": 21.0201,
       "close": 21.44,
       "volume": 659324.0
      },
      {
       "date": "2021-04-08",
       "open": 22.2,
       "high": 22.8199,
       "low": 21.1,
       "close": 21.52,
       "volume": 411473.0
      },
      {
       "date": "2021-04-09",
       "open": 21.57,
       "high": 21.62,
       "low": 19.4,
       "close": 20.29,
       "volume": 569303.0
      },
      {
       "date": "2021-04-12",
       "open": 20.23,
       "high": 20.4449,
       "low": 18.3,
       "close": 19.09,
       "volume": 833285.0
      },
      {
       "date": "2021-04-13",
       "open": 18.9,
       "high": 19.77,
       "low": 18.2601,
       "close": 19.4,
       "volume": 401764.0
      },
      {
       "date": "2021-04-14",
       "open": 19.19,
       "high": 21.9,
       "low": 19.05,
       "close": 19.41,
       "volume": 2080869.0
      },
      {
       "date": "2021-04-15",
       "open": 19.5,
       "high": 19.7599,
       "low": 18.86,
       "close": 19.18,
       "volume": 529723.0
      },
      {
       "date": "2021-04-16",
       "open": 18.9,
       "high": 19.27,
       "low": 18.41,
       "close": 18.95,
       "volume": 397585.0
      },
      {
       "date": "2021-04-19",
       "open": 19.95,
       "high": 20.0,
       "low": 18.7,
       "close": 18.7,
       "volume": 510946.0
      },
      {
       "date": "2021-04-20",
       "open": 18.65,
       "high": 18.85,
       "low": 17.7978,
       "close": 18.01,
       "volume": 275513.0
      },
      {
       "date": "2021-04-21",
       "open": 18.0,
       "high": 19.49,
       "low": 17.53,
       "close": 19.37,
       "volume": 500026.0
      },
      {
       "date": "2021-04-22",
       "open": 19.62,
       "high": 19.62,
       "low": 18.6,
       "close": 19.17,
       "volume": 439212.0
      },
      {
       "date": "2021-04-23",
       "open": 19.22,
       "high": 19.27,
       "low": 18.73,
       "close": 18.8,
       "volume": 263050.0
      },
      {
       "date": "2021-04-26",
       "open": 18.8,
       "high": 21.4915,
       "low": 18.8,
       "close": 20.24,
       "volume": 1825719.0
      },
      {
       "date": "2021-04-27",
       "open": 20.57,
       "high": 21.5,
       "low": 19.575,
       "close": 19.79,
       "volume": 746257.0
      },
      {
       "date": "2021-04-28",
       "open": 19.87,
       "high": 19.99,
       "low": 18.88,
       "close": 19.5,
       "volume": 429586.0
      },
      {
       "date": "2021-04-29",
       "open": 19.93,
       "high": 19.93,
       "low": 18.8,
       "close": 19.28,
       "volume": 423202.0
      },
      {
       "date": "2021-04-30",
       "open": 18.88,
       "high": 20.49,
       "low": 18.6135,
       "close": 18.7,
       "volume": 919299.0
      },
      {
       "date": "2021-05-03",
       "open": 19.18,
       "high": 19.18,
       "low": 18.3088,
       "close": 18.6,
       "volume": 249706.0
      },
      {
       "date": "2021-05-04",
       "open": 18.26,
       "high": 18.54,
       "low": 17.11,
       "close": 17.96,
       "volume": 322656.0
      },
      {
       "date": "2021-05-05",
       "open": 17.97,
       "high": 18.3799,
       "low": 17.05,
       "close": 17.06,
       "volume": 258333.0
      },
      {
       "date": "2021-05-06",
       "open": 17.11,
       "high": 17.2722,
       "low": 16.5,
       "close": 16.69,
       "volume": 246973.0
      },
      {
       "date": "2021-05-07",
       "open": 16.7,
       "high": 17.67,
       "low": 16.7,
       "close": 17.22,
       "volume": 276828.0
      },
      {
       "date": "2021-05-10",
       "open": 16.97,
       "high": 17.04,
       "low": 16.01,
       "close": 16.1,
       "volume": 300006.0
      },
      {
       "date": "2021-05-11",
       "open": 15.8103,
       "high": 17.3,
       "low": 15.57,
       "close": 16.77,
       "volume": 341561.0
      },
      {
       "date": "2021-05-12",
       "open": 16.7444,
       "high": 16.97,
       "low": 16.0224,
       "close": 16.32,
       "volume": 193442.0
      },
      {
       "date": "2021-05-13",
       "open": 16.38,
       "high": 20.39,
       "low": 15.5765,
       "close": 18.25,
       "volume": 5875749.0
      },
      {
       "date": "2021-05-14",
       "open": 18.02,
       "high": 18.8799,
       "low": 17.22,
       "close": 18.55,
       "volume": 1368806.0
      },
      {
       "date": "2021-05-17",
       "open": 18.46,
       "high": 19.77,
       "low": 18.1101,
       "close": 18.8,
       "volume": 2121386.0
      },
      {
       "date": "2021-05-18",
       "open": 19.0,
       "high": 19.6,
       "low": 18.12,
       "close": 18.24,
       "volume": 1779392.0
      },
      {
       "date": "2021-05-19",
       "open": 18.0,
       "high": 18.0,
       "low": 16.8,
       "close": 17.21,
       "volume": 535668.0
      },
      {
       "date": "2021-05-20",
       "open": 17.2,
       "high": 17.69,
       "low": 16.88,
       "close": 17.34,
       "volume": 504426.0
      },
      {
       "date": "2021-05-21",
       "open": 17.4,
       "high": 17.9556,
       "low": 17.0,
       "close": 17.15,
       "volume": 368953.0
      },
      {
       "date": "2021-05-24",
       "open": 17.16,
       "high": 17.65,
       "low": 16.59,
       "close": 16.91,
       "volume": 1327874.0
      },
      {
       "date": "2021-05-25",
       "open": 16.9,
       "high": 21.25,
       "low": 16.75,
       "close": 20.78,
       "volume": 5385612.0
      },
      {
       "date": "2021-05-26",
       "open": 21.6084,
       "high": 22.89,
       "low": 19.91,
       "close": 20.675,
       "volume": 8739477.0
      },
      {
       "date": "2021-05-27",
       "open": 19.85,
       "high": 23.11,
       "low": 19.36,
       "close": 22.82,
       "volume": 6530556.0
      },
      {
       "date": "2021-05-28",
       "open": 26.26,
       "high": 28.87,
       "low": 22.3,
       "close": 23.07,
       "volume": 7496018.0
      },
      {
       "date": "2021-06-01",
       "open": 24.57,
       "high": 25.73,
       "low": 23.3,
       "close": 24.15,
       "volume": 3929741.0
      },
      {
       "date": "2021-06-02",
       "open": 26.31,
       "high": 43.92,
       "low": 25.21,
       "close": 40.72,
       "volume": 19200668.0
      },
      {
       "date": "2021-06-03",
       "open": 37.55,
       "high": 37.77,
       "low": 28.0593,
       "close": 30.83,
       "volume": 10770085.0
      },
      {
       "date": "2021-06-04",
       "open": 30.29,
       "high": 31.6381,
       "low": 26.67,
       "close": 26.95,
       "volume": 3484029.0
      },
      {
       "date": "2021-06-07",
       "open": 27.16,
       "high": 30.86,
       "low": 27.15,
       "close": 27.6,
       "volume": 6778936.0
      },
      {
       "date": "2021-06-08",
       "open": 28.82,
       "high": 31.65,
       "low": 26.95,
       "close": 28.33,
       "volume": 6455238.0
      },
      {
       "date": "2021-06-09",
       "open": 27.88,
       "high": 29.15,
       "low": 25.58,
       "close": 26.32,
       "volume": 2951484.0
      },
      {
       "date": "2021-06-10",
       "open": 25.31,
       "high": 25.9499,
       "low": 23.29,
       "close": 24.62,
       "volume": 1274266.0
      },
      {
       "date": "2021-06-11",
       "open": 24.6614,
       "high": 25.7,
       "low": 23.56,
       "close": 25.29,
       "volume": 884039.0
      },
      {
       "date": "2021-06-14",
       "open": 25.54,
       "high": 26.4,
       "low": 24.0589,
       "close": 25.28,
       "volume": 1412276.0
      },
      {
       "date": "2021-06-15",
       "open": 25.12,
       "high": 25.29,
       "low": 23.5189,
       "close": 24.41,
       "volume": 793854.0
      },
      {
       "date": "2021-06-16",
       "open": 24.0,
       "high": 24.0,
       "low": 22.5,
       "close": 23.2,
       "volume": 654636.0
      },
      {
       "date": "2021-06-17",
       "open": 22.82,
       "high": 24.5999,
       "low": 22.65,
       "close": 23.9,
       "volume": 822129.0
      },
      {
       "date": "2021-06-18",
       "open": 23.3,
       "high": 24.0399,
       "low": 22.6237,
       "close": 22.82,
       "volume": 397273.0
      },
      {
       "date": "2021-06-21",
       "open": 23.5,
       "high": 23.5,
       "low": 21.7,
       "close": 22.75,
       "volume": 322320.0
      },
      {
       "date": "2021-06-22",
       "open": 23.17,
       "high": 24.68,
       "low": 22.6094,
       "close": 24.0,
       "volume": 970503.0
      },
      {
       "date": "2021-06-23",
       "open": 24.0,
       "high": 25.2899,
       "low": 23.72,
       "close": 24.78,
       "volume": 538853.0
      },
      {
       "date": "2021-06-24",
       "open": 24.49,
       "high": 24.65,
       "low": 23.34,
       "close": 23.49,
       "volume": 368619.0
      },
      {
       "date": "2021-06-25",
       "open": 23.33,
       "high": 26.47,
       "low": 22.6717,
       "close": 24.68,
       "volume": 1770232.0
      },
      {
       "date": "2021-06-28",
       "open": 24.65,
       "high": 26.25,
       "low": 23.84,
       "close": 24.29,
       "volume": 906145.0
      },
      {
       "date": "2021-06-29",
       "open": 24.3,
       "high": 24.5,
       "low": 23.05,
       "close": 23.29,
       "volume": 471230.0
      },
      {
       "date": "2021-06-30",
       "open": 23.17,
       "high": 23.59,
       "low": 22.95,
       "close": 23.22,
       "volume": 452488.0
      },
      {
       "date": "2021-07-01",
       "open": 23.44,
       "high": 23.44,
       "low": 21.72,
       "close": 21.9,
       "volume": 632089.0
      },
      {
       "date": "2021-07-02",
       "open": 22.0,
       "high": 22.18,
       "low": 21.02,
       "close": 21.19,
       "volume": 269238.0
      },
      {
       "date": "2021-07-06",
       "open": 21.19,
       "high": 21.5861,
       "low": 20.35,
       "close": 20.72,
       "volume": 246772.0
      },
      {
       "date": "2021-07-07",
       "open": 20.36,
       "high": 20.66,
       "low": 19.31,
       "close": 20.16,
       "volume": 265910.0
      },
      {
       "date": "2021-07-08",
       "open": 18.84,
       "high": 21.4351,
       "low": 18.7,
       "close": 21.22,
       "volume": 359342.0
      },
      {
       "date": "2021-07-09",
       "open": 20.67,
       "high": 20.95,
       "low": 20.2,
       "close": 20.53,
       "volume": 150435.0
      },
      {
       "date": "2021-07-12",
       "open": 20.04,
       "high": 20.72,
       "low": 19.8,
       "close": 20.49,
       "volume": 179547.0
      },
      {
       "date": "2021-07-13",
       "open": 20.17,
       "high": 20.17,
       "low": 19.7,
       "close": 19.75,
       "volume": 108621.0
      },
      {
       "date": "2021-07-14",
       "open": 20.15,
       "high": 20.2,
       "low": 19.17,
       "close": 19.19,
       "volume": 152490.0
      },
      {
       "date": "2021-07-15",
       "open": 19.0,
       "high": 19.44,
       "low": 18.52,
       "close": 19.27,
       "volume": 152471.0
      },
      {
       "date": "2021-07-16",
       "open": 19.4,
       "high": 19.52,
       "low": 18.0301,
       "close": 18.16,
       "volume": 240059.0
      },
      {
       "date": "2021-07-19",
       "open": 18.02,
       "high": 18.54,
       "low": 17.08,
       "close": 18.51,
       "volume": 249064.0
      },
      {
       "date": "2021-07-20",
       "open": 18.45,
       "high": 19.87,
       "low": 18.0902,
       "close": 19.39,
       "volume": 321600.0
      },
      {
       "date": "2021-07-21",
       "open": 19.25,
       "high": 19.9856,
       "low": 18.82,
       "close": 19.17,
       "volume": 153863.0
      },
      {
       "date": "2021-07-22",
       "open": 19.15,
       "high": 19.329,
       "low": 18.645,
       "close": 18.99,
       "volume": 76696.0
      },
      {
       "date": "2021-07-23",
       "open": 18.6,
       "high": 18.9,
       "low": 17.84,
       "close": 18.36,
       "volume": 148833.0
      },
      {
       "date": "2021-07-26",
       "open": 18.4,
       "high": 19.37,
       "low": 18.3701,
       "close": 19.12,
       "volume": 158470.0
      },
      {
       "date": "2021-07-27",
       "open": 18.57,
       "high": 18.73,
       "low": 17.6,
       "close": 18.33,
       "volume": 125388.0
      },
      {
       "date": "2021-07-28",
       "open": 17.98,
       "high": 19.11,
       "low": 17.828,
       "close": 18.75,
       "volume": 122846.0
      },
      {
       "date": "2021-07-29",
       "open": 18.75,
       "high": 19.651,
       "low": 18.6359,
       "close": 18.83,
       "volume": 173237.0
      },
      {
       "date": "2021-07-30",
       "open": 18.6,
       "high": 19.25,
       "low": 17.9155,
       "close": 18.14,
       "volume": 106280.0
      },
      {
       "date": "2021-08-02",
       "open": 18.2,
       "high": 18.7599,
       "low": 18.13,
       "close": 18.62,
       "volume": 73929.0
      },
      {
       "date": "2021-08-03",
       "open": 18.72,
       "high": 18.72,
       "low": 17.94,
       "close": 17.99,
       "volume": 118708.0
      },
      {
       "date": "2021-08-04",
       "open": 17.76,
       "high": 18.639,
       "low": 16.6,
       "close": 16.75,
       "volume": 1077305.0
      },
      {
       "date": "2021-08-05",
       "open": 16.76,
       "high": 17.96,
       "low": 16.75,
       "close": 17.5,
       "volume": 264224.0
      },
      {
       "date": "2021-08-06",
       "open": 17.63,
       "high": 17.67,
       "low": 16.8901,
       "close": 16.99,
       "volume": 191428.0
      },
      {
       "date": "2021-08-09",
       "open": 17.0,
       "high": 17.67,
       "low": 16.9,
       "close": 17.2,
       "volume": 256555.0
      },
      {
       "date": "2021-08-10",
       "open": 17.5,
       "high": 19.79,
       "low": 17.2221,
       "close": 18.35,
       "volume": 1225936.0
      },
      {
       "date": "2021-08-11",
       "open": 18.15,
       "high": 18.7413,
       "low": 17.52,
       "close": 18.64,
       "volume": 173501.0
      },
      {
       "date": "2021-08-12",
       "open": 18.4,
       "high": 18.99,
       "low": 18.07,
       "close": 18.7,
       "volume": 141657.0
      },
      {
       "date": "2021-08-13",
       "open": 18.6,
       "high": 20.5999,
       "low": 18.3,
       "close": 18.65,
       "volume": 661244.0
      },
      {
       "date": "2021-08-16",
       "open": 18.28,
       "high": 18.76,
       "low": 17.57,
       "close": 18.11,
       "volume": 198722.0
      },
      {
       "date": "2021-08-17",
       "open": 17.9,
       "high": 18.95,
       "low": 17.82,
       "close": 17.9,
       "volume": 117552.0
      },
      {
       "date": "2021-08-18",
       "open": 18.38,
       "high": 18.43,
       "low": 17.85,
       "close": 18.06,
       "volume": 95843.0
      },
      {
       "date": "2021-08-19",
       "open": 17.94,
       "high": 18.89,
       "low": 17.805,
       "close": 18.07,
       "volume": 243436.0
      },
      {
       "date": "2021-08-20",
       "open": 17.83,
       "high": 18.49,
       "low": 17.7,
       "close": 17.93,
       "volume": 304157.0
      },
      {
       "date": "2021-08-23",
       "open": 18.0,
       "high": 19.0,
       "low": 17.9,
       "close": 18.58,
       "volume": 142204.0
      },
      {
       "date": "2021-08-24",
       "open": 17.81,
       "high": 20.89,
       "low": 16.811,
       "close": 19.4,
       "volume": 4005088.0
      },
      {
       "date": "2021-08-25",
       "open": 19.7,
       "high": 20.14,
       "low": 17.9,
       "close": 18.16,
       "volume": 2080145.0
      },
      {
       "date": "2021-08-26",
       "open": 18.0,
       "high": 18.85,
       "low": 17.43,
       "close": 17.74,
       "volume": 716156.0
      },
      {
       "date": "2021-08-27",
       "open": 17.54,
       "high": 18.21,
       "low": 17.53,
       "close": 17.99,
       "volume": 285531.0
      },
      {
       "date": "2021-08-30",
       "open": 18.22,
       "high": 18.48,
       "low": 17.8,
       "close": 18.01,
       "volume": 305319.0
      },
      {
       "date": "2021-08-31",
       "open": 18.15,
       "high": 18.65,
       "low": 18.03,
       "close": 18.35,
       "volume": 341377.0
      },
      {
       "date": "2021-09-01",
       "open": 18.55,
       "high": 19.16,
       "low": 18.12,
       "close": 18.18,
       "volume": 293312.0
      },
      {
       "date": "2021-09-02",
       "open": 18.51,
       "high": 18.8,
       "low": 18.23,
       "close": 18.62,
       "volume": 137019.0
      },
      {
       "date": "2021-09-03",
       "open": 18.6175,
       "high": 18.8399,
       "low": 18.31,
       "close": 18.54,
       "volume": 115620.0
      },
      {
       "date": "2021-09-07",
       "open": 18.57,
       "high": 19.56,
       "low": 18.49,
       "close": 19.27,
       "volume": 315568.0
      },
      {
       "date": "2021-09-08",
       "open": 19.27,
       "high": 19.27,
       "low": 18.2,
       "close": 18.93,
       "volume": 180453.0
      },
      {
       "date": "2021-09-09",
       "open": 18.65,
       "high": 19.3208,
       "low": 18.63,
       "close": 19.02,
       "volume": 173281.0
      },
      {
       "date": "2021-09-10",
       "open": 19.14,
       "high": 19.71,
       "low": 18.71,
       "close": 18.82,
       "volume": 182260.0
      },
      {
       "date": "2021-09-13",
       "open": 18.98,
       "high": 19.28,
       "low": 18.51,
       "close": 18.76,
       "volume": 280140.0
      },
      {
       "date": "2021-09-14",
       "open": 18.84,
       "high": 18.9,
       "low": 17.72,
       "close": 17.84,
       "volume": 194574.0
      },
      {
       "date": "2021-09-15",
       "open": 17.89,
       "high": 17.94,
       "low": 17.5,
       "close": 17.62,
       "volume": 230092.0
      },
      {
       "date": "2021-09-16",
       "open": 17.58,
       "high": 18.24,
       "low": 17.55,
       "close": 18.09,
       "volume": 150207.0
      },
      {
       "date": "2021-09-17",
       "open": 18.09,
       "high": 18.26,
       "low": 17.7079,
       "close": 17.72,
       "volume": 188919.0
      },
      {
       "date": "2021-09-20",
       "open": 17.3,
       "high": 17.6,
       "low": 16.68,
       "close": 16.95,
       "volume": 216847.0
      },
      {
       "date": "2021-09-21",
       "open": 17.0,
       "high": 17.275,
       "low": 16.845,
       "close": 17.02,
       "volume": 83573.0
      },
      {
       "date": "2021-09-22",
       "open": 17.16,
       "high": 17.4,
       "low": 17.03,
       "close": 17.11,
       "volume": 115894.0
      },
      {
       "date": "2021-09-23",
       "open": 17.17,
       "high": 17.55,
       "low": 17.09,
       "close": 17.09,
       "volume": 86198.0
      },
      {
       "date": "2021-09-24",
       "open": 17.08,
       "high": 17.0899,
       "low": 16.72,
       "close": 16.88,
       "volume": 89437.0
      },
      {
       "date": "2021-09-27",
       "open": 16.88,
       "high": 17.44,
       "low": 16.79,
       "close": 16.85,
       "volume": 181031.0
      },
      {
       "date": "2021-09-28",
       "open": 16.81,
       "high": 17.1667,
       "low": 16.56,
       "close": 16.72,
       "volume": 120831.0
      },
      {
       "date": "2021-09-29",
       "open": 16.76,
       "high": 16.9999,
       "low": 16.01,
       "close": 16.05,
       "volume": 121675.0
      },
      {
       "date": "2021-09-30",
       "open": 16.16,
       "high": 17.54,
       "low": 15.8201,
       "close": 16.35,
       "volume": 373384.0
      },
      {
       "date": "2021-10-01",
       "open": 16.4,
       "high": 16.7,
       "low": 16.12,
       "close": 16.48,
       "volume": 79752.0
      },
      {
       "date": "2021-10-04",
       "open": 16.47,
       "high": 16.47,
       "low": 15.928,
       "close": 16.1,
       "volume": 73550.0
      },
      {
       "date": "2021-10-05",
       "open": 16.01,
       "high": 16.43,
       "low": 15.86,
       "close": 16.03,
       "volume": 113023.0
      },
      {
       "date": "2021-10-06",
       "open": 15.86,
       "high": 15.98,
       "low": 15.0,
       "close": 15.22,
       "volume": 196962.0
      },
      {
       "date": "2021-10-07",
       "open": 15.38,
       "high": 16.2,
       "low": 15.33,
       "close": 15.7,
       "volume": 138420.0
      },
      {
       "date": "2021-10-08",
       "open": 15.8,
       "high": 15.8,
       "low": 15.27,
       "close": 15.27,
       "volume": 82540.0
      },
      {
       "date": "2021-10-11",
       "open": 15.24,
       "high": 16.08,
       "low": 15.21,
       "close": 15.35,
       "volume": 144386.0
      },
      {
       "date": "2021-10-12",
       "open": 15.61,
       "high": 19.18,
       "low": 15.13,
       "close": 19.18,
       "volume": 2790066.0
      },
      {
       "date": "2021-10-13",
       "open": 22.64,
       "high": 22.92,
       "low": 17.86,
       "close": 18.65,
       "volume": 12243978.0
      },
      {
       "date": "2021-10-14",
       "open": 18.14,
       "high": 18.45,
       "low": 17.01,
       "close": 18.1,
       "volume": 1697795.0
      },
      {
       "date": "2021-10-15",
       "open": 17.49,
       "high": 18.27,
       "low": 17.19,
       "close": 17.37,
       "volume": 534821.0
      },
      {
       "date": "2021-10-18",
       "open": 17.31,
       "high": 17.79,
       "low": 17.0501,
       "close": 17.63,
       "volume": 307659.0
      },
      {
       "date": "2021-10-19",
       "open": 17.7,
       "high": 18.09,
       "low": 17.1,
       "close": 17.53,
       "volume": 298151.0
      },
      {
       "date": "2021-10-20",
       "open": 17.48,
       "high": 17.7799,
       "low": 17.31,
       "close": 17.5,
       "volume": 131258.0
      },
      {
       "date": "2021-10-21",
       "open": 17.49,
       "high": 17.75,
       "low": 17.029,
       "close": 17.06,
       "volume": 152090.0
      },
      {
       "date": "2021-10-22",
       "open": 16.9,
       "high": 17.0499,
       "low": 16.25,
       "close": 16.57,
       "volume": 241312.0
      },
      {
       "date": "2021-10-25",
       "open": 16.45,
       "high": 17.05,
       "low": 16.45,
       "close": 16.88,
       "volume": 162305.0
      },
      {
       "date": "2021-10-26",
       "open": 16.5,
       "high": 16.9202,
       "low": 16.4001,
       "close": 16.71,
       "volume": 217488.0
      },
      {
       "date": "2021-10-27",
       "open": 16.6,
       "high": 16.66,
       "low": 15.97,
       "close": 16.01,
       "volume": 163123.0
      },
      {
       "date": "2021-10-28",
       "open": 16.315,
       "high": 16.69,
       "low": 15.98,
       "close": 16.51,
       "volume": 416678.0
      },
      {
       "date": "2021-10-29",
       "open": 16.0,
       "high": 16.36,
       "low": 15.89,
       "close": 16.18,
       "volume": 210651.0
      },
      {
       "date": "2021-11-01",
       "open": 16.05,
       "high": 16.4399,
       "low": 15.6,
       "close": 15.94,
       "volume": 616647.0
      },
      {
       "date": "2021-11-02",
       "open": 15.89,
       "high": 16.09,
       "low": 15.45,
       "close": 16.05,
       "volume": 303416.0
      },
      {
       "date": "2021-11-03",
       "open": 16.55,
       "high": 17.93,
       "low": 16.02,
       "close": 16.45,
       "volume": 1127679.0
      },
      {
       "date": "2021-11-04",
       "open": 16.22,
       "high": 16.48,
       "low": 16.0,
       "close": 16.3,
       "volume": 274367.0
      },
      {
       "date": "2021-11-05",
       "open": 16.24,
       "high": 16.51,
       "low": 16.06,
       "close": 16.23,
       "volume": 211320.0
      },
      {
       "date": "2021-11-08",
       "open": 16.0,
       "high": 16.75,
       "low": 15.97,
       "close": 16.36,
       "volume": 323449.0
      },
      {
       "date": "2021-11-09",
       "open": 16.19,
       "high": 16.33,
       "low": 15.81,
       "close": 16.07,
       "volume": 173609.0
      },
      {
       "date": "2021-11-10",
       "open": 16.0,
       "high": 16.1899,
       "low": 15.7,
       "close": 15.86,
       "volume": 163306.0
      },
      {
       "date": "2021-11-11",
       "open": 15.86,
       "high": 16.23,
       "low": 15.85,
       "close": 16.0,
       "volume": 119537.0
      },
      {
       "date": "2021-11-12",
       "open": 16.15,
       "high": 16.21,
       "low": 15.71,
       "close": 15.94,
       "volume": 107264.0
      },
      {
       "date": "2021-11-15",
       "open": 15.98,
       "high": 16.54,
       "low": 15.77,
       "close": 15.95,
       "volume": 374962.0
      },
      {
       "date": "2021-11-16",
       "open": 15.95,
       "high": 15.95,
       "low": 15.39,
       "close": 15.51,
       "volume": 199981.0
      },
      {
       "date": "2021-11-17",
       "open": 15.55,
       "high": 15.8,
       "low": 15.32,
       "close": 15.39,
       "volume": 132820.0
      },
      {
       "date": "2021-11-18",
       "open": 15.45,
       "high": 15.5699,
       "low": 14.72,
       "close": 14.86,
       "volume": 171752.0
      },
      {
       "date": "2021-11-19",
       "open": 15.045,
       "high": 15.19,
       "low": 14.802,
       "close": 14.99,
       "volume": 152347.0
      },
      {
       "date": "2021-11-22",
       "open": 15.0,
       "high": 15.315,
       "low": 14.6065,
       "close": 15.14,
       "volume": 227761.0
      },
      {
       "date": "2021-11-23",
       "open": 14.97,
       "high": 15.13,
       "low": 14.145,
       "close": 14.5,
       "volume": 186746.0
      },
      {
       "date": "2021-11-24",
       "open": 14.39,
       "high": 14.75,
       "low": 14.28,
       "close": 14.62,
       "volume": 76615.0
      },
      {
       "date": "2021-11-26",
       "open": 13.9,
       "high": 14.6,
       "low": 13.8,
       "close": 14.45,
       "volume": 160276.0
      },
      {
       "date": "2021-11-29",
       "open": 14.45,
       "high": 14.59,
       "low": 13.89,
       "close": 14.03,
       "volume": 87807.0
      },
      {
       "date": "2021-11-30",
       "open": 13.99,
       "high": 14.1,
       "low": 13.65,
       "close": 14.03,
       "volume": 124455.0
      },
      {
       "date": "2021-12-01",
       "open": 14.03,
       "high": 14.22,
       "low": 12.9,
       "close": 13.23,
       "volume": 177543.0
      },
      {
       "date": "2021-12-02",
       "open": 12.98,
       "high": 13.54,
       "low": 12.85,
       "close": 13.35,
       "volume": 191337.0
      },
      {
       "date": "2021-12-03",
       "open": 13.48,
       "high": 13.48,
       "low": 12.19,
       "close": 12.38,
       "volume": 155079.0
      },
      {
       "date": "2021-12-06",
       "open": 12.1,
       "high": 13.22,
       "low": 11.7134,
       "close": 12.99,
       "volume": 227040.0
      },
      {
       "date": "2021-12-07",
       "open": 13.3,
       "high": 13.65,
       "low": 13.12,
       "close": 13.36,
       "volume": 101778.0
      },
      {
       "date": "2021-12-08",
       "open": 13.57,
       "high": 15.13,
       "low": 13.4,
       "close": 13.6,
       "volume": 490908.0
      },
      {
       "date": "2021-12-09",
       "open": 13.38,
       "high": 13.52,
       "low": 12.78,
       "close": 12.78,
       "volume": 67517.0
      },
      {
       "date": "2021-12-10",
       "open": 13.02,
       "high": 13.33,
       "low": 12.8414,
       "close": 13.12,
       "volume": 89036.0
      },
      {
       "date": "2021-12-13",
       "open": 13.0,
       "high": 13.0,
       "low": 12.32,
       "close": 12.51,
       "volume": 88835.0
      },
      {
       "date": "2021-12-14",
       "open": 12.2,
       "high": 12.63,
       "low": 12.09,
       "close": 12.37,
       "volume": 93999.0
      },
      {
       "date": "2021-12-15",
       "open": 12.37,
       "high": 12.767,
       "low": 11.861,
       "close": 12.54,
       "volume": 69449.0
      },
      {
       "date": "2021-12-16",
       "open": 12.54,
       "high": 12.6766,
       "low": 11.91,
       "close": 12.15,
       "volume": 46658.0
      },
      {
       "date": "2021-12-17",
       "open": 12.07,
       "high": 13.1814,
       "low": 12.0,
       "close": 12.93,
       "volume": 143758.0
      },
      {
       "date": "2021-12-20",
       "open": 12.47,
       "high": 12.7,
       "low": 11.88,
       "close": 12.33,
       "volume": 63705.0
      },
      {
       "date": "2021-12-21",
       "open": 12.58,
       "high": 12.83,
       "low": 12.335,
       "close": 12.61,
       "volume": 48912.0
      },
      {
       "date": "2021-12-22",
       "open": 12.29,
       "high": 12.5599,
       "low": 12.28,
       "close": 12.29,
       "volume": 46660.0
      },
      {
       "date": "2021-12-23",
       "open": 12.135,
       "high": 12.4121,
       "low": 11.9501,
       "close": 12.33,
       "volume": 71456.0
      },
      {
       "date": "2021-12-27",
       "open": 12.32,
       "high": 12.32,
       "low": 11.905,
       "close": 12.05,
       "volume": 53191.0
      },
      {
       "date": "2021-12-28",
       "open": 11.95,
       "high": 12.5,
       "low": 11.45,
       "close": 11.57,
       "volume": 156895.0
      },
      {
       "date": "2021-12-29",
       "open": 11.67,
       "high": 11.72,
       "low": 11.03,
       "close": 11.08,
       "volume": 80609.0
      },
      {
       "date": "2021-12-30",
       "open": 11.09,
       "high": 11.5,
       "low": 11.0377,
       "close": 11.2,
       "volume": 131215.0
      },
      {
       "date": "2021-12-31",
       "open": 11.19,
       "high": 11.47,
       "low": 10.66,
       "close": 10.68,
       "volume": 140363.0
      }
     ],
     "npc_bets": [
      {
       "player_id": "p01",
       "action": "对赌",
       "stake": 1000,
       "side_price": 0.5,
       "result": {
        "won": false,
        "dealer_delta": 1000
       }
      },
      {
       "player_id": "p02",
       "action": "反",
       "stake": 269,
       "side_price": 0.5,
       "result": {
        "won": false,
        "payout": 0.0
       }
      },
      {
       "player_id": "p04",
       "action": "跟",
       "stake": 264,
       "side_price": 0.5,
       "result": {
        "won": true,
        "payout": 528.0
       }
      }
     ],
     "commission": {
      "pool": 264.0,
      "rate": 0.0,
      "paid": 0.0
     },
     "is_burst": true,
     "q_en": "A tiny float can push it up and smash it down—which way do you think it goes?",
     "reason_en": "After a twenty-bagger, how many more buyers are left?",
     "mood_en": "Crazy.",
     "headline_en": "A family headphone company with under $100M market cap surged twenty times in a week.",
     "background_en": "A family-owned headphone company with a market cap under $100 million and daily volume typically just tens of thousands of shares surged twenty times in a week. Tiny float means small buying volume can move the price—this is both why it got picked and why it later crashed."
    }
   ],
   "dealer_cash_after": 13089.41
  }
 ],
 "tickers": {}
};
