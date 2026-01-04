import { api } from './client';
import { Cart, CartItem, ApiResponse } from '@/types';

// Cart API endpoints
export const cartApi = {
  // Get cart
  getCart: async (): Promise<ApiResponse<Cart>> => {
    return api.get<ApiResponse<Cart>>('/cart');
  },

  // Add item to cart
  addItem: async (data: {
    productId: string;
    quantity: number;
    variants?: Record<string, string>;
  }): Promise<ApiResponse<Cart>> => {
    return api.post<ApiResponse<Cart>>('/cart/items', {
      product_id: data.productId,
      quantity: data.quantity,
      variants: data.variants,
    });
  },

  // Update cart item
  updateItem: async (
    itemId: string, 
    quantity: number
  ): Promise<ApiResponse<Cart>> => {
    return api.patch<ApiResponse<Cart>>(`/cart/items/${itemId}`, { quantity });
  },

  // Remove item from cart
  removeItem: async (itemId: string): Promise<ApiResponse<Cart>> => {
    return api.delete<ApiResponse<Cart>>(`/cart/items/${itemId}`);
  },

  // Clear cart
  clearCart: async (): Promise<ApiResponse<null>> => {
    return api.delete<ApiResponse<null>>('/cart');
  },

  // Apply coupon
  applyCoupon: async (code: string): Promise<ApiResponse<Cart>> => {
    return api.post<ApiResponse<Cart>>('/cart/coupon', { code });
  },

  // Remove coupon
  removeCoupon: async (): Promise<ApiResponse<Cart>> => {
    return api.delete<ApiResponse<Cart>>('/cart/coupon');
  },
};
