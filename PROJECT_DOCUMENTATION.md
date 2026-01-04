# GoSimpleNext - E-Commerce Store Frontend Documentation

## Project Overview
This is a modern Next.js 16 e-commerce frontend application built with Tailwind CSS 4, designed for a furniture/home decor store called "GoSimple Store". The project converts three HTML templates (Homepage, Shop, Product Details) into a production-ready Next.js application with scroll animations, glassmorphism design, and Laravel Sanctum API integration readiness.

**Project Name:** gosimplenext  
**Framework:** Next.js 16.1.1 (App Router)  
**React Version:** 19  
**Styling:** Tailwind CSS 4 (with PostCSS)  
**Language:** TypeScript  
**Package Manager:** pnpm

---

## Design System & Theme

### Color Palette
The application uses a warm, dark theme with orange primary accents:

- **Primary Colors:**
  - `primary`: #ec6d13 (Burnt Orange)
  - `primary-hover`: #d65f0e
  - `primary-light`: #ff7a1c

- **Background Colors:**
  - `background-dark`: #221811 (Main dark background)
  - `background-darker`: #1a120c
  - `background-darkest`: #150f0b
  - `wood-dark`: #2e231b
  - `surface-dark`: #483323

- **Text Colors:**
  - `text-muted`: #c9a992
  - White with various opacity levels (white/70, white/60, white/50, etc.)

- **Glass Effects:**
  - `glass-bg`: rgba(72, 51, 35, 0.4)
  - `glass-border`: rgba(255, 255, 255, 0.1)

### Typography
- **Primary Font:** Manrope (weights: 200-800) - Used for headings and display text
- **Body Font:** Inter (weights: 300-700) - Used for body text and UI elements
- **Icon Font:** Material Symbols Outlined

### CSS Utilities
Custom glassmorphism effects defined in `globals.css`:
- `.glass-panel` - Glassmorphic panel with backdrop blur
- `.glass-header` - Glassmorphic header styling
- Custom scrollbar styling for webkit browsers

### Animations
Scroll-triggered animations using Intersection Observer:
- `fade-up` - Fade in while sliding up
- `fade-down` - Fade in while sliding down
- `fade-left` - Fade in from left
- `fade-right` - Fade in from right
- `scale` - Fade in with scale effect
- `slide-up` - Slide up animation
- Stagger animations for sequential element reveals

---

## Project Structure

```
gosimplenext/
├── app/
│   ├── globals.css              # Global styles + Tailwind 4 theme configuration
│   ├── layout.tsx               # Root layout with metadata
│   ├── page.tsx                 # Homepage
│   ├── not-found.tsx            # Custom 404 error page
│   ├── about/
│   │   └── page.tsx             # About us page
│   ├── collections/
│   │   └── page.tsx             # Collections page
│   ├── shop/
│   │   └── page.tsx             # Shop listing page
│   ├── product/
│   │   └── [slug]/
│   │       └── page.tsx         # Dynamic product detail page
│   └── auth/                    # Authentication pages
│       ├── login/
│       │   └── page.tsx         # Login page
│       ├── register/
│       │   └── page.tsx         # Registration page
│       ├── forgot-password/
│       │   └── page.tsx         # Forgot password page
│       ├── reset-password/
│       │   └── page.tsx         # Reset password page
│       └── verify-email/
│           └── page.tsx         # Email verification page
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx           # Main navigation header
│   │   ├── Footer.tsx           # Site footer
│   │   ├── CartDropdown.tsx     # Cart dropdown with item preview
│   │   ├── ProfileDropdown.tsx  # Profile menu dropdown
│   │   └── MobileNav.tsx        # Mobile navigation menu
│   │
│   ├── home/                    # Homepage sections
│   │   ├── HeroSection.tsx
│   │   ├── FeaturesSection.tsx
│   │   ├── BestSellersSection.tsx
│   │   ├── CategoriesSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   └── NewsletterSection.tsx
│   │
│   ├── shop/                    # Shop page components
│   │   ├── ShopHero.tsx
│   │   ├── ShopFilters.tsx
│   │   └── ShopContent.tsx
│   │
│   ├── product/                 # Product detail components
│   │   ├── ProductCard.tsx      # Reusable product card (2 variants)
│   │   ├── ProductGallery.tsx   # Image gallery with thumbnails
│   │   ├── ProductInfo.tsx      # Product details, variants, add to cart
│   │   ├── ProductReviews.tsx   # Reviews section with rating distribution
│   │   └── RelatedProducts.tsx  # "Frequently Bought Together" section
│   │
│   ├── collections/             # Collections page components
│   │   ├── CollectionsHero.tsx
│   │   ├── CollectionsGrid.tsx
│   │   └── FeaturedCollection.tsx
│   │
│   ├── about/                   # About page components
│   │   ├── AboutHero.tsx
│   │   ├── AboutStory.tsx
│   │   ├── AboutValues.tsx
│   │   ├── AboutTeam.tsx
│   │   └── AboutCTA.tsx
│   │
│   ├── auth/                    # Authentication components
│   │   ├── AuthLayout.tsx       # Shared layout for auth pages
│   │   ├── AuthInput.tsx        # Styled input component
│   │   ├── AuthButton.tsx       # Styled button component
│   │   ├── SocialAuth.tsx       # Social login buttons (Google, GitHub)
│   │   ├── LoginForm.tsx        # Login form with validation
│   │   ├── RegisterForm.tsx     # Registration form with password strength
│   │   ├── ForgotPasswordForm.tsx # Password reset request form
│   │   ├── ResetPasswordForm.tsx  # New password form
│   │   ├── VerifyEmailForm.tsx  # Email verification status
│   │   └── index.ts             # Component exports
│   │
│   └── ui/                      # Shared UI components
│       ├── AnimatedSection.tsx  # Scroll animation wrapper
│       └── Breadcrumbs.tsx      # Navigation breadcrumbs
│
├── hooks/
│   └── useScrollAnimation.ts    # Intersection Observer hooks
│
├── lib/
│   ├── api/                     # API service layer (Laravel Sanctum ready)
│   │   ├── client.ts            # Base API client with CSRF handling
│   │   ├── auth.ts              # Authentication endpoints
│   │   ├── cart.ts              # Cart management endpoints
│   │   ├── products.ts          # Product endpoints
│   │   └── index.ts             # API exports
│   │
│   └── auth/                    # Authentication utilities
│       ├── api.ts               # Laravel Sanctum API service
│       ├── context.tsx          # AuthContext and AuthProvider
│       ├── hooks.ts             # Auth protection hooks
│       └── index.ts             # Auth exports
│
├── types/
│   ├── index.ts                 # TypeScript interfaces
│   └── auth.ts                  # Authentication type definitions
│
├── data/
│   └── mockData.ts              # Sample data for development
│
└── public/
    └── html/                    # Original HTML templates (reference)
        ├── homepage/
        ├── shop/
        └── ProductDetails/
```

---

## Key Features Implemented

### 1. **Responsive Navigation Header**
- **Location:** `components/layout/Header.tsx`
- **Features:**
  - Logo with link to homepage
  - Main navigation links (Home, Shop, About, Contact)
  - Active route highlighting using `usePathname`
  - Search bar with glassmorphic styling
  - Account and cart icons with item count badge
  - Sticky positioning with backdrop blur
  - Fully responsive design

### 2. **Homepage Sections**
All sections use scroll animations and maintain the original HTML design:

- **Hero Section** (`HeroSection.tsx`)
  - Full-width hero with background image
  - Gradient overlay
  - Call-to-action buttons
  - Animated on scroll

- **Features Section** (`FeaturesSection.tsx`)
  - 3-column grid layout
  - Icon + title + description format
  - Glassmorphic cards with hover effects

- **Best Sellers Section** (`BestSellersSection.tsx`)
  - Featured product showcase
  - Uses `ProductCard` component with "featured" variant
  - 4-column responsive grid

- **Categories Section** (`CategoriesSection.tsx`)
  - Visual category cards with images
  - Gradient overlays on hover
  - Links to filtered shop pages

- **Testimonials Section** (`TestimonialsSection.tsx`)
  - Customer reviews carousel
  - Star ratings
  - Glassmorphic cards

- **Newsletter Section** (`NewsletterSection.tsx`)
  - Email subscription form
  - Gradient background
  - Input validation ready

### 3. **Shop Page**
- **Location:** `app/shop/page.tsx`
- **Components:**
  - `ShopHero` - Hero banner with breadcrumbs
  - `ShopFilters` - Sidebar with category, price, and finish filters
  - `ShopContent` - Product grid with sorting and pagination
  - Uses `ProductCard` component with "compact" variant
  - Responsive 2-4 column grid layout

### 4. **Product Detail Page**
- **Location:** `app/product/[slug]/page.tsx`
- **Dynamic Routing:** Uses Next.js 15+ `params` as Promise
- **SEO:** Dynamic metadata generation with `generateMetadata`
- **Components:**
  - `Breadcrumbs` - Navigation path
  - `ProductGallery` - Main image with thumbnail carousel
  - `ProductInfo` - Product details with:
    - Price and rating display
    - Variant selection (wood finish color swatches)
    - Upholstery options (button toggles)
    - Quantity selector
    - Add to Cart button with glassmorphic styling
    - Accordion sections (Description, Dimensions, Shipping)
  - `ProductReviews` - Review listing with:
    - Average rating and distribution chart
    - Individual review cards
    - Verified purchase badges
    - Helpful/Report actions
  - `RelatedProducts` - "Frequently Bought Together" section
    - Compact product cards
    - Bundle offer CTA

### 5. **Collections Page**
- **Location:** `app/collections/page.tsx`
- **Components:**
  - `CollectionsHero` - Hero section with title and description
  - `FeaturedCollection` - Highlighted collection with product grid
  - `CollectionsGrid` - All collections displayed in responsive cards
- **Features:**
  - Category cards with hover effects
  - Product count badges
  - Links to filtered shop views

### 6. **About Page**
- **Location:** `app/about/page.tsx`
- **Components:**
  - `AboutHero` - Hero with company stats
  - `AboutStory` - Company history with image
  - `AboutValues` - Core values grid (4 columns)
  - `AboutTeam` - Team member cards
  - `AboutCTA` - Call to action section
- **Features:**
  - Responsive layouts for all screen sizes
  - Scroll animations throughout
  - Gradient backgrounds and hover effects

### 7. **404 Error Page**
- **Location:** `app/not-found.tsx`
- **Features:**
  - Custom styled error page matching site theme
  - Navigation links back to main pages
  - Material Symbol icons
  - Responsive design

### 8. **Navigation Components**
- **Header Dropdowns:**
  - `CartDropdown` - Mini cart preview with items, subtotal, and actions
  - `ProfileDropdown` - User menu with profile, orders, wishlist, settings
  - Both feature click-outside-to-close and smooth animations
- **Mobile Navigation:**
  - `MobileNav` - Full mobile menu with search, nav links, and quick actions
  - Backdrop blur overlay
  - Closes on route change

### 9. **Scroll Animations**
- **Hook:** `hooks/useScrollAnimation.ts`
- **Component:** `components/ui/AnimatedSection.tsx`
- **Implementation:**
  - Uses Intersection Observer API
  - Configurable threshold and root margin
  - Supports multiple animation types
  - Stagger delays for sequential reveals
  - Automatically adds/removes animation classes

### 10. **Product Card Component**
- **Location:** `components/product/ProductCard.tsx`
- **Variants:**
  - **Featured:** Large card with detailed info (used on homepage)
  - **Compact:** Smaller card for grid layouts (used on shop page)
- **Features:**
  - Product image with hover zoom effect
  - Badge display (New, Sale, Best Seller)
  - Quick add to cart button on hover
  - Rating display
  - Responsive aspect ratios

### 11. **Authentication System (Laravel Sanctum Ready)**
Complete authentication flow prepared for Laravel 12 Sanctum integration.

#### Auth Pages
- **Login Page** (`app/auth/login/page.tsx`)
  - Email/password form with validation
  - Remember me checkbox
  - Social login buttons (Google, GitHub)
  - Link to forgot password
  
- **Register Page** (`app/auth/register/page.tsx`)
  - Full name, email, password fields
  - Password strength indicator (5 levels)
  - Password confirmation
  - Terms & conditions acceptance
  - Social registration options
  
- **Forgot Password** (`app/auth/forgot-password/page.tsx`)
  - Email input for reset request
  - Success state with instructions
  - Tips for finding email
  
- **Reset Password** (`app/auth/reset-password/page.tsx`)
  - Reads token from URL params
  - New password with strength indicator
  - Password confirmation
  - Success state with login redirect
  
- **Email Verification** (`app/auth/verify-email/page.tsx`)
  - Verification status display
  - Resend verification email
  - Helpful tips for finding email
  - Continue shopping option

#### Auth Components (`components/auth/`)
- `AuthLayout` - Split-screen layout with decorative left panel
- `AuthInput` - Styled input with icon and error state
- `AuthButton` - Primary/secondary variants with loading state
- `SocialAuth` - Google and GitHub login buttons
- Form components with client-side validation

#### Auth API Layer (`lib/auth/`)
- **api.ts** - Laravel Sanctum API service
  - `getCsrfCookie()` - CSRF token retrieval
  - `login(credentials)` - User login
  - `register(data)` - User registration
  - `logout()` - User logout
  - `getUser()` - Get authenticated user
  - `forgotPassword(email)` - Request password reset
  - `resetPassword(data)` - Set new password
  - `sendEmailVerification()` - Resend verification
  - `verifyEmail(url)` - Verify email address

- **context.tsx** - React Context for auth state
  - `AuthProvider` - Wraps app with auth context
  - `useAuth()` - Hook for accessing auth state and methods

- **hooks.ts** - Route protection hooks
  - `useRequireAuth()` - Redirect unauthenticated users
  - `useRedirectIfAuthenticated()` - Redirect logged-in users
  - `useRequireEmailVerification()` - Check email verified

#### Auth Types (`types/auth.ts`)
```typescript
interface User {
  id: number;
  name: string;
  email: string;
  email_verified_at: string | null;
  avatar?: string;
  created_at: string;
  updated_at: string;
}

interface LoginCredentials {
  email: string;
  password: string;
  remember?: boolean;
}

interface RegisterData {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}
```

---

## TypeScript Interfaces

### Core Types (`types/index.ts`)

```typescript
interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: string;
  categoryId: string;
  images: string[];
  badges?: string[];
  rating?: number;
  reviewCount?: number;
  inStock: boolean;
  features?: string[];
  dimensions?: {
    width?: string;
    height?: string;
    depth?: string;
    weight?: string;
    seatHeight?: string;
  };
  materials?: string[];
  variants?: ProductVariant[];
}

interface ProductVariant {
  id: string;
  name: string;
  type: 'color' | 'size' | 'material' | 'finish';
  value: string;
  colorCode?: string;
  priceModifier?: number;
  inStock?: boolean;
}

interface CartItem {
  id: string;
  productId: string;
  productName: string;
  productImage: string;
  price: number;
  quantity: number;
  selectedVariants?: {
    [key: string]: string;
  };
}

interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

interface Review {
  id: string;
  productId: string;
  userId: string;
  userName: string;
  userAvatar?: string;
  rating: number;
  title?: string;
  content: string;
  createdAt: string;
  verified?: boolean;
  helpful?: number;
}
```

---

## API Integration Setup

### Laravel Sanctum Ready Structure
All API service files are located in `lib/api/`:

**Base Client (`client.ts`):**
- CSRF token management
- Authentication token handling
- Cookie-based session support
- Generic request wrapper with error handling

**Endpoints:**
- `auth.ts` - Login, register, logout, user profile
- `cart.ts` - Get cart, add/update/remove items, checkout
- `products.ts` - List products, get product details, search, filter

**Usage Example:**
```typescript
import { api } from '@/lib/api';

// Login
await api.auth.login(email, password);

// Add to cart
await api.cart.addItem(productId, quantity, variants);

// Get products
const products = await api.products.getAll({ category, priceRange });
```

**Configuration:**
- API base URL: Set via `API_BASE_URL` environment variable
- CSRF endpoint: `/sanctum/csrf-cookie`
- Credentials: Always included for cookie-based auth

---

## Mock Data

**Location:** `data/mockData.ts`

Includes sample data for:
- **Featured Products** (4 items) - Used on homepage
- **Shop Products** (6 items) - Used on shop page
- **Artisan Walnut Chair** - Detailed product with full specifications
- **Categories** (4 items) - Category cards with images
- **Testimonials** (3 items) - Customer reviews
- **Related Products** (4 items) - For "Frequently Bought Together"
- **Product Reviews** (3 items) - Sample reviews with ratings

All products use actual image URLs from unsplash.com for realistic development.

---

## Styling Implementation

### Tailwind 4 Configuration
- **Location:** `app/globals.css`
- **Method:** Inline `@theme` block
- **Custom Properties:**
  - All color values defined as CSS custom properties
  - Keyframe animations for scroll effects
  - Responsive breakpoints (sm, md, lg, xl, 2xl)

### Glassmorphism Effects
```css
.glass-panel {
  background: var(--glass-bg);
  backdrop-filter: blur(10px);
  border: 1px solid var(--glass-border);
}

.glass-header {
  background: rgba(34, 24, 17, 0.7);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}
```

### Custom Scrollbar
Styled for webkit browsers with primary color accents.

---

## Image Assets

All images are hosted externally (unsplash.com) to avoid bundling large assets. Categories:
- **Furniture:** Chairs, tables, storage
- **Lighting:** Lamps, fixtures
- **Decor:** Vases, accessories
- **Electronics:** For diversity in product catalog

**Image Dimensions:**
- Product cards: ~800x1000px (4:5 aspect ratio)
- Featured products: ~600x800px (3:4 aspect ratio)
- Category cards: ~1200x800px (3:2 aspect ratio)
- Hero images: ~1920x1080px (16:9 aspect ratio)

---

## Animation System

### Intersection Observer Hook
**Location:** `hooks/useScrollAnimation.ts`

Two hooks provided:
1. `useScrollAnimation()` - Single element animation
2. `useStaggerAnimation(count)` - Multiple elements with sequential delays

**Parameters:**
- `threshold`: 0.1 (10% visible triggers animation)
- `rootMargin`: '-50px' (Offset before triggering)

### AnimatedSection Component
**Location:** `components/ui/AnimatedSection.tsx`

**Props:**
- `animation`: Animation type (fade-up, fade-down, etc.)
- `delay`: Delay in milliseconds
- `className`: Additional CSS classes
- `children`: Content to animate

**Usage:**
```tsx
<AnimatedSection animation="fade-up" delay={100}>
  <div>Content here</div>
</AnimatedSection>
```

---

## Development Setup

### Installation
```bash
cd gosimplenext
pnpm install
```

### Development Server
```bash
pnpm dev
```
Runs on `http://localhost:3000`

### Production Build
```bash
pnpm build
pnpm start
```

### Linting
```bash
pnpm lint
```

---

## Key Implementation Decisions

1. **Material Symbols Icons:** Added via CDN link in `layout.tsx` head tag for proper icon rendering

2. **Font Loading:** Google Fonts (Inter, Manrope) imported via CSS `@import` in `globals.css`

3. **Dynamic Routing:** Product pages use `[slug]` dynamic segments with async `params`

4. **TypeScript:** Strict mode enabled for type safety

5. **Client Components:** All interactive components use `'use client'` directive

6. **Mock Data:** All pages currently use mock data from `data/mockData.ts` - ready to be replaced with API calls

7. **Responsive Design:** Mobile-first approach with Tailwind breakpoints

8. **SEO:** Dynamic metadata generation for product pages, static metadata for other pages

9. **Performance:** Image optimization via Next.js Image component (ready for implementation)

10. **Accessibility:** Semantic HTML, ARIA labels, keyboard navigation support

---

## Pages Implemented

### ✅ Completed Pages

1. **Homepage** (`app/page.tsx`)
   - Hero section
   - Features showcase
   - Best sellers grid
   - Categories
   - Testimonials
   - Newsletter signup

2. **Shop** (`app/shop/page.tsx`)
   - Product grid
   - Filters sidebar
   - Sorting options
   - Pagination UI

3. **Product Details** (`app/product/[slug]/page.tsx`)
   - Image gallery
   - Product information
   - Variant selection
   - Add to cart
   - Reviews section
   - Related products

4. **Collections** (`app/collections/page.tsx`)
   - Collections hero with gradient glow
   - Featured collection showcase
   - Collections grid with hover effects

5. **About** (`app/about/page.tsx`)
   - Hero with company stats
   - Company story section
   - Core values grid
   - Team member cards
   - Call to action

6. **404 Page** (`app/not-found.tsx`)
   - Custom styled error page
   - Navigation links back to main pages

7. **Authentication Pages** (`app/auth/`)
   - Login page with social auth
   - Registration with password strength
   - Forgot password with success state
   - Reset password with token validation
   - Email verification with resend option

---

## Pending Implementation

### 🔄 To Be Built

1. **Contact Page** (`app/contact/page.tsx`)
   - Contact form
   - Location map
   - Contact information
   - FAQ section

2. **Cart Page** (`app/cart/page.tsx`)
   - Cart items list
   - Quantity updates
   - Coupon code input
   - Order summary
   - Checkout button

3. **Checkout Page** (`app/checkout/page.tsx`)
   - Shipping information form
   - Payment method selection
   - Order review
   - Place order

4. **User Account Pages**
   - Profile (`app/account/profile/page.tsx`)
   - Orders (`app/account/orders/page.tsx`)
   - Wishlist (`app/account/wishlist/page.tsx`)
   - Settings (`app/account/settings/page.tsx`)

5. **Additional Features**
   - Search results page
   - Category-specific pages
   - Loading states
   - Error boundaries

---

## Code Quality Notes

### Current State
- ✅ All TypeScript types properly defined
- ✅ No breaking compile errors
- ✅ Build succeeds
- ✅ Component structure follows best practices
- ⚠️ Minor Tailwind lint warnings (stylistic, not breaking)

### Tailwind Warnings (Non-Breaking)
Some arbitrary values can be replaced with Tailwind utilities:
- `max-w-[1440px]` → `max-w-360` (optional)
- `aspect-[4/5]` → `aspect-4/5` (optional)
- `bg-gradient-to-r` → `bg-linear-to-r` (Tailwind 4 syntax)

These are stylistic suggestions and don't affect functionality.

---

## Environment Variables

### Required for Production
Create `.env.local`:

```env
# API Configuration
NEXT_PUBLIC_API_BASE_URL=https://your-laravel-api.com

# Optional
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

---

## Laravel Backend Integration Guide

### Environment Setup
Create `.env.local` with your Laravel API URL:

```env
# Laravel Sanctum API URL
NEXT_PUBLIC_API_URL=http://localhost:8000

# Optional
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

### Laravel CORS Configuration
In your Laravel `config/cors.php`:

```php
return [
    'paths' => ['api/*', 'sanctum/csrf-cookie', 'login', 'logout', 'register', 'forgot-password', 'reset-password', 'email/*'],
    'allowed_origins' => ['http://localhost:3000'], // Your Next.js URL
    'allowed_headers' => ['*'],
    'supports_credentials' => true,
];
```

### Laravel Sanctum Configuration
In your Laravel `config/sanctum.php`:

```php
'stateful' => explode(',', env('SANCTUM_STATEFUL_DOMAINS', 'localhost,localhost:3000,127.0.0.1,127.0.0.1:8000')),
```

### Expected API Endpoints

**Authentication (Laravel Fortify/Breeze routes):**
- `GET /sanctum/csrf-cookie` - Get CSRF token (required before auth requests)
- `POST /login` - User login
- `POST /register` - User registration
- `POST /logout` - User logout
- `GET /api/user` - Get authenticated user
- `POST /forgot-password` - Request password reset email
- `POST /reset-password` - Reset password with token
- `POST /email/verification-notification` - Resend verification email
- `GET /email/verify/{id}/{hash}` - Verify email address

**Products:**
- `GET /api/products` - List products (with filters, pagination)
- `GET /api/products/{slug}` - Get product details
- `GET /api/categories` - List categories

**Cart:**
- `GET /api/cart` - Get user's cart
- `POST /api/cart` - Add item to cart
- `PUT /api/cart/{itemId}` - Update cart item
- `DELETE /api/cart/{itemId}` - Remove from cart

**Orders:**
- `POST /api/checkout` - Create order
- `GET /api/orders` - Get user's orders
- `GET /api/orders/{id}` - Get order details

**Reviews:**
- `GET /api/products/{id}/reviews` - Get product reviews
- `POST /api/products/{id}/reviews` - Create review

### CORS Configuration (Laravel)
```php
// config/cors.php
'supports_credentials' => true,
'paths' => ['api/*', 'sanctum/csrf-cookie'],
'allowed_origins' => [env('FRONTEND_URL', 'http://localhost:3000')],
```

### Sanctum Configuration (Laravel)
```php
// config/sanctum.php
'stateful' => explode(',', env('SANCTUM_STATEFUL_DOMAINS', 'localhost,localhost:3000')),
```

---

## Performance Optimizations (Ready to Implement)

1. **Image Optimization:**
   - Replace `<img>` with Next.js `<Image>` component
   - Configure image domains in `next.config.ts`
   - Add lazy loading

2. **Code Splitting:**
   - Dynamic imports for heavy components
   - Route-based code splitting (already handled by Next.js)

3. **Caching:**
   - Implement React Query or SWR for data fetching
   - Add revalidation strategies

4. **Bundle Analysis:**
   - Use `@next/bundle-analyzer`
   - Identify large dependencies

---

## Testing Recommendations

### Unit Tests (To Be Added)
- Component rendering tests
- Hook behavior tests
- Utility function tests

### Integration Tests (To Be Added)
- User flows (add to cart, checkout)
- API integration tests
- Form validation tests

### E2E Tests (To Be Added)
- Complete purchase flow
- Authentication flow
- Search and filter functionality

**Suggested Tools:**
- Jest + React Testing Library (unit/integration)
- Playwright or Cypress (E2E)

---

## Deployment Guide

### Vercel (Recommended)
```bash
# Install Vercel CLI
pnpm i -g vercel

# Deploy
vercel
```

### Docker
```dockerfile
# Dockerfile example
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
CMD ["npm", "start"]
```

### Environment Setup
- Set `NEXT_PUBLIC_API_BASE_URL` in deployment platform
- Configure domain and SSL
- Set up CDN for static assets

---

## Maintenance & Updates

### Regular Tasks
- Update dependencies monthly
- Review and fix Tailwind lint warnings
- Optimize images
- Monitor Core Web Vitals
- Update mock data with real API data

### Known Issues
None currently - all features working as expected.

---

## Credits & Resources

**Design Inspiration:**
- Original HTML templates provided by user
- Glassmorphism design trend
- Dark theme e-commerce best practices

**External Resources:**
- Images: Unsplash.com
- Fonts: Google Fonts
- Icons: Google Material Symbols

**Technologies:**
- Next.js 16 - https://nextjs.org
- Tailwind CSS 4 - https://tailwindcss.com
- TypeScript - https://www.typescriptlang.org
- React 19 - https://react.dev

---

## Contact & Support

For questions or issues with this documentation or codebase:
1. Review this documentation
2. Check component files for inline comments
3. Refer to Next.js and Tailwind documentation
4. Review the original HTML templates in `public/html/`

---

**Last Updated:** January 3, 2026
**Version:** 1.0.0
**Status:** Development (3 pages complete, ready for additional page development)
