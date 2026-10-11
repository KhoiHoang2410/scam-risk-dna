import { describe, expect, it } from "vitest"
import { parseShift, resultPath } from "@/lib/quiz/result-url"

describe("resultPath", () => {
  it("omits the shift segment when there is no shift", () => {
    expect(resultPath("empath", null)).toBe("/r/empath")
  })

  it("adds the shift axis as a path segment", () => {
    expect(resultPath("speed-racer", "trust")).toBe("/r/speed-racer/trust")
  })
})

describe("parseShift", () => {
  it("accepts known axes", () => {
    expect(parseShift("pace")).toBe("pace")
  })

  it("rejects unknown values", () => {
    expect(parseShift("nope")).toBeNull()
    expect(parseShift(undefined)).toBeNull()
  })
})
