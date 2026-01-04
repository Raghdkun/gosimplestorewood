'use client';

import { useState } from 'react';
import AnimatedSection from '@/components/ui/AnimatedSection';

interface ProductGalleryProps {
  images: string[];
}

export default function ProductGallery({ images }: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  const goToPrevious = () => {
    setSelectedImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setSelectedImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Main Image */}
      <AnimatedSection animation="fade-up">
        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden group bg-wood-dark border border-glass-border">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{ backgroundImage: `url('${images[selectedImage]}')` }}
          />
          
          {/* Gallery Controls Overlay */}
          <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              onClick={goToPrevious}
              className="size-10 rounded-full glass-panel flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-colors"
            >
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button
              onClick={goToNext}
              className="size-10 rounded-full glass-panel flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-colors"
            >
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
          
          {/* Favorite Button */}
          <div className="absolute top-4 right-4">
            <button className="size-10 rounded-full glass-panel flex items-center justify-center text-white hover:text-primary transition-colors">
              <span className="material-symbols-outlined">favorite</span>
            </button>
          </div>
        </div>
      </AnimatedSection>

      {/* Thumbnails */}
      <AnimatedSection animation="fade-up" delay={100}>
        <div className="grid grid-cols-4 gap-4">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`aspect-square rounded-xl overflow-hidden border-2 relative transition-all ${
                selectedImage === index
                  ? 'border-primary'
                  : 'border-transparent hover:border-white/20 opacity-70 hover:opacity-100'
              }`}
            >
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url('${image}')` }}
              />
              {/* Video indicator for last thumbnail */}
              {index === images.length - 1 && (
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-colors">
                  <span className="material-symbols-outlined text-white">play_circle</span>
                </div>
              )}
            </button>
          ))}
        </div>
      </AnimatedSection>
    </div>
  );
}
