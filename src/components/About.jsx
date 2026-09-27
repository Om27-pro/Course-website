import React from 'react';

export default function About() {
  return (
    <section id="about" className="section alt-bg">
      <div className="container">
        <div className="section-header">
          <h2>About AERA GCS</h2>
          <p className="section-subtitle">Excellence in Engineering & Quality Systems</p>
        </div>

        <div className="about-grid">
          <div className="about-card vision-card">
            <h3>Our Vision</h3>
            <p>
              To evolve Aera into a world Class Indian brand for innovative and superior products.
            </p>
            <div className="vision-pillars">
              <div className="pillar">
                <span className="pillar-icon">✓</span>
                <span>Product appeal and feel</span>
              </div>
              <div className="pillar">
                <span className="pillar-icon">✓</span>
                <span>Quality and reliability</span>
              </div>
            </div>
          </div>

          <div className="about-card mission-card">
            <h3>Our Mission</h3>
            <ul className="mission-list">
              <li>Accelerate development of new products that our customers want and value.</li>
              <li>Work together effectively as one team.</li>
              <li>Strong technical collaboration with supplier — we are as good as our suppliers.</li>
              <li>To provide a pleasant, nurturing and growth-oriented environment which encourages our employees to be highly productive and to grow personally and professionally.</li>
            </ul>
          </div>
        </div>

        <div className="certifications-section">
          <h4 className="cert-title">Quality Certifications & Qualifications</h4>
          <div className="cert-badges">
            <div className="cert-badge">
              <span className="badge-code">ISO 9001:2015</span>
              <span className="badge-desc">Certified Quality Management</span>
            </div>
            <div className="cert-badge">
              <span className="badge-code">IATF 16949:2016</span>
              <span className="badge-desc">Certified Automotive Standard</span>
            </div>
            <div className="cert-badge">
              <span className="badge-code">VDA 6.3</span>
              <span className="badge-desc">Qualified Process Audit Standard</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
