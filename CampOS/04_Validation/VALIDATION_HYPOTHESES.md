# CampOS v1 — Validation Hypotheses

What we are trying to learn from distributing this prototype. Every 
decision to build v2 or change direction rests on these hypotheses being 
tested.

---

## The Core Hypothesis

**Non-programmers aged 16–24 who identify with vibe coding will find 
CampOS genuinely useful for their transition toward Agentic Engineering 
— enough to want a more complete version.**

This is what the prototype exists to test. Everything else is secondary.

---

## Primary Success Signal

**Target:** 20–50 non-programmer testers complete all 8 scenarios.

**Positive signal:** 30–40% of completers give **unprompted** positive 
feedback indicating CampOS is useful for understanding AI-generated code.

"Unprompted" means: they say something positive without being asked 
"did you like it?" Prompted positive feedback is too easy to get and 
too weak to trust.

**Channels:** Email replies, social media DMs, replies to social posts, 
direct messages. See `FEEDBACK_LOG.md` for logging format.

**If this signal is met:** Proceed to v2 planning with confidence.

---

## Secondary Signal (If Completion Volume Falls Short)

If fewer than 20 people complete all 8 scenarios but at least 5 do:

Qualitative depth becomes the signal. Even from 5 completers, if 2 or 
more independently describe:
- A specific thing they learned
- A moment where the product changed their thinking
- Specific praise for the scenario structure or feedback quality

...that is meaningful signal worth building on, despite small sample size.

If fewer than 5 complete even one scenario, the prototype has a 
distribution problem, not necessarily a product problem. Investigate 
the sharing and landing approach before pivoting the concept.

---

## Specific Hypotheses Being Tested

### H1 — The Learning Loop Works
*Hypothesis:* Theory → comprehension check → scenario → feedback is a 
useful and motivating loop for non-programmers learning Agentic Engineering.

*Evidence that proves it:* Completers describe the loop as logical and 
satisfying. They want "more levels" or "more scenarios."

*Evidence that disproves it:* Completers say theory is irrelevant, 
comprehension checks are annoying barriers, or scenarios don't connect 
to real situations they face.

### H2 — The Target Audience Exists and Can Be Reached
*Hypothesis:* There are enough non-programmer vibe-coders aged 16–24 
actively seeking to level up toward Agentic Engineering to build a 
product for.

*Evidence that proves it:* 20+ completers reached organically through 
social media, with no paid promotion.

*Evidence that disproves it:* Fewer than 10 people engage, or the 
people who do are already experienced coders (wrong audience).

### H3 — The Scenario Format Is Compelling
*Hypothesis:* Judging AI-generated code in a structured scenario is 
more engaging and educational than reading about it.

*Evidence that proves it:* Completers say scenarios are the most 
valuable part of the experience.

*Evidence that disproves it:* Completers skim scenarios or find them 
confusing, irrelevant, or patronizing.

### H4 — Non-Gamified Progression Is Sufficient
*Hypothesis:* A progress bar and competence-framed feedback (no 
badges, XP, streaks, leaderboards) is enough to motivate completion 
of all 8 scenarios.

*Evidence that proves it:* Completion rate is high relative to start 
rate (people who begin also finish).

*Evidence that disproves it:* High drop-off after scenario 2 or 3, 
or explicit requests for points/achievements/rewards.

### H5 — The Vibe-Coder-to-Agentic-Engineer Framing Resonates
*Hypothesis:* Describing CampOS as a product for vibe coders transitioning 
to Agentic Engineering is language the target audience identifies with.

*Evidence that proves it:* Target users describe themselves using the 
same language CampOS uses without prompting.

*Evidence that disproves it:* Users don't understand "Agentic Engineering," 
or find the framing pretentious, or identify it as something they're already 
past or not yet at.

---

## Failure Criteria — When To Pivot, Not Iterate

If a substantial majority of testers (not a minority) independently say 
one of the following, the concept needs rethinking, not refinement:

1. **"AI agents are powerful enough that I don't need to understand the 
   code they produce."**
   (The market has moved past the problem CampOS solves.)

2. **"I'd rather just have another AI agent review my code."**
   (Users want AI-on-AI supervision, not human supervision.)

3. **"This feels like learning to code, which I don't want to do."**
   (The product's identity is misunderstood — failing to differentiate 
   from a coding course.)

4. **"I don't know any vibe coders who would use this."**
   (The audience doesn't self-identify or the platform doesn't reach them.)

Any one of these from a majority of testers is a red flag. Two or more 
means pivot, not v2.

---

## Post-Validation Decision Tree

After distributing prototype:
│
├── 20–50 completions, 30–40%+ positive → BUILD V2
│
├── 20–50 completions, <30% positive → investigate why
│ ├── Scenario quality issues → iterate content before v2
│ ├── Learning loop issues → redesign loop before v2
│ └── Audience framing issues → reposition before v2
│
├── <20 completions → distribution problem, not product problem
│ ├── Try different platform/format for sharing
│ └── Check if people are starting but not finishing (retention issue)
│
└── Majority cite failure criteria above → PIVOT
├── Re-evaluate the core problem
└── Consider adjacent products (different audience, different problem)

---

## What We Are NOT Testing With v1

- Whether users will pay for CampOS (no payment in v1)
- Whether CampOS works with real AI chatbot integration (no chatbot in v1)
- Whether a full user-facing backend is sound (V1 backend is minimal and expanding, not the test)
- Whether multiple difficulty tiers work (one tier only in v1)
- Whether team features work (no team features in v1)

These are v2+ questions. Do not draw conclusions about them from v1 data.