'use client';

import { TrendingUp, Users, Zap } from 'lucide-react';

const caseStudies = [
  {
    title: 'E-Commerce Platform Scale-Up',
    client: 'FastCart Inc.',
    problem: 'Legacy platform couldn\'t handle 10x growth',
    solution: 'Rebuilt with Next.js + Node.js microservices',
    results: [
      { metric: '10x faster', description: 'Page load times' },
      { metric: '500K users', description: 'Concurrent capacity' },
      { metric: '99.99% uptime', description: 'Achieved reliability' },
    ],
    icon: TrendingUp,
  },
  {
    title: 'Mobile App Launch for SaaS',
    client: 'ProductHub Analytics',
    problem: 'Needed iOS & Android apps in 3 months',
    solution: 'React Native + Firebase architecture',
    results: [
      { metric: '100K downloads', description: 'First month' },
      { metric: '4.8★ rating', description: 'App stores' },
      { metric: '40% engagement', description: 'Increase' },
    ],
    icon: Users,
  },
  {
    title: 'Automation Pipeline Implementation',
    client: 'DataFlow Systems',
    problem: 'Manual processes costing $200K annually',
    solution: 'Custom automation with AI integration',
    results: [
      { metric: '$200K saved', description: 'Annual cost reduction' },
      { metric: '90% faster', description: 'Processing time' },
      { metric: '99% accurate', description: 'Automation rate' },
    ],
    icon: Zap,
  },
];

export function CaseStudiesSection() {
  return (
    <section id="case-studies" className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-background">
      {/* Background grid */}
      <div className="absolute inset-0 -z-10 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00d9ff_1px,transparent_1px),linear-gradient(to_bottom,#00d9ff_1px,transparent_1px)] bg-[size:3rem_3rem] sm:bg-[size:4rem_4rem]" />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 leading-tight">
            Real Projects. Real Impact.
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Real Results.
            </span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-lg max-w-2xl mx-auto px-2">
            See how we've transformed businesses with cutting-edge solutions.
          </p>
        </div>

        {/* Case studies */}
        <div className="space-y-4 sm:space-y-6">
          {caseStudies.map((study, index) => {
            const Icon = study.icon;
            return (
              <div
                key={index}
                className="glassmorphism rounded-lg sm:rounded-2xl p-5 sm:p-8 lg:p-10 hover:bg-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 active:scale-95"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                  {/* Content column */}
                  <div className="md:col-span-2">
                    <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                      <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400 flex-shrink-0 mt-1" />
                      <div className="min-w-0">
                        <h3 className="text-lg sm:text-2xl font-bold text-white mb-1 leading-tight">{study.title}</h3>
                        <p className="text-gray-400 text-sm sm:text-base">{study.client}</p>
                      </div>
                    </div>

                    <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                      <div>
                        <p className="text-xs sm:text-sm font-semibold text-gray-400 uppercase tracking-wide mb-1">
                          Challenge
                        </p>
                        <p className="text-white text-sm sm:text-base">{study.problem}</p>
                      </div>
                      <div>
                        <p className="text-xs sm:text-sm font-semibold text-gray-400 uppercase tracking-wide mb-1">
                          Solution
                        </p>
                        <p className="text-white text-sm sm:text-base">{study.solution}</p>
                      </div>
                    </div>
                  </div>

                  {/* Results column */}
                  <div className="mt-4 md:mt-0">
                    <p className="text-xs sm:text-sm font-semibold text-gray-400 uppercase tracking-wide mb-3 sm:mb-4">
                      Results
                    </p>
                    <div className="space-y-3 sm:space-y-4">
                      {study.results.map((result, i) => (
                        <div key={i} className="border-l-2 border-cyan-400/50 pl-3 sm:pl-4">
                          <div className="text-lg sm:text-2xl font-bold text-cyan-400">{result.metric}</div>
                          <div className="text-xs sm:text-sm text-gray-400">{result.description}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
