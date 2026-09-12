(() => {
  "use strict";

  const root = document.documentElement;
  const tabs = Array.from(document.querySelectorAll(".nav__tab"));
  const sections = Array.from(document.querySelectorAll(".dash-section"));

  if (!tabs.length || !sections.length) return;

  // Read timings from the CSS tokens so JS and CSS cannot drift apart.
  const readMs = (name, fallback) => {
    const raw = getComputedStyle(root).getPropertyValue(name).trim();
    const value = parseFloat(raw);
    if (!Number.isFinite(value)) return fallback;
    return raw.endsWith("ms") ? value : value * 1000;
  };

  const exitMs = readMs("--duration-fast", 150);

  // Section switching

  let exitTimer = null;

  const revealCards = (section) => {
    if (section.dataset.revealed !== "true") {
      section.dataset.revealed = "true";
    }
  };

  const activate = (name) => {
    const next = sections.find((s) => s.dataset.section === name);
    if (!next || next.classList.contains("is-active")) return;

    const current = sections.find((s) => s.classList.contains("is-active"));

    if (exitTimer !== null) {
      clearTimeout(exitTimer);
      exitTimer = null;
      sections.forEach((s) => s.classList.remove("is-exiting"));
    }

    if (current) {
      current.classList.remove("is-active");
      current.classList.add("is-exiting");
      exitTimer = setTimeout(() => {
        current.classList.remove("is-exiting");
        exitTimer = null;
      }, exitMs);
    }

    next.classList.add("is-active");
    revealCards(next);

    tabs.forEach((tab) => {
      const isActive = tab.dataset.section === name;
      tab.classList.toggle("is-active", isActive);
      if (isActive) {
        tab.setAttribute("aria-current", "page");
      } else {
        tab.removeAttribute("aria-current");
      }
    });
  };

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => activate(tab.dataset.section));
  });

  const landing = sections.find((s) => s.classList.contains("is-active"));
  if (landing) revealCards(landing);

  // Progress bar

  const track = document.getElementById("progress-track");
  if (track) {
    const total = Number(track.dataset.total) || 8;
    const completed = Number(track.dataset.completed) || 0;
    const percent = Math.max(0, Math.min(100, (completed / total) * 100));
    track.style.setProperty("--progress-pct", `${percent}%`);
  }

  // Reduced motion.
  // Follows the OS preference until the user touches a switch, then their choice
  // wins. Persisting the choice comes with the progression work in a later stage.

  const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  const switches = Array.from(
    document.querySelectorAll('[data-toggle="reduced-motion"]')
  );

  let override = null;

  const isReduced = () => (override === null ? motionQuery.matches : override);

  const applyMotionPreference = () => {
    const reduced = isReduced();
    root.dataset.reducedMotion = String(reduced);
    switches.forEach((s) => s.setAttribute("aria-checked", String(reduced)));
    syncFirefly();
  };

  const syncFirefly = () => {
    if (!window.CampOSFirefly) return;
    if (isReduced() || window.innerWidth < 1024) {
      window.CampOSFirefly.destroy();
    } else {
      window.CampOSFirefly.init();
    }
  };

  switches.forEach((s) => {
    s.addEventListener("click", () => {
      override = !isReduced();
      applyMotionPreference();
    });
  });

  motionQuery.addEventListener("change", () => {
    if (override === null) applyMotionPreference();
  });

  applyMotionPreference();

  let fireflyResizeTick = false;
  window.addEventListener("resize", () => {
    if (fireflyResizeTick) return;
    fireflyResizeTick = true;
    requestAnimationFrame(() => {
      fireflyResizeTick = false;
      syncFirefly();
    });
  });

  // Placeholder links have no destination yet; stop them jumping to the top.

  document.querySelectorAll("a[data-placeholder]").forEach((link) => {
    link.addEventListener("click", (event) => event.preventDefault());
  });

  // Theory reading, check, and card state

  const STORAGE_KEY = "campos-progress";
  const PASS_MARK = 3;

  const THEORY_01_MARKDOWN = `# THEORY PIECE 01 — You Are Not Bad At This

**Type:** Orientation
**Scenario attached:** None
**Unlocks:** Theory Piece 02
**Estimated reading time:** 3–4 minutes
**Pillar covered:** All five, at overview level

---

## THE MOMENT

It is late. You have been going back and forth with the agent all night. You ask for one more small change: move the signup form higher on the page.

The agent does it. You reload. The form is higher.

The button that used to say "Join" now says "Get Started." You did not ask for that. The colour on the footer is different. You did not ask for that either. Something that worked ten minutes ago has stopped working, and you can't tell exactly when.

You type: *"the button is broken, fix it."*

The agent fixes it. Something else breaks.

## WHAT IS ACTUALLY HAPPENING

You are not stuck because you are bad at prompting. You are stuck because prompting is the only move you have.

Every action you can take is a sentence typed into a box. You have no way to check what the agent changed. No way to stop it from touching things you never mentioned. No record of decisions you made last night, so tonight starts from zero.

That is not a skill problem. That is a missing toolkit. CampOS exists to give you the rest of it.

## VIBE CODING VS. AGENTIC ENGINEERING

What you were doing that night is called **vibe coding** — describe, accept what comes back, describe again when something breaks. Andrej Karpathy coined the term, and it is genuinely powerful. Three years ago you couldn't have built the thing you built.

But vibe coding works right up until it doesn't, and when it stops working, you have one control: talk to the machine again, more desperately.

**Agentic engineering** is what you graduate into. You still don't write the code. What changes is where the trust lives. In vibe coding, trust is automatic — output looks finished, you accept it. In agentic engineering, trust is earned by evidence. You have a way to know whether the agent did what it claimed.

An academic named Ipek Ozkaya put it best:

> "We need to be teaching next-generation software engineers when to trust, how to create evidence to trust, how to do trust assessment rapidly and correctly."
>
> — Ozkaya, 2023

That is the entire curriculum of CampOS. Not "learn to code." Learn to know.

## THE FIVE PILLARS

CampOS breaks agentic engineering into five pillars, adapted from a framework by Meta staff engineer John Kim. It is not an industry standard — just CampOS's map.

1. **Context Engineering** — giving the agent the right facts, in a form it keeps using.
2. **Agentic Validation** — proving the work is correct instead of trusting it is.
3. **Agentic Tooling** — picking a few tools on purpose, not collecting every one that sounds useful.
4. **Agentic Codebase** — keeping the project clean enough the agent doesn't get confused.
5. **Compound Engineering** — writing down what you learn so next session starts smarter than this one.

V1 includes a theory piece and a paired scenario for every pillar, including Agentic Codebase. Theory 1 is orientation only and does not unlock a scenario. Context Engineering is first because every other pillar assumes you can do it.

## THE LOOP

Every concept in CampOS follows the same rhythm:

1. Read a short theory piece.
2. Answer a few questions that apply the idea to a new situation.
3. Enter a scenario. You review work the agent has already done on a founder launch page — the one project running through all eight scenarios. You complete a checklist. You choose from pre-written instructions, not free text.
4. Get feedback. A grade from A to E, and a written breakdown of what you caught and what you missed.
5. Move to the next concept.

No badges. No streaks. No points. The only scoreboard is what you can now do.

---

# COMPREHENSION CHECK — THEORY 01

*Four questions. Each one uses a new situation. None can be answered by copying a line from above.*

---

### Question 1

Your friend builds a page for his car detailing side hustle in Lovable. He publishes it. Two weeks later a customer says the phone number is wrong. He opens the chat, types *"fix the phone number,"* republishes, and closes his laptop.

**Which description fits what he is doing?**

- A. Agentic engineering — he used an AI to build and maintain a real site
- B. Vibe coding — he delegates, accepts what comes back, and only returns when something visibly breaks
- C. Agentic validation — a customer found the problem
- D. He has moved past vibe coding because the site is live

**Correct answer: B**

---

### Question 2

Same friend, three weeks later. Before he asks the agent to change anything, he opens the page, compares it against the business card he had printed, writes down *"phone is 0412 448 901, do not change the address or the pricing,"* and only then sends his instruction.

**What actually changed?**

- A. Nothing meaningful — he still didn't write any code himself
- B. He became a programmer
- C. He started supervising — he checked the work against a real source and limited what the agent was allowed to touch
- D. He used Compound Engineering because he referred to something written down

**Correct answer: C**

---

### Question 3

A developer you follow keeps a file in her project saying: *this app has no user accounts, never add authentication, all data stays in the browser.* Every session, she points the agent at that file first.

**Which pillar is she practising?**

- A. Agentic Validation — she is being careful
- B. Context Engineering — persistent, structured information the agent works from
- C. Agentic Tooling — a file is a tool
- D. Agentic Codebase — the file lives inside the project folder

**Correct answer: B**

---

### Question 4

Someone in your Discord installed four AI extensions this week because each one was recommended in a video. He spent his evening configuring them. His actual project — a booking form for his mum's business — still doesn't send a confirmation email, and he hasn't checked whether it ever did.

**Using CampOS's map, what went wrong?**

- A. He needs better Context Engineering — plugins provide context
- B. He needs a bigger project structure, which is Agentic Codebase
- C. He collected tools instead of doing the one check that mattered — the confirmation email was never validated
- D. This is just vibe coding — collecting tools is what vibe coders do

**Correct answer: C**

---

**On passing:** Theory Piece 02 unlocks.
`;

  const THEORY_02_MARKDOWN = `# THEORY PIECE 02 — Context Is King

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
`;

  const THEORY_CATALOG = [
    {
      id: 1,
      cardTitle: "Theory Piece 1",
      description:
        "Why prompting is not enough, and the five-pillar map CampOS uses instead.",
      unlocksLabel: "Unlocks Theory 2",
      markdownPath: "../06_Educational_Content/theory/Theory-01.md",
      fallbackMarkdown: THEORY_01_MARKDOWN,
      requiresTheory: null,
      unlocksTheory: 2,
    },
    {
      id: 2,
      cardTitle: "Theory Piece 2",
      description: "Give the agent the right facts, in a form it keeps using.",
      unlocksLabel: "Unlocks Scenario 1",
      markdownPath: "../06_Educational_Content/theory/Theory-02.md",
      fallbackMarkdown: THEORY_02_MARKDOWN,
      requiresTheory: 1,
      unlocksTheory: null,
      unlocksScenario: 1,
    },
    {
      id: 3,
      cardTitle: "Theory Piece 3",
      description: "Placeholder description for the third concept.",
      unlocksLabel: "Unlocks Scenario 3",
      markdownPath: null,
      fallbackMarkdown: null,
      requiresTheory: 2,
      unlocksTheory: null,
      locked: true,
    },
  ];

  const SCENARIO_CATALOG = [
    {
      id: 1,
      cardTitle: "Scenario 1",
      description: "Placeholder situation for the first scenario.",
      meta: "Foundational",
      requiresTheory: 2,
    },
    {
      id: 2,
      cardTitle: "Scenario 2",
      description: "Placeholder situation for the second scenario.",
      meta: "Foundational",
      locked: true,
    },
    {
      id: 3,
      cardTitle: "Scenario 3",
      description: "Placeholder situation for the third scenario.",
      meta: "Developing",
      locked: true,
    },
  ];

  const theoryCache = new Map();
  let currentTheoryId = null;
  let loadSeq = 0;

  const readView = document.getElementById("view-theory-read");
  const checkView = document.getElementById("view-theory-check");
  const cardsHost = document.getElementById("theory-cards");
  const scenarioHost = document.getElementById("scenario-cards");
  const readTitle = document.getElementById("theory-read-title");
  const readBody = document.getElementById("theory-read-body");
  const readToCheck = document.getElementById("theory-read-to-check");
  const checkTitle = document.getElementById("theory-check-title");
  const checkForm = document.getElementById("theory-check-form");
  const checkQuestions = document.getElementById("theory-check-questions");
  const checkSubmit = document.getElementById("theory-check-submit");
  const checkFail = document.getElementById("theory-check-fail");
  const checkReread = document.getElementById("theory-check-reread");

  const defaultProgress = () => ({ completedTheory: {} });

  const loadProgress = () => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return defaultProgress();
      const parsed = JSON.parse(raw);
      if (!parsed || typeof parsed !== "object") return defaultProgress();
      if (!parsed.completedTheory || typeof parsed.completedTheory !== "object") {
        parsed.completedTheory = {};
      }
      return parsed;
    } catch {
      return defaultProgress();
    }
  };

  const saveProgress = (progress) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  };

  const catalogEntry = (id) => THEORY_CATALOG.find((item) => item.id === id);

  const cardState = (entry, progress) => {
    if (entry.locked) return "locked";
    if (
      entry.requiresTheory &&
      !progress.completedTheory[String(entry.requiresTheory)]
    ) {
      return "locked";
    }
    if (progress.completedTheory[String(entry.id)]) return "completed";
    return "available";
  };

  const scenarioCardState = (entry, progress) => {
    if (entry.locked) return "locked";
    if (
      entry.requiresTheory &&
      !progress.completedTheory[String(entry.requiresTheory)]
    ) {
      return "locked";
    }
    if (
      progress.completedScenario &&
      progress.completedScenario[String(entry.id)]
    ) {
      return "completed";
    }
    return "available";
  };

  const isAccessible = (id) => {
    const entry = catalogEntry(id);
    if (!entry) return false;
    const state = cardState(entry, loadProgress());
    return state === "available" || state === "completed";
  };

  const escapeHtml = (text) =>
    String(text)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");

  const renderInline = (text) => {
    let html = escapeHtml(text);
    html = html.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
    html = html.replace(/\*(.+?)\*/g, "<em>$1</em>");
    html = html.replace(/_(.+?)_/g, "<em>$1</em>");
    return html;
  };

  const markdownToHtml = (markdown) => {
    const cleaned = String(markdown)
      .replace(/\r\n/g, "\n")
      .replace(/^\*\*Correct answer:.*$/gim, "");
    const lines = cleaned.split("\n");
    const out = [];
    let i = 0;

    while (i < lines.length) {
      const trimmed = lines[i].trim();

      if (!trimmed) {
        i += 1;
        continue;
      }

      if (trimmed === "---") {
        out.push("<hr>");
        i += 1;
        continue;
      }

      const heading = trimmed.match(/^(#{1,3})\s+(.*)$/);
      if (heading) {
        const level = heading[1].length;
        out.push(`<h${level}>${renderInline(heading[2])}</h${level}>`);
        i += 1;
        continue;
      }

      if (trimmed.startsWith(">")) {
        const quote = [];
        while (i < lines.length && lines[i].trim().startsWith(">")) {
          quote.push(lines[i].trim().replace(/^>\s?/, ""));
          i += 1;
        }
        const inner = quote
          .map((line) => (line ? `<p>${renderInline(line)}</p>` : "<br>"))
          .join("");
        out.push(`<blockquote>${inner}</blockquote>`);
        continue;
      }

      if (/^\d+\.\s/.test(trimmed)) {
        const items = [];
        while (i < lines.length && /^\d+\.\s/.test(lines[i].trim())) {
          items.push(
            `<li>${renderInline(lines[i].trim().replace(/^\d+\.\s+/, ""))}</li>`
          );
          i += 1;
        }
        out.push(`<ol>${items.join("")}</ol>`);
        continue;
      }

      if (/^[-*]\s/.test(trimmed) && !/^[-*]{3,}$/.test(trimmed)) {
        const items = [];
        while (i < lines.length && /^[-*]\s/.test(lines[i].trim())) {
          items.push(
            `<li>${renderInline(lines[i].trim().replace(/^[-*]\s+/, ""))}</li>`
          );
          i += 1;
        }
        out.push(`<ul>${items.join("")}</ul>`);
        continue;
      }

      const para = [];
      while (
        i < lines.length &&
        lines[i].trim() &&
        lines[i].trim() !== "---" &&
        !/^#{1,3}\s/.test(lines[i].trim()) &&
        !lines[i].trim().startsWith(">") &&
        !/^\d+\.\s/.test(lines[i].trim())
      ) {
        para.push(lines[i].trim());
        i += 1;
      }
      out.push(`<p>${renderInline(para.join(" "))}</p>`);
    }

    return out.join("");
  };

  const parseQuestions = (checkPart) => {
    const blocks = String(checkPart).split(/^###\s+/m).slice(1);
    return blocks
      .map((block) => {
        const headingMatch = block.match(/^Question\s+(\d+)/i);
        const number = headingMatch ? Number(headingMatch[1]) : 0;
        const correctMatch = block.match(/\*\*Correct answer:\s*([A-D])\*\*/i);
        const correct = correctMatch ? correctMatch[1].toUpperCase() : "";
        const withoutCorrect = block
          .replace(/\*\*Correct answer:[\s\S]*/i, "")
          .trim();
        const options = [];
        const optionRe = /^- ([A-D])\.\s+(.*)$/gm;
        let match = optionRe.exec(withoutCorrect);
        while (match) {
          options.push({ letter: match[1], text: match[2].trim() });
          match = optionRe.exec(withoutCorrect);
        }
        const firstOption = withoutCorrect.search(/^- [A-D]\.\s+/m);
        const stemRaw =
          firstOption >= 0
            ? withoutCorrect.slice(0, firstOption).trim()
            : withoutCorrect;
        const stemMarkdown = stemRaw.replace(/^Question\s+\d+\s*/i, "").trim();
        return { number, stemMarkdown, options, correct };
      })
      .filter((question) => question.options.length && question.correct);
  };

  const parseTheoryMarkdown = (markdown) => {
    const text = String(markdown).replace(/\r\n/g, "\n");
    const checkSplit = text.split(/^# COMPREHENSION CHECK.*$/m);
    const beforeCheck = checkSplit[0] || "";
    const checkPart = checkSplit[1] || "";

    const titleMatch = beforeCheck.match(/^#\s+(.+)$/m);
    const rawTitle = titleMatch ? titleMatch[1].trim() : "";
    const titleParts = rawTitle.split(/\s+[—–-]\s+/);
    const title =
      titleParts.length > 1 ? titleParts.slice(1).join(" — ") : rawTitle;

    const sections = beforeCheck.split(/^---\s*$/m).map((part) => part.trim());
    const bodyMarkdown = sections.slice(1).filter(Boolean).join("\n\n");

    return {
      title: title || rawTitle,
      bodyMarkdown,
      questions: parseQuestions(checkPart),
    };
  };

  const loadTheory = async (id) => {
    if (theoryCache.has(id)) return theoryCache.get(id);
    const entry = catalogEntry(id);
    if (!entry) return null;

    let markdown = null;
    if (entry.markdownPath) {
      try {
        const response = await fetch(entry.markdownPath);
        if (response.ok) {
          const text = await response.text();
          if (text.trim().startsWith("#")) markdown = text;
        }
      } catch {
        markdown = null;
      }
    }

    if (!markdown && entry.fallbackMarkdown) {
      markdown = entry.fallbackMarkdown;
    }

    if (!markdown) return null;

    const parsed = parseTheoryMarkdown(markdown);
    theoryCache.set(id, parsed);
    return parsed;
  };

  const closeTheoryPages = () => {
    document.body.classList.remove("is-theory-page");
    if (readView) readView.hidden = true;
    if (checkView) checkView.hidden = true;
  };

  const goHome = () => {
    closeTheoryPages();
    if (location.hash) {
      history.pushState(
        "",
        document.title,
        `${location.pathname}${location.search}`
      );
    }
    activate("theory");
  };

  const showReadView = () => {
    document.body.classList.add("is-theory-page");
    if (readView) readView.hidden = false;
    if (checkView) checkView.hidden = true;
    window.scrollTo(0, 0);
    if (readView) readView.scrollTop = 0;
  };

  const showCheckView = () => {
    document.body.classList.add("is-theory-page");
    if (readView) readView.hidden = true;
    if (checkView) checkView.hidden = false;
    window.scrollTo(0, 0);
    if (checkView) checkView.scrollTop = 0;
  };

  const renderTheoryCards = (options = {}) => {
    if (!cardsHost) return;
    const progress = loadProgress();
    cardsHost.innerHTML = THEORY_CATALOG.map((entry) => {
      const state = cardState(entry, progress);
      const unlocking = options.unlockId === entry.id;
      const locked = state === "locked";
      const completed = state === "completed";
      const cardClass = [
        "widget",
        "card",
        locked ? "card--locked" : "widget--interactive",
        unlocking ? "card--unlocking" : "",
      ]
        .filter(Boolean)
        .join(" ");
      const pillClass = completed
        ? "pill pill--done"
        : locked
          ? "pill pill--locked"
          : "pill pill--open";
      const pillLabel = completed
        ? "Completed"
        : locked
          ? "Locked"
          : "Available";
      const buttonLabel = locked
        ? "Locked"
        : completed
          ? "Read again"
          : "Read";
      const readAttr = locked ? "" : ` data-theory-read="${entry.id}"`;
      const disabled = locked ? " disabled" : "";
      return `<article class="${cardClass}">
              <div class="card__head">
                <h3 class="card__title">${escapeHtml(entry.cardTitle)}</h3>
                <span class="${pillClass}">${pillLabel}</span>
              </div>
              <p class="card__desc">${escapeHtml(entry.description)}</p>
              <div class="card__foot">
                <span class="card__meta">${escapeHtml(entry.unlocksLabel)}</span>
                <button class="btn btn--secondary" type="button"${readAttr}${disabled}>${buttonLabel}</button>
              </div>
            </article>`;
    }).join("");
  };

  const renderScenarioCards = (options = {}) => {
    if (!scenarioHost) return;
    const progress = loadProgress();
    scenarioHost.innerHTML = SCENARIO_CATALOG.map((entry) => {
      const state = scenarioCardState(entry, progress);
      const unlocking = options.unlockId === entry.id;
      const locked = state === "locked";
      const completed = state === "completed";
      const cardClass = [
        "widget",
        "card",
        locked ? "card--locked" : "widget--interactive",
        unlocking ? "card--unlocking" : "",
      ]
        .filter(Boolean)
        .join(" ");
      const pillClass = completed
        ? "pill pill--done"
        : locked
          ? "pill pill--locked"
          : "pill pill--open";
      const pillLabel = completed
        ? "Completed"
        : locked
          ? "Locked"
          : "Available";
      const buttonLabel = locked
        ? "Locked"
        : completed
          ? "Replay"
          : "Enter scenario";
      const disabled = locked ? " disabled" : "";
      return `<article class="${cardClass}">
              <div class="card__head">
                <h3 class="card__title">${escapeHtml(entry.cardTitle)}</h3>
                <span class="${pillClass}">${pillLabel}</span>
              </div>
              <p class="card__desc">${escapeHtml(entry.description)}</p>
              <div class="card__foot">
                <span class="card__meta">${escapeHtml(entry.meta)}</span>
                <button class="btn btn--primary" type="button"${disabled}>${buttonLabel}</button>
              </div>
            </article>`;
    }).join("");
  };

  const theorySection = sections.find((s) => s.dataset.section === "theory");
  if (theorySection && cardsHost) {
    const observer = new MutationObserver(() => {
      if (
        theorySection.dataset.revealed === "true" &&
        !cardsHost.dataset.skipEnter
      ) {
        window.setTimeout(() => {
          cardsHost.dataset.skipEnter = "true";
        }, 500);
      }
    });
    observer.observe(theorySection, {
      attributes: true,
      attributeFilter: ["data-revealed"],
    });
  }

  const parseHash = () => {
    const hash = location.hash.replace(/^#/, "");
    const parts = hash.split("/").filter(Boolean);
    if (parts[0] !== "theory") return null;
    const id = Number(parts[1]);
    if (!Number.isFinite(id) || id < 1) return null;
    return { id, isCheck: parts[2] === "check" };
  };

  const openReading = async (id) => {
    const seq = (loadSeq += 1);
    currentTheoryId = id;
    showReadView();
    if (readTitle) readTitle.textContent = "";
    if (readBody) {
      readBody.innerHTML = '<p class="theory-body__status">Loading…</p>';
    }
    if (readToCheck) readToCheck.hidden = true;

    const data = await loadTheory(id);
    if (seq !== loadSeq) return;

    if (!data || !data.bodyMarkdown) {
      if (readTitle) readTitle.textContent = "";
      if (readBody) {
        readBody.innerHTML =
          '<p class="theory-body__status">This piece could not be loaded.</p>';
      }
      return;
    }

    if (readTitle) readTitle.textContent = data.title;
    if (readBody) readBody.innerHTML = markdownToHtml(data.bodyMarkdown);
    if (readToCheck) readToCheck.hidden = data.questions.length === 0;
  };

  const renderCheck = (data) => {
    if (!checkQuestions || !data) return;
    checkQuestions.innerHTML = data.questions
      .map((question) => {
        const stem = markdownToHtml(question.stemMarkdown);
        const options = question.options
          .map(
            (option) => `<label class="widget widget--interactive check-option">
                <input type="radio" name="q-${question.number}" value="${escapeHtml(option.letter)}">
                <span><strong>${escapeHtml(option.letter)}.</strong> ${escapeHtml(option.text)}</span>
              </label>`
          )
          .join("");
        return `<fieldset class="check-q">
            <legend class="check-q__legend">Question ${question.number}</legend>
            <div class="check-q__stem theory-body">${stem}</div>
            <div class="check-options">${options}</div>
          </fieldset>`;
      })
      .join("");
  };

  const resetCheckUi = () => {
    if (checkFail) checkFail.hidden = true;
    if (checkReread) checkReread.hidden = true;
    if (checkSubmit) checkSubmit.disabled = true;
  };

  const openCheck = async (id) => {
    const seq = (loadSeq += 1);
    currentTheoryId = id;
    showCheckView();
    resetCheckUi();
    if (checkTitle) checkTitle.textContent = "Comprehension check";
    if (checkQuestions) {
      checkQuestions.innerHTML =
        '<p class="theory-body__status">Loading…</p>';
    }

    const data = await loadTheory(id);
    if (seq !== loadSeq) return;

    if (!data || !data.questions.length) {
      if (checkQuestions) {
        checkQuestions.innerHTML =
          '<p class="theory-body__status">This piece could not be loaded.</p>';
      }
      return;
    }

    if (checkTitle) {
      checkTitle.textContent = data.title || "Comprehension check";
    }
    renderCheck(data);
    resetCheckUi();
  };

  const applyHash = () => {
    const route = parseHash();
    if (!route) {
      closeTheoryPages();
      return;
    }
    if (!isAccessible(route.id)) {
      goHome();
      return;
    }
    if (route.isCheck) {
      openCheck(route.id);
    } else {
      openReading(route.id);
    }
  };

  const completeTheory = (id) => {
    const progress = loadProgress();
    const wasNew = !progress.completedTheory[String(id)];
    progress.completedTheory[String(id)] = true;
    saveProgress(progress);
    const entry = catalogEntry(id);
    const unlockId =
      wasNew && entry && entry.unlocksTheory ? entry.unlocksTheory : null;
    const unlockScenarioId =
      wasNew && entry && entry.unlocksScenario ? entry.unlocksScenario : null;
    goHome();
    renderTheoryCards({ unlockId });
    renderScenarioCards({ unlockId: unlockScenarioId });
  };

  if (cardsHost) {
    cardsHost.addEventListener("click", (event) => {
      const button = event.target.closest("[data-theory-read]");
      if (!button || button.disabled) return;
      const id = Number(button.dataset.theoryRead);
      if (!Number.isFinite(id)) return;
      location.hash = `#theory/${id}`;
    });
  }

  document.querySelectorAll("[data-theory-home]").forEach((button) => {
    button.addEventListener("click", () => goHome());
  });

  if (readToCheck) {
    readToCheck.addEventListener("click", () => {
      if (!currentTheoryId) return;
      location.hash = `#theory/${currentTheoryId}/check`;
    });
  }

  if (checkReread) {
    checkReread.addEventListener("click", () => {
      if (!currentTheoryId) return;
      location.hash = `#theory/${currentTheoryId}`;
    });
  }

  if (checkForm) {
    checkForm.addEventListener("change", () => {
      const data = theoryCache.get(currentTheoryId);
      if (!data || !checkSubmit) return;
      const complete = data.questions.every((question) =>
        checkForm.querySelector(`[name="q-${question.number}"]:checked`)
      );
      checkSubmit.disabled = !complete;
      checkForm.querySelectorAll(".check-option").forEach((label) => {
        const input = label.querySelector("input");
        label.classList.toggle("is-selected", Boolean(input && input.checked));
      });
    });

    checkForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = theoryCache.get(currentTheoryId);
      if (!data) return;
      let correctCount = 0;
      data.questions.forEach((question) => {
        const selected = checkForm.querySelector(
          `[name="q-${question.number}"]:checked`
        );
        if (selected && selected.value === question.correct) {
          correctCount += 1;
        }
      });
      if (correctCount >= PASS_MARK) {
        completeTheory(currentTheoryId);
        return;
      }
      if (checkFail) checkFail.hidden = false;
      if (checkReread) checkReread.hidden = false;
    });
  }

  const resetButton = document.getElementById("reset-progress");
  if (resetButton) {
    resetButton.addEventListener("click", () => {
      localStorage.removeItem(STORAGE_KEY);
      theoryCache.clear();
      renderTheoryCards();
      renderScenarioCards();
    });
  }

  window.addEventListener("hashchange", applyHash);

  renderTheoryCards();
  renderScenarioCards();
  applyHash();
})();
