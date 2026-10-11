import Link from "next/link"
import { PixelArt } from "@/components/pixel-art"
import { RetroBox } from "@/components/ui/retro-box"
import { ANIMAL_ART, SCAM_ICONS } from "@/content/pixel-art"
import { badInfluenceOf, buddyOf, categoriesFor } from "@/lib/quiz/catalog"
import type { Archetype } from "@/lib/quiz/model"
import { resultPath } from "@/lib/quiz/result-url"
import { ELEMENT_STYLE, HASHTAG } from "@/lib/elements"
import { SITE_NAME } from "@/lib/site"
import { cn } from "@/lib/utils"

type Props = { archetype: Archetype }

function MiniCard({ href, title, art, name, detail }: { href: string; title: string; art: readonly string[]; name: string; detail: string }) {
  return (
    <Link
      href={href}
      className="flex flex-col items-center gap-1.5 border-[3px] border-ink bg-white p-2.5 text-center shadow-retro-sm transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/40 sm:p-3"
    >
      <span className="text-xs font-semibold text-retro-muted sm:text-sm">{title}</span>
      <PixelArt rows={art} size={56} className="size-12 sm:size-16" />
      <span className="font-heading text-sm font-extrabold leading-tight sm:text-base">{name}</span>
      <span className="text-[11px] leading-tight text-retro-muted sm:text-xs">{detail}</span>
    </Link>
  )
}

export function ResultHero({ archetype }: Props) {
  const element = ELEMENT_STYLE[archetype.element]
  const buddy = buddyOf(archetype)
  const bad = badInfluenceOf(archetype)
  const kryptonite = categoriesFor(archetype)[0]

  return (
    <header className="border-[3px] border-ink bg-cream p-4 text-ink sm:p-8">
      <div className="flex items-center justify-between gap-3 text-sm font-bold sm:text-base">
        <span className="flex items-center gap-2 font-heading">
          <span aria-hidden className="size-4 border-2 border-ink" style={{ background: element.hex }} />
          {SITE_NAME}
        </span>
        <span className="text-retro-muted">{HASHTAG}</span>
      </div>

      <div className="mt-6 flex items-center gap-4">
        <div className="min-w-0 flex-1">
          <p className={cn("font-heading text-base font-extrabold uppercase tracking-wider sm:text-xl", element.text)}>
            You are...
          </p>
          <h1 className="mt-1 font-heading text-4xl font-extrabold leading-none tracking-tight sm:text-6xl">
            {archetype.name}
          </h1>
          <p className="mt-2 font-heading text-base font-extrabold uppercase tracking-wide text-ink/80 sm:text-xl">
            {archetype.animal}
          </p>
          <p className="mt-3 inline-flex items-center gap-2 border-2 border-ink bg-[#3A332D] px-3 py-1 font-heading text-sm font-extrabold text-white sm:text-lg">
            <span aria-hidden className="size-3" style={{ background: element.hex }} />
            {element.label} type
          </p>
        </div>
        <PixelArt
          rows={ANIMAL_ART[archetype.slug]}
          size={176}
          label={`Pixel ${archetype.animal.toLowerCase()}`}
          className="size-28 shrink-0 sm:size-44"
        />
      </div>

      <RetroBox className="mt-6 p-4 sm:p-6">
        <p className="font-heading text-lg font-bold leading-snug sm:text-2xl">{archetype.superpower}</p>
      </RetroBox>

      <ul className="mt-6 space-y-3 px-1" aria-label="Your traits">
        {archetype.meters.map((meter) => (
          <li key={meter.label} className="flex items-center justify-between gap-3">
            <span className="font-heading text-base font-extrabold sm:text-xl">{meter.label}</span>
            <span role="img" aria-label={`${meter.value} out of 5`} className="flex shrink-0 gap-1.5 sm:gap-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <span
                  key={i}
                  className="size-5 border-2 border-ink sm:size-7"
                  style={{ background: i <= meter.value ? element.hex : "#F3E8D3" }}
                />
              ))}
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-6 grid grid-cols-3 gap-2 sm:gap-4">
        <MiniCard
          href={resultPath(buddy.slug, null)}
          title="Blind-spot buddy"
          art={ANIMAL_ART[buddy.slug]}
          name={buddy.animal}
          detail={buddy.name}
        />
        <MiniCard
          href={resultPath(bad.slug, null)}
          title="Bad influence"
          art={ANIMAL_ART[bad.slug]}
          name={bad.animal}
          detail={bad.name}
        />
        <MiniCard
          href="#scams"
          title="Kryptonite"
          art={SCAM_ICONS[kryptonite.id]}
          name={kryptonite.shortName}
          detail="Highest risk"
        />
      </div>
    </header>
  )
}
