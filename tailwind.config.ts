import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // VS Code Dark+ color palette
        background: 'hsl(0, 0%, 7%)',
        foreground: 'hsl(0, 0%, 98%)',
        card: {
          DEFAULT: 'hsl(0, 0%, 10%)',
          foreground: 'hsl(0, 0%, 98%)',
        },
        popover: {
          DEFAULT: 'hsl(0, 0%, 10%)',
          foreground: 'hsl(0, 0%, 98%)',
        },
        primary: {
          DEFAULT: 'hsl(207, 82%, 66%)', // VS Code blue
          foreground: 'hsl(0, 0%, 98%)',
        },
        secondary: {
          DEFAULT: 'hsl(0, 0%, 15%)',
          foreground: 'hsl(0, 0%, 98%)',
        },
        muted: {
          DEFAULT: 'hsl(0, 0%, 15%)',
          foreground: 'hsl(0, 0%, 65%)',
        },
        accent: {
          DEFAULT: 'hsl(207, 82%, 66%)',
          foreground: 'hsl(0, 0%, 98%)',
        },
        destructive: {
          DEFAULT: 'hsl(0, 84%, 60%)',
          foreground: 'hsl(0, 0%, 98%)',
        },
        border: 'hsl(0, 0%, 20%)',
        input: 'hsl(0, 0%, 20%)',
        ring: 'hsl(207, 82%, 66%)',
        // VS Code specific colors
        'vscode-blue': 'hsl(207, 82%, 66%)',
        'vscode-green': 'hsl(142, 71%, 45%)',
        'vscode-yellow': 'hsl(45, 93%, 47%)',
        'vscode-orange': 'hsl(25, 95%, 53%)',
        'vscode-red': 'hsl(0, 84%, 60%)',
        'vscode-purple': 'hsl(270, 50%, 60%)',
        // Neon accents
        'neon-pink': 'hsl(var(--neon-pink))',
        'neon-cyan': 'hsl(var(--neon-cyan))',
      },
      borderRadius: {
        lg: '0.5rem',
        md: '0.375rem',
        sm: '0.25rem',
      },
      fontFamily: {
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
export default config

