import { motion } from 'framer-motion'
import { useThemeStore } from '@/store/themeStore'

export function ThemeToggle() {
  const { isDark, toggle } = useThemeStore()

  return (
    <motion.button
      onClick={toggle}
      className="fixed top-4 right-4 z-50 w-10 h-10 rounded-full flex items-center justify-center"
      style={{
        background: 'var(--glass-bg)',
        border: '1px solid var(--glass-border)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        color: 'var(--text-caption)',
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <motion.span
        key={isDark ? 'moon' : 'sun'}
        initial={{ rotate: -30, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        exit={{ rotate: 30, opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="text-lg leading-none"
      >
        {isDark ? '☀️' : '🌙'}
      </motion.span>
    </motion.button>
  )
}
