import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface QuizState {
  currentQuestionIndex: number
  answers: Record<number, string>
  isComplete: boolean
  archetypeSlug: string | null

  recordAnswer: (questionId: number, scoreKey: string) => void
  nextQuestion: () => void
  completeQuiz: (slug: string) => void
  resetQuiz: () => void
}

export const useQuizStore = create<QuizState>()(
  persist(
    (set) => ({
      currentQuestionIndex: 0,
      answers: {},
      isComplete: false,
      archetypeSlug: null,

      recordAnswer: (questionId: number, scoreKey: string) =>
        set((state) => ({
          answers: { ...state.answers, [questionId]: scoreKey },
        })),

      nextQuestion: () =>
        set((state) => ({
          currentQuestionIndex: state.currentQuestionIndex + 1,
        })),

      completeQuiz: (slug: string) =>
        set({ isComplete: true, archetypeSlug: slug }),

      resetQuiz: () =>
        set({
          currentQuestionIndex: 0,
          answers: {},
          isComplete: false,
          archetypeSlug: null,
        }),
    }),
    {
      name: 'scam-risk-dna-static',
      partialize: (state) => ({
        currentQuestionIndex: state.currentQuestionIndex,
        answers: state.answers,
        isComplete: state.isComplete,
        archetypeSlug: state.archetypeSlug,
      }),
    }
  )
)
