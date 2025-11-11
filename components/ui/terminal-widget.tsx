'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export function TerminalWidget() {
  const [showPrompt, setShowPrompt] = useState(false)
  const [showResponse, setShowResponse] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const timer1 = setTimeout(() => setShowPrompt(true), 1200)
    const timer2 = setTimeout(() => setShowResponse(true), 2000)
    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
    }
  }, [])

  return (
    <div className="glass-strong rounded-lg p-6 font-mono text-sm max-w-2xl">
      <div className="flex items-center gap-2 mb-4">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <span className="text-xs text-muted-foreground ml-2">terminal</span>
      </div>
      <div className="space-y-2">
        {mounted && showPrompt && (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <span className="text-primary">$</span>
            <span className="text-foreground">whoami</span>
          </motion.div>
        )}
        {mounted && showResponse && (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-2 ml-4"
          >
            <span className="text-green-500">&gt;</span>
            <span className="text-foreground">
              Akram Zekri — Full-Stack Developer
            </span>
          </motion.div>
        )}
      </div>
      <div className="mt-4 flex items-center gap-2">
        <motion.div
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 1, repeat: Infinity }}
          className="w-2 h-4 bg-primary"
        />
      </div>
    </div>
  )
}

