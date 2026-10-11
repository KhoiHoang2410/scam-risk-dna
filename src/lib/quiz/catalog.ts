import { archetypes } from "@/content/archetypes"
import { questions } from "@/content/questions"
import { scamCategories } from "@/content/scam-categories"
import { stressBlurbs } from "@/content/stress-blurbs"
import { AXES, oppositeOf, type Answers, type Archetype, type Axis, type Poles, type Question } from "./model"
import { scoreAnswers } from "./scoring"

const WORDS_PER_MINUTE = 200
const SECONDS_TO_DECIDE = 6

export function estimateQuizSeconds(qs: Question[]) {
  const words = qs
    .flatMap((q) => [q.prompt, ...q.options.map((o) => o.text)])
    .join(" ")
    .split(/\s+/).length
  return Math.round((words / WORDS_PER_MINUTE) * 60 + qs.length * SECONDS_TO_DECIDE)
}

export function getArchetype(slug: string) {
  return archetypes.find((a) => a.slug === slug)
}

export function archetypeForPoles(poles: Poles): Archetype {
  const match = archetypes.find((a) => AXES.every((axis) => a.poles[axis] === poles[axis]))
  if (!match) throw new Error(`No archetype for ${JSON.stringify(poles)}`)
  return match
}

export function buildResult(answers: Answers) {
  const { poles, shift } = scoreAnswers(questions, answers)
  return { archetype: archetypeForPoles(poles), shift }
}

export function buddyOf(archetype: Archetype): Archetype {
  const axis = archetype.blindSpotAxis
  return archetypeForPoles({ ...archetype.poles, [axis]: oppositeOf(archetype.poles[axis]) } as Poles)
}

export function stressBlurbFor(archetype: Archetype, shift: Axis) {
  const from = archetype.poles[shift]
  return stressBlurbs.find((b) => b.from === from && b.to === oppositeOf(from))!
}

export function categoriesFor(archetype: Archetype) {
  return archetype.scams.map((id) => scamCategories.find((c) => c.id === id)!)
}
