'use client'

import { motion } from 'framer-motion'
import { SectionReveal } from '@/components/animations/section-reveal'
import { Container } from '@/components/layout/container'
import { Github, Instagram, Mail, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface SocialLink {
  name: string
  url: string
  icon: React.ElementType
  handle: string
  description: string
}

const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/ZekriDev1',
    icon: Github,
    handle: 'ZekriDev1',
    description: 'Check out my code and projects',
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/z3kri',
    icon: Instagram,
    handle: '@z3kri',
    description: 'Follow my journey',
  },
  {
    name: 'Email',
    url: 'mailto:ma.zekri@hotmail.com',
    icon: Mail,
    handle: 'ma.zekri@hotmail.com',
    description: 'Get in touch with me',
  },
]

export function Social() {
  return (
    <section id="social" className="py-20 relative">
      <Container>
        <SectionReveal>
          <h2 className="text-4xl md:text-5xl font-mono font-bold text-primary mb-12 text-center">
            <span>{'//'} Connect with me</span>
          </h2>
        </SectionReveal>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {socialLinks.map((link, index) => {
            const Icon = link.icon
            return (
              <motion.a
                key={link.name}
                href={link.url}
                target={link.url.startsWith('mailto:') ? undefined : '_blank'}
                rel={link.url.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="glass-strong rounded-lg p-6 text-center cursor-pointer group"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="font-mono font-semibold text-foreground mb-2">
                  {link.name}
                </h3>
                <p className="text-sm text-primary font-mono mb-2">
                  {link.handle}
                </p>
                <p className="text-xs text-muted-foreground font-sans">
                  {link.description}
                </p>
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink className="h-4 w-4 text-primary mx-auto" />
                </div>
              </motion.a>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

