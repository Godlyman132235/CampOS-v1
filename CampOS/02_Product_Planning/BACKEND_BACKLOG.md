# Backend Backlog — v2 and Later

This is not a roadmap. It is a lightweight holding area for backend ideas and direction that are explicitly out of scope for v1.

## What the Backend Will Eventually Do

- Connect CampOS to real user accounts (email-based or OAuth)
- Persist user progress across devices and sessions
- Serve scenario and theory content from a database instead of JSON files
- Integrate a built-in agent for paying users (no bring-your-own API key)
- Provide admin tools for scenario authoring (CMS-style)
- Enable multi-user features (discussion, feedback sharing, collaborative scenarios)

## Key Constraint: Cost

The solo founder has a $0 budget for backend infrastructure in v1 and a minimal budget for v2. Any backend decision must account for this. Running a serverless function, a small database, and an AI API integration adds up quickly. The backend must be designed around free or very-low-cost layers (Firebase, Supabase free tier, serverless free tier, etc.) until there is revenue.

## Chatbot Reality Check

Bring-your-own-API-key is rejected. Not v1, not v2.

V1 uses defined instruction choices with scripted outcomes. For v2, CampOS may include a built-in agent for paying users. CampOS absorbs that cost only if there is revenue or funding. Casual testers may still see scripted outcomes.

This is parked until backend planning begins in earnest.

## Not Decided Yet

- Database technology (Firestore, Supabase, etc.)
- Authentication method (email/password, OAuth, etc.)
- Hosting (Firebase, Vercel, custom VPS, etc.)
- API framework (if needed)
- Real-time sync strategy (if needed)

## Workspace and agent (V1)

Not a code viewer. The Workspace looks like an IDE: files panel and checklist top-left, scripted agent panel on the right, hint button near the agent.

The learner reviews output the agent already produced, then EXECUTES the pillar by writing their own .md document — for Scenario 1, a context/constraints document for the launch-page project. This is real execution, not multiple choice. There is no A/B/C instruction-choice mechanic.

The scripted agent has a small number of pre-written messages (e.g. an opening message, and a response after the learner submits their document). It is not a live model, has no API, and does not read or understand the learner's writing in real time.

Grading uses a real AI to assess how effectively and efficiently the learner's document executes the pillar, checked against a pre-defined set of "what good looks like" for that scenario. (Note: this AI-grading decision requires a small backend and an API key; it is the one V1 feature that reaches beyond pure frontend, and is walled off from the rest of the scenario so it can be swapped for simpler checking if needed.)

Code reading is a V2 concern.

These are all v2+ decisions. Do not think about them for v1.

## Open Questions

- Will v1 validation prove the concept is worth a backend investment?
- If yes, what is the minimum backend needed to ship v2?
- Will there be any revenue model in v2, or purely exploratory?

All three are currently unanswered.