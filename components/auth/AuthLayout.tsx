'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
}

export default function AuthLayout({ children, title, subtitle }: AuthLayoutProps) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-background-dark flex">
      {/* Left Side - Decorative */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000)',
          }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-background-dark/90 via-background-dark/70 to-primary/20" />
        
        {/* Decorative Elements */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        
        {/* Content */}
        <div className="relative z-10 flex flex-col justify-between p-12 w-full">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-white text-xl">store</span>
            </div>
            <span className="text-2xl font-bold text-white">GoSimple</span>
          </Link>

          {/* Centered Message */}
          <div className="flex-1 flex flex-col justify-center max-w-md">
            <h2 className="text-4xl font-bold text-white mb-6 leading-tight">
              Crafted for Your Lifestyle
            </h2>
            <p className="text-text-muted text-lg leading-relaxed">
              Experience the perfect blend of natural aesthetics and modern utility. 
              Join our community of design enthusiasts who appreciate the beauty of 
              handcrafted furniture.
            </p>
            
            {/* Feature List */}
            <div className="mt-10 space-y-4">
              {[
                { icon: 'local_shipping', text: 'Free shipping on orders over $100' },
                { icon: 'verified', text: 'Authentic handcrafted pieces' },
                { icon: 'support_agent', text: '24/7 customer support' },
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary">{feature.icon}</span>
                  </div>
                  <span className="text-white/80">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Quote */}
          <div className="border-l-2 border-primary pl-6">
            <p className="text-white/70 italic">
              &quot;The furniture exceeded my expectations. Beautiful craftsmanship and 
              attention to detail.&quot;
            </p>
            <p className="text-text-muted mt-2">— Sarah M., Verified Buyer</p>
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 flex flex-col">
        {/* Mobile Header */}
        <div className="lg:hidden p-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-white text-xl">store</span>
            </div>
            <span className="text-2xl font-bold text-white">GoSimple</span>
          </Link>
          <Link 
            href="/"
            className="text-text-muted hover:text-white transition-colors flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            Back to Store
          </Link>
        </div>

        {/* Form Container */}
        <div className="flex-1 flex items-center justify-center p-6 lg:p-12">
          <div className="w-full max-w-md">
            {/* Title */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-white mb-2">{title}</h1>
              <p className="text-text-muted">{subtitle}</p>
            </div>

            {/* Form Content */}
            {children}

            {/* Navigation Links */}
            <div className="mt-8 pt-8 border-t border-white/10">
              <div className="flex flex-wrap gap-4 justify-center text-sm">
                <Link
                  href="/auth/login"
                  className={`transition-colors ${
                    pathname === '/auth/login' 
                      ? 'text-primary' 
                      : 'text-text-muted hover:text-white'
                  }`}
                >
                  Sign In
                </Link>
                <span className="text-white/20">•</span>
                <Link
                  href="/auth/register"
                  className={`transition-colors ${
                    pathname === '/auth/register' 
                      ? 'text-primary' 
                      : 'text-text-muted hover:text-white'
                  }`}
                >
                  Create Account
                </Link>
                <span className="text-white/20">•</span>
                <Link
                  href="/auth/forgot-password"
                  className={`transition-colors ${
                    pathname === '/auth/forgot-password' 
                      ? 'text-primary' 
                      : 'text-text-muted hover:text-white'
                  }`}
                >
                  Reset Password
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Back Link */}
        <div className="hidden lg:block p-6 text-center">
          <Link 
            href="/"
            className="text-text-muted hover:text-white transition-colors inline-flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            Back to Store
          </Link>
        </div>
      </div>
    </div>
  );
}
