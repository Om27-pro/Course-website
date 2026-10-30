import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import MagneticButton from './MagneticButton';

const NavbarComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Crash Course', path: '/crash-course' },
    { name: 'Course Detail', path: '/course/1' },
    { name: 'Register Now', path: '/register' },
  ];

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 900,
          padding: scrolled ? '1rem 2rem' : '1.8rem 2rem',
          transition: 'padding 0.4s ease, background-color 0.4s ease, backdrop-filter 0.4s ease',
          backgroundColor: scrolled ? 'rgba(248, 248, 245, 0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(23, 23, 23, 0.08)' : '1px solid transparent',
        }}
      >
        <div className="container-fluid d-flex justify-content-between align-items-center max-w-7xl mx-auto px-0 px-md-4">
          <Link
            to="/"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '1.4rem',
              fontWeight: 800,
              letterSpacing: '-0.04em',
              color: '#171717',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <span
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: '#625BFF',
                display: 'inline-block'
              }}
            />
            NLTI <span style={{ color: '#625BFF', fontWeight: 500, fontSize: '0.9rem' }}>• CLAT</span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="d-none d-md-flex align-items-center" style={{ gap: '2rem' }}>
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.95rem',
                    fontWeight: 500,
                    color: isActive ? '#625BFF' : '#171717',
                    textDecoration: 'none',
                    position: 'relative',
                    transition: 'color 0.25s ease'
                  }}
                  className="interactive-hover"
                >
                  {link.name}
                  {isActive && (
                    <span
                      style={{
                        position: 'absolute',
                        bottom: '-4px',
                        left: 0,
                        right: 0,
                        height: '2px',
                        backgroundColor: '#625BFF',
                        borderRadius: '2px'
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Call to Action */}
          <div className="d-none d-md-block">
            <Link to="/register" style={{ textDecoration: 'none' }}>
              <MagneticButton
                style={{
                  backgroundColor: '#625BFF',
                  color: '#FFFFFF',
                  padding: '0.75rem 1.6rem',
                  fontSize: '0.9rem',
                  boxShadow: '0 8px 20px rgba(98, 91, 255, 0.25)'
                }}
              >
                Enroll Now <ArrowUpRight size={16} style={{ marginLeft: '6px' }} />
              </MagneticButton>
            </Link>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            className="d-md-none border-0 bg-transparent p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Navigation"
            style={{ color: '#171717', zIndex: 1000 }}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: '#171717',
          color: '#F8F8F5',
          zIndex: 850,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          transition: 'transform 0.5s cubic-bezier(0.77, 0, 0.175, 1)',
          transform: isOpen ? 'translateY(0)' : 'translateY(-100%)',
          padding: '2rem'
        }}
      >
        <div className="text-center d-flex flex-column" style={{ gap: '2rem' }}>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '2.2rem',
                fontWeight: 700,
                color: location.pathname === link.path ? '#625BFF' : '#F8F8F5',
                textDecoration: 'none'
              }}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="mt-4">
            <Link to="/register" onClick={() => setIsOpen(false)}>
              <MagneticButton style={{ backgroundColor: '#625BFF', color: '#FFFFFF', padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
                Join CLAT 2026 Batch
              </MagneticButton>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarComponent;
