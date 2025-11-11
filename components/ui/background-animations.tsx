'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

interface MatrixChar {
  char: string
  duration: number
  delay: number
  left: number
}

export function BackgroundAnimations() {
  const [mounted, setMounted] = useState(false)
  const [matrixChars, setMatrixChars] = useState<MatrixChar[]>([])

  // Floating code lines
  const codeLines = [
    'const developer = "Akram Zekri";',
    'function build() { return "awesome"; }',
    'console.log("Hello, World!");',
    '<div className="portfolio">',
    'export default Portfolio;',
  ]

  // Generate matrix characters only on client side
  useEffect(() => {
    setMounted(true)
    // Generate random characters and values only on client
    const chars: MatrixChar[] = Array.from({ length: 20 }).map((_, i) => ({
      char: String.fromCharCode(0x30a0 + Math.floor(Math.random() * 96)),
      duration: 10 + Math.random() * 10,
      delay: Math.random() * 5,
      left: (i * 5) % 100,
    }))
    setMatrixChars(chars)
  }, [])

  // Don't render on server to avoid hydration mismatch
  if (!mounted) {
    return null
  }

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-0 opacity-5">
      {/* Floating code lines */}
      {codeLines.map((line, index) => (
        <motion.div
          key={index}
          className="absolute font-mono text-xs text-primary whitespace-nowrap"
          style={{
            left: `${(index * 20) % 100}%`,
            top: `${(index * 15) % 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 20 + index * 2,
            delay: index * 2,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {line}
        </motion.div>
      ))}

      {/* Matrix rain effect - only render after mount */}
      {matrixChars.map((charData, i) => (
        <motion.div
          key={`matrix-${i}`}
          className="absolute font-mono text-xs text-primary"
          style={{
            left: `${charData.left}%`,
            top: '-10%',
          }}
          animate={{
            y: ['0vh', '110vh'],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: charData.duration,
            delay: charData.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {charData.char}
        </motion.div>
      ))}
    </div>
  )
}
