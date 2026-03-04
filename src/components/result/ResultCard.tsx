import { forwardRef } from 'react'
import type { Archetype } from '@/types/index'
import { getElementColors, getElementIcon, getElementLabel } from '@/utils/elementColors'

interface ResultCardProps {
  archetype: Archetype
  forExport?: boolean
  className?: string
}

export const ResultCard = forwardRef<HTMLDivElement, ResultCardProps>(
  ({ archetype, forExport = false, className = '' }, ref) => {
    const colors = getElementColors(archetype.element)
    const icon = getElementIcon(archetype.element)
    const elementLabel = getElementLabel(archetype.element)

    return (
      <div
        ref={ref}
        className={`relative overflow-hidden rounded-3xl ${className}`}
        style={{
          background: `linear-gradient(160deg, ${colors.bg} 0%, #05050F 40%, ${colors.bg} 100%)`,
          border: `1px solid ${colors.core}40`,
          boxShadow: `0 0 60px ${colors.core}30, 0 0 120px ${colors.core}10`,
          minHeight: forExport ? 600 : undefined,
          fontFamily: 'Inter, sans-serif',
        }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            background: `radial-gradient(ellipse at top right, ${colors.core} 0%, transparent 60%)`,
          }}
        />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            background: `radial-gradient(ellipse at bottom left, ${colors.secondary} 0%, transparent 60%)`,
          }}
        />

        <div className="relative z-10 p-6 md:p-8">
          <div className="flex items-center justify-between mb-6">
            <div
              className="flex items-center gap-2 px-3 py-1.5 rounded-full border"
              style={{
                color: colors.core,
                borderColor: `${colors.core}50`,
                background: `${colors.bg}`,
                boxShadow: `0 0 12px ${colors.core}30`,
                fontFamily: 'Orbitron, monospace',
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}
            >
              <span style={{ fontSize: 16 }}>{icon}</span>
              <span>{elementLabel} Element</span>
            </div>

            <div
              style={{
                fontFamily: 'Orbitron, monospace',
                fontSize: 10,
                color: '#475569',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}
            >
              Scam Risk DNA
            </div>
          </div>

          <div className="mb-4">
            <p
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 12,
                color: colors.core,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                fontWeight: 600,
                marginBottom: 8,
              }}
            >
              Your Archetype
            </p>
            <h2
              style={{
                fontFamily: '"Cinzel Decorative", serif',
                fontSize: 'clamp(24px, 5vw, 40px)',
                fontWeight: 900,
                color: '#FFFFFF',
                lineHeight: 1.2,
                marginBottom: 8,
              }}
            >
              {archetype.name}
            </h2>
            <p
              style={{
                fontFamily: '"Cinzel Decorative", serif',
                fontSize: 'clamp(14px, 2vw, 18px)',
                fontWeight: 400,
                color: colors.secondary,
                fontStyle: 'italic',
                lineHeight: 1.4,
              }}
            >
              "{archetype.tagline}"
            </p>
          </div>

          <div
            className="mb-5 px-3 py-2 rounded-xl"
            style={{
              background: `${colors.core}15`,
              border: `1px solid ${colors.core}30`,
            }}
          >
            <p
              style={{
                fontFamily: 'Orbitron, monospace',
                fontSize: 10,
                color: colors.core,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: 4,
              }}
            >
              Core Trait
            </p>
            <p
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 14,
                color: '#E2E8F0',
                fontWeight: 600,
              }}
            >
              {archetype.core_trait}
            </p>
          </div>

          <div className="mb-5">
            <p
              style={{
                fontFamily: 'Orbitron, monospace',
                fontSize: 10,
                color: '#94A3B8',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: 8,
              }}
            >
              Strengths
            </p>
            <div className="flex flex-wrap gap-2">
              {archetype.strengths.slice(0, 4).map((s, i) => (
                <span
                  key={i}
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: 12,
                    color: '#CBD5E1',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: 8,
                    padding: '3px 10px',
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div
            className="mb-5 rounded-xl overflow-hidden"
            style={{
              border: `1px solid #DC262640`,
              background: 'rgba(220,38,38,0.08)',
            }}
          >
            <div
              className="px-3 py-1.5"
              style={{
                background: 'rgba(220,38,38,0.2)',
                borderBottom: '1px solid rgba(220,38,38,0.3)',
              }}
            >
              <p
                style={{
                  fontFamily: 'Orbitron, monospace',
                  fontSize: 10,
                  color: '#EF4444',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  fontWeight: 700,
                }}
              >
                ⚠ Primary Vulnerability
              </p>
            </div>
            <div className="px-3 py-2">
              <p
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: 13,
                  color: '#FCA5A5',
                  fontWeight: 600,
                }}
              >
                {archetype.primary_scam}
              </p>
            </div>
          </div>

          {!forExport && archetype.compatible_types.length > 0 && (
            <div className="mb-4">
              <p
                style={{
                  fontFamily: 'Orbitron, monospace',
                  fontSize: 10,
                  color: '#94A3B8',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  marginBottom: 8,
                }}
              >
                Allies
              </p>
              <div className="flex gap-2 flex-wrap">
                {archetype.compatible_types.slice(0, 3).map((type, i) => (
                  <span
                    key={i}
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: 11,
                      color: colors.core,
                      background: `${colors.core}15`,
                      border: `1px solid ${colors.core}30`,
                      borderRadius: 6,
                      padding: '2px 8px',
                    }}
                  >
                    {type}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div
            className="mt-6 pt-4"
            style={{
              borderTop: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            <p
              style={{
                fontFamily: 'Orbitron, monospace',
                fontSize: 9,
                color: '#475569',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                textAlign: 'center',
              }}
            >
              scam-risk-dna.app · Know Your Risk · Stay Safe
            </p>
          </div>
        </div>
      </div>
    )
  }
)

ResultCard.displayName = 'ResultCard'
