import { useRef, useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useParams } from '@tanstack/react-router'
import { LoadingOracle } from '@/components/ui/LoadingOracle'
import { ResultCard } from '@/components/result/ResultCard'
import { ArchetypeInfo } from '@/components/result/ArchetypeInfo'
import { SafeTipsSection } from '@/components/result/SafeTipsSection'
import { CompatibilityDisplay } from '@/components/result/CompatibilityDisplay'
import { ShareButton } from '@/components/result/ShareButton'
import { ConfettiBlast } from '@/components/ui/ConfettiBlast'
import { GlassCard } from '@/components/ui/GlassCard'
import { getElementColors } from '@/utils/elementColors'
import archetypesData from '@/data/archetypes.json'
import type { Archetype } from '@/types/index'

const archetypes = archetypesData.archetypes as Archetype[]

export function ResultPage() {
  const { slug } = useParams({ strict: false }) as { slug: string }
  const archetype = archetypes.find((a) => a.slug === slug) ?? null

  const [showOracle, setShowOracle] = useState(true)
  const [showConfetti, setShowConfetti] = useState(false)
  const [revealed, setRevealed] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (archetype) {
      const timer = setTimeout(() => {
        setShowOracle(false)
        setRevealed(true)
        setTimeout(() => setShowConfetti(true), 500)
        setTimeout(() => setShowConfetti(false), 5000)
      }, 2500)
      return () => clearTimeout(timer)
    }
  }, [archetype])

  if (showOracle && archetype) {
    return <LoadingOracle element={archetype.element} message="The Oracle reads your soul..." />
  }

  if (!archetype) {
    return (
      <div className="min-h-screen bg-bg-shell flex items-center justify-center px-4">
        <GlassCard className="max-w-md text-center">
          <div className="text-4xl mb-4">🔮</div>
          <h2 className="font-display text-text-heading text-xl mb-3">Result Not Found</h2>
          <p className="text-text-body text-sm mb-6">
            This link may be invalid. Take the quiz to discover your archetype.
          </p>
          <Link to="/quiz">
            <button
              className="px-6 py-3 rounded-xl font-body font-semibold text-white"
              style={{ background: '#7C3AED' }}
            >
              Take the Quiz
            </button>
          </Link>
        </GlassCard>
      </div>
    )
  }

  const colors = getElementColors(archetype.element)

  return (
    <div className="min-h-screen bg-bg-shell">
      <ConfettiBlast active={showConfetti} />

      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 50% 0%, ${colors.core}15 0%, transparent 50%)`,
        }}
      />

      <AnimatePresence>
        {revealed && (
          <motion.div
            className="relative z-10 max-w-2xl mx-auto px-4 py-8 space-y-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-center"
            >
              <span
                className="font-accent text-xs tracking-widest uppercase px-4 py-2 rounded-full"
                style={{
                  background: `${colors.core}15`,
                  border: `1px solid ${colors.core}30`,
                  color: colors.core,
                }}
              >
                Your Scam Risk DNA
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200, damping: 25 }}
            >
              <ResultCard
                ref={cardRef}
                archetype={archetype}
                forExport={false}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <ShareButton
                archetype={archetype}
                cardRef={cardRef as React.RefObject<HTMLDivElement>}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-2">
                <h2
                  className="font-accent text-sm tracking-widest uppercase"
                  style={{ color: colors.core }}
                >
                  Archetype Deep Dive
                </h2>
                <div
                  className="flex-1 h-px"
                  style={{ background: `linear-gradient(to right, ${colors.core}40, transparent)` }}
                />
              </div>
              <ArchetypeInfo archetype={archetype} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.5 }}
            >
              <SafeTipsSection archetype={archetype} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.5 }}
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
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.5 }}
              className="text-center space-y-4"
            >
              <GlassCard className="text-center">
                <p className="font-display text-text-heading text-xl mb-2 tracking-wide">
                  Want to explore all archetypes?
                </p>
                <p className="text-text-body text-sm mb-4">
                  See how your DNA compares to all 16 personality types.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link to="/archetypes">
                    <button
                      className="w-full sm:w-auto px-6 py-3 rounded-xl font-body font-semibold text-sm"
                      style={{
                        background: 'rgba(124,58,237,0.15)',
                        border: '1px solid rgba(124,58,237,0.3)',
                        color: '#A855F7',
                      }}
                    >
                      Browse All Archetypes
                    </button>
                  </Link>
                  <Link to="/tips">
                    <button
                      className="w-full sm:w-auto px-6 py-3 rounded-xl font-body font-semibold text-sm"
                      style={{
                        background: 'rgba(6,182,212,0.1)',
                        border: '1px solid rgba(6,182,212,0.3)',
                        color: '#06B6D4',
                      }}
                    >
                      General Safety Tips
                    </button>
                  </Link>
                  <Link to="/quiz">
                    <button
                      className="w-full sm:w-auto px-6 py-3 rounded-xl font-body font-semibold text-sm"
                      style={{
                        background: 'var(--surface-subtle)',
                        border: '1px solid var(--border-subtle)',
                        color: 'var(--text-body)',
                      }}
                    >
                      Retake Quiz
                    </button>
                  </Link>
                </div>
              </GlassCard>
            </motion.div>

            <div className="text-center pb-8">
              <p className="text-text-muted text-xs font-accent tracking-widest uppercase">
                Scam Risk DNA · Know Your Risk · Stay Safe
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
