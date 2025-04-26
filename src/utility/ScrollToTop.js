// src/ScrollToTop.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // smooth scroll-up effect
    });
  }, [pathname]);

  return null;
}