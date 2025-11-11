'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionReveal } from '@/components/animations/section-reveal'
import { Container } from '@/components/layout/container'

interface Skill {
  name: string
  category: string
  codeSnippet: string
  icon: string
}

const skills: Skill[] = [
  {
    name: 'Flutter / Dart',
    category: 'Mobile',
    codeSnippet: 'console.log("Building awesome UIs with Flutter 🚀")',
    icon: '📱',
  },
  {
    name: 'JavaScript / Node.js',
    category: 'Web',
    codeSnippet: 'const server = express(); // Building scalable APIs',
    icon: '⚡',
  },
  {
    name: 'HTML / CSS',
    category: 'Web',
    codeSnippet: '<div className="beautiful-ui">Modern Design</div>',
    icon: '🎨',
  },
  {
    name: 'Python',
    category: 'Backend',
    codeSnippet: 'def build_ai(): return "Intelligent solutions"',
    icon: '🐍',
  },
  {
    name: 'Java',
    category: 'Backend',
    codeSnippet: 'public class Solution { // Enterprise-grade code }',
    icon: '☕',
  },
  {
    name: 'Unity / C#',
    category: 'Game Dev',
    codeSnippet: 'void Start() { CreateGame(); } // Building immersive worlds',
    icon: '🎮',
  },
  {
    name: 'Supabase / Firebase',
    category: 'Database',
    codeSnippet: 'db.insert(user).then(() => "Data saved!")',
    icon: '🔥',
  },
  {
    name: 'Git / GitHub',
    category: 'Tools',
    codeSnippet: 'git commit -m "Shipping features" // Version control',
    icon: '📦',
  },
]

export function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null)

  return (
    <section id="skills" className="py-20 relative">
      <Container>
        <SectionReveal>
          <h2 className="text-4xl md:text-5xl font-mono font-bold text-primary mb-12 text-center">
            <span>{'//'} Skills &amp; Tools</span>
          </h2>
        </SectionReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="relative"
              onMouseEnter={() => setHoveredSkill(index)}
              onMouseLeave={() => setHoveredSkill(null)}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="glass-strong rounded-lg p-6 cursor-pointer h-full flex flex-col items-center justify-center text-center group relative overflow-hidden">
                {/* Glow effect on hover */}
                <motion.div
                  className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100"
                  style={{
                    boxShadow: '0 0 20px hsl(var(--neon-cyan) / 0.4)',
                  }}
                  transition={{ duration: 0.3 }}
                />
                
                <div className="text-4xl mb-3 relative z-10">{skill.icon}</div>
                <h3 className="font-mono font-semibold text-foreground mb-1 relative z-10">
                  {skill.name.split(' / ')[0]}
                </h3>
                {skill.name.includes(' / ') && (
                  <p className="text-xs text-muted-foreground relative z-10">
                    {skill.name.split(' / ')[1]}
                  </p>
                )}

                {/* Code snippet on hover */}
                <AnimatePresence>
                  {hoveredSkill === index && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute inset-0 glass-strong rounded-lg p-4 flex items-center justify-center z-20"
                    >
                      <code className="text-xs font-mono text-primary text-center px-2">
                        {skill.codeSnippet}
                      </code>
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

