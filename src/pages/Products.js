import React from 'react';
import { Link } from 'react-router-dom';

function Products() {
  return (
    <div className="pt-24 px-6 bg-white min-h-screen flex flex-col items-center">
      <h2 className="text-4xl font-bold text-pink-500 mb-10">Products</h2>

      <div className="flex flex-col md:flex-row gap-8 justify-center items-center w-full max-w-6xl">
        {/* PediSteps Card */}
        <div className="bg-white border border-gray-200 rounded-xl shadow-lg w-full max-w-md overflow-hidden">
          <div className="h-64 bg-pink-100 flex items-center justify-center text-pink-500 text-xl font-semibold">
            [PediSteps Image Placeholder]
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">PediSteps</h3>
            <p className="text-gray-600 mb-4">
              Textured stair pads that gently file your pet’s nails with every step. Dual-layer design with non-slip grip and premium 80-grit emery surface.
            </p>
            <Link
              to="/pedisteps"
              className="inline-block px-5 py-2 text-white bg-pink-500 rounded-full hover:bg-pink-600 transition font-medium"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* PediWalk Card */}
        <div className="bg-white border border-gray-200 rounded-xl shadow-lg w-full max-w-md overflow-hidden">
          <div className="h-64 bg-pink-100 flex items-center justify-center text-pink-500 text-xl font-semibold">
            [PediWalk Image Placeholder]
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">PediWalk</h3>
            <p className="text-gray-600 mb-4">
              Designed for hallways and flat surfaces, PediWalk uses the same grit as PediSteps for consistent nail filing—even without stairs.
            </p>
            <Link
              to="/pediwalk"
              className="inline-block px-5 py-2 text-white bg-pink-500 rounded-full hover:bg-pink-600 transition font-medium"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;