'use client';

import React, { useState } from 'react';
import { Briefcase, GraduationCap, Award, Code2, Layers, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';
import ConicProgress from '@/components/ui/ConicProgress';

const experienceData = [
  {
    role: 'Senior Full Stack .NET Developer (Independent Consultant)',
    company: 'Ultimus',
    location: 'USA (Remote)',
    period: 'Sep 2022 – Aug 2026',
    duration: '4 yrs',
    isCurrent: false,
    summary:
      'Enterprise process automation, visual workflow design, full-stack development, containerized delivery, and release engineering for the CPS (Composed Process Solution) platform.',
    bullets: [
      'Architected and delivered 10+ Visual Composer capabilities, including configurable grids, forms, layouts, dynamic data bindings, property panels, and real-time rendering.',
      'Modernized front-end architecture by introducing React and Next.js components alongside AngularJS, improving rendering performance and accelerating delivery of new UI modules.',
      'Containerized backend services with Docker and orchestrated deployments with Kubernetes, improving environment consistency and simplifying multi-environment release management.',
      'Built reusable backend service components for enterprise processing, cross-module communication, workflow services, and data integration.',
      'Developed Loader Generator software that reduced manual deployment validation and testing effort by approximately 30%.',
      'Implemented data-archiving workflows that migrated millions of records while preserving consistency, traceability, and zero data loss.',
      'Automated build and release pipelines with Bitbucket and Jenkins, reducing manual deployment time by approximately 40% and improving release consistency.',
      'Partnered with product, QA, and engineering teams to diagnose production issues, improve performance, and deliver stable enterprise releases.',
    ],
    technology:
      'C#, ASP.NET Web API, AngularJS, React, Next.js, SQL Server, Entity Framework, WCF, REST APIs, Docker, Kubernetes, Jenkins, Bitbucket, CI/CD',
  },
  {
    role: 'Senior Software Engineer',
    company: 'DHA Peshawar',
    location: 'Peshawar, Pakistan',
    period: 'Mar 2021 – Aug 2022',
    duration: '1 yr 6 mos',
    summary:
      'Enterprise applications, analytics, reporting, data warehousing, database optimization, integrations, and application/database operations.',
    bullets: [
      'Designed and delivered 15+ SSRS and Power BI reports for management dashboards and operational decision-making.',
      'Implemented a data warehouse consolidating 5+ source systems for historical analysis, audit reporting, and cross-system analytics.',
      'Integrated ZKTeco biometric devices for 200+ employees, e-Challan systems, and thermal printers for operational workflows.',
      'Optimized T-SQL queries, stored procedures, and views, reducing critical report generation time by approximately 35%.',
      'Administered application and database servers while maintaining 99%+ availability for business operations.',
    ],
    technology:
      'C#, ASP.NET Web API, SQL Server, T-SQL, SSRS, Power BI, Elasticsearch, Bootstrap',
  },
  {
    role: 'Software Developer',
    company: 'Bank of Khyber (BOK)',
    location: 'Peshawar, Pakistan',
    period: 'Mar 2020 – Mar 2021',
    duration: '1 yr 1 mo',
    summary:
      'Banking application development covering cash management, audit systems, lending portals, and digital banking for one of Pakistan’s leading public-sector banks.',
    bullets: [
      'Developed a Cash Management System deployed across 20+ schools, institutes, and merchants, improving financial tracking accuracy and reducing manual cash reconciliation.',
      'Built a Lending Data Collection Portal (Conventional & Islamic) integrating with Temenos T24 DMT compliance rules, streamlining data collection from 50+ branches.',
      'Delivered a Distributed Management System Data Merger, consolidating data from bank branches into a centralized database for unified monitoring and reporting.',
      'Implemented the Bank of Khyber Audit Management System, digitizing internal audit workflows and improving audit tracking turnaround time.',
      'Converted 10+ Temenos BI reports into streamlined Power BI dashboards, reducing management reporting effort and improving data accessibility for senior leadership.',
    ],
    technology:
      'C#, ASP.NET MVC, SQL Server, Power BI, Temenos T24, jQuery, JavaScript, Bootstrap',
  },
  {
    role: 'Software Engineer',
    company: 'DHA Peshawar',
    location: 'Peshawar, Pakistan',
    period: 'May 2016 – Feb 2020',
    duration: '3 yrs 10 mos',
    summary:
      'Full-cycle delivery of real-estate ERP, finance, documentation, customer-service, payment, launch, and communication systems.',
    bullets: [
      'Developed a Plot Management System supporting 10,000+ plots, customers, transfers, installments, demand certificates, surcharge, discounts, possession, and accounts receivable.',
      'Integrated online challan and payment workflows with Askari Bank, MCB, Bank Alfalah, and TCS, including API synchronization and automated reconciliation.',
      'Implemented email, SMS, postal, and bulk-print acknowledgement workflows serving 1,000+ notifications per month.',
      'Led digitization of 5,000+ land-record files into secure, searchable PDFs linked to the property-management platform.',
      'Built rule-based surcharge and waiver calculations, reducing manual computation effort by approximately 50%.',
      'Delivered plot balloting, launch management, tax, document verification, transfer, possession, and customer-service modules.',
    ],
    technology:
      'C#, ASP.NET MVC, ASP.NET Web API, SQL Server, Entity Framework, REST APIs, Windows Services, Bootstrap',
  },
  {
    role: '.NET Developer Intern',
    company: 'National Software Developer',
    location: 'Peshawar (On-site)',
    period: 'Jan 2016 – May 2016',
    duration: '5 mos',
    summary:
      '.NET Developer Intern supporting design, development, testing, and maintenance of business software solutions for government client projects.',
    bullets: [
      'Contributed to the Deed Agreement System for the Government of Khyber Pakhtunkhwa, supporting document automation and legal workflow management.',
      'Assisted development of the Local Government Umbrella Project for the Government of KP, improving operational data management across departments.',
      'Built and debugged application features using C#, ASP.NET, jQuery, and SQL Server under senior developer guidance.',
      'Strengthened skills in requirement analysis, database design, testing, and technical documentation.',
    ],
    technology: 'C#, ASP.NET, SQL Server, jQuery, JavaScript, HTML, CSS, Bootstrap',
  },
  {
    role: 'Software Developer Intern',
    company: 'KP Bar Council',
    location: 'Peshawar District, Pakistan (Hybrid)',
    period: 'Nov 2014 – Dec 2015',
    duration: '1 yr 2 mos',
    summary:
      'Software Developer Intern contributing to internal business applications focused on automation, communication, and attendance tracking systems.',
    bullets: [
      'Built an SMS Alert System with GSM modem integration, improving communication and notification handling for council operations.',
      'Developed a Biometric Attendance System with SMS alert integration, supporting automated attendance tracking and reporting for staff.',
      'Contributed to a Double Entry System for structured data entry, record management, and operational control.',
      'Designed responsive interfaces using HTML5, CSS, Bootstrap, JavaScript, and jQuery for improved user experience.',
    ],
    technology: 'C#, ASP.NET MVC, Entity Framework, LINQ, SQL Server, HTML5, CSS, Bootstrap, JavaScript, jQuery',
  },
];

const skillCategories = [
  {
    title: 'Frontend Development',
    skills: ['Angular', 'AngularJS', 'React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap'],
  },
  {
    title: 'Backend & .NET',
    skills: ['C#', 'ASP.NET Core', 'ASP.NET MVC', 'ASP.NET Web API', 'REST APIs', 'Entity Framework Core', 'Dapper ORM', 'ADO.NET'],
  },
  {
    title: 'Cloud, DevOps & CI/CD',
    skills: ['Azure App Service', 'Azure SQL', 'Azure Blob Storage', 'Azure Functions', 'Azure DevOps', 'Docker', 'Kubernetes', 'Jenkins', 'Bitbucket', 'Git', 'CI/CD Pipelines'],
  },
  {
    title: 'Database & Analytics',
    skills: ['SQL Server', 'PostgreSQL', 'SQLite', 'T-SQL', 'SSIS (ETL)', 'Data Warehousing', 'SSRS', 'Power BI', 'RDLC Reports', 'DevExpress Reports'],
  },
  {
    title: 'Architecture & Integration',
    skills: ['Clean Architecture', 'Microservices', 'gRPC', 'RabbitMQ', 'Azure Service Bus', 'WCF / SOAP', 'Windows Services', 'ZKTeco Biometric SDK', 'Temenos T24'],
  },
  {
    title: 'Leadership & AI-Assisted Delivery',
    skills: ['Technical Leadership', 'Requirement Analysis', 'SDLC & Agile', 'Code Reviews', 'Production Troubleshooting', 'AI-Assisted Dev (Claude, Claude Code)'],
  },
];

const certifications = [
  {
    title: 'Generative AI: Prompt Engineering Basics',
    issuer: 'IBM',
    date: 'Aug 2026',
    id: 'HM0J3NOV6A7L',
  },
  {
    title: 'Generative AI: Introduction and Applications',
    issuer: 'IBM',
    date: 'Aug 2026',
    id: 'JHE8M73EMZM5',
  },
  {
    title: 'Introduction to Artificial Intelligence (AI)',
    issuer: 'IBM',
    date: 'Aug 2026',
    id: '702P2EDBOEQB',
  },
  {
    title: 'Claude Platform 101',
    issuer: 'Anthropic',
    date: 'Aug 2026',
    id: 'fys4n5amg6xr',
  },
  {
    title: 'Claude 101 & Claude Code 101',
    issuer: 'Anthropic',
    date: 'Aug 2026',
    id: 'bq397vqet8rb / p2qm2axfuy2a',
  },
  {
    title: 'TypeScript for JavaScript Developers',
    issuer: 'LinkedIn Learning',
    date: 'Aug 2026',
  },
  {
    title: 'TypeScript Essential Training',
    issuer: 'LinkedIn Learning',
    date: 'Aug 2026',
  },
];

const conicSkills = [
  { name: 'C# / ASP.NET Core / Web API', percentage: 96, color: '#BCE70C' },
  { name: 'Angular / React / Next.js', percentage: 90, color: '#FF759C' },
  { name: 'Docker / Kubernetes / Azure', percentage: 88, color: '#00CC97' },
  { name: 'SQL Server / Dapper / DW', percentage: 94, color: '#FFDB59' },
  { name: 'RabbitMQ / Azure Service Bus', percentage: 86, color: '#6F39FD' },
  { name: 'Clean Architecture / Microservices', percentage: 95, color: '#BCE70C' },
];

export default function ResumeSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleExpand = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  return (
    <section
      id="resume"
      className="bg-white rounded-[30px] p-8 sm:p-10 md:p-12 mb-8 shadow-sm border border-neutral-100"
    >
      <div className="space-y-12">
        {/* Section Header */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-black tracking-tight">
            Professional <span className="text-neutral-500">Resume & Experience</span>
          </h2>
          <p className="text-neutral-500 text-sm font-semibold uppercase tracking-wider mt-1">
            10+ Years Enterprise History • Proven Architecture • Verified Leadership
          </p>
        </div>

        {/* 1. Complete Work Experience Timeline */}
        <div className="space-y-6">
          <div className="flex items-center justify-between pb-3 border-b-2 border-black">
            <div className="flex items-center gap-3">
              <Briefcase className="w-6 h-6 text-black" />
              <h3 className="text-2xl font-extrabold text-black">Work Experience (10+ Years)</h3>
            </div>
            <span className="text-xs font-bold text-neutral-500 uppercase tracking-wider">
              {experienceData.length} Professional Roles
            </span>
          </div>

          <div className="space-y-6 pl-2">
            {experienceData.map((item, idx) => {
              const isExpanded = expandedIndex === idx;
              return (
                <div key={idx} className="relative pl-6 border-l-2 border-dashed border-black">
                  <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-black border-2 border-white shadow" />
                  <div className="brutal-card p-6 sm:p-7">
                    {/* Header bar */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-bold px-3 py-1 rounded-md bg-black text-white">
                        {item.period} • {item.duration}
                      </span>
                      <span className="text-xs font-bold text-neutral-600 bg-[#EDF0F4] px-2.5 py-1 rounded">
                        {item.location}
                      </span>
                    </div>

                    <h4 className="text-lg sm:text-xl font-bold text-black mt-2">
                      {item.role}
                    </h4>
                    <p className="text-sm font-extrabold text-neutral-700 mb-3">
                      {item.company}
                    </p>

                    <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                      {item.summary}
                    </p>

                    {/* Expandable Key Contributions / Bullets */}
                    <div className="space-y-2 mb-4">
                      {item.bullets.slice(0, isExpanded ? item.bullets.length : 3).map((bullet, bIdx) => (
                        <div key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700">
                          <CheckCircle2 className="w-4 h-4 text-black flex-shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{bullet}</span>
                        </div>
                      ))}
                    </div>

                    {item.bullets.length > 3 && (
                      <button
                        onClick={() => toggleExpand(idx)}
                        className="text-xs font-bold text-black hover:underline flex items-center gap-1 mb-4 cursor-pointer"
                      >
                        {isExpanded ? (
                          <>
                            <span>Show fewer highlights</span>
                            <ChevronUp className="w-3.5 h-3.5" />
                          </>
                        ) : (
                          <>
                            <span>View all {item.bullets.length} highlights</span>
                            <ChevronDown className="w-3.5 h-3.5" />
                          </>
                        )}
                      </button>
                    )}

                    {/* Technology Stack Pill */}
                    <div className="pt-3 border-t border-neutral-100">
                      <p className="text-[11px] font-semibold text-neutral-500">
                        <strong className="text-black font-bold uppercase tracking-wider">Tech: </strong>
                        {item.technology}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <hr className="border-neutral-200" />

        {/* 2. Comprehensive Core Technical Skills Breakdown */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b-2 border-black">
            <Code2 className="w-6 h-6 text-black" />
            <h3 className="text-2xl font-extrabold text-black">Technical Skills Matrix</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {skillCategories.map((category) => (
              <div key={category.title} className="brutal-card p-5 sm:p-6 flex flex-col justify-between">
                <div>
                  <h4 className="text-base font-bold text-black mb-3 pb-2 border-b border-neutral-100 flex items-center gap-2">
                    <Layers className="w-4 h-4 text-neutral-600" />
                    <span>{category.title}</span>
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-[#EDF0F4] text-neutral-900 border border-neutral-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <hr className="border-neutral-200" />

        {/* 3. Conic Skill Progress Gauges */}
        <div id="progress" className="space-y-6">
          <div>
            <h3 className="text-2xl font-extrabold text-black tracking-tight">
              Proficiency <span className="text-neutral-500">Evaluations</span>
            </h3>
            <p className="text-xs font-bold uppercase tracking-wider text-neutral-500 mt-1">
              Scroll-Triggered Circular Conic Gauges
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-4">
            {conicSkills.map((skill) => (
              <ConicProgress
                key={skill.name}
                name={skill.name}
                percentage={skill.percentage}
                color={skill.color}
              />
            ))}
          </div>
        </div>

        <hr className="border-neutral-200" />

        {/* 4. Education & Certifications Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Education */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b-2 border-black">
              <GraduationCap className="w-5 h-5 text-black" />
              <h3 className="text-xl font-bold text-black">Education</h3>
            </div>

            <div className="brutal-card p-6 space-y-3">
              <span className="text-xs font-bold px-2.5 py-1 rounded bg-black text-white">
                Completed Sep 2015
              </span>
              <h4 className="text-lg font-bold text-black">
                Bachelor of Science in Software Engineering (BSSE)
              </h4>
              <p className="text-sm font-semibold text-neutral-600">
                Abasyn University, Peshawar, Pakistan
              </p>
              <p className="text-xs text-neutral-500 leading-relaxed pt-2 border-t border-neutral-100">
                Foundations in Software Architecture, Distributed Systems, Database Management, and Enterprise Software Engineering.
              </p>
            </div>

            {/* Languages */}
            <div className="brutal-card p-5">
              <h5 className="font-bold text-sm text-black mb-2 uppercase tracking-wider">
                Languages Spoken
              </h5>
              <div className="flex flex-wrap gap-2 text-xs font-semibold text-neutral-800">
                <span className="px-3 py-1 rounded bg-[#EDF0F4] border border-neutral-200">English (Professional)</span>
                <span className="px-3 py-1 rounded bg-[#EDF0F4] border border-neutral-200">Urdu (Native)</span>
                <span className="px-3 py-1 rounded bg-[#EDF0F4] border border-neutral-200">Pashto (Native)</span>
              </div>
            </div>
          </div>

          {/* Licenses & Certifications */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b-2 border-black">
              <Award className="w-5 h-5 text-black" />
              <h3 className="text-xl font-bold text-black">Licenses & Certifications</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {certifications.map((cert) => (
                <div
                  key={cert.title}
                  className="p-4 rounded-2xl bg-[#EDF0F4] border border-neutral-200 flex flex-col justify-between"
                >
                  <div>
                    <h5 className="font-bold text-xs sm:text-sm text-black leading-snug">
                      {cert.title}
                    </h5>
                    <p className="text-xs font-semibold text-neutral-500 mt-1">
                      {cert.issuer} • {cert.date}
                    </p>
                  </div>
                  {cert.id && (
                    <span className="text-[10px] font-mono text-neutral-500 mt-2 block">
                      ID: {cert.id}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
