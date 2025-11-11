'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionReveal } from '@/components/animations/section-reveal'
import { Container } from '@/components/layout/container'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { ExternalLink, Github } from 'lucide-react'
import { cn } from '@/lib/utils'

interface Project {
  id: string
  title: string
  filename: string
  role: string
  description: string
  stack: string[]
  websiteUrl?: string
  githubUrl?: string
  color: string
}

const projects: Project[] = [
  {
    id: 'deplace-toi',
    title: 'Déplace Toi',
    filename: 'DéplaceToi.dart',
    role: 'Founder & Developer',
    description:
      'A modern mobility app for fast, reliable transport in Morocco. Built with Flutter and Supabase for a seamless user experience.',
    stack: ['Flutter', 'Supabase', 'Node.js'],
    websiteUrl: 'https://deplacetoi.zekri.xyz',
    githubUrl: 'https://github.com/ZekriDev1/deplace-toi',
    color: 'primary',
  },
  {
    id: 'youthelite',
    title: 'YouTheLite Agency',
    filename: 'AgencySite.js',
    role: 'Developer & Designer',
    description:
      'A sleek website for a digital marketing agency with smooth motion effects and modern design principles.',
    stack: ['Next.js', 'Tailwind', 'Framer Motion'],
    websiteUrl: 'https://youtheliteagency.com',
    githubUrl: 'https://github.com/ZekriDev1/youthelite-agency',
    color: 'neon-cyan',
  },
  {
    id: 'pods',
    title: 'Les Lumières Pods',
    filename: 'Podcasts.vue',
    role: 'Web Developer',
    description:
      'Designed and built a clean dark-red/orange themed podcast UI for school podcasts with modern aesthetics.',
    stack: ['HTML', 'CSS', 'JS'],
    githubUrl: 'https://github.com/ZekriDev1/les-lumieres-pods',
    color: 'neon-pink',
  },
]

export function Projects() {
  const [activeProject, setActiveProject] = useState<string | null>(null)

  return (
    <section id="projects" className="py-20 relative">
      <Container>
        <SectionReveal>
          <h2 className="text-4xl md:text-5xl font-mono font-bold text-primary mb-12 text-center">
            <span>{'//'} Featured Projects</span>
          </h2>
        </SectionReveal>

        {/* VS Code style file tabs */}
        <div className="flex flex-wrap gap-2 mb-6 justify-center">
          {projects.map((project) => (
            <button
              key={project.id}
              onClick={() =>
                setActiveProject(
                  activeProject === project.id ? null : project.id
                )
              }
              className={`
                px-4 py-2 rounded-t-lg font-mono text-sm transition-all
                ${
                  activeProject === project.id
                    ? 'bg-card border-t border-l border-r border-border text-primary'
                    : 'bg-secondary/50 text-muted-foreground hover:bg-secondary'
                }
              `}
            >
              {project.filename}
            </button>
          ))}
        </div>

        {/* Project content */}
        <AnimatePresence mode="wait">
          {activeProject && (
            <motion.div
              key={activeProject}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {projects
                .filter((p) => p.id === activeProject)
                .map((project) => (
                  <div key={project.id} className="glass-strong rounded-lg p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-3xl font-mono font-bold text-foreground mb-2">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground font-mono text-sm">
                          {project.role}
                        </p>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-6 font-sans leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-secondary rounded-md text-xs font-mono text-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-4">
                      {project.websiteUrl && (
                        <Link
                          href={project.websiteUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={cn(
                            buttonVariants({ variant: 'default', size: 'default' }),
                            'font-mono inline-flex items-center'
                          )}
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          View Project
                        </Link>
                      )}
                      {project.githubUrl && (
                        <Link
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={cn(
                            buttonVariants({ variant: 'outline', size: 'default' }),
                            'font-mono inline-flex items-center'
                          )}
                        >
                          <Github className="mr-2 h-4 w-4" />
                          GitHub
                        </Link>
                      )}
                    </div>
                  </div>
                ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Show first project by default if none selected */}
        {!activeProject && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-strong rounded-lg p-8 text-center"
          >
            <p className="text-muted-foreground font-mono">
              Click on a project tab to view details
            </p>
          </motion.div>
        )}
      </Container>
    </section>
  )
}

