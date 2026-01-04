// Product Types
export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  category: string;
  price: number;
  originalPrice?: number;
  rating?: number;
  reviewCount?: number;
  image: string;
  images?: string[];
  badges?: string[];
  inStock: boolean;
  variants?: ProductVariant[];
  features?: string[];
  dimensions?: ProductDimensions;
}

export interface ProductVariant {
  id: string;
  name: string;
  type: 'color' | 'size' | 'material' | 'finish';
  value: string;
  colorCode?: string;
  priceModifier?: number;
  inStock: boolean;
}

export interface ProductDimensions {
  height?: string;
  width?: string;
  depth?: string;
  weight?: string;
  seatHeight?: string;
}

// Category Types
export interface Category {
  id: string;
  slug: string;
  name: string;
  description?: string;
  image: string;
  productCount: number;
  featured?: boolean;
}

// Review Types
export interface Review {
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

export interface ReviewSummary {
  averageRating: number;
  totalReviews: number;
  ratingDistribution: {
    5: number;
    4: number;
    3: number;
    2: number;
    1: number;
  };
}

// Cart Types
export interface CartItem {
  id: string;
  productId: string;
  product: Product;
  quantity: number;
  selectedVariants?: Record<string, string>;
  price: number;
}

export interface Cart {
  items: CartItem[];
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
}

// User Types
export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  avatar?: string;
  addresses?: Address[];
}

export interface Address {
  id: string;
  type: 'shipping' | 'billing';
  firstName: string;
  lastName: string;
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  phone?: string;
  isDefault?: boolean;
}

// Order Types
export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  status: OrderStatus;
  shippingAddress: Address;
  billingAddress: Address;
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
  createdAt: string;
  updatedAt: string;
  trackingNumber?: string;
}

export type OrderStatus = 
  | 'pending'
  | 'confirmed'
  | 'processing'
  | 'shipped'
  | 'delivered'
  | 'cancelled';

// Filter Types
export interface ProductFilters {
  category?: string[];
  priceMin?: number;
  priceMax?: number;
  rating?: number;
  inStock?: boolean;
  sortBy?: SortOption;
  search?: string;
}

export type SortOption = 
  | 'featured'
  | 'newest'
  | 'price-low'
  | 'price-high'
  | 'rating';

// Testimonial Types
export interface Testimonial {
  id: string;
  userName: string;
  userTitle?: string;
  userAvatar?: string;
  rating: number;
  content: string;
}

// Newsletter Types
export interface NewsletterSubscription {
  email: string;
  subscribedAt: string;
}

// API Response Types
export interface ApiResponse<T> {
  data: T;
  message?: string;
  success: boolean;
}

export interface PaginatedResponse<T> {
  data: T[];
  meta: {
    currentPage: number;
    lastPage: number;
    perPage: number;
    total: number;
  };
}
