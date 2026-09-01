'use client';

import React from 'react';
import Counter from '@/components/ui/Counter';

export default function AboutSection() {
  const personalDetails = [
    { label: 'Name', value: 'Khalid Ahmed' },
    { label: 'Location', value: 'Peshawar, Pakistan' },
    { label: 'Experience', value: '10+ Years' },
    { label: 'Email', value: 'khalidahmed.developer@gmail.com', isLink: true, href: 'mailto:khalidahmed.developer@gmail.com' },
    { label: 'Phone', value: '+92 345 9320831', isLink: true, href: 'tel:+923459320831' },
    { label: 'LinkedIn', value: '@devkhalidahmed', isLink: true, href: 'https://www.linkedin.com/in/devkhalidahmed/' },
    { label: 'GitHub', value: '@khalidahmeddeveloper', isLink: true, href: 'https://github.com/khalidahmeddeveloper' },
    { label: 'Education', value: 'BS Software Engineering' },
  ];

  return (
    <section
      id="about"
      className="bg-white rounded-[30px] p-8 sm:p-10 md:p-12 mb-8 shadow-sm border border-neutral-100"
    >
      <div className="space-y-8">
        {/* Section Header */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-black tracking-tight">
            About <span className="text-neutral-500">Khalid Ahmed</span>
          </h2>
          <p className="text-neutral-500 text-sm font-semibold uppercase tracking-wider mt-1">
            Enterprise Solutions • Cloud-Native Delivery • Banking & ERP Architecture
          </p>
        </div>

        {/* Live Counters Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Counter target={10} suffix="+" label="Years Experience" />
          <Counter target={10} suffix="k+" label="Plots Managed" />
          <Counter target={174} suffix="+" label="Branches Consolidated" />
          <Counter target={200} suffix="+" label="Biometric Users" />
        </div>

        {/* Bio Paragraphs */}
        <div className="space-y-4 text-neutral-700 text-base sm:text-lg leading-relaxed font-normal">
          <p>
            Senior Full Stack .NET Developer with <strong className="text-black font-semibold">10+ years of experience</strong> architecting, modernizing, and scaling enterprise applications across workflow automation, real estate ERP, and core banking systems.
          </p>
          <p>
            My full-stack expertise spans <strong className="text-black font-semibold">C#, ASP.NET Core, Web API, Angular/AngularJS, React, Next.js, and TypeScript</strong>, backed by SQL Server, Entity Framework Core, and Dapper on the data layer, as well as Docker, Kubernetes, and Azure for cloud-native delivery and CI/CD pipelines.
          </p>
          <p>
            I have delivered mission-critical systems supporting <strong className="text-black font-semibold">10,000+ plots, millions of archived records, 174-branch banking data consolidation, and 200+ biometric users</strong>, improving critical reporting performance by ~35% and deployment effort by ~40%. Strong advocate of Clean Architecture, microservices, database optimization, and AI-assisted development.
          </p>
        </div>

        <hr className="border-neutral-200" />

        {/* Metadata Details Matrix */}
        <div>
          <h3 className="text-xl font-bold text-black mb-4">Profile Matrix & Quick Facts</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {personalDetails.map((detail) => (
              <div
                key={detail.label}
                className="flex items-center justify-between p-4 rounded-2xl bg-[#EDF0F4] border border-neutral-200"
              >
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                  {detail.label}
                </span>
                {detail.isLink ? (
                  <a
                    href={detail.href}
                    target={detail.href?.startsWith('http') ? '_blank' : undefined}
                    rel={detail.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-sm font-bold text-black hover:underline truncate max-w-[200px]"
                  >
                    {detail.value}
                  </a>
                ) : (
                  <span className="text-sm font-bold text-black truncate max-w-[200px]">
                    {detail.value}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
