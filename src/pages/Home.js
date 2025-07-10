import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import VideoSection from '../components/VideoSection';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

import banner from '../assets/banner.jpg';
import whyChooseImg from '../assets/whychoose.jpg';
import image1 from '../assets/image1.avif';
import image2 from '../assets/image2.avif';
import image3 from '../assets/image3.avif';

function Home() {
  return (
    <div>

      {/* Hero Banner Section */}
      <section
        className="hero-section text-white text-center d-flex align-items-center justify-content-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${banner})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '90vh',
          textShadow: '1px 1px 4px rgba(0, 0, 0, 0.7)'
        }}
      >
        <Container data-aos="zoom-in">
          <h1 className="display-4 fw-bold">Ace CLAT 2026 With India’s Best Coaching</h1>
          <p className="lead">Crash Courses • Target Batches • Mock Tests • Mentorship</p>
          <div className="mt-4">
            <Button variant="warning" className="me-2">Join Now</Button>
            <Button variant="light">Get a Call Back</Button>
          </div>
        </Container>
      </section>

      {/* Key Features Section */}
      <section className="py-5 bg-light">
        <Container>
          <h2 className="text-center mb-4" data-aos="fade-up">Key Features</h2>
          <Row className="text-center g-4">
            <Col md={4} data-aos="fade-up">
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <img src={image1} height="60" alt="Live Classes" className="mb-3" />
                  <h5>📚 Live Interactive Classes</h5>
                  <p>Daily expert sessions focused on core concepts.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} data-aos="fade-up" data-aos-delay="100">
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <img src={image2} height="60" alt="Mock Tests" className="mb-3" />
                  <h5>🧠 Mock Tests</h5>
                  <p>Exam-style practice with detailed performance reports.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} data-aos="fade-up" data-aos-delay="200">
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <img src={image3} height="60" alt="Mentorship" className="mb-3" />
                  <h5>🎯 Personal Mentorship</h5>
                  <p>1:1 guidance and strategy planning for every student.</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-5">
        <Container>
          <Row className="align-items-center">
            <Col md={6} data-aos="fade-right">
              <h3>Why Choose NLTI?</h3>
              <ul>
                <li>🏆 Proven Track Record with CLAT Toppers</li>
                <li>📈 Regular Progress Tracking</li>
                <li>💬 Interactive Doubt Solving</li>
                <li>🌐 Access from Anywhere</li>
              </ul>
            </Col>
            <Col md={6} data-aos="fade-left">
              <img
                src={whyChooseImg}
                className="img-fluid rounded shadow"
                alt="Why Choose NLTI"
                data-aos="zoom-in"
                data-aos-delay="200"
                data-aos-duration="1000"
                data-aos-once="true"
              />
            </Col>
          </Row>
        </Container>
      </section>

      

      {/* Upcoming Batch Section */}
      <section className="bg-warning py-5 text-center text-dark" data-aos="flip-up">
        <Container>
          <h3 className="mb-3">🔥 New Crash Course Starting: <strong>10th August 2025</strong></h3>
          <p>Limited seats available. Reserve your spot now!</p>
          <Button variant="dark">Enroll Now</Button>
        </Container>
      </section>

      {/* Final CTA Section */}
      <section className="py-5 text-center bg-dark text-white" data-aos="fade-up">
        <Container>
          <h4>Still have questions?</h4>
          <p>Get a free counseling session with our experts.</p>
          <Button variant="warning">Talk to Us</Button>
        </Container>
      </section>

      {/* Demo Videos */}
      <VideoSection />

      {/* Testimonials */}
      <Testimonials />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
