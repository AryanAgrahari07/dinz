'use client';

import { ArrowRight } from 'lucide-react';

const products = [
  {
    name: 'CloudSync Pro',
    tagline: 'Real-time data synchronization at lightning speed',
    description:
      'The AI-powered solution that keeps your data perfectly in sync across all platforms',
    features: ['Real-time sync', 'AI-powered', 'Enterprise grade'],
    color: 'from-cyan-400',
  },
  {
    name: 'DevFlow Studio',
    tagline: 'Streamline your entire development workflow',
    description:
      'Complete platform for managing projects, teams, and deployments in one place',
    features: ['Project management', 'Team collaboration', 'Auto-deployment'],
    color: 'from-purple-400',
  },
  {
    name: 'DataVault Analytics',
    tagline: 'Transform raw data into actionable insights',
    description:
      'Advanced analytics and reporting tool with real-time dashboards and AI insights',
    features: ['Real-time dashboards', 'ML predictions', 'Custom reports'],
    color: 'from-blue-400',
  },
  {
    name: 'SecureGate',
    tagline: 'Enterprise security made simple',
    description:
      'Comprehensive security and identity management for modern applications',
    features: ['SSO integration', 'Threat detection', 'Compliance ready'],
    color: 'from-emerald-400',
  },
];

export function ProductsSection() {
  return (
    <section id="products" className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-card">
      {/* Gradient orbs - adjusted for mobile */}
      <div className="absolute -top-32 -right-32 sm:top-0 sm:right-0 w-64 h-64 sm:w-96 sm:h-96 bg-purple-600/10 rounded-full blur-3xl -z-10" />
      <div className="absolute -bottom-32 -left-32 sm:bottom-0 sm:left-0 w-64 h-64 sm:w-96 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 leading-tight">
            We Don't Just Build for Clients.
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              We Build the Future.
            </span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-lg max-w-2xl mx-auto px-2">
            Discover our proprietary products that power innovation across industries.
          </p>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className={`group glassmorphism rounded-lg sm:rounded-2xl p-5 sm:p-8 overflow-hidden relative hover:bg-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-${product.color.split('-')[1]}-500/30 active:scale-95`}
            >
              {/* Color accent line */}
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${product.color} to-transparent`} />

              <div className="mb-4 sm:mb-6">
                <h3 className="text-lg sm:text-2xl font-bold text-white mb-1 sm:mb-2">{product.name}</h3>
                <p className={`text-base sm:text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r ${product.color} to-transparent leading-tight`}>
                  {product.tagline}
                </p>
              </div>

              <p className="text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">{product.description}</p>

              <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                {product.features.map((feature, i) => (
                  <span
                    key={i}
                    className="px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm bg-white/10 text-gray-300 border border-white/20"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              <button className="group/btn flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold transition-colors text-sm sm:text-base">
                Learn More
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
