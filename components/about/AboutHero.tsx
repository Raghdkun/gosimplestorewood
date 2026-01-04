'use client';

import AnimatedSection from '@/components/ui/AnimatedSection';

export default function AboutHero() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <AnimatedSection animation="fade-up">
          <div className="text-center max-w-4xl mx-auto">
            <span className="text-primary uppercase tracking-wider text-sm font-semibold block mb-4">
              Our Story
            </span>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Crafting Excellence{' '}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-orange-200">
                Since 2020
              </span>
            </h1>
            <p className="text-white/60 text-lg lg:text-xl leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>
          </div>
        </AnimatedSection>

        {/* Stats */}
        <AnimatedSection animation="fade-up" delay={200}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {[
              { value: '10K+', label: 'Happy Customers' },
              { value: '500+', label: 'Products' },
              { value: '50+', label: 'Countries' },
              { value: '4.9', label: 'Average Rating' },
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-surface-dark/30 border border-white/5">
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-white/60 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
