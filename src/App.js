import './index.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HeroSection from './components/HeroSection';

// ✅ Fixed: class -> className in JSX

function Navbar() {
  return (
<nav className="fixed top-0 left-0 right-0 z-50 h-16 px-6 flex items-center justify-between bg-white/30 backdrop-blur-md text-pink-500">      <div className="flex gap-6 text-lg">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/about" className="hover:underline">About</Link>
        <Link to="/contact" className="hover:underline">Contact</Link>
        <Link to="/coming-soon" className="hover:underline">Coming Soon</Link>
        <div className="relative group">
          <button className="hover:underline">Products ▾</button>
          <div className="absolute hidden group-hover:block bg-white/70 backdrop-blur-md text-pink-500 rounded shadow mt-1">
            <Link to="/pedisteps" className="block px-4 py-2 hover:bg-pink-100">PediSteps</Link>
            <Link to="/pediwalk" className="block px-4 py-2 hover:bg-pink-100">PediWalk</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

function Home() {
  
  return <HeroSection />;
 
}

function About() {
  return (
    <div className="p-10 max-w-4xl mx-auto pt-24">
      <h2 className="text-3xl font-bold text-pink-600 mb-4">About Us</h2>
      <p>
        Hi, I’m Taylor — the creator of PetCure and a loving dog mom to two very different (but equally spoiled) pups: Karma, my sweet and spunky 5-year-old Pomsky, and Beatrix (or “Bea” for short), my loyal 4-year-old American Akita. They’ve been my inspiration, my motivation, and—let’s be honest—my product testers and live-in models from day one.
        <br /><br />
        The idea for PetCure was born out of a real problem I faced as a pet parent: the stress, struggle, and expense of regular nail trims. Karma and Bea couldn’t be more different in size, personality, or lifestyle needs, which made it nearly impossible to find one grooming solution that worked for both of them. That’s what pushed me to create something truly different—a natural, passive nail care system that works for all pets, in any type of home.
        <br /><br />
        Our flagship product, PediSteps, are textured stair pads that file your pet’s nails as they walk—no clippers, no groomer visits, no stress. And for homes without stairs, we’re excited to soon launch PediWalk, a hallway version of the same paw-friendly innovation.
        <br /><br />
        At PetCure, our mission is simple: to make pet grooming safer, easier, and more comfortable for pets and their humans. Whether you live in a two-story house or a studio apartment, have a 100-pound Akita or a 10-pound tabby, PetCure is designed to fit seamlessly into your routine—and your home.
        <br /><br />
        Because grooming should feel like care, not a chore. Because every pet deserves a Perfect. Polished. Paw.
      </p>
    </div>
  );
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
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
        <Route path="/pedisteps" element={<PediSteps />} />
        <Route path="/pediwalk" element={<PediWalk />} />
      </Routes>
    </Router>
  );
}

export default App;