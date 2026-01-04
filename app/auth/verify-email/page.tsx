import AuthLayout from '@/components/auth/AuthLayout';
import VerifyEmailForm from '@/components/auth/VerifyEmailForm';

export const metadata = {
  title: 'Verify Email | GoSimple Store',
  description: 'Please verify your email address to complete your GoSimple Store registration.',
};

export default function VerifyEmailPage() {
  return (
    <AuthLayout
      title="Verify Your Email"
      subtitle="One last step to complete your registration"
    >
      <VerifyEmailForm />
    </AuthLayout>
  );
}
