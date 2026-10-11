"use client"

import { useState } from "react"
import { track } from "@vercel/analytics"
import { Check, Download, Link2, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"

type Props = { url: string; text: string; slug: string }

export function ShareActions({ url, text, slug }: Props) {
  const [copied, setCopied] = useState(false)
  const encodedUrl = encodeURIComponent(url)
  const encodedText = encodeURIComponent(text)
  const socials = [
    { name: "WhatsApp", href: `https://wa.me/?text=${encodeURIComponent(`${text} ${url}`)}` },
    { name: "X", href: `https://x.com/intent/post?text=${encodedText}&url=${encodedUrl}` },
    { name: "Facebook", href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}` },
    { name: "LinkedIn", href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}` },
  ]

  async function copy() {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      track("result_shared", { method: "copy", archetype: slug })
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.prompt("Copy this link", url)
    }
  }

  async function share() {
    if (typeof navigator.share !== "function") return copy()
    try {
      await navigator.share({ title: "Scam Risk DNA", text, url })
      track("result_shared", { method: "native", archetype: slug })
    } catch {}
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="grid gap-3 sm:grid-cols-2">
        <Button size="lg" className="h-12 text-base" onClick={share}>
          <Share2 aria-hidden />
          Share my result
        </Button>
        <Button size="lg" variant="outline" className="h-12 text-base" onClick={copy}>
          {copied ? <Check aria-hidden /> : <Link2 aria-hidden />}
          <span aria-live="polite">{copied ? "Link copied" : "Copy link"}</span>
        </Button>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <Button asChild variant="secondary" size="lg" className="h-11">
          <a href={`/card/${slug}/story`} download={`scam-risk-dna-${slug}-story.png`}>
            <Download aria-hidden />
            Story card
          </a>
        </Button>
        <Button asChild variant="secondary" size="lg" className="h-11">
          <a href={`/card/${slug}/square`} download={`scam-risk-dna-${slug}.png`}>
            <Download aria-hidden />
            Square card
          </a>
        </Button>
      </div>
      <ul className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
        {socials.map((s) => (
          <li key={s.name}>
            <a
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="underline-offset-4 hover:text-foreground hover:underline"
              onClick={() => track("result_shared", { method: s.name, archetype: slug })}
            >
              {s.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
