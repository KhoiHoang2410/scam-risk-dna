import { describe, expect, it } from "vitest"
import { archetypes } from "@/content/archetypes"
import { questions } from "@/content/questions"
import { scamCategories } from "@/content/scam-categories"
import { stressBlurbs } from "@/content/stress-blurbs"
import {
  ALL_POLES,
  AXES,
  SCAM_CATEGORY_IDS,
  archetypeSchema,
  questionSchema,
  scamCategorySchema,
  stressBlurbSchema,
} from "@/lib/quiz/model"
import { estimateQuizSeconds } from "@/lib/quiz/catalog"

const LEGACY_SLUGS = [
  "commander", "speed-racer", "spark", "wildcard", "empath", "peacemaker", "dreamer", "guardian",
  "protector", "logician", "executive", "tinkerer", "analyst", "idealist", "visionary", "performer",
]

const allCopy = [
  ...questions.flatMap((q) => [q.prompt, ...q.options.map((o) => o.text)]),
  ...archetypes.flatMap((a) => [a.name, a.tagline, a.coreDesire, a.coreFear, a.superpower, a.blindSpot, ...a.tips]),
  ...scamCategories.flatMap((c) => [c.name, c.lever, c.description, c.example, ...c.tips]),
  ...stressBlurbs.flatMap((b) => [b.title, b.body]),
]

const words = (text: string) => text.trim().split(/\s+/).length

describe("questions", () => {
  it("are all valid", () => {
    for (const q of questions) expect(() => questionSchema.parse(q), q.id).not.toThrow()
  })

  it("has 20 questions with unique ids in order", () => {
    expect(questions.map((q) => q.id)).toEqual(Array.from({ length: 20 }, (_, i) => `q${String(i + 1).padStart(2, "0")}`))
  })

  it.each(AXES)("has 3 calm and 2 stress questions for %s", (axis) => {
    const onAxis = questions.filter((q) => q.axis === axis)
    expect(onAxis.filter((q) => q.mode === "calm")).toHaveLength(3)
    expect(onAxis.filter((q) => q.mode === "stress")).toHaveLength(2)
  })

  it("keeps every prompt to 16 words and every option to 12", () => {
    for (const q of questions) {
      expect(words(q.prompt), q.id).toBeLessThanOrEqual(16)
      for (const o of q.options) expect(words(o.text), `${q.id}: ${o.text}`).toBeLessThanOrEqual(12)
    }
  })

  it("does not always put the same pole first", () => {
    for (const axis of AXES) {
      const firsts = new Set(questions.filter((q) => q.axis === axis).map((q) => q.options[0].pole))
      expect(firsts.size, axis).toBe(2)
    }
  })

  it("never mentions scams, so it reads as a personality test", () => {
    for (const q of questions) {
      expect(`${q.prompt} ${q.options.map((o) => o.text).join(" ")}`.toLowerCase(), q.id).not.toMatch(/scam|fraud|phish/)
    }
  })

  it("takes under 5 minutes to answer at a normal reading pace", () => {
    expect(estimateQuizSeconds(questions)).toBeLessThanOrEqual(5 * 60)
  })
})

describe("archetypes", () => {
  it("are all valid", () => {
    for (const a of archetypes) expect(() => archetypeSchema.parse(a), a.slug).not.toThrow()
  })

  it("keeps the legacy slugs so old shared links still work", () => {
    expect(archetypes.map((a) => a.slug).sort()).toEqual([...LEGACY_SLUGS].sort())
  })

  it("covers all 16 pole combinations exactly once", () => {
    const keys = archetypes.map((a) => AXES.map((axis) => a.poles[axis]).join("-"))
    expect(new Set(keys).size).toBe(16)
  })

  it("uses every scam category as someone's primary risk", () => {
    expect(new Set(archetypes.map((a) => a.scams[0]))).toEqual(new Set(SCAM_CATEGORY_IDS))
  })

  it("has 4 archetypes per element", () => {
    for (const element of ["fire", "water", "earth", "air"]) {
      expect(archetypes.filter((a) => a.element === element), element).toHaveLength(4)
    }
  })
})

describe("scam categories", () => {
  it("defines each category once and validly", () => {
    for (const c of scamCategories) expect(() => scamCategorySchema.parse(c), c.id).not.toThrow()
    expect(scamCategories.map((c) => c.id).sort()).toEqual([...SCAM_CATEGORY_IDS].sort())
  })
})

describe("stress blurbs", () => {
  it("has one blurb for every pole flipping to its opposite", () => {
    for (const b of stressBlurbs) expect(() => stressBlurbSchema.parse(b)).not.toThrow()
    expect(stressBlurbs.map((b) => b.from).sort()).toEqual([...ALL_POLES].sort())
  })
})

describe("copy style", () => {
  it("never uses em or en dashes", () => {
    for (const text of allCopy) expect(text, text).not.toMatch(/[–—]/)
  })
})
