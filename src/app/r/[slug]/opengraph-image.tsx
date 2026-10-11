import { ImageResponse } from "next/og"
import { archetypes } from "@/content/archetypes"
import { CARD_SIZES, CardArt, cardFonts } from "@/lib/card-art"
import { getArchetype } from "@/lib/quiz/catalog"

export const alt = "Scam Risk DNA result card"
export const size = CARD_SIZES.og
export const contentType = "image/png"

export function generateStaticParams() {
  return archetypes.map((a) => ({ slug: a.slug }))
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const archetype = getArchetype((await params).slug) ?? archetypes[0]
  return new ImageResponse(await CardArt({ archetype, format: "og" }), { ...size, fonts: await cardFonts() })
}
