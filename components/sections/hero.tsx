'use client'

import { motion } from 'framer-motion'
import { FadeIn } from '@/components/animations/fade-in'
import { TypingEffect } from '@/components/animations/typing-effect'
import { Button, buttonVariants } from '@/components/ui/button'
import { Download, ExternalLink, Code2, FileCode, Zap } from 'lucide-react'
import Link from 'next/link'
import { TerminalWidget } from '@/components/ui/terminal-widget'
import { FloatingCodeSymbols } from '@/components/ui/floating-code-symbols'
import { cn } from '@/lib/utils'

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Floating code symbols */}
      <FloatingCodeSymbols />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main heading */}
          <FadeIn delay={0.2}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-mono font-bold mb-6">
              <span className="text-foreground">Hey, I&apos;m </span>
              <span className="text-primary">Akram Zekri</span>
              <span className="text-foreground"> 👋</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.4}>
            <p className="text-2xl md:text-3xl lg:text-4xl font-sans text-muted-foreground mb-8">
              A 16-year-old Developer from Morocco.
            </p>
          </FadeIn>

          {/* Typing effect subline */}
          <FadeIn delay={0.6}>
            <div className="text-xl md:text-2xl font-mono text-primary mb-12 min-h-[2rem]">
              <span className="text-muted-foreground">&gt; </span>
              <TypingEffect 
                text="I build apps, games, and web experiences." 
                speed={80}
              />
            </div>
          </FadeIn>

          {/* Buttons */}
          <FadeIn delay={0.8}>
            <div className="flex flex-wrap gap-4 mb-12">
              <Button 
                size="lg" 
                className="font-mono group"
                onClick={() => {
                  const projectsSection = document.getElementById('projects')
                  if (projectsSection) {
                    const offset = 80
                    const elementPosition = projectsSection.getBoundingClientRect().top
                    const offsetPosition = elementPosition + window.pageYOffset - offset
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: 'smooth',
                    })
                  }
                }}
              >
                <ExternalLink className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                View My Projects
              </Button>
              <Link
                href="/cv"
                className={cn(
                  buttonVariants({ variant: 'outline', size: 'lg' }),
                  'font-mono group'
                )}
              >
                <Download className="mr-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
                Download CV
              </Link>
            </div>
          </FadeIn>

          {/* Terminal widget */}
          <FadeIn delay={1.0}>
            <TerminalWidget />
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

