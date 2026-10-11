import type { Metadata } from "next"
import type { Archetype } from "@/lib/quiz/model"
import { resultPath } from "@/lib/quiz/result-url"

export function resultMetadata(archetype: Archetype): Metadata {
  const title = `${archetype.name}: ${archetype.tagline}`
  const description = `${archetype.superpower} But every type has a blind spot. Take the 5-minute test and find yours.`
  return {
    title: archetype.name,
    description,
    alternates: { canonical: resultPath(archetype.slug, null) },
    openGraph: { title, description, type: "website" },
    twitter: { card: "summary_large_image", title, description },
  }
}
