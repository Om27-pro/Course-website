import React from 'react';

export default function Facility() {
  const facilityBlocks = [
    {
      title: "Production Capacity",
      items: [
        "16,000 sq. ft. of Production facility",
        "50+ employees",
        "We design and build our own assembly lines",
        "Dedicated production line with advanced EOL test rig",
        "Dedicated team for continuous process improvement"
      ]
    },
    {
      title: "Quality Facility",
      items: [
        "Advanced inspection facility at each stage of the process",
        "Periodic training to AERA suppliers to improve supplier base quality standards & productivity",
        "PPM / FTT / COPQ monitoring & mitigation",
        "Dedicated Customer Quality team to drive customer complaint resolution effectively"
      ]
    },
    {
      title: "Product Validation Facility",
      items: [
        "Environmental chamber (-40°C to +150°C)",
        "Hot chamber for high temp. testing",
        "Data Acquisition System",
        "Hydraulic burst test facility",
        "Cyclic testing facility"
      ]
    }
  ];

  return (
    <section id="facility" className="section">
      <div className="container">
        <div className="section-header">
          <h2>Our Infrastructure & Facilities</h2>
          <p className="section-subtitle">World-class capabilities for engineering excellence</p>
        </div>

        <div className="facility-stack">
          {facilityBlocks.map((block, idx) => (
            <div key={idx} className="facility-card">
              <h3 className="facility-card-title">{block.title}</h3>
              <ul className="facility-list">
                {block.items.map((item, itemIdx) => (
                  <li key={itemIdx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
