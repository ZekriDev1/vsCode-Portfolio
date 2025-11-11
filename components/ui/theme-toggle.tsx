'use client'

import { useTheme } from '@/components/providers/theme-provider'
import { Sun, Moon } from 'lucide-react'
import { motion } from 'framer-motion'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative p-2 rounded-md hover:bg-secondary transition-colors group"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{ 
          rotate: theme === 'dark' ? 0 : 180,
          scale: 1
        }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
        className="relative"
      >
        {theme === 'dark' ? (
          <Moon className="h-4 w-4 text-foreground group-hover:text-primary transition-colors" />
        ) : (
          <Sun className="h-4 w-4 text-foreground group-hover:text-primary transition-colors" />
        )}
      </motion.div>
      {/* Subtle glow on hover */}
      <motion.div
        className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 pointer-events-none"
        style={{
          boxShadow: `0 0 8px hsl(var(--neon-cyan) / 0.3)`,
        }}
        transition={{ duration: 0.2 }}
      />
    </motion.button>
  )
}
