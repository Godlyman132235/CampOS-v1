# CampOS — Lessons Learned

The distilled insights worth keeping permanently.
Raw session notes live in SESSION_LOG.md.
This file contains only what matters long-term.

Update every 5-10 sessions, or immediately when a significant
lesson emerges that should not get buried in raw notes.

---

## Entry Format

Date: [YYYY-MM-DD]
Source: Session [number], or "planning phase" for pre-build lessons
Lesson: [One clear sentence stating what was learned]
Detail: [Optional. 2-4 sentences of context if the one-liner alone
is not self-explanatory.]

---

## Planning Phase Lessons

Date: 2026-08-17
Source: Planning phase
Lesson: Scope creep is the most likely failure mode for this project.
Every cut made during planning improves the prototype's chance of
actually shipping.
Detail: During planning, worldwide leaderboards, three skill tiers,
a theme switcher, an API chatbot, and code editing were all proposed
and cut. Each removal reduced build time and kept the prototype focused
on the validation question: is this concept useful?

Date: 2026-08-17
Source: Planning phase
Lesson: One file, one job. Files that try to cover two responsibilities
always create duplication and contradictions across sessions.
Detail: The original project structure had CLAUDE.md and CURSOR.md as
overlapping documents, and a single Planning folder mixing scope and
visual direction. Separating them prevented agents from receiving
contradictory information in future sessions.

Date: 2026-08-17
Source: Planning phase
Lesson: Context files that are too long reduce agent performance as
much as having no context file at all.
Detail: Research from Anthropic and an ETH Zurich 2026 study both
confirm bloated context files degrade agent decision-making. Every
line must pass the test: would removing this cause the agent to make
a mistake it would not otherwise make?

Date: 2026-08-17
Source: Planning phase
Lesson: The AUDIENCE_PSYCHOLOGY.md vignette section must be written
by the founder, not by Claude. First-person lived experience cannot
be substituted with research-based approximations.
Detail: The vignettes section was deferred at Stage 2 and must be
completed before the prototype is distributed. It is the emotional
foundation that scenario tone and feedback wording reference.

---

## Build Phase Lessons

Date: 2026-08-20
Source: Session 1, Build Stage B
Lesson: Reduced-motion styling must disable animation and transition only.
A blanket `transform: none` also destroys transforms that do static layout,
and CSS cannot tell the two purposes apart.
Detail: The reduced-motion rule in base.css applied
`transform: none !important` to every element on the page. Both toggle knobs
were centred with `top: 50%` plus `transform: translateY(-50%)`, so turning
the setting on dropped each knob 8px, leaving it hanging below its track.
Removing transform *transitions* is enough to stop movement. Any motion
transform applied as a state change rather than a transition must be
suppressed by name. Positioning is not motion, and no rule should treat it
as though it were.

Date: 2026-08-20
Source: Session 1, Build Stage B
Lesson: Confirming that state changed is not the same as confirming what
the state change rendered.
Detail: The toggle was reported as working on the strength of three checks:
`aria-checked` flipped correctly, both switches stayed in sync, and
transitions collapsed to opacity as intended. Every one of those passed
while the control was visibly broken, because none of them asked where the
knob actually ended up. A visible layout failure shipped as "verified".
Any check on an interactive element must measure that element's rendered
geometry in the state it lands in, not only its attributes and computed
transition properties.