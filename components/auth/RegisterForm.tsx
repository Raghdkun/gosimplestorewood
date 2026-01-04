'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import AuthInput from './AuthInput';
import AuthButton from './AuthButton';
import SocialAuth from './SocialAuth';

interface RegisterFormProps {
  onSubmit?: (name: string, email: string, password: string, passwordConfirmation: string) => Promise<void>;
}

export default function RegisterForm({ onSubmit }: RegisterFormProps) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    acceptTerms: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [generalError, setGeneralError] = useState('');

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name) {
      newErrors.name = 'Name is required';
    } else if (formData.name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

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

    if (!formData.acceptTerms) {
      newErrors.acceptTerms = 'You must accept the terms and conditions';
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
        await onSubmit(formData.name, formData.email, formData.password, formData.password_confirmation);
      } else {
        // Demo mode - simulate registration
        await new Promise(resolve => setTimeout(resolve, 1500));
        router.push('/auth/verify-email');
      }
    } catch (err) {
      setGeneralError(err instanceof Error ? err.message : 'Registration failed. Please try again.');
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

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* General Error */}
      {generalError && (
        <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm flex items-start gap-3">
          <span className="material-symbols-outlined text-lg">error</span>
          <span>{generalError}</span>
        </div>
      )}

      {/* Name Input */}
      <AuthInput
        label="Full Name"
        icon="person"
        type="text"
        placeholder="John Doe"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        error={errors.name}
        autoComplete="name"
      />

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
      <div className="space-y-2">
        <AuthInput
          label="Password"
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
        label="Confirm Password"
        icon="lock_reset"
        type="password"
        placeholder="••••••••"
        value={formData.password_confirmation}
        onChange={(e) => setFormData({ ...formData, password_confirmation: e.target.value })}
        error={errors.password_confirmation}
        autoComplete="new-password"
      />

      {/* Terms Checkbox */}
      <div className="space-y-2">
        <label className="flex items-start gap-3 cursor-pointer group">
          <div className="relative mt-0.5">
            <input
              type="checkbox"
              checked={formData.acceptTerms}
              onChange={(e) => setFormData({ ...formData, acceptTerms: e.target.checked })}
              className="peer sr-only"
            />
            <div className="w-5 h-5 rounded-md border border-white/20 bg-surface-dark/50 peer-checked:bg-primary peer-checked:border-primary transition-all" />
            <span className="material-symbols-outlined absolute inset-0 text-white text-sm flex items-center justify-center opacity-0 peer-checked:opacity-100 transition-opacity">
              check
            </span>
          </div>
          <span className="text-sm text-text-muted group-hover:text-white transition-colors">
            I agree to the{' '}
            <Link href="/terms" className="text-primary hover:text-primary/80 transition-colors">
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link href="/privacy" className="text-primary hover:text-primary/80 transition-colors">
              Privacy Policy
            </Link>
          </span>
        </label>
        {errors.acceptTerms && (
          <p className="text-red-400 text-sm flex items-center gap-1 ml-8">
            <span className="material-symbols-outlined text-sm">error</span>
            {errors.acceptTerms}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <AuthButton type="submit" isLoading={isLoading}>
        <span className="material-symbols-outlined text-xl">person_add</span>
        Create Account
      </AuthButton>

      {/* Social Auth */}
      <SocialAuth isLoading={isLoading} />

      {/* Sign In Link */}
      <p className="text-center text-text-muted">
        Already have an account?{' '}
        <Link href="/auth/login" className="text-primary hover:text-primary/80 transition-colors font-medium">
          Sign in
        </Link>
      </p>
    </form>
  );
}
