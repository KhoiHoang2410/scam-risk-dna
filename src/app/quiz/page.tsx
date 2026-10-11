import type { Metadata } from "next"
import { QuizFlow } from "@/components/quiz/quiz-flow"

export const metadata: Metadata = {
  title: "The test",
  description: "20 quick questions. No right answers, just go with your gut.",
}

export default function QuizPage() {
  return <QuizFlow />
}
