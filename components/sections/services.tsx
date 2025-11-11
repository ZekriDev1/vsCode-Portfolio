'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionReveal } from '@/components/animations/section-reveal'
import { Container } from '@/components/layout/container'

interface Service {
  id: string
  title: string
  icon: string
  description: string
  codeSnippet: string
  stack: string[]
}

const services: Service[] = [
  {
    id: 'app-dev',
    title: 'App Development',
    icon: '💻',
    description: 'Building cross-platform mobile apps with Flutter, Supabase, and Firebase.',
    codeSnippet: `flutter create awesome_app
// Building beautiful, fast mobile experiences
// With Supabase backend integration`,
    stack: ['Flutter', 'Supabase', 'Firebase'],
  },
  {
    id: 'web-design',
    title: 'Web Design',
    icon: '🌐',
    description: 'Creating modern, fast, and responsive web experiences.',
    codeSnippet: `const Website = () => (
  <ModernDesign />
);
// Fast, responsive, beautiful`,
    stack: ['Next.js', 'React', 'Tailwind'],
  },
  {
    id: 'ai-automation',
    title: 'AI & Automation',
    icon: '🧠',
    description: 'Building intelligent solutions with Node.js, JavaScript, and APIs.',
    codeSnippet: `const AI = async () => {
  return await automate();
};
// Smart solutions for efficiency`,
    stack: ['Node.js', 'JavaScript', 'APIs'],
  },
  {
    id: 'game-dev',
    title: 'Game Development',
    icon: '🎮',
    description: 'Creating immersive 2D games with Unity.',
    codeSnippet: `void Start() {
  CreateGame();
}
// Building engaging game experiences`,
    stack: ['Unity', 'C#'],
  },
]

export function Services() {
  const [expandedService, setExpandedService] = useState<string | null>(null)

  return (
    <section id="services" className="py-20 relative">
      <Container>
        <SectionReveal>
          <h2 className="text-4xl md:text-5xl font-mono font-bold text-primary mb-12 text-center">
            <span>{'//'} Services</span>
          </h2>
        </SectionReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="glass-strong rounded-lg overflow-hidden cursor-pointer"
              onClick={() =>
                setExpandedService(
                  expandedService === service.id ? null : service.id
                )
              }
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              {/* Service header - like VS Code file tab */}
              <div className="bg-card border-b border-border px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{service.icon}</span>
                  <h3 className="font-mono font-semibold text-foreground">
                    {service.title}
                  </h3>
                </div>
                <span className="text-xs text-muted-foreground font-mono">
                  {service.stack.join(', ')}
                </span>
              </div>

              {/* Service content */}
              <div className="p-6">
                <p className="text-muted-foreground mb-4 font-sans">
                  {service.description}
                </p>

                <AnimatePresence>
                  {expandedService === service.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="bg-background/50 rounded p-4 font-mono text-sm border border-border/50">
                        <pre className="text-foreground whitespace-pre-wrap">
                          <code>{service.codeSnippet}</code>
                        </pre>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}

