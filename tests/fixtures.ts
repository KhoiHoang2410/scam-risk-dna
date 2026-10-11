import { AXES, AXIS_POLES, type Answers, type Axis, type Pole, type Question } from "@/lib/quiz/model"

export function buildQuestions(): Question[] {
  let n = 0
  return AXES.flatMap((axis) =>
    (["calm", "calm", "calm", "stress", "stress"] as const).map((mode) => {
      n += 1
      const [a, b] = AXIS_POLES[axis]
      return {
        id: `q${String(n).padStart(2, "0")}`,
        axis,
        mode,
        prompt: `Question ${n} about ${axis}`,
        options: [
          { pole: a, text: "first" },
          { pole: b, text: "second" },
        ],
      } as Question
    }),
  )
}

type AxisPlan = { calm: [Pole, Pole, Pole]; stress: [Pole, Pole] }

export function answersFor(questions: Question[], plan: Record<Axis, AxisPlan>): Answers {
  const answers: Answers = {}
  for (const axis of AXES) {
    const calm = questions.filter((q) => q.axis === axis && q.mode === "calm")
    const stress = questions.filter((q) => q.axis === axis && q.mode === "stress")
    calm.forEach((q, i) => (answers[q.id] = plan[axis].calm[i]))
    stress.forEach((q, i) => (answers[q.id] = plan[axis].stress[i]))
  }
  return answers
}

export function steady(pole: Pole): AxisPlan {
  return { calm: [pole, pole, pole], stress: [pole, pole] }
}
