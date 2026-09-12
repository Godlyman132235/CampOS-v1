# CampOS — Scenario Design Principles

Every scenario in CampOS must follow the rules in this file.
These rules exist to ensure every scenario is useful, accessible
to non-programmers, and genuinely teaches the right Agentic
Engineering skills.

This file is used by Claude when drafting scenarios, by the user
when approving them, and by Cursor when building the scenario loader.

---

## What A Scenario Is

A scenario is a realistic AI-assisted software situation in which
the user must read, judge, and act on something an AI agent produced.

Every scenario presents a real problem that a real vibe coder
transitioning to Agentic Engineering would actually encounter.
It is not hypothetical. It is not a syntax quiz. It does not
require coding knowledge to understand or complete.

The user should finish every scenario thinking: "That kind of
thing has happened to me, or could happen to me soon."

---

## What A Scenario Is NOT

A scenario is not a coding lesson. The user does not need to write
code, memorise syntax, or understand how to build anything from scratch.

A scenario is not abstract theory. It is grounded in a specific
situation with specific code and a specific problem to resolve.

A scenario is not a trick question. The correct decision must be
reachable by a careful non-programmer who has read the linked theory.

---

## The One Concept Rule

Every scenario teaches exactly one Agentic Engineering concept.
Not two. Not a mix. One clearly named concept, linked to one
theory piece.

Exception: Scenarios 7–8 are capstones and use all five pillars.

This makes the feedback screen meaningful and ensures theory and
scenarios are properly connected throughout the learning loop.

---

## The Non-Programmer Accessibility Rule

Every scenario must be completable by someone who has never
written a line of code. This requires:

The situation description does all the heavy lifting. Before the
user sees the agent's output, they must already understand what they
were building, what they asked the AI to do, and what their job is
in this scenario.

V1 does not use a numbered code artifact. The learner reviews a
plain-language description of what the agent already produced.
Code reading is a V2 concern.

Checklist items are actions, not knowledge tests.
Good: "Mark every claim on the page that did not come from your request."
Bad: "Identify the asynchronous callback error in the handler."

Feedback explains consequences in plain English. No jargon
without an immediate plain-English explanation.

---

## Difficulty Progression Across 8 Scenarios

All 8 scenarios are for the non-programmer tier. Difficulty
increases in two ways as the sequence progresses:

Subtlety of the issue:
Early scenarios have obvious problems visible to any careful reader.
Later scenarios require comparing what was asked versus what was
produced, or spotting something that looks correct at first glance
but has a hidden problem.

Checklist length:
Scenarios 1-2 have 2-3 checklist items.
Scenarios 3-4 have 3-4 items.
Scenarios 5-8 have 4-7 items.

Difficulty labels for the 8 scenarios:
Scenarios 1-2: Foundational. Problem is obvious with careful reading.
Scenarios 3-4: Developing. Requires comparing request vs output.
Scenarios 5-6: Practical. Multiple issues to find and judge separately.
Scenarios 7-8: Advanced. Problem may look correct at first glance.

---

## Required Sections in Every Scenario File

Every scenario markdown file must contain all of the following
sections in this exact order. None may be skipped.

TITLE
A short, plain-English name a non-programmer would understand
before starting. Not a coding term. Not jargon.
Example: The Vague Request. The Silent Change. The Wrong Fix.

DIFFICULTY
One of: Foundational, Developing, Practical, Advanced.

SCENARIO NUMBER
Which number in the sequence of 8 this is.

LINKED THEORY CONCEPT
The single concept this scenario exercises. Must match a theory
piece that exists or is planned.

THEORY RECAP
4–6 sentences. Not a second full theory essay.

SITUATION
2-4 sentences written from the user's perspective in plain English.
Explains what they were building, what they asked the AI, what
the AI said it did, and what their job is.

WHAT THE AGENT ALREADY PRODUCED
A prose description of the scripted output. No numbered code required.

WHAT TO DO (CHECKLIST)
2-7 numbered action items. Each is one clear sentence describing
a concrete pillar action in the Workspace.

DEFINED INSTRUCTION CHOICES
A small set of pre-written instructions. Each has a scripted outcome.
No free-text prompt box.

THE MOST EFFECTIVE PATH
The most effective checklist path, written for the feedback screen.
Not framed as the only allowed answer. Seen only after the user submits.

COMMON WRONG DECISIONS
Mistakes users typically make and why each is less effective.
Shown on the feedback screen.

GRADE BANDS
A / C / E as effectiveness of judgment, not a rank trophy.

FEEDBACK
Plain-English explanation of why the most effective path matters in a
real project. Connects to the linked theory concept. Explains
what would go wrong in practice if a weaker path was taken.
Maximum 200 words.

HINTS
2-3 hints in order from least to most revealing. Used by the hint
system if the user asks for help. Written so that Hint 1 gives
the smallest possible nudge and Hint 3 essentially points to
the answer.

AUTHOR NOTE
One sentence explaining which real Agentic Engineering situation
this scenario prepares the user to handle. Not shown to the user.

---

## JSON Structure for the Scenario Loader

When Cursor builds the scenario loader, it reads from JSON files.
The JSON structure that matches each markdown scenario is:

{
  "id": "scenario-01",
  "title": "The Vague Request",
  "difficulty": "Foundational",
  "number": 1,
  "linkedConcept": "Context Engineering",
  "situation": "Situation text here.",
  "agentOutput": "Plain-language description of what the agent already produced.",
  "checklist": [
    {
      "id": "task-1",
      "instruction": "Mark every claim on the page the agent invented.",
      "type": "mark"
    },
    {
      "id": "task-2",
      "instruction": "Write a context document that pins down what the agent got wrong.",
      "type": "writeDocument"
    },
    {
      "id": "task-3",
      "instruction": "Decide whether to keep or reject the current page as the project base.",
      "type": "decision"
    }
  ],
  "whatGoodLooksLike": [
    "Excludes the invented product name",
    "Excludes the invented launch date",
    "Excludes the invented features",
    "Keeps the single email field",
    "States a clear definition of done"
  ],
  "mostEffectivePath": "Explanation of the most effective path.",
  "gradeBands": {
    "A": "Document covers all key ideas; invented facts excluded; clear definition of done.",
    "C": "Document covers some key ideas but leaves invented facts in or omits definition of done.",
    "E": "No meaningful document, or accepts the invented company wholesale."
  },
  "commonWrongDecisions": [
    "Wrong decision 1 and why it is less effective.",
    "Wrong decision 2 and why it is less effective."
  ],
  "feedback": "Plain English feedback here.",
  "hints": [
    "Hint 1 here.",
    "Hint 2 here.",
    "Hint 3 here."
  ]
}

The markdown files in scenarios/ are the human-readable authoring
format. The JSON format above is what Cursor builds the loader from.

---

## Quality Checklist Before Approving Any Scenario

Run through every item before a scenario is considered complete.

Content:
- Does it teach exactly one concept?
- Is the situation grounded in something a real vibe coder encounters?
- Is the agent's output described so a non-programmer can review it?
- Is the correct path reachable without coding syntax knowledge?
- Does the feedback explain real-world consequences in plain English?

Accessibility:
- Could someone with zero coding experience complete this?
- Does the situation description give full context before the output?
- Are all checklist items actions rather than knowledge tests?

Format:
- All required sections present?
- Output described in prose (no numbered code required)?
- Checklist items numbered?
- Feedback under 200 words?
- Three hints present, ordered from subtle to obvious?

Difficulty:
- Is the problem's scale appropriate for this scenario's position?
- Is the problem's subtlety correct for this difficulty level?
- Does the checklist length match the difficulty tier?