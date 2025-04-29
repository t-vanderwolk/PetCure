// src/components/Navbar.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigate = useNavigate();

  const handleNavigateAndClose = (path) => {
    navigate(path);
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
                  onClick={() => handleNavigateAndClose('/about')}
                  className="relative text-pink-500 hover:text-pink-600 font-semibold text-lg transition after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-pink-400 after:transition-all after:duration-300 hover:after:w-full"
                >
                  About
                </button>
                <button
                  onClick={() => {
                    setIsAboutOpen(!isAboutOpen);
                    setIsProductsOpen(false);
                  }}
                  className="text-gray-500 hover:text-pink-400 text-lg focus:outline-none"
                >
                  ▾
                </button>
              </div>

              {isAboutOpen && (
                <div className="absolute mt-2 w-48 bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg border border-pink-200 z-30">
                  <a 
                    href="/about#compare"
                    className="block px-6 py-3 text-gray-700 hover:bg-pink-100 hover:text-pink-600 font-medium transition rounded-t-2xl"
                  >
                    Compare
                  </a>
                  <a 
                    href="/about#invest"
                    className="block px-6 py-3 text-gray-700 hover:bg-pink-100 hover:text-pink-600 font-medium transition rounded-b-2xl"
                  >
                    Invest
                  </a>
                </div>
              )}
            </div>

            {/* Products Dropdown */}
            <div className="relative">
              <div className="flex items-center space-x-1">
                <button
                  onClick={() => handleNavigateAndClose('/products')}
                  className="relative text-pink-500 hover:text-pink-600 font-semibold text-lg transition after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-pink-400 after:transition-all after:duration-300 hover:after:w-full"
                >
                  Products
                </button>
                <button
                  onClick={() => {
                    setIsProductsOpen(!isProductsOpen);
                    setIsAboutOpen(false);
                  }}
                  className="text-gray-500 hover:text-pink-400 text-lg focus:outline-none"
                >
                  ▾
                </button>
              </div>

              {isProductsOpen && (
                <div className="absolute mt-2 w-48 bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg border border-pink-200 z-30">
                  <Link 
                    to="/pedisteps" 
                    className="block px-6 py-3 text-gray-700 hover:bg-pink-100 hover:text-pink-600 font-medium transition rounded-t-2xl"
                  >
                    PediSteps
                  </Link>
                  <Link 
                    to="/pediwalk" 
                    className="block px-6 py-3 text-gray-700 hover:bg-pink-100 hover:text-pink-600 font-medium transition"
                  >
                    PediWalk
                  </Link>
                  <a 
                    href="/products#coming-soon"
                    className="block px-6 py-3 text-gray-700 hover:bg-pink-100 hover:text-pink-600 font-medium transition rounded-b-2xl"
                  >
                    Coming Soon ✨
                  </a>
                </div>
              )}
            </div>

            {/* Static Links */}
            <Link to="/blog" className="relative text-pink-500 hover:text-pink-600 font-semibold text-lg transition after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-pink-400 after:transition-all after:duration-300 hover:after:w-full">
              Blog
            </Link>
            <Link to="/contact" className="relative text-pink-500 hover:text-pink-600 font-semibold text-lg transition after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-pink-400 after:transition-all after:duration-300 hover:after:w-full">
              Contact
            </Link>
            <Link to="/facts" className="relative text-pink-500 hover:text-pink-600 font-semibold text-lg transition after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-pink-400 after:transition-all after:duration-300 hover:after:w-full">
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
        <div className="bg-white/80 backdrop-blur-lg border-t border-pink-100 shadow-md rounded-b-2xl py-6 px-6 flex flex-col space-y-4 md:hidden z-50">
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="text-pink-500 hover:text-pink-600 font-semibold text-lg transition">
            Home
          </Link>
          <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-pink-500 hover:text-pink-600 font-semibold text-lg transition">
            About
          </Link>
          <a href="/about#compare" onClick={() => setIsMobileMenuOpen(false)} className="pl-6 text-pink-500 hover:text-pink-600 font-medium transition">
            - Compare
          </a>
          <a href="/about#invest" onClick={() => setIsMobileMenuOpen(false)} className="pl-6 text-pink-500 hover:text-pink-600 font-medium transition">
            - Invest
          </a>
          <Link to="/products" onClick={() => setIsMobileMenuOpen(false)} className="text-pink-500 hover:text-pink-600 font-semibold text-lg transition">
            Products
          </Link>
          <Link to="/pedisteps" onClick={() => setIsMobileMenuOpen(false)} className="pl-6 text-pink-500 hover:text-pink-600 font-medium transition">
            - PediSteps
          </Link>
          <Link to="/pediwalk" onClick={() => setIsMobileMenuOpen(false)} className="pl-6 text-pink-500 hover:text-pink-600 font-medium transition">
            - PediWalk
          </Link>
          <a href="/products#coming-soon" onClick={() => setIsMobileMenuOpen(false)} className="pl-6 text-pink-500 hover:text-pink-600 font-medium transition">
            - Coming Soon
          </a>
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
