@AGENTS.md

# Scam Risk DNA

A 5-minute personality test. 20 two-option questions score 4 motive axes and give one of 16 archetypes, plus a stress shift. Results map the archetype's blind spot to modern scam categories and a defence plan. Fully static: no database, the result lives in the URL.

## Commands

```bash
pnpm dev          # dev server
pnpm check        # lint + typecheck + unit tests
pnpm build        # prerenders every page, OG image and share card
pnpm test:e2e     # Playwright, desktop and mobile (needs pnpm build first)
```

## Layout

- `src/lib/quiz/model.ts`: axes, poles, Zod schemas. Single source of truth for the domain.
- `src/lib/quiz/scoring.ts`: calm pole = majority of 3 calm answers per axis. Stress shift = axis where both stress answers oppose the calm pole; ties go to the weakest calm margin, then trust > pace > heart > social.
- `src/lib/quiz/catalog.ts`: archetype lookup, blind-spot buddy, stress blurbs, quiz time estimate.
- `src/content/`: all copy (questions, archetypes, scam categories, stress blurbs). `tests/content.test.ts` enforces structure, word limits and no em dashes.
- `src/lib/card-art.tsx`: shared `next/og` art for the OG image (`/r/[slug]/opengraph-image`) and download cards (`/card/[slug]/[story|square]`). Fonts in `assets/fonts`.
- Routes: `/`, `/quiz`, `/r/[slug]`, `/r/[slug]/[shift]`, `/archetypes`. Legacy redirects in `next.config.ts`.

## Rules

- Questions describe everyday life and motives, never scams. Scams only appear in results.
- Copy: plain English, no em or en dashes, no jargon.
- Light theme only. Element colours are tokens in `globals.css` and hex values in `src/lib/elements.ts` for the cards.
- Keep archetype slugs stable; shared links depend on them.
- `NEXT_PUBLIC_SITE_URL` sets the URL baked into cards and QR codes (defaults to the production URL).
- Plan and decisions: `docs/issues/README.md`. Scam research: `docs/research/2026-10-scam-landscape.md`.
