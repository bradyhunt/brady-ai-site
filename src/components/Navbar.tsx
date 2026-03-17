'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { NavSocialFan } from './NavSocialFan';
import { siteConfig } from '@/lib/siteConfig';
import clsx from 'clsx';

const navLinks = [
  { href: '/', label: 'About' },
  { href: '/news/', label: 'News' },
  { href: '/publications/', label: 'Publications' },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary shadow-md dark:bg-transparent dark:backdrop-blur-lg dark:shadow-none dark:border-b dark:border-white/10">
      <div className="max-w-content mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14">
          <Link
            href="/"
            className="text-white font-semibold text-lg tracking-tight hover:opacity-90 transition-opacity"
          >
            {siteConfig.title}
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  'px-3 py-1.5 rounded-md text-sm transition-colors',
                  pathname === link.href ||
                    (link.href !== '/' && pathname?.startsWith(link.href))
                    ? 'text-white font-bold bg-white/15'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="ml-2 border-l border-white/20 pl-2 flex items-center gap-1">
              <NavSocialFan />
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setOpen(!open)}
              className="p-2 text-white/80 hover:text-white"
              aria-label="Toggle menu"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-white/20 bg-primary dark:bg-gray-950/90 dark:backdrop-blur-lg">
          <div className="px-4 py-2 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={clsx(
                  'block px-3 py-2 rounded-md text-sm transition-colors',
                  pathname === link.href ||
                    (link.href !== '/' && pathname?.startsWith(link.href))
                    ? 'text-white font-bold bg-white/15'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
