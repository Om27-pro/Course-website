import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './CrashCourse.css';
import freeBatchImg from '../assets/freebatch.png';

function CrashCourse() {
  const features = [
    '2+ Live Classes Per Subject',
    'Mentorship & Doubt Clearing',
    'Full-Length Mock Tests',
    'Revision Notes & PDFs',
    'Strategy Sessions with Experts',
    'Pre-CLAT Crash Plan'
  ];

  const demoVideos = [
    {
      title: 'Legal Reasoning Fast Track',
      thumbnail: 'https://img.youtube.com/vi/cQ7iRdvwuJ4/0.jpg',
      url: 'https://www.youtube.com/watch?v=cQ7iRdvwuJ4'
    },
    {
      title: 'CLAT GK Tips',
      thumbnail: 'https://img.youtube.com/vi/zboGUVKJqdE/0.jpg',
      url: 'https://www.youtube.com/watch?v=zboGUVKJqdE'
    }
  ];

  return (
    <div>
      {/* Hero Banner */}
      <div className="bg-warning text-dark text-center py-5">
        <Container>
          <h1 className="fw-bold">CLAT Crash Course 2026</h1>
          <p className="lead">⚡ Limited-Time Offer – Enroll Now!</p>
          <Button variant="dark" size="lg">Book Your Seat</Button>
        </Container>
      </div>

      {/* Features Section */}
      <Container className="py-5">
        <h2 className="text-center mb-4">What's Included?</h2>
        <Row className="g-4">
          {features.map((feature, index) => (
            <Col md={4} key={index}>
              <Card className="h-100 shadow-sm text-center p-3">
                <Card.Body>
                  <Card.Title>✅ {feature}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Schedule Section */}
      <Container className="py-4 bg-light text-center">
        <h3 className="mb-3">Course Schedule</h3>
        <p><strong>📅 Starts: August 10, 2025</strong></p>
        <p><strong>⏱ Duration: 3 Months</strong></p>
        <p><strong>🧑‍🏫 Mode: Online & Offline</strong></p>
      </Container>

      {/* Demo Videos Section */}
      <Container className="py-5 demo-lectures">
        <h2 className="text-center fw-bold mb-4">Watch Demo Lectures</h2>
        <Row className="g-4 justify-content-center">
          {demoVideos.map((video, idx) => (
            <Col md={5} key={idx}>
              <Card
                className="h-100 shadow-sm border-0"
                style={{ cursor: 'pointer' }}
                onClick={() => window.open(video.url, '_blank')}
              >
                <Card.Img variant="top" src={video.thumbnail} />
                <Card.Body>
                  <Card.Title className="text-center">{video.title}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Free Batch Access Section */}
      <section className="free-batch-section my-5">
        <Container>
          <div className="bg-lightpink rounded-4 p-4 shadow-sm">
            <Row className="align-items-center">
              <Col md={6}>
                <h2 className="fw-bold mb-3">Get access to our free batches now</h2>
                <p className="text-muted mb-4">Get instant access to high quality material</p>
                <Button variant="danger" size="lg">Join for free</Button>
              </Col>
              <Col md={6}>
                <img src={freeBatchImg} alt="Free Batches" className="img-fluid" />
              </Col>
            </Row>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <div className="bg-dark text-white text-center py-5">
        <Container>
          <h3 className="mb-3">🚀 Final Batch Filling Fast</h3>
          <p>Don’t miss your chance to join India’s most trusted CLAT Crash Course.</p>
          <Button variant="warning" size="lg">Enroll Today</Button>
        </Container>
      </div>
    </div>
  );
}

export default CrashCourse;
