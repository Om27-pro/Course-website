import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer bg-dark text-white pt-5 pb-3 mt-5">
      <Container>
        <Row>
          <Col md={4} className="mb-3">
            <h5 className="fw-bold">NLTI</h5>
            <p>Empowering future law aspirants with expert-led coaching and personalized mentorship.</p>
          </Col>
          <Col md={4} className="mb-3">
            <h6 className="fw-bold">Quick Links</h6>
            <ul className="list-unstyled">
              <li><a href="/crash-course">Crash Course</a></li>
              <li><a href="/course/1">Courses</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </Col>
          <Col md={4} className="mb-3">
            <h6 className="fw-bold">Follow Us</h6>
            <div className="social-icons">
              <a href="#"><FaFacebook /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaYoutube /></a>
            </div>
            <p className="mt-2">📞 +91 9876543210<br />✉ info@nlti.in</p>
          </Col>
        </Row>
        <hr className="border-top border-light" />
        <p className="text-center mb-0">© 2025 NLTI. All rights reserved.</p>
      </Container>
    </footer>
  );
}

export default Footer;
