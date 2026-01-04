import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="min-h-[80vh] flex items-center justify-center px-4 py-20">
        <div className="max-w-2xl mx-auto text-center">
          {/* 404 Illustration */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center size-32 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 mb-6">
              <span className="material-symbols-outlined text-primary" style={{ fontSize: '80px' }}>
                error_outline
              </span>
            </div>
            <h1 className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-300 mb-4">
              404
            </h1>
          </div>

          {/* Error Message */}
          <div className="space-y-4 mb-10">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Page Not Found
            </h2>
            <p className="text-white/60 text-lg max-w-md mx-auto leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-light text-white font-bold py-3.5 px-8 rounded-lg transition-all shadow-[0_0_20px_rgba(236,109,19,0.4)]"
            >
              <span className="material-symbols-outlined">home</span>
              Back to Home
            </Link>
            <Link
              href="/shop"
              className="inline-flex items-center justify-center gap-2 glass-panel border border-white/10 hover:border-primary/50 text-white font-bold py-3.5 px-8 rounded-lg transition-all"
            >
              <span className="material-symbols-outlined">storefront</span>
              Browse Shop
            </Link>
          </div>

          {/* Popular Links */}
          <div className="mt-16 pt-8 border-t border-white/10">
            <p className="text-white/40 text-sm mb-4">Popular Pages</p>
            <div className="flex flex-wrap gap-3 justify-center">
              {['Home', 'Shop', 'Collections', 'About'].map((link) => (
                <Link
                  key={link}
                  href={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
                  className="text-text-muted hover:text-primary text-sm transition-colors underline decoration-white/20 underline-offset-4"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
