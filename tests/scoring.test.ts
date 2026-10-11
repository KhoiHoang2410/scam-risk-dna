import { describe, expect, it } from "vitest"
import { scoreAnswers } from "@/lib/quiz/scoring"
import { answersFor, buildQuestions, steady } from "./fixtures"

const questions = buildQuestions()

describe("scoreAnswers", () => {
  it("picks the calm pole of each axis from all-consistent answers", () => {
    const answers = answersFor(questions, {
      social: steady("OUT"),
      trust: steady("FAC"),
      heart: steady("HAR"),
      pace: steady("STR"),
    })
    const result = scoreAnswers(questions, answers)
    expect(result.poles).toEqual({ social: "OUT", trust: "FAC", heart: "HAR", pace: "STR" })
    expect(result.shift).toBeNull()
  })

  it("uses the majority of the three calm answers and ignores stress answers for the calm pole", () => {
    const answers = answersFor(questions, {
      social: { calm: ["IN", "OUT", "IN"], stress: ["OUT", "IN"] },
      trust: { calm: ["GUT", "GUT", "FAC"], stress: ["FAC", "GUT"] },
      heart: steady("LOG"),
      pace: steady("SPO"),
    })
    expect(scoreAnswers(questions, answers).poles).toEqual({
      social: "IN",
      trust: "GUT",
      heart: "LOG",
      pace: "SPO",
    })
  })

  it("reports the calm margin per axis", () => {
    const answers = answersFor(questions, {
      social: { calm: ["IN", "OUT", "IN"], stress: ["IN", "IN"] },
      trust: steady("GUT"),
      heart: steady("LOG"),
      pace: steady("SPO"),
    })
    expect(scoreAnswers(questions, answers).margins).toEqual({ social: 1, trust: 3, heart: 3, pace: 3 })
  })

  it("does not shift when only one stress answer opposes the calm pole", () => {
    const answers = answersFor(questions, {
      social: steady("OUT"),
      trust: { calm: ["FAC", "FAC", "FAC"], stress: ["GUT", "FAC"] },
      heart: steady("HAR"),
      pace: steady("STR"),
    })
    expect(scoreAnswers(questions, answers).shift).toBeNull()
  })

  it("shifts on an axis when both stress answers oppose the calm pole", () => {
    const answers = answersFor(questions, {
      social: steady("OUT"),
      trust: { calm: ["FAC", "FAC", "FAC"], stress: ["GUT", "GUT"] },
      heart: steady("HAR"),
      pace: steady("STR"),
    })
    expect(scoreAnswers(questions, answers).shift).toBe("trust")
  })

  it("prefers the flipped axis with the weakest calm margin", () => {
    const answers = answersFor(questions, {
      social: { calm: ["OUT", "IN", "OUT"], stress: ["IN", "IN"] },
      trust: { calm: ["FAC", "FAC", "FAC"], stress: ["GUT", "GUT"] },
      heart: steady("HAR"),
      pace: steady("STR"),
    })
    expect(scoreAnswers(questions, answers).shift).toBe("social")
  })

  it("breaks equal-margin ties in the order trust, pace, heart, social", () => {
    const flip = { calm: ["OUT", "OUT", "OUT"], stress: ["IN", "IN"] } as const
    const answers = answersFor(questions, {
      social: { calm: [...flip.calm], stress: [...flip.stress] },
      trust: steady("GUT"),
      heart: { calm: ["HAR", "HAR", "HAR"], stress: ["LOG", "LOG"] },
      pace: { calm: ["STR", "STR", "STR"], stress: ["SPO", "SPO"] },
    })
    expect(scoreAnswers(questions, answers).shift).toBe("pace")
  })

  it("throws when an answer is missing", () => {
    const answers = answersFor(questions, {
      social: steady("OUT"),
      trust: steady("FAC"),
      heart: steady("HAR"),
      pace: steady("STR"),
    })
    delete answers.q01
    expect(() => scoreAnswers(questions, answers)).toThrow(/q01/)
  })

  it("throws when an answer does not belong to the question's axis", () => {
    const answers = answersFor(questions, {
      social: steady("OUT"),
      trust: steady("FAC"),
      heart: steady("HAR"),
      pace: steady("STR"),
    })
    answers.q01 = "GUT"
    expect(() => scoreAnswers(questions, answers)).toThrow(/q01/)
  })

  it("throws when an axis does not have exactly three calm questions", () => {
    const broken = questions.filter((q) => q.id !== "q01")
    const answers = answersFor(questions, {
      social: steady("OUT"),
      trust: steady("FAC"),
      heart: steady("HAR"),
      pace: steady("STR"),
    })
    expect(() => scoreAnswers(broken, answers)).toThrow(/social/)
  })
})
