"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Play, RotateCcw, CheckCircle2, Zap, ArrowRight, Server, ShieldCheck, MessageSquare, AlertCircle, Sparkles } from "lucide-react";

export default function N8nWorkflowVisualizer() {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  const steps = [
    { id: 1, title: "Webhook Trigger", desc: "Incoming WhatsApp / IG Message", type: "trigger", icon: MessageSquare },
    { id: 2, title: "Condition Node", desc: "Intent & Keyword Filter", type: "condition", icon: Zap },
    { id: 3, title: "API Integration", desc: "WhatsApp Biz / IG Graph API", type: "action", icon: Server },
    { id: 4, title: "Error Handler / Retry", desc: "Fault-tolerant Fallback", type: "error", icon: ShieldCheck },
    { id: 5, title: "Response Delivered", desc: "Sub-second Delivery", type: "success", icon: CheckCircle2 },
  ];

  const handleRunWorkflow = () => {
    if (isRunning) return;
    setIsRunning(true);
    setActiveStep(1);

    let stepCounter = 1;
    const interval = setInterval(() => {
      stepCounter++;
      if (stepCounter <= steps.length) {
        setActiveStep(stepCounter);
      } else {
        setIsRunning(false);
        clearInterval(interval);
      }
    }, 700);
  };

  return (
    <div className="glass-panel rounded-2xl p-6 border border-primary-cyan/40 bg-black/60 shadow-[0_0_30px_rgba(0,229,255,0.15)] font-mono">
      {/* Title & Action Bar */}
      <div className="flex flex-wrap items-center justify-between pb-4 mb-6 border-b border-white/10 gap-3">
        <div>
          <div className="flex items-center space-x-2 text-primary-cyan text-xs font-bold">
            <Sparkles className="w-4 h-4" />
            <span>N8N WORKFLOW PIPELINE VISUALIZER</span>
          </div>
          <p className="text-[11px] text-muted-text font-body mt-0.5">
            Fault-tolerant business messaging pipeline for WhatsApp & Instagram DM
          </p>
        </div>

        <button
          onClick={handleRunWorkflow}
          disabled={isRunning}
          className="flex items-center space-x-2 bg-gradient-to-r from-primary-cyan to-secondary-violet hover:opacity-90 disabled:opacity-50 text-black font-semibold px-4 py-2 rounded-xl text-xs shadow-[0_0_15px_#00E5FF] transition-all"
        >
          {isRunning ? (
            <>
              <RotateCcw className="w-3.5 h-3.5 animate-spin" />
              <span>EXECUTING PIPELINE...</span>
            </>
          ) : (
            <>
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>RUN WORKFLOW</span>
            </>
          )}
        </button>
      </div>

      {/* Interactive Workflow Diagram Nodes */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-3 relative py-4">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          const isActive = activeStep === step.id;
          const isPassed = activeStep > step.id;

          return (
            <div key={step.id} className="relative flex flex-col items-center">
              {/* Node Card */}
              <motion.div
                animate={{
                  scale: isActive ? 1.05 : 1,
                  borderColor: isActive
                    ? "#00E5FF"
                    : isPassed
                    ? "#22FF99"
                    : "rgba(255,255,255,0.1)",
                }}
                className={`w-full p-3.5 rounded-xl border text-center transition-all bg-surface/80 backdrop-blur-md ${
                  isActive
                    ? "shadow-[0_0_20px_#00E5FF] bg-primary-cyan/10"
                    : isPassed
                    ? "bg-success-green/10 border-success-green/40"
                    : "hover:border-white/20"
                }`}
              >
                <div className="flex justify-center mb-2">
                  <div
                    className={`p-2 rounded-lg ${
                      isActive
                        ? "bg-primary-cyan text-black"
                        : isPassed
                        ? "bg-success-green text-black"
                        : "bg-white/5 text-muted-text"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <div className="text-xs font-bold text-text line-clamp-1">{step.title}</div>
                <div className="text-[10px] text-muted-text mt-1 font-body leading-tight">
                  {step.desc}
                </div>

                {/* Packet travelling indicator */}
                {isActive && (
                  <div className="mt-2 text-[9px] text-primary-cyan font-bold animate-pulse">
                    PROCESSING...
                  </div>
                )}
                {isPassed && (
                  <div className="mt-2 text-[9px] text-success-green font-bold flex items-center justify-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>PASSED</span>
                  </div>
                )}
              </motion.div>

              {/* Connecting arrow for desktop */}
              {idx < steps.length - 1 && (
                <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-muted-text/40">
                  <ArrowRight
                    className={`w-4 h-4 ${
                      isPassed ? "text-success-green" : isActive ? "text-primary-cyan animate-bounce" : ""
                    }`}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Execution Console Output */}
      <div className="mt-4 p-3 bg-black/80 rounded-xl border border-white/10 text-[11px] font-mono text-muted-text flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="w-2 h-2 rounded-full bg-success-green animate-ping" />
          <span>
            {activeStep === 0
              ? "STATUS: Ready to execute workflow"
              : activeStep <= steps.length
              ? `EXECUTING NODE ${activeStep}: ${steps[activeStep - 1]?.title}`
              : "STATUS: Pipeline execution complete (0 errors)"}
          </span>
        </div>
        <span className="text-primary-cyan">LATENCY: 142ms</span>
      </div>
    </div>
  );
}
