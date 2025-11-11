# zekri.xyz

Portfolio website for Akram Zekri — Developer & Programmer

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router) with TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **UI Components**: ShadCN UI
- **Fonts**: JetBrains Mono (main) + Inter (secondary)
- **Theme**: VS Code Dark+ aesthetic with glassmorphism

## 📦 Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## ✨ Features

- ✅ **SEO Optimized** - Meta tags, Open Graph, and keywords configured
- ✅ **Smooth Scroll** - Smooth scrolling behavior throughout the site
- ✅ **Typing Effects** - Animated typing effect component
- ✅ **Fade-in Animations** - Fade-in animations with viewport detection
- ✅ **Section Reveal** - Scroll-triggered section reveal animations
- ✅ **Glassmorphism** - Glass-like effects with backdrop blur
- ✅ **VS Code Dark+ Theme** - Authentic VS Code color palette
- ✅ **Responsive Design** - Mobile-first responsive layout
- ✅ **Custom Scrollbar** - Styled scrollbar matching the theme

## 📁 Project Structure

```
.
├── app/
│   ├── layout.tsx       # Root layout with fonts and metadata
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles and theme
├── components/
│   ├── animations/      # Animation components
│   │   ├── fade-in.tsx
│   │   ├── typing-effect.tsx
│   │   └── section-reveal.tsx
│   ├── layout/          # Layout components
│   │   └── container.tsx
│   ├── providers/       # Context providers
│   │   └── smooth-scroll.tsx
│   └── ui/              # ShadCN UI components
│       └── button.tsx
├── lib/
│   └── utils.ts         # Utility functions (cn, etc.)
└── public/              # Static assets
```

## 🎨 Theme Colors

The theme uses VS Code Dark+ color palette:
- **Primary**: VS Code Blue (`hsl(207, 82%, 66%)`)
- **Background**: Dark (`hsl(0, 0%, 7%)`)
- **Foreground**: Light (`hsl(0, 0%, 98%)`)
- **Card**: Slightly lighter dark (`hsl(0, 0%, 10%)`)
- **Border**: Subtle borders (`hsl(0, 0%, 20%)`)

## 🔍 SEO Keywords

- Akram Zekri developer
- Moroccan programmer
- Déplace Toi app
- young dev
- web developer
- software engineer

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🔐 Environment Variables

The contact form sends emails using [Resend](https://resend.com/). Create a `.env.local` file and add:

```
RESEND_API_KEY=your_resend_api_key
```

Make sure the `from` address configured in `app/api/contact/route.ts` is verified in your Resend dashboard.

## 📝 Next Steps

Phase 1 is complete! You can now:
1. Add more pages and sections
2. Customize the content
3. Add more animation components
4. Integrate additional ShadCN UI components
5. Add your projects and portfolio items

