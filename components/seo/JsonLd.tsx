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
        jobTitle: 'Senior Full Stack .NET Developer',
        description:
          'Senior Full Stack .NET Developer with 10+ years of experience architecting, modernizing, and scaling enterprise applications across workflow automation, real estate ERP, and core banking. C#, ASP.NET Core, Angular, React, Next.js, Azure, Docker, Kubernetes.',
        url: 'https://khalidahmed.dev',
        image: 'https://khalidahmed.dev/images/ProfilePhoto.png',
        email: 'mailto:khalidahmed.developer@gmail.com',
        telephone: '+923459320831',
        birthDate: '1992-02-01',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Peshawar',
          addressRegion: 'Khyber Pakhtunkhwa',
          addressCountry: 'Pakistan',
        },
        sameAs: [
          'https://www.linkedin.com/in/devkhalidahmed/',
          'https://github.com/khalidahmeddeveloper',
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
          'ASP.NET Web API',
          'Angular',
          'AngularJS',
          'React',
          'Next.js',
          'TypeScript',
          'Microsoft Azure',
          'Docker',
          'Kubernetes',
          'Microservices',
          'Clean Architecture',
          'SQL Server',
          'Entity Framework Core',
          'Dapper ORM',
          'Temenos T24 Core Banking',
          'Ultimus BPM / CPS',
          'RabbitMQ',
          'Azure Service Bus',
          'Power BI',
          'SSRS / SSIS',
          'ZKTeco Biometric SDK Hardware Integration',
        ],
        hasOccupation: {
          '@type': 'Occupation',
          name: 'Senior Full Stack .NET Developer',
          occupationLocation: {
            '@type': 'Country',
            name: 'Pakistan',
          },
          skills:
            'C#, ASP.NET Core, Angular, React, Next.js, Azure, Docker, Kubernetes, SQL Server, Dapper, Microservices, Clean Architecture',
        },
      },
      {
        '@type': 'WebSite',
        '@id': 'https://khalidahmed.dev/#website',
        url: 'https://khalidahmed.dev',
        name: 'Khalid Ahmed | Senior Full Stack .NET Developer Portfolio',
        description:
          'Official portfolio and resume of Khalid Ahmed, Senior Full Stack .NET Developer with 10+ years of enterprise experience.',
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
        description:
          'Explore the enterprise solutions, banking systems, real estate ERP, BPM automations, and verified skills of Khalid Ahmed.',
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
