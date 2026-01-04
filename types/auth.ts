// Auth Types for Laravel Sanctum Integration

export interface User {
  id: number;
  name: string;
  email: string;
  email_verified_at: string | null;
  avatar?: string;
  created_at: string;
  updated_at: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

export interface LoginCredentials {
  email: string;
  password: string;
  remember?: boolean;
}

export interface RegisterData {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

export interface ForgotPasswordData {
  email: string;
}

export interface ResetPasswordData {
  email: string;
  password: string;
  password_confirmation: string;
  token: string;
}

export interface AuthResponse {
  user: User;
  message?: string;
}

export interface ApiError {
  message: string;
  errors?: Record<string, string[]>;
}
