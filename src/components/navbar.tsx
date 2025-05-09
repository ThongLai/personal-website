'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { Menu, X, ExternalLink } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from './theme-toggle';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
  { 
    href: "https://mozilla.github.io/pdf.js/web/viewer.html?file=https://raw.githubusercontent.com/ThongLai/tom-site/main/public/CV/Tom.pdf", 
    label: "View My CV",
    target: "_blank",
    rel: "noopener noreferrer",
    isExternal: true
  },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);   // ← NEW
  const pathname = usePathname();

  /* mark as mounted (runs only in the browser) */
  useEffect(() => setMounted(true), []);

  /* lock / unlock scroll */
  useEffect(() => {
    document.documentElement.classList.toggle('overflow-hidden', open);
    return () => document.documentElement.classList.remove('overflow-hidden');
  }, [open]);

  /* ------------------------------------------------------------------ */
  /* regular header (same as before)                                    */
  /* ------------------------------------------------------------------ */

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-sm supports-backdrop-filter:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="text-xl font-bold text-primary">Tom Lai</Link>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map(l => (
            <Link
              key={l.href}
              href={l.href}
              target={l.target}
              rel={l.rel}
              className={cn(
                'relative py-1 text-sm font-medium transition-colors inline-flex items-center gap-1',
                l.isExternal ? 'text-primary hover:text-primary/80' : pathname === l.href ? 'text-primary' : 'hover:text-primary',
              )}
            >
              {l.label}
              {l.isExternal && <ExternalLink className="h-3 w-3" />}
              {pathname === l.href && !l.isExternal && (
                <span className="absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-primary" />
              )}
            </Link>
          ))}
          <ThemeToggle />
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Button variant="ghost" size="icon"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen(p => !p)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* ---------------------------------------------------------------- */}
      {/* mobile backdrop + sheet rendered via portal AFTER mount          */}
      {/* ---------------------------------------------------------------- */}
      {mounted && createPortal(
        <>
          {/* Backdrop */}
          <div
            className={cn(
              'fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity md:hidden',
              open ? 'opacity-100' : 'pointer-events-none opacity-0',
            )}
            onClick={() => setOpen(false)}
          />

          {/* Slide-in sheet */}
          <aside
            className={cn(
              'fixed inset-y-16 right-0 z-50 w-3/4 max-w-xs bg-background pt-5 pb-10 shadow-lg',
              'transition-transform duration-333 ease-[cubic-bezier(.4,0,.2,1)] md:hidden',
              open ? 'translate-x-0' : 'translate-x-full',
            )}
          >
            <ul className="flex flex-col space-y-1 px-6">
              {links.map((l, i) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    target={l.target}
                    rel={l.rel}
                    onClick={() => setOpen(false)}
                    className={cn(
                      'relative block rounded-lg py-3 px-4 text-lg font-medium transition-all duration-333',
                      l.isExternal 
                        ? 'inline-flex items-center gap-2 text-primary hover:bg-primary/5' 
                        : pathname === l.href
                          ? 'bg-primary/10 text-primary'
                          : 'hover:bg-primary/5 hover:text-primary',
                      `delay-[${i * 50}ms]`,
                    )}
                  >
                    {l.label}
                    {l.isExternal && <ExternalLink className="h-4 w-4" />}
                    {pathname === l.href && !l.isExternal && (
                      <span className="absolute inset-y-0 left-0 w-1 rounded-full bg-primary" />
                    )}
                  </Link>
                </li>
              ))}
            </ul>

            <footer className="mt-auto border-t px-6 pt-6 text-center text-sm text-muted-foreground">
              © {new Date().getFullYear()} Thong Minh Lai (Tom)
              <br />
              How are you doing? :-)
            </footer>
          </aside>
        </>,
        document.body,
      )}
    </header>
  );
}
