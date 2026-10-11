import { AXES, AXIS_POLES, SHIFT_PRIORITY, type Answers, type Axis, type Poles, type Question } from "./model"

export type ScoreResult = {
  poles: Poles
  margins: Record<Axis, number>
  shift: Axis | null
}

function count<T>(items: T[], value: T) {
  return items.filter((item) => item === value).length
}

export function scoreAnswers(questions: Question[], answers: Answers): ScoreResult {
  for (const q of questions) {
    const answer = answers[q.id]
    if (!answer) throw new Error(`Missing answer for ${q.id}`)
    if (!(AXIS_POLES[q.axis] as readonly string[]).includes(answer)) {
      throw new Error(`Answer ${answer} does not belong to ${q.id} (${q.axis})`)
    }
  }

  const poles = {} as Record<Axis, string>
  const margins = {} as Record<Axis, number>
  const flipped: Axis[] = []

  for (const axis of AXES) {
    const [a, b] = AXIS_POLES[axis]
    const picks = (mode: Question["mode"]) =>
      questions.filter((q) => q.axis === axis && q.mode === mode).map((q) => answers[q.id])
    const calm = picks("calm")
    const stress = picks("stress")
    if (calm.length !== 3) throw new Error(`Axis ${axis} needs exactly 3 calm questions, got ${calm.length}`)

    const calmPole = count(calm, a) >= 2 ? a : b
    const otherPole = calmPole === a ? b : a
    poles[axis] = calmPole
    margins[axis] = Math.abs(count(calm, a) - count(calm, b))

    if (stress.length > 0 && stress.every((pick) => pick === otherPole)) flipped.push(axis)
  }

  const shift =
    [...flipped].sort(
      (x, y) => margins[x] - margins[y] || SHIFT_PRIORITY.indexOf(x) - SHIFT_PRIORITY.indexOf(y),
    )[0] ?? null

  return { poles: poles as Poles, margins, shift }
}
