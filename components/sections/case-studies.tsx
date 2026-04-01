'use client';

import { ArrowUpRight, TrendingUp, Users, Zap } from 'lucide-react';
import { useStaggerAnimation } from '@/hooks/use-scroll-animation';

const cases = [
  {
    client: 'Restaurant Booking Network',
    title: 'Scaling an old monolith to handle 10k+ RPS',
    description: 'Migrated a legacy booking application to scalable Node.js microservices. Implemented Redis caching and PostgreSQL sharding, reducing API latency by 85% globally.',
    metric: '85% Latency Drop',
    tags: ['Node.js', 'AWS', 'Redis', 'PostğrafQL'],
    icon: TrendingUp
  },
  {
    client: 'FinTech Startup',
    title: 'Zero-latency real-time trading dashboard',
    description: 'Built a high-frequency trading dashboard pushing market updates to 50k concurrent users seamlessly without dropping ticks.',
    metric: '50k+ Concurrent Users',
    tags: ['React', 'WebSockets', 'Rust', 'Kafka'],
    icon: Zap
  },
  {
    client: 'Healthcare Provider',
    title: 'HIPAA-compliant telemedicine app',
    description: 'Developed mobile applications for iOS and Android featuring end-to-end encrypted video calls and secure EHR integration.',
    metric: '99.9% Uptime SLA',
    tags: ['React Native', 'WebRTC', 'AWS KMS'],
    icon: Users
  },
];

export function CaseStudiesSection() {
  const containerRef = useStaggerAnimation({ staggerDelay: 120 });

  return (
    <section id="case-studies" className="relative py-12 sm:py-16 overflow-hidden border-b border-white/5">
      <div className="absolute inset-0 bg-noise pointer-events-none opacity-40" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-emerald-400/70 mb-3 animate-on-scroll">
            Client Success
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-[1.1] animate-on-scroll delay-100">
            Real Proof of <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Engineering Excellence</span>
          </h2>
        </div>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.map((study, index) => {
            const Icon = study.icon;
            return (
              <div key={study.title} data-animate className="animate-on-scroll glass rounded-2xl p-6 sm:p-8 hover:bg-white/[0.04] transition-colors border border-white/5 hover:border-white/20 group flex flex-col h-full">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">{study.client}</div>
                  </div>
                </div>
                
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 tracking-tight">
                  {study.title}
                </h3>
                
                <p className="text-white/50 text-sm leading-relaxed mb-6 flex-1">
                  {study.description}
                </p>
                
                <div className="mb-6 pt-5 border-t border-white/10">
                  <div className="text-sm font-bold text-white/90">
                    Target Met: <span className="text-emerald-400">{study.metric}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex flex-wrap gap-1.5">
                    {study.tags.map(tag => (
                      <span key={tag} className="text-[10px] sm:text-xs font-medium text-white/40 bg-black/40 px-2 py-0.5 rounded border border-white/5">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-emerald-500/20 group-hover:text-emerald-400 text-white/50 transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
