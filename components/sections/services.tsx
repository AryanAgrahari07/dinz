'use client';

import { Globe, Smartphone, Cog, Zap, Cloud } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Lightning-fast, scalable, pixel-perfect web applications',
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    description: 'iOS & Android apps that users love',
  },
  {
    icon: Cog,
    title: 'Custom Software',
    description: 'Built exactly how you need it',
  },
  {
    icon: Zap,
    title: 'Automation & AI',
    description: 'Work smarter, not harder',
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    description: 'Secure, scalable, always online',
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-background">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00d9ff_1px,transparent_1px),linear-gradient(to_bottom,#00d9ff_1px,transparent_1px)] bg-[size:3rem_3rem] sm:bg-[size:4rem_4rem]" />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 leading-tight">
            Your Vision. Our Code.
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              Limitless Possibilities.
            </span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-lg max-w-2xl mx-auto px-2">
            We specialize in building innovative solutions across the entire technology stack.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group glassmorphism rounded-lg sm:rounded-xl p-5 sm:p-6 hover:bg-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-2 active:scale-95"
            >
              <service.icon className="w-10 sm:w-12 h-10 sm:h-12 text-cyan-400 mb-3 sm:mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{service.title}</h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
