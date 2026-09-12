# THEORY PIECE 02 — Context Is King

**Type:** Pillar
**Pillar covered:** Context Engineering (Pillar 1 of 5)
**Prerequisite:** Theory Piece 01
**Unlocks:** Scenario 01 — The Vague Request
**Estimated reading time:** 3–4 minutes

---

## THE MOMENT

You type one sentence: _"Build me a waitlist page for my startup."_

Eight minutes later you have a page. Dark background, clean type, a headline that sounds like a real marketing team wrote it. A product name at the top. A launch date. Three feature bullets.

You never gave it a product name. You never picked a launch date. You have not decided what the features are.

The agent didn't fail. It succeeded at building a version of your startup that doesn't exist. And if you keep going from here, every next instruction is a negotiation with a company the agent invented. The fiction will win, because it's written down and your actual idea is not.

## WHAT CONTEXT ENGINEERING MEANS

**Context Engineering** is giving the agent the right information, in a form it keeps using, so it works from your facts instead of filling gaps itself.

Two things to notice. **Right information** — not more information. The instinct after a bad result is to write a longer prompt, and a longer prompt is usually just a longer vibe. There is also such a thing as too much: flood an agent with your whole project and it copies patterns it finds instead of building what you asked for.

**In a form it keeps using** — a sentence typed into a chat is gone when the chat closes. Context that lives in a file is still there tomorrow, in a fresh session, next week.

Useful context contains three things:

- **Intent** — what you're making, for whom, and why.
- **Constraints** — what the agent must not do, invent, or touch.
- **What done looks like** — how you'll know the result is acceptable without asking the agent if it's proud of itself.

None of these require you to know code. They require you to know what you want.

## PROMPT FAILURE VS. MODEL FAILURE

When output comes back wrong, there are two very different causes.

A **prompt failure** is when you left room for the agent to invent, and it did. The waitlist page with the made-up launch date is a prompt failure. The agent had no date. You gave it no rule against inventing one. Nothing malfunctioned.

A **model failure** is when you supplied clear context and the agent ignored it.

The fixes are completely different. A prompt failure is fixed by supplying the missing context. A model failure might need a different approach or a smaller task. Most people default to "the tool is broken, I need a different tool" — and end up switching agents forever, hitting the same wall, because the missing information was never on the agent's side.

## THE SAME REQUEST, TWICE

**Vague:** _Build me a waitlist page for my startup._

**Useful:** _A public landing page for a waitlist. One email field, nothing else. No payments, no accounts. Do not invent a product name, launch date, or feature claims — I have not decided those. Done means: a visitor can submit an email, and every piece of text on the page is either generic or something I supplied._

The second version is longer, but length is not what makes it work. It says what the thing is, what is forbidden, and how you'll judge the result. The agent can still build the whole page. You have just stopped it from authoring your company for you.

## WHY THIS PILLAR COMES FIRST

Everything else assumes this one. Validation is checking whether the agent did what you asked — if you never clearly said what you asked, there is nothing to check against. Compound Engineering is carrying decisions forward — there are no decisions to carry if the agent has been making them.

## WHAT SCENARIO 01 WILL ASK

You'll open the launch page project at the exact moment described above. The agent has already built a first version from a one-sentence request. You'll review what it produced, identify what came from you versus what the agent invented, and choose from a set of pre-written instructions. One of those is Context Engineering. The others feel productive and leave the same problem in place.

---

# COMPREHENSION CHECK — THEORY 02

_Four questions. Each uses a different project. None can be answered by copying a line from above._

---

### Question 1

Your cousin asks an agent: _"Make a booking page for my Saturday morning fitness class."_

What comes back includes a $25 drop-in price, a coach bio for someone named Marcus, and a 6:00am start time. He never mentioned price or a coach, and the class is actually 8:00am.

He's annoyed and wants to switch AI tools.

**What actually happened?**

- A. Model failure — a good agent would leave unknown details blank
- B. Prompt failure — the request never specified those facts, so the agent filled the gaps
- C. Validation failure — he should have tested the booking form first
- D. Tooling failure — booking pages need a specialised tool

**Correct answer: B**

---

### Question 2

Same cousin. He wants to give better information but doesn't want to retype the class rules every time he opens a new chat.

**Which is Context Engineering as CampOS defines it?**

- A. Pasting the same paragraph into every new chat
- B. Asking the agent at the start of each session whether it remembers yesterday
- C. Writing a short project file — _class is Saturday 8am only, no prices displayed, do not invent a coach name_ — and pointing every new instruction at that file
- D. Installing several extensions so the agent has more internet access

**Correct answer: C**

---

### Question 3

A friend building merch for a local band writes: _"Sell the shirt. Make it look sick."_

The agent produces a page claiming _limited drop — only 200 made — ships worldwide in 2 days._ None of that is true. Shipping takes three weeks.

**Which piece of useful context was missing?**

- A. A stronger aesthetic description
- B. Constraints and a definition of done — what the page must not claim, and how he'll know it is safe to show the band
- C. Permission for the agent to write marketing copy
- D. Nothing — this is normal, he should manually edit afterwards

**Correct answer: B**

---

### Question 4

Two people get an identical messy first draft back from an agent.

**Person 1** types _"make it better"_ and accepts the next version because it looks cleaner.

**Person 2** lists every claim on the page they never approved, adds _"do not state any fact I have not supplied,"_ and only then sends their next instruction.

**Who is practising the skill this theory piece teaches?**

- A. Person 1 — cleaner output proves the context was sufficient
- B. Person 2 — they converted missing facts into explicit constraints before asking again
- C. Both — each reviewed the output and sent a follow-up
- D. Neither — neither wrote code

**Correct answer: B**

---

**On passing:** Scenario 01 — The Vague Request unlocks.
