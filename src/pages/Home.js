import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowDownRight, ArrowUpRight, Award, Sparkles, BookOpen, Users, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import MagneticButton from '../components/MagneticButton';
import Footer from '../components/Footer';

// Images
import banner from '../assets/banner.jpg';
import whyChooseImg from '../assets/whychoose.jpg';
import image1 from '../assets/image1.avif';
import image2 from '../assets/image2.avif';
import image3 from '../assets/image3.avif';

gsap.registerPlugin(ScrollTrigger);

function Home() {
  const containerRef = useRef(null);

  // Sections refs
  const heroRef = useRef(null);
  const heroTitleRef = useRef(null);
  const heroSubRef = useRef(null);
  const heroButtonsRef = useRef(null);

  const aboutRef = useRef(null);
  const aboutTextRef = useRef(null);

  const showcaseRef = useRef(null);
  const showcaseScrollRef = useRef(null);

  const galleryRef = useRef(null);
  const processRef = useRef(null);

  useGSAP(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    // 1. HERO ANIMATIONS
    const heroTl = gsap.timeline();

    heroTl.from(heroTitleRef.current.querySelectorAll('.hero-char'), {
      y: 80,
      opacity: 0,
      duration: 0.8,
      stagger: 0.02,
      ease: 'power4.out',
      delay: 0.1
    })
    .from(heroSubRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.6,
      ease: 'power3.out'
    }, '-=0.4')
    .from(heroButtonsRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.6,
      ease: 'power3.out'
    }, '-=0.4');

    // Floating parallax on hero visuals
    gsap.to('.hero-float-element', {
      y: -20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });

    // 2. ABOUT WORD-BY-WORD SCROLL REVEAL & PARALLAX
    const words = aboutTextRef.current.querySelectorAll('.about-word');
    gsap.fromTo(words,
      { opacity: 0.1, y: 10 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: aboutRef.current,
          start: 'top 75%',
          end: 'bottom 40%',
          scrub: true,
        }
      }
    );

    gsap.to('.about-parallax-img', {
      yPercent: -20,
      ease: 'none',
      scrollTrigger: {
        trigger: aboutRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    });

    // 3. SHOWCASE HORIZONTAL SCROLL
    if (showcaseScrollRef.current) {
      const showcaseItems = showcaseScrollRef.current;
      const totalWidth = showcaseItems.scrollWidth - window.innerWidth;

      if (totalWidth > 0 && window.innerWidth > 768) {
        gsap.to(showcaseItems, {
          x: () => -totalWidth,
          ease: 'none',
          scrollTrigger: {
            trigger: showcaseRef.current,
            pin: true,
            scrub: 1,
            end: () => `+=${totalWidth}`,
            invalidateOnRefresh: true
          }
        });
      }
    }

    // 4. GALLERY CLIP PATH & SCALE REVEAL
    gsap.utils.toArray('.gallery-item').forEach((item) => {
      const img = item.querySelector('img');
      gsap.fromTo(img,
        { scale: 1.3, clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)' },
        {
          scale: 1,
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
          duration: 1.2,
          ease: 'power3.inOut',
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });

    // 5. PROCESS TIMELINE PROGRESS SVG LINE
    gsap.fromTo('.process-progress-line',
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: 'none',
        transformOrigin: 'top center',
        scrollTrigger: {
          trigger: processRef.current,
          start: 'top 60%',
          end: 'bottom 80%',
          scrub: true
        }
      }
    );

  }, { scope: containerRef });

  // Helper function to split text into words, then chars, so words never break mid-line
  const renderHeroWords = (text) => {
    return text.split(' ').map((word, wIdx) => (
      <span key={wIdx} className="d-inline-block me-3" style={{ whiteSpace: 'nowrap' }}>
        {word.split('').map((char, cIdx) => (
          <span key={cIdx} className="hero-char" style={{ display: 'inline-block' }}>
            {char}
          </span>
        ))}
      </span>
    ));
  };

  const aboutParagraph = "National Law School Training Institute (NLTI) is engineered by top National Law University rankers. We replace passive learning with high-intensity mentorship, precision mock analytics, and adaptive strategy to guarantee your seat at India's top Law Universities.";

  return (
    <div ref={containerRef} className="overflow-hidden">

      {/* SECTION 1: HERO */}
      <section
        ref={heroRef}
        className="min-vh-100 d-flex align-items-center position-relative pt-5"
        style={{
          backgroundColor: '#F8F8F5',
          paddingTop: '6rem'
        }}
      >
        <div className="container max-w-7xl mx-auto px-4 py-5">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <div className="badge-pill-accent mb-4 d-inline-flex align-items-center gap-2">
                <Sparkles size={14} /> ADMISSIONS OPEN FOR CLAT 2026
              </div>

              <h1
                ref={heroTitleRef}
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 'clamp(2.5rem, 5.5vw, 4.8rem)',
                  fontWeight: 800,
                  lineHeight: 1.1,
                  letterSpacing: '-0.04em',
                  color: '#171717'
                }}
                className="mb-4"
              >
                {renderHeroWords("Ace CLAT 2026")} <br />
                <span style={{ color: '#625BFF' }}>{renderHeroWords("With India's Premier")}</span> <br />
                {renderHeroWords("NLU Mentors.")}
              </h1>

              <p
                ref={heroSubRef}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 'clamp(1.1rem, 1.8vw, 1.35rem)',
                  color: '#555555',
                  maxWidth: '620px',
                  lineHeight: 1.6
                }}
                className="mb-5"
              >
                Architecting future legal minds with live strategic sessions, exam-simulation mocks, and 1-on-1 NLU topper guidance.
              </p>

              <div ref={heroButtonsRef} className="d-flex flex-wrap align-items-center gap-3">
                <Link to="/register" style={{ textDecoration: 'none' }}>
                  <MagneticButton
                    style={{
                      backgroundColor: '#625BFF',
                      color: '#FFFFFF',
                      padding: '1.1rem 2.5rem',
                      fontSize: '1.05rem',
                      boxShadow: '0 12px 30px rgba(98, 91, 255, 0.3)'
                    }}
                  >
                    Enroll In Crash Course <ArrowDownRight size={20} className="ms-2" />
                  </MagneticButton>
                </Link>

                <Link to="/crash-course" style={{ textDecoration: 'none' }}>
                  <MagneticButton
                    style={{
                      backgroundColor: 'transparent',
                      color: '#171717',
                      border: '1px solid rgba(23, 23, 23, 0.2)',
                      padding: '1.1rem 2.2rem',
                      fontSize: '1.05rem'
                    }}
                  >
                    Explore Curriculum
                  </MagneticButton>
                </Link>
              </div>
            </div>

            {/* Hero Visual Card / Floating Elements */}
            <div className="col-lg-4 mt-5 mt-lg-0 position-relative">
              <div className="hero-float-element glass-card p-4 shadow-lg position-relative" style={{ borderRadius: '24px', overflow: 'hidden' }}>
                <img
                  src={banner}
                  alt="NLTI Learning Platform"
                  className="img-fluid rounded-4 mb-4"
                  style={{ width: '100%', height: '260px', objectFit: 'cover' }}
                />
                <div className="d-flex align-items-center justify-content-between">
                  <div>
                    <h5 className="mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700 }}>98.4% NLU Success Rate</h5>
                    <p className="mb-0 text-muted" style={{ fontSize: '0.85rem' }}>Based on 2024–2025 Admissions</p>
                  </div>
                  <div className="badge bg-dark text-white rounded-circle p-3 d-flex align-items-center justify-content-center" style={{ width: '48px', height: '48px' }}>
                    <Award size={22} style={{ color: '#D8D4FF' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: ABOUT (Word-by-word reveal + Pinned Parallax) */}
      <section ref={aboutRef} className="py-5 my-5 position-relative" style={{ backgroundColor: '#171717', color: '#F8F8F5' }}>
        <div className="container max-w-7xl mx-auto px-4 py-5">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <span className="font-mono text-uppercase mb-3 d-block" style={{ color: '#625BFF', letterSpacing: '0.1em' }}>
                [01] ABOUT NLTI PEDAGOGY
              </span>
              <div
                ref={aboutTextRef}
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 'clamp(1.6rem, 3.2vw, 2.8rem)',
                  fontWeight: 600,
                  lineHeight: 1.35,
                  letterSpacing: '-0.02em'
                }}
              >
                {aboutParagraph.split(' ').map((word, idx) => (
                  <span key={idx} className="about-word d-inline-block me-2">
                    {word}
                  </span>
                ))}
              </div>
            </div>

            <div className="col-lg-5 mt-5 mt-lg-0 text-center">
              <div className="position-relative overflow-hidden rounded-4 shadow-lg" style={{ maxHeight: '480px' }}>
                <img
                  src={whyChooseImg}
                  alt="Why Choose NLTI"
                  className="about-parallax-img img-fluid w-100 h-100"
                  style={{ objectFit: 'cover', transform: 'scale(1.15)' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: SHOWCASE (Horizontal Scroll) */}
      <section ref={showcaseRef} className="py-5 position-relative" style={{ backgroundColor: '#F8F8F5' }}>
        <div className="container max-w-7xl mx-auto px-4 mb-4">
          <div className="d-flex justify-content-between align-items-end">
            <div>
              <span className="font-mono text-uppercase d-block mb-2" style={{ color: '#625BFF', letterSpacing: '0.1em' }}>
                [02] FEATURED PROGRAMMES
              </span>
              <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 800 }}>
                Tailored Batches for Law Aspirants
              </h2>
            </div>
          </div>
        </div>

        <div className="overflow-hidden py-3">
          <div
            ref={showcaseScrollRef}
            className="d-flex gap-4 px-4 px-md-5"
            style={{ width: 'max-content', willChange: 'transform' }}
          >
            {/* Card 1 */}
            <div className="glass-card p-4" style={{ width: '380px', flexShrink: 0 }}>
              <img src={image1} alt="CLAT Target Batch" className="w-100 rounded-3 mb-3" style={{ height: '220px', objectFit: 'cover' }} />
              <span className="badge-pill-accent mb-2">TARGET BATCH</span>
              <h4 className="mt-2 mb-2 font-heading">CLAT 2026 Target Batch</h4>
              <p className="text-muted mb-4" style={{ fontSize: '0.9rem' }}>Comprehensive 12-month program covering syllabus from fundamentals to advance strategy.</p>
              <Link to="/course/target-batch" style={{ textDecoration: 'none' }}>
                <MagneticButton style={{ backgroundColor: '#171717', color: '#FFF', width: '100%', padding: '0.8rem' }}>
                  Explore Details <ArrowRight size={16} className="ms-2" />
                </MagneticButton>
              </Link>
            </div>

            {/* Card 2 */}
            <div className="glass-card p-4" style={{ width: '380px', flexShrink: 0 }}>
              <img src={image2} alt="CLAT Crash Course" className="w-100 rounded-3 mb-3" style={{ height: '220px', objectFit: 'cover' }} />
              <span className="badge-pill-accent mb-2">INTENSIVE CRASH</span>
              <h4 className="mt-2 mb-2 font-heading">High-Speed Crash Course</h4>
              <p className="text-muted mb-4" style={{ fontSize: '0.9rem' }}>Rapid-fire revision, 50+ mock tests, and daily high-yielding question drills.</p>
              <Link to="/crash-course" style={{ textDecoration: 'none' }}>
                <MagneticButton style={{ backgroundColor: '#625BFF', color: '#FFF', width: '100%', padding: '0.8rem' }}>
                  Enroll Crash Course <ArrowRight size={16} className="ms-2" />
                </MagneticButton>
              </Link>
            </div>

            {/* Card 3 */}
            <div className="glass-card p-4" style={{ width: '380px', flexShrink: 0 }}>
              <img src={image3} alt="Mock Test Series" className="w-100 rounded-3 mb-3" style={{ height: '220px', objectFit: 'cover' }} />
              <span className="badge-pill-accent mb-2">TEST SERIES</span>
              <h4 className="mt-2 mb-2 font-heading">National Mock Series</h4>
              <p className="text-muted mb-4" style={{ fontSize: '0.9rem' }}>All India ranking, percentile tracking, and video solutions for every question.</p>
              <Link to="/course/mock-series" style={{ textDecoration: 'none' }}>
                <MagneticButton style={{ backgroundColor: '#171717', color: '#FFF', width: '100%', padding: '0.8rem' }}>
                  Join Test Series <ArrowRight size={16} className="ms-2" />
                </MagneticButton>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: FEATURES GRID (Staggered Reveal) */}
      <section className="py-5" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container max-w-7xl mx-auto px-4 py-5">
          <div className="text-center max-w-2xl mx-auto mb-5">
            <span className="font-mono text-uppercase d-block mb-2" style={{ color: '#625BFF', letterSpacing: '0.1em' }}>
              [03] THE NLTI ADVANTAGE
            </span>
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', fontWeight: 800 }}>
              Engineered For High Rank Performance
            </h2>
          </div>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="glass-card p-4 h-100">
                <div className="p-3 bg-light rounded-circle d-inline-block mb-3" style={{ color: '#625BFF' }}>
                  <BookOpen size={28} />
                </div>
                <h4 className="font-heading mb-3">Live Interactive Classes</h4>
                <p className="text-muted" style={{ lineHeight: 1.6 }}>Daily live streams with direct real-time question clearance, strategy breakdown, and legal reasoning drills.</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="glass-card p-4 h-100">
                <div className="p-3 bg-light rounded-circle d-inline-block mb-3" style={{ color: '#625BFF' }}>
                  <Users size={28} />
                </div>
                <h4 className="font-heading mb-3">1:1 NLU Mentorship</h4>
                <p className="text-muted" style={{ lineHeight: 1.6 }}>Personalized guidance sessions with top NLS / NALSAR rankers to review test mistakes and mindset.</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="glass-card p-4 h-100">
                <div className="p-3 bg-light rounded-circle d-inline-block mb-3" style={{ color: '#625BFF' }}>
                  <Award size={28} />
                </div>
                <h4 className="font-heading mb-3">Adaptive Analytics Mocks</h4>
                <p className="text-muted" style={{ lineHeight: 1.6 }}>AI-backed mock analytics pinpointing speed, accuracy, section time drain, and error patterns.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: GALLERY (Clip Path & Parallax) */}
      <section ref={galleryRef} className="py-5" style={{ backgroundColor: '#F8F8F5' }}>
        <div className="container max-w-7xl mx-auto px-4 py-5">
          <div className="mb-5">
            <span className="font-mono text-uppercase d-block mb-2" style={{ color: '#625BFF', letterSpacing: '0.1em' }}>
              [04] CAMPUS & COMMUNITY
            </span>
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 800 }}>
              Life At National Law Universities
            </h2>
          </div>

          <div className="row g-4">
            <div className="col-md-7 gallery-item">
              <div className="position-relative overflow-hidden rounded-4 shadow" style={{ height: '360px' }}>
                <img src={image1} alt="Campus atmosphere" className="w-100 h-100" style={{ objectFit: 'cover' }} />
              </div>
            </div>
            <div className="col-md-5 gallery-item">
              <div className="position-relative overflow-hidden rounded-4 shadow" style={{ height: '360px' }}>
                <img src={image2} alt="Moot court prep" className="w-100 h-100" style={{ objectFit: 'cover' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: PROCESS TIMELINE (Scroll Progress Line) */}
      <section ref={processRef} className="py-5 position-relative" style={{ backgroundColor: '#171717', color: '#F8F8F5' }}>
        <div className="container max-w-7xl mx-auto px-4 py-5">
          <div className="text-center max-w-2xl mx-auto mb-5">
            <span className="font-mono text-uppercase d-block mb-2" style={{ color: '#625BFF', letterSpacing: '0.1em' }}>
              [05] ROADMAP TO NLU
            </span>
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', fontWeight: 800 }}>
              4-Step Preparation Journey
            </h2>
          </div>

          <div className="position-relative max-w-3xl mx-auto">
            {/* Animated central vertical line */}
            <div
              className="process-progress-line position-absolute top-0 bottom-0"
              style={{
                left: '50%',
                width: '3px',
                backgroundColor: '#625BFF',
                transform: 'translateX(-50%)'
              }}
            />

            {/* Step 1 */}
            <div className="row mb-5 align-items-center">
              <div className="col-6 text-end pe-4">
                <span className="font-mono text-muted" style={{ color: '#625BFF' }}>PHASE 01</span>
                <h4 className="font-heading">Diagnostic Assessment</h4>
                <p className="text-muted" style={{ fontSize: '0.9rem' }}>Initial benchmark mock to identify strengths in GK, English, Logical & Legal Reasoning.</p>
              </div>
              <div className="col-6 ps-4">
                <div className="p-3 glass-card text-dark d-inline-block">
                  <CheckCircle2 size={24} style={{ color: '#625BFF' }} /> Step Completed
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="row mb-5 align-items-center">
              <div className="col-6 text-end pe-4">
                <div className="p-3 glass-card text-dark d-inline-block">
                  <CheckCircle2 size={24} style={{ color: '#625BFF' }} /> Concept Mastery
                </div>
              </div>
              <div className="col-6 ps-4">
                <span className="font-mono text-muted" style={{ color: '#625BFF' }}>PHASE 02</span>
                <h4 className="font-heading">Core Live Classes</h4>
                <p className="text-muted" style={{ fontSize: '0.9rem' }}>800+ hours of live conceptual training with NLU top faculties.</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="row align-items-center">
              <div className="col-6 text-end pe-4">
                <span className="font-mono text-muted" style={{ color: '#625BFF' }}>PHASE 03</span>
                <h4 className="font-heading">Simulated Mock Sprints</h4>
                <p className="text-muted" style={{ fontSize: '0.9rem' }}>Weekly exam condition mocks with deep analytical diagnostic dashboards.</p>
              </div>
              <div className="col-6 ps-4">
                <div className="p-3 glass-card text-dark d-inline-block">
                  <CheckCircle2 size={24} style={{ color: '#625BFF' }} /> Peak Readiness
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: CONTACT / CTA & FOOTER */}
      <section className="py-5 text-center" style={{ backgroundColor: '#F8F8F5' }}>
        <div className="container max-w-4xl mx-auto px-4 py-5">
          <span className="badge-pill-accent mb-3">READY TO ELEVATE YOUR RANK?</span>
          <h2 className="mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(2.5rem, 5vw, 4.2rem)', fontWeight: 800, letterSpacing: '-0.03em' }}>
            Start Your Journey To A Top National Law University Today
          </h2>
          <div className="d-flex justify-content-center gap-3">
            <Link to="/register" style={{ textDecoration: 'none' }}>
              <MagneticButton style={{ backgroundColor: '#625BFF', color: '#FFF', padding: '1.2rem 2.8rem', fontSize: '1.1rem' }}>
                Join Batch Now <ArrowUpRight size={20} className="ms-2" />
              </MagneticButton>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
