'use client';

import Link from 'next/link';
import AnimatedSection from '@/components/ui/AnimatedSection';

export default function ShopHero() {
  return (
    <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-10 py-8">
      <AnimatedSection animation="fade-up">
        <div 
          className="glass-panel relative flex flex-col justify-center overflow-hidden rounded-2xl p-8 min-h-[200px] mb-8"
        >
          {/* Background Image with Overlay */}
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center opacity-40 mix-blend-overlay"
            style={{
              backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuA-2FtRgL2g29c6pYpOhKCIG7U-5du4TKMR_VBuORNwR3I3Bi9UTyzsiLnPqeU30K7ZAUJ8c2dT_8fr2ewXHIkrEUZ-AgMcD-tL1PTcSitRs3IyD4ULgpqrhwoz63yEdgTDVxy4ujwkdWAf-cTlaEUXffMHx9Dv-efBJKtTB0A4XPwZSdm9Se0Up5-IujMPJPei8BUwUaIjUF_pYVhZL-tcrE0iOI2o8UWpE8kgApBlDIUt7-zsNUKVwFOsevlr2gLl6TKqSYg-zWZ_')`
            }}
          />
          <div className="absolute inset-0 z-0 bg-gradient-to-r from-background-dark via-background-dark/80 to-transparent" />
          
          <div className="relative z-10 flex flex-col gap-2 max-w-2xl">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 text-sm text-text-muted mb-2">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <span className="material-symbols-outlined text-[12px]">chevron_right</span>
              <span className="text-primary font-medium">Shop All</span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-black tracking-tight text-white mb-2">
              Testing
            </h1>
            <p className="text-text-muted text-lg max-w-lg">
              This Shop page designed for testing.
            </p>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
