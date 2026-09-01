'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Send, Menu, X, Home, User, Layers, Briefcase, FolderGit2, Mail } from 'lucide-react';

const navItems = [
  { label: 'HOME', href: '#home', icon: Home },
  { label: 'ABOUT ME', href: '#about', icon: User },
  { label: 'SERVICES', href: '#services', icon: Layers },
  { label: 'RESUME', href: '#resume', icon: Briefcase },
  { label: 'PROJECTS', href: '#projects', icon: FolderGit2 },
  { label: 'CONTACT', href: '#contact', icon: Mail },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  return (
    <header className="relative z-30 mb-6" id="mainHeader">
      <div className="bg-white rounded-[30px] px-6 py-4 shadow-sm border border-neutral-100 flex items-center justify-between">
        {/* Logo / Monogram */}
        <Link href="#home" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-black flex-shrink-0 relative">
            <Image
              src={`${basePath}/images/ProfilePhoto.png`}
              alt="Khalid Ahmed Profile"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-lg text-black tracking-tight leading-none group-hover:text-neutral-600 transition-colors">
              Khalid Ahmed
            </span>
            <span className="text-[11px] text-neutral-500 font-bold uppercase tracking-wider mt-0.5">
              Sr. Full-Stack Lead
            </span>
          </div>
        </Link>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Link href="#contact" className="brutal-btn py-2.5 px-5 text-sm">
            <span>Hire Me</span>
            <Send className="w-4 h-4" />
          </Link>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-11 h-11 rounded-2xl border-2 border-black flex items-center justify-center text-black hover:bg-black hover:text-white transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 mt-2 bg-black text-white rounded-[24px] p-6 shadow-2xl z-40 border border-neutral-800 animate-in fade-in slide-in-from-top-4 duration-300">
          <nav aria-label="Mobile Navigation">
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between px-4 py-3 text-neutral-300 hover:text-black hover:bg-white rounded-xl transition-all font-semibold text-sm"
                  >
                    <span>{item.label}</span>
                    <item.icon className="w-4 h-4" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
