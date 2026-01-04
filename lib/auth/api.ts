// Laravel Sanctum API Service
import type {
  LoginCredentials,
  RegisterData,
  ForgotPasswordData,
  ResetPasswordData,
  User,
  AuthResponse,
} from '@/types/auth';

// Configure your Laravel API URL
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

// Create a configured fetch instance for Sanctum
async function sanctumFetch(
  endpoint: string,
  options: RequestInit = {}
): Promise<Response> {
  const url = `${API_URL}${endpoint}`;
  
  const defaultOptions: RequestInit = {
    credentials: 'include', // Important for Sanctum cookies
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
      ...options.headers,
    },
  };

  return fetch(url, { ...defaultOptions, ...options });
}

// Get CSRF cookie from Sanctum (required before login/register)
export async function getCsrfCookie(): Promise<void> {
  await fetch(`${API_URL}/sanctum/csrf-cookie`, {
    credentials: 'include',
  });
}

// Login user
export async function login(credentials: LoginCredentials): Promise<AuthResponse> {
  await getCsrfCookie();
  
  const response = await sanctumFetch('/login', {
    method: 'POST',
    body: JSON.stringify(credentials),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Login failed');
  }

  return response.json();
}

// Register new user
export async function register(data: RegisterData): Promise<AuthResponse> {
  await getCsrfCookie();
  
  const response = await sanctumFetch('/register', {
    method: 'POST',
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Registration failed');
  }

  return response.json();
}

// Logout user
export async function logout(): Promise<void> {
  const response = await sanctumFetch('/logout', {
    method: 'POST',
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Logout failed');
  }
}

// Get authenticated user
export async function getUser(): Promise<User> {
  const response = await sanctumFetch('/api/user');

  if (!response.ok) {
    throw new Error('Not authenticated');
  }

  return response.json();
}

// Send password reset email
export async function forgotPassword(data: ForgotPasswordData): Promise<{ message: string }> {
  await getCsrfCookie();
  
  const response = await sanctumFetch('/forgot-password', {
    method: 'POST',
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Failed to send reset email');
  }

  return response.json();
}

// Reset password with token
export async function resetPassword(data: ResetPasswordData): Promise<{ message: string }> {
  await getCsrfCookie();
  
  const response = await sanctumFetch('/reset-password', {
    method: 'POST',
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Failed to reset password');
  }

  return response.json();
}

// Send email verification notification
export async function sendEmailVerification(): Promise<{ message: string }> {
  const response = await sanctumFetch('/email/verification-notification', {
    method: 'POST',
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Failed to send verification email');
  }

  return response.json();
}

// Verify email with URL from email
export async function verifyEmail(url: string): Promise<void> {
  const response = await fetch(url, {
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Email verification failed');
  }
}
