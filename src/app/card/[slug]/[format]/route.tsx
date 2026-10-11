import { ImageResponse } from "next/og"
import { archetypes } from "@/content/archetypes"
import { CARD_SIZES, CardArt, cardFonts } from "@/lib/card-art"
import { getArchetype } from "@/lib/quiz/catalog"

export const dynamicParams = false

const FORMATS = ["story", "square"] as const

export function generateStaticParams() {
  return archetypes.flatMap((a) => FORMATS.map((format) => ({ slug: a.slug, format })))
}

export async function GET(_request: Request, ctx: RouteContext<"/card/[slug]/[format]">) {
  const { slug, format } = await ctx.params
  const archetype = getArchetype(slug)
  if (!archetype || !(FORMATS as readonly string[]).includes(format)) {
    return new Response("Not found", { status: 404 })
  }
  const cardFormat = format as (typeof FORMATS)[number]
  return new ImageResponse(await CardArt({ archetype, format: cardFormat }), {
    ...CARD_SIZES[cardFormat],
    fonts: await cardFonts(),
    headers: { "Content-Disposition": `inline; filename="scam-risk-dna-${slug}-${format}.png"` },
  })
}
