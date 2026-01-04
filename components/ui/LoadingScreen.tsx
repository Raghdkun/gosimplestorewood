'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Logo from './Logo';

interface LoadingScreenProps {
  children: React.ReactNode;
}

export default function LoadingScreen({ children }: LoadingScreenProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    // Reset loading on route change
    setIsLoading(true);
    setLoadingProgress(0);

    let progressInterval: NodeJS.Timeout;
    
    const checkAllAssetsLoaded = async () => {
      // Simulate minimum loading time for smooth UX
      const minLoadTime = 800;
      const startTime = Date.now();

      // Check if fonts are loaded
      const fontsLoaded = await checkFontsLoaded();
      setLoadingProgress(33);

      // Check if document is ready
      await checkDocumentReady();
      setLoadingProgress(66);

      // Check if images are loaded
      await checkImagesLoaded();
      setLoadingProgress(90);

      // Ensure minimum load time has passed
      const elapsedTime = Date.now() - startTime;
      if (elapsedTime < minLoadTime) {
        await new Promise(resolve => setTimeout(resolve, minLoadTime - elapsedTime));
      }

      setLoadingProgress(100);

      // Small delay before hiding loading screen
      setTimeout(() => {
        setIsLoading(false);
      }, 300);
    };

    // Smooth progress animation
    progressInterval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) return 100;
        return Math.min(prev + Math.random() * 15, 95);
      });
    }, 200);

    checkAllAssetsLoaded().finally(() => {
      clearInterval(progressInterval);
    });

    return () => {
      clearInterval(progressInterval);
    };
  }, [pathname]);

  // Check if fonts are loaded using Font Loading API
  const checkFontsLoaded = (): Promise<boolean> => {
    return new Promise((resolve) => {
      if ('fonts' in document) {
        Promise.all([
          document.fonts.load('400 16px Inter'),
          document.fonts.load('500 16px Inter'),
          document.fonts.load('600 16px Manrope'),
          document.fonts.load('400 16px Material Symbols Outlined'),
        ]).then(() => {
          resolve(true);
        }).catch(() => {
          // Fallback if font loading fails
          setTimeout(() => resolve(true), 1000);
        });
      } else {
        // Fallback for browsers without Font Loading API
        setTimeout(() => resolve(true), 500);
      }
    });
  };

  // Check if document is ready
  const checkDocumentReady = (): Promise<void> => {
    return new Promise((resolve) => {
      if (document.readyState === 'complete') {
        resolve();
      } else {
        window.addEventListener('load', () => resolve(), { once: true });
      }
    });
  };

  // Check if images are loaded
  const checkImagesLoaded = (): Promise<void> => {
    return new Promise((resolve) => {
      const images = Array.from(document.images);
      
      if (images.length === 0) {
        resolve();
        return;
      }

      const imagePromises = images.map(img => {
        if (img.complete && img.naturalHeight !== 0) {
          return Promise.resolve();
        }
        
        return new Promise<void>((resolveImg) => {
          img.addEventListener('load', () => resolveImg(), { once: true });
          img.addEventListener('error', () => resolveImg(), { once: true });
          
          // Timeout fallback
          setTimeout(() => resolveImg(), 3000);
        });
      });

      Promise.all(imagePromises).then(() => resolve());
    });
  };

  if (!isLoading) {
    return <>{children}</>;
  }

  return (
    <>
      {/* Loading Overlay */}
      <div 
        className={`
          fixed inset-0 z-50 
          bg-background-dark
          flex items-center justify-center
          transition-opacity duration-500
          ${!isLoading ? 'opacity-0 pointer-events-none' : 'opacity-100'}
        `}
      >
        <div className="relative w-full max-w-sm px-6 flex flex-col items-center">
          {/* Logo - Soft, No Animation */}
          <div className="text-center mb-16">
            <Logo size="lg" showText={true} animated={false} />
          </div>

          {/* Minimal Progress Bar - Soft Style */}
          <div className="w-full">
            <div className="relative h-1 bg-white/10 rounded-full overflow-hidden">
              <div 
                className="absolute inset-y-0 left-0 bg-primary/60 rounded-full transition-all duration-300"
                style={{ 
                  width: `${loadingProgress}%`,
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Preload content (hidden) */}
      <div className="opacity-0 pointer-events-none absolute">
        {children}
      </div>

      <style jsx>{`
        /* Minimal styles for soft loading screen */
      `}</style>
    </>
  );
}
