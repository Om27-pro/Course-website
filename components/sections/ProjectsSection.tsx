"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, ExternalLink, Github, Sparkles, Cpu, Layers, X, CheckCircle2 } from "lucide-react";
import { portfolioData, ProjectItem } from "@/data/portfolio";
import N8nWorkflowVisualizer from "./N8nWorkflowVisualizer";

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section id="projects" className="py-20 relative font-mono">
      <div className="max-w-6xl mx-auto px-4 md:px-8">

        {/* Section Header */}
        <div className="flex items-center space-x-3 mb-8">
          <div className="p-2 rounded-lg bg-primary-cyan/10 border border-primary-cyan/30">
            <Cpu className="w-5 h-5 text-primary-cyan" />
          </div>
          <div>
            <div className="text-xs text-primary-cyan font-mono tracking-widest uppercase">// PRODUCTION_SYSTEMS</div>
            <h2 className="text-2xl sm:text-4xl font-bold font-heading text-text">Deployed Models</h2>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-muted-text font-body max-w-2xl mb-10">
          Full-cycle applications and automated messaging architectures delivered across full-stack, mobile, and GenAI domains.
        </p>

        {/* Featured Special N8n Workflow Visualizer */}
        <div className="mb-12">
          <N8nWorkflowVisualizer />
        </div>

        {/* Projects Deployment Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolioData.projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -4 }}
              className="glass-panel rounded-2xl p-6 border border-white/10 hover:border-primary-cyan/50 transition-all flex flex-col justify-between group relative overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary-cyan/5 rounded-full blur-xl group-hover:bg-primary-cyan/15 transition-colors pointer-events-none" />

              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4 text-xs">
                  <span className="text-muted-text/80 font-mono text-[10px]">MODEL_ID: {project.id.toUpperCase()}</span>
                  <span className="flex items-center space-x-1 text-success-green bg-success-green/10 border border-success-green/30 px-2 py-0.5 rounded text-[10px]">
                    <span className="w-1.5 h-1.5 bg-success-green rounded-full animate-pulse" />
                    <span>PRODUCTION</span>
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-lg font-bold font-heading text-text group-hover:text-primary-cyan transition-colors mb-2">
                  {project.name}
                </h3>
                <p className="text-xs sm:text-sm text-muted-text/90 font-body leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              <div>
                {/* Tech Stack Chips */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] bg-white/5 border border-white/10 text-primary-cyan/90 px-2.5 py-1 rounded-md font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Inspect Details Button */}
                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full flex items-center justify-center space-x-2 bg-white/5 hover:bg-primary-cyan/15 border border-white/10 hover:border-primary-cyan/40 text-xs font-semibold text-text hover:text-primary-cyan py-2.5 rounded-xl transition-all"
                >
                  <Code2 className="w-4 h-4" />
                  <span>INSPECT DEPLOYMENT DETAILS</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl glass-panel rounded-2xl p-6 md:p-8 border border-primary-cyan/50 shadow-[0_0_50px_rgba(0,229,255,0.3)] z-10 font-mono max-h-[90vh] overflow-y-auto"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <div className="flex items-center space-x-2 text-primary-cyan text-xs font-bold">
                  <Sparkles className="w-4 h-4" />
                  <span>SYSTEM_SPEC_INSPECTOR</span>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-1 rounded-lg text-muted-text hover:text-white hover:bg-white/10 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-bold font-heading text-text mb-3">
                {selectedProject.name}
              </h3>
              <p className="text-xs sm:text-sm text-text/90 font-body leading-relaxed mb-6">
                {selectedProject.description}
              </p>

              {/* Tech Stack Breakdown */}
              <div className="mb-6">
                <div className="text-xs font-bold text-secondary-violet mb-2">TECHNOLOGY STACK & DEPENDENCIES</div>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.stack.map((item) => (
                    <span
                      key={item}
                      className="text-xs bg-secondary-violet/10 border border-secondary-violet/30 text-secondary-violet px-3 py-1 rounded-lg"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Architecture highlights */}
              <div className="p-4 bg-white/5 border border-white/10 rounded-xl space-y-2 text-xs text-muted-text font-body mb-6">
                <div className="text-primary-cyan font-bold font-mono">DEPLOYMENT HIGHLIGHTS:</div>
                <ul className="list-disc list-inside space-y-1">
                  <li>Fault-tolerant architecture with low latency REST/webhook communication.</li>
                  <li>Strict component isolation and optimized memory/Core Web Vitals footprint.</li>
                  <li>Tested & validated for production scalability and real-time execution.</li>
                </ul>
              </div>

              <div className="flex justify-end">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="bg-primary-cyan text-black px-6 py-2.5 rounded-xl font-semibold text-xs hover:bg-primary-cyan/80 transition-colors"
                >
                  CLOSE INSPECTOR
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
