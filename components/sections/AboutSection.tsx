"use client";

import { motion } from "framer-motion";
import { Cpu, Terminal, ShieldCheck, Zap, Database, Server, Smartphone, Sparkles, CheckCircle2 } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 relative font-mono">
      <div className="max-w-6xl mx-auto px-4 md:px-8">

        {/* Section Header */}
        <div className="flex items-center space-x-3 mb-8">
          <div className="p-2 rounded-lg bg-primary-cyan/10 border border-primary-cyan/30">
            <Cpu className="w-5 h-5 text-primary-cyan" />
          </div>
          <div>
            <div className="text-xs text-primary-cyan font-mono tracking-widest uppercase">// SYSTEM_ARCHITECTURE</div>
            <h2 className="text-2xl sm:text-4xl font-bold font-heading text-text">Profile.model</h2>
          </div>
        </div>

        {/* AI Model Card Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* Main Model Summary Panel */}
          <div className="lg:col-span-8 glass-panel rounded-2xl p-6 sm:p-8 border border-primary-cyan/30 shadow-[0_0_30px_rgba(0,0,0,0.5)] flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-cyan/5 rounded-full blur-2xl pointer-events-none" />

            {/* Header info bar */}
            <div className="flex flex-wrap justify-between items-center pb-4 border-b border-white/10 gap-2">
              <div className="flex items-center space-x-2">
                <Terminal className="w-4 h-4 text-primary-cyan" />
                <span className="text-xs text-text font-bold">MODEL_ID: OM_SOLANKI_V2026</span>
              </div>
              <div className="flex items-center space-x-2 bg-success-green/10 border border-success-green/30 text-success-green px-2.5 py-0.5 rounded text-[10px]">
                <span className="w-1.5 h-1.5 bg-success-green rounded-full animate-ping" />
                <span>DEPLOYED & ACTIVE</span>
              </div>
            </div>

            {/* Main Summary Text */}
            <div className="py-6 space-y-4 font-body text-sm text-text/90 leading-relaxed">
              <p>{portfolioData.summary}</p>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 font-mono text-xs text-primary-cyan space-y-2">
                <div className="flex items-center space-x-2 font-bold text-white">
                  <Sparkles className="w-4 h-4 text-primary-cyan" />
                  <span>GenAI & Workflow Integration:</span>
                </div>
                <p className="text-muted-text font-body text-xs">
                  Integrates LLMs (Ollama, Google GenAI), automated workflow pipelines (n8n), and AI development agents (Jules, Stitch AI, Flow AI) directly into daily engineering practices to boost code velocity and system resilience.
                </p>
              </div>
            </div>

            {/* Specs Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-white/10 text-xs">
              <div>
                <span className="text-muted-text block text-[10px]">NAME</span>
                <span className="text-text font-bold font-mono">Om Solanki</span>
              </div>
              <div>
                <span className="text-muted-text block text-[10px]">DEGREE</span>
                <span className="text-text font-bold font-mono">B.Tech CSE</span>
              </div>
              <div>
                <span className="text-muted-text block text-[10px]">LOCATION</span>
                <span className="text-text font-bold font-mono">Kolhapur, IN</span>
              </div>
              <div>
                <span className="text-muted-text block text-[10px]">FOCUS</span>
                <span className="text-text font-bold font-mono">Full Stack + AI</span>
              </div>
            </div>
          </div>

          {/* Right Parameters Panel */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-4">

            <div className="glass-card rounded-2xl p-6 border border-white/10 hover:border-primary-cyan/40 transition-colors">
              <div className="flex items-center space-x-2 text-xs text-secondary-violet font-bold mb-3">
                <Zap className="w-4 h-4" />
                <span>PRIMARY STACK</span>
              </div>
              <div className="flex flex-wrap gap-1.5 text-[11px] font-mono">
                {["React.js", "Next.js", "Node.js", "Express", "Flask", "Flutter", "n8n", "Ollama", "MongoDB", "MySQL"].map((tech) => (
                  <span key={tech} className="bg-white/5 border border-white/10 px-2.5 py-1 rounded-md text-text">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6 border border-white/10 hover:border-primary-cyan/40 transition-colors">
              <div className="flex items-center space-x-2 text-xs text-primary-cyan font-bold mb-3">
                <ShieldCheck className="w-4 h-4" />
                <span>SYSTEM CAPABILITIES</span>
              </div>
              <ul className="space-y-2 text-xs text-muted-text font-body">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-success-green flex-shrink-0" />
                  <span>RESTful API Architecture & Webhooks</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-success-green flex-shrink-0" />
                  <span>n8n Multi-Step Messaging Automations</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-success-green flex-shrink-0" />
                  <span>Cross-Platform Mobile Apps (Flutter)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-success-green flex-shrink-0" />
                  <span>LLM Chatbots & Local Inference (Ollama)</span>
                </li>
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
