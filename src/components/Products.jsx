import React from 'react';

const ProductCard = ({ name, image }) => {
  return (
    <div className="product-card">
      <div className="product-image-container">
        {image ? (
          <img src={image} alt={name} className="product-image" />
        ) : (
          <div className="placeholder-box">
            <span className="placeholder-text">{name}</span>
          </div>
        )}
      </div>
      <div className="product-info">
        <h4 className="product-name">{name}</h4>
      </div>
    </div>
  );
};

export default function Products() {
  const categoryA = {
    title: 'A) Commercial Vehicles / Transport',
    apps: [
      'Commercial vehicle brake system',
      'Lift axle system for truck & trailer',
      'Door operating system for buses',
      'Auxiliary application for defence vehicle'
    ],
    products: [
      { name: 'Lever Operated Valve', image: null },
      { name: 'Gang Solenoid Valve', image: '/images/products/gang-solenoid-valve.jpg' },
      { name: 'Miniature Solenoid Valve', image: '/images/products/miniature-solenoid-valve.jpg' },
      { name: 'Emergency Brake Valve', image: null },
      { name: 'NO/NC Pressure Switch', image: '/images/products/pressure-sensor-switch.jpg' },
      { name: 'SPDT Pressure Switch', image: null }
    ]
  };

  const categoryB = {
    title: 'B) Agricultural & Industrial Equipment',
    apps: [
      'Agricultural equipment control system',
      'Tractor ignition system',
      'Excavators & cranes',
      'Diesel generator'
    ],
    products: [
      { name: 'Shut Off Solenoid Valve', image: null },
      { name: 'Engine Stop Solenoid Valve', image: '/images/products/engine-stop-solenoid.jpg' },
      { name: 'Directional Control Valve', image: '/images/products/directional-control-valve.jpg' },
      { name: 'Low Pressure Switch', image: null }
    ]
  };

  const categoryC = {
    title: 'C) CNG & Mobility / Railways',
    apps: [
      'CNG operated light commercial vehicle',
      'CNG operated 3W passenger vehicles',
      'Railways'
    ],
    products: [
      { name: '2x2 CNG Solenoid Valve', image: null },
      { name: 'CNG Filter', image: '/images/products/cng-filter.jpg' },
      { name: 'Compact Solenoid Valve', image: '/images/products/pressure-sensor-switch.jpg' },
      { name: 'SPDT Pressure Switch', image: null }
    ]
  };

  const categories = [categoryA, categoryB, categoryC];

  return (
    <section id="products" className="section">
      <div id="competence" style={{ position: 'relative', top: '-80px' }}></div>
      <div className="container">
        <div className="section-header">
          <h2>Products & Competence</h2>
          <p className="section-subtitle">Pneumatic & Hydraulic Products — Solution for each application</p>
        </div>

        {categories.map((cat, index) => (
          <div key={index} className="category-block">
            <h3 className="category-title">{cat.title}</h3>

            <div className="applications-box">
              <span className="apps-heading">Applications:</span>
              <ul className="apps-list">
                {cat.apps.map((app, aIdx) => (
                  <li key={aIdx}>{app}</li>
                ))}
              </ul>
            </div>

            <div className="products-grid">
              {cat.products.map((prod, pIdx) => (
                <ProductCard key={pIdx} name={prod.name} image={prod.image} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
