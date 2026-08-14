/* Fledge Trading Lab — article registry.
   To publish a new note: append an object here (id, title, plate, seed, summary,
   meta, status, and either body[] paragraphs or bodyHtml), then run build.py and
   republish. Articles render in the order listed; published notes first. */

const ARTICLES = [
  {
    id: "finance-benchmarks",
    title: "Why current finance benchmarks won't work",
    plate: "horizon",
    seed: 8,
    published: true,
    summary:
      "A survey of the finance benchmarks that exist — exam-style QA suites and throw-the-agent-in-the-market backtests — and why neither can grade a trading agent. The measured case for a component-level, point-in-time, forward-rolling rating layer.",
    meta: "evaluation · survey",
    status: "Note 02 · Aug 2026",
    bodyHtml: `
<h2>The question a desk actually asks</h2>
<p>Before an agent is allowed near an order, someone has to answer one question: <em>when this system speaks, what exactly can I trust?</em> Finance has accumulated an impressive shelf of benchmarks, and none of them answer it. They fall into two families with two different failure modes: one measures the wrong thing carefully, the other measures the right thing wrongly.</p>

<h2>Family one: exams</h2>
<p>The first family tests financial literacy. FinQA poses numerical-reasoning questions over filings&nbsp;[1]; FinanceBench asks the open-book questions an equity analyst should be able to answer&nbsp;[2]; PIXIU and FinBen aggregate dozens of such tasks — sentiment, extraction, QA, summarisation — into league tables&nbsp;[3,4]. These are serious datasets, and they measure what they claim to measure: reading, extraction, numeracy.</p>
<p>What they measure is a paper qualification. An exam has no position, no sizing, no cost of being late, no asymmetry between a wrong answer and a wrong trade, and no reward for declining to answer at all. A model can top every table in this family and remain unsafe near an order, because nothing in the family ever asked it to decide.</p>

<h2>Family two: the market as the grader</h2>
<p>The second family does ask it to decide. FinMem&nbsp;[5], FinAgent&nbsp;[6] and InvestorBench&nbsp;[7] drop an agent into a historical market, let it trade, and read the PnL. The instinct is right — trading is decisions, so score decisions. The scoring is where it collapses, in three places.</p>
<p><strong>The model has read the future.</strong> Any backtest window long enough to be statistically interesting overlaps the pretraining corpus of every frontier model. Memorised tickers, dates, prices and market narratives then substitute for investment reasoning, and the benchmark grades recall. This is no longer a suspicion: KTD-Fin, the first trading benchmark to control memory exposure inside the protocol (identifier and calendar masking, certified by a ten-attacker de-anonymisation probe), finds that masking substantially changes agents' stated rationales — away from memory, toward reasoning over the anonymised factors actually given&nbsp;[8]. The unmasked scores were measuring something, but not trading.</p>
<p><strong>The returns are mostly borrowed.</strong> Worse, once leakage is controlled, the same study attributes the agents' cumulative returns largely to passive market and style exposure, with limited evidence of persistent stock-selection alpha&nbsp;[8]. A benchmark that reads raw PnL credits the agent with alpha for holding beta; it grades the regime it happened to run in, not the system. Quantitative finance learned this lesson on human strategies long ago — unadjusted backtest performance flatters until it is deflated for selection and exposure&nbsp;[9] — and the agent benchmarks inherited none of the machinery.</p>
<p><strong>The number explains nothing.</strong> PnL is a verdict, not an explanation. It arrives late, is noisy at any horizon a benchmark can afford, forgives every wrong reason and punishes right ones. When the composite is bad, it does not say which component failed — the summary, the source, the ranking, the sizing. When it is good, it does not say why it should keep being good.</p>
<div class="spec-table"><table>
<thead><tr><th>Benchmark</th><th>Scores</th><th>Cannot see</th></tr></thead>
<tbody>
<tr><td>FinQA · 2021</td><td>numerical QA over filings</td><td>any decision at all</td></tr>
<tr><td>FinanceBench · 2023</td><td>open-book analyst QA</td><td>any decision at all</td></tr>
<tr><td>PIXIU / FinBen · 2023–24</td><td>composite task league tables</td><td>decisions, risk, abstention</td></tr>
<tr><td>FinMem / FinAgent · 2023–24</td><td>backtest PnL of one agent</td><td>leakage; what drove the PnL</td></tr>
<tr><td>InvestorBench · 2024</td><td>backtest PnL, multi-asset</td><td>leakage; what drove the PnL</td></tr>
<tr><td>Alpha Arena · 2025</td><td>live PnL, one season</td><td>components; sample is tiny</td></tr>
<tr><td>KTD-Fin · 2026</td><td>masked backtest + attribution</td><td>— the study that measured the leak</td></tr>
</tbody>
</table></div>
<p>The direction of travel is visible at the edges of the table. Alpha Arena moved evaluation live, where leakage is impossible by construction — the right instinct, though one season of one composite number is a spectacle, not a rating&nbsp;[10]. KTD-Fin built the attribution machinery&nbsp;[8]; closed-loop diagnostic designs are appearing&nbsp;[13]. The field is turning. None of it yet adds up to an instrument a desk could act on.</p>

<h2>What forecasting already learned</h2>
<p>The adjacent discipline solved half of this. ForecastBench asks rolling questions about events that have not yet happened, so contamination is impossible by construction, and it maintains standing human baselines — the score means the same thing for the next model generation as for this one&nbsp;[11]. Bridgewater's AIA Forecaster work treats evaluation as first-class engineering: proper scoring rules, explicit statistical calibration against the behavioural biases of LLMs, and baselines that can embarrass the system — it reports reaching human-superforecaster parity on ForecastBench <em>and</em> reports underperforming liquid market consensus, adding value only in ensemble&nbsp;[12]. That honesty is the point: the evaluation was built to find where the system loses.</p>
<p>Trading needs that discipline, and then more of it, because a trade decomposes further than a forecast: what was read, what was believed, what was selected, what was sized, what was declined. Each stage can fail independently, and a desk needs to know which one did.</p>

<h2>The benchmark we are building</h2>
<p>So the specification writes itself, mostly as negations of the failures above.</p>
<ol>
<li><strong>Component grades before composite grades.</strong> Summary fidelity: is the model's reading of a filing or a headline faithful to the document? Source integrity: does the cited source exist, and is it the origin? Grounded reasoning: does the chain of logic touch the data actually given, or does it fabricate a number where one was missing? A desk trusts components; a composite hides them.</li>
<li><strong>Stability as a first-class score.</strong> Give the system a fixed dataset, ask it to rank five trade ideas, then run it again. If the order does not survive a rerun, the ranking was a draw from a distribution, not a judgment — and the desk deserves to know the distribution, not the draw.</li>
<li><strong>A point-in-time law, not a setting.</strong> The system may read only what was knowable at the decision's timestamp; every cut reconstructed, never assumed. Restated figures and later-known outcomes are leaks.</li>
<li><strong>Forward and rolling by construction.</strong> Tasks are published before their outcomes exist and scored when the window closes, as ForecastBench does — the only masking that no training corpus can undo&nbsp;[11].</li>
<li><strong>Risk-aware, factor-adjusted composites.</strong> Where trading outcomes are scored at all, they are attributed first — beta and style stripped out, costs charged, and abstention scored as a decision rather than as missing data. Raw PnL appears nowhere.</li>
</ol>
<p>The core suite ships open, so the field can stand on it and beat on it; graded datasets follow. This is step one of the lab's arc — benchmark, build, prove — and it is deliberately the unglamorous step. The market grades last, and its grades are expensive. A benchmark has to grade first.</p>

<h2>References</h2>
<ol class="refs">
<li>Z.&nbsp;Chen et&nbsp;al. <a href="https://arxiv.org/abs/2109.00122" target="_blank" rel="noreferrer">FinQA: A Dataset of Numerical Reasoning over Financial Data</a>. EMNLP 2021. arXiv:2109.00122.</li>
<li>P.&nbsp;Islam et&nbsp;al. <a href="https://arxiv.org/abs/2311.11944" target="_blank" rel="noreferrer">FinanceBench: A New Benchmark for Financial Question Answering</a>. 2023. arXiv:2311.11944.</li>
<li>Q.&nbsp;Xie et&nbsp;al. <a href="https://arxiv.org/abs/2306.05443" target="_blank" rel="noreferrer">PIXIU: A Large Language Model, Instruction Data and Evaluation Benchmark for Finance</a>. NeurIPS 2023. arXiv:2306.05443.</li>
<li>Q.&nbsp;Xie et&nbsp;al. <a href="https://arxiv.org/abs/2402.12659" target="_blank" rel="noreferrer">FinBen: A Holistic Financial Benchmark for Large Language Models</a>. NeurIPS 2024. arXiv:2402.12659.</li>
<li>Y.&nbsp;Yu et&nbsp;al. <a href="https://arxiv.org/abs/2311.13743" target="_blank" rel="noreferrer">FinMem: A Performance-Enhanced LLM Trading Agent with Layered Memory and Character Design</a>. 2023. arXiv:2311.13743.</li>
<li>W.&nbsp;Zhang et&nbsp;al. <a href="https://arxiv.org/abs/2402.18485" target="_blank" rel="noreferrer">A Multimodal Foundation Agent for Financial Trading: Tool-Augmented, Diversified, and Generalist</a>. KDD 2024. arXiv:2402.18485.</li>
<li>H.&nbsp;Li et&nbsp;al. <a href="https://arxiv.org/abs/2412.18174" target="_blank" rel="noreferrer">InvestorBench: A Benchmark for Financial Decision-Making Tasks with LLM-based Agent</a>. 2024. arXiv:2412.18174.</li>
<li>T.&nbsp;Zhu et&nbsp;al. <a href="https://arxiv.org/abs/2605.28359" target="_blank" rel="noreferrer">From Knowing to Doing: A Memory-Controlled Benchmark for LLM Trading Agents on Stock Markets</a>. 2026. arXiv:2605.28359.</li>
<li>D.&nbsp;H.&nbsp;Bailey, M.&nbsp;López&nbsp;de&nbsp;Prado. The Deflated Sharpe Ratio: Correcting for Selection Bias, Backtest Overfitting and Non-Normality. <em>Journal of Portfolio Management</em> 40(5), 2014.</li>
<li><a href="https://nof1.ai" target="_blank" rel="noreferrer">Alpha Arena</a>. Nof1, live LLM trading competition, 2025.</li>
<li>E.&nbsp;Karger et&nbsp;al. <a href="https://arxiv.org/abs/2409.19839" target="_blank" rel="noreferrer">ForecastBench: A Dynamic Benchmark of AI Forecasting Capabilities</a>. ICLR 2025. arXiv:2409.19839.</li>
<li>Bridgewater AIA Labs. <a href="https://arxiv.org/abs/2511.07678" target="_blank" rel="noreferrer">AIA Forecaster: Technical Report</a>. 2025. arXiv:2511.07678.</li>
<li><a href="https://arxiv.org/abs/2606.29771" target="_blank" rel="noreferrer">CLQT: A Closed-Loop, Cost-Aware, Strategy-Consistent Benchmark for Diagnostic Evaluation of LLM Portfolio-Management Agents</a>. 2026. arXiv:2606.29771.</li>
</ol>`,
  },
  {
    id: "k-repeats",
    title: "What K buys you",
    plate: "convergence",
    seed: 9,
    published: true,
    summary:
      "Ask the same trading question K times and let the majority decide. A minimal model and four small experiments on what repetition can change — accuracy, or only repeatability.",
    meta: "sampling · majority vote",
    status: "Note 01 · Aug 2026",
    bodyHtml: `
<h2>The question</h2>
<p>A language model asked to make a directional call — long or short, act or stand aside — does not give the same answer every time. Decoding is stochastic; the answer is a draw, not a verdict. The standard remedy is to ask K times and take the majority. On reasoning benchmarks this works famously well: self-consistency added 17.9 points on GSM8K&nbsp;[3], and sampling-and-voting scales small models past larger ones&nbsp;[2]. So it is tempting to treat K as an accuracy dial: too noisy, sample more.</p>
<p>A trading decision is a different regime. It is a two-way call, close to the coin-flip line, with no verifier available before the outcome arrives. This note works through what majority voting can and cannot do there, using a model small enough to solve exactly.</p>

<h2>A minimal model</h2>
<p>Each decision <em>i</em> has a latent per-sample competence <span class="fql-mono">p<sub>i</sub></span> — the probability that one sample calls it correctly. We draw K samples independently (conditional on the decision) and take the majority, K odd. Two numbers describe the whole system:</p>
<ol>
<li>At K = 1, expected accuracy is <strong>E[p]</strong> — average competence across decisions.</li>
<li>As K → ∞, the vote converges on each decision to the model's modal answer, so accuracy converges to <strong>P(p &gt; ½)</strong> — the fraction of decisions the model gets right <em>more often than not</em>.</li>
</ol>
<p>Everything voting can ever do to accuracy lives in the gap between those two numbers. Where p<sub>i</sub> &gt; ½, voting amplifies to certainty; where p<sub>i</sub> &lt; ½, it amplifies the error to certainty just as efficiently — Condorcet's jury theorem cuts both ways&nbsp;[6]. Chen et&nbsp;al. derive precisely this decomposition for LLM call-scaling and observe the non-monotone consequences on real tasks&nbsp;[1]. Note the model is generous to voting: samples from one model share its systematic errors, and correlated juries do strictly worse than this independent one&nbsp;[6,7].</p>

<h2>Three worlds</h2>
<p>Same machinery in all three; the only difference is where the mass of p sits relative to ½. World A is the Condorcet ideal usually invoked to justify voting. World B mixes decisions the model is mildly right about with a tail it is mildly wrong about. World C is a system that is excellent on most decisions and slightly below chance on a hard minority — arguably the realistic shape for a competent decision system, since easy calls are abundant and the residual is hard precisely because the model has no edge there.</p>
<div class="spec-table"><table>
<thead><tr><th>World</th><th>Composition</th><th>E[p] (K=1)</th><th>P(p&gt;½) (K→∞)</th></tr></thead>
<tbody>
<tr><td>A · uniform edge</td><td>every decision p = 0.55</td><td>0.550</td><td>1.000</td></tr>
<tr><td>B · mixed</td><td>70% at p = 0.62 · 30% at p = 0.45</td><td>0.569</td><td>0.700</td></tr>
<tr><td>C · hard tail</td><td>60% at p = 0.85 · 40% at p = 0.45</td><td>0.690</td><td>0.600</td></tr>
</tbody>
</table></div>
<figure class="fig">
  <div class="fig-head"><span class="fig-title">Accuracy under majority vote</span><span class="fig-num">Fig. 1</span></div>
  <div class="chart-wrap" data-chart="acc"></div>
  <figcaption>Exact vote accuracy against K (odd, 1–41). World A climbs toward 1 as promised. World B saturates at 0.70, far below the Condorcet limit. World C peaks at K&nbsp;=&nbsp;7 (0.749) and then declines toward its 0.60 asymptote — more sampling makes it worse, the non-monotone shape predicted by Chen et&nbsp;al.&nbsp;[1]. Reference marks show the K→∞ limits.</figcaption>
  <div class="data-table" data-table="acc"></div>
</figure>
<p>The gap between worlds is not subtle. In C, the vote converts a 69%-accurate sampler into a 60%-accurate committee, because 40% of its decisions sit just below the coin-flip line and voting faithfully hardens each of them into a confident mistake. No benchmark that scores one sample per prompt would see the difference between A and C coming.</p>

<h2>What K reliably buys: repeatability</h2>
<p>Stability is a different quantity: run the identical book twice and count decisions that flip. At K&nbsp;=&nbsp;1 in world A, <strong>49.5% of decisions flip between two identical reruns</strong> — half the book is a lottery ticket. Voting drives this down, and unlike the accuracy effect it never has the wrong sign.</p>
<figure class="fig">
  <div class="fig-head"><span class="fig-title">Decision flips between two identical reruns</span><span class="fig-num">Fig. 2</span></div>
  <div class="chart-wrap" data-chart="flip"></div>
  <figcaption>Probability a decision's final call differs between two independent K-vote runs. World C stabilizes fast (0.35 → 0.20 by K&nbsp;=&nbsp;9) because most of its decisions are far from ½. World A barely improves (0.495 → 0.38 at K&nbsp;=&nbsp;41): near the coin-flip line, even stability is expensive.</figcaption>
  <div class="data-table" data-table="flip"></div>
</figure>
<p>Two readings. First, the stability gain is real and immediate — this is the honest reason to sample more than once, and it also makes evaluation cheaper: a stable system needs fewer runs to measure. Second, K stabilizes what the model already believes; it does not settle what the model is genuinely unsure of. The decisions that stay unstable at K&nbsp;=&nbsp;9 are exactly the ones where the vote, if forced, hardens noise.</p>

<h2>Payoff weighting can flip the sign</h2>
<p>Accuracy counts decisions equally. A book does not: it earns the move. Add one assumption to worlds B and C — the hard decisions carry moves twice the size of the easy ones, because the events a model is worst at calling are the surprises, and surprises move most.</p>
<figure class="fig">
  <div class="fig-head"><span class="fig-title">Expected P&amp;L per decision, move-weighted</span><span class="fig-num">Fig. 3</span></div>
  <div class="chart-wrap" data-chart="pnl"></div>
  <figcaption>Expected payoff per decision (units of the small move) for a fixed-size directional bet, when hard decisions move 2 units and easy ones 1. World C peaks at K&nbsp;=&nbsp;5 and decays; its K→∞ limit is <strong>−0.20 per decision — negative, while its limiting accuracy is 60%, comfortably above chance</strong>. Wrongness concentrated in the big-move decisions costs more than abundant small-move rightness earns.</figcaption>
  <div class="data-table" data-table="pnl"></div>
</figure>
<p>The decay is slow — at K&nbsp;=&nbsp;41 world C still shows +0.21 — which is the dangerous part. A live sample of a few hundred decisions would read as healthy long after the vote has begun quietly rotating the book toward its confidently-wrong tail.</p>

<h2>A fourth world, shaped like a live book</h2>
<p>Worlds A–C were built to make the mechanism visible. World D is stylised from the opposite direction: its shape follows what a live LLM trading book tends to look like once outcomes are on the tape. Two regularities matter. The odds are roughly <em>symmetric</em> everywhere — what varies with move size is the win rate, not the payoff ratio. And competence is not where intuition puts it: a large slice of decisions resolves as small chop where the system sits slightly below chance, the genuine edge concentrates in mid-size moves, and the largest, symmetric moves — the ones that decide the book — sit near a coin flip. (Classes here are defined by how decisions <em>resolve</em>, which no system knows in advance; the mixture is a shape, not a playbook, and the numbers are rounded caricatures rather than any particular book's statistics.)</p>
<div class="spec-table"><table>
<thead><tr><th>Class</th><th>Weight</th><th>p</th><th>Payoff (±units)</th></tr></thead>
<tbody>
<tr><td>chop</td><td>30%</td><td>0.40</td><td>±0.25</td></tr>
<tr><td>small edge</td><td>30%</td><td>0.58</td><td>±1</td></tr>
<tr><td>mid-size edge</td><td>25%</td><td>0.62</td><td>±2</td></tr>
<tr><td>event tail</td><td>15%</td><td>0.45</td><td>±5</td></tr>
</tbody>
</table></div>
<figure class="fig">
  <div class="fig-head"><span class="fig-title">World D: expected P&amp;L, decomposed</span><span class="fig-num">Fig. 4</span></div>
  <div class="chart-wrap" data-chart="dpnl"></div>
  <figcaption>Total expected P&amp;L per decision for world D, split into the mass the vote hardens toward being right (p&nbsp;&gt;&nbsp;½ — 55% of decisions) and the mass it locks in wrong (p&nbsp;≤&nbsp;½ — the other 45%). The total more than doubles from K&nbsp;=&nbsp;1 to K&nbsp;=&nbsp;9 (+0.08&nbsp;→&nbsp;+0.17), crawls to a peak of +0.23 near K&nbsp;≈&nbsp;37, and decays toward a <strong>negative</strong> limit of −0.03. Accuracy meanwhile drifts from 51.7% to barely 56% — at every K this book's win rate looks like a coin flip with a rounding error, while its economics swing from thin to healthy to ruinous.</figcaption>
  <div class="data-table" data-table="dpnl"></div>
</figure>
<p>Three readings. First, <strong>voting works here — briefly and for a specific reason</strong>. Nearly all of the gain arrives by single-digit K, and it comes entirely from the two edge classes hardening toward certainty; another thirty-odd samples per decision buy +0.06 more, and past the peak the drag mass slowly wins. A small interior K captures most of what repetition will ever give a book shaped like this.</p>
<p>Second, <strong>the tail never settles</strong>. The five-unit class sits at p&nbsp;=&nbsp;0.45: the vote cannot rescue it (it hardens it wrong, slowly), and it cannot stabilise it either — run-to-run dispersion of book P&amp;L falls only ~15% from K&nbsp;=&nbsp;1 to K&nbsp;=&nbsp;9, and only ~30% by K&nbsp;=&nbsp;41, because the decisions that dominate the variance are precisely the ones repetition does not touch. K is a tool for the middle of the book, not its tail.</p>
<p>Third, <strong>win rate is the wrong instrument panel</strong>. From K&nbsp;=&nbsp;1 to the far limit, D's accuracy moves four points; its expected P&amp;L triples, peaks, and then goes negative. Two dashboards watching the same book would tell opposite stories, and the one showing accuracy would recommend raising K exactly as doing so starts to cost money.</p>

<h2>What this note does not claim</h2>
<p>The worlds are two-point caricatures, chosen so everything is exact; real competence is a smear, and a real book is a portfolio selection, not a sequence of isolated binary calls — selection stability under sampling is a harder question we treat separately. The independence assumption is generous: repeated samples of one model share its systematic errors, and both the correlated-jury theory&nbsp;[6] and recent measurement&nbsp;[7] say consensus among correlated voters certifies agreement, not truth. And none of this applies where an external verifier exists — with one, repeated sampling is a genuine accuracy engine&nbsp;[4]; markets simply do not grade before the trade.</p>

<h2>Conclusions, in the simplified setting</h2>
<ol>
<li><strong>The accuracy effect of K is bounded and sign-ambiguous.</strong> Voting moves accuracy from E[p] toward P(p&nbsp;&gt;&nbsp;½), saturating within tens of samples. Whether that is up or down depends entirely on where the model's hard decisions sit relative to the coin-flip line — a quantity single-sample benchmarks do not measure.</li>
<li><strong>The stability effect is real, immediate, and always the right sign.</strong> Repetition is a variance instrument. If the goal is a reproducible system and cheaper evaluation, small K is bought honestly.</li>
<li><strong>Payoff weighting can invert the verdict.</strong> A vote can raise accuracy while lowering expected P&amp;L, and can be profitable at practical K while its limit is negative. Accuracy is the wrong loss function to tune K against.</li>
<li><strong>If accuracy is the goal, K is the wrong dial.</strong> The gains attributed to asking again come from somewhere else: decorrelated information, heterogeneous models&nbsp;[8], or a verifier&nbsp;[4]. More draws from the same distribution mostly tell you, with increasing confidence, what the distribution already was.</li>
</ol>

<h2>Reproduce</h2>
<p>Every curve is exact binomial arithmetic; the dispersion numbers are Monte Carlo over 20,000 reruns of a 200-decision book. The full script is ~100 lines of Python; the core fits below.</p>
<details class="code-note"><summary>simulation core</summary><pre>def maj_acc(p, k):   # P(majority of k samples correct), k odd
    return sum(math.comb(k, j) * p**j * (1-p)**(k-j)
               for j in range(k//2 + 1, k + 1))

WORLDS = {            # (weight, p, win payoff, loss payoff)
  "A": [(1.00, 0.55, 1, 1)],
  "B": [(0.70, 0.62, 1, 1), (0.30, 0.45, 2, 2)],
  "C": [(0.60, 0.85, 1, 1), (0.40, 0.45, 2, 2)],
  "D": [(0.30, 0.40, 0.25, 0.25), (0.30, 0.58, 1, 1),
        (0.25, 0.62, 2, 2),       (0.15, 0.45, 5, 5)],
}
acc  = sum(w * maj_acc(p, K) for w, p, win, loss in world)
flip = sum(w * 2*a*(1-a) for a in (maj_acc(p, K) ...))
pnl  = sum(w * (maj_acc(p, K)*win - (1-maj_acc(p, K))*loss)
           for w, p, win, loss in world)</pre></details>

<h2>References</h2>
<ol class="refs">
<li>L.&nbsp;Chen, J.&nbsp;Q.&nbsp;Davis, B.&nbsp;Hanin, P.&nbsp;Bailis, I.&nbsp;Stoica, M.&nbsp;Zaharia, J.&nbsp;Zou. <a href="https://arxiv.org/abs/2403.02419" target="_blank" rel="noreferrer">Are More LLM Calls All You Need? Towards the Scaling Properties of Compound AI Systems</a>. NeurIPS 2024. arXiv:2403.02419.</li>
<li>J.&nbsp;Li, Q.&nbsp;Zhang, Y.&nbsp;Yu, Q.&nbsp;Fu, D.&nbsp;Ye. <a href="https://arxiv.org/abs/2402.05120" target="_blank" rel="noreferrer">More Agents Is All You Need</a>. TMLR 2024. arXiv:2402.05120.</li>
<li>X.&nbsp;Wang, J.&nbsp;Wei, D.&nbsp;Schuurmans, Q.&nbsp;Le, E.&nbsp;Chi, S.&nbsp;Narang, A.&nbsp;Chowdhery, D.&nbsp;Zhou. <a href="https://arxiv.org/abs/2203.11171" target="_blank" rel="noreferrer">Self-Consistency Improves Chain of Thought Reasoning in Language Models</a>. ICLR 2023. arXiv:2203.11171.</li>
<li>B.&nbsp;Brown, J.&nbsp;Juravsky, R.&nbsp;Ehrlich, R.&nbsp;Clark, Q.&nbsp;Le, C.&nbsp;Ré, A.&nbsp;Mirhoseini. <a href="https://arxiv.org/abs/2407.21787" target="_blank" rel="noreferrer">Large Language Monkeys: Scaling Inference Compute with Repeated Sampling</a>. 2024. arXiv:2407.21787.</li>
<li>C.&nbsp;Snell, J.&nbsp;Lee, K.&nbsp;Xu, A.&nbsp;Kumar. <a href="https://arxiv.org/abs/2408.03314" target="_blank" rel="noreferrer">Scaling LLM Test-Time Compute Optimally can be More Effective than Scaling Model Parameters</a>. 2024. arXiv:2408.03314.</li>
<li>Condorcet, <em>Essai sur l'application de l'analyse</em>, 1785; K.&nbsp;Ladha, "The Condorcet Jury Theorem, Free Speech, and Correlated Votes," <em>AJPS</em> 36(3), 1992; <a href="https://plato.stanford.edu/entries/jury-theorems/" target="_blank" rel="noreferrer">Jury Theorems</a>, <em>Stanford Encyclopedia of Philosophy</em>.</li>
<li>Y.&nbsp;Denisov-Blanch et&nbsp;al. <a href="https://arxiv.org/abs/2603.06612" target="_blank" rel="noreferrer">Consensus is Not Verification: Why Crowd Wisdom Strategies Fail for LLM Truthfulness</a>. 2026. arXiv:2603.06612.</li>
<li>P.&nbsp;Schoenegger, I.&nbsp;Tuminauskaite, P.&nbsp;S.&nbsp;Park, P.&nbsp;E.&nbsp;Tetlock. <a href="https://arxiv.org/abs/2402.19379" target="_blank" rel="noreferrer">Wisdom of the Silicon Crowd: LLM Ensemble Prediction Capabilities Rival Human Crowd Accuracy</a>. <em>Science Advances</em> 10, eadp1528, 2024.</li>
</ol>`,
  },
];
