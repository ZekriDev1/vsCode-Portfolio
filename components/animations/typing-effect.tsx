'use client'

import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'

interface TypingEffectProps {
  text: string
  speed?: number
  className?: string
  showCursor?: boolean
}

export function TypingEffect({
  text,
  speed = 100,
  className = '',
  showCursor = true,
}: TypingEffectProps) {
  const [displayedText, setDisplayedText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [mounted, setMounted] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    // Reset when text changes
    setDisplayedText('')
    setCurrentIndex(0)
  }, [text, mounted])

  useEffect(() => {
    if (!mounted) return
    if (currentIndex < text.length) {
      timeoutRef.current = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, speed)

      return () => {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current)
        }
      }
    }
  }, [currentIndex, text, speed, mounted])

  // Render placeholder on server to avoid hydration mismatch
  if (!mounted) {
    return <span className={`font-mono ${className}`}>{text}</span>
  }

  return (
    <span className={`font-mono ${className}`}>
      {displayedText}
      {showCursor && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, ease: 'easeInOut' }}
          className="ml-1 text-primary"
        >
          |
        </motion.span>
      )}
    </span>
  )
}

