import type { Element } from '@/types/index'
import { getElementColors, getElementIcon, getElementLabel } from '@/utils/elementColors'

interface ElementBadgeProps {
  element: Element
  size?: 'sm' | 'md' | 'lg'
  showLabel?: boolean
  className?: string
}

export function ElementBadge({
  element,
  size = 'md',
  showLabel = true,
  className = '',
}: ElementBadgeProps) {
  const colors = getElementColors(element)
  const icon = getElementIcon(element)
  const label = getElementLabel(element)

  const sizeClasses = {
    sm: 'text-xs px-2 py-0.5 gap-1',
    md: 'text-sm px-3 py-1 gap-1.5',
    lg: 'text-base px-4 py-2 gap-2',
  }

  const iconSizes = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-xl',
  }

  return (
    <span
      className={`
        inline-flex items-center rounded-full font-accent font-bold tracking-widest uppercase
        border ${sizeClasses[size]} ${className}
      `}
      style={{
        color: colors.core,
        borderColor: `${colors.core}50`,
        backgroundColor: `${colors.bg}`,
        boxShadow: `0 0 12px ${colors.core}30`,
      }}
    >
      <span className={iconSizes[size]}>{icon}</span>
      {showLabel && <span>{label}</span>}
    </span>
  )
}
