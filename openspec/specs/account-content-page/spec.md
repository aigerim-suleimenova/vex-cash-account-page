# Account Content Page Specification

## Purpose

Defines the content rendered in the account page's main area: the populated "Persönliche Daten" data page, and the placeholder shown when no content is available, including how each reflows across breakpoints.

## Requirements

### Requirement: Personal data content page
Selecting "Persönliche Daten" SHALL display the person's data grouped into three labeled sections — "Persönliche Daten", "Familiäre Angaben", and "Beschäftigungsdaten" — each with a colored accent underline beneath its heading.

#### Scenario: All fields render with label and value
- **WHEN** the "Persönliche Daten" destination is displayed
- **THEN** each of the following fields SHALL render with its label above its value: Anrede, Vorname, Nachname, Geburtsdatum, Geburtsort, Mobiltelefon-Nummer, Staatsbürgerschaft, Familienstand, Kinder, Kindergeld, Beschäftigungsstatus, "Arbeiten Sie in Kurzarbeit?", and Nettoeinkommen

#### Scenario: Rows are separated by a divider
- **WHEN** the "Persönliche Daten" destination is displayed
- **THEN** every field row except the last in its section SHALL show a divider line beneath it

### Requirement: Personal data content reflows across breakpoints
The personal data content SHALL keep its two-column layout — "Persönliche Daten" as the left column, "Familiäre Angaben" followed by "Beschäftigungsdaten" as the right column — at every reference width from 567px to 1440px; there is no single-column layout anywhere in the source designs, including at the narrowest reference frame. What changes across widths is the field style and spacing: stacked label-above-value at 1199px and wider, label/value on the same row at 769–1198px, and back to stacked label-above-value (with tighter spacing) at 768px and narrower.

#### Scenario: Desktop and large-desktop two-column layout
- **WHEN** the viewport is 1199px or wider
- **THEN** "Persönliche Daten" SHALL render as the left column, and "Familiäre Angaben" followed by "Beschäftigungsdaten" SHALL render as the right column, with each field's label stacked above its value

#### Scenario: Tablet compact two-column layout
- **WHEN** the viewport is between 769px and 1198px inclusive
- **THEN** the two columns SHALL remain side by side, but each field SHALL render its label and value on the same row rather than stacked

#### Scenario: Mobile and small-mobile two-column layout
- **WHEN** the viewport is 768px or narrower
- **THEN** the two columns SHALL remain side by side, each field's label SHALL stack above its value (as at 1199px and wider), and both the section padding and the field label size SHALL be smaller than at 1199px and wider

### Requirement: Empty-state placeholder for unavailable content
Destinations without designed content, and the default state before any destination is selected in layouts that do not show the navigation grid by default, SHALL display an empty-state placeholder instead of content. There are exactly two placeholder variants — a lock-icon variant and a shield-icon variant — and every layout and selection case below maps to one of the two.

#### Scenario: Large-desktop default placeholder
- **WHEN** the viewport is 1440px or wider and no destination has been selected
- **THEN** the content area SHALL show the lock-icon variant: a lock icon and the text "Inhalte geschützt — Wählen Sie ein Navigationsziel"

#### Scenario: Mobile closed-drawer placeholder
- **WHEN** the viewport is 768px or narrower, the drawer is closed, and no destination has been selected
- **THEN** the content area SHALL show the shield-icon variant: a shield icon and the text "Inhalte geschützt"

#### Scenario: Selecting a destination without designed content at large-desktop or inline-grid widths
- **WHEN** the viewport is 769px or wider and the user selects any navigation item other than "Persönliche Daten"
- **THEN** the content area SHALL show the lock-icon variant, the same one used as the large-desktop default placeholder (inline-grid mode has no empty-state placeholder of its own, since its default state is the navigation grid rather than a placeholder)

#### Scenario: Selecting a destination without designed content at mobile widths
- **WHEN** the viewport is 768px or narrower and the user selects any navigation item other than "Persönliche Daten"
- **THEN** the content area SHALL show the shield-icon variant, the same one used as the mobile closed-drawer placeholder
