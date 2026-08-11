#!/usr/bin/env python3
"""Fledge Trading Lab — Note 01.

Does asking K times make the answer right, or just repeatable?

Minimal model: a decision system faces a stream of binary directional calls.
Decision i has a latent per-sample competence p_i = P(one sample calls it
correctly). We draw K i.i.d. samples per decision and take the majority
(K odd). Everything below is either exact binomial arithmetic or Monte Carlo
over full "books" of N decisions.

Three stylised worlds, all with the SAME machinery — only where the mass of
p_i sits relative to 1/2 differs:
  A "uniform-edge"  : every decision p = 0.55            (the Condorcet dream)
  B "mixed"         : 70% of decisions p = 0.62, 30% p = 0.45
  C "hard-tail"     : 60% of decisions p = 0.85, 40% p = 0.45

Payoff twist (worlds B and C): easy decisions move 1 unit, hard decisions
move 2 units — surprises move more. A fixed-size directional bet earns
+m_i when right, -m_i when wrong.

Outputs research/k-repeat/results.json consumed by the site's chart code.
"""
import json
import math
from pathlib import Path

import numpy as np

KS = list(range(1, 42, 2))  # odd K from 1 to 41
N_BOOK = 200                # decisions per "book" (one full run)
N_RUNS = 20000              # Monte Carlo reruns for dispersion estimates
RNG = np.random.default_rng(11)

WORLDS = {
    "A": {"label": "A · uniform edge",  "classes": [(1.00, 0.55, 1.0)]},
    "B": {"label": "B · mixed",         "classes": [(0.70, 0.62, 1.0), (0.30, 0.45, 2.0)]},
    "C": {"label": "C · hard tail",     "classes": [(0.60, 0.85, 1.0), (0.40, 0.45, 2.0)]},
}
# classes: (weight, p, move size in units)


def maj_acc(p: float, k: int) -> float:
    """P(majority of k i.i.d. Bernoulli(p) samples is correct), k odd."""
    return sum(math.comb(k, j) * p**j * (1 - p) ** (k - j) for j in range((k // 2) + 1, k + 1))


def world_curves(classes):
    acc = [sum(w * maj_acc(p, k) for w, p, _ in classes) for k in KS]
    # flip rate: P(two independent K-votes on the same decision disagree)
    flip = [sum(w * 2 * maj_acc(p, k) * (1 - maj_acc(p, k)) for w, p, _ in classes) for k in KS]
    # payoff-weighted: expected PnL per decision, fixed 1-unit bet scaled by move
    pnl = [sum(w * (2 * maj_acc(p, k) - 1) * m for w, p, m in classes) for k in KS]
    asymptote = sum(w for w, p, _ in classes if p > 0.5)
    single = sum(w * p for w, p, _ in classes)
    return acc, flip, pnl, asymptote, single


def mc_book_dispersion(classes, k: int):
    """Std across reruns of (book accuracy, book mean PnL) for one K."""
    weights = np.array([w for w, _, _ in classes])
    ps = np.array([p for _, p, _ in classes])
    ms = np.array([m for _, _, m in classes])
    idx = RNG.choice(len(ps), size=N_BOOK, p=weights / weights.sum())
    p_book, m_book = ps[idx], ms[idx]          # one fixed book of decisions
    acc_k = np.array([maj_acc(p, k) for p in p_book])
    correct = RNG.random((N_RUNS, N_BOOK)) < acc_k          # vote outcome per rerun
    acc_runs = correct.mean(axis=1)
    pnl_runs = (np.where(correct, m_book, -m_book)).mean(axis=1)
    return float(acc_runs.std()), float(pnl_runs.std())


def main():
    out = {"ks": KS, "n_book": N_BOOK, "n_runs": N_RUNS, "worlds": {}}
    for key, w in WORLDS.items():
        acc, flip, pnl, asym, single = world_curves(w["classes"])
        out["worlds"][key] = {
            "label": w["label"],
            "classes": w["classes"],
            "acc": [round(v, 4) for v in acc],
            "flip": [round(v, 4) for v in flip],
            "pnl": [round(v, 4) for v in pnl],
            "asymptote": round(asym, 4),
            "single": round(single, 4),
        }
        disp = {k: mc_book_dispersion(w["classes"], k) for k in (1, 5, 9, 17, 41)}
        out["worlds"][key]["book_acc_std"] = {k: round(v[0], 4) for k, v in disp.items()}
        out["worlds"][key]["book_pnl_std"] = {k: round(v[1], 4) for k, v in disp.items()}
        print(f"world {key}: single={single:.3f}  K=9 acc={acc[4]:.3f}  K->inf={asym:.3f}  "
              f"pnl K=1 {pnl[0]:+.3f} -> K=41 {pnl[-1]:+.3f}  "
              f"flip K=1 {flip[0]:.3f} -> K=9 {flip[4]:.3f}")
    Path(__file__).with_name("results.json").write_text(json.dumps(out))
    print("wrote results.json")


if __name__ == "__main__":
    main()
