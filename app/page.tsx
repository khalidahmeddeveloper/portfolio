import React from 'react';
import ParticleCanvas from '@/components/animation/ParticleCanvas';
import Preloader from '@/components/animation/Preloader';
import Header from '@/components/layout/Header';
import Sidebar from '@/components/layout/Sidebar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ServicesSection from '@/components/sections/ServicesSection';
import ResumeSection from '@/components/sections/ResumeSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* GSAP / SVG Preloader */}
      <Preloader />

      {/* Interactive Dual-Canvas Background */}
      <ParticleCanvas />

      {/* Main App Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Floating Top Header Bar */}
        <Header />

        {/* 2-Column Responsive Layout */}
        <div className="flex flex-col lg:flex-row items-start gap-8">
          {/* Left Column: Sticky Dark Navigation & Profile Sidebar */}
          <Sidebar />

          {/* Right Column: Scrollable Main Content Sections */}
          <div className="flex-1 w-full min-w-0">
            {/* Section 1: Hero */}
            <HeroSection />

            {/* Section 2: About Me */}
            <AboutSection />

            {/* Section 3: Specialized Services */}
            <ServicesSection />

            {/* Section 4: Resume & Technical Skills */}
            <ResumeSection />

            {/* Section 5: Featured Projects */}
            <ProjectsSection />

            {/* Section 6: Contact */}
            <ContactSection />

            {/* Footer Bar */}
            <Footer />
          </div>
        </div>
      </div>
    </main>
  );
}
