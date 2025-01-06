'use client'

import { useEffect, useRef } from 'react'

interface Point {
  x: number
  y: number
  vx: number
  vy: number
}

interface Line {
  start: Point
  end: Point
}

export default function AppCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const pointsRef = useRef<Point[]>([])
  const mouseRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size with proper scaling
    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      ctx.scale(dpr, dpr)
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
    }

    // Initialize points
    const initPoints = () => {
      pointsRef.current = Array.from({ length: 50 }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2
      }))
    }

    // Update point positions
    const updatePoints = () => {
      pointsRef.current.forEach(point => {
        point.x += point.vx
        point.y += point.vy

        // Bounce off walls
        if (point.x < 0 || point.x > window.innerWidth) point.vx *= -1
        if (point.y < 0 || point.y > window.innerHeight) point.vy *= -1

        // Attract to mouse
        const dx = mouseRef.current.x - point.x
        const dy = mouseRef.current.y - point.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 200) {
          point.vx += (dx / dist) * 0.1
          point.vy += (dy / dist) * 0.1
        }

        // Limit velocity
        const speed = Math.sqrt(point.vx * point.vx + point.vy * point.vy)
        if (speed > 2) {
          point.vx = (point.vx / speed) * 2
          point.vy = (point.vy / speed) * 2
        }
      })
    }

    // Find connections between points
    const getConnections = (): Line[] => {
      const lines: Line[] = []
      const points = pointsRef.current

      points.forEach((p1, i) => {
        points.slice(i + 1).forEach(p2 => {
          const dist = Math.sqrt(
            Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2)
          )
          if (dist < 150) {
            lines.push({ start: p1, end: p2 })
          }
        })
      })

      return lines
    }

    // Render frame
    const render = () => {
      ctx.fillStyle = 'black'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      updatePoints()
      const connections = getConnections()

      // Draw lines
      connections.forEach(({ start, end }) => {
        const dist = Math.sqrt(
          Math.pow(end.x - start.x, 2) + Math.pow(end.y - start.y, 2)
        )
        const opacity = 1 - dist / 150

        ctx.beginPath()
        ctx.moveTo(start.x, start.y)
        ctx.lineTo(end.x, end.y)
        ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.2})`
        ctx.lineWidth = 1
        ctx.stroke()
      })

      // Draw points
      pointsRef.current.forEach(point => {
        ctx.beginPath()
        ctx.arc(point.x, point.y, 2, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(255, 255, 255, 0.5)'
        ctx.fill()
      })

      requestAnimationFrame(render)
    }

    // Event listeners
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY
      }
    }

    // Initialize
    resizeCanvas()
    initPoints()
    window.addEventListener('resize', resizeCanvas)
    window.addEventListener('mousemove', handleMouseMove)
    render()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
    />
  )
}

