// src/components/Navbar.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigate = useNavigate();

  // Smooth Scroll Handler
  const handleScrollToSection = (path, id) => {
    navigate(path);

    setTimeout(() => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 150); // slight delay to let route update
    setIsProductsOpen(false);
    setIsAboutOpen(false);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white/70 backdrop-blur-md shadow-md fixed top-0 left-0 w-full z-50 border-b border-pink-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/images/petcure-logo-pink.png" 
              alt="PetCure Logo" 
              className="h-16 object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">

            {/* About Dropdown */}
            <div className="relative">
              <div className="flex items-center space-x-1">
                <button
                  onClick={() => {
                    navigate('/about');
                    setIsProductsOpen(false);
                    setIsAboutOpen(false);
                  }}
                  className="text-pink-500 hover:text-pink-600 font-semibold text-lg transition focus:outline-none"
                >
                  About
                </button>
                <button
                  onClick={() => {
                    setIsAboutOpen(!isAboutOpen);
                    setIsProductsOpen(false);
                  }}
                  className="text-pink-400 hover:text-pink-500 text-lg focus:outline-none"
                >
                  ▾
                </button>
              </div>

              {isAboutOpen && (
                <div className="absolute mt-2 w-48 bg-white/90 backdrop-blur-md rounded-2xl shadow-lg border border-pink-200 z-30">
                  <button
                    onClick={() => handleScrollToSection('/about', 'compare')}
                    className="block w-full text-left px-6 py-3 text-gray-700 hover:bg-pink-100 hover:text-pink-600 font-medium transition rounded-t-2xl"
                  >
                    Compare
                  </button>
                  <button
                    onClick={() => handleScrollToSection('/about', 'invest')}
                    className="block w-full text-left px-6 py-3 text-gray-700 hover:bg-pink-100 hover:text-pink-600 font-medium transition rounded-b-2xl"
                  >
                    Invest
                  </button>
                </div>
              )}
            </div>

            {/* Products Dropdown */}
            <div className="relative">
              <div className="flex items-center space-x-1">
                <button
                  onClick={() => {
                    navigate('/products');
                    setIsProductsOpen(false);
                    setIsAboutOpen(false);
                  }}
                  className="text-pink-500 hover:text-pink-600 font-semibold text-lg transition focus:outline-none"
                >
                  Products
                </button>
                <button
                  onClick={() => {
                    setIsProductsOpen(!isProductsOpen);
                    setIsAboutOpen(false);
                  }}
                  className="text-pink-400 hover:text-pink-500 text-lg focus:outline-none"
                >
                  ▾
                </button>
              </div>

              {isProductsOpen && (
                <div className="absolute mt-2 w-48 bg-white/90 backdrop-blur-md rounded-2xl shadow-lg border border-pink-200 z-30">
                  <Link 
                    to="/pedisteps" 
                    onClick={() => setIsProductsOpen(false)}
                    className="block px-6 py-3 text-gray-700 hover:bg-pink-100 hover:text-pink-600 font-medium transition rounded-t-2xl"
                  >
                    PediSteps
                  </Link>
                  <Link 
                    to="/pediwalk" 
                    onClick={() => setIsProductsOpen(false)}
                    className="block px-6 py-3 text-gray-700 hover:bg-pink-100 hover:text-pink-600 font-medium transition"
                  >
                    PediWalk
                  </Link>
                  <button
                    onClick={() => handleScrollToSection('/products', 'coming-soon')}
                    className="block w-full text-left px-6 py-3 text-gray-700 hover:bg-pink-100 hover:text-pink-600 font-medium transition rounded-b-2xl"
                  >
                    Coming Soon ✨
                  </button>
                </div>
              )}
            </div>

            {/* Static Links */}
            <Link to="/blog" className="text-pink-500 hover:text-pink-600 font-semibold text-lg transition">
              Blog
            </Link>
            <Link to="/contact" className="text-pink-500 hover:text-pink-600 font-semibold text-lg transition">
              Contact
            </Link>
            <Link to="/facts" className="text-pink-500 hover:text-pink-600 font-semibold text-lg transition">
              FAQ
            </Link>

          </div>

          {/* Hamburger Menu */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-3xl text-pink-500 focus:outline-none"
            >
              ☰
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="bg-white/90 backdrop-blur-md border-t border-pink-100 shadow-md rounded-b-2xl py-6 px-6 flex flex-col space-y-4 md:hidden z-50">
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="text-pink-500 hover:text-pink-600 font-semibold text-lg transition">
            Home
          </Link>
          <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-pink-500 hover:text-pink-600 font-semibold text-lg transition">
            About
          </Link>
          <button onClick={() => handleScrollToSection('/about', 'compare')} className="pl-6 text-gray-700 hover:text-pink-500 font-medium transition">
            - Compare
          </button>
          <button onClick={() => handleScrollToSection('/about', 'invest')} className="pl-6 text-gray-700 hover:text-pink-500 font-medium transition">
            - Invest
          </button>
          <Link to="/products" onClick={() => setIsMobileMenuOpen(false)} className="text-pink-500 hover:text-pink-600 font-semibold text-lg transition">
            Products
          </Link>
          <Link to="/pedisteps" onClick={() => setIsMobileMenuOpen(false)} className="pl-6 text-gray-700 hover:text-pink-500 font-medium transition">
            - PediSteps
          </Link>
          <Link to="/pediwalk" onClick={() => setIsMobileMenuOpen(false)} className="pl-6 text-gray-700 hover:text-pink-500 font-medium transition">
            - PediWalk
          </Link>
          <button onClick={() => handleScrollToSection('/products', 'coming-soon')} className="pl-6 text-gray-700 hover:text-pink-500 font-medium transition">
            - Coming Soon
          </button>
          <Link to="/blog" onClick={() => setIsMobileMenuOpen(false)} className="text-pink-500 hover:text-pink-600 font-semibold text-lg transition">
            Blog
          </Link>
          <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="text-pink-500 hover:text-pink-600 font-semibold text-lg transition">
            Contact
          </Link>
          <Link to="/facts" onClick={() => setIsMobileMenuOpen(false)} className="text-pink-500 hover:text-pink-600 font-semibold text-lg transition">
            FAQ
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
