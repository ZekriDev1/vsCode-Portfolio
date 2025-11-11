'use client'

import { useTheme } from '@/components/providers/theme-provider'
import { motion } from 'framer-motion'

export function Footer() {
  const { theme } = useTheme()

  return (
    <footer className="bg-card border-t border-border py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm font-mono">
          <div className="text-muted-foreground">
            © 2025 Akram Zekri — Made by Akram Zekri
          </div>
          <div className="flex items-center gap-4 text-muted-foreground">
            <a
              href="tel:+212691157363"
              className="hover:text-primary transition-colors"
            >
              +212 691 157 363
            </a>
            <span>Dark Mode:</span>
            <motion.span
              animate={{
                color: theme === 'dark' ? 'hsl(var(--primary))' : 'hsl(var(--muted-foreground))',
              }}
              className="font-semibold"
            >
              {theme === 'dark' ? 'ON' : 'OFF'}
            </motion.span>
          </div>
        </div>
      </div>
    </footer>
  )
}

