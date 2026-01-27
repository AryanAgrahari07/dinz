'use client';

import { Mail, Instagram, Zap, Lock, Rocket } from 'lucide-react';
import Link from 'next/link';

const reasons = [
  {
    icon: Zap,
    title: 'Speed & Precision',
    description: 'We ship fast without cutting corners. Your timeline matters to us.',
  },
  {
    icon: Lock,
    title: 'Security-First',
    description: 'Enterprise-grade protection, always. Your data is our priority.',
  },
  {
    icon: Rocket,
    title: 'Scalable by Design',
    description: 'Built to grow with your business. No limits, only possibilities.',
  },
];

export function WhyDinzSection() {
  return (
    <section id="why-dinz" className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-background">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00d9ff_1px,transparent_1px),linear-gradient(to_bottom,#00d9ff_1px,transparent_1px)] bg-[size:3rem_3rem] sm:bg-[size:4rem_4rem]" />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 leading-tight">
            Why Startups & CTOs
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              Choose DINZ
            </span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-lg max-w-2xl mx-auto px-2">
            We combine expertise, innovation, and dedication to deliver results that exceed expectations.
          </p>
        </div>

        {/* Reasons grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-20">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div key={index} className="glassmorphism rounded-lg sm:rounded-xl p-5 sm:p-8 hover:bg-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-2 active:scale-95">
                <Icon className="w-10 sm:w-12 h-10 sm:h-12 text-cyan-400 mb-3 sm:mb-4" />
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">{reason.title}</h3>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">{reason.description}</p>
              </div>
            );
          })}
        </div>

        {/* Trust signals */}
        <div className="glassmorphism rounded-lg sm:rounded-2xl p-6 sm:p-10 mb-12 sm:mb-20">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-8 text-center">
            <div>
              <div className="text-2xl sm:text-4xl font-bold text-cyan-400 mb-1 sm:mb-2">50+</div>
              <p className="text-gray-400 text-xs sm:text-base">Projects Delivered</p>
            </div>
            <div>
              <div className="text-2xl sm:text-4xl font-bold text-purple-400 mb-1 sm:mb-2">99.9%</div>
              <p className="text-gray-400 text-xs sm:text-base">Uptime Guarantee</p>
            </div>
            <div>
              <div className="text-2xl sm:text-4xl font-bold text-blue-400 mb-1 sm:mb-2">5★</div>
              <p className="text-gray-400 text-xs sm:text-base">Client Rated</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section id="contact" className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-card overflow-hidden">
      {/* Gradient orbs - adjusted for mobile */}
      <div className="absolute -top-48 sm:top-1/2 -right-32 sm:right-0 w-64 h-64 sm:w-96 sm:h-96 bg-purple-600/20 rounded-full blur-3xl -z-10" />
      <div className="absolute -top-48 sm:top-1/2 -left-32 sm:left-0 w-64 h-64 sm:w-96 sm:h-96 bg-cyan-500/20 rounded-full blur-3xl -z-10" />

      <div className="max-w-2xl mx-auto text-center">
        {/* Section header */}
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 leading-tight">
          Ready to Build the Future?
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
            Let's Talk.
          </span>
        </h2>

        <p className="text-gray-400 text-sm sm:text-lg mb-8 sm:mb-12 leading-relaxed px-2">
          Have an ambitious idea? We're here to turn it into reality. Get in touch and let's explore what we can build together.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 w-full sm:w-auto">
          <a href="mailto:dinzsoftwares@gmail.com" className="w-full sm:w-auto">
            <button className="group w-full sm:w-auto flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50 hover:scale-105 active:scale-95">
              <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              Email Us
            </button>
          </a>
          <a href="https://instagram.com/dinz.dev" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-cyan-400 border-2 border-cyan-400/50 rounded-lg hover:bg-cyan-400/10 transition-all duration-300 hover:border-cyan-400 active:scale-95">
              <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              Instagram
            </button>
          </a>
        </div>

        {/* Quick contact info */}
        <div className="glassmorphism rounded-lg sm:rounded-xl p-5 sm:p-6 mb-8 sm:mb-12">
          <p className="text-gray-300 mb-2 sm:mb-3 text-sm sm:text-base">Or reach out directly:</p>
          <p className="text-lg sm:text-xl text-cyan-400 font-semibold break-all">(dinzsoftwares@gmail.com)</p>
        </div>

        {/* Footer text */}
        <p className="text-gray-500 text-xs sm:text-sm px-2">
          Expect a response within 24 hours. We're excited to hear about your project!
        </p>
      </div>
    </section>
  );
}
