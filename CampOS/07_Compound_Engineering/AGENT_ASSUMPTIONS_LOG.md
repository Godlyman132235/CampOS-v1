# CampOS — Agent Assumptions Log

When Cursor or Claude Code makes a decision without asking the user,
that assumption is logged here. Every entry gets reviewed.
Unchecked assumptions compound silently into architectural drift.

---

## Why This File Exists

Agents make silent decisions constantly. They choose a layout approach,
pick a variable name, interpret an ambiguous requirement, or decide how
to handle an edge case. When these align with your intent, nothing
goes wrong. When they do not, the product quietly becomes something
you did not ask for, with no clear moment when it happened.

Logging forces a review. Even if the assumption was correct, writing
it down makes it a conscious decision rather than an invisible one.

---

## Entry Template

Copy this for every assumption discovered during or after a session.

---
Date: [YYYY-MM-DD]
Session number: [which session this came from]
Agent: [Cursor / Claude Code / Claude]
Task being worked on: [what the session was trying to build]

Assumption made:
[Exactly what the agent decided without asking. Be specific.
"The agent used flexbox for the Dashboard layout without being
asked to" is specific. "The agent made a layout choice" is not.]

Was this assumption correct?
[Yes / No / Partially]

Action taken:
[Accept and note as confirmed decision / Ask agent to revise /
Log and revisit later]

Impact if wrong:
[What would have gone wrong if this had not been caught.
If the assumption was correct, write N/A.]

---

---

## Assumption Entries

---
Date: 2026-08-20
Session number: 1
Agent: Cursor
Task being worked on: Build Stage B, the Dashboard shell and its five sections

Assumption made:
The prompt stated that the reduced-motion toggle only needed to exist, be
clickable and be styled, and that the motion-disabling logic could remain a
stub until the firefly effect prompt. Cursor implemented the behaviour fully
instead, wiring the toggle to a `data-reduced-motion` attribute on the html
element and adding CSS that collapses transitions to opacity and strips
transforms, on the reasoning that a switch which visibly moves while changing
nothing is worse than no switch.

Was this assumption correct?
Partially. Building the behaviour was the right call and the user kept it, but
the implementation shipped a layout bug. The CSS included
`transform: none !important` against a wildcard selector, which destroyed the
`translateY(-50%)` centring on both toggle knobs and dropped them below their
tracks the instant the setting was switched on.

Action taken:
Feature accepted, implementation fixed. The blanket transform override was
removed in favour of suppressing named motion transforms, and the knob was
re-centred with auto margins so it no longer depends on transform at all.
Both lessons recorded in LESSONS_LEARNED.md.

Impact if wrong:
The Settings panel would have looked broken to testers on first interaction,
on one of the few controls in v1 that invites a curious click. For a prototype
whose entire purpose is judging whether the concept feels credible, a visibly
broken control in the first minute is disproportionately damaging.

---
Date: 2026-08-20
Session number: 1
Agent: Cursor
Task being worked on: Build Stage B, moving the wordmark into the nav bar

Assumption made:
The prompt instructed that the wordmark be preserved exactly as built in
Build Stage A. Cursor kept its markup, classes and two-tone colouring intact
but overrode its font size in the nav bar, from `--type-3xl` (44px) down to
`--type-lg` (20px), on the grounds that 44px cannot fit a 44px-tall bar.

Was this assumption correct?
Yes, though it should have been raised rather than decided. The instruction to
preserve the wordmark exactly and the instruction to place it inside the nav
bar were in direct conflict, and a conflict between two explicit instructions
is exactly the case that warrants asking.

Action taken:
Accepted and noted as a confirmed decision. Flagged to the user in the build
summary at the time.

Impact if wrong:
Minor and immediately visible. A 44px wordmark would have forced the nav bar
taller than its 44px target and pushed Dashboard content below the fold,
breaking validation criterion DA-04.

---

## Patterns

[After 5-10 entries, recurring patterns will emerge.
Log them here so future prompts can be written to
prevent the same assumption from happening repeatedly.]