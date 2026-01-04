'use client';

import Link from 'next/link';
import AnimatedSection from '@/components/ui/AnimatedSection';

export default function HeroSection() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Background decorative glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <AnimatedSection animation="scale">
          <div 
            className="relative rounded-2xl overflow-hidden min-h-[560px] flex items-center bg-cover bg-center shadow-2xl"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(34, 24, 16, 0.85) 0%, rgba(34, 24, 16, 0.4) 50%, rgba(34, 24, 16, 0.1) 100%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuBQUG_JX4mO9BPNq9mWPZcglqw-dYthDTZNsHYs1WyU43fSRTvI9bDUKS3aYxQsufQcJ2MqPMe2m3ABLor9hQTudTPguZ_gtDo_EBUueqkXrw1NjGPeB3VVUYrH-82yP6P0Ed_8-ntnHC9oIbhZDAk2QoMiUDj02wvYtDnVFjQGKJXoYCqEMiCLyXe6UoiznA4vc1q8_t4a0K9zNWnmrpKWp4ILscG_8opr6NY4HVC3kUOYom4Y0PSC6a7E3jCyANqRllNdQyn1U1oL')`
            }}
          >
            <div className="relative z-10 p-8 md:p-16 max-w-2xl flex flex-col items-start gap-6">
              <AnimatedSection animation="fade-left" delay={200}>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-xs font-bold text-primary uppercase tracking-wider">
                  <span className="material-symbols-outlined text-[16px]">verified</span>
                  Winter Collection 2025
                </div>
              </AnimatedSection>
              
              <AnimatedSection animation="fade-up" delay={400}>
                <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1] tracking-tight drop-shadow-lg">
                  Crafted for <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-200">
                    Testing.
                  </span>
                </h1>
              </AnimatedSection>
              
              <AnimatedSection animation="fade-up" delay={600}>
                <p className="text-lg text-gray-200 font-medium max-w-lg leading-relaxed drop-shadow-md">
                  This E-store designed for testing.
                </p>
              </AnimatedSection>
              
              <AnimatedSection animation="fade-up" delay={800}>
                <div className="flex flex-wrap gap-4 mt-4">
                  <Link
                    href="/shop"
                    className="bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-xl text-base font-bold transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40 flex items-center gap-2"
                  >
                    Shop Now
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </Link>
                  <Link
                    href="/collections"
                    className="bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 text-white px-8 py-4 rounded-xl text-base font-bold transition-all flex items-center gap-2"
                  >
                    View Lookbook
                  </Link>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
