'use client';

const techCategories = [
  {
    name: 'Frontend',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js'],
  },
  {
    name: 'Backend',
    technologies: ['Node.js', 'Python', 'Django', 'PostgreSQL', 'MongoDB'],
  },
  {
    name: 'Mobile',
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Expo'],
  },
  {
    name: 'Cloud & DevOps',
    technologies: ['AWS', 'Vercel', 'Docker', 'Kubernetes', 'GitHub Actions'],
  },
  {
    name: 'AI & ML',
    technologies: ['OpenAI', 'TensorFlow', 'PyTorch', 'LangChain', 'Hugging Face'],
  },
  {
    name: 'Tools & Services',
    technologies: ['Firebase', 'Stripe', 'SendGrid', 'Sentry', 'DataDog'],
  },
];

export function TechStackSection() {
  return (
    <section id="tech-stack" className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-card overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-transparent to-cyan-600/20 rounded-full blur-3xl" />
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 leading-tight">
            Powered by the Best.
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Built for the Future.
            </span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-lg max-w-2xl mx-auto px-2">
            We use cutting-edge technologies and frameworks to build scalable solutions.
          </p>
        </div>

        {/* Tech grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {techCategories.map((category, index) => (
            <div
              key={index}
              className="group glassmorphism rounded-lg sm:rounded-xl p-5 sm:p-6 hover:bg-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30 hover:-translate-y-2 active:scale-95"
            >
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 flex items-center gap-2">
                <span className="w-1 h-5 sm:h-6 bg-gradient-to-b from-cyan-400 to-purple-400 rounded-full" />
                {category.name}
              </h3>

              <div className="space-y-2">
                {category.technologies.map((tech, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors group/tech cursor-default"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400/50 group-hover/tech:bg-cyan-400 transition-colors flex-shrink-0" />
                    <span className="text-xs sm:text-sm lg:text-base">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom accent text */}
        <div className="mt-12 sm:mt-16 text-center">
          <p className="text-gray-400 mb-3 sm:mb-4 text-sm sm:text-base">And many more technologies tailored to your needs</p>
          <div className="flex justify-center gap-2 flex-wrap">
            {['APIs', 'Cloud Storage', 'Real-time Data', 'Analytics', 'Security'].map((tag) => (
              <span key={tag} className="px-3 sm:px-4 py-1 sm:py-2 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm text-gray-400">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
