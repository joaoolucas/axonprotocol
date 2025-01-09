'use client'

import { motion } from 'framer-motion'
import { Twitter } from 'lucide-react'
import AnimatedBackground from './animated-background'
import { SOCIAL_LINKS, SITE_CONFIG } from '@/lib/constants'

export default function MainContent() {
  return (
    <div className="min-h-screen w-full bg-black text-white flex flex-col items-center justify-center p-4 relative">
      <AnimatedBackground />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl w-full space-y-16 text-center relative z-10"
      >
        <div className="space-y-4">
          <h1 className="text-6xl md:text-7xl font-bold tracking-wider relative inline-block">
            Nexar Node
            <div className="absolute bottom-0 left-0 w-full h-px bg-white/20"></div>
          </h1>
          <p className="text-lg font-mono text-gray-400">
            AI-powered geometric art generation
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="p-6 rounded-lg bg-gradient-to-br from-green-900/20 to-transparent border border-green-900/20">
            <div className="flex items-center gap-2 font-mono mb-2">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              AI Core
            </div>
          </div>
          <div className="p-6 rounded-lg bg-gradient-to-br from-blue-900/20 to-transparent border border-blue-900/20">
            <div className="flex items-center gap-2 font-mono mb-2">
              <div className="w-2 h-2 rounded-full bg-blue-500"></div>
              Geometric Engine
            </div>
          </div>
          <div className="p-6 rounded-lg bg-gradient-to-br from-purple-900/20 to-transparent border border-purple-900/20">
            <div className="flex items-center gap-2 font-mono mb-2">
              <div className="w-2 h-2 rounded-full bg-purple-500"></div>
              Pattern Recognition
            </div>
          </div>
        </div>

        <div className="font-mono text-gray-400 max-w-3xl mx-auto">
          An autonomous system that creates mathematical art in real-time, transforming
          complex geometric formulas into visual compositions.
        </div>

        <div className="flex items-center justify-center space-x-4">
          <button className="px-6 py-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors font-mono text-white">
            CA: soon
          </button>
          <a
            href={SOCIAL_LINKS.TWITTER}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
          >
            <Twitter className="w-5 h-5" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 text-center font-mono text-sm">
          <div className="space-y-2">
            <h3 className="text-white">Autonomous Formula Creation</h3>
            <p className="text-gray-500 text-xs">
              Independently develops geometric formulas based on mathematical principles
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-white">Real-time Visualization</h3>
            <p className="text-gray-500 text-xs">
              Watch calculations and geometric constructions unfold in real-time
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-white">Pattern Recognition</h3>
            <p className="text-gray-500 text-xs">
              Self-evolving system that learns and adapts its artistic approach
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-white">Mathematical Proofs</h3>
            <p className="text-gray-500 text-xs">
              Generates mathematical proofs for each artwork it creates
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-white">Live Construction</h3>
            <p className="text-gray-500 text-xs">
              Displays the step-by-step construction process of each piece
            </p>
          </div>
        </div>

        <div className="text-gray-500 font-mono text-sm">
          Nexar Node v1.0.0 • 2024
        </div>
      </motion.div>
    </div>
  )
}

