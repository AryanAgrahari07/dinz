'use client';

import { Globe, Smartphone, Cog, Zap, Cloud, Code, Database, Shield } from 'lucide-react';
import { useStaggerAnimation } from '@/hooks/use-scroll-animation';

const services = [
  {
    icon: Globe,
    title: 'Web Development',
    description: 'High-performance web applications built with React, Next.js, and modern frameworks. Pixel-perfect, blazing fast, SEO-optimized.',
    accent: 'from-blue-400/20 to-blue-600/5',
    iconColor: 'text-blue-400',
    large: true,
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    description: 'Cross-platform iOS & Android applications with native performance and stunning interfaces.',
    accent: 'from-purple-400/20 to-purple-600/5',
    iconColor: 'text-purple-400',
  },
  {
    icon: Cog,
    title: 'Custom Software',
    description: 'Bespoke enterprise solutions engineered exactly to your specifications.',
    accent: 'from-cyan-400/20 to-cyan-600/5',
    iconColor: 'text-cyan-400',
  },
  {
    icon: Zap,
    title: 'AI & Automation',
    description: 'Intelligent automation pipelines, LLM integrations, and ML-powered features that transform workflows.',
    accent: 'from-amber-400/20 to-amber-600/5',
    iconColor: 'text-amber-400',
    large: true,
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    description: 'Scalable cloud architecture with CI/CD, containerization, and 99.9% uptime infrastructure.',
    accent: 'from-emerald-400/20 to-emerald-600/5',
    iconColor: 'text-emerald-400',
  },
  {
    icon: Database,
    title: 'Data Engineering',
    description: 'Robust data pipelines, analytics dashboards, and real-time processing systems.',
    accent: 'from-rose-400/20 to-rose-600/5',
    iconColor: 'text-rose-400',
  },
];

export function ServicesSection() {
  const containerRef = useStaggerAnimation({ staggerDelay: 120 });

  return (
    <section id="services" className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-noise border-b border-white/5">
      <div className="absolute inset-0 bg-dot-pattern opacity-40" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="relative max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-8 sm:mb-10">
          <div className="animate-on-scroll">
            <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-blue-400/70 mb-4">
              What We Do
            </p>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-5 leading-[1.1]">
              Full-Stack Engineering
              <span className="block text-gradient mt-1">for Ambitious Teams</span>
            </h2>
            <p className="text-white/35 text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed font-light">
              End-to-end software development across the entire technology stack.
              From concept to deployment and beyond.
            </p>
          </div>
        </div>

        {/* Bento Grid */}
        <div ref={containerRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {services.map((service, index) => (
            <div
              key={index}
              data-animate
              className={`animate-on-scroll group relative rounded-2xl p-6 sm:p-8 glass-card hover-lift cursor-default overflow-hidden ${
                service.large ? 'sm:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Gradient hover effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />

              {/* Gradient border on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 gradient-border" />

              <div className="relative z-10">
                <div className={`w-11 h-11 rounded-xl bg-white/[0.04] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className={`w-5 h-5 ${service.iconColor}`} />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2.5 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-white/35 text-sm leading-relaxed group-hover:text-white/50 transition-colors duration-300">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
