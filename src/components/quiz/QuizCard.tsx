import { useState } from 'react'
import { motion } from 'framer-motion'
import type { QuizQuestion } from '@/types/index'
import { ProgressBar } from './ProgressBar'
import { SceneText } from './SceneText'
import { ChoiceButton } from './ChoiceButton'
import { getDimensionColor, getDimensionGradient } from '@/utils/elementColors'

interface QuizCardProps {
  question: QuizQuestion
  currentIndex: number
  totalQuestions: number
  onAnswer: (questionId: number, scoreKey: string) => void
  direction: 1 | -1
}

const cardVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: {
      x: { type: 'spring' as const, stiffness: 300, damping: 30 },
      opacity: { duration: 0.3 },
    },
  },
  exit: (direction: number) => ({
    x: direction > 0 ? '-100%' : '100%',
    opacity: 0,
    transition: {
      x: { type: 'spring' as const, stiffness: 300, damping: 30 },
      opacity: { duration: 0.2 },
    },
  }),
}

const choiceListVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.3,
    },
  },
}

const choiceItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring' as const, stiffness: 300, damping: 25 },
  },
}

export function QuizCard({
  question,
  currentIndex,
  totalQuestions,
  onAnswer,
  direction,
}: QuizCardProps) {
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null)
  const [isLocked, setIsLocked] = useState(false)

  const dimColor = getDimensionColor(question.dimension)
  const bg = getDimensionGradient(question.dimension)

  const handleSelect = (scoreKey: string, letter: string) => {
    if (isLocked) return
    setSelectedLetter(letter)
    setIsLocked(true)
    setTimeout(() => {
      onAnswer(question.id, scoreKey)
    }, 600)
  }

  return (
    <motion.div
      key={question.id}
      className="flex flex-col min-h-screen px-4 py-6 md:px-8 md:py-10 max-w-2xl mx-auto w-full"
      style={{ background: bg }}
      custom={direction}
      variants={cardVariants}
      initial="enter"
      animate="center"
      exit="exit"
    >
      <ProgressBar
        current={currentIndex + 1}
        total={totalQuestions}
        className="mb-6"
      />

      <div className="mb-2">
        <span
          className="inline-block font-accent text-xs tracking-widest uppercase px-2 py-0.5 rounded-md border"
          style={{
            color: dimColor,
            borderColor: `${dimColor}40`,
            background: `${dimColor}10`,
          }}
        >
          {question.dimension}
        </span>
      </div>

      <div className="flex-1 flex flex-col justify-between">
        <SceneText
          scenarioTitle={question.scenario_title}
          sceneText={question.scene_text}
        />

        <motion.div
          className="flex flex-col gap-3 mt-6"
          variants={choiceListVariants}
          initial="hidden"
          animate="visible"
        >
          {question.options.map((option) => (
            <motion.div key={option.id} variants={choiceItemVariants}>
              <ChoiceButton
                option={option}
                isSelected={selectedLetter === option.letter}
                isLocked={isLocked}
                onSelect={(scoreKey) => handleSelect(scoreKey, option.letter)}
              />

            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="mt-6 flex justify-center">
        <div className="flex gap-1">
          {Array.from({ length: totalQuestions }).map((_, i) => (
            <div
              key={i}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === currentIndex ? 16 : 4,
                height: 4,
                background: i < currentIndex
                  ? '#7C3AED'
                  : i === currentIndex
                  ? '#06B6D4'
                  : 'rgba(255,255,255,0.15)',
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  )
}
