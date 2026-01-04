import AuthLayout from '@/components/auth/AuthLayout';
import LoginForm from '@/components/auth/LoginForm';

export const metadata = {
  title: 'Sign In | GoSimple Store',
  description: 'Sign in to your GoSimple Store account to access your orders, wishlist, and more.',
};

export default function LoginPage() {
  return (
    <AuthLayout
      title="Welcome Back"
      subtitle="Sign in to continue shopping and manage your orders"
    >
      <LoginForm />
    </AuthLayout>
  );
}
