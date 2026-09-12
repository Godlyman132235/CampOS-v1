# CampOS v1 — UI Direction

This file defines what CampOS looks like and why. It is the visual rules
document. Cursor/ Claude code follows these rules when building UI. Nothing here is
decoration for its own sake — every decision connects to the product's
emotional register and the user's psychological needs.

This file covers colour, typography, layout, widget system, and visual
identity. Motion and interaction are in MOTION_AND_INTERACTION.md.
Brand and logo are in ICON_BRAND.md.

---

## Emotional Register

CampOS should feel like a serious, premium tool for someone serious about
their craft. The visual reference is a dark, professional developer tool
crossed with a high-end learning platform.

Feel like: Coursera but in an IDE format, if it were designed by the team that made Linear or
Vercel.

Do NOT feel like:

- Duolingo (playful, bright, gamified)
- Codecademy (friendly but basic)
- A gaming interface (neon, intense, loud)
- A corporate enterprise product (cold, grey, flat)

The user is a 16-24 year old male who would immediately dismiss anything
that looks childish or generic. The visual design must signal "this is
for serious people."

---

## Colour Palette

Hex values below are the working starter palette. They will be updated
when Claude Design mockups are produced and placed in
03_Design_Visual/reference/. If mockup colours differ, the mockup takes
priority and this file must be updated to match. (MIGHT NOT DO THIS FOR V1) <- This, meaning the Claude design mock-up

Base (Dark Foundation)

--color-base: #0D0B14 (Near-black with a deep purple undertone)
--color-base-raised: #141020 (Slightly lighter, for cards and panels)
--color-base-float: #1C1830 (Elevated surfaces, widgets, modals)

Accent Purple

--color-purple-strong: #7C4DDB (Primary accent, interactive elements)
--color-purple-muted: #4A2E8A (Secondary uses, borders, outlines)
--color-purple-glow: rgba(124, 77, 219, 0.25) (Glow effects, halos)

Accent Blue

--color-blue-strong: #3B82F6 (Secondary accent, links, indicators)
--color-blue-muted: #1E4A8F (Borders, subtle highlights)
--color-blue-glow: rgba(59, 130, 246, 0.20) (Subtle blue glow)

Text

--color-text-primary: #EDE9F7 (Main body text, off-white purple tint)
--color-text-secondary: #9B97B0 (Supporting text, labels, metadata)
--color-text-muted: #5C5878 (Disabled states, placeholders)
--color-text-inverse: #0D0B14 (Text on light surfaces, rare)

Code Area (Workspace)

--color-code-bg: #0A0810 (Darkest surface, code area background)
--color-code-text: #E2DFF5 (Code text)
--color-code-line-num: #4A4660 (Line numbers)
--color-code-highlight: rgba(124, 77, 219, 0.15) (Selected or marked line)
--color-code-accept: rgba(34, 197, 94, 0.15) (Accepted code highlight)
--color-code-reject: rgba(239, 68, 68, 0.15) (Rejected code highlight)

Functional

--color-success: #22C55E (Correct answer, unlock, completion)
--color-warning: #F59E0B (Caution, hint cost)
--color-error: #EF4444 (Wrong answer, rejection)
--color-locked: #3D3A52 (Locked scenarios, disabled states)

Widget Surfaces (Glossy Elements)

--color-widget-bg: rgba(255, 255, 255, 0.06) (Base glass layer)
--color-widget-border: rgba(255, 255, 255, 0.10) (Subtle border)
--color-widget-shine: rgba(255, 255, 255, 0.14) (Top-edge highlight)
--color-widget-shadow: rgba(0, 0, 0, 0.40) (Drop shadow)

---

## Typography

Typeface Direction

Headings H1 to H3: Serif, editorial, premium, authoritative.
First choice: Playfair Display, Georgia, serif

Body and UI text: Sans-serif, clean, readable, professional.
First choice: Inter, system-ui, -apple-system, sans-serif

Code and artifacts: Monospace, technical clarity.
First choice: JetBrains Mono, Fira Code, Courier New, monospace

Playfair Display, Inter, and JetBrains Mono are the three V1 fonts.
Bundle them locally in the project. Do not load them from Google's servers.

Type Scale

--type-xs: 0.75rem (12px, metadata and labels)
--type-sm: 0.875rem (14px, secondary text and captions)
--type-base: 1rem (16px, body text)
--type-md: 1.125rem (18px, lead text and large UI)
--type-lg: 1.25rem (20px, subheadings)
--type-xl: 1.5rem (24px, H3)
--type-2xl: 2rem (32px, H2)
--type-3xl: 2.75rem (44px, H1)

Weight

--weight-regular: 400
--weight-medium: 500
--weight-bold: 700

Line Height

--leading-tight: 1.25 (Headings)
--leading-base: 1.6 (Body text)
--leading-code: 1.7 (Code blocks)

Letter Spacing

--tracking-tight: -0.02em (Large headings)
--tracking-base: 0em (Body text)
--tracking-wide: 0.06em (Labels and caps text)

Typography Rules

H1 and H2 always use Playfair Display (serif).
H3 and below can use Inter (sans) for cleaner hierarchy at smaller sizes.
Code always uses JetBrains Mono.
Never mix more than two weights in a single section.
Dark-on-light text is rare and used only in inverse contexts.

---

## Spacing and Layout

Spacing Scale (8-point grid)

--space-1: 0.25rem (4px)
--space-2: 0.5rem (8px)
--space-3: 0.75rem (12px)
--space-4: 1rem (16px)
--space-5: 1.5rem (24px)
--space-6: 2rem (32px)
--space-7: 2.5rem (40px)
--space-8: 3rem (48px)
--space-10: 4rem (64px)
--space-12: 6rem (96px)

All padding and margin values must come from this scale. No arbitrary
pixel values.

Layout Widths

--width-content: 720px (Body text, theory pieces)
--width-dashboard: 1280px (Max width for dashboard container)
--width-workspace: 1440px (Max width for workspace)

Border Radius

--radius-sm: 6px (Buttons, small chips)
--radius-md: 12px (Cards, panels, widgets)
--radius-lg: 20px (Large widget elements)
--radius-xl: 28px (Dashboard panels, prominent cards)
--radius-full: 9999px (Pills, badges, circular elements)

---

## The Widget System

What It Is

Widgets are CampOS's signature UI element. They are glossy, translucent,
widget-style surfaces inspired by macOS and iOS widget aesthetics. They
create depth, hierarchy, and a premium immersive feel without relying
solely on colour. When I refer to widgets, think of the UI of iPhone
and how they have created their widgets.

Widgets are the cross-device identity carrier. Unlike the firefly cursor
effect which only works on desktop Dashboard, widgets work everywhere
including desktop, tablet, and mobile.

What Widgets Look Like

Background: Translucent, dark, with a frosted glass quality.
Use backdrop-filter blur of 12px and background rgba(255,255,255,0.06).

Border: Ultra-thin, slightly lighter than the background.
Use 1px solid rgba(255,255,255,0.10).

Top edge shine: A subtle highlight on the top border to simulate light
hitting a glossy surface.
Use border-top of 1px solid rgba(255,255,255,0.20).

Shadow: A soft drop shadow that gives elevation from the base.
Use box-shadow of 0 8px 32px rgba(0,0,0,0.40).

Shape: Rounded, using radius from --radius-md to --radius-xl depending
on the size of the element.

Glow on interactive: Hover states add a subtle purple glow.
Use box-shadow 0 0 20px var(--color-purple-glow).

Where Widgets Are Used

- Dashboard section cards
- Theory piece cards in the browser
- Scenario launcher cards
- Workspace panels (output review, checklist, scripted outcomes)
- Navigation bar background
- Progress bar container
- Modal-style overlays
- Settings and profile panels
- Sidebar panel

Where Widgets Are NOT Used

- Plain text content (theory body text reads directly on the dark base)
- Output-review text (sits on --color-code-bg or the dark base; not a code viewer in V1)
- Feedback text (reads on a widget container but is not itself a widget)

CSS Implementation Pattern for Cursor

.widget {
background: var(--color-widget-bg);
backdrop-filter: blur(12px);
-webkit-backdrop-filter: blur(12px);
border: 1px solid var(--color-widget-border);
border-top-color: var(--color-widget-shine);
border-radius: var(--radius-xl);
box-shadow: 0 8px 32px var(--color-widget-shadow);
}

.widget--interactive:hover {
box-shadow:
0 8px 32px var(--color-widget-shadow),
0 0 20px var(--color-purple-glow);
border-color: rgba(255, 255, 255, 0.16);
transition: all 0.2s ease;
}

---

## The Firefly Cursor/ Claude Code Effect

What It Is

A cursor-follow particle animation. This is the signature effect for
CampOS's Dashboard on desktop. Inspired by Google's anti-gravity demo
and ambient particle effects common in premium dark-themed products. Hi,(the link for Google Antigravity: https://antigravity.google)

Rules

Exists on: Dashboard only, across all Dashboard sections.
Absent from: Workspace, entirely removed during scenario execution.
Device: Desktop only. Cursor does not exist on touch devices.
Motion setting: Immediately disabled if prefers-reduced-motion is active
or the in-app reduced-motion toggle is turned on.

Visual Character

- Small soft particles, 5 to 8px diameter, with blurred edges
- Purple and blue colour range matching the accent palette
- Trail of 15 to 25 particles following the cursor at varying distances
  and delays
- Particles have low opacity between 0.6 and 0.9
- Slow drift and fade on particles that fall away from the cursor
- No hard edges, no sharp colours, no large particles

Strength

Strong enough to notice, not strong enough to distract. The user sees
it immediately on first load. After a few seconds it recedes into
background awareness. This is the target state: noticed on arrival,
ambient afterward.

Implementation Notes for Cursor

- Canvas-based or CSS-based, whichever is simpler in vanilla JavaScript
- Must not cause jank, target 60fps on typical hardware
- Particles must not appear in front of text or interactive UI elements
- z-index must place the effect behind all content layers

---

## Layout Patterns

F-Pattern and Z-Pattern Scanning

Users scan screens in F-pattern (horizontal then vertical sweep) and
Z-pattern (diagonal for sparse layouts). High-priority information is
placed in the top and left of the visual field.

Dashboard application:

- Current progress (most important): top, left-center
- Theory and Scenario choices (second priority): middle vertical space
- Profile and Settings (least important): bottom or far right of nav

Workspace application:

- Code area (primary task): left, dominant in the reading eye path
- Decision surface (action): center
- Chat panel (secondary): right

Progressive Disclosure

Show the minimum needed to make a decision. Reveal detail on demand.

Dashboard example: Scenario cards show title and one-sentence
description. Full scenario description is revealed on hover or click,
not by default.

Theory example: Theory browser shows title and one-sentence summary.
Full text opens on click.

Whitespace as Structure

Whitespace is not empty space. It is a structural tool. Generous
whitespace between sections makes content scannable. Target: comfortable
density, not cramped and not sparse.

---

## Visual Hierarchy

Four levels of visual prominence. Every element belongs to exactly one.

1. Primary: The main action or information the user needs right now.
   One primary element per screen section. Full opacity,
   --color-purple-strong, or largest type size.

2. Secondary: Supporting information and secondary actions.
   Slightly smaller, --color-text-secondary or --color-blue-strong.

3. Tertiary: Metadata, labels, navigation.
   Smallest readable type, --color-text-muted.

4. Disabled or Locked: Elements that exist but cannot be interacted
   with yet. Use --color-locked, reduced opacity of 0.4, no hover
   effects.

---

## Components — Minimal Spec

Buttons

Primary button: Purple background, white text, radius-sm
Secondary button: Transparent background, purple border, purple text
Danger button: Error red background, white text (reset all progress)
Disabled button: --color-locked background, muted text, no hover

All buttons: minimum 44px height for accessibility, minimum 12px
horizontal padding.

Progress Bar

Container: widget style, full width of its section
Fill: linear gradient from --color-purple-strong to --color-blue-strong
Height: 10px
Rounded: --radius-full
Animated fill on update: smooth width transition over 0.4s ease

Comprehension Check (Multiple Choice)

Options: widget-style cards, full width of the question container
Unselected: default widget appearance
Selected: purple left border and subtle purple glow
Correct after submission: green highlight and checkmark icon
Wrong after submission: red highlight and x icon
Correct but unselected after submission: faint green to show the right
answer

Code Block

Background: --color-code-bg (darkest surface)
Font: JetBrains Mono, --type-sm
Line numbers: --color-code-line-num, right-aligned, subtle separator
Line marking by user: purple highlight via --color-code-highlight
Accept indicator: green row highlight
Reject indicator: red row highlight

---

## Reference Materials (Might not do this)

When Claude Design mockups exist they will be placed in:
03_Design_Visual/reference/

Cursor should read any files in that folder when implementing UI and
reconcile any differences between the mockup and this written spec.
If the mockup and this spec conflict, raise the conflict to the user
before deciding.

Assets intended for actual use in the prototype go in:
03_Design_Visual/assets/

---

## What Cursor Should Do With This File

Before building any UI component:

1. Check which section of this file applies
2. Use the CSS variable names defined here, never hardcode hex values
3. Apply the widget pattern to all container elements
4. Respect the type scale
5. Match spacing to the 8-point grid
6. Apply visual hierarchy and decide which level (1 to 4) each element
   belongs to

After building:

1. Check the component looks consistent with this file
2. Confirm no new colour values, fonts, or spacing values were invented
