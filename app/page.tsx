"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import SmoothScroll from "@/components/ui/SmoothScroll";
import CustomCursor from "@/components/ui/CustomCursor";
import ScrollProgressBar from "@/components/ui/ScrollProgressBar";
import Navbar from "@/components/ui/Navbar";
import CommandPalette from "@/components/ui/CommandPalette";
import BootSequence from "@/components/ui/BootSequence";
import AIAssistantWidget from "@/components/ai/AIAssistantWidget";

import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import AILabSection from "@/components/sections/AILabSection";
import EducationAchievementsSection from "@/components/sections/EducationAchievementsSection";
import ContactSection from "@/components/sections/ContactSection";

const NeuralBackground = dynamic(() => import("@/components/three/NeuralBackground"), {
  ssr: false,
});

export default function Home() {
  const [bootCompleted, setBootCompleted] = useState(false);
  const [commandOpen, setCommandOpen] = useState(false);
  const [aiOpen, setAiOpen] = useState(false);

  return (
    <SmoothScroll>
      {/* 3D Background Particle Network */}
      <NeuralBackground />

      {/* Custom Glowing Cursor */}
      <CustomCursor />

      {/* Boot sequence loader */}
      {!bootCompleted && <BootSequence onComplete={() => setBootCompleted(true)} />}

      {/* Scroll progress bar */}
      <ScrollProgressBar />

      {/* Navbar */}
      <Navbar onOpenCommand={() => setCommandOpen(true)} onOpenAI={() => setAiOpen(true)} />

      {/* Command Palette */}
      <CommandPalette
        isOpen={commandOpen}
        onClose={() => setCommandOpen(false)}
        onOpenAI={() => setAiOpen(true)}
      />

      {/* AI Assistant Chat Widget */}
      <AIAssistantWidget isOpen={aiOpen} setIsOpen={setAiOpen} />

      {/* Main Sections */}
      <div className="relative z-10 space-y-12">
        <HeroSection onOpenAI={() => setAiOpen(true)} />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <AILabSection />
        <EducationAchievementsSection />
        <ContactSection />
      </div>
    </SmoothScroll>
  );
}
