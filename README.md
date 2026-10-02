# Om Solanki — AI Platform Portfolio

A futuristic, AI-platform-themed personal portfolio website for **Om Solanki** (Full Stack Developer & AI Automation Engineer), built with Next.js 14 App Router, TypeScript, Tailwind CSS, Three.js, Framer Motion, and Lenis smooth scroll.

The website is styled like an advanced AI platform interface / neural command center ("OM_OS"), featuring local LLM simulation, interactive 3D particle background, live n8n workflow diagram visualizer, command palette (Cmd+K), and a client-side Ask Om AI assistant.

---

## 🛠️ Tech Stack & Features

- **Framework**: Next.js 14+ (App Router) with TypeScript
- **Styling**: Tailwind CSS, CSS variables, Glassmorphism, Cyberpunk/Neon glow design system
- **Animations**: Framer Motion, Lenis Smooth Scroll, Custom CSS scanlines & glowing cursor
- **3D Graphics**: Three.js, React Three Fiber, Custom GLSL shaders
- **Icons & Fonts**: Lucide React, Space Grotesk, Inter, JetBrains Mono
- **Key Modules**:
  - **Boot Sequence**: 2-3s terminal boot loader with progress bar, session memory & skip button
  - **3D Neural Field**: Interactive particle network background with mouse & scroll reactivity
  - **Command Palette (`⌘K` / `Ctrl+K`)**: Rapid navigation & quick launch overlay
  - **Ask Om AI Assistant**: Floating LLM chat widget powered by structured dataset in `data/portfolio.ts`
  - **n8n Workflow Visualizer**: Interactive messaging automation pipeline diagram with packet execution replay
  - **AI Lab**: Simulated local Ollama/Llama 3.2 streaming console and GenAI tool showcases

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18.x or higher
- npm / yarn / pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Om27-pro/om-solanki-ai-portfolio.git
cd om-solanki-ai-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📂 Project Structure

```
.
├── app/
│   ├── globals.css           # Design tokens, neon glow, custom scrollbars, scanlines
│   ├── layout.tsx            # Metadata, JSON-LD schema, fonts & skip link
│   ├── page.tsx              # Main system interface composition
│   ├── robots.ts             # Robots SEO route
│   └── sitemap.ts            # Sitemap SEO route
├── components/
│   ├── ai/
│   │   └── AIAssistantWidget.tsx  # Ask Om AI chat widget
│   ├── sections/
│   │   ├── AboutSection.tsx       # Profile.model AI model card
│   │   ├── AILabSection.tsx       # Local Ollama terminal stream & AI tools
│   │   ├── ContactSection.tsx     # Open Channel form & terminal direct commands
│   │   ├── EducationAchievementsSection.tsx  # Training Data & Benchmarks
│   │   ├── ExperienceSection.tsx  # System Logs vertical timeline
│   │   ├── HeroSection.tsx        # System Online glitch heading & 3D Orb
│   │   ├── N8nWorkflowVisualizer.tsx # Interactive n8n pipeline visualizer
│   │   ├── ProjectsSection.tsx    # Deployed Models & inspector modal
│   │   └── SkillsSection.tsx      # Neural Skill Graph
│   ├── three/
│   │   ├── AICoreOrb.tsx          # 3D interactive wireframe orb
│   │   └── NeuralBackground.tsx   # 3D R3F particle background
│   └── ui/
│       ├── BootSequence.tsx       # Terminal boot screen
│       ├── CommandPalette.tsx     # Cmd+K command palette
│       ├── CustomCursor.tsx       # Custom glowing particle cursor
│       ├── Navbar.tsx             # Floating command navbar
│       ├── ScrollProgressBar.tsx  # Data pipeline scroll bar
│       └── SmoothScroll.tsx       # Lenis smooth scroll wrapper
├── data/
│   └── portfolio.ts           # Single typed data file with all Om Solanki profile information
├── lib/
│   └── ai-service.ts          # Isolated AI query logic (easily swappable for real LLM API)
└── public/
    └── Om_Solanki_Resume.pdf  # Resume download target
```

---

## 🛠️ Customization & Updating Content

All personal resume data, skills, projects, work experience, and contact details are central to `data/portfolio.ts`.
To update content, edit `data/portfolio.ts` directly.

To plug in a live backend LLM endpoint (e.g. OpenAI / Claude / Ollama backend API):
Replace the implementation in `lib/ai-service.ts`:
```ts
export async function queryOmAI(userPrompt: string): Promise<string> {
  const response = await fetch('/api/chat', {
    method: 'POST',
    body: JSON.stringify({ prompt: userPrompt })
  });
  const data = await response.json();
  return data.reply;
}
```

---

## 🚀 Deployment (Vercel)

This application is ready for 1-click zero-config deployment on Vercel:

1. Push your repository to GitHub.
2. Import project in [Vercel Dashboard](https://vercel.com).
3. Framework Preset: **Next.js**.
4. Click **Deploy**.

---

## 📄 License

Built for Om Solanki.
