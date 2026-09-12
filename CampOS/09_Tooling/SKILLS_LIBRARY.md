# CampOS — Skills Library

Skills are folders containing a SKILL.md file that Claude Code loads
automatically when a request matches the skill's description. They
encode repeated patterns so the same instruction does not need to be
given at the start of every session.

This file documents every skill planned for CampOS, what each one
does, when it should be built, and whether it has been built yet.

---

## What Skills Are (Quick Explanation)

A skill is a folder placed at .claude/skills/skill-name/ inside the
project. It contains a SKILL.md file with two parts:

Part 1: A short description under 200 characters that tells Claude Code
when to activate this skill automatically.

Part 2: The full instructions Claude Code follows once the skill activates.

Skills are scanned at session start. When what you ask matches a skill's
description closely enough, Claude Code loads and applies it without you
needing to explain it again.

You can also activate any skill manually by name.

---

## Skill 1 — campos-scenario-validator

Status: NOT YET BUILT
Build after: 2-3 scenarios have been drafted manually

What it does:
When a new scenario file is created or edited, this skill checks it
against the required structure in SCENARIO_DESIGN_PRINCIPLES.md. It
flags missing sections, checklist items that require coding knowledge,
and artifacts that are too long for their stated difficulty level.

When it triggers:
Any time you ask Claude Code to review, add, or check a scenario file.

Why it matters:
You cannot visually verify whether a scenario file has every required
section and meets the accessibility rules. This skill does that check
automatically every time.

---

## Skill 2 — campos-visual-check

Status: NOT YET BUILT
Build after: UI_DIRECTION.md is finalised and Build Stage C is complete

What it does:
Reads UI_DIRECTION.md and MOTION_AND_INTERACTION.md, then checks any
new UI component against the visual rules: correct colour variables,
widget treatment applied correctly, no hardcoded hex values, motion
behaviour within the defined rules.

When it triggers:
Any time new UI is built or an existing component is modified.

Why it matters:
Without this skill, visual drift happens gradually. Each session is a
slightly different interpretation of the visual rules, and over time
the UI quietly moves away from the intended direction.

---

## Skill 3 — session-log-writer

Status: NOT YET BUILT
Build after: Build Stage A (early — this habit should start immediately)

What it does:
At the end of a session, when you ask it to log the session, this skill
writes a correctly formatted entry into SESSION_LOG.md covering date,
objective, what happened, what worked, what did not work, and the next
objective.

When it triggers:
When you say "log this session" or "write a session log."

Why it matters:
Compound Engineering only works if sessions are actually logged. The
most common failure is intending to log and then not doing it because
it feels like one more task at the end of a long session. This skill
makes logging a one-line request.

---

## Skill 4 — decision-and-assumption-logger

Status: NOT YET BUILT
Build after: Build Stage A (early — log habits start from the first session)

What it does:
When Cursor or Claude Code makes a decision without asking, this skill
formats that assumption and appends it to AGENT_ASSUMPTIONS_LOG.md in
the correct format, flagged for review.

When it triggers:
When you or an agent identifies that a decision was made without
explicit user confirmation during a session.

Why it matters:
This is the direct mechanism for the explicit project requirement that
agent assumptions are always logged. Without it, assumptions happen
silently and compound over time into architectural drift.

---

## Skill 5 — campos-scope-guard

Status: NOT YET BUILT
Build after: SCOPE_AND_NONGOALS.md is finalised (done) and before
significant build work begins

What it does:
Checks any incoming build request against SCOPE_AND_NONGOALS.md. If
the request would introduce something out of scope (user accounts,
database, real AI chatbot, leaderboards, theme switcher, etc.) it flags
the request back to you instead of building it.

When it triggers:
Any time a build request could touch out-of-scope functionality.

Why it matters:
Agents left without this check will add helpful-sounding features that
are out of scope. This skill puts a protective check between "the agent
thinks this is a good idea" and "it actually gets built."

---

## How to Build a Skill When Ready

1. Create a folder at: .claude/skills/skill-name/
2. Create a file at: .claude/skills/skill-name/SKILL.md
3. Start the file with YAML frontmatter like this:

   name: skill-name
   description: Under 200 characters. This is what Claude Code reads
   to decide when to use this skill automatically.

4. Below the frontmatter, write the full instructions for the skill.
5. Update the Status line in this file from NOT YET BUILT to BUILT
   and add the date it was completed.

Reference: github.com/anthropics/skills for official examples.
