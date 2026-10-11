import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { PixelArt } from "@/components/pixel-art"
import { archetypes } from "@/content/archetypes"
import { ANIMAL_ART, SCAM_ICONS } from "@/content/pixel-art"
import { scamCategories } from "@/content/scam-categories"

export const metadata: Metadata = { title: "Pixel art preview", robots: { index: false } }

export default function PixelArtPreviewPage() {
  if (process.env.NODE_ENV === "production") notFound()
  return (
    <div className="flex-1 bg-cream px-4 py-10 text-ink">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-3xl font-extrabold">Pixel art preview</h1>
        <ul className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {archetypes.map((a) => (
            <li key={a.slug} className="flex flex-col items-center gap-2 border-[3px] border-ink bg-white p-4 shadow-retro-sm">
              <PixelArt rows={ANIMAL_ART[a.slug]} size={128} label={a.animal} />
              <span className="font-bold">{a.animal}</span>
              <span className="text-sm text-retro-muted">{a.name}</span>
              <ul className="w-full text-xs">
                {a.meters.map((m) => (
                  <li key={m.label}>
                    {m.label}: {m.value}/5
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        <ul className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {scamCategories.map((c) => (
            <li key={c.id} className="flex flex-col items-center gap-2 border-[3px] border-ink bg-white p-4 shadow-retro-sm">
              <PixelArt rows={SCAM_ICONS[c.id]} size={96} label={c.shortName} />
              <span className="font-bold">{c.shortName}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
