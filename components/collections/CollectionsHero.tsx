'use client';

import AnimatedSection from '@/components/ui/AnimatedSection';

export default function CollectionsHero() {
  return (
    <section className="relative py-16 lg:py-24 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <AnimatedSection animation="fade-up">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-primary uppercase tracking-wider text-sm font-semibold block mb-4">
              Explore Our World
            </span>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Curated{' '}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-orange-200">
                Collections
              </span>
            </h1>
            <p className="text-white/60 text-lg leading-relaxed max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
