'use client';

import React, { useEffect, useState } from 'react';

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Dismiss preloader smoothly after page loads
    const timer = setTimeout(() => {
      setFadeOut(true);
      const removeTimer = setTimeout(() => {
        setLoading(false);
      }, 700);
      return () => clearTimeout(removeTimer);
    }, 1100);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#EDF0F4] transition-all duration-700 ease-in-out ${
        fadeOut ? '-translate-y-full opacity-0 pointer-events-none' : 'translate-y-0 opacity-100'
      }`}
      aria-hidden="true"
    >
      <div className="flex flex-col items-center justify-center space-y-4">
        {/* Monogram Badge */}
        <div className="w-16 h-16 rounded-2xl bg-black flex items-center justify-center text-white font-bold text-2xl shadow-xl animate-pulse">
          KA
        </div>

        {/* 3D Character Reveal */}
        <div className="flex items-center space-x-2 text-2xl font-bold tracking-[0.3em] text-neutral-800 uppercase">
          {['L', 'O', 'A', 'D', 'I', 'N', 'G'].map((char, index) => (
            <span
              key={index}
              className="inline-block animate-bounce"
              style={{ animationDelay: `${index * 0.1}s`, animationDuration: '1s' }}
            >
              {char}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
