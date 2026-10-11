import { AXES, type Axis } from "./model"

export function resultPath(slug: string, shift: Axis | null) {
  return shift ? `/r/${slug}/${shift}` : `/r/${slug}`
}

export function parseShift(value: string | undefined): Axis | null {
  return (AXES as readonly string[]).includes(value ?? "") ? (value as Axis) : null
}
