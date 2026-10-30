import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, Play, CheckCircle2 } from 'lucide-react';
import MagneticButton from '../components/MagneticButton';
import Footer from '../components/Footer';

import freeBatchImg from '../assets/freebatch.png';

function CrashCourse() {
  const features = [
    '2+ Live Classes Per Subject Daily',
    'Direct 1:1 Mentorship & Rapid Doubt Clearing',
    '50+ Simulated Full-Length Mock Tests',
    'Comprehensive Legal Revision Notes & PDFs',
    'Topper Strategy & Exam Mindset Sessions',
    'Pre-CLAT Exam Hall Booster Series'
  ];

  const demoVideos = [
    {
      title: 'Legal Reasoning Fast Track Strategy',
      thumbnail: 'https://img.youtube.com/vi/cQ7iRdvwuJ4/0.jpg',
      url: 'https://www.youtube.com/watch?v=cQ7iRdvwuJ4'
    },
    {
      title: 'CLAT Current Affairs & GK High Yield Drills',
      thumbnail: 'https://img.youtube.com/vi/zboGUVKJqdE/0.jpg',
      url: 'https://www.youtube.com/watch?v=zboGUVKJqdE'
    }
  ];

  return (
    <div style={{ backgroundColor: '#F8F8F5', paddingTop: '6rem' }}>
      {/* Hero Banner */}
      <section className="py-5 text-center position-relative">
        <Container className="max-w-5xl mx-auto px-4">
          <div className="badge-pill-accent mb-3 d-inline-flex align-items-center gap-2">
            <Sparkles size={14} /> INTENSIVE FAST-TRACK BATCH
          </div>
          <h1
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              fontWeight: 800,
              letterSpacing: '-0.03em'
            }}
            className="mb-3 text-dark"
          >
            CLAT Crash Course 2026
          </h1>
          <p className="lead text-muted max-w-2xl mx-auto mb-4" style={{ fontSize: '1.2rem', lineHeight: 1.6 }}>
            Accelerate your percentile with high-octane live classes, strategic mock breakdown, and 1-on-1 NLU mentorship.
          </p>
          <div className="d-flex justify-content-center gap-3">
            <Link to="/register" style={{ textDecoration: 'none' }}>
              <MagneticButton style={{ backgroundColor: '#625BFF', color: '#FFF', padding: '1.1rem 2.5rem', fontSize: '1rem' }}>
                Book Your Seat Now <ArrowRight size={18} className="ms-2" />
              </MagneticButton>
            </Link>
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <section className="py-5" style={{ backgroundColor: '#FFFFFF' }}>
        <Container className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-5">
            <span className="font-mono text-uppercase d-block mb-2" style={{ color: '#625BFF', letterSpacing: '0.1em' }}>
              [MODULE HIGHLIGHTS]
            </span>
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '2.5rem', fontWeight: 800 }}>
              What's Included In The Crash Course
            </h2>
          </div>

          <Row className="g-4">
            {features.map((feature, index) => (
              <Col md={4} key={index}>
                <div className="glass-card p-4 h-100 d-flex align-items-start gap-3">
                  <CheckCircle2 size={24} style={{ color: '#625BFF', flexShrink: 0 }} />
                  <div>
                    <h5 className="font-heading mb-0" style={{ fontSize: '1.1rem', lineHeight: 1.4 }}>{feature}</h5>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Schedule Banner */}
      <section className="py-5" style={{ backgroundColor: '#171717', color: '#F8F8F5' }}>
        <Container className="max-w-5xl mx-auto text-center">
          <h3 className="mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '2rem' }}>
            Batch Schedule & Duration
          </h3>
          <div className="row g-4 justify-content-center">
            <div className="col-md-4">
              <div className="p-4 rounded-4" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
                <span className="font-mono text-muted d-block mb-1">BATCH START</span>
                <strong style={{ fontSize: '1.3rem', color: '#625BFF' }}>August 10, 2025</strong>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-4 rounded-4" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
                <span className="font-mono text-muted d-block mb-1">PROGRAM DURATION</span>
                <strong style={{ fontSize: '1.3rem', color: '#625BFF' }}>3 Intensive Months</strong>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-4 rounded-4" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
                <span className="font-mono text-muted d-block mb-1">LEARNING MODE</span>
                <strong style={{ fontSize: '1.3rem', color: '#625BFF' }}>Interactive Live + Hybrid</strong>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Demo Videos Section */}
      <section className="py-5" style={{ backgroundColor: '#F8F8F5' }}>
        <Container className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-5">
            <span className="font-mono text-uppercase d-block mb-2" style={{ color: '#625BFF', letterSpacing: '0.1em' }}>
              [SAMPLE PEDAGOGY]
            </span>
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '2.5rem', fontWeight: 800 }}>
              Watch Free Demo Lectures
            </h2>
          </div>

          <Row className="g-4 justify-content-center">
            {demoVideos.map((video, idx) => (
              <Col md={6} key={idx}>
                <div
                  className="glass-card overflow-hidden p-0 position-relative interactive-hover"
                  style={{ cursor: 'pointer' }}
                  onClick={() => window.open(video.url, '_blank')}
                >
                  <div className="position-relative">
                    <img src={video.thumbnail} alt={video.title} className="w-100" style={{ height: '280px', objectFit: 'cover' }} />
                    <div className="position-absolute top-50 start-50 translate-middle bg-white rounded-circle p-3 shadow-lg d-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px' }}>
                      <Play size={26} style={{ color: '#625BFF', marginLeft: '4px' }} />
                    </div>
                  </div>
                  <div className="p-4">
                    <h5 className="font-heading mb-0">{video.title}</h5>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Free Access Offer */}
      <section className="py-5">
        <Container className="max-w-7xl mx-auto px-4">
          <div className="p-5 rounded-4 shadow-lg text-white position-relative overflow-hidden" style={{ backgroundColor: '#171717', border: '1px solid rgba(98, 91, 255, 0.3)' }}>
            <Row className="align-items-center">
              <Col md={7}>
                <span className="badge-pill-accent mb-3 d-inline-block">LIMITED ACCESSIBILITY</span>
                <h2 className="fw-bold mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '2.5rem' }}>
                  Get Instant Access To Our Foundation Resources
                </h2>
                <p className="text-muted mb-4" style={{ fontSize: '1.1rem' }}>
                  Download high-yield legal reasoning study sheets, current affairs monthly digests, and top NLU strategy guides for free.
                </p>
                <Link to="/register" style={{ textDecoration: 'none' }}>
                  <MagneticButton style={{ backgroundColor: '#625BFF', color: '#FFF', padding: '1rem 2.2rem' }}>
                    Claim Free Access <ArrowRight size={18} className="ms-2" />
                  </MagneticButton>
                </Link>
              </Col>
              <Col md={5} className="mt-4 mt-md-0 text-center">
                <img src={freeBatchImg} alt="Free Batches" className="img-fluid rounded-4 shadow" style={{ maxHeight: '280px', objectFit: 'cover' }} />
              </Col>
            </Row>
          </div>
        </Container>
      </section>

      <Footer />
    </div>
  );
}

export default CrashCourse;
