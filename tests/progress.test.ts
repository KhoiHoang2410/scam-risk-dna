import { describe, expect, it } from "vitest"
import { initialProgress, parseProgress, progressReducer } from "@/lib/quiz/progress"

const TOTAL = 3

describe("progressReducer", () => {
  it("records an answer and moves forward", () => {
    const next = progressReducer(initialProgress, { type: "answer", questionId: "q01", pole: "OUT" }, TOTAL)
    expect(next).toEqual({ answers: { q01: "OUT" }, index: 1 })
  })

  it("goes back without losing answers", () => {
    const state = { answers: { q01: "OUT" as const }, index: 1 }
    expect(progressReducer(state, { type: "back" }, TOTAL)).toEqual({ answers: { q01: "OUT" }, index: 0 })
  })

  it("never goes below the first question", () => {
    expect(progressReducer(initialProgress, { type: "back" }, TOTAL).index).toBe(0)
  })

  it("never goes past the end", () => {
    const state = { answers: {}, index: TOTAL }
    expect(progressReducer(state, { type: "answer", questionId: "q03", pole: "IN" }, TOTAL).index).toBe(TOTAL)
  })

  it("overwrites an answer when changed after going back", () => {
    const state = { answers: { q01: "OUT" as const, q02: "GUT" as const }, index: 0 }
    expect(progressReducer(state, { type: "answer", questionId: "q01", pole: "IN" }, TOTAL)).toEqual({
      answers: { q01: "IN", q02: "GUT" },
      index: 1,
    })
  })

  it("resets", () => {
    expect(progressReducer({ answers: { q01: "OUT" }, index: 1 }, { type: "reset" }, TOTAL)).toEqual(initialProgress)
  })
})

describe("parseProgress", () => {
  it("restores saved progress", () => {
    expect(parseProgress(JSON.stringify({ answers: { q01: "OUT" }, index: 1 }))).toEqual({ answers: { q01: "OUT" }, index: 1 })
  })

  it("falls back to a fresh start on bad data", () => {
    expect(parseProgress("not json")).toEqual(initialProgress)
    expect(parseProgress(null)).toEqual(initialProgress)
    expect(parseProgress(JSON.stringify({ answers: { q01: "BOGUS" }, index: 1 }))).toEqual(initialProgress)
  })
})
