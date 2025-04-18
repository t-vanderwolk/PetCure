import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import { ShoppingCart } from "lucide-react";

function HomePage() {
  return (
    <section className="bg-pink-100 py-12 text-center">
      <h2 className="text-4xl font-bold text-pink-800 mb-4">Welcome to PetCure</h2>
      <p className="text-lg text-gray-700 mb-6">Stress-free nail care for pets—just Step, File, Repeat.</p>
      <Button className="bg-pink-600 text-white px-6 py-2 rounded-full">
        <Link to="/products">Shop Now</Link>
      </Button>
    </section>
  );
}

function ProductsPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
      <Card>
        <CardContent className="p-6">
          <img src="/images/pedisteps_mockup.jpg" alt="PediSteps" className="rounded-xl mb-4" />
          <h3 className="text-2xl font-semibold text-pink-700 mb-2">PediSteps</h3>
          <p className="text-gray-700 mb-4">Textured stair pads that file your dog’s nails as they walk. Includes 80-grit black or blush pink emery sheets.</p>
          <Button className="bg-pink-600 text-white"><ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart</Button>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <img src="/images/pediwalk_mockup.jpg" alt="PediWalk" className="rounded-xl mb-4" />
          <h3 className="text-2xl font-semibold text-pink-700 mb-2">PediWalk</h3>
          <p className="text-gray-700 mb-4">The hallway version of PediSteps for homes without stairs. Customize your length and width.</p>
          <Button className="bg-pink-600 text-white"><ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart</Button>
        </CardContent>
      </Card>
    </main>
  );
}

function AboutPage() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-12 text-center">
      <h2 className="text-3xl font-bold text-pink-700 mb-4">About PetCure</h2>
      <p className="text-gray-700">PetCure is revolutionizing pet nail care with stress-free, passive solutions that protect both your pet and your floors. Our products are designed with style, safety, and simplicity in mind.</p>
    </section>
  );
}

function ContactPage() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-12 text-center">
      <h2 className="text-3xl font-bold text-pink-700 mb-4">Contact Us</h2>
      <p className="text-gray-700">Questions? Email us at support@petcure.com or follow us on Instagram @petcure.</p>
    </section>
  );
}

function ComingSoonPage() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-pink-700 text-center mb-6">Coming Soon!</h2>
      <p className="text-gray-700 text-center mb-4">We're expanding our product line to offer:</p>
      <ul className="text-gray-700 list-disc list-inside mb-8">
        <li>Emery Paper in Blush Pink, Beige, and White</li>
        <li>Seasonal and Patterned Designs</li>
        <li>PediSteps Hardwood Edition with non-slip PVC backing</li>
        <li>PediWalk Hardwood Edition for smooth-surface hallways</li>
      </ul>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <img src="/images/logo.jpeg" alt="PetCure Logo" className="rounded-lg shadow-md" />
        <img src="/images/hardwood_mockup.png" alt="Hardwood Mockup" className="rounded-lg shadow-md" />
        <img src="/images/color_pattern_mockup.png" alt="Color and Pattern Options" className="rounded-lg shadow-md" />
        <img src="/images/pomsky_stairs.png" alt="Pomsky on Staircase" className="rounded-lg shadow-md" />
        <img src="/images/blush_pomsky_mockup.png" alt="Blush Pink PediSteps with Pomsky" className="rounded-lg shadow-md" />
      </div>
      <div className="text-center mt-8">
        <p className="text-gray-600 mb-4">Follow us on social media for launch announcements and early access offers!</p>
        <Button className="bg-pink-600 text-white px-4 py-2 rounded-full">Join Our Waitlist</Button>
      </div>
    </section>
  );
}

export default function PetCureEcommerceMockup() {
  return (
    <Router>
      <div className="min-h-screen bg-white text-gray-800 font-sans">
        <header className="bg-pink-200 py-4 shadow-md">
          <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
            <h1 className="text-3xl font-bold text-pink-700">PetCure</h1>
            <nav className="space-x-4 text-sm">
              <Link to="/" className="text-pink-700 hover:underline">Home</Link>
              <Link to="/products" className="text-pink-700 hover:underline">Products</Link>
              <Link to="/about" className="text-pink-700 hover:underline">About</Link>
              <Link to="/contact" className="text-pink-700 hover:underline">Contact</Link>
              <Link to="/coming-soon" className="text-pink-700 hover:underline">Coming Soon</Link>
            </nav>
          </div>
        </header>

        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/coming-soon" element={<ComingSoonPage />} />
        </Routes>

        <footer className="bg-pink-50 py-6 mt-12 text-center text-gray-500 text-sm">
          &copy; 2025 PetCure. All rights reserved.
        </footer>
      </div>
    </Router>
  );
}

