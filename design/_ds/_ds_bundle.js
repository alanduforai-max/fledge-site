/* @ds-bundle: {"format":4,"namespace":"FledgeQuantLabDesignSystem_32a2bf","components":[{"name":"TrajectoryField","sourcePath":"components/brand/TrajectoryField.jsx"},{"name":"PrincipleItem","sourcePath":"components/content/PrincipleItem.jsx"},{"name":"PublicationItem","sourcePath":"components/content/PublicationItem.jsx"},{"name":"PullQuote","sourcePath":"components/content/PullQuote.jsx"},{"name":"ResearchCard","sourcePath":"components/content/ResearchCard.jsx"},{"name":"SectionHeading","sourcePath":"components/content/SectionHeading.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"Rule","sourcePath":"components/core/Rule.jsx"},{"name":"TextLink","sourcePath":"components/core/TextLink.jsx"},{"name":"ThemeToggle","sourcePath":"components/core/ThemeToggle.jsx"},{"name":"Wordmark","sourcePath":"components/core/Wordmark.jsx"},{"name":"EmptyState","sourcePath":"components/data/EmptyState.jsx"},{"name":"LeaderboardTable","sourcePath":"components/data/LeaderboardTable.jsx"},{"name":"MonoStat","sourcePath":"components/data/MonoStat.jsx"},{"name":"StatusTag","sourcePath":"components/data/StatusTag.jsx"},{"name":"FieldSelect","sourcePath":"components/nav/FieldSelect.jsx"},{"name":"Tabs","sourcePath":"components/nav/Tabs.jsx"}],"sourceHashes":{"components/brand/TrajectoryField.jsx":"98aa66b2e07b","components/content/PrincipleItem.jsx":"4941ebca68bf","components/content/PublicationItem.jsx":"a453b0e3e6d9","components/content/PullQuote.jsx":"ffd2c6f8ede4","components/content/ResearchCard.jsx":"5129522843c2","components/content/SectionHeading.jsx":"c6b85398cf82","components/core/Button.jsx":"b523df10ec8a","components/core/Eyebrow.jsx":"c767386a5829","components/core/Rule.jsx":"0d443cbd5585","components/core/TextLink.jsx":"ee1d2364ef46","components/core/ThemeToggle.jsx":"78ba96a3645d","components/core/Wordmark.jsx":"f0763881c42a","components/data/EmptyState.jsx":"8e5b4928ab07","components/data/LeaderboardTable.jsx":"71b7fc15869d","components/data/MonoStat.jsx":"2cb8040f496c","components/data/StatusTag.jsx":"73e3493f6855","components/nav/FieldSelect.jsx":"fb4c51ae854f","components/nav/Tabs.jsx":"ad5bc9f91bc0","ui_kits/website/AboutScreen.jsx":"adc8ed686aff","ui_kits/website/BenchmarkScreen.jsx":"4fb4da77fca9","ui_kits/website/HomeScreen.jsx":"61e03083435f","ui_kits/website/SiteChrome.jsx":"cd92162eb006","ui_kits/website/WritingScreen.jsx":"e2b36d0efe25"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.FledgeQuantLabDesignSystem_32a2bf = window.FledgeQuantLabDesignSystem_32a2bf || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/TrajectoryField.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The sampling lottery, drawn.
   One origin. N sampled trajectories. Shared drift (the directional judgment is
   stable) and independent noise (the selections are not). One path is inked in
   ochre to stand for the single sample a system would actually have shipped.
   Slow, faint, and completely still under prefers-reduced-motion. */

function mulberry32(a) {
  return function () {
    a |= 0;
    a = a + 0x6D2B79F5 | 0;
    let t = Math.imul(a ^ a >>> 15, 1 | a);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}
function TrajectoryField({
  paths = 56,
  steps = 90,
  drift = 0.62,
  volatility = 1,
  seed = 7,
  highlight = true,
  speed = 1,
  origin = "left",
  style,
  ...rest
}) {
  const canvasRef = React.useRef(null);
  const wrapRef = React.useRef(null);
  React.useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;
    const ctx = canvas.getContext("2d");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // pre-compute the walks once; animation only reveals them
    const rnd = mulberry32(seed);
    const series = [];
    for (let p = 0; p < paths; p++) {
      const pts = [0];
      const localDrift = drift * (0.55 + rnd() * 0.9);
      let v = 0;
      for (let s = 1; s <= steps; s++) {
        v += localDrift + (rnd() - 0.5) * 6 * volatility;
        pts.push(v);
      }
      series.push(pts);
    }
    const all = series.flat();
    const lo = Math.min(...all),
      hi = Math.max(...all);
    const span = hi - lo || 1;
    let raf,
      start = null,
      w = 0,
      h = 0,
      dpr = 1;
    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = wrap.clientWidth;
      h = wrap.clientHeight;
      canvas.width = Math.max(1, w * dpr);
      canvas.height = Math.max(1, h * dpr);
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    const styleOf = (el, prop) => getComputedStyle(el).getPropertyValue(prop).trim();
    const draw = progress => {
      const faint = styleOf(wrap, "--line-rule") || "#CFCABA";
      const ink = styleOf(wrap, "--accent") || "#9A6510";
      ctx.clearRect(0, 0, w, h);
      const padY = h * 0.12;
      const x0 = origin === "left" ? w * 0.04 : w * 0.5;
      const x1 = w * 0.98;
      const yAt = v => h - padY - (v - lo) / span * (h - padY * 2);
      const upto = Math.max(1, Math.floor(steps * progress));
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      for (let p = 0; p < series.length; p++) {
        const isHi = highlight && p === Math.floor(series.length * 0.41);
        ctx.beginPath();
        for (let s = 0; s <= upto; s++) {
          const x = x0 + (x1 - x0) * s / steps;
          const y = yAt(series[p][s]);
          s === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        ctx.strokeStyle = isHi ? ink : faint;
        ctx.globalAlpha = isHi ? 0.95 : 0.26;
        ctx.lineWidth = isHi ? 1.4 : 0.75;
        ctx.stroke();
      }
      // the origin
      ctx.globalAlpha = 1;
      ctx.beginPath();
      ctx.arc(x0, yAt(0), 2.2, 0, Math.PI * 2);
      ctx.fillStyle = ink;
      ctx.fill();
    };
    const loop = t => {
      if (start == null) start = t;
      const period = 14000 / Math.max(speed, 0.05);
      const cycle = (t - start) % period / period;
      const progress = cycle < 0.72 ? cycle / 0.72 : 1;
      draw(progress);
      raf = requestAnimationFrame(loop);
    };
    resize();
    if (reduced) {
      draw(1);
    } else {
      raf = requestAnimationFrame(loop);
    }
    const ro = new ResizeObserver(() => {
      resize();
      if (reduced) draw(1);
    });
    ro.observe(wrap);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [paths, steps, drift, volatility, seed, highlight, speed, origin]);
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: wrapRef,
    "aria-hidden": "true",
    style: {
      position: "relative",
      width: "100%",
      height: 320,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("canvas", {
    ref: canvasRef,
    style: {
      display: "block"
    }
  }));
}
Object.assign(__ds_scope, { TrajectoryField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/TrajectoryField.jsx", error: String((e && e.message) || e) }); }

// components/content/PrincipleItem.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function PrincipleItem({
  index,
  term,
  body,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "grid",
      gridTemplateColumns: "auto 1fr",
      gap: "var(--space-6)",
      paddingTop: "var(--space-6)",
      paddingBottom: "var(--space-8)",
      borderTop: "1px solid var(--line-hairline)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--size-mono-sm)",
      letterSpacing: "var(--track-mono)",
      color: "var(--text-faint)",
      paddingTop: "0.45em"
    }
  }, String(index).padStart(2, "0")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--size-display-4)",
      fontWeight: "var(--weight-display)",
      letterSpacing: "var(--track-title)",
      color: "var(--text-display)",
      margin: 0
    }
  }, term), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--size-body-sm)",
      lineHeight: "var(--leading-body)",
      color: "var(--text-secondary)",
      maxWidth: "56ch",
      margin: 0
    }
  }, body)));
}
Object.assign(__ds_scope, { PrincipleItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/PrincipleItem.jsx", error: String((e && e.message) || e) }); }

// components/content/PullQuote.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function PullQuote({
  children,
  cite,
  size = "lg",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("figure", _extends({
    style: {
      margin: 0,
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-6)",
      borderLeft: "1.5px solid var(--line-accent)",
      paddingLeft: "var(--space-8)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: "var(--weight-display-light)",
      fontSize: size === "lg" ? "var(--size-display-3)" : "var(--size-display-4)",
      lineHeight: 1.3,
      letterSpacing: "var(--track-title)",
      color: "var(--text-display)",
      maxWidth: "34ch"
    }
  }, children), cite && /*#__PURE__*/React.createElement("figcaption", {
    style: {
      fontFamily: "var(--font-text)",
      fontSize: "var(--size-label)",
      fontWeight: "var(--weight-medium)",
      letterSpacing: "var(--track-label)",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, cite));
}
Object.assign(__ds_scope, { PullQuote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/PullQuote.jsx", error: String((e && e.message) || e) }); }

// components/content/ResearchCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ResearchCard({
  index,
  title,
  summary,
  tags = [],
  href,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const Tag = href ? "a" : "div";
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-5)",
      padding: "var(--space-8) var(--space-8) var(--space-10)",
      background: "var(--surface-card)",
      border: "1px solid var(--line-hairline)",
      borderTop: `var(--border-strong) solid ${hover && href ? "var(--line-accent)" : "var(--line-strong)"}`,
      borderRadius: "var(--radius-1)",
      color: "inherit",
      textDecoration: "none",
      transition: "border-color var(--dur-base) var(--ease-standard), background-color var(--dur-base) var(--ease-standard)",
      ...style
    }
  }, rest), index != null && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--size-mono-sm)",
      letterSpacing: "var(--track-mono)",
      color: "var(--text-faint)"
    }
  }, String(index).padStart(2, "0")), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--size-display-3)",
      fontWeight: "var(--weight-display)",
      lineHeight: "var(--leading-title)",
      letterSpacing: "var(--track-title)",
      color: "var(--text-display)",
      margin: 0
    }
  }, title), summary && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--size-body-sm)",
      lineHeight: "var(--leading-body)",
      color: "var(--text-secondary)",
      margin: 0
    }
  }, summary), children, tags.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "var(--space-2) var(--space-4)",
      marginTop: "auto",
      paddingTop: "var(--space-4)"
    }
  }, tags.map(t => /*#__PURE__*/React.createElement("span", {
    key: t,
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--size-mono-sm)",
      letterSpacing: "var(--track-mono)",
      color: "var(--text-faint)"
    }
  }, t))));
}
Object.assign(__ds_scope, { ResearchCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ResearchCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const base = {
  fontFamily: "var(--font-text)",
  fontWeight: "var(--weight-medium)",
  letterSpacing: "0.005em",
  lineHeight: 1,
  display: "inline-flex",
  alignItems: "center",
  gap: "var(--space-3)",
  borderRadius: "var(--radius-1)",
  border: "1px solid transparent",
  cursor: "pointer",
  textDecoration: "none",
  transition: "background-color var(--dur-fast) var(--ease-standard), color var(--dur-fast) var(--ease-standard), border-color var(--dur-fast) var(--ease-standard), opacity var(--dur-fast) var(--ease-standard)"
};
const sizes = {
  sm: {
    fontSize: "var(--size-caption)",
    padding: "8px 14px"
  },
  md: {
    fontSize: "var(--size-body-sm)",
    padding: "12px 20px"
  },
  lg: {
    fontSize: "var(--size-body)",
    padding: "15px 26px"
  }
};
const variants = {
  solid: {
    background: "var(--text-display)",
    color: "var(--bg-page)",
    borderColor: "var(--text-display)"
  },
  outline: {
    background: "transparent",
    color: "var(--text-display)",
    borderColor: "var(--line-rule)"
  },
  accent: {
    background: "var(--accent)",
    color: "var(--text-on-accent)",
    borderColor: "var(--accent)"
  },
  quiet: {
    background: "transparent",
    color: "var(--text-body)",
    borderColor: "transparent",
    padding: "12px 0"
  }
};
function Button({
  children,
  variant = "outline",
  size = "md",
  href,
  arrow = false,
  disabled = false,
  fullWidth = false,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const Tag = href && !disabled ? "a" : "button";
  const hoverStyle = !hover || disabled ? null : variant === "solid" ? {
    background: "var(--ink-700)",
    borderColor: "var(--ink-700)"
  } : variant === "accent" ? {
    background: "var(--accent-hover)",
    borderColor: "var(--accent-hover)"
  } : variant === "outline" ? {
    borderColor: "var(--line-strong)",
    color: "var(--text-display)"
  } : {
    color: "var(--text-accent)"
  };
  const s = {
    ...base,
    ...sizes[size],
    ...variants[variant],
    ...(hoverStyle || {}),
    ...(press && !disabled ? {
      opacity: 0.86
    } : null),
    ...(fullWidth ? {
      width: "100%",
      justifyContent: "center"
    } : null),
    ...(disabled ? {
      opacity: 0.4,
      cursor: "not-allowed"
    } : null),
    ...style
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    disabled: Tag === "button" ? disabled : undefined,
    "aria-disabled": disabled || undefined,
    style: s,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false)
  }, rest), /*#__PURE__*/React.createElement("span", null, children), arrow && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      fontFamily: "var(--font-mono)",
      transform: hover && !disabled ? "translateX(3px)" : "translateX(0)",
      transition: "transform var(--dur-base) var(--ease-out-quiet)"
    }
  }, "\u2192"));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Eyebrow({
  children,
  index,
  tone = "muted",
  style,
  ...rest
}) {
  const color = tone === "accent" ? "var(--text-accent)" : tone === "strong" ? "var(--text-body)" : "var(--text-muted)";
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: "var(--space-3)",
      fontFamily: "var(--font-text)",
      fontSize: "var(--size-label)",
      fontWeight: "var(--weight-medium)",
      letterSpacing: "var(--track-label)",
      textTransform: "uppercase",
      color,
      ...style
    }
  }, rest), index != null && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      letterSpacing: "var(--track-mono)",
      color: "var(--text-faint)"
    }
  }, String(index).padStart(2, "0")), /*#__PURE__*/React.createElement("span", null, children));
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/content/SectionHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SectionHeading({
  eyebrow,
  index,
  title,
  note,
  level = 2,
  align = "left",
  style,
  ...rest
}) {
  const Tag = "h" + level;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-5)",
      alignItems: align === "center" ? "center" : "flex-start",
      textAlign: align,
      ...style
    }
  }, rest), eyebrow && /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    index: index
  }, eyebrow), /*#__PURE__*/React.createElement(Tag, {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--weight-display)",
      fontSize: "var(--size-display-2)",
      lineHeight: "var(--leading-title)",
      letterSpacing: "var(--track-title)",
      color: "var(--text-display)",
      maxWidth: "var(--measure-display)",
      margin: 0
    }
  }, title), note && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--size-lead)",
      lineHeight: "var(--leading-snug)",
      color: "var(--text-secondary)",
      maxWidth: "var(--measure-lead)",
      margin: 0
    }
  }, note));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/core/Rule.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Rule({
  weight = "hair",
  tone = "hairline",
  inset = 0,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("hr", _extends({
    style: {
      border: 0,
      borderTop: `${weight === "strong" ? "var(--border-strong)" : "var(--border-hair)"} solid`,
      borderTopColor: tone === "strong" ? "var(--line-strong)" : tone === "accent" ? "var(--line-accent)" : tone === "rule" ? "var(--line-rule)" : "var(--line-hairline)",
      margin: 0,
      marginLeft: inset,
      marginRight: inset,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Rule });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Rule.jsx", error: String((e && e.message) || e) }); }

// components/core/TextLink.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function TextLink({
  children,
  href = "#",
  external = false,
  muted = false,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    target: external ? "_blank" : undefined,
    rel: external ? "noreferrer" : undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      color: muted ? "var(--text-secondary)" : "var(--text-accent)",
      textDecoration: "none",
      borderBottom: "1px solid",
      borderBottomColor: hover ? muted ? "var(--line-rule)" : "var(--text-accent)" : muted ? "var(--line-hairline)" : "color-mix(in oklab, var(--text-accent) 35%, transparent)",
      paddingBottom: "1px",
      transition: "border-color var(--dur-fast) var(--ease-standard), color var(--dur-fast) var(--ease-standard)",
      ...style
    }
  }, rest), children, external && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "0.85em",
      marginLeft: "3px"
    }
  }, "\u2197"));
}
Object.assign(__ds_scope, { TextLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/TextLink.jsx", error: String((e && e.message) || e) }); }

// components/core/ThemeToggle.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ThemeToggle({
  target,
  style,
  ...rest
}) {
  const [theme, setTheme] = React.useState("light");
  React.useEffect(() => {
    const root = target && target.current || document.documentElement;
    const current = root.getAttribute("data-theme");
    if (current) setTheme(current);
  }, [target]);
  const apply = next => {
    const root = target && target.current || document.documentElement;
    root.setAttribute("data-theme", next);
    setTheme(next);
  };
  const [hover, setHover] = React.useState(null);
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "group",
    "aria-label": "Colour theme",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-2)",
      ...style
    }
  }, rest), ["light", "dark"].map(t => {
    const on = theme === t;
    return /*#__PURE__*/React.createElement("button", {
      key: t,
      onClick: () => apply(t),
      onMouseEnter: () => setHover(t),
      onMouseLeave: () => setHover(null),
      "aria-pressed": on,
      style: {
        background: "none",
        border: 0,
        padding: 0,
        cursor: "pointer",
        fontFamily: "var(--font-text)",
        fontSize: "var(--size-label)",
        fontWeight: "var(--weight-medium)",
        letterSpacing: "var(--track-label)",
        textTransform: "uppercase",
        color: on ? "var(--text-display)" : hover === t ? "var(--text-secondary)" : "var(--text-faint)",
        transition: "color var(--dur-fast) var(--ease-standard)"
      }
    }, t);
  }));
}
Object.assign(__ds_scope, { ThemeToggle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ThemeToggle.jsx", error: String((e && e.message) || e) }); }

// components/core/Wordmark.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* No logo file was supplied with the brief. The mark IS the typography:
   "Fledge" in Spectral roman, "Quant Lab" in Spectral italic, one hairline
   between them. Never substitute a drawn symbol. */
function Wordmark({
  size = 20,
  lockup = "full",
  tone = "display",
  href,
  style,
  ...rest
}) {
  const color = tone === "inverse" ? "var(--text-inverse)" : tone === "accent" ? "var(--text-accent)" : "var(--text-display)";
  const Tag = href ? "a" : "span";
  const content = /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "baseline",
      gap: `${Math.round(size * 0.34)}px`,
      whiteSpace: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500,
      letterSpacing: "-0.02em"
    }
  }, "Fledge"), lockup === "full" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: "inline-block",
      width: "1px",
      alignSelf: "stretch",
      background: "currentColor",
      opacity: 0.28,
      transform: "translateY(0.12em)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "italic",
      fontWeight: 300,
      letterSpacing: "-0.005em",
      opacity: 0.9
    }
  }, "Quant Lab")));
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    "aria-label": "Fledge Quant Lab",
    style: {
      fontFamily: "var(--font-display)",
      fontSize: size,
      lineHeight: 1,
      color,
      textDecoration: "none",
      border: 0,
      display: "inline-flex",
      ...style
    }
  }, rest), content);
}
Object.assign(__ds_scope, { Wordmark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Wordmark.jsx", error: String((e && e.message) || e) }); }

// components/data/EmptyState.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function EmptyState({
  title,
  body,
  meta,
  action,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)",
      padding: "var(--space-12) var(--space-8)",
      border: "1px dashed var(--line-rule)",
      borderRadius: "var(--radius-1)",
      background: "var(--surface-inset)",
      alignItems: "flex-start",
      ...style
    }
  }, rest), meta && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--size-mono-sm)",
      letterSpacing: "var(--track-mono)",
      color: "var(--text-faint)"
    }
  }, meta), /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--size-display-4)",
      fontWeight: "var(--weight-display)",
      letterSpacing: "var(--track-title)",
      color: "var(--text-display)",
      margin: 0
    }
  }, title), body && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--size-body-sm)",
      lineHeight: "var(--leading-body)",
      color: "var(--text-secondary)",
      maxWidth: "52ch",
      margin: 0
    }
  }, body), action && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-2)"
    }
  }, action));
}
Object.assign(__ds_scope, { EmptyState });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/EmptyState.jsx", error: String((e && e.message) || e) }); }

// components/data/MonoStat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function MonoStat({
  label,
  value,
  unit,
  note,
  align = "left",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)",
      textAlign: align,
      alignItems: align === "right" ? "flex-end" : "flex-start",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-text)",
      fontSize: "var(--size-label)",
      fontWeight: "var(--weight-medium)",
      letterSpacing: "var(--track-label)",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: "var(--space-2)",
      fontFamily: "var(--font-mono)",
      fontVariantNumeric: "tabular-nums",
      fontSize: "1.5rem",
      color: "var(--text-display)",
      letterSpacing: "-0.01em"
    }
  }, value, unit && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--size-mono)",
      color: "var(--text-muted)"
    }
  }, unit)), note && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--size-caption)",
      color: "var(--text-faint)"
    }
  }, note));
}
Object.assign(__ds_scope, { MonoStat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/MonoStat.jsx", error: String((e && e.message) || e) }); }

// components/data/StatusTag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const MAP = {
  open: {
    label: "open",
    color: "var(--state-open)",
    dot: true
  },
  wait: {
    label: "default-wait",
    color: "var(--state-wait)",
    dot: true
  },
  sealed: {
    label: "sealed",
    color: "var(--state-sealed)",
    dot: true
  },
  preparation: {
    label: "in preparation",
    color: "var(--text-muted)",
    dot: false
  },
  review: {
    label: "under review",
    color: "var(--text-muted)",
    dot: false
  },
  published: {
    label: "published",
    color: "var(--text-body)",
    dot: false
  },
  soon: {
    label: "coming soon",
    color: "var(--text-accent)",
    dot: false
  },
  empty: {
    label: "no entries",
    color: "var(--state-void)",
    dot: false
  }
};
function StatusTag({
  status = "open",
  label,
  style,
  ...rest
}) {
  const cfg = MAP[status] || MAP.open;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-2)",
      fontFamily: "var(--font-mono)",
      fontSize: "var(--size-mono-sm)",
      letterSpacing: "0.06em",
      textTransform: "lowercase",
      color: cfg.color,
      border: "1px solid currentColor",
      borderRadius: "var(--radius-1)",
      padding: "3px 7px",
      lineHeight: 1.2,
      whiteSpace: "nowrap",
      ...style
    }
  }, rest), cfg.dot && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 4,
      height: 4,
      borderRadius: "50%",
      background: "currentColor"
    }
  }), label || cfg.label);
}
Object.assign(__ds_scope, { StatusTag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/StatusTag.jsx", error: String((e && e.message) || e) }); }

// components/content/PublicationItem.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function PublicationItem({
  title,
  authors,
  venue,
  year,
  status,
  href,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const interactive = Boolean(href);
  const Tag = interactive ? "a" : "div";
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0,1fr) auto",
      alignItems: "start",
      gap: "var(--space-6)",
      padding: "var(--space-6) 0 var(--space-7)",
      borderTop: "1px solid var(--line-hairline)",
      color: "inherit",
      textDecoration: "none",
      opacity: !interactive ? 0.92 : 1,
      background: hover && interactive ? "var(--surface-inset)" : "transparent",
      transition: "background-color var(--dur-fast) var(--ease-standard)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)",
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--size-display-4)",
      lineHeight: "var(--leading-title)",
      letterSpacing: "var(--track-title)",
      color: interactive ? "var(--text-display)" : "var(--text-secondary)"
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--size-caption)",
      color: "var(--text-muted)"
    }
  }, [authors, venue, year].filter(Boolean).join(" · "))), status && /*#__PURE__*/React.createElement(__ds_scope.StatusTag, {
    status: status
  }));
}
Object.assign(__ds_scope, { PublicationItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/PublicationItem.jsx", error: String((e && e.message) || e) }); }

// components/data/LeaderboardTable.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const th = {
  fontFamily: "var(--font-text)",
  fontSize: "var(--size-label)",
  fontWeight: "var(--weight-medium)",
  letterSpacing: "var(--track-label)",
  textTransform: "uppercase",
  color: "var(--text-muted)",
  textAlign: "left",
  padding: "0 var(--space-6) var(--space-4) 0",
  borderBottom: "1px solid var(--line-rule)",
  whiteSpace: "nowrap"
};
function LeaderboardTable({
  columns,
  rows = [],
  placeholderRows = 6,
  emptyLabel = "awaiting first round",
  style,
  ...rest
}) {
  const empty = rows.length === 0;
  const body = empty ? Array.from({
    length: placeholderRows
  }, (_, i) => ({
    __placeholder: i
  })) : rows;
  return /*#__PURE__*/React.createElement("table", _extends({
    style: {
      width: "100%",
      borderCollapse: "collapse",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    style: {
      ...th,
      width: 44,
      color: "var(--text-faint)",
      fontFamily: "var(--font-mono)",
      letterSpacing: "var(--track-mono)",
      textTransform: "none"
    }
  }, "#"), columns.map(c => /*#__PURE__*/React.createElement("th", {
    key: c.key,
    style: {
      ...th,
      textAlign: c.align || "left",
      paddingRight: c.align === "right" ? 0 : "var(--space-6)"
    }
  }, c.label)))), /*#__PURE__*/React.createElement("tbody", null, body.map((r, i) => /*#__PURE__*/React.createElement("tr", {
    key: i,
    style: {
      borderBottom: "1px solid var(--line-hairline)"
    }
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "var(--space-5) var(--space-6) var(--space-5) 0",
      fontFamily: "var(--font-mono)",
      fontSize: "var(--size-mono)",
      color: "var(--text-faint)",
      verticalAlign: "middle"
    }
  }, String(i + 1).padStart(2, "0")), columns.map((c, ci) => /*#__PURE__*/React.createElement("td", {
    key: c.key,
    style: {
      padding: "var(--space-5) var(--space-6) var(--space-5) 0",
      paddingRight: c.align === "right" ? 0 : "var(--space-6)",
      textAlign: c.align || "left",
      verticalAlign: "middle",
      fontFamily: c.mono ? "var(--font-mono)" : "var(--font-text)",
      fontVariantNumeric: c.mono ? "tabular-nums" : "normal",
      fontSize: c.mono ? "var(--size-mono)" : "var(--size-body-sm)",
      color: r.__placeholder != null ? "var(--text-faint)" : "var(--text-body)"
    }
  }, r.__placeholder != null ? ci === 0 ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-block",
      width: `${58 - i * 4}%`,
      minWidth: 90,
      height: 9,
      background: "var(--surface-inset)",
      borderRadius: "var(--radius-1)"
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      color: "var(--state-void)"
    }
  }, "\u2014") : r[c.key]))))), empty && /*#__PURE__*/React.createElement("tfoot", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    colSpan: columns.length + 1,
    style: {
      paddingTop: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.StatusTag, {
    status: "empty",
    label: emptyLabel
  })))));
}
Object.assign(__ds_scope, { LeaderboardTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/LeaderboardTable.jsx", error: String((e && e.message) || e) }); }

// components/nav/FieldSelect.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function FieldSelect({
  label,
  options = [],
  value,
  onChange,
  id,
  style,
  ...rest
}) {
  const autoId = React.useId ? React.useId() : "fs";
  const selectId = id || autoId;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: selectId,
    style: {
      fontFamily: "var(--font-text)",
      fontSize: "var(--size-label)",
      fontWeight: "var(--weight-medium)",
      letterSpacing: "var(--track-label)",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, label), /*#__PURE__*/React.createElement("select", _extends({
    id: selectId,
    value: value,
    onChange: e => onChange && onChange(e.target.value),
    style: {
      appearance: "none",
      background: "var(--surface-card)",
      border: "1px solid var(--line-rule)",
      borderRadius: "var(--radius-1)",
      color: "var(--text-body)",
      font: "inherit",
      fontSize: "var(--size-body-sm)",
      padding: "9px 30px 9px 11px",
      cursor: "pointer",
      backgroundImage: "linear-gradient(45deg,transparent 50%,currentColor 50%),linear-gradient(135deg,currentColor 50%,transparent 50%)",
      backgroundPosition: "calc(100% - 15px) calc(50% + 1px),calc(100% - 11px) calc(50% + 1px)",
      backgroundSize: "4px 4px,4px 4px",
      backgroundRepeat: "no-repeat"
    }
  }, rest), options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))));
}
Object.assign(__ds_scope, { FieldSelect });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/nav/FieldSelect.jsx", error: String((e && e.message) || e) }); }

// components/nav/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tabs({
  items = [],
  value,
  onChange,
  style,
  ...rest
}) {
  const [internal, setInternal] = React.useState(items[0] && items[0].id);
  const active = value !== undefined ? value : internal;
  const select = id => {
    if (value === undefined) setInternal(id);
    onChange && onChange(id);
  };
  const [hover, setHover] = React.useState(null);
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      display: "flex",
      gap: "var(--space-8)",
      borderBottom: "1px solid var(--line-hairline)",
      ...style
    }
  }, rest), items.map(it => {
    const on = it.id === active;
    return /*#__PURE__*/React.createElement("button", {
      key: it.id,
      role: "tab",
      "aria-selected": on,
      onClick: () => select(it.id),
      onMouseEnter: () => setHover(it.id),
      onMouseLeave: () => setHover(null),
      style: {
        background: "none",
        border: 0,
        borderBottom: `var(--border-strong) solid ${on ? "var(--line-strong)" : "transparent"}`,
        padding: "0 0 var(--space-4)",
        marginBottom: -1,
        cursor: "pointer",
        fontFamily: "var(--font-text)",
        fontSize: "var(--size-body-sm)",
        fontWeight: on ? "var(--weight-medium)" : "var(--weight-body)",
        color: on ? "var(--text-display)" : hover === it.id ? "var(--text-body)" : "var(--text-muted)",
        transition: "color var(--dur-fast) var(--ease-standard), border-color var(--dur-fast) var(--ease-standard)",
        display: "inline-flex",
        alignItems: "baseline",
        gap: "var(--space-2)"
      }
    }, it.label, it.count != null && /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: "var(--size-mono-sm)",
        color: "var(--text-faint)"
      }
    }, it.count));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/nav/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/AboutScreen.jsx
try { (() => {
const {
  SectionHeading,
  PullQuote,
  TextLink,
  Rule,
  TrajectoryField,
  MonoStat
} = window.FledgeQuantLabDesignSystem_32a2bf;
function AboutScreen() {
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Page, null, /*#__PURE__*/React.createElement(Section, {
    tight: true
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    index: 6,
    eyebrow: "About",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "An independent lab, ", /*#__PURE__*/React.createElement("em", {
      style: {
        fontWeight: 300
      }
    }, "not a firm"))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0,1.15fr) minmax(0,1fr)",
      gap: "var(--space-16)",
      alignItems: "start",
      marginTop: "var(--space-10)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--size-lead)",
      color: "var(--text-body)",
      lineHeight: "var(--leading-body)"
    }
  }, "Built by a two-person team with backgrounds in systematic trading and large-scale AI engineering."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--size-body-sm)",
      color: "var(--text-secondary)",
      lineHeight: "var(--leading-body)"
    }
  }, "Fledge Quant Lab studies how LLM agents make consequential decisions under uncertainty. Live financial markets are the testbed because they supply small samples, noisy rewards, and outcomes that arrive late \u2014 not because the lab trades."), /*#__PURE__*/React.createElement(Rule, null), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--size-body-sm)",
      color: "var(--text-muted)",
      lineHeight: "var(--leading-body)"
    }
  }, "We are a research lab, not a financial services company. We manage no money, sell no signals, and make no performance claims."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--size-body-sm)",
      color: "var(--text-muted)"
    }
  }, "Collaborations and questions: ", /*#__PURE__*/React.createElement(TextLink, {
    href: "mailto:hello@fledgequant.example"
  }, "hello@[domain]"))), /*#__PURE__*/React.createElement("div", {
    style: {
      border: "1px solid var(--line-hairline)",
      background: "var(--surface-card)",
      padding: "var(--space-8)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement(TrajectoryField, {
    paths: 26,
    seed: 19,
    style: {
      height: 150
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-10)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(MonoStat, {
    label: "Founded",
    value: "2026"
  }), /*#__PURE__*/React.createElement(MonoStat, {
    label: "People",
    value: "2"
  }), /*#__PURE__*/React.createElement(MonoStat, {
    label: "Open roles",
    value: "\u2014",
    note: "none yet"
  }))))), /*#__PURE__*/React.createElement(Section, {
    tight: true
  }, /*#__PURE__*/React.createElement(PullQuote, {
    cite: "Fledge Quant Lab"
  }, "We study when they should be trusted to make one."))));
}
Object.assign(window, {
  AboutScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/AboutScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/BenchmarkScreen.jsx
try { (() => {
const {
  Eyebrow,
  SectionHeading,
  LeaderboardTable,
  MonoStat,
  StatusTag,
  Tabs,
  FieldSelect,
  EmptyState,
  PrincipleItem,
  Rule,
  Button
} = window.FledgeQuantLabDesignSystem_32a2bf;
const TASKS = [{
  id: "all",
  label: "All tasks"
}, {
  id: "abstain",
  label: "Abstention",
  count: 4
}, {
  id: "select",
  label: "Selection",
  count: 6
}, {
  id: "pit",
  label: "Point-in-time",
  count: 3
}];
function BenchmarkScreen() {
  const [tab, setTab] = React.useState("all");
  const [round, setRound] = React.useState("r0");
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Page, null, /*#__PURE__*/React.createElement(Section, {
    tight: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      justifyContent: "space-between",
      gap: "var(--space-8)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    index: 3,
    eyebrow: "The benchmark",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Scored ", /*#__PURE__*/React.createElement("em", {
      style: {
        fontWeight: 300
      }
    }, "after"), " the window closes"),
    note: "A rolling forward evaluation of frontier models on real-market decision tasks. Every task is published before its outcome exists."
  }), /*#__PURE__*/React.createElement(StatusTag, {
    status: "soon"
  }))), /*#__PURE__*/React.createElement(Section, {
    tight: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-16)",
      flexWrap: "wrap",
      paddingBottom: "var(--space-10)"
    }
  }, /*#__PURE__*/React.createElement(MonoStat, {
    label: "Round",
    value: "00",
    note: "opens at launch"
  }), /*#__PURE__*/React.createElement(MonoStat, {
    label: "Cadence",
    value: "14",
    unit: "days"
  }), /*#__PURE__*/React.createElement(MonoStat, {
    label: "Samples per task",
    value: "256"
  }), /*#__PURE__*/React.createElement(MonoStat, {
    label: "Models entered",
    value: "\u2014"
  }), /*#__PURE__*/React.createElement(MonoStat, {
    label: "Results published",
    value: "\u2014"
  })), /*#__PURE__*/React.createElement(Rule, {
    tone: "strong",
    weight: "strong"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      gap: "var(--space-8)",
      flexWrap: "wrap",
      paddingTop: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    items: TASKS,
    value: tab,
    onChange: setTab,
    style: {
      border: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement(FieldSelect, {
    label: "Round",
    value: round,
    onChange: setRound,
    options: [{
      value: "r0",
      label: "Round 00 (open)"
    }, {
      value: "all",
      label: "All rounds"
    }]
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement(LeaderboardTable, {
    columns: [{
      key: "model",
      label: "Model"
    }, {
      key: "overlap",
      label: "Selection overlap",
      align: "right",
      mono: true
    }, {
      key: "abstain",
      label: "Abstain rate",
      align: "right",
      mono: true
    }, {
      key: "calib",
      label: "Calibration",
      align: "right",
      mono: true
    }, {
      key: "state",
      label: "State",
      align: "right"
    }],
    placeholderRows: 8,
    emptyLabel: "no entries \u2014 round 00 has not opened"
  }))), /*#__PURE__*/React.createElement(Section, {
    tight: true
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    index: 3,
    eyebrow: "Protocol",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "How a round ", /*#__PURE__*/React.createElement("em", {
      style: {
        fontWeight: 300
      }
    }, "runs"))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
      gap: "0 var(--space-16)",
      marginTop: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement(PrincipleItem, {
    index: 1,
    term: "Publish the task",
    body: "Tasks are stated in full before any outcome exists, so no future training corpus can contain the answer."
  }), /*#__PURE__*/React.createElement(PrincipleItem, {
    index: 2,
    term: "Seal the responses",
    body: "Model outputs are hashed and sealed at submission. Nothing can be revised once the window opens."
  }), /*#__PURE__*/React.createElement(PrincipleItem, {
    index: 3,
    term: "Wait",
    body: "The window runs its full length. Abstentions are recorded as decisions, not as missing data."
  }), /*#__PURE__*/React.createElement(PrincipleItem, {
    index: 4,
    term: "Score, then publish",
    body: "Results are computed once and published whole. No leaderboard moves between rounds."
  }))), /*#__PURE__*/React.createElement(Section, {
    tight: true
  }, /*#__PURE__*/React.createElement(EmptyState, {
    meta: "round 00",
    title: "No results published",
    body: "The first forward round has not opened. When it does, this page will show entered models and their decision behaviour \\u2014 never returns.",
    action: /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      size: "sm",
      arrow: true,
      href: "mailto:hello@fledgequant.example"
    }, "Ask to be notified")
  }))));
}
Object.assign(window, {
  BenchmarkScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/BenchmarkScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Button,
  Eyebrow,
  SectionHeading,
  ResearchCard,
  PrincipleItem,
  PublicationItem,
  PullQuote,
  TrajectoryField,
  StatusTag,
  MonoStat,
  LeaderboardTable,
  Rule,
  TextLink
} = window.FledgeQuantLabDesignSystem_32a2bf;
const PILLARS = [{
  title: "The Sampling Lottery",
  summary: "Same inputs, stable directional judgment, near-zero overlap in selection across samples \u2014 why LLM decision systems are unstable in a way benchmarks miss.",
  tags: ["sampling", "selection stability"]
}, {
  title: "Contamination-Resistant Evaluation",
  summary: "Rolling, forward-looking benchmarks that future model training data cannot absorb \u2014 evaluating decisions before outcomes exist.",
  tags: ["evaluation", "contamination"]
}, {
  title: "Point-in-Time Discipline",
  summary: "A no-lookahead evaluation law for decision systems; replaying history without leaking the future.",
  tags: ["point-in-time", "no-lookahead"]
}];
const PRINCIPLES = [{
  term: "Proposer \u2260 approver",
  body: "The component that generates a decision is never the component that clears it."
}, {
  term: "Default-wait",
  body: "Abstention is a first-class output. A system that declines has answered."
}, {
  term: "Humans own risk boundaries",
  body: "Limits are set by people and are not reachable by the agent that operates inside them."
}, {
  term: "Memory earns its place",
  body: "Nothing is written to long-term memory without passing a human gate."
}];
const PAPERS = [{
  title: "Selection instability under repeated sampling in LLM decision agents",
  year: "2026"
}, {
  title: "Forward-only benchmarks for decision systems: a contamination-resistant protocol",
  year: "2026"
}, {
  title: "Point-in-time replay: an evaluation law for agentic backtests",
  year: "2026"
}];
function HomeScreen({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderBottom: "1px solid var(--line-hairline)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      opacity: 0.75,
      maskImage: "linear-gradient(to bottom, transparent, black 30%, black 80%, transparent)",
      WebkitMaskImage: "linear-gradient(to bottom, transparent, black 30%, black 80%, transparent)"
    }
  }, /*#__PURE__*/React.createElement(TrajectoryField, {
    paths: 64,
    seed: 11,
    style: {
      height: "100%"
    }
  })), /*#__PURE__*/React.createElement(Page, null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      paddingTop: "clamp(96px,13vw,190px)",
      paddingBottom: "clamp(96px,13vw,190px)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-10)"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    index: 1
  }, "Independent AI research lab"), /*#__PURE__*/React.createElement("h1", {
    style: {
      maxWidth: "17ch",
      fontWeight: "var(--weight-display)"
    }
  }, "Language models can already argue a decision. ", /*#__PURE__*/React.createElement("em", {
    style: {
      fontWeight: 300
    }
  }, "We study when they should be trusted to make one.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--size-lead)",
      color: "var(--text-secondary)",
      maxWidth: "var(--measure-lead)",
      lineHeight: "var(--leading-snug)"
    }
  }, "Fledge Quant Lab studies how LLM agents make consequential decisions under uncertainty \u2014 small samples, noisy rewards, stochastic generation \u2014 using live financial markets as the testbed."), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    variant: "solid",
    size: "lg",
    arrow: true,
    href: "#research",
    onClick: e => {
      e.preventDefault();
      document.getElementById("research").scrollIntoView ? window.scrollTo({
        top: document.getElementById("research").offsetTop - 72,
        behavior: "smooth"
      }) : null;
    }
  }, "Read our research"))))), /*#__PURE__*/React.createElement(Page, null, /*#__PURE__*/React.createElement(Section, {
    id: "research"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    index: 2,
    eyebrow: "Research pillars",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Three problems that ", /*#__PURE__*/React.createElement("em", {
      style: {
        fontWeight: 300
      }
    }, "keep reappearing")),
    note: "Each began as an engineering failure before it became a research question."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
      gap: "var(--space-6)",
      marginTop: "var(--space-12)"
    }
  }, PILLARS.map((p, i) => /*#__PURE__*/React.createElement(ResearchCard, _extends({
    key: p.title,
    index: i + 1
  }, p))))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      justifyContent: "space-between",
      gap: "var(--space-8)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    index: 3,
    eyebrow: "The benchmark",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "A rolling ", /*#__PURE__*/React.createElement("em", {
      style: {
        fontWeight: 300
      }
    }, "forward"), " evaluation"),
    note: "Frontier models on real-market decision tasks, scored only after the window closes."
  }), /*#__PURE__*/React.createElement(StatusTag, {
    status: "soon"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-16)",
      flexWrap: "wrap",
      marginTop: "var(--space-10)"
    }
  }, /*#__PURE__*/React.createElement(MonoStat, {
    label: "Samples per task",
    value: "256",
    note: "fixed across models"
  }), /*#__PURE__*/React.createElement(MonoStat, {
    label: "Round cadence",
    value: "14",
    unit: "days"
  }), /*#__PURE__*/React.createElement(MonoStat, {
    label: "Rounds scored",
    value: "\u2014",
    note: "first round opens at launch"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-10)",
      padding: "var(--space-8)",
      border: "1px solid var(--line-hairline)",
      background: "var(--surface-card)"
    }
  }, /*#__PURE__*/React.createElement(LeaderboardTable, {
    columns: [{
      key: "model",
      label: "Model"
    }, {
      key: "overlap",
      label: "Selection overlap",
      align: "right",
      mono: true
    }, {
      key: "abstain",
      label: "Abstain rate",
      align: "right",
      mono: true
    }, {
      key: "calib",
      label: "Calibration",
      align: "right",
      mono: true
    }],
    placeholderRows: 6,
    emptyLabel: "first round opens at launch"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "quiet",
    arrow: true,
    onClick: () => onNavigate("benchmark")
  }, "How the benchmark works"))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(SectionHeading, {
    index: 4,
    eyebrow: "Principles",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Four engineering ", /*#__PURE__*/React.createElement("em", {
      style: {
        fontWeight: 300
      }
    }, "tenets"))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
      gap: "0 var(--space-16)",
      marginTop: "var(--space-10)"
    }
  }, PRINCIPLES.map((p, i) => /*#__PURE__*/React.createElement(PrincipleItem, _extends({
    key: p.term,
    index: i + 1
  }, p))))), /*#__PURE__*/React.createElement(Section, {
    tight: true
  }, /*#__PURE__*/React.createElement(PullQuote, {
    cite: "Methodology note, in preparation"
  }, "A system that declines has answered.")), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(SectionHeading, {
    index: 5,
    eyebrow: "Writing",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Three papers ", /*#__PURE__*/React.createElement("em", {
      style: {
        fontWeight: 300
      }
    }, "in preparation")),
    note: "Nothing is listed here before it exists. Preprints appear when they are ready."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-10)",
      borderBottom: "1px solid var(--line-hairline)"
    }
  }, PAPERS.map(p => /*#__PURE__*/React.createElement(PublicationItem, {
    key: p.title,
    title: p.title,
    authors: "Fledge Quant Lab",
    year: p.year,
    status: "preparation"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "quiet",
    arrow: true,
    onClick: () => onNavigate("writing")
  }, "All writing"))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(SectionHeading, {
    index: 6,
    eyebrow: "About",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Two people, ", /*#__PURE__*/React.createElement("em", {
      style: {
        fontWeight: 300
      }
    }, "one question"))
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "var(--space-8)",
      fontSize: "var(--size-lead)",
      color: "var(--text-secondary)",
      maxWidth: "var(--measure-prose)",
      lineHeight: "var(--leading-body)"
    }
  }, "Built by a two-person team with backgrounds in systematic trading and large-scale AI engineering."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "var(--space-5)",
      fontSize: "var(--size-body-sm)",
      color: "var(--text-muted)",
      maxWidth: "var(--measure-prose)"
    }
  }, "Fledge Quant Lab is a research lab, not a financial services company. Write to us at ", /*#__PURE__*/React.createElement(TextLink, {
    href: "mailto:hello@fledgequant.example"
  }, "hello@[domain]"), "."))));
}
Object.assign(window, {
  HomeScreen,
  PILLARS,
  PRINCIPLES,
  PAPERS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SiteChrome.jsx
try { (() => {
const {
  Wordmark,
  ThemeToggle,
  TextLink,
  Rule
} = window.FledgeQuantLabDesignSystem_32a2bf;
const NAV = [{
  id: "home",
  label: "Research"
}, {
  id: "benchmark",
  label: "Benchmark"
}, {
  id: "writing",
  label: "Writing"
}, {
  id: "about",
  label: "About"
}];
function SiteHeader({
  route,
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 20,
      background: "color-mix(in oklab, var(--bg-page) 88%, transparent)",
      backdropFilter: "blur(8px)",
      borderBottom: "1px solid var(--line-hairline)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--page-max)",
      margin: "0 auto",
      padding: "0 var(--gutter-lg)",
      height: 72,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate("home");
    },
    style: {
      border: 0,
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    size: 19
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-8)"
    }
  }, NAV.map(n => /*#__PURE__*/React.createElement("a", {
    key: n.id,
    href: "#" + n.id,
    onClick: e => {
      e.preventDefault();
      onNavigate(n.id);
    },
    style: {
      fontFamily: "var(--font-text)",
      fontSize: "var(--size-body-sm)",
      color: route === n.id ? "var(--text-display)" : "var(--text-muted)",
      border: 0,
      borderBottom: `1px solid ${route === n.id ? "var(--line-strong)" : "transparent"}`,
      paddingBottom: 2,
      textDecoration: "none",
      transition: "color var(--dur-fast) var(--ease-standard)"
    }
  }, n.label)), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 1,
      height: 16,
      background: "var(--line-hairline)"
    }
  }), /*#__PURE__*/React.createElement(ThemeToggle, null))));
}
function SiteFooter({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      borderTop: "1px solid var(--line-hairline)",
      marginTop: "var(--section-y)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--page-max)",
      margin: "0 auto",
      padding: "var(--space-16) var(--gutter-lg) var(--space-12)",
      display: "grid",
      gridTemplateColumns: "1fr auto",
      gap: "var(--space-12)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    size: 17
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--size-caption)",
      color: "var(--text-muted)",
      maxWidth: "38ch",
      lineHeight: "var(--leading-snug)"
    }
  }, "An independent research lab studying decision-making under uncertainty in language-model agents.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "fql-label"
  }, "Contact"), /*#__PURE__*/React.createElement(TextLink, {
    href: "mailto:hello@fledgequant.example",
    muted: true
  }, "hello@[domain]"))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--page-max)",
      margin: "0 auto",
      padding: "0 var(--gutter-lg) var(--space-12)"
    }
  }, /*#__PURE__*/React.createElement(Rule, null), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: "var(--space-5)",
      display: "flex",
      justifyContent: "space-between",
      fontFamily: "var(--font-mono)",
      fontSize: "var(--size-mono-sm)",
      color: "var(--text-faint)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "Fledge Quant Lab \u2014 research only. Nothing here is investment advice."), /*#__PURE__*/React.createElement("span", null, "MMXXVI"))));
}
function Page({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--page-max)",
      margin: "0 auto",
      padding: "0 var(--gutter-lg)"
    }
  }, children);
}
function Section({
  children,
  tight,
  style
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      paddingTop: tight ? "var(--section-y-tight)" : "var(--section-y)",
      ...style
    }
  }, children);
}
Object.assign(window, {
  SiteHeader,
  SiteFooter,
  Page,
  Section,
  NAV
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SiteChrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/WritingScreen.jsx
try { (() => {
const {
  SectionHeading,
  PublicationItem,
  Tabs,
  EmptyState,
  TextLink
} = window.FledgeQuantLabDesignSystem_32a2bf;
function WritingScreen() {
  const [tab, setTab] = React.useState("all");
  const papers = window.PAPERS || [];
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Page, null, /*#__PURE__*/React.createElement(Section, {
    tight: true
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    index: 5,
    eyebrow: "Writing",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Papers, notes, and ", /*#__PURE__*/React.createElement("em", {
      style: {
        fontWeight: 300
      }
    }, "method")),
    note: "We publish when the work is finished, not when it is promising."
  })), /*#__PURE__*/React.createElement(Section, {
    tight: true
  }, /*#__PURE__*/React.createElement(Tabs, {
    items: [{
      id: "all",
      label: "All",
      count: 3
    }, {
      id: "papers",
      label: "Papers",
      count: 3
    }, {
      id: "notes",
      label: "Notes",
      count: 0
    }],
    value: tab,
    onChange: setTab
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-8)",
      borderBottom: "1px solid var(--line-hairline)"
    }
  }, tab === "notes" ? null : papers.map(p => /*#__PURE__*/React.createElement(PublicationItem, {
    key: p.title,
    title: p.title,
    authors: "Fledge Quant Lab",
    year: p.year,
    status: "preparation"
  }))), tab === "notes" && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement(EmptyState, {
    meta: "0 notes",
    title: "No notes yet",
    body: "Shorter methodology notes will appear here alongside the papers."
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "var(--space-8)",
      fontSize: "var(--size-body-sm)",
      color: "var(--text-muted)",
      maxWidth: "var(--measure-prose)"
    }
  }, "Preprints will be posted here and on arXiv. For early drafts, write to ", /*#__PURE__*/React.createElement(TextLink, {
    href: "mailto:hello@fledgequant.example"
  }, "hello@[domain]"), "."))));
}
Object.assign(window, {
  WritingScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/WritingScreen.jsx", error: String((e && e.message) || e) }); }

__ds_ns.TrajectoryField = __ds_scope.TrajectoryField;

__ds_ns.PrincipleItem = __ds_scope.PrincipleItem;

__ds_ns.PublicationItem = __ds_scope.PublicationItem;

__ds_ns.PullQuote = __ds_scope.PullQuote;

__ds_ns.ResearchCard = __ds_scope.ResearchCard;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Rule = __ds_scope.Rule;

__ds_ns.TextLink = __ds_scope.TextLink;

__ds_ns.ThemeToggle = __ds_scope.ThemeToggle;

__ds_ns.Wordmark = __ds_scope.Wordmark;

__ds_ns.EmptyState = __ds_scope.EmptyState;

__ds_ns.LeaderboardTable = __ds_scope.LeaderboardTable;

__ds_ns.MonoStat = __ds_scope.MonoStat;

__ds_ns.StatusTag = __ds_scope.StatusTag;

__ds_ns.FieldSelect = __ds_scope.FieldSelect;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
