'use client'

import { useState, useEffect } from 'react'
import { Home, User, FolderKanban, Code, Mail, Briefcase } from 'lucide-react'
import { motion } from 'framer-motion'
import { usePathname, useRouter } from 'next/navigation'
import { cn } from '@/lib/utils'

interface NavItem {
  name: string
  icon: React.ElementType
  href: string
  sectionId?: string
}

const navItems: NavItem[] = [
  { name: 'Home', icon: Home, href: '/', sectionId: 'hero' },
  { name: 'About', icon: User, href: '#about', sectionId: 'about' },
  { name: 'Projects', icon: FolderKanban, href: '#projects', sectionId: 'projects' },
  { name: 'Skills', icon: Code, href: '#skills', sectionId: 'skills' },
  { name: 'Services', icon: Briefcase, href: '#services', sectionId: 'services' },
  { name: 'Contact', icon: Mail, href: '#contact', sectionId: 'contact' },
]

export function Sidebar() {
  const pathname = usePathname()
  const router = useRouter()
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [activeSection, setActiveSection] = useState<string>('')

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'projects', 'skills', 'services', 'contact']

      const current = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          // Check if section is in viewport with some threshold
          return rect.top <= 200 && rect.bottom >= 100
        }
        return false
      })

      if (current) {
        setActiveSection(`#${current}`)
      } else if (window.scrollY < 100) {
        setActiveSection('/')
      }
    }

    // Check on mount and on scroll
    const timeout = setTimeout(handleScroll, 100)
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll, { passive: true })

    return () => {
      clearTimeout(timeout)
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  const scrollToSection = (sectionId: string | undefined) => {
    if (!sectionId) return

    const findAndScroll = (attempts = 0) => {
      if (sectionId === 'hero') {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        })
        setActiveSection('/')
        if (pathname !== '/') {
          router.push('/')
        } else {
          window.history.pushState(null, '', '/')
        }
        return
      }

      const element = document.getElementById(sectionId)
      if (element) {
        const headerOffset = 100
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset

        window.scrollTo({
          top: Math.max(0, offsetPosition),
          behavior: 'smooth',
        })
        setActiveSection(`#${sectionId}`)
        window.history.pushState(null, '', `#${sectionId}`)
      } else if (attempts < 5) {
        // Retry if element not found (might still be loading)
        setTimeout(() => findAndScroll(attempts + 1), 100)
      } else {
        console.warn(`Section ${sectionId} not found after ${attempts} attempts`)
      }
    }

    findAndScroll()
  }

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>, item: NavItem) => {
    e.preventDefault()
    e.stopPropagation()

    // If we're not on the home page and clicking Home, navigate first
    if (item.href === '/' && pathname !== '/') {
      router.push('/')
      setTimeout(() => {
        scrollToSection(item.sectionId)
      }, 200)
      return
    }

    // Scroll to section
    scrollToSection(item.sectionId)
  }

  return (
    <aside className="w-16 bg-card border-r border-border flex flex-col items-center py-4 gap-2 flex-shrink-0">
      {navItems.map((item, index) => {
        const Icon = item.icon
        const isActive =
          item.href === '/'
            ? pathname === '/' && (activeSection === '/' || activeSection === '')
            : activeSection === item.href
        const isHovered = hoveredIndex === index

        return (
          <button
            key={item.href}
            onClick={(e) => handleClick(e, item)}
            className="relative group"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            aria-label={item.name}
          >
            <motion.div
              className={cn(
                'w-10 h-10 flex items-center justify-center rounded-md transition-colors relative',
                isActive
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
              )}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon className="h-5 w-5" />
              {/* Active indicator */}
              {isActive && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-primary rounded-r-full"
                  initial={false}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
              {/* Neon glow on hover */}
              {isHovered && !isActive && (
                <motion.div
                  className="absolute inset-0 rounded-md"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  style={{
                    boxShadow: '0 0 10px hsl(var(--neon-cyan) / 0.3)',
                  }}
                />
              )}
            </motion.div>
            {/* Tooltip */}
            <div className="absolute left-full ml-2 top-1/2 -translate-y-1/2 px-2 py-1 bg-card border border-border rounded text-xs font-mono opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap z-50 transition-opacity shadow-lg">
              {item.name}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 w-2 h-2 bg-card border-l border-b border-border rotate-45" />
            </div>
          </button>
        )
      })}
    </aside>
  )
}
