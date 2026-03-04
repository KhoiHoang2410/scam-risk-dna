import { motion } from 'framer-motion'
import { Link, useParams } from '@tanstack/react-router'
import { ElementBadge } from '@/components/ui/ElementBadge'
import { GlassCard } from '@/components/ui/GlassCard'
import { ArchetypeInfo } from '@/components/result/ArchetypeInfo'
import { SafeTipsSection } from '@/components/result/SafeTipsSection'
import { CompatibilityDisplay } from '@/components/result/CompatibilityDisplay'
import { getElementColors } from '@/utils/elementColors'
import archetypesData from '@/data/archetypes.json'
import type { Archetype } from '@/types/index'

const archetypes = archetypesData.archetypes as Archetype[]

export function ArchetypeDetailPage() {
  const { slug } = useParams({ strict: false }) as { slug: string }
  const archetype = archetypes.find((a) => a.slug === slug) ?? null

  if (!archetype) {
    return (
      <div className="min-h-screen bg-bg-shell flex items-center justify-center px-4">
        <GlassCard className="max-w-md text-center">
          <div className="text-4xl mb-4">🔮</div>
          <h2 className="font-display text-text-heading text-xl mb-3">Archetype Not Found</h2>
          <p className="text-text-body text-sm mb-4">
            This archetype doesn't exist or couldn't be loaded.
          </p>
          <Link to="/archetypes">
            <button
              className="px-6 py-3 rounded-xl font-body font-semibold text-white"
              style={{ background: '#7C3AED' }}
            >
              Browse Archetypes
            </button>
          </Link>
        </GlassCard>
      </div>
    )
  }

  const colors = getElementColors(archetype.element)

  return (
    <div className="min-h-screen bg-bg-shell">
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 50% 0%, ${colors.core}12 0%, transparent 50%)`,
        }}
      />

      <div className="relative z-10 max-w-2xl mx-auto px-4 py-12 space-y-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link to="/archetypes">
            <span className="font-accent text-xs tracking-widest uppercase text-text-muted hover:text-brand-primary transition-colors">
              ← All Archetypes
            </span>
          </Link>
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          <ElementBadge element={archetype.element} size="lg" className="mb-4" />
          <h1 className="font-display text-4xl md:text-5xl font-black text-text-display mb-3 tracking-wide leading-tight">
            {archetype.name}
          </h1>
          <p
            className="font-display text-lg italic mb-4"
            style={{ color: colors.secondary }}
          >
            "{archetype.tagline}"
          </p>
          <div
            className="inline-block px-4 py-2 rounded-full font-accent text-xs tracking-widest uppercase"
            style={{
              background: `${colors.core}15`,
              border: `1px solid ${colors.core}30`,
              color: colors.core,
            }}
          >
            {archetype.core_trait}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <ArchetypeInfo archetype={archetype} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <SafeTipsSection archetype={archetype} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <h2
              className="font-accent text-sm tracking-widest uppercase"
              style={{ color: colors.core }}
            >
              Personality Compatibility
            </h2>
            <div
              className="flex-1 h-px"
              style={{ background: `linear-gradient(to right, ${colors.core}40, transparent)` }}
            />
          </div>
          <CompatibilityDisplay archetype={archetype} />
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <GlassCard className="text-center">
            <p className="font-display text-text-heading text-lg mb-2 tracking-wide">
              Is this your archetype?
            </p>
            <p className="text-text-body text-sm mb-4">
              Take the quiz to find out which of the 16 archetypes truly matches your personality.
            </p>
            <Link to="/quiz">
              <motion.button
                className="px-8 py-4 rounded-2xl font-accent font-bold text-sm tracking-widest uppercase text-white"
                style={{
                  background: 'linear-gradient(135deg, #7C3AED 0%, #06B6D4 100%)',
                  boxShadow: '0 0 30px rgba(124,58,237,0.4)',
                }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                Discover Your DNA
              </motion.button>
            </Link>
          </GlassCard>
        </motion.div>

        <div className="text-center pb-8">
          <p className="text-text-muted text-xs font-accent tracking-widest uppercase">
            Scam Risk DNA · Know Your Risk · Stay Safe
          </p>
        </div>
      </div>
    </div>
  )
}
