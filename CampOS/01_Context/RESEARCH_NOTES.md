# CampOS — Research Notes

Raw findings and citations that informed the principles and product decisions. Kept separate from `PRINCIPLES_AND_PHILOSOPHY.md` so that file stays short and this one can grow without bloating primary context.

Entries are grouped by domain. Each finding includes the source, the specific claim, and how it applies to CampOS.

---

## Learning & Motivation

### Self-Determination Theory (SDT) for AI Learners

**Source:** Large-sample study on students learning AI, 1,465 participants across 47 universities (surfaced via web search during planning).

**Key finding:** Competence satisfaction appears more important than autonomy or relatedness satisfaction in AI-enriched learning environments. Many students learn AI primarily out of guilt or shame, not personal enjoyment.

**Application to CampOS:** The target user often already feels inadequate about their code understanding relative to the AI they use. The frontend's primary psychological job is making them feel *increasingly capable*, not just entertained. This drives:
- Progression indicators show what the user *can now do*, not points collected
- Feedback screens focus on demonstrated growth, not scoring
- Language throughout is capability-framed ("You now catch state bugs") not achievement-framed

### Cognitive Load Theory (CLT)

**Source:** Consensus across CLT literature — intrinsic load is determined by inherent material complexity and element interactivity; extraneous load is caused by the instructional material itself.

**Key finding:** Reading and judging AI-generated code is inherently high in intrinsic load. Extraneous load (decoration, competing UI, novelty) compounds this and degrades learning.

**Application to CampOS:**
- The Workspace UI is deliberately restrained during scenario judgment
- No firefly effect in the Workspace (it lives on Dashboard only for this reason)
- No decorative animation during code inspection
- Chat panel is minimal and predictable

### Gamification Research — When It Backfires

**Source:** Landmark Hanus & Fox 2015 study plus multiple 2020s meta-analyses.

**Key finding:** Adding multiple game elements (badges, leaderboards, coins, points) to a course reduced students' motivation and satisfaction. Gamification enhances autonomy and relatedness perceptions but has minimal impact on actual competency. Positive feedback boosts intrinsic motivation; competitive and performance-based rewards undermine it.

**Application to CampOS:**
- No badges, XP, points, leaderboards, or streaks in v1
- Progress bar is retained because it shows growth, not ranking
- Team-based leaderboards deferred to v2 as a specific, scoped experiment — not general gamification
- Feedback is informational, not evaluative

### Duolingo Streak Research

**Source:** Duolingo commercial research + third-party critical writing.

**Key finding:** Users who reach a 7-day streak are 3.6× more likely to complete their course. But long-term users eventually log in "so they don't lose" — hollow engagement that doesn't produce real learning.

**Application to CampOS:** Streaks rejected entirely. The commercial upside doesn't fit a professional-feeling learning tool for an audience that would recognise the manipulation.

### Identity-Based Habit Formation

**Source:** Popular writing (BJ Fogg, James Clear) — not peer-reviewed, worth noting.

**Key finding:** Framing progress as "becoming the kind of person who…" is more durable than framing it as points or achievements.

**Application to CampOS:** Milestone language is identity-shaped ("You now catch state bugs before shipping") rather than achievement-shaped. Flagged as a hypothesis to validate with real users, not a proven mechanic.

### Flow Through Calibrated Difficulty

**Source:** General flow literature (Csikszentmihalyi and subsequent work).

**Key finding:** Learners engage best when tasks sit in the challenge-competence sweet spot. Too easy → boredom. Too hard → learned helplessness (particularly damaging for a user population already anxious about not understanding code).

**Application to CampOS:** 8 scenarios arranged as a progression from easiest to hardest. Difficulty escalates within the single skill tier, not across tiers.

---

## UX & Product Design

### Dashboard Layout Patterns

**Source:** General UX literature on scannable dashboards.

**Key finding:** F-pattern and Z-pattern layouts match how people scan screens. Whitespace and grouping separate content into scannable zones.

**Application to CampOS:** Dashboard information hierarchy uses F/Z scanning patterns. Primary zone for current learning state and continuation, secondary for exploration, tertiary for profile/settings.

### Progressive Disclosure

**Source:** Standard UX principle.

**Key finding:** Show the minimum needed to make a decision; reveal detail on demand. Reduces overwhelm.

**Application to CampOS:** Fits both the minimalist aesthetic and the cognitive load management principle.

### Developer Tool Conventions

**Source:** Product observation of Cursor, VS Code, Linear, Raycast, Notion.

**Key finding:** Target audience is trained to expect keyboard-first navigation (⌘K command palette), dark themes, and dense-but-readable typography.

**Application to CampOS:** Command palette is a v2 nice-to-have, not v1. Dark theme is baseline. Typography aims for a professional developer-tool register while retaining the "learning platform" premium feel.

---

## Solo-Founder & ADHD-Adjacent Building

### Scope Discipline For Solo Prototypes

**Source:** "The Solo-Founder Playbook: Zero to Hero" (Dev.to) and "Building 7 Apps at Once With ADHD" (HackerNoon).

**Key finding:** If a solo-founder MVP takes more than 6 weeks of focused calendar time, the scope is wrong. Cut it. Every new feature during build phase feels urgent; scope compound-expands.

**Application to CampOS:** Ruthless v1 scope. Every "wouldn't it be cool if..." from the user gets logged in `BACKEND_BACKLOG.md`, not added. The 8-scenario limit exists because content authoring is the dominant time cost.

### File-Driven Context For Low-Friction Maintenance

**Source:** "Building 7 Apps at Once With ADHD" and multiple Claude Code best-practices guides.

**Key finding:** Low-friction maintenance survives focus gaps. High-friction maintenance does not. Text files edited in an IDE beat deployed configuration systems.

**Application to CampOS:** The entire context system is markdown files in the IDE. No admin panel, no CMS, no configuration UI. Everything editable directly.

### Non-Programmer AI-Assisted Builds

**Source:** "The New Solo Founder's Journey" (Substack) and "Zero Hand-Coding" (Towards AI).

**Key finding:** AI coding tools are powerful but not intelligent. Non-programmers building with them need aggressive scope discipline, strong context files, and explicit validation to catch AI mistakes.

**Application to CampOS:** Validation criteria written before building. Playwright MCP installed so the agent can verify its own UI work. All assumptions logged.

---

## AI Coding Agents & Context Engineering

### CLAUDE.md Best Practices — Under 150 Lines

**Source:** Red Hat Developers ("Standardize project context with AGENTS.md and Agent Skills"), Anthropic engineering blog, Termdock CLAUDE.md writing guide.

**Key finding:** Aim for fewer than 150 lines for context files; 30–50 lines is plenty for smaller repos. Every line should pass the test: "would removing this cause the agent to make a mistake it wouldn't otherwise make?" An ETH Zurich 2026 study found LLM-generated context files *decreased* task success rates by 3% vs no context file; human-written files improved success by only 4% while increasing costs 20%.

**Application to CampOS:** `AGENT_INSTRUCTIONS/` files are deliberately thin. Longer content lives in `01_Context/` and is pulled in only when relevant. This is why the project has many small files instead of one big one.

### The Kitchen Sink Session Failure Mode

**Source:** Claude Code best practices documentation.

**Key finding:** Starting one task, drifting to another, coming back — context fills with irrelevant information and quality degrades. Solution: /clear between unrelated tasks. After two failed corrections, start a new prompt incorporating what was learned rather than continuing to correct.

**Application to CampOS:** Session workflow explicitly requires "one objective per session" and "stop after two failed corrections."

### MCP Tool Ceiling

**Source:** Codersera 2026 MCP guide.

**Key finding:** Cursor has a soft ceiling of ~40 active tools across all MCP servers. Past that, the agent silently loses access to some tools and picks wrong ones more often.

**Application to CampOS:** Only 2 MCPs installed at start (Context7, Playwright). GitHub added at Build Stage A. Others explicitly rejected to stay well under the ceiling.

---

## Sources — Full URLs For Later Reference

**AI-assisted building for non-programmers:**
- https://myaicofounder.substack.com/p/building-alongside-ai-the-new-solo
- https://pub.towardsai.net/i-built-a-full-stack-saas-using-only-ai-heres-what-actually-worked-and-what-didn-t-c8aade46afbd
- https://jaystakes.substack.com/p/i-got-a-computer-vision-prototype

**Solo-founder scope and ADHD-adjacent building:**
- https://dev.to/truongpx396/the-solo-founder-playbook-zero-hero-3j7d
- https://hackernoon.com/building-7-apps-at-once-with-adhd-nearly-broke-my-solo-founder-brain

**Claude Code / Cursor / context engineering:**
- https://www.anthropic.com/engineering/claude-code-best-practices
- https://claude.com/blog/using-claude-md-files
- https://www.humanlayer.dev/blog/writing-a-good-claude-md
- https://developers.redhat.com/articles/2026/07/27/standardize-project-context-agentsmd-and-agent-skills
- https://packmind.com/context-engineering-ai-coding/context-engineering-best-practices/
- https://www.termdock.com/en/blog/claude-md-writing-guide
- https://bigideasdb.com/build-saas-with-cursor-claude-2026

**MCPs:**
- https://codersera.com/blog/best-mcp-servers-claude-code-cursor-2026/
- https://nimbalyst.com/blog/best-claude-code-mcp-servers/
- https://momen.app/blogs/best-mcp-servers-plugins-claude-code-codex-cursor-2026/
- https://toolradar.com/blog/free-mcp-servers

**Skills:**
- https://github.com/anthropics/skills
- https://support.claude.com/en/articles/12512198-how-to-create-custom-skills
- https://github.com/travisvn/awesome-claude-skills