'use client'

import { useEffect, useState } from 'react'
import { useTheme } from '@/components/providers/theme-provider'

// Konami code: ↑ ↑ ↓ ↓ ← → ← → B A
const KONAMI_CODE = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'KeyB',
  'KeyA',
]

export function EasterEgg() {
  const [input, setInput] = useState<string[]>([])
  const [isActivated, setIsActivated] = useState(false)
  const { setTheme } = useTheme()

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const newInput = [...input, event.code].slice(-KONAMI_CODE.length)
      setInput(newInput)

      if (newInput.length === KONAMI_CODE.length) {
        const isMatch = newInput.every(
          (key, index) => key === KONAMI_CODE[index]
        )

        if (isMatch) {
          setIsActivated(true)
          // Activate secret theme or effect
          document.documentElement.classList.add('easter-egg-active')
          
          // Optional: Cycle through themes
          const themes = ['dark', 'light'] as const
          const currentTheme = document.documentElement.classList.contains('light') ? 'light' : 'dark'
          const nextTheme = themes.find(t => t !== currentTheme) || 'dark'
          setTheme(nextTheme)

          // Reset after 5 seconds
          setTimeout(() => {
            setIsActivated(false)
            document.documentElement.classList.remove('easter-egg-active')
          }, 5000)

          setInput([])
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [input, setTheme])

  return null
}

