# VEX CASH — Responsive Account Page

A responsive React reproduction of a Figma-designed account/settings page ("Persönliche
Daten"), with a navigation system that reshapes itself across three distinct layouts as
the viewport narrows — a persistent sidebar, an inline card grid, and a mobile drawer.

This is a demo/take-home-style build: a single static page, no backend, no auth. The
interesting part is the responsive navigation, not a real product surface.

**Live demo:** https://aigerim-suleimenova.github.io/vex-cash-account-page/
(deploys automatically from `main` via `.github/workflows/deploy.yml`)

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
- **Component API mirrors react-bootstrap's own conventions**, applied only where they
  mean something for this app: `forwardRef` + a polymorphic `as` prop + native
  HTML-attribute passthrough on every component that's a real render target
  (`Header`, `EmptyState`, `PersonalDataContent`, `SidebarNav`, `InlineNav`,
  `DrawerNav`), via a local `DynamicRefForwardingComponent` type
  (`src/types/polymorphic.ts`) rather than depending on `@restart/ui` for one type.
  Deliberately *not* applied to `NavItem` (its whole job is client-side routing via
  `<Link>`, so swapping the element would break navigation) or the `Icon*` components
  (an `<svg viewBox>` has no sensible polymorphic target) — both still get
  `forwardRef`, just no `as`.
- **Every component's classes live in one frozen `STYLES` object**, not scattered
  top-level constants. `clsx` is used only where it does real work — merging the
  consumer-passed `className` prop, or genuinely conditional classes (e.g. an active
  nav item's highlight) — never wrapped around a single static string.

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
  types/                   polymorphic.ts — the local DynamicRefForwardingComponent type
```

Each component lives in its own folder; there's no `shared/` folder — the codebase
deliberately doesn't have a generic "reusable components" bucket, since nothing here
(other than icons, which get their own folder) is used in more than one place.