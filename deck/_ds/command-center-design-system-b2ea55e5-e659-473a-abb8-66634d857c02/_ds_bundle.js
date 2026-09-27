/* @ds-bundle: {"format":4,"namespace":"CommandCenterDesignSystem_b2ea55","components":[{"name":"Breakdown","sourcePath":"components/content/Breakdown.jsx"},{"name":"Callout","sourcePath":"components/content/Callout.jsx"},{"name":"Diagram","sourcePath":"components/content/Diagram.jsx"},{"name":"Recall","sourcePath":"components/content/Recall.jsx"},{"name":"Terminal","sourcePath":"components/content/Terminal.jsx"},{"name":"Badge","sourcePath":"components/data/Badge.jsx"},{"name":"CardGrid","sourcePath":"components/data/CardGrid.jsx"},{"name":"Checklist","sourcePath":"components/data/Checklist.jsx"},{"name":"StatCard","sourcePath":"components/data/StatCard.jsx"},{"name":"Table","sourcePath":"components/data/Table.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Label","sourcePath":"components/forms/Label.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"DocShell","sourcePath":"components/layout/DocShell.jsx"},{"name":"Hero","sourcePath":"components/layout/Hero.jsx"},{"name":"Legend","sourcePath":"components/layout/Legend.jsx"},{"name":"ProgressBar","sourcePath":"components/runbook/ProgressBar.jsx"},{"name":"Runbook","sourcePath":"components/runbook/Runbook.jsx"}],"sourceHashes":{"components/content/Breakdown.jsx":"0611ae94e4d4","components/content/Callout.jsx":"247c56e922ac","components/content/Diagram.jsx":"ddac4bc92a2f","components/content/Recall.jsx":"c7f9ed4d7fc1","components/content/Terminal.jsx":"d9f4ce8226cf","components/data/Badge.jsx":"bdb4f6693d8d","components/data/CardGrid.jsx":"ae42b0b854a7","components/data/Checklist.jsx":"098beb226060","components/data/StatCard.jsx":"2fcb0ffe333a","components/data/Table.jsx":"d5a95e2ab138","components/feedback/Alert.jsx":"205a06a456c5","components/forms/Button.jsx":"b298e8a805f6","components/forms/Input.jsx":"ec95d17cd6f4","components/forms/Label.jsx":"e99162426d81","components/forms/Select.jsx":"cecd15ef2394","components/forms/Textarea.jsx":"2c5861a4bce0","components/layout/DocShell.jsx":"294e22503ee8","components/layout/Hero.jsx":"b1f2f6befc3c","components/layout/Legend.jsx":"c6f1ed484446","components/runbook/ProgressBar.jsx":"fa5bbeac52a9","components/runbook/Runbook.jsx":"2d5b9c0ff286"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.CommandCenterDesignSystem_b2ea55 = window.CommandCenterDesignSystem_b2ea55 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/Breakdown.jsx
try { (() => {
function Breakdown({
  title = 'Command Breakdown',
  items = []
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "breakdown"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bd-title"
  }, title), /*#__PURE__*/React.createElement("dl", null, items.map((it, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, /*#__PURE__*/React.createElement("dt", null, it.term), /*#__PURE__*/React.createElement("dd", null, it.desc)))));
}
Object.assign(__ds_scope, { Breakdown });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Breakdown.jsx", error: String((e && e.message) || e) }); }

// components/content/Callout.jsx
try { (() => {
const DEFAULT_LABELS = {
  why: 'Why it matters',
  do: 'Do this',
  caution: 'Gotcha',
  warn: "Don't",
  bz: 'Deeper dive'
};
function Callout({
  variant = 'why',
  label,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: 'callout ' + variant
  }, /*#__PURE__*/React.createElement("div", {
    className: "c-label"
  }, label || DEFAULT_LABELS[variant]), /*#__PURE__*/React.createElement("p", null, children));
}
Object.assign(__ds_scope, { Callout });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Callout.jsx", error: String((e && e.message) || e) }); }

// components/content/Diagram.jsx
try { (() => {
function Diagram({
  caption,
  fallback,
  children
}) {
  return /*#__PURE__*/React.createElement("figure", {
    className: "diagram"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mermaid"
  }, children), fallback && /*#__PURE__*/React.createElement("div", {
    className: "fallback"
  }, fallback), caption && /*#__PURE__*/React.createElement("figcaption", null, caption));
}
Object.assign(__ds_scope, { Diagram });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Diagram.jsx", error: String((e && e.message) || e) }); }

// components/content/Recall.jsx
try { (() => {
function Recall({
  summary = 'Recall — check the idea stuck',
  question,
  answer
}) {
  return /*#__PURE__*/React.createElement("details", {
    className: "recall"
  }, /*#__PURE__*/React.createElement("summary", null, summary), /*#__PURE__*/React.createElement("div", {
    className: "recall-body"
  }, /*#__PURE__*/React.createElement("p", {
    className: "q"
  }, question), /*#__PURE__*/React.createElement("p", {
    className: "a"
  }, answer)));
}
Object.assign(__ds_scope, { Recall });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Recall.jsx", error: String((e && e.message) || e) }); }

// components/content/Terminal.jsx
try { (() => {
function Terminal({
  label = 'terminal',
  code,
  children
}) {
  const [copied, setCopied] = React.useState(false);
  const preRef = React.useRef(null);
  function copy() {
    navigator.clipboard.writeText(preRef.current.innerText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    });
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "term"
  }, /*#__PURE__*/React.createElement("div", {
    className: "term-bar"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot r"
  }), /*#__PURE__*/React.createElement("span", {
    className: "dot y"
  }), /*#__PURE__*/React.createElement("span", {
    className: "dot g"
  }), /*#__PURE__*/React.createElement("span", {
    className: "lbl"
  }, label), /*#__PURE__*/React.createElement("button", {
    className: 'copy' + (copied ? ' done' : ''),
    onClick: copy
  }, copied ? 'copied' : 'copy')), /*#__PURE__*/React.createElement("pre", {
    ref: preRef
  }, children || code));
}
Object.assign(__ds_scope, { Terminal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Terminal.jsx", error: String((e && e.message) || e) }); }

// components/data/Badge.jsx
try { (() => {
function Badge({
  variant = 'read',
  children
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: 'badge ' + variant
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Badge.jsx", error: String((e && e.message) || e) }); }

// components/data/CardGrid.jsx
try { (() => {
function CardGrid({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "cards"
  }, children);
}
Object.assign(__ds_scope, { CardGrid });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/CardGrid.jsx", error: String((e && e.message) || e) }); }

// components/data/Checklist.jsx
try { (() => {
function Checklist({
  items = []
}) {
  return /*#__PURE__*/React.createElement("ol", {
    className: "checklist"
  }, items.map((it, i) => /*#__PURE__*/React.createElement("li", {
    key: i
  }, it)));
}
Object.assign(__ds_scope, { Checklist });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Checklist.jsx", error: String((e && e.message) || e) }); }

// components/data/StatCard.jsx
try { (() => {
function StatCard({
  value,
  label
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "k"
  }, value), /*#__PURE__*/React.createElement("div", {
    className: "l"
  }, label));
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/StatCard.jsx", error: String((e && e.message) || e) }); }

// components/data/Table.jsx
try { (() => {
function Table({
  columns = [],
  rows = []
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "tbl-scroll"
  }, /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, columns.map((c, i) => /*#__PURE__*/React.createElement("th", {
    key: i
  }, c)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((r, ri) => /*#__PURE__*/React.createElement("tr", {
    key: ri
  }, r.map((cell, ci) => /*#__PURE__*/React.createElement("td", {
    key: ci
  }, cell && typeof cell === 'object' ? /*#__PURE__*/React.createElement("span", {
    className: cell.verdict
  }, cell.text) : cell)))))));
}
Object.assign(__ds_scope, { Table });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Table.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
function Alert({
  variant = 'info',
  children,
  onClose
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: 'cc-alert cc-alert--' + variant
  }, /*#__PURE__*/React.createElement("span", null, children), onClose && /*#__PURE__*/React.createElement("button", {
    className: "cc-alert-close",
    onClick: onClose
  }, "\xD7"));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Button({
  variant,
  disabled,
  children,
  ...rest
}) {
  const cls = ['cc-btn', variant && 'cc-btn--' + variant].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls,
    disabled: disabled
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  label,
  id,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", null, label && /*#__PURE__*/React.createElement("span", {
    className: "cc-label"
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: id,
    className: "cc-input"
  }, rest)));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Label.jsx
try { (() => {
function Label({
  children
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: "cc-label"
  }, children);
}
Object.assign(__ds_scope, { Label });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Label.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  label,
  id,
  options = [],
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", null, label && /*#__PURE__*/React.createElement("span", {
    className: "cc-label"
  }, label), /*#__PURE__*/React.createElement("select", _extends({
    id: id,
    className: "cc-select"
  }, rest), options.map((o, i) => /*#__PURE__*/React.createElement("option", {
    key: i,
    value: o.value ?? o
  }, o.label ?? o))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Textarea({
  label,
  id,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", null, label && /*#__PURE__*/React.createElement("span", {
    className: "cc-label"
  }, label), /*#__PURE__*/React.createElement("textarea", _extends({
    id: id,
    className: "cc-textarea"
  }, rest)));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/layout/DocShell.jsx
try { (() => {
function DocShell({
  brand,
  brandSub,
  sections = [],
  children
}) {
  const [active, setActive] = React.useState(sections[0] && sections[0].id);
  const [open, setOpen] = React.useState(false);
  const [collapsed, setCollapsed] = React.useState(false);
  React.useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) setActive(e.target.id);
      });
    }, {
      rootMargin: '-15% 0px -80% 0px',
      threshold: 0
    });
    sections.forEach(s => {
      const el = document.getElementById(s.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [sections]);
  return /*#__PURE__*/React.createElement("div", {
    className: 'shell' + (collapsed ? ' toc-collapsed' : '')
  }, /*#__PURE__*/React.createElement("div", {
    className: "mnav",
    onClick: () => setOpen(o => !o)
  }, "\u2630 Contents"), /*#__PURE__*/React.createElement("nav", {
    className: 'toc' + (open ? ' open' : '')
  }, /*#__PURE__*/React.createElement("div", {
    className: "brand"
  }, brand), brandSub && /*#__PURE__*/React.createElement("div", {
    className: "brand-sub"
  }, brandSub), sections.map(s => /*#__PURE__*/React.createElement("a", {
    key: s.id,
    href: '#' + s.id,
    className: active === s.id ? 'active' : '',
    onClick: () => setOpen(false)
  }, /*#__PURE__*/React.createElement("span", {
    className: "num"
  }, s.num), s.label)), /*#__PURE__*/React.createElement("button", {
    className: "toc-collapse",
    onClick: () => setCollapsed(true),
    title: "Hide sidebar"
  }, "\xAB Hide")), /*#__PURE__*/React.createElement("button", {
    className: "toc-expand",
    onClick: () => setCollapsed(false),
    title: "Show sidebar"
  }, "\u2630"), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, children)));
}
Object.assign(__ds_scope, { DocShell });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/DocShell.jsx", error: String((e && e.message) || e) }); }

// components/layout/Hero.jsx
try { (() => {
function Hero({
  kicker,
  title,
  accent,
  lede,
  chips = []
}) {
  return /*#__PURE__*/React.createElement("header", {
    className: "hero"
  }, kicker && /*#__PURE__*/React.createElement("div", {
    className: "kicker"
  }, kicker), /*#__PURE__*/React.createElement("h1", null, title, accent && /*#__PURE__*/React.createElement("span", {
    className: "accent"
  }, " ", accent)), lede && /*#__PURE__*/React.createElement("p", {
    className: "lede"
  }, lede), chips.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "meta-row"
  }, chips.map((c, i) => /*#__PURE__*/React.createElement("span", {
    className: "chip",
    key: i
  }, c.label, ": ", /*#__PURE__*/React.createElement("b", null, c.value)))));
}
Object.assign(__ds_scope, { Hero });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Hero.jsx", error: String((e && e.message) || e) }); }

// components/layout/Legend.jsx
try { (() => {
const DEFAULT_ITEMS = [{
  key: 'cyan',
  title: 'Why it matters',
  desc: 'The reason / concept'
}, {
  key: 'green',
  title: 'Do this',
  desc: 'Best practice'
}, {
  key: 'amber',
  title: 'Gotcha',
  desc: 'Common mistake'
}, {
  key: 'red',
  title: "Don't",
  desc: 'Will break / harm'
}, {
  key: 'violet',
  title: 'Deeper dive',
  desc: 'Optional aside'
}];
function Legend({
  items = DEFAULT_ITEMS
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "legend"
  }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    className: "lg",
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "swatch",
    style: {
      background: `var(--${it.key})`
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, it.title), /*#__PURE__*/React.createElement("span", null, it.desc)))));
}
Object.assign(__ds_scope, { Legend });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Legend.jsx", error: String((e && e.message) || e) }); }

// components/runbook/ProgressBar.jsx
try { (() => {
function ProgressBar({
  done = 0,
  total = 0,
  onReset
}) {
  const pct = total ? done / total * 100 : 0;
  return /*#__PURE__*/React.createElement("div", {
    className: "progress-wrap",
    style: {
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "progress-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "progress-track"
  }, /*#__PURE__*/React.createElement("div", {
    className: "progress-fill",
    style: {
      width: pct + '%'
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "progress-label"
  }, /*#__PURE__*/React.createElement("b", null, done), " / ", total, " done"), onReset && /*#__PURE__*/React.createElement("button", {
    className: "progress-reset",
    onClick: onReset
  }, "reset")));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/runbook/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/runbook/Runbook.jsx
try { (() => {
function Runbook({
  title,
  items = [],
  storageKey = 'cc-runbook',
  onProgress
}) {
  const [state, setState] = React.useState(() => {
    try {
      return JSON.parse(localStorage.getItem(storageKey) || '{}');
    } catch (e) {
      return {};
    }
  });
  function toggle(key) {
    setState(s => {
      const next = {
        ...s,
        [key]: !s[key]
      };
      try {
        localStorage.setItem(storageKey, JSON.stringify(next));
      } catch (e) {}
      return next;
    });
  }
  React.useEffect(() => {
    if (onProgress) onProgress(items.filter(it => state[it.key]).length, items.length);
  }, [state, items]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, title && /*#__PURE__*/React.createElement("div", {
    className: "runbook-title"
  }, title), /*#__PURE__*/React.createElement("ul", {
    className: "runbook"
  }, items.map(it => /*#__PURE__*/React.createElement("li", {
    key: it.key
  }, /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: !!state[it.key],
    onChange: () => toggle(it.key)
  }), /*#__PURE__*/React.createElement("span", {
    className: "txt"
  }, /*#__PURE__*/React.createElement("b", null, it.title), it.desc ? ' — ' + it.desc : ''))))));
}
Object.assign(__ds_scope, { Runbook });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/runbook/Runbook.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Breakdown = __ds_scope.Breakdown;

__ds_ns.Callout = __ds_scope.Callout;

__ds_ns.Diagram = __ds_scope.Diagram;

__ds_ns.Recall = __ds_scope.Recall;

__ds_ns.Terminal = __ds_scope.Terminal;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.CardGrid = __ds_scope.CardGrid;

__ds_ns.Checklist = __ds_scope.Checklist;

__ds_ns.StatCard = __ds_scope.StatCard;

__ds_ns.Table = __ds_scope.Table;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Label = __ds_scope.Label;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.DocShell = __ds_scope.DocShell;

__ds_ns.Hero = __ds_scope.Hero;

__ds_ns.Legend = __ds_scope.Legend;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.Runbook = __ds_scope.Runbook;

})();
