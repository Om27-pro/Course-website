"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, CheckCircle, FastForward, Cpu } from "lucide-react";

const BOOT_LOGS = [
  "BIOS: AERA AI Operating System v4.2.0 Init...",
  "CPU Core: 8-Core Neural Array Active",
  "Memory: Allocating Virtual Matrix Buffer...",
  "Connecting to Neural Workflows & APIs...",
  "Loading Knowledge Base: Om Solanki (B.Tech CSE 2026)...",
  "Verifying Skill Graph (React, Next.js, Node, Flask, Flutter, n8n)...",
  "Inference Pipeline: ACTIVE",
  "Status: PROFILE ONLINE",
];

export default function BootSequence({ onComplete }: { onComplete: () => void }) {
  const [currentLine, setCurrentLine] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Check session storage
    const hasBooted = sessionStorage.getItem("has_booted_om_ai");
    if (hasBooted) {
      onComplete();
      return;
    }

    const lineInterval = setInterval(() => {
      setCurrentLine((prev) => {
        if (prev < BOOT_LOGS.length - 1) {
          return prev + 1;
        } else {
          clearInterval(lineInterval);
          setTimeout(() => {
            sessionStorage.setItem("has_booted_om_ai", "true");
            onComplete();
          }, 600);
          return prev;
        }
      });
    }, 280);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 4;
      });
    }, 80);

    return () => {
      clearInterval(lineInterval);
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  const handleSkip = () => {
    sessionStorage.setItem("has_booted_om_ai", "true");
    onComplete();
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] bg-[#05060A] text-text flex flex-col justify-between p-6 md:p-12 font-mono select-none"
    >
      {/* Top Bar */}
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <div className="flex items-center space-x-3 text-primary-cyan">
          <Cpu className="w-5 h-5 animate-pulse" />
          <span className="text-sm font-semibold tracking-wider">OM_OS // NEURAL CORE BOOT</span>
        </div>
        <button
          onClick={handleSkip}
          className="flex items-center space-x-2 text-xs text-muted-text hover:text-primary-cyan transition-colors bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-md border border-white/10"
        >
          <span>SKIP INIT</span>
          <FastForward className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Terminal Log Output */}
      <div className="my-auto max-w-3xl mx-auto w-full space-y-3">
        <div className="flex items-center space-x-2 text-xs text-muted-text mb-4">
          <Terminal className="w-4 h-4 text-secondary-violet" />
          <span>INITIALIZING SYSTEM PROFILE...</span>
        </div>

        <div className="bg-surface/60 border border-white/10 rounded-lg p-5 backdrop-blur-md min-h-[220px] flex flex-col justify-end">
          {BOOT_LOGS.slice(0, currentLine + 1).map((log, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.15 }}
              className="flex items-center space-x-2 text-xs md:text-sm py-1"
            >
              <span className="text-primary-cyan">&gt;</span>
              <span className={idx === currentLine ? "text-primary-cyan font-bold" : "text-text/80"}>
                {log}
              </span>
              {idx === BOOT_LOGS.length - 1 && currentLine === BOOT_LOGS.length - 1 && (
                <CheckCircle className="w-4 h-4 text-success-green ml-auto" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Progress Bar */}
        <div className="space-y-1.5 pt-2">
          <div className="flex justify-between text-xs text-muted-text">
            <span>LOADING MODULES</span>
            <span className="text-primary-cyan font-bold">{progress}%</span>
          </div>
          <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-primary-cyan via-secondary-violet to-accent-magenta shadow-[0_0_10px_#00E5FF]"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      {/* Footer info */}
      <div className="flex justify-between items-center text-[11px] text-muted-text/60 border-t border-white/5 pt-4">
        <span>SECURITY PROTOCOL: OAUTH_2.0_READY</span>
        <span>AERA GCS / OM SOLANKI SYSTEM</span>
      </div>
    </motion.div>
  );
}
