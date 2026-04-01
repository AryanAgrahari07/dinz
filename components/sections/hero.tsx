'use client';

import { useEffect, useState, useRef } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { useCountUp } from '@/hooks/use-scroll-animation';

const typingTexts = [
  'Enterprise Systems',
  'SaaS Platforms',
  'Mobile Applications',
  'AI-Powered Solutions',
  'Cloud Infrastructure',
];

function TypingEffect() {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = typingTexts[textIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && charIndex < current.length) {
      timeout = setTimeout(() => setCharIndex((c) => c + 1), 60);
    } else if (!isDeleting && charIndex === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex((c) => c - 1), 30);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setTextIndex((t) => (t + 1) % typingTexts.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex]);

  return (
    <span className="text-gradient-hero">
      {typingTexts[textIndex].slice(0, charIndex)}
      <span className="border-r-2 border-blue-400 animate-typing-cursor ml-0.5" />
    </span>
  );
}

function FloatingParticles() {
  const [particles, setParticles] = useState<any[]>([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: 30 }).map(() => ({
        width: `${Math.random() * 3 + 1}px`,
        height: `${Math.random() * 3 + 1}px`,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animation: `float ${Math.random() * 6 + 4}s ease-in-out infinite`,
        animationDelay: `${Math.random() * 4}s`,
        opacity: Math.random() * 0.5 + 0.2,
      }))
    );
  }, []);

  if (particles.length === 0) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((style, i) => (
        <div key={i} className="absolute rounded-full bg-blue-400/20 shadow-[0_0_10px_rgba(96,165,250,0.3)]" style={style} />
      ))}
    </div>
  );
}

export function HeroSection() {
  const [loaded, setLoaded] = useState(false);
  const projectsRef = useCountUp(50, { suffix: '+' });
  const uptimeRef = useCountUp(99.9, { suffix: '%' });
  const ratingRef = useCountUp(5, { suffix: '★' });

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative flex items-center justify-center overflow-hidden bg-noise pt-28 sm:pt-36 pb-12 sm:pb-16 border-b border-white/5">
      {/* Deep gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#060612] via-[#080818] to-background" />

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60" />

      {/* Gradient orbs */}
      <div className="absolute top-[10%] left-[15%] w-[500px] h-[500px] bg-blue-600/8 rounded-full blur-[120px]" />
      <div className="absolute bottom-[10%] right-[10%] w-[600px] h-[600px] bg-purple-600/8 rounded-full blur-[120px]" />
      <div className="absolute top-[40%] right-[30%] w-[300px] h-[300px] bg-cyan-500/5 rounded-full blur-[100px]" />

      {/* Floating particles */}
      <FloatingParticles />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-4">
        {/* Badge */}
        <div
          className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-6 transition-all duration-1000 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs sm:text-sm text-white/60 font-medium tracking-wide">
            Accepting new projects for Q2 2025
          </span>
        </div>

        {/* Main headline */}
        <h1
          className={`text-4xl sm:text-6xl lg:text-[5rem] font-bold tracking-tight leading-[1.1] mb-5 transition-all duration-1000 delay-200 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <span className="text-white">We Engineer</span>
          <br />
          <TypingEffect />
        </h1>

        {/* Subheadline */}
        <p
          className={`text-base sm:text-xl text-white/40 max-w-2xl mx-auto mb-8 leading-relaxed font-light transition-all duration-1000 delay-400 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          Custom software development & proprietary products.
          <br className="hidden sm:block" />
          Built for founders, CTOs, and enterprises who refuse to settle.
        </p>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-12 transition-all duration-1000 delay-500 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <Link href="#contact" className="w-full sm:w-auto">
            <button className="group relative w-full sm:w-auto px-8 py-3.5 text-sm sm:text-base font-semibold text-white rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.03] active:scale-95">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center justify-center gap-2">
                Start a Project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
          </Link>
          <Link href="#case-studies" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto px-8 py-3.5 text-sm sm:text-base font-semibold text-white/70 rounded-xl glass hover:text-white hover:bg-white/[0.06] transition-all duration-300 active:scale-95">
              View Our Work
            </button>
          </Link>
        </div>

        {/* Stats */}
        <div
          className={`grid grid-cols-3 gap-4 sm:gap-8 max-w-xl mx-auto transition-all duration-1000 delay-700 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="text-center">
            <div className="text-2xl sm:text-4xl font-bold text-white animate-counter-glow">
              <span ref={projectsRef}>0</span>
            </div>
            <div className="text-xs sm:text-sm text-white/30 mt-1 font-medium">Projects Shipped</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-4xl font-bold text-white animate-counter-glow">
              <span ref={uptimeRef}>0</span>
            </div>
            <div className="text-xs sm:text-sm text-white/30 mt-1 font-medium">Uptime SLA</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-4xl font-bold text-white animate-counter-glow">
              <span ref={ratingRef}>0</span>
            </div>
            <div className="text-xs sm:text-sm text-white/30 mt-1 font-medium">Client Rated</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-scroll-hint">
        <span className="text-[10px] text-white/20 uppercase tracking-[0.2em] font-medium">Scroll</span>
        <ChevronDown className="w-4 h-4 text-white/20" />
      </div>
    </section>
  );
}
