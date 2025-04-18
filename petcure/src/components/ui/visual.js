import React from 'react';

export function Visual({ src, alt }) {
  return (
    <img
      src={src}
      alt={alt}
      className="rounded-xl shadow-md w-full h-auto object-cover"
    />
  );
}
