import { motion } from 'framer-motion'
import type { QuizOption } from '@/types/index'

interface ChoiceButtonProps {
  option: QuizOption
  isSelected: boolean
  isLocked: boolean
  onSelect: (scoreKey: string) => void
}

const choiceVariants = {
  idle: { scale: 1, y: 0 },
  hover: {
    scale: 1.01,
    y: -2,
    transition: { type: 'spring' as const, stiffness: 400, damping: 25 },
  },
  tap: {
    scale: 0.98,
    transition: { duration: 0.08 },
  },
  selected: {
    scale: 1.02,
    transition: { type: 'spring' as const, stiffness: 500, damping: 20 },
  },
}

export function ChoiceButton({
  option,
  isSelected,
  isLocked,
  onSelect,
}: ChoiceButtonProps) {
  const handleClick = () => {
    if (!isLocked) {
      onSelect(option.score_key)
    }
  }

  return (
    <motion.button
      className="w-full text-left rounded-2xl px-4 py-4 md:px-5 flex items-start gap-3 transition-all duration-150 min-h-[56px]"
      style={{
        background: isSelected ? 'rgba(124, 58, 237, 0.2)' : 'var(--choice-btn-bg)',
        border: isSelected ? '1px solid #7C3AED' : '1px solid var(--border-subtle)',
        boxShadow: isSelected
          ? '0 0 0 2px rgba(124,58,237,0.6), 0 4px 24px rgba(124,58,237,0.3)'
          : 'none',
        cursor: isLocked ? 'not-allowed' : 'pointer',
      }}
      variants={choiceVariants}
      initial="idle"
      animate={isSelected ? 'selected' : 'idle'}
      whileHover={!isLocked ? 'hover' : undefined}
      whileTap={!isLocked ? 'tap' : undefined}
      onClick={handleClick}
      disabled={isLocked}
    >
      <motion.span
        className="font-accent font-bold text-xs tracking-widest rounded-md px-2 py-0.5 min-w-[28px] text-center flex-shrink-0 mt-0.5"
        style={{
          color: isSelected ? '#FFFFFF' : '#06B6D4',
          background: isSelected ? '#7C3AED' : 'rgba(6,182,212,0.1)',
          border: isSelected ? '1px solid #7C3AED' : '1px solid rgba(6,182,212,0.3)',
        }}
        animate={isSelected ? { scale: [1, 1.2, 1] } : { scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        {option.letter}
      </motion.span>
      <span
        className="font-body text-base leading-snug flex-1"
        style={{ color: isSelected ? '#FFFFFF' : 'var(--text-body)' }}
      >
        {option.text}
      </span>
    </motion.button>
  )
}
