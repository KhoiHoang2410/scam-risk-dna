import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { useNavigate } from '@tanstack/react-router'
import { useQuizStore } from '@/store/quizStore'
import { QuizCard } from '@/components/quiz/QuizCard'
import { LoadingOracle } from '@/components/ui/LoadingOracle'
import { calculateArchetype } from '@/lib/archetypeCalculator'
import quizData from '@/data/quiz.json'
import type { QuizQuestion } from '@/types/index'

const questions = quizData.questions as QuizQuestion[]

export function QuizPage() {
  const navigate = useNavigate()
  const currentQuestionIndex = useQuizStore((s) => s.currentQuestionIndex)
  const answers = useQuizStore((s) => s.answers)
  const recordAnswer = useQuizStore((s) => s.recordAnswer)
  const nextQuestion = useQuizStore((s) => s.nextQuestion)
  const completeQuiz = useQuizStore((s) => s.completeQuiz)
  const resetQuiz = useQuizStore((s) => s.resetQuiz)

  const [isCompleting, setIsCompleting] = useState(false)
  const [direction] = useState<1 | -1>(1)

  const handleAnswer = (questionId: number, scoreKey: string) => {
    recordAnswer(questionId, scoreKey)

    const isLastQuestion = currentQuestionIndex === questions.length - 1

    if (isLastQuestion) {
      setIsCompleting(true)
      const updatedAnswers = { ...answers, [questionId]: scoreKey }
      const archetype = calculateArchetype(updatedAnswers)
      if (archetype) {
        completeQuiz(archetype.slug)
        void navigate({ to: '/results/$slug', params: { slug: archetype.slug } })
      } else {
        setIsCompleting(false)
      }
    } else {
      nextQuestion()
    }
  }

  const handleReset = () => {
    resetQuiz()
    window.location.reload()
  }

  if (isCompleting) {
    return <LoadingOracle message="The Oracle reads your soul..." />
  }

  const currentQuestion = questions[currentQuestionIndex]
  if (!currentQuestion) {
    return (
      <div className="min-h-screen bg-bg-shell flex items-center justify-center px-4">
        <div className="text-center">
          <p className="text-text-body mb-4">No questions found.</p>
          <button
            className="px-6 py-3 rounded-xl font-body font-semibold text-white"
            style={{ background: '#7C3AED' }}
            onClick={handleReset}
          >
            Start Over
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-bg-shell overflow-hidden">
      <AnimatePresence mode="wait" custom={direction}>
        <QuizCard
          key={currentQuestion.id}
          question={currentQuestion}
          currentIndex={currentQuestionIndex}
          totalQuestions={questions.length}
          onAnswer={handleAnswer}
          direction={direction}
        />
      </AnimatePresence>
    </div>
  )
}
