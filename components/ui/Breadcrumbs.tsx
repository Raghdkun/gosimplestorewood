import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href: string;
  current?: boolean;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="flex items-center gap-2 text-sm text-text-muted">
      {items.map((item, index) => (
        <span key={item.label} className="flex items-center gap-2">
          {index > 0 && (
            <span className="material-symbols-outlined text-xs opacity-50">chevron_right</span>
          )}
          {item.current ? (
            <span className="text-white font-medium">{item.label}</span>
          ) : (
            <Link href={item.href} className="hover:text-primary transition-colors">
              {item.label}
            </Link>
          )}
        </span>
      ))}
    </nav>
  );
}
