# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

**Spendly** — a personal finance tracker web app. Users log expenses, view category breakdowns, and filter by time period.

Stack:
- **Frontend**: React 19 + Vite + Tailwind CSS v4 (landing page lives in `frontend/`)
- **Backend**: Spring Boot (Java) — not yet scaffolded in this repo
- **Database**: MongoDB (local via Compass, cloud via Atlas)
- **E2E tests**: Playwright (`e2e/`)
- **Hosting**: Vercel (frontend), Railway (backend)

## Commands

All commands run from `frontend/`:

```bash
npm run dev       # start dev server (http://localhost:5173)
npm run build     # production build to dist/
npm run preview   # serve the dist/ build locally
npm run lint      # ESLint check
```

E2E tests (from `e2e/`):
```bash
npx playwright test              # run all tests
npx playwright test <file>       # run a single spec
npx playwright test --ui         # open Playwright UI
```

## Frontend architecture

`frontend/src/` is a single-page landing (no router yet). Layout composed in `App.jsx`:

```
Navbar → Hero → Features → CTA → Footer
```

**Component notes:**
- `Logo.jsx` — accepts a `light` boolean prop; renders amber/white variant for the dark footer
- `SpendingCard.jsx` — purely decorative mock data (hardcoded categories + amounts); not wired to any API
- `Hero.jsx` — uses Playfair Display italic inline via `style={}` (Tailwind can't target this font variant directly)

**Styling conventions:**
- Tailwind v4 is configured via `@tailwindcss/vite` plugin — no `tailwind.config.js`
- Global CSS is in `src/index.css`; imports Tailwind and Google Fonts (Inter + Playfair Display)
- Brand palette: bg `#f0f0ea` (warm cream), dark `#111`, accent green `#2a4f10`, secondary bg `#e8e5dc`
- Never hardcode one-off hex values outside these four; add to the palette if a new one is needed

## Custom slash commands

`.claude/commands/create-spec.md` — `/create-spec <step> <feature>` creates a feature branch and a structured spec file in `.claude/specs/`. Read that file before using the command.
