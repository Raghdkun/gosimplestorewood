// API Configuration
// This will be used to connect to Laravel Sanctum API

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';

// API client with default configurations
class ApiClient {
  private baseUrl: string;
  private defaultHeaders: HeadersInit;

  constructor() {
    this.baseUrl = API_BASE_URL;
    this.defaultHeaders = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    };
  }

  // Get the CSRF token for Laravel Sanctum
  async getCsrfToken(): Promise<void> {
    await fetch(`${this.baseUrl.replace('/api', '')}/sanctum/csrf-cookie`, {
      credentials: 'include',
    });
  }

  // Set auth token (Bearer token)
  setAuthToken(token: string | null): void {
    if (token) {
      this.defaultHeaders = {
        ...this.defaultHeaders,
        'Authorization': `Bearer ${token}`,
      };
    } else {
      const { Authorization, ...headers } = this.defaultHeaders as Record<string, string>;
      this.defaultHeaders = headers;
    }
  }

  // Generic request method
  async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;
    
    const config: RequestInit = {
      ...options,
      headers: {
        ...this.defaultHeaders,
        ...options.headers,
      },
      credentials: 'include', // Required for Laravel Sanctum cookies
    };

    try {
      const response = await fetch(url, config);
      
      if (!response.ok) {
        const error = await response.json().catch(() => ({}));
        throw new ApiError(
          error.message || 'An error occurred',
          response.status,
          error.errors
        );
      }

      // Handle empty responses
      const text = await response.text();
      return text ? JSON.parse(text) : ({} as T);
    } catch (error) {
      if (error instanceof ApiError) {
        throw error;
      }
      throw new ApiError('Network error', 0);
    }
  }

  // HTTP methods
  async get<T>(endpoint: string, params?: Record<string, string>): Promise<T> {
    const url = params 
      ? `${endpoint}?${new URLSearchParams(params).toString()}`
      : endpoint;
    return this.request<T>(url, { method: 'GET' });
  }

  async post<T>(endpoint: string, data?: unknown): Promise<T> {
    return this.request<T>(endpoint, {
      method: 'POST',
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  async put<T>(endpoint: string, data?: unknown): Promise<T> {
    return this.request<T>(endpoint, {
      method: 'PUT',
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  async patch<T>(endpoint: string, data?: unknown): Promise<T> {
    return this.request<T>(endpoint, {
      method: 'PATCH',
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  async delete<T>(endpoint: string): Promise<T> {
    return this.request<T>(endpoint, { method: 'DELETE' });
  }
}

// Custom API Error class
export class ApiError extends Error {
  status: number;
  errors?: Record<string, string[]>;

  constructor(message: string, status: number, errors?: Record<string, string[]>) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.errors = errors;
  }
}

// Export singleton instance
export const api = new ApiClient();

// Export configuration
export { API_BASE_URL };
