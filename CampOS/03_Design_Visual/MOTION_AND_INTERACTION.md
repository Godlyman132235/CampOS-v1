# CampOS v1 — Motion and Interaction

This file defines how CampOS moves and responds. Every animation, transition, 
and interaction state is documented here.

The governing principle: **motion is present and seamless, never intense.**
Animations reward the user's actions and guide attention. They never dominate, 
distract, or become the point.

---

## Motion Philosophy

### Why Motion Exists in CampOS
- To communicate state changes (section transitions, unlock events, correct answers)
- To orient the user (where they just came from, where they're going)
- To reward progress (subtle, satisfying feedback on completion)
- To make the interface feel alive without feeling like a game

### Why Motion Is Controlled
- The Workspace involves high cognitive load (reading and judging code). 
  Motion during that task would compete for attention and degrade performance.
- The target audience is task-focused, not entertainment-focused. 
  Excessive animation signals "toy," not "tool."
- Accessibility: motion affects users with vestibular disorders. 
  Reduced-motion must be respected without degrading the experience.

---

## Reduced Motion

### Two Mechanisms
1. **OS-level:** CSS `@media (prefers-reduced-motion: reduce)` is always 
   respected. If the user's OS has reduced motion enabled, all animations 
   in CampOS are removed or reduced to simple opacity fades.

2. **In-app toggle:** Settings → "Reduce motion" toggle. Stores preference 
   in `localStorage`. Takes effect immediately without page reload. Overrides 
   OS setting (so a user who has OS motion on can still reduce CampOS motion).

### Reduced Motion Behaviour
When either mechanism is active:
- All transitions reduce to simple opacity fade (0.15s linear)
- No transforms (no sliding, scaling, or rotating)
- Firefly effect is fully disabled
- Progress bar fill is instant (no animated width transition)
- Comprehension check feedback is instant (no bounce or spring)

---

## Motion Token Reference

```css
/* Durations */
--duration-instant:  80ms
--duration-fast:     150ms
--duration-base:     220ms
--duration-slow:     350ms
--duration-enter:    400ms

/* Easing */
--ease-standard:  cubic-bezier(0.4, 0, 0.2, 1)   /* Most transitions */
--ease-enter:     cubic-bezier(0, 0, 0.2, 1)      /* Elements entering */
--ease-exit:      cubic-bezier(0.4, 0, 1, 1)      /* Elements leaving */
--ease-bounce:    cubic-bezier(0.34, 1.56, 0.64, 1) /* Soft bounce — 
                                                       used sparingly */
```

---

## Dashboard Motion

### Section Transitions (Between Dashboard Tabs)
- **Type:** Fade + subtle horizontal slide (12px)
- **Outgoing section:** Fade to 0 opacity, slide left 12px, `--duration-fast`, `--ease-exit`
- **Incoming section:** Fade from 0 opacity, slide from +12px to 0, `--duration-base`, `--ease-enter`
- **Overlap:** Slight crossfade — both run near-simultaneously

### Scenario/Theory Cards Loading
- **Type:** Staggered fade-in from bottom (8px)
- **Stagger delay:** 50ms between each card
- **Duration:** `--duration-base`
- **Only on first render.** No re-animation when returning to the same section.

### Progress Bar Update
- **Type:** Width transition, left to right
- **Duration:** `--duration-slow`
- **Easing:** `--ease-standard`
- **Visual:** Subtle glow pulse at the leading edge of the fill as it expands

### Unlock Event (Scenario Unlocked After Passing Comprehension Check)
- **Type:** Card border flash + pulse animation
- **Duration:** 600ms total
- **Sequence:** Border transitions to `--color-purple-strong`, fades to `--color-widget-border` over 600ms. Simultaneously, card scales from 1.0 to 1.02 and back (soft bounce).
- **Purpose:** Reward. The user passed the check — the unlock should feel satisfying.

### Firefly Cursor Effect
See `UI_DIRECTION.md` → The Firefly Cursor Effect section. 
Not documented here to avoid duplication.

---

## Workspace Motion

### Entering the Workspace (From Dashboard)
- **Type:** Fade-in of entire Workspace layout
- **Duration:** `--duration-enter`
- **Easing:** `--ease-enter`
- **No sliding or scaling** — the workspace doesn't "fly in," it resolves.

### Exiting the Workspace (Back to Dashboard)
- **Type:** Quick fade-out of Workspace, Dashboard fades in
- **Duration:** `--duration-fast` exit + `--duration-base` enter
- **No animation inside the output-review area at any point during scenario work.**

### Claim / Checklist Marking (User Marks an Issue)
- **Type:** Background colour transition on the marked claim or checklist item
- **Duration:** `--duration-instant`
- **Easing:** Linear
- **Rationale:** Must feel immediate and precise. Any delay feels broken.

### Accept/Reject Action (User Accepts or Rejects Code)
- **Accept:** Affected lines fade to `--color-code-accept` (green)
  over `--duration-fast`
- **Reject:** Affected lines fade to `--color-code-reject` (red)
  over `--duration-fast`
- **Reset to base:** All highlights fade out over `--duration-base`

### Submitting Decision ("I'm Done")
- **Type:** Button state change (loading → complete)
- **Duration:** Button shows a subtle pulse during the short processing 
  state (even though it's instant — the pulse signals "registered")
- **Then:** Fade transition to feedback screen

### Chat Panel Response Appearing
- **Type:** Message fades in from 0 opacity + slides up 6px
- **Duration:** `--duration-base`
- **Easing:** `--ease-enter`
- **No typing animation** — pre-scripted responses appear immediately (not 
  pretending to be typed) to reinforce the "this is a prototype" honesty.

---

## Feedback Screen Motion

### Screen Entering
- **Type:** Fade in from 0 opacity
- **Duration:** `--duration-enter`
- **Content stagger:** Stats appear first, then comparison, then tips. 
  150ms stagger between each section.

### Accuracy Stats Count-Up
- **Type:** Number counts up from 0 to the real value
- **Duration:** `--duration-slow`
- **Easing:** Ease-out (fast at start, slows at end — like a counter 
  settling to its value)
- **Purpose:** Makes the stat feel earned rather than instantly delivered.

### Comparison Line (vs. Previous Attempt)
- **Type:** Appears with a fade + 6px upward slide after the stats count-up 
  completes
- **Duration:** `--duration-base`
- **Only shown if a previous attempt exists** (no animation for a blank state)

---

## Interaction States — All Interactive Elements

### Hover
- **Default:** `--duration-fast`, `--ease-standard`
- **Widget cards:** `box-shadow` expands to include `--color-purple-glow`; 
  border lightens slightly
- **Buttons:** Background lightens by 10% (purple) or border lightens (secondary)
- **Code lines:** Subtle background highlight (`rgba(255,255,255,0.04)`)
- **Navigation tabs:** Underline or background indicator shifts

### Focus (Keyboard Navigation)
- **Style:** 2px solid `--color-purple-strong` outline, 2px offset
- **Never remove focus outlines entirely** — always visible for accessibility
- **Duration:** Instant (focus states must feel immediate)

### Active (Button Pressed)
- **Style:** Button scales to 0.97 (subtle press feel)
- **Duration:** `--duration-instant`

### Disabled / Locked
- **No hover effects** — disabled elements must not respond to cursor
- **Opacity:** 0.4
- **Cursor:** `not-allowed`

### Loading State
- **Type:** Subtle pulse animation on the loading element
- **Duration:** 1.4s loop
- **Easing:** Ease-in-out
- **Used for:** Scenario loading, theory loading (any data fetch)
- **Not used for:** Anything that is genuinely instant

---

## What Cursor/ Claude code Must Not Do

- No transform animations in the Workspace output-review area (ever)
- No animation on plain text (never animate body copy or code text)
- No animation that exceeds `--duration-slow` for UI feedback
- No entrance animations on page reload or section revisit (only first render)
- No animation that moves more than 30px in any direction (keep it subtle)
- No z-index conflicts between the firefly effect and content layers