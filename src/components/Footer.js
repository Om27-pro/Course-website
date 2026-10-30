import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Mail, Phone, MapPin, ShieldCheck } from 'lucide-react';
import MagneticButton from './MagneticButton';

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: '#171717',
        color: '#F8F8F5',
        paddingTop: '5rem',
        paddingBottom: '3rem',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)'
      }}
    >
      <div className="container max-w-7xl mx-auto px-4">
        <div className="row g-5 mb-5">
          {/* Col 1 */}
          <div className="col-lg-5">
            <Link
              to="/"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '1.8rem',
                fontWeight: 800,
                color: '#F8F8F5',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px'
              }}
              className="mb-4"
            >
              <span style={{ width: '14px', height: '14px', borderRadius: '50%', backgroundColor: '#625BFF' }} />
              NLTI ACADEMY
            </Link>
            <p className="mt-3 text-muted" style={{ fontSize: '1rem', maxWidth: '400px', lineHeight: 1.6 }}>
              India's premier National Law School prep institute. Architected by top NLU alumni to transform CLAT aspirants into legal leaders.
            </p>
            <div className="d-flex align-items-center gap-2 mt-4 text-muted" style={{ fontSize: '0.85rem', fontFamily: "'JetBrains Mono', monospace" }}>
              <ShieldCheck size={18} style={{ color: '#625BFF' }} /> VERIFIED NLU PEDAGOGY
            </div>
          </div>

          {/* Col 2 */}
          <div className="col-lg-3 col-6">
            <h5 className="font-heading mb-4" style={{ color: '#625BFF', fontSize: '1.1rem' }}>Quick Navigation</h5>
            <ul className="list-unstyled d-flex flex-column gap-3" style={{ fontSize: '0.95rem' }}>
              <li>
                <Link to="/" style={{ color: '#A0A0A0', textDecoration: 'none' }} className="interactive-hover">
                  Home Experience
                </Link>
              </li>
              <li>
                <Link to="/crash-course" style={{ color: '#A0A0A0', textDecoration: 'none' }} className="interactive-hover">
                  Crash Course
                </Link>
              </li>
              <li>
                <Link to="/course/1" style={{ color: '#A0A0A0', textDecoration: 'none' }} className="interactive-hover">
                  Course Modules
                </Link>
              </li>
              <li>
                <Link to="/register" style={{ color: '#A0A0A0', textDecoration: 'none' }} className="interactive-hover">
                  Student Registration
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3 */}
          <div className="col-lg-4 col-6">
            <h5 className="font-heading mb-4" style={{ color: '#625BFF', fontSize: '1.1rem' }}>Contact & Support</h5>
            <div className="d-flex flex-column gap-3 text-muted" style={{ fontSize: '0.95rem' }}>
              <div className="d-flex align-items-center gap-2">
                <Mail size={18} style={{ color: '#625BFF' }} />
                <span>admissions@nlti.in</span>
              </div>
              <div className="d-flex align-items-center gap-2">
                <Phone size={18} style={{ color: '#625BFF' }} />
                <span>+91 98765 43210</span>
              </div>
              <div className="d-flex align-items-center gap-2">
                <MapPin size={18} style={{ color: '#625BFF' }} />
                <span>NLSIU Campus Rd, Bengaluru, KA</span>
              </div>
            </div>

            <div className="mt-4">
              <Link to="/register" style={{ textDecoration: 'none' }}>
                <MagneticButton style={{ backgroundColor: '#625BFF', color: '#FFF', padding: '0.8rem 1.8rem', fontSize: '0.9rem' }}>
                  Reserve Seat <ArrowUpRight size={16} className="ms-1" />
                </MagneticButton>
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-4 border-top border-secondary d-flex flex-column flex-md-row justify-content-between align-items-center gap-3" style={{ fontSize: '0.85rem', color: '#777777', fontFamily: "'JetBrains Mono', monospace" }}>
          <div>© {new Date().getFullYear()} NLTI. ALL RIGHTS RESERVED.</div>
          <div>PRIVACY POLICY • TERMS OF ADMISSION</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
