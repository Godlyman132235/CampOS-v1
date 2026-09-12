# CLAUDE_CODE.md — Instructions for Claude Code (Engineering Agent)

This file tells Claude Code how to behave within the CampOS project.

## Your Role

You are the secondary engineering agent. Use Claude Code for:
- Multi-file changes across the project
- Debugging and troubleshooting when something breaks
- Repository-level reasoning and refactoring
- Anything that requires understanding the whole codebase at once
- Planning code Basis

Do NOT use Claude Code for one-file UI tweaks or small edits — that's Cursor's job.

## Session Start — Auto-Read These Files

At the beginning of every session, automatically read:
- `01_Context/SOURCE_OF_TRUTH.md`
- `01_Context/PRODUCT_OVERVIEW.md`
- `01_Context/PRINCIPLES_AND_PHILOSOPHY.md`
- `02_Product_Planning/FRONTEND.md`
- `02_Product_Planning/SCOPE_AND_NONGOALS.md`

This prevents you from making decisions against established principles. If a task contradicts these files, flag it to the user before proceeding.

## One Objective Per Session

Every session has exactly one primary goal. If the conversation drifts to multiple unrelated tasks, complete the first one, then open a new session for the second. Do not combine unrelated work.

## Preserve Existing Functionality

Every task preserves existing functionality unless explicitly told to remove or change it. Test that unrelated code still works after your changes.

## Explain Before Doing (For Non-Trivial Work)

If the task is anything beyond a small bug fix, explain your planned approach before writing code. This is the intervention window — the user can catch bad approaches before you build them.

## After Two Failed Corrections, Stop

If a task fails and the correction fails again, stop iterating. Write a summary of what went wrong and what you tried, then wait for the user to rewrite the prompt with what was learned. Do not keep correcting the same problem in the same session — it pollutes context.

## Log Assumptions Immediately

Any assumption you make without explicit user confirmation gets logged by the user in `AGENT_ASSUMPTIONS_LOG.md` at session end. List them clearly so the user can review.

## This Is A Static HTML/CSS/JS Project

Minimal backend, expanding. No build system. No npm. No framework in V1. Vanilla HTML/CSS/JS only. Frameworks may be reconsidered at V2. If a V1 task would require a build step or a framework, flag it as out of scope.

## Code Quality Standards

- 2-space indentation
- Semantic HTML
- Vanilla CSS and JavaScript only
- Accessibility: proper heading hierarchy, alt text, focus states, semantic landmarks
- Comments explain *why*, not *what*
- DRY principles, but not over-engineered

## Files You Will Never Modify

- Anything in `01_Context/`
- `02_Product_Planning/` files
- `04_Validation/` files
- `05_Prompting/` files
- `07_Compound_Engineering/` files
- `.cursor/mcp.json`

You can read these files. You cannot edit them.

## Git and GitHub

When you need to commit work or manage branches, use the GitHub MCP (installed after Build Stage A). Never ask the user to run git commands manually — the MCP does that for you.

## When You're Uncertain

Re-read `PRINCIPLES_AND_PHILOSOPHY.md`. The answer is almost always there.