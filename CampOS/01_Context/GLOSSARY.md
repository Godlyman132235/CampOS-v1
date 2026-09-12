# CampOS — Glossary

Shared vocabulary. If a term drifts in meaning across sessions, decisions drift with it. Every term here has exactly one meaning within this project.

## Product Concepts

**Agentic Engineering** — the practice of using AI agents to build software while supervising, validating, questioning, and intervening in the AI's work based on real understanding of what it produced. The destination CampOS takes users toward.

**Vibe coding** — the practice of delegating software implementation to AI agents with minimal understanding of the output. The starting point CampOS takes users from. Not framed as bad; framed as a stage.

**Agent supervision** — the specific skill CampOS teaches: the ability to inspect, question, judge, and intervene in AI-generated software.

**Context Engineering** — one of the five Agentic Engineering pillars (teaching order: 1). In CampOS, the practice of providing structured, persistent information to AI agents so they perform reliably across sessions. Taught as Theory 2 (“context is king”), which unlocks Scenario 1. Theory 1 is orientation and is not this concept.

**Compound Engineering** — one of the five pillars (teaching order: 5). The practice of capturing decisions, assumptions, and lessons from each session so future sessions start smarter than earlier ones.

**Agentic Validation** — one of the five pillars (teaching order: 2). The practice of proving that AI-produced work is actually correct, rather than accepting it because it looks correct.

**Agentic Tooling** — one of the five pillars (teaching order: 3). The practice of selecting and configuring the AI tools, MCPs, and integrations that support the workflow.

**Agentic Codebase** — one of the five pillars (teaching order: 4). The practice of structuring a project so AI agents can understand and safely modify it. Taught in V1.

## Product Anatomy

**Dashboard** — the user's orientation and preparation area. Contains theory, scenario launcher, progression view, minimal profile, minimal settings. Firefly cursor effect exists here on desktop.

**Workspace** — the user's application area. Where scenarios are executed. The learner reviews scripted agent output, completes a checklist, and picks defined instruction choices. Not a code viewer in V1. No firefly effect here.

**Scenario** — a realistic AI-assisted software situation the user judges and resolves. Each scenario has: a situation, a description of what the agent already produced, a checklist, defined instruction choices, a most-effective path, grade bands, and feedback. The prototype ships with 8.

**Theory** — a short written piece (500–700 words) explaining an Agentic Engineering concept or, for Theory 1, orientation. Followed by a multiple-choice comprehension check. Passing unlocks the linked scenario, except Theory 1, which unlocks Theory 2 only.

**Comprehension check** — 4 multiple-choice questions after a theory piece. Pass mark is 3 of 4. Users can retry failed checks.

**Checklist** — the list of tasks inside a scenario that the user works through to resolve the presented issue. Completion of all checklist items ends the scenario.

**Decision surface** — the Workspace UI where the user completes checklist actions and picks a defined instruction choice. Not a code editor. No line-marking in V1.

**Instruction choices** — a small set of pre-written directions the learner can give the scripted agent. Each choice produces a scripted outcome. Replaces a free-text chat box and the older 5–10 question-response chat panel.

**Reset to base** — Workspace affordance that restores the scenario to its starting output. Available at all times inside a scenario.

**Feedback screen** — the post-scenario view showing an A–E effectiveness grade, issue-count feedback, comparison to previous attempts, and tips. No points, badges, streaks, or ranking against other users.

**Skill tier** — a difficulty band. V1 has one tier (non-programmer). V2 tier names are out of scope.

## Visual System Terms

**Widget system** — CampOS's cross-device visual identity. Glossy, translucent widget-style elements inspired by macOS and iOS widget aesthetics — reflective surfaces, varied shapes and sizes, giving a premium immersive feel. Used consistently across cards, panels, and navigation elements.

**Firefly effect** — a cursor-follow particle animation used exclusively on the Dashboard. CampOS's desktop signature effect. Inspired by Google's anti-gravity demo. Absent from the Workspace to protect cognitive load during scenario judgment.

**Reduced motion** — an accessibility mode that respects OS-level `prefers-reduced-motion` and provides an explicit in-app toggle in Settings. Removes or minimises animation for users who prefer less motion.

## Workflow Terms

**Green card** — user-issued signal that the assistant may proceed with a previously planned action (e.g., "green card to draft Stage 1 files").

**Session** — one focused work period with one primary objective. Ends when the objective is complete or the topic drifts. Each session gets a `SESSION_LOG.md` entry.

**Objective** — the single, specific goal of a session or prompt. Not "work on Dashboard" — "build the first-load skill-tier picker."

**Acceptance criteria** — the mechanical, checkable conditions that determine whether an objective is complete. Written before work begins.

**Assumption** — any decision an agent (Cursor, Claude Code, or Claude) makes without explicit user confirmation. All assumptions are logged in `AGENT_ASSUMPTIONS_LOG.md`.

**Decision** — a settled choice made by the user (or ratified from an assistant proposal). Logged in `DECISIONS_LOG.md`.

## Tools

**Cursor** — the primary IDE and building environment. Used for narrow, one-file or few-file build tasks that the user can watch happen.

**Claude Code** — secondary engineering agent. Used for multi-file changes, debugging across the project, and repo-level reasoning. Not used for one-file UI tweaks.

**Claude (this chat)** — the strategic brain. Used for research, planning, drafting context files, writing prompts, reviewing agent output, and reasoning through decisions.

**MCP (Model Context Protocol)** — the open protocol that lets AI tools (Cursor, Claude Code) connect to external services and data sources.

**Context7 MCP** — installed. Fetches live, version-correct documentation on demand.

**Playwright MCP** — installed. Lets agents open a real browser, interact with the prototype, take screenshots, and verify UI behaviour.

**GitHub MCP** — deferred until Build Stage A. Will be installed when code exists to version-control.

**Skill** — a folder containing a `SKILL.md` file that Claude Code loads automatically when relevant. CampOS-specific skills are documented in `09_Tooling/SKILLS_LIBRARY.md`.

## Versions

**v1 / Prototype** — the current build. Vanilla HTML/CSS/JS, 8 scenarios, nine theory pieces, single skill tier (non-programmer), minimal backend expanding, tester contact email only (no accounts).

**v2** — the next stage after v1 validation. Expands backend; may add a built-in agent for paying users (no bring-your-own API key). Skill-tier names and extra scenarios are parked until then.

**v3+** — post-v2, undefined. Not planned.