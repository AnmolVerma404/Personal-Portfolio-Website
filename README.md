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
- **Footer**: `src/components/layout/Footer.tsx`

### Resume Link
The Resume components (`ResumeNavLink` in Navbar and `ResumeButton` in About) are configured in `src/components/resume/resume.ts`.
By default, `RESUME_URL` is unset (`undefined`), keeping the resume private and preventing resume links/buttons from rendering. To enable public resume links, set `RESUME_URL` to a valid document URL or path.
