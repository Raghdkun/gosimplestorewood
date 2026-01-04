'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const mockCartItems: CartItem[] = [
  {
    id: '1',
    name: 'Ceramic Vase',
    price: 45.00,
    quantity: 1,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBvqIfaYhznfncfk9B16L-CMTRRlDBaQID1gp4JmhfPAOKaFmdsg2BeBn9tRdrzBrvxRkSHOhyRks5_6ilzziO4PlNzobY_ppXq4dP1VCSinzhOKL30so3pkkbHsqqz__0bLIUevvLuGdx3qgD0mPRsg7br75vCGzceewBGS7YTx5N5f7CS_xfZ_N9D2G6_woJI8F26FXnFZNxpG1qBcKIcFtTPqjP4f6d6iBwkferl7trYIsQikrK7F76Te66CpvR7_xtGnDynL2HC',
  },
  {
    id: '2',
    name: 'Desk Lamp',
    price: 85.00,
    quantity: 2,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA8tmOjD82CPRwxHAlNBe8aEDG1w58aNAL1UGS2roqY8NCwPMPmb28CRAW9wW8UKFF-nTMsq7f_XVURfCECui-956svYvIgjPpk0YKxO62tEdq3LjlEztlFrTrA0Rn5SrHGS_S1F-2RGzwkH7XyiveToXI-0JQvFmggFLuGB9ig5zh1E28V44D2U19QW6HS8h4YaQ9y6yfrZv8MEN_pJFZVItXKlZdoNaCJ4V9dlHhS8DfMXI57dmguFQZbU-uavP7446hUozqxOzKa',
  },
];

export default function CartDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const total = mockCartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

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
        className="relative flex size-10 cursor-pointer items-center justify-center rounded-xl bg-surface-dark/50 hover:bg-primary/20 text-white transition-all border border-white/5 hover:border-primary/50"
      >
        <span className="material-symbols-outlined text-[20px]">shopping_bag</span>
      </button>
      {mockCartItems.length > 0 && (
        <span className="absolute -top-2 -right-2 size-5 bg-primary rounded-full text-xs font-bold flex items-center justify-center text-white shadow-lg">
          {mockCartItems.length}
        </span>
      )}

      {isOpen && (
        <div className="absolute right-0 mt-3 w-80 sm:w-96 bg-background-dark rounded-2xl border border-white/10 shadow-2xl z-50 animate-slide-down">
          {/* Header */}
          <div className="p-4 border-b border-white/10">
            <h3 className="text-white font-semibold text-lg">Shopping Cart</h3>
            <p className="text-white/50 text-sm">{mockCartItems.length} items</p>
          </div>

          {/* Cart Items */}
          <div className="max-h-80 overflow-y-auto p-4 space-y-3">
            {mockCartItems.map((item) => (
              <div key={item.id} className="flex gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors">
                <img
                  src={item.image}
                  alt={item.name}
                  className="size-16 rounded-lg object-cover bg-wood-dark"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="text-white font-medium text-sm truncate">{item.name}</h4>
                  <p className="text-white/50 text-xs">Qty: {item.quantity}</p>
                  <p className="text-primary font-bold text-sm mt-1">${item.price.toFixed(2)}</p>
                </div>
                <button className="text-white/40 hover:text-red-400 transition-colors">
                  <span className="material-symbols-outlined text-lg">close</span>
                </button>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-white/10 space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-white/70">Subtotal</span>
              <span className="text-white font-bold text-lg">${total.toFixed(2)}</span>
            </div>
            <Link
              href="/cart"
              onClick={() => setIsOpen(false)}
              className="block w-full bg-primary hover:bg-primary-light text-white font-bold py-3 px-6 rounded-lg transition-all text-center shadow-[0_0_20px_rgba(236,109,19,0.3)]"
            >
              View Cart
            </Link>
            <button className="block w-full bg-surface-dark border border-white/10 hover:border-primary/50 text-white font-medium py-2.5 px-6 rounded-lg transition-all text-center text-sm">
              Continue Shopping
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
