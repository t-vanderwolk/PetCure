
import './index.css';
import HeroSection from './components/HeroSection';
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// function Navbar() {
//   return (
//     <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-md fixed top-0 left-0 right-0 z-50">
//       <Link to="/" className="text-pink-600 text-2xl font-bold">PetCure</Link>
//       <div className="flex gap-6">
//         <Link to="/" className="text-pink-500 hover:underline">Home</Link>
//         <Link to="/about" className="text-pink-500 hover:underline">About</Link>
//       </div>
//     </nav>
//   );
// }

// function Navbar() {
//   return (
//     <nav class="relative inline-block text-left">
  



//     <div class="py-1" role="none">

//      </div> 
  

//         <Link to="/" className="text-pink-600 text-xl font-bold">PetCure
//         {/* <img className="bg-pink-200 w-32 h-32 rounded-full mx-auto mb-4 flex items-center justify-center text-pink-600 font-bold" src="/images/petcure-logo.png" alt='logo' /> */}

//         </Link>
//         <div className="flex space-x-4">
//           <Link to="/" className="text-pink-500 hover:underline">Home</Link>
//           <Link to="/about" className="text-pink-500 hover:underline">About Us</Link>
//           <Link to="/contact" className="text-pink-500 hover:underline">Contact</Link>
//           <Link to="/coming-soon" className="text-pink-500 hover:underline">Coming Soon</Link>
//           <div className="relative group">
//             <button className="text-pink-500 hover:underline">Products ▾</button>
//             <div className="absolute hidden group-hover:block bg-white shadow rounded mt-1">
//               <Link to="/pedisteps" className="block px-4 py-2 text-pink-500 hover:bg-pink-50">PediSteps</Link>
//               <Link to="/pediwalk" className="block px-4 py-2 text-pink-500 hover:bg-pink-50">PediWalk</Link>
//             </div>
//           </div>
//         </div>
      
//     </nav>
//   );
// }


//     // className="text-center p-10">
    
//       {/* <div className="bg-pink-200 w-32 h-32 rounded-full mx-auto mb-4 flex items-center justify-center text-pink-600 font-bold">
//         <img className="bg-pink-200 w-32 h-32 rounded-full mx-auto mb-4 flex items-center justify-center text-pink-600 font-bold" src="/images/petcure-logo.png" alt='logo' />
//       </div> */}
//       {/* <h1 className="text-4xl font-bold text-pink-600 mb-2">Perfect. Polished. Paws.</h1>
//       <p className="text-lg mb-4">Natural nail care solutions for your pet, one step at a time.</p> */}
//       {/* <img src="/images/hero-banner.jpeg" alt="Hero" width='100%' /> */}
   
//   );
// }

function About() {
  return (
    <div className="p-10 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-pink-600 mb-4">About Us</h2>
      <p>
        PetCure is committed to revolutionizing pet nail care with gentle, passive filing solutions. Inspired by real pet parent challenges, we’ve created elegant products that fit into everyday routines — no stress, no clippers.
      </p>
    </div>
  );
}

function Contact() {
  return (
    <div className="p-10 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-pink-600 mb-4">Contact Us</h2>
      <p>We’d love to hear from you! Reach out at: <a href="mailto:hello@petcure.com" className="text-pink-500 underline">hello@petcure.com</a></p>
    </div>
  );
}

function ComingSoon() {
  return (
    <div className="p-10 max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-pink-600 mb-4">Coming Soon</h2>
      <p>Stay tuned for exciting new product drops, seasonal editions, and more!</p>
    </div>
  );
}

function PediSteps() {
  return (
    <div className="p-10 max-w-4xl mx-auto">
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
    <div className="p-10 max-w-4xl mx-auto">
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
   <div>
   <Router>
      {/* <Navbar /> */}
      <HeroSection />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
        <Route path="/pedisteps" element={<PediSteps />} />
        <Route path="/pediwalk" element={<PediWalk />} />
      </Routes>
    </Router>
    </div>
   
  );
}

export default App;