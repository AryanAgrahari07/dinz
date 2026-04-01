'use client';

import { Mail, Instagram, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useStaggerAnimation, useCountUp } from '@/hooks/use-scroll-animation';

const reasons = [
  {
    title: 'Zero Technical Debt',
    description: 'We write clean, documented, and testable code. Your project won\'t need a rewrite in 6 months.',
  },
  {
    title: 'Enterprise Architecture',
    description: 'We design systems that handle massive traffic spikes and data loads from day one.',
  },
  {
    title: 'Direct Engineering Access',
    description: 'No middle-men or project managers. You speak directly to the engineers building your product.',
  },
  {
    title: 'Continuous Delivery',
    description: 'Automated CI/CD pipelines mean you see features being shipped to staging in real-time.',
  }
];

export function WhyDinzSection() {
  const containerRef = useStaggerAnimation({ staggerDelay: 100 });
  
  return (
    <section id="why-dinz" className="relative py-12 sm:py-16 border-b border-light/5 overflow-hidden">
      <div className="absolute inset-0 bg-noise pointer-events-none opacity-40" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          <div className="max-w-2xl">
            <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-purple-400/70 mb-4 animate-on-scroll">
              The DINZ Standard
            </p>
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-[1.1] mb-5 animate-on-scroll delay-100">
              Why High-Growth Companies Choose Us
            </h2>
            <p className="text-white/40 text-sm sm:text-lg leading-relaxed font-light mb-6 animate-on-scroll delay-200">
              We don't just write code. We act as your engineering partners, making architectural decisions that save you time, money, and headaches as you scale.
            </p>
            
            <div ref={containerRef} className="space-y-4">
              {reasons.map((reason, idx) => (
                <div key={idx} data-animate className="animate-on-scroll flex gap-4 bg-white/[0.02] border border-white/[0.05] p-5 rounded-2xl hover:bg-white/[0.04] transition-colors">
                  <CheckCircle2 className="w-6 h-6 text-purple-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-white font-semibold text-lg mb-1">{reason.title}</h4>
                    <p className="text-white/40 text-sm">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-on-scroll delay-300">
             {/* Abstract visual art */}
             <div className="aspect-square rounded-full border border-white/10 flex items-center justify-center relative bg-gradient-to-br from-white/[0.01] to-white/[0.05]">
                <div className="absolute inset-0 rounded-full border border-purple-500/20 animate-[spin_60s_linear_infinite]" style={{ borderStyle: 'dashed' }} />
                <div className="w-3/4 h-3/4 rounded-full border border-blue-500/20 animate-[spin_40s_linear_infinite_reverse]" style={{ borderStyle: 'dashed' }} />
                <div className="w-1/2 h-1/2 rounded-full border border-cyan-500/20 bg-black/40 backdrop-blur-xl flex flex-col items-center justify-center shadow-[0_0_50px_rgba(99,179,237,0.1)]">
                   <img src="/dinz-logo.png" alt="DINZ mark" className="h-8 md:h-12 w-auto mb-2 opacity-80" />
                   <span className="text-xs text-white/30 uppercase tracking-[0.3em] font-medium">Core</span>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section id="contact" className="relative py-16 sm:py-24 overflow-hidden">
      {/* Immersive mesh gradient background */}
      <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[800px] pointer-events-none blur-[150px] opacity-40 -z-10 animate-gradient-shift">
         <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 rounded-full mix-blend-screen" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-6xl lg:text-[5rem] font-bold tracking-tight leading-[1.1] mb-6 text-white animate-on-scroll">
          Ready to Build <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/30">Something Legendary?</span>
        </h2>
        
        <p className="text-white/50 text-base sm:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed animate-on-scroll delay-100">
          Whether you need a complete enterprise platform rebuilt or a new startup MVP engineered to scale, we are ready to execute.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-on-scroll delay-200">
          <a href="mailto:dinzsoftwares@gmail.com" className="w-full sm:w-auto">
            <button className="w-full group relative px-8 py-4 bg-white text-black font-semibold rounded-2xl overflow-hidden hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_rgba(255,255,255,0.4)]">
              <span className="relative flex items-center justify-center gap-2 text-base">
                <Mail className="w-5 h-5" />
                dinzsoftwares@gmail.com
              </span>
            </button>
          </a>
          
          <a href="https://instagram.com/dinz.dev" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
            <button className="w-full group glass px-8 py-4 text-white font-semibold rounded-2xl hover:bg-white/10 hover:scale-105 active:scale-95 transition-all duration-300">
              <span className="flex items-center justify-center gap-2 text-base">
                <Instagram className="w-5 h-5 text-purple-400" />
                @dinz.dev
              </span>
            </button>
          </a>
        </div>
        
        <div className="mt-16 text-white/30 text-sm font-medium tracking-wide uppercase flex items-center justify-center gap-4 animate-on-scroll delay-300">
          <span className="w-8 h-px bg-white/20" />
          Expect a reply within 24 business hours
          <span className="w-8 h-px bg-white/20" />
        </div>
      </div>
    </section>
  );
}
