import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

const MagneticButton = ({ children, className = '', onClick, style = {}, ...props }) => {
  const buttonRef = useRef(null);

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    if (window.matchMedia('(hover: none) and (pointer: coarse)').matches) return;

    const handleMouseMove = (e) => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);

      gsap.to(button, {
        x: x * 0.3,
        y: y * 0.3,
        duration: 0.4,
        ease: 'power2.out'
      });
    };

    const handleMouseLeave = () => {
      gsap.to(button, {
        x: 0,
        y: 0,
        duration: 0.7,
        ease: 'elastic.out(1, 0.3)'
      });
    };

    button.addEventListener('mousemove', handleMouseMove);
    button.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      button.removeEventListener('mousemove', handleMouseMove);
      button.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <button
      ref={buttonRef}
      className={`magnetic-btn ${className}`}
      onClick={onClick}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0.9rem 2.2rem',
        borderRadius: '9999px',
        border: 'none',
        outline: 'none',
        backgroundColor: '#171717',
        color: '#FFFFFF',
        fontFamily: "'Space Grotesk', sans-serif",
        fontWeight: 600,
        fontSize: '0.95rem',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease, color 0.3s ease, transform 0.2s ease',
        willChange: 'transform',
        ...style
      }}
      {...props}
    >
      {children}
    </button>
  );
};

export default MagneticButton;
