import { motion } from 'framer-motion'
import { Link } from '@tanstack/react-router'

export function ResumePage() {
  return (
    <div className="min-h-screen bg-bg-shell flex flex-col">
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 20% 20%, rgba(124,58,237,0.12) 0%, transparent 60%)',
        }}
      />

      <div className="relative z-10 flex flex-col flex-1 px-4 py-8">
        <motion.div
          className="max-w-5xl mx-auto w-full flex flex-col flex-1"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <Link to="/">
              <button
                className="font-body text-sm px-4 py-2 rounded-xl"
                style={{
                  background: 'rgba(124,58,237,0.15)',
                  border: '1px solid rgba(124,58,237,0.3)',
                  color: '#A855F7',
                }}
              >
                ← Back
              </button>
            </Link>
            <div>
              <h1 className="font-display text-xl md:text-2xl text-text-display tracking-wide">
                Thanh Trang — Product Manager
              </h1>
              <p className="text-text-caption text-xs mt-0.5">
                Product vision · User research · Cross-functional execution
              </p>
            </div>
          </div>

          <div
            className="flex-1 rounded-2xl overflow-hidden"
            style={{
              border: '1px solid var(--glass-border)',
              background: 'var(--glass-bg)',
              minHeight: '80vh',
            }}
          >
            <iframe
              src="/resume.pdf"
              title="Thanh Trang — Product Manager Resume"
              className="w-full h-full"
              style={{ minHeight: '80vh', border: 'none' }}
            />
          </div>

          <p className="text-text-muted text-xs text-center mt-3 font-accent tracking-widest uppercase">
            Scam Risk DNA · Designed by Thanh Trang
          </p>
        </motion.div>
      </div>
    </div>
  )
}
