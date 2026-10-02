"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      setPercentage(Math.round(latest * 100));
    });
  }, [scrollYProgress]);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
      <motion.div
        className="h-1 bg-gradient-to-r from-primary-cyan via-secondary-violet to-accent-magenta origin-left shadow-[0_0_10px_#00E5FF]"
        style={{ scaleX }}
      />
      <div className="absolute top-2 right-4 font-mono text-[10px] text-primary-cyan/70 tracking-widest bg-black/60 backdrop-blur-md px-2 py-0.5 rounded border border-primary-cyan/20">
        PIPELINE READ: {percentage}%
      </div>
    </div>
  );
}
