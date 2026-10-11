import Link from "next/link"
import { ArrowRight, Lock } from "lucide-react"
import { ArchetypeGrid } from "@/components/site/archetype-grid"
import { Button } from "@/components/ui/button"

const STEPS = [
  ["Answer 20 quick questions", "Everyday situations, two choices each. No right answers and nothing about scams."],
  ["Meet your type", "See what drives you, what you fear, and how you change under pressure."],
  ["Get your defence plan", "The scams built for your blind spot, and simple habits that shut them down."],
]

const RULES = [
  ["Urgent or secret? Pause.", "Pressure and secrecy are the scam. Anything real can wait ten minutes."],
  ["Hang up and call back.", "Use a number you already trust, not the one the caller or message gave you."],
  ["Never share a one-time code.", "Not with your bank, not with support, not with anyone."],
  ["Nobody real asks you to pay to get paid.", "Or to move your money somewhere to keep it safe."],
  ["Only install apps from the official store.", "Never from a link, a file or a QR code someone sent you."],
]

export default function LandingPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4">
      <section className="py-14 text-center sm:py-24">
        <p className="text-sm font-medium uppercase tracking-widest text-primary">A 5-minute personality test</p>
        <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl">
          Every personality has a blind spot.
          <br />
          <span className="text-primary">Scammers know yours.</span>
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
          Find out how you really make decisions, what changes when you&apos;re stressed, and which scams are built for
          people like you.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild size="lg" className="h-12 w-full px-8 text-base sm:w-auto">
            <Link href="/quiz">
              Start the test <ArrowRight aria-hidden />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="h-12 w-full px-8 text-base sm:w-auto">
            <Link href="/archetypes">See the 16 types</Link>
          </Button>
        </div>
        <p className="mt-4 flex items-center justify-center gap-1.5 text-sm text-muted-foreground">
          <Lock aria-hidden className="size-3.5" />
          No sign-up. Your answers never leave your device.
        </p>
      </section>

      <section aria-labelledby="how" className="border-t py-12">
        <h2 id="how" className="text-2xl font-bold">
          How it works
        </h2>
        <ol className="mt-6 grid gap-4 sm:grid-cols-3">
          {STEPS.map(([title, body], i) => (
            <li key={title} className="rounded-2xl border bg-card p-5">
              <span className="text-sm font-bold text-primary">Step {i + 1}</span>
              <h3 className="mt-1 font-bold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="types" className="border-t py-12">
        <h2 id="types" className="text-2xl font-bold">
          16 types, 4 elements
        </h2>
        <p className="mt-2 text-muted-foreground">Which one are you? Take the test before you peek.</p>
        <div className="mt-6">
          <ArchetypeGrid />
        </div>
      </section>

      <section id="rules" aria-labelledby="rules-title" className="scroll-mt-20 border-t py-12">
        <h2 id="rules-title" className="text-2xl font-bold">
          5 rules that beat almost every scam
        </h2>
        <ol className="mt-6 grid gap-3">
          {RULES.map(([title, body], i) => (
            <li key={title} className="flex gap-4 rounded-2xl border bg-card p-4">
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground">
                {i + 1}
              </span>
              <div>
                <p className="font-bold">{title}</p>
                <p className="text-sm text-muted-foreground">{body}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="mt-4 text-sm text-muted-foreground">
          Bonus: agree a family safe word today. AI can copy a voice from a few seconds of video.
        </p>
      </section>

      <section className="border-t py-14 text-center">
        <h2 className="text-2xl font-bold">Ready to meet your blind spot?</h2>
        <Button asChild size="lg" className="mt-6 h-12 px-8 text-base">
          <Link href="/quiz">
            Start the test <ArrowRight aria-hidden />
          </Link>
        </Button>
      </section>
    </div>
  )
}
