import type { Metadata } from 'next'
import { Container } from '@/components/layout/container'
import { SectionReveal } from '@/components/animations/section-reveal'

export const metadata: Metadata = {
  title: 'Curriculum Vitae — Akram Zekri',
  description:
    'Curriculum vitae of Akram Zekri, 17-year-old developer from Morocco.',
}

export default function CVPage() {
  return (
    <div className="py-20">
      <Container>
        <SectionReveal>
          <h1 className="text-4xl md:text-5xl font-mono font-bold text-primary mb-8">
            Curriculum Vitae
          </h1>
        </SectionReveal>

        <div className="glass-strong rounded-lg p-8 space-y-10">
          <section>
            <h2 className="text-2xl font-mono font-semibold text-foreground mb-4">
              Personal Information
            </h2>
            <ul className="space-y-2 text-muted-foreground font-sans">
              <li>
                <strong className="text-foreground">Name:</strong> Akram Zekri
              </li>
              <li>
                <strong className="text-foreground">Age:</strong> 17
              </li>
              <li>
                <strong className="text-foreground">Location:</strong> Morocco
              </li>
              <li>
                <strong className="text-foreground">Email:</strong>{' '}
                <a
                  href="mailto:ma.zekri@hotmail.com"
                  className="text-primary underline-offset-4 hover:underline"
                >
                  ma.zekri@hotmail.com
                </a>
              </li>
              <li>
                <strong className="text-foreground">Phone:</strong>{' '}
                <a
                  href="tel:+212691157363"
                  className="text-primary underline-offset-4 hover:underline"
                >
                  +212 691 157 363
                </a>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-mono font-semibold text-foreground mb-4">
              Summary
            </h2>
            <p className="text-muted-foreground font-sans leading-relaxed">
              Young Moroccan developer passionate about building innovative
              digital experiences. From mobile apps with Flutter to full-stack
              web projects with Next.js and Supabase, I focus on crafting
              high-quality software that solves real problems. Currently
              studying at Groupe Scolaire Les Lumières and founding the Déplace
              Toi mobility app.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-mono font-semibold text-foreground mb-4">
              Experience
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-mono text-foreground">
                  Founder &amp; Developer — Déplace Toi
                </h3>
                <p className="text-sm text-muted-foreground font-sans">
                  2023 — Present
                </p>
                <p className="text-muted-foreground font-sans leading-relaxed mt-2">
                  Building a modern mobility platform for fast, reliable
                  transport in Morocco using Flutter, Supabase, and Node.js.
                  Responsible for product design, engineering, and launch.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-mono text-foreground">
                  Developer &amp; Designer — YouTheLite Agency
                </h3>
                <p className="text-sm text-muted-foreground font-sans">
                  2024 — Present
                </p>
                <p className="text-muted-foreground font-sans leading-relaxed mt-2">
                  Crafted a creative agency website powered by Next.js, Tailwind
                  CSS, and Framer Motion with premium motion design and
                  responsive UI.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-mono text-foreground">
                  Web Developer — Les Lumières Pods
                </h3>
                <p className="text-sm text-muted-foreground font-sans">
                  2023 — Present
                </p>
                <p className="text-muted-foreground font-sans leading-relaxed mt-2">
                  Designed and built a podcast platform for school media using
                  HTML, CSS, and JavaScript with a focus on clean UI and
                  storytelling.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-mono font-semibold text-foreground mb-4">
              Education
            </h2>
            <div>
              <h3 className="text-lg font-mono text-foreground">
                Groupe Scolaire Les Lumières
              </h3>
              <p className="text-muted-foreground font-sans">
                High School Student — Scientific Track
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-mono font-semibold text-foreground mb-4">
              Skills
            </h2>
            <div className="grid md:grid-cols-2 gap-4 text-muted-foreground font-sans">
              <ul className="space-y-2">
                <li>Flutter &amp; Dart</li>
                <li>JavaScript &amp; Node.js</li>
                <li>Next.js &amp; React</li>
                <li>Tailwind CSS</li>
              </ul>
              <ul className="space-y-2">
                <li>Supabase &amp; Firebase</li>
                <li>Unity &amp; C#</li>
                <li>Python &amp; AI tools</li>
                <li>Git &amp; GitHub</li>
              </ul>
            </div>
          </section>
        </div>
      </Container>
    </div>
  )
}


