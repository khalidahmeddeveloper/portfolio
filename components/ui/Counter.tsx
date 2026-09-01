'use client';

import React, { useEffect, useState, useRef } from 'react';

interface CounterProps {
  target: number;
  suffix?: string;
  decimals?: number;
  label: string;
}

export default function Counter({ target, suffix = '', decimals = 0, label }: CounterProps) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const duration = 1000;
          const stepTime = 20;
          const step = target / (duration / stepTime);

          const timer = setInterval(() => {
            start += step;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(start);
            }
          }, stepTime);

          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px 50px 0px' }
    );

    if (elementRef.current) observer.observe(elementRef.current);

    return () => observer.disconnect();
  }, [target]);

  const displayValue = decimals > 0 ? count.toFixed(decimals) : Math.floor(count);

  return (
    <div ref={elementRef} className="brutal-card p-5 sm:p-6 flex flex-col items-start justify-center">
      <div className="flex items-baseline gap-1">
        <span className="text-3xl sm:text-5xl font-extrabold text-black tracking-tight">
          {displayValue}
        </span>
        <span className="text-2xl sm:text-3xl font-extrabold text-black">{suffix}</span>
      </div>
      <p className="text-neutral-500 font-semibold text-xs sm:text-sm mt-1 uppercase tracking-wider">{label}</p>
    </div>
  );
}
