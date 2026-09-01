'use client';

import React, { useState, useEffect } from 'react';

interface TypewriterProps {
  strings: string[];
}

export default function TypewriterBanner({ strings }: TypewriterProps) {
  const [currentStringIndex, setCurrentStringIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = strings[currentStringIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing forward
        setDisplayedText(fullText.substring(0, displayedText.length + 1));

        // If completed word, wait then delete
        if (displayedText.length === fullText.length) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        // Deleting backwards
        setDisplayedText(fullText.substring(0, displayedText.length - 1));

        // If deleted, move to next string
        if (displayedText.length === 0) {
          setIsDeleting(false);
          setCurrentStringIndex((prev) => (prev + 1) % strings.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentStringIndex, strings]);

  return (
    <span className="inline-flex items-center font-bold text-sm sm:text-base text-neutral-900">
      <span>{displayedText}</span>
      <span className="animate-pulse ml-0.5 text-black font-extrabold">_</span>
    </span>
  );
}
