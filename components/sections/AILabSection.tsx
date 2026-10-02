"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Cpu, Terminal, Play, Sparkles, RefreshCw, Layers, CheckCircle2 } from "lucide-react";

const AI_TOOLS = [
  { name: "Ollama", desc: "Local LLM Deployment (Llama 3.2, Mistral)" },
  { name: "Google GenAI", desc: "Gemini API integration & multimodal reasoning" },
  { name: "Jules", desc: "AI Coding Assistant & automated PR review" },
  { name: "Stitch AI", desc: "AI-native UI layout and design generation" },
  { name: "Flow AI", desc: "Node-based AI prompt composition" },
  { name: "n8n", desc: "Multi-step webhook & AI agent workflow automation" },
];

const SIMULATED_PROMPTS = [
  {
    input: "ollama run llama3.2 'Generate n8n webhook routing logic for WhatsApp lead scoring'",
    response: `[Ollama Llama3.2 3B - Sub-200ms Local Inference]
{
  "nodes": [
    { "name": "WhatsApp Webhook Trigger", "type": "n8n-nodes-base.webhook" },
    { "name": "LLM Sentiment & Intent Classifier", "type": "n8n-nodes-base.ollama" },
    { "name": "Lead Priority Router", "type": "n8n-nodes-base.if" },
    { "name": "Post to CRM / Alert Engineer", "type": "n8n-nodes-base.httpRequest" }
  ],
  "status": "Pipeline operational",
  "latency": "184ms"
}`,
  },
  {
    input: "jules agent --refactor 'Optimize Flutter Riverpod state provider memory leaks'",
    response: `[Jules AI Coding Agent]
Analyzing Riverpod StateNotifier instances...
Refactoring complete:
1. Replaced autoDispose with ref.keepAlive() guard on active sockets.
2. Verified 0 memory leaks across 500 test cycles.
3. Core Web Vitals / App Frame rate stable at 60 FPS.`,
  },
];

export default function AILabSection() {
  const [activePromptIdx, setActivePromptIdx] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const currentSim = SIMULATED_PROMPTS[activePromptIdx];

  useEffect(() => {
    setIsTyping(true);
    setDisplayedText("");
    let charIdx = 0;
    const fullText = currentSim.response;

    const interval = setInterval(() => {
      if (charIdx < fullText.length) {
        setDisplayedText(fullText.slice(0, charIdx + 1));
        charIdx++;
      } else {
        setIsTyping(false);
        clearInterval(interval);
      }
    }, 15);

    return () => clearInterval(interval);
  }, [activePromptIdx]);

  return (
    <section id="ai_lab" className="py-20 relative font-mono">
      <div className="max-w-6xl mx-auto px-4 md:px-8">

        {/* Section Header */}
        <div className="flex items-center space-x-3 mb-8">
          <div className="p-2 rounded-lg bg-accent-magenta/10 border border-accent-magenta/30">
            <Cpu className="w-5 h-5 text-accent-magenta" />
          </div>
          <div>
            <div className="text-xs text-accent-magenta font-mono tracking-widest uppercase">// EXPERIMENTAL_INFERENCE_ENGINE</div>
            <h2 className="text-2xl sm:text-4xl font-bold font-heading text-text">AI Lab & Workflows</h2>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-muted-text font-body max-w-2xl mb-8">
          Demonstration of how Om integrates local LLMs (Ollama), GenAI agents, and n8n workflows into full-stack engineering routines to accelerate product delivery.
        </p>

        {/* AI Tools Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
          {AI_TOOLS.map((tool) => (
            <div
              key={tool.name}
              className="glass-card rounded-xl p-3 border border-white/10 hover:border-accent-magenta/50 transition-all text-left"
            >
              <div className="text-xs font-bold text-primary-cyan flex items-center justify-between mb-1">
                <span>{tool.name}</span>
                <Sparkles className="w-3 h-3 text-accent-magenta" />
              </div>
              <p className="text-[10px] text-muted-text/90 line-clamp-2 font-body">{tool.desc}</p>
            </div>
          ))}
        </div>

        {/* Interactive Simulated Terminal Showcase */}
        <div className="glass-panel rounded-2xl border border-accent-magenta/30 shadow-[0_0_40px_rgba(255,46,196,0.15)] overflow-hidden">

          {/* Terminal Titlebar */}
          <div className="flex items-center justify-between px-4 py-3 bg-black/60 border-b border-white/10 text-xs">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="text-muted-text ml-2">om-ai-lab-terminal -- simulated_llm_stream</span>
            </div>
            <button
              onClick={() => setActivePromptIdx((prev) => (prev + 1) % SIMULATED_PROMPTS.length)}
              className="flex items-center space-x-1.5 bg-white/5 hover:bg-white/10 px-3 py-1 rounded text-[11px] text-primary-cyan border border-white/10 transition-colors"
            >
              <RefreshCw className={`w-3 h-3 ${isTyping ? "animate-spin" : ""}`} />
              <span>NEXT PROMPT DEMO</span>
            </button>
          </div>

          {/* Terminal Stream Area */}
          <div className="p-6 space-y-4 text-xs md:text-sm">
            <div className="flex items-center space-x-2 text-primary-cyan">
              <Terminal className="w-4 h-4 flex-shrink-0" />
              <span className="font-bold">{currentSim.input}</span>
            </div>

            <div className="bg-black/60 border border-white/10 rounded-xl p-4 font-mono text-text/90 min-h-[160px] whitespace-pre-wrap leading-relaxed shadow-inner">
              {displayedText}
              {isTyping && <span className="inline-block w-2 h-4 bg-accent-magenta ml-1 animate-pulse" />}
            </div>

            <div className="flex justify-between items-center text-[10px] text-muted-text border-t border-white/5 pt-2">
              <span>STATUS: INFERENCE_COMPLETE</span>
              <span>TOKEN_STREAM: 84 tokens/sec</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
