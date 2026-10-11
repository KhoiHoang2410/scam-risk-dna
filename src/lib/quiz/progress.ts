import { z } from "zod"
import { ALL_POLES, type Answers, type Pole } from "./model"

export type Progress = { answers: Answers; index: number }

export type ProgressAction =
  | { type: "answer"; questionId: string; pole: Pole }
  | { type: "back" }
  | { type: "reset" }

export const initialProgress: Progress = { answers: {}, index: 0 }

const progressSchema = z.object({
  answers: z.record(z.string(), z.enum(ALL_POLES as [Pole, ...Pole[]])),
  index: z.number().int().min(0),
})

export function progressReducer(state: Progress, action: ProgressAction, total: number): Progress {
  switch (action.type) {
    case "answer":
      return {
        answers: { ...state.answers, [action.questionId]: action.pole },
        index: Math.min(state.index + 1, total),
      }
    case "back":
      return { ...state, index: Math.max(state.index - 1, 0) }
    case "reset":
      return initialProgress
  }
}

export function parseProgress(raw: string | null): Progress {
  if (!raw) return initialProgress
  try {
    const parsed = progressSchema.safeParse(JSON.parse(raw))
    return parsed.success ? parsed.data : initialProgress
  } catch {
    return initialProgress
  }
}
