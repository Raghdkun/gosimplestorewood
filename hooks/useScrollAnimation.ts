'use client';

import { useEffect, useRef, useState, RefObject } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export function useScrollAnimation<T extends HTMLElement>(
  options: UseScrollAnimationOptions = {}
): [RefObject<T | null>, boolean] {
  const { threshold = 0.1, rootMargin = '0px', triggerOnce = true } = options;
  const elementRef = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin, triggerOnce]);

  return [elementRef, isVisible];
}

// Hook for animating multiple elements with stagger effect
export function useStaggerAnimation<T extends HTMLElement>(
  itemCount: number,
  options: UseScrollAnimationOptions = {}
): [RefObject<T | null>, boolean[]] {
  const containerRef = useRef<T | null>(null);
  const [visibleItems, setVisibleItems] = useState<boolean[]>(
    new Array(itemCount).fill(false)
  );

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Stagger the animation of each item
          for (let i = 0; i < itemCount; i++) {
            setTimeout(() => {
              setVisibleItems((prev) => {
                const newState = [...prev];
                newState[i] = true;
                return newState;
              });
            }, i * 100); // 100ms delay between each item
          }
          if (options.triggerOnce !== false) {
            observer.unobserve(container);
          }
        }
      },
      { threshold: options.threshold ?? 0.1, rootMargin: options.rootMargin ?? '0px' }
    );

    observer.observe(container);

    return () => {
      observer.unobserve(container);
    };
  }, [itemCount, options.threshold, options.rootMargin, options.triggerOnce]);

  return [containerRef, visibleItems];
}
