'use client';

import AnimatedSection from '@/components/ui/AnimatedSection';

const values = [
  {
    icon: 'eco',
    title: 'Sustainability',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.',
  },
  {
    icon: 'handshake',
    title: 'Integrity',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
  },
  {
    icon: 'workspace_premium',
    title: 'Quality',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.',
  },
  {
    icon: 'diversity_3',
    title: 'Community',
    description: 'Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia.',
  },
];

export default function AboutValues() {
  return (
    <section className="py-16 lg:py-24 bg-wood-dark/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-12">
            <span className="text-primary uppercase tracking-wider text-sm font-semibold block mb-2">
              What We Stand For
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Our Core Values
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <AnimatedSection key={value.title} animation="fade-up" delay={index * 100}>
              <div className="p-6 rounded-2xl bg-background-dark border border-white/5 hover:border-primary/30 transition-all group h-full">
                <div className="size-14 rounded-xl bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-primary text-2xl group-hover:text-white">
                    {value.icon}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{value.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{value.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
