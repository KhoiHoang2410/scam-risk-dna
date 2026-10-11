import Link from "next/link"
import { ArrowRight, ShieldCheck } from "lucide-react"
import { PixelArt } from "@/components/pixel-art"
import { Button } from "@/components/ui/button"
import { RetroBox } from "@/components/ui/retro-box"
import { ANIMAL_ART, SCAM_ICONS } from "@/content/pixel-art"
import { buddyOf, categoriesFor, stressBlurbFor } from "@/lib/quiz/catalog"
import { AXES, type Archetype, type Axis } from "@/lib/quiz/model"
import { resultPath } from "@/lib/quiz/result-url"
import { AXIS_LABEL, ELEMENT_STYLE } from "@/lib/elements"
import { SITE_URL } from "@/lib/site"
import { cn } from "@/lib/utils"
import { ResultHero } from "./result-hero"
import { ShareActions } from "./share-actions"

type Props = { archetype: Archetype; shift: Axis | null }

function axisLabel(archetype: Archetype, axis: Axis) {
  return (AXIS_LABEL[axis] as Record<string, string>)[archetype.poles[axis]]
}

export function ResultView({ archetype, shift }: Props) {
  const element = ELEMENT_STYLE[archetype.element]
  const buddy = buddyOf(archetype)
  const blurb = shift ? stressBlurbFor(archetype, shift) : null
  const categories = categoriesFor(archetype)
  const shareUrl = `${SITE_URL}${resultPath(archetype.slug, null)}`

  return (
    <div className="flex-1 bg-cream text-ink">
      <article className="mx-auto w-full max-w-2xl px-4 pb-16 pt-6 sm:pt-10">
        <ResultHero archetype={archetype} />
        <p className="mt-4 text-center text-lg text-ink/80">{archetype.tagline}</p>

        <section className="mt-8 grid gap-3 sm:grid-cols-3" aria-label="What drives you">
          {[
            ["What you want most", archetype.coreDesire],
            ["What you fear", archetype.coreFear],
            ["Your traits", AXES.map((axis) => axisLabel(archetype, axis)).join(", ")],
          ].map(([title, body]) => (
            <RetroBox key={title} className="p-4 shadow-retro-sm">
              <h2 className="text-sm font-semibold text-retro-muted">{title}</h2>
              <p className="mt-1 font-medium">{body}</p>
            </RetroBox>
          ))}
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">Your blind spot</h2>
          <p className="mt-3 text-lg leading-relaxed">{archetype.blindSpot}</p>
        </section>

        <RetroBox className="mt-8 p-5 sm:p-6">
          {blurb ? (
            <>
              <p className="text-xs font-medium uppercase tracking-widest text-fire">Your stress shift</p>
              <h2 className="mt-2 text-xl font-bold">{blurb.title}</h2>
              <p className="mt-2 leading-relaxed text-ink/80">{blurb.body}</p>
            </>
          ) : (
            <>
              <p className="text-xs font-medium uppercase tracking-widest text-earth">Your stress shift</p>
              <h2 className="mt-2 text-xl font-bold">Steady under pressure</h2>
              <p className="mt-2 leading-relaxed text-ink/80">
                You act the same way stressed as you do calm. That&apos;s a strength, but it also means your blind spot
                above doesn&apos;t switch off when things get hectic.
              </p>
            </>
          )}
        </RetroBox>

        <section id="scams" className="mt-10 scroll-mt-20">
          <h2 className="text-2xl font-bold">Scams built for your blind spot</h2>
          <p className="mt-2 text-retro-muted">
            Not because you&apos;re careless. These scams are designed to push the exact buttons your type has.
          </p>
          <div className="mt-5 grid gap-4">
            {categories.map((category, i) => (
              <RetroBox key={category.id} className="p-5">
                <div className="flex items-start gap-4">
                  <PixelArt rows={SCAM_ICONS[category.id]} size={48} className="size-12 shrink-0" />
                  <div className="min-w-0">
                    <p className="text-xs font-medium uppercase tracking-widest text-retro-muted">
                      {i === 0 ? "Highest risk" : "Also watch for"} · plays on {category.lever.toLowerCase()}
                    </p>
                    <h3 className="mt-1 text-lg font-bold">{category.name}</h3>
                  </div>
                </div>
                <p className="mt-3">{category.description}</p>
                <p className="mt-3 border-2 border-dashed border-retro-shadow bg-cream p-3 text-sm italic text-ink/80">“{category.example}”</p>
              </RetroBox>
            ))}
          </div>
        </section>

        <RetroBox className="mt-10 p-5 sm:p-6">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <ShieldCheck aria-hidden className={cn("size-6", element.text)} />
            Your defence plan
          </h2>
          <ol className="mt-4 space-y-3">
            {[...archetype.tips, ...categories[0].tips.slice(0, 2)].map((tip, i) => (
              <li key={tip} className="flex gap-3">
                <span className="flex size-6 shrink-0 items-center justify-center border-2 border-ink bg-ink text-xs font-bold text-white">
                  {i + 1}
                </span>
                <span>{tip}</span>
              </li>
            ))}
          </ol>
        </RetroBox>

        <RetroBox className="mt-10 flex items-start gap-4 p-5 sm:p-6">
          <PixelArt rows={ANIMAL_ART[buddy.slug]} size={64} className="size-16 shrink-0" />
          <div className="min-w-0">
            <p className="text-xs font-medium uppercase tracking-widest text-retro-muted">Your blind-spot buddy</p>
            <h2 className="mt-2 text-xl font-bold">
              {buddy.name} <span className="text-retro-muted">({buddy.animal})</span>
            </h2>
            <p className="mt-2 text-ink/80">
              They lean on {axisLabel(buddy, archetype.blindSpotAxis).toLowerCase()} where you lean on{" "}
              {axisLabel(archetype, archetype.blindSpotAxis).toLowerCase()}. They&apos;ll spot what you miss. Call one
              before you send money to anyone.
            </p>
            <Button asChild variant="link" className="mt-2 h-auto px-0">
              <Link href={resultPath(buddy.slug, null)}>
                Meet {buddy.name} <ArrowRight aria-hidden />
              </Link>
            </Button>
          </div>
        </RetroBox>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">Who&apos;s your buddy?</h2>
          <p className="mt-2 text-retro-muted">
            Share your result and see which of your friends covers your blind spot.
          </p>
          <div className="mt-5">
            <ShareActions
              url={shareUrl}
              slug={archetype.slug}
              text={`I'm ${archetype.name} on Scam Risk DNA. What's your blind spot?`}
            />
          </div>
        </section>

        <div className="mt-12 flex flex-col items-center gap-2 text-center">
          <Button asChild size="lg" variant="outline" className="h-11 rounded-none border-[3px] border-ink bg-white px-6 shadow-retro-sm">
            <Link href="/quiz">Take the test yourself</Link>
          </Button>
          <Link href="/archetypes" className="text-sm text-retro-muted hover:text-ink">
            See all 16 types
          </Link>
        </div>
      </article>
    </div>
  )
}
