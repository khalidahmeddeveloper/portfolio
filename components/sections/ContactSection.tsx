'use client';

import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';

export default function ContactSection() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    const formData = new FormData(e.currentTarget);
    formData.append('access_key', 'e50c2784-1926-47a9-9915-4c75be95e8b7');
    formData.append('from_name', 'Khalid Ahmed Portfolio Contact');

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
    <section
      id="contact"
      className="bg-white rounded-[30px] p-8 sm:p-10 md:p-12 mb-8 shadow-sm border border-neutral-100"
    >
      <div className="space-y-8">
        {/* Section Header */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-black tracking-tight">
            Let’s Talk <span className="text-neutral-500">With Khalid Ahmed</span>
          </h2>
          <p className="text-neutral-600 text-base sm:text-lg leading-relaxed mt-2 max-w-2xl font-normal">
            Looking for a Senior / Lead Full-Stack .NET Developer to architect, modernize, or scale your enterprise applications, cloud microservices, and workflows? Let’s connect and discuss your project.
          </p>
        </div>

        {/* 3 Contact Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Card 1: Call */}
          <div className="brutal-card p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 text-black font-bold text-lg mb-1.5">
                <Phone className="w-5 h-5" />
                <h3>Call Me</h3>
              </div>
              <p className="text-xs font-semibold text-neutral-500 mb-3">
                Mon – Fri: 9:00 AM – 6:00 PM (PKT)
              </p>
            </div>
            <a
              href="tel:+923459320831"
              className="text-base font-bold text-black hover:underline"
            >
              +92 345 9320831
            </a>
          </div>

          {/* Card 2: Email */}
          <div className="brutal-card p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 text-black font-bold text-lg mb-1.5">
                <Mail className="w-5 h-5" />
                <h3>Email Me</h3>
              </div>
              <p className="text-xs font-semibold text-neutral-500 mb-3">
                Direct Inquiries & Project Proposals
              </p>
            </div>
            <a
              href="mailto:khalidahmed.developer@gmail.com"
              className="text-sm font-bold text-black hover:underline break-all"
            >
              khalidahmed.developer@gmail.com
            </a>
          </div>

          {/* Card 3: Location */}
          <div className="brutal-card p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 text-black font-bold text-lg mb-1.5">
                <MapPin className="w-5 h-5" />
                <h3>Location</h3>
              </div>
              <p className="text-xs font-semibold text-neutral-500 mb-3">
                Peshawar, Pakistan • Open to Remote & Global
              </p>
            </div>
            <span className="text-base font-bold text-black">
              Peshawar, Pakistan
            </span>
          </div>
        </div>

        {/* Responsive Google Maps Embed (Peshawar, Pakistan) */}
        <div className="w-full h-80 rounded-[24px] overflow-hidden border-2 border-dashed border-black shadow-inner">
          <iframe
            title="Khalid Ahmed - Peshawar Pakistan Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d211756.9740510619!2d71.40225102553955!3d33.97729864228965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d917b90f0e79cf%3A0xa816b2fb379f8160!2sPeshawar%2C%20Khyber%20Pakhtunkhwa%2C%20Pakistan!5e0!3m2!1sen!2s!4v1704092010000!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Contact Form Container */}
        <div className="pt-4">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-black tracking-tight mb-2">
            Got an Opportunity? <span className="text-neutral-500">Let’s Collaborate</span>
          </h3>
          <p className="text-neutral-600 text-sm sm:text-base leading-relaxed mb-8">
            Whether it’s a full-time lead position, enterprise contract consulting, or cloud microservices development, send a message below.
          </p>

          {status === 'success' ? (
            <div className="p-6 rounded-2xl bg-green-50 border-2 border-green-600 flex items-start gap-3 text-green-900 animate-in fade-in">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-lg">Message Sent Successfully!</h4>
                <p className="text-sm mt-1">
                  Thank you for reaching out. Khalid Ahmed will get back to you promptly.
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {status === 'error' && (
                <div className="p-4 rounded-xl bg-red-50 border border-red-200 flex items-center gap-3 text-red-700 text-sm">
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  <span>Something went wrong submitting your form. Please try emailing directly at <a href="mailto:khalidahmed.developer@gmail.com" className="underline font-bold">khalidahmed.developer@gmail.com</a>.</span>
                </div>
              )}

              {/* Name & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                <div className="input-group">
                  <span className="input-badge">Your Name*</span>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="e.g. John Doe"
                    autoComplete="name"
                  />
                </div>

                <div className="input-group">
                  <span className="input-badge">Your Email*</span>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="e.g. john@company.com"
                    autoComplete="email"
                  />
                </div>
              </div>

              {/* Subject Input */}
              <div className="input-group">
                <span className="input-badge">Subject*</span>
                <input
                  type="text"
                  name="subject"
                  required
                  placeholder="e.g. Senior Full Stack .NET Role / Project Inquiry"
                />
              </div>

              {/* Message Textarea */}
              <div className="input-group">
                <span className="input-badge">Your Message*</span>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Detail your project requirements, tech stack, or job description..."
                />
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="brutal-btn py-3 px-8 text-base"
                >
                  <span>{status === 'loading' ? 'Sending Message...' : 'Send Message'}</span>
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
