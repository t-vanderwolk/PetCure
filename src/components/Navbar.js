import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-16 px-8 flex items-center justify-between bg-white/30 backdrop-blur-md shadow-lg border-b border-pink-100 text-pink-500">
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold tracking-wide hover:text-pink-600 transition">
        PetCure
      </Link>

      {/* Navigation Links */}
      <div className="flex gap-8 text-lg items-center relative">
        <Link to="/about" className="hover:text-pink-600 transition">About</Link>

        {/* Products Dropdown */}
        <div className="relative group">
          <Link to="/products" className="hover:text-pink-600 transition">
            Products ▾
          </Link>
          <div className="absolute right-0 mt-2 w-40 bg-white/80 backdrop-blur-md rounded shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-300 z-50">
            <Link
              to="/pedisteps"
              className="block px-4 py-2 text-sm hover:bg-pink-100 hover:text-pink-600 transition"
            >
              PediSteps
            </Link>
            <Link
              to="/pediwalk"
              className="block px-4 py-2 text-sm hover:bg-pink-100 hover:text-pink-600 transition"
            >
              PediWalk
            </Link>
          </div>
        </div>
        <Link to="/compare" className="hover:text-pink-600 transition">Compare</Link>

        <Link to="/coming-soon" className="hover:text-pink-600 transition">Coming Soon</Link>
        <Link to="/facts" className="hover:text-pink-600 transition">FAQ</Link>
        <Link to="/contact" className="hover:text-pink-600 transition">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;