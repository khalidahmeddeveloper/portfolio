'use client';

import React from 'react';
import Link from 'next/link';
import { Home, User, Layers, Briefcase, FolderGit2, Mail, Phone, MapPin } from 'lucide-react';

const navItems = [
  { label: 'HOME', href: '#home', icon: Home },
  { label: 'ABOUT ME', href: '#about', icon: User },
  { label: 'SERVICES', href: '#services', icon: Layers },
  { label: 'RESUME', href: '#resume', icon: Briefcase },
  { label: 'PROJECTS', href: '#projects', icon: FolderGit2 },
  { label: 'CONTACT', href: '#contact', icon: Mail },
];

export default function Sidebar() {
  return (
    <aside className="w-full lg:w-[280px] xl:w-[320px] lg:sticky lg:top-6 flex-shrink-0 z-20 mb-8 lg:mb-0">
      <div className="bg-black text-white rounded-[30px] p-6 sm:p-8 shadow-xl border border-neutral-900">
        {/* Navigation Menu */}
        <nav aria-label="Desktop Navigation">
          <ul className="space-y-1.5">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="flex items-center justify-between px-4 py-3 text-neutral-400 hover:text-black hover:bg-white rounded-xl transition-all duration-200 font-semibold text-xs tracking-wider group"
                >
                  <span>{item.label}</span>
                  <item.icon className="w-4 h-4 text-neutral-500 group-hover:text-black transition-colors" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <hr className="border-neutral-800 my-6" />

        {/* Quick Contact Info */}
        <div className="space-y-4 text-xs">
          <div>
            <div className="flex items-center gap-1.5 text-neutral-400 font-bold uppercase tracking-wider mb-1">
              <Phone className="w-3.5 h-3.5 text-neutral-400" />
              <span>Phone</span>
            </div>
            <a
              href="tel:+923459320831"
              className="text-white font-bold text-sm hover:text-neutral-300 transition-colors block ml-5"
            >
              +92 345 9320831
            </a>
          </div>

          <div>
            <div className="flex items-center gap-1.5 text-neutral-400 font-bold uppercase tracking-wider mb-1">
              <Mail className="w-3.5 h-3.5 text-neutral-400" />
              <span>Email</span>
            </div>
            <a
              href="mailto:khalidahmed.developer@gmail.com"
              className="text-white font-bold text-xs hover:text-neutral-300 transition-colors block ml-5 break-all"
            >
              khalidahmed.developer@gmail.com
            </a>
          </div>

          <div>
            <div className="flex items-center gap-1.5 text-neutral-400 font-bold uppercase tracking-wider mb-1">
              <MapPin className="w-3.5 h-3.5 text-neutral-400" />
              <span>Location</span>
            </div>
            <span className="text-white font-semibold block ml-5">Peshawar, Pakistan</span>
          </div>
        </div>

        <hr className="border-neutral-800 my-6" />

        {/* Social Media Links with Inline SVGs */}
        <div className="flex items-center justify-between gap-3">
          <a
            href="https://www.linkedin.com/in/devkhalidahmed/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="flex-1 py-2.5 px-3 rounded-xl bg-neutral-900 hover:bg-white hover:text-black transition-all flex items-center justify-center gap-2 text-xs font-bold text-white group"
          >
            <svg
              className="w-4 h-4 fill-neutral-400 group-hover:fill-black transition-colors"
              viewBox="0 0 24 24"
            >
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.76v8.37H6.46v-8.37M7.84 6.2a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z" />
            </svg>
            <span>LinkedIn</span>
          </a>

          <a
            href="https://github.com/khalidahmeddeveloper"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="flex-1 py-2.5 px-3 rounded-xl bg-neutral-900 hover:bg-white hover:text-black transition-all flex items-center justify-center gap-2 text-xs font-bold text-white group"
          >
            <svg
              className="w-4 h-4 fill-neutral-400 group-hover:fill-black transition-colors"
              viewBox="0 0 24 24"
            >
              <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
            </svg>
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </aside>
  );
}
