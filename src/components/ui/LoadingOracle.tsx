import { motion } from 'framer-motion'
import type { Element } from '@/types/index'
import { getElementColors } from '@/utils/elementColors'

interface LoadingOracleProps {
  element?: Element
  message?: string
}

export function LoadingOracle({
  element,
  message = 'The Oracle reads your soul...',
}: LoadingOracleProps) {
  const colors = element ? getElementColors(element) : null
  const orbColors = colors?.orbColors ?? ['#7C3AED', '#06B6D4', '#F59E0B']

  const orbVariants = {
    animate: (i: number) => ({
      rotate: 360,
      transition: {
        duration: 3 + i * 1.5,
        repeat: Infinity,
        ease: 'linear' as const,
      },
    }),
  }

  const glyphVariants = {
    animate: {
      scale: [1, 1.1, 1],
      opacity: [0.7, 1, 0.7],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut' as const,
      },
    },
  }

  const textVariants = {
    animate: {
      opacity: [0.4, 1, 0.4],
      transition: {
        duration: 2.5,
        repeat: Infinity,
        ease: 'easeInOut' as const,
      },
    },
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-bg-shell">
      <div className="relative w-48 h-48 mb-12">
        {orbColors.map((color, i) => (
          <motion.div
            key={i}
            className="absolute inset-0 flex items-center justify-center"
            custom={i}
            animate="animate"
            variants={orbVariants}
            style={{ rotate: (i * 120) }}
          >
            <motion.div
              className="absolute rounded-full"
              style={{
                width: 14 - i * 2,
                height: 14 - i * 2,
                background: color,
                boxShadow: `0 0 20px ${color}, 0 0 40px ${color}80`,
                top: 10,
                left: '50%',
                marginLeft: -((14 - i * 2) / 2),
              }}
            />
          </motion.div>
        ))}

        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          variants={glyphVariants}
          animate="animate"
        >
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center text-4xl"
            style={{
              background: `radial-gradient(circle, ${orbColors[0]}20 0%, transparent 70%)`,
              border: `1px solid ${orbColors[0]}40`,
              boxShadow: `0 0 30px ${orbColors[0]}30`,
            }}
          >
            🧬
          </div>
        </motion.div>

        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: `conic-gradient(transparent, ${orbColors[0]}20, transparent)`,
            animation: 'spin 8s linear infinite',
          }}
        />
      </div>

      <motion.p
        className="font-accent text-sm tracking-widest text-text-caption uppercase text-center"
        variants={textVariants}
        animate="animate"
      >
        {message}
      </motion.p>

      <div className="flex gap-2 mt-6">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-2 h-2 rounded-full"
            style={{ background: orbColors[0] }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              delay: i * 0.4,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>
    </div>
  )
}
