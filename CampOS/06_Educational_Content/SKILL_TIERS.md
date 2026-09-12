# CampOS — Skill Tiers

This file defines the skill tiers CampOS uses to calibrate content
difficulty. In v1 there is only one tier. V2 skill-tier names are
out of scope and parked here only as a reminder that they are not
being designed now.

---

## Version 1 — Active

### Tier 1: Non-Programmer (the only active tier in v1)

Who this is for:
Someone who has used AI agents to build things but has never written
code themselves. They do not know what a variable is, cannot read
a function definition, and would not know where to begin if asked
to write HTML from scratch. They have probably used Cursor, Claude,
ChatGPT, or similar tools to generate an entire project without
understanding most of what was produced.

What they already know:
How to prompt an AI agent. What they want to build at a product level.
That something went wrong when it did, even if they cannot explain why.

What they do not know:
How to give the agent persistent context. How to check output against
what they asked. How to choose tools on purpose. How to keep a project
the agent can reuse. How to carry lessons into the next session.

What CampOS teaches this tier across 8 scenarios:
- The five pillars: Context Engineering, Agentic Validation,
  Agentic Tooling, Agentic Codebase, Compound Engineering
- How to review scripted agent output and execute a pillar
- How to persist constraints instead of re-prompting
- Code reading is a V2 concern, not taught here

Content in v1 for this tier:
9 theory pieces (Theory 1 is orientation and unlocks Theory 2 only).
8 scenarios arranged from easiest to hardest within this single tier.
Scenarios unlock only by passing the linked theory check.
Theory pieces written in plain English with no assumed coding knowledge.
Checklist items that are observational and judgmental, not syntactic.

---

## Version 2 — Parked (not designed)

Additional skill-tier names and a first-load picker are out of scope
until V1 is validated. Do not invent v2 tier labels in product copy.

---

## How Tier Selection Works

In v1 there is no tier selection screen. All users are on Tier 1.
They land on the Dashboard and begin with Theory 1. Scenarios stay
locked until the linked theory check is passed.
