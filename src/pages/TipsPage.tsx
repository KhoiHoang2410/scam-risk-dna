import { motion } from 'framer-motion'
import { Link } from '@tanstack/react-router'
import { GlassCard } from '@/components/ui/GlassCard'
import { ElementBadge } from '@/components/ui/ElementBadge'

const GENERAL_TIPS = [
  {
    icon: '🔒',
    category: 'Verification',
    title: 'Always verify independently',
    body: 'If someone asks for money or personal data, hang up and call the organization back using a number from their official website — never the number they gave you.',
  },
  {
    icon: '⏱️',
    category: 'Urgency',
    title: 'Urgency is a red flag',
    body: 'Scammers create artificial time pressure. Any offer that "expires in 10 minutes" or demands "immediate action" is almost certainly a scam.',
  },
  {
    icon: '🧠',
    category: 'Emotional Control',
    title: 'Pause before you act',
    body: 'Strong emotions (fear, excitement, sympathy) impair judgment. When you feel a strong emotional pull during a financial interaction, treat it as a warning signal.',
  },
  {
    icon: '💳',
    category: 'Payment Methods',
    title: 'Unusual payment = scam',
    body: 'Gift cards, cryptocurrency, wire transfers, and money orders are untraceable and unrecoverable. No legitimate organization will ask for these.',
  },
  {
    icon: '🔗',
    category: 'Digital Safety',
    title: 'Check URLs carefully',
    body: 'Phishing sites mimic real ones with slight URL variations (g00gle.com, paypa1.com). Always check the full domain before entering any credentials.',
  },
  {
    icon: '👥',
    category: 'Social Proof',
    title: 'Consult before committing',
    body: 'Before any large financial decision, tell a trusted friend or family member. Scammers isolate victims — a second opinion breaks the spell.',
  },
  {
    icon: '📱',
    category: 'Phone Safety',
    title: 'Caller ID can be faked',
    body: 'Technology allows scammers to display any phone number, including your bank\'s real number. Never trust caller ID alone for sensitive decisions.',
  },
  {
    icon: '🎁',
    category: 'Offers',
    title: 'If it\'s too good, it\'s not true',
    body: 'Unexpected prizes, investment returns over 15% annually, or "risk-free" opportunities are universal scam markers. Walk away.',
  },
]

const ELEMENT_SCAM_MAP = [
  {
    element: 'fire' as const,
    scams: ['Investment scams', 'Crypto schemes', 'Flash sale fraud'],
    tip: 'Slow down. One hour of research saves years of regret.',
  },
  {
    element: 'water' as const,
    scams: ['Romance scams', 'Charity fraud', 'Family emergency scams'],
    tip: 'Verify identities before sending money, even to "family."',
  },
  {
    element: 'earth' as const,
    scams: ['Work-from-home scams', 'Prize fraud', 'Business opportunity fraud'],
    tip: 'Legitimate opportunities never require upfront payment.',
  },
  {
    element: 'air' as const,
    scams: ['Government impersonation', 'Tech support scams', 'Authority fraud'],
    tip: 'Real authorities never demand immediate payment or secrecy.',
  },
]

export function TipsPage() {
  return (
    <div className="min-h-screen bg-bg-shell">
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 0%, rgba(124,58,237,0.08) 0%, transparent 50%)',
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
            Universal Safety Guide
          </h1>
          <p className="text-text-body text-sm max-w-xl mx-auto">
            Scam tactics are evolving, but human vulnerabilities remain constant. These principles protect every archetype.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {GENERAL_TIPS.map((tip, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.07, duration: 0.4 }}
            >
              <GlassCard className="h-full" whileHover={{ scale: 1.01, y: -2 }}>
                <div className="flex items-start gap-4">
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                    style={{ background: 'rgba(124,58,237,0.15)', border: '1px solid rgba(124,58,237,0.3)' }}
                  >
                    {tip.icon}
                  </div>
                  <div className="flex-1">
                    <p className="font-accent text-xs tracking-widest uppercase text-brand-secondary mb-1">
                      {tip.category}
                    </p>
                    <h3 className="font-body font-bold text-text-heading text-base mb-2">
                      {tip.title}
                    </h3>
                    <p className="text-text-body text-sm leading-relaxed">
                      {tip.body}
                    </p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="font-display text-2xl text-text-heading mb-2 tracking-wide text-center">
            Element-Specific Vulnerabilities
          </h2>
          <p className="text-text-caption text-sm text-center mb-8">
            Each element carries unique scam risks
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {ELEMENT_SCAM_MAP.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + i * 0.1, duration: 0.4 }}
              >
                <GlassCard>
                  <ElementBadge element={item.element} size="md" className="mb-4" />
                  <div className="space-y-2 mb-4">
                    {item.scams.map((scam, j) => (
                      <div
                        key={j}
                        className="flex items-center gap-2 text-text-body text-sm"
                      >
                        <span className="text-semantic-danger text-xs">⚠</span>
                        <span>{scam}</span>
                      </div>
                    ))}
                  </div>
                  <div
                    className="rounded-xl px-3 py-2 text-sm"
                    style={{
                      background: 'rgba(16,185,129,0.08)',
                      border: '1px solid rgba(16,185,129,0.2)',
                      color: '#10B981',
                    }}
                  >
                    💡 {item.tip}
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <GlassCard className="text-center">
            <p className="font-display text-text-heading text-xl mb-2 tracking-wide">
              Know your specific vulnerabilities
            </p>
            <p className="text-text-body text-sm mb-4">
              Take the quiz to get tips personalized to your exact risk archetype.
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
          </GlassCard>
        </motion.div>

        <div className="text-center mt-12 pb-8">
          <p className="text-text-muted text-xs font-accent tracking-widest uppercase">
            Scam Risk DNA · Know Your Risk · Stay Safe
          </p>
        </div>
      </div>
    </div>
  )
}
