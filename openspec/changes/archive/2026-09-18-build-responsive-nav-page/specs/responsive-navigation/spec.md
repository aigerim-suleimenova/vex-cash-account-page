## Purpose

Defines how the account-page navigation (header + primary nav) reflows across viewport widths — persistent sidebar, inline nav grid, or a toggleable drawer — while keeping the current destination selection consistent as the viewport changes.

## ADDED Requirements

### Requirement: Breakpoint-driven navigation layout
The system SHALL render one of three navigation layouts based on viewport width: a persistent sidebar at 1440px and wider, an inline navigation grid from 769px up to 1439px, and a toggleable drawer at 768px and narrower. (The reference "mobile" frame is exactly 768px wide and uses the drawer pattern, which is why the drawer/inline split falls at 768/769 rather than the more common 767/768.)

#### Scenario: Large desktop width shows persistent sidebar
- **WHEN** the viewport is 1440px or wider
- **THEN** a left sidebar listing all 7 navigation items SHALL be visible at all times, and no hamburger toggle SHALL be shown

#### Scenario: Desktop/tablet width shows inline navigation grid
- **WHEN** the viewport is between 769px and 1439px inclusive
- **THEN** the sidebar SHALL NOT be rendered, and no hamburger toggle SHALL be shown

#### Scenario: Mobile width shows a drawer toggle
- **WHEN** the viewport is 768px or narrower
- **THEN** the header SHALL show a hamburger toggle button, and neither the sidebar nor the inline navigation grid SHALL be rendered by default

### Requirement: Sidebar navigation stays visible alongside content
At 1440px and wider, the sidebar SHALL remain visible regardless of whether a destination is selected, and the content area SHALL update independently next to it.

#### Scenario: Selecting a destination keeps the sidebar visible
- **WHEN** the user selects a navigation item while the sidebar is showing
- **THEN** the sidebar SHALL remain visible and unchanged in position, and the content area to its right SHALL update to reflect the selected destination

#### Scenario: Active item is highlighted in the sidebar
- **WHEN** a navigation item is the current destination
- **THEN** that item's row SHALL render with the active background, icon, and label colors, distinct from the other 6 items

### Requirement: Inline navigation grid swaps with content
Between 769px and 1439px, the main area SHALL show either the navigation grid or the selected destination's content, never both, with a way to return to the grid from the content view.

#### Scenario: No destination selected shows the navigation grid
- **WHEN** the viewport is between 769px and 1439px and no destination has been selected
- **THEN** the main area SHALL show a "Navigation" heading followed by the 7 navigation items arranged as a card grid, and no content SHALL be shown

#### Scenario: Selecting a destination shows content instead of the grid
- **WHEN** the user selects a navigation item from the inline grid
- **THEN** the navigation grid SHALL be replaced by the selected destination's content, and a control to return to the navigation grid SHALL be shown

#### Scenario: Returning to navigation from content
- **WHEN** the user activates the return-to-navigation control while content is shown
- **THEN** the main area SHALL switch back to showing the navigation grid

### Requirement: Drawer navigation toggles between placeholder, grid, and content
At 768px and narrower, the header toggle SHALL open and close a full-width navigation grid that replaces whatever is currently shown in the content area.

#### Scenario: Initial load shows the closed placeholder
- **WHEN** the page loads at a viewport of 768px or narrower and no destination has been selected
- **THEN** the content area SHALL show the closed-state placeholder and the header toggle SHALL display as a hamburger icon

#### Scenario: Opening the drawer
- **WHEN** the user activates the hamburger toggle
- **THEN** the content area SHALL be replaced by the navigation grid, and the toggle icon SHALL change to a close (X) icon

#### Scenario: Selecting a destination from the open drawer
- **WHEN** the user selects a navigation item while the drawer is open
- **THEN** the drawer SHALL close, the toggle icon SHALL revert to the hamburger icon, and the content area SHALL show the selected destination's content

#### Scenario: Closing the drawer without selecting
- **WHEN** the user activates the close (X) toggle while the drawer is open
- **THEN** the drawer SHALL close and the content area SHALL return to whatever it displayed before the drawer was opened

### Requirement: Header reflows user identity information at mobile widths
The header SHALL show the user's welcome name and identification status inline with the logo at 769px and wider, and as a separate bordered bar beneath the header at 768px and narrower.

#### Scenario: Desktop/tablet/large-desktop header layout
- **WHEN** the viewport is 769px or wider
- **THEN** the user welcome text and identification status SHALL render inline within the header, to the right of the logo

#### Scenario: Mobile header layout
- **WHEN** the viewport is 768px or narrower
- **THEN** the user welcome text and identification status SHALL render in a separate bordered bar directly below the header

### Requirement: Selection state persists across breakpoint changes
The currently selected navigation destination SHALL be preserved when the viewport is resized across breakpoints, so the same content (or lack of selection) is reflected in whichever layout becomes active.

#### Scenario: Resizing from inline grid to sidebar keeps the selection
- **WHEN** a destination is selected while the inline navigation grid is active and the viewport is then widened to 1440px or more
- **THEN** the sidebar SHALL appear with the same destination marked active and its content SHALL remain shown
