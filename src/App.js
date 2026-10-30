import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Flip } from 'gsap/Flip';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import Lenis from 'lenis';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './App.css';

// Components
import NavbarComponent from './components/NavbarComponent';
import CustomCursor from './components/CustomCursor';
import Preloader from './components/Preloader';

// Pages
import Home from './pages/Home';
import CrashCourse from './pages/CrashCourse';
import CoursePage from './pages/CoursePage';
import Register from './pages/Register';

// Register GSAP Plugins globally
gsap.registerPlugin(ScrollTrigger, Flip, MotionPathPlugin);

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    ScrollTrigger.refresh();
  }, [pathname]);

  return null;
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
    });

    // Synchronize Lenis scroll with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    const updateGSAPTicker = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateGSAPTicker);
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(updateGSAPTicker);
    };
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <CustomCursor />
      {loading ? (
        <Preloader onComplete={() => setLoading(false)} />
      ) : (
        <div className="app-container">
          <NavbarComponent />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/crash-course" element={<CrashCourse />} />
            <Route path="/course/:id" element={<CoursePage />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      )}
    </Router>
  );
}

export default App;
