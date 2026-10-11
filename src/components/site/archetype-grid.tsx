import Link from "next/link"
import { PixelArt } from "@/components/pixel-art"
import { archetypes } from "@/content/archetypes"
import { ANIMAL_ART } from "@/content/pixel-art"
import { ELEMENTS } from "@/lib/quiz/model"
import { resultPath } from "@/lib/quiz/result-url"
import { ELEMENT_STYLE } from "@/lib/elements"
import { cn } from "@/lib/utils"

export function ArchetypeGrid() {
  return (
    <div className="grid gap-6">
      {ELEMENTS.map((element) => {
        const style = ELEMENT_STYLE[element]
        return (
          <section key={element} aria-labelledby={`element-${element}`}>
            <h3 id={`element-${element}`} className={cn("text-sm font-semibold uppercase tracking-widest", style.text)}>
              {style.label}
            </h3>
            <ul className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {archetypes
                .filter((a) => a.element === element)
                .map((a) => (
                  <li key={a.slug}>
                    <Link
                      href={resultPath(a.slug, null)}
                      className="flex h-full flex-col gap-1 border-[3px] border-ink bg-white p-4 text-ink shadow-retro-sm transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/40"
                    >
                      <PixelArt rows={ANIMAL_ART[a.slug]} size={56} className="size-14" />
                      <span className="font-heading font-bold">{a.name}</span>
                      <span className="font-heading text-xs font-extrabold uppercase tracking-wide text-retro-muted">
                        {a.animal}
                      </span>
                      <span className="text-sm text-foreground/70">{a.tagline}</span>
                    </Link>
                  </li>
                ))}
            </ul>
          </section>
        )
      })}
    </div>
  )
}
