# CampOS — Product Overview

## What CampOS Is

CampOS is a web-based learning product for non-programmers who use AI agents to build software and want to become genuinely capable of supervising what those agents produce. It teaches through short theory pieces followed by realistic scenarios in which the user reviews scripted agent output, executes one of the five pillars, and judges what the agent produced — without reading code in V1.

CampOS closes the gap between people who can *prompt* AI agents into building software and people who actually *understand* enough about the resulting software to inspect it, question it, recognise problems, and intervene when something goes wrong.

## Who CampOS Is For

Primarily males aged approximately 16–24, globally, who identify with or participate in the vibe-coding community and want to progress toward serious Agentic Engineering. The average target user has zero traditional programming knowledge but has already used AI agents to build things and is quietly aware they do not fully understand what those agents produced.

The emotional starting point is not enthusiasm — it is confusion. The user has probably felt lost when their AI-generated code broke, when an agent modified something they did not ask about, or when they realised they could not tell whether a suggested change was safe. CampOS is designed for that person.

## The Vibe Coding → Agentic Engineering Distinction

CampOS is not a vibe-coding product and is not a coding course. Vibe coding is the starting environment many of the target users are coming from. Agentic Engineering is where CampOS takes them. The distinction is load-bearing throughout the product.

- **Vibe coding**: delegating implementation to AI, accepting output, minimal understanding of what was produced, low ability to intervene when things break.
- **Agentic Engineering**: still delegating implementation to AI, but supervising, validating, questioning, and intervening in the AI's work based on real understanding of what it produced.

CampOS never tries to turn users into traditional software engineers. It aims to make them competent supervisors of AI agents.

## What The Prototype Is

The first version of CampOS is a validation prototype — a static frontend HTML/CSS/JS site distributed through social media to real users. Its purpose is to test whether the CampOS concept, learning loops, and positioning are genuinely useful to the target audience. It is not the final production product.

Explicitly, the prototype has:
- A minimal backend that is not yet user-facing and will expand as V1 completes
- No payment
- No real AI chatbot (the Workspace uses defined instruction choices with scripted outcomes)
- Local state via browser `localStorage`, plus a tester contact email collected once upfront
- One skill tier (non-programmer only). V2 skill-tier names are out of scope for this file.

Everything else is deferred to v2 or later, documented in `02_Product_Planning/BACKEND_BACKLOG.md`.

## The Three-Area Model

CampOS has three conceptual areas:

- **Dashboard** — the user's orientation and preparation environment. Contains the scenario launcher, a progression view, minimal profile and settings. This is where the user sees progress and decides what to do next.
- **Theory** — the educational pieces the user must understand before a scenario unlocks.
- **Workspace** — where the user applies knowledge inside a scenario. The learner reviews output the scripted agent already produced, identifies what is wrong or missing, and executes the current pillar through defined instruction choices. Not a code viewer in V1.

The user goes from Dashboard to Theory to Workspace.

The Dashboard prepares. Theory teaches. The Workspace applies.

## The Learning Loop

The prototype's core loop is a single path the user walks repeatedly:

1. **Dashboard** — user sees where they are, what they have completed, what is next.
2. **Theory** — user reads a short piece of theory about an Agentic Engineering concepts.
3. **Comprehension check** — user answers multiple-choice questions on the theory (pass is 3 of 4). Passing unlocks the linked scenario, except Theory 1, which unlocks Theory 2 only. Failing allows retry.
4. **Scenario (Workspace)** — user reviews scripted agent output, completes a checklist, and picks a defined instruction. No code reading in V1.
5. **Feedback** — user sees an A–E grade (effectiveness of the checklist), issue-count feedback, comparison to previous attempts, and tips. No points, badges, streaks, or ranking against other users.
6. **Return** — user comes back to Dashboard. Progress is updated. Next theory is available.

The prototype ships with 8 scenarios of increasing difficulty within a single skill tier (non-programmer). All 8 must be completable end-to-end for the prototype to be considered shippable.

## What CampOS Teaches First

Theory 1 is orientation (vibe coding vs agentic engineering, the five pillars at a glance). It has no scenario. Theory 2 is Context Engineering (“context is king”) and unlocks Scenario 1. Every later pillar assumes the learner can give useful context.

## What Success Looks Like

The prototype succeeds if 20–50 non-programmer testers of our target audance complete all 8 scenarios and 30–40% of them give unprompted positive feedback indicating CampOS is useful for their transition from vibe coding to Agentic Engineering. Below this bar (either in completion volume or positive rate) triggers a re-evaluation of the concept rather than a v2 build.

If completion volume falls short of 20, secondary signal is qualitative depth — long, specific, unprompted feedback from any completer counts as validation input even if the sample size is too small to trust percentages.

## Non-Goals For The Prototype

- Not a coding tutorial
- Not a replacement for real Agentic Engineering practice
- Not a course with certificates, credentials, or accreditation
- Not a social product (no comments, no user-to-user visibility, no leaderboards in v1)
- Not a comprehensive curriculum — 8 scenarios is a taste, not a syllabus
- Not a mobile-first product — Dashboard degrades gracefully, Workspace is desktop-only with a "please open on desktop" notice on mobile