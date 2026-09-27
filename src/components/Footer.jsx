import React from 'react';

export default function Footer() {
  return (
    <footer id="contact" className="footer-section">
      <div className="container footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="aera-logo">
                <span className="logo-text">aera</span>
              </div>
              <span className="footer-company">AERA GAS CONTROL SYSTEMS PRIVATE LIMITED</span>
            </div>
            <p className="footer-tagline">"Empowered by innovation for better solutions…"</p>
          </div>

          <div className="footer-info">
            <div className="footer-address">
              <h4>Registered Office & Plant</h4>
              <p>Survey No. 128/3, Dhayari, Taluka-Haveli,</p>
              <p>District - Pune - 411041, Maharashtra, India</p>
            </div>

            <div className="footer-contact">
              <h4>Get in Touch</h4>
              <p>
                <strong>Website:</strong>{' '}
                <a href="https://www.aera-systems.com" target="_blank" rel="noopener noreferrer">
                  www.aera-systems.com
                </a>
              </p>
              <p>
                <strong>Email:</strong>{' '}
                <a href="mailto:marketing@aera-systems.com">
                  marketing@aera-systems.com
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 AERA Gas Control Systems Pvt. Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
