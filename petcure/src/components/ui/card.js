import React from 'react';

export function Card({ children }) {
  return (
    <div className="border rounded-xl shadow-md bg-white overflow-hidden">
      {children}
    </div>
  );
}

export function CardContent({ children, className = '' }) {
  return (
    <div className={`p-6 ${className}`}>
      {children}
    </div>
  );
}