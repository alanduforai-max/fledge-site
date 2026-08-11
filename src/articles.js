/* Fledge Trading Lab — article registry.
   To publish a new note: append an object here (id, title, plate, seed, summary,
   meta, status, and either body[] paragraphs or bodyHtml), then run build.py and
   republish. Articles render in the order listed; published notes first. */

const ARTICLES = [
  {
    id: "k-repeats",
    title: "What K buys you",
    plate: "dispersion",
    seed: 21,
    published: true,
    summary:
      "Ask the same trading question K times and let the majority decide. A minimal model and three small experiments on what repetition can change — accuracy, or only repeatability.",
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

WORLDS = {                      # (weight, p, move size)
  "A": [(1.00, 0.55, 1.0)],
  "B": [(0.70, 0.62, 1.0), (0.30, 0.45, 2.0)],
  "C": [(0.60, 0.85, 1.0), (0.40, 0.45, 2.0)],
}
acc  = sum(w * maj_acc(p, K) for w, p, m in world)
flip = sum(w * 2*a*(1-a) for a in (maj_acc(p, K) ...))
pnl  = sum(w * (2*maj_acc(p, K) - 1) * m for w, p, m in world)</pre></details>

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
  {
    id: "sampling",
    title: "The sampling lottery",
    plate: "dispersion",
    seed: 3,
    published: false,
    summary:
      "Same inputs, stable directional judgment, near-zero overlap in selection across samples — why LLM decision systems are unstable in a way benchmarks miss.",
    meta: "sampling · selection stability",
    status: "In preparation",
    body: [
      "Ask a language model the same question twice and the argument barely moves. Ask it to choose, and the choice does. We measure the gap: directional agreement stays high across repeated samples while the overlap between the selected sets falls close to zero.",
      "That gap is invisible to benchmarks that score one sample per prompt. A system built on a single draw inherits variance nobody measured, and the variance shows up as decisions, not as text.",
    ],
  },
  {
    id: "contamination",
    title: "Contamination-resistant evaluation",
    plate: "horizon",
    seed: 8,
    published: false,
    summary:
      "Rolling, forward-looking benchmarks that future model training data cannot absorb — evaluating decisions before outcomes exist.",
    meta: "evaluation · contamination",
    status: "In preparation",
    body: [
      "A benchmark whose answers exist on the internet stops measuring reasoning the moment a model is trained on it. Forward evaluation removes the possibility: tasks are published before their outcomes exist, and scored only after the window closes.",
      "The cost is patience. The benefit is that a score means the same thing in the next model generation as it did in this one.",
    ],
  },
  {
    id: "point-in-time",
    title: "Point-in-time discipline",
    plate: "replay",
    seed: 14,
    published: false,
    summary:
      "A no-lookahead evaluation law for decision systems; replaying history without leaking the future.",
    meta: "point-in-time · no-lookahead",
    status: "In preparation",
    body: [
      "Replaying history is easy to do wrong. Any state that was revised after the fact — a restated figure, a corrected label, a later-known outcome — leaks the future into a decision that could not have seen it.",
      "We treat point-in-time correctness as a law rather than a setting: a system may read only what was knowable at the cut, and every cut is reconstructed rather than assumed.",
    ],
  },
];
