import { motion } from 'framer-motion'

interface AnimatedTitleProps {
  text: string
  className?: string
  delay?: number
  staggerDelay?: number
}

export function AnimatedTitle({
  text,
  className = '',
  delay = 0,
  staggerDelay = 0.08,
}: AnimatedTitleProps) {
  const words = text.split(' ')

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  }

  const wordVariant = {
    hidden: {
      opacity: 0,
      y: 30,
      filter: 'blur(10px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        type: 'spring' as const,
        stiffness: 200,
        damping: 20,
      },
    },
  }

  return (
    <motion.h1
      className={`font-display ${className}`}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-[0.3em]"
          variants={wordVariant}
        >
          {word}
        </motion.span>
      ))}
    </motion.h1>
  )
}
