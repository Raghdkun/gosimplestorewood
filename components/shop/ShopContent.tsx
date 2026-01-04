'use client';

import { useState } from 'react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import ProductCard from '@/components/product/ProductCard';
import ShopFilters from '@/components/shop/ShopFilters';
import { shopProducts } from '@/data/mockData';
import { ProductFilters } from '@/types';

export default function ShopContent() {
  const [filters, setFilters] = useState<ProductFilters>({});
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [activeFilters, setActiveFilters] = useState<string[]>(['Furniture']);

  const removeFilter = (filter: string) => {
    setActiveFilters(prev => prev.filter(f => f !== filter));
  };

  const clearAllFilters = () => {
    setActiveFilters([]);
    setFilters({});
  };

  return (
    <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-10 pb-10">
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Sidebar Filters */}
        <ShopFilters filters={filters} onFiltersChange={setFilters} />

        {/* Main Grid */}
        <div className="flex-1 flex flex-col gap-6">
          {/* Controls Bar */}
          <AnimatedSection animation="fade-up">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-white/10">
              <p className="text-text-muted text-sm">
                Showing <span className="text-white font-bold">1-{Math.min(9, shopProducts.length)}</span> of{' '}
                <span className="text-white font-bold">{shopProducts.length}</span> results
              </p>
              <div className="flex items-center gap-3">
                {/* Sort Dropdown */}
                <div className="relative group">
                  <button className="flex items-center gap-2 text-sm font-medium text-white bg-surface-dark/50 border border-white/10 px-4 py-2 rounded-lg hover:border-primary/50 transition-colors">
                    <span>Sort by: Featured</span>
                    <span className="material-symbols-outlined text-[20px]">expand_more</span>
                  </button>
                </div>
                
                {/* View Toggle */}
                <div className="flex bg-surface-dark/50 rounded-lg p-1 border border-white/10">
                  <button 
                    onClick={() => setViewMode('grid')}
                    className={`p-1.5 rounded ${viewMode === 'grid' ? 'bg-white/10 text-white' : 'text-text-muted hover:text-white'} transition-colors`}
                  >
                    <span className="material-symbols-outlined text-[20px]">grid_view</span>
                  </button>
                  <button 
                    onClick={() => setViewMode('list')}
                    className={`p-1.5 rounded ${viewMode === 'list' ? 'bg-white/10 text-white' : 'text-text-muted hover:text-white'} transition-colors`}
                  >
                    <span className="material-symbols-outlined text-[20px]">view_list</span>
                  </button>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Active Filters (Chips) */}
          {activeFilters.length > 0 && (
            <AnimatedSection animation="fade-up" delay={100}>
              <div className="flex flex-wrap gap-2">
                {activeFilters.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => removeFilter(filter)}
                    className="flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 pl-3 pr-2 py-1 text-xs font-medium text-primary hover:bg-primary/20 transition-colors"
                  >
                    {filter}
                    <span className="material-symbols-outlined text-[16px]">close</span>
                  </button>
                ))}
                <button
                  onClick={() => removeFilter('Price')}
                  className="flex items-center gap-2 rounded-full border border-white/10 bg-surface-dark pl-3 pr-2 py-1 text-xs font-medium text-text-muted hover:text-white hover:border-white/30 transition-colors"
                >
                  Price: $120-$2400
                  <span className="material-symbols-outlined text-[16px]">close</span>
                </button>
                <button 
                  onClick={clearAllFilters}
                  className="text-xs text-text-muted hover:text-primary underline ml-2"
                >
                  Clear all
                </button>
              </div>
            </AnimatedSection>
          )}

          {/* Product Grid */}
          <div className={`grid gap-6 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' 
              : 'grid-cols-1'
          }`}>
            {shopProducts.slice(0, 9).map((product, index) => (
              <AnimatedSection key={product.id} animation="fade-up" delay={index * 50}>
                <ProductCard product={product} variant={viewMode === 'list' ? 'compact' : 'default'} />
              </AnimatedSection>
            ))}
          </div>

          {/* Pagination */}
          <AnimatedSection animation="fade-up">
            <div className="flex items-center justify-center gap-2 mt-10 pb-10">
              <button className="size-10 flex items-center justify-center rounded-lg bg-surface-dark border border-white/10 text-text-muted hover:bg-primary hover:text-white hover:border-primary transition-all disabled:opacity-50">
                <span className="material-symbols-outlined text-[20px]">chevron_left</span>
              </button>
              <button className="size-10 flex items-center justify-center rounded-lg bg-primary text-white font-bold shadow-lg shadow-primary/20">
                1
              </button>
              <button className="size-10 flex items-center justify-center rounded-lg bg-surface-dark border border-white/10 text-white hover:bg-white/10 transition-all">
                2
              </button>
              <button className="size-10 flex items-center justify-center rounded-lg bg-surface-dark border border-white/10 text-white hover:bg-white/10 transition-all">
                3
              </button>
              <span className="text-text-muted">...</span>
              <button className="size-10 flex items-center justify-center rounded-lg bg-surface-dark border border-white/10 text-text-muted hover:bg-primary hover:text-white hover:border-primary transition-all">
                <span className="material-symbols-outlined text-[20px]">chevron_right</span>
              </button>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
