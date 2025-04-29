import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="/images/petcure-logo-pink.png" 
                alt="PetCure Logo" 
                className="h-20 md:h-20 object-contain"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-pink-500 font-semibold transition">
              Home
            </Link>

            {/* About Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsAboutOpen(true)}
              onMouseLeave={() => setIsAboutOpen(false)}
            >
              <Link 
                to="/about" 
                className="text-gray-700 hover:text-pink-500 font-semibold transition"
              >
                About ▾
              </Link>

              {isAboutOpen && (
                <div className="absolute mt-2 w-52 rounded-2xl shadow-lg bg-white border border-pink-200 z-20">
                  <div className="py-2 flex flex-col">
                    <a 
                      href="/about#compare"
                      className="px-5 py-3 text-gray-700 hover:bg-pink-50 hover:text-pink-600 font-medium transition rounded-t-2xl"
                    >
                      Compare
                    </a>
                    <a 
                      href="/about#invest"
                      className="px-5 py-3 text-gray-700 hover:bg-pink-50 hover:text-pink-600 font-medium transition rounded-b-2xl"
                    >
                      Invest
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Products Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsProductsOpen(true)}
              onMouseLeave={() => setIsProductsOpen(false)}
            >
              <Link 
                to="/products" 
                className="text-gray-700 hover:text-pink-500 font-semibold transition"
              >
                Products ▾
              </Link>

              {isProductsOpen && (
                <div className="absolute mt-2 w-52 rounded-2xl shadow-lg bg-white border border-pink-200 z-20">
                  <div className="py-2 flex flex-col">
                    <Link 
                      to="/pedisteps" 
                      className="px-5 py-3 text-gray-700 hover:bg-pink-50 hover:text-pink-600 font-medium transition rounded-t-2xl"
                    >
                      PediSteps
                    </Link>
                    <Link 
                      to="/pediwalk" 
                      className="px-5 py-3 text-gray-700 hover:bg-pink-50 hover:text-pink-600 font-medium transition"
                    >
                      PediWalk
                    </Link>
                    <Link 
                      to="/products#coming-soon" 
                      className="px-5 py-3 text-gray-700 hover:bg-pink-50 hover:text-pink-600 font-medium transition rounded-b-2xl"
                    >
                      Coming Soon ✨
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Other Nav Links */}
            <Link to="/blog" className="text-gray-700 hover:text-pink-500 font-semibold transition">
              Blog
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-pink-500 font-semibold transition">
              Contact
            </Link>
          </div>

          {/* Hamburger Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-pink-500 text-3xl focus:outline-none"
            >
              ☰
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="bg-white shadow-md rounded-b-2xl py-4 px-6 flex flex-col space-y-4 md:hidden">
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-700 hover:text-pink-500 font-semibold transition">
            Home
          </Link>
          <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-700 hover:text-pink-500 font-semibold transition">
            About
          </Link>
          <a href="/about#compare" onClick={() => setIsMobileMenuOpen(false)} className="pl-4 text-gray-700 hover:text-pink-500 font-semibold transition">
            - Compare
          </a>
          <a href="/about#invest" onClick={() => setIsMobileMenuOpen(false)} className="pl-4 text-gray-700 hover:text-pink-500 font-semibold transition">
            - Invest
          </a>
          <Link to="/products" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-700 hover:text-pink-500 font-semibold transition">
            Products
          </Link>
          <Link to="/pedisteps" onClick={() => setIsMobileMenuOpen(false)} className="pl-4 text-gray-700 hover:text-pink-500 font-semibold transition">
            - PediSteps
          </Link>
          <Link to="/pediwalk" onClick={() => setIsMobileMenuOpen(false)} className="pl-4 text-gray-700 hover:text-pink-500 font-semibold transition">
            - PediWalk
          </Link>
          <Link to="/coming-soon" onClick={() => setIsMobileMenuOpen(false)} className="pl-4 text-gray-700 hover:text-pink-500 font-semibold transition">
            - Coming Soon
          </Link>
          <Link to="/blog" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-700 hover:text-pink-500 font-semibold transition">
            Blog
          </Link>
          <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-700 hover:text-pink-500 font-semibold transition">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;