"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Terminal, Download, Bot, ChevronRight, Cpu, Sparkles, Code2, ArrowUpRight } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import dynamic from "next/dynamic";

const AICoreOrb = dynamic(() => import("@/components/three/AICoreOrb"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[320px] sm:h-[400px] flex items-center justify-center">
      <div className="w-32 h-32 rounded-full border-2 border-primary-cyan/30 border-t-primary-cyan animate-spin" />
    </div>
  ),
});

const ROLES = [
  "Full Stack Developer",
  "AI Automation Engineer",
  "n8n Workflow Architect",
  "Flutter Developer",
];

export default function HeroSection({ onOpenAI }: { onOpenAI: () => void }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [scrambleName, setScrambleName] = useState("OM SOLANKI");
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$&%";

  // Scramble text effect on load / hover
  const triggerScramble = () => {
    let iteration = 0;
    const targetName = "OM SOLANKI";
    const interval = setInterval(() => {
      setScrambleName(
        targetName
          .split("")
          .map((letter, index) => {
            if (letter === " ") return " ";
            if (index < iteration) {
              return targetName[index];
            }
            return letters[Math.floor(Math.random() * letters.length)];
          })
          .join("")
      );

      if (iteration >= targetName.length) {
        clearInterval(interval);
      }
      iteration += 1 / 2;
    }, 40);
  };

  useEffect(() => {
    triggerScramble();

    const roleInterval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 3000);

    return () => clearInterval(roleInterval);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center font-mono">
      <div className="max-w-6xl w-full mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

        {/* Left Column Text & CTAs */}
        <div className="lg:col-span-7 space-y-6 text-left z-10">

          {/* Status Chips */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center space-x-2 bg-success-green/10 border border-success-green/30 text-success-green px-3 py-1 rounded-full text-xs">
              <span className="w-2 h-2 bg-success-green rounded-full animate-ping" />
              <span className="font-semibold">Open to opportunities</span>
            </div>
            <div className="inline-flex items-center space-x-2 bg-primary-cyan/10 border border-primary-cyan/30 text-primary-cyan px-3 py-1 rounded-full text-xs">
              <Cpu className="w-3.5 h-3.5" />
              <span>B.Tech CSE 2026</span>
            </div>
            <div className="inline-flex items-center space-x-1.5 bg-white/5 border border-white/10 text-muted-text px-2.5 py-1 rounded-full text-xs">
              <span>Kolhapur, India</span>
            </div>
          </div>

          {/* Glitch / Scramble Name Heading */}
          <div className="space-y-2">
            <p className="text-xs text-primary-cyan tracking-widest uppercase">
              // SYSTEM_OPERATOR_IDENTITY
            </p>
            <h1
              onMouseEnter={triggerScramble}
              className="text-4xl sm:text-6xl lg:text-7xl font-bold font-heading tracking-tight cursor-pointer select-none text-white hover:text-primary-cyan transition-colors"
            >
              <span className="gradient-text">{scrambleName}</span>
            </h1>
          </div>

          {/* Rotating Role Typewriter */}
          <div className="h-8 flex items-center text-lg sm:text-2xl text-text/90 font-semibold">
            <span className="text-muted-text mr-2">&gt;</span>
            <motion.span
              key={roleIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-primary-cyan underline decoration-primary-cyan/40 decoration-2 underline-offset-4"
            >
              {ROLES[roleIndex]}
            </motion.span>
            <span className="inline-block w-2.5 h-5 bg-primary-cyan ml-2 animate-pulse" />
          </div>

          {/* Short Tagline / Summary */}
          <p className="text-xs sm:text-sm text-muted-text leading-relaxed max-w-2xl font-body">
            Full-stack engineer building production-ready web and mobile applications with Next.js, Flask, Flutter, and automated AI/n8n pipelines. Bridging GenAI tooling with robust engineering systems.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#projects"
              className="group relative inline-flex items-center space-x-2 bg-gradient-to-r from-primary-cyan to-secondary-violet text-black font-semibold px-6 py-3 rounded-xl shadow-[0_0_20px_rgba(0,229,255,0.4)] hover:shadow-[0_0_30px_rgba(0,229,255,0.7)] transition-all font-mono text-xs"
            >
              <span>VIEW PROJECTS</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="/Om_Solanki_Resume.pdf"
              download="Om_Solanki_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 glass-card hover:bg-white/10 text-text px-5 py-3 rounded-xl border border-white/20 text-xs font-semibold transition-all hover:border-primary-cyan/50"
            >
              <Download className="w-4 h-4 text-primary-cyan" />
              <span>DOWNLOAD RESUME</span>
            </a>

            <button
              onClick={onOpenAI}
              className="inline-flex items-center space-x-2 bg-white/5 hover:bg-primary-cyan/10 text-primary-cyan border border-primary-cyan/30 px-5 py-3 rounded-xl text-xs font-semibold transition-all hover:shadow-[0_0_15px_rgba(0,229,255,0.3)]"
            >
              <Bot className="w-4 h-4" />
              <span>ASK OM AI</span>
            </button>
          </div>

          {/* Quick Metrics Bar */}
          <div className="pt-6 grid grid-cols-3 gap-4 border-t border-white/10 max-w-lg">
            <div>
              <div className="text-xl sm:text-2xl font-bold font-heading text-primary-cyan">5+</div>
              <div className="text-[10px] text-muted-text font-mono">Full-Cycle Projects</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold font-heading text-secondary-violet">2</div>
              <div className="text-[10px] text-muted-text font-mono">Software Internships</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold font-heading text-accent-magenta">4+</div>
              <div className="text-[10px] text-muted-text font-mono">Integrated Frameworks</div>
            </div>
          </div>

        </div>

        {/* Right Column Interactive 3D Orb */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
          <AICoreOrb />
          <div className="text-center mt-2 font-mono text-[10px] text-muted-text flex items-center justify-center gap-2">
            <Sparkles className="w-3 h-3 text-primary-cyan" />
            <span>NEURAL_CORE_3D // Interactive Shader Matrix</span>
          </div>
        </div>

      </div>
    </section>
  );
}
