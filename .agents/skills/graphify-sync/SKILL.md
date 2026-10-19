---
name: graphify-sync
description: Guidelines and workflow for syncing and updating the project's Graphify knowledge graph (graphify-out/). Use when asked how or when to update graphify, sync graph.json, install git hooks for graphify, or refresh the knowledge graph after code or documentation changes.
---

# Graphify Sync & Maintenance Skill

This skill defines the recommended strategy for keeping `graphify-out/graph.json` and `graphify-out/GRAPH_REPORT.md` synchronized with the codebase without wasting LLM tokens.

## Core Principle: Two-Tier Extraction Cost

Graphify splits extraction into two distinct tiers:
1. **Structural AST Extraction (`graphify update .`) — ZERO Token Cost:**
   - Parses `.ts`, `.tsx`, `.js`, `.mjs`, and `.json` files deterministically via local Tree-sitter AST.
   - Does **not** call an LLM and consumes **0 tokens** (except minimal CLI output in agent context).
   - Fast (~1–2 seconds).
2. **Semantic Extraction (`/graphify . --update`) — Uses LLM Tokens:**
   - Dispatches subagents (or Gemini API) to read changed Markdown docs (`.md`), papers, and images.
   - Unchanged files are skipped via local SHA-256 caching, and code files are never sent to semantic subagents.

---

## Recommended Sync Strategy: When Should You Update?

**Do NOT update Graphify after every intermediate edit or chat message.** Running CLI commands after every small edit adds tool-call overhead and terminal output to the conversation context window.

Instead, follow this **3-Tier Sync Cadence**:

### 1. At the End of a Coding Task / Session (Recommended Default)
- **When:** After finishing a feature, bugfix, or refactor (once tests/builds pass, right before committing).
- **Command:**
  ```powershell
  graphify update .
  ```
- **Why:** Re-extracts modified code files via AST in ~2 seconds with **zero LLM token cost**, keeping `graph.json` accurate for the next task or PR without cluttering mid-session chat turns.

### 2. Automated via Git Post-Commit Hook (Best Zero-Token Option for Developers)
- **When:** Automatically on every `git commit` outside the AI chat.
- **Setup Command:**
  ```powershell
  graphify hook install
  ```
- **Why:** Runs entirely in your local terminal hook when you commit. It diffs `HEAD~1`, re-runs AST extraction on changed code files, and updates `graph.json` and `GRAPH_REPORT.md` with **zero AI agent context tokens** used at all.

### 3. After Major Documentation, Architecture, or Image Updates
- **When:** Only when you add or significantly edit `.md` docs, skills, or brand/UI images and want semantic relationships updated.
- **Command:** Invoke `/graphify . --update` in the agent chat.
- **Why:** Only changed non-code files are sent to semantic subagents, preserving all cached embeddings/nodes from earlier runs.

---

## Quick Commands Reference

| Goal | Command | Token Cost |
| :--- | :--- | :--- |
| Sync code changes at end of session | `graphify update .` | **0 LLM tokens** (AST only) |
| Auto-sync on every `git commit` | `graphify hook install` | **0 LLM tokens** (runs in git hook) |
| Sync new/edited `.md` docs or images | `/graphify . --update` | Low (only changed docs/images) |
| Regenerate interactive HTML viewer | `graphify export html` | **0 LLM tokens** |
| Re-cluster existing graph | `graphify cluster-only .` | **0 LLM tokens** |

## Tracked vs. Ignored Files in Git

- **Committed to Git:**
  - `graphify-out/graph.json` — Queryable graph used by agents (`graphify query`, `path`, `explain`) for ~10x token reduction.
  - `graphify-out/GRAPH_REPORT.md` — High-level architectural audit report, god nodes, and community summary.
  - `graphify-out/.graphify_labels.json` — Curated community names preserved across incremental updates.
- **Ignored in `.gitignore`:**
  - `graphify-out/cache/`, `manifest.json`, `cost.json`, `graph.html`, and `.graphify_*` machine-specific/temp files.

