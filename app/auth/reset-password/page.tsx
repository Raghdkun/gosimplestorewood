import { Suspense } from 'react';
import AuthLayout from '@/components/auth/AuthLayout';
import ResetPasswordForm from '@/components/auth/ResetPasswordForm';

export const metadata = {
  title: 'Reset Password | GoSimple Store',
  description: 'Create a new password for your GoSimple Store account.',
};

// Loading fallback for Suspense
function ResetPasswordLoading() {
  return (
    <div className="space-y-6 animate-pulse">
      <div className="flex justify-center">
        <div className="w-16 h-16 rounded-full bg-surface-dark" />
      </div>
      <div className="space-y-4">
        <div className="h-12 bg-surface-dark rounded-xl" />
        <div className="h-12 bg-surface-dark rounded-xl" />
        <div className="h-12 bg-surface-dark rounded-xl" />
        <div className="h-12 bg-primary/20 rounded-xl" />
      </div>
    </div>
  );
}

export default function ResetPasswordPage() {
  return (
    <AuthLayout
      title="Reset Password"
      subtitle="Create a new secure password for your account"
    >
      <Suspense fallback={<ResetPasswordLoading />}>
        <ResetPasswordForm />
      </Suspense>
    </AuthLayout>
  );
}
