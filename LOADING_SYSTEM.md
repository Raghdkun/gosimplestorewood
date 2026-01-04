# Loading System Documentation

## Overview
The GoSimple Store implements a comprehensive, modern loading system that ensures all assets (fonts, images, data) are loaded before displaying content to users. This provides a smooth, professional user experience across all devices.

## Features

### ✅ Global Loading Screen
- **Smart Asset Detection**: Automatically detects and waits for:
  - Google Fonts (Inter, Manrope, Material Symbols)
  - Images and media files
  - Document ready state
  - Initial page data
  
- **Progressive Loading**: Shows real-time progress (0-100%)
- **Smooth Animations**: Fade-in, slide-up, rotating rings, pulsing glows
- **Theme Consistent**: Matches dark wood/orange theme
- **Responsive**: Works perfectly on mobile, tablet, and desktop

### ✅ Page-Level Loading States
Each page has custom skeleton loaders:
- Homepage (`app/loading.tsx`)
- Shop page (`app/shop/loading.tsx`)
- Product details (`app/product/[slug]/loading.tsx`)

### ✅ Performance Optimizations
- Font preloading with `<link rel="preload">`
- Preconnect to Google Fonts CDN
- FOUC (Flash of Unstyled Content) prevention
- Minimum load time (800ms) for smooth UX
- Smart fallbacks if loading fails

## How It Works

### 1. Font Loading API
```typescript
// Checks if fonts are loaded
await document.fonts.load('400 16px Inter');
await document.fonts.load('500 16px Inter');
await document.fonts.load('600 16px Manrope');
```

### 2. Document Ready State
```typescript
if (document.readyState === 'complete') {
  // Continue
} else {
  window.addEventListener('load', callback);
}
```

### 3. Image Loading Detection
```typescript
const images = Array.from(document.images);
await Promise.all(images.map(img => 
  new Promise(resolve => {
    if (img.complete) resolve();
    img.addEventListener('load', resolve);
  })
));
```

### 4. Progress Tracking
```typescript
setLoadingProgress(33);  // Fonts loaded
setLoadingProgress(66);  // Content ready
setLoadingProgress(90);  // Images loaded
setLoadingProgress(100); // Complete
```

## Components

### LoadingScreen (`components/ui/LoadingScreen.tsx`)
Main loading wrapper that:
- Wraps all page content
- Shows animated logo and brand
- Displays progress bar with percentage
- Shows loading status messages
- Handles route changes automatically

### Page Loaders
- `app/loading.tsx` - Default page loader
- `app/shop/loading.tsx` - Shop-specific skeleton
- `app/product/[slug]/loading.tsx` - Product skeleton

## Loading States

### Initial Load
```
┌─────────────────────────────┐
│   Animated GoSimple Logo    │
│   "Crafted for Lifestyle"   │
│                             │
│   ████████████░░░░░ 66%    │
│   Loading content...        │
│                             │
│        • • •                │
└─────────────────────────────┘
```

### Shop Page Skeleton
```
┌──────────┬────────────────────┐
│          │  ▢  ▢  ▢          │
│ Filters  │  ▢  ▢  ▢          │
│  ▢  ▢    │  ▢  ▢  ▢          │
│  ▢  ▢    │                   │
└──────────┴────────────────────┘
```

### Product Page Skeleton
```
┌───────────┬───────────────────┐
│           │  Title ▢▢▢        │
│   Image   │  Price ▢▢         │
│     ▢     │  Description ▢▢▢  │
│           │  ▢▢▢▢▢▢▢▢▢        │
│  ▢ ▢ ▢ ▢  │  [Add to Cart]    │
└───────────┴───────────────────┘
```

## CSS Animations

### Custom Keyframes
```css
@keyframes fadeInScale {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}

@keyframes slideUpFade {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}
```

### Skeleton Loading
```css
.skeleton {
  background: linear-gradient(90deg,
    rgba(72, 51, 35, 0.3) 0%,
    rgba(72, 51, 35, 0.5) 50%,
    rgba(72, 51, 35, 0.3) 100%
  );
  animation: skeleton-loading 1.5s ease-in-out infinite;
}
```

## Best Practices Implemented

### ✅ Performance
- Minimum 800ms load time prevents jarring flashes
- Progressive progress bar (not just spinner)
- Preload critical fonts
- Lazy load non-critical assets

### ✅ User Experience
- Clear progress indication (percentage + message)
- Branded loading screen (not generic)
- Skeleton loaders match final content layout
- Smooth transitions (no FOUC)

### ✅ Accessibility
- Proper ARIA labels
- Respects prefers-reduced-motion
- Keyboard accessible
- Screen reader friendly

### ✅ Reliability
- Timeout fallbacks (3s for images)
- Handles loading failures gracefully
- Works without JavaScript (shows content)
- Cross-browser compatible

## Browser Support

| Feature | Chrome | Firefox | Safari | Edge |
|---------|--------|---------|--------|------|
| Font Loading API | ✅ | ✅ | ✅ | ✅ |
| Intersection Observer | ✅ | ✅ | ✅ | ✅ |
| CSS Animations | ✅ | ✅ | ✅ | ✅ |
| Preload/Preconnect | ✅ | ✅ | ✅ | ✅ |

## Customization

### Adjust Loading Time
```typescript
// In LoadingScreen.tsx
const minLoadTime = 800; // Change to your preference (ms)
```

### Modify Progress Messages
```typescript
{loadingProgress < 33 ? 'Loading fonts...' : 
 loadingProgress < 66 ? 'Loading content...' : 
 loadingProgress < 90 ? 'Loading images...' : 
 'Almost ready...'}
```

### Change Logo Animation Speed
```css
.animate-spin-slow {
  animation: spin-slow 3s linear infinite; /* Adjust 3s */
}
```

## Testing

### Test Loading States
```bash
# Development mode
npm run dev

# Production mode
npm run build
npm run start

# Slow 3G simulation in Chrome DevTools
# Network tab → Throttling → Slow 3G
```

### Verify Font Loading
```javascript
// In browser console
document.fonts.ready.then(() => {
  console.log('All fonts loaded!');
});
```

## Troubleshooting

### Loading Screen Stuck
- Check browser console for errors
- Verify font URLs are accessible
- Check if images are loading (Network tab)
- Ensure JavaScript is enabled

### FOUC Still Happening
- Verify font preload links are correct
- Check if .fonts-loaded class is added
- Ensure globals.css is imported first

### Progress Bar Not Animating
- Check CSS animations are enabled
- Verify no CSS conflicts
- Test in different browser
- Check for JavaScript errors

## Future Enhancements

- [ ] Add loading state for API calls
- [ ] Implement route transition animations
- [ ] Add loading state for form submissions
- [ ] Create loading state for search
- [ ] Add offline detection
- [ ] Implement service worker for offline support
