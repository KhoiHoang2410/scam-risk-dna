"use client"

import { useEffect, useRef, useSyncExternalStore } from "react"
import { useRouter } from "next/navigation"
import { track } from "@vercel/analytics"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { questions } from "@/content/questions"
import { buildResult } from "@/lib/quiz/catalog"
import type { Pole } from "@/lib/quiz/model"
import { dispatch, getServerSnapshot, getSnapshot, subscribe } from "@/lib/quiz/progress-store"
import { resultPath } from "@/lib/quiz/result-url"
import { cn } from "@/lib/utils"

const TOTAL = questions.length
const SECONDS_PER_QUESTION = 13

export function QuizFlow() {
  const router = useRouter()
  const progress = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
  const index = Math.min(progress.index, TOTAL - 1)
  const question = questions[index]
  const chosen = progress.answers[question.id]
  const headingRef = useRef<HTMLHeadingElement>(null)
  const minutesLeft = Math.max(1, Math.ceil(((TOTAL - index) * SECONDS_PER_QUESTION) / 60))

  function choose(pole: Pole) {
    if (index === 0 && Object.keys(progress.answers).length === 0) track("quiz_started")
    const answers = { ...progress.answers, [question.id]: pole }
    if (index === TOTAL - 1) {
      const { archetype, shift } = buildResult(answers)
      track("quiz_completed", { archetype: archetype.slug, shift: shift ?? "none" })
      dispatch({ type: "reset" }, TOTAL)
      router.push(resultPath(archetype.slug, shift))
      return
    }
    dispatch({ type: "answer", questionId: question.id, pole }, TOTAL)
  }

  useEffect(() => {
    if (index > 0) headingRef.current?.focus()
  }, [index])

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.metaKey || event.ctrlKey || event.altKey) return
      if (event.key === "1" || event.key === "2") choose(question.options[Number(event.key) - 1].pole)
      if (event.key === "ArrowLeft") dispatch({ type: "back" }, TOTAL)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  })

  return (
    <div className="mx-auto flex w-full max-w-xl flex-1 flex-col px-4 pb-10 pt-4 sm:pt-10">
      <div className="flex items-center justify-between gap-2 text-sm text-muted-foreground">
        <Button
          variant="ghost"
          size="lg"
          className="-ml-2.5 h-10"
          onClick={() => dispatch({ type: "back" }, TOTAL)}
          disabled={index === 0}
        >
          <ArrowLeft aria-hidden />
          Back
        </Button>
        <span aria-live="polite">
          {index + 1} of {TOTAL} · about {minutesLeft} min left
        </span>
      </div>
      <Progress value={(index / TOTAL) * 100} className="mt-2 h-2" aria-label="Quiz progress" />

      <section
        key={question.id}
        className="mt-10 flex flex-1 flex-col animate-in fade-in slide-in-from-right-4 duration-300 motion-reduce:animate-none sm:mt-16"
      >
        <p
          className={cn(
            "w-fit rounded-full px-3 py-1 text-xs font-medium",
            question.mode === "stress" ? "bg-fire-soft text-fire" : "bg-secondary text-secondary-foreground",
          )}
        >
          {question.mode === "stress" ? "When you're under pressure" : "On a normal day"}
        </p>
        <h1
          id="question-prompt"
          ref={headingRef}
          tabIndex={-1}
          className="mt-4 text-2xl font-bold leading-snug tracking-tight outline-none sm:text-3xl"
        >
          {question.prompt}
        </h1>

        <div role="group" aria-labelledby="question-prompt" className="mt-8 grid gap-3">
          {question.options.map((option, i) => (
            <button
              key={option.pole}
              type="button"
              aria-pressed={chosen === option.pole}
              onClick={() => choose(option.pole)}
              className={cn(
                "group flex min-h-16 w-full items-center gap-4 rounded-2xl border-2 bg-card px-5 py-4 text-left text-base font-medium shadow-xs transition-colors",
                "hover:border-primary/50 hover:bg-accent focus-visible:border-primary focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/40",
                chosen === option.pole && "border-primary bg-accent",
              )}
            >
              <span
                aria-hidden
                className="hidden size-7 shrink-0 items-center justify-center rounded-md border text-xs text-muted-foreground sm:flex"
              >
                {i + 1}
              </span>
              <span>{option.text}</span>
            </button>
          ))}
        </div>
        <p className="mt-6 hidden text-center text-xs text-muted-foreground sm:block">
          Tip: press 1 or 2 to answer, ← to go back. Go with your first instinct.
        </p>
      </section>
    </div>
  )
}
