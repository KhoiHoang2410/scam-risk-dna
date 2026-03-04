import { forwardRef } from 'react'
import { motion } from 'framer-motion'
import type { HTMLMotionProps } from 'framer-motion'

interface GlassCardProps extends HTMLMotionProps<'div'> {
  glowColor?: string
  noPadding?: boolean
}

export const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className = '', glowColor, noPadding = false, children, style, ...props }, ref) => {
    const glowStyle = glowColor
      ? {
          boxShadow: `0 0 30px ${glowColor}20, 0 0 60px ${glowColor}10, inset 0 0 30px ${glowColor}05`,
          borderColor: `${glowColor}30`,
        }
      : {}

    return (
      <motion.div
        ref={ref}
        className={`
          relative rounded-2xl
          bg-bg-surface2/80 backdrop-blur-md
          border border-white/10
          ${noPadding ? '' : 'p-6'}
          ${className}
        `}
        style={{
          ...glowStyle,
          ...style,
        }}
        {...props}
      >
        {children}
      </motion.div>
    )
  }
)

GlassCard.displayName = 'GlassCard'
