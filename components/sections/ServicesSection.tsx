'use client';

import React from 'react';
import { Server, Layout, Cloud, Database, Workflow, Cpu } from 'lucide-react';

const services = [
  {
    icon: Server,
    title: 'Enterprise .NET & Microservices',
    description:
      'Architecting, modernizing, and scaling backend services using C#, ASP.NET Core, ASP.NET Web API, RESTful APIs, Clean Architecture, and high-performance ORMs like Entity Framework Core and Dapper.',
    tags: ['C#', 'ASP.NET Core', 'Web API', 'Clean Architecture', 'Dapper ORM', 'gRPC'],
  },
  {
    icon: Layout,
    title: 'Modern Frontend & Reactive SPAs',
    description:
      'Engineering fast, scalable, and responsive user interfaces with Angular, AngularJS, React, Next.js, and TypeScript, backed by modern component-driven architectures and performance optimizations.',
    tags: ['Angular', 'React', 'Next.js', 'TypeScript', 'Tailwind', 'Bootstrap'],
  },
  {
    icon: Cloud,
    title: 'Cloud-Native Delivery & CI/CD',
    description:
      'Containerizing services with Docker, orchestrating clusters with Kubernetes, configuring Azure App Services/Functions, and automating build/deployment pipelines via Jenkins, Bitbucket, and Azure DevOps.',
    tags: ['Azure', 'Docker', 'Kubernetes', 'Jenkins', 'Bitbucket', 'CI/CD Pipelines'],
  },
  {
    icon: Database,
    title: 'Database Architecture & Analytics',
    description:
      'Designing robust SQL Server/PostgreSQL schemas, optimizing complex T-SQL queries (~35% speedup), building SSIS ETL pipelines, and implementing Data Warehousing with SSRS & Power BI dashboards.',
    tags: ['SQL Server', 'T-SQL', 'SSIS ETL', 'Data Warehousing', 'Power BI', 'SSRS'],
  },
  {
    icon: Workflow,
    title: 'BPM & Visual Workflow Automation',
    description:
      'Expertise in Ultimus Composed Process Solutions (CPS) and Visual Composer, building configurable dynamic forms, data bindings, property panels, and real-time enterprise process automation.',
    tags: ['Ultimus CPS', 'Visual Composer', 'Process Workflows', 'Enterprise BPM'],
  },
  {
    icon: Cpu,
    title: 'Hardware SDK & Enterprise Integrations',
    description:
      'Integrating multi-device ZKTeco biometric attendance hardware via C# TCP/IP background services, Temenos T24 Core Banking compliance workflows, online bank payment gateways, and SMS alert automation.',
    tags: ['ZKTeco Biometric SDK', 'Temenos T24', 'Payment Gateways', 'RabbitMQ', 'Azure Service Bus'],
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="bg-white rounded-[30px] p-8 sm:p-10 md:p-12 mb-8 shadow-sm border border-neutral-100"
    >
      <div className="space-y-8">
        {/* Section Header */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-black tracking-tight">
            Core <span className="text-neutral-500">Technical Services</span>
          </h2>
          <p className="text-neutral-500 text-sm font-semibold uppercase tracking-wider mt-1">
            Full-Stack Architecture • Cloud Delivery • Enterprise Integrations
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="brutal-card p-6 sm:p-8 flex flex-col justify-between group"
              >
                <div>
                  {/* Icon & Title */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-black text-white flex items-center justify-center flex-shrink-0 group-hover:bg-neutral-800 transition-colors shadow-md">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-black group-hover:text-neutral-800 transition-colors">
                      {service.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-neutral-600 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                    {service.description}
                  </p>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-neutral-100">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg bg-[#EDF0F4] text-neutral-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
