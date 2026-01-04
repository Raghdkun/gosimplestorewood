import AuthLayout from '@/components/auth/AuthLayout';
import ForgotPasswordForm from '@/components/auth/ForgotPasswordForm';

export const metadata = {
  title: 'Forgot Password | GoSimple Store',
  description: 'Reset your GoSimple Store password. Enter your email to receive a password reset link.',
};

export default function ForgotPasswordPage() {
  return (
    <AuthLayout
      title="Forgot Password?"
      subtitle="No worries, we'll help you reset it"
    >
      <ForgotPasswordForm />
    </AuthLayout>
  );
}
