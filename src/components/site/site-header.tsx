import Link from "next/link"
import { ELEMENT_STYLE } from "@/lib/elements"
import { ELEMENTS } from "@/lib/quiz/model"
import { SITE_NAME } from "@/lib/site"

export function SiteHeader() {
  return (
    <header className="border-b-[3px] border-ink bg-cream">
      <div className="mx-auto flex h-14 w-full max-w-3xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 font-heading text-base font-extrabold tracking-tight">
          <span aria-hidden className="grid size-5 grid-cols-2 border-2 border-ink">
            {ELEMENTS.map((element) => (
              <span key={element} style={{ background: ELEMENT_STYLE[element].hex }} />
            ))}
          </span>
          {SITE_NAME}
        </Link>
        <nav className="flex items-center gap-4 text-sm font-semibold">
          <Link href="/archetypes" className="text-muted-foreground hover:text-foreground">
            All types
          </Link>
          <Link
            href="/quiz"
            className="border-2 border-ink bg-ink px-2.5 py-1 font-bold text-white shadow-retro-sm hover:bg-ink/85"
          >
            Take the test
          </Link>
        </nav>
      </div>
    </header>
  )
}
