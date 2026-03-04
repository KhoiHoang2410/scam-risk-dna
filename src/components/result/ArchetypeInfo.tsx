import { motion } from 'framer-motion'
import type { Archetype } from '@/types/index'
import { getElementColors } from '@/utils/elementColors'
import { GlassCard } from '@/components/ui/GlassCard'

interface ArchetypeInfoProps {
  archetype: Archetype
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export function ArchetypeInfo({ archetype }: ArchetypeInfoProps) {
  const colors = getElementColors(archetype.element)

  return (
    <motion.div
      className="space-y-4"
      variants={stagger}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={fadeUp}>
        <GlassCard glowColor={colors.core}>
          <p
            className="font-accent text-xs tracking-widest uppercase mb-3"
            style={{ color: colors.core }}
          >
            Core Trait
          </p>
          <p className="text-text-heading font-body font-semibold text-lg">
            {archetype.core_trait}
          </p>
        </GlassCard>
      </motion.div>

      <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <GlassCard>
          <p className="font-accent text-xs tracking-widest uppercase text-semantic-success mb-3">
            Strengths
          </p>
          <ul className="space-y-2">
            {archetype.strengths.map((s, i) => (
              <li key={i} className="flex items-start gap-2 text-text-body text-sm">
                <span className="text-semantic-success mt-0.5">✓</span>
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </GlassCard>

        <GlassCard>
          <p className="font-accent text-xs tracking-widest uppercase text-semantic-warning mb-3">
            Blind Spots
          </p>
          <ul className="space-y-2">
            {archetype.blind_spots.map((b, i) => (
              <li key={i} className="flex items-start gap-2 text-text-body text-sm">
                <span className="text-semantic-warning mt-0.5">!</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </GlassCard>
      </motion.div>

      <motion.div variants={fadeUp}>
        <GlassCard className="border-semantic-danger/30" glowColor="#DC2626">
          <p className="font-accent text-xs tracking-widest uppercase text-semantic-danger mb-3">
            Vulnerability Profile
          </p>
          <div className="space-y-3">
            <div>
              <p className="text-xs text-text-caption mb-1">Primary Scam</p>
              <p className="text-text-heading font-semibold">{archetype.primary_scam}</p>
            </div>
            <div>
              <p className="text-xs text-text-caption mb-1">Secondary Scam</p>
              <p className="text-text-body">{archetype.secondary_scam}</p>
            </div>
            <div
              className="rounded-xl p-3 text-sm text-text-body leading-relaxed"
              style={{ background: 'rgba(220,38,38,0.08)', border: '1px solid rgba(220,38,38,0.2)' }}
            >
              {archetype.scam_vulnerability_details}
            </div>
          </div>
        </GlassCard>
      </motion.div>
    </motion.div>
  )
}
