'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavLink {
  href: string;
  label: string;
  icon: string;
}

const navLinks: NavLink[] = [
  { href: '/', label: 'Home', icon: 'home' },
  { href: '/shop', label: 'Shop', icon: 'storefront' },
  { href: '/collections', label: 'Collections', icon: 'category' },
  { href: '/about', label: 'About', icon: 'info' },
];

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden flex size-10 cursor-pointer items-center justify-center overflow-hidden rounded-xl bg-surface-dark/50 hover:bg-primary/20 text-white transition-all border border-white/5"
      >
        <span className="material-symbols-outlined text-[20px]">
          {isOpen ? 'close' : 'menu'}
        </span>
      </button>

      {/* Backdrop */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden animate-fade-in"
        />
      )}

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-20 right-4 left-4 glass-panel rounded-2xl border border-white/10 shadow-2xl z-50 md:hidden transition-all duration-300 ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        {/* Navigation Links */}
        <nav className="p-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center gap-3 px-4 py-3.5 rounded-lg font-medium transition-all ${
                pathname === link.href
                  ? 'bg-primary/20 text-primary border border-primary/30'
                  : 'text-white/70 hover:text-white hover:bg-white/5'
              }`}
            >
              <span className="material-symbols-outlined text-xl">{link.icon}</span>
              <span>{link.label}</span>
            </Link>
          ))}
        </nav>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-2" />

        {/* Search */}
        <div className="p-4">
          <div className="flex items-stretch rounded-xl border border-white/10 focus-within:border-primary/50 transition-colors bg-surface-dark/50">
            <div className="text-text-muted flex items-center justify-center pl-4">
              <span className="material-symbols-outlined text-[20px]">search</span>
            </div>
            <input
              className="flex w-full min-w-0 flex-1 resize-none overflow-hidden text-white focus:outline-0 focus:ring-0 border-none bg-transparent h-12 placeholder:text-text-muted/70 px-4 pl-2 text-sm"
              placeholder="Search products..."
              type="text"
            />
          </div>
        </div>

        {/* Quick Actions */}
        <div className="p-4 pt-0 grid grid-cols-2 gap-3">
          <Link
            href="/profile"
            className="flex items-center justify-center gap-2 glass-panel border border-white/10 hover:border-primary/50 text-white font-medium py-3 px-4 rounded-lg transition-all"
          >
            <span className="material-symbols-outlined text-lg">person</span>
            <span>Profile</span>
          </Link>
          <Link
            href="/cart"
            className="flex items-center justify-center gap-2 glass-panel border border-white/10 hover:border-primary/50 text-white font-medium py-3 px-4 rounded-lg transition-all"
          >
            <span className="material-symbols-outlined text-lg">shopping_bag</span>
            <span>Cart</span>
          </Link>
        </div>
      </div>
    </>
  );
}
