import AuthLayout from '@/components/auth/AuthLayout';
import RegisterForm from '@/components/auth/RegisterForm';

export const metadata = {
  title: 'Create Account | GoSimple Store',
  description: 'Create your GoSimple Store account and start shopping for handcrafted furniture and home decor.',
};

export default function RegisterPage() {
  return (
    <AuthLayout
      title="Create Account"
      subtitle="Join our community and start your journey with us"
    >
      <RegisterForm />
    </AuthLayout>
  );
}
