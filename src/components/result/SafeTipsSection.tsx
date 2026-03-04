import { motion } from 'framer-motion'
import type { Archetype } from '@/types/index'
import { getElementColors } from '@/utils/elementColors'
import { GlassCard } from '@/components/ui/GlassCard'

interface SafeTipsSectionProps {
  archetype: Archetype
}

export function SafeTipsSection({ archetype }: SafeTipsSectionProps) {
  const colors = getElementColors(archetype.element)

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3 mb-2">
        <h3
          className="font-accent text-sm tracking-widest uppercase"
          style={{ color: colors.core }}
        >
          Your Personalized Safety Tips
        </h3>
        <div
          className="flex-1 h-px"
          style={{ background: `linear-gradient(to right, ${colors.core}40, transparent)` }}
        />
      </div>

      <div className="space-y-3">
        {archetype.safe_tips.map((tip, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
          >
            <GlassCard
              className="flex items-start gap-4"
              whileHover={{ scale: 1.01 }}
            >
              <div
                className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-accent font-bold text-sm"
                style={{
                  background: `${colors.core}20`,
                  border: `1px solid ${colors.core}40`,
                  color: colors.core,
                  minWidth: 32,
                }}
              >
                {i + 1}
              </div>
              <p className="text-text-body text-sm leading-relaxed">{tip}</p>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
