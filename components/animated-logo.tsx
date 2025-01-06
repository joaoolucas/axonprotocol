'use client'

import { useEffect, useState } from 'react'

export default function AnimatedLogo() {
  const [rotation, setRotation] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => (prev + 1) % 360)
    }, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <svg
      viewBox="0 0 100 100"
      className="w-full h-full"
      style={{
        transform: `rotate(${rotation}deg)`,
        transition: 'transform 0.05s linear'
      }}
    >
      <g stroke="rgba(255,255,255,0.2)" strokeWidth="1" fill="none">
        <path d="M20,50 L80,20" />
        <path d="M20,50 L80,80" />
        <path d="M80,20 L80,80" />
      </g>
      <circle cx="50" cy="50" r="2" fill="white" />
    </svg>
  )
}

