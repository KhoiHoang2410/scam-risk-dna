import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import type { Archetype } from '@/types/index'
import { shareResultCard, copyLinkToClipboard } from '@/utils/shareCard'

interface ShareButtonProps {
  archetype: Archetype
  cardRef: React.RefObject<HTMLDivElement>
}

type ShareStatus = 'idle' | 'capturing' | 'sharing' | 'copied' | 'error'

export function ShareButton({ archetype, cardRef }: ShareButtonProps) {
  const [status, setStatus] = useState<ShareStatus>('idle')
  const [copyStatus, setCopyStatus] = useState<'idle' | 'copied'>('idle')
  const toastRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const shareUrl = `${window.location.origin}/results/${archetype.slug}`

  const handleShare = async () => {
    if (!cardRef.current || status === 'capturing' || status === 'sharing') return

    try {
      setStatus('capturing')
      await new Promise((resolve) => setTimeout(resolve, 100))
      setStatus('sharing')
      await shareResultCard(cardRef.current, archetype.name, shareUrl, {
        filename: `scam-risk-dna-${archetype.slug}.png`,
        scale: 2,
      })
      setStatus('idle')
    } catch {
      setStatus('error')
      if (toastRef.current) clearTimeout(toastRef.current)
      toastRef.current = setTimeout(() => setStatus('idle'), 3000)
    }
  }

  const handleCopyLink = async () => {
    try {
      await copyLinkToClipboard(shareUrl)
      setCopyStatus('copied')
      setTimeout(() => setCopyStatus('idle'), 2000)
    } catch (_e) {
      // clipboard not available
    }
  }

  const isLoading = status === 'capturing' || status === 'sharing'

  const label =
    status === 'capturing'
      ? 'Preparing...'
      : status === 'sharing'
      ? 'Opening share...'
      : status === 'error'
      ? 'Try again'
      : 'Share Your DNA'

  return (
    <div className="flex flex-col sm:flex-row gap-3">
      <motion.button
        className="flex-1 flex items-center justify-center gap-3 px-6 py-4 rounded-2xl font-accent font-bold text-sm tracking-widest uppercase min-h-[56px]"
        style={{
          background: isLoading
            ? 'rgba(124,58,237,0.4)'
            : 'linear-gradient(135deg, #7C3AED 0%, #06B6D4 100%)',
          color: '#FFFFFF',
          boxShadow: isLoading
            ? 'none'
            : '0 0 30px rgba(124,58,237,0.4), 0 4px 20px rgba(124,58,237,0.3)',
          cursor: isLoading ? 'not-allowed' : 'pointer',
        }}
        whileHover={!isLoading ? { scale: 1.02, y: -2 } : undefined}
        whileTap={!isLoading ? { scale: 0.98 } : undefined}
        onClick={handleShare}
        disabled={isLoading}
      >
        {isLoading ? (
          <motion.div
            className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          />
        ) : (
          <span className="text-lg">🧬</span>
        )}
        <span>{label}</span>
      </motion.button>

      <motion.button
        className="flex items-center justify-center gap-2 px-6 py-4 rounded-2xl font-body font-semibold text-sm min-h-[56px]"
        style={{
          background: 'rgba(255,255,255,0.05)',
          border: '1px solid rgba(255,255,255,0.15)',
          color: copyStatus === 'copied' ? '#10B981' : '#CBD5E1',
          cursor: 'pointer',
        }}
        whileHover={{ scale: 1.02, y: -2 }}
        whileTap={{ scale: 0.98 }}
        onClick={handleCopyLink}
      >
        <span>{copyStatus === 'copied' ? '✓' : '🔗'}</span>
        <span>{copyStatus === 'copied' ? 'Link Copied!' : 'Copy Link'}</span>
      </motion.button>
    </div>
  )
}
