/* Fledge Trading Lab — site runtime. Vanilla JS port of the design project:
   hash router, canvas motifs (TrajectoryField, DraftingPlate), SVG charts. */
(function () {
  "use strict";

  /* ---------- seeded rng (mulberry32, as in the design) ---------- */
  function rng(a) {
    return function () {
      a |= 0; a = (a + 0x6D2B79F5) | 0;
      let t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  const REDUCED = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isDark = () => document.documentElement.getAttribute("data-theme") !== "light";
  const REDRAWS = []; // canvases that must repaint when the theme flips

  /* ---------- TrajectoryFieldOnce (canvas, draws once then holds) ---------- */
  function mountTrajectoryField(wrap, opts) {
    const o = Object.assign({ paths: 56, steps: 90, drift: 0.62, volatility: 1, seed: 7, highlight: true, speed: 1, origin: "left" }, opts);
    const canvas = document.createElement("canvas");
    canvas.style.display = "block";
    wrap.appendChild(canvas);
    const ctx = canvas.getContext("2d");
    const rnd = rng(o.seed);
    const series = [];
    for (let p = 0; p < o.paths; p++) {
      const pts = [0];
      const localDrift = o.drift * (0.55 + rnd() * 0.9);
      let v = 0;
      for (let s = 1; s <= o.steps; s++) { v += localDrift + (rnd() - 0.5) * 6 * o.volatility; pts.push(v); }
      series.push(pts);
    }
    const all = series.flat();
    const lo = Math.min.apply(null, all), hi = Math.max.apply(null, all);
    const span = hi - lo || 1;
    let raf, start = null, w = 0, h = 0, done = false;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = wrap.clientWidth; h = wrap.clientHeight;
      canvas.width = Math.max(1, w * dpr); canvas.height = Math.max(1, h * dpr);
      canvas.style.width = w + "px"; canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    const cssVar = (p) => getComputedStyle(wrap).getPropertyValue(p).trim();
    const draw = (progress) => {
      const dark = isDark();
      const faint = (dark ? cssVar("--text-display") : cssVar("--line-rule")) || "#9DA9B7";
      const ink = cssVar("--accent") || "#8DA0C2";
      const faintAlpha = dark ? 0.16 : 0.26;
      const inkAlpha = dark ? 0.6 : 0.95;
      ctx.clearRect(0, 0, w, h);
      const padY = h * 0.12;
      const x0 = o.origin === "left" ? w * 0.04 : w * 0.5;
      const x1 = w * 0.98;
      const yAt = (v) => h - padY - ((v - lo) / span) * (h - padY * 2);
      const upto = Math.max(1, Math.floor(o.steps * progress));
      ctx.lineCap = "round"; ctx.lineJoin = "round";
      for (let p = 0; p < series.length; p++) {
        const isHi = o.highlight && p === Math.floor(series.length * 0.41);
        ctx.beginPath();
        for (let s = 0; s <= upto; s++) {
          const x = x0 + ((x1 - x0) * s) / o.steps;
          const y = yAt(series[p][s]);
          s === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        ctx.strokeStyle = isHi ? ink : faint;
        ctx.globalAlpha = isHi ? inkAlpha : faintAlpha;
        ctx.lineWidth = isHi ? (isDark() ? 1.1 : 1.4) : 0.75;
        ctx.stroke();
      }
      ctx.globalAlpha = 1;
      ctx.beginPath(); ctx.arc(x0, yAt(0), 2.2, 0, Math.PI * 2);
      ctx.fillStyle = ink; ctx.fill();
    };
    const duration = 6700 / Math.max(o.speed, 0.05);
    const loop = (t) => {
      if (start == null) start = t;
      const progress = Math.min(1, (t - start) / duration);
      draw(progress);
      if (progress < 1) raf = requestAnimationFrame(loop); else done = true;
    };
    resize();
    if (REDUCED) { draw(1); done = true; } else raf = requestAnimationFrame(loop);
    new ResizeObserver(() => { resize(); if (done) draw(1); else draw(0); }).observe(wrap);
    REDRAWS.push(() => { if (done) draw(1); });
  }

  /* ---------- DraftingPlate (canvas, static construction drawings) ---------- */
  const PLATES = {
    dispersion(ctx, w, h, seed) {
      const r = rng(seed);
      const ox = w * 0.14, oy = h * 0.54;
      const R = Math.min(w, h) * 0.82;
      ctx.globalAlpha = 0.2;
      for (let i = 0; i < 26; i++) {
        const a = -0.58 + (i / 25) * 1.16 + (r() - 0.5) * 0.05;
        const d = R * (0.55 + r() * 0.45);
        ctx.beginPath(); ctx.moveTo(ox, oy);
        ctx.quadraticCurveTo(ox + Math.cos(a) * d * 0.55, oy + Math.sin(a) * d * 0.3, ox + Math.cos(a) * d, oy + Math.sin(a) * d);
        ctx.stroke();
      }
      ctx.globalAlpha = 0.85; ctx.lineWidth = 1.4;
      const a1 = 0.1, d1 = R * 0.94;
      ctx.beginPath(); ctx.moveTo(ox, oy);
      ctx.quadraticCurveTo(ox + Math.cos(a1) * d1 * 0.55, oy + Math.sin(a1) * d1 * 0.3, ox + Math.cos(a1) * d1, oy + Math.sin(a1) * d1);
      ctx.stroke();
      ctx.beginPath(); ctx.arc(ox, oy, 2.2, 0, Math.PI * 2); ctx.fill();
    },
    horizon(ctx, w, h, seed) {
      const r = rng(seed);
      const cx = w * 0.4, cy = h * 0.5;
      const R = Math.min(w, h) * 0.6;
      ctx.globalAlpha = 0.2;
      for (let i = 1; i <= 4; i++) { ctx.beginPath(); ctx.arc(cx, cy, (R / 4) * i, 0, Math.PI * 2); ctx.stroke(); }
      ctx.globalAlpha = 0.16;
      for (let i = 0; i < 10; i++) {
        const a = r() * Math.PI * 2, d = R * Math.sqrt(r());
        ctx.beginPath(); ctx.arc(cx + Math.cos(a) * d, cy + Math.sin(a) * d, 1.2, 0, Math.PI * 2); ctx.fill();
      }
      ctx.globalAlpha = 0.85; ctx.lineWidth = 1.4;
      ctx.beginPath(); ctx.moveTo(w * 0.66, h * 0.08); ctx.lineTo(w * 0.66, h * 0.92); ctx.stroke();
    },
    // law of large numbers as a stroke field: a grid of tick marks whose random
    // orientations are ground down, column by column (∝1/√n), into one verdict
    convergence(ctx, w, h, seed) {
      const r = rng(seed);
      const s = Math.min(w, h) / 11;
      const cols = Math.max(6, Math.floor((w * 0.84) / s));
      const rows = Math.max(6, Math.floor((h * 0.82) / s));
      const gx = (w - (cols - 1) * s) / 2;
      const gy = (h - (rows - 1) * s) / 2;
      const len = s * 0.6;

      ctx.globalAlpha = 0.2;
      for (let c = 0; c < cols; c++) {
        const t = c / (cols - 1);
        const spread = 1.5 / Math.sqrt(1 + t * 26); // wild → nearly settled
        for (let q = 0; q < rows; q++) {
          if (c === cols - 1 && q === Math.floor(rows / 2)) continue; // the inked cell
          const a = (r() - 0.5) * 2 * spread;
          const cx = gx + c * s, cy = gy + q * s;
          const dx = (Math.cos(a) * len) / 2, dy = (Math.sin(a) * len) / 2;
          ctx.beginPath();
          ctx.moveTo(cx - dx, cy - dy);
          ctx.lineTo(cx + dx, cy + dy);
          ctx.stroke();
        }
      }

      // final cell: the settled call, inked dead level
      ctx.globalAlpha = 0.85;
      ctx.lineWidth = 1.4;
      const cx = gx + (cols - 1) * s, cy = gy + Math.floor(rows / 2) * s;
      const L = s * 0.82;
      ctx.beginPath();
      ctx.moveTo(cx - L / 2, cy);
      ctx.lineTo(cx + L / 2, cy);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(cx + L / 2, cy, 2.2, 0, Math.PI * 2);
      ctx.fill();
    },
    // benchmark as classical construction: a calibrated baseline, compass arcs
    // from two centers, faint near-vertical candidates — and the one true
    // perpendicular, inked, erected through their intersection
    calibration(ctx, w, h, seed) {
      const r = rng(seed);
      const y0 = h * 0.72;
      const xa = w * 0.27, xb = w * 0.73;
      const mx = (xa + xb) / 2;
      const R = (xb - xa) * 0.74;
      ctx.globalAlpha = 0.2;
      ctx.beginPath(); ctx.moveTo(w * 0.06, y0); ctx.lineTo(w * 0.94, y0); ctx.stroke();
      const ticks = 11;
      for (let i = 0; i < ticks; i++) {
        const x = w * 0.1 + (w * 0.8 * i) / (ticks - 1);
        const t = i % 5 === 0 ? h * 0.032 : h * 0.016;
        ctx.beginPath(); ctx.moveTo(x, y0); ctx.lineTo(x, y0 + t); ctx.stroke();
      }
      for (const cx of [xa, xb]) {
        ctx.beginPath(); ctx.arc(cx, y0, R, -Math.PI * 0.78, -Math.PI * 0.22); ctx.stroke();
        ctx.beginPath(); ctx.arc(cx, y0, 1.5, 0, Math.PI * 2); ctx.fill();
      }
      for (let i = 0; i < 3; i++) {
        const a = -Math.PI / 2 + (r() - 0.5) * 0.4;
        ctx.beginPath(); ctx.moveTo(mx, y0);
        ctx.lineTo(mx + Math.cos(a) * h * 0.54, y0 + Math.sin(a) * h * 0.54);
        ctx.stroke();
      }
      const q = Math.min(w, h) * 0.035;
      ctx.beginPath(); ctx.moveTo(mx + q, y0); ctx.lineTo(mx + q, y0 - q); ctx.lineTo(mx, y0 - q); ctx.stroke();
      const yc = y0 - Math.sqrt(Math.max(0, R * R - (mx - xa) * (mx - xa)));
      ctx.globalAlpha = 0.45;
      ctx.beginPath(); ctx.arc(mx, yc, 3, 0, Math.PI * 2); ctx.stroke();
      ctx.globalAlpha = 0.85; ctx.lineWidth = 1.4;
      const topY = y0 - h * 0.56;
      ctx.beginPath(); ctx.moveTo(mx, y0); ctx.lineTo(mx, topY); ctx.stroke();
      ctx.beginPath(); ctx.arc(mx, topY, 2.2, 0, Math.PI * 2); ctx.fill();
    },
    // post-training as a stepped ascent: a smooth spiral guide with radial
    // spokes, climbed one quantized stair at a time — arc, riser, arc, riser —
    // ending inked at the outermost turn
    ascent(ctx, w, h, seed) {
      const cx = w * 0.5, cy = h * 0.54;
      const turns = 2;
      const thMax = turns * Math.PI * 2;
      const phase = -Math.PI / 2 - thMax;
      const rMax = Math.min(w, h) * 0.45;
      const rAt = (th) => rMax * (0.1 + 0.9 * (th / thMax));
      ctx.globalAlpha = 0.2;
      ctx.beginPath(); ctx.moveTo(cx - rMax * 1.12, cy); ctx.lineTo(cx + rMax * 1.12, cy); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(cx, cy - rMax * 1.12); ctx.lineTo(cx, cy + rMax * 1.12); ctx.stroke();
      ctx.beginPath();
      for (let i = 0; i <= 280; i++) {
        const th = (thMax * i) / 280;
        const x = cx + Math.cos(th + phase) * rAt(th);
        const y = cy + Math.sin(th + phase) * rAt(th);
        i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.stroke();
      ctx.beginPath(); ctx.arc(cx, cy, 1.5, 0, Math.PI * 2); ctx.fill();
      ctx.globalAlpha = 0.85; ctx.lineWidth = 1.4;
      const step = Math.PI / 3;
      const n = Math.round(thMax / step);
      const i0 = 2;
      ctx.beginPath();
      ctx.moveTo(cx + Math.cos(i0 * step + phase) * rAt(i0 * step), cy + Math.sin(i0 * step + phase) * rAt(i0 * step));
      for (let i = i0; i < n; i++) {
        const th0 = i * step, th1 = Math.min((i + 1) * step, thMax);
        ctx.arc(cx, cy, rAt(th0), th0 + phase, th1 + phase);
        ctx.lineTo(cx + Math.cos(th1 + phase) * rAt(th1), cy + Math.sin(th1 + phase) * rAt(th1));
      }
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(cx + Math.cos(thMax + phase) * rMax, cy + Math.sin(thMax + phase) * rMax, 2.2, 0, Math.PI * 2);
      ctx.fill();
    },
    // live validation as structure found in noise: a random walk, five of its
    // moments concyclic, faint tangent ticks at four — and the tangent at the
    // fifth, inked, leaving the circle
    tangency(ctx, w, h, seed) {
      const r = rng(seed);
      ctx.globalAlpha = 0.2;
      const n = 96;
      let y = h * 0.44, vel = 0;
      ctx.beginPath();
      for (let i = 0; i <= n; i++) {
        const x = w * 0.04 + (w * 0.92 * i) / n;
        vel = vel * 0.86 + (r() - 0.5) * h * 0.038;
        y += vel;
        if (y < h * 0.07) { y = h * 0.07; vel = -vel * 0.4; }
        if (y > h * 0.93) { y = h * 0.93; vel = -vel * 0.4; }
        i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.stroke();
      const ccx = w * 0.52, ccy = h * 0.52, cr = Math.min(w, h) * 0.3;
      ctx.beginPath(); ctx.arc(ccx, ccy, cr, 0, Math.PI * 2); ctx.stroke();
      const angs = [3.55, 4.3, 5.25, 0.25, 1.15];
      const tick = Math.min(w, h) * 0.09;
      for (let i = 0; i < 4; i++) {
        const a = angs[i];
        const px = ccx + Math.cos(a) * cr, py = ccy + Math.sin(a) * cr;
        const tx = Math.cos(a + Math.PI / 2), ty = Math.sin(a + Math.PI / 2);
        ctx.beginPath(); ctx.moveTo(px - tx * tick, py - ty * tick); ctx.lineTo(px + tx * tick, py + ty * tick); ctx.stroke();
        ctx.globalAlpha = 0.5;
        ctx.beginPath(); ctx.arc(px, py, 3, 0, Math.PI * 2); ctx.stroke();
        ctx.globalAlpha = 0.2;
      }
      const aH = angs[4];
      const hx = ccx + Math.cos(aH) * cr, hy = ccy + Math.sin(aH) * cr;
      const tx = Math.cos(aH + Math.PI / 2), ty = Math.sin(aH + Math.PI / 2);
      const L = Math.min(w, h) * 0.42;
      ctx.globalAlpha = 0.85; ctx.lineWidth = 1.4;
      ctx.beginPath(); ctx.moveTo(hx - tx * L, hy - ty * L); ctx.lineTo(hx + tx * L, hy + ty * L); ctx.stroke();
      ctx.beginPath(); ctx.arc(hx, hy, 2.2, 0, Math.PI * 2); ctx.fill();
    },
    replay(ctx, w, h, seed) {
      const steps = 6;
      const x0 = w * 0.1, y0 = h * 0.86, x1 = w * 0.92, y1 = h * 0.16;
      const dx = (x1 - x0) / steps, dy = (y0 - y1) / steps;
      ctx.globalAlpha = 0.2;
      ctx.beginPath();
      for (let i = 0; i <= 120; i++) {
        const t = i / 120;
        const x = x0 + (x1 - x0) * t;
        const y = y0 - (y0 - y1) * Math.pow(t, 0.72);
        i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.stroke();
      for (let i = 1; i < steps; i++) {
        ctx.beginPath(); ctx.moveTo(x0 + dx * i, y0 - dy * i); ctx.lineTo(x0 + dx * i, h * 0.92); ctx.stroke();
      }
      ctx.globalAlpha = 0.85; ctx.lineWidth = 1.4;
      ctx.beginPath(); ctx.moveTo(x0, y0);
      for (let i = 0; i < steps; i++) {
        ctx.lineTo(x0 + dx * (i + 1), y0 - dy * i);
        ctx.lineTo(x0 + dx * (i + 1), y0 - dy * (i + 1));
      }
      ctx.stroke();
    },
  };
  function mountPlate(wrap, plate, seed) {
    const canvas = document.createElement("canvas");
    canvas.style.display = "block";
    wrap.appendChild(canvas);
    const ctx = canvas.getContext("2d");
    const draw = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = wrap.clientWidth, h = wrap.clientHeight;
      canvas.width = Math.max(1, w * dpr); canvas.height = Math.max(1, h * dpr);
      canvas.style.width = w + "px"; canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const cs = getComputedStyle(wrap);
      const paper = cs.getPropertyValue("--ink-050").trim() || "#E4E8EB";
      const ink = cs.getPropertyValue("--ink-800").trim() || "#101C37";
      ctx.fillStyle = paper; ctx.fillRect(0, 0, w, h);
      ctx.strokeStyle = ink; ctx.fillStyle = ink;
      ctx.lineWidth = 0.75; ctx.lineJoin = "round"; ctx.lineCap = "round";
      (PLATES[plate] || PLATES.dispersion)(ctx, w, h, seed);
      ctx.globalAlpha = 1;
    };
    draw();
    new ResizeObserver(draw).observe(wrap);
  }

  /* ---------- charts (SVG, monochrome ordinal ramp + line-style encoding) ---------- */
  const D = window.FLEDGE_DATA;
  // colors are theme tokens (tokens.css) so charts flip with the theme toggle
  const SERIES_STYLE = {
    A: { color: "var(--chart-a)", width: 1.5, dash: "" },
    B: { color: "var(--chart-b)", width: 1.5, dash: "6 4" },
    C: { color: "var(--chart-c)", width: 2, dash: "" },
  };
  const worldSeries = (metric) => ["A", "B", "C"].map((w) => ({
    id: w,
    label: D.worlds[w].label,
    color: SERIES_STYLE[w].color,
    width: SERIES_STYLE[w].width,
    dash: SERIES_STYLE[w].dash,
    values: D.worlds[w][metric],
  }));
  const CHARTS = {
    acc: {
      series: () => worldSeries("acc"), yDomain: [0.5, 1.0], yTicks: [0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
      yLabel: "vote accuracy", fmt: (v) => v.toFixed(2),
      asym: [{ c: "var(--chart-a)", y: 1.0 }, { c: "var(--chart-b)", y: 0.7 }, { c: "var(--chart-c)", y: 0.6 }],
    },
    flip: {
      series: () => worldSeries("flip"), yDomain: [0, 0.5], yTicks: [0, 0.1, 0.2, 0.3, 0.4, 0.5],
      yLabel: "P(decision flips on rerun)", fmt: (v) => v.toFixed(2), topNote: "coin-flip rerun = 0.50",
    },
    pnl: {
      series: () => worldSeries("pnl"), yDomain: [-0.25, 0.5], yTicks: [-0.2, -0.1, 0, 0.1, 0.2, 0.3, 0.4, 0.5],
      yLabel: "expected P&L / decision", fmt: (v) => (v > 0 ? "+" : "") + v.toFixed(2), zeroLine: true,
      asym: [{ c: "var(--chart-b)", y: 0.1 }, { c: "var(--chart-c)", y: -0.2 }], endNote: { A: "→ +1.00" },
    },
    dpnl: {
      series: () => [
        { id: "total", label: "D · total", color: "var(--chart-c)", width: 2, dash: "", values: D.worlds.D.pnl },
        { id: "edge", label: "edge mass (p>½)", color: "var(--chart-a)", width: 1.5, dash: "", values: D.worlds.D.edge_pnl },
        { id: "drag", label: "drag mass (p≤½)", color: "var(--chart-b)", width: 1.5, dash: "6 4", values: D.worlds.D.drag_pnl },
      ],
      yDomain: [-0.9, 0.9], yTicks: [-0.8, -0.4, 0, 0.4, 0.8],
      yLabel: "expected P&L / decision", fmt: (v) => (v > 0 ? "+" : "") + v.toFixed(2), zeroLine: true,
      asym: [{ c: "var(--chart-a)", y: 0.8 }, { c: "var(--chart-c)", y: -0.03 }, { c: "var(--chart-b)", y: -0.83 }],
    },
  };
  const NS = "http://www.w3.org/2000/svg";
  function el(name, attrs, parent) {
    const e = document.createElementNS(NS, name);
    for (const k in attrs) e.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(e);
    return e;
  }
  function renderChart(wrap, key) {
    const cfg = CHARTS[key];
    const ks = D.ks;
    const series = cfg.series();
    const W = 700, H = 360, m = { t: 26, r: 118, b: 40, l: 50 };
    const pw = W - m.l - m.r, ph = H - m.t - m.b;
    const x = (k) => m.l + ((k - ks[0]) / (ks[ks.length - 1] - ks[0])) * pw;
    const y = (v) => m.t + (1 - (v - cfg.yDomain[0]) / (cfg.yDomain[1] - cfg.yDomain[0])) * ph;

    // legend (identity is never color-alone: color + line style + direct labels)
    const legend = document.createElement("div");
    legend.className = "chart-legend";
    series.forEach((s) => {
      const item = document.createElement("span");
      item.className = "item";
      item.style.color = s.color;
      const sw = document.createElement("span");
      sw.className = "swatch";
      sw.style.borderTop = s.width + "px " + (s.dash ? "dashed" : "solid") + " " + s.color;
      item.appendChild(sw);
      const label = document.createElement("span");
      label.textContent = s.label;
      label.style.color = "var(--text-secondary)";
      item.appendChild(label);
      legend.appendChild(item);
    });
    wrap.appendChild(legend);

    const svg = el("svg", { viewBox: `0 0 ${W} ${H}`, role: "img", "aria-label": cfg.yLabel + " against K" });
    wrap.appendChild(svg);

    // gridlines: hairline, solid, recessive
    cfg.yTicks.forEach((t) => {
      const strong = cfg.zeroLine && t === 0;
      el("line", { x1: m.l, x2: m.l + pw, y1: y(t), y2: y(t), class: strong ? "c-grid-strong" : "c-grid", "stroke-width": 1 }, svg);
      el("text", { x: m.l - 8, y: y(t) + 3.5, "text-anchor": "end", class: "c-tick", "font-size": 11, "font-family": "var(--font-mono)" }, svg).textContent = cfg.fmt(t);
    });
    const xTicks = [1, 9, 17, 25, 33, 41];
    xTicks.forEach((t) => {
      el("line", { x1: x(t), x2: x(t), y1: m.t + ph, y2: m.t + ph + 4, class: "c-grid-strong", "stroke-width": 1 }, svg);
      el("text", { x: x(t), y: m.t + ph + 18, "text-anchor": "middle", class: "c-tick", "font-size": 11, "font-family": "var(--font-mono)" }, svg).textContent = t;
    });
    el("text", { x: m.l + pw / 2, y: H - 4, "text-anchor": "middle", class: "c-axis", "font-size": 11, "font-family": "var(--font-mono)" }, svg).textContent = "K (samples per decision, majority vote)";
    el("text", { x: m.l, y: 12, "text-anchor": "start", class: "c-axis", "font-size": 11, "font-family": "var(--font-mono)" }, svg).textContent = cfg.yLabel;
    if (cfg.topNote) {
      el("text", { x: m.l + pw, y: y(0.5) - 5, "text-anchor": "end", class: "c-tick", "font-size": 10.5, "font-family": "var(--font-mono)" }, svg).textContent = cfg.topNote;
    }

    // asymptote reference marks (short solid ticks at the right edge)
    (cfg.asym || []).forEach((a) => {
      const ln = el("line", { x1: m.l + pw - 26, x2: m.l + pw, y1: y(a.y), y2: y(a.y), "stroke-width": 1, opacity: 0.55 }, svg);
      ln.style.stroke = a.c;
    });

    // series
    const labels = [];
    series.forEach((s) => {
      const vals = s.values;
      const pts = ks.map((k, i) => `${x(k).toFixed(1)},${y(vals[i]).toFixed(1)}`).join(" ");
      const attrs = { points: pts, fill: "none", "stroke-width": s.width, "stroke-linejoin": "round", "stroke-linecap": "round", opacity: s.faint ? 0.7 : 1 };
      if (s.dash) attrs["stroke-dasharray"] = s.dash;
      el("polyline", attrs, svg).style.stroke = s.color;
      const endNote = (cfg.endNote && cfg.endNote[s.id]) ? " " + cfg.endNote[s.id] : "";
      labels.push({ y: y(vals[vals.length - 1]), text: s.id + " " + cfg.fmt(vals[vals.length - 1]) + endNote, color: s.color, size: 11.5 });
    });
    (cfg.asym || []).forEach((a) => {
      labels.push({ y: y(a.y), text: "K→∞ " + cfg.fmt(a.y), color: a.c, size: 10, dim: true });
    });
    // right-edge label collision resolution: sort by y, enforce 14px gaps
    labels.sort((a, b) => a.y - b.y);
    for (let i = 1; i < labels.length; i++) {
      if (labels[i].y - labels[i - 1].y < 14) labels[i].y = labels[i - 1].y + 14;
    }
    labels.forEach((L) => {
      const t = el("text", { x: m.l + pw + 8, y: L.y + 3.5, "text-anchor": "start", opacity: L.dim ? 0.6 : 1, "font-size": L.size, "font-family": "var(--font-mono)" }, svg);
      t.style.fill = L.color;
      t.textContent = L.text;
    });

    // hover layer: crosshair + tooltip snapped to nearest K
    const cross = el("line", { x1: 0, x2: 0, y1: m.t, y2: m.t + ph, class: "c-cross", "stroke-width": 1, opacity: 0 }, svg);
    const dots = series.map((s) => {
      const d = el("circle", { r: 3.2, opacity: 0 }, svg);
      d.style.fill = s.color;
      return d;
    });
    const tip = document.createElement("div");
    tip.className = "chart-tip";
    wrap.appendChild(tip);
    const overlay = el("rect", { x: m.l, y: m.t, width: pw, height: ph, fill: "transparent" }, svg);
    const move = (clientX, clientY) => {
      const r = svg.getBoundingClientRect();
      const sx = ((clientX - r.left) / r.width) * W;
      const kf = ks[0] + ((sx - m.l) / pw) * (ks[ks.length - 1] - ks[0]);
      let idx = 0, best = 1e9;
      ks.forEach((k, i) => { const d = Math.abs(k - kf); if (d < best) { best = d; idx = i; } });
      const k = ks[idx];
      cross.setAttribute("x1", x(k)); cross.setAttribute("x2", x(k));
      cross.setAttribute("opacity", 0.7);
      let html = `<div class="k">K = ${k}</div>`;
      series.forEach((s, i) => {
        const v = s.values[idx];
        dots[i].setAttribute("cx", x(k)); dots[i].setAttribute("cy", y(v)); dots[i].setAttribute("opacity", 1);
        html += `<div class="row"><span style="color:${s.color}">${s.id}</span><span class="v">${cfg.fmt(v)}</span></div>`;
      });
      tip.innerHTML = html;
      tip.style.display = "block";
      const wr = wrap.getBoundingClientRect();
      let left = clientX - wr.left + 14;
      if (left + 170 > wr.width) left = clientX - wr.left - 180;
      tip.style.left = left + "px";
      tip.style.top = Math.max(0, clientY - wr.top - 40) + "px";
    };
    const hide = () => {
      cross.setAttribute("opacity", 0);
      dots.forEach((d) => d.setAttribute("opacity", 0));
      tip.style.display = "none";
    };
    overlay.addEventListener("mousemove", (e) => move(e.clientX, e.clientY));
    overlay.addEventListener("mouseleave", hide);
    overlay.addEventListener("touchstart", (e) => { if (e.touches[0]) move(e.touches[0].clientX, e.touches[0].clientY); }, { passive: true });
    overlay.addEventListener("touchmove", (e) => { if (e.touches[0]) move(e.touches[0].clientX, e.touches[0].clientY); }, { passive: true });
    overlay.addEventListener("touchend", hide);
  }
  function renderDataTable(holder, key) {
    const cfg = CHARTS[key];
    const series = cfg.series();
    let rows = "";
    D.ks.forEach((k, i) => {
      rows += `<tr><td>K = ${k}</td>` + series.map((s) => `<td>${cfg.fmt(s.values[i])}</td>`).join("") + "</tr>";
    });
    holder.innerHTML = `<details><summary>view the data</summary><div class="scroll"><table>
<thead><tr><th>K</th>${series.map((s) => `<th>${s.label}</th>`).join("")}</tr></thead>
<tbody>${rows}</tbody></table></div></details>`;
  }

  /* ---------- shared page chrome ---------- */
  function plateFrame(cls, plate, seed) {
    return `<div class="${cls}" data-plate="${plate}" data-seed="${seed}" aria-hidden="true"></div>`;
  }
  const EMAIL_HTML = `<a href="mailto:hello@fledgequant.example">hello@[domain]</a>`;

  /* ---------- pages ---------- */
  const PILLARS = [
    { plate: "calibration", seed: 5, title: "Benchmark the trading domain", summary: "Handing a model a market and reading the PnL is not evaluation. We score what a desk must trust: risk awareness, summary fidelity, real sources, reasoning that traces to the data given, rankings that survive three runs. Open first; graded datasets follow.", tag: "01 · evaluation as a rating layer" },
    { plate: "ascent", seed: 2, title: "Post-train specialist agents", summary: "The benchmark shows where general models fail; post-training builds narrow agents that pass — a momentum-factor agent, a news-sentiment agent — each admitted to the matrix only by the evaluation that exposed the gap.", tag: "02 · post-training · agent matrix" },
    { plate: "tangency", seed: 8, title: "Validate live", summary: "An agent matrix that scores well is still a claim. We run it on the lab's own small capital as the evidence engine for AI-native trading — no outside money, no signals for sale, no performance claims.", tag: "03 · live capital · evidence engine" },
  ];
  const PROBLEMS = [
    "How much of selection instability is reducible by post-training, and how much is a property of sampling itself?",
    "What is the right unit of credit when a decision is correct and the reasoning that produced it is not?",
    "Can an agent's memory be audited well enough that what it learned stays separable from what it was told?",
    "How long a forward window is needed before an abstention can be scored as a decision rather than as missing data?",
  ];

  function homePage() {
    return `
<div class="hero">
  <div class="field" data-field='{"paths":68,"seed":11}' aria-hidden="true"></div>
  <div class="container">
    <div class="inner">
      <h1 class="display-1">The proving ground for machine reasoning.</h1>
      <div class="sub">
        <p class="lead">Engineered for decisions under stochastic reward.</p>
        <p class="mono-tags"><span>context</span><span>|</span><span>post-training</span><span>|</span><span>memory</span><span>|</span><span>agency</span></p>
      </div>
      <div><a class="btn" href="#research">Read our research <span class="arrow">→</span></a></div>
    </div>
  </div>
</div>
<div class="container">
  <section class="section" id="pillars">
    <div class="section-head">
      <div class="eyebrow">The lab's arc</div>
      <h2 class="display-2">Benchmark. Build. Prove.</h2>
      <p class="lead">Three steps, in order. Each one earns the next.</p>
    </div>
    <div class="card-grid">
      ${PILLARS.map((p, i) => `
      <article class="pillar reveal" data-reveal="${i}">
        ${plateFrame("plate-frame", p.plate, p.seed)}
        <h3 class="card-title">${p.title}</h3>
        <p class="card-summary">${p.summary}</p>
        <p class="card-tag">${p.tag}</p>
      </article>`).join("")}
    </div>
  </section>
  <section class="section-tight">
    <figure class="pullquote">
      <blockquote>A system that declines has answered.</blockquote>
      <figcaption>Methodology note, in preparation</figcaption>
    </figure>
  </section>
</div>`;
  }

  let researchView = "grid";
  function researchPage() {
    const grid = researchView === "grid";
    const cards = ARTICLES.map((a) => `
      <a class="article-card" href="#article/${a.id}">
        ${plateFrame("plate-frame", a.plate, a.seed)}
        <h3 class="card-title">${a.title}</h3>
        <p class="card-summary">${a.summary}</p>
        <p class="card-tag">${a.status}</p>
      </a>`).join("");
    const rows = ARTICLES.map((a, i) => `
      <a class="list-row" href="#article/${a.id}">
        <span class="num">${String(i + 1).padStart(2, "0")}</span>
        <span style="display:flex;flex-direction:column;gap:var(--space-3)">
          <span class="t">${a.title}</span>
          <span class="s">${a.summary}</span>
        </span>
        <span class="st">${a.status}</span>
      </a>`).join("");
    return `
<div class="container">
  <section class="section-tight">
    <div class="page-head">
      <div class="section-head">
        <h1 class="display-2" style="max-width:none">Research</h1>
        <p class="lead">Open problems we are working on, and what we have written about them.</p>
      </div>
      <div class="view-toggle" role="group" aria-label="view">
        <button data-view="grid" class="${grid ? "active" : ""}">grid</button>
        <span class="sep">|</span>
        <button data-view="list" class="${grid ? "" : "active"}">list</button>
      </div>
    </div>
  </section>
  ${grid
    ? `<section class="card-grid" style="padding-top:var(--space-12);margin-top:0">${cards}</section>`
    : `<section style="padding-top:var(--space-8)">${rows}</section>`}
  <section class="section" id="open-problems">
    <div class="section-head">
      <div class="eyebrow">Open problems</div>
      <h2 class="display-2">Questions we cannot answer yet</h2>
      <p class="lead">Stated plainly, so that a result would settle them.</p>
    </div>
    <div style="margin-top:var(--space-10);border-top:1px solid var(--line-hairline)">
      ${PROBLEMS.map((p, i) => `
      <div class="problem-row">
        <span class="num">${String(i + 1).padStart(2, "0")}</span>
        <p>${p}</p>
      </div>`).join("")}
    </div>
  </section>
</div>`;
  }

  function aboutPage() {
    return `
<div class="container">
  <section class="section-tight">
    <div class="section-head">
      <div class="eyebrow">About</div>
      <h1 class="display-2">An independent lab, <em style="font-style:italic;font-weight:300">not a firm</em></h1>
    </div>
    <div class="about-grid">
      <div style="display:flex;flex-direction:column;gap:var(--space-6)">
        <p class="lead" style="color:var(--text-body);line-height:var(--leading-body);max-width:none">Built by a two-person team with backgrounds in systematic trading and large-scale AI engineering.</p>
        <p style="font-size:var(--size-body-sm);color:var(--text-secondary)">Fledge Trading Lab studies how LLM agents make consequential decisions under uncertainty. Live financial markets are the testbed because they supply small samples, noisy rewards, and outcomes that arrive late. When the lab does trade, it trades only its own small capital, as evidence.</p>
        <hr class="rule">
        <p style="font-size:var(--size-body-sm);color:var(--text-muted)">We are a research lab, not a financial services company. We manage no outside money, sell no signals, and make no performance claims.</p>
        <p style="font-size:var(--size-body-sm);color:var(--text-muted)">Collaborations and questions: ${EMAIL_HTML}</p>
      </div>
      <div class="about-card">
        <div data-field='{"paths":26,"seed":19}' style="height:150px" aria-hidden="true"></div>
        <div class="about-stats">
          <div class="monostat"><span class="label">Founded</span><span class="value">2026</span></div>
          <div class="monostat"><span class="label">People</span><span class="value">2</span></div>
          <div class="monostat"><span class="label">Open roles</span><span class="value">—</span><span class="note">none yet</span></div>
        </div>
      </div>
    </div>
  </section>
  <section class="section-tight">
    <figure class="pullquote">
      <blockquote>We study when they should be trusted to make one.</blockquote>
      <figcaption>Fledge Trading Lab</figcaption>
    </figure>
  </section>
</div>`;
  }

  function articlePage(a) {
    const body = a.bodyHtml
      ? a.bodyHtml
      : a.body.map((p) => `<p>${p}</p>`).join("");
    return `
<div class="container">
  <section class="section-tight article-col">
    <a class="backlink" href="#research">← research</a>
    <h1 class="article-title">${a.title}</h1>
    <p class="article-meta">${a.meta} · ${a.status}</p>
    ${plateFrame("article-hero", a.plate, a.seed)}
    <p class="article-lead">${a.summary}</p>
    <div class="article-body">${body}</div>
    <p class="article-footer">Write to us at ${EMAIL_HTML}.</p>
  </section>
</div>`;
  }

  /* ---------- router ---------- */
  const root = document.getElementById("main-root");
  function route() {
    const h = (location.hash || "#home").replace(/^#\/?/, "");
    if (h.startsWith("article/")) {
      const a = ARTICLES.find((x) => x.id === h.slice(8));
      return a ? { page: "article", article: a } : { page: "research" };
    }
    if (h === "research" || h === "open-problems") return { page: "research", anchor: h === "open-problems" ? "open-problems" : null };
    if (h === "about") return { page: "about" };
    return { page: "home" };
  }
  function setNav(page) {
    document.querySelectorAll(".site-nav a").forEach((a) => {
      const r = a.getAttribute("data-route");
      const active = (r === "research" && (page === "research" || page === "article")) || r === page;
      a.classList.toggle("active", active);
    });
  }
  function mountDynamic() {
    root.querySelectorAll("[data-plate]").forEach((n) => mountPlate(n, n.dataset.plate, Number(n.dataset.seed)));
    root.querySelectorAll("[data-field]").forEach((n) => {
      const o = JSON.parse(n.dataset.field);
      if (!n.style.height && !n.classList.contains("field")) n.style.height = "150px";
      mountTrajectoryField(n, o);
    });
    root.querySelectorAll("[data-chart]").forEach((n) => renderChart(n, n.dataset.chart));
    root.querySelectorAll("[data-table]").forEach((n) => renderDataTable(n, n.dataset.table));
    // reveal-on-scroll for home pillar cards
    const cards = Array.from(root.querySelectorAll("[data-reveal]"));
    if (cards.length) {
      if (REDUCED || !("IntersectionObserver" in window)) {
        cards.forEach((c) => c.classList.add("on"));
      } else {
        const failsafe = setTimeout(() => cards.forEach((c) => c.classList.add("on")), 2500);
        const io = new IntersectionObserver((entries) => {
          entries.forEach((e) => {
            if (!e.isIntersecting) return;
            io.unobserve(e.target);
            const i = cards.indexOf(e.target);
            setTimeout(() => e.target.classList.add("on"), Math.max(0, i) * 120);
          });
          clearTimeout(failsafe);
        }, { threshold: 0.15 });
        cards.forEach((c) => io.observe(c));
      }
    }
    // research view toggle
    root.querySelectorAll(".view-toggle button").forEach((b) => {
      b.addEventListener("click", () => { researchView = b.dataset.view; render(); });
    });
  }
  function render() {
    const r = route();
    REDRAWS.length = 0; // drop repaint hooks from the previous page
    setNav(r.page);
    root.innerHTML =
      r.page === "home" ? homePage()
      : r.page === "research" ? researchPage()
      : r.page === "about" ? aboutPage()
      : articlePage(r.article);
    document.title = r.page === "article" ? r.article.title + " — Fledge Trading Lab" : "Fledge Trading Lab";
    mountDynamic();
    if (r.anchor) {
      requestAnimationFrame(() => {
        const el2 = document.getElementById(r.anchor);
        if (el2) window.scrollTo({ top: el2.offsetTop - 72, behavior: REDUCED ? "auto" : "smooth" });
      });
    } else {
      window.scrollTo({ top: 0 });
    }
  }
  /* ---------- theme toggle (footer; default dark, persisted) ---------- */
  const toggleButtons = Array.from(document.querySelectorAll("[data-theme-set]"));
  function applyTheme(t) {
    document.documentElement.setAttribute("data-theme", t);
    try { localStorage.setItem("fledge-theme", t); } catch (e) { /* private mode */ }
    toggleButtons.forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.themeSet === t)));
    REDRAWS.forEach((fn) => fn());
  }
  toggleButtons.forEach((b) => b.addEventListener("click", () => applyTheme(b.dataset.themeSet)));
  toggleButtons.forEach((b) => b.setAttribute("aria-pressed", String((isDark() ? "dark" : "light") === b.dataset.themeSet)));

  window.addEventListener("hashchange", render);
  render();
})();
