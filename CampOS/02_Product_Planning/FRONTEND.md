# CampOS v1 Frontend Specification

## Purpose of This File

This document specifies what the CampOS v1 frontend is, how it works, and why it works that way. Every design decision and interaction pattern is documented here so that:

1. Cursor/ Claude code knows exactly what to build
2. Validation can check build results against stated principles
3. Future sessions inherit a stable specification instead of having to re-explain

This file is not UI mockups, not code, not visual details (those live in `UI_DIRECTION.md`). This is behaviour and structure.

---

## Frontend Scope for the Validation Prototype

**What this frontend exists to prove:** That non-programmers (aged 16–24, vibe-coders transitioning to Agentic Engineering) can learn to execute the five pillars through structured theory and scenarios — without reading code in V1.

**What it explicitly does NOT attempt:** Being a complete learning platform, serving multiple difficulty tiers, tracking users across devices, or functioning as a production app.

**The success criterion:** 20–50 non-programmer testers complete all 8 scenarios; 30–40% of completers give unprompted positive feedback that CampOS is useful for their transition from vibe coding to Agentic Engineering.

**Distribution:** Static HTML/CSS/JS deployed to GitHub Pages. Shared via social media links. Desktop-first, mobile-degraded.

---

## The Three-Area Model

CampOS has three conceptual areas: Dashboard, Theory, and Workspace.

### Dashboard
**Purpose:** Orientation and preparation. The user's home base.

**Emotional register:** Calm, clear, empowering. "Here's where you are. Here's what you know. Here's what to do next."

**Visual treatment:** Dark base, purple/blue accents, glossy widget elements, firefly cursor-follow effect on desktop. Motion is present but not intense.

**Primary job:** Answer four questions the user asks when they arrive:
1. What have I completed?
2. What should I do next?
3. What's the concept I need to understand?
4. What settings do I have?

### Workspace
**Purpose:** Application. Where scenarios are executed and judgment happens.

**Emotional register:** Focused, minimal, all-business. "Here's the situation. Here's what the agent produced. What do you do?"

**Visual treatment:** Same dark base and widget system as Dashboard, but firefly effect is *absent* (to protect cognitive load during judgment).

**Primary job:** Workspace is where a scenario is executed. The learner reviews output the scripted agent has already produced, identifies what is wrong or missing, and executes the current pillar — for example, deciding what context belongs in a markdown file and providing it through a defined instruction choice. There is no code editor and no code-line marking in V1.

---

## Dashboard Architecture

### Sections

The Dashboard contains five sections, accessible via persistent navigation at the top level:

#### 1. Progression View (Default Landing)
**Purpose:** Show the user where they are in the 8-scenario journey.

**Contains:**
- Current scenario status (Not made yet)

**Does NOT contain:** Points, badges, XP, scores, comparisons to other users, leaderboards of any kind.

**Why this is the default:** Arrival psychology. The first thing a user sees should answer "where am I?" and "what do I do next?" This section does both.

#### 2. Theory Browser
**Purpose:** Explore theory concepts that unlock scenarios.

**Contains:**
- List of all theory pieces, organized by progression order (not alphabetical)
- For each theory: title, one-sentence description, whether it's locked/unlocked/completed, whether a scenario depends on it
- A way to open and read a theory piece
- A way to take the comprehension check and unlock the linked scenario

**Does NOT contain:** Search, filtering, recommendations, "related topics."

**Interaction:** Clicking a theory piece opens it full-screen in the Dashboard (not a modal, not a new page). Completing the comprehension check automatically closes the theory and returns to the browser view with that piece now marked "completed."

#### 3. Scenario Launcher
**Purpose:** Pick which scenario to work on next.

**Contains:**
- A small, curated set of available scenarios (likely 2–3 at a time, based on progression)
- For each: title, one-sentence description, difficulty level, whether it's completed
- A button to enter the scenario

**Does NOT contain:** All 8 scenarios at once (cognitive overload), search, filtering, recommendations.

**Why curated and small:** Autonomy through choice, not decision paralysis. The user can pick from 2–3 options; they don't have to scroll through all 8.

#### 4. Profile (Minimal Stub)
**Purpose:** User information and personal settings.

**Contains for v1:**
- Username display (auto-generated from browser, not user-entered; e.g., "Builder-42")
- A "reset all progress" button (clear all localStorage, start over)
- A "reduced motion" toggle (respects OS-level `prefers-reduced-motion` and adds an in-app override)

**Does NOT contain:** Password, account recovery, social linking, achievements, badges, public profile. A tester contact email may be collected once, upfront, for demo communication only.

**Why minimal:** v1 has no accounts, no syncing, no social features. A real profile belongs in v2.

#### 5. Settings
**Purpose:** Sparse configuration.

**Contains for v1:**
- Reduced motion toggle (same as in Profile; good UX to repeat it)
- "About CampOS" link (brief explanation of what this is)
- Feedback form or link (how to report bugs or send feedback)

**Does NOT contain:** Notifications, integrations, appearance customization, language selection, notifications settings.

### Navigation
- **Top navigation bar** with persistent access to all 5 sections. Visual indicator of current section.
- **No sidebar.** Top nav only. Simpler, cleaner, better for progression focus.
- **Keyboard accessible** via Tab; section links are tabbable.

### Visual Hierarchy
- **Progression View:** Highest visual priority (the default).
- **Theory Browser and Scenario Launcher:** Secondary priority (exploration).
- **Profile and Settings:** Tertiary (low-engagement areas).

### Progress Indicator
A prominent, always-visible progress bar showing "X of 8 scenarios completed." Updated in real-time as the user completes scenarios. Shows growth, not ranking.

---

## Workspace Architecture

### Three Regions

The Workspace is divided into three regions, all visible at once on desktop:

#### 1. Output review (Left/Primary)
**Purpose:** Show what the scripted agent has already produced, in plain language (page, files, claims). Not a code viewer.

**Contains:**
- The scenario title and brief situation description (2–3 sentences)
- A description of the agent's existing output
- A "reset to starting output" button (always available)

**Does NOT contain:** A code editor, line numbers, syntax highlighting, or line marking.

**Cognitive load principle:** The review area must be distraction-free during judgment. No animations, no decorative elements, no competing UI.

#### 2. Checklist / pillar actions (Center/Primary)
**Purpose:** Where the user commits their judgment and executes the pillar.

**Contains:**
- A checklist of actions for this scenario (e.g., "Mark every claim the agent invented," "Choose one next instruction")
- The defined instruction choices
- A "submit" / "I'm done" button that locks in the user's choices and moves to feedback

**Does NOT contain:** A code editor, or explanations of *why* to do something (that's for feedback).

**Interaction style:** Click/checkbox plus one defined instruction. No free-text input in v1.

#### 3. Scripted outcomes (Right/Secondary)
**Purpose:** Show the pre-written result of the chosen instruction.

**Contains (v1 version):**
- Defined instruction choices, each with a scripted outcome
- A disclaimer: "Responses are pre-written in v1. This is not a live agent."

**Does NOT contain:** Real AI responses, API calls, live chatbot capability, or a 5–10 question chat panel.

**Why scripted:** A real chatbot costs money. v1 is validating the concept, not the chatbot.

**Interaction:** User picks one instruction. The scripted result appears. No free-text input.

### Layout
- **Desktop:** Three-column layout. Output review (large), checklist (medium), scripted outcomes (medium or collapse-able).
- **Mobile/Tablet:** Workspace is desktop-only with a message: "This scenario is best experienced on a desktop or laptop. Please open the link on a larger screen."

### Navigation In/Out
- **Entering:** User clicks "enter scenario" from Dashboard Scenario Launcher. Workspace opens full-screen.
- **Exiting:** A persistent "back to dashboard" button at the top-left. Clicking it returns to Dashboard with scenario state preserved (so the user can come back if they start a scenario and abandon it).

### Progress During Scenario
If a scenario has multiple steps (check all items in the checklist to complete), progress is shown visually (e.g., 3/5 items completed) so the user knows they're making headway.

---

## The Learning Loop

Every user experiences this loop repeatedly. It is the product.

### 1. Dashboard (Orientation)
User arrives or returns. Sees progress, picks a scenario or a theory piece.

### 2. Theory (Required before the linked scenario)
User clicks a theory piece. Reads 500–700 words. Theory 1 is orientation and unlocks Theory 2 only. Later pieces teach one pillar (e.g. "Context is King").

End of theory: multiple-choice comprehension check (4 questions). Pass is 3 of 4.

**Passing:** Linked scenario unlocks, except Theory 1, which unlocks Theory 2. "You've demonstrated understanding."

**Failing:** Retry allowed. "Review the concept and try again."

### 3. Scenario (Application)
User enters Workspace. Reviews scripted agent output. Works through a checklist and picks a defined instruction. No code reading in V1.

### 4. Feedback (Reflection)
Post-scenario, the feedback screen shows:
- An A–E grade measuring checklist effectiveness
- Issue-count feedback ("You identified 3 of 4 invented claims")
- Comparison to previous attempts ("Last time: 2 of 4 invented claims. This time: 3 of 4.")
- Tips based on performance

**Tone:** An A–E grade plus written feedback. No points, badges, streaks, ranking against other users, or score-style "you got X/Y right." No "70/100."

### 5. Dashboard (Integration)
User returns to Dashboard. Progress bar updates. They see:
- That scenario is now "completed"
- Next scenario is available
- Next theory piece (if progression dictates) is available

Loop repeats.

### Why This Loop Works
- **Theory without context is abstract.** Followed immediately by application, it becomes concrete.
- **Scenario without theory is overwhelming.** Theory lightens the cognitive load.
- **Feedback without context is demoralizing.** Tied to specific performance, it informs rather than judges.
- **Progression visibility sustains engagement.** Users see themselves completing things.

---

## Frontend Design Principles

These are the rules every UI decision should follow. Every rule has a reason; the reason is in `PRINCIPLES_AND_PHILOSOPHY.md`.

### 1. Competence, Not Gamification
Progress is framed as capability, not achievement. Users see "You can now persist constraints so the agent stops inventing facts," not "Level 3 unlocked." This is load-bearing for motivation.

**Implication:** No badges, XP, points, streaks, or leaderboards. Progress bar only.

### 2. Cognitive Load Discipline
Scenarios are inherently high in intrinsic cognitive load. Extraneous load must be near-zero. No decorative animation during output review. No competing UI in the Workspace. The review area must be calm and readable.

**Implication:** Firefly effect on Dashboard only. Workspace is minimal.

### 3. Information Over Judgment
Feedback explains what happened, not whether the user is good or bad. CampOS still shows an A–E effectiveness grade. Issue-count language is allowed; score-style phrasing is not.

**Implication:** Post-scenario feedback may say "you identified 3 of 4 invented claims; here's why that matters." It is never written as "you got 3/4 right" or "70/100."

### 4. Autonomy Through Curation
Users choose from a small, ordered set of scenarios and theory. Not "anything goes" (paralysis), not "only one path" (no choice). Small curated set in the middle.

**Implication:** Dashboard shows 2–3 available scenarios, not all 8. Theory pieces are ordered by progression, not alphabetical.

### 5. Professional, Not Playful
This product should feel like a serious tool for someone serious about learning. Reference tone: Coursera-adjacent, not Duolingo. Premium, dark, minimal.

**Implication:** No mascots, no playful language, no bright colours, no cartoon elements. Visual language is glossy Mac-widget aesthetic.

### 6. Dark, Accessible, Intentional
Dark base (respect for user's eyes). Purple/blue accents (premium, not neon). Accessibility built-in: reduced-motion respected, semantic HTML, alt text, keyboard navigation.

**Implication:** All interactive elements are keyboard-accessible. Colour contrast meets WCAG AA. There is no full formal AA audit in V1. Reduced-motion setting in Settings.

### 7. Motion Is Present, Not Intense
Animations exist and should feel smooth and intentional. They must never dominate or distract. Reduced-motion setting overrides all animation.

**Implication:** Transitions between sections, feedback screen reveals, scenario launches — all animated smoothly. No intense effects. No 3D flips or parallax.

### 8. One Identity
No theme switcher, no dark/light toggle, no customization. One visual identity shipped. Consistency aids focus.

**Implication:** Dark only. No "light mode." Widgets and firefly effect are non-negotiable.

---

## Progression Model

### What Progress Means
In CampOS, progress is *demonstrable capability*. Not points or levels, but observable skill growth.

### How It's Tracked
- **Per scenario:** Completed or not. If completed, the user's performance data (bugs identified, decisions made) is stored locally.
- **Overall:** X of 8 scenarios completed. Shown as a progress bar and a simple number.

### What's Shown to the User
- **Dashboard progress bar:** "4 of 8 scenarios completed"
- **Scenario list:** Which scenarios are done (checkmark visual), which are available, which are locked (gated behind theory)
- **Feedback screen comparison:** "Last time you completed this scenario: 2/4. This time: 3/4."

### What's NOT Shown
- Points, XP, levels, badges, streaks
- Comparison to other users
- Time spent on scenarios
- Anything ranked or competitive

### LocalStorage Structure
User progress is stored in `localStorage` as JSON: which scenarios are completed, which theory pieces are read, which comprehension checks are passed, replay data for each scenario (to compare across attempts).

No syncing. No accounts. No cloud backup. Progress is local to the browser/device.

### Reset
User can reset all progress via Profile → "reset all progress." This clears localStorage and starts the user from scratch.

---

## Content Types and Placeholders

The frontend is designed to render these content types. Content itself is authored separately (in `06_Educational_Content/`), but the frontend must support the structures.

### Theory Piece
**Structure:**
- Title (short)
- Body text (500–700 words)
- Optional: one plain-language example (no code required in V1)
- Linked comprehension check (4 multiple-choice questions; pass is 3 of 4)
- Linked scenario (except Theory 1, which links to Theory 2)

**Data format:** JSON or markdown file with frontmatter.

**Rendered where:** Full-screen overlay in Dashboard (not a modal; feels integrated).

### Scenario
**Structure:**
- Title (short)
- Situation description (2–3 sentences, plain language)
- Description of what the agent already produced (not numbered code)
- Checklist of actions (title + description of each action)
- Defined instruction choices
- Most effective path
- Grade bands (A–E, effectiveness)
- Common wrong decisions (for feedback)
- Feedback content (what actually happened, tips for next time)
- Linked theory piece (what concept this exercises)
- Difficulty indicator (for future use; v1 has only one difficulty)

**Data format:** JSON file with exact structure TBD in `SCENARIO_DESIGN_PRINCIPLES.md`.

**Rendered where:** Workspace. Output review shows the agent's work. Checklist shows pillar actions. Scripted outcomes show the chosen instruction's result. Feedback screen shows the grade and write-up.

### Comprehension Check
**Structure:**
- Question (clear, focused)
- 4 multiple-choice options (one correct, three plausible wrong answers)
- Passing threshold: 3 of 4 correct

**Rendered where:** Below theory piece in Dashboard.

---

## Navigation and Orientation

### "You Are Here" Indicators
- **Top nav bar:** Current section is highlighted (Dashboard vs Workspace; within Dashboard, which section is active)
- **Breadcrumbs:** Optional, only if Workspace flow is deep. Not needed for v1.
- **Section title:** Each major area (Dashboard, Workspace, Theory) has a visible title.

### Keyboard Navigation
All interactive elements are reachable via Tab. Tab order follows visual order (left-to-right, top-to-bottom). Focus states are visible (outline, background change, or both).

### Back Button Behaviour
- **From Workspace to Dashboard:** "Back to dashboard" button. Preserves scenario state.
- **From Theory to Dashboard:** Clicking outside theory or a close button returns to scenario browser.
- **Within Dashboard sections:** Clicking a different section tab switches view instantly.

### Persistent Navigation
Top nav (Dashboard sections and "exit to dashboard" from Workspace) is always visible and accessible.

### No Forced Flows
User is never locked into a single path. They can:
- Start a scenario, abandon it, come back later (state is preserved)
- Read theory without immediately taking the check
- Complete scenarios out of order (though curated selection encourages a path)

---

## Responsive Behavior and Device Support

### Desktop (Primary)
- Full experience: Dashboard with all sections, Workspace with three-column layout, all features working.
- Minimum width: 1024px (1280px ideal).
- Tested on: Chrome, Firefox, Safari (latest versions).

### Tablet (Secondary)
- Dashboard: Full functionality, single-column or two-column layout (adaptive).
- Workspace: Three-column layout becomes two-column (code + combined decision/chat), or stacked.
- All interactive elements remain accessible.

### Mobile (Limited)
- Dashboard: Works (single-column, degraded). User can browse theory and scenarios, see progress.
- Workspace: Disabled. Message: "This scenario is best experienced on a desktop or laptop. Please open the link on a larger screen."
- Rationale: Scenarios require reading code and making precise judgments. Mobile screens and touchscreen input are not suitable.

### Reduced Motion
Respects OS-level `prefers-reduced-motion` setting (via CSS media query). All animations are removed or reduced to essential transitions only. User can also toggle reduced motion in Settings for additional override.

---

## Interactions with the Broader Project

### References These Files
- `PRODUCT_OVERVIEW.md` — what CampOS is (this file assumes you've read it)
- `AUDIENCE_PSYCHOLOGY.md` — who the user is and what they need (this file reflects those needs)
- `PRINCIPLES_AND_PHILOSOPHY.md` — why every design principle is what it is
- `UI_DIRECTION.md` — visual rules and tokens (this file is the structure; UI_DIRECTION is the aesthetics)
- `VALIDATION_CRITERIA.md` — how we'll know if this spec was correctly built

### Feeds Into
- `06_Educational_Content/SCENARIO_DESIGN_PRINCIPLES.md` — scenarios are built to render in the Workspace structure defined here
- `06_Educational_Content/LEARNING_OBJECTIVES.md` — learning goals are matched to the dashboard progression model defined here
- Every Cursor build prompt references this file as the source of truth

### Not Covered Here (Belongs Elsewhere)
- **Visual design:** `UI_DIRECTION.md`
- **Motion specifics:** `MOTION_AND_INTERACTION.md`
- **Validation checklist:** `VALIDATION_CRITERIA.md`
- **Prompt template:** `PROMPT_TEMPLATES.md`
- **Actual scenario content:** `06_Educational_Content/scenarios/`

---

## Open Decisions

Unresolved questions that will be answered during implementation or post-validation. Logged here so they're visible.

- **Comprehension check passing threshold:** Resolved. Pass is 3 of 4.
- **Instruction-choice triggers:** How the defined choices are laid out in the Workspace. TBD in Workspace build.
- **Scenario ordering within the non-programmer tier:** Which scenario teaches what, and in what order? Depends on scenario content drafting.
- **Mobile Dashboard layout specifics:** Two-column vs single-column on iPad, exact breakpoints. TBD in responsive implementation.
- **Persistence strategy for scenario replay data:** How many previous attempts are stored? How is comparison calculated? TBD in localStorage structure design.

---

## Change Log

**Version 1.0 — 2026-08-17**
- Initial spec drafted during planning phase.
- Locked: two-area model, single skill tier, 8 scenarios, Dashboard sections, Workspace regions, learning loop, design principles, progression model.
- Deferred: comprehensive mockups (handled in Stage 5), exact visual tokens (handled in UI_DIRECTION.md), exact MCP list (handled in MCP_SETUP.md).

---

## How To Use This File

**For Cursor:** This is your spec. Every build prompt references a section or multiple sections. Validate your work against the section's requirements.

**For Claude Code:** Same as Cursor, but at a higher level — when you're refactoring or doing multi-file work, check whether the changes still satisfy the specs in this file.

**For validation:** `VALIDATION_CRITERIA.md` is built from this file. Every design principle here has a matching test case.

**For future stages:** Stages 5–6 (visual design, validation) start from this spec. Nothing changes without revisiting this file first.