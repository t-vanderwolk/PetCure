import './index.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link,  useLocation  } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import About from './pages/About';
import Navbar from './components/Navbar';
// ✅ Fixed: class -> className in JSX


function AppContent() {
  const location = useLocation();

  // Only show Navbar if not on home page
  const showNavbar = location.pathname !== '/';

  return (
    <>
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
        <Route path="/pedisteps" element={<PediSteps />} />
        <Route path="/pediwalk" element={<PediWalk />} />
      </Routes>
    </>
  );
}

function Home() {
  
  return (
  <div className='top-0 left-0 w-full h-full object-contain'>
   <HeroSection />;
 </div>
  )
}



function Contact() {
  return (
    <div className="p-10 max-w-4xl mx-auto pt-24">
      <h2 className="text-3xl font-bold text-pink-600 mb-4">Contact Us</h2>
      <p>
        We’d love to hear from you! Reach out at:{" "}
        <a href="mailto:hello@petcure.com" className="text-pink-500 underline">
          hello@petcure.com
        </a>
      </p>
    </div>
  );
}

function ComingSoon() {
  return (
    <div className="p-10 max-w-4xl mx-auto pt-24 text-center">
      <h2 className="text-3xl font-bold text-pink-600 mb-4">Coming Soon</h2>
      <p>Stay tuned for exciting new product drops, seasonal editions, and more!</p>
    </div>
  );
}

function PediSteps() {
  return (
    <div className="p-10 max-w-4xl mx-auto pt-24">
      <h2 className="text-3xl font-bold text-pink-600 mb-4">PediSteps</h2>
      <img src="/images/pedi-steps.png" alt="PediSteps" className="rounded shadow mb-4" />
      <p>
        PediSteps are textured stair pads designed to gently file your pet’s nails as they move up and down stairs. Featuring a dual-layer design of non-slip backing and 80-grit emery surface, they offer a natural, passive grooming solution that blends right into your home.
      </p>
    </div>
  );
}

function PediWalk() {
  return (
    <div className="p-10 max-w-4xl mx-auto pt-24">
      <h2 className="text-3xl font-bold text-pink-600 mb-4">PediWalk</h2>
      <img src="/images/pedi-walk.png" alt="PediWalk" className="rounded shadow mb-4" />
      <p>
        PediWalk is designed for homes without stairs. These modular hallway-friendly pads use the same emery surface as PediSteps, helping your dog file their nails just by walking around. Customizable in length and easy to clean.
      </p>
    </div>
  );
}

function App() {
  return (
  
    <Router>
<AppContent />
    </Router>
  );
}

export default App;