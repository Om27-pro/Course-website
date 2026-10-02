"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trail, setTrail] = useState<{ x: number; y: number; id: number }[]>([]);
  const [isPointer, setIsPointer] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouchDevice(true);
      return;
    }

    let count = 0;
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Check if target is clickable
      const target = e.target as HTMLElement;
      const clickable =
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.onclick !== null ||
        target.closest("button") !== null ||
        target.closest("a") !== null;

      setIsPointer(clickable);

      // Trail particles
      count++;
      if (count % 3 === 0) {
        setTrail((prev) => [
          ...prev.slice(-8),
          { x: e.clientX, y: e.clientY, id: Date.now() + Math.random() },
        ]);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  if (isTouchDevice) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Main glowing dot */}
      <div
        className={`fixed w-4 h-4 rounded-full border border-primary-cyan transition-transform duration-75 -translate-x-1/2 -translate-y-1/2 ${
          isPointer ? "scale-150 bg-primary-cyan/40 shadow-[0_0_15px_#00E5FF]" : "bg-primary-cyan/20 shadow-[0_0_8px_#00E5FF]"
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />

      {/* Outer subtle ring */}
      <div
        className={`fixed w-8 h-8 rounded-full border border-secondary-violet/40 transition-all duration-300 -translate-x-1/2 -translate-y-1/2 ${
          isPointer ? "scale-125 border-primary-cyan" : "scale-100"
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />

      {/* Trailing particle dots */}
      {trail.map((p, i) => (
        <div
          key={p.id}
          className="fixed w-1.5 h-1.5 rounded-full bg-primary-cyan/60 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-500"
          style={{
            left: `${p.x}px`,
            top: `${p.y}px`,
            opacity: (i + 1) / trail.length,
            transform: `translate(-50%, -50%) scale(${(i + 1) / trail.length})`,
          }}
        />
      ))}
    </div>
  );
}
