import type { Metadata } from 'next'
import { JetBrains_Mono, Inter } from 'next/font/google'
import { SmoothScrollProvider } from '@/components/providers/smooth-scroll'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { VSCodeWindow } from '@/components/layout/vscode-window'
import './globals.css'

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Akram Zekri — Developer & Programmer',
  description: 'Moroccan programmer and developer. Creator of Déplace Toi app. Young dev passionate about building amazing experiences.',
  keywords: [
    'Akram Zekri developer',
    'Moroccan programmer',
    'Déplace Toi app',
    'young dev',
    'web developer',
    'software engineer',
    'Morocco',
    'React developer',
    'Next.js developer',
  ],
  authors: [{ name: 'Akram Zekri' }],
  creator: 'Akram Zekri',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://zekri.xyz',
    title: 'Akram Zekri — Developer & Programmer',
    description: 'Moroccan programmer and developer. Creator of Déplace Toi app.',
    siteName: 'Akram Zekri',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Akram Zekri — Developer & Programmer',
    description: 'Moroccan programmer and developer. Creator of Déplace Toi app.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${jetbrainsMono.variable} ${inter.variable} font-sans antialiased`}
      >
        <ThemeProvider>
          <SmoothScrollProvider>
            <VSCodeWindow>
              {children}
            </VSCodeWindow>
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

