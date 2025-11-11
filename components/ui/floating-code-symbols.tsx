'use client'

import { motion } from 'framer-motion'
import { Code2, FileCode, Zap } from 'lucide-react'

interface FloatingSymbol {
  icon: React.ElementType
  x: number
  y: number
  duration: number
  delay: number
  size: number
}

const symbols: FloatingSymbol[] = [
  { icon: Code2, x: 10, y: 20, duration: 20, delay: 0, size: 24 },
  { icon: FileCode, x: 80, y: 40, duration: 25, delay: 2, size: 28 },
  { icon: Zap, x: 50, y: 60, duration: 30, delay: 4, size: 20 },
  { icon: Code2, x: 20, y: 80, duration: 22, delay: 1, size: 26 },
  { icon: Code2, x: 90, y: 15, duration: 28, delay: 3, size: 22 },
  { icon: FileCode, x: 15, y: 70, duration: 24, delay: 5, size: 24 },
]

export function FloatingCodeSymbols() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-0">
      {symbols.map((symbol, index) => {
        const Icon = symbol.icon
        return (
          <motion.div
            key={index}
            className="absolute opacity-20 text-primary"
            style={{
              left: `${symbol.x}%`,
              top: `${symbol.y}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, 0],
              rotate: [0, 5, -5, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: symbol.duration,
              delay: symbol.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <Icon size={symbol.size} />
          </motion.div>
        )
      })}
      {/* HTML brackets */}
      {['<', '>', '{', '}', '[', ']'].map((char, index) => (
        <motion.div
          key={`bracket-${index}`}
          className="absolute font-mono text-primary opacity-10 text-2xl"
          style={{
            left: `${15 + index * 12}%`,
            top: `${30 + (index % 2) * 40}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.05, 0.2, 0.05],
          }}
          transition={{
            duration: 15 + index * 2,
            delay: index * 0.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {char}
        </motion.div>
      ))}
    </div>
  )
}

