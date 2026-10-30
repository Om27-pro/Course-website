import React, { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Disable on mobile / touch
    if (window.matchMedia('(hover: none) and (pointer: coarse)').matches) {
      return;
    }

    const cursor = cursorRef.current;
    const follower = followerRef.current;

    let mouseX = -100;
    let mouseY = -100;
    let followerX = -100;
    let followerY = -100;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (cursor) {
        cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      }
    };

    const loop = () => {
      followerX += (mouseX - followerX) * 0.15;
      followerY += (mouseY - followerY) * 0.15;
      if (follower) {
        follower.style.transform = `translate3d(${followerX}px, ${followerY}px, 0) translate(-50%, -50%)`;
      }
      requestAnimationFrame(loop);
    };

    const handleMouseEnterInteractive = () => setIsHovered(true);
    const handleMouseLeaveInteractive = () => setIsHovered(false);

    window.addEventListener('mousemove', onMouseMove);
    const animId = requestAnimationFrame(loop);

    // Attach listeners to interactive elements dynamically
    const updateInteractives = () => {
      const interactives = document.querySelectorAll('a, button, input, .magnetic-btn, .interactive-hover');
      interactives.forEach(el => {
        el.addEventListener('mouseenter', handleMouseEnterInteractive);
        el.addEventListener('mouseleave', handleMouseLeaveInteractive);
      });
    };

    updateInteractives();

    const observer = new MutationObserver(updateInteractives);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animId);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className={`custom-cursor ${isHovered ? 'hovering' : ''}`}
      />
      <div
        ref={followerRef}
        className="custom-cursor-follower"
        style={{
          transform: isHovered ? 'translate(-50%, -50%) scale(1.5)' : 'translate(-50%, -50%) scale(1)'
        }}
      />
    </>
  );
};

export default CustomCursor;
