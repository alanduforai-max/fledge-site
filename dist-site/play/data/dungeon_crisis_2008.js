window.DUNGEON_CRISIS_2008 = {
 "dungeon_id": "crisis_2008",
 "name": "2008 崩塌",
 "name_en": "The 2008 Meltdown",
 "generated_for": "2026-08-20T14:16:54",
 "start_hidden": "2007-09",
 "resolved_from": "live",
 "n_stages": 6,
 "ended_early": null,
 "burst": {
  "label": "系统性崩塌",
  "label_en": "The System Cracks",
  "note": "走到这里，整个系统一起塌了 —— 这一关之后没有下一关。清算那一刻你手上剩什么，就是这一局的成绩。",
  "note_en": "This is where the whole system goes at once — there is no stage after this one. Whatever you are holding when the unwind hits is what the run is worth.",
  "rule": "崩塌不看日历，看你已经挺过几关、以及题目本身有多疯。崩塌那一关就是本局终局。庄家被闲家打穿的话，本局也会提前结束。",
  "rule_en": "The break is not on a calendar. It builds from how many stages you have survived and how crazy the events themselves are. The stage it lands on is the last stage. If the dealer gets busted by the table first, the run also ends early."
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
  "id": "crisis_2008-dealer",
  "name": "危机时代的庄家",
  "emoji": "🏦",
  "start_cash": 10000.0,
  "cash": 9030.06,
  "bankrupt_day": null,
  "theme": "次贷危机 · 2007-2009",
  "theme_en": "Subprime crisis · 2007-2009",
  "name_en": "The Crisis-Era Dealer"
 },
 "players": [
  {
   "id": "p05",
   "name": "佛系躺赢",
   "emoji": "🐌",
   "start_cash": 2000.0,
   "cash": 2682.79,
   "bankrupt_day": null,
   "return_pct": 0.3414,
   "name_en": "Zen Coaster"
  },
  {
   "id": "p01",
   "name": "快钱阿飞",
   "emoji": "🐆",
   "start_cash": 2000.0,
   "cash": 1885.79,
   "bankrupt_day": null,
   "return_pct": -0.0571,
   "name_en": "Fast-Money Flip"
  },
  {
   "id": "p06",
   "name": "反骨仔",
   "emoji": "🐊",
   "start_cash": 2000.0,
   "cash": 1793.44,
   "bankrupt_day": null,
   "return_pct": -0.1033,
   "name_en": "Contrarian Kid"
  },
  {
   "id": "p03",
   "name": "杠精本精",
   "emoji": "🦂",
   "start_cash": 2000.0,
   "cash": 1760.0,
   "bankrupt_day": null,
   "return_pct": -0.12,
   "name_en": "Pure Contrarian"
  },
  {
   "id": "p04",
   "name": "空军司令",
   "emoji": "🦇",
   "start_cash": 2000.0,
   "cash": 1739.0,
   "bankrupt_day": null,
   "return_pct": -0.1305,
   "name_en": "Bear Commander"
  },
  {
   "id": "p02",
   "name": "稳字诀",
   "emoji": "🐘",
   "start_cash": 2000.0,
   "cash": 1682.79,
   "bankrupt_day": null,
   "return_pct": -0.1586,
   "name_en": "Steady Hand"
  }
 ],
 "days": [
  {
   "day_idx": 1,
   "date": "2007-09-04",
   "ideas": [
    {
     "id": "2007-09-fed-cuts-fifty",
     "ticker": "SPY",
     "company": "SPDR S&P 500 ETF",
     "headline": "美联储降息 50 个基点，幅度超出预期",
     "question": "央行明确站出来托底了，你猜这段时间市场怎么走？",
     "reason": "别和美联储作对，降息周期里股市都是涨的。",
     "mood": "松了口气",
     "price": 0.58,
     "holding_days": 27,
     "hype": 0.45,
     "lead_context": {
      "months": 3,
      "from": 107.71,
      "to": 105.06,
      "pct": -0.0246,
      "week_pct": 0.0145
     },
     "background": "美联储降息 50 个基点，幅度超出市场预期的 25。股市当天大涨，很多人把这解读成「格林斯潘看跌期权」还在，央行不会让市场跌太多。",
     "resolved_from": "live",
     "ref_close": 105.0591,
     "ref_date": "2007-09-04",
     "outcome": "YES",
     "exit_close": 109.252,
     "exit_date": "2007-10-01",
     "move_pct": 0.0399,
     "chart": [
      {
       "date": "2007-06-08",
       "open": 104.9619,
       "high": 106.0917,
       "low": 104.6181,
       "close": 105.9864,
       "volume": 175886000.0
      },
      {
       "date": "2007-06-11",
       "open": 105.9092,
       "high": 106.625,
       "low": 105.7478,
       "close": 106.1689,
       "volume": 102015600.0
      },
      {
       "date": "2007-06-12",
       "open": 105.7268,
       "high": 106.3373,
       "low": 104.9409,
       "close": 105.0111,
       "volume": 233898000.0
      },
      {
       "date": "2007-06-13",
       "open": 105.6075,
       "high": 106.7092,
       "low": 105.0602,
       "close": 106.5829,
       "volume": 193208200.0
      },
      {
       "date": "2007-06-14",
       "open": 106.7022,
       "high": 107.446,
       "low": 106.6811,
       "close": 107.2635,
       "volume": 146396500.0
      },
      {
       "date": "2007-06-15",
       "open": 107.9203,
       "high": 108.2867,
       "low": 107.7723,
       "close": 107.871,
       "volume": 154030800.0
      },
      {
       "date": "2007-06-18",
       "open": 108.0894,
       "high": 108.0965,
       "low": 107.582,
       "close": 107.7441,
       "volume": 88537500.0
      },
      {
       "date": "2007-06-19",
       "open": 107.5045,
       "high": 108.0894,
       "low": 107.3706,
       "close": 108.0119,
       "volume": 110851700.0
      },
      {
       "date": "2007-06-20",
       "open": 108.2304,
       "high": 108.2304,
       "low": 106.384,
       "close": 106.5108,
       "volume": 177119700.0
      },
      {
       "date": "2007-06-21",
       "open": 106.4686,
       "high": 107.1944,
       "low": 105.8836,
       "close": 107.1028,
       "volume": 205262000.0
      },
      {
       "date": "2007-06-22",
       "open": 106.7786,
       "high": 106.9548,
       "low": 105.6018,
       "close": 106.0951,
       "volume": 204964700.0
      },
      {
       "date": "2007-06-25",
       "open": 105.8766,
       "high": 106.5884,
       "low": 105.0168,
       "close": 105.5877,
       "volume": 232014400.0
      },
      {
       "date": "2007-06-26",
       "open": 105.8555,
       "high": 106.0316,
       "low": 104.4954,
       "close": 104.5024,
       "volume": 198445700.0
      },
      {
       "date": "2007-06-27",
       "open": 104.3897,
       "high": 106.1092,
       "low": 104.3403,
       "close": 105.9894,
       "volume": 213638000.0
      },
      {
       "date": "2007-06-28",
       "open": 105.9753,
       "high": 106.7011,
       "low": 105.4749,
       "close": 105.9753,
       "volume": 157705000.0
      },
      {
       "date": "2007-06-29",
       "open": 106.3417,
       "high": 106.8702,
       "low": 105.1085,
       "close": 106.0105,
       "volume": 199701800.0
      },
      {
       "date": "2007-07-02",
       "open": 106.3206,
       "high": 107.0605,
       "low": 106.2501,
       "close": 106.9689,
       "volume": 103357000.0
      },
      {
       "date": "2007-07-03",
       "open": 107.2437,
       "high": 107.4693,
       "low": 107.1099,
       "close": 107.3565,
       "volume": 54048400.0
      },
      {
       "date": "2007-07-05",
       "open": 107.3988,
       "high": 107.5115,
       "low": 106.8562,
       "close": 107.2437,
       "volume": 89279000.0
      },
      {
       "date": "2007-07-06",
       "open": 107.3847,
       "high": 107.9414,
       "low": 107.0676,
       "close": 107.8075,
       "volume": 81109000.0
      },
      {
       "date": "2007-07-09",
       "open": 107.9344,
       "high": 108.0753,
       "low": 107.5538,
       "close": 107.8921,
       "volume": 72348100.0
      },
      {
       "date": "2007-07-10",
       "open": 107.3213,
       "high": 107.5468,
       "low": 106.2501,
       "close": 106.3558,
       "volume": 180362600.0
      },
      {
       "date": "2007-07-11",
       "open": 106.236,
       "high": 107.1521,
       "low": 106.0739,
       "close": 107.1099,
       "volume": 175607600.0
      },
      {
       "date": "2007-07-12",
       "open": 107.3776,
       "high": 109.0549,
       "low": 107.3565,
       "close": 108.8012,
       "volume": 133882500.0
      },
      {
       "date": "2007-07-13",
       "open": 108.928,
       "high": 109.5552,
       "low": 108.8012,
       "close": 109.1253,
       "volume": 111794300.0
      },
      {
       "date": "2007-07-16",
       "open": 109.224,
       "high": 109.6046,
       "low": 108.9351,
       "close": 109.1113,
       "volume": 98378700.0
      },
      {
       "date": "2007-07-17",
       "open": 109.1817,
       "high": 109.5693,
       "low": 109.0055,
       "close": 109.0549,
       "volume": 126201300.0
      },
      {
       "date": "2007-07-18",
       "open": 108.6884,
       "high": 109.0901,
       "low": 108.033,
       "close": 108.8576,
       "volume": 237887400.0
      },
      {
       "date": "2007-07-19",
       "open": 109.372,
       "high": 109.6046,
       "low": 109.0549,
       "close": 109.2804,
       "volume": 145212700.0
      },
      {
       "date": "2007-07-20",
       "open": 109.1535,
       "high": 109.224,
       "low": 107.7018,
       "close": 108.174,
       "volume": 245502500.0
      },
      {
       "date": "2007-07-23",
       "open": 108.6532,
       "high": 109.0337,
       "low": 108.033,
       "close": 108.5052,
       "volume": 121183900.0
      },
      {
       "date": "2007-07-24",
       "open": 107.9062,
       "high": 108.7237,
       "low": 106.2431,
       "close": 106.6236,
       "volume": 256732400.0
      },
      {
       "date": "2007-07-25",
       "open": 107.131,
       "high": 107.3917,
       "low": 105.8836,
       "close": 106.8421,
       "volume": 265214500.0
      },
      {
       "date": "2007-07-26",
       "open": 105.8414,
       "high": 106.2712,
       "low": 103.1634,
       "close": 104.3121,
       "volume": 467592500.0
      },
      {
       "date": "2007-07-27",
       "open": 104.446,
       "high": 104.9111,
       "low": 102.2191,
       "close": 102.2614,
       "volume": 422987600.0
      },
      {
       "date": "2007-07-30",
       "open": 102.8393,
       "high": 104.1641,
       "low": 102.3882,
       "close": 103.8611,
       "volume": 283017500.0
      },
      {
       "date": "2007-07-31",
       "open": 104.5306,
       "high": 105.3269,
       "low": 102.2121,
       "close": 102.6913,
       "volume": 316976700.0
      },
      {
       "date": "2007-08-01",
       "open": 102.3107,
       "high": 103.6004,
       "low": 101.4439,
       "close": 103.1916,
       "volume": 467670000.0
      },
      {
       "date": "2007-08-02",
       "open": 103.4242,
       "high": 104.1289,
       "low": 102.3671,
       "close": 104.0162,
       "volume": 294758400.0
      },
      {
       "date": "2007-08-03",
       "open": 103.7906,
       "high": 104.0021,
       "low": 100.9154,
       "close": 101.3382,
       "volume": 359398200.0
      },
      {
       "date": "2007-08-06",
       "open": 101.6272,
       "high": 103.4735,
       "low": 100.4432,
       "close": 103.0366,
       "volume": 324980000.0
      },
      {
       "date": "2007-08-07",
       "open": 102.8463,
       "high": 105.0028,
       "low": 102.346,
       "close": 104.136,
       "volume": 232568700.0
      },
      {
       "date": "2007-08-08",
       "open": 104.587,
       "high": 106.1232,
       "low": 103.8329,
       "close": 105.5877,
       "volume": 274930600.0
      },
      {
       "date": "2007-08-09",
       "open": 103.8963,
       "high": 104.9675,
       "low": 102.3882,
       "close": 102.4587,
       "volume": 357622100.0
      },
      {
       "date": "2007-08-10",
       "open": 101.754,
       "high": 103.241,
       "low": 100.859,
       "close": 101.9795,
       "volume": 411018400.0
      },
      {
       "date": "2007-08-13",
       "open": 103.241,
       "high": 103.5158,
       "low": 102.198,
       "close": 102.346,
       "volume": 181917200.0
      },
      {
       "date": "2007-08-14",
       "open": 102.6772,
       "high": 102.9309,
       "low": 100.5771,
       "close": 100.7815,
       "volume": 264134500.0
      },
      {
       "date": "2007-08-15",
       "open": 100.5771,
       "high": 101.8033,
       "low": 99.0972,
       "close": 99.3932,
       "volume": 323834000.0
      },
      {
       "date": "2007-08-16",
       "open": 98.5123,
       "high": 100.7322,
       "low": 96.5462,
       "close": 100.1402,
       "volume": 546743700.0
      },
      {
       "date": "2007-08-17",
       "open": 102.5362,
       "high": 102.7547,
       "low": 99.6399,
       "close": 101.9795,
       "volume": 388218100.0
      },
      {
       "date": "2007-08-20",
       "open": 102.3037,
       "high": 102.5151,
       "low": 100.9788,
       "close": 101.9302,
       "volume": 187320400.0
      },
      {
       "date": "2007-08-21",
       "open": 101.902,
       "high": 102.8675,
       "low": 101.5778,
       "close": 102.1346,
       "volume": 157066400.0
      },
      {
       "date": "2007-08-22",
       "open": 102.8956,
       "high": 103.4524,
       "low": 102.4164,
       "close": 103.3467,
       "volume": 173156700.0
      },
      {
       "date": "2007-08-23",
       "open": 103.8329,
       "high": 104.0514,
       "low": 102.6138,
       "close": 103.2551,
       "volume": 203915300.0
      },
      {
       "date": "2007-08-24",
       "open": 103.2269,
       "high": 104.5306,
       "low": 103.0859,
       "close": 104.5306,
       "volume": 128901900.0
      },
      {
       "date": "2007-08-27",
       "open": 104.1923,
       "high": 104.5306,
       "low": 103.403,
       "close": 103.5581,
       "volume": 113024300.0
      },
      {
       "date": "2007-08-28",
       "open": 103.0014,
       "high": 103.0648,
       "low": 101.0986,
       "close": 101.2819,
       "volume": 219790700.0
      },
      {
       "date": "2007-08-29",
       "open": 101.7399,
       "high": 103.4101,
       "low": 101.451,
       "close": 103.2691,
       "volume": 207654200.0
      },
      {
       "date": "2007-08-30",
       "open": 102.501,
       "high": 103.7272,
       "low": 102.4023,
       "close": 102.9943,
       "volume": 191817300.0
      },
      {
       "date": "2007-08-31",
       "open": 104.0514,
       "high": 104.6504,
       "low": 103.4735,
       "close": 104.0091,
       "volume": 185477500.0
      },
      {
       "date": "2007-09-04",
       "open": 103.9104,
       "high": 105.6934,
       "low": 103.8752,
       "close": 105.0591,
       "volume": 120062000.0
      },
      {
       "date": "2007-09-05",
       "open": 104.439,
       "high": 104.5517,
       "low": 103.5933,
       "close": 104.15,
       "volume": 166261800.0
      },
      {
       "date": "2007-09-06",
       "open": 104.2628,
       "high": 104.7279,
       "low": 103.6779,
       "close": 104.3897,
       "volume": 127878400.0
      },
      {
       "date": "2007-09-07",
       "open": 103.2269,
       "high": 103.5158,
       "low": 102.3671,
       "close": 102.9379,
       "volume": 235447600.0
      },
      {
       "date": "2007-09-10",
       "open": 103.2551,
       "high": 103.396,
       "low": 101.7117,
       "close": 102.7406,
       "volume": 192305900.0
      },
      {
       "date": "2007-09-11",
       "open": 103.0577,
       "high": 104.0866,
       "low": 102.9802,
       "close": 103.9386,
       "volume": 162081900.0
      },
      {
       "date": "2007-09-12",
       "open": 103.7977,
       "high": 104.6081,
       "low": 103.5792,
       "close": 104.2064,
       "volume": 149554600.0
      },
      {
       "date": "2007-09-13",
       "open": 104.6856,
       "high": 105.3199,
       "low": 104.439,
       "close": 104.9393,
       "volume": 154079000.0
      },
      {
       "date": "2007-09-14",
       "open": 104.2699,
       "high": 105.0662,
       "low": 104.1148,
       "close": 104.9323,
       "volume": 121911000.0
      },
      {
       "date": "2007-09-17",
       "open": 104.5165,
       "high": 104.7561,
       "low": 104.0373,
       "close": 104.3685,
       "volume": 109870800.0
      },
      {
       "date": "2007-09-18",
       "open": 104.883,
       "high": 107.4693,
       "low": 104.3897,
       "close": 107.4411,
       "volume": 263759500.0
      },
      {
       "date": "2007-09-19",
       "open": 108.1106,
       "high": 108.8012,
       "low": 107.6173,
       "close": 108.0753,
       "volume": 193779900.0
      },
      {
       "date": "2007-09-20",
       "open": 108.0612,
       "high": 108.1246,
       "low": 107.1944,
       "close": 107.3142,
       "volume": 175186800.0
      },
      {
       "date": "2007-09-21",
       "open": 108.1262,
       "high": 108.4165,
       "low": 107.4394,
       "close": 107.6023,
       "volume": 141457500.0
      },
      {
       "date": "2007-09-24",
       "open": 107.9209,
       "high": 108.2041,
       "low": 107.1703,
       "close": 107.404,
       "volume": 139450200.0
      },
      {
       "date": "2007-09-25",
       "open": 106.7809,
       "high": 107.3828,
       "low": 106.5402,
       "close": 107.1916,
       "volume": 142289900.0
      },
      {
       "date": "2007-09-26",
       "open": 107.8005,
       "high": 108.1687,
       "low": 107.1916,
       "close": 107.758,
       "volume": 135547000.0
      },
      {
       "date": "2007-09-27",
       "open": 108.2678,
       "high": 108.4024,
       "low": 107.758,
       "close": 108.3953,
       "volume": 102713300.0
      },
      {
       "date": "2007-09-28",
       "open": 108.2253,
       "high": 108.4661,
       "low": 107.6093,
       "close": 108.0342,
       "volume": 133372100.0
      },
      {
       "date": "2007-10-01",
       "open": 108.0483,
       "high": 109.5706,
       "low": 107.9775,
       "close": 109.252,
       "volume": 148162300.0
      }
     ],
     "npc_bets": [
      {
       "player_id": "p01",
       "action": "跟",
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
       "side_price": 0.58,
       "result": {
        "won": true,
        "payout": 413.79
       }
      },
      {
       "player_id": "p05",
       "action": "跟",
       "stake": 240,
       "side_price": 0.58,
       "result": {
        "won": true,
        "payout": 413.79
       }
      },
      {
       "player_id": "p06",
       "action": "反",
       "stake": 240,
       "side_price": 0.42,
       "result": {
        "won": false,
        "payout": 0.0
       }
      }
     ],
     "commission": {
      "pool": 720.0,
      "rate": 0.12,
      "paid": 86.4
     },
     "is_burst": false,
     "q_en": "The Fed clearly came out to support the market—how do you think it performs from here?",
     "reason_en": "Don't fight the Fed; stocks always rise in rate-cut cycles.",
     "mood_en": "Relieved.",
     "headline_en": "Federal Reserve cuts rates by 50 basis points, exceeding expectations.",
     "background_en": "The Federal Reserve cuts rates by 50 basis points, exceeding the market's expected 25. Stocks surge that day, and many interpret this as the \"Greenspan put\" still being in effect—the Fed won't let the market fall too far."
    }
   ],
   "dealer_cash_after": 10086.4
  },
  {
   "day_idx": 2,
   "date": "2007-10-01",
   "ideas": [
    {
     "id": "2007-10-dow-record-high",
     "ticker": "SPY",
     "company": "SPDR S&P 500 ETF",
     "headline": "道指创下历史新高 14,164 点，次贷问题已经吵了大半年",
     "question": "坏消息一直有、指数还是创了新高，你猜这段时间它站得住吗？",
     "reason": "盈利还在增长，失业率还在低位，凭什么跌。",
     "mood": "乐观",
     "price": 0.56,
     "holding_days": 31,
     "hype": 0.5,
     "lead_context": {
      "months": 3,
      "from": 106.97,
      "to": 109.25,
      "pct": 0.0213,
      "week_pct": 0.0172
     },
     "background": "道指创下 14,164 点的历史新高。此时次贷问题已经公开发酵了大半年，但企业盈利仍在增长、失业率还在低位，多数策略师给出的 2008 年目标位仍然更高。",
     "resolved_from": "live",
     "ref_close": 109.252,
     "ref_date": "2007-10-01",
     "outcome": "NO",
     "exit_close": 106.9367,
     "exit_date": "2007-11-01",
     "move_pct": -0.0212,
     "chart": [
      {
       "date": "2007-07-06",
       "open": 107.3847,
       "high": 107.9414,
       "low": 107.0676,
       "close": 107.8075,
       "volume": 81109000.0
      },
      {
       "date": "2007-07-09",
       "open": 107.9344,
       "high": 108.0753,
       "low": 107.5538,
       "close": 107.8921,
       "volume": 72348100.0
      },
      {
       "date": "2007-07-10",
       "open": 107.3213,
       "high": 107.5468,
       "low": 106.2501,
       "close": 106.3558,
       "volume": 180362600.0
      },
      {
       "date": "2007-07-11",
       "open": 106.236,
       "high": 107.1521,
       "low": 106.0739,
       "close": 107.1099,
       "volume": 175607600.0
      },
      {
       "date": "2007-07-12",
       "open": 107.3776,
       "high": 109.0549,
       "low": 107.3565,
       "close": 108.8012,
       "volume": 133882500.0
      },
      {
       "date": "2007-07-13",
       "open": 108.928,
       "high": 109.5552,
       "low": 108.8012,
       "close": 109.1253,
       "volume": 111794300.0
      },
      {
       "date": "2007-07-16",
       "open": 109.224,
       "high": 109.6046,
       "low": 108.9351,
       "close": 109.1113,
       "volume": 98378700.0
      },
      {
       "date": "2007-07-17",
       "open": 109.1817,
       "high": 109.5693,
       "low": 109.0055,
       "close": 109.0549,
       "volume": 126201300.0
      },
      {
       "date": "2007-07-18",
       "open": 108.6884,
       "high": 109.0901,
       "low": 108.033,
       "close": 108.8576,
       "volume": 237887400.0
      },
      {
       "date": "2007-07-19",
       "open": 109.372,
       "high": 109.6046,
       "low": 109.0549,
       "close": 109.2804,
       "volume": 145212700.0
      },
      {
       "date": "2007-07-20",
       "open": 109.1535,
       "high": 109.224,
       "low": 107.7018,
       "close": 108.174,
       "volume": 245502500.0
      },
      {
       "date": "2007-07-23",
       "open": 108.6532,
       "high": 109.0337,
       "low": 108.033,
       "close": 108.5052,
       "volume": 121183900.0
      },
      {
       "date": "2007-07-24",
       "open": 107.9062,
       "high": 108.7237,
       "low": 106.2431,
       "close": 106.6236,
       "volume": 256732400.0
      },
      {
       "date": "2007-07-25",
       "open": 107.131,
       "high": 107.3917,
       "low": 105.8836,
       "close": 106.8421,
       "volume": 265214500.0
      },
      {
       "date": "2007-07-26",
       "open": 105.8414,
       "high": 106.2712,
       "low": 103.1634,
       "close": 104.3121,
       "volume": 467592500.0
      },
      {
       "date": "2007-07-27",
       "open": 104.446,
       "high": 104.9111,
       "low": 102.2191,
       "close": 102.2614,
       "volume": 422987600.0
      },
      {
       "date": "2007-07-30",
       "open": 102.8393,
       "high": 104.1641,
       "low": 102.3882,
       "close": 103.8611,
       "volume": 283017500.0
      },
      {
       "date": "2007-07-31",
       "open": 104.5306,
       "high": 105.3269,
       "low": 102.2121,
       "close": 102.6913,
       "volume": 316976700.0
      },
      {
       "date": "2007-08-01",
       "open": 102.3107,
       "high": 103.6004,
       "low": 101.4439,
       "close": 103.1916,
       "volume": 467670000.0
      },
      {
       "date": "2007-08-02",
       "open": 103.4242,
       "high": 104.1289,
       "low": 102.3671,
       "close": 104.0162,
       "volume": 294758400.0
      },
      {
       "date": "2007-08-03",
       "open": 103.7906,
       "high": 104.0021,
       "low": 100.9154,
       "close": 101.3382,
       "volume": 359398200.0
      },
      {
       "date": "2007-08-06",
       "open": 101.6272,
       "high": 103.4735,
       "low": 100.4432,
       "close": 103.0366,
       "volume": 324980000.0
      },
      {
       "date": "2007-08-07",
       "open": 102.8463,
       "high": 105.0028,
       "low": 102.346,
       "close": 104.136,
       "volume": 232568700.0
      },
      {
       "date": "2007-08-08",
       "open": 104.587,
       "high": 106.1232,
       "low": 103.8329,
       "close": 105.5877,
       "volume": 274930600.0
      },
      {
       "date": "2007-08-09",
       "open": 103.8963,
       "high": 104.9675,
       "low": 102.3882,
       "close": 102.4587,
       "volume": 357622100.0
      },
      {
       "date": "2007-08-10",
       "open": 101.754,
       "high": 103.241,
       "low": 100.859,
       "close": 101.9795,
       "volume": 411018400.0
      },
      {
       "date": "2007-08-13",
       "open": 103.241,
       "high": 103.5158,
       "low": 102.198,
       "close": 102.346,
       "volume": 181917200.0
      },
      {
       "date": "2007-08-14",
       "open": 102.6772,
       "high": 102.9309,
       "low": 100.5771,
       "close": 100.7815,
       "volume": 264134500.0
      },
      {
       "date": "2007-08-15",
       "open": 100.5771,
       "high": 101.8033,
       "low": 99.0972,
       "close": 99.3932,
       "volume": 323834000.0
      },
      {
       "date": "2007-08-16",
       "open": 98.5123,
       "high": 100.7322,
       "low": 96.5462,
       "close": 100.1402,
       "volume": 546743700.0
      },
      {
       "date": "2007-08-17",
       "open": 102.5362,
       "high": 102.7547,
       "low": 99.6399,
       "close": 101.9795,
       "volume": 388218100.0
      },
      {
       "date": "2007-08-20",
       "open": 102.3037,
       "high": 102.5151,
       "low": 100.9788,
       "close": 101.9302,
       "volume": 187320400.0
      },
      {
       "date": "2007-08-21",
       "open": 101.902,
       "high": 102.8675,
       "low": 101.5778,
       "close": 102.1346,
       "volume": 157066400.0
      },
      {
       "date": "2007-08-22",
       "open": 102.8956,
       "high": 103.4524,
       "low": 102.4164,
       "close": 103.3467,
       "volume": 173156700.0
      },
      {
       "date": "2007-08-23",
       "open": 103.8329,
       "high": 104.0514,
       "low": 102.6138,
       "close": 103.2551,
       "volume": 203915300.0
      },
      {
       "date": "2007-08-24",
       "open": 103.2269,
       "high": 104.5306,
       "low": 103.0859,
       "close": 104.5306,
       "volume": 128901900.0
      },
      {
       "date": "2007-08-27",
       "open": 104.1923,
       "high": 104.5306,
       "low": 103.403,
       "close": 103.5581,
       "volume": 113024300.0
      },
      {
       "date": "2007-08-28",
       "open": 103.0014,
       "high": 103.0648,
       "low": 101.0986,
       "close": 101.2819,
       "volume": 219790700.0
      },
      {
       "date": "2007-08-29",
       "open": 101.7399,
       "high": 103.4101,
       "low": 101.451,
       "close": 103.2691,
       "volume": 207654200.0
      },
      {
       "date": "2007-08-30",
       "open": 102.501,
       "high": 103.7272,
       "low": 102.4023,
       "close": 102.9943,
       "volume": 191817300.0
      },
      {
       "date": "2007-08-31",
       "open": 104.0514,
       "high": 104.6504,
       "low": 103.4735,
       "close": 104.0091,
       "volume": 185477500.0
      },
      {
       "date": "2007-09-04",
       "open": 103.9104,
       "high": 105.6934,
       "low": 103.8752,
       "close": 105.0591,
       "volume": 120062000.0
      },
      {
       "date": "2007-09-05",
       "open": 104.439,
       "high": 104.5517,
       "low": 103.5933,
       "close": 104.15,
       "volume": 166261800.0
      },
      {
       "date": "2007-09-06",
       "open": 104.2628,
       "high": 104.7279,
       "low": 103.6779,
       "close": 104.3897,
       "volume": 127878400.0
      },
      {
       "date": "2007-09-07",
       "open": 103.2269,
       "high": 103.5158,
       "low": 102.3671,
       "close": 102.9379,
       "volume": 235447600.0
      },
      {
       "date": "2007-09-10",
       "open": 103.2551,
       "high": 103.396,
       "low": 101.7117,
       "close": 102.7406,
       "volume": 192305900.0
      },
      {
       "date": "2007-09-11",
       "open": 103.0577,
       "high": 104.0866,
       "low": 102.9802,
       "close": 103.9386,
       "volume": 162081900.0
      },
      {
       "date": "2007-09-12",
       "open": 103.7977,
       "high": 104.6081,
       "low": 103.5792,
       "close": 104.2064,
       "volume": 149554600.0
      },
      {
       "date": "2007-09-13",
       "open": 104.6856,
       "high": 105.3199,
       "low": 104.439,
       "close": 104.9393,
       "volume": 154079000.0
      },
      {
       "date": "2007-09-14",
       "open": 104.2699,
       "high": 105.0662,
       "low": 104.1148,
       "close": 104.9323,
       "volume": 121911000.0
      },
      {
       "date": "2007-09-17",
       "open": 104.5165,
       "high": 104.7561,
       "low": 104.0373,
       "close": 104.3685,
       "volume": 109870800.0
      },
      {
       "date": "2007-09-18",
       "open": 104.883,
       "high": 107.4693,
       "low": 104.3897,
       "close": 107.4411,
       "volume": 263759500.0
      },
      {
       "date": "2007-09-19",
       "open": 108.1106,
       "high": 108.8012,
       "low": 107.6173,
       "close": 108.0753,
       "volume": 193779900.0
      },
      {
       "date": "2007-09-20",
       "open": 108.0612,
       "high": 108.1246,
       "low": 107.1944,
       "close": 107.3142,
       "volume": 175186800.0
      },
      {
       "date": "2007-09-21",
       "open": 108.1262,
       "high": 108.4165,
       "low": 107.4394,
       "close": 107.6023,
       "volume": 141457500.0
      },
      {
       "date": "2007-09-24",
       "open": 107.9209,
       "high": 108.2041,
       "low": 107.1703,
       "close": 107.404,
       "volume": 139450200.0
      },
      {
       "date": "2007-09-25",
       "open": 106.7809,
       "high": 107.3828,
       "low": 106.5402,
       "close": 107.1916,
       "volume": 142289900.0
      },
      {
       "date": "2007-09-26",
       "open": 107.8005,
       "high": 108.1687,
       "low": 107.1916,
       "close": 107.758,
       "volume": 135547000.0
      },
      {
       "date": "2007-09-27",
       "open": 108.2678,
       "high": 108.4024,
       "low": 107.758,
       "close": 108.3953,
       "volume": 102713300.0
      },
      {
       "date": "2007-09-28",
       "open": 108.2253,
       "high": 108.4661,
       "low": 107.6093,
       "close": 108.0342,
       "volume": 133372100.0
      },
      {
       "date": "2007-10-01",
       "open": 108.0483,
       "high": 109.5706,
       "low": 107.9775,
       "close": 109.252,
       "volume": 148162300.0
      },
      {
       "date": "2007-10-02",
       "open": 109.4715,
       "high": 109.4998,
       "low": 108.9051,
       "close": 109.1033,
       "volume": 112978800.0
      },
      {
       "date": "2007-10-03",
       "open": 108.9051,
       "high": 109.3299,
       "low": 108.3386,
       "close": 108.8838,
       "volume": 119055900.0
      },
      {
       "date": "2007-10-04",
       "open": 109.1175,
       "high": 109.2237,
       "low": 108.7493,
       "close": 109.0538,
       "volume": 76864400.0
      },
      {
       "date": "2007-10-05",
       "open": 109.7689,
       "high": 110.5265,
       "low": 109.4857,
       "close": 110.3495,
       "volume": 134579700.0
      },
      {
       "date": "2007-10-08",
       "open": 110.0238,
       "high": 110.0946,
       "low": 109.5848,
       "close": 109.7618,
       "volume": 71280400.0
      },
      {
       "date": "2007-10-09",
       "open": 110.1725,
       "high": 110.8097,
       "low": 109.7689,
       "close": 110.7956,
       "volume": 94054300.0
      },
      {
       "date": "2007-10-10",
       "open": 110.484,
       "high": 110.7672,
       "low": 110.0379,
       "close": 110.6115,
       "volume": 101711100.0
      },
      {
       "date": "2007-10-11",
       "open": 111.1142,
       "high": 111.5319,
       "low": 109.4219,
       "close": 110.0804,
       "volume": 233529100.0
      },
      {
       "date": "2007-10-12",
       "open": 110.0734,
       "high": 110.7035,
       "low": 109.9388,
       "close": 110.6894,
       "volume": 124546700.0
      },
      {
       "date": "2007-10-15",
       "open": 110.6469,
       "high": 110.7106,
       "low": 108.9971,
       "close": 109.7547,
       "volume": 161151900.0
      },
      {
       "date": "2007-10-16",
       "open": 109.3299,
       "high": 109.4078,
       "low": 108.6643,
       "close": 108.8838,
       "volume": 166525700.0
      },
      {
       "date": "2007-10-17",
       "open": 109.7335,
       "high": 109.8114,
       "low": 107.9563,
       "close": 109.2166,
       "volume": 216687300.0
      },
      {
       "date": "2007-10-18",
       "open": 108.6502,
       "high": 109.1741,
       "low": 108.3882,
       "close": 108.8201,
       "volume": 148367500.0
      },
      {
       "date": "2007-10-19",
       "open": 108.3953,
       "high": 110.7956,
       "low": 105.9667,
       "close": 105.9737,
       "volume": 297169900.0
      },
      {
       "date": "2007-10-22",
       "open": 105.4002,
       "high": 106.7455,
       "low": 105.2586,
       "close": 106.5897,
       "volume": 261989800.0
      },
      {
       "date": "2007-10-23",
       "open": 107.2412,
       "high": 107.5881,
       "low": 106.3844,
       "close": 107.4536,
       "volume": 180085100.0
      },
      {
       "date": "2007-10-24",
       "open": 107.0641,
       "high": 107.4394,
       "low": 105.3861,
       "close": 107.2553,
       "volume": 326694200.0
      },
      {
       "date": "2007-10-25",
       "open": 107.3757,
       "high": 107.8288,
       "low": 106.1224,
       "close": 107.5102,
       "volume": 237374500.0
      },
      {
       "date": "2007-10-26",
       "open": 108.374,
       "high": 108.7705,
       "low": 107.5527,
       "close": 108.7705,
       "volume": 176484000.0
      },
      {
       "date": "2007-10-29",
       "open": 108.99,
       "high": 109.3511,
       "low": 108.721,
       "close": 109.1316,
       "volume": 106841000.0
      },
      {
       "date": "2007-10-30",
       "open": 108.6502,
       "high": 108.8626,
       "low": 108.2395,
       "close": 108.374,
       "volume": 132981600.0
      },
      {
       "date": "2007-10-31",
       "open": 109.0254,
       "high": 109.9388,
       "low": 108.2183,
       "close": 109.4998,
       "volume": 220954400.0
      },
      {
       "date": "2007-11-01",
       "open": 108.5369,
       "high": 108.6218,
       "low": 106.6251,
       "close": 106.9367,
       "volume": 333040800.0
      }
     ],
     "npc_bets": [
      {
       "player_id": "p04",
       "action": "跟",
       "stake": 240,
       "side_price": 0.56,
       "result": {
        "won": false,
        "payout": 0.0
       }
      },
      {
       "player_id": "p06",
       "action": "跟",
       "stake": 211,
       "side_price": 0.56,
       "result": {
        "won": false,
        "payout": 0.0
       }
      }
     ],
     "commission": {
      "pool": 451.0,
      "rate": 0.09,
      "paid": -40.59
     },
     "is_burst": false,
     "q_en": "Bad news keeps coming but the index hits new highs—think it can hold from here?",
     "reason_en": "Earnings are still growing, unemployment is still low—why would it fall.",
     "mood_en": "Optimistic",
     "headline_en": "Dow hits all-time high of 14,164; subprime issues have been debated for half a year.",
     "background_en": "The Dow hits an all-time high of 14,164. Subprime problems have been festering publicly for half a year now, but corporate earnings are still growing and unemployment remains low; most strategists still project higher targets for 2008."
    }
   ],
   "dealer_cash_after": 10045.81
  },
  {
   "day_idx": 3,
   "date": "2007-11-01",
   "ideas": [
    {
     "id": "2007-11-citi-writedown",
     "ticker": "C",
     "company": "Citigroup Inc",
     "headline": "花旗最多减记 110 亿，说过「音乐还在放就得跳舞」的 CEO 辞职",
     "question": "减记数字和 CEO 一起出来了，你猜这段时间是利空出尽还是刚开始？",
     "reason": "换 CEO 加一次性减记，通常就是见底信号。",
     "mood": "动摇",
     "price": 0.47,
     "holding_days": 32,
     "hype": 0.6,
     "lead_context": {
      "months": 3,
      "from": 311.58,
      "to": 266.12,
      "pct": -0.1459,
      "week_pct": -0.0529
     },
     "background": "花旗宣布最多 110 亿美元的次贷相关减记，CEO Prince 辞职——他几个月前刚说过那句「音乐还在放，你就得站起来跳舞」。此时市场还不知道花旗表外还有多少 SIV 要并回表内。",
     "resolved_from": "live",
     "ref_close": 266.1222,
     "ref_date": "2007-11-01",
     "outcome": "NO",
     "exit_close": 228.4601,
     "exit_date": "2007-12-03",
     "move_pct": -0.1415,
     "chart": [
      {
       "date": "2007-08-08",
       "open": 332.2949,
       "high": 339.9276,
       "low": 328.2741,
       "close": 337.2698,
       "volume": 53972000.0
      },
      {
       "date": "2007-08-09",
       "open": 325.8208,
       "high": 331.9542,
       "low": 319.6192,
       "close": 319.6192,
       "volume": 66597000.0
      },
      {
       "date": "2007-08-10",
       "open": 312.0546,
       "high": 323.7081,
       "low": 311.7821,
       "close": 320.3007,
       "volume": 51587000.0
      },
      {
       "date": "2007-08-13",
       "open": 320.0962,
       "high": 326.5023,
       "low": 316.4843,
       "close": 317.1658,
       "volume": 34500000.0
      },
      {
       "date": "2007-08-14",
       "open": 317.9155,
       "high": 319.1422,
       "low": 310.2146,
       "close": 311.1687,
       "volume": 38826000.0
      },
      {
       "date": "2007-08-15",
       "open": 310.6235,
       "high": 316.8932,
       "low": 308.0339,
       "close": 310.828,
       "volume": 46115000.0
      },
      {
       "date": "2007-08-16",
       "open": 310.6235,
       "high": 329.3645,
       "low": 304.3538,
       "close": 324.0489,
       "volume": 102342000.0
      },
      {
       "date": "2007-08-17",
       "open": 340.0639,
       "high": 340.0639,
       "low": 322.9585,
       "close": 332.6357,
       "volume": 84969000.0
      },
      {
       "date": "2007-08-20",
       "open": 333.9305,
       "high": 335.1572,
       "low": 325.0711,
       "close": 329.7734,
       "volume": 38619000.0
      },
      {
       "date": "2007-08-21",
       "open": 328.1378,
       "high": 332.772,
       "low": 325.7526,
       "close": 327.5245,
       "volume": 33663000.0
      },
      {
       "date": "2007-08-22",
       "open": 330.4549,
       "high": 332.3631,
       "low": 323.7081,
       "close": 330.046,
       "volume": 40910000.0
      },
      {
       "date": "2007-08-23",
       "open": 332.5675,
       "high": 333.9305,
       "low": 326.7749,
       "close": 329.5008,
       "volume": 25798000.0
      },
      {
       "date": "2007-08-24",
       "open": 329.569,
       "high": 331.3408,
       "low": 326.1615,
       "close": 330.5231,
       "volume": 23562000.0
      },
      {
       "date": "2007-08-27",
       "open": 329.3645,
       "high": 329.7053,
       "low": 325.0711,
       "close": 325.6845,
       "volume": 20315000.0
      },
      {
       "date": "2007-08-28",
       "open": 318.4607,
       "high": 322.0726,
       "low": 314.1673,
       "close": 314.4399,
       "volume": 38997000.0
      },
      {
       "date": "2007-08-29",
       "open": 315.6666,
       "high": 320.3007,
       "low": 312.4635,
       "close": 319.9599,
       "volume": 29454000.0
      },
      {
       "date": "2007-08-30",
       "open": 318.3244,
       "high": 318.5288,
       "low": 313.4858,
       "close": 315.0532,
       "volume": 30068000.0
      },
      {
       "date": "2007-08-31",
       "open": 320.8459,
       "high": 321.4592,
       "low": 316.2799,
       "close": 319.4829,
       "volume": 27211000.0
      },
      {
       "date": "2007-09-04",
       "open": 320.0281,
       "high": 324.1511,
       "low": 316.8932,
       "close": 321.7318,
       "volume": 26286000.0
      },
      {
       "date": "2007-09-05",
       "open": 318.1199,
       "high": 318.1199,
       "low": 312.5998,
       "close": 313.4858,
       "volume": 35250000.0
      },
      {
       "date": "2007-09-06",
       "open": 314.5762,
       "high": 316.1436,
       "low": 310.2828,
       "close": 311.1687,
       "volume": 27039000.0
      },
      {
       "date": "2007-09-07",
       "open": 308.1702,
       "high": 313.8265,
       "low": 307.1479,
       "close": 309.942,
       "volume": 40566000.0
      },
      {
       "date": "2007-09-10",
       "open": 309.7376,
       "high": 312.3272,
       "low": 305.5123,
       "close": 308.7153,
       "volume": 31736000.0
      },
      {
       "date": "2007-09-11",
       "open": 311.9865,
       "high": 315.8028,
       "low": 309.7376,
       "close": 313.5539,
       "volume": 31693000.0
      },
      {
       "date": "2007-09-12",
       "open": 312.7361,
       "high": 314.8488,
       "low": 310.0783,
       "close": 311.8502,
       "volume": 28875000.0
      },
      {
       "date": "2007-09-13",
       "open": 313.4176,
       "high": 317.3703,
       "low": 312.8724,
       "close": 315.9391,
       "volume": 28834000.0
      },
      {
       "date": "2007-09-14",
       "open": 315.6666,
       "high": 318.1881,
       "low": 312.9406,
       "close": 317.8473,
       "volume": 28646000.0
      },
      {
       "date": "2007-09-17",
       "open": 313.4176,
       "high": 317.0295,
       "low": 311.1006,
       "close": 313.6902,
       "volume": 23458000.0
      },
      {
       "date": "2007-09-18",
       "open": 329.6371,
       "high": 330.6593,
       "low": 313.8265,
       "close": 329.6371,
       "volume": 49325000.0
      },
      {
       "date": "2007-09-19",
       "open": 331.6816,
       "high": 333.9305,
       "low": 325.2756,
       "close": 328.9556,
       "volume": 41794000.0
      },
      {
       "date": "2007-09-20",
       "open": 325.1393,
       "high": 330.3186,
       "low": 320.437,
       "close": 321.6637,
       "volume": 33584000.0
      },
      {
       "date": "2007-09-21",
       "open": 322.6178,
       "high": 325.0711,
       "low": 319.8236,
       "close": 323.7763,
       "volume": 38109000.0
      },
      {
       "date": "2007-09-24",
       "open": 323.7081,
       "high": 324.0489,
       "low": 316.2799,
       "close": 317.5066,
       "volume": 37988000.0
      },
      {
       "date": "2007-09-25",
       "open": 315.7347,
       "high": 317.3021,
       "low": 313.2132,
       "close": 315.5984,
       "volume": 32231000.0
      },
      {
       "date": "2007-09-26",
       "open": 315.5984,
       "high": 320.437,
       "low": 313.5539,
       "close": 317.234,
       "volume": 34721000.0
      },
      {
       "date": "2007-09-27",
       "open": 319.2103,
       "high": 319.551,
       "low": 316.348,
       "close": 319.4829,
       "volume": 27137000.0
      },
      {
       "date": "2007-09-28",
       "open": 317.3771,
       "high": 321.5274,
       "low": 316.8932,
       "close": 318.0518,
       "volume": 20983000.0
      },
      {
       "date": "2007-10-01",
       "open": 312.7361,
       "high": 328.683,
       "low": 312.5317,
       "close": 325.2074,
       "volume": 56764000.0
      },
      {
       "date": "2007-10-02",
       "open": 325.9571,
       "high": 327.1156,
       "low": 322.2089,
       "close": 326.1615,
       "volume": 33016000.0
      },
      {
       "date": "2007-10-03",
       "open": 325.9571,
       "high": 328.8193,
       "low": 324.7304,
       "close": 326.366,
       "volume": 34089000.0
      },
      {
       "date": "2007-10-04",
       "open": 327.3882,
       "high": 330.1823,
       "low": 323.0267,
       "close": 324.5941,
       "volume": 35658000.0
      },
      {
       "date": "2007-10-05",
       "open": 326.0934,
       "high": 332.3631,
       "low": 325.8208,
       "close": 329.1601,
       "volume": 37029000.0
      },
      {
       "date": "2007-10-08",
       "open": 328.9556,
       "high": 329.0238,
       "low": 324.2533,
       "close": 325.7526,
       "volume": 18548000.0
      },
      {
       "date": "2007-10-09",
       "open": 326.7749,
       "high": 326.7749,
       "low": 318.9377,
       "close": 324.5259,
       "volume": 40728000.0
      },
      {
       "date": "2007-10-10",
       "open": 322.3452,
       "high": 322.8904,
       "low": 318.7333,
       "close": 321.2548,
       "volume": 29143000.0
      },
      {
       "date": "2007-10-11",
       "open": 322.4133,
       "high": 333.5898,
       "low": 321.1866,
       "close": 329.2964,
       "volume": 64854000.0
      },
      {
       "date": "2007-10-12",
       "open": 326.0252,
       "high": 332.772,
       "low": 322.6178,
       "close": 326.2297,
       "volume": 43830000.0
      },
      {
       "date": "2007-10-15",
       "open": 326.2297,
       "high": 330.1823,
       "low": 311.3732,
       "close": 315.1214,
       "volume": 77195000.0
      },
      {
       "date": "2007-10-16",
       "open": 312.8043,
       "high": 315.1214,
       "low": 304.4901,
       "close": 305.2397,
       "volume": 64286000.0
      },
      {
       "date": "2007-10-17",
       "open": 304.6945,
       "high": 308.7153,
       "low": 298.8337,
       "close": 304.3538,
       "volume": 114554000.0
      },
      {
       "date": "2007-10-18",
       "open": 300.4693,
       "high": 302.7182,
       "low": 298.1522,
       "close": 298.6974,
       "volume": 57300000.0
      },
      {
       "date": "2007-10-19",
       "open": 297.8115,
       "high": 300.1967,
       "low": 288.2025,
       "close": 288.6795,
       "volume": 69956000.0
      },
      {
       "date": "2007-10-22",
       "open": 286.9076,
       "high": 294.6766,
       "low": 286.7032,
       "close": 290.3832,
       "volume": 58931000.0
      },
      {
       "date": "2007-10-23",
       "open": 292.3596,
       "high": 292.7003,
       "low": 287.1121,
       "close": 289.2247,
       "volume": 43648000.0
      },
      {
       "date": "2007-10-24",
       "open": 287.6573,
       "high": 291.7462,
       "low": 280.4335,
       "close": 284.9995,
       "volume": 71040000.0
      },
      {
       "date": "2007-10-25",
       "open": 284.5224,
       "high": 288.0662,
       "low": 275.5949,
       "close": 280.9787,
       "volume": 60902000.0
      },
      {
       "date": "2007-10-26",
       "open": 284.5224,
       "high": 291.5418,
       "low": 282.8868,
       "close": 290.5195,
       "volume": 54758000.0
      },
      {
       "date": "2007-10-29",
       "open": 291.9507,
       "high": 293.7907,
       "low": 289.6336,
       "close": 290.9284,
       "volume": 34183000.0
      },
      {
       "date": "2007-10-30",
       "open": 289.6336,
       "high": 291.8144,
       "low": 284.9313,
       "close": 286.9758,
       "volume": 38939000.0
      },
      {
       "date": "2007-10-31",
       "open": 287.9299,
       "high": 289.4292,
       "low": 282.1372,
       "close": 285.5447,
       "volume": 73463000.0
      },
      {
       "date": "2007-11-01",
       "open": 267.4352,
       "high": 282.6382,
       "low": 263.4962,
       "close": 266.1222,
       "volume": 171474000.0
      },
      {
       "date": "2007-11-02",
       "open": 267.6425,
       "high": 268.8173,
       "low": 252.3703,
       "close": 260.732,
       "volume": 138708000.0
      },
      {
       "date": "2007-11-05",
       "open": 248.7769,
       "high": 255.6183,
       "low": 241.8664,
       "close": 248.0858,
       "volume": 230189000.0
      },
      {
       "date": "2007-11-06",
       "open": 248.2932,
       "high": 251.1264,
       "low": 238.5494,
       "close": 242.4193,
       "volume": 151705000.0
      },
      {
       "date": "2007-11-07",
       "open": 239.1022,
       "high": 244.3542,
       "low": 230.6715,
       "close": 230.8788,
       "volume": 120752000.0
      },
      {
       "date": "2007-11-08",
       "open": 233.2283,
       "high": 234.956,
       "low": 214.5701,
       "close": 227.3544,
       "volume": 194271000.0
      },
      {
       "date": "2007-11-09",
       "open": 220.0984,
       "high": 238.2039,
       "low": 218.3708,
       "close": 228.7365,
       "volume": 153954000.0
      },
      {
       "date": "2007-11-12",
       "open": 232.1227,
       "high": 242.281,
       "low": 230.1186,
       "close": 231.9844,
       "volume": 110606000.0
      },
      {
       "date": "2007-11-13",
       "open": 238.8949,
       "high": 248.7769,
       "low": 236.4071,
       "close": 248.0858,
       "volume": 105711000.0
      },
      {
       "date": "2007-11-14",
       "open": 259.1426,
       "high": 259.1426,
       "low": 248.3623,
       "close": 249.0533,
       "volume": 116447000.0
      },
      {
       "date": "2007-11-15",
       "open": 247.0493,
       "high": 247.3948,
       "low": 236.4071,
       "close": 238.964,
       "volume": 82686000.0
      },
      {
       "date": "2007-11-16",
       "open": 240.4843,
       "high": 241.0372,
       "low": 231.1552,
       "close": 234.956,
       "volume": 79695000.0
      },
      {
       "date": "2007-11-19",
       "open": 222.2967,
       "high": 229.2203,
       "low": 220.444,
       "close": 221.135,
       "volume": 98150000.0
      },
      {
       "date": "2007-11-20",
       "open": 220.444,
       "high": 226.3179,
       "low": 212.8425,
       "close": 216.9887,
       "volume": 127581000.0
      },
      {
       "date": "2007-11-21",
       "open": 213.879,
       "high": 218.0253,
       "low": 210.7693,
       "close": 212.3587,
       "volume": 92035000.0
      },
      {
       "date": "2007-11-23",
       "open": 217.6107,
       "high": 219.0619,
       "low": 214.2936,
       "close": 219.0619,
       "volume": 38475000.0
      },
      {
       "date": "2007-11-26",
       "open": 217.818,
       "high": 219.5456,
       "low": 205.5865,
       "close": 212.1514,
       "volume": 110857000.0
      },
      {
       "date": "2007-11-27",
       "open": 211.9441,
       "high": 213.879,
       "low": 203.8588,
       "close": 209.5254,
       "volume": 193141000.0
      },
      {
       "date": "2007-11-28",
       "open": 216.6432,
       "high": 227.1471,
       "low": 214.3628,
       "close": 223.139,
       "volume": 138874000.0
      },
      {
       "date": "2007-11-29",
       "open": 223.0699,
       "high": 224.3138,
       "low": 219.7529,
       "close": 223.139,
       "volume": 70920000.0
      },
      {
       "date": "2007-11-30",
       "open": 235.3015,
       "high": 237.0291,
       "low": 228.0455,
       "close": 230.1186,
       "volume": 94526000.0
      },
      {
       "date": "2007-12-03",
       "open": 230.0495,
       "high": 230.4641,
       "low": 226.0414,
       "close": 228.4601,
       "volume": 55655000.0
      }
     ],
     "npc_bets": [
      {
       "player_id": "p01",
       "action": "跟",
       "stake": 261,
       "side_price": 0.47,
       "result": {
        "won": false,
        "payout": 0.0
       }
      },
      {
       "player_id": "p04",
       "action": "跟",
       "stake": 211,
       "side_price": 0.47,
       "result": {
        "won": false,
        "payout": 0.0
       }
      },
      {
       "player_id": "p05",
       "action": "跟",
       "stake": 261,
       "side_price": 0.47,
       "result": {
        "won": false,
        "payout": 0.0
       }
      }
     ],
     "commission": {
      "pool": 733.0,
      "rate": 0.0,
      "paid": -0.0
     },
     "is_burst": false,
     "q_en": "Write-downs and CEO changes came out together—do you think this is the worst of bad news behind us or just beginning?",
     "reason_en": "CEO change plus one-time write-down usually signals a bottom.",
     "mood_en": "Wavering",
     "headline_en": "Citigroup write-down up to $11 billion; CEO who said \"you have to keep dancing while the music plays\" resigns.",
     "background_en": "Citigroup announces up to $11 billion in subprime-related writedowns; CEO Prince resigns—he said just months earlier that \"as long as the music is playing, you have to keep dancing.\" The market doesn't yet know how many SIVs Citigroup has off-balance-sheet that need to be brought back on."
    }
   ],
   "dealer_cash_after": 10045.81
  },
  {
   "day_idx": 4,
   "date": "2007-12-03",
   "ideas": [
    {
     "id": "2007-12-fed-taf",
     "ticker": "XLF",
     "company": "Financial Select Sector SPDR",
     "headline": "美联储推出匿名拆借工具，因为公开借钱会被当成快不行了",
     "question": "央行开始替银行遮丑，你猜金融板块这段时间怎么走？",
     "reason": "有工具总比没工具好，流动性问题解决了就没事了。",
     "mood": "不安",
     "price": 0.5,
     "holding_days": 30,
     "hype": 0.5,
     "lead_context": {
      "months": 3,
      "from": 19.06,
      "to": 17.36,
      "pct": -0.0892,
      "week_pct": 0.087
     },
     "background": "美联储推出定期拍卖工具，让银行可以匿名从央行拿到资金——因为公开去贴现窗口借钱本身就会被市场解读成「这家快不行了」。央行开始为银行的面子设计工具，这件事本身就说明了同业之间已经互相不信任。",
     "resolved_from": "live",
     "ref_close": 17.3609,
     "ref_date": "2007-12-03",
     "outcome": "NO",
     "exit_close": 16.1545,
     "exit_date": "2008-01-02",
     "move_pct": -0.0695,
     "chart": [
      {
       "date": "2007-09-07",
       "open": 18.4947,
       "high": 18.6853,
       "low": 18.3883,
       "close": 18.5003,
       "volume": 75398300.0
      },
      {
       "date": "2007-09-10",
       "open": 18.5452,
       "high": 18.6578,
       "low": 18.2425,
       "close": 18.4387,
       "volume": 59897300.0
      },
      {
       "date": "2007-09-11",
       "open": 18.534,
       "high": 18.7694,
       "low": 18.5172,
       "close": 18.6292,
       "volume": 50653200.0
      },
      {
       "date": "2007-09-12",
       "open": 18.6629,
       "high": 18.7694,
       "low": 18.5396,
       "close": 18.6685,
       "volume": 32551800.0
      },
      {
       "date": "2007-09-13",
       "open": 18.7862,
       "high": 18.9991,
       "low": 18.7694,
       "close": 18.9767,
       "volume": 54521500.0
      },
      {
       "date": "2007-09-14",
       "open": 18.7694,
       "high": 19.044,
       "low": 18.7469,
       "close": 18.9543,
       "volume": 30328200.0
      },
      {
       "date": "2007-09-17",
       "open": 18.8871,
       "high": 18.8871,
       "low": 18.7021,
       "close": 18.8646,
       "volume": 41027500.0
      },
      {
       "date": "2007-09-18",
       "open": 18.9879,
       "high": 19.6717,
       "low": 18.803,
       "close": 19.5764,
       "volume": 138824400.0
      },
      {
       "date": "2007-09-19",
       "open": 19.795,
       "high": 19.9911,
       "low": 19.6437,
       "close": 19.6997,
       "volume": 74788300.0
      },
      {
       "date": "2007-09-20",
       "open": 19.7557,
       "high": 19.7782,
       "low": 19.3634,
       "close": 19.4587,
       "volume": 64727200.0
      },
      {
       "date": "2007-09-21",
       "open": 19.6701,
       "high": 19.6701,
       "low": 19.3144,
       "close": 19.5346,
       "volume": 54089800.0
      },
      {
       "date": "2007-09-24",
       "open": 19.5628,
       "high": 19.5628,
       "low": 19.1846,
       "close": 19.2636,
       "volume": 49536500.0
      },
      {
       "date": "2007-09-25",
       "open": 19.162,
       "high": 19.2354,
       "low": 19.0152,
       "close": 19.2241,
       "volume": 35891300.0
      },
      {
       "date": "2007-09-26",
       "open": 19.2749,
       "high": 19.3991,
       "low": 19.1224,
       "close": 19.2297,
       "volume": 52912400.0
      },
      {
       "date": "2007-09-27",
       "open": 19.3144,
       "high": 19.4668,
       "low": 19.2579,
       "close": 19.4556,
       "volume": 35801900.0
      },
      {
       "date": "2007-09-28",
       "open": 19.3201,
       "high": 19.5007,
       "low": 19.2862,
       "close": 19.3765,
       "volume": 30769600.0
      },
      {
       "date": "2007-10-01",
       "open": 19.2692,
       "high": 19.7887,
       "low": 19.2523,
       "close": 19.7435,
       "volume": 50132700.0
      },
      {
       "date": "2007-10-02",
       "open": 19.8451,
       "high": 20.0032,
       "low": 19.7887,
       "close": 19.9693,
       "volume": 29490800.0
      },
      {
       "date": "2007-10-03",
       "open": 19.8564,
       "high": 20.0427,
       "low": 19.8282,
       "close": 19.9242,
       "volume": 42312400.0
      },
      {
       "date": "2007-10-04",
       "open": 20.0597,
       "high": 20.0709,
       "low": 19.9072,
       "close": 20.0427,
       "volume": 30393000.0
      },
      {
       "date": "2007-10-05",
       "open": 20.0935,
       "high": 20.3081,
       "low": 20.0709,
       "close": 20.2629,
       "volume": 39598500.0
      },
      {
       "date": "2007-10-08",
       "open": 20.2347,
       "high": 20.2347,
       "low": 19.9016,
       "close": 19.9863,
       "volume": 20989900.0
      },
      {
       "date": "2007-10-09",
       "open": 20.0822,
       "high": 20.229,
       "low": 19.9411,
       "close": 20.1556,
       "volume": 32186200.0
      },
      {
       "date": "2007-10-10",
       "open": 20.1161,
       "high": 20.1782,
       "low": 19.9354,
       "close": 20.0427,
       "volume": 32653000.0
      },
      {
       "date": "2007-10-11",
       "open": 20.2686,
       "high": 20.2686,
       "low": 19.879,
       "close": 19.9354,
       "volume": 62945100.0
      },
      {
       "date": "2007-10-12",
       "open": 19.8621,
       "high": 20.0709,
       "low": 19.8621,
       "close": 20.0653,
       "volume": 33482600.0
      },
      {
       "date": "2007-10-15",
       "open": 19.9863,
       "high": 19.9919,
       "low": 19.4499,
       "close": 19.6588,
       "volume": 77068300.0
      },
      {
       "date": "2007-10-16",
       "open": 19.5459,
       "high": 19.5515,
       "low": 19.1958,
       "close": 19.2918,
       "volume": 67821200.0
      },
      {
       "date": "2007-10-17",
       "open": 19.4499,
       "high": 19.5233,
       "low": 18.9305,
       "close": 19.2805,
       "volume": 74371900.0
      },
      {
       "date": "2007-10-18",
       "open": 18.9079,
       "high": 19.0942,
       "low": 18.8571,
       "close": 19.0378,
       "volume": 72192100.0
      },
      {
       "date": "2007-10-19",
       "open": 18.9361,
       "high": 19.0434,
       "low": 18.3772,
       "close": 18.4054,
       "volume": 89670000.0
      },
      {
       "date": "2007-10-22",
       "open": 18.2191,
       "high": 18.7442,
       "low": 18.2191,
       "close": 18.6313,
       "volume": 65483100.0
      },
      {
       "date": "2007-10-23",
       "open": 18.8402,
       "high": 18.8402,
       "low": 18.524,
       "close": 18.7329,
       "volume": 49394100.0
      },
      {
       "date": "2007-10-24",
       "open": 18.6877,
       "high": 18.7103,
       "low": 18.1231,
       "close": 18.5917,
       "volume": 104561400.0
      },
      {
       "date": "2007-10-25",
       "open": 18.6143,
       "high": 18.7555,
       "low": 18.1683,
       "close": 18.5748,
       "volume": 78647800.0
      },
      {
       "date": "2007-10-26",
       "open": 18.9248,
       "high": 19.0265,
       "low": 18.4958,
       "close": 19.0265,
       "volume": 79171500.0
      },
      {
       "date": "2007-10-29",
       "open": 19.0321,
       "high": 19.0829,
       "low": 18.8514,
       "close": 19.0829,
       "volume": 38167900.0
      },
      {
       "date": "2007-10-30",
       "open": 18.9926,
       "high": 18.9926,
       "low": 18.7724,
       "close": 18.7893,
       "volume": 28533900.0
      },
      {
       "date": "2007-10-31",
       "open": 18.8627,
       "high": 19.1337,
       "low": 18.6877,
       "close": 19.0434,
       "volume": 84949200.0
      },
      {
       "date": "2007-11-01",
       "open": 18.4901,
       "high": 18.8853,
       "low": 18.0667,
       "close": 18.0667,
       "volume": 91285600.0
      },
      {
       "date": "2007-11-02",
       "open": 18.1062,
       "high": 18.1457,
       "low": 17.4964,
       "close": 17.9763,
       "volume": 159628100.0
      },
      {
       "date": "2007-11-05",
       "open": 17.4795,
       "high": 17.8183,
       "low": 17.3384,
       "close": 17.6545,
       "volume": 101461900.0
      },
      {
       "date": "2007-11-06",
       "open": 17.7279,
       "high": 17.9538,
       "low": 17.4739,
       "close": 17.9538,
       "volume": 82335400.0
      },
      {
       "date": "2007-11-07",
       "open": 17.615,
       "high": 17.6884,
       "low": 16.9714,
       "close": 16.9714,
       "volume": 101827000.0
      },
      {
       "date": "2007-11-08",
       "open": 17.2198,
       "high": 17.2311,
       "low": 16.5367,
       "close": 17.1464,
       "volume": 118618200.0
      },
      {
       "date": "2007-11-09",
       "open": 16.8528,
       "high": 17.5021,
       "low": 16.627,
       "close": 17.0166,
       "volume": 134218000.0
      },
      {
       "date": "2007-11-12",
       "open": 17.1408,
       "high": 17.6037,
       "low": 17.0391,
       "close": 17.0787,
       "volume": 108934900.0
      },
      {
       "date": "2007-11-13",
       "open": 17.4626,
       "high": 17.982,
       "low": 17.3722,
       "close": 17.8804,
       "volume": 131450700.0
      },
      {
       "date": "2007-11-14",
       "open": 18.2586,
       "high": 18.3433,
       "low": 17.8013,
       "close": 17.8126,
       "volume": 96446600.0
      },
      {
       "date": "2007-11-15",
       "open": 17.6376,
       "high": 17.8013,
       "low": 16.9714,
       "close": 17.3609,
       "volume": 109203200.0
      },
      {
       "date": "2007-11-16",
       "open": 17.3609,
       "high": 17.4456,
       "low": 16.9996,
       "close": 17.2254,
       "volume": 81770800.0
      },
      {
       "date": "2007-11-19",
       "open": 16.9996,
       "high": 17.0504,
       "low": 16.5649,
       "close": 16.7625,
       "volume": 136617600.0
      },
      {
       "date": "2007-11-20",
       "open": 16.4858,
       "high": 16.8528,
       "low": 16.0624,
       "close": 16.3955,
       "volume": 146173800.0
      },
      {
       "date": "2007-11-21",
       "open": 16.1358,
       "high": 16.4181,
       "low": 15.9495,
       "close": 16.1414,
       "volume": 109511400.0
      },
      {
       "date": "2007-11-23",
       "open": 16.2882,
       "high": 16.6383,
       "low": 16.2882,
       "close": 16.5254,
       "volume": 71832400.0
      },
      {
       "date": "2007-11-26",
       "open": 16.5423,
       "high": 16.5988,
       "low": 15.8648,
       "close": 15.9721,
       "volume": 103762700.0
      },
      {
       "date": "2007-11-27",
       "open": 16.1245,
       "high": 16.356,
       "low": 15.9438,
       "close": 16.26,
       "volume": 99819600.0
      },
      {
       "date": "2007-11-28",
       "open": 16.6213,
       "high": 17.2311,
       "low": 16.5931,
       "close": 17.2311,
       "volume": 166725700.0
      },
      {
       "date": "2007-11-29",
       "open": 17.1069,
       "high": 17.2198,
       "low": 16.8133,
       "close": 17.0787,
       "volume": 86995300.0
      },
      {
       "date": "2007-11-30",
       "open": 17.6997,
       "high": 17.886,
       "low": 17.4005,
       "close": 17.5021,
       "volume": 117777600.0
      },
      {
       "date": "2007-12-03",
       "open": 17.4174,
       "high": 17.4908,
       "low": 17.2254,
       "close": 17.3609,
       "volume": 58951200.0
      },
      {
       "date": "2007-12-04",
       "open": 16.9996,
       "high": 17.1633,
       "low": 16.9657,
       "close": 17.0391,
       "volume": 61245900.0
      },
      {
       "date": "2007-12-05",
       "open": 17.3045,
       "high": 17.4456,
       "low": 17.1012,
       "close": 17.2932,
       "volume": 86975500.0
      },
      {
       "date": "2007-12-06",
       "open": 17.3158,
       "high": 17.8521,
       "low": 17.2763,
       "close": 17.8521,
       "volume": 99186800.0
      },
      {
       "date": "2007-12-07",
       "open": 17.8917,
       "high": 17.9255,
       "low": 17.615,
       "close": 17.615,
       "volume": 81545400.0
      },
      {
       "date": "2007-12-10",
       "open": 17.7336,
       "high": 18.1175,
       "low": 17.6658,
       "close": 17.9876,
       "volume": 79403900.0
      },
      {
       "date": "2007-12-11",
       "open": 17.8013,
       "high": 18.1457,
       "low": 17.073,
       "close": 17.0787,
       "volume": 136732400.0
      },
      {
       "date": "2007-12-12",
       "open": 17.6658,
       "high": 17.6997,
       "low": 16.627,
       "close": 16.9488,
       "volume": 142877300.0
      },
      {
       "date": "2007-12-13",
       "open": 16.7625,
       "high": 16.9601,
       "low": 16.4689,
       "close": 16.9432,
       "volume": 136130700.0
      },
      {
       "date": "2007-12-14",
       "open": 16.7173,
       "high": 17.0053,
       "low": 16.5649,
       "close": 16.5705,
       "volume": 70296200.0
      },
      {
       "date": "2007-12-17",
       "open": 16.5028,
       "high": 16.7117,
       "low": 16.3842,
       "close": 16.3955,
       "volume": 69628500.0
      },
      {
       "date": "2007-12-18",
       "open": 16.6383,
       "high": 16.6609,
       "low": 16.1302,
       "close": 16.4068,
       "volume": 84071800.0
      },
      {
       "date": "2007-12-19",
       "open": 16.4858,
       "high": 16.7625,
       "low": 16.3278,
       "close": 16.5028,
       "volume": 110179800.0
      },
      {
       "date": "2007-12-20",
       "open": 16.6496,
       "high": 16.7512,
       "low": 16.1471,
       "close": 16.3842,
       "volume": 98252800.0
      },
      {
       "date": "2007-12-21",
       "open": 16.5875,
       "high": 16.7185,
       "low": 16.428,
       "close": 16.6843,
       "volume": 62549100.0
      },
      {
       "date": "2007-12-24",
       "open": 16.7583,
       "high": 17.0147,
       "low": 16.7469,
       "close": 16.9862,
       "volume": 43852100.0
      },
      {
       "date": "2007-12-26",
       "open": 16.9634,
       "high": 16.9634,
       "low": 16.7526,
       "close": 16.8666,
       "volume": 23564300.0
      },
      {
       "date": "2007-12-27",
       "open": 16.821,
       "high": 16.821,
       "low": 16.5134,
       "close": 16.5248,
       "volume": 36127800.0
      },
      {
       "date": "2007-12-28",
       "open": 16.69,
       "high": 16.69,
       "low": 16.3653,
       "close": 16.4849,
       "volume": 32366000.0
      },
      {
       "date": "2007-12-31",
       "open": 16.4564,
       "high": 16.7071,
       "low": 16.314,
       "close": 16.4792,
       "volume": 49599500.0
      },
      {
       "date": "2008-01-02",
       "open": 16.5647,
       "high": 16.6159,
       "low": 16.1363,
       "close": 16.1545,
       "volume": 65350200.0
      }
     ],
     "npc_bets": [
      {
       "player_id": "p01",
       "action": "反",
       "stake": 230,
       "side_price": 0.5,
       "result": {
        "won": true,
        "payout": 460.0
       }
      },
      {
       "player_id": "p02",
       "action": "跟",
       "stake": 261,
       "side_price": 0.5,
       "result": {
        "won": false,
        "payout": 0.0
       }
      },
      {
       "player_id": "p03",
       "action": "跟",
       "stake": 240,
       "side_price": 0.5,
       "result": {
        "won": false,
        "payout": 0.0
       }
      },
      {
       "player_id": "p04",
       "action": "反",
       "stake": 200,
       "side_price": 0.5,
       "result": {
        "won": true,
        "payout": 400.0
       }
      },
      {
       "player_id": "p05",
       "action": "跟",
       "stake": 230,
       "side_price": 0.5,
       "result": {
        "won": false,
        "payout": 0.0
       }
      }
     ],
     "commission": {
      "pool": 731.0,
      "rate": 0.0,
      "paid": -0.0
     },
     "is_burst": false,
     "q_en": "Central bank starts covering for banks—what do you think the financial sector does during this period?",
     "reason_en": "Having a tool is better than having none. Once the liquidity problem is solved, everything's fine.",
     "mood_en": "Uneasy.",
     "headline_en": "Fed launches anonymous borrowing facility because public borrowing gets read as trouble ahead.",
     "background_en": "The Fed introduced a term auction facility, allowing banks to anonymously borrow from the central bank—because borrowing publicly from the discount window itself gets interpreted by markets as \"this bank is in trouble.\" When the central bank starts designing tools to save banks' face, it shows interbank trust has already broken down."
    }
   ],
   "dealer_cash_after": 10045.81
  },
  {
   "day_idx": 5,
   "date": "2008-01-02",
   "ideas": [
    {
     "id": "2008-01-bofa-buys-countrywide",
     "ticker": "BAC",
     "company": "Bank of America Corp",
     "headline": "美银 40 亿抄底全美最大按揭机构，市场普遍叫好",
     "question": "所有人都说这是笔好买卖，你猜美银这段时间怎么走？",
     "reason": "便宜买到行业老大，怎么算都划算。",
     "mood": "乐观",
     "price": 0.55,
     "holding_days": 14,
     "hype": 0.55,
     "lead_context": {
      "months": 3,
      "from": 34.24,
      "to": 27.23,
      "pct": -0.2047,
      "week_pct": -0.0407
     },
     "background": "美银宣布 40 亿美元收购全美最大按揭机构 Countrywide。当时这被普遍称赞为抄底神来之笔。后来这笔交易给美银带来的诉讼和赔偿总额超过五百亿美元，成为金融史上最贵的收购之一。",
     "resolved_from": "live",
     "ref_close": 27.2329,
     "ref_date": "2008-01-02",
     "outcome": "NO",
     "exit_close": 25.9773,
     "exit_date": "2008-01-16",
     "move_pct": -0.0461,
     "chart": [
      {
       "date": "2007-10-05",
       "open": 34.791,
       "high": 35.0492,
       "low": 34.7645,
       "close": 34.8969,
       "volume": 16607600.0
      },
      {
       "date": "2007-10-08",
       "open": 34.8572,
       "high": 34.8572,
       "low": 34.5924,
       "close": 34.7115,
       "volume": 10854900.0
      },
      {
       "date": "2007-10-09",
       "open": 34.8506,
       "high": 34.8572,
       "low": 34.4732,
       "close": 34.8042,
       "volume": 14764200.0
      },
      {
       "date": "2007-10-10",
       "open": 34.5592,
       "high": 34.7446,
       "low": 34.4136,
       "close": 34.6255,
       "volume": 15382700.0
      },
      {
       "date": "2007-10-11",
       "open": 34.7579,
       "high": 35.0624,
       "low": 34.5063,
       "close": 34.7049,
       "volume": 18522300.0
      },
      {
       "date": "2007-10-12",
       "open": 34.7446,
       "high": 34.8042,
       "low": 34.4202,
       "close": 34.4732,
       "volume": 14666500.0
      },
      {
       "date": "2007-10-15",
       "open": 34.4268,
       "high": 34.4732,
       "low": 33.7515,
       "close": 34.0428,
       "volume": 20870800.0
      },
      {
       "date": "2007-10-16",
       "open": 33.7648,
       "high": 33.8641,
       "low": 33.0829,
       "close": 33.2351,
       "volume": 28061000.0
      },
      {
       "date": "2007-10-17",
       "open": 33.5794,
       "high": 33.6125,
       "low": 32.7518,
       "close": 33.1226,
       "volume": 28344700.0
      },
      {
       "date": "2007-10-18",
       "open": 32.0699,
       "high": 32.4274,
       "low": 31.6197,
       "close": 32.3414,
       "volume": 49030200.0
      },
      {
       "date": "2007-10-19",
       "open": 32.1957,
       "high": 32.3083,
       "low": 31.4741,
       "close": 31.4939,
       "volume": 35663200.0
      },
      {
       "date": "2007-10-22",
       "open": 31.4145,
       "high": 31.8779,
       "low": 31.1166,
       "close": 31.633,
       "volume": 25526300.0
      },
      {
       "date": "2007-10-23",
       "open": 31.9772,
       "high": 31.9772,
       "low": 31.2755,
       "close": 31.633,
       "volume": 20194300.0
      },
      {
       "date": "2007-10-24",
       "open": 31.5469,
       "high": 31.6263,
       "low": 30.7524,
       "close": 31.4344,
       "volume": 28020700.0
      },
      {
       "date": "2007-10-25",
       "open": 31.3152,
       "high": 31.6727,
       "low": 30.7524,
       "close": 31.1166,
       "volume": 34432800.0
      },
      {
       "date": "2007-10-26",
       "open": 31.7455,
       "high": 32.0765,
       "low": 30.9908,
       "close": 31.7985,
       "volume": 26594400.0
      },
      {
       "date": "2007-10-29",
       "open": 31.9905,
       "high": 32.0699,
       "low": 31.5601,
       "close": 31.7654,
       "volume": 17553900.0
      },
      {
       "date": "2007-10-30",
       "open": 31.7323,
       "high": 31.8978,
       "low": 31.4277,
       "close": 31.772,
       "volume": 20259000.0
      },
      {
       "date": "2007-10-31",
       "open": 31.9772,
       "high": 32.1626,
       "low": 31.335,
       "close": 31.964,
       "volume": 29107800.0
      },
      {
       "date": "2007-11-01",
       "open": 30.9511,
       "high": 31.1166,
       "low": 30.1102,
       "close": 30.2625,
       "volume": 48004100.0
      },
      {
       "date": "2007-11-02",
       "open": 30.4678,
       "high": 30.5406,
       "low": 29.2761,
       "close": 29.8653,
       "volume": 51566400.0
      },
      {
       "date": "2007-11-05",
       "open": 29.0642,
       "high": 29.8587,
       "low": 28.6471,
       "close": 29.4283,
       "volume": 37758000.0
      },
      {
       "date": "2007-11-06",
       "open": 29.4548,
       "high": 30.2294,
       "low": 29.4548,
       "close": 30.1632,
       "volume": 31114100.0
      },
      {
       "date": "2007-11-07",
       "open": 29.7925,
       "high": 29.8587,
       "low": 28.6339,
       "close": 28.6736,
       "volume": 43617100.0
      },
      {
       "date": "2007-11-08",
       "open": 28.7001,
       "high": 29.4018,
       "low": 27.8195,
       "close": 28.7994,
       "volume": 48097300.0
      },
      {
       "date": "2007-11-09",
       "open": 28.7001,
       "high": 29.852,
       "low": 28.1969,
       "close": 29.1172,
       "volume": 45235900.0
      },
      {
       "date": "2007-11-12",
       "open": 28.8325,
       "high": 30.044,
       "low": 28.8325,
       "close": 29.1172,
       "volume": 32698500.0
      },
      {
       "date": "2007-11-13",
       "open": 29.4614,
       "high": 30.7061,
       "low": 29.2496,
       "close": 30.6333,
       "volume": 40882500.0
      },
      {
       "date": "2007-11-14",
       "open": 31.0106,
       "high": 31.1099,
       "low": 30.0043,
       "close": 30.2758,
       "volume": 33978500.0
      },
      {
       "date": "2007-11-15",
       "open": 30.2162,
       "high": 30.3221,
       "low": 28.998,
       "close": 29.1834,
       "volume": 32015600.0
      },
      {
       "date": "2007-11-16",
       "open": 29.3224,
       "high": 29.4614,
       "low": 28.7861,
       "close": 29.3754,
       "volume": 33513600.0
      },
      {
       "date": "2007-11-19",
       "open": 29.1834,
       "high": 29.1834,
       "low": 28.3227,
       "close": 28.3492,
       "volume": 32492400.0
      },
      {
       "date": "2007-11-20",
       "open": 28.3359,
       "high": 28.8921,
       "low": 27.6275,
       "close": 28.3161,
       "volume": 43513500.0
      },
      {
       "date": "2007-11-21",
       "open": 28.0645,
       "high": 28.6868,
       "low": 27.7533,
       "close": 27.899,
       "volume": 29442100.0
      },
      {
       "date": "2007-11-23",
       "open": 28.1837,
       "high": 28.6934,
       "low": 28.0777,
       "close": 28.5677,
       "volume": 14465600.0
      },
      {
       "date": "2007-11-26",
       "open": 28.6272,
       "high": 28.6405,
       "low": 27.6871,
       "close": 27.7268,
       "volume": 31375200.0
      },
      {
       "date": "2007-11-27",
       "open": 28.1108,
       "high": 28.6802,
       "low": 27.8129,
       "close": 28.4286,
       "volume": 35700800.0
      },
      {
       "date": "2007-11-28",
       "open": 28.9318,
       "high": 29.7925,
       "low": 28.4683,
       "close": 29.6931,
       "volume": 36845200.0
      },
      {
       "date": "2007-11-29",
       "open": 29.66,
       "high": 29.713,
       "low": 29.1436,
       "close": 29.5475,
       "volume": 22607000.0
      },
      {
       "date": "2007-11-30",
       "open": 30.5472,
       "high": 30.9179,
       "low": 30.1897,
       "close": 30.5406,
       "volume": 45494200.0
      },
      {
       "date": "2007-12-03",
       "open": 30.62,
       "high": 30.6995,
       "low": 29.9977,
       "close": 30.1036,
       "volume": 25093100.0
      },
      {
       "date": "2007-12-04",
       "open": 29.7925,
       "high": 29.8057,
       "low": 29.4416,
       "close": 29.6005,
       "volume": 24637200.0
      },
      {
       "date": "2007-12-05",
       "open": 29.885,
       "high": 30.402,
       "low": 29.7776,
       "close": 30.3684,
       "volume": 29247800.0
      },
      {
       "date": "2007-12-06",
       "open": 30.3416,
       "high": 30.872,
       "low": 30.1603,
       "close": 30.8586,
       "volume": 21654800.0
      },
      {
       "date": "2007-12-07",
       "open": 30.8854,
       "high": 31.1607,
       "low": 30.4356,
       "close": 30.4624,
       "volume": 23926800.0
      },
      {
       "date": "2007-12-10",
       "open": 30.5497,
       "high": 31.4091,
       "low": 30.4893,
       "close": 31.3151,
       "volume": 30544800.0
      },
      {
       "date": "2007-12-11",
       "open": 31.2346,
       "high": 31.5569,
       "low": 29.8783,
       "close": 29.979,
       "volume": 33997700.0
      },
      {
       "date": "2007-12-12",
       "open": 30.1737,
       "high": 30.6437,
       "low": 28.5422,
       "close": 29.1599,
       "volume": 62623400.0
      },
      {
       "date": "2007-12-13",
       "open": 28.7839,
       "high": 28.9652,
       "low": 28.2065,
       "close": 28.9047,
       "volume": 37553200.0
      },
      {
       "date": "2007-12-14",
       "open": 28.4817,
       "high": 29.039,
       "low": 28.2736,
       "close": 28.3072,
       "volume": 33028000.0
      },
      {
       "date": "2007-12-17",
       "open": 28.2065,
       "high": 28.334,
       "low": 27.7029,
       "close": 27.9983,
       "volume": 39410600.0
      },
      {
       "date": "2007-12-18",
       "open": 28.2937,
       "high": 28.334,
       "low": 27.3806,
       "close": 27.864,
       "volume": 34660100.0
      },
      {
       "date": "2007-12-19",
       "open": 27.9849,
       "high": 28.6026,
       "low": 27.8506,
       "close": 27.9245,
       "volume": 26788600.0
      },
      {
       "date": "2007-12-20",
       "open": 28.099,
       "high": 28.1997,
       "low": 27.4142,
       "close": 27.8036,
       "volume": 28801500.0
      },
      {
       "date": "2007-12-21",
       "open": 28.0722,
       "high": 28.2467,
       "low": 27.5753,
       "close": 28.146,
       "volume": 42798800.0
      },
      {
       "date": "2007-12-24",
       "open": 28.0185,
       "high": 28.6496,
       "low": 28.0185,
       "close": 28.3877,
       "volume": 12722200.0
      },
      {
       "date": "2007-12-26",
       "open": 28.2535,
       "high": 28.4146,
       "low": 28.0319,
       "close": 28.4012,
       "volume": 15446400.0
      },
      {
       "date": "2007-12-27",
       "open": 28.1997,
       "high": 28.2199,
       "low": 27.7432,
       "close": 27.8372,
       "volume": 19281700.0
      },
      {
       "date": "2007-12-28",
       "open": 27.9983,
       "high": 28.1259,
       "low": 27.4209,
       "close": 27.5955,
       "volume": 23522900.0
      },
      {
       "date": "2007-12-31",
       "open": 27.4679,
       "high": 27.9312,
       "low": 27.2665,
       "close": 27.7029,
       "volume": 24663300.0
      },
      {
       "date": "2008-01-02",
       "open": 27.8842,
       "high": 27.8976,
       "low": 27.0919,
       "close": 27.2329,
       "volume": 30764600.0
      },
      {
       "date": "2008-01-03",
       "open": 27.2799,
       "high": 27.4008,
       "low": 27.0248,
       "close": 27.0583,
       "volume": 22589500.0
      },
      {
       "date": "2008-01-04",
       "open": 26.8569,
       "high": 27.0516,
       "low": 26.6958,
       "close": 26.7562,
       "volume": 34921700.0
      },
      {
       "date": "2008-01-07",
       "open": 26.8905,
       "high": 27.018,
       "low": 26.3601,
       "close": 26.7898,
       "volume": 31884400.0
      },
      {
       "date": "2008-01-08",
       "open": 26.9778,
       "high": 26.9979,
       "low": 25.7021,
       "close": 25.7893,
       "volume": 42143300.0
      },
      {
       "date": "2008-01-09",
       "open": 25.7692,
       "high": 26.0445,
       "low": 25.1246,
       "close": 26.0109,
       "volume": 44276900.0
      },
      {
       "date": "2008-01-10",
       "open": 25.7826,
       "high": 26.7293,
       "low": 25.4469,
       "close": 26.3869,
       "volume": 60532300.0
      },
      {
       "date": "2008-01-11",
       "open": 26.4608,
       "high": 26.7092,
       "low": 25.6148,
       "close": 25.8498,
       "volume": 79116300.0
      },
      {
       "date": "2008-01-14",
       "open": 26.0243,
       "high": 26.3869,
       "low": 25.7893,
       "close": 26.3332,
       "volume": 37063400.0
      },
      {
       "date": "2008-01-15",
       "open": 26.0512,
       "high": 26.0512,
       "low": 25.3865,
       "close": 25.4335,
       "volume": 42560000.0
      },
      {
       "date": "2008-01-16",
       "open": 25.2992,
       "high": 26.4608,
       "low": 25.2992,
       "close": 25.9773,
       "volume": 46457400.0
      }
     ],
     "npc_bets": [
      {
       "player_id": "p04",
       "action": "跟",
       "stake": 210,
       "side_price": 0.55,
       "result": {
        "won": false,
        "payout": 0.0
       }
      },
      {
       "player_id": "p06",
       "action": "反",
       "stake": 200,
       "side_price": 0.45,
       "result": {
        "won": true,
        "payout": 444.44
       }
      }
     ],
     "commission": {
      "pool": 210.0,
      "rate": 0.075,
      "paid": -15.75
     },
     "is_burst": false,
     "q_en": "Everyone says it's a great deal—what do you think Bank of America's stock does during this period?",
     "reason_en": "Buying the industry leader cheap, no matter how you calculate it, it's profitable.",
     "mood_en": "Optimistic",
     "headline_en": "Bank of America buys the nation's largest mortgage servicer for $4 billion, market widely applauds.",
     "background_en": "Bank of America announces $4 billion acquisition of the nation's largest mortgage servicer, Countrywide. This was widely praised as a brilliant bargain buy at the time. Later, lawsuits and settlements from this deal cost Bank of America over $50 billion, making it one of the most expensive acquisitions in financial history."
    }
   ],
   "dealer_cash_after": 10030.06
  },
  {
   "day_idx": 6,
   "date": "2008-01-16",
   "ideas": [
    {
     "id": "2008-01-emergency-cut",
     "ticker": "SPY",
     "company": "SPDR S&P 500 ETF",
     "headline": "美联储盘前紧急降息 75 个基点，1984 年以来最大单次降幅",
     "question": "央行紧急到不等开会就降息，你猜市场读成救援还是读成恐慌？",
     "reason": "这么大的降息幅度，托得住。",
     "mood": "慌",
     "price": 0.5,
     "holding_days": 531,
     "hype": 0.65,
     "lead_context": {
      "months": 3,
      "from": 108.88,
      "to": 97.5,
      "pct": -0.1046,
      "week_pct": -0.0242
     },
     "background": "美联储在常规会议之外、开盘前紧急降息 75 个基点，是 1984 年以来最大单次降幅。诱因是前一天海外市场暴跌，以及法国兴业银行爆出 49 亿欧元的交易员违规损失。",
     "resolved_from": "live",
     "ref_close": 97.4963,
     "ref_date": "2008-01-16",
     "outcome": "NO",
     "exit_close": 67.879,
     "exit_date": "2009-06-30",
     "move_pct": -0.3038,
     "chart": [
      {
       "date": "2007-10-19",
       "open": 108.3953,
       "high": 110.7956,
       "low": 105.9667,
       "close": 105.9737,
       "volume": 297169900.0
      },
      {
       "date": "2007-10-22",
       "open": 105.4002,
       "high": 106.7455,
       "low": 105.2586,
       "close": 106.5897,
       "volume": 261989800.0
      },
      {
       "date": "2007-10-23",
       "open": 107.2412,
       "high": 107.5881,
       "low": 106.3844,
       "close": 107.4536,
       "volume": 180085100.0
      },
      {
       "date": "2007-10-24",
       "open": 107.0641,
       "high": 107.4394,
       "low": 105.3861,
       "close": 107.2553,
       "volume": 326694200.0
      },
      {
       "date": "2007-10-25",
       "open": 107.3757,
       "high": 107.8288,
       "low": 106.1224,
       "close": 107.5102,
       "volume": 237374500.0
      },
      {
       "date": "2007-10-26",
       "open": 108.374,
       "high": 108.7705,
       "low": 107.5527,
       "close": 108.7705,
       "volume": 176484000.0
      },
      {
       "date": "2007-10-29",
       "open": 108.99,
       "high": 109.3511,
       "low": 108.721,
       "close": 109.1316,
       "volume": 106841000.0
      },
      {
       "date": "2007-10-30",
       "open": 108.6502,
       "high": 108.8626,
       "low": 108.2395,
       "close": 108.374,
       "volume": 132981600.0
      },
      {
       "date": "2007-10-31",
       "open": 109.0254,
       "high": 109.9388,
       "low": 108.2183,
       "close": 109.4998,
       "volume": 220954400.0
      },
      {
       "date": "2007-11-01",
       "open": 108.5369,
       "high": 108.6218,
       "low": 106.6251,
       "close": 106.9367,
       "volume": 333040800.0
      },
      {
       "date": "2007-11-02",
       "open": 107.2907,
       "high": 107.6235,
       "low": 105.648,
       "close": 107.0571,
       "volume": 331228200.0
      },
      {
       "date": "2007-11-05",
       "open": 105.9525,
       "high": 107.0287,
       "low": 105.4781,
       "close": 106.2428,
       "volume": 226841000.0
      },
      {
       "date": "2007-11-06",
       "open": 106.8163,
       "high": 107.7014,
       "low": 106.1366,
       "close": 107.6731,
       "volume": 177800500.0
      },
      {
       "date": "2007-11-07",
       "open": 106.5189,
       "high": 107.0075,
       "low": 104.4727,
       "close": 104.7276,
       "volume": 306639700.0
      },
      {
       "date": "2007-11-08",
       "open": 104.7842,
       "high": 105.0745,
       "low": 102.7167,
       "close": 104.1965,
       "volume": 374509900.0
      },
      {
       "date": "2007-11-09",
       "open": 103.1557,
       "high": 104.4656,
       "low": 102.5893,
       "close": 102.7663,
       "volume": 277745100.0
      },
      {
       "date": "2007-11-12",
       "open": 102.8158,
       "high": 103.8071,
       "low": 101.7467,
       "close": 101.7467,
       "volume": 243087800.0
      },
      {
       "date": "2007-11-13",
       "open": 102.9291,
       "high": 105.0108,
       "low": 102.8229,
       "close": 104.8479,
       "volume": 191117400.0
      },
      {
       "date": "2007-11-14",
       "open": 105.6551,
       "high": 105.7826,
       "low": 103.9275,
       "close": 104.5576,
       "volume": 230558800.0
      },
      {
       "date": "2007-11-15",
       "open": 103.7788,
       "high": 104.4302,
       "low": 102.3273,
       "close": 103.0495,
       "volume": 263111100.0
      },
      {
       "date": "2007-11-16",
       "open": 103.5947,
       "high": 103.708,
       "low": 102.3627,
       "close": 103.2265,
       "volume": 308770600.0
      },
      {
       "date": "2007-11-19",
       "open": 102.8654,
       "high": 102.922,
       "low": 101.3856,
       "close": 101.7892,
       "volume": 267746000.0
      },
      {
       "date": "2007-11-20",
       "open": 101.9733,
       "high": 103.0424,
       "low": 100.6209,
       "close": 102.4123,
       "volume": 414767500.0
      },
      {
       "date": "2007-11-21",
       "open": 101.3077,
       "high": 101.8954,
       "low": 100.3093,
       "close": 100.3164,
       "volume": 259012400.0
      },
      {
       "date": "2007-11-23",
       "open": 101.3006,
       "high": 102.1998,
       "low": 101.0386,
       "close": 102.0512,
       "volume": 77688400.0
      },
      {
       "date": "2007-11-26",
       "open": 102.2636,
       "high": 102.5822,
       "low": 99.5942,
       "close": 99.7995,
       "volume": 214232000.0
      },
      {
       "date": "2007-11-27",
       "open": 100.3589,
       "high": 101.4139,
       "low": 99.7995,
       "close": 100.9466,
       "volume": 293897900.0
      },
      {
       "date": "2007-11-28",
       "open": 102.0936,
       "high": 104.416,
       "low": 102.0582,
       "close": 104.1753,
       "volume": 258596900.0
      },
      {
       "date": "2007-11-29",
       "open": 103.8142,
       "high": 104.593,
       "low": 103.446,
       "close": 104.2107,
       "volume": 199409900.0
      },
      {
       "date": "2007-11-30",
       "open": 105.5277,
       "high": 106.1153,
       "low": 104.3169,
       "close": 105.2586,
       "volume": 222908000.0
      },
      {
       "date": "2007-12-03",
       "open": 104.9258,
       "high": 105.1099,
       "low": 104.2886,
       "close": 104.5647,
       "volume": 146430400.0
      },
      {
       "date": "2007-12-04",
       "open": 103.8425,
       "high": 104.4656,
       "low": 103.5947,
       "close": 103.6301,
       "volume": 136533900.0
      },
      {
       "date": "2007-12-05",
       "open": 104.7417,
       "high": 105.641,
       "low": 104.6709,
       "close": 105.3648,
       "volume": 171130000.0
      },
      {
       "date": "2007-12-06",
       "open": 105.2374,
       "high": 107.0641,
       "low": 105.1949,
       "close": 106.873,
       "volume": 154457400.0
      },
      {
       "date": "2007-12-07",
       "open": 107.2128,
       "high": 107.2695,
       "low": 106.5968,
       "close": 106.8517,
       "volume": 148980100.0
      },
      {
       "date": "2007-12-10",
       "open": 107.1137,
       "high": 107.8005,
       "low": 106.8163,
       "close": 107.6801,
       "volume": 123914300.0
      },
      {
       "date": "2007-12-11",
       "open": 107.7226,
       "high": 108.2537,
       "low": 104.6709,
       "close": 104.7276,
       "volume": 250346400.0
      },
      {
       "date": "2007-12-12",
       "open": 106.9579,
       "high": 107.4606,
       "low": 104.2249,
       "close": 105.7613,
       "volume": 322435600.0
      },
      {
       "date": "2007-12-13",
       "open": 105.0179,
       "high": 105.7755,
       "low": 104.2957,
       "close": 105.5418,
       "volume": 237551300.0
      },
      {
       "date": "2007-12-14",
       "open": 104.7417,
       "high": 105.5702,
       "low": 104.1541,
       "close": 104.2036,
       "volume": 159152900.0
      },
      {
       "date": "2007-12-17",
       "open": 103.8071,
       "high": 103.9912,
       "low": 102.568,
       "close": 102.7167,
       "volume": 177269400.0
      },
      {
       "date": "2007-12-18",
       "open": 103.446,
       "high": 103.7151,
       "low": 101.9308,
       "close": 103.2902,
       "volume": 245569300.0
      },
      {
       "date": "2007-12-19",
       "open": 103.3327,
       "high": 104.0054,
       "low": 102.6247,
       "close": 103.2902,
       "volume": 198917200.0
      },
      {
       "date": "2007-12-20",
       "open": 103.97,
       "high": 103.9841,
       "low": 102.7946,
       "close": 103.9416,
       "volume": 214813800.0
      },
      {
       "date": "2007-12-21",
       "open": 104.8914,
       "high": 105.6388,
       "low": 104.6921,
       "close": 105.4324,
       "volume": 146084400.0
      },
      {
       "date": "2007-12-24",
       "open": 105.9235,
       "high": 106.3932,
       "low": 105.6815,
       "close": 106.2153,
       "volume": 45601400.0
      },
      {
       "date": "2007-12-26",
       "open": 105.8025,
       "high": 106.5356,
       "low": 105.6957,
       "close": 106.4431,
       "volume": 67093100.0
      },
      {
       "date": "2007-12-27",
       "open": 106.0658,
       "high": 106.073,
       "low": 104.8559,
       "close": 105.105,
       "volume": 122981700.0
      },
      {
       "date": "2007-12-28",
       "open": 105.7242,
       "high": 105.774,
       "low": 104.5569,
       "close": 104.8416,
       "volume": 116398100.0
      },
      {
       "date": "2007-12-31",
       "open": 104.6993,
       "high": 105.0623,
       "low": 103.959,
       "close": 104.0658,
       "volume": 108126800.0
      },
      {
       "date": "2008-01-02",
       "open": 104.2936,
       "high": 104.621,
       "low": 102.4074,
       "close": 103.1548,
       "volume": 204935600.0
      },
      {
       "date": "2008-01-03",
       "open": 103.1405,
       "high": 103.5533,
       "low": 102.5427,
       "close": 103.1049,
       "volume": 125133300.0
      },
      {
       "date": "2008-01-04",
       "open": 102.0231,
       "high": 102.0942,
       "low": 100.2935,
       "close": 100.5782,
       "volume": 232330900.0
      },
      {
       "date": "2008-01-07",
       "open": 100.9341,
       "high": 101.233,
       "low": 99.717,
       "close": 100.4928,
       "volume": 234991000.0
      },
      {
       "date": "2008-01-08",
       "open": 101.1263,
       "high": 101.7099,
       "low": 98.5355,
       "close": 98.87,
       "volume": 326365700.0
      },
      {
       "date": "2008-01-09",
       "open": 98.9981,
       "high": 100.2081,
       "low": 98.0088,
       "close": 99.9091,
       "volume": 301824900.0
      },
      {
       "date": "2008-01-10",
       "open": 99.418,
       "high": 101.6387,
       "low": 99.1974,
       "close": 100.564,
       "volume": 335701200.0
      },
      {
       "date": "2008-01-11",
       "open": 100.201,
       "high": 100.9981,
       "low": 98.934,
       "close": 99.7526,
       "volume": 267076600.0
      },
      {
       "date": "2008-01-14",
       "open": 100.4714,
       "high": 100.9697,
       "low": 99.9305,
       "close": 100.5568,
       "volume": 170365500.0
      },
      {
       "date": "2008-01-15",
       "open": 99.4963,
       "high": 100.7063,
       "low": 98.1511,
       "close": 98.3433,
       "volume": 239940100.0
      },
      {
       "date": "2008-01-16",
       "open": 97.7668,
       "high": 99.0195,
       "low": 96.9981,
       "close": 97.4963,
       "volume": 378802600.0
      },
      {
       "date": "2008-01-17",
       "open": 98.0871,
       "high": 98.1369,
       "low": 94.6137,
       "close": 94.9696,
       "volume": 397892600.0
      },
      {
       "date": "2008-01-18",
       "open": 95.902,
       "high": 96.1013,
       "low": 93.3112,
       "close": 93.9945,
       "volume": 348561500.0
      },
      {
       "date": "2008-01-22",
       "open": 90.5424,
       "high": 94.2578,
       "low": 89.6812,
       "close": 93.0407,
       "volume": 435923700.0
      },
      {
       "date": "2008-01-23",
       "open": 90.457,
       "high": 95.5105,
       "low": 90.2791,
       "close": 95.2756,
       "volume": 511913000.0
      },
      {
       "date": "2008-01-24",
       "open": 95.7169,
       "high": 96.4144,
       "low": 94.8842,
       "close": 96.0799,
       "volume": 259949300.0
      },
      {
       "date": "2008-01-25",
       "open": 97.1618,
       "high": 97.3397,
       "low": 94.3788,
       "close": 94.692,
       "volume": 269603900.0
      },
      {
       "date": "2008-01-28",
       "open": 94.8486,
       "high": 96.4571,
       "low": 93.9945,
       "close": 96.2578,
       "volume": 217934600.0
      },
      {
       "date": "2008-01-29",
       "open": 96.87,
       "high": 97.1191,
       "low": 96.0016,
       "close": 96.7347,
       "volume": 168968300.0
      },
      {
       "date": "2008-01-30",
       "open": 96.4998,
       "high": 98.6066,
       "low": 95.8023,
       "close": 96.023,
       "volume": 334939200.0
      },
      {
       "date": "2008-01-31",
       "open": 94.9482,
       "high": 98.6066,
       "low": 94.8059,
       "close": 97.7739,
       "volume": 343680800.0
      },
      {
       "date": "2008-02-01",
       "open": 98.1796,
       "high": 99.3682,
       "low": 97.8806,
       "close": 99.3469,
       "volume": 206843600.0
      },
      {
       "date": "2008-02-04",
       "open": 99.0835,
       "high": 99.1476,
       "low": 97.9661,
       "close": 98.0942,
       "volume": 124694300.0
      },
      {
       "date": "2008-02-05",
       "open": 96.7561,
       "high": 96.9767,
       "low": 95.1404,
       "close": 95.4678,
       "volume": 286882500.0
      },
      {
       "date": "2008-02-06",
       "open": 95.7881,
       "high": 96.265,
       "low": 94.2436,
       "close": 94.6991,
       "volume": 250792900.0
      },
      {
       "date": "2008-02-07",
       "open": 93.8094,
       "high": 95.9375,
       "low": 93.7596,
       "close": 95.3254,
       "volume": 297368100.0
      },
      {
       "date": "2008-02-08",
       "open": 94.7276,
       "high": 95.5319,
       "low": 94.0229,
       "close": 94.7133,
       "volume": 221643500.0
      },
      {
       "date": "2008-02-11",
       "open": 94.7347,
       "high": 95.539,
       "low": 93.9802,
       "close": 95.1973,
       "volume": 188576300.0
      },
      {
       "date": "2008-02-12",
       "open": 96.023,
       "high": 97.0194,
       "low": 95.361,
       "close": 96.0799,
       "volume": 256654400.0
      },
      {
       "date": "2008-02-13",
       "open": 96.8059,
       "high": 97.5532,
       "low": 96.1867,
       "close": 97.0621,
       "volume": 181967800.0
      },
      {
       "date": "2008-02-14",
       "open": 97.4749,
       "high": 97.5105,
       "low": 95.9375,
       "close": 96.208,
       "volume": 215207200.0
      },
      {
       "date": "2008-02-15",
       "open": 95.7311,
       "high": 96.2436,
       "low": 95.3112,
       "close": 96.1867,
       "volume": 154110300.0
      },
      {
       "date": "2008-02-19",
       "open": 97.3112,
       "high": 97.4322,
       "low": 95.8094,
       "close": 96.4571,
       "volume": 145190000.0
      },
      {
       "date": "2008-02-20",
       "open": 95.3682,
       "high": 97.1902,
       "low": 95.2044,
       "close": 96.7418,
       "volume": 220085700.0
      },
      {
       "date": "2008-02-21",
       "open": 97.2685,
       "high": 97.5176,
       "low": 95.4251,
       "close": 95.9375,
       "volume": 201051200.0
      },
      {
       "date": "2008-02-22",
       "open": 96.0657,
       "high": 96.692,
       "low": 94.5639,
       "close": 96.5283,
       "volume": 205491000.0
      },
      {
       "date": "2008-02-25",
       "open": 96.4714,
       "high": 97.9732,
       "low": 95.9304,
       "close": 97.7454,
       "volume": 190107000.0
      },
      {
       "date": "2008-02-26",
       "open": 97.3326,
       "high": 98.8985,
       "low": 97.1547,
       "close": 98.4785,
       "volume": 212420700.0
      },
      {
       "date": "2008-02-27",
       "open": 97.9091,
       "high": 99.0337,
       "low": 97.8024,
       "close": 98.3789,
       "volume": 168395800.0
      },
      {
       "date": "2008-02-28",
       "open": 97.6814,
       "high": 98.1938,
       "low": 97.1902,
       "close": 97.418,
       "volume": 170831100.0
      },
      {
       "date": "2008-02-29",
       "open": 96.5141,
       "high": 96.571,
       "low": 94.5069,
       "close": 95.2472,
       "volume": 252715200.0
      },
      {
       "date": "2008-03-03",
       "open": 94.7632,
       "high": 95.24,
       "low": 94.1226,
       "close": 95.0194,
       "volume": 189483500.0
      },
      {
       "date": "2008-03-04",
       "open": 94.1155,
       "high": 94.9482,
       "low": 93.2329,
       "close": 94.6564,
       "volume": 282513100.0
      },
      {
       "date": "2008-03-05",
       "open": 94.9624,
       "high": 95.9233,
       "low": 94.1937,
       "close": 95.2543,
       "volume": 270681400.0
      },
      {
       "date": "2008-03-06",
       "open": 94.6493,
       "high": 94.8201,
       "low": 92.9197,
       "close": 93.2827,
       "volume": 247911700.0
      },
      {
       "date": "2008-03-07",
       "open": 92.3645,
       "high": 93.7667,
       "low": 91.5176,
       "close": 92.3218,
       "volume": 326434600.0
      },
      {
       "date": "2008-03-10",
       "open": 92.4144,
       "high": 92.4784,
       "low": 90.8129,
       "close": 91.1047,
       "volume": 235683600.0
      },
      {
       "date": "2008-03-11",
       "open": 93.0407,
       "high": 94.4642,
       "low": 91.7809,
       "close": 94.3788,
       "volume": 341440600.0
      },
      {
       "date": "2008-03-12",
       "open": 94.4785,
       "high": 95.2116,
       "low": 93.3539,
       "close": 93.4962,
       "volume": 229161100.0
      },
      {
       "date": "2008-03-13",
       "open": 92.2507,
       "high": 94.4073,
       "low": 91.5318,
       "close": 93.7026,
       "volume": 351504200.0
      },
      {
       "date": "2008-03-14",
       "open": 94.4998,
       "high": 94.5283,
       "low": 90.9481,
       "close": 92.2507,
       "volume": 484687800.0
      },
      {
       "date": "2008-03-17",
       "open": 90.0869,
       "high": 92.0015,
       "low": 89.731,
       "close": 91.3183,
       "volume": 405311100.0
      },
      {
       "date": "2008-03-18",
       "open": 92.9695,
       "high": 95.1546,
       "low": 92.514,
       "close": 95.1119,
       "volume": 334416600.0
      },
      {
       "date": "2008-03-19",
       "open": 95.4749,
       "high": 95.8379,
       "low": 92.5567,
       "close": 92.756,
       "volume": 345971600.0
      },
      {
       "date": "2008-03-20",
       "open": 93.0137,
       "high": 95.0592,
       "low": 92.4487,
       "close": 94.4656,
       "volume": 245320700.0
      },
      {
       "date": "2008-03-24",
       "open": 95.3453,
       "high": 97.1334,
       "low": 95.2953,
       "close": 96.3538,
       "volume": 208977300.0
      },
      {
       "date": "2008-03-25",
       "open": 96.4539,
       "high": 96.9474,
       "low": 95.6743,
       "close": 96.4468,
       "volume": 192947200.0
      },
      {
       "date": "2008-03-26",
       "open": 96.1678,
       "high": 96.6184,
       "low": 95.2023,
       "close": 95.2666,
       "volume": 196934300.0
      },
      {
       "date": "2008-03-27",
       "open": 95.9819,
       "high": 96.1535,
       "low": 94.6659,
       "close": 94.9663,
       "volume": 225153200.0
      },
      {
       "date": "2008-03-28",
       "open": 95.1165,
       "high": 95.3811,
       "low": 93.7361,
       "close": 94.0579,
       "volume": 180896100.0
      },
      {
       "date": "2008-03-31",
       "open": 93.9006,
       "high": 94.9305,
       "low": 93.7575,
       "close": 94.3869,
       "volume": 166692100.0
      },
      {
       "date": "2008-04-01",
       "open": 95.5599,
       "high": 97.87,
       "low": 95.4884,
       "close": 97.7055,
       "volume": 254547300.0
      },
      {
       "date": "2008-04-02",
       "open": 98.0202,
       "high": 98.4637,
       "low": 97.2549,
       "close": 97.7699,
       "volume": 210910800.0
      },
      {
       "date": "2008-04-03",
       "open": 97.2406,
       "high": 98.2992,
       "low": 97.0618,
       "close": 98.0131,
       "volume": 175884800.0
      },
      {
       "date": "2008-04-04",
       "open": 98.0703,
       "high": 98.6711,
       "low": 97.3551,
       "close": 97.9058,
       "volume": 204446800.0
      },
      {
       "date": "2008-04-07",
       "open": 98.6067,
       "high": 99.1074,
       "low": 97.7985,
       "close": 97.9559,
       "volume": 154245500.0
      },
      {
       "date": "2008-04-08",
       "open": 97.4051,
       "high": 97.9272,
       "low": 97.2335,
       "close": 97.8557,
       "volume": 148937300.0
      },
      {
       "date": "2008-04-09",
       "open": 97.7055,
       "high": 97.8414,
       "low": 96.4754,
       "close": 97.1477,
       "volume": 195610600.0
      },
      {
       "date": "2008-04-10",
       "open": 96.8544,
       "high": 97.7484,
       "low": 96.4825,
       "close": 97.2836,
       "volume": 192967800.0
      },
      {
       "date": "2008-04-11",
       "open": 96.1893,
       "high": 96.6399,
       "low": 95.1308,
       "close": 95.3954,
       "volume": 222973300.0
      },
      {
       "date": "2008-04-14",
       "open": 95.2595,
       "high": 95.5098,
       "low": 94.8018,
       "close": 95.0735,
       "volume": 160522000.0
      },
      {
       "date": "2008-04-15",
       "open": 95.5384,
       "high": 95.6171,
       "low": 94.6444,
       "close": 95.2953,
       "volume": 172389200.0
      },
      {
       "date": "2008-04-16",
       "open": 96.225,
       "high": 97.9201,
       "low": 96.2107,
       "close": 97.8772,
       "volume": 189268900.0
      },
      {
       "date": "2008-04-17",
       "open": 97.2836,
       "high": 98.1633,
       "low": 97.0261,
       "close": 98.0202,
       "volume": 179665700.0
      },
      {
       "date": "2008-04-18",
       "open": 99.372,
       "high": 99.8154,
       "low": 98.8856,
       "close": 99.043,
       "volume": 218530600.0
      },
      {
       "date": "2008-04-21",
       "open": 98.8642,
       "high": 99.4006,
       "low": 98.5924,
       "close": 99.093,
       "volume": 118587400.0
      },
      {
       "date": "2008-04-22",
       "open": 98.8356,
       "high": 98.9214,
       "low": 97.9129,
       "close": 98.6568,
       "volume": 162166000.0
      },
      {
       "date": "2008-04-23",
       "open": 98.764,
       "high": 99.2575,
       "low": 98.0703,
       "close": 98.4994,
       "volume": 193309000.0
      },
      {
       "date": "2008-04-24",
       "open": 98.7569,
       "high": 99.9442,
       "low": 98.0131,
       "close": 98.9286,
       "volume": 229381300.0
      },
      {
       "date": "2008-04-25",
       "open": 99.701,
       "high": 100.0514,
       "low": 98.6353,
       "close": 99.844,
       "volume": 190788100.0
      },
      {
       "date": "2008-04-28",
       "open": 100.0443,
       "high": 100.3089,
       "low": 99.6867,
       "close": 99.8655,
       "volume": 105610200.0
      },
      {
       "date": "2008-04-29",
       "open": 99.6938,
       "high": 99.937,
       "low": 99.136,
       "close": 99.4721,
       "volume": 125514100.0
      },
      {
       "date": "2008-04-30",
       "open": 99.6223,
       "high": 100.5521,
       "low": 98.8856,
       "close": 98.8856,
       "volume": 208395900.0
      },
      {
       "date": "2008-05-01",
       "open": 98.9715,
       "high": 100.9311,
       "low": 98.8928,
       "close": 100.9311,
       "volume": 187279500.0
      },
      {
       "date": "2008-05-02",
       "open": 101.8037,
       "high": 101.8252,
       "low": 100.5306,
       "close": 101.2101,
       "volume": 181585500.0
      },
      {
       "date": "2008-05-05",
       "open": 100.8811,
       "high": 101.2816,
       "low": 100.4234,
       "close": 100.7237,
       "volume": 118504500.0
      },
      {
       "date": "2008-05-06",
       "open": 100.1444,
       "high": 101.7036,
       "low": 99.9084,
       "close": 101.5963,
       "volume": 179339800.0
      },
      {
       "date": "2008-05-07",
       "open": 101.4819,
       "high": 101.5891,
       "low": 99.5079,
       "close": 99.7868,
       "volume": 199267300.0
      },
      {
       "date": "2008-05-08",
       "open": 99.9442,
       "high": 100.359,
       "low": 99.4006,
       "close": 99.5293,
       "volume": 178321200.0
      },
      {
       "date": "2008-05-09",
       "open": 99.1288,
       "high": 99.6938,
       "low": 99.0215,
       "close": 99.3434,
       "volume": 152588200.0
      },
      {
       "date": "2008-05-12",
       "open": 99.5937,
       "high": 100.5306,
       "low": 99.2218,
       "close": 100.4591,
       "volume": 147865900.0
      },
      {
       "date": "2008-05-13",
       "open": 100.7023,
       "high": 100.7667,
       "low": 99.937,
       "close": 100.4734,
       "volume": 159132200.0
      },
      {
       "date": "2008-05-14",
       "open": 100.8954,
       "high": 101.7036,
       "low": 100.4591,
       "close": 100.6808,
       "volume": 181910800.0
      },
      {
       "date": "2008-05-15",
       "open": 100.8739,
       "high": 102.0111,
       "low": 100.7237,
       "close": 101.9396,
       "volume": 166927000.0
      },
      {
       "date": "2008-05-16",
       "open": 102.1756,
       "high": 102.1828,
       "low": 101.2816,
       "close": 102.0326,
       "volume": 204236800.0
      },
      {
       "date": "2008-05-19",
       "open": 102.1399,
       "high": 103.2055,
       "low": 101.7751,
       "close": 102.3115,
       "volume": 165664400.0
      },
      {
       "date": "2008-05-20",
       "open": 101.7537,
       "high": 101.8037,
       "low": 100.8453,
       "close": 101.4819,
       "volume": 178552100.0
      },
      {
       "date": "2008-05-21",
       "open": 101.4246,
       "high": 101.6464,
       "low": 99.4149,
       "close": 99.7654,
       "volume": 252724800.0
      },
      {
       "date": "2008-05-22",
       "open": 99.7224,
       "high": 100.2517,
       "low": 99.4149,
       "close": 99.7797,
       "volume": 170820400.0
      },
      {
       "date": "2008-05-23",
       "open": 99.4507,
       "high": 99.8869,
       "low": 98.3564,
       "close": 98.4422,
       "volume": 181376400.0
      },
      {
       "date": "2008-05-27",
       "open": 98.5566,
       "high": 99.4149,
       "low": 98.3635,
       "close": 99.1717,
       "volume": 168322900.0
      },
      {
       "date": "2008-05-28",
       "open": 99.5365,
       "high": 100.1301,
       "low": 98.6997,
       "close": 99.6295,
       "volume": 181288100.0
      },
      {
       "date": "2008-05-29",
       "open": 99.5079,
       "high": 100.7953,
       "low": 99.4721,
       "close": 100.1301,
       "volume": 173927200.0
      },
      {
       "date": "2008-05-30",
       "open": 100.4663,
       "high": 100.6594,
       "low": 100.0872,
       "close": 100.3804,
       "volume": 117362000.0
      },
      {
       "date": "2008-06-02",
       "open": 100.0085,
       "high": 100.03,
       "low": 98.6997,
       "close": 99.3434,
       "volume": 181069900.0
      },
      {
       "date": "2008-06-03",
       "open": 99.6295,
       "high": 99.8583,
       "low": 98.149,
       "close": 98.764,
       "volume": 271965700.0
      },
      {
       "date": "2008-06-04",
       "open": 98.4851,
       "high": 99.5293,
       "low": 98.3135,
       "close": 98.714,
       "volume": 246637700.0
      },
      {
       "date": "2008-06-05",
       "open": 99.1145,
       "high": 100.7667,
       "low": 98.9286,
       "close": 100.688,
       "volume": 237867100.0
      },
      {
       "date": "2008-06-06",
       "open": 99.8083,
       "high": 99.9871,
       "low": 97.4266,
       "close": 97.4767,
       "volume": 384276300.0
      },
      {
       "date": "2008-06-09",
       "open": 97.8843,
       "high": 98.3421,
       "low": 96.8473,
       "close": 97.7127,
       "volume": 228263900.0
      },
      {
       "date": "2008-06-10",
       "open": 97.0332,
       "high": 98.056,
       "low": 96.8044,
       "close": 97.2263,
       "volume": 260234900.0
      },
      {
       "date": "2008-06-11",
       "open": 97.2478,
       "high": 97.4552,
       "low": 95.7887,
       "close": 95.7959,
       "volume": 283890100.0
      },
      {
       "date": "2008-06-12",
       "open": 96.268,
       "high": 97.1763,
       "low": 95.4955,
       "close": 96.1607,
       "volume": 252791800.0
      },
      {
       "date": "2008-06-13",
       "open": 96.6756,
       "high": 97.6412,
       "low": 96.1392,
       "close": 97.3765,
       "volume": 244726900.0
      },
      {
       "date": "2008-06-16",
       "open": 96.9474,
       "high": 97.9344,
       "low": 96.883,
       "close": 97.4337,
       "volume": 185832500.0
      },
      {
       "date": "2008-06-17",
       "open": 98.0345,
       "high": 98.0703,
       "low": 96.8187,
       "close": 96.9617,
       "volume": 191707700.0
      },
      {
       "date": "2008-06-18",
       "open": 96.3323,
       "high": 96.9259,
       "low": 95.6314,
       "close": 96.0176,
       "volume": 265893000.0
      },
      {
       "date": "2008-06-19",
       "open": 95.9461,
       "high": 96.7257,
       "low": 95.4812,
       "close": 96.1392,
       "volume": 304204900.0
      },
      {
       "date": "2008-06-20",
       "open": 95.4924,
       "high": 95.6721,
       "low": 94.3278,
       "close": 94.5866,
       "volume": 289275700.0
      },
      {
       "date": "2008-06-23",
       "open": 94.9532,
       "high": 95.0539,
       "low": 94.3997,
       "close": 94.4932,
       "volume": 165096400.0
      },
      {
       "date": "2008-06-24",
       "open": 94.2056,
       "high": 95.2048,
       "low": 93.5874,
       "close": 94.3063,
       "volume": 267300600.0
      },
      {
       "date": "2008-06-25",
       "open": 94.6873,
       "high": 95.8949,
       "low": 94.3422,
       "close": 94.752,
       "volume": 287853900.0
      },
      {
       "date": "2008-06-26",
       "open": 93.8606,
       "high": 94.4716,
       "low": 92.0707,
       "close": 92.1785,
       "volume": 297775000.0
      },
      {
       "date": "2008-06-27",
       "open": 92.2144,
       "high": 92.6314,
       "low": 91.323,
       "close": 91.6753,
       "volume": 303423400.0
      },
      {
       "date": "2008-06-30",
       "open": 91.9341,
       "high": 92.6673,
       "low": 91.5099,
       "close": 91.9988,
       "volume": 258842600.0
      },
      {
       "date": "2008-07-01",
       "open": 90.9492,
       "high": 92.351,
       "low": 90.5251,
       "close": 92.2863,
       "volume": 388622000.0
      },
      {
       "date": "2008-07-02",
       "open": 92.581,
       "high": 92.847,
       "low": 90.5395,
       "close": 90.7048,
       "volume": 288064600.0
      },
      {
       "date": "2008-07-03",
       "open": 91.3734,
       "high": 91.3734,
       "low": 89.8494,
       "close": 90.7983,
       "volume": 239352500.0
      },
      {
       "date": "2008-07-07",
       "open": 91.1433,
       "high": 91.5387,
       "low": 89.0802,
       "close": 89.871,
       "volume": 372427300.0
      },
      {
       "date": "2008-07-08",
       "open": 89.8494,
       "high": 91.5746,
       "low": 89.2815,
       "close": 91.4668,
       "volume": 375973700.0
      },
      {
       "date": "2008-07-09",
       "open": 91.6537,
       "high": 91.8262,
       "low": 89.4181,
       "close": 89.7056,
       "volume": 336729400.0
      },
      {
       "date": "2008-07-10",
       "open": 89.4468,
       "high": 90.4245,
       "low": 88.8358,
       "close": 90.0722,
       "volume": 436475700.0
      },
      {
       "date": "2008-07-11",
       "open": 89.1162,
       "high": 90.5036,
       "low": 88.0523,
       "close": 89.0227,
       "volume": 481124600.0
      },
      {
       "date": "2008-07-14",
       "open": 90.0435,
       "high": 90.216,
       "low": 87.9876,
       "close": 88.2176,
       "volume": 322720800.0
      },
      {
       "date": "2008-07-15",
       "open": 87.5563,
       "high": 88.7711,
       "low": 86.2767,
       "close": 86.974,
       "volume": 502502500.0
      },
      {
       "date": "2008-07-16",
       "open": 87.3047,
       "high": 89.5475,
       "low": 87.0531,
       "close": 89.109,
       "volume": 371642900.0
      },
      {
       "date": "2008-07-17",
       "open": 89.9572,
       "high": 90.7623,
       "low": 89.2024,
       "close": 90.0004,
       "volume": 375490600.0
      },
      {
       "date": "2008-07-18",
       "open": 90.6976,
       "high": 90.8774,
       "low": 89.9644,
       "close": 90.5611,
       "volume": 267030100.0
      },
      {
       "date": "2008-07-21",
       "open": 90.9421,
       "high": 91.1505,
       "low": 89.9932,
       "close": 90.6114,
       "volume": 222863000.0
      },
      {
       "date": "2008-07-22",
       "open": 89.9644,
       "high": 91.8694,
       "low": 89.7488,
       "close": 91.6393,
       "volume": 296904200.0
      },
      {
       "date": "2008-07-23",
       "open": 91.9341,
       "high": 92.8398,
       "low": 91.6897,
       "close": 92.1353,
       "volume": 311698400.0
      },
      {
       "date": "2008-07-24",
       "open": 92.2575,
       "high": 92.3079,
       "low": 89.9716,
       "close": 90.2232,
       "volume": 248634500.0
      },
      {
       "date": "2008-07-25",
       "open": 90.4964,
       "high": 90.9277,
       "low": 89.9788,
       "close": 90.2016,
       "volume": 219131000.0
      },
      {
       "date": "2008-07-28",
       "open": 90.2232,
       "high": 90.6186,
       "low": 88.7208,
       "close": 88.8789,
       "volume": 205201300.0
      },
      {
       "date": "2008-07-29",
       "open": 89.1234,
       "high": 90.8486,
       "low": 88.8789,
       "close": 90.7767,
       "volume": 261505600.0
      },
      {
       "date": "2008-07-30",
       "open": 91.3734,
       "high": 92.4445,
       "low": 90.7767,
       "close": 92.3941,
       "volume": 354710000.0
      },
      {
       "date": "2008-07-31",
       "open": 91.5818,
       "high": 92.4229,
       "low": 91.0283,
       "close": 91.1721,
       "volume": 277402100.0
      },
      {
       "date": "2008-08-01",
       "open": 91.3806,
       "high": 91.4956,
       "low": 90.1873,
       "close": 90.6905,
       "volume": 248690900.0
      },
      {
       "date": "2008-08-04",
       "open": 90.6042,
       "high": 90.6761,
       "low": 89.6841,
       "close": 89.8494,
       "volume": 188239600.0
      },
      {
       "date": "2008-08-05",
       "open": 90.5898,
       "high": 92.4157,
       "low": 89.835,
       "close": 92.2719,
       "volume": 251577600.0
      },
      {
       "date": "2008-08-06",
       "open": 92.0275,
       "high": 92.9477,
       "low": 91.6393,
       "close": 92.6817,
       "volume": 209555400.0
      },
      {
       "date": "2008-08-07",
       "open": 91.9844,
       "high": 92.3294,
       "low": 90.9636,
       "close": 91.3015,
       "volume": 246312500.0
      },
      {
       "date": "2008-08-08",
       "open": 90.9924,
       "high": 93.4005,
       "low": 90.8486,
       "close": 92.998,
       "volume": 260811700.0
      },
      {
       "date": "2008-08-11",
       "open": 93.0699,
       "high": 94.5363,
       "low": 92.8973,
       "close": 93.9612,
       "volume": 249425800.0
      },
      {
       "date": "2008-08-12",
       "open": 93.6521,
       "high": 93.954,
       "low": 92.5379,
       "close": 92.9836,
       "volume": 213200800.0
      },
      {
       "date": "2008-08-13",
       "open": 92.581,
       "high": 93.1992,
       "low": 91.7759,
       "close": 92.4229,
       "volume": 256393200.0
      },
      {
       "date": "2008-08-14",
       "open": 91.8981,
       "high": 93.6521,
       "low": 91.8334,
       "close": 93.1202,
       "volume": 239555300.0
      },
      {
       "date": "2008-08-15",
       "open": 93.4005,
       "high": 93.8103,
       "low": 92.9477,
       "close": 93.5731,
       "volume": 181000800.0
      },
      {
       "date": "2008-08-18",
       "open": 93.7599,
       "high": 93.7959,
       "low": 91.7687,
       "close": 92.2935,
       "volume": 172275100.0
      },
      {
       "date": "2008-08-19",
       "open": 91.5962,
       "high": 91.7903,
       "low": 90.9564,
       "close": 91.2871,
       "volume": 194673700.0
      },
      {
       "date": "2008-08-20",
       "open": 91.5746,
       "high": 91.9772,
       "low": 90.8198,
       "close": 91.7112,
       "volume": 225498200.0
      },
      {
       "date": "2008-08-21",
       "open": 91.1146,
       "high": 92.3294,
       "low": 91.0067,
       "close": 91.8694,
       "volume": 180609800.0
      },
      {
       "date": "2008-08-22",
       "open": 92.4948,
       "high": 93.1992,
       "low": 91.8694,
       "close": 93.1992,
       "volume": 167715300.0
      },
      {
       "date": "2008-08-25",
       "open": 92.5882,
       "high": 93.1992,
       "low": 91.1146,
       "close": 91.3087,
       "volume": 171936900.0
      },
      {
       "date": "2008-08-26",
       "open": 91.3087,
       "high": 91.9197,
       "low": 90.9924,
       "close": 91.5746,
       "volume": 159117200.0
      },
      {
       "date": "2008-08-27",
       "open": 91.6897,
       "high": 92.6098,
       "low": 91.5099,
       "close": 92.466,
       "volume": 171032800.0
      },
      {
       "date": "2008-08-28",
       "open": 92.9333,
       "high": 93.6953,
       "low": 92.8111,
       "close": 93.5874,
       "volume": 167537100.0
      },
      {
       "date": "2008-08-29",
       "open": 93.2568,
       "high": 93.5515,
       "low": 92.3798,
       "close": 92.581,
       "volume": 189195800.0
      },
      {
       "date": "2008-09-02",
       "open": 93.4724,
       "high": 93.9612,
       "low": 91.6681,
       "close": 92.006,
       "volume": 252364900.0
      },
      {
       "date": "2008-09-03",
       "open": 91.9269,
       "high": 92.3726,
       "low": 91.244,
       "close": 91.9269,
       "volume": 251947000.0
      },
      {
       "date": "2008-09-04",
       "open": 91.2727,
       "high": 91.4596,
       "low": 89.109,
       "close": 89.1593,
       "volume": 340042500.0
      },
      {
       "date": "2008-09-05",
       "open": 88.6273,
       "high": 89.8206,
       "low": 87.7,
       "close": 89.4396,
       "volume": 289503400.0
      },
      {
       "date": "2008-09-08",
       "open": 92.0419,
       "high": 92.1857,
       "low": 89.4396,
       "close": 91.2871,
       "volume": 364075300.0
      },
      {
       "date": "2008-09-09",
       "open": 91.3662,
       "high": 91.5531,
       "low": 88.2751,
       "close": 88.577,
       "volume": 377326800.0
      },
      {
       "date": "2008-09-10",
       "open": 89.0587,
       "high": 89.7847,
       "low": 88.0954,
       "close": 88.9365,
       "volume": 298916600.0
      },
      {
       "date": "2008-09-11",
       "open": 87.7863,
       "high": 90.3885,
       "low": 87.4125,
       "close": 90.2232,
       "volume": 375369400.0
      },
      {
       "date": "2008-09-12",
       "open": 89.3462,
       "high": 90.7264,
       "low": 89.0155,
       "close": 90.6401,
       "volume": 297851200.0
      },
      {
       "date": "2008-09-15",
       "open": 87.434,
       "high": 90.3238,
       "low": 86.1832,
       "close": 86.327,
       "volume": 483607000.0
      },
      {
       "date": "2008-09-16",
       "open": 84.2495,
       "high": 87.9301,
       "low": 84.1058,
       "close": 87.7719,
       "volume": 581744300.0
      },
      {
       "date": "2008-09-17",
       "open": 86.0035,
       "high": 87.5922,
       "low": 83.3869,
       "close": 83.8254,
       "volume": 624095600.0
      },
      {
       "date": "2008-09-18",
       "open": 84.8606,
       "high": 87.5491,
       "low": 81.8054,
       "close": 86.3126,
       "volume": 776114700.0
      },
      {
       "date": "2008-09-19",
       "open": 91.5856,
       "high": 92.5253,
       "low": 89.1496,
       "close": 89.7207,
       "volume": 501087800.0
      },
      {
       "date": "2008-09-22",
       "open": 89.9592,
       "high": 90.1761,
       "low": 87.0027,
       "close": 87.6894,
       "volume": 249966500.0
      },
      {
       "date": "2008-09-23",
       "open": 87.3569,
       "high": 88.2027,
       "low": 85.4992,
       "close": 85.6944,
       "volume": 327470400.0
      },
      {
       "date": "2008-09-24",
       "open": 86.2726,
       "high": 86.7425,
       "low": 85.145,
       "close": 85.9691,
       "volume": 311818400.0
      },
      {
       "date": "2008-09-25",
       "open": 86.3088,
       "high": 88.1232,
       "low": 85.6149,
       "close": 87.3136,
       "volume": 328253000.0
      },
      {
       "date": "2008-09-26",
       "open": 85.8968,
       "high": 87.8268,
       "low": 85.6655,
       "close": 87.3569,
       "volume": 285917400.0
      },
      {
       "date": "2008-09-29",
       "open": 86.1208,
       "high": 86.2654,
       "low": 80.2151,
       "close": 80.5115,
       "volume": 459562300.0
      },
      {
       "date": "2008-09-30",
       "open": 82.0512,
       "high": 84.4294,
       "low": 79.8971,
       "close": 83.8439,
       "volume": 328154400.0
      },
      {
       "date": "2008-10-01",
       "open": 83.3234,
       "high": 84.3499,
       "low": 82.3692,
       "close": 83.8945,
       "volume": 332783000.0
      },
      {
       "date": "2008-10-02",
       "open": 83.0921,
       "high": 83.2077,
       "low": 80.2802,
       "close": 80.8512,
       "volume": 365337800.0
      },
      {
       "date": "2008-10-03",
       "open": 81.5813,
       "high": 83.4535,
       "low": 79.2826,
       "close": 79.7597,
       "volume": 461798000.0
      },
      {
       "date": "2008-10-06",
       "open": 77.4538,
       "high": 77.7936,
       "low": 72.748,
       "close": 75.6973,
       "volume": 610637500.0
      },
      {
       "date": "2008-10-07",
       "open": 77.2297,
       "high": 77.5839,
       "low": 72.0324,
       "close": 72.3071,
       "volume": 540012100.0
      },
      {
       "date": "2008-10-08",
       "open": 70.4927,
       "high": 73.8612,
       "low": 69.9795,
       "close": 70.4855,
       "volume": 725414800.0
      },
      {
       "date": "2008-10-09",
       "open": 72.0397,
       "high": 72.7336,
       "low": 65.2376,
       "close": 65.5629,
       "volume": 534485200.0
      },
      {
       "date": "2008-10-10",
       "open": 62.7148,
       "high": 67.9049,
       "low": 60.4162,
       "close": 63.9726,
       "volume": 871026300.0
      },
      {
       "date": "2008-10-13",
       "open": 67.8543,
       "high": 73.2613,
       "low": 65.0207,
       "close": 73.2613,
       "volume": 455584000.0
      },
      {
       "date": "2008-10-14",
       "open": 75.6828,
       "high": 76.2828,
       "low": 70.1964,
       "close": 72.177,
       "volume": 546268300.0
      },
      {
       "date": "2008-10-15",
       "open": 70.4494,
       "high": 70.6951,
       "low": 64.8472,
       "close": 65.0713,
       "volume": 484627500.0
      },
      {
       "date": "2008-10-16",
       "open": 65.9894,
       "high": 68.5049,
       "low": 62.5558,
       "close": 67.782,
       "volume": 708811200.0
      },
      {
       "date": "2008-10-17",
       "open": 66.4954,
       "high": 71.2662,
       "low": 66.2496,
       "close": 67.3772,
       "volume": 476649000.0
      },
      {
       "date": "2008-10-20",
       "open": 68.9241,
       "high": 71.6348,
       "low": 68.0133,
       "close": 71.4252,
       "volume": 321294200.0
      },
      {
       "date": "2008-10-21",
       "open": 70.0952,
       "high": 71.3023,
       "low": 68.8302,
       "close": 69.2928,
       "volume": 356502000.0
      },
      {
       "date": "2008-10-22",
       "open": 67.37,
       "high": 69.2928,
       "low": 63.2714,
       "close": 65.5195,
       "volume": 516168000.0
      },
      {
       "date": "2008-10-23",
       "open": 65.2665,
       "high": 66.8279,
       "low": 62.0281,
       "close": 66.2785,
       "volume": 634666400.0
      },
      {
       "date": "2008-10-24",
       "open": 60.7631,
       "high": 64.999,
       "low": 60.7198,
       "close": 62.9172,
       "volume": 545812600.0
      },
      {
       "date": "2008-10-27",
       "open": 62.1438,
       "high": 64.7027,
       "low": 60.5029,
       "close": 60.6836,
       "volume": 397288600.0
      },
      {
       "date": "2008-10-28",
       "open": 63.1341,
       "high": 68.1218,
       "low": 61.1029,
       "close": 67.7748,
       "volume": 639939500.0
      },
      {
       "date": "2008-10-29",
       "open": 67.782,
       "high": 70.2397,
       "low": 66.5749,
       "close": 67.2833,
       "volume": 531270100.0
      },
      {
       "date": "2008-10-30",
       "open": 69.235,
       "high": 69.7843,
       "low": 67.1532,
       "close": 69.6109,
       "volume": 414582100.0
      },
      {
       "date": "2008-10-31",
       "open": 68.729,
       "high": 71.2517,
       "low": 68.2953,
       "close": 69.994,
       "volume": 411394000.0
      },
      {
       "date": "2008-11-03",
       "open": 69.9578,
       "high": 70.6156,
       "low": 69.3579,
       "close": 70.1964,
       "volume": 205419400.0
      },
      {
       "date": "2008-11-04",
       "open": 71.6059,
       "high": 72.9071,
       "low": 69.9072,
       "close": 72.5818,
       "volume": 346793400.0
      },
      {
       "date": "2008-11-05",
       "open": 71.7071,
       "high": 72.7986,
       "low": 68.6711,
       "close": 69.5313,
       "volume": 387844100.0
      },
      {
       "date": "2008-11-06",
       "open": 68.2808,
       "high": 68.9892,
       "low": 65.1002,
       "close": 65.6785,
       "volume": 477721900.0
      },
      {
       "date": "2008-11-07",
       "open": 66.2496,
       "high": 67.9483,
       "low": 65.4183,
       "close": 67.8471,
       "volume": 380391000.0
      },
      {
       "date": "2008-11-10",
       "open": 68.8229,
       "high": 69.0543,
       "low": 65.7219,
       "close": 66.958,
       "volume": 301773000.0
      },
      {
       "date": "2008-11-11",
       "open": 65.6062,
       "high": 66.6038,
       "low": 64.081,
       "close": 64.8906,
       "volume": 418498200.0
      },
      {
       "date": "2008-11-12",
       "open": 63.7774,
       "high": 64.2979,
       "low": 61.5294,
       "close": 62.0353,
       "volume": 454330600.0
      },
      {
       "date": "2008-11-13",
       "open": 62.2594,
       "high": 66.3074,
       "low": 59.3391,
       "close": 65.9026,
       "volume": 753141900.0
      },
      {
       "date": "2008-11-14",
       "open": 64.6304,
       "high": 66.546,
       "low": 62.5413,
       "close": 62.6136,
       "volume": 540352300.0
      },
      {
       "date": "2008-11-17",
       "open": 62.4401,
       "high": 64.016,
       "low": 61.5583,
       "close": 61.7823,
       "volume": 415254900.0
      },
      {
       "date": "2008-11-18",
       "open": 61.551,
       "high": 63.0473,
       "low": 59.9318,
       "close": 62.9461,
       "volume": 523811800.0
      },
      {
       "date": "2008-11-19",
       "open": 62.1004,
       "high": 62.7943,
       "low": 58.4934,
       "close": 58.9126,
       "volume": 558327600.0
      },
      {
       "date": "2008-11-20",
       "open": 57.9223,
       "high": 59.6427,
       "low": 54.2502,
       "close": 54.5393,
       "volume": 814180400.0
      },
      {
       "date": "2008-11-21",
       "open": 55.9923,
       "high": 58.4789,
       "low": 53.737,
       "close": 57.4814,
       "volume": 718536500.0
      },
      {
       "date": "2008-11-24",
       "open": 59.2162,
       "high": 62.8811,
       "low": 58.0886,
       "close": 61.4643,
       "volume": 523305300.0
      },
      {
       "date": "2008-11-25",
       "open": 63.1052,
       "high": 63.257,
       "low": 60.5896,
       "close": 61.9197,
       "volume": 454112400.0
      },
      {
       "date": "2008-11-26",
       "open": 60.9366,
       "high": 64.4714,
       "low": 60.8932,
       "close": 64.3123,
       "volume": 370134200.0
      },
      {
       "date": "2008-11-28",
       "open": 64.0666,
       "high": 65.1508,
       "low": 63.9581,
       "close": 65.1219,
       "volume": 118308100.0
      },
      {
       "date": "2008-12-01",
       "open": 63.257,
       "high": 63.2859,
       "low": 59.1728,
       "close": 59.3536,
       "volume": 369927100.0
      },
      {
       "date": "2008-12-02",
       "open": 60.3366,
       "high": 61.7968,
       "low": 59.303,
       "close": 61.6378,
       "volume": 469508400.0
      },
      {
       "date": "2008-12-03",
       "open": 60.286,
       "high": 63.4883,
       "low": 60.0981,
       "close": 63.1196,
       "volume": 519863500.0
      },
      {
       "date": "2008-12-04",
       "open": 62.2088,
       "high": 63.6473,
       "low": 60.5318,
       "close": 61.6595,
       "volume": 444173800.0
      },
      {
       "date": "2008-12-05",
       "open": 60.4668,
       "high": 63.9148,
       "low": 59.4475,
       "close": 63.5606,
       "volume": 471905300.0
      },
      {
       "date": "2008-12-08",
       "open": 65.3026,
       "high": 66.7773,
       "low": 63.669,
       "close": 65.7797,
       "volume": 412859300.0
      },
      {
       "date": "2008-12-09",
       "open": 65.3243,
       "high": 66.5966,
       "low": 64.3196,
       "close": 64.6955,
       "volume": 370790000.0
      },
      {
       "date": "2008-12-10",
       "open": 65.2882,
       "high": 66.04,
       "low": 64.334,
       "close": 65.1364,
       "volume": 396187400.0
      },
      {
       "date": "2008-12-11",
       "open": 64.7244,
       "high": 65.7797,
       "low": 63.1558,
       "close": 63.5678,
       "volume": 365061000.0
      },
      {
       "date": "2008-12-12",
       "open": 61.8402,
       "high": 64.3846,
       "low": 61.5872,
       "close": 64.3268,
       "volume": 415060400.0
      },
      {
       "date": "2008-12-15",
       "open": 64.3485,
       "high": 64.4425,
       "low": 62.3751,
       "close": 63.4305,
       "volume": 256694200.0
      },
      {
       "date": "2008-12-16",
       "open": 66.4158,
       "high": 66.517,
       "low": 63.7413,
       "close": 66.4158,
       "volume": 377699500.0
      },
      {
       "date": "2008-12-17",
       "open": 65.6641,
       "high": 66.8134,
       "low": 65.1002,
       "close": 65.7725,
       "volume": 281819800.0
      },
      {
       "date": "2008-12-18",
       "open": 66.0689,
       "high": 66.264,
       "low": 63.763,
       "close": 64.5437,
       "volume": 374673300.0
      },
      {
       "date": "2008-12-19",
       "open": 64.9317,
       "high": 66.0394,
       "low": 64.1956,
       "close": 64.2685,
       "volume": 301451300.0
      },
      {
       "date": "2008-12-22",
       "open": 64.5527,
       "high": 64.6183,
       "low": 62.3009,
       "close": 63.445,
       "volume": 243759500.0
      },
      {
       "date": "2008-12-23",
       "open": 63.7875,
       "high": 64.079,
       "low": 62.5268,
       "close": 62.7891,
       "volume": 221625200.0
      },
      {
       "date": "2008-12-24",
       "open": 63.0005,
       "high": 63.3065,
       "low": 62.6725,
       "close": 63.1535,
       "volume": 62061600.0
      },
      {
       "date": "2008-12-26",
       "open": 63.5762,
       "high": 63.6199,
       "low": 63.0369,
       "close": 63.5179,
       "volume": 74767700.0
      },
      {
       "date": "2008-12-29",
       "open": 63.5762,
       "high": 63.6418,
       "low": 62.381,
       "close": 63.3357,
       "volume": 127795900.0
      },
      {
       "date": "2008-12-30",
       "open": 63.7729,
       "high": 64.8952,
       "low": 63.3138,
       "close": 64.8369,
       "volume": 168256300.0
      },
      {
       "date": "2008-12-31",
       "open": 64.9171,
       "high": 66.2944,
       "low": 64.764,
       "close": 65.7624,
       "volume": 193987200.0
      },
      {
       "date": "2009-01-02",
       "open": 65.9082,
       "high": 68.0944,
       "low": 65.4782,
       "close": 67.7446,
       "volume": 227566300.0
      },
      {
       "date": "2009-01-05",
       "open": 67.5041,
       "high": 68.2548,
       "low": 66.9649,
       "close": 67.6645,
       "volume": 240349700.0
      },
      {
       "date": "2009-01-06",
       "open": 68.2402,
       "high": 68.8305,
       "low": 67.5406,
       "close": 68.1163,
       "volume": 328260900.0
      },
      {
       "date": "2009-01-07",
       "open": 67.045,
       "high": 67.2345,
       "low": 65.7333,
       "close": 66.0758,
       "volume": 280899200.0
      },
      {
       "date": "2009-01-08",
       "open": 65.7041,
       "high": 66.3819,
       "low": 65.347,
       "close": 66.3454,
       "volume": 263834400.0
      },
      {
       "date": "2009-01-09",
       "open": 66.4329,
       "high": 66.5495,
       "low": 62.2061,
       "close": 64.9244,
       "volume": 330953600.0
      },
      {
       "date": "2009-01-12",
       "open": 64.7422,
       "high": 64.7932,
       "low": 62.9713,
       "close": 63.3648,
       "volume": 277858500.0
      },
      {
       "date": "2009-01-13",
       "open": 63.2045,
       "high": 64.0426,
       "low": 62.8183,
       "close": 63.4814,
       "volume": 356432300.0
      },
      {
       "date": "2009-01-14",
       "open": 62.3373,
       "high": 62.4903,
       "low": 60.6029,
       "close": 61.4847,
       "volume": 435491600.0
      },
      {
       "date": "2009-01-15",
       "open": 61.3025,
       "high": 62.126,
       "low": 59.5535,
       "close": 61.5065,
       "volume": 532647300.0
      },
      {
       "date": "2009-01-16",
       "open": 62.5705,
       "high": 62.6652,
       "low": 60.5227,
       "close": 61.9875,
       "volume": 399237200.0
      },
      {
       "date": "2009-01-20",
       "open": 61.3826,
       "high": 61.9875,
       "low": 58.3365,
       "close": 58.7154,
       "volume": 419855200.0
      },
      {
       "date": "2009-01-21",
       "open": 59.7138,
       "high": 61.3899,
       "low": 58.6425,
       "close": 61.2515,
       "volume": 364360700.0
      },
      {
       "date": "2009-01-22",
       "open": 60.0636,
       "high": 61.2442,
       "low": 59.1527,
       "close": 60.3041,
       "volume": 427940300.0
      },
      {
       "date": "2009-01-23",
       "open": 58.9559,
       "high": 61.2077,
       "low": 58.7154,
       "close": 60.5664,
       "volume": 386800600.0
      },
      {
       "date": "2009-01-26",
       "open": 60.9162,
       "high": 62.2061,
       "low": 60.3478,
       "close": 60.9818,
       "volume": 317978800.0
      },
      {
       "date": "2009-01-27",
       "open": 61.3098,
       "high": 62.0531,
       "low": 60.7049,
       "close": 61.6013,
       "volume": 273789700.0
      },
      {
       "date": "2009-01-28",
       "open": 62.964,
       "high": 64.0936,
       "low": 62.7235,
       "close": 63.6855,
       "volume": 330007000.0
      },
      {
       "date": "2009-01-29",
       "open": 62.7527,
       "high": 63.7584,
       "low": 61.5575,
       "close": 61.6158,
       "volume": 294392500.0
      },
      {
       "date": "2009-01-30",
       "open": 61.9292,
       "high": 62.2353,
       "low": 59.9106,
       "close": 60.3624,
       "volume": 383383600.0
      },
      {
       "date": "2009-02-02",
       "open": 59.4442,
       "high": 60.6175,
       "low": 59.2547,
       "close": 60.1802,
       "volume": 288233300.0
      },
      {
       "date": "2009-02-03",
       "open": 60.5591,
       "high": 61.4774,
       "low": 59.9179,
       "close": 61.0255,
       "volume": 278385800.0
      },
      {
       "date": "2009-02-04",
       "open": 61.4337,
       "high": 62.2134,
       "low": 60.5154,
       "close": 60.7268,
       "volume": 322989300.0
      },
      {
       "date": "2009-02-05",
       "open": 60.2676,
       "high": 62.1551,
       "low": 56.6458,
       "close": 61.6304,
       "volume": 417679400.0
      },
      {
       "date": "2009-02-06",
       "open": 61.8418,
       "high": 63.649,
       "low": 61.7106,
       "close": 63.3867,
       "volume": 366101700.0
      },
      {
       "date": "2009-02-09",
       "open": 63.3721,
       "high": 63.9406,
       "low": 62.9057,
       "close": 63.4742,
       "volume": 240075200.0
      },
      {
       "date": "2009-02-10",
       "open": 62.8693,
       "high": 63.4231,
       "low": 60.0855,
       "close": 60.5664,
       "volume": 536212800.0
      },
      {
       "date": "2009-02-11",
       "open": 60.8142,
       "high": 61.2515,
       "low": 60.049,
       "close": 60.9235,
       "volume": 324442500.0
      },
      {
       "date": "2009-02-12",
       "open": 59.8814,
       "high": 61.0839,
       "low": 59.0652,
       "close": 60.9673,
       "volume": 469302200.0
      },
      {
       "date": "2009-02-13",
       "open": 60.8871,
       "high": 61.3899,
       "low": 60.2968,
       "close": 60.3114,
       "volume": 293998400.0
      },
      {
       "date": "2009-02-17",
       "open": 58.4166,
       "high": 60.4571,
       "low": 57.6952,
       "close": 57.7316,
       "volume": 478910100.0
      },
      {
       "date": "2009-02-18",
       "open": 58.147,
       "high": 58.2563,
       "low": 57.0466,
       "close": 57.5931,
       "volume": 362964800.0
      },
      {
       "date": "2009-02-19",
       "open": 58.1834,
       "high": 58.4093,
       "low": 56.8571,
       "close": 56.9737,
       "volume": 316867500.0
      },
      {
       "date": "2009-02-20",
       "open": 55.917,
       "high": 57.0903,
       "low": 55.2174,
       "close": 56.4198,
       "volume": 477176600.0
      },
      {
       "date": "2009-02-23",
       "open": 57.0393,
       "high": 57.0393,
       "low": 54.3575,
       "close": 54.4012,
       "volume": 379641400.0
      },
      {
       "date": "2009-02-24",
       "open": 54.8676,
       "high": 56.8061,
       "low": 54.4376,
       "close": 56.4636,
       "volume": 426260900.0
      },
      {
       "date": "2009-02-25",
       "open": 56.2158,
       "high": 57.1486,
       "low": 55.1154,
       "close": 56.019,
       "volume": 461985800.0
      },
      {
       "date": "2009-02-26",
       "open": 56.7113,
       "high": 58.0595,
       "low": 55.0425,
       "close": 55.1081,
       "volume": 363353900.0
      },
      {
       "date": "2009-02-27",
       "open": 53.9348,
       "high": 55.1591,
       "low": 53.7891,
       "close": 53.8765,
       "volume": 470510900.0
      },
      {
       "date": "2009-03-02",
       "open": 52.849,
       "high": 53.8692,
       "low": 51.2822,
       "close": 51.4498,
       "volume": 426452600.0
      },
      {
       "date": "2009-03-03",
       "open": 52.1858,
       "high": 52.2514,
       "low": 50.7502,
       "close": 51.0635,
       "volume": 443761000.0
      },
      {
       "date": "2009-03-04",
       "open": 51.9089,
       "high": 53.104,
       "low": 51.0635,
       "close": 52.2733,
       "volume": 462753100.0
      },
      {
       "date": "2009-03-05",
       "open": 51.0854,
       "high": 52.2733,
       "low": 49.6789,
       "close": 50.138,
       "volume": 485549400.0
      },
      {
       "date": "2009-03-06",
       "open": 50.5753,
       "high": 51.3405,
       "low": 48.8991,
       "close": 50.2255,
       "volume": 490470000.0
      },
      {
       "date": "2009-03-09",
       "open": 49.5186,
       "high": 51.0125,
       "low": 49.3583,
       "close": 49.6352,
       "volume": 379905300.0
      },
      {
       "date": "2009-03-10",
       "open": 50.6554,
       "high": 52.7397,
       "low": 50.5534,
       "close": 52.5939,
       "volume": 406227900.0
      },
      {
       "date": "2009-03-11",
       "open": 53.1988,
       "high": 53.7453,
       "low": 52.3461,
       "close": 52.9364,
       "volume": 356648300.0
      },
      {
       "date": "2009-03-12",
       "open": 52.9218,
       "high": 55.2028,
       "low": 52.4482,
       "close": 55.0206,
       "volume": 409702700.0
      },
      {
       "date": "2009-03-13",
       "open": 55.3923,
       "high": 56.0992,
       "low": 54.4595,
       "close": 55.4506,
       "volume": 337474700.0
      },
      {
       "date": "2009-03-16",
       "open": 56.0846,
       "high": 56.8207,
       "low": 55.2466,
       "close": 55.283,
       "volume": 360644900.0
      },
      {
       "date": "2009-03-17",
       "open": 55.436,
       "high": 57.1049,
       "low": 54.9842,
       "close": 56.9737,
       "volume": 356814300.0
      },
      {
       "date": "2009-03-18",
       "open": 56.7041,
       "high": 58.9559,
       "low": 56.1648,
       "close": 58.249,
       "volume": 473273200.0
      },
      {
       "date": "2009-03-19",
       "open": 58.9778,
       "high": 59.0288,
       "low": 57.3454,
       "close": 57.5276,
       "volume": 428520400.0
      },
      {
       "date": "2009-03-20",
       "open": 57.8165,
       "high": 57.9266,
       "low": 56.1794,
       "close": 56.3116,
       "volume": 371078200.0
      },
      {
       "date": "2009-03-23",
       "open": 57.8018,
       "high": 60.4078,
       "low": 57.4861,
       "close": 60.3564,
       "volume": 419933300.0
      },
      {
       "date": "2009-03-24",
       "open": 59.637,
       "high": 60.4592,
       "low": 59.1011,
       "close": 59.1672,
       "volume": 330271000.0
      },
      {
       "date": "2009-03-25",
       "open": 59.6296,
       "high": 60.7087,
       "low": 58.0367,
       "close": 59.7911,
       "volume": 441775100.0
      },
      {
       "date": "2009-03-26",
       "open": 60.3784,
       "high": 61.1492,
       "low": 59.6957,
       "close": 61.0097,
       "volume": 422025200.0
      },
      {
       "date": "2009-03-27",
       "open": 60.2316,
       "high": 60.5839,
       "low": 59.6884,
       "close": 59.9086,
       "volume": 322332300.0
      },
      {
       "date": "2009-03-30",
       "open": 58.5799,
       "high": 58.6313,
       "low": 57.2292,
       "close": 57.8385,
       "volume": 324108500.0
      },
      {
       "date": "2009-03-31",
       "open": 58.4037,
       "high": 59.5195,
       "low": 58.0293,
       "close": 58.3744,
       "volume": 364238300.0
      },
      {
       "date": "2009-04-01",
       "open": 57.6476,
       "high": 59.7691,
       "low": 57.5008,
       "close": 59.5048,
       "volume": 377018300.0
      },
      {
       "date": "2009-04-02",
       "open": 60.9877,
       "high": 62.1108,
       "low": 59.5562,
       "close": 61.2446,
       "volume": 476230700.0
      },
      {
       "date": "2009-04-03",
       "open": 61.2887,
       "high": 61.8686,
       "low": 60.6867,
       "close": 61.8539,
       "volume": 284646300.0
      },
      {
       "date": "2009-04-06",
       "open": 61.1786,
       "high": 61.8686,
       "low": 60.4078,
       "close": 61.3694,
       "volume": 264866600.0
      },
      {
       "date": "2009-04-07",
       "open": 60.3784,
       "high": 60.672,
       "low": 59.8352,
       "close": 59.938,
       "volume": 258947800.0
      },
      {
       "date": "2009-04-08",
       "open": 60.2389,
       "high": 60.8849,
       "low": 59.8572,
       "close": 60.5839,
       "volume": 230402800.0
      },
      {
       "date": "2009-04-09",
       "open": 62.1549,
       "high": 62.9991,
       "low": 61.9053,
       "close": 62.9917,
       "volume": 269653500.0
      },
      {
       "date": "2009-04-13",
       "open": 62.3384,
       "high": 63.5276,
       "low": 62.0888,
       "close": 63.0064,
       "volume": 224847500.0
      },
      {
       "date": "2009-04-14",
       "open": 62.4192,
       "high": 62.955,
       "low": 61.7218,
       "close": 61.92,
       "volume": 276598800.0
      },
      {
       "date": "2009-04-15",
       "open": 61.5456,
       "high": 62.7054,
       "low": 61.3768,
       "close": 62.5807,
       "volume": 250726100.0
      },
      {
       "date": "2009-04-16",
       "open": 63.0798,
       "high": 63.9754,
       "low": 62.2283,
       "close": 63.4983,
       "volume": 335202900.0
      },
      {
       "date": "2009-04-17",
       "open": 63.7405,
       "high": 64.3425,
       "low": 63.234,
       "close": 63.924,
       "volume": 262649000.0
      },
      {
       "date": "2009-04-20",
       "open": 62.7935,
       "high": 63.902,
       "low": 61.1786,
       "close": 61.2446,
       "volume": 293690100.0
      },
      {
       "date": "2009-04-21",
       "open": 60.7968,
       "high": 62.4926,
       "low": 60.7454,
       "close": 62.4412,
       "volume": 114090900.0
      },
      {
       "date": "2009-04-22",
       "open": 61.8759,
       "high": 63.3808,
       "low": 61.7144,
       "close": 62.0595,
       "volume": 340395200.0
      },
      {
       "date": "2009-04-23",
       "open": 62.1842,
       "high": 62.7054,
       "low": 61.3914,
       "close": 62.6687,
       "volume": 324903700.0
      },
      {
       "date": "2009-04-24",
       "open": 63.1532,
       "high": 64.0929,
       "low": 62.9037,
       "close": 63.6157,
       "volume": 287703000.0
      },
      {
       "date": "2009-04-27",
       "open": 62.8963,
       "high": 63.8726,
       "low": 62.7935,
       "close": 63.0138,
       "volume": 289581600.0
      },
      {
       "date": "2009-04-28",
       "open": 62.3751,
       "high": 63.5643,
       "low": 62.221,
       "close": 62.8156,
       "volume": 247926300.0
      },
      {
       "date": "2009-04-29",
       "open": 63.5129,
       "high": 64.8637,
       "low": 63.3514,
       "close": 64.1516,
       "volume": 311505700.0
      },
      {
       "date": "2009-04-30",
       "open": 65.0031,
       "high": 65.3481,
       "low": 63.8066,
       "close": 64.1736,
       "volume": 301419800.0
      },
      {
       "date": "2009-05-01",
       "open": 64.1883,
       "high": 64.7535,
       "low": 63.6598,
       "close": 64.5186,
       "volume": 236110300.0
      },
      {
       "date": "2009-05-04",
       "open": 65.0031,
       "high": 66.7576,
       "low": 64.8783,
       "close": 66.7135,
       "volume": 287120000.0
      },
      {
       "date": "2009-05-05",
       "open": 66.486,
       "high": 66.7503,
       "low": 65.9501,
       "close": 66.486,
       "volume": 243036300.0
      },
      {
       "date": "2009-05-06",
       "open": 67.3008,
       "high": 67.6825,
       "low": 66.5153,
       "close": 67.6385,
       "volume": 291941000.0
      },
      {
       "date": "2009-05-07",
       "open": 68.2771,
       "high": 68.3799,
       "low": 66.2731,
       "close": 66.6989,
       "volume": 317728000.0
      },
      {
       "date": "2009-05-08",
       "open": 67.5577,
       "high": 68.4313,
       "low": 67.1246,
       "close": 68.2551,
       "volume": 299081700.0
      },
      {
       "date": "2009-05-11",
       "open": 67.3155,
       "high": 67.6165,
       "low": 66.831,
       "close": 66.9778,
       "volume": 247923600.0
      },
      {
       "date": "2009-05-12",
       "open": 67.2641,
       "high": 67.4109,
       "low": 65.9574,
       "close": 66.7796,
       "volume": 282431300.0
      },
      {
       "date": "2009-05-13",
       "open": 65.8767,
       "high": 66.0749,
       "low": 64.9664,
       "close": 65.0986,
       "volume": 269619100.0
      },
      {
       "date": "2009-05-14",
       "open": 65.1279,
       "high": 66.1556,
       "low": 64.9664,
       "close": 65.6565,
       "volume": 260098700.0
      },
      {
       "date": "2009-05-15",
       "open": 65.6051,
       "high": 66.0676,
       "low": 64.7095,
       "close": 65.1206,
       "volume": 271502700.0
      },
      {
       "date": "2009-05-18",
       "open": 65.7372,
       "high": 67.0512,
       "low": 65.0178,
       "close": 66.9705,
       "volume": 241447400.0
      },
      {
       "date": "2009-05-19",
       "open": 66.9338,
       "high": 67.5137,
       "low": 66.6622,
       "close": 66.8897,
       "volume": 206102200.0
      },
      {
       "date": "2009-05-20",
       "open": 67.499,
       "high": 68.123,
       "low": 66.3685,
       "close": 66.4419,
       "volume": 285722200.0
      },
      {
       "date": "2009-05-21",
       "open": 65.6711,
       "high": 65.9207,
       "low": 64.7902,
       "close": 65.4876,
       "volume": 258988400.0
      },
      {
       "date": "2009-05-22",
       "open": 65.6711,
       "high": 66.0676,
       "low": 65.0986,
       "close": 65.3481,
       "volume": 166811900.0
      },
      {
       "date": "2009-05-26",
       "open": 64.8637,
       "high": 67.2127,
       "low": 64.8343,
       "close": 67.0219,
       "volume": 236318500.0
      },
      {
       "date": "2009-05-27",
       "open": 67.1246,
       "high": 67.3522,
       "low": 65.7225,
       "close": 65.8253,
       "volume": 246015800.0
      },
      {
       "date": "2009-05-28",
       "open": 66.4052,
       "high": 67.0512,
       "low": 65.4069,
       "close": 66.7429,
       "volume": 289095000.0
      },
      {
       "date": "2009-05-29",
       "open": 67.11,
       "high": 68.7837,
       "low": 66.5667,
       "close": 67.9248,
       "volume": 258641500.0
      },
      {
       "date": "2009-06-01",
       "open": 68.7616,
       "high": 69.8628,
       "low": 68.5855,
       "close": 69.5691,
       "volume": 276246800.0
      },
      {
       "date": "2009-06-02",
       "open": 69.2975,
       "high": 70.0096,
       "low": 69.1727,
       "close": 69.6279,
       "volume": 230874500.0
      },
      {
       "date": "2009-06-03",
       "open": 69.0333,
       "high": 69.0993,
       "low": 68.0936,
       "close": 68.747,
       "volume": 235310500.0
      },
      {
       "date": "2009-06-04",
       "open": 69.0039,
       "high": 69.4957,
       "low": 68.49,
       "close": 69.393,
       "volume": 210102300.0
      },
      {
       "date": "2009-06-05",
       "open": 70.0977,
       "high": 70.2298,
       "low": 68.8571,
       "close": 69.4076,
       "volume": 284257900.0
      },
      {
       "date": "2009-06-08",
       "open": 68.8864,
       "high": 69.8114,
       "low": 68.2992,
       "close": 69.1213,
       "volume": 238565100.0
      },
      {
       "date": "2009-06-09",
       "open": 69.5104,
       "high": 69.8407,
       "low": 69.0186,
       "close": 69.4737,
       "volume": 225125500.0
      },
      {
       "date": "2009-06-10",
       "open": 70.0903,
       "high": 70.0977,
       "low": 68.4093,
       "close": 69.2975,
       "volume": 296100400.0
      },
      {
       "date": "2009-06-11",
       "open": 69.4297,
       "high": 70.5528,
       "low": 69.415,
       "close": 69.6058,
       "volume": 275414200.0
      },
      {
       "date": "2009-06-12",
       "open": 69.2975,
       "high": 69.8407,
       "low": 69.0039,
       "close": 69.7967,
       "volume": 184361800.0
      },
      {
       "date": "2009-06-15",
       "open": 68.9745,
       "high": 69.0186,
       "low": 67.8294,
       "close": 68.1964,
       "volume": 224190500.0
      },
      {
       "date": "2009-06-16",
       "open": 68.4386,
       "high": 68.4827,
       "low": 67.2274,
       "close": 67.2715,
       "volume": 227319000.0
      },
      {
       "date": "2009-06-17",
       "open": 67.2421,
       "high": 67.778,
       "low": 66.6768,
       "close": 67.2054,
       "volume": 223445200.0
      },
      {
       "date": "2009-06-18",
       "open": 67.3082,
       "high": 68.0276,
       "low": 66.9852,
       "close": 67.6972,
       "volume": 211725100.0
      },
      {
       "date": "2009-06-19",
       "open": 68.3441,
       "high": 68.4327,
       "low": 67.5616,
       "close": 67.9455,
       "volume": 215655600.0
      },
      {
       "date": "2009-06-22",
       "open": 67.2811,
       "high": 67.318,
       "low": 65.8859,
       "close": 65.908,
       "volume": 251913600.0
      },
      {
       "date": "2009-06-23",
       "open": 66.0483,
       "high": 66.3509,
       "low": 65.5906,
       "close": 65.9597,
       "volume": 188309800.0
      },
      {
       "date": "2009-06-24",
       "open": 66.5576,
       "high": 67.2368,
       "low": 66.1442,
       "close": 66.5281,
       "volume": 211577700.0
      },
      {
       "date": "2009-06-25",
       "open": 66.1959,
       "high": 68.0414,
       "low": 66.1221,
       "close": 67.975,
       "volume": 279411000.0
      },
      {
       "date": "2009-06-26",
       "open": 67.7462,
       "high": 68.0931,
       "low": 67.3771,
       "close": 67.7978,
       "volume": 167579000.0
      },
      {
       "date": "2009-06-29",
       "open": 67.9972,
       "high": 68.5213,
       "low": 67.6207,
       "close": 68.4327,
       "volume": 168481300.0
      },
      {
       "date": "2009-06-30",
       "open": 68.4475,
       "high": 68.6985,
       "low": 67.3771,
       "close": 67.879,
       "volume": 228888200.0
      }
     ],
     "npc_bets": [
      {
       "player_id": "p01",
       "action": "跟",
       "stake": 257,
       "side_price": 0.5,
       "result": {
        "won": false,
        "payout": 0.0
       }
      },
      {
       "player_id": "p02",
       "action": "跟",
       "stake": 230,
       "side_price": 0.5,
       "result": {
        "won": false,
        "payout": 0.0
       }
      },
      {
       "player_id": "p04",
       "action": "反",
       "stake": 200,
       "side_price": 0.5,
       "result": {
        "won": true,
        "payout": 400.0
       }
      },
      {
       "player_id": "p05",
       "action": "对赌",
       "stake": 1000,
       "side_price": 0.5,
       "result": {
        "won": true,
        "dealer_delta": -1000.0
       }
      }
     ],
     "commission": {
      "pool": 487.0,
      "rate": 0.0,
      "paid": -0.0
     },
     "is_burst": true,
     "q_en": "Central bank cuts rates without waiting for a meeting—does the market read this as a rescue or panic?",
     "reason_en": "A cut this big will hold things up.",
     "mood_en": "Panic",
     "headline_en": "Fed emergency rate cut of 75 basis points before market open, largest single cut since 1984.",
     "background_en": "The Fed cuts rates 75 basis points outside regular meetings, before market open—the largest single cut since 1984. Triggered by overseas market crash the day before and Société Générale's $4.9 billion rogue trader loss announcement."
    }
   ],
   "dealer_cash_after": 9030.06
  }
 ],
 "tickers": {}
};
