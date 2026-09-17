# VEX CASH — Responsive Account Page

A responsive React reproduction of a Figma-designed account/settings page ("Persönliche
Daten"), with a navigation system that reshapes itself across three distinct layouts as
the viewport narrows — a persistent sidebar, an inline card grid, and a mobile drawer.

This is a demo/take-home-style build: a single static page, no backend, no auth. The
interesting part is the responsive navigation, not a real product surface.

## Getting started

```bash
npm install
npm run dev        # starts the dev server — see the printed URL
npm run build      # type-check (tsc -b) + production build
```

## What this app is

One populated page ("Persönliche Daten" — personal data) behind a 7-item navigation
list, where the navigation chrome itself changes shape by breakpoint:

- **Sidebar** (≥1200px, large desktop): persistent left nav, content beside it.
- **Inline grid** (768–1199px, tablet + desktop): no sidebar — a "Navigation" card grid
  fills the main area until an item is selected, then swaps for content (with a
  "← Navigation" link back).
- **Drawer** (≤767px, small + large mobile): a hamburger toggle opens a full-width nav
  grid over the content area; closing it without selecting returns to whatever was
  there before.

Only "Persönliche Daten" has real content — the source Figma export only designed one
populated page. The other six nav items (Kredite, Dokumente hochladen, E-Mail ändern,
Kennwort ändern, Kunden werben, Abmelden) route to a shared "content protected"
placeholder rather than fabricated pages.

## Key decisions

- **Breakpoints (568px / 768px / 992px / 1200px) mark the small-mobile / large-mobile /
  tablet / desktop / large-desktop tiers.** Navigation mode maps cleanly onto them:
  drawer for the two mobile tiers, inline grid for tablet + desktop, sidebar for large
  desktop.
- **No backend, on purpose.** `src/data/` holds static content (nav items, the one
  populated page's field values) — there's no API layer, no loading/error states,
  because there's nothing being fetched.
- **Bootstrap is customized, not used with its own defaults.** `src/styles/` overrides
  Bootstrap's Sass variables (breakpoints, colors, spacing scale) to match the Figma
  design exactly, rather than accepting Bootstrap's stock look.
- **Navigation selection lives in the URL** (React Router), not component state — every
  destination is a real route (`/persoenliche-daten`, `/kredite`, ...), so it survives
  a page reload and works with the browser's back/forward buttons.

## Project structure

```
src/
  components/
    Header/                Logo, user identity, mobile menu toggle
    EmptyState/             "Content protected" placeholder (two color variants)
    Navigation/              NavItem + the three layout variants (Sidebar/Inline/Drawer)
    PersonalDataContent/    The one populated content page
    Icons/                  One file per icon + a shared <Icon> primitive
  routes/                  React Router route elements + the router config
  data/                    Static nav items + personal data field values
  hooks/                   useNavigationMode — breakpoint → which nav layout
  styles/                  Bootstrap customization (_variables.scss, _utilities.scss)
```

Each component lives in its own folder; there's no `shared/` folder — the codebase
deliberately doesn't have a generic "reusable components" bucket, since nothing here
(other than icons, which get their own folder) is used in more than one place.

## Testing

No automated test suite. This was tried (Vitest + React Testing Library, 19 tests
across 5 files) and then deliberately removed — for a static, backend-less demo whose
correctness was already verified by hand against the Figma reference frames at every
breakpoint from 320px to 1920px throughout development, the tests were answering a
generic checklist rather than a real gap the project had hit.

## Known gaps

Checked directly against a "production-ready checklist" during development, so this is
recorded rather than left implicit:

- **No service/API layer.** Nothing to fetch — see "No backend" above. Would be
  fabricated scope for what this app actually does.
- **No forms.** The personal-data page is read-only display, not an editable form.
- **No loading/error states.** Same root cause as no service layer — nothing async to
  wait on or fail.
- **Accessibility is a baseline, not an audit.** `aria-current`, `aria-expanded`,
  `aria-hidden` on decorative icons, and `role="navigation"` are all correct. Not done:
  keyboard focus management (no Escape-to-close on the mobile drawer), and color
  contrast hasn't been formally verified — the brand green (`#92C81C`) is visually
  light and may not pass WCAG AA at small text sizes.
