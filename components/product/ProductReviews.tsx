'use client';

import AnimatedSection from '@/components/ui/AnimatedSection';
import { Review } from '@/types';

interface ProductReviewsProps {
  productId: string;
  rating: number;
  reviewCount: number;
  reviews?: Review[];
}

const mockReviews: Review[] = [
  {
    id: 'r1',
    productId: 'artisan-walnut-chair',
    userId: 'u1',
    userName: 'Sarah M.',
    rating: 5,
    title: 'Absolutely Stunning',
    content: 'This chair exceeded all my expectations. The craftsmanship is impeccable, and it has become the centerpiece of my living room. Worth every penny!',
    createdAt: '2024-01-15',
    verified: true,
    helpful: 24,
  },
  {
    id: 'r2',
    productId: 'artisan-walnut-chair',
    userId: 'u2',
    userName: 'Michael T.',
    rating: 4,
    title: 'Great Quality',
    content: 'Beautiful chair with excellent build quality. Only minor critique is that the assembly instructions could be clearer.',
    createdAt: '2024-01-10',
    verified: true,
    helpful: 12,
  },
  {
    id: 'r3',
    productId: 'artisan-walnut-chair',
    userId: 'u3',
    userName: 'Emily R.',
    rating: 5,
    title: 'Perfect Addition',
    content: 'The dark walnut finish is even more beautiful in person. Very comfortable for long reading sessions.',
    createdAt: '2024-01-05',
    verified: true,
    helpful: 18,
  },
];

const ratingDistribution = [
  { stars: 5, percentage: 75 },
  { stars: 4, percentage: 15 },
  { stars: 3, percentage: 7 },
  { stars: 2, percentage: 2 },
  { stars: 1, percentage: 1 },
];

export default function ProductReviews({ productId, rating, reviewCount, reviews = mockReviews }: ProductReviewsProps) {
  const renderStars = (count: number, filled: boolean = true) => {
    return [...Array(5)].map((_, i) => (
      <span
        key={i}
        className={`material-symbols-outlined text-lg ${
          i < count
            ? filled
              ? 'text-primary fill-current'
              : 'text-primary'
            : 'text-white/20'
        }`}
      >
        star
      </span>
    ));
  };

  return (
    <section className="py-20 border-t border-white/10">
      <div className="container mx-auto px-4 lg:px-8">
        <AnimatedSection animation="fade-up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-primary uppercase tracking-wider text-sm font-semibold block mb-2">
                Customer Reviews
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-white">What People Say</h2>
            </div>
            <button className="inline-flex items-center gap-2 bg-primary hover:bg-primary-light text-white font-bold py-3 px-6 rounded-lg transition-all shadow-[0_0_20px_rgba(236,109,19,0.3)]">
              <span className="material-symbols-outlined">rate_review</span>
              Write a Review
            </button>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Rating Summary */}
          <AnimatedSection animation="fade-right">
            <div className="glass-panel rounded-2xl p-6 lg:col-span-1 h-fit">
              <div className="text-center mb-6 pb-6 border-b border-white/10">
                <div className="text-5xl font-bold text-primary mb-1">{rating.toFixed(1)}</div>
                <div className="flex justify-center gap-1 mb-2">
                  {renderStars(Math.round(rating))}
                </div>
                <p className="text-white/60 text-sm">Based on {reviewCount} reviews</p>
              </div>

              <div className="space-y-3">
                {ratingDistribution.map((item) => (
                  <div key={item.stars} className="flex items-center gap-3">
                    <span className="text-sm text-white/70 w-12">{item.stars} star</span>
                    <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full transition-all duration-500"
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                    <span className="text-sm text-white/50 w-10 text-right">{item.percentage}%</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Reviews List */}
          <div className="lg:col-span-2 space-y-6">
            {reviews.map((review, index) => (
              <AnimatedSection key={review.id} animation="fade-up" delay={index * 100}>
                <div className="glass-panel rounded-2xl p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="size-12 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center text-white font-bold text-lg">
                        {review.userName.charAt(0)}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-white">{review.userName}</span>
                          {review.verified && (
                            <span className="inline-flex items-center gap-1 bg-green-500/20 text-green-400 px-2 py-0.5 rounded text-xs">
                              <span className="material-symbols-outlined text-sm">verified</span>
                              Verified
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                          <div className="flex">{renderStars(review.rating)}</div>
                          <span className="text-white/40 text-xs">
                            {new Date(review.createdAt).toLocaleDateString('en-US', {
                              month: 'short',
                              day: 'numeric',
                              year: 'numeric',
                            })}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {review.title && (
                    <h4 className="font-semibold text-white mb-2">{review.title}</h4>
                  )}
                  <p className="text-white/70 leading-relaxed text-sm mb-4">{review.content}</p>

                  <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                    <button className="flex items-center gap-1.5 text-white/50 hover:text-primary text-sm transition-colors">
                      <span className="material-symbols-outlined text-lg">thumb_up</span>
                      Helpful ({review.helpful})
                    </button>
                    <button className="flex items-center gap-1.5 text-white/50 hover:text-white text-sm transition-colors">
                      <span className="material-symbols-outlined text-lg">flag</span>
                      Report
                    </button>
                  </div>
                </div>
              </AnimatedSection>
            ))}

            {/* Load More */}
            <AnimatedSection animation="fade-up" delay={reviews.length * 100}>
              <button className="w-full py-4 border border-white/10 rounded-xl text-white/60 hover:text-white hover:border-white/30 transition-all flex items-center justify-center gap-2">
                Load More Reviews
                <span className="material-symbols-outlined">expand_more</span>
              </button>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
