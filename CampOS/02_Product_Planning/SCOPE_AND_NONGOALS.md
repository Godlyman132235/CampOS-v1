# CampOS v1 — Scope and Non-Goals

Explicit boundaries. This file is a defensive measure. Agents that build things outside these boundaries are not following the project rules.

## What v1 Includes

- **Frontend**: static HTML, CSS, JavaScript. Single-page app in the browser.
- **Dashboard**: theory browser, scenario launcher, progress view, minimal profile, minimal settings.
- **Workspace**: review of scripted agent output, checklist of pillar actions, defined instruction choices with scripted outcomes. Not a code viewer in V1.
- **Learning loop**: theory → multiple-choice check → scenario → feedback → Dashboard.
- **Scenarios**: 8 total, all at non-programmer difficulty, progressively harder.
- **Scenario content**: situation, description of what the agent already produced, checklist, defined instruction choices, most-effective path, grade bands, feedback.
- **Progression tracking**: localStorage only. What's completed, what's next. No accounts. No syncing across devices.
- **Visual identity**: dark base, purple/blue accents, glossy widget elements, firefly cursor effect on Dashboard only.
- **Motion**: present but not intense. Reduced-motion setting respected.
- **Instruction choices**: a small set of pre-written directions, each with a scripted outcome. No free-text prompt box.
- **Distribution**: static site deployed to GitHub Pages. Shared via social media links.
- **Backend**: minimal, expanding; not yet a user-facing product.
- **Educational Content**: (in process) 
## What v1 Does NOT Include

The following are non-negotiably out of scope. Do not build them, even if they seem like "helpful additions."

**Accounts and Authentication:**
- No user accounts
- No OAuth
- No data collection tied to individuals, except a tester contact email collected once, upfront, used only for demo communication (reminders, feedback prompts)

**Real AI Integration:**
- No real chatbot in v1
- No calls to external AI models (Anthropic, OpenAI, etc.)
- Instruction choices are fully scripted. No API. No live model.

**Payment:**
- No payment integration
- No Stripe
- No subscriptions
- No pricing page
- No payment-gated content

**Gamification and Competition:**
- No worldwide leaderboards
- No regional leaderboards
- No friend leaderboards (not in V1)
- No streaks
- No badges

**Content:**
- No more than 8 scenarios in v1
- No more than the core concepts for the 8 scenarios
- No certificates, credentials, or "graduation"
- No testimonials or social proof pages

**Mobile and Responsiveness:**
- Dashboard should degrade gracefully to mobile (readable, not perfect)
- Workspace is desktop-only with a "please open on desktop" message on phones

**Design and Customization:**
- No theme switcher or dark/light mode toggle (dark only)
- No font size customization
- No colour customization
- No layout customization
- One visual identity, shipped

**Visual:**
- No real logo design from you (wordmark from Claude Design only, as a semi-prototype) 
- Three fonts (Playfair Display, Inter, JetBrains Mono), bundled locally. Not loaded from Google's servers.
- No animated GIFs or videos 

**Analytics:**
- No Mixpanel, PostHog, Hotjar, or similar
- No session recording
- No heatmaps
- Basic completion tracking only (how many finished all 8)

**Tooling:**
- No CMS or admin interface for editing scenarios
- No deployment pipeline beyond "push to GitHub, GitHub Pages serves it"
- No CI/CD beyond GitHub's defaults
- No Docker, serverless, or infrastructure code

**Social Features:**
- No comments on scenarios
- No user-to-user messaging
- No discussion forums
- No social sharing buttons inside the app

**Accessibility (v1 Baseline):**
- Reduced-motion setting: yes, include
- Keyboard navigation: basic (tabbing works)
- Screen reader support: basic (semantic HTML, alt text)
- Meets WCAG AA colour contrast; no full formal AA audit in V1
- Turn off effects
- No theme switcher and no “change colour themes” control

**Accessibility Features That Are Out:**
- High-contrast mode toggle
- Text enlargement beyond browser zoom
- Sign language videos
- Transcripts of video (no video in v1 anyway)

## Why These Are Out

Every item in the "does not include" list either:
1. Adds scope that doesn't help validate the core concept (do people want to practise the five pillars?)
2. Introduces technical complexity that slows solo-founder development
3. Creates liability or maintenance burden that's inappropriate for a prototype
4. Requires backend infrastructure that violates the v1 scope

If a task would add any of these things, it is out of bounds. Flag it and move on.

## Emergency Override

Only the user can override this scope. Cursor or Claude Code cannot make an override decision independently. If you believe something *should* be in v1 despite being listed here, raise it to the user and wait for confirmation before building it.