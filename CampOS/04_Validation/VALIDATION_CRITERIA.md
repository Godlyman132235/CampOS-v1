# CampOS v1 — Validation Criteria

Every design principle in `FRONTEND.md` has a matching pass/fail check here. 
This file is used to verify whether Cursor's output actually satisfies the spec.

"It looks done" is not validation. Work through every applicable criterion 
after each Build Stage.

---

## How To Use This File

After each Build Stage (A through I), run the checks that apply to what 
was just built. Mark each item PASS, FAIL, or NOT YET (not applicable at 
this stage). Log failures in `DECISIONS_LOG.md` and fix before moving on.

---

## Category 1 — Visual Identity

**VI-01:** The base background colour is `#0D0B14` or visually equivalent 
(near-black with a deep purple undertone). No grey, no blue-black, no pure 
black.

**VI-02:** Purple and blue are the only accent colours. No green, orange, 
yellow, or red used as accents (those colours exist only for functional 
states: success, warning, error).

**VI-03:** All heading text (H1, H2) uses Playfair Display (serif). 
Body text uses Inter (sans-serif). Code uses JetBrains Mono.

**VI-04:** All three fonts load from files bundled in the project. 
They are not fetched from Google's servers. No fallback 
system fonts are visible in place of the intended fonts.

**VI-05:** The CampOS wordmark is typeset in Playfair Display Bold. 
If the two-tone treatment is applied, "Camp" is `--color-text-primary` 
and "OS" is `--color-purple-strong`.

**VI-06:** No colours, font families, or spacing values are hardcoded. 
All values use CSS custom properties (variables) defined in the stylesheet.

**VI-07:** All UI containers (cards, panels, navigation bar, modals) 
use the widget visual treatment: translucent background, blur, thin border, 
subtle top-edge highlight, drop shadow.

**VI-08:** The interface has one visual identity only. No light mode exists. 
No theme switcher exists. No user-configurable colour or font settings 
(except reduced motion).

---

## Category 2 — Firefly Effect

**FF-01:** The firefly cursor-follow particle effect is present and 
visible on the Dashboard on desktop (≥1024px viewport).

**FF-02:** The firefly effect is completely absent from the Workspace. 
Zero particles appear during scenario execution.

**FF-03:** The firefly effect is absent on all touch/mobile viewports 
(where no cursor exists).

**FF-04:** When reduced motion is active (OS-level or in-app toggle), 
the firefly effect is fully disabled. No particles appear.

**FF-05:** The firefly effect does not cause visible frame drops or 
jank. Scrolling and interaction remain smooth while the effect runs.

**FF-06:** Firefly particles do not appear in front of text, buttons, 
or interactive UI elements (z-index is correct).

---

## Category 3 — Motion and Interaction

**MO-01:** Section transitions on the Dashboard involve a fade 
combined with a subtle horizontal slide (≤12px). No abrupt cuts.

**MO-02:** Scenario and theory cards on first render appear with a 
staggered fade-in (not all at once, not with large position shifts).

**MO-03:** The progress bar fill animates smoothly (left-to-right 
width transition) when progress updates.

**MO-04:** All interactive elements (buttons, cards, nav items) have 
visible hover states that respond within `--duration-fast` (150ms).

**MO-05:** All interactive elements have visible focus states (outline 
or background indicator). Tab navigation reaches all interactive elements 
in logical order.

**MO-06:** When reduced motion is active, all transitions reduce to 
opacity fades. No transform-based motion occurs.

**MO-07:** No animation runs in the output-review area of the Workspace during 
scenario work (except instant highlight of a marked claim or checklist item).

**MO-08:** Code line marking responds within `--duration-instant` (80ms). 
No delay between click and visual feedback.

---

## Category 4 — Dashboard

**DA-01:** Dashboard is the first thing a user sees on any visit 
(including first visit — no skill-tier picker, no splash screen, 
no onboarding modal by default).

**DA-02:** The progress bar is visible and shows "X of 8 scenarios 
completed" without requiring any navigation.

**DA-03:** A "continue where you left off" button or indicator is 
visible if the user has in-progress work.

**DA-04:** Progression View, Theory Browser, Scenario Launcher, 
Profile, and Settings are all accessible without scrolling past the 
fold on a 1280px-wide desktop viewport.

**DA-05:** The Scenario Launcher shows a maximum of 3 scenarios at once.

**DA-06:** Locked scenarios are visually distinct from available scenarios 
(different opacity, different icon, no hover effect).

**DA-07:** The current Dashboard section (tab) is clearly indicated in 
the navigation bar.

**DA-08:** No badges, XP, points, streak counters, or leaderboard 
elements appear anywhere in the Dashboard.

---

## Category 5 — Theory and Comprehension Check

**TH-01:** Clicking a theory piece opens it full-screen within the 
Dashboard (not a new page, not a modal popup). The back navigation 
is clear.

**TH-02:** Theory content renders with correct typography — Playfair 
Display for the title, Inter for body text, JetBrains Mono for any 
code examples.

**TH-03:** The comprehension check appears after the theory body. 
Each question has 4 options. Only one is selectable at a time.

**TH-04:** On passing the comprehension check, the linked scenario 
visually unlocks in the Scenario Launcher (the unlock animation fires). 
Exception: Theory 1 unlocks Theory 2 only and does not unlock a scenario.

**TH-05:** On failing the comprehension check, the user can retry. 
They are not locked out permanently.

**TH-06:** Theory pieces that have been completed show a clear 
completed indicator in the Theory Browser.

---

## Category 6 — Workspace

**WS-01:** Entering the Workspace from the Dashboard presents a 
three-region layout (output review, checklist / pillar actions, 
scripted outcomes) without any additional navigation or loading screen.

**WS-02:** The output-review region displays a plain-language description 
of what the agent already produced. It is not a code viewer. No syntax 
highlighting and no line numbers are required in V1.

**WS-03:** The learner cannot type free-text instructions. Direction 
is limited to defined instruction choices.

**WS-04:** There is no code-line marking in V1. The learner marks 
claims, gaps, or checklist items in the described output, not lines of code.

**WS-05:** The "reset to starting output" button returns the scenario 
to its starting state.

**WS-06:** The decision surface shows a checklist of actions for the 
current scenario. Each action is checkable/uncheckable.

**WS-07:** The "I'm done" / "Submit" button is only active after the 
user has interacted with at least one decision element.

**WS-08:** Choosing a defined instruction immediately 
shows its scripted outcome. The disclaimer that responses are 
pre-written is visible at all times (not hidden, not requiring a click).

**WS-09:** The Workspace has no firefly effect, no ambient animations, 
no motion in the output-review area during scenario work.

**WS-10:** On a viewport narrower than 1024px, the Workspace is replaced 
by a message: "This scenario is best experienced on a desktop or laptop. 
Please open the link on a larger screen."

**WS-11:** The "back to dashboard" button is always accessible from 
the Workspace without scrolling.

---

## Category 7 — Feedback Screen

**FB-01:** After submitting a decision, the feedback screen appears 
(fade transition — no abrupt switch).

**FB-02:** The feedback screen shows issue-count feedback (e.g., "You 
identified 3 of 4 invented claims"). It does not use score-style 
"you got X/Y right" phrasing.

**FB-03:** If a previous attempt exists for this scenario, a comparison 
is shown ("Last attempt: 2 of 4. This attempt: 3 of 4.").

**FB-04:** Performance-based tips appear after the stats.

**FB-05:** An A–E effectiveness grade plus written feedback is shown. 
No points, badges, streaks, numeric score (e.g., "70/100"), or 
ranking against other users appears anywhere on the feedback screen.

**FB-06:** The feedback screen has a clear path forward: a button to 
return to the Dashboard, or to retry the scenario.

---

## Category 8 — Progression and State

**PR-01:** Completing a scenario updates the progress bar on the Dashboard.

**PR-02:** Completed scenarios are marked as such in the Scenario Launcher 
and remain accessible (user can replay).

**PR-03:** Progress persists across browser sessions via localStorage 
(close the tab, reopen, progress is still there).

**PR-04:** "Reset all progress" in Profile clears all localStorage 
correctly. After reset, the Dashboard shows 0 of 8 scenarios completed.

**PR-05:** Scenario replay data (previous attempt stats) is stored 
correctly so the comparison on the feedback screen is accurate.

---

## Category 9 — Accessibility and Responsive

**AC-01:** All images and icons have descriptive alt text or aria-label.

**AC-02:** Heading hierarchy is correct: one H1 per page, H2 for major 
sections, H3 for subsections. No heading levels are skipped.

**AC-03:** All interactive elements are reachable and operable via 
keyboard (Tab, Enter, Space). Focus order matches visual order.

**AC-04:** All text meets WCAG AA contrast ratio: 4.5:1 for normal text, 
3:1 for large text (18px+ or bold 14px+). V1 does not undergo a full 
formal AA audit.

**AC-05:** The reduced-motion setting (in-app toggle) takes effect 
immediately without page reload.

**AC-06:** `@media (prefers-reduced-motion: reduce)` is implemented 
in CSS and correctly disables animations.

**AC-07:** The Dashboard layout is usable on a 375px mobile viewport 
(single column, readable, scrollable). It does not need to be beautiful 
on mobile — just not broken.

---

## Category 10 — Technical Baseline

**TE-01:** The site opens without errors in Chrome, Firefox, and Safari 
(latest versions).

**TE-02:** The browser console shows no errors on page load.

**TE-03:** No CSS or JS libraries are loaded. Fonts are bundled locally. 
Vanilla only.

**TE-04:** All scenario and theory content is loaded from JSON files 
(not hardcoded in HTML).

**TE-05:** localStorage reads and writes are wrapped in try/catch 
(graceful handling if localStorage is unavailable or full).

**TE-06:** The site is fully functional with JavaScript enabled. 
Graceful degradation for JS-off is not required in v1.

**TE-07:** The HTML is valid (no unclosed tags, no duplicate IDs, 
correct doctype).

## Category 11 — Educationl content (In process right now) 
