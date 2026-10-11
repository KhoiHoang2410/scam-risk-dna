import { describe, expect, it } from "vitest"
import { archetypes } from "@/content/archetypes"
import { questions } from "@/content/questions"
import {
  archetypeForPoles,
  buddyOf,
  buildResult,
  categoriesFor,
  getArchetype,
  stressBlurbFor,
} from "@/lib/quiz/catalog"
import { AXES, type Answers } from "@/lib/quiz/model"
import { resultPath } from "@/lib/quiz/result-url"

function answersMatching(poles: Record<string, string>, stressFlip?: string): Answers {
  const answers: Answers = {}
  for (const q of questions) {
    const calmPole = poles[q.axis]
    const pick = q.mode === "stress" && q.axis === stressFlip
      ? q.options.find((o) => o.pole !== calmPole)!
      : q.options.find((o) => o.pole === calmPole)!
    answers[q.id] = pick.pole
  }
  return answers
}

describe("archetypeForPoles", () => {
  it.each(archetypes.map((a) => [a.slug, a] as const))("reaches %s from the real question set", (slug, archetype) => {
    const result = buildResult(answersMatching(archetype.poles))
    expect(result.archetype.slug).toBe(slug)
    expect(result.shift).toBeNull()
  })

  it("finds the archetype for a pole set", () => {
    expect(archetypeForPoles({ social: "IN", trust: "GUT", heart: "HAR", pace: "STR" }).slug).toBe("empath")
  })
})

describe("buildResult", () => {
  it("returns the stress shift and the URL for it", () => {
    const empath = getArchetype("empath")!
    const result = buildResult(answersMatching(empath.poles, "trust"))
    expect(result.shift).toBe("trust")
    expect(resultPath(result.archetype.slug, result.shift)).toBe("/r/empath/trust")
  })
})

describe("getArchetype", () => {
  it("returns undefined for unknown slugs", () => {
    expect(getArchetype("nope")).toBeUndefined()
  })
})

describe("buddyOf", () => {
  it("flips the pole on the archetype's blind-spot axis", () => {
    for (const a of archetypes) {
      const buddy = buddyOf(a)
      for (const axis of AXES) {
        if (axis === a.blindSpotAxis) expect(buddy.poles[axis], a.slug).not.toBe(a.poles[axis])
        else expect(buddy.poles[axis], a.slug).toBe(a.poles[axis])
      }
    }
  })
})

describe("stressBlurbFor", () => {
  it("describes the flip away from the archetype's calm pole", () => {
    const empath = getArchetype("empath")!
    expect(stressBlurbFor(empath, "trust")).toMatchObject({ from: "GUT", to: "FAC" })
  })
})

describe("categoriesFor", () => {
  it("returns the primary then secondary category", () => {
    const speedRacer = getArchetype("speed-racer")!
    expect(categoriesFor(speedRacer).map((c) => c.id)).toEqual(["alerts", "takeover"])
  })
})
