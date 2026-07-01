---
name: anthropic-frontend-design
description: 'Anthropic Frontend Design — craft distinctive, high-craft frontend UIs that avoid the generic "AI-generated" look. USE FOR: building or restyling web interfaces, landing pages, dashboards, and components with intentional typography, color, layout, spacing, motion, and states; making a UI feel bespoke, opinionated, and production-grade; escaping default/templated aesthetics (centered hero + three cards + purple gradient). Applies to HTML/CSS, React, Tailwind, and design systems. Emphasizes strong visual point of view, hierarchy, accessibility, and detail. DO NOT USE FOR: backend logic, data modeling, non-UI tasks, or when the user explicitly wants a minimal wireframe with no styling.'
argument-hint: 'Optional: the surface to design (e.g. "landing page", "pricing table", "dashboard shell")'
---

# Anthropic Frontend Design

Design frontends with a strong, intentional point of view. The goal is work that
looks **crafted by a senior product designer**, not generated from a template. Every
choice — type, color, spacing, motion — should feel deliberate.

## Core Philosophy

1. **Have a point of view.** Pick a design direction (editorial, brutalist, warm/organic,
   technical/precise, retro, luxe) and commit to it consistently. Neutral-by-default is
   how UIs end up generic.
2. **Avoid the "AI slop" defaults.** These instantly read as machine-made:
   - Centered hero + subtitle + two buttons + a row of three identical cards.
   - Purple/blue `linear-gradient` on everything.
   - Emoji as feature icons, uniform `border-radius` everywhere, evenly gray borders.
   - Generic system font at one weight; no real type hierarchy.
   - Perfectly symmetric, low-contrast, "safe" layouts with no focal point.
3. **Detail is the product.** Hierarchy, spacing rhythm, hover/focus/active states,
   empty/loading/error states, and micro-interactions are what separate premium from
   amateur.
4. **Restraint beats decoration.** One or two strong ideas executed precisely > many
   competing effects. If everything is emphasized, nothing is.

## Procedure

1. **Establish direction first.** Name the aesthetic, mood, and reference points. State
   the primary emotion the UI should evoke and the single most important action.
2. **Define tokens before components.** Lock a type scale, color system, spacing scale,
   radii, shadows, and motion curves. Build everything from these — never one-off values.
3. **Compose with hierarchy.** Establish a clear focal point and reading order. Vary
   scale and weight aggressively; use asymmetry and negative space intentionally.
4. **Add states and motion last.** Wire up hover/focus/active/disabled, then purposeful
   transitions. Verify accessibility and responsive behavior.

## Typography

- Choose fonts with intent; pair a distinctive display/heading face with a highly legible
  body face. Avoid defaulting to Inter/system for everything unless the direction calls
  for it.
- Build a real **modular type scale** (e.g. 1.25 or 1.333 ratio). Use dramatic size and
  weight contrast between display, headings, and body.
- Set body `line-height` ~1.5–1.7, headings ~1.05–1.2. Tighten letter-spacing on large
  display type (`-0.02em`), loosen on small uppercase labels (`0.06–0.12em`).
- Constrain measure to ~60–75ch. Use `text-wrap: balance` on headings, `pretty` on body.
- Enable `-webkit-font-smoothing: antialiased` and `text-rendering: optimizeLegibility`.

## Color

- Build an intentional palette: a distinct **background**, foreground/ink, 1–2 accents,
  and a full neutral ramp (not pure `#000`/`#fff` and mid-grays). Tint neutrals slightly
  toward the accent for cohesion.
- Reserve the strongest accent for the single most important action. Don't paint every
  element with the brand color.
- Ensure **WCAG AA** contrast (4.5:1 body, 3:1 large text/UI). Design light and dark as
  deliberate palettes, not an auto-invert.
- Prefer layered/tinted shadows and subtle gradients with purpose over flat rgba-black
  drop shadows on everything.

## Layout & Spacing

- Use a consistent spacing scale (4/8-based). Space is a design element — be generous and
  rhythmic, not uniformly cramped.
- Break the predictable grid: asymmetric splits, offset elements, overlap, full-bleed
  moments, a clear focal point. Avoid the endless stack of centered sections.
- Align optically, not just mathematically. Establish a baseline rhythm between sections.

## Depth, Radii & Borders

- Pick a radius language and apply it consistently (or intentionally mix sharp + round for
  contrast). Avoid one blurry mid-radius on literally everything.
- Use borders with hue (tinted, not `#ccc`), hairlines, and layered shadows to signal
  elevation. Consider inner highlights and subtle rings for premium depth.

## Motion & Micro-interactions

- Motion must have purpose: entrance reveals, state feedback, spatial continuity. No
  gratuitous or looping chrome animation.
- Use expressive easing (e.g. `cubic-bezier(0.22, 1, 0.36, 1)`), short durations
  (150–450ms), and small, confident movements. Stagger lists for rhythm.
- Every interactive element needs visible `:hover`, `:focus-visible`, and `:active`
  states. Always honor `prefers-reduced-motion`.

## Craft Details (the difference between good and great)

- Design the empty, loading, error, and success states — not just the happy path.
- Real, specific content over lorem ipsum; realistic data reveals layout problems.
- Optical corrections (icon alignment, punctuation hanging, button label centering).
- Consistent iconography (a real icon set, consistent stroke) instead of emoji.
- Tasteful texture: noise, grain, subtle patterns, or imagery to avoid flat sterility.

## Accessibility (non-negotiable)

- Semantic HTML and correct heading order (one `h1` per view).
- Visible keyboard focus with readable contrast on every surface (including colored ones).
- Meaningful `alt` text; labels tied to inputs; sufficient target sizes (≥44px).
- Don't rely on color alone to convey meaning.

## Responsiveness

- Design mobile and desktop as intentional compositions, not one squeezed into the other.
- Fluid type/space with `clamp()`; sensible breakpoints driven by content, not devices.
- Thumb-friendly primary actions; avoid oversized padding and awkward mid-widths.

## Anti-patterns (reject these)

- Centered hero + 3 feature cards + gradient CTA as the default reflex.
- Purple/indigo gradients, emoji icons, uniform rounded corners, flat gray borders.
- One font, one weight, no hierarchy; walls of same-size text.
- Everything centered and symmetric with no focal point or negative space.
- Decoration without meaning; effects that fight for attention.

## Quick Starter Tokens

```css
:root {
  /* Type — pair a display + body face on purpose */
  --font-display: 'Your Display Face', serif;
  --font-body: 'Your Body Face', system-ui, sans-serif;

  /* Modular scale (~1.25) */
  --step-0: 1rem; --step-1: 1.25rem; --step-2: 1.563rem;
  --step-3: 1.953rem; --step-4: 2.441rem; --step-5: 3.052rem;

  /* Spacing (8-based) */
  --sp-1: .5rem; --sp-2: 1rem; --sp-3: 1.5rem; --sp-4: 2rem;
  --sp-5: 3rem; --sp-6: 5rem;

  /* Layered, tinted depth */
  --shadow-md: 0 2px 4px rgba(20,20,20,.05), 0 8px 16px rgba(20,20,20,.08);
  --shadow-lg: 0 4px 8px rgba(20,20,20,.06), 0 16px 32px rgba(20,20,20,.12);

  --ease-out: cubic-bezier(0.22, 1, 0.36, 1);
}

body { -webkit-font-smoothing: antialiased; text-rendering: optimizeLegibility; }
h1,h2,h3 { text-wrap: balance; line-height: 1.1; letter-spacing: -0.02em; }
:where(a,button):focus-visible { outline: 3px solid; outline-offset: 3px; }
@media (prefers-reduced-motion: reduce) { * { animation: none !important; transition: none !important; } }
```
