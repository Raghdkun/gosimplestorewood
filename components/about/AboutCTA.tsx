'use client';

import Link from 'next/link';
import AnimatedSection from '@/components/ui/AnimatedSection';

export default function AboutCTA() {
  return (
    <section className="py-16 lg:py-24 bg-wood-dark/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fade-up">
          <div className="relative rounded-3xl overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-linear-to-r from-primary/20 to-orange-500/10" />
            <div className="absolute inset-0 bg-background-dark/80" />
            
            {/* Content */}
            <div className="relative py-16 lg:py-20 px-8 lg:px-16 text-center">
              <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Space?
              </h2>
              <p className="text-white/60 text-lg max-w-2xl mx-auto mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/shop"
                  className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-light text-white font-bold py-3.5 px-8 rounded-lg transition-all shadow-[0_0_20px_rgba(236,109,19,0.4)]"
                >
                  <span className="material-symbols-outlined">storefront</span>
                  Shop Now
                </Link>
                <Link
                  href="/collections"
                  className="inline-flex items-center justify-center gap-2 bg-surface-dark border border-white/10 hover:border-primary/50 text-white font-bold py-3.5 px-8 rounded-lg transition-all"
                >
                  <span className="material-symbols-outlined">category</span>
                  View Collections
                </Link>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
