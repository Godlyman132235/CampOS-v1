# CampOS — Decisions Log

Every settled decision, timestamped. Categories: **FACT** (verified truth), **DECISION** (user-made choice), **ASSUMPTION** (working guess pending confirmation), **HYPOTHESIS** (belief to be tested), **OPEN QUESTION** (unresolved).

Entries are append-only. When a decision is revised, the old entry stays; a new entry is added noting the change.

---

## Initialization — 2026-17-08

Below are all decisions made during the planning conversation that produced this project structure.

### Product Definition

- **DECISION** — CampOS v1 is a Validation prototype which focuses on the educational content in it. Prototype distributed via social media.
- **DECISION** — Target audience: males aged 16–24, globally, who identify with vibe coding and want to progress to Agentic Engineering.
- **DECISION** — Emotional starting point of target user: confused about their AI-generated code, unsure how to fix it, uncertain what to trust.
- **DECISION** — CampOS is not a coding course, not a vibe-coding tool. Purpose is supervision and judgment of AI-generated software.
- **DECISION** — First concept CampOS teaches: "context is king." Every other Agentic Engineering skill builds on it.

### Scope

- **DECISION** — v1 skill tiers: 1 (non-programmer only). "Some coding" and "professional" tiers deferred to v2.
- **DECISION** — v1 scenario count: 8, all at non-programmer difficulty, arranged as a progression from easiest to hardest.
- **DECISION** — No skill-tier picker on first load, since there is only one tier in v1. User lands directly on Dashboard.
- **DECISION** — Dashboard v1 sections: theory, scenarios, progression, minimal profile, minimal settings. Trimmed version.
- **DECISION** — No user accounts, no signup of any kind in v1.(Does connect to your email, however) 
- **DECISION** — Local state only via browser `localStorage`.
- **DECISION** — No real chatbot integration in v1. Chat panel uses pre-scripted responses with an explicit disclaimer to the user.
- **DECISION** — Bring-your-own-API-key chatbot idea: rejected. Not v1, not v2.
- **DECISION** — Workspace code area: view + accept/reject/mark lines + reset to base. Making files and other components of the five pillars of Agentic Engineering. No code editing in v1 (F2a).
- **DECISION** — Dashboard visible sections: theory browser, scenario launcher, progression view, minimal profile, minimal settings.

### Gamification

- **DECISION** — No worldwide leaderboards in v1. Not regional. Not global.
- **DECISION** — No streaks in v1 or later.
- **DECISION** — No badges. 
- **DECISION** — Progress bar retained — shows how far the user is from completing current theory or scenario, and overall progression through the 8 scenarios.
- **DECISION** — Team-based leaderboards deferred to v2 or later.
- **DECISION** — Level unlocking deferred to v2.

### Visual System

- **DECISION** — Aesthetic: minimalistic dark tech, premium, professional. Reference register: Coursera-adjacent, not Codecademy.
- **DECISION** — Palette: dark base, dark purple and dark blue accents. Specific hex values deferred until Claude Design mockups are produced.
- **DECISION** — Typography: serif accent for headings + sans-serif for body. "Premium learning platform" direction.
- **DECISION** — Widget system: glossy, translucent, Mac/iPhone widget-style elements. Applied consistently across cards, panels, navigation.
- **DECISION** — Firefly cursor effect: v1 signature effect for Dashboard on desktop only. Absent from Workspace to protect cognitive load.
- **DECISION** — Widgets serve as cross-device identity (since firefly effect cannot render on mobile).
- **DECISION** — No theme switcher. One visual identity for v1.
- **DECISION** — Motion: present and seamless, never intense. Reduced-motion setting in v1 respecting OS-level `prefers-reduced-motion`.
- **DECISION** — Logo: semi-prototype wordmark generated in Claude Design for v1. Real logo work deferred to v2.

### Content & Structure

- **DECISION** — Learning loop: Dashboard → Theory → multiple-choice comprehension check → Scenario → feedback screen → return to Dashboard (repeat / this is one loop).
- **DECISION** — Theory format: mix of short and longer written pieces with a multiple-choice check at the end.
- **DECISION** — Comprehension check gates scenario unlock. Passing threshold TBD in `FRONTEND.md`.
- **DECISION** — Hints exist in scenarios. Difficulty of using hints increases over levels. Full mechanism TBD in `FRONTEND.md`.
- **DECISION** — Retry policy: same scenario, same checklist. No variation between retries.
- **DECISION** — Success in a scenario: user resolves the presented issue via the checklist. Path can vary; endpoint is fixed.
- **DECISION** — Feedback screen contents: accuracy stats, comparison to previous attempts, performance-based tips.
- **DECISION** — Feedback is informational, not evaluative. No grade. No rank. Stats shown but framed as learning input.

### Technical

- **DECISION** — Build stack: static HTML + CSS + vanilla JavaScript. No framework. No build step. No npm.
- **DECISION** — Hosting: GitHub Pages for v1 distribution. Free.
- **DECISION** — Scenarios loaded from JSON files, hand-authored.
- **DECISION** — Desktop primary. Dashboard degrades gracefully to mobile. Workspace desktop-only with "please open on desktop" message on mobile.

### Tooling

- **DECISION** — Primary IDE: Cursor.
- **DECISION** — Secondary engineering agent: Claude Code.
- **DECISION** — Strategic reasoning layer: Claude (web app).
- **DECISION** — MCPs installed in v1: Context7 and Playwright.
- **DECISION** — GitHub MCP deferred until Build Stage A.
- **DECISION** — MCPs explicitly rejected: Filesystem (Claude Code has built-in), Memory, Sequential Thinking, database MCPs.
- **DECISION** — Cursor requires explicit approval before creating or deleting any file.
- **DECISION** — Cursor always summarises changes in plain English after every task.
- **DECISION** — Claude Code auto-reads priority context files at session start (`PRODUCT_OVERVIEW.md`, `PRINCIPLES_AND_PHILOSOPHY.md`, `FRONTEND.md`, `SCOPE_AND_NONGOALS.md`).

### Custom Skills

- **DECISION** — 5 custom skills identified for eventual creation: `campos-scenario-validator`, `campos-visual-check`, `session-log-writer`, `decision-and-assumption-logger`, `campos-scope-guard`.
- **DECISION** — Skills are built progressively, not upfront. Each skill built only after 2–3 manual uses reveal the pattern.

### Compound Engineering

- **DECISION** — When Cursor or Claude Code makes an assumption without asking, that assumption is logged in `AGENT_ASSUMPTIONS_LOG.md`.
- **DECISION** — Every session gets an entry in `SESSION_LOG.md`. Written by the user, not by an agent (until `session-log-writer` skill exists).
- **DECISION** — Feedback from real testers goes in `FEEDBACK_LOG.md` verbatim as received.

### Validation

- **DECISION** — Primary validation target: 20–50 non-programmer testers complete all 8 scenarios; 30–40% give unprompted positive feedback.
- **DECISION** — Secondary validation signal (if completion volume falls short): qualitative depth of unprompted feedback from any completer.
- **DECISION** — Failure signal: substantial majority of testers deem CampOS useless → concept re-evaluated, not just refined.
- **DECISION** — Feedback collection channels: email, social DMs, replies to social posts. Multi-channel by design.

### Timeline

- **FACT** — Founder is an ATAR student in Australia. Heaviest work windows: 5-week school break starting ~5 weeks from initialization; Dec–Jan summer holidays. Steady side-project work in between.
- **DECISION** — No hard external deadline. Timeline is internal only.

---

## Open Questions

- **OPEN QUESTION** — Exact hex values for palette. Deferred until Claude Design mockups exist.
- **RESOLVED 2026-09-09** — Comprehension check passing threshold is 3 of 4.
- **OPEN QUESTION** — Hint mechanism specifics — how "harder to use over levels" manifests when v1 has no levels.
- **RESOLVED 2026-09-09** — Concepts beyond orientation are the five pillars (see Resolutions block below). The old “eight concepts / code review” map is superseded.
- **RESOLVED 2026-09-09** — V2 skill-tier names are out of scope. V1 is non-programmer only.

## Session Decisions — Educational Content Architecture

**Five Pillars source:** Adapted from a YouTube explainer by John Kim (Meta Staff Engineer) on agentic engineering. Not industry-standard terminology — it's CampOS's own teaching synthesis and must be presented as such, not as universal consensus.

**Curriculum structure:** Nine theory pieces. Theory 1 = orientation, no scenario. Theories 2–7 cover the five pillars (Context is taught twice: Theory 2 and Theory 7). Theories 8–9 pair with capstone Scenarios 7–8. Scenarios 1–6 exercise one pillar each.

**The project (all 8 scenarios, one continuous build):** A founder's launch/waitlist page — public landing page, email capture, admin dashboard — that grows to include automated client emails and follower/signup notifications.

**The learner:** Male, 16–24, already vibe coding with Cursor/Lovable/Claude Code on simple projects, frustrated that prompting alone isn't giving them what they want, doesn't yet have the vocabulary for what's missing.

**Workspace mechanics (V1):** The AI agent is fully scripted, not live. The learner arrives to find output the agent already produced — not a live chat. Where a task requires directing the agent further, the learner picks from a small defined set of instruction options, each with a pre-written scripted response. "Workspace" = the per-scenario environment, distinct from the home Dashboard.

**Grading:** A–E reflects effectiveness of checklist completion. No single right answer — the grade measures how effectively and efficiently the learner completed the checklist. A feedback screen gives deeper analysis after grading.

**Content voice rules (established via Scenarios 01/02):** Every theory piece opens with a lived frustration, never a definition. Terms are defined in plain English only after that opening. Comprehension questions must require applying the concept to a new situation — never answerable by re-reading the paragraph above.

---

## Resolutions — 2026-09-09

Documentation cleanup. These lines are the current product facts when older DECISION entries disagree.

- **DECISION** — Grading is A–E plus written feedback. Measures checklist effectiveness. No points, badges, streaks, or ranking against other users.
- **DECISION** — Nine theory pieces. Theory 1 orientation unlocks Theory 2. Theories 2–7 cover the five pillars. Theories 8–9 pair with capstone Scenarios 7–8.
- **DECISION** — Pillar order: Context Engineering, Agentic Validation, Agentic Tooling, Agentic Codebase, Compound Engineering. All five taught in V1.
- **DECISION** — V1 scenarios do not teach code reading. Workspace is review-output-and-execute-the-pillar.
- **DECISION** — Agent direction is defined instruction choices with scripted outcomes. No live API. No BYOK.
- **DECISION** — Comprehension pass mark is 3 of 4. Theory length is 500–700 words.
- **DECISION** — Tester email collected once, contact only. Minimal backend exists and will expand.
- **DECISION** — Three fonts bundled locally. No theme switcher. Vanilla HTML/CSS/JS in V1.
- **DECISION** — `01_Context/SOURCE_OF_TRUTH.md` is the first file any agent reads.