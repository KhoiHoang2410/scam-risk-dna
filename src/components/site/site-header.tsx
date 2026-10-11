import Link from "next/link"
import { SITE_NAME } from "@/lib/site"

export function SiteHeader() {
  return (
    <header className="border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-14 w-full max-w-3xl items-center justify-between px-4">
        <Link href="/" className="font-heading text-base font-bold tracking-tight">
          🧬 {SITE_NAME}
        </Link>
        <nav className="flex items-center gap-4 text-sm text-muted-foreground">
          <Link href="/archetypes" className="hover:text-foreground">
            All types
          </Link>
          <Link href="/quiz" className="font-medium text-primary hover:underline">
            Take the test
          </Link>
        </nav>
      </div>
    </header>
  )
}
