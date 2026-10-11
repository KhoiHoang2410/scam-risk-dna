import { z } from "zod"

export const AXES = ["social", "trust", "heart", "pace"] as const
export type Axis = (typeof AXES)[number]

export const AXIS_POLES = {
  social: ["OUT", "IN"],
  trust: ["GUT", "FAC"],
  heart: ["HAR", "LOG"],
  pace: ["SPO", "STR"],
} as const satisfies Record<Axis, readonly [string, string]>

export type Pole = (typeof AXIS_POLES)[Axis][number]
export type Poles = { [A in Axis]: (typeof AXIS_POLES)[A][number] }

export const SHIFT_PRIORITY: readonly Axis[] = ["trust", "pace", "heart", "social"]

export const ALL_POLES = AXES.flatMap((axis) => AXIS_POLES[axis]) as Pole[]

export function axisOf(pole: Pole): Axis {
  const axis = AXES.find((a) => (AXIS_POLES[a] as readonly string[]).includes(pole))
  if (!axis) throw new Error(`Unknown pole: ${pole}`)
  return axis
}

export function oppositeOf(pole: Pole): Pole {
  const [a, b] = AXIS_POLES[axisOf(pole)]
  return pole === a ? b : a
}

export const SCAM_CATEGORY_IDS = [
  "investment",
  "jobs",
  "officials",
  "alerts",
  "loved-one",
  "romance",
  "shopping",
  "takeover",
] as const
export type ScamCategoryId = (typeof SCAM_CATEGORY_IDS)[number]

export const ELEMENTS = ["fire", "water", "earth", "air"] as const
export type Element = (typeof ELEMENTS)[number]

const poleSchema = z.enum(ALL_POLES as [Pole, ...Pole[]])

export const questionSchema = z
  .object({
    id: z.string().regex(/^q\d{2}$/),
    axis: z.enum(AXES),
    mode: z.enum(["calm", "stress"]),
    prompt: z.string().min(10),
    options: z.tuple([
      z.object({ pole: poleSchema, text: z.string().min(2) }),
      z.object({ pole: poleSchema, text: z.string().min(2) }),
    ]),
  })
  .refine((q) => {
    const poles = q.options.map((o) => o.pole).sort()
    return poles.join() === [...AXIS_POLES[q.axis]].sort().join()
  }, "Options must cover both poles of the question's axis")

export type Question = z.infer<typeof questionSchema>

export const archetypeSchema = z.object({
  slug: z.string().regex(/^[a-z-]+$/),
  name: z.string(),
  element: z.enum(ELEMENTS),
  emoji: z.string(),
  tagline: z.string(),
  poles: z.object({
    social: z.enum(AXIS_POLES.social),
    trust: z.enum(AXIS_POLES.trust),
    heart: z.enum(AXIS_POLES.heart),
    pace: z.enum(AXIS_POLES.pace),
  }),
  coreDesire: z.string(),
  coreFear: z.string(),
  superpower: z.string(),
  blindSpot: z.string(),
  blindSpotAxis: z.enum(AXES),
  scams: z.tuple([z.enum(SCAM_CATEGORY_IDS), z.enum(SCAM_CATEGORY_IDS)]).refine(([a, b]) => a !== b),
  tips: z.array(z.string()).min(3).max(4),
})

export type Archetype = z.infer<typeof archetypeSchema>

export const scamCategorySchema = z.object({
  id: z.enum(SCAM_CATEGORY_IDS),
  name: z.string(),
  lever: z.string(),
  description: z.string(),
  example: z.string(),
  tips: z.array(z.string()).min(3).max(4),
})

export type ScamCategory = z.infer<typeof scamCategorySchema>

export const stressBlurbSchema = z.object({
  from: poleSchema,
  to: poleSchema,
  title: z.string(),
  body: z.string(),
})

export type StressBlurb = z.infer<typeof stressBlurbSchema>

export type Answers = Partial<Record<string, Pole>>
