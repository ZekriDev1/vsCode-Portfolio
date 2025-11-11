'use client'

import { motion } from 'framer-motion'
import { SectionReveal } from '@/components/animations/section-reveal'
import { Container } from '@/components/layout/container'

export function About() {
  const codeSnippet = `const AkramZekri = {
  age: 17,
  country: "Morocco 🇲🇦",
  studentAt: "Groupe Scolaire Les Lumières",
  founderOf: "Déplace Toi",
  stack: ["Flutter", "Node.js", "Supabase", "Unity", "AI"],
  goal: "Build the future of tech in Morocco"
}`

  return (
    <section id="about" className="py-20 relative">
      <Container>
        <SectionReveal>
          <h2 className="text-4xl md:text-5xl font-mono font-bold text-primary mb-12 text-center">
            <span>{'//'} About Me</span>
          </h2>
        </SectionReveal>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Code Editor Pane */}
          <SectionReveal>
            <div className="glass-strong rounded-lg overflow-hidden">
              {/* Code editor header */}
              <div className="bg-card border-b border-border px-4 py-2 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <span className="text-xs text-muted-foreground ml-2 font-mono">
                  akram.js
                </span>
              </div>
              {/* Code content */}
              <div className="p-6 font-mono text-sm overflow-x-auto bg-background/30">
                <pre className="text-foreground">
                  <code className="text-xs md:text-sm">
                    {codeSnippet.split('\n').map((line, index) => {
                      // Simple syntax highlighting
                      let highlightedLine = line
                      if (line.includes('const')) {
                        highlightedLine = line.replace(
                          /const (\w+)/,
                          '<span class="text-purple-400">const</span> <span class="text-blue-400">$1</span>'
                        )
                      }
                      if (line.includes(':')) {
                        const [key, ...valueParts] = line.split(':')
                        const value = valueParts.join(':')
                        highlightedLine = `<span class="text-yellow-400">${key.trim()}</span>:${value}`
                      }
                      if (line.includes('"')) {
                        highlightedLine = highlightedLine.replace(
                          /"([^"]+)"/g,
                          '<span class="text-green-400">"$1"</span>'
                        )
                      }
                      if (line.includes('[') || line.includes(']')) {
                        highlightedLine = highlightedLine.replace(
                          /\[([^\]]+)\]/g,
                          '<span class="text-orange-400">[$1]</span>'
                        )
                      }

                      return (
                        <div key={index} className="flex items-start gap-4">
                          <span className="text-muted-foreground select-none flex-shrink-0">
                            {String(index + 1).padStart(2, '0')}
                          </span>
                          <span
                            className="flex-1"
                            dangerouslySetInnerHTML={{ __html: highlightedLine }}
                          />
                        </div>
                      )
                    })}
                  </code>
                </pre>
              </div>
            </div>
          </SectionReveal>

          {/* Text content and photo */}
          <SectionReveal>
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground font-sans leading-relaxed">
                I&apos;m Akram Zekri, a young Moroccan developer passionate about
                building innovative digital experiences. From mobile apps to AI
                bots, I love turning ideas into beautiful, functional software.
              </p>
              
              {/* Photo placeholder - replace with actual image */}
              <div className="relative w-48 h-48 mx-auto md:mx-0">
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-cyan-500/20 blur-xl"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.5, 0.7, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
                <div className="relative w-full h-full rounded-full glass-strong border-2 border-primary/50 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-primary/10 to-background flex items-center justify-center">
                    <span className="text-6xl">👨‍💻</span>
                  </div>
                  {/* Glass reflection effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-full" />
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </Container>
    </section>
  )
}
