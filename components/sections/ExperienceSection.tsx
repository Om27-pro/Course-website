"use client";

import { motion } from "framer-motion";
import { Terminal, Calendar, MapPin, Briefcase, ChevronRight, CheckCircle2 } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 relative font-mono">
      <div className="max-w-6xl mx-auto px-4 md:px-8">

        {/* Section Header */}
        <div className="flex items-center space-x-3 mb-12">
          <div className="p-2 rounded-lg bg-primary-cyan/10 border border-primary-cyan/30">
            <Terminal className="w-5 h-5 text-primary-cyan" />
          </div>
          <div>
            <div className="text-xs text-primary-cyan font-mono tracking-widest uppercase">// WORKFLOW_HISTORICAL_LOGS</div>
            <h2 className="text-2xl sm:text-4xl font-bold font-heading text-text">System Logs</h2>
          </div>
        </div>

        {/* Timeline Log Container */}
        <div className="relative border-l-2 border-primary-cyan/30 ml-4 md:ml-8 pl-6 md:pl-10 space-y-12">

          {portfolioData.experience.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="relative group"
            >
              {/* Glowing Node Dot */}
              <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-black border-2 border-primary-cyan shadow-[0_0_10px_#00E5FF] group-hover:bg-primary-cyan transition-colors" />

              {/* Log Entry Glass Card */}
              <div className="glass-panel rounded-2xl p-6 md:p-8 border border-white/10 hover:border-primary-cyan/40 transition-all shadow-[0_10px_30px_rgba(0,0,0,0.5)]">

                {/* Header Metadata */}
                <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-white/10 text-xs">
                  <div className="flex items-center space-x-2 text-primary-cyan">
                    <Briefcase className="w-4 h-4" />
                    <span className="font-bold uppercase tracking-wider">{exp.role}</span>
                  </div>
                  <div className="flex items-center space-x-4 text-muted-text">
                    <span className="flex items-center space-x-1">
                      <Calendar className="w-3.5 h-3.5 text-secondary-violet" />
                      <span>{exp.period}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <MapPin className="w-3.5 h-3.5 text-accent-magenta" />
                      <span>{exp.location}</span>
                    </span>
                  </div>
                </div>

                {/* Company & Highlights */}
                <div className="mt-4 space-y-4">
                  <div className="text-lg font-bold font-heading text-text flex items-center gap-2">
                    <span>{exp.company}</span>
                    <span className="text-[10px] font-mono text-success-green bg-success-green/10 border border-success-green/30 px-2 py-0.5 rounded">
                      VERIFIED LOG
                    </span>
                  </div>

                  <ul className="space-y-3 text-xs md:text-sm text-text/80 font-body leading-relaxed">
                    {exp.highlights.map((item, hIdx) => (
                      <li key={hIdx} className="flex items-start space-x-3">
                        <ChevronRight className="w-4 h-4 text-primary-cyan flex-shrink-0 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
