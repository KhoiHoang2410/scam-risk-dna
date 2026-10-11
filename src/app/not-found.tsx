import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-md flex-1 flex-col items-center justify-center gap-4 px-4 py-20 text-center">
      <h1 className="text-3xl font-bold">Page not found</h1>
      <p className="text-muted-foreground">That link doesn&apos;t lead anywhere. Want to find your type instead?</p>
      <Button asChild size="lg" className="h-11 px-6">
        <Link href="/quiz">Take the test</Link>
      </Button>
    </div>
  )
}
