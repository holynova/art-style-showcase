# Changelog

All notable changes to this project will be documented in this file.

## 2.2.0 - 2026-09-03

### Features
- **URL Hash Routing & State Persistence**: Support deep linking, browser history back/forward navigation, and query parameter synchronization (`#scene=...`, `#style=...`, `#art=...`, `&q=...`, and shorthands).
- **Masonry Layout & 3-Column Display**: Restructure gallery grid to a maximum of 3 columns per row for generous artwork presentation, with responsive fallback to 1-2 columns on mobile devices.
- **Craft Micro-Interactions Suite**: Incorporate tactile `:active` physical press feedback (`scale(0.975)`), modal viewport settlement, sliding prompt bar drawer, toast cubic-bezier acceleration curves, and shuffle die-roll animation.
- **Integrated Design Engineering Skills**: Add Emil Kowalski's complete skill suite for animation and craft review (`.agents/skills`).

### Fixes
- **Progressive Blur-Up & Zero Layout Shift**: Lock lightbox viewport geometry to artwork aspect ratios, rendering blurred placeholders at exact target dimensions to completely eliminate thumbnail size jumps.
- **Accessibility & Craft Polish**: Global WCAG AA 4.8:1 contrast compliance, accessible focus rings (`:focus-visible`), modal focus management, and keyboard navigation (`Escape`, `ArrowLeft`/`ArrowRight`).
- **Codebase Sanitization**: Remove dead legacy code (`openLightbox`, unused `STYLE_CATEGORIES`), prune 6MB+ obsolete debug artifacts, and configure asset cache-busting.

## 2.1.0 - 2026-09-02

### Features
- Expand to 41 art styles including 7 historical printmaking & newspaper graphic styles (Woodcut, Pen-Hatching, Halftone, CMYK Overprint, Lithograph, Screen Print, Etching).
- Dual-mode matrix exploration (browse by scene or by style).
- Cross-model comparative view (Gemini vs ChatGPT) in cinema lightbox.
- Full-screen cinema lightbox with 1.5x zoom and floating prompt HUD.
