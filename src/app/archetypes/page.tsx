import type { Metadata } from "next"
import Link from "next/link"
import { ArchetypeGrid } from "@/components/site/archetype-grid"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "All 16 types",
  description: "Every Scam Risk DNA type, what drives it, and the blind spot scammers aim for.",
}

export default function ArchetypesPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">All 16 types</h1>
      <p className="mt-3 max-w-xl text-muted-foreground">
        Four elements, sixteen ways of thinking. Each has a superpower and a blind spot. Tap one to read it.
      </p>
      <div className="mt-8">
        <ArchetypeGrid />
      </div>
      <div className="mt-12 text-center">
        <Button asChild size="lg" className="h-12 px-8 text-base">
          <Link href="/quiz">Find my type</Link>
        </Button>
      </div>
    </div>
  )
}
