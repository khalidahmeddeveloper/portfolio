'use client';

import React, { useEffect, useState, useRef } from 'react';

interface SkillProps {
  name: string;
  percentage: number;
  color: string;
}

export default function ConicProgress({ name, percentage, color }: SkillProps) {
  const [currentValue, setCurrentValue] = useState(0);
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const duration = 1000;
          const stepTime = 20;
          const step = percentage / (duration / stepTime);

          const timer = setInterval(() => {
            start += step;
            if (start >= percentage) {
              setCurrentValue(percentage);
              clearInterval(timer);
            } else {
              setCurrentValue(Math.floor(start));
            }
          }, stepTime);

          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.25 }
    );

    if (elementRef.current) observer.observe(elementRef.current);

    return () => observer.disconnect();
  }, [percentage]);

  return (
    <div ref={elementRef} className="flex flex-col items-center justify-center p-3">
      <div
        className="w-24 h-24 sm:w-28 sm:h-28 rounded-full flex items-center justify-center relative transition-all duration-300 shadow-md"
        style={{
          background: `conic-gradient(${color} ${currentValue}%, #EDF0F4 ${currentValue}%)`,
        }}
      >
        <div className="w-18 h-18 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center shadow-inner">
          <span className="font-bold text-base sm:text-lg text-black">{currentValue}%</span>
        </div>
      </div>
      <p className="mt-3 font-bold text-center text-xs sm:text-sm text-neutral-800 tracking-tight leading-snug">
        {name}
      </p>
    </div>
  );
}
