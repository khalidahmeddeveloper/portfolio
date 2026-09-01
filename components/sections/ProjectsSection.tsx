'use client';

import React, { useState } from 'react';
import { Layers, CheckCircle2, ExternalLink, Globe } from 'lucide-react';

const projects = [
  {
    title: 'Ultimus CPS - Enterprise Process Automation',
    category: 'Enterprise BPM & Low-Code Platform',
    client: 'Ultimus · USA (Remote)',
    link: 'https://www.ultimus.com',
    description:
      'Architected 10+ Visual Composer capabilities including configurable grids, forms, layouts, dynamic data bindings, and real-time rendering. Modernized front-end with React and Next.js alongside AngularJS, containerized backend services with Docker/Kubernetes, and automated CI/CD with Bitbucket and Jenkins (reducing deployment time by ~40%).',
    metrics: [
      '10+ Visual Composer modules delivered',
      'Docker & Kubernetes containerized releases',
      'Migrated millions of archived records with 0 data loss',
      'Loader Generator software reduced validation effort by ~30%',
    ],
    technologies: ['C#', 'ASP.NET Web API', 'AngularJS', 'React', 'Next.js', 'SQL Server', 'Entity Framework', 'WCF', 'Docker', 'Kubernetes', 'Jenkins', 'CI/CD'],
  },
  {
    title: 'Real Estate ERP - DHA Peshawar',
    category: 'Enterprise Real Estate Platform',
    client: 'DHA Peshawar',
    description:
      'Full-cycle engineering of real estate ERP supporting 10,000+ plots, customers, transfers, installments, accounts receivable, surcharge/discount workflows, and FBR tax compliance. Integrated online challans and payments with Askari Bank, MCB, Bank Alfalah, and TCS.',
    metrics: [
      'Supported 10,000+ plots and customers',
      'Automated online challan payment reconciliation',
      'Digitized 5,000+ land-record files into secure PDFs',
      'Rule-based calculations reduced manual computation by ~50%',
    ],
    technologies: ['C#', 'ASP.NET MVC', 'ASP.NET Web API', 'SQL Server', 'Entity Framework', 'REST APIs', 'Windows Services', 'Bootstrap'],
  },
  {
    title: 'Data Warehouse & Business Intelligence',
    category: 'Data Engineering & Executive Analytics',
    client: 'DHA Peshawar',
    description:
      'Implemented an enterprise analytical data warehouse consolidating 5+ source systems for historical analysis, user transactions, close-of-business snapshots, and dues. Optimized T-SQL queries and stored procedures, reducing critical report generation time by ~35%.',
    metrics: [
      'Consolidated 5+ source systems into central warehouse',
      '15+ SSRS & Power BI operational and executive dashboards',
      'Optimized query performance by ~35%',
      'Maintained 99%+ database server availability',
    ],
    technologies: ['SQL Server', 'T-SQL', 'SSIS (ETL)', 'SSRS', 'Power BI', 'Elasticsearch', 'Data Warehousing'],
  },
  {
    title: 'Fophex ERP - Used Car Module',
    category: 'Cloud-Native ERP & Freelance',
    client: 'fophex.com',
    link: 'https://fophex.com',
    description:
      'Cloud-native multi-entity ERP spanning financial accounting, inventory, HR/payroll, and property management. Developed the Used Car Module for vehicle inventory and transactions, managed SQL Server schema and performance tuning, and established Azure DevOps & GitHub Actions CI/CD.',
    metrics: [
      'Multi-entity Used Car vehicle inventory & transaction engine',
      'DevExpress operational and financial reporting suite',
      'Azure DevOps & GitHub Actions automated pipelines',
    ],
    technologies: ['ASP.NET Core', 'ASP.NET Web API', 'SQL Server', 'Dapper ORM', 'DevExpress Reports', 'Azure DevOps', 'GitHub Actions', 'Bootstrap'],
  },
  {
    title: 'Bank of Khyber - Cash Management & Lending Portal',
    category: 'Fintech & Core Banking',
    client: 'The Bank of Khyber (BOK)',
    description:
      'Developed a Cash Management System deployed across 20+ institutes/merchants, a Lending Data Collection Portal with Temenos T24 compliance across 50+ branches, an Audit Management System, and a Distributed Management System Data Merger consolidating branch data.',
    metrics: [
      'Deployed Cash Management across 20+ institutes & merchants',
      'Temenos T24 DMT lending integration across 50+ branches',
      'Consolidated branch data into central database',
      'Converted 10+ Temenos BI reports into Power BI dashboards',
    ],
    technologies: ['C#', 'ASP.NET MVC', 'SQL Server', 'Power BI', 'Temenos T24', 'jQuery', 'Bootstrap'],
  },
  {
    title: 'Shah Alam Dairies - E-Commerce Platform',
    category: 'Full-Stack E-Commerce & Freelance',
    client: 'shahalamdairies.com',
    link: 'https://shahalamdairies.com',
    description:
      'Full-stack dairy e-commerce solution with product catalog, customer ordering, billing, customer self-service dashboard, and comprehensive admin order management portal.',
    metrics: [
      'End-to-end customer ordering and automated billing',
      'Interactive customer and admin portals',
      'Clean Architecture with Entity Framework Core',
    ],
    technologies: ['Angular', 'ASP.NET Core', 'SQL Server', 'Entity Framework Core', 'Clean Architecture', 'REST APIs'],
  },
  {
    title: 'Rug Manufacturer ERP Platform',
    category: 'Manufacturing ERP & Freelance',
    client: 'Industrial Rug Manufacturer',
    description:
      'Comprehensive ERP covering pre-production rug tracking, batch/main product stock, raw-material conversion inventory, suppliers, purchases, customers, orders, billing, investor shares, HR, salaries, and role-based authorization.',
    metrics: [
      'Multi-stage pre-production rug lifecycle tracking',
      'Complete raw-material to finished-goods inventory',
      'Integrated accounting, investor shares, and payroll',
    ],
    technologies: ['Angular', 'ASP.NET Core', 'SQL Server', 'Dapper ORM', 'Clean Architecture'],
  },
  {
    title: 'ZKTeco Biometric Hardware SDK Integration',
    category: 'Hardware Integration & Automation',
    client: 'DHA Peshawar & KP Bar Council',
    description:
      'Developed real-time background listener services communicating over TCP IP/Port with ZKTeco biometric devices for 200+ employees, coupled with automated SMS alert notifications via GSM modem integration.',
    metrics: [
      'Real-time multi-device hardware punch synchronization',
      'Integrated with enterprise HRMS & Payroll engines',
      'Automated SMS alert workflows via GSM modems',
    ],
    technologies: ['C# .NET', 'ZKTeco Biometric SDK', 'TCP/IP Sockets', 'Windows Services', 'SQL Server', 'GSM Modems'],
  },
];

export default function ProjectsSection() {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Enterprise BPM & Low-Code Platform', 'Enterprise Real Estate Platform', 'Cloud-Native ERP & Freelance', 'Fintech & Core Banking'];

  const filteredProjects =
    filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section
      id="projects"
      className="bg-white rounded-[30px] p-8 sm:p-10 md:p-12 mb-8 shadow-sm border border-neutral-100"
    >
      <div className="space-y-8">
        {/* Section Header */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-black tracking-tight">
            Selected <span className="text-neutral-500">Project Portfolio</span>
          </h2>
          <p className="text-neutral-500 text-sm font-semibold uppercase tracking-wider mt-1">
            Enterprise Platforms • Real Estate ERP • Banking • Cloud Solutions
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 pt-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                filter === cat
                  ? 'bg-black text-white'
                  : 'bg-[#EDF0F4] text-neutral-700 hover:bg-neutral-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.title}
              className="brutal-card p-6 sm:p-8 flex flex-col justify-between group"
            >
              <div>
                {/* Header Meta */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-black" />
                    {project.category}
                  </span>
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-black text-white">
                    {project.client}
                  </span>
                </div>

                <div className="flex items-start justify-between gap-2 mb-3">
                  <h3 className="text-lg sm:text-xl font-bold text-black group-hover:text-neutral-700 transition-colors leading-snug">
                    {project.title}
                  </h3>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1 rounded bg-[#EDF0F4] hover:bg-black hover:text-white transition-colors flex-shrink-0"
                      aria-label="View Project Link"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>

                <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Key Metrics / Highlights */}
                <div className="space-y-1.5 mb-6">
                  {project.metrics.map((metric) => (
                    <div key={metric} className="flex items-start gap-2 text-xs font-semibold text-neutral-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-black flex-shrink-0 mt-0.5" />
                      <span>{metric}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Tags */}
              <div className="pt-4 border-t border-neutral-100 flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-[#EDF0F4] text-neutral-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
