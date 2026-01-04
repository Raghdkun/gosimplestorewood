'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import AuthButton from './AuthButton';

interface VerifyEmailFormProps {
  userEmail?: string;
  onResend?: () => Promise<void>;
  onLogout?: () => Promise<void>;
}

export default function VerifyEmailForm({ 
  userEmail = 'user@example.com',
  onResend,
  onLogout,
}: VerifyEmailFormProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [resendSuccess, setResendSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleResend = async () => {
    setIsLoading(true);
    setError('');
    setResendSuccess(false);

    try {
      if (onResend) {
        await onResend();
      } else {
        // Demo mode - simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
      }
      setResendSuccess(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to resend verification email');
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = async () => {
    if (onLogout) {
      await onLogout();
    } else {
      // Demo mode - redirect to login
      router.push('/auth/login');
    }
  };

  return (
    <div className="space-y-6">
      {/* Icon */}
      <div className="flex justify-center">
        <div className="relative">
          <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
            <span className="material-symbols-outlined text-primary text-5xl">mark_email_unread</span>
          </div>
          {/* Animated ring */}
          <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-ping" />
        </div>
      </div>

      {/* Message */}
      <div className="text-center space-y-3">
        <p className="text-text-muted">
          We&apos;ve sent a verification email to
        </p>
        <p className="text-white font-medium text-lg">{userEmail}</p>
        <p className="text-text-muted text-sm">
          Click the link in the email to verify your account and unlock all features.
        </p>
      </div>

      {/* Success Message */}
      {resendSuccess && (
        <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 text-sm flex items-start gap-3">
          <span className="material-symbols-outlined text-lg">check_circle</span>
          <span>Verification email sent successfully! Check your inbox.</span>
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm flex items-start gap-3">
          <span className="material-symbols-outlined text-lg">error</span>
          <span>{error}</span>
        </div>
      )}

      {/* Tips Card */}
      <div className="p-5 rounded-xl bg-surface-dark/50 border border-white/5 space-y-4">
        <h4 className="text-white font-medium flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">tips_and_updates</span>
          Didn&apos;t receive the email?
        </h4>
        <ul className="space-y-2 text-sm text-text-muted">
          <li className="flex items-start gap-2">
            <span className="material-symbols-outlined text-xs mt-1">check</span>
            Check your spam or junk folder
          </li>
          <li className="flex items-start gap-2">
            <span className="material-symbols-outlined text-xs mt-1">check</span>
            Make sure {userEmail} is correct
          </li>
          <li className="flex items-start gap-2">
            <span className="material-symbols-outlined text-xs mt-1">check</span>
            Add noreply@gosimple.store to your contacts
          </li>
        </ul>
      </div>

      {/* Actions */}
      <div className="space-y-3">
        <AuthButton onClick={handleResend} isLoading={isLoading}>
          <span className="material-symbols-outlined text-xl">send</span>
          Resend Verification Email
        </AuthButton>

        <AuthButton variant="secondary" onClick={handleLogout}>
          <span className="material-symbols-outlined text-xl">logout</span>
          Sign Out
        </AuthButton>
      </div>

      {/* Continue Shopping */}
      <div className="pt-4 border-t border-white/10">
        <p className="text-center text-text-muted text-sm mb-4">
          You can continue browsing while waiting for verification
        </p>
        <Link href="/">
          <AuthButton variant="secondary">
            <span className="material-symbols-outlined text-xl">storefront</span>
            Continue to Store
          </AuthButton>
        </Link>
      </div>
    </div>
  );
}
