import React from 'react';

export default function Milestones() {
  return (
    <section id="milestones" className="section alt-bg">
      <div className="container">
        <div className="section-header">
          <h2>Milestones & Growth</h2>
          <p className="section-subtitle">Continuous growth through innovation from the beginning</p>
        </div>

        <div className="milestones-comparison">
          <div className="comparison-card card-past">
            <h3 className="comp-year">2015</h3>
            <div className="comp-metrics">
              <div className="metric">
                <span className="metric-val">3+</span>
                <span className="metric-label">Employees</span>
              </div>
              <div className="metric">
                <span className="metric-val">₹7M</span>
                <span className="metric-label">Turnover</span>
              </div>
              <div className="metric">
                <span className="metric-val">3+</span>
                <span className="metric-label">Product Portfolio</span>
              </div>
            </div>
          </div>

          <div className="comparison-arrow">➔</div>

          <div className="comparison-card card-present">
            <h3 className="comp-year">2025</h3>
            <div className="comp-metrics">
              <div className="metric">
                <span className="metric-val">50+</span>
                <span className="metric-label">Employees</span>
              </div>
              <div className="metric">
                <span className="metric-val">₹130M</span>
                <span className="metric-label">Turnover</span>
              </div>
              <div className="metric">
                <span className="metric-val">60+</span>
                <span className="metric-label">Product Portfolio</span>
              </div>
            </div>
          </div>
        </div>

        <div className="additional-facts-grid">
          <div className="fact-card">
            <span className="fact-num">30%+</span>
            <span className="fact-label">CAGR Growth</span>
          </div>
          <div className="fact-card">
            <span className="fact-num">₹5M+</span>
            <span className="fact-label">Annual Investment on R&D</span>
          </div>
          <div className="fact-card full-width">
            <span className="fact-num">5 Verticals</span>
            <span className="fact-label">Commercial vehicle, 3W passenger & LMV, Earth moving equipment, Gensets, Agricultural equipment</span>
          </div>
        </div>
      </div>
    </section>
  );
}
