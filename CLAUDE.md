# Scam Risk DNA

A gamified personality quiz that helps users discover their unique scam vulnerability archetype. Users answer 20 scenario-based questions to receive one of 16 personality archetypes across 4 elemental categories (Fire, Water, Earth, Air), along with personalized anti-scam safety tips.

## Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite 5
- **Router**: TanStack React Router v1
- **State**: Zustand (with localStorage persistence)
- **Styling**: Tailwind CSS v3 (`darkMode: 'class'`)
- **Animation**: Framer Motion 11
- **Fonts**: Cinzel Decorative (display), Inter (body), Orbitron (accent)

## Development

```bash
npm run dev        # Start dev server (port 5174)
npm run build      # TypeScript check + Vite build
npm run preview    # Preview production build
npm run lint       # ESLint
npm run typecheck  # TypeScript type-check only
```

## Project Structure

```
src/
├── pages/                    # Route pages
│   ├── LandingPage.tsx
│   ├── QuizPage.tsx
│   ├── ResultPage.tsx
│   ├── ArchetypesPage.tsx
│   ├── ArchetypeDetailPage.tsx
│   └── TipsPage.tsx
├── components/
│   ├── ui/                   # Shared UI primitives
│   │   ├── GlassCard.tsx     # Frosted glass card (theme-aware)
│   │   ├── ThemeToggle.tsx   # Dark/light mode toggle (fixed top-right)
│   │   ├── ElementBadge.tsx
│   │   ├── AnimatedTitle.tsx
│   │   ├── LoadingOracle.tsx
│   │   └── ConfettiBlast.tsx
│   ├── quiz/                 # Quiz flow components
│   │   ├── QuizCard.tsx
│   │   ├── ChoiceButton.tsx
│   │   ├── ProgressBar.tsx
│   │   └── SceneText.tsx
│   └── result/               # Result page components
│       ├── ResultCard.tsx    # Shareable card — always dark for export consistency
│       ├── ArchetypeInfo.tsx
│       ├── SafeTipsSection.tsx
│       ├── CompatibilityDisplay.tsx
│       └── ShareButton.tsx
├── store/
│   ├── quizStore.ts          # Quiz progress (persisted)
│   └── themeStore.ts         # Dark/light preference (persisted)
├── data/
│   ├── archetypes.json       # 16 archetype definitions
│   └── quiz.json             # 20 quiz questions
├── utils/
│   ├── elementColors.ts      # Element color tokens + dimension gradients
│   └── shareCard.ts          # dom-to-image card export
├── lib/
│   └── archetypeCalculator.ts # Scoring algorithm
├── types/index.ts
└── styles/index.css          # Tailwind directives + CSS custom properties
```

## Routing

Routes are defined in `src/router.ts` using TanStack React Router:

| Path | Component |
|------|-----------|
| `/` | LandingPage |
| `/quiz` | QuizPage |
| `/results/$slug` | ResultPage |
| `/archetypes` | ArchetypesPage |
| `/archetypes/$slug` | ArchetypeDetailPage |
| `/tips` | TipsPage |

## Theming System

The app supports **dark mode** (default) and **light mode** toggled via a floating button in the top-right corner.

### How it works

1. **CSS custom properties** in `src/styles/index.css` define all theme tokens:
   - `:root` — dark mode values (default)
   - `html.light` — light mode overrides

2. **Tailwind config** (`tailwind.config.ts`) maps `bg.*` and `text.*` color tokens to the CSS vars so all Tailwind utilities automatically switch theme.

3. **`themeStore`** (`src/store/themeStore.ts`) persists the preference in localStorage and toggles the `light` class on `<html>`.

4. **FOUC prevention** — an inline `<script>` in `index.html` reads localStorage before React mounts and applies the correct class immediately, preventing any flash.

### CSS Variable Tokens

| Variable | Dark | Light |
|---|---|---|
| `--bg-shell` | `#05050F` | `#F2F2FF` |
| `--bg-surface1` | `#0D0D1A` | `#E8E8F8` |
| `--bg-surface2` | `#14142B` | `#DDDDF0` |
| `--bg-surface3` | `#1E1E3F` | `#D0D0E8` |
| `--text-display` | `#FFFFFF` | `#0A0A1E` |
| `--text-heading` | `#E2E8F0` | `#1A1A35` |
| `--text-body` | `#CBD5E1` | `#374151` |
| `--text-caption` | `#94A3B8` | `#4B5563` |
| `--text-muted` | `#475569` | `#6B7280` |
| `--glass-bg` | `rgba(20,20,43,0.85)` | `rgba(221,221,240,0.90)` |
| `--glass-border` | `rgba(255,255,255,0.10)` | `rgba(0,0,0,0.08)` |
| `--surface-subtle` | `rgba(255,255,255,0.05)` | `rgba(0,0,0,0.04)` |
| `--border-subtle` | `rgba(255,255,255,0.10)` | `rgba(0,0,0,0.08)` |
| `--border-divider` | `rgba(255,255,255,0.05)` | `rgba(0,0,0,0.06)` |

Quiz dimension background gradients are also CSS vars (`--dim-soc-gradient`, etc.) that shift from dramatic dark to soft pastel in light mode.

## Color System

### Element Palettes

| Element | Core | Usage |
|---------|------|-------|
| Fire | `#FF4500` | Impulsive archetypes |
| Water | `#0EA5E9` | Empathic archetypes |
| Earth | `#22C55E` | Pragmatic archetypes |
| Air | `#818CF8` | Analytical archetypes |

### Brand Colors
- Primary: `#7C3AED` (purple)
- Secondary: `#06B6D4` (cyan)

Element tokens are defined in `src/utils/elementColors.ts` via `getElementColors(element)`.

## Quiz Scoring

Questions are tagged with one of 4 dimensions:
- **SOC** — Social susceptibility
- **TRU** — Trust tendency
- **DEC** — Decision-making under pressure
- **ACT** — Action bias

`archetypeCalculator.ts` maps the score vector to the closest archetype from the 16 defined in `archetypes.json`.

## Notes

- `ResultCard` is intentionally **always dark** regardless of app theme — it's a shareable export card that should look consistent when shared.
- The `@/` path alias maps to `src/`.
- Zustand stores use `persist` middleware with the `localStorage` engine (default).
