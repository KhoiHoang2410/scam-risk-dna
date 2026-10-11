import { readFile } from "node:fs/promises"
import { join } from "node:path"
import QRCode from "qrcode"
import type { Archetype } from "@/lib/quiz/model"
import { ELEMENT_STYLE } from "@/lib/elements"
import { SITE_URL } from "@/lib/site"

export const CARD_SIZES = {
  og: { width: 1200, height: 630 },
  story: { width: 1080, height: 1920 },
  square: { width: 1080, height: 1080 },
} as const

export type CardFormat = keyof typeof CARD_SIZES

const fontFile = (weight: number) => readFile(join(process.cwd(), `assets/fonts/bricolage-${weight}.woff`))

export async function cardFonts() {
  const [regular, bold, extraBold] = await Promise.all([fontFile(400), fontFile(700), fontFile(800)])
  return [
    { name: "Bricolage", data: regular, weight: 400 as const, style: "normal" as const },
    { name: "Bricolage", data: bold, weight: 700 as const, style: "normal" as const },
    { name: "Bricolage", data: extraBold, weight: 800 as const, style: "normal" as const },
  ]
}

async function qrDataUri(color: string) {
  const svg = await QRCode.toString(SITE_URL, { type: "svg", margin: 0, color: { dark: color, light: "#00000000" } })
  return `data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`
}

export async function CardArt({ archetype, format }: { archetype: Archetype; format: CardFormat }) {
  const element = ELEMENT_STYLE[archetype.element]
  const { width, height } = CARD_SIZES[format]
  const tall = format === "story"
  const wide = format === "og"
  const scale = wide ? 0.8 : 1
  const qr = await qrDataUri("#1F1B2E")
  const host = SITE_URL.replace(/^https?:\/\//, "")

  return (
    <div
      style={{
        width,
        height,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: element.softHex,
        color: "#1F1B2E",
        padding: tall ? 96 : 64 * scale,
        fontFamily: "Bricolage",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 32 * scale }}>
        <div style={{ display: "flex", fontWeight: 700 }}>Scam Risk DNA</div>
        <div
          style={{
            display: "flex",
            color: element.hex,
            border: `3px solid ${element.hex}`,
            borderRadius: 999,
            padding: "6px 22px",
            fontSize: 26 * scale,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: 3,
          }}
        >
          {element.label}
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: tall ? 40 : 20 * scale }}>
        <div style={{ display: "flex", fontSize: 34 * scale, color: "#5B5670" }}>My scam risk type is</div>
        <div
          style={{
            display: "flex",
            fontSize: tall ? 128 : wide ? 96 : 112,
            fontWeight: 800,
            color: element.hex,
            lineHeight: 1,
            letterSpacing: -2,
          }}
        >
          {archetype.name}
        </div>
        <div style={{ display: "flex", fontSize: (tall ? 48 : 40) * scale, lineHeight: 1.25, maxWidth: wide ? 900 : 880 }}>
          {archetype.tagline}
        </div>
        {!wide && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: tall ? 48 : 12,
              background: "#FFFFFF",
              borderRadius: 32,
              padding: 40,
              gap: 12,
            }}
          >
            <div style={{ display: "flex", fontSize: 26, fontWeight: 700, textTransform: "uppercase", letterSpacing: 3, color: "#5B5670" }}>
              Superpower
            </div>
            <div style={{ display: "flex", fontSize: tall ? 38 : 32, lineHeight: 1.3 }}>{archetype.superpower}</div>
          </div>
        )}
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 40 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 8, flex: 1 }}>
          <div style={{ display: "flex", fontSize: (tall ? 44 : 36) * scale, fontWeight: 700 }}>What&apos;s your blind spot?</div>
          <div style={{ display: "flex", flexDirection: "column", fontSize: 30 * scale, color: "#5B5670" }}>
            <span>Take the 5-minute test at</span>
            <span style={{ fontWeight: 700, color: "#1F1B2E" }}>{host}</span>
          </div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={qr} width={(tall ? 220 : 180) * scale} height={(tall ? 220 : 180) * scale} alt="" />
      </div>
    </div>
  )
}
