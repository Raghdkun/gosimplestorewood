'use client';

import AnimatedSection from '@/components/ui/AnimatedSection';
import { testimonials } from '@/data/mockData';

export default function TestimonialsSection() {
  return (
    <section className="py-20 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">What Our Community Says</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection 
              key={testimonial.id} 
              animation="fade-up" 
              delay={index * 150}
              className={index === 1 ? 'md:translate-y-4' : ''}
            >
              <div className="glass-panel p-8 rounded-2xl relative h-full">
                <span className="material-symbols-outlined absolute top-6 right-6 text-4xl text-white/10">
                  format_quote
                </span>
                
                {/* Rating Stars */}
                <div className="flex items-center gap-1 text-primary mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span 
                      key={i} 
                      className={`material-symbols-outlined text-sm ${
                        i < Math.floor(testimonial.rating) 
                          ? 'fill-current' 
                          : testimonial.rating % 1 !== 0 && i === Math.floor(testimonial.rating)
                          ? ''
                          : 'opacity-30'
                      }`}
                    >
                      {i < Math.floor(testimonial.rating) 
                        ? 'star' 
                        : testimonial.rating % 1 !== 0 && i === Math.floor(testimonial.rating)
                        ? 'star_half'
                        : 'star'}
                    </span>
                  ))}
                </div>
                
                <p className="text-white/80 italic mb-6 leading-relaxed">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
                
                <div className="flex items-center gap-3">
                  {testimonial.userAvatar ? (
                    <div 
                      className="size-10 rounded-full bg-cover bg-center"
                      style={{ backgroundImage: `url('${testimonial.userAvatar}')` }}
                    />
                  ) : (
                    <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">
                      {testimonial.userName.split(' ').map(n => n[0]).join('')}
                    </div>
                  )}
                  <div>
                    <p className="text-white font-bold text-sm">{testimonial.userName}</p>
                    {testimonial.userTitle && (
                      <p className="text-white/40 text-xs">{testimonial.userTitle}</p>
                    )}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
