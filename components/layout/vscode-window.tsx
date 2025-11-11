'use client'

import { ReactNode } from 'react'
import { Sidebar } from './sidebar'
import { TopBar } from './top-bar'

interface VSCodeWindowProps {
  children: ReactNode
}

export function VSCodeWindow({ children }: VSCodeWindowProps) {
  return (
    <div className="flex flex-col h-screen overflow-hidden bg-background">
      <TopBar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-y-auto relative">
          {/* Blurred background with neon accents */}
          <div className="fixed inset-0 bg-neon-gradient opacity-30 pointer-events-none -z-10 blur-3xl" />
          <div className="absolute inset-0 bg-background/50 backdrop-blur-sm pointer-events-none -z-10" />
          <div className="relative z-10">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}

