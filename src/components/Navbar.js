import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-16 px-6 md:px-8 flex items-center justify-between bg-white/30 backdrop-blur-md shadow-lg border-b border-pink-100 text-pink-500">
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold tracking-wide hover:text-pink-600 transition">
        PetCure
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-8 text-lg items-center relative">
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
        <Link to="/invest" className="hover:text-pink-600 transition">Invest</Link>
        <Link to="/coming-soon" className="hover:text-pink-600 transition">Coming Soon</Link>
        <Link to="/facts" className="hover:text-pink-600 transition">FAQ</Link>
        <Link to="/contact" className="hover:text-pink-600 transition">Contact</Link>
      </div>

      {/* Mobile Hamburger Icon */}
      <div className="md:hidden">
        <button
          aria-label="Toggle Menu"
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-3xl focus:outline-none"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="absolute top-16 left-0 right-0 bg-white/90 backdrop-blur-md border-t border-pink-100 flex flex-col text-pink-500 shadow-lg md:hidden z-40"
          >
            <Link
              to="/about"
              className="px-6 py-4 text-lg hover:bg-pink-100 hover:text-pink-600 transition"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/products"
              className="px-6 py-4 text-lg hover:bg-pink-100 hover:text-pink-600 transition"
              onClick={() => setMenuOpen(false)}
            >
              Products
            </Link>
            <Link
              to="/pedisteps"
              className="px-6 py-4 text-sm hover:bg-pink-100 hover:text-pink-600 transition"
              onClick={() => setMenuOpen(false)}
            >
              - PediSteps
            </Link>
            <Link
              to="/pediwalk"
              className="px-6 py-4 text-sm hover:bg-pink-100 hover:text-pink-600 transition"
              onClick={() => setMenuOpen(false)}
            >
              - PediWalk
            </Link>
            <Link
              to="/compare"
              className="px-6 py-4 text-lg hover:bg-pink-100 hover:text-pink-600 transition"
              onClick={() => setMenuOpen(false)}
            >
              Compare
            </Link>
            <Link
              to="/coming-soon"
              className="px-6 py-4 text-lg hover:bg-pink-100 hover:text-pink-600 transition"
              onClick={() => setMenuOpen(false)}
            >
              Coming Soon
            </Link>
            <Link
              to="/facts"
              className="px-6 py-4 text-lg hover:bg-pink-100 hover:text-pink-600 transition"
              onClick={() => setMenuOpen(false)}
            >
              FAQ
            </Link>
            <Link
              to="/contact"
              className="px-6 py-4 text-lg hover:bg-pink-100 hover:text-pink-600 transition"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;