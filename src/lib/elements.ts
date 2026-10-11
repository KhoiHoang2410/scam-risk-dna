import type { Element } from "@/lib/quiz/model"

export const ELEMENT_STYLE: Record<
  Element,
  { label: string; hex: string; softHex: string; text: string; bg: string; border: string }
> = {
  fire: { label: "Fire", hex: "#C2410C", softHex: "#FFEDD5", text: "text-fire", bg: "bg-fire-soft", border: "border-fire/30" },
  water: { label: "Water", hex: "#0369A1", softHex: "#E0F2FE", text: "text-water", bg: "bg-water-soft", border: "border-water/30" },
  earth: { label: "Earth", hex: "#15803D", softHex: "#DCFCE7", text: "text-earth", bg: "bg-earth-soft", border: "border-earth/30" },
  air: { label: "Air", hex: "#6D28D9", softHex: "#EDE9FE", text: "text-air", bg: "bg-air-soft", border: "border-air/30" },
}

export const AXIS_LABEL = {
  social: { OUT: "Connection", IN: "Independence" },
  trust: { GUT: "Gut feeling", FAC: "Proof" },
  heart: { HAR: "Harmony", LOG: "Logic" },
  pace: { SPO: "Momentum", STR: "Control" },
} as const

export const RETRO = {
  cream: "#FBF3E4",
  ink: "#2A2420",
  shadow: "#C9BBA6",
  paper: "#FFFFFF",
  muted: "#7A6A55",
} as const

export const HASHTAG = "#WhatsYourScamDNA"
