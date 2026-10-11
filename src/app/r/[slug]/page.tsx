import { notFound } from "next/navigation"
import { archetypes } from "@/content/archetypes"
import { ResultView } from "@/components/result/result-view"
import { getArchetype } from "@/lib/quiz/catalog"
import { resultMetadata } from "@/lib/result-metadata"

export const dynamicParams = false

export function generateStaticParams() {
  return archetypes.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: PageProps<"/r/[slug]">) {
  const archetype = getArchetype((await params).slug)
  return archetype ? resultMetadata(archetype) : {}
}

export default async function ResultPage({ params }: PageProps<"/r/[slug]">) {
  const archetype = getArchetype((await params).slug)
  if (!archetype) notFound()
  return <ResultView archetype={archetype} shift={null} />
}
