import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import WhyChooseAera from './components/WhyChooseAera';
import Facility from './components/Facility';
import Milestones from './components/Milestones';
import Customers from './components/Customers';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <WhyChooseAera />
        <Facility />
        <Milestones />
        <Customers />
      </main>
      <Footer />
    </div>
  );
}

export default App;
