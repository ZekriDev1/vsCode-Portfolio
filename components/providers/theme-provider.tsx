'use client'

import { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'dark' | 'light'

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
  setTheme: (theme: Theme) => void
}

// Default context value to prevent errors during SSR
const defaultContextValue: ThemeContextType = {
  theme: 'dark',
  toggleTheme: () => {
    // No-op during SSR
  },
  setTheme: () => {
    // No-op during SSR
  },
}

const ThemeContext = createContext<ThemeContextType>(defaultContextValue)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Initialize with a safe default, will be updated in useEffect
  const [theme, setThemeState] = useState<Theme>('dark')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // This only runs on the client
    if (typeof window === 'undefined') return

    // Check localStorage or system preference
    const savedTheme = localStorage.getItem('theme') as Theme | null
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    const initialTheme = savedTheme || systemTheme
    
    // Set initial theme immediately on DOM
    const root = document.documentElement
    root.classList.remove('light', 'dark')
    root.classList.add(initialTheme)
    
    // Update state
    setThemeState(initialTheme)
    setMounted(true)
    
    // Save to localStorage if not already saved
    if (!savedTheme) {
      localStorage.setItem('theme', initialTheme)
    }
  }, [])

  const updateTheme = (newTheme: Theme) => {
    if (typeof window === 'undefined') return
    
    const root = document.documentElement
    if (newTheme === 'light') {
      root.classList.add('light')
      root.classList.remove('dark')
    } else {
      root.classList.add('dark')
      root.classList.remove('light')
    }
    localStorage.setItem('theme', newTheme)
  }

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme)
    updateTheme(newTheme)
  }

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
  }

  // Always provide the context, but use default values until mounted
  const contextValue = mounted
    ? { theme, toggleTheme, setTheme }
    : defaultContextValue

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  return context
}
