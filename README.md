# Portfolio Website

## Introduction

This is a personal developer portfolio website showcasing my work, projects, skills, and experience as a software engineer.

## Technologies Used

- **React 19**
- **TypeScript**
- **Vite**
- **Tailwind CSS v4**
- **shadcn/ui** (Base UI primitives + Lucide icons)
- **FontAwesome** (Brand icons)
- **Vitest** & **React Testing Library**

## Features

- Responsive mobile-first design with smooth navigation drawer
- Dynamic GitHub pinned repository fetching via native `fetch`
- Interactive skills visualization with scroll-triggered animations
- Canvas and CSS star animation with animated gradient hero background
- Modular section architecture

## Getting Started

### Prerequisites

Ensure you have **Node.js** (v18+) and **NPM** installed.

### Installing & Running Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/AnmolVerma404/Personal-Portfolio-Website.git
   cd Personal-Portfolio-Website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```
   Open `http://localhost:3000/Personal-Portfolio-Website/` in your browser.

4. Run tests or build:
   ```bash
   npm test
   npm run build
   ```

## Customization

### Section Content
All section content is inlined directly in the corresponding component for direct control and maintainability:
- **Hero**: `src/components/sections/Hero.tsx`
- **About**: `src/components/sections/About.tsx`
- **Experience**: `src/components/sections/Experience.tsx`
- **Projects**: `src/components/sections/projects/Projects.tsx`
- **Skills**: `src/components/sections/Skills.tsx`
- **Personal Talents**: `src/components/sections/talents/talents.json` (data catalog) and `src/components/sections/talents/Talents.tsx`
- **Footer**: `src/components/layout/Footer.tsx`

### Adding New Voices & Talents
All categories, titles/franchises, and character impressions are managed in `src/components/sections/talents/talents.json` so you never need to edit JSX code to add new voices:
1. Place character images in `public/talents/images/` and audio clips in `public/talents/audio/`.
2. Add a new character entry under the corresponding source's `items` array in `src/components/sections/talents/talents.json`:
   ```json
   {
     "id": "peter-griffin",
     "name": "Peter Griffin",
     "image": "talents/images/Peter_Griffin.png",
     "realAudio": "talents/audio/family-guy/peter-griffin-real.mp3",
     "myAudio": "talents/audio/family-guy/peter-griffin-mine.mp3"
   }
   ```
3. The Talents section is code-split (`React.lazy`), viewport lazy-rendered (`IntersectionObserver`), and loads audio on-demand (`preload="none"`) when a button is clicked.

### Resume Link
The Resume components (`ResumeNavLink` in Navbar and `ResumeButton` in About) are configured in `src/components/resume/resume.ts`.
By default, `RESUME_URL` is unset (`undefined`), keeping the resume private and preventing resume links/buttons from rendering. To enable public resume links, set `RESUME_URL` to a valid document URL or path.

## Knowledge Graph (`graphify`)

This repository includes a persistent [Graphify](https://github.com/safishamsi/graphify) knowledge graph in `graphify-out/` (~10.2x fewer tokens per architectural query for AI coding agents).

### Tracked vs. Ignored Outputs
- **Tracked in Git:** `graphify-out/graph.json`, `graphify-out/GRAPH_REPORT.md`, and `graphify-out/.graphify_labels.json` so AI agents and collaborators have immediate graph context without rebuilding.
- **Ignored Locally:** `graphify-out/cache/`, `manifest.json`, `cost.json`, `graph.html`, and `.graphify_*` machine-specific paths.

### How & When to Keep Graphify Up to Date
To avoid wasting AI context tokens, **do not update the graph after every small edit or chat turn**. Instead, use one of these workflows (also codified in `.agents/skills/graphify-sync/SKILL.md`):

1. **End of a Feature / Coding Session (Recommended Default):**
   Run once when your code changes are complete and ready to commit:
   ```bash
   graphify update .
   ```
   *Uses local Tree-sitter AST parsing only — completes in ~2s and costs **0 LLM tokens**.*

2. **Automatic Git Post-Commit Hook (Zero Agent Overhead):**
   Install the local git hook once so code changes automatically update `graph.json` and `GRAPH_REPORT.md` on every `git commit` outside of AI chat:
   ```bash
   graphify hook install
   ```

3. **After Major Documentation or Image Changes:**
   When `.md` docs, skills, or brand images are added/updated and you want semantic edges refreshed, run `/graphify . --update` in your AI agent session (only changed non-code files are re-extracted).

4. **View Interactive HTML Graph Locally:**
   ```bash
   graphify export html
   ```
   Then open `graphify-out/graph.html` in your browser.

