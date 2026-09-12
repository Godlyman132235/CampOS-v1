# CampOS Development Roadmap

This document outlines the entire path from project start → first coding prompt → shipping the prototype.

## Roadmap Stages (Planning Phase)

### Stage 1 — Foundational Context Files ✓ COMPLETE
Draft 5 files establishing what CampOS is, why it exists, what the research says, and what decisions have been made.

Files: `PRODUCT_OVERVIEW.md`, `PRINCIPLES_AND_PHILOSOPHY.md`, `GLOSSARY.md`, `DECISIONS_LOG.md`, `RESEARCH_NOTES.md`.

Done when: All 5 files populated, user has reviewed.

### Stage 2 — Audience Psychology
Draft the research half of `AUDIENCE_PSYCHOLOGY.md`. User writes the first-person vignettes section. Combines into complete file.

Files: `AUDIENCE_PSYCHOLOGY.md`.

Status: Research half drafted, vignette section deferred (to be completed when user has time).

### Stage 3 — Scope, Agents, Roadmap ← YOU ARE HERE
Draft agent instructions, scope boundaries, and this roadmap. Lock the fence around the project.

Files: `AGENT_INSTRUCTIONS/CLAUDE.md`, `AGENT_INSTRUCTIONS/CURSOR.md`, `AGENT_INSTRUCTIONS/CLAUDE_CODE.md`, `SCOPE_AND_NONGOALS.md`, `ROADMAP.md`, `BACKEND_BACKLOG.md`, `00_README.md`.

Done when: All 7 files populated.

### Stage 4 — Frontend Spec
Draft `FRONTEND.md`, the complete specification for what Cursor will build against. This is the load-bearing file for all build work.

Files: `FRONTEND.md`.

Done when: File populated, user has read and understood every section.

### Stage 5 — Visual System
Draft the visual design rules so Cursor builds with consistent, intentional aesthetics.

Files: `UI_DIRECTION.md`, `MOTION_AND_INTERACTION.md`, `ICON_BRAND.md`.

Parallel action: User produces Claude Design mockups and places them in `03_Design_Visual/reference/`.

Done when: All 3 files populated, ideally with reference mockups.

### Stage 6 — Validation Framework (Current) 
Draft the criteria and test cases that will be used to verify the prototype works.

Files: `VALIDATION_CRITERIA.md`, `VALIDATION_HYPOTHESES.md`, `TEST_CASES.md`, `FEEDBACK_LOG.md`.

Done when: All 4 files populated.

### Stage 7 — Prompting, Scenario Design, Tooling (Moving to) 
Draft the prompt skeleton, scenario authoring rules, and tool setup documentation. Create skill library placeholders.

Files: `PROMPT_TEMPLATES.md`, `PROMPT_LIBRARY.md`, `SCENARIO_DESIGN_PRINCIPLES.md`, `SKILL_TIERS.md`, `LEARNING_OBJECTIVES.md`, `MCP_SETUP.md`, `SKILLS_LIBRARY.md`, `SESSION_LOG.md`, `LESSONS_LEARNED.md`, `AGENT_ASSUMPTIONS_LOG.md`, `08_Codebase/README.md`.

Done when: All 10 files populated.

### Stage 8 — Scenario Drafting (Soon) 
Collaboratively draft the first 2 of the 8 scenarios. User judges, accepts, or rejects.

Files: `06_Educational_Content/scenarios/scenario-1.md`, `scenario-2.md`.

Done when: 2 scenario files exist and are approved by the user.

## Build Stages (Implementation Phase)

These stages begin after Stage 8 is complete. Each stage = one Cursor prompt, one specific objective.

### Build Stage A — Project Skeleton
Objective: Create the HTML, CSS, JS file structure. A working HTML entry point that opens in a browser and displays placeholder content.

Needs beforehand: Stages 1–8 complete.

Built: folder structure, blank `index.html`, `/css` with base stylesheet, `/js` folder, `/scenarios` JSON folder, `/assets`.

Acceptance: Opens in browser, displays "CampOS" title, uses correct base colour, no console errors.

Validation: Visual + console check.

---

### Build Stage B — First-Load Experience
Objective: User lands on the site and sees the Dashboard for the first time. No skill-tier picker (there's only one tier in v1).

Built: Dashboard shell, navigation between Dashboard sections.

Acceptance: Opening the site lands on Dashboard with all sections visible.

Validation: Manual walkthrough.

---

### Build Stage C — Dashboard Shell
Objective: Build the layout and visual treatment of the Dashboard. No real content wired yet.

Built: Dashboard layout, widget/glossy visual treatment, firefly cursor effect, section containers.

Acceptance: Matches `UI_DIRECTION.md` on all specifications; every section renders; firefly effect behaves as specified.

Validation: Check every criterion in `VALIDATION_CRITERIA.md` for Dashboard.

---

### Build Stage D — Theory Viewer + Comprehension Check
Objective: Load a theory entry from a JSON file, display it, show multiple-choice questions, unlock scenario on pass.

Built: Theory reader UI, multiple-choice component, unlock logic stored in localStorage.

Acceptance: Theory loads, questions render, correct answers unlock, wrong answers allow retry.

Validation: Full theory→check→unlock walkthrough.

---

### Build Stage E — Workspace Shell
Objective: Create the split-pane Workspace (output review + checklist + scripted outcomes).

Built: Layout, entry/exit navigation, empty panels.

Acceptance: Opening a scenario lands in Workspace with correct layout; exit returns to Dashboard.

Validation: Manual navigation.

---

### Build Stage F — Scenario Loader + Decision Surface
Objective: Load a scenario from JSON, display situation and scripted agent output, implement checklist and defined instruction choices.

Built: Scenario rendering, decision UI.

Acceptance: Scenario appears, user can submit a decision.

Validation: Run one scenario end-to-end.

---

### Build Stage G — Feedback Screen
Objective: Post-scenario view with stats, comparison, and tips.

Built: Feedback UI, comparison logic.

Acceptance: Shows correct stats, correct previous-attempt comparison.

Validation: Run a scenario twice, verify comparison.

---

### Build Stage H — Progression + First-Run Polish
Objective: Connect pieces. Dashboard shows progress, first-run onboarding tour, motion polish.

Built: State management, cross-linking, tour, animation polish.

Acceptance: Full journey works end-to-end from first load.

Validation: Incognito-window full walkthrough.

---

### Build Stage I — Distribution Prep
Objective: Deploy to GitHub Pages, add basic analytics (completion count).

Built: Live URL, analytics.

Acceptance: Link works from phone browser, analytics record visits.

Validation: Share with a friend, verify it works on their device.

---

## Prototype v1 Is Complete After Build Stage I

At this point, the prototype is ready for distribution via social media. Everything else (multiple tiers, real chatbot, leaderboards, accounts, etc.) is v2 or later.

## Post-Prototype

Once real users have tested the prototype and feedback is in (target: 20–50 completions, 30–40% positive), the decision point comes:

- **Signal is positive** → Plan v2 (backend, additional scenarios, multiple tiers).
- **Signal is weak** → Re-evaluate the concept. Consider pivots or a different direction entirely.

This roadmap is not a guarantee — it is the planned path given current information. Roadmap updates are logged in `DECISIONS_LOG.md` with timestamp and reasoning.