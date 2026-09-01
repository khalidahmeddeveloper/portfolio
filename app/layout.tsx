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
    default: 'Khalid Ahmed | Senior Full Stack .NET Developer',
    template: '%s | Khalid Ahmed',
  },
  description:
    'Senior Full Stack .NET Developer with 10+ years of experience architecting, modernizing, and scaling enterprise applications across workflow automation, real estate ERP, and core banking. C#, ASP.NET Core, Angular, React, Next.js, Azure, Docker & Kubernetes.',
  keywords: [
    'Khalid Ahmed',
    'Senior Full Stack Developer',
    'Senior .NET Developer',
    'ASP.NET Core Developer',
    'Angular Developer',
    'React Next.js Developer',
    'TypeScript Developer',
    'Azure Cloud Developer',
    'Docker Kubernetes Specialist',
    'Dapper Entity Framework',
    'Temenos T24 Developer',
    'Ultimus BPM CPS Developer',
    'Software Engineer Peshawar',
    'Full Stack Developer Pakistan',
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
    title: 'Khalid Ahmed | Senior Full Stack .NET Developer',
    description:
      '10+ Years Building Enterprise Web Apps, Workflow Automation, Real Estate ERP & Core Banking with C#, .NET Core, Angular, React, Azure, Docker & Kubernetes.',
    url: 'https://khalidahmed.dev',
    siteName: 'Khalid Ahmed Portfolio',
    locale: 'en_US',
    images: [
      {
        url: '/images/ProfilePhoto.png',
        width: 800,
        height: 800,
        alt: 'Khalid Ahmed - Senior Full Stack .NET Developer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Khalid Ahmed | Senior Full Stack .NET Developer',
    description:
      '10+ Years building enterprise apps with C#, ASP.NET Core, Angular, React, Next.js, Azure, Docker & Kubernetes.',
    creator: '@devkhalidahmed',
    images: ['/images/ProfilePhoto.png'],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} scroll-smooth`}>
      <head>
        <JsonLd />
      </head>
      <body className="bg-[#EDF0F4] text-[#000000] font-sans antialiased selection:bg-black selection:text-white min-h-screen">
        {children}
      </body>
    </html>
  );
}
