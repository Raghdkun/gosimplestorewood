'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from './context';

// Hook to protect routes - redirects to login if not authenticated
export function useRequireAuth(redirectTo: string = '/auth/login') {
  const { isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push(redirectTo);
    }
  }, [isAuthenticated, isLoading, router, redirectTo]);

  return { isAuthenticated, isLoading };
}

// Hook to redirect authenticated users away from auth pages
export function useRedirectIfAuthenticated(redirectTo: string = '/') {
  const { isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      router.push(redirectTo);
    }
  }, [isAuthenticated, isLoading, router, redirectTo]);

  return { isAuthenticated, isLoading };
}

// Hook for checking if email is verified
export function useRequireEmailVerification() {
  const { user, isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && isAuthenticated && !user?.email_verified_at) {
      router.push('/auth/verify-email');
    }
  }, [user, isAuthenticated, isLoading, router]);

  return { isVerified: !!user?.email_verified_at, isLoading };
}
