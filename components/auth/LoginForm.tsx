'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import AuthInput from './AuthInput';
import AuthButton from './AuthButton';
import SocialAuth from './SocialAuth';

interface LoginFormProps {
  onSubmit?: (email: string, password: string, remember: boolean) => Promise<void>;
}

export default function LoginForm({ onSubmit }: LoginFormProps) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    remember: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [generalError, setGeneralError] = useState('');

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setGeneralError('');

    if (!validateForm()) return;

    setIsLoading(true);

    try {
      if (onSubmit) {
        await onSubmit(formData.email, formData.password, formData.remember);
      } else {
        // Demo mode - simulate login
        await new Promise(resolve => setTimeout(resolve, 1500));
        router.push('/');
      }
    } catch (err) {
      setGeneralError(err instanceof Error ? err.message : 'Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* General Error */}
      {generalError && (
        <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm flex items-start gap-3">
          <span className="material-symbols-outlined text-lg">error</span>
          <span>{generalError}</span>
        </div>
      )}

      {/* Email Input */}
      <AuthInput
        label="Email Address"
        icon="mail"
        type="email"
        placeholder="you@example.com"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        error={errors.email}
        autoComplete="email"
      />

      {/* Password Input */}
      <AuthInput
        label="Password"
        icon="lock"
        type="password"
        placeholder="••••••••"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        error={errors.password}
        autoComplete="current-password"
      />

      {/* Remember & Forgot */}
      <div className="flex items-center justify-between">
        <label className="flex items-center gap-3 cursor-pointer group">
          <div className="relative">
            <input
              type="checkbox"
              checked={formData.remember}
              onChange={(e) => setFormData({ ...formData, remember: e.target.checked })}
              className="peer sr-only"
            />
            <div className="w-5 h-5 rounded-md border border-white/20 bg-surface-dark/50 peer-checked:bg-primary peer-checked:border-primary transition-all" />
            <span className="material-symbols-outlined absolute inset-0 text-white text-sm flex items-center justify-center opacity-0 peer-checked:opacity-100 transition-opacity">
              check
            </span>
          </div>
          <span className="text-sm text-text-muted group-hover:text-white transition-colors">
            Remember me
          </span>
        </label>

        <Link
          href="/auth/forgot-password"
          className="text-sm text-primary hover:text-primary/80 transition-colors"
        >
          Forgot password?
        </Link>
      </div>

      {/* Submit Button */}
      <AuthButton type="submit" isLoading={isLoading}>
        <span className="material-symbols-outlined text-xl">login</span>
        Sign In
      </AuthButton>

      {/* Social Auth */}
      <SocialAuth isLoading={isLoading} />

      {/* Sign Up Link */}
      <p className="text-center text-text-muted">
        Don&apos;t have an account?{' '}
        <Link href="/auth/register" className="text-primary hover:text-primary/80 transition-colors font-medium">
          Create one
        </Link>
      </p>
    </form>
  );
}
