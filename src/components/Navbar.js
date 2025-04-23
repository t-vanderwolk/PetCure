import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(prev => !prev);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-16 px-6 flex items-center justify-between bg-white/30 backdrop-blur-md text-pink-500 shadow-md">
      <Link to="/" className="text-2xl font-bold hover:text-pink-600 transition">
        PetCure
      </Link>

      <div className="flex gap-6 text-lg relative">
        <Link to="/about" className="hover:underline" onClick={closeDropdown}>About</Link>
        <Link to="/contact" className="hover:underline" onClick={closeDropdown}>Contact</Link>
        <Link to="/coming-soon" className="hover:underline" onClick={closeDropdown}>Coming Soon</Link>

        <div className="relative">
          <button onClick={toggleDropdown} className="hover:underline focus:outline-none">
            Products ▾
          </button>

          {isDropdownOpen && (
            <div className="absolute bg-white/70 backdrop-blur-md text-pink-500 rounded shadow mt-1 right-0 w-40">
              <Link to="/pedisteps" className="block px-4 py-2 hover:bg-pink-100" onClick={closeDropdown}>PediSteps</Link>
              <Link to="/pediwalk" className="block px-4 py-2 hover:bg-pink-100" onClick={closeDropdown}>PediWalk</Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;