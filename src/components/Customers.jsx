import React from 'react';

export default function Customers() {
  const majorCustomers = [
    "Haldex",
    "Duncan",
    "Shavo",
    "BPW",
    "Knorr-Bremse",
    "Franklin Wadcorpp",
    "Tapco",
    "Advik"
  ];

  const indirectBeneficiaries = [
    "Mahindra",
    "Ashok Leyland",
    "Bajaj",
    "Generac",
    "Tata",
    "Volvo",
    "Daimler",
    "Eicher"
  ];

  return (
    <section id="customers" className="section">
      <div className="container">
        <div className="section-header">
          <h2>Our Major Customers</h2>
          <p className="section-subtitle">Trusted by industry leaders worldwide</p>
        </div>

        <div className="customer-group">
          <h3 className="customer-group-title">Direct Customers</h3>
          <div className="customer-grid">
            {majorCustomers.map((cust, idx) => (
              <div key={idx} className="customer-badge">
                <span className="customer-name">{cust}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="customer-group" style={{ marginTop: '2.5rem' }}>
          <h3 className="customer-group-title">Indirect Beneficiaries</h3>
          <div className="customer-grid">
            {indirectBeneficiaries.map((beneficiary, idx) => (
              <div key={idx} className="customer-badge indirect-badge">
                <span className="customer-name">{beneficiary}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
