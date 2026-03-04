import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  color: string
  size: number
  rotation: number
  rotationSpeed: number
  opacity: number
  shape: 'rect' | 'circle'
}

interface ConfettiBlastProps {
  active?: boolean
  duration?: number
}

const COLORS = [
  '#FF4500', '#FF6B35', '#FFAA00',
  '#0EA5E9', '#06B6D4', '#8B5CF6',
  '#22C55E', '#84CC16', '#F59E0B',
  '#7C3AED', '#E0E7FF', '#C4B5FD',
]

export function ConfettiBlast({ active = true, duration = 4000 }: ConfettiBlastProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const animationRef = useRef<number>(0)
  const startTimeRef = useRef<number>(0)

  useEffect(() => {
    if (!active) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const spawnCount = 150
    const particles: Particle[] = []

    for (let i = 0; i < spawnCount; i++) {
      const side = Math.random() > 0.5 ? 0.2 : 0.8
      particles.push({
        x: canvas.width * side + (Math.random() - 0.5) * 100,
        y: -10,
        vx: (Math.random() - 0.5) * 8,
        vy: Math.random() * 4 + 2,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        size: Math.random() * 8 + 4,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 10,
        opacity: 1,
        shape: Math.random() > 0.5 ? 'rect' : 'circle',
      })
    }

    particlesRef.current = particles
    startTimeRef.current = Date.now()

    const animate = () => {
      if (!canvas || !ctx) return

      const elapsed = Date.now() - startTimeRef.current
      if (elapsed > duration) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        return
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particlesRef.current = particlesRef.current.filter((p) => {
        p.x += p.vx
        p.y += p.vy
        p.vy += 0.1
        p.rotation += p.rotationSpeed
        p.opacity = Math.max(0, 1 - elapsed / duration)

        if (p.y > canvas.height || p.opacity <= 0) return false

        ctx.save()
        ctx.globalAlpha = p.opacity
        ctx.translate(p.x, p.y)
        ctx.rotate((p.rotation * Math.PI) / 180)
        ctx.fillStyle = p.color

        if (p.shape === 'rect') {
          ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2)
        } else {
          ctx.beginPath()
          ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2)
          ctx.fill()
        }

        ctx.restore()
        return true
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationRef.current)
      window.removeEventListener('resize', resize)
    }
  }, [active, duration])

  if (!active) return null

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50"
      aria-hidden="true"
    />
  )
}
