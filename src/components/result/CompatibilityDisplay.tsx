import { motion } from 'framer-motion'
import type { Archetype } from '@/types/index'
import { getElementColors } from '@/utils/elementColors'
import { GlassCard } from '@/components/ui/GlassCard'

interface CompatibilityDisplayProps {
  archetype: Archetype
}

export function CompatibilityDisplay({ archetype }: CompatibilityDisplayProps) {
  const colors = getElementColors(archetype.element)

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <GlassCard glowColor="#10B981">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xl">🤝</span>
            <p className="font-accent text-xs tracking-widest uppercase text-semantic-success">
              Compatible Types
            </p>
          </div>
          <div className="space-y-2">
            {archetype.compatible_types.map((type, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-3 py-2 rounded-xl"
                style={{
                  background: 'rgba(16,185,129,0.08)',
                  border: '1px solid rgba(16,185,129,0.2)',
                }}
              >
                <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: '#10B981' }} />
                <span className="text-text-body text-sm">{type}</span>
              </div>
            ))}
          </div>
        </GlassCard>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <GlassCard glowColor="#EF4444">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xl">⚡</span>
            <p className="font-accent text-xs tracking-widest uppercase text-semantic-error">
              Clashing Types
            </p>
          </div>
          <div className="space-y-2">
            {archetype.clashing_types.map((type, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-3 py-2 rounded-xl"
                style={{
                  background: 'rgba(239,68,68,0.08)',
                  border: '1px solid rgba(239,68,68,0.2)',
                }}
              >
                <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: '#EF4444' }} />
                <span className="text-text-body text-sm">{type}</span>
              </div>
            ))}
          </div>
        </GlassCard>
      </motion.div>

      <motion.div
        className="sm:col-span-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <GlassCard glowColor={colors.core}>
          <p className="font-accent text-xs tracking-widest uppercase mb-2" style={{ color: colors.core }}>
            Pro Tip — Accountability Partner
          </p>
          <p className="text-text-body text-sm leading-relaxed">
            Before making any large financial decision, consult with a{' '}
            <span style={{ color: '#10B981', fontWeight: 600 }}>
              {archetype.compatible_types[0] ?? 'trusted ally'}
            </span>
            . Their balanced perspective can catch what your blind spots miss.
          </p>
        </GlassCard>
      </motion.div>
    </div>
  )
}
