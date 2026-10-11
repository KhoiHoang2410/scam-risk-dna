import Link from "next/link"
import { ArrowRight, ShieldCheck } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { buddyOf, categoriesFor, stressBlurbFor } from "@/lib/quiz/catalog"
import { AXES, type Archetype, type Axis } from "@/lib/quiz/model"
import { resultPath } from "@/lib/quiz/result-url"
import { AXIS_LABEL, ELEMENT_STYLE } from "@/lib/elements"
import { SITE_URL } from "@/lib/site"
import { cn } from "@/lib/utils"
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
    <article className="mx-auto w-full max-w-2xl px-4 pb-16 pt-6 sm:pt-10">
      <header className={cn("rounded-3xl border p-6 text-center sm:p-10", element.bg, element.border)}>
        <div aria-hidden className="text-6xl sm:text-7xl">
          {archetype.emoji}
        </div>
        <p className="mt-4 text-sm font-medium uppercase tracking-widest text-muted-foreground">Your type is</p>
        <h1 className={cn("mt-1 text-4xl font-extrabold tracking-tight sm:text-5xl", element.text)}>{archetype.name}</h1>
        <p className="mt-3 text-lg text-foreground/80">{archetype.tagline}</p>
        <ul className="mt-5 flex flex-wrap justify-center gap-2" aria-label="Your traits">
          <li>
            <Badge variant="outline" className={cn("bg-card", element.text)}>
              {element.label}
            </Badge>
          </li>
          {AXES.map((axis) => (
            <li key={axis}>
              <Badge variant="outline" className="bg-card">
                {axisLabel(archetype, axis)}
              </Badge>
            </li>
          ))}
        </ul>
      </header>

      <section className="mt-8 grid gap-3 sm:grid-cols-3" aria-label="What drives you">
        {[
          ["What you want most", archetype.coreDesire],
          ["What you fear", archetype.coreFear],
          ["Your superpower", archetype.superpower],
        ].map(([title, body]) => (
          <Card key={title} size="sm">
            <CardHeader>
              <CardTitle className="text-sm text-muted-foreground">{title}</CardTitle>
            </CardHeader>
            <CardContent className="font-medium">{body}</CardContent>
          </Card>
        ))}
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold">Your blind spot</h2>
        <p className="mt-3 text-lg leading-relaxed">{archetype.blindSpot}</p>
      </section>

      <section className="mt-8 rounded-2xl border bg-card p-5 sm:p-6">
        {blurb ? (
          <>
            <p className="text-xs font-medium uppercase tracking-widest text-fire">Your stress shift</p>
            <h2 className="mt-2 text-xl font-bold">{blurb.title}</h2>
            <p className="mt-2 leading-relaxed text-foreground/80">{blurb.body}</p>
          </>
        ) : (
          <>
            <p className="text-xs font-medium uppercase tracking-widest text-earth">Your stress shift</p>
            <h2 className="mt-2 text-xl font-bold">Steady under pressure</h2>
            <p className="mt-2 leading-relaxed text-foreground/80">
              You act the same way stressed as you do calm. That&apos;s a strength, but it also means your blind spot
              above doesn&apos;t switch off when things get hectic.
            </p>
          </>
        )}
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold">Scams built for your blind spot</h2>
        <p className="mt-2 text-muted-foreground">
          Not because you&apos;re careless. These scams are designed to push the exact buttons your type has.
        </p>
        <div className="mt-5 grid gap-4">
          {categories.map((category, i) => (
            <Card key={category.id}>
              <CardHeader>
                <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                  {i === 0 ? "Highest risk" : "Also watch for"} · plays on {category.lever.toLowerCase()}
                </p>
                <CardTitle className="text-lg">{category.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p>{category.description}</p>
                <p className="rounded-xl bg-muted p-3 text-sm italic text-foreground/80">“{category.example}”</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-10 rounded-2xl border-2 border-primary/20 bg-accent/50 p-5 sm:p-6">
        <h2 className="flex items-center gap-2 text-2xl font-bold">
          <ShieldCheck aria-hidden className="size-6 text-primary" />
          Your defence plan
        </h2>
        <ol className="mt-4 space-y-3">
          {[...archetype.tips, ...categories[0].tips.slice(0, 2)].map((tip, i) => (
            <li key={tip} className="flex gap-3">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                {i + 1}
              </span>
              <span>{tip}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-10 rounded-2xl border bg-card p-5 sm:p-6">
        <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Your blind-spot buddy</p>
        <h2 className="mt-2 text-xl font-bold">
          {buddy.emoji} {buddy.name}
        </h2>
        <p className="mt-2 text-foreground/80">
          They lean on {axisLabel(buddy, archetype.blindSpotAxis).toLowerCase()} where you lean on{" "}
          {axisLabel(archetype, archetype.blindSpotAxis).toLowerCase()}. They&apos;ll spot what you miss. Call one
          before you send money to anyone.
        </p>
        <Button asChild variant="link" className="mt-2 h-auto px-0">
          <Link href={resultPath(buddy.slug, null)}>
            Meet {buddy.name} <ArrowRight aria-hidden />
          </Link>
        </Button>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold">Who&apos;s your buddy?</h2>
        <p className="mt-2 text-muted-foreground">
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
        <Button asChild size="lg" variant="outline" className="h-11 px-6">
          <Link href="/quiz">Take the test yourself</Link>
        </Button>
        <Link href="/archetypes" className="text-sm text-muted-foreground hover:text-foreground">
          See all 16 types
        </Link>
      </div>
    </article>
  )
}
