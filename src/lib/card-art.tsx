import { readFile } from "node:fs/promises"
import { join } from "node:path"
import type { CSSProperties, ReactNode } from "react"
import QRCode from "qrcode"
import { PixelArt } from "@/components/pixel-art"
import { ANIMAL_ART, SCAM_ICONS } from "@/content/pixel-art"
import { badInfluenceOf, buddyOf, categoriesFor } from "@/lib/quiz/catalog"
import type { Archetype } from "@/lib/quiz/model"
import { ELEMENT_STYLE, HASHTAG, RETRO } from "@/lib/elements"
import { SITE_NAME, SITE_URL } from "@/lib/site"

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

async function qrDataUri() {
  const svg = await QRCode.toString(SITE_URL, { type: "svg", margin: 0, color: { dark: RETRO.ink, light: "#00000000" } })
  return `data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`
}

const host = SITE_URL.replace(/^https?:\/\//, "")

function Frame({ width, height, children }: { width: number; height: number; children: ReactNode }) {
  return (
    <div style={{ width, height, display: "flex", background: RETRO.cream, padding: 24, fontFamily: "Bricolage", color: RETRO.ink }}>
      <div style={{ display: "flex", flex: 1, border: `6px solid ${RETRO.ink}` }}>{children}</div>
    </div>
  )
}

function Box({ children, padding = 32, style }: { children: ReactNode; padding?: number; style?: CSSProperties }) {
  return (
    <div
      style={{
        display: "flex",
        background: RETRO.paper,
        border: `5px solid ${RETRO.ink}`,
        boxShadow: `10px 10px 0 ${RETRO.shadow}`,
        padding,
        ...style,
      }}
    >
      {children}
    </div>
  )
}

function Header({ archetype, size }: { archetype: Archetype; size: number }) {
  const element = ELEMENT_STYLE[archetype.element]
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: size, fontWeight: 800 }}>
      <div style={{ display: "flex", alignItems: "center", gap: size * 0.4 }}>
        <div style={{ display: "flex", width: size, height: size, background: element.hex, border: `4px solid ${RETRO.ink}` }} />
        {SITE_NAME}
      </div>
      <div style={{ display: "flex", color: RETRO.muted, fontWeight: 700, fontSize: size * 0.85 }}>{HASHTAG}</div>
    </div>
  )
}

function NameBlock({ archetype, scale }: { archetype: Archetype; scale: number }) {
  const element = ELEMENT_STYLE[archetype.element]
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 * scale }}>
      <div style={{ display: "flex", fontSize: 42 * scale, fontWeight: 800, color: element.hex, letterSpacing: 2 }}>YOU ARE...</div>
      <div style={{ display: "flex", fontSize: 84 * scale, fontWeight: 800, lineHeight: 1, letterSpacing: -2 }}>{archetype.name}</div>
      <div style={{ display: "flex", fontSize: 38 * scale, fontWeight: 800, color: "#4A4038", letterSpacing: 1 }}>
        {archetype.animal.toUpperCase()}
      </div>
      <div style={{ display: "flex" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14 * scale,
            background: "#3A332D",
            color: RETRO.paper,
            border: `4px solid ${RETRO.ink}`,
            padding: `${10 * scale}px ${24 * scale}px`,
            fontSize: 36 * scale,
            fontWeight: 800,
          }}
        >
          <div style={{ display: "flex", width: 20 * scale, height: 20 * scale, background: element.hex }} />
          {element.label} type
        </div>
      </div>
    </div>
  )
}

function Quote({ text, size }: { text: string; size: number }) {
  return (
    <Box padding={size * 0.9}>
      <div style={{ display: "flex", fontSize: size, fontWeight: 700, lineHeight: 1.4 }}>{text}</div>
    </Box>
  )
}

function Meters({ archetype, size }: { archetype: Archetype; size: number }) {
  const element = ELEMENT_STYLE[archetype.element]
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: size * 0.55, padding: `0 ${size * 0.25}px` }}>
      {archetype.meters.map((meter) => (
        <div key={meter.label} style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", fontSize: size, fontWeight: 800 }}>{meter.label}</div>
          <div style={{ display: "flex", gap: size * 0.4 }}>
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  width: size * 1.15,
                  height: size * 1.15,
                  background: i <= meter.value ? element.hex : "#F3E8D3",
                  border: `4px solid ${RETRO.ink}`,
                }}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

function MiniCard({ title, art, name }: { title: string; art: readonly string[]; name: string }) {
  return (
    <Box padding={16} style={{ flex: 1, flexDirection: "column", alignItems: "center", gap: 14 }}>
      <div style={{ display: "flex", fontSize: 26, fontWeight: 700, color: RETRO.muted }}>{title}</div>
      <PixelArt rows={art} size={112} />
      <div style={{ display: "flex", fontSize: 32, fontWeight: 800, textAlign: "center" }}>{name}</div>
    </Box>
  )
}

function DefencePlan({ archetype, qr }: { archetype: Archetype; qr: string }) {
  const element = ELEMENT_STYLE[archetype.element]
  return (
    <Box padding={32} style={{ justifyContent: "space-between", gap: 28 }}>
      <div style={{ display: "flex", flexDirection: "column", flex: 1, gap: 14 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 18, fontSize: 40, fontWeight: 800 }}>
          <div style={{ display: "flex", width: 22, height: 22, background: element.hex, transform: "rotate(45deg)" }} />
          Your defence plan
        </div>
        <div style={{ display: "flex", fontSize: 26, color: RETRO.muted, fontWeight: 700 }}>
          Scams aim at your blind spot. Beat them:
        </div>
        {archetype.shortTips.map((tip) => (
          <div key={tip} style={{ display: "flex", alignItems: "flex-start", gap: 14, fontSize: 30, fontWeight: 700, lineHeight: 1.3 }}>
            <div style={{ display: "flex", width: 16, height: 16, marginTop: 12, background: element.hex, flexShrink: 0 }} />
            {tip}
          </div>
        ))}
        <div style={{ display: "flex", fontSize: 30, fontWeight: 800, marginTop: 6 }}>{host}</div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
        <div style={{ display: "flex", padding: 16, border: `4px solid ${RETRO.ink}`, background: RETRO.paper }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={qr} width={190} height={190} alt="" />
        </div>
        <div style={{ display: "flex", fontSize: 22, fontWeight: 700, color: RETRO.muted }}>Scan to find your type</div>
      </div>
    </Box>
  )
}

function Footer({ size }: { size: number }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
      <div style={{ display: "flex", fontSize: size, fontWeight: 800, color: "#7A6233" }}>Take the test at {host}</div>
      <div style={{ display: "flex", fontSize: size * 0.65, fontWeight: 700, color: "#A08C62" }}>
        5 minutes · 20 questions · free
      </div>
    </div>
  )
}

function StoryCard({ archetype, qr }: { archetype: Archetype; qr: string }) {
  const buddy = buddyOf(archetype)
  const bad = badInfluenceOf(archetype)
  const kryptonite = categoriesFor(archetype)[0]
  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", flex: 1, padding: "52px 60px 44px" }}>
      <Header archetype={archetype} size={38} />
      <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
        <div style={{ display: "flex", flex: 1 }}>
          <NameBlock archetype={archetype} scale={1} />
        </div>
        <PixelArt rows={ANIMAL_ART[archetype.slug]} size={336} />
      </div>
      <Quote text={archetype.superpower} size={40} />
      <Meters archetype={archetype} size={40} />
      <div style={{ display: "flex", gap: 24 }}>
        <MiniCard title="Blind-spot buddy" art={ANIMAL_ART[buddy.slug]} name={buddy.animal} />
        <MiniCard title="Bad influence" art={ANIMAL_ART[bad.slug]} name={bad.animal} />
        <MiniCard title="Kryptonite" art={SCAM_ICONS[kryptonite.id]} name={kryptonite.shortName} />
      </div>
      <DefencePlan archetype={archetype} qr={qr} />
      <Footer size={40} />
    </div>
  )
}

function SquareCard({ archetype, qr }: { archetype: Archetype; qr: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", flex: 1, padding: "40px 52px" }}>
      <Header archetype={archetype} size={32} />
      <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
        <div style={{ display: "flex", flex: 1 }}>
          <NameBlock archetype={archetype} scale={0.82} />
        </div>
        <PixelArt rows={ANIMAL_ART[archetype.slug]} size={250} />
      </div>
      <Quote text={archetype.superpower} size={32} />
      <Meters archetype={archetype} size={32} />
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <div style={{ display: "flex", fontSize: 36, fontWeight: 800, color: "#7A6233" }}>Take the test at {host}</div>
          <div style={{ display: "flex", fontSize: 22, fontWeight: 700, color: "#A08C62" }}>5 minutes · 20 questions · free</div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={qr} width={120} height={120} alt="" />
      </div>
    </div>
  )
}

function OgCard({ archetype }: { archetype: Archetype }) {
  return (
    <div style={{ display: "flex", alignItems: "center", flex: 1, gap: 48, padding: "36px 56px" }}>
      <PixelArt rows={ANIMAL_ART[archetype.slug]} size={400} />
      <div style={{ display: "flex", flexDirection: "column", flex: 1, gap: 24 }}>
        <div style={{ display: "flex", fontSize: 28, fontWeight: 800 }}>{SITE_NAME}</div>
        <NameBlock archetype={archetype} scale={0.8} />
        <div style={{ display: "flex", fontSize: 28, fontWeight: 700, lineHeight: 1.35, color: "#4A4038" }}>
          {archetype.superpower}
        </div>
      </div>
    </div>
  )
}

export async function CardArt({ archetype, format }: { archetype: Archetype; format: CardFormat }) {
  const { width, height } = CARD_SIZES[format]
  const qr = format === "og" ? "" : await qrDataUri()
  return (
    <Frame width={width} height={height}>
      {format === "story" && <StoryCard archetype={archetype} qr={qr} />}
      {format === "square" && <SquareCard archetype={archetype} qr={qr} />}
      {format === "og" && <OgCard archetype={archetype} />}
    </Frame>
  )
}
