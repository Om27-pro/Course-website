import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#05060A",
        surface: "rgba(255, 255, 255, 0.04)",
        "surface-hover": "rgba(255, 255, 255, 0.08)",
        "primary-cyan": "#00E5FF",
        "secondary-violet": "#8B5CF6",
        "accent-magenta": "#FF2EC4",
        "success-green": "#22FF99",
        text: "#E6EDF7",
        "muted-text": "#8A94A8",
      },
      fontFamily: {
        heading: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      backgroundImage: {
        "cyan-violet-gradient": "linear-gradient(135deg, #00E5FF 0%, #8B5CF6 100%)",
        "violet-magenta-gradient": "linear-gradient(135deg, #8B5CF6 0%, #FF2EC4 100%)",
        "cyber-grid": "radial-gradient(circle, rgba(0, 229, 255, 0.1) 1px, transparent 1px)",
      },
      animation: {
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        "scanline": "scanline 8s linear infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        pulseGlow: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.05)" },
        },
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(1000%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
