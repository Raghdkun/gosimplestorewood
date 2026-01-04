'use client';

import Link from 'next/link';
import { Product } from '@/types';

interface ProductCardProps {
  product: Product;
  variant?: 'default' | 'compact';
}

export default function ProductCard({ product, variant = 'default' }: ProductCardProps) {
  const {
    id,
    slug,
    name,
    category,
    price,
    originalPrice,
    rating,
    reviewCount,
    image,
    badges,
    inStock,
  } = product;

  if (variant === 'compact') {
    return (
      <Link href={`/product/${slug}`} className="group cursor-pointer">
        <div className="aspect-[3/4] rounded-xl overflow-hidden mb-4 relative">
          <div
            className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
            style={{ backgroundImage: `url('${image}')` }}
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
          
          {originalPrice && (
            <div className="absolute top-3 left-3 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
              Sale
            </div>
          )}
          
          <button
            onClick={(e) => {
              e.preventDefault();
              // Add to cart logic
            }}
            className="absolute bottom-4 right-4 size-10 rounded-full bg-white text-background-dark flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all shadow-lg hover:bg-primary hover:text-white"
          >
            <span className="material-symbols-outlined">add_shopping_cart</span>
          </button>
        </div>
        <h4 className="text-white font-medium group-hover:text-primary transition-colors">{name}</h4>
        <div className="flex gap-2 items-center mt-1">
          {originalPrice && (
            <p className="text-white/50 text-sm line-through">${originalPrice.toFixed(2)}</p>
          )}
          <p className={`text-sm ${originalPrice ? 'text-primary font-bold' : 'text-white/50'}`}>
            ${price.toFixed(2)}
          </p>
        </div>
      </Link>
    );
  }

  return (
    <div className="glass-panel group relative flex flex-col overflow-hidden rounded-xl transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-black/50">
      <Link href={`/product/${slug}`} className="relative aspect-[4/5] w-full overflow-hidden bg-[#1a1512]">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
          style={{ backgroundImage: `url('${image}')` }}
        />
        
        {/* Badges */}
        {badges && badges.length > 0 && (
          <div className="absolute top-3 left-3 flex gap-2">
            {badges.map((badge, index) => (
              <span
                key={index}
                className={`px-2 py-1 text-white text-[10px] font-bold uppercase tracking-wider rounded ${
                  badge === 'New' ? 'bg-primary' : badge === 'Sale' ? 'bg-red-500' : 'bg-surface-dark'
                }`}
              >
                {badge}
              </span>
            ))}
          </div>
        )}
        
        {/* Favorite Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            // Add to favorites logic
          }}
          className="absolute top-3 right-3 flex size-8 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md transition-colors hover:bg-primary opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 duration-300"
        >
          <span className="material-symbols-outlined text-[18px]">favorite</span>
        </button>
        
        {/* Quick Add Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black/90 to-transparent">
          <button
            onClick={(e) => {
              e.preventDefault();
              // Add to cart logic
            }}
            className="w-full flex items-center justify-center gap-2 bg-white text-background-dark font-bold py-3 rounded-lg hover:bg-primary hover:text-white transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">add_shopping_cart</span>
            Add to Cart
          </button>
        </div>
      </Link>
      
      <div className="flex flex-col p-4 gap-1">
        <p className="text-xs text-text-muted uppercase tracking-wide">{category}</p>
        <Link href={`/product/${slug}`}>
          <h3 className="text-lg font-bold text-white leading-tight group-hover:text-primary transition-colors">
            {name}
          </h3>
        </Link>
        <div className="flex items-center justify-between mt-1">
          <div className="flex flex-col">
            {originalPrice && (
              <span className="text-xs text-primary line-through opacity-70">
                ${originalPrice.toFixed(2)}
              </span>
            )}
            <span className="text-lg font-medium text-white">${price.toFixed(2)}</span>
          </div>
          <div className="flex items-center gap-0.5 text-primary">
            <span className="material-symbols-outlined text-[16px] fill-current">star</span>
            <span className="text-sm text-text-muted ml-1">
              {rating ? rating.toFixed(1) : '--'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
