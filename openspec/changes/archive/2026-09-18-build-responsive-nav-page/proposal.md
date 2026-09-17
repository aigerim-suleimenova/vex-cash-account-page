## Why

We have a Figma export (10 frames across 5 breakpoints × open/content states) for a "VEX CASH" account page but no code yet. We need a working, pixel-faithful React implementation that reproduces the navigation and content behavior across all breakpoints, since the repo is currently empty.

## What Changes

- Scaffold a new React app (Vite + React, plain CSS) in the repo root.
- Build a responsive `Header` (logo/tagline, user welcome + identification status) that reflows from a single row (desktop) to a stacked user-bar (mobile).
- Build a responsive `Navigation` component with three layout modes driven by viewport width:
  - **Sidebar mode** (≥1440px): persistent 260px left sidebar, 7 items, always visible alongside content.
  - **Inline grid mode** (768–1439px): sidebar replaced by an inline 3-column "Navigation" card grid shown in the main area; selecting an item swaps the main area to the content view (no persistent nav visible once a destination is chosen, so the content view includes a "back to navigation" affordance).
  - **Drawer mode** (≤767px): header shows a hamburger/close toggle; default view is a compact placeholder; toggling opens a full-width nav card grid (3 columns at mobile width, 2 columns at small-mobile width) that replaces the content area.
- Build a `PersonalDataContent` page (the only populated content template in the designs) reproducing the two-column ("Persönliche Daten" / "Familiäre Angaben" + "Beschäftigungsdaten") data grid, which collapses to a label/value compact layout on tablet and a stacked layout on mobile.
- Build a shared `EmptyState` component ("Inhalte geschützt…") reused both as the large-desktop no-selection state and as the destination for the 6 nav items that have no designed content yet.
- Wire navigation selection state (which nav item is active) to swap the main content area between `EmptyState`, `PersonalDataContent`, and (for the 6 undesigned items) `EmptyState` again, consistently across all three navigation modes.

## Capabilities

### New Capabilities
- `responsive-navigation`: Breakpoint-driven navigation chrome (sidebar / inline nav-grid / hamburger drawer), including the header, active-item styling, and view-swapping behavior between navigation and content.
- `account-content-page`: The personal-data content page and the shared empty-state placeholder, including their responsive column/stacking behavior.

### Modified Capabilities
(none — greenfield project, no existing specs)

## Impact

- New repo scaffold: `package.json`, Vite config, `src/` (components, styles), `index.html`.
- No existing code, APIs, or systems affected (empty repository).
- Assumptions carried forward from design review (recorded in `design.md`): tablet (991px) follows the same inline-grid pattern as desktop since no `tablet-open` frame was provided; the 6 nav items without designed content route to the shared empty state; stack is Vite + React + plain CSS (no UI framework) since none was specified; the mobile drawer's 3-col/2-col grid switch is set at 600px, a documented midpoint since the only two reference frames are at 567px and 768px. All 7 nav items and their icons are confirmed directly from the Figma exports (see `design.md` - Decisions).
