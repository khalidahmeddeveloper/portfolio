# Master Prompt & Blueprint: Next.js 15 SEO-Optimized Developer Portfolio

> **Project Target**: High-Performance, SEO-Optimized Next.js Portfolio for **Khalid Ahmed**  
> **Design Reference & Template**: [Maaz Khan Portfolio Template](https://maazkhan120.github.io/Portfolio/#contact)  
> **Tech Stack**: Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS, Framer Motion / GSAP, Lucide React, Canvas API, Web3Forms  
> **Candidate Profile**: Senior / Lead Full-Stack .NET Developer (10+ Years Experience)  
> **LinkedIn**: [linkedin.com/in/devkhalidahmed](https://www.linkedin.com/in/devkhalidahmed/)  
> **Contact**: `+92 345 9320831` | `khalidahmed.developer@gmail.com` | Islamabad, Pakistan

---

## 1. Master System Prompt for AI Generator

```markdown
You are an elite Principal Full-Stack Engineer and Technical SEO Architect. Build a production-grade, pixel-perfect, hyper-optimized Next.js 15 (App Router, TypeScript, Tailwind CSS) personal developer portfolio for **Khalid Ahmed**, based on the Neo-Brutalist design language of https://maazkhan120.github.io.

### Key Objectives:
1. **Design System & Aesthetics**: Two-column layout (sticky dark navigation sidebar on desktop, scrollable content cards on the right), neo-brutalist asymmetric buttons (`2px top/left`, `4px right/bottom`), 2px dashed border cards that transition to solid sharp corners (`border-radius: 20px → 0px`) on hover, floating input label badges, and high-contrast monochromatic palettes.
2. **Interactive Elements**:
   - Dual-layer interactive HTML5 Canvas background with dynamic cursor-linked particle bond physics.
   - GSAP/Framer Motion animated SVG curtain preloader with 3D character flip reveal.
   - Animated typewriter headline effect cycling through Khalid Ahmed's core titles.
   - Scroll-triggered statistics counters and circular conic-gradient skill progress meters.
   - Web3Forms AJAX Contact Form with client-side validation and responsive Google Maps embed.
3. **Comprehensive SEO & Performance**:
   - 100/100 Google Lighthouse targets across Performance, Accessibility, Best Practices, and SEO.
   - Full JSON-LD Structured Data (`Person`, `WebSite`, `ProfilePage`, `ItemList`, `Occupation`).
   - Dynamic OpenGraph (OG) images, Twitter Cards, Canonical URLs, robots.txt, and sitemap.xml.
   - Semantic HTML5 hierarchy (`<h1>` unique per page, `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
   - Native Next.js Image (`next/image`) and Font (`next/font/google` - Space Grotesk) optimizations.
```

---

## 2. Technical SEO & Metadata Architecture

### 2.1 Complete JSON-LD Structured Data (`components/seo/JsonLd.tsx`)

```tsx
import React from 'react';

export default function JsonLd() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': 'https://khalidahmed.dev/#person',
        name: 'Khalid Ahmed',
        givenName: 'Khalid',
        familyName: 'Ahmed',
        jobTitle: 'Senior / Lead Full-Stack .NET Developer',
        description: 'Senior Full-Stack .NET Developer & Solution Architect with 10+ years of experience in C#, ASP.NET Core, Angular, React, Next.js, Azure, Docker, Kubernetes, and Microservices.',
        url: 'https://khalidahmed.dev',
        image: 'https://khalidahmed.dev/images/khalid-ahmed.jpg',
        email: 'mailto:khalidahmed.developer@gmail.com',
        telephone: '+923459320831',
        birthDate: '1992-02-01',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Islamabad',
          addressCountry: 'Pakistan',
        },
        sameAs: [
          'https://www.linkedin.com/in/devkhalidahmed/',
          'https://github.com/devkhalidahmed',
        ],
        alumniOf: [
          {
            '@type': 'EducationalOrganization',
            name: 'Abasyn University',
            url: 'https://www.abasyn.edu.pk/',
          },
        ],
        knowsAbout: [
          'C#',
          'ASP.NET Core',
          'Angular',
          'React',
          'Next.js',
          'Microsoft Azure',
          'Docker',
          'Kubernetes',
          'Microservices',
          'Clean Architecture',
          'SQL Server',
          'Temenos T24 Core Banking',
          'Ultimus BPM',
          'RabbitMQ',
        ],
        hasOccupation: {
          '@type': 'Occupation',
          name: 'Lead Full-Stack Software Engineer',
          occupationLocation: {
            '@type': 'Country',
            name: 'Pakistan',
          },
          skills: 'ASP.NET Core, Angular, React, Azure Cloud, Docker, Kubernetes, SQL Server, Microservices',
          estimatedSalary: {
            '@type': 'MonetaryAmountDistribution',
            currency: 'USD',
          },
        },
      },
      {
        '@type': 'WebSite',
        '@id': 'https://khalidahmed.dev/#website',
        url: 'https://khalidahmed.dev',
        name: 'Khalid Ahmed | Senior Full-Stack .NET Developer Portfolio',
        description: 'Official portfolio and resume of Khalid Ahmed, Senior Full-Stack .NET Developer specializing in Cloud-Native Web Applications and Enterprise APIs.',
        publisher: {
          '@id': 'https://khalidahmed.dev/#person',
        },
        inLanguage: 'en-US',
      },
      {
        '@type': 'ProfilePage',
        '@id': 'https://khalidahmed.dev/#webpage',
        url: 'https://khalidahmed.dev',
        name: 'Khalid Ahmed - Portfolio & Resume',
        isPartOf: {
          '@id': 'https://khalidahmed.dev/#website',
        },
        about: {
          '@id': 'https://khalidahmed.dev/#person',
        },
        description: 'Explore the enterprise solutions, banking systems, BPM automations, and skills of Khalid Ahmed.',
        inLanguage: 'en-US',
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
```

### 2.2 Next.js App Router Root Metadata (`app/layout.tsx`)

```tsx
import type { Metadata, Viewport } from 'next';
import { Space_Grotesk } from 'next/font/google';
import './globals.css';
import JsonLd from '@/components/seo/JsonLd';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://khalidahmed.dev'),
  title: {
    default: 'Khalid Ahmed | Senior / Lead Full-Stack .NET Developer',
    template: '%s | Khalid Ahmed',
  },
  description:
    'Senior Full-Stack .NET Developer with 10+ years of experience architecting enterprise systems, high-throughput microservices, Angular/React frontends, and cloud-native solutions on Azure & Kubernetes.',
  keywords: [
    'Khalid Ahmed',
    'Senior Full Stack Developer',
    'Lead .NET Developer',
    'ASP.NET Core Developer',
    'Angular Developer',
    'React Next.js Developer',
    'Azure Kubernetes Specialist',
    'Enterprise Solution Architect',
    'Temenos T24 Developer',
    'Ultimus BPM Developer',
    'Software Engineer Islamabad',
    'Full Stack Engineer UAE',
  ],
  authors: [{ name: 'Khalid Ahmed', url: 'https://www.linkedin.com/in/devkhalidahmed/' }],
  creator: 'Khalid Ahmed',
  publisher: 'Khalid Ahmed',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://khalidahmed.dev',
  },
  openGraph: {
    type: 'profile',
    firstName: 'Khalid',
    lastName: 'Ahmed',
    username: 'devkhalidahmed',
    gender: 'male',
    title: 'Khalid Ahmed | Senior / Lead Full-Stack .NET Developer',
    description:
      '10+ Years Building Scalable Enterprise Web Apps, Microservices & Cloud-Native APIs across Banking, BPM, and Real Estate.',
    url: 'https://khalidahmed.dev',
    siteName: 'Khalid Ahmed Portfolio',
    locale: 'en_US',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Khalid Ahmed - Senior Full-Stack .NET Developer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Khalid Ahmed | Senior / Lead Full-Stack .NET Developer',
    description:
      '10+ Years building enterprise apps with C#, ASP.NET Core, Angular, React, Azure, Docker & Kubernetes.',
    creator: '@devkhalidahmed',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} scroll-smooth`}>
      <head>
        <JsonLd />
      </head>
      <body className="bg-[#EDF0F4] text-[#000000] font-sans antialiased selection:bg-black selection:text-white">
        {children}
      </body>
    </html>
  );
}
```

### 2.3 Dynamic Sitemap & Robots Configuration

**`app/sitemap.ts`**:
```typescript
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://khalidahmed.dev',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
  ];
}
```

**`app/robots.ts`**:
```typescript
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://khalidahmed.dev/sitemap.xml',
  };
}
```

---

## 3. Project Directory Architecture

```
portfolio-khalid-ahmed/
├── app/
│   ├── favicon.ico
│   ├── globals.css                # Neo-brutalist theme variables & custom utilities
│   ├── layout.tsx                 # Root layout with SEO metadata & JSON-LD
│   ├── page.tsx                   # Main Single-Page Portfolio Assembly
│   ├── robots.ts                  # SEO robots.txt generator
│   └── sitemap.ts                 # Dynamic sitemap.xml
├── components/
│   ├── animation/
│   │   ├── ParticleCanvas.tsx     # Dual Canvas bond-particle background
│   │   └── Preloader.tsx          # GSAP/Framer SVG morph preloader
│   ├── layout/
│   │   ├── Header.tsx             # Floating pill header with "Hire Me" button
│   │   ├── Sidebar.tsx            # Sticky dark navigation card with contact/socials
│   │   └── Footer.tsx             # Copyright & Back-to-Top Floating Button
│   ├── sections/
│   │   ├── HeroSection.tsx        # Section 1: Intro, typing text, CV Download
│   │   ├── AboutSection.tsx       # Section 2: Numbers counters & facts grid
│   │   ├── ServicesSection.tsx    # Section 3: 6 Enterprise dashed service cards
│   │   ├── ResumeSection.tsx      # Section 4: Dual Timeline + Conic-gradient Skill Gauges
│   │   ├── ProjectsSection.tsx    # Section 5: Featured Projects (Ultimus, DHA, Bank)
│   │   └── ContactSection.tsx     # Section 6: Cards, Maps Embed & Web3Forms
│   ├── ui/
│   │   ├── BrutalButton.tsx       # Reusable Neo-Brutalist Morphing Button
│   │   ├── ConicProgress.tsx      # Circular Conic-gradient Skill Meter
│   │   └── Counter.tsx            # Viewport-triggered animated number counter
│   └── seo/
│       └── JsonLd.tsx             # Schema.org structured data component
├── public/
│   ├── assets/
│   │   └── pdf/
│   │       └── Khalid_Ahmed_Resume.pdf
│   ├── images/
│   │   ├── khalid-profile.jpg
│   │   ├── og-image.jpg
│   │   └── projects/
│   │       ├── ultimus-cps.jpg
│   │       ├── biometric-erp.jpg
│   │       └── data-warehouse.jpg
│   └── svg/
│       ├── call.svg
│       ├── email.svg
│       ├── location.svg
│       └── right-arrow.svg
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 4. Design System & CSS Styling (`app/globals.css`)

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --primary-color: #EDF0F4;
  --side-menu-color: #000000;
  --section-background: #FFFFFF;
  --card-background: #FFFFFF;
  --main-text: #000000;
  --sub-text: #838485;
  --btn-border: #000000;
}

body {
  font-family: var(--font-space-grotesk), sans-serif;
  background: var(--primary-color);
  color: var(--main-text);
  overflow-x: hidden;
}

/* Neo-Brutalist Asymmetric Button */
.brutal-btn {
  color: var(--btn-border);
  font-size: 17px;
  font-weight: 700;
  border-radius: 20px;
  border-top: 2px solid var(--btn-border);
  border-right: 4px solid var(--btn-border);
  border-bottom: 4px solid var(--btn-border);
  border-left: 2px solid var(--btn-border);
  padding: 12px 26px;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  display: inline-flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
}

.brutal-btn:hover {
  background: var(--main-text);
  color: #FFFFFF;
  border-radius: 0px;
  transform: translate(-2px, -2px);
  box-shadow: 4px 4px 0px rgba(0, 0, 0, 0.25);
}

/* Dashed Hover-Morph Card */
.brutal-card {
  border: 2px dashed #D0D5DD;
  border-radius: 20px;
  background: #FFFFFF;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.brutal-card:hover {
  border: 2px dashed #000000;
  border-radius: 0px;
  transform: translateY(-4px);
}

/* Floating Input Badges */
.input-group {
  position: relative;
  width: 100%;
}

.input-group input,
.input-group textarea {
  width: 100%;
  background: transparent;
  border-radius: 20px;
  border: 2px dashed #D0D5DD;
  padding: 16px 20px;
  font-size: 16px;
  color: #000000;
  outline: none;
  transition: all 0.3s ease-in-out;
}

.input-group input:focus,
.input-group textarea:focus {
  border: 2px dashed #000000;
  border-radius: 0px;
}

.input-badge {
  color: #000000;
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  padding: 2px 12px;
  border-radius: 10px;
  background: var(--primary-color);
  position: absolute;
  top: -11px;
  left: 20px;
}
```

---

## 5. Core Interactive React Components

### 5.1 Interactive Dual Canvas Background (`components/animation/ParticleCanvas.tsx`)

```tsx
'use client';

import React, { useEffect, useRef } from 'react';

export default function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const particles: Particle[] = [];
    const colors = ['rgba(52,168,83,', 'rgba(117,95,147,', 'rgba(199,108,23,', 'rgba(194,62,55,', 'rgba(0,172,212,'];

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 1.2;
        this.vy = (Math.random() - 0.5) * 1.2;
        this.radius = Math.random() * 4 + 2;
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${this.color}0.7)`;
        ctx.fill();
      }
    }

    for (let i = 0; i < 35; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Connect near particles with lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 180) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(180, 180, 180, ${1 - dist / 180})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0 opacity-60" />;
}
```

### 5.2 Circular Conic-Gradient Skill Gauges (`components/ui/ConicProgress.tsx`)

```tsx
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
          const duration = 1200;
          const stepTime = 15;
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
    <div ref={elementRef} className="flex flex-col items-center justify-center p-4">
      <div
        className="w-28 h-28 rounded-full flex items-center justify-center relative transition-all duration-300"
        style={{
          background: `conic-gradient(${color} ${currentValue}%, #EDF0F4 ${currentValue}%)`,
        }}
      >
        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-inner">
          <span className="font-bold text-lg text-black">{currentValue}%</span>
        </div>
      </div>
      <p className="mt-3 font-semibold text-center text-sm text-neutral-800">{name}</p>
    </div>
  );
}
```

---

## 6. Page Component & Section Breakdown

### 6.1 Left Sticky Sidebar (`components/layout/Sidebar.tsx`)

```tsx
import React from 'react';
import Link from 'next/link';
import { Home, User, Layers, Briefcase, FolderGit2, Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

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
    <aside className="w-full lg:w-[300px] xl:w-[340px] sticky top-8 flex-shrink-0 z-20">
      <div className="bg-black text-white rounded-[30px] p-8 shadow-xl">
        {/* Navigation Links */}
        <nav aria-label="Main Navigation">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="flex items-center justify-between px-4 py-3 text-neutral-400 hover:text-black hover:bg-white rounded-xl transition-all duration-300 font-medium text-sm group"
                >
                  <span className="tracking-wider">{item.label}</span>
                  <item.icon className="w-4 h-4 text-neutral-500 group-hover:text-black transition-colors" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <hr className="border-neutral-800 my-6" />

        {/* Quick Contact Information */}
        <div className="space-y-4 text-sm">
          <div>
            <span className="text-neutral-500 text-xs font-semibold uppercase tracking-wider block">Phone</span>
            <a href="tel:+923459320831" className="text-white font-bold hover:underline block mt-0.5">
              +92 345 9320831
            </a>
          </div>

          <div>
            <span className="text-neutral-500 text-xs font-semibold uppercase tracking-wider block">Email</span>
            <a href="mailto:khalidahmed.developer@gmail.com" className="text-white font-bold hover:underline block mt-0.5 break-all">
              khalidahmed.developer@gmail.com
            </a>
          </div>

          <div>
            <span className="text-neutral-500 text-xs font-semibold uppercase tracking-wider block">Location</span>
            <span className="text-white font-semibold block mt-0.5">Islamabad, Pakistan</span>
          </div>
        </div>

        <hr className="border-neutral-800 my-6" />

        {/* Social Icons */}
        <div className="flex items-center justify-start gap-4">
          <a
            href="https://www.linkedin.com/in/devkhalidahmed/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center hover:bg-white hover:text-black transition-all"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://github.com/devkhalidahmed"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center hover:bg-white hover:text-black transition-all"
          >
            <Github className="w-5 h-5" />
          </a>
        </div>
      </div>
    </aside>
  );
}
```

### 6.2 Contact Section with Web3Forms (`components/sections/ContactSection.tsx`)

```tsx
'use client';

import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react';

export default function ContactSection() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    const formData = new FormData(e.currentTarget);
    formData.append('access_key', 'YOUR_WEB3FORMS_ACCESS_KEY');

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="bg-white rounded-[30px] p-8 md:p-12 mb-8 shadow-sm">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black mb-3">
        Let’s Talk <span className="text-neutral-500">With Khalid Ahmed</span>
      </h2>
      <p className="text-neutral-500 text-lg leading-relaxed mb-8">
        Looking for a Senior / Lead Full-Stack .NET Developer to design, develop, or scale your enterprise web apps and cloud architectures? Let’s connect.
      </p>

      {/* 3 Contact Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="brutal-card p-6">
          <div className="flex items-center gap-3 mb-2">
            <Phone className="w-5 h-5 text-black" />
            <h3 className="font-bold text-lg">Call Me</h3>
          </div>
          <p className="text-xs text-neutral-500 mb-2">Mon - Fri: 9:00 AM – 6:00 PM</p>
          <a href="tel:+923459320831" className="font-semibold text-black hover:underline">
            +92 345 9320831
          </a>
        </div>

        <div className="brutal-card p-6">
          <div className="flex items-center gap-3 mb-2">
            <Mail className="w-5 h-5 text-black" />
            <h3 className="font-bold text-lg">Email Me</h3>
          </div>
          <p className="text-xs text-neutral-500 mb-2">Direct & Fast Response</p>
          <a href="mailto:khalidahmed.developer@gmail.com" className="font-semibold text-black hover:underline break-all text-sm">
            khalidahmed.developer@gmail.com
          </a>
        </div>

        <div className="brutal-card p-6">
          <div className="flex items-center gap-3 mb-2">
            <MapPin className="w-5 h-5 text-black" />
            <h3 className="font-bold text-lg">Location</h3>
          </div>
          <p className="text-xs text-neutral-500 mb-2">Open to Remote & Relocation</p>
          <span className="font-semibold text-black">Islamabad, Pakistan</span>
        </div>
      </div>

      {/* Responsive Google Maps Embed */}
      <div className="w-full h-80 rounded-[20px] overflow-hidden mb-10 border border-neutral-200">
        <iframe
          title="Khalid Ahmed Location - Islamabad, Pakistan"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212270.74113215714!2d72.88371302826744!3d33.61625091720235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbfd07891722f%3A0x6059515c3bdb02b6!2sIslamabad%2C%20Islamabad%20Capital%20Territory%2C%20Pakistan!5e0!3m2!1sen!2s!4v1704092010000!5m2!1sen!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      {/* Web3Forms Contact Form */}
      <h3 className="text-2xl font-bold text-black mb-6">Got an Opportunity? Let’s Collaborate</h3>

      {status === 'success' ? (
        <div className="p-6 bg-green-50 border-2 border-green-500 rounded-2xl flex items-center gap-4 text-green-800">
          <CheckCircle className="w-6 h-6 flex-shrink-0" />
          <p className="font-semibold">Thank you! Your message has been sent successfully. Khalid will get back to you shortly.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="input-group">
              <span className="input-badge">Your Name*</span>
              <input type="text" name="name" required placeholder="Enter your full name" />
            </div>

            <div className="input-group">
              <span className="input-badge">Your Email*</span>
              <input type="email" name="email" required placeholder="Enter your email address" />
            </div>
          </div>

          <div className="input-group">
            <span className="input-badge">Subject*</span>
            <input type="text" name="subject" required placeholder="Job Opportunity / Project Inquiry / Consulting" />
          </div>

          <div className="input-group">
            <span className="input-badge">Message*</span>
            <textarea name="message" required rows={5} placeholder="Write your project details or message here..." />
          </div>

          <button type="submit" disabled={status === 'loading'} className="brutal-btn cursor-pointer">
            {status === 'loading' ? 'Sending Message...' : 'Send Message'}
            <Send className="w-4 h-4" />
          </button>
        </form>
      )}
    </section>
  );
}
```

---

## 7. Step-by-Step AI Execution & Launch Guide

1. **Initialize Project**:
   ```bash
   npx create-next-app@latest ./ --typescript --tailwind --eslint --app --src-dir=false --import-alias="@/*"
   npm install lucide-react framer-motion clsx tailwind-merge
   ```
2. **Configure Design System**:
   - Copy theme variables and custom Neo-brutalist utility classes to `app/globals.css`.
   - Configure `'Space Grotesk'` in `app/layout.tsx`.
3. **Deploy SEO Modules**:
   - Verify JSON-LD Schema in `components/seo/JsonLd.tsx`.
   - Confirm Canonical URLs, Open Graph, and Twitter Cards in `app/layout.tsx`.
   - Setup `app/sitemap.ts` and `app/robots.ts`.
4. **Assemble Sections**:
   - Implement `components/animation/ParticleCanvas.tsx` for background particle networks.
   - Build `Sidebar.tsx` with Khalid Ahmed's contact records and social links.
   - Assemble `HeroSection`, `AboutSection`, `ServicesSection`, `ResumeSection`, `ProjectsSection`, and `ContactSection`.
5. **Audit & Validate**:
   - Run Lighthouse audit on build output (`npm run build && npm run start`).
   - Validate Schema Markup via [Google Rich Results Test](https://search.google.com/test/rich-results).
