import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-16 px-6 flex items-center justify-between bg-white/30 backdrop-blur-md text-pink-500 shadow-md">
      <Link to="/" className="text-2xl font-bold hover:text-pink-600 transition">
        PetCure
      </Link>

      <div className="flex gap-6 text-lg items-center relative">
        <Link to="/about" className="hover:underline">About</Link>
        <Link to="/contact" className="hover:underline">Contact</Link>
        <Link to="/coming-soon" className="hover:underline">Coming Soon</Link>

        {/* Products dropdown that stays open on hover */}
        <div className="relative group">
          {/* Clickable Link */}
          <Link to="/products" className="hover:underline">
            Products ▾
          </Link>

          {/* Dropdown stays open as long as you're hovering over this area */}
          <div className="absolute opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-300 bg-white/80 backdrop-blur-md text-pink-500 rounded shadow mt-1 w-40 right-0">
            <Link to="/pedisteps" className="block px-4 py-2 hover:bg-pink-100">PediSteps</Link>
            <Link to="/pediwalk" className="block px-4 py-2 hover:bg-pink-100">PediWalk</Link>
          </div>
        </div>
        <Link to="/facts" className="hover:underline">FAQ</Link>

      </div>

    </nav>
  );
}

export default Navbar;