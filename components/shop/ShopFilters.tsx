'use client';

import { useState } from 'react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { ProductFilters } from '@/types';

interface ShopFiltersProps {
  filters: ProductFilters;
  onFiltersChange: (filters: ProductFilters) => void;
}

const categories = [
  { name: 'All Products', count: 124, checked: true },
  { name: 'Furniture', count: 45, checked: false },
  { name: 'Lighting', count: 32, checked: false },
  { name: 'Decor', count: 28, checked: false },
];

const finishes = [
  { name: 'Charcoal', color: '#1a1a1a' },
  { name: 'Walnut', color: '#5d4037' },
  { name: 'Natural', color: '#d7ccc8' },
  { name: 'Burnt Orange', color: '#ec6d13', selected: true },
];

export default function ShopFilters({ filters, onFiltersChange }: ShopFiltersProps) {
  const [priceRange, setPriceRange] = useState({ min: 120, max: 2400 });
  const [selectedFinish, setSelectedFinish] = useState('Burnt Orange');

  return (
    <aside className="w-full lg:w-64 flex-shrink-0 flex flex-col gap-6 lg:sticky lg:top-24 z-30">
      {/* Filter Group: Categories */}
      <AnimatedSection animation="fade-left">
        <div className="glass-panel rounded-xl p-5 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h3 className="text-white font-bold text-base">Categories</h3>
            <span className="material-symbols-outlined text-text-muted text-[20px]">tune</span>
          </div>
          <div className="flex flex-col gap-2">
            {categories.map((category) => (
              <label key={category.name} className="flex items-center gap-3 cursor-pointer group">
                <div className="relative flex items-center justify-center size-5 rounded border border-surface-dark bg-background-dark group-hover:border-primary transition-colors">
                  <input
                    type="checkbox"
                    defaultChecked={category.checked}
                    className="peer appearance-none absolute inset-0 w-full h-full cursor-pointer"
                  />
                  <span className="material-symbols-outlined text-primary text-[16px] opacity-0 peer-checked:opacity-100">
                    check
                  </span>
                </div>
                <span className={`text-sm ${category.checked ? 'text-white/90' : 'text-text-muted'} group-hover:text-primary transition-colors`}>
                  {category.name}
                </span>
                <span className="ml-auto text-xs text-text-muted">{category.count}</span>
              </label>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Filter Group: Price */}
      <AnimatedSection animation="fade-left" delay={100}>
        <div className="glass-panel rounded-xl p-5 flex flex-col gap-4">
          <h3 className="text-white font-bold text-base">Price Range</h3>
          <div className="flex flex-col gap-6 pt-2">
            <div className="relative h-1 w-full rounded-sm bg-surface-dark">
              <div 
                className="absolute h-full rounded-sm bg-primary"
                style={{ 
                  left: `${(priceRange.min / 3000) * 100}%`, 
                  right: `${100 - (priceRange.max / 3000) * 100}%` 
                }}
              />
              {/* Thumbs */}
              <div 
                className="absolute top-1/2 size-4 -translate-y-1/2 -translate-x-1/2 rounded-full border-2 border-primary bg-background-dark shadow cursor-pointer hover:scale-110 transition-transform"
                style={{ left: `${(priceRange.min / 3000) * 100}%` }}
              />
              <div 
                className="absolute top-1/2 size-4 -translate-y-1/2 translate-x-1/2 rounded-full border-2 border-primary bg-background-dark shadow cursor-pointer hover:scale-110 transition-transform"
                style={{ right: `${100 - (priceRange.max / 3000) * 100}%` }}
              />
            </div>
            <div className="flex items-center justify-between text-sm text-text-muted font-medium">
              <span>${priceRange.min}</span>
              <span>${priceRange.max.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Filter Group: Finish Colors */}
      <AnimatedSection animation="fade-left" delay={200}>
        <div className="glass-panel rounded-xl p-5 flex flex-col gap-4">
          <h3 className="text-white font-bold text-base">Finish</h3>
          <div className="flex flex-wrap gap-3">
            {finishes.map((finish) => (
              <button
                key={finish.name}
                onClick={() => setSelectedFinish(finish.name)}
                className={`size-8 rounded-full border border-white/20 hover:scale-110 transition-transform ring-2 ${
                  selectedFinish === finish.name 
                    ? 'ring-primary ring-offset-2 ring-offset-background-dark' 
                    : 'ring-transparent hover:ring-primary'
                }`}
                style={{ backgroundColor: finish.color }}
                title={finish.name}
              />
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Filter Group: Availability */}
      <AnimatedSection animation="fade-left" delay={300}>
        <div className="glass-panel rounded-xl p-5 flex flex-col gap-4">
          <h3 className="text-white font-bold text-base">Availability</h3>
          <div className="flex flex-col gap-2">
            <label className="flex items-center gap-3 cursor-pointer group">
              <div className="relative flex items-center justify-center size-5 rounded border border-surface-dark bg-background-dark group-hover:border-primary transition-colors">
                <input
                  type="checkbox"
                  defaultChecked
                  className="peer appearance-none absolute inset-0 w-full h-full cursor-pointer"
                />
                <span className="material-symbols-outlined text-primary text-[16px] opacity-0 peer-checked:opacity-100">
                  check
                </span>
              </div>
              <span className="text-sm text-white/90 group-hover:text-primary transition-colors">
                In Stock
              </span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer group">
              <div className="relative flex items-center justify-center size-5 rounded border border-surface-dark bg-background-dark group-hover:border-primary transition-colors">
                <input
                  type="checkbox"
                  className="peer appearance-none absolute inset-0 w-full h-full cursor-pointer"
                />
                <span className="material-symbols-outlined text-primary text-[16px] opacity-0 peer-checked:opacity-100">
                  check
                </span>
              </div>
              <span className="text-sm text-text-muted group-hover:text-white transition-colors">
                Pre-Order
              </span>
            </label>
          </div>
        </div>
      </AnimatedSection>
    </aside>
  );
}
