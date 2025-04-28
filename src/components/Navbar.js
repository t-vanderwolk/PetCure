// src/components/Navbar.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // <-- add useNavigate

function Navbar() {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const navigate = useNavigate(); // <-- initialize useNavigate hook

  // Handle Products Click
  const handleProductsClick = () => {
    navigate('/products');
  };

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">

          {/* Left side - Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-pink-600 font-bold text-2xl">
              PetCure
            </Link>
          </div>

          {/* Right side - Links */}
          <div className="flex items-center space-x-6">

            <Link to="/" className="text-gray-700 hover:text-pink-500 font-semibold">
              Home
            </Link>

            <Link to="/about" className="text-gray-700 hover:text-pink-500 font-semibold">
              About
            </Link>

            {/* Products Dropdown */}
            <div className="relative">
              <button 
                onClick={handleProductsClick}
                onMouseEnter={() => setIsProductsOpen(true)}
                onMouseLeave={() => setIsProductsOpen(false)}
                className="text-gray-700 hover:text-pink-500 font-semibold focus:outline-none"
              >
                Products ▾
              </button>

              {isProductsOpen && (
                <div 
                  onMouseEnter={() => setIsProductsOpen(true)}
                  onMouseLeave={() => setIsProductsOpen(false)}
                  className="absolute mt-2 w-48 rounded-md shadow-lg bg-white border border-pink-200"
                >
                  <div className="py-2 flex flex-col">
                    <Link to="/products/pedisteps" className="px-4 py-2 text-gray-700 hover:bg-pink-50 hover:text-pink-600">
                      PediSteps
                    </Link>
                    <Link to="/products/pediwalk" className="px-4 py-2 text-gray-700 hover:bg-pink-50 hover:text-pink-600">
                      PediWalk
                    </Link>
                    <Link to="/products/coming-soon" className="px-4 py-2 text-gray-700 hover:bg-pink-50 hover:text-pink-600">
                      Coming Soon ✨
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link to="/blog" className="text-gray-700 hover:text-pink-500 font-semibold">
              Blog
            </Link>

            <Link to="/contact" className="text-gray-700 hover:text-pink-500 font-semibold">
              Contact
            </Link>

          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;