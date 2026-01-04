'use client';

import Link from 'next/link';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { categories } from '@/data/mockData';

export default function CollectionsGrid() {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-12">
            <span className="text-primary uppercase tracking-wider text-sm font-semibold block mb-2">
              Browse By Category
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              All Collections
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((category, index) => (
            <AnimatedSection key={category.id} animation="fade-up" delay={index * 100}>
              <Link
                href={`/shop?category=${category.slug}`}
                className="group block relative aspect-[4/5] rounded-2xl overflow-hidden"
              >
                {/* Background Image */}
                <img
                  src={category.image}
                  alt={category.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent" />
                
                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="transform transition-transform duration-300 group-hover:translate-y-[-8px]">
                    <h3 className="text-2xl font-bold text-white mb-2">{category.name}</h3>
                    <p className="text-white/70 text-sm mb-3 line-clamp-2">{category.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-white/50 text-sm">{category.productCount} Products</span>
                      <span className="inline-flex items-center gap-1 text-primary font-medium text-sm group-hover:gap-2 transition-all">
                        Explore
                        <span className="material-symbols-outlined text-lg">arrow_forward</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/50 transition-colors duration-300" />
              </Link>
            </AnimatedSection>
          ))}
        </div>

        {/* View All Button */}
        <AnimatedSection animation="fade-up" delay={500}>
          <div className="text-center mt-12">
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 bg-surface-dark border border-white/10 hover:border-primary/50 text-white font-medium py-3 px-8 rounded-lg transition-all hover:bg-primary/10"
            >
              View All Products
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
