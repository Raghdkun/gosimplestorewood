'use client';

import Link from 'next/link';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { shopProducts } from '@/data/mockData';

export default function FeaturedCollection() {
  const featuredItems = shopProducts.slice(0, 4);

  return (
    <section className="py-16 lg:py-20 bg-wood-dark/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <AnimatedSection animation="fade-right">
            <div className="space-y-6">
              <span className="inline-block bg-primary/20 text-primary px-4 py-1.5 rounded-full text-sm font-semibold uppercase tracking-wider">
                Featured Collection
              </span>
              <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight">
                The Artisan Series
              </h2>
              <p className="text-white/60 text-lg leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <ul className="space-y-3">
                {['Premium Materials', 'Handcrafted Design', 'Sustainable Process'].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-white/80">
                    <span className="material-symbols-outlined text-primary">check_circle</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/shop?collection=artisan"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-light text-white font-bold py-3.5 px-8 rounded-lg transition-all shadow-[0_0_20px_rgba(236,109,19,0.4)]"
              >
                Explore Collection
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
          </AnimatedSection>

          {/* Right Grid */}
          <AnimatedSection animation="fade-left">
            <div className="grid grid-cols-2 gap-4">
              {featuredItems.map((product, index) => (
                <Link
                  key={product.id}
                  href={`/product/${product.slug}`}
                  className={`group relative rounded-xl overflow-hidden ${
                    index === 0 ? 'col-span-2 aspect-[2/1]' : 'aspect-square'
                  }`}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h4 className="text-white font-semibold text-sm lg:text-base truncate">{product.name}</h4>
                    <p className="text-primary font-bold">${product.price.toFixed(2)}</p>
                  </div>
                </Link>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
