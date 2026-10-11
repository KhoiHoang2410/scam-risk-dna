# scam-risk-dna revamp issues

Vertical slices for the Next.js rewrite. Execute in dependency order.

| # | Title | Type | Blocked by | Status |
|---|-------|------|------------|--------|
| 01 | Scaffold Next 16, shadcn, Vitest, Playwright, `pnpm check` | AFK | None | done |
| 02 | Domain: schemas, scoring engine, result URLs (TDD) | AFK | 01 | done |
| 03 | Content: 20 questions, 16 archetypes, 8 scam categories, stress blurbs | AFK | 02 | done (pending PM review) |
| 04 | Quiz flow UI (one question per screen, auto-advance, resume) | AFK | 02 | done |
| 05 | Result page, stress shift, blind-spot buddy | AFK | 03 | done |
| 06 | OG image, story and square cards with QR, share button | AFK | 05 | done |
| 07 | Landing, archetype gallery, legacy redirects, a11y and e2e | AFK | 04-06 | done |
| 09 | Retro result card: pixel animals, trait meters, buddy / bad influence / kryptonite, retro story, square and OG cards | AFK | 05, 06 | done (pending art and copy review) |
| 08 | Vercel cutover (switch framework preset from Vite to Next.js) | HITL | 01-07 | todo |

## Decisions

- Fully static. No database, no stored answers. The result lives in the URL: `/r/<slug>` or `/r/<slug>/<shift>`.
- English only, light theme only.
- Stack copied from cms_demo: Next.js App Router, TypeScript, Tailwind 4, shadcn/ui, Vitest, Playwright.
- It is a personality test about motives (core desires, fears, behaviour under stress). Questions never describe scams. Scams appear only in results, as the cost of a blind spot.
- 20 questions, 2 options each. 4 axes, 5 questions per axis: 3 calm ("usually") and 2 stress ("when rushed or tired").
- Calm pole per axis = majority of its 3 calm answers. The 4 poles pick one of 16 archetypes. Old slugs are kept.
- Stress shift: an axis flips only when both stress answers oppose the calm pole. Several flips: weakest calm margin wins, then fixed order trust > pace > heart > social. No flip: "steady under pressure".
- 8 scam categories from `docs/research/2026-10-scam-landscape.md`.
- Compatibility is replaced by a "blind-spot buddy": the archetype with the opposite pole on your weakest axis.
- Share: Web Share API on mobile, copy link and social links on desktop. `next/og` cards (OG 1200x630, story 1080x1920, square 1080x1080) with a QR code to the landing page.
- Result card layout follows the Cake "What Dog R U" story card. Each type has a spirit animal drawn as a 16x16 pixel grid in `src/content/pixel-art.ts` (scam icons are 12x12). Review them at `/dev/pixel-art` in dev.
- The card shows the superpower in a quote box, 3 authored meters (2 strengths, then a blind-spot meter of 2 or less), and 3 mini cards: blind-spot buddy, bad influence (same blind-spot pole, other 3 axes flipped) and kryptonite (top scam category).
- Retro palette: cream `#FBF3E4`, ink `#2A2420`, shadow `#C9BBA6`. The element colour is only an accent. The retro theme is site-wide: tokens in `globals.css` (cream background, ink text and borders, radius 0) and the shadcn `Button` variants carry it, so new screens get it by default.
- Legacy `/results/:slug` redirects to `/r/:slug`. `/resume` and the PDF are removed.

## Slice 08 (HITL)

1. In Vercel project settings, change Framework Preset from Vite to Next.js and clear the output directory override.
2. Set `NEXT_PUBLIC_SITE_URL=https://scam-risk-dna.vercel.app`.
3. Merge the PR and check `/`, `/quiz`, `/r/empath`, `/results/empath` and a share preview.
