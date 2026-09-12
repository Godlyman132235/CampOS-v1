# CampOS — Prompt Templates

Every prompt written for Cursor or Claude Code must use this template
as its skeleton. A prompt that skips sections is a prompt that produces
unreliable work.

Never give a prompt to an agent without filling in every section.
If a section is genuinely not applicable, write N/A and briefly explain why.

---

## The Standard Prompt Template

Copy this before every Cursor or Claude Code task. Fill in every field.

---

OBJECTIVE
[One sentence. One specific goal. Not "work on the Dashboard" but
"Build the progress bar component on the Dashboard Progression View
using the spec in FRONTEND.md section Dashboard Architecture."]

CURRENT STATE
[What exists right now. What files are relevant. What was the last
thing built. What the agent will see when it opens the project.]

FILES TO READ BEFORE STARTING
[Every file the agent must read before touching anything. Always include
FRONTEND.md, SCOPE_AND_NONGOALS.md, and UI_DIRECTION.md as the minimum.
Add any specific files relevant to this task.]

FILES ALLOWED TO MODIFY
[Every file the agent is allowed to change. If a file is not on this
list, it must not be touched. Be specific.]

CONSTRAINTS
[Rules the agent must follow. The standard constraints below apply to
every single prompt without exception. Add task-specific rules below them.]

Standard constraints (include these in every prompt without exception):
- Preserve all existing functionality unless explicitly told to remove it
- Do not create any new file without asking the user for approval first
- Do not delete any file without asking the user for approval first
- Vanilla HTML, CSS, and JavaScript only. No frameworks, no npm, no build step
- Use CSS variables from UI_DIRECTION.md. Never hardcode hex values in CSS
- Use spacing values from the 8-point grid in UI_DIRECTION.md
- Do not modify any file in 01_Context/, 02_Product_Planning/,
  04_Validation/, 05_Prompting/, or 07_Compound_Engineering/
- After completing the task, summarise all changes in plain English,
  naming every file that was modified or created

Task-specific constraints:
[Add any rules specific to this task here]

ACCEPTANCE CRITERIA
[Specific, checkable conditions that define done. Not "it looks good"
but "the progress bar fill animates from left to right over 0.4 seconds
using a gradient from --color-purple-strong to --color-blue-strong."
Every criterion must be verifiable by opening a browser and looking.]

VERIFICATION METHOD
[How the agent or user will confirm the acceptance criteria are met.
Usually: open the file in Chrome, navigate to a specific section,
perform an action, and confirm a specific result is visible.]

EXPLAIN BEFORE DOING
[Write YES if the task is complex enough that the agent should describe
its planned approach before writing any code. Write NO only for small,
completely obvious tasks where the approach cannot be misunderstood.]

---

## Filled Example — Build Stage A (Project Skeleton)

OBJECTIVE
Create the complete file and folder structure for the CampOS v1 prototype,
with a working index.html that opens in a browser and displays the
CampOS wordmark on a dark background.

CURRENT STATE
The project directory contains only context and planning files in
01_Context/, 02_Product_Planning/, 03_Design_Visual/, 04_Validation/,
05_Prompting/, 06_Educational_Content/, 07_Compound_Engineering/,
08_Codebase/, 09_Tooling/, AGENT_INSTRUCTIONS/, and 00_README.md.
No HTML, CSS, or JavaScript files exist yet.

FILES TO READ BEFORE STARTING
- 02_Product_Planning/FRONTEND.md
- 02_Product_Planning/SCOPE_AND_NONGOALS.md
- 03_Design_Visual/UI_DIRECTION.md

FILES ALLOWED TO MODIFY
Create new files only. No existing file should be touched.
New files to create:
- index.html
- css/base.css
- css/dashboard.css
- css/workspace.css
- js/main.js
- js/dashboard.js
- js/workspace.js

CONSTRAINTS
Standard constraints apply.
Additional: The wordmark must use Playfair Display Bold bundled
locally (not loaded from Google's servers). Background must be the colour defined
by --color-base in UI_DIRECTION.md. No content beyond the wordmark
on this first build.

ACCEPTANCE CRITERIA
1. index.html opens in Chrome without any console errors
2. Background colour is #0D0B14
3. The word CampOS is visible using Playfair Display Bold
4. Camp renders in --color-text-primary and OS renders in
   --color-purple-strong
5. All CSS values use custom properties with no hardcoded hex values
6. Local bundled fonts load correctly and no system font fallback is visible

VERIFICATION METHOD
Open index.html in Chrome. Check the console for errors. Visually
confirm the wordmark. Open DevTools, click on the body, and confirm
the computed background-color is rgb(13, 11, 20).

EXPLAIN BEFORE DOING
YES. Explain the file structure and how CSS variables will be organised
before creating anything.

---

## Notes on Writing Good Prompts

Keep the objective to one sentence. If you need two sentences,
the task is probably two separate prompts. Split it.

Acceptance criteria must be verifiable by looking at a browser.
If you cannot check a criterion without running code yourself,
rewrite it until you can.

If a task could accidentally change something unrelated to the
objective, add a constraint that explicitly forbids it.

If you are unsure how to write an acceptance criterion, ask Claude
(the strategic layer) to help you write it before sending the prompt.