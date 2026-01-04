'use client';

import AnimatedSection from '@/components/ui/AnimatedSection';

export default function AboutStory() {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <AnimatedSection animation="fade-right">
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-dO7xaA5HILSgsoHHSt-ObZK86rNab_HuGfRzlbZSdctWF_JgpBN5wLYdpwYaWwsMsJm_tLonhtTUKBN5v-y0TvuIiEJgRYju48H19qOfqH2zE1Zl3X9O4qgieio8gcoUEvYfDGSZXvVVwvxyTBSpeJcDcVajd4Z-gpWAKk0Auwnpl4FyqvS6F3DXDcG04q-3_Y3sBzVlEgtcn6UBCAuQlyC6F7cRLYkRZ0ioi7wLJPltHX4WXHpdmFzLBC5xZHCTd97jWc6qZt10"
                  alt="Our Workshop"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating Card */}
              <div className="absolute -bottom-6 -right-6 bg-background-dark border border-white/10 rounded-xl p-6 shadow-2xl max-w-[200px]">
                <div className="text-4xl font-bold text-primary mb-1">5+</div>
                <div className="text-white/70 text-sm">Years of Excellence</div>
              </div>
            </div>
          </AnimatedSection>

          {/* Content */}
          <AnimatedSection animation="fade-left">
            <div className="space-y-6">
              <span className="text-primary uppercase tracking-wider text-sm font-semibold">
                How It Started
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
                From Passion to Purpose
              </h2>
              <div className="space-y-4 text-white/70 leading-relaxed">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                </p>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.
                </p>
                <p>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
