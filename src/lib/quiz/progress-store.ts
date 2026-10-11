import { initialProgress, parseProgress, progressReducer, type Progress, type ProgressAction } from "./progress"

const KEY = "scam-risk-dna:progress:v2"
const listeners = new Set<() => void>()
let memoryRaw: string | null = null
let cache: { raw: string | null; value: Progress } = { raw: null, value: initialProgress }

function read(): string | null {
  try {
    return window.localStorage.getItem(KEY)
  } catch {
    return memoryRaw
  }
}

function write(raw: string) {
  memoryRaw = raw
  try {
    window.localStorage.setItem(KEY, raw)
  } catch {}
}

export function subscribe(listener: () => void) {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

export function getSnapshot(): Progress {
  const raw = read()
  if (raw !== cache.raw) cache = { raw, value: parseProgress(raw) }
  return cache.value
}

export function getServerSnapshot(): Progress {
  return initialProgress
}

export function dispatch(action: ProgressAction, total: number) {
  write(JSON.stringify(progressReducer(getSnapshot(), action, total)))
  listeners.forEach((listener) => listener())
}
