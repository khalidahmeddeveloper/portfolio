'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Download, ArrowRight, Sparkles, MapPin } from 'lucide-react';
import TypewriterBanner from '@/components/ui/TypewriterBanner';

export default function HeroSection() {
  const typingTitles = [
    'Senior Full Stack .NET Developer',
    'C# • ASP.NET Core • Web API',
    'Angular • React • Next.js • TypeScript',
    'Docker • Kubernetes • Azure CI/CD',
    'SQL Server • Entity Framework • Dapper',
    '10+ Years Building Enterprise Systems',
  ];

  return (
    <section
      id="home"
      className="bg-white rounded-[30px] p-8 sm:p-10 md:p-12 mb-8 shadow-sm border border-neutral-100"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        {/* Left Column: Intro & Call to Actions */}
        <div className="lg:col-span-7 space-y-6">
          {/* Greeting Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#EDF0F4] border border-neutral-200 text-xs sm:text-sm font-bold text-neutral-800">
            <Sparkles className="w-4 h-4 text-black animate-spin" style={{ animationDuration: '4s' }} />
            <span>Senior Full Stack .NET Developer (10+ Years Exp)</span>
          </div>

          {/* Main Title & Subtitle */}
          <div>
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-black tracking-tight leading-[1.1]">
              Khalid Ahmed
            </h1>
            <h2 className="text-lg sm:text-xl font-bold text-neutral-800 mt-2 flex flex-wrap items-center gap-2">
              <span>Senior Full Stack .NET Developer</span>
              <span className="text-neutral-400">•</span>
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-neutral-500">
                <MapPin className="w-3.5 h-3.5" />
                Peshawar, Pakistan
              </span>
            </h2>
          </div>

          {/* Value Proposition Bio */}
          <p className="text-neutral-600 text-base sm:text-lg leading-relaxed font-normal">
            Specializing in architecting, modernizing, and scaling enterprise applications across <strong className="text-black font-semibold">workflow automation, real estate ERP, and core banking</strong>. Proven track record supporting 10,000+ plots, millions of archived records, 174-branch data consolidation, and containerized cloud-native delivery with Docker, Kubernetes, and Azure.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="mailto:khalidahmed.developer@gmail.com"
              className="brutal-btn"
            >
              <span>Contact / Resume</span>
              <Download className="w-4 h-4" />
            </a>

            <Link
              href="#projects"
              className="brutal-btn-dark"
            >
              <span>Explore 10+ Years Portfolio</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Right Column: Profile Photo Card with Typing Badge */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-[340px] sm:max-w-[380px] aspect-[4/5] rounded-[30px] overflow-hidden border-4 border-black shadow-2xl bg-neutral-100 group">
            {/* Real Profile Image */}
            <Image
              src="/images/ProfilePhoto.png"
              alt="Khalid Ahmed - Senior Full Stack .NET Developer"
              fill
              className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
              priority
              sizes="(max-width: 768px) 100vw, 400px"
            />

            {/* Neo-Brutalist Typing Overlay Pill */}
            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl border-2 border-black shadow-lg">
              <div className="text-[11px] font-extrabold uppercase text-neutral-500 tracking-wider">
                Full-Stack Expertise
              </div>
              <div className="mt-0.5 truncate">
                <TypewriterBanner strings={typingTitles} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
