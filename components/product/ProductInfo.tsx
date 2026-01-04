'use client';

import { useState } from 'react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { Product } from '@/types';

interface ProductInfoProps {
  product: Product;
}

export default function ProductInfo({ product }: ProductInfoProps) {
  const [quantity, setQuantity] = useState(1);
  const [selectedFinish, setSelectedFinish] = useState('Dark');
  const [selectedUpholstery, setSelectedUpholstery] = useState('Charcoal Fabric');

  const finishes = product.variants?.filter(v => v.type === 'finish') || [
    { id: 'v1', name: 'Dark', colorCode: '#4A3728' },
    { id: 'v2', name: 'Med', colorCode: '#8B5A2B' },
    { id: 'v3', name: 'Light', colorCode: '#C19A6B' },
  ];

  const upholsteryOptions = ['Charcoal Fabric', 'Cognac Leather', 'Olive Velvet'];

  const decrementQuantity = () => setQuantity((prev) => Math.max(1, prev - 1));
  const incrementQuantity = () => setQuantity((prev) => prev + 1);

  const handleAddToCart = () => {
    // Add to cart logic - will connect to API
    console.log('Add to cart:', {
      productId: product.id,
      quantity,
      selectedFinish,
      selectedUpholstery,
    });
  };

  return (
    <div className="sticky top-28 flex flex-col gap-8">
      {/* Header Info */}
      <AnimatedSection animation="fade-up">
        <div>
          <div className="flex items-center gap-2 mb-3">
            {product.badges?.map((badge) => (
              <span
                key={badge}
                className="bg-primary/20 text-primary px-2.5 py-0.5 rounded text-xs font-bold uppercase tracking-wider border border-primary/20"
              >
                {badge}
              </span>
            ))}
            <span className="text-text-muted text-sm">
              {product.inStock ? 'In Stock' : 'Out of Stock'}
            </span>
          </div>
          
          <h1 className="text-3xl lg:text-4xl font-bold text-white mb-2 leading-tight">
            {product.name}
          </h1>
          
          <div className="flex items-center gap-4 mb-6">
            <h2 className="text-2xl font-bold text-primary">${product.price.toFixed(2)}</h2>
            <div className="w-px h-5 bg-white/10" />
            <div className="flex items-center gap-1">
              <div className="flex text-primary text-sm">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={`material-symbols-outlined text-lg ${
                      product.rating && i < Math.floor(product.rating) ? 'fill-current' : ''
                    }`}
                  >
                    {product.rating && i < Math.floor(product.rating)
                      ? 'star'
                      : product.rating && product.rating % 1 !== 0 && i === Math.floor(product.rating)
                      ? 'star_half'
                      : 'star'}
                  </span>
                ))}
              </div>
              <span className="text-sm text-white/60 ml-1 underline decoration-white/30 underline-offset-4 cursor-pointer hover:text-white transition-colors">
                {product.reviewCount} Reviews
              </span>
            </div>
          </div>
          
          <p className="text-white/70 leading-relaxed font-light">{product.description}</p>
        </div>
      </AnimatedSection>

      <div className="h-px bg-gradient-to-r from-white/10 to-transparent" />

      {/* Variants */}
      <AnimatedSection animation="fade-up" delay={100}>
        <div className="flex flex-col gap-6">
          {/* Wood Finish */}
          <div className="space-y-3">
            <span className="text-sm font-medium text-white block">Finish</span>
            <div className="flex gap-3">
              {finishes.map((finish) => (
                <label key={finish.id} className="cursor-pointer group">
                  <input
                    type="radio"
                    name="finish"
                    checked={selectedFinish === finish.name}
                    onChange={() => setSelectedFinish(finish.name)}
                    className="peer sr-only"
                  />
                  <div
                    className="size-10 rounded-full ring-2 ring-offset-2 ring-offset-[#221810] ring-transparent peer-checked:ring-primary transition-all shadow-lg"
                    style={{ backgroundColor: finish.colorCode }}
                  />
                  <span className="block text-xs text-center mt-1 text-white/40 group-hover:text-white/80 peer-checked:text-primary transition-colors">
                    {finish.name}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Upholstery */}
          <div className="space-y-3">
            <span className="text-sm font-medium text-white block">Upholstery</span>
            <div className="flex flex-wrap gap-2">
              {upholsteryOptions.map((option) => (
                <button
                  key={option}
                  onClick={() => setSelectedUpholstery(option)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedUpholstery === option
                      ? 'bg-surface-dark border border-primary text-primary shadow-[0_0_15px_rgba(236,109,19,0.2)]'
                      : 'bg-wood-dark border border-white/10 hover:border-white/30 text-white/70 hover:text-white'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Actions */}
      <AnimatedSection animation="fade-up" delay={200}>
        <div className="glass-panel p-4 rounded-xl flex flex-col sm:flex-row gap-4 items-center mt-2">
          {/* Quantity */}
          <div className="flex items-center bg-background-dark rounded-lg border border-white/10 p-1">
            <button
              onClick={decrementQuantity}
              className="size-10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/5 rounded-md transition-colors"
            >
              <span className="material-symbols-outlined text-lg">remove</span>
            </button>
            <input
              type="text"
              value={quantity}
              readOnly
              className="w-10 text-center bg-transparent border-none text-white font-medium focus:ring-0 p-0"
            />
            <button
              onClick={incrementQuantity}
              className="size-10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/5 rounded-md transition-colors"
            >
              <span className="material-symbols-outlined text-lg">add</span>
            </button>
          </div>

          {/* Add to Cart */}
          <button
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className="flex-1 w-full bg-primary hover:bg-primary-light disabled:bg-primary/50 text-white font-bold py-3.5 px-6 rounded-lg transition-all shadow-[0_0_20px_rgba(236,109,19,0.4)] flex items-center justify-center gap-2 group"
          >
            <span className="material-symbols-outlined group-hover:-translate-y-0.5 transition-transform">
              shopping_bag
            </span>
            Add to Cart
          </button>
        </div>
      </AnimatedSection>

      {/* Features/Accordion */}
      <AnimatedSection animation="fade-up" delay={300}>
        <div className="divide-y divide-white/10">
          <details className="group py-4" open>
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none text-white hover:text-primary transition-colors">
              <span>Description</span>
              <span className="transition group-open:rotate-180">
                <span className="material-symbols-outlined">expand_more</span>
              </span>
            </summary>
            <div className="text-white/60 text-sm mt-3 leading-relaxed">
              {product.features?.map((feature, index) => (
                <p key={index} className="mb-2">{feature}</p>
              )) || product.description}
            </div>
          </details>
          
          <details className="group py-4">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none text-white hover:text-primary transition-colors">
              <span>Dimensions</span>
              <span className="transition group-open:rotate-180">
                <span className="material-symbols-outlined">expand_more</span>
              </span>
            </summary>
            <div className="text-white/60 text-sm mt-3 leading-relaxed">
              {product.dimensions ? (
                <ul className="list-disc pl-4 space-y-1">
                  {product.dimensions.height && <li>Height: {product.dimensions.height}</li>}
                  {product.dimensions.width && <li>Width: {product.dimensions.width}</li>}
                  {product.dimensions.depth && <li>Depth: {product.dimensions.depth}</li>}
                  {product.dimensions.seatHeight && <li>Seat Height: {product.dimensions.seatHeight}</li>}
                </ul>
              ) : (
                <p>Dimensions not available</p>
              )}
            </div>
          </details>
          
          <details className="group py-4">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none text-white hover:text-primary transition-colors">
              <span>Shipping &amp; Returns</span>
              <span className="transition group-open:rotate-180">
                <span className="material-symbols-outlined">expand_more</span>
              </span>
            </summary>
            <div className="text-white/60 text-sm mt-3 leading-relaxed">
              Free shipping on all orders over $500. Returns accepted within 30 days of delivery.
            </div>
          </details>
        </div>
      </AnimatedSection>
    </div>
  );
}
