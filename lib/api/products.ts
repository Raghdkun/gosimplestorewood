import { api } from './client';
import { 
  Product, 
  Category, 
  ApiResponse, 
  PaginatedResponse,
  ProductFilters 
} from '@/types';

// Product API endpoints
export const productApi = {
  // Get all products with optional filters
  getProducts: async (filters?: ProductFilters): Promise<PaginatedResponse<Product>> => {
    const params: Record<string, string> = {};
    
    if (filters?.category?.length) {
      params.category = filters.category.join(',');
    }
    if (filters?.priceMin !== undefined) {
      params.price_min = filters.priceMin.toString();
    }
    if (filters?.priceMax !== undefined) {
      params.price_max = filters.priceMax.toString();
    }
    if (filters?.rating !== undefined) {
      params.rating = filters.rating.toString();
    }
    if (filters?.inStock !== undefined) {
      params.in_stock = filters.inStock.toString();
    }
    if (filters?.sortBy) {
      params.sort = filters.sortBy;
    }
    if (filters?.search) {
      params.search = filters.search;
    }

    return api.get<PaginatedResponse<Product>>('/products', params);
  },

  // Get single product by slug
  getProduct: async (slug: string): Promise<ApiResponse<Product>> => {
    return api.get<ApiResponse<Product>>(`/products/${slug}`);
  },

  // Get featured products
  getFeaturedProducts: async (): Promise<ApiResponse<Product[]>> => {
    return api.get<ApiResponse<Product[]>>('/products/featured');
  },

  // Get related products
  getRelatedProducts: async (productId: string): Promise<ApiResponse<Product[]>> => {
    return api.get<ApiResponse<Product[]>>(`/products/${productId}/related`);
  },

  // Search products
  searchProducts: async (query: string): Promise<PaginatedResponse<Product>> => {
    return api.get<PaginatedResponse<Product>>('/products/search', { q: query });
  },
};

// Category API endpoints
export const categoryApi = {
  // Get all categories
  getCategories: async (): Promise<ApiResponse<Category[]>> => {
    return api.get<ApiResponse<Category[]>>('/categories');
  },

  // Get single category
  getCategory: async (slug: string): Promise<ApiResponse<Category>> => {
    return api.get<ApiResponse<Category>>(`/categories/${slug}`);
  },

  // Get products by category
  getCategoryProducts: async (
    slug: string, 
    filters?: ProductFilters
  ): Promise<PaginatedResponse<Product>> => {
    const params: Record<string, string> = {};
    
    if (filters?.sortBy) {
      params.sort = filters.sortBy;
    }
    if (filters?.priceMin !== undefined) {
      params.price_min = filters.priceMin.toString();
    }
    if (filters?.priceMax !== undefined) {
      params.price_max = filters.priceMax.toString();
    }

    return api.get<PaginatedResponse<Product>>(`/categories/${slug}/products`, params);
  },
};
