import Link from 'next/link';
import Logo from '@/components/ui/Logo';

interface FooterLinkGroup {
  title: string;
  links: { label: string; href: string }[];
}

const footerLinks: FooterLinkGroup[] = [
  {
    title: 'Shop',
    links: [
      { label: 'New Arrivals', href: '/shop?filter=new' },
      { label: 'Best Sellers', href: '/shop?filter=bestseller' },
      { label: 'Furniture', href: '/shop?category=furniture' },
      { label: 'Lighting', href: '/shop?category=lighting' },
      { label: 'Decor', href: '/shop?category=decor' },
      { label: 'Sale', href: '/shop?filter=sale' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Contact Us', href: '/contact' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Shipping & Returns', href: '/shipping' },
      { label: 'Care Guide', href: '/care-guide' },
      { label: 'Warranty Info', href: '/warranty' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-background-darkest">
      <div className="max-w-[1440px] mx-auto flex flex-col items-center px-6 lg:px-10 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 w-full">
          {/* Brand Column */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2 text-white hover:opacity-80 transition-opacity">
              <Logo size="md" showText={false} animated={false} />
              <h3 className="text-lg font-bold">GoSimple</h3>
            </Link>
            <p className="text-text-muted text-sm leading-relaxed">
              This E-store designed for testing.
            </p>
            <div className="flex gap-4 mt-2">
              <a href="#" className="text-text-muted hover:text-primary transition-colors">
                <span className="material-symbols-outlined">public</span>
              </a>
              <a href="#" className="text-text-muted hover:text-primary transition-colors">
                <span className="material-symbols-outlined">alternate_email</span>
              </a>
              <a href="#" className="text-text-muted hover:text-primary transition-colors">
                <span className="material-symbols-outlined">rss_feed</span>
              </a>
            </div>
          </div>

          {/* Link Columns */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="text-white font-bold mb-4">{group.title}</h4>
              <ul className="flex flex-col gap-2 text-sm text-text-muted">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="hover:text-primary transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter Column */}
          <div>
            <h4 className="text-white font-bold mb-4">Stay Connected</h4>
            <p className="text-text-muted text-sm mb-4">
              Subscribe to receive exclusive offers and design inspiration.
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex w-full items-stretch rounded-lg bg-surface-dark border border-white/10">
                <input
                  className="flex-1 bg-transparent border-none text-white text-sm px-4 focus:ring-0 placeholder:text-text-muted/50"
                  placeholder="Email address"
                  type="email"
                />
                <button className="px-4 text-primary hover:text-white font-medium transition-colors">
                  <span className="material-symbols-outlined">arrow_forward</span>
                </button>
              </div>
              <div className="flex gap-4 mt-2">
                <a href="#" className="text-text-muted hover:text-primary transition-colors">
                  <span className="text-xs">INSTAGRAM</span>
                </a>
                <a href="#" className="text-text-muted hover:text-primary transition-colors">
                  <span className="text-xs">PINTEREST</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="w-full mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-text-muted/60">
          <p>© {new Date().getFullYear()} GiSimple Store. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
