'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import LoadingScreen from '@/components/loading-screen'
import AppCanvas from '@/components/app-canvas'

export default function AppPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setIsLoading(false)
          return 100
        }
        return prev + 1
      })
    }, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen w-full bg-black">
      {isLoading ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="w-full h-screen flex items-center justify-center"
        >
          <LoadingScreen progress={progress} />
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="w-full h-screen"
        >
          <AppCanvas />
        </motion.div>
      )}
    </div>
  )
}

