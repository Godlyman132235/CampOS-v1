# CampOS — MCP Setup

MCP stands for Model Context Protocol. It is the open standard that
lets AI tools like Cursor and Claude Code connect to external services
and data sources. Each MCP server gives the agent a specific set of
tools it can call during a session.

---

## The 40-Tool Ceiling (Read This First)

Cursor has a soft ceiling of approximately 40 active tools across all
installed MCP servers combined. If you exceed this number, Cursor issues
a warning and some tools become silently inaccessible. Claude Code has
a higher ceiling but the same principle applies: more tools means more
noise in tool selection and worse agent decisions.

The rule: install only what a specific workflow requires.
Never install an MCP because it sounds useful in general.
A short, coherent list of tools works better than a long one.

---

## Currently Installed

### Context7

What it does:
When Cursor or Claude Code needs to know how a browser API, CSS
feature, or JavaScript method works, Context7 intercepts that request
and fetches current documentation from live sources. This prevents
agents from hallucinating API signatures or using outdated methods
from their training data.

Why CampOS needs it:
The prototype uses browser APIs including localStorage, canvas for the
firefly cursor effect, and DOM manipulation. These are common places
where agents make mistakes by relying on outdated training data.
Context7 nearly eliminates this class of bug.

How to verify it is working:
In Cursor, type: "Use Context7 to look up the current MDN
documentation for the localStorage API."
If it returns live documentation, Context7 is working.

Cost: Free tier is more than sufficient for a solo prototype project.

---

### Playwright

What it does:
Lets Cursor and Claude Code open a real browser, navigate to pages,
click elements, take screenshots, and verify what actually renders.
It closes the feedback loop between "the agent says it built this"
and "this actually works in the browser."

Why CampOS needs it:
You are a non-programmer building a visual product. When Cursor makes
a UI change, you should not have to manually verify every result
yourself. Playwright lets the agent check its own work by loading
the browser and producing a screenshot of the result.

This is the single highest-leverage MCP for your situation.

How to verify it is working:
In Cursor, type: "Use Playwright to open google.com and take a
screenshot." If a screenshot is returned, Playwright is working.

Cost: Free and open source.

---

## Deferred — Install When Needed

### GitHub MCP

What it does:
Lets Claude Code push commits, create branches, and manage the
repository without you needing to use any Git commands manually.

Why CampOS needs it:
Version control lets you roll back to a working state when an agent
breaks something. GitHub Pages provides free hosting for the prototype
when it is ready to distribute. Both require Git working.

When to install:
After Build Stage A. There is no reason to install a Git tool
before code exists to version-control.

---

## Explicitly Rejected — Do Not Install These

### Filesystem MCP
Rejected: Claude Code already has built-in file tools (read, edit,
write, search). This MCP duplicates those tools and wastes tool slots.

### Memory MCP
Rejected: SESSION_LOG.md and DECISIONS_LOG.md serve the same purpose
with less complexity and zero configuration.

### Sequential Thinking MCP
Rejected: Claude models reason step-by-step natively. This MCP adds
tools without improving output quality.

### All Database MCPs (Postgres, Supabase, SQLite, etc.)
Rejected: V1’s backend is minimal and expanding; database MCPs are still premature.

### Figma MCP
Rejected: Design work is done in Claude Design, not Figma.

---

## How to Check What Is Installed

In Cursor, open settings and navigate to MCP configuration.
Active servers are listed there. You can also open the file at
.cursor/mcp.json in the project root to see the raw configuration.

If a server is listed in mcp.json but not responding, quit Cursor
completely, reopen it, and try again.