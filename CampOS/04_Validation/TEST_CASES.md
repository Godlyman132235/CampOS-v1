# CampOS v1 — Test Cases

Concrete manual test walkthroughs. Run these after each build stage. 
Do not skip. "Looks done" without running these is not done.

Use this file alongside `VALIDATION_CRITERIA.md`. Each test case 
exercises one or more validation criteria.

---

## Before Running Any Test

1. Open the prototype in an **incognito/private window** (clean localStorage)
2. Have the browser console open (F12 → Console)
3. Note any errors that appear during the test
4. Check viewport width is correct for the test (note desktop vs mobile tests)

---

## Test Block 1 — First Load and Dashboard

### TC-01: Clean First Load
**Prerequisites:** Incognito window, desktop viewport (≥1280px)
**Steps:**
1. Open the prototype URL
2. Observe what appears on screen
3. Check no console errors
4. Check the firefly effect is visible and moving with cursor

**Expected:**
- Dashboard loads (not a splash screen, not a picker)
- Progress bar shows "0 of 8 scenarios completed"
- Firefly effect is present and follows cursor
- No console errors

**Validates:** DA-01, DA-02, FF-01, TE-01, TE-02

---

### TC-02: Dashboard Navigation
**Prerequisites:** Desktop viewport, Dashboard loaded
**Steps:**
1. Click each navigation tab in turn: Progression, Theory, Scenarios, Profile, Settings
2. Note which tab is highlighted as active
3. Check section content changes

**Expected:**
- Each tab switches content without page reload
- Active tab is clearly highlighted
- Section transitions have a visible fade/slide animation
- Content for each section renders correctly

**Validates:** DA-04, DA-07, MO-01

---

### TC-03: Dashboard Mobile
**Prerequisites:** Resize viewport to 375px width
**Steps:**
1. Load the Dashboard
2. Scroll through the content
3. Click each navigation tab

**Expected:**
- Layout is single-column
- Text is readable (no overflow, no truncation beyond viewport)
- Navigation is accessible
- Firefly effect is absent (no cursor on mobile)
- Nothing is broken (broken means: content hidden, buttons unreachable, 
  horizontal scrollbar appears)

**Validates:** AC-07, FF-03, WS-10

---

## Test Block 2 — Theory and Comprehension Check

### TC-04: Opening a Theory Piece
**Prerequisites:** Desktop, Dashboard loaded, at least one theory piece in data
**Steps:**
1. Navigate to Theory Browser
2. Click a theory piece
3. Observe transition and layout

**Expected:**
- Theory opens full-screen within Dashboard (not new page, not modal popup)
- Title uses Playfair Display (serif)
- Body text uses Inter (sans)
- Code examples (if any) use JetBrains Mono
- Back/close navigation is clearly visible

**Validates:** TH-01, TH-02, VI-03

---

### TC-05: Passing the Comprehension Check
**Prerequisites:** Desktop, theory piece open with comprehension check
**Steps:**
1. Read theory piece to the end
2. Complete the comprehension check with all correct answers
3. Submit

**Expected:**
- Correct options show green highlight after submission
- A "you passed" confirmation or the unlock message appears
- For Theory 2 onward: the linked scenario shows an unlock animation in the Scenario Launcher
- For Theory 1: Theory 2 unlocks. No scenario unlocks.
- Theory piece is marked "completed" in Theory Browser

**Validates:** TH-03, TH-04, TH-06, MO-03 (if progress bar updates)

---

### TC-06: Failing the Comprehension Check
**Prerequisites:** Desktop, theory piece open with comprehension check
**Steps:**
1. Select wrong answers deliberately
2. Submit

**Expected:**
- Wrong options show red highlight after submission
- Correct answers are revealed (green) even if the user didn't select them
- User is offered a retry option
- The linked scenario does NOT unlock (Theory 1: Theory 2 does not unlock)

**Validates:** TH-03, TH-05

---

## Test Block 3 — Workspace and Scenarios

### TC-07: Entering a Scenario
**Prerequisites:** Desktop, a scenario has been unlocked via comprehension check
**Steps:**
1. Go to Scenario Launcher
2. Click the available scenario
3. Observe transition

**Expected:**
- Workspace loads with three regions: output review, checklist / pillar actions, scripted outcomes
- Scenario title and situation description are visible in output review
- The agent's existing output is described in plain language (not a code viewer)
- The pre-written-responses disclaimer is visible
- Firefly effect is absent
- No console errors

**Validates:** WS-01, WS-02, WS-08, WS-09, FF-02

---

### TC-08: Output Review Interactions
**Prerequisites:** Desktop, inside a scenario
**Steps:**
1. Try typing a custom instruction
2. Mark a described claim or checklist item (not a line of code)
3. Unmark it
4. Click the "reset to starting output" button

**Expected:**
- There is no free-text instruction box
- Claims / checklist items can be marked without line-of-code marking
- Reset restores the starting output

**Validates:** WS-03, WS-04, WS-05, MO-08

---

### TC-09: Instruction Choices
**Prerequisites:** Desktop, inside a scenario
**Steps:**
1. Choose each defined instruction option
2. Observe the scripted outcome

**Expected:**
- Each choice immediately shows its scripted outcome
- The disclaimer that responses are pre-written is always visible
- Outcomes appear with a fade-in animation
- No live model and no API call

**Validates:** WS-08, MO (scripted-outcome animation)

---

### TC-10: Submitting a Decision
**Prerequisites:** Desktop, inside a scenario
**Steps:**
1. Check off items in the decision checklist
2. Click "I'm done" / "Submit"
3. Observe transition

**Expected:**
- Submit button was inactive before any checklist interaction
- Submit button activates after at least one action
- Clicking submit transitions to feedback screen (fade animation)
- No abrupt cut

**Validates:** WS-07, FB-01

---

### TC-11: Workspace on Mobile
**Prerequisites:** Resize viewport to 375px or 768px (mobile/tablet)
**Steps:**
1. Navigate to a scenario

**Expected:**
- Workspace is not displayed
- A message appears: "This scenario is best experienced on a desktop 
  or laptop. Please open the link on a larger screen."
- No broken layout, no partially rendered workspace

**Validates:** WS-10

---

## Test Block 4 — Feedback Screen

### TC-12: First Attempt Feedback
**Prerequisites:** Desktop, completed first attempt of a scenario
**Steps:**
1. Submit scenario decision
2. Observe feedback screen

**Expected:**
- Issue-count feedback appears (e.g. invented claims found)
- An A–E effectiveness grade is shown
- No "previous attempt" comparison shown (this is the first attempt)
- Performance tips appear below
- No points, badges, streaks, numeric score, or rank against other users
- Clear path forward (back to Dashboard or retry button)

**Validates:** FB-01, FB-02, FB-03 (no comparison first time), FB-04, FB-05, FB-06

---

### TC-13: Second Attempt Feedback
**Prerequisites:** Desktop, completed second attempt of a scenario
**Steps:**
1. Replay the same scenario
2. Submit a decision (can be same or different as first)
3. Observe feedback screen

**Expected:**
- Accuracy stats appear
- Comparison to first attempt is shown ("Last attempt: X. This attempt: Y.")
- Comparison is factually accurate (matches what actually happened in each attempt)

**Validates:** FB-03, PR-05

---

## Test Block 5 — Progression and State

### TC-14: Progress Persistence
**Prerequisites:** Desktop, complete at least one scenario
**Steps:**
1. Note current progress (X of 8)
2. Close the browser tab completely
3. Reopen the prototype URL (not incognito)

**Expected:**
- Progress bar shows same number (X of 8) as before closing
- Completed scenarios remain marked as completed
- Previously unlocked scenarios remain unlocked

**Validates:** PR-03

---

### TC-15: Reset All Progress
**Prerequisites:** Desktop, at least one scenario completed
**Steps:**
1. Go to Profile
2. Click "reset all progress"
3. Confirm if there is a confirmation dialog
4. Observe Dashboard

**Expected:**
- Progress bar resets to "0 of 8 scenarios completed"
- All scenarios show as locked or unavailable
- Previously completed theory pieces may or may not reset (TBD in implementation)
- LocalStorage is cleared correctly

**Validates:** PR-04

---

## Test Block 6 — Reduced Motion

### TC-16: In-App Reduced Motion Toggle
**Prerequisites:** Desktop, OS-level reduced motion OFF
**Steps:**
1. Open Settings
2. Toggle "Reduce motion" to ON
3. Navigate between Dashboard sections
4. Enter a scenario
5. Submit a decision

**Expected:**
- Section transitions are opacity fades only (no sliding)
- Firefly effect stops immediately
- Feedback screen stats appear without count-up animation
- Progress bar updates instantly (no animated fill)
- Toggle state persists across page reload

**Validates:** AC-05, MO-06, FF-04

---

## Test Block 7 — Technical Baseline

### TC-17: Console Check
**Prerequisites:** Any viewport
**Steps:**
1. Open browser console
2. Load the prototype
3. Navigate through Dashboard, Theory, Workspace, Feedback
4. Check console at each step

**Expected:**
- Zero errors at any point
- Warnings (if any) are non-critical and documented

**Validates:** TE-02

---

### TC-18: Vanilla Check
**Prerequisites:** Browser DevTools → Network tab
**Steps:**
1. Load the prototype
2. Check all network requests

**Expected:**
- Fonts load from local project files, not Google Fonts
- No CDN requests to jQuery, Lodash, Bootstrap, React, or any JS/CSS libraries
- No live-model API calls

**Validates:** TE-03

---

### TC-19: Cross-Browser
**Prerequisites:** Desktop, Chrome + Firefox + Safari available
**Steps:**
1. Open prototype in Chrome — run TC-01
2. Open prototype in Firefox — run TC-01
3. Open prototype in Safari — run TC-01

**Expected:**
- All three browsers display the prototype without visual breakage
- Backdrop-filter (widget blur effect) works in Chrome and Safari; 
  Firefox behaviour noted (Firefox has partial support)

**Validates:** TE-01

---

## Test Log Format

After running tests, log results in this format at the bottom of this file:

```
## Test Run — [Date] — Build Stage [X]

Tester: [user/claude/cursor]
Viewport: [1280px desktop / 375px mobile]

| Test Case | Result | Notes |
|-----------|--------|-------|
| TC-01     | PASS   |       |
| TC-02     | FAIL   | Section transition missing on Safari |
| TC-03     | SKIP   | Not applicable at this stage |

Failures logged in DECISIONS_LOG.md: [yes/no]
Fixed before proceeding: [yes/no]
```