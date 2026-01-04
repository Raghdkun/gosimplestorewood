'use client';

import Link from 'next/link';
import AnimatedSection from '@/components/ui/AnimatedSection';
import ProductCard from '@/components/product/ProductCard';
import { featuredProducts } from '@/data/mockData';

export default function BestSellersSection() {
  return (
    <section className="py-12 relative">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8">
        <AnimatedSection animation="fade-up">
          <div className="flex items-end justify-between border-b border-white/10 pb-4">
            <div>
              <span className="text-primary font-bold tracking-wider uppercase text-sm mb-1 block">
                Curated Selection
              </span>
              <h2 className="text-3xl font-bold text-white">Best Sellers</h2>
            </div>
            <Link 
              href="/shop" 
              className="text-white/70 hover:text-primary transition-colors text-sm font-semibold flex items-center gap-1"
            >
              View All 
              <span className="material-symbols-outlined text-sm">arrow_right_alt</span>
            </Link>
          </div>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product, index) => (
            <AnimatedSection key={product.id} animation="fade-up" delay={index * 100}>
              <div className="group glass-panel rounded-2xl overflow-hidden glass-panel-hover p-3 flex flex-col gap-3">
                <div className="aspect-square rounded-xl overflow-hidden relative">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                  <div className="absolute top-3 right-3 z-20">
                    <button className="size-8 rounded-full bg-white/20 hover:bg-primary backdrop-blur-md flex items-center justify-center text-white transition-colors">
                      <span className="material-symbols-outlined text-[18px]">favorite</span>
                    </button>
                  </div>
                  <div 
                    className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                    style={{ backgroundImage: `url('${product.image}')` }}
                  />
                </div>
                <div className="px-2 pb-2">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-white font-bold text-lg leading-tight group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                    <span className="text-primary font-bold">${product.price.toFixed(2)}</span>
                  </div>
                  <p className="text-white/50 text-xs mb-4">{product.category}</p>
                  <button className="w-full py-2.5 rounded-lg bg-white/5 hover:bg-primary text-white text-sm font-bold transition-all border border-white/10 flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined text-[18px]">add_shopping_cart</span> 
                    Add to Cart
                  </button>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
