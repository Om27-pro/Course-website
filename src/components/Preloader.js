import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const Preloader = ({ onComplete }) => {
  const preloaderRef = useRef(null);
  const counterRef = useRef(null);
  const textRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Respect prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      if (onComplete) onComplete();
      return;
    }

    let count = { value: 0 };
    const tl = gsap.timeline({
      onComplete: () => {
        if (onComplete) onComplete();
      }
    });

    tl.to(count, {
      value: 100,
      duration: 1.8,
      ease: "power2.inOut",
      onUpdate: () => {
        setProgress(Math.floor(count.value));
      }
    });

    tl.to(textRef.current, {
      opacity: 0,
      y: -20,
      duration: 0.5,
      ease: "power2.in"
    });

    tl.to(preloaderRef.current, {
      yPercent: -100,
      duration: 0.8,
      ease: "power4.inOut"
    });

  }, [onComplete]);

  return (
    <div
      ref={preloaderRef}
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: '#171717',
        color: '#F8F8F5',
        zIndex: 99999,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '3rem 2rem',
        fontFamily: "'Space Grotesk', sans-serif"
      }}
    >
      <div className="d-flex justify-content-between align-items-center">
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.9rem', color: '#625BFF' }}>
          NLTI © DIGITAL EXPERIENCE
        </span>
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.9rem', color: '#A0A0A0' }}>
          CLAT 2026 ACADEMY
        </span>
      </div>

      <div ref={textRef} className="text-center">
        <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 6rem)', fontWeight: 700, letterSpacing: '-0.04em', marginBottom: '1rem' }}>
          EXCELLENCE IN MOTION
        </h1>
        <div style={{ fontSize: 'clamp(3rem, 10vw, 8rem)', fontWeight: 700, color: '#625BFF', fontFamily: "'JetBrains Mono', monospace" }} ref={counterRef}>
          {progress}%
        </div>
      </div>

      <div className="d-flex justify-content-between align-items-center" style={{ fontSize: '0.85rem', color: '#888888' }}>
        <span>LOADING ASSETS...</span>
        <span>AWARDS GRADE EXPERIENCE</span>
      </div>
    </div>
  );
};

export default Preloader;
