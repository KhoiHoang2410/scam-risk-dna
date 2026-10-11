import { describe, expect, it } from "vitest"
import { archetypes } from "@/content/archetypes"
import { ANIMAL_ART, PALETTE, SCAM_ICONS } from "@/content/pixel-art"
import { SCAM_CATEGORY_IDS } from "@/lib/quiz/model"

function expectGrid(rows: readonly string[], size: number, name: string) {
  expect(rows, name).toHaveLength(size)
  for (const row of rows) {
    expect(row, name).toHaveLength(size)
    for (const char of row) expect(char === "." || char in PALETTE, `${name}: ${char}`).toBe(true)
  }
}

describe("pixel art", () => {
  it("draws every archetype as a 16x16 grid", () => {
    expect(Object.keys(ANIMAL_ART).sort()).toEqual(archetypes.map((a) => a.slug).sort())
    for (const [slug, rows] of Object.entries(ANIMAL_ART)) expectGrid(rows, 16, slug)
  })

  it("draws every scam category as a 12x12 icon", () => {
    expect(Object.keys(SCAM_ICONS).sort()).toEqual([...SCAM_CATEGORY_IDS].sort())
    for (const [id, rows] of Object.entries(SCAM_ICONS)) expectGrid(rows, 12, id)
  })
})
