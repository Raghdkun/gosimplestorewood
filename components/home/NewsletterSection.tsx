'use client';

import { useState } from 'react';
import AnimatedSection from '@/components/ui/AnimatedSection';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call - replace with actual API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setEmail('');
    
    // Reset submitted state after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section className="py-16 bg-gradient-to-r from-background-dark via-wood-dark to-background-dark border-y border-white/5 relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] opacity-10" />
      
      <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
        <AnimatedSection animation="fade-up">
          <div className="inline-block p-3 rounded-full bg-white/5 backdrop-blur mb-6 border border-white/10">
            <span className="material-symbols-outlined text-3xl text-primary block">mail</span>
          </div>
        </AnimatedSection>
        
        <AnimatedSection animation="fade-up" delay={100}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Join the Inner Circle</h2>
        </AnimatedSection>
        
        <AnimatedSection animation="fade-up" delay={200}>
          <p className="text-white/60 mb-8 max-w-lg mx-auto">
            Subscribe to our newsletter to receive early access to new collections and an exclusive{' '}
            <span className="text-white font-bold">10% discount</span> on your first order.
          </p>
        </AnimatedSection>
        
        <AnimatedSection animation="fade-up" delay={300}>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-white placeholder-white/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all backdrop-blur-sm"
              placeholder="Enter your email address"
              required
              disabled={isSubmitting}
            />
            <button
              type="submit"
              disabled={isSubmitting || isSubmitted}
              className="bg-primary hover:bg-primary-hover disabled:bg-primary/50 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg shadow-primary/20 whitespace-nowrap flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <span className="material-symbols-outlined animate-spin text-[20px]">progress_activity</span>
                  Subscribing...
                </>
              ) : isSubmitted ? (
                <>
                  <span className="material-symbols-outlined text-[20px]">check_circle</span>
                  Subscribed!
                </>
              ) : (
                'Subscribe'
              )}
            </button>
          </form>
        </AnimatedSection>
        
        <AnimatedSection animation="fade-up" delay={400}>
          <p className="text-white/30 text-xs mt-4">We respect your privacy. Unsubscribe at any time.</p>
        </AnimatedSection>
      </div>
    </section>
  );
}
