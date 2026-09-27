# Command Center Design System

A dark, cyberpunk-technical documentation theme. It formalizes the one-off "Command Center" HTML theme (originally built inline in the `themed-learning` Cowork skill, used for technical write-ups, study guides, and runbooks) into a reusable stylesheet + component system.

**Sources provided** (all in `uploads/`, kept for reference):
- `DESIGN_SYSTEM.md` — the original hand-authored design reference (principles, color table, component catalog).
- `tokens.css` — the original token sheet.
- `components.css` — the original component stylesheet (Part A: extracted from the theme; Part B: draft app primitives).
- `style-guide.html` — the original living style-guide preview.

No codebase, Figma file, or slide deck was attached — this system was built entirely from those four files. There is only one "product": a themed long-form document (runbook / study guide / command reference), not a multi-surface app or marketing site, so there is one UI kit (`ui_kits/runbook-doc/`) rather than several.

## Index

- `styles.css` — root stylesheet, `@import`s everything below. Link this one file.
- `tokens/` — `colors.css`, `typography.css` (incl. Google Fonts `@import`), `spacing.css` (spacing/radius/shadow), `base.css` (resets, global type styles, `.cc-page-bg`).
- `components/` — React primitives, grouped by concern:
  - `layout/` — `Hero`, `Legend`, `DocShell` (sticky TOC + scroll-spy shell — **starting point**)
  - `content/` — `Terminal`, `Breakdown`, `Callout`, `Diagram`, `Recall`
  - `data/` — `StatCard`, `CardGrid`, `Table`, `Checklist`, `Badge`
  - `runbook/` — `Runbook`, `ProgressBar` (interactive, localStorage-persisted)
  - `forms/` — `Button`, `Input`, `Select`, `Textarea`, `Label` *(draft — see Intentional additions)*
  - `feedback/` — `Alert` *(draft — see Intentional additions)*
- `guidelines/` — foundation specimen cards (colors, type, spacing, radius, shadow, background texture, iconography).
- `ui_kits/runbook-doc/` — flagship sample: a full "Server Migration Playbook" document built from every component.
- `assets/` — empty; no logo/imagery was provided (see Iconography below).
- `SKILL.md` — Claude-Code-compatible skill wrapper for this system.

## Intentional additions

The original theme only ever styled a static, read-only document — no interactive form controls. `components.css` Part B and the `forms/`/`feedback/` component groups (`Button`, `Input`, `Select`, `Textarea`, `Label`, `Alert`) are a **draft extension**, not an extraction from the source. Flag/confirm with whoever owns this brand before treating them as official — they're built from the same tokens so they match visually, but they were invented to cover basic app UI, which the source never needed.

## What this system deliberately does not cover

- Light mode — the theme is dark-only; no light-mode tokens exist.
- Full form validation states (error/success on individual inputs).
- Navigation bars, modals, dropdowns, tooltips, toasts — anything beyond the static-doc + basic-primitive surface above.

## Content fundamentals

**Voice:** direct, second-person instructional ("Run in order", "Confirm these before starting"). Imperative mood for steps, declarative for explanation. No marketing language, no hedging.

**Tone:** technical-operator, calm-under-pressure. Reads like documentation written by the engineer who'll be paged at 3am — precise, terse, occasionally dry ("don't debug forward").

**The core content rule:** *explain, don't just show.* A terminal/command block is never left to speak for itself — it's always immediately followed by a `Breakdown` (`<dl>`) walking through each flag/argument. This pairing is closer to a content requirement than a visual one; carry it into any new component that shows a command or config.

**Structure:** numbered sections (`01`, `02`...) with a mono "sec-tag" subline under each `h2` stating what the section covers in one clause. Callouts do double duty as both semantic color-coding and a lightweight argument structure (why → do → caution → warn → aside).

**Emoji:** never used. The only glyphs are plain unicode characters used as functional icons (see Iconography).

**Example** (from the source style guide's recall card):
> "Why do the five callout colors carry fixed meaning instead of being picked per-document? So a reader who's seen one doc in this system already knows what red means in every other doc."

## Visual foundations

**Colors:** five accents with **fixed, non-negotiable meaning** system-wide — cyan (why/concept), green (do/success), amber (caution/trade-off), red (warn/destructive), violet (note/aside). Four dark neutral steps (`--bg` → `--surface` → `--surface-2` → `--surface-3`) build depth without shadows; each surface is one step lighter than whatever it sits on.

**Type:** two display faces + one workhorse — Chakra Petch (headings, labels, anything that should read as a "signal"), IBM Plex Sans (body), JetBrains Mono (code, commands, meta labels). Letter-spacing (`.12em`–`.22em`) is applied deliberately to all-caps labels/kickers/badges only — never to sentence-case body text.

**Spacing:** a simple 4px-based scale (`--space-1` 4px through `--space-8` 64px), not literal tokens in the original source but consistent across every measured use — promoted here for reuse.

**Backgrounds:** no photography, no illustration. The signature background (`.cc-page-bg`) is a layered radial glow (cyan top-right, violet left) over a near-black gradient, plus a faint 44px grid overlay (`::before`, ~2.5% opacity lines) — decorative depth without texture or grain.

**Animation:** minimal and functional only — a 0.15s ease on hover/focus transitions (buttons, nav links, copy button), a 0.35s ease width transition on the progress bar fill. No entrance animations, no bounces, no page-level motion.

**Hover states:** color shift, not scale — links and nav items brighten to `--cyan` or gain a faint cyan-tinted background wash (`rgba(42,216,216,.06–.1)`); the primary button hover brightens `--cyan` itself (`#35e8e8`). Nothing darkens on hover; nothing scales.

**Press/active states:** not distinctly styled beyond the browser default — this is a docs theme, not an app, so there's little need for a press state beyond checkbox/button `:disabled` (45% opacity) and focus rings (`0 0 0 3px` cyan at 15% alpha on form fields).

**Borders:** hairline (1px) throughout, `--border` (#22314a) standard, `--border-soft` (#192536) for low-contrast dividers. Callouts and the command-breakdown box use a 3–4px **left-border accent** in the semantic color — the one deliberate exception to hairline borders, and it's meaning-coded, not decorative.

**Shadows:** almost none. The single shadow token, `--shadow-term`, is a soft downward shadow (`0 12px 30px -18px rgba(0,0,0,.8)`) used only under the terminal block, to lift it slightly off the page. Cards, tables, and everything else rely on borders + surface-step contrast instead of shadow.

**Corner radii:** small and consistent — 6px (chips/inputs), 9px (cards/callouts), 11px (terminal/diagram), 12px (stat cards), 20px pill (chips/badges). Nothing sharp-cornered, nothing heavily rounded.

**Cards:** `.card` (stat tiles) use a subtle diagonal gradient (`--surface-2` → `--surface`) + 1px border + 12px radius, no shadow. `.term` (terminal) is the only bordered container with a real shadow. Neither uses a colored left-border — that's reserved for callouts/breakdowns.

**Transparency/blur:** used exactly twice — the sticky progress bar (`rgba(8,11,17,.86)` + `backdrop-filter: blur(10px)`) so content scrolling beneath it stays legible but hazy, and the semantic tints inside callouts/legend/badges (5–15% alpha washes of each accent color).

**Layout rules:** fixed sticky sidebar TOC (260px) with scroll-spy active-state tracking, collapsing to a hamburger overlay under 980px. Main content column capped at an 880px reading measure, centered.

**Imagery:** none in the source — this is a typography-and-color system, not an imagery-driven brand. If photography is ever introduced, no direction exists yet for warmth/grain/treatment; treat as an open question.

## Iconography

There is **no icon font, SVG icon set, or PNG icon set** anywhere in the source. The system uses **plain unicode characters as functional icons** instead: `☰` (mobile nav toggle), `✓` (checked runbook step, rendered via `::after` on a custom checkbox), `×` (alert dismiss), `?` (recall drop-down marker, in a small rounded badge). Emoji are never used. If the system grows to need illustrative icons, source a CDN set matching the theme's thin, technical linework (e.g. Lucide) rather than inventing new glyphs — see `guidelines/iconography.html` for the current inventory.

No logo was provided; `assets/` is intentionally empty and the plain wordmark "Command Center" stands in for a mark everywhere. See `assets/README.md`.

## Caveats / open questions

- **Fonts are CDN-linked, not vendored.** `tokens/typography.css` `@import`s the Google Fonts CSS2 endpoint for Chakra Petch, IBM Plex Sans, and JetBrains Mono (matching the original source's own recommended usage) rather than shipping local font binaries — none were provided, and these are the exact fonts the source already specifies (not a substitution). If offline/self-hosted fonts are needed, provide the `.woff2` files and this can be converted to local `@font-face` rules.
- **`forms/` and `feedback/` components are a draft**, invented to cover basic app UI the static-doc source never needed — see "Intentional additions" above.
- **No light mode, nav bars, modals, dropdowns, or tooltips** exist yet — flagged as out of scope in the source `DESIGN_SYSTEM.md` too.

**Ask:** tell me if the draft form/alert primitives should be kept, reworked, or dropped — and whether this system should grow beyond the static-doc surface (nav bars, modals, tabs, toasts) into a full app-UI kit. I'd also love real font files and a logo if either exists, to replace the CDN font links and the plain wordmark.
