import { motion } from 'framer-motion'
import { Link } from '@tanstack/react-router'
import { ElementBadge } from '@/components/ui/ElementBadge'
import { GlassCard } from '@/components/ui/GlassCard'
import { getElementColors } from '@/utils/elementColors'
import archetypesData from '@/data/archetypes.json'
import type { Archetype, Element } from '@/types/index'

const ELEMENT_ORDER: Element[] = ['fire', 'water', 'earth', 'air']
const archetypes = archetypesData.archetypes as Archetype[]

export function ArchetypesPage() {
  const archetypesByElement: Record<Element, Archetype[]> = {
    fire: [],
    water: [],
    earth: [],
    air: [],
  }

  for (const arch of archetypes) {
    archetypesByElement[arch.element].push(arch)
  }

  return (
    <div className="min-h-screen bg-bg-shell">
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 0%, rgba(124,58,237,0.1) 0%, transparent 50%)',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-12">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/">
            <span className="font-accent text-xs tracking-widest uppercase text-text-muted hover:text-brand-primary transition-colors">
              ← Back to Home
            </span>
          </Link>
          <h1 className="font-display text-3xl md:text-4xl text-text-display mt-4 mb-3 tracking-wide">
            All 16 Archetypes
          </h1>
          <p className="text-text-body text-sm max-w-xl mx-auto">
            Every person carries a unique combination of traits. Which element speaks to your soul?
          </p>
        </motion.div>

        <div className="space-y-12">
          {ELEMENT_ORDER.map((element, elementIndex) => {
            const elementArchetypes = archetypesByElement[element]
            const colors = getElementColors(element)

            return (
              <motion.div
                key={element}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: elementIndex * 0.15, duration: 0.5 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <ElementBadge element={element} size="lg" />
                  <div
                    className="flex-1 h-px"
                    style={{ background: `linear-gradient(to right, ${colors.core}40, transparent)` }}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {elementArchetypes.map((arch, i) => (
                    <motion.div
                      key={arch.slug}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: elementIndex * 0.1 + i * 0.05, duration: 0.4 }}
                    >
                      <Link to="/archetypes/$slug" params={{ slug: arch.slug }}>
                        <GlassCard
                          className="h-full cursor-pointer group"
                          whileHover={{ scale: 1.02, y: -4 }}
                          style={{
                            borderColor: `${colors.core}20`,
                          }}
                        >
                          <h3
                            className="font-display text-lg font-bold mb-1 tracking-wide group-hover:text-text-display transition-colors"
                            style={{ color: colors.core }}
                          >
                            {arch.name}
                          </h3>
                          <p className="text-text-caption text-xs italic mb-3 leading-relaxed">
                            "{arch.tagline}"
                          </p>
                          <div className="flex items-center justify-between">
                            <span
                              className="font-accent text-xs tracking-wider px-2 py-0.5 rounded-md"
                              style={{
                                background: `${colors.core}10`,
                                border: `1px solid ${colors.core}30`,
                                color: colors.core,
                              }}
                            >
                              {arch.core_trait}
                            </span>
                            <span className="text-text-muted text-xs group-hover:text-brand-primary transition-colors">
                              Details →
                            </span>
                          </div>
                        </GlassCard>
                      </Link>
                    </motion.div>
                  ))}

                  {elementArchetypes.length === 0 && (
                    <div className="sm:col-span-2 text-center text-text-muted text-sm py-8">
                      No archetypes found for this element.
                    </div>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <p className="text-text-caption text-sm mb-4">
            Ready to discover which archetype is yours?
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
              Take the Quiz
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
