import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import 'aos/dist/aos.css';
import AOS from 'aos';

// Pages and Components
import NavbarComponent from './components/NavbarComponent';
import Home from './pages/Home';
import CrashCourse from './pages/CrashCourse';
import CoursePage from './pages/CoursePage';
import Register from './pages/Register'; 

function App() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <Router>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/crash-course" element={<CrashCourse />} />
        <Route path="/course/:id" element={<CoursePage />} />
        <Route path="/register" element={<Register />} /> {/* ✅ Register Route */}
      </Routes>
    </Router>
  );
}

export default App;
