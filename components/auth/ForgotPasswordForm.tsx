'use client';

import { useState } from 'react';
import Link from 'next/link';
import AuthInput from './AuthInput';
import AuthButton from './AuthButton';

interface ForgotPasswordFormProps {
  onSubmit?: (email: string) => Promise<void>;
}

export default function ForgotPasswordForm({ onSubmit }: ForgotPasswordFormProps) {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateForm = () => {
    if (!email) {
      setError('Email is required');
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email');
      return false;
    }
    setError('');
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);

    try {
      if (onSubmit) {
        await onSubmit(email);
      } else {
        // Demo mode - simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
      }
      setIsSuccess(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to send reset email');
    } finally {
      setIsLoading(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="space-y-6">
        {/* Success Icon */}
        <div className="flex justify-center">
          <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center">
            <span className="material-symbols-outlined text-green-500 text-4xl">mark_email_read</span>
          </div>
        </div>

        {/* Success Message */}
        <div className="text-center space-y-3">
          <h3 className="text-xl font-semibold text-white">Check Your Email</h3>
          <p className="text-text-muted">
            We&apos;ve sent a password reset link to{' '}
            <span className="text-white font-medium">{email}</span>
          </p>
          <p className="text-text-muted text-sm">
            Didn&apos;t receive the email? Check your spam folder or{' '}
            <button
              onClick={() => setIsSuccess(false)}
              className="text-primary hover:text-primary/80 transition-colors"
            >
              try again
            </button>
          </p>
        </div>

        {/* Helpful Tips */}
        <div className="p-4 rounded-xl bg-surface-dark/50 border border-white/5 space-y-3">
          <p className="text-sm text-text-muted flex items-start gap-3">
            <span className="material-symbols-outlined text-primary text-lg">schedule</span>
            <span>The link will expire in 60 minutes</span>
          </p>
          <p className="text-sm text-text-muted flex items-start gap-3">
            <span className="material-symbols-outlined text-primary text-lg">info</span>
            <span>Make sure to use the most recent email if you requested multiple times</span>
          </p>
        </div>

        {/* Back to Login */}
        <Link href="/auth/login">
          <AuthButton variant="secondary">
            <span className="material-symbols-outlined text-xl">arrow_back</span>
            Back to Sign In
          </AuthButton>
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Icon */}
      <div className="flex justify-center">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
          <span className="material-symbols-outlined text-primary text-3xl">lock_reset</span>
        </div>
      </div>

      {/* Instructions */}
      <p className="text-text-muted text-center">
        Enter your email address and we&apos;ll send you a link to reset your password.
      </p>

      {/* Email Input */}
      <AuthInput
        label="Email Address"
        icon="mail"
        type="email"
        placeholder="you@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={error}
        autoComplete="email"
      />

      {/* Submit Button */}
      <AuthButton type="submit" isLoading={isLoading}>
        <span className="material-symbols-outlined text-xl">send</span>
        Send Reset Link
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
