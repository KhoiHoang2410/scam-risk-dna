import { motion } from 'framer-motion'
import { Link } from '@tanstack/react-router'
import { AnimatedTitle } from '@/components/ui/AnimatedTitle'
import { GlassCard } from '@/components/ui/GlassCard'
import { ElementBadge } from '@/components/ui/ElementBadge'

const STEPS = [
  {
    icon: '🎴',
    title: 'Answer 20 Scenarios',
    description: 'Immersive, story-driven questions reveal your true personality under pressure.',
  },
  {
    icon: '🧬',
    title: 'The Oracle Analyzes',
    description: 'Our algorithm maps your responses across 4 dimensions to find your archetype.',
  },
  {
    icon: '🛡️',
    title: 'Claim Your DNA Report',
    description: 'Get personalized anti-scam tips, share your result, and protect yourself.',
  },
]

const SAMPLE_ARCHETYPES = [
  {
    element: 'fire' as const,
    name: 'The Spark Chaser',
    tagline: 'Opportunity is everywhere — if you move fast enough',
    core_trait: 'Impulsive Optimist',
  },
  {
    element: 'water' as const,
    name: 'The Empath Tide',
    tagline: 'Caring for others is your greatest strength and vulnerability',
    core_trait: 'Compassionate Connector',
  },
  {
    element: 'earth' as const,
    name: 'The Fortune Seeker',
    tagline: 'You know the value of everything — almost everything',
    core_trait: 'Prosperity Hunter',
  },
]

const BULLETS = [
  '16 unique risk archetypes across 4 elemental categories',
  'Personalized anti-scam defense strategies for your personality',
  'Share your DNA card and challenge your friends',
]

export function LandingPage() {
  return (
    <div className="min-h-screen bg-bg-shell overflow-hidden">
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 20% 20%, rgba(124,58,237,0.15) 0%, transparent 60%), radial-gradient(ellipse at 80% 80%, rgba(6,182,212,0.08) 0%, transparent 60%)',
        }}
      />

      <div className="relative z-10">
        <motion.div
          className="flex items-center justify-center gap-2 px-4 py-2.5 text-center text-xs font-body"
          style={{
            background: 'rgba(124,58,237,0.08)',
            borderBottom: '1px solid rgba(124,58,237,0.2)',
          }}
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <span className="text-text-caption">
            Designed &amp; built by{' '}
            <span className="text-text-heading font-semibold">Thanh Trang</span>
            , Product Manager
          </span>
          <span className="text-text-muted">·</span>
          <Link
            to="/resume"
            className="font-semibold underline underline-offset-2 transition-colors"
            style={{ color: '#A855F7' }}
          >
            View Résumé
          </Link>
        </motion.div>

        <section className="min-h-screen flex flex-col items-center justify-center px-4 pt-16 pb-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-4"
          >
            <span
              className="font-accent text-xs tracking-widest uppercase px-4 py-2 rounded-full"
              style={{
                background: 'rgba(124,58,237,0.15)',
                border: '1px solid rgba(124,58,237,0.4)',
                color: '#A855F7',
              }}
            >
              Discover Your Risk Archetype
            </span>
          </motion.div>

          <AnimatedTitle
            text="What's Your Scam Risk DNA?"
            className="text-4xl md:text-5xl lg:text-6xl font-black text-text-display tracking-wide leading-tight mb-6 max-w-3xl"
            delay={0.2}
          />

          <motion.ul
            className="space-y-3 mb-10 max-w-md text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            {BULLETS.map((bullet, i) => (
              <li key={i} className="flex items-start gap-3 text-text-body text-sm">
                <span
                  className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs mt-0.5"
                  style={{ background: 'rgba(124,58,237,0.3)', color: '#A855F7' }}
                >
                  ✓
                </span>
                {bullet}
              </li>
            ))}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <Link to="/quiz">
              <motion.button
                className="px-10 py-5 rounded-2xl font-accent font-bold text-base tracking-widest uppercase text-white min-h-[64px]"
                style={{
                  background: 'linear-gradient(135deg, #7C3AED 0%, #06B6D4 100%)',
                  boxShadow: '0 0 40px rgba(124,58,237,0.5), 0 0 80px rgba(124,58,237,0.2), 0 8px 32px rgba(124,58,237,0.4)',
                }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 0 60px rgba(124,58,237,0.6), 0 0 100px rgba(124,58,237,0.3), 0 8px 32px rgba(124,58,237,0.5)',
                }}
                whileTap={{ scale: 0.97 }}
                animate={{
                  boxShadow: [
                    '0 0 40px rgba(124,58,237,0.5), 0 8px 32px rgba(124,58,237,0.4)',
                    '0 0 60px rgba(124,58,237,0.7), 0 8px 32px rgba(124,58,237,0.5)',
                    '0 0 40px rgba(124,58,237,0.5), 0 8px 32px rgba(124,58,237,0.4)',
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              >
                🧬 Start Your Adventure
              </motion.button>
            </Link>
          </motion.div>

          <motion.p
            className="mt-4 text-text-muted text-xs"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
          >
            Free · 5 minutes · No sign-up required
          </motion.p>
        </section>

        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              className="font-display text-2xl md:text-3xl text-text-heading text-center mb-12 tracking-wide"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              How It Works
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {STEPS.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.5 }}
                >
                  <GlassCard className="text-center h-full">
                    <div className="text-4xl mb-4">{step.icon}</div>
                    <div
                      className="font-accent text-xs tracking-widest text-brand-secondary mb-2 uppercase"
                    >
                      Step {i + 1}
                    </div>
                    <h3 className="font-body font-bold text-text-heading text-lg mb-3">
                      {step.title}
                    </h3>
                    <p className="text-text-body text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              className="font-display text-2xl md:text-3xl text-text-heading text-center mb-4 tracking-wide"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              A Glimpse of the Archetypes
            </motion.h2>
            <motion.p
              className="text-text-caption text-center mb-12 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              16 unique personas across Fire, Water, Earth, and Air elements
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {SAMPLE_ARCHETYPES.map((arch, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={i === 2 ? 'opacity-50 blur-sm pointer-events-none select-none' : ''}
                >
                  <GlassCard className="h-full" whileHover={{ scale: 1.02, y: -4 }}>
                    <ElementBadge element={arch.element} size="sm" className="mb-3" />
                    <h3 className="font-display text-text-display font-bold text-lg mb-1 tracking-wide">
                      {arch.name}
                    </h3>
                    <p className="text-text-caption text-xs italic mb-2 leading-relaxed">
                      "{arch.tagline}"
                    </p>
                    <span
                      className="inline-block font-accent text-xs tracking-wider px-2 py-0.5 rounded-md"
                      style={{
                        background: 'var(--surface-subtle)',
                        border: '1px solid var(--border-subtle)',
                        color: 'var(--text-caption)',
                      }}
                    >
                      {arch.core_trait}
                    </span>
                  </GlassCard>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="text-center mt-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <Link to="/archetypes">
                <button
                  className="font-body text-sm px-6 py-3 rounded-xl"
                  style={{
                    background: 'rgba(124,58,237,0.15)',
                    border: '1px solid rgba(124,58,237,0.3)',
                    color: '#A855F7',
                  }}
                >
                  Browse All 16 Archetypes →
                </button>
              </Link>
            </motion.div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="max-w-2xl mx-auto">
            <motion.div
              className="flex flex-wrap justify-center gap-3 mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              {(['fire', 'water', 'earth', 'air'] as const).map((element) => (
                <ElementBadge key={element} element={element} size="lg" />
              ))}
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Link to="/quiz">
                <motion.button
                  className="px-10 py-5 rounded-2xl font-accent font-bold text-base tracking-widest uppercase text-white"
                  style={{
                    background: 'linear-gradient(135deg, #7C3AED 0%, #06B6D4 100%)',
                    boxShadow: '0 0 40px rgba(124,58,237,0.4)',
                  }}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Discover Your Archetype
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </section>

        <footer className="py-8 px-4 text-center border-t" style={{ borderColor: 'var(--border-divider)' }}>
          <p className="text-text-muted text-xs font-accent tracking-widest uppercase">
            Scam Risk DNA · Stay Safe · Know Your Risk
          </p>
        </footer>
      </div>
    </div>
  )
}
