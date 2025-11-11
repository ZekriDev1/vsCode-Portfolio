import { Metadata } from 'next'
import { Hero } from '@/components/sections/hero'
import { About } from '@/components/sections/about'
import { Skills } from '@/components/sections/skills'
import { Projects } from '@/components/sections/projects'
import { Services } from '@/components/sections/services'
import { Testimonials } from '@/components/sections/testimonials'
import { Social } from '@/components/sections/social'
import { Contact } from '@/components/sections/contact'
import { Footer } from '@/components/layout/footer'
import { BackToTop } from '@/components/ui/back-to-top'
import { EasterEgg } from '@/components/ui/easter-egg'
import { BackgroundAnimations } from '@/components/ui/background-animations'

export const metadata: Metadata = {
  title: 'Home — Akram Zekri',
  description: 'Moroccan programmer and developer. Creator of Déplace Toi app.',
}

export default function Home() {
  return (
    <>
      <BackgroundAnimations />
      <EasterEgg />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Services />
      <Testimonials />
      <Social />
      <Contact />
      <Footer />
      <BackToTop />
    </>
  )
}

