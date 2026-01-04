'use client';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  animated?: boolean;
}

const sizeMap = {
  sm: { icon: 'w-8 h-8', text: 'text-lg' },
  md: { icon: 'w-12 h-12', text: 'text-2xl' },
  lg: { icon: 'w-20 h-20', text: 'text-3xl' },
  xl: { icon: 'w-24 h-24', text: 'text-4xl' },
};

export default function Logo({ 
  size = 'md', 
  showText = true,
  animated = false 
}: LogoProps) {
  const sizeClass = sizeMap[size];
  
  return (
    <div className={`flex items-center gap-3 ${animated ? 'animate-fade-in' : ''}`}>
      {/* Logo Mark */}
      <div className={`relative ${sizeClass.icon} flex-shrink-0`}>
        {/* Animated outer ring */}
        {animated && (
          <div className="absolute inset-0 -m-4">
            <div 
              className="w-full h-full border-2 border-primary/20 rounded-full animate-spin-slow" 
              style={{ aspectRatio: '1 / 1', animationDuration: '3s' }}
            />
          </div>
        )}
        
        {/* Pulsing glow background */}
        {animated && (
          <div className="absolute inset-0 -m-2">
            <div className="w-full h-full bg-primary/10 rounded-full animate-pulse" />
          </div>
        )}

        {/* Main logo box */}
        <div className={`relative w-full h-full rounded-2xl bg-gradient-to-br from-primary to-primary-hover flex items-center justify-center shadow-lg shadow-primary/25`}>
          {/* SVG Logo Mark - Minimalist Furniture + Craft */}
          <svg
            viewBox="0 0 100 100"
            className="w-2/3 h-2/3"
            fill="none"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Simple minimalist furniture/wood mark */}
            {/* Left vertical line (wood plank) */}
            <line x1="20" y1="25" x2="20" y2="75" />
            
            {/* Right vertical line (wood plank) */}
            <line x1="80" y1="25" x2="80" y2="75" />
            
            {/* Top horizontal line (shelf/surface) */}
            <line x1="20" y1="40" x2="80" y2="40" />
            
            {/* Middle horizontal line (shelf/surface) */}
            <line x1="20" y1="60" x2="80" y2="60" />
            
            {/* Bottom horizontal line (base) */}
            <line x1="15" y1="80" x2="85" y2="80" />
            
            {/* Decorative corner accent - top left */}
            <circle cx="25" cy="30" r="3" fill="white" />
            
            {/* Decorative corner accent - top right */}
            <circle cx="75" cy="30" r="3" fill="white" />
          </svg>
        </div>
      </div>

      {/* Logo Text */}
      {showText && (
        <div className={animated ? 'animate-slide-up' : ''}>
          <div className={`font-bold text-white ${sizeClass.text} leading-tight`}>
            GoSimple
          </div>
          <div className={`text-text-muted ${size === 'xl' ? 'text-xs' : size === 'lg' ? 'text-xs' : 'text-[10px]'} font-medium tracking-wide`}>
            HANDCRAFTED
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 0.6s ease-out 0.1s;
          animation-fill-mode: both;
        }

        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
      `}</style>
    </div>
  );
}
