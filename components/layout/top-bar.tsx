'use client'

import { ThemeToggle } from '@/components/ui/theme-toggle'
import { Minimize2, Maximize2, X } from 'lucide-react'
import { motion } from 'framer-motion'

export function TopBar() {
  return (
    <div className="h-8 bg-card border-b border-border flex items-center justify-between px-4 flex-shrink-0">
      <div className="flex items-center gap-2 flex-1">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <div className="flex-1 flex items-center justify-center">
          <span className="text-xs font-mono text-muted-foreground">
            Portfolio — Akram.Zekri
          </span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <ThemeToggle />
        <div className="flex items-center gap-1">
          <button className="p-1 hover:bg-secondary rounded transition-colors">
            <Minimize2 className="h-3 w-3 text-muted-foreground" />
          </button>
          <button className="p-1 hover:bg-secondary rounded transition-colors">
            <Maximize2 className="h-3 w-3 text-muted-foreground" />
          </button>
          <button className="p-1 hover:bg-red-500/20 rounded transition-colors">
            <X className="h-3 w-3 text-muted-foreground" />
          </button>
        </div>
      </div>
    </div>
  )
}

