# Implementation Plan: Landing Page

Spec: `.claude/specs/01-landing-page.md`
Reference: `spendly-landing-page.jpeg`

---

## Visual Analysis (from reference screenshot)

### Layout — 5 distinct sections top-to-bottom

| # | Section | Background |
|---|---------|------------|
| 1 | Navbar | white / `#fff` |
| 2 | Hero | warm off-white `#f8f6f4` |
| 3 | Features | warm beige `#ede8e2` |
| 4 | CTA | warm beige `#ede8e2` (continues) |
| 5 | Footer | near-black `#111111` |

### Typography observed

- **Hero headline line 1** ("Know where your") — large, black, bold, serif/display weight
- **Hero headline line 2** ("money goes") — same size, dark green, italic, slightly script-like serif
- **Badge** ("PERSONAL FINANCE TRACKER") — uppercase, small, green text, light-green pill background
- **Body copy / card labels** — regular sans-serif
- **Nav brand** ("Spendly") — medium weight sans-serif

### Colour palette

| Token | Value | Usage |
|---|---|---|
| `--brand-green` | `#2ca85a` | Badges, buttons, Bills bar |
| `--hero-headline-green` | `#1e7a40` | "money goes" italic line |
| `--page-bg` | `#f8f6f4` | Hero section bg |
| `--section-beige` | `#ede8e2` | Features + CTA bg |
| `--footer-bg` | `#111111` | Footer bg |
| `--card-bg` | `#ffffff` | Expense card, feature cards |
| `--bar-bills` | `#2ca85a` | Green progress bar |
| `--bar-food` | `#d97706` | Amber progress bar |
| `--bar-health` | `#6366f1` | Indigo progress bar |
| `--bar-transport` | `#7c3aed` | Purple progress bar |
| `--destructive` | `#d4183d` | Error states (global) |
| `--border` | `rgba(0,0,0,0.1)` | Card borders |

### Dark mode palette (to derive)

| Token | Dark value |
|---|---|
| `--page-bg` | `#111827` |
| `--section-beige` | `#1f2937` |
| `--card-bg` | `#1e293b` |
| `--footer-bg` | `#000000` |
| Headline text | `#f9fafb` |
| Body text | `#9ca3af` |

---

## File Structure to Create

The frontend `src/` directory does not exist yet. All files below must be created from scratch.

```
frontend/src/
├── main.tsx                          ← React entry point
├── app/
│   ├── App.tsx                       ← BrowserRouter + all routes
│   └── components/
│       ├── ui/                       ← shadcn/ui primitives (generated, not hand-edited)
│       └── figma/
│           └── ImageWithFallback.tsx ← (stub if needed)
├── pages/
│   └── LandingPage.tsx               ← page container (assembles all sections)
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   └── landing/
│       ├── HeroSection.tsx
│       ├── ExpensePreviewCard.tsx
│       ├── FeaturesSection.tsx
│       └── CtaSection.tsx
├── hooks/
│   └── useTheme.ts                   ← dark/light mode toggle logic
└── styles/
    ├── index.css                     ← entry: @import fonts, tailwind, theme
    ├── theme.css                     ← CSS custom properties (light + dark)
    ├── tailwind.css                  ← @tailwind directives
    ├── fonts.css                     ← @font-face / Google Fonts import
    └── globals.css                   ← base resets and body defaults
```

Config files also required (if not yet present):
- `frontend/vite.config.ts` — Vite config with React plugin + `/api` proxy to `localhost:8080`
- `frontend/tsconfig.json` + `frontend/tsconfig.node.json`
- `frontend/tailwind.config.ts` — Tailwind v4 config
- `frontend/index.html` — Vite HTML entry

---

## Component Specifications

### 1. `Navbar.tsx`

**Position:** `fixed top-0 left-0 right-0 z-50`
**Height:** ~56px
**Background:** white (light) / dark card bg (dark)
**Shadow:** subtle bottom border or `shadow-sm`

**Left side:**
- Diamond/rhombus SVG icon (brand mark) in dark colour (~14×14px)
- "Spendly" wordmark, medium weight

**Right side:**
- "Sign in" — ghost text link → navigates to `/login`
- "Get started" — filled dark pill button (bg `#111`, white text, rounded-full) → navigates to `/register`
- Theme toggle icon button (sun/moon SVG) — toggles dark mode

**Behaviour:** transparent on scroll position 0, solid bg after scrolling past hero (optional stretch goal — can be always solid for MVP)

---

### 2. `HeroSection.tsx`

**Layout:** `max-w-5xl mx-auto`, two-column grid (`grid-cols-2`) on desktop, stacked on mobile
**Padding:** generous vertical padding (py-20 or py-24)
**Background:** inherits page bg (`--page-bg`)

**Left column content (top-to-bottom):**

1. **Badge pill**
   - Text: `PERSONAL FINANCE TRACKER`
   - Style: small, uppercase, letter-spacing, `text-[#2ca85a]`, bg `rgba(44,168,90,0.1)`, rounded-full, px-3 py-1

2. **Headline block**
   - Line 1: `Know where your` — ~4xl/5xl, black (`#111`), bold, serif font (e.g., Georgia, or a Google Font like Playfair Display)
   - Line 2: `money goes` — same size, dark green (`#1e7a40`), italic, same or slightly script serif

3. **Body paragraph**
   - Text: `Log expenses, understand your spending patterns, and take control of your financial life — one transaction at a time.`
   - Style: `text-base text-gray-600`, max-width ~380px

4. **CTA row (flex gap-3)**
   - Primary: "Start tracking free" — dark filled button (`bg-[#111]` white text) → `/register`
   - Secondary: "Sign in" — outlined ghost button (border, transparent bg) → `/login`

**Right column content:**

`ExpensePreviewCard` component (see below)

---

### 3. `ExpensePreviewCard.tsx`

A static, non-interactive mock of an expense summary — purely decorative/illustrative.

**Container:** white bg, rounded-2xl, shadow-md, p-6, max-w-[340px]

**Header row:**
- Left: `MARCH 2026` — small, uppercase, muted text
- Right: `₹12,450` — large (~2xl), bold, dark

**Expense rows (4 items, spaced with gap-3):**

Each row:
- Label (left-aligned, text-sm): Bills / Food / Health / Transport
- Progress bar (flex-1, h-1.5, rounded-full, bg gray-100 track):
  - Bills: fill width ~65%, color `#2ca85a`
  - Food: fill width ~45%, color `#d97706`
  - Health: fill width ~30%, color `#6366f1`
  - Transport: fill width ~25%, color `#7c3aed`
- Amount (right-aligned, text-sm): ₹4,500 / ₹3,200 / ₹2,050 / ₹1,800

---

### 4. `FeaturesSection.tsx`

**Background:** `--section-beige` (`#ede8e2`)
**Padding:** py-20
**Layout:** 3-column grid (`grid-cols-3` desktop, `grid-cols-1` mobile), `max-w-5xl mx-auto`

**3 Feature Cards** — each card:
- Background: white, rounded-2xl, p-6, shadow-sm
- Icon (top): small SVG icon (~20px), muted color

| Card | Icon | Title | Body |
|------|------|-------|------|
| 1 | ₹ (Rupee glyph or IndianRupee lucide icon) | Log expenses instantly | Add any expense in seconds. Category, amount, date, description — all in one simple form. |
| 2 | Clock / BarChart (lucide `ChartPie`) | Understand your patterns | See exactly where your money goes with category breakdowns and monthly summaries. |
| 3 | Timer / Calendar (lucide `CalendarClock`) | Filter by time period | View your spending for any date range — last week, last month, or a custom period. |

---

### 5. `CtaSection.tsx`

**Background:** `--section-beige` (same as features, continuous)
**Padding:** pb-24
**Layout:** centered, `max-w-xl mx-auto text-center`

**Content:**
- H2: `Ready to take control?` — large bold, dark
- Subtext: `Join thousands of people who track their expenses with Spendly.` — muted, text-base
- Button: `Create free account` — dark filled pill button → `/register`

---

### 6. `Footer.tsx`

**Background:** `#111111`
**Padding:** py-12
**Layout:** centered column (`flex flex-col items-center gap-2`)

**Content:**
- Diamond SVG icon in brand amber/orange (~24px) — same brand mark as navbar but recolored
- "Spendly" wordmark — white, medium weight
- Tagline: `Track every rupee. Own your finances.` — small, muted gray text

---

## Routing (`App.tsx`)

```
/              → LandingPage   (public)
/login         → LoginPage     (public, stub for now)
/register      → RegisterPage  (public, stub for now)
/dashboard     → DashboardPage (private, stub for now)
```

`App.tsx` wraps everything in `<BrowserRouter>`. For this spec only `LandingPage` needs full implementation; other pages can be placeholder components.

---

## Dark / Light Mode

### Strategy
- Use a `<html data-theme="light|dark">` attribute toggled by a hook.
- CSS custom properties in `theme.css` define two sets of values under `:root` (light) and `[data-theme="dark"]`.
- Tailwind `dark:` variants are **not** used — all theming goes through CSS vars so shadcn/ui components and custom styles share the same token system.

### `useTheme.ts` hook

```
- Reads localStorage key `spendly-theme` on init (fallback: system `prefers-color-scheme`)
- Applies `data-theme` attribute to `document.documentElement`
- Exposes `{ theme, toggleTheme }` 
- Persists preference to localStorage on every toggle
```

### Navbar integration
- Import `useTheme` in `Navbar.tsx`
- Render a sun icon when theme is dark, moon icon when light
- `onClick` calls `toggleTheme`

---

## CSS Architecture

### `theme.css` structure
```css
:root {
  --brand-green: #2ca85a;
  --page-bg: #f8f6f4;
  --section-beige: #ede8e2;
  --footer-bg: #111111;
  --card-bg: #ffffff;
  --text-primary: #111111;
  --text-muted: #6b7280;
  --border: rgba(0,0,0,0.1);
  /* bar colours */
  --bar-bills: #2ca85a;
  --bar-food: #d97706;
  --bar-health: #6366f1;
  --bar-transport: #7c3aed;
}

[data-theme="dark"] {
  --page-bg: #111827;
  --section-beige: #1f2937;
  --footer-bg: #000000;
  --card-bg: #1e293b;
  --text-primary: #f9fafb;
  --text-muted: #9ca3af;
  --border: rgba(255,255,255,0.08);
}
```

### `fonts.css`
- Import `Playfair Display` (serif, for headline) from Google Fonts
- Import `Inter` (sans-serif, for body/UI) from Google Fonts
- Apply via CSS: `body { font-family: 'Inter', sans-serif; }` and headline classes use `font-['Playfair_Display']`

---

## Implementation Steps (ordered)

| Step | Task | File(s) |
|------|------|---------|
| 1 | Scaffold Vite + config files | `vite.config.ts`, `index.html`, `tsconfig.json` |
| 2 | Create CSS foundation | `styles/fonts.css`, `styles/theme.css`, `styles/tailwind.css`, `styles/globals.css`, `styles/index.css` |
| 3 | Bootstrap entry point | `main.tsx`, `app/App.tsx` |
| 4 | Create `useTheme` hook | `hooks/useTheme.ts` |
| 5 | Build `Navbar` | `components/layout/Navbar.tsx` |
| 6 | Build `ExpensePreviewCard` | `components/landing/ExpensePreviewCard.tsx` |
| 7 | Build `HeroSection` | `components/landing/HeroSection.tsx` |
| 8 | Build `FeaturesSection` | `components/landing/FeaturesSection.tsx` |
| 9 | Build `CtaSection` | `components/landing/CtaSection.tsx` |
| 10 | Build `Footer` | `components/layout/Footer.tsx` |
| 11 | Assemble `LandingPage` | `pages/LandingPage.tsx` |
| 12 | Wire routes in `App.tsx` | `app/App.tsx` |
| 13 | Verify light mode vs reference screenshot | visual diff |
| 14 | Toggle dark mode, verify readability | visual check |

---

## Definition of Done Checklist

- [ ] Navbar renders correctly: logo left, Sign in + Get started right, theme toggle
- [ ] Hero: two-column layout, badge, two-line headline (serif black + green italic), body text, two CTA buttons
- [ ] `ExpensePreviewCard`: correct header, four rows with correct bar colours and amounts
- [ ] Features section: warm beige bg, three white cards with icons and correct copy
- [ ] CTA section: centred, correct copy, dark button
- [ ] Footer: dark bg, logo, wordmark, tagline
- [ ] Light mode visually matches `spendly-landing-page.jpeg` at 1280px viewport width
- [ ] Dark mode: all sections readable, no invisible text or broken contrast
- [ ] Theme toggle persists across page refresh (localStorage)
- [ ] All CTA buttons / links navigate to correct routes
- [ ] No TypeScript errors (`tsc --noEmit` passes)
- [ ] Responsive: collapses gracefully on mobile (hero stacks, features single-column)
