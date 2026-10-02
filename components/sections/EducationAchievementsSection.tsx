"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, CheckCircle2, Trophy, Star } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function EducationAchievementsSection() {
  return (
    <section id="education" className="py-20 relative font-mono">
      <div className="max-w-6xl mx-auto px-4 md:px-8 space-y-20">

        {/* Education (Training Data) */}
        <div>
          <div className="flex items-center space-x-3 mb-8">
            <div className="p-2 rounded-lg bg-primary-cyan/10 border border-primary-cyan/30">
              <GraduationCap className="w-5 h-5 text-primary-cyan" />
            </div>
            <div>
              <div className="text-xs text-primary-cyan font-mono tracking-widest uppercase">// ACADEMIC_DATASETS</div>
              <h2 className="text-2xl sm:text-4xl font-bold font-heading text-text">Training Data</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {portfolioData.education.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.15 }}
                className="glass-panel rounded-2xl p-6 border border-white/10 hover:border-primary-cyan/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-center text-[10px] text-muted-text mb-3">
                    <span>STAGE {idx + 1}</span>
                    <span className="text-primary-cyan font-bold">{edu.period}</span>
                  </div>

                  <h3 className="text-sm font-bold font-heading text-text mb-2 line-clamp-2">
                    {edu.degree}
                  </h3>
                  <p className="text-xs text-muted-text/90 font-body mb-4">
                    {edu.institution}
                  </p>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono mb-1.5">
                    <span className="text-muted-text">SCORE</span>
                    <span className="text-success-green font-bold">{edu.score}</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary-cyan to-success-green shadow-[0_0_8px_#22FF99]"
                      style={{
                        width: edu.score.includes("7.2")
                          ? "72%"
                          : edu.score.includes("66")
                          ? "66%"
                          : "84%",
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        <div id="achievements">
          <div className="flex items-center space-x-3 mb-8">
            <div className="p-2 rounded-lg bg-accent-magenta/10 border border-accent-magenta/30">
              <Award className="w-5 h-5 text-accent-magenta" />
            </div>
            <div>
              <div className="text-xs text-accent-magenta font-mono tracking-widest uppercase">// SYSTEM_BENCHMARKS</div>
              <h2 className="text-2xl sm:text-4xl font-bold font-heading text-text">Achievements & Leadership</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {portfolioData.achievements.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.15 }}
                className="glass-card rounded-2xl p-6 border border-white/10 hover:border-accent-magenta/40 transition-all flex items-start space-x-4"
              >
                <div className="p-2.5 rounded-xl bg-accent-magenta/20 text-accent-magenta flex-shrink-0">
                  <Trophy className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-accent-magenta font-bold mb-1">RECORDED MILESTONE</div>
                  <p className="text-xs sm:text-sm text-text/90 font-body leading-relaxed">{item}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
