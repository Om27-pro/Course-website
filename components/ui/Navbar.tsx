"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Terminal, Command, Bot, Menu, X, FileText } from "lucide-react";

interface NavbarProps {
  onOpenCommand: () => void;
  onOpenAI: () => void;
}

const NAV_ITEMS = [
  { id: "hero", label: "System Online" },
  { id: "about", label: "Profile" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "System Logs" },
  { id: "projects", label: "Models" },
  { id: "ai_lab", label: "AI Lab" },
  { id: "contact", label: "Contact" },
];

export default function Navbar({ onOpenCommand, onOpenAI }: NavbarProps) {
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = NAV_ITEMS.map((item) => document.getElementById(item.id));
      const scrollPos = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i];
        if (sec && sec.offsetTop <= scrollPos) {
          setActiveSection(NAV_ITEMS[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-5 left-0 right-0 z-40 px-4 md:px-8 flex justify-center">
      <nav
        className={`w-full max-w-5xl rounded-2xl transition-all duration-300 ${
          scrolled
            ? "glass-panel shadow-[0_8px_32px_rgba(0,0,0,0.5)] border-primary-cyan/25 py-2.5 px-4 md:px-6"
            : "bg-black/30 backdrop-blur-md border border-white/10 py-3 px-4 md:px-6"
        } flex items-center justify-between font-mono`}
      >
        {/* Brand / Logo */}
        <button
          onClick={() => scrollToSection("hero")}
          className="flex items-center space-x-2 text-left group focus:outline-none"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-cyan to-secondary-violet flex items-center justify-center shadow-[0_0_12px_#00E5FF]">
            <Terminal className="w-4 h-4 text-black font-bold" />
          </div>
          <div>
            <div className="text-xs font-bold font-heading tracking-wider text-text group-hover:text-primary-cyan transition-colors">
              OM_SOLANKI
            </div>
            <div className="text-[9px] text-muted-text flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-success-green rounded-full animate-pulse" />
              SYSTEM ACTIVE
            </div>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center space-x-1 bg-black/40 border border-white/10 rounded-full px-3 py-1 text-xs">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-3 py-1.5 rounded-full transition-all duration-200 ${
                  isActive
                    ? "text-primary-cyan font-semibold"
                    : "text-muted-text hover:text-text"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-primary-cyan/15 rounded-full border border-primary-cyan/40"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            );
          })}
        </div>

        {/* Right CTA Actions */}
        <div className="flex items-center space-x-2">
          {/* Cmd+K trigger */}
          <button
            onClick={onOpenCommand}
            className="hidden sm:flex items-center space-x-1.5 bg-white/5 hover:bg-white/10 border border-white/10 px-2.5 py-1.5 rounded-lg text-xs text-muted-text hover:text-primary-cyan transition-colors"
            title="Command Palette"
          >
            <Command className="w-3.5 h-3.5" />
            <span className="text-[10px] font-mono">⌘K</span>
          </button>

          {/* Ask AI Trigger */}
          <button
            onClick={onOpenAI}
            className="flex items-center space-x-1.5 bg-gradient-to-r from-primary-cyan/20 to-secondary-violet/20 hover:from-primary-cyan/30 hover:to-secondary-violet/30 border border-primary-cyan/40 text-primary-cyan px-3 py-1.5 rounded-lg text-xs font-semibold transition-all hover:shadow-[0_0_15px_rgba(0,229,255,0.4)]"
          >
            <Bot className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">ASK OM AI</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-muted-text hover:text-white rounded-lg bg-white/5"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="lg:hidden absolute top-16 left-4 right-4 glass-panel rounded-2xl p-4 border border-primary-cyan/30 shadow-2xl font-mono"
        >
          <div className="flex flex-col space-y-2">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-left px-4 py-2.5 rounded-xl text-sm transition-colors ${
                  activeSection === item.id
                    ? "bg-primary-cyan/20 text-primary-cyan font-bold border border-primary-cyan/30"
                    : "text-muted-text hover:bg-white/5 hover:text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-2 border-t border-white/10 flex justify-between gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCommand();
                }}
                className="flex-1 flex items-center justify-center space-x-2 bg-white/5 p-2 rounded-xl text-xs text-muted-text"
              >
                <Command className="w-4 h-4" />
                <span>Command Menu</span>
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
}
