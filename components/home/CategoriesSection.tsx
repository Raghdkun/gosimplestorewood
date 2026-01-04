'use client';

import Link from 'next/link';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { categories } from '@/data/mockData';

export default function CategoriesSection() {
  return (
    <section className="py-12 bg-wood-dark/50">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fade-up">
          <h2 className="text-3xl font-bold text-white mb-8">Shop by Category</h2>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[250px]">
          {/* Large Category - Furniture */}
          <AnimatedSection animation="fade-up" delay={100} className="lg:col-span-2">
            <Link href="/shop?category=furniture" className="group relative rounded-2xl overflow-hidden cursor-pointer block h-full">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url('${categories[0].image}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <span className="text-primary text-sm font-bold uppercase tracking-wider mb-2 block">Premium</span>
                <h3 className="text-3xl font-bold text-white mb-2">Furniture</h3>
                <p className="text-white/70 max-w-sm mb-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  Handcrafted pieces that define your space with elegance.
                </p>
                <div className="inline-flex items-center gap-2 text-white font-bold border-b border-primary pb-1">
                  Explore <span className="material-symbols-outlined text-lg">arrow_forward</span>
                </div>
              </div>
            </Link>
          </AnimatedSection>

          {/* Small Category - Lighting */}
          <AnimatedSection animation="fade-up" delay={200}>
            <Link href="/shop?category=lighting" className="group relative rounded-2xl overflow-hidden cursor-pointer block h-full">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url('${categories[1].image}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-2xl font-bold text-white">Lighting</h3>
              </div>
            </Link>
          </AnimatedSection>

          {/* Small Category - Electronics */}
          <AnimatedSection animation="fade-up" delay={300}>
            <Link href="/shop?category=electronics" className="group relative rounded-2xl overflow-hidden cursor-pointer block h-full">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url('${categories[2].image}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-2xl font-bold text-white">Electronics</h3>
              </div>
            </Link>
          </AnimatedSection>

          {/* Large Category - Workspace */}
          <AnimatedSection animation="fade-up" delay={400} className="lg:col-span-2">
            <Link href="/shop?category=workspace" className="group relative rounded-2xl overflow-hidden cursor-pointer block h-full">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url('${categories[3].image}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-3xl font-bold text-white mb-2">Workspace</h3>
                <p className="text-white/70 max-w-sm mb-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  Elevate your productivity with our curated desk essentials.
                </p>
                <div className="inline-flex items-center gap-2 text-white font-bold border-b border-primary pb-1">
                  Explore <span className="material-symbols-outlined text-lg">arrow_forward</span>
                </div>
              </div>
            </Link>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
