'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background to-card pt-16 sm:pt-20">
      {/* Animated background grid */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00d9ff_1px,transparent_1px),linear-gradient(to_bottom,#00d9ff_1px,transparent_1px)] bg-[size:3rem_3rem] sm:bg-[size:4rem_4rem]" />
      </div>

      {/* Glowing orbs - adjusted for mobile */}
      <div className="absolute top-10 -left-20 w-48 h-48 sm:top-20 sm:left-10 sm:w-72 sm:h-72 bg-purple-600/20 rounded-full blur-3xl -z-10" />
      <div className="absolute -bottom-20 -right-20 w-56 h-56 sm:bottom-20 sm:right-10 sm:w-96 sm:h-96 bg-cyan-500/20 rounded-full blur-3xl -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Logo */}
        <div className="mb-6 sm:mb-8 flex justify-center">
          <img 
            src="/dinz-logo.png" 
            alt="DINZ" 
            className="h-12 sm:h-16 lg:h-20 object-contain"
          />
        </div>

        {/* Main headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold text-balance mb-4 sm:mb-6 leading-tight hover-glitch">
          We Don't Just Build Software.
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
            We Engineer the Future.
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-base sm:text-xl text-gray-300 text-balance max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed px-2">
          Custom development + our own cutting-edge products. Built for founders who refuse to settle.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-12 sm:mb-16">
          <Link href="#contact" className="w-full sm:w-auto">
            <button className="group relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50 hover:scale-105 active:scale-95">
              <span className="relative flex items-center justify-center sm:justify-start gap-2">
                Let's Build Something Legendary
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </Link>
          <Link href="#services" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-cyan-400 border-2 border-cyan-400/50 rounded-lg hover:bg-cyan-400/10 transition-all duration-300 hover:border-cyan-400 active:scale-95">
              Explore Our Work
            </button>
          </Link>
        </div>

        {/* Floating stats/badges */}
        <div className="mt-10 sm:mt-16 grid grid-cols-3 gap-3 sm:gap-8 justify-center">
          <div className="glassmorphism rounded-lg sm:rounded-xl px-3 sm:px-6 py-3 sm:py-4 backdrop-blur-sm hover:bg-white/20 transition-all">
            <div className="text-xl sm:text-3xl font-bold text-cyan-400">50+</div>
            <div className="text-xs sm:text-sm text-gray-400">Projects</div>
          </div>
          <div className="glassmorphism rounded-lg sm:rounded-xl px-3 sm:px-6 py-3 sm:py-4 backdrop-blur-sm hover:bg-white/20 transition-all">
            <div className="text-xl sm:text-3xl font-bold text-purple-400">99.9%</div>
            <div className="text-xs sm:text-sm text-gray-400">Uptime</div>
          </div>
          <div className="glassmorphism rounded-lg sm:rounded-xl px-3 sm:px-6 py-3 sm:py-4 backdrop-blur-sm hover:bg-white/20 transition-all">
            <div className="text-xl sm:text-3xl font-bold text-blue-400">5★</div>
            <div className="text-xs sm:text-sm text-gray-400">Rated</div>
          </div>
        </div>
      </div>


    </section>
  );
}
