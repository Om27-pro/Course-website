"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Command, Search, Bot, User, Code, Briefcase, Cpu, GraduationCap, Award, Mail, ChevronRight } from "lucide-react";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenAI: () => void;
}

const COMMAND_LINKS = [
  { id: "hero", label: "Jump to System Online (Hero)", icon: User },
  { id: "about", label: "Jump to Profile.model (About)", icon: Cpu },
  { id: "skills", label: "Jump to Neural Skill Graph", icon: Code },
  { id: "experience", label: "Jump to System Logs (Experience)", icon: Briefcase },
  { id: "projects", label: "Jump to Deployed Models (Projects)", icon: Code },
  { id: "ai_lab", label: "Jump to AI Lab Showcase", icon: Cpu },
  { id: "education", label: "Jump to Training Data (Education)", icon: GraduationCap },
  { id: "achievements", label: "Jump to Achievements", icon: Award },
  { id: "contact", label: "Jump to Open Channel (Contact)", icon: Mail },
];

export default function CommandPalette({ isOpen, onClose, onOpenAI }: CommandPaletteProps) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // Open handled externally or here
        }
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const handleSelectSection = (id: string) => {
    onClose();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleTriggerAI = () => {
    onClose();
    onOpenAI();
  };

  const filteredCommands = COMMAND_LINKS.filter((cmd) =>
    cmd.label.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-20 px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.15 }}
            className="relative w-full max-w-2xl glass-panel rounded-2xl border border-primary-cyan/40 shadow-[0_0_50px_rgba(0,229,255,0.25)] overflow-hidden font-mono z-10"
          >
            {/* Input Bar */}
            <div className="flex items-center px-4 py-3 border-b border-white/10 bg-white/5">
              <Search className="w-5 h-5 text-primary-cyan mr-3" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type a command or search profile..."
                className="w-full bg-transparent text-text placeholder-muted-text text-sm focus:outline-none"
                autoFocus
              />
              <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded text-muted-text">ESC to close</span>
            </div>

            {/* Command List */}
            <div className="max-h-80 overflow-y-auto p-2 space-y-1">
              {/* Ask Om AI Quick Option */}
              <button
                onClick={handleTriggerAI}
                className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-primary-cyan/15 text-left text-xs transition-colors group text-primary-cyan border border-primary-cyan/20"
              >
                <div className="flex items-center space-x-3">
                  <Bot className="w-4 h-4 text-primary-cyan" />
                  <span className="font-semibold">Launch AI Assistant (Ask Om AI)</span>
                </div>
                <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>

              <div className="text-[10px] text-muted-text px-3 py-1 font-semibold uppercase tracking-wider">
                System Sections
              </div>

              {filteredCommands.map((cmd) => {
                const Icon = cmd.icon;
                return (
                  <button
                    key={cmd.id}
                    onClick={() => handleSelectSection(cmd.id)}
                    className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-white/10 text-left text-xs text-text/90 hover:text-white transition-colors group"
                  >
                    <div className="flex items-center space-x-3">
                      <Icon className="w-4 h-4 text-secondary-violet group-hover:text-primary-cyan" />
                      <span>{cmd.label}</span>
                    </div>
                    <span className="text-[10px] text-muted-text font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                      Go to #{cmd.id}
                    </span>
                  </button>
                );
              })}

              {filteredCommands.length === 0 && (
                <div className="p-6 text-center text-xs text-muted-text">
                  No matching system command found.
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="px-4 py-2 border-t border-white/10 bg-black/40 flex justify-between items-center text-[11px] text-muted-text">
              <span>Press <kbd className="bg-white/10 px-1 rounded">⌘K</kbd> or <kbd className="bg-white/10 px-1 rounded">Ctrl+K</kbd> anytime</span>
              <span>AERA OS v4.2</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
