'use client';

import { useStaggerAnimation } from '@/hooks/use-scroll-animation';

const categories = [
  {
    name: 'Frontend',
    tech: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Framer Motion']
  },
  {
    name: 'Backend',
    tech: ['Node.js', 'Python', 'Go', 'NestJS', 'Rust']
  },
  {
    name: 'Database',
    tech: ['PostgreSQL', 'Redis', 'MongoDB', 'Supabase', 'Prisma']
  },
  {
    name: 'Cloud & DevOps',
    tech: ['AWS', 'Docker', 'Kubernetes', 'Vercel', 'GitHub Actions']
  }
];

export function TechStackSection() {
  const containerRef = useStaggerAnimation({ staggerDelay: 100 });

  return (
    <section id="tech-stack" className="relative py-12 sm:py-16 overflow-hidden border-b border-white/5">
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-transparent rounded-full blur-[120px] pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-10 sm:mb-12">
          <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-blue-400/70 mb-3 animate-on-scroll">
            Tech Arsenal
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-[1.1] animate-on-scroll delay-100">
            Modern Stack for Maximum Velocity
          </h2>
        </div>

        {/* Compact Grid */}
        <div ref={containerRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {categories.map((category) => (
            <div 
              key={category.name} 
              data-animate
              className="animate-on-scroll glass p-6 rounded-2xl hover:bg-white/[0.04] transition-colors duration-500 group relative border border-white/[0.05] hover:border-white/[0.1] overflow-hidden"
            >
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-5">
                   <div className="w-1 h-5 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full" />
                   <h3 className="text-lg font-bold text-white tracking-tight">{category.name}</h3>
                </div>
                
                <ul className="space-y-2.5">
                  {category.tech.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-white/50 hover:text-white transition-colors cursor-default">
                      <svg width="8" height="8" viewBox="0 0 12 12" fill="none" className="text-blue-500/50">
                        <circle cx="6" cy="6" r="4" fill="currentColor" />
                      </svg>
                      <span className="text-sm font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
