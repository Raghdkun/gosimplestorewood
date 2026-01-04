'use client';

import { ReactNode } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: 'fade-up' | 'fade-left' | 'fade-right' | 'scale';
  delay?: number;
}

export default function AnimatedSection({
  children,
  className = '',
  animation = 'fade-up',
  delay = 0,
}: AnimatedSectionProps) {
  const [ref, isVisible] = useScrollAnimation<HTMLDivElement>();

  const animationClasses = {
    'fade-up': 'animate-on-scroll',
    'fade-left': 'animate-on-scroll-left',
    'fade-right': 'animate-on-scroll-right',
    'scale': 'animate-on-scroll-scale',
  };

  return (
    <div
      ref={ref}
      className={`${animationClasses[animation]} ${isVisible ? 'animate-in' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
