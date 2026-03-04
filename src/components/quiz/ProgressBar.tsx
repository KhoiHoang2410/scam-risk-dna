import { motion } from 'framer-motion'

interface ProgressBarProps {
  current: number
  total: number
  className?: string
}

export function ProgressBar({ current, total, className = '' }: ProgressBarProps) {
  const percentage = (current / total) * 100
  const zeroPad = (n: number) => String(n).padStart(2, '0')

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{
            background: 'linear-gradient(to right, #7C3AED, #06B6D4)',
          }}
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
      </div>
      <span className="font-accent text-xs tracking-widest text-text-caption whitespace-nowrap">
        {zeroPad(current)} / {zeroPad(total)}
      </span>
    </div>
  )
}
