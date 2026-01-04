'use client';

import AnimatedSection from '@/components/ui/AnimatedSection';

const features = [
  {
    icon: 'eco',
    title: 'Sustainable Materials',
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
  },
  {
    icon: 'local_shipping',
    title: 'Fast Shipping',
    description: 'Sed do eiusmod tempor incididunt ut labore et dolore.',
  },
  {
    icon: 'verified',
    title: 'Lifetime Warranty',
    description: 'Ut enim ad minim veniam quis nostrud exercitation eiusmod tempor incididunt.',
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-10">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <AnimatedSection key={feature.title} animation="fade-up" delay={index * 150}>
              <div className="glass-panel p-6 rounded-xl flex flex-col items-center text-center gap-4 hover:bg-white/5 transition-colors group">
                <div className="size-14 rounded-full bg-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-3xl">{feature.icon}</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
