"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

const CATEGORY_COLORS: Record<string, string> = {
  Languages: "#00E5FF",
  "Frontend Development": "#8B5CF6",
  "Backend Development": "#FF2EC4",
  "Mobile Development": "#22FF99",
  Databases: "#F59E0B",
  "AI and Automation": "#3B82F6",
  "Tools and Practices": "#EC4899",
};

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const categories = ["All", ...Object.keys(portfolioData.skills)];

  const allSkills = Object.entries(portfolioData.skills).flatMap(([cat, items]) =>
    items.map((item: string) => ({ name: item, category: cat, color: CATEGORY_COLORS[cat] || "#00E5FF" }))
  );

  const filteredSkills =
    activeCategory === "All"
      ? allSkills
      : allSkills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="py-20 relative font-mono">
      <div className="max-w-6xl mx-auto px-4 md:px-8">

        {/* Section Header */}
        <div className="flex items-center space-x-3 mb-8">
          <div className="p-2 rounded-lg bg-secondary-violet/10 border border-secondary-violet/30">
            <Code className="w-5 h-5 text-secondary-violet" />
          </div>
          <div>
            <div className="text-xs text-secondary-violet font-mono tracking-widest uppercase">// CAPABILITY_MATRIX</div>
            <h2 className="text-2xl sm:text-4xl font-bold font-heading text-text">Neural Skill Graph</h2>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs transition-all ${
                activeCategory === cat
                  ? "bg-primary-cyan/20 border border-primary-cyan text-primary-cyan shadow-[0_0_15px_rgba(0,229,255,0.3)] font-semibold"
                  : "bg-white/5 border border-white/10 text-muted-text hover:text-white hover:bg-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Constellation / Graph Canvas representation */}
        <div className="glass-panel rounded-2xl p-6 md:p-8 border border-white/10 relative overflow-hidden">
          <div className="absolute top-2 right-4 text-[10px] text-muted-text flex items-center gap-1.5">
            <span className="w-2 h-2 bg-primary-cyan rounded-full animate-pulse" />
            <span>GRAPH_NODES: {filteredSkills.length}</span>
          </div>

          <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            <AnimatePresence>
              {filteredSkills.map((skill) => {
                const isHovered = hoveredSkill === skill.name;
                return (
                  <motion.div
                    key={skill.name}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    className="group relative p-3.5 rounded-xl bg-surface border border-white/10 hover:border-primary-cyan/50 transition-all cursor-pointer flex flex-col justify-between h-24"
                    style={{
                      boxShadow: isHovered ? `0 0 20px ${skill.color}40` : "none",
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: skill.color }}
                      />
                      <span className="text-[9px] text-muted-text/70 uppercase tracking-wider font-mono">
                        {skill.category.split(" ")[0]}
                      </span>
                    </div>

                    <div className="text-xs font-semibold text-text group-hover:text-primary-cyan transition-colors font-mono line-clamp-2">
                      {skill.name}
                    </div>

                    <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden mt-1">
                      <div
                        className="h-full rounded-full transition-all duration-300"
                        style={{
                          width: isHovered ? "100%" : "65%",
                          backgroundColor: skill.color,
                        }}
                      />
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Category Breakdown Mobile/Fallback Detail Cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(portfolioData.skills).map(([category, items]) => (
            <div
              key={category}
              className="glass-card rounded-2xl p-5 border border-white/10 hover:border-primary-cyan/30 transition-all"
            >
              <div className="flex items-center space-x-2.5 mb-3 border-b border-white/10 pb-2">
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: CATEGORY_COLORS[category] || "#00E5FF" }}
                />
                <h3 className="text-xs font-bold font-heading text-text">{category}</h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {items.map((item: string) => (
                  <span
                    key={item}
                    className="text-[11px] bg-white/5 border border-white/10 hover:border-white/20 text-muted-text hover:text-text px-2 py-1 rounded-md transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
