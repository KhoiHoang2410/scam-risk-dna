import type { Element } from '@/types/index'

export interface ElementColorTokens {
  core: string
  secondary: string
  glow: string
  bg: string
  gradient: string
  cardGradient: string
  textClass: string
  borderClass: string
  bgClass: string
  glowClass: string
  orbColors: [string, string, string]
}

const ELEMENT_COLORS: Record<Element, ElementColorTokens> = {
  fire: {
    core: '#FF4500',
    secondary: '#FF6B35',
    glow: '#FFAA00',
    bg: '#2A0D00',
    gradient: 'radial-gradient(ellipse at 30% 20%, #2A0D00 0%, #05050F 60%)',
    cardGradient: 'linear-gradient(135deg, #FF4500 0%, #CC2200 60%, #FF6B35 100%)',
    textClass: 'text-fire-core',
    borderClass: 'border-fire-core',
    bgClass: 'bg-fire-glow',
    glowClass: 'shadow-fire-core',
    orbColors: ['#FF4500', '#FF6B35', '#FFAA00'],
  },
  water: {
    core: '#0EA5E9',
    secondary: '#8B5CF6',
    glow: '#06B6D4',
    bg: '#020617',
    gradient: 'radial-gradient(ellipse at 70% 30%, #020617 0%, #05050F 60%)',
    cardGradient: 'linear-gradient(135deg, #0EA5E9 0%, #6366F1 60%, #8B5CF6 100%)',
    textClass: 'text-water-core',
    borderClass: 'border-water-core',
    bgClass: 'bg-water-glow',
    glowClass: 'shadow-water-core',
    orbColors: ['#0EA5E9', '#6366F1', '#8B5CF6'],
  },
  earth: {
    core: '#22C55E',
    secondary: '#84CC16',
    glow: '#4ADE80',
    bg: '#052E16',
    gradient: 'radial-gradient(ellipse at 50% 70%, #052E16 0%, #05050F 60%)',
    cardGradient: 'linear-gradient(135deg, #22C55E 0%, #84CC16 60%, #D97706 100%)',
    textClass: 'text-earth-core',
    borderClass: 'border-earth-core',
    bgClass: 'bg-earth-glow',
    glowClass: 'shadow-earth-core',
    orbColors: ['#22C55E', '#84CC16', '#D97706'],
  },
  air: {
    core: '#818CF8',
    secondary: '#C4B5FD',
    glow: '#A5B4FC',
    bg: '#0F0F1A',
    gradient: 'radial-gradient(ellipse at 60% 10%, #0F0F1A 0%, #05050F 60%)',
    cardGradient: 'linear-gradient(135deg, #E0E7FF 0%, #C4B5FD 60%, #BAE6FD 100%)',
    textClass: 'text-air-lavender',
    borderClass: 'border-air-lavender',
    bgClass: 'bg-air-glow',
    glowClass: 'shadow-air-lavender',
    orbColors: ['#E0E7FF', '#C4B5FD', '#BAE6FD'],
  },
}

export function getElementColors(element: Element): ElementColorTokens {
  return ELEMENT_COLORS[element]
}

export function getElementIcon(element: Element): string {
  const icons: Record<Element, string> = {
    fire: '🔥',
    water: '💧',
    earth: '🌱',
    air: '💨',
  }
  return icons[element]
}

export function getElementLabel(element: Element): string {
  return element.charAt(0).toUpperCase() + element.slice(1)
}

export function getDimensionColor(dimension: string): string {
  const colors: Record<string, string> = {
    SOC: '#0EA5E9',
    TRU: '#8B5CF6',
    DEC: '#FF4500',
    ACT: '#22C55E',
  }
  return colors[dimension] ?? '#7C3AED'
}

export function getDimensionGradient(dimension: string): string {
  const gradients: Record<string, string> = {
    SOC: 'var(--dim-soc-gradient)',
    TRU: 'var(--dim-tru-gradient)',
    DEC: 'var(--dim-dec-gradient)',
    ACT: 'var(--dim-act-gradient)',
  }
  return gradients[dimension] ?? 'var(--dim-default-gradient)'
}
