'use client';

import { ExternalLink, PlayCircle, QrCode, Smartphone, ChefHat, LayoutGrid, Users, LineChart } from 'lucide-react';
import { useStaggerAnimation } from '@/hooks/use-scroll-animation';

const otherSoftwares = [
  {
    name: 'Drone Survey Management',
    client: 'Industrial Operations',
    description: 'Advanced flight planning, fleet telemetry, and enterprise drone survey management system.',
    link: 'https://drone-survey-management-system.netlify.app/',
    tags: ['React', 'Telemetry', 'Cloud'],
    color: 'from-blue-400 to-blue-600'
  },
  {
    name: 'Mutual Fund Cloud Data System',
    client: 'FinTech / Asset Management',
    description: 'Cloud-based central data repository and compliance suite for high-volume mutual fund transactions.',
    tags: ['Node.js', 'PostgreSQL', 'AWS'],
    color: 'from-emerald-400 to-emerald-600'
  },
  {
    name: 'University Event Manager',
    client: 'Higher Education',
    description: 'Campus-wide event orchestration, ticketing, and scheduling platform tailored for high-scale university ops.',
    tags: ['Next.js', 'Redis', 'Stripe'],
    color: 'from-purple-400 to-purple-600'
  },
  {
    name: 'Enterprise Segment Manager',
    client: 'Corporate Marketing',
    description: 'High-performance customer segmentation engine running complex real-time data aggregations.',
    tags: ['Python', 'BigQuery', 'React'],
    color: 'from-cyan-400 to-cyan-600'
  }
];

export function ProductsSection() {
  const containerRef = useStaggerAnimation({ staggerDelay: 100 });

  return (
    <section id="products" className="relative py-12 sm:py-16 lg:py-20 overflow-hidden border-t border-white/5">
      {/* Background gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-cyan-400/70 mb-3 animate-on-scroll">
            Our Software Products
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-[1.1] animate-on-scroll delay-100">
            Engineered for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Industry Giants</span>
          </h2>
        </div>

        {/* ORDERZI - Hero Product Feature */}
        <div className="mb-10 animate-on-scroll delay-200">
          <div className="glass rounded-3xl p-6 sm:p-10 border border-white/10 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
              
              {/* Orderzi Content */}
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Orderzi</h3>
                  <a href="https://orderzi.com" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-white/10 hover:bg-white/20 border border-white/10 rounded-full text-xs font-semibold text-white transition-colors flex items-center gap-1.5">
                    orderzi.com <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <p className="text-lg text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-semibold mb-4">
                  Everything You Need. One Platform.
                </p>
                <p className="text-white/50 text-sm sm:text-base leading-relaxed mb-6">
                  Your Restaurant, Reimagined. From QR menus to live kitchen displays, billing, queue management, and analytics — Orderzi is the all-in-one operating system built for modern Indian restaurants.
                </p>
                
                {/* Orderzi Features Grid */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {[
                    { icon: QrCode, title: 'QR Menu', desc: 'Scan & browse without apps' },
                    { icon: Smartphone, title: 'Mobile POS', desc: 'Instant table ordering' },
                    { icon: ChefHat, title: 'Kitchen KDS', desc: 'Real-time kitchen display screens' },
                    { icon: LayoutGrid, title: 'Floor Map', desc: 'Visual table management' },
                    { icon: Users, title: 'Queue Management', desc: 'Live waitlist & ETA via QR' },
                    { icon: LineChart, title: 'Live Analytics', desc: 'Real-time revenue & dish tracking' },
                  ].map((f, i) => (
                     <div key={i} className="flex gap-3">
                       <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                         <f.icon className="w-4 h-4 text-cyan-400" />
                       </div>
                       <div>
                         <div className="text-sm font-semibold text-white">{f.title}</div>
                         <div className="text-[10px] text-white/40 leading-tight">{f.desc}</div>
                       </div>
                     </div>
                  ))}
                </div>

                <div className="flex gap-4 items-center">
                  <a href="https://www.instagram.com/reel/DV5Sj6oklah/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-400 hover:to-purple-400 text-white text-sm font-bold rounded-xl transition-all active:scale-95 shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                    <PlayCircle className="w-4 h-4" /> Watch Demo
                  </a>
                  <div className="text-xs font-medium text-white/30 uppercase tracking-wider">
                    Transforming 1000s of restaurants daily
                  </div>
                </div>
              </div>

              {/* Orderzi Visual */}
              <div className="relative h-[300px] sm:h-[400px] w-full rounded-2xl overflow-hidden border border-white/10 bg-[#0a0a14] group-hover:border-white/20 transition-colors">
                <div className="absolute top-0 w-full h-8 bg-black/40 border-b border-white/5 flex items-center px-4 gap-1.5 z-10">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400/50" />
                </div>
                {/* Mock UI */}
                <div className="absolute inset-0 pt-8 p-4 flex gap-4">
                  {/* Sidebar mock */}
                  <div className="w-16 h-full bg-white/5 rounded-xl border border-white/5 flex flex-col gap-3 p-3 blur-[1px]">
                    <div className="w-full aspect-square rounded-md bg-white/10" />
                    <div className="w-full aspect-square rounded-md bg-white/5" />
                    <div className="w-full aspect-square rounded-md bg-white/5" />
                  </div>
                  {/* Main content mock */}
                  <div className="flex-1 flex flex-col gap-4">
                    <div className="h-24 w-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl border border-white/5" />
                    <div className="flex-1 w-full bg-white/5 rounded-xl border border-white/5 p-4 flex flex-col gap-3">
                       <div className="w-1/3 h-4 rounded bg-white/10" />
                       <div className="w-full h-px bg-white/5" />
                       <div className="w-full h-10 rounded bg-white/5" />
                       <div className="w-full h-10 rounded bg-white/5" />
                       <div className="w-full h-10 rounded bg-white/5" />
                    </div>
                  </div>
                </div>
                {/* Overlay highlight */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a14] via-transparent to-transparent z-10" />
              </div>
            </div>
          </div>
        </div>

        {/* Other Softwares Grid */}
        <div ref={containerRef} className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {otherSoftwares.map((software, idx) => (
            <div key={idx} data-animate className="animate-on-scroll group relative glass p-6 rounded-2xl border border-white/5 hover:border-white/20 transition-all duration-300">
               <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${software.color} opacity-50 group-hover:opacity-100 transition-opacity`} />
               
               <div className="flex justify-between items-start mb-4">
                 <div>
                   <h4 className="text-xl font-bold text-white tracking-tight">{software.name}</h4>
                   <p className="text-xs font-semibold text-white/30 uppercase tracking-widest mt-1">{software.client}</p>
                 </div>
                 {software.link && (
                   <a href={software.link} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/20 transition-all">
                     <ExternalLink className="w-3.5 h-3.5" />
                   </a>
                 )}
               </div>
               
               <p className="text-white/40 text-sm leading-relaxed mb-5">
                 {software.description}
               </p>
               
               <div className="flex flex-wrap gap-2 mt-auto">
                 {software.tags.map(tag => (
                   <span key={tag} className="text-[10px] sm:text-xs font-medium text-white/50 bg-white/5 px-2.5 py-1 rounded-md border border-white/10">
                     {tag}
                   </span>
                 ))}
               </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
