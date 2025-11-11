'use client'

import { motion } from 'framer-motion'
import { SectionReveal } from '@/components/animations/section-reveal'
import { Container } from '@/components/layout/container'

interface Testimonial {
  quote: string
  author: string
  role: string
}

const testimonials: Testimonial[] = [
  {
    quote: 'Akram is a brilliant young developer.',
    author: 'Youssef El Amrani',
    role: 'Client',
  },
  {
    quote: 'Déplace Toi is amazing — smooth and clean.',
    author: 'Sara Ben Ali',
    role: 'User',
  },
  {
    quote: 'Exceptional work quality and attention to detail.',
    author: 'Ahmed Tazi',
    role: 'Collaborator',
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 relative">
      <Container>
        <SectionReveal>
          <h2 className="text-4xl md:text-5xl font-mono font-bold text-primary mb-12 text-center">
            <span>{'//'} Testimonials</span>
          </h2>
        </SectionReveal>

        <div className="space-y-6 max-w-3xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="glass-strong rounded-lg p-6 font-mono"
            >
              <div className="flex items-start gap-4">
                <span className="text-muted-foreground select-none">{'//'}</span>
                <div className="flex-1">
                  <p className="text-foreground mb-2 font-sans italic">
                    &quot;{testimonial.quote}&quot;
                  </p>
                  <p className="text-muted-foreground text-sm">
                    — {testimonial.author}, {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}

