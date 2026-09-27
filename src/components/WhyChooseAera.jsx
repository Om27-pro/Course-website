import React from 'react';

export default function WhyChooseAera() {
  const bullets = [
    "Almost two decades of industry experience",
    "Proven track record of innovation and reliability",
    "Strong MNC customer base",
    "In-house R&D and testing",
    "Custom-engineered solutions",
    "Agile and responsive support"
  ];

  return (
    <section id="why-choose-us" className="section alt-bg">
      <div className="container">
        <div className="section-header">
          <h2>Why Choose AERA</h2>
          <p className="section-subtitle">Your Trusted Partner in Advanced Control Systems</p>
        </div>

        <div className="why-bullets-grid">
          {bullets.map((item, idx) => (
            <div key={idx} className="why-bullet-card">
              <span className="bullet-check">✓</span>
              <span className="bullet-text">{item}</span>
            </div>
          ))}
        </div>

        <div className="features-boxes">
          <div className="feature-box">
            <h3 className="feature-title">Product Customization</h3>
            <p className="feature-desc">
              We offer customized solution through reverse engineering as per customer requirement.
            </p>
          </div>

          <div className="feature-box">
            <h3 className="feature-title">System Integration</h3>
            <p className="feature-desc">
              We have expertise in offering product integration to customer system as per their application.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
