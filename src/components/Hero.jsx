import React from 'react';

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">AERA Gas Control Systems Pvt. Ltd.</h1>
          <p className="hero-subheadline">Empowered by innovation for better solutions…</p>
          <p className="hero-intro">
            We at AERA GCS are focused on delivering high-quality, reliable pneumatic and hydraulic solutions across commercial, agricultural, industrial, and mobility sectors. We design, engineer, and manufacture advanced products tailored to our customer needs.
          </p>
          <a href="#products" className="btn btn-primary">
            View Our Products
          </a>
        </div>
        <div className="hero-visual">
          <div className="hero-grid">
            <div className="hero-card">
              <img
                src="/images/products/gang-solenoid-valve.jpg"
                alt="Gang Solenoid Valve"
                className="hero-img"
              />
              <span className="hero-card-label">Gang Solenoid Valve</span>
            </div>
            <div className="hero-card">
              <img
                src="/images/products/engine-stop-solenoid.jpg"
                alt="Engine Stop Solenoid Valve"
                className="hero-img"
              />
              <span className="hero-card-label">Engine Stop Solenoid Valve</span>
            </div>
            <div className="hero-card">
              <img
                src="/images/products/miniature-solenoid-valve.jpg"
                alt="Miniature Solenoid Valve"
                className="hero-img"
              />
              <span className="hero-card-label">Miniature Solenoid Valve</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
