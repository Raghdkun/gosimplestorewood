'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import CartDropdown from './CartDropdown';
import ProfileDropdown from './ProfileDropdown';
import MobileNav from './MobileNav';

interface NavLink {
  href: string;
  label: string;
}

const navLinks: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/shop', label: 'Shop' },
  { href: '/collections', label: 'Collections' },
  { href: '/about', label: 'About' },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="glass-header sticky top-0 z-50 flex items-center justify-between whitespace-nowrap px-6 lg:px-10 py-4 transition-all duration-300">
      <div className="flex items-center gap-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-4 text-white group">
          <div className="size-8 text-primary flex items-center justify-center transition-transform group-hover:rotate-12">
            <span className="material-symbols-outlined text-[32px]">local_fire_department</span>
          </div>
          <h2 className="text-white text-xl font-bold leading-tight tracking-tight">GoSimple Store</h2>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-9">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium leading-normal transition-colors ${
                pathname === link.href
                  ? 'text-white'
                  : 'text-text-muted hover:text-primary'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="flex flex-1 justify-end gap-6 items-center">
        {/* Search Bar */}
        <label className="hidden lg:flex flex-col min-w-40 !h-10 max-w-64 group">
          <div className="flex w-full flex-1 items-stretch rounded-xl h-full border border-white/10 focus-within:border-primary/50 transition-colors bg-surface-dark/50">
            <div className="text-text-muted flex items-center justify-center pl-4 rounded-l-xl border-r-0">
              <span className="material-symbols-outlined text-[20px]">search</span>
            </div>
            <input
              className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border-none bg-transparent h-full placeholder:text-text-muted/70 px-4 pl-2 text-sm font-normal leading-normal"
              placeholder="Search products..."
              type="text"
            />
          </div>
        </label>

        {/* Action Buttons */}
        <div className="flex gap-3">
          {/* Profile Dropdown */}
          <ProfileDropdown />

          {/* Cart Dropdown */}
          <CartDropdown />
        </div>

        {/* Mobile Menu */}
        <MobileNav />
      </div>
    </header>
  );
}
