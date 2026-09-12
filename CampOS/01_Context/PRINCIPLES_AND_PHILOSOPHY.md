# CampOS — Principles and Philosophy

This file defines the principles that govern every CampOS decision. Anything that contradicts a principle here is either wrong or requires an explicit decision to override, logged in `DECISIONS_LOG.md`.

## The Five Agentic Engineering Pillars — Applied To CampOS (From Jonh Kim)

CampOS is built using and around the same five pillars it eventually teaches. Each pillar has a specific role in the project.

### 1. Context Engineering
Every AI session on this project starts from persistent, structured context — the files in `01_Context/` and the specifications in `02_Product_Planning/`. No session begins from a blank slate. When context is missing, the answer is to create the missing file, not to re-explain in chat.

### 2. Agentic Validation
Nothing is considered done because an agent says it is done. Every build stage is validated against `04_Validation/VALIDATION_CRITERIA.md` and `04_Validation/TEST_CASES.md`. Agents that report success without evidence are treated as unverified.

### 3. Agentic Tooling
A minimal, curated tool set: Cursor (primary builder), Claude Code (heavier engineering), Claude web app (planning and reasoning). MCPs: Context7 and Playwright. Tools are added when a specific workflow requires them, never because they are popular.

### 4. Agentic Codebase
The practice of structuring a project so an agent can understand it and change it safely. V1 teaches this pillar. In the CampOS repo itself the management layer stays light.

### 5. Compound Engineering
Every session's decisions, assumptions, and lessons are captured — in `SESSION_LOG.md`, `DECISIONS_LOG.md`, `AGENT_ASSUMPTIONS_LOG.md`, and `LESSONS_LEARNED.md`. Knowledge from earlier sessions actively improves later ones. Skills (see `09_Tooling/SKILLS_LIBRARY.md`) encode repeated patterns into automatic Claude Code behaviour.

## Product Principles

### Vibe coding is the starting point, not the destination
CampOS never frames vibe coding as inherently bad. It frames it as a stage. The product's job is progression, not judgment.

### CampOS is not a coding course
No traditional programming curriculum. No syntax drilling. No "learn Python in 30 days." The product teaches supervision, judgment, and context as well as implementation of the 5 pillars.

### Competence over gamification
Progress is shown as demonstrable capability ("You can now persist constraints so the agent stops inventing facts"), not points, badges, XP, or streaks. Research consistently shows gamification undermines intrinsic motivation for this kind of learning. See `RESEARCH_NOTES.md` for the specific studies.

### Informational feedback over evaluative feedback
Post-scenario feedback explains what happened, what the user missed, and why it matters in real Agentic Engineering. CampOS gives an A–E grade that measures how effectively the learner completed the checklist, plus written feedback. It has no points, badges, streaks, or ranking against other users. Issue-count language is allowed (e.g. “you identified 3 of 4 invented claims”). Score-style “you got X/Y right” is not.

### Cognitive load discipline in the Workspace
Scenarios are inherently high in intrinsic cognitive load — reviewing agent output and executing a pillar is hard. Extraneous load must approach zero during active judgment: no decorative animation in the output-review area, no competing panels demanding attention, no visual novelty during the moment of decision. The firefly cursor effect exists on Dashboard only for this reason.

### Identity framing over achievement framing
Progression language centres on who the user is becoming ("You now catch state bugs before shipping") rather than what they have collected ("Badge unlocked"). This is a hypothesis to be validated with real users, not a proven mechanic.

## Design Principles

### Dark, minimal, premium — not childish
CampOS should visually signal "serious professional tool" to a 16–24 audience that is post-Duolingo and post-Codecademy. Reference emotional register: Coursera-adjacent professionalism, not Codecademy playfulness.

### One strong visual identity for v1
No theme switcher. No configurable typography. One good look, shipped. Variety is a v2 concern.

### The widget system is the cross-device identity
Firefly cursor effect is the Dashboard signature on desktop. Widgets (glossy, Mac-widget-style) carry CampOS identity across all devices, including mobile where the firefly effect cannot render.

### Motion is present but not intense
Animations exist and should feel seamless. They must never dominate. Reduced-motion setting respected via OS-level `prefers-reduced-motion` and an explicit in-app toggle.

## Workflow Principles

### One objective per session
Every session addresses one goal. When the topic drifts, the session ends. New topic = new session.

### One objective per prompt
Every session has exactly one objective. That objective is delivered through multiple sequential sub-prompts, not stuffed into one megaprompt.

### Preserve existing functionality unless told otherwise
Every prompt inherits this rule. Agents that silently modify unrelated files violate it.

### Explain before doing (when the work is non-trivial)
For anything beyond a small edit, the agent must explain its planned approach before writing code. This is the intervention window where bad approaches get caught cheaply.

### Stop after two failed corrections
If an agent gets something wrong twice in a row, the session pauses. The prompt is rewritten with what was learned. Do not keep correcting in-place — context becomes polluted with failed attempts.

### Log assumptions immediately
When Cursor or Claude Code makes an assumption without asking, that assumption is logged in `AGENT_ASSUMPTIONS_LOG.md` at the end of the session. No exceptions.

## Scope Discipline

### The prototype tests the concept, not the product
The prototype is not v0 of the final product. It is a validation instrument. Anything that would help "the final product" but doesn't help "prove the concept is useful" is out of scope for v1.

### If in doubt, cut
Sole-founder projects die from scope creep. When a decision is 50/50 between including and excluding, exclude. Add back after validation, not before.

### DO NOT DO YET
The following are non-negotiably out of v1: user accounts, database, real AI chatbot, payment, real leaderboards, streaks, level unlocking, mobile-optimised Workspace, theme switcher, real logo design (semi-prototype only), custom domain, analytics beyond basic completion tracking. Full list in `SCOPE_AND_NONGOALS.md`.