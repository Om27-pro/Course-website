import React, { useState } from 'react';
import { Container, Form, Row, Col } from 'react-bootstrap';
import { Sparkles, CheckCircle, ArrowRight } from 'lucide-react';
import MagneticButton from '../components/MagneticButton';
import Footer from '../components/Footer';

function Register() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ backgroundColor: '#F8F8F5', paddingTop: '7rem' }} className="min-vh-100 d-flex flex-column justify-content-between">
      <Container className="max-w-4xl mx-auto px-4 py-5">
        <Row className="justify-content-center">
          <Col lg={10}>
            <div className="glass-card p-4 p-md-5 shadow-lg position-relative overflow-hidden">
              <div className="badge-pill-accent mb-3 d-inline-flex align-items-center gap-2">
                <Sparkles size={14} /> ADMISSIONS 2026
              </div>

              <h2
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 'clamp(2rem, 4vw, 3rem)',
                  fontWeight: 800,
                  letterSpacing: '-0.03em'
                }}
                className="mb-2 text-dark"
              >
                Register For NLTI CLAT Academy
              </h2>
              <p className="text-muted mb-4" style={{ fontSize: '1.05rem' }}>
                Fill in your details to secure your batch seat and get 1-on-1 counseling from NLU rankers.
              </p>

              {submitted ? (
                <div className="text-center py-5">
                  <div className="p-3 bg-light rounded-circle d-inline-block mb-3" style={{ color: '#625BFF' }}>
                    <CheckCircle size={48} />
                  </div>
                  <h3 className="font-heading mb-2">Registration Submitted Successfully!</h3>
                  <p className="text-muted max-w-md mx-auto mb-4">
                    Our academic counselor will get in touch with you shortly on your provided mobile number.
                  </p>
                  <MagneticButton onClick={() => setSubmitted(false)} style={{ backgroundColor: '#171717', color: '#FFF' }}>
                    Register Another Student
                  </MagneticButton>
                </div>
              ) : (
                <Form onSubmit={handleSubmit}>
                  <Row className="g-3">
                    <Col md={6}>
                      <Form.Group controlId="formName">
                        <Form.Label className="font-mono text-dark fw-bold" style={{ fontSize: '0.85rem' }}>FULL NAME *</Form.Label>
                        <Form.Control type="text" placeholder="e.g. Ananya Sharma" required style={{ padding: '0.8rem 1rem', borderRadius: '8px' }} />
                      </Form.Group>
                    </Col>

                    <Col md={6}>
                      <Form.Group controlId="formEmail">
                        <Form.Label className="font-mono text-dark fw-bold" style={{ fontSize: '0.85rem' }}>EMAIL ADDRESS *</Form.Label>
                        <Form.Control type="email" placeholder="ananya@example.com" required style={{ padding: '0.8rem 1rem', borderRadius: '8px' }} />
                      </Form.Group>
                    </Col>

                    <Col md={6}>
                      <Form.Group controlId="formPhone">
                        <Form.Label className="font-mono text-dark fw-bold" style={{ fontSize: '0.85rem' }}>MOBILE NUMBER *</Form.Label>
                        <Form.Control type="tel" placeholder="+91 98765 43210" required style={{ padding: '0.8rem 1rem', borderRadius: '8px' }} />
                      </Form.Group>
                    </Col>

                    <Col md={6}>
                      <Form.Group controlId="formCity">
                        <Form.Label className="font-mono text-dark fw-bold" style={{ fontSize: '0.85rem' }}>CITY / STATE</Form.Label>
                        <Form.Control type="text" placeholder="e.g. New Delhi" style={{ padding: '0.8rem 1rem', borderRadius: '8px' }} />
                      </Form.Group>
                    </Col>

                    <Col md={12}>
                      <Form.Group controlId="formCourse">
                        <Form.Label className="font-mono text-dark fw-bold" style={{ fontSize: '0.85rem' }}>PREFERRED PROGRAMME *</Form.Label>
                        <Form.Select style={{ padding: '0.8rem 1rem', borderRadius: '8px' }}>
                          <option>CLAT 2026 Intensive Crash Course</option>
                          <option>CLAT 2026 Full-Year Target Batch</option>
                          <option>National Mock Test Series</option>
                          <option>1:1 NLU Ranker Mentorship Only</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>

                  <div className="mt-4 pt-2">
                    <MagneticButton type="submit" style={{ backgroundColor: '#625BFF', color: '#FFFFFF', width: '100%', padding: '1rem' }}>
                      Submit Registration Request <ArrowRight size={18} className="ms-2" />
                    </MagneticButton>
                  </div>
                </Form>
              )}
            </div>
          </Col>
        </Row>
      </Container>

      <Footer />
    </div>
  );
}

export default Register;
