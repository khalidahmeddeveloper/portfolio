'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="mt-8 mb-6">
        <div className="bg-white rounded-[30px] px-8 py-5 shadow-sm border border-neutral-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold text-neutral-500">
          <p>© {new Date().getFullYear()} Khalid Ahmed. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/in/devkhalidahmed/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:underline"
            >
              @devkhalidahmed
            </a>
            <span className="text-neutral-300">•</span>
            <Link href="#home" className="text-neutral-500 hover:text-black transition-colors">
              Back to Top
            </Link>
          </div>
        </div>
      </footer>

      {/* Floating Bottom-to-Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-2xl bg-white border-2 border-dashed border-black shadow-xl flex items-center justify-center text-black hover:bg-black hover:text-white transition-all duration-300 animate-brutal-pulse cursor-pointer"
          aria-label="Scroll back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </>
  );
}
