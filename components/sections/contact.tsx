'use client'

import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import { SectionReveal } from '@/components/animations/section-reveal'
import { Container } from '@/components/layout/container'
import { Button } from '@/components/ui/button'
import { Send, CheckCircle2 } from 'lucide-react'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>(
    'idle'
  )
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.error || 'Failed to send message.')
      }

      setStatus('success')
      setFormData({ name: '', email: '', message: '' })

      setTimeout(() => {
        setStatus('idle')
      }, 5000)
    } catch (error) {
      console.error('Error sending message:', error)
      setErrorMessage(
        error instanceof Error
          ? error.message
          : 'Something went wrong. Please try again later.'
      )
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-20 relative">
      <Container>
        <SectionReveal>
          <h2 className="text-4xl md:text-5xl font-mono font-bold text-primary mb-12 text-center">
            <span>{'//'} Contact Me</span>
          </h2>
        </SectionReveal>

        <div className="max-w-2xl mx-auto">
          <div className="glass-strong rounded-lg p-8 font-mono">
            {/* Terminal header */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <span className="text-xs text-muted-foreground ml-2">contact-form</span>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="flex items-center gap-2 text-foreground mb-2">
                  <span className="text-primary">$</span>
                  <span>send_message</span>
                </label>
                <div className="ml-6 space-y-4">
                  <div>
                    <label className="text-muted-foreground text-sm mb-2 block">
                      &gt; Enter your name:
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                      className="w-full px-4 py-2 bg-background border border-border rounded-md text-foreground font-mono focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="text-muted-foreground text-sm mb-2 block">
                      &gt; Enter your email:
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                      className="w-full px-4 py-2 bg-background border border-border rounded-md text-foreground font-mono focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="text-muted-foreground text-sm mb-2 block">
                      &gt; Type your message:
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      required
                      rows={6}
                      className="w-full px-4 py-2 bg-background border border-border rounded-md text-foreground font-mono focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                      placeholder="Your message here..."
                    />
                  </div>
                </div>
              </div>

              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-green-500 font-mono text-sm"
                >
                  <CheckCircle2 className="h-4 w-4" />
                  <span>✅ Message sent successfully! I&apos;ll get back soon.</span>
                </motion.div>
              )}

              {status === 'error' && errorMessage && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-destructive font-mono text-sm"
                >
                  {errorMessage}
                </motion.div>
              )}

              <Button
                type="submit"
                disabled={status === 'loading'}
                className="font-mono w-full"
                size="lg"
              >
                <Send className="mr-2 h-4 w-4" />
                {status === 'loading' ? 'Sending...' : 'Send'}
              </Button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  )
}

