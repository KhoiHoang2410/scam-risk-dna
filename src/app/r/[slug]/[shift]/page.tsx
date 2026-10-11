import { notFound } from "next/navigation"
import { archetypes } from "@/content/archetypes"
import { ResultView } from "@/components/result/result-view"
import { getArchetype } from "@/lib/quiz/catalog"
import { AXES } from "@/lib/quiz/model"
import { parseShift } from "@/lib/quiz/result-url"
import { resultMetadata } from "@/lib/result-metadata"

export const dynamicParams = false

export function generateStaticParams() {
  return archetypes.flatMap((a) => AXES.map((shift) => ({ slug: a.slug, shift })))
}

export async function generateMetadata({ params }: PageProps<"/r/[slug]/[shift]">) {
  const archetype = getArchetype((await params).slug)
  return archetype ? resultMetadata(archetype) : {}
}

export default async function ShiftedResultPage({ params }: PageProps<"/r/[slug]/[shift]">) {
  const { slug, shift } = await params
  const archetype = getArchetype(slug)
  const axis = parseShift(shift)
  if (!archetype || !axis) notFound()
  return <ResultView archetype={archetype} shift={axis} />
}
