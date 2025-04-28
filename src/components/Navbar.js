import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 

function Navbar() {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Left side - Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-pink-600 font-bold text-2xl tracking-tight">
              PetCure
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-6">

            <Link to="/" className="text-gray-700 hover:text-pink-500 font-semibold transition">
              Home
            </Link>

            <Link to="/about" className="text-gray-700 hover:text-pink-500 font-semibold transition">
              About
            </Link>

            {/* Products Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsProductsOpen(true)}
              onMouseLeave={() => setIsProductsOpen(false)}
            >
              <button 
                className="text-gray-700 hover:text-pink-500 font-semibold focus:outline-none transition"
              >
                <Link to="/products" className="text-gray-700 hover:text-pink-500 font-semibold transition">
                Products ▾
                </Link>
              </button>

              {/* Dropdown Menu */}
              {isProductsOpen && (
                <div className="absolute mt-2 w-52 rounded-2xl shadow-lg bg-white border border-pink-200 z-20">
                  <div className="py-2 flex flex-col">
                    <Link 
                      to="/products/pedisteps" 
                      className="px-5 py-3 text-gray-700 hover:bg-pink-50 hover:text-pink-600 font-medium transition rounded-t-2xl"
                    >
                      PediSteps
                    </Link>
                    <Link 
                      to="/products/pediwalk" 
                      className="px-5 py-3 text-gray-700 hover:bg-pink-50 hover:text-pink-600 font-medium transition"
                    >
                      PediWalk
                    </Link>
                    <Link 
                      to="/products/coming-soon" 
                      className="px-5 py-3 text-gray-700 hover:bg-pink-50 hover:text-pink-600 font-medium transition rounded-b-2xl"
                    >
                      Coming Soon ✨
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link to="/blog" className="text-gray-700 hover:text-pink-500 font-semibold transition">
              Blog
            </Link>

            <Link to="/compare" className="text-gray-700 hover:text-pink-500 font-semibold transition">
              Compare
            </Link>

            <Link to="/invest" className="text-gray-700 hover:text-pink-500 font-semibold transition">
              Invest
            </Link>

            <Link to="/contact" className="text-gray-700 hover:text-pink-500 font-semibold transition">
              Contact
            </Link>

          </div>

          {/* Hamburger Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-pink-500 focus:outline-none text-3xl"
            >
              ☰
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="bg-white shadow-md rounded-b-2xl py-4 px-6 flex flex-col space-y-4 md:hidden">
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-700 hover:text-pink-500 font-semibold transition">
            Home
          </Link>
          <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-700 hover:text-pink-500 font-semibold transition">
            About
          </Link>
          <Link to="/products" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-700 hover:text-pink-500 font-semibold transition">
            Products
          </Link>
          <Link to="/products/pedisteps" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-700 hover:text-pink-500 font-semibold transition pl-4">
            - PediSteps
          </Link>
          <Link to="/products/pediwalk" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-700 hover:text-pink-500 font-semibold transition pl-4">
            - PediWalk
          </Link>
          <Link to="/products/coming-soon" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-700 hover:text-pink-500 font-semibold transition pl-4">
            - Coming Soon ✨
          </Link>
          <Link to="/blog" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-700 hover:text-pink-500 font-semibold transition">
            Blog
          </Link>
          <Link to="/compare" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-700 hover:text-pink-500 font-semibold transition">
            Compare
          </Link>
          <Link to="/invest" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-700 hover:text-pink-500 font-semibold transition">
            Invest
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