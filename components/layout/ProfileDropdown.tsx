'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

interface MenuItem {
  icon: string;
  label: string;
  href: string;
}

const menuItems: MenuItem[] = [
  { icon: 'person', label: 'My Profile', href: '/profile' },
  { icon: 'shopping_bag', label: 'Orders', href: '/orders' },
  { icon: 'favorite', label: 'Wishlist', href: '/wishlist' },
  { icon: 'settings', label: 'Settings', href: '/settings' },
];

export default function ProfileDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex size-10 cursor-pointer items-center justify-center overflow-hidden rounded-xl bg-surface-dark/50 hover:bg-primary/20 text-white transition-all border border-white/5 hover:border-primary/50"
      >
        <span className="material-symbols-outlined text-[20px]">person</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-3 w-72 bg-background-dark rounded-2xl border border-white/10 shadow-2xl z-50 animate-slide-down">
          {/* User Info */}
          <div className="p-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="size-12 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center">
                <span className="text-white font-bold text-lg">JD</span>
              </div>
              <div>
                <h4 className="text-white font-semibold">John Doe</h4>
                <p className="text-white/50 text-sm">john.doe@email.com</p>
              </div>
            </div>
          </div>

          {/* Menu Items */}
          <div className="p-2">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-white/70 hover:text-white hover:bg-white/5 transition-all group"
              >
                <span className="material-symbols-outlined text-lg group-hover:text-primary transition-colors">
                  {item.icon}
                </span>
                <span className="font-medium">{item.label}</span>
              </Link>
            ))}
          </div>

          {/* Logout */}
          <div className="p-2 border-t border-white/10">
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-red-400 hover:bg-red-500/10 transition-all group">
              <span className="material-symbols-outlined text-lg">logout</span>
              <span className="font-medium">Logout</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
