'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import AuthInput from './AuthInput';
import AuthButton from './AuthButton';

interface ResetPasswordFormProps {
  onSubmit?: (email: string, password: string, passwordConfirmation: string, token: string) => Promise<void>;
}

export default function ResetPasswordForm({ onSubmit }: ResetPasswordFormProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get('token') || '';
  const emailFromUrl = searchParams.get('email') || '';

  const [formData, setFormData] = useState({
    email: emailFromUrl,
    password: '',
    password_confirmation: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [generalError, setGeneralError] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }

    if (!formData.password_confirmation) {
      newErrors.password_confirmation = 'Please confirm your password';
    } else if (formData.password !== formData.password_confirmation) {
      newErrors.password_confirmation = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setGeneralError('');

    if (!validateForm()) return;

    if (!token) {
      setGeneralError('Invalid or expired reset link. Please request a new one.');
      return;
    }

    setIsLoading(true);

    try {
      if (onSubmit) {
        await onSubmit(formData.email, formData.password, formData.password_confirmation, token);
      } else {
        // Demo mode - simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
      }
      setIsSuccess(true);
    } catch (err) {
      setGeneralError(err instanceof Error ? err.message : 'Failed to reset password');
    } finally {
      setIsLoading(false);
    }
  };

  // Password strength indicator
  const getPasswordStrength = () => {
    const password = formData.password;
    if (!password) return { strength: 0, label: '', color: '' };
    
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;

    const levels = [
      { strength: 1, label: 'Weak', color: 'bg-red-500' },
      { strength: 2, label: 'Fair', color: 'bg-orange-500' },
      { strength: 3, label: 'Good', color: 'bg-yellow-500' },
      { strength: 4, label: 'Strong', color: 'bg-green-500' },
      { strength: 5, label: 'Excellent', color: 'bg-emerald-500' },
    ];

    return levels[strength - 1] || { strength: 0, label: '', color: '' };
  };

  const passwordStrength = getPasswordStrength();

  if (isSuccess) {
    return (
      <div className="space-y-6">
        {/* Success Icon */}
        <div className="flex justify-center">
          <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center">
            <span className="material-symbols-outlined text-green-500 text-4xl">check_circle</span>
          </div>
        </div>

        {/* Success Message */}
        <div className="text-center space-y-3">
          <h3 className="text-xl font-semibold text-white">Password Reset Complete</h3>
          <p className="text-text-muted">
            Your password has been successfully reset. You can now sign in with your new password.
          </p>
        </div>

        {/* Sign In Button */}
        <AuthButton onClick={() => router.push('/auth/login')}>
          <span className="material-symbols-outlined text-xl">login</span>
          Sign In Now
        </AuthButton>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Icon */}
      <div className="flex justify-center">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
          <span className="material-symbols-outlined text-primary text-3xl">password</span>
        </div>
      </div>

      {/* General Error */}
      {generalError && (
        <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm flex items-start gap-3">
          <span className="material-symbols-outlined text-lg">error</span>
          <span>{generalError}</span>
        </div>
      )}

      {/* Invalid Token Warning */}
      {!token && (
        <div className="p-4 rounded-xl bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-sm flex items-start gap-3">
          <span className="material-symbols-outlined text-lg">warning</span>
          <div>
            <p className="font-medium">Invalid Reset Link</p>
            <p className="text-yellow-400/80 mt-1">
              This link appears to be invalid or expired.{' '}
              <Link href="/auth/forgot-password" className="underline">
                Request a new link
              </Link>
            </p>
          </div>
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

      {/* New Password Input */}
      <div className="space-y-2">
        <AuthInput
          label="New Password"
          icon="lock"
          type="password"
          placeholder="••••••••"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          error={errors.password}
          autoComplete="new-password"
        />
        
        {/* Password Strength */}
        {formData.password && (
          <div className="space-y-2">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((level) => (
                <div
                  key={level}
                  className={`h-1 flex-1 rounded-full transition-colors ${
                    level <= passwordStrength.strength
                      ? passwordStrength.color
                      : 'bg-white/10'
                  }`}
                />
              ))}
            </div>
            <p className="text-xs text-text-muted">
              Password strength: <span className="text-white">{passwordStrength.label}</span>
            </p>
          </div>
        )}
      </div>

      {/* Confirm Password Input */}
      <AuthInput
        label="Confirm New Password"
        icon="lock_reset"
        type="password"
        placeholder="••••••••"
        value={formData.password_confirmation}
        onChange={(e) => setFormData({ ...formData, password_confirmation: e.target.value })}
        error={errors.password_confirmation}
        autoComplete="new-password"
      />

      {/* Submit Button */}
      <AuthButton type="submit" isLoading={isLoading} disabled={!token}>
        <span className="material-symbols-outlined text-xl">lock_open</span>
        Reset Password
      </AuthButton>

      {/* Back to Login */}
      <div className="text-center">
        <Link
          href="/auth/login"
          className="text-text-muted hover:text-white transition-colors inline-flex items-center gap-2"
        >
          <span className="material-symbols-outlined text-sm">arrow_back</span>
          Back to Sign In
        </Link>
      </div>
    </form>
  );
}
