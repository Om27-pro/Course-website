import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

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
      mode: 'Online + Offline',
      features: [
        '2+ Live Classes Per Subject',
        'Daily Doubt Solving',
        'Full-Length Mocks & PDFs',
        'Mentorship & Strategy Sessions',
        'Pre-CLAT Booster Series'
      ]
    },
    target: {
      title: 'Target Batch 2026',
      description: 'A full-year focused program with conceptual clarity, practice, weekly tests, and personalized mentorship.',
      duration: '12 Months',
      mode: 'Hybrid (Live + Recorded)',
      features: [
        'Concept Building Lectures',
        'Weekly & Monthly Tests',
        'Doubt Clearing Sessions',
        '1-on-1 Mentorship',
        'Offline Support Available'
      ]
    }
  };

  const course = courseData[id] || {
    title: 'Course Not Found',
    description: 'Sorry, we couldn’t find the course you’re looking for.',
    features: []
  };

  const relatedCourses = [
    {
      id: 1,
      title: 'CLAT 2027 Foundation Batch: Offline',
      rating: 4.8,
      reviews: 3483,
      startDate: '20-May-2025',
      duration: '1200+ Hours',
      target: 'For 10th/11th Students',
      priceOld: '₹300,000',
      priceNew: '₹198,000',
      discount: '34% OFF',
      badge: 'FOUNDATION',
      image: courseImg1
    },
    {
      id: 2,
      title: 'CLAT 2026 Finisher Batch: Offline',
      rating: 4.7,
      reviews: 1755,
      startDate: '05-Jun-2025',
      duration: '800+ Hours',
      target: 'For Droppers',
      priceOld: '₹225,000',
      priceNew: '₹99,999',
      discount: '56% OFF',
      badge: 'FINISHER',
      image: courseImg2
    },
    {
      id: 3,
      title: 'CLAT 2026 Target Batch: Online',
      rating: 4.9,
      reviews: 2840,
      startDate: '15-Jun-2025',
      duration: '1000+ Hours',
      target: '12th Students',
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
      target: 'CUET Aspirants',
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
      target: 'Repeaters',
      priceOld: '₹150,000',
      priceNew: '₹75,000',
      discount: '50% OFF',
      badge: 'BOOSTER',
      image: courseImg6
    }
  ];

  return (
    <div className="py-5">
      <Container>
        {/* Header */}
        <Row className="justify-content-center mb-4 text-center">
          <Col lg={8}>
            <h1 className="fw-bold">{course.title}</h1>
            <p className="lead text-muted">{course.description}</p>
            {course.duration && <p><strong>Duration:</strong> {course.duration}</p>}
            {course.mode && <p><strong>Mode:</strong> {course.mode}</p>}
            {course.title !== 'Course Not Found' && (
              <Button variant="warning" size="lg" className="mt-3">Enroll Now</Button>
            )}
          </Col>
        </Row>

        {/* Features */}
        {course.features.length > 0 && (
          <>
            <h4 className="text-center mb-4">What’s Included?</h4>
            <Row className="g-4 mb-5">
              {course.features.map((item, index) => (
                <Col md={4} key={index}>
                  <Card className="h-100 shadow-sm">
                    <Card.Body>
                      <Card.Title>✅ {item}</Card.Title>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </>
        )}

        {/* Related Courses */}
        <h4 className="mb-4 fw-bold">Related Courses</h4>
        <Row className="g-4">
          {relatedCourses.map((item) => (
            <Col md={6} key={item.id}>
              <Card className="h-100 shadow-sm border-0">
                <Row className="g-0">
                  <Col md={4}>
                    <div style={{ position: 'relative' }}>
                      <Card.Img
                        src={item.image}
                        style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                        alt={item.title}
                      />
                      <span className="badge bg-danger" style={{ position: 'absolute', top: 10, left: 10 }}>
                        {item.discount}
                      </span>
                      <div style={{
                        position: 'absolute',
                        bottom: 10,
                        left: 10,
                        background: 'rgba(0,0,0,0.6)',
                        color: 'white',
                        padding: '4px 8px',
                        borderRadius: '4px',
                        fontWeight: 'bold'
                      }}>
                        {item.badge}
                      </div>
                    </div>
                  </Col>
                  <Col md={8}>
                    <Card.Body>
                      <div className="mb-1" style={{ fontSize: '0.9rem' }}>
                        <span className="text-warning">★</span> {item.rating} ({item.reviews})
                      </div>
                      <Card.Title>{item.title}</Card.Title>
                      <p className="mb-1">📅 Starts on: <strong>{item.startDate}</strong></p>
                      <p className="mb-1">⏱️ {item.duration} | 👨‍🎓 {item.target}</p>
                      <div className="d-flex justify-content-between align-items-center mt-3">
                        <div>
                          <div className="text-muted text-decoration-line-through">{item.priceOld}</div>
                          <div className="fw-bold text-danger">{item.priceNew} <small className="text-muted">Excl. GST</small></div>
                        </div>
                        <Button variant="danger">Enroll Now</Button>
                      </div>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default CoursePage;
