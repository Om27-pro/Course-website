import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowUpRight, CheckCircle2, Star, Clock, Users, ArrowRight } from 'lucide-react';
import MagneticButton from '../components/MagneticButton';
import Footer from '../components/Footer';

import courseImg1 from '../assets/courseImg1.jpg';
import courseImg2 from '../assets/courseImg2.jpg';
import courseImg3 from '../assets/courseImg3.jpg';
import courseImg4 from '../assets/courseImg4.jpg';
import courseImg5 from '../assets/courseImg5.jpg';
import courseImg6 from '../assets/courseImg6.jpg';

function CoursePage() {
  const { id } = useParams();

  const courseData = {
    crash: {
      title: 'CLAT Crash Course 2026',
      description: 'A power-packed revision and strategy plan designed for last-minute preparation of CLAT with daily expert sessions, mock tests, and mentoring.',
      duration: '3 Months',
      mode: 'Online + Offline Hybrid',
      features: [
        '2+ Live Classes Per Subject Daily',
        'Direct 1:1 Topper Mentorship',
        'Full-Length Mocks & Performance Analytics',
        'Revision Notes & Curated Question Banks',
        'Pre-CLAT Rank Booster Series'
      ]
    },
    target: {
      title: 'CLAT 2026 Target Batch',
      description: 'A full-year focused program with conceptual clarity, intensive practice drills, weekly diagnostic tests, and personalized NLU mentorship.',
      duration: '12 Months',
      mode: 'Hybrid (Live Interactive + Recorded)',
      features: [
        'Fundamental Concept Building Lectures',
        'Weekly & Monthly Diagnostic Mocks',
        '24/7 Dedicated Doubt Resolution',
        '1-on-1 NLU Topper Strategy Calls',
        'Offline Learning Support Centers'
      ]
    }
  };

  const course = courseData[id] || {
    title: courseData.target.title,
    description: courseData.target.description,
    duration: courseData.target.duration,
    mode: courseData.target.mode,
    features: courseData.target.features
  };

  const relatedCourses = [
    {
      id: 1,
      title: 'CLAT 2027 Foundation Batch',
      rating: 4.8,
      reviews: 3483,
      startDate: '20-May-2025',
      duration: '1200+ Hours',
      target: '10th / 11th Students',
      priceOld: '₹300,000',
      priceNew: '₹198,000',
      discount: '34% OFF',
      badge: 'FOUNDATION',
      image: courseImg1
    },
    {
      id: 2,
      title: 'CLAT 2026 Finisher Batch',
      rating: 4.7,
      reviews: 1755,
      startDate: '05-Jun-2025',
      duration: '800+ Hours',
      target: 'For Repeaters & Droppers',
      priceOld: '₹225,000',
      priceNew: '₹99,999',
      discount: '56% OFF',
      badge: 'FINISHER',
      image: courseImg2
    },
    {
      id: 3,
      title: 'CLAT 2026 Target Online Batch',
      rating: 4.9,
      reviews: 2840,
      startDate: '15-Jun-2025',
      duration: '1000+ Hours',
      target: '12th Grade Aspirants',
      priceOld: '₹180,000',
      priceNew: '₹99,000',
      discount: '45% OFF',
      badge: 'TARGET',
      image: courseImg3
    },
    {
      id: 4,
      title: 'CUET Law Special Batch',
      rating: 4.6,
      reviews: 1256,
      startDate: '01-Jul-2025',
      duration: '500+ Hours',
      target: 'CUET Law Aspirants',
      priceOld: '₹80,000',
      priceNew: '₹59,999',
      discount: '25% OFF',
      badge: 'CUET',
      image: courseImg4
    },
    {
      id: 5,
      title: 'CLAT + AILET Combo Batch',
      rating: 4.8,
      reviews: 3321,
      startDate: '18-Jun-2025',
      duration: '1500+ Hours',
      target: '11th & 12th Students',
      priceOld: '₹250,000',
      priceNew: '₹149,000',
      discount: '40% OFF',
      badge: 'COMBO',
      image: courseImg5
    },
    {
      id: 6,
      title: 'CLAT Booster Crash Course',
      rating: 4.9,
      reviews: 2682,
      startDate: '10-Aug-2025',
      duration: '700+ Hours',
      target: 'Crash Aspirants',
      priceOld: '₹150,000',
      priceNew: '₹75,000',
      discount: '50% OFF',
      badge: 'BOOSTER',
      image: courseImg6
    }
  ];

  return (
    <div style={{ backgroundColor: '#F8F8F5', paddingTop: '6rem' }}>
      {/* Header Banner */}
      <section className="py-5">
        <Container className="max-w-5xl mx-auto px-4 text-center">
          <span className="badge-pill-accent mb-3 d-inline-block">OFFICIAL BATCH DETAIL</span>
          <h1
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(2.5rem, 5vw, 4.2rem)',
              fontWeight: 800,
              letterSpacing: '-0.03em'
            }}
            className="mb-3 text-dark"
          >
            {course.title}
          </h1>
          <p className="lead text-muted max-w-2xl mx-auto mb-4" style={{ fontSize: '1.2rem', lineHeight: 1.6 }}>
            {course.description}
          </p>
          <div className="d-flex flex-wrap justify-content-center gap-4 text-dark font-mono mb-4" style={{ fontSize: '0.95rem' }}>
            <div><Clock size={16} className="me-1 text-primary" /> Duration: <strong>{course.duration}</strong></div>
            <div><Users size={16} className="me-1 text-primary" /> Mode: <strong>{course.mode}</strong></div>
          </div>
          <div className="d-flex justify-content-center gap-3">
            <Link to="/register" style={{ textDecoration: 'none' }}>
              <MagneticButton style={{ backgroundColor: '#625BFF', color: '#FFF', padding: '1.1rem 2.8rem', fontSize: '1rem' }}>
                Enroll In This Course <ArrowUpRight size={18} className="ms-2" />
              </MagneticButton>
            </Link>
          </div>
        </Container>
      </section>

      {/* Features */}
      {course.features.length > 0 && (
        <section className="py-5" style={{ backgroundColor: '#FFFFFF' }}>
          <Container className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-5">
              <span className="font-mono text-uppercase d-block mb-2" style={{ color: '#625BFF', letterSpacing: '0.1em' }}>
                [PEDAGOGY HIGHLIGHTS]
              </span>
              <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '2.2rem', fontWeight: 800 }}>
                Program Deliverables & Benefits
              </h2>
            </div>
            <Row className="g-4">
              {course.features.map((item, index) => (
                <Col md={4} key={index}>
                  <div className="glass-card p-4 h-100 d-flex align-items-start gap-3">
                    <CheckCircle2 size={24} style={{ color: '#625BFF', flexShrink: 0 }} />
                    <span className="font-heading" style={{ fontSize: '1.05rem', lineHeight: 1.4 }}>{item}</span>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </section>
      )}

      {/* Related Courses */}
      <section className="py-5" style={{ backgroundColor: '#F8F8F5' }}>
        <Container className="max-w-7xl mx-auto px-4">
          <div className="mb-4">
            <span className="font-mono text-uppercase d-block mb-2" style={{ color: '#625BFF', letterSpacing: '0.1em' }}>
              [EXPLORE OTHER PROGRAMMES]
            </span>
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '2.5rem', fontWeight: 800 }}>
              More Courses From NLTI Academy
            </h2>
          </div>

          <Row className="g-4">
            {relatedCourses.map((item) => (
              <Col md={6} key={item.id}>
                <div className="glass-card p-0 overflow-hidden h-100 d-flex flex-column flex-sm-row">
                  <div className="position-relative" style={{ minWidth: '200px' }}>
                    <img
                      src={item.image}
                      style={{ width: '100%', height: '100%', minHeight: '200px', objectFit: 'cover' }}
                      alt={item.title}
                    />
                    <span className="badge-pill-accent position-absolute top-0 start-0 m-3" style={{ fontSize: '0.75rem', backgroundColor: '#625BFF', color: '#FFF' }}>
                      {item.discount}
                    </span>
                  </div>
                  <div className="p-4 d-flex flex-column justify-content-between w-100">
                    <div>
                      <div className="d-flex align-items-center gap-1 mb-2" style={{ fontSize: '0.85rem' }}>
                        <Star size={16} fill="#625BFF" color="#625BFF" />
                        <strong>{item.rating}</strong>
                        <span className="text-muted">({item.reviews} reviews)</span>
                      </div>
                      <h5 className="font-heading mb-2">{item.title}</h5>
                      <p className="text-muted mb-2" style={{ fontSize: '0.85rem' }}>📅 Starts: <strong>{item.startDate}</strong></p>
                      <p className="text-muted mb-3" style={{ fontSize: '0.85rem' }}>⏱ {item.duration} | 👨‍🎓 {item.target}</p>
                    </div>

                    <div className="d-flex align-items-center justify-content-between pt-3 border-top">
                      <div>
                        <span className="text-muted text-decoration-line-through d-block" style={{ fontSize: '0.8rem' }}>{item.priceOld}</span>
                        <strong style={{ fontSize: '1.1rem', color: '#171717' }}>{item.priceNew}</strong>
                      </div>
                      <Link to="/register" style={{ textDecoration: 'none' }}>
                        <MagneticButton style={{ backgroundColor: '#171717', color: '#FFF', padding: '0.6rem 1.2rem', fontSize: '0.85rem' }}>
                          Enroll <ArrowRight size={14} className="ms-1" />
                        </MagneticButton>
                      </Link>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <Footer />
    </div>
  );
}

export default CoursePage;
