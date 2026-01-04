import { api } from './client';
import { User, ApiResponse } from '@/types';

interface LoginCredentials {
  email: string;
  password: string;
}

interface RegisterData extends LoginCredentials {
  firstName: string;
  lastName: string;
  passwordConfirmation: string;
}

interface AuthResponse {
  user: User;
  token: string;
}

// Auth API endpoints for Laravel Sanctum
export const authApi = {
  // Get CSRF cookie (required before login/register)
  getCsrfCookie: async (): Promise<void> => {
    await api.getCsrfToken();
  },

  // Login
  login: async (credentials: LoginCredentials): Promise<ApiResponse<AuthResponse>> => {
    // Get CSRF cookie first
    await api.getCsrfToken();
    
    const response = await api.post<ApiResponse<AuthResponse>>('/login', credentials);
    
    if (response.data?.token) {
      api.setAuthToken(response.data.token);
    }
    
    return response;
  },

  // Register
  register: async (data: RegisterData): Promise<ApiResponse<AuthResponse>> => {
    // Get CSRF cookie first
    await api.getCsrfToken();
    
    const response = await api.post<ApiResponse<AuthResponse>>('/register', {
      first_name: data.firstName,
      last_name: data.lastName,
      email: data.email,
      password: data.password,
      password_confirmation: data.passwordConfirmation,
    });
    
    if (response.data?.token) {
      api.setAuthToken(response.data.token);
    }
    
    return response;
  },

  // Logout
  logout: async (): Promise<ApiResponse<null>> => {
    const response = await api.post<ApiResponse<null>>('/logout');
    api.setAuthToken(null);
    return response;
  },

  // Get current user
  getUser: async (): Promise<ApiResponse<User>> => {
    return api.get<ApiResponse<User>>('/user');
  },

  // Update user profile
  updateProfile: async (data: Partial<User>): Promise<ApiResponse<User>> => {
    return api.put<ApiResponse<User>>('/user/profile', data);
  },

  // Change password
  changePassword: async (data: {
    currentPassword: string;
    newPassword: string;
    newPasswordConfirmation: string;
  }): Promise<ApiResponse<null>> => {
    return api.put<ApiResponse<null>>('/user/password', {
      current_password: data.currentPassword,
      password: data.newPassword,
      password_confirmation: data.newPasswordConfirmation,
    });
  },

  // Forgot password
  forgotPassword: async (email: string): Promise<ApiResponse<null>> => {
    await api.getCsrfToken();
    return api.post<ApiResponse<null>>('/forgot-password', { email });
  },

  // Reset password
  resetPassword: async (data: {
    token: string;
    email: string;
    password: string;
    passwordConfirmation: string;
  }): Promise<ApiResponse<null>> => {
    return api.post<ApiResponse<null>>('/reset-password', {
      token: data.token,
      email: data.email,
      password: data.password,
      password_confirmation: data.passwordConfirmation,
    });
  },
};
