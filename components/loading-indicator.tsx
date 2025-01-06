'use client'

import { useEffect, useState } from 'react'

export default function LoadingIndicator() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) return 0
        return prev + 1
      })
    }, 100)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="mt-8 text-[rgba(255,255,255,0.3)] font-mono text-sm">
      {progress}%
    </div>
  )
}

