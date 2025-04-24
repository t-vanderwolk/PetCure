import React from 'react';
import { Link } from 'react-router-dom';

function Products() {
  return (
    <div className="min-h-screen bg-pink-50 py-20 px-6 flex flex-col items-center">
      <h2 className="text-4xl font-bold text-pink-600 mb-12">Products</h2>
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* PediSteps Card */}
        <div className="bg-white border border-pink-200 rounded-2xl shadow-lg overflow-hidden flex flex-col">
          <div className="flex-1 max-h-[400px] bg-white flex items-center justify-center p-4">
            <img
              className="w-full h-full object-contain"
              src="/images/pedi-steps.jpeg"
              alt="PediSteps"
            />
          </div>
          <div className="p-6 flex flex-col justify-between">
            <h5 className="text-3xl font-bold text-pink-600 mb-4">PediSteps</h5>
            <p className="text-gray-700 mb-6">
              PediSteps are textured stair pads designed to gently file your pet’s nails as they move up and down stairs. Featuring a dual-layer design of non-slip backing and 80-grit emery surface, they offer a natural, passive grooming solution that blends right into your home.
            </p>
            <Link
              to="/pedisteps"
              className="inline-flex items-center px-6 py-3 text-sm font-medium text-white bg-pink-500 rounded-full shadow-md hover:bg-pink-600 transition"
            >
              Learn More
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* PediWalk Card */}
        <div className="bg-white border border-pink-200 rounded-2xl shadow-lg overflow-hidden flex flex-col">
          <div className="flex-1 max-h-[400px] bg-white flex items-center justify-center p-4">
            <img
              className="w-full h-full object-contain"
              src="/images/pedi-walk.jpeg"
              alt="PediWalk"
            />
          </div>
          <div className="p-6 flex flex-col justify-between">
            <h5 className="text-3xl font-bold text-pink-600 mb-4">PediWalk</h5>
            <p className="text-gray-700 mb-6">
              PediWalk is designed for homes without stairs. These modular hallway-friendly pads use the same emery surface as PediSteps, helping your dog file their nails just by walking around. Customizable in length and easy to clean.
            </p>
            <Link
              to="/pediwalk"
              className="inline-flex items-center px-6 py-3 text-sm font-medium text-white bg-pink-500 rounded-full shadow-md hover:bg-pink-600 transition"
            >
              Learn More
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;