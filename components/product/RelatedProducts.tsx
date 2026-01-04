'use client';

import Link from 'next/link';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { Product } from '@/types';
import { featuredProducts } from '@/data/mockData';

interface RelatedProductsProps {
  currentProductId: string;
  categoryId?: string;
}

export default function RelatedProducts({ currentProductId, categoryId }: RelatedProductsProps) {
  // Filter out current product and get related ones
  const relatedProducts = featuredProducts
    .filter((p) => p.id !== currentProductId)
    .slice(0, 4);

  return (
    <section className="py-20 border-t border-white/10 bg-wood-dark/30">
      <div className="container mx-auto px-4 lg:px-8">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-12">
            <span className="text-primary uppercase tracking-wider text-sm font-semibold block mb-2">
              Complete Your Space
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Frequently Bought Together
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {relatedProducts.map((product, index) => (
            <AnimatedSection key={product.id} animation="fade-up" delay={index * 100}>
              <Link href={`/product/${product.slug}`} className="group block">
                <div className="glass-panel rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(236,109,19,0.15)]">
                  {/* Image */}
                  <div className="relative aspect-square overflow-hidden bg-wood-dark">
                    <img
                      src={product.images?.[0] || product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Badge */}
                    {product.badges && product.badges.length > 0 && (
                      <div className="absolute top-3 left-3">
                        <span className="bg-primary/90 text-white text-xs font-bold px-2 py-1 rounded uppercase">
                          {product.badges[0]}
                        </span>
                      </div>
                    )}
                    {/* Quick Add */}
                    <button className="absolute bottom-3 right-3 size-10 bg-background-dark/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white/70 hover:text-primary hover:bg-background-dark transition-all opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0">
                      <span className="material-symbols-outlined text-xl">add_shopping_cart</span>
                    </button>
                  </div>

                  {/* Info */}
                  <div className="p-4">
                    <h3 className="font-semibold text-white group-hover:text-primary transition-colors line-clamp-1 mb-1">
                      {product.name}
                    </h3>
                    <p className="text-white/50 text-sm line-clamp-1 mb-2">{product.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-primary font-bold">${product.price.toFixed(2)}</span>
                      {product.rating && (
                        <div className="flex items-center gap-1 text-xs text-white/50">
                          <span className="material-symbols-outlined text-primary text-sm">star</span>
                          {product.rating.toFixed(1)}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>

        {/* Bundle Offer */}
        <AnimatedSection animation="fade-up" delay={400}>
          <div className="mt-12 glass-panel rounded-2xl p-6 lg:p-8 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="size-14 rounded-xl bg-primary/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-3xl">local_offer</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Bundle & Save 15%</h3>
                <p className="text-white/60 text-sm">Add all 4 items to your cart and save automatically</p>
              </div>
            </div>
            <button className="w-full lg:w-auto bg-primary hover:bg-primary-light text-white font-bold py-3 px-8 rounded-lg transition-all shadow-[0_0_20px_rgba(236,109,19,0.3)] flex items-center justify-center gap-2">
              <span className="material-symbols-outlined">shopping_cart</span>
              Add All to Cart
            </button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
