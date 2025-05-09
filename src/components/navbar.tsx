"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  
  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur-sm supports-backdrop-filter:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center group">
            <span className="font-bold text-xl text-primary transition-all duration-300 group-hover:text-primary/80">
              Tom Lai
            </span>
          </Link>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-all duration-200 relative py-1",
                  isActive 
                    ? "text-primary" 
                    : "hover:text-primary"
                )}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full" />
                )}
              </Link>
            );
          })}
          <ThemeToggle />
        </nav>

        {/* Mobile navigation toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle Menu"
            className="md:hidden relative z-50 transition-transform hover:scale-110 active:scale-95"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile navigation menu with backdrop overlay */}
      <div 
        className={cn(
          "fixed inset-0 top-16 z-40 bg-background/80 backdrop-blur-md transition-opacity duration-300",
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
      />
      <div 
        className={cn(
          "fixed inset-0 top-16 z-50 bg-background w-full h-[calc(100vh-4rem)] flex flex-col md:hidden transition-transform duration-300 ease-out",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col space-y-1 p-6 pt-10">
          {links.map((link, i) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative block text-lg font-medium py-3 px-4 rounded-lg transition-all duration-300",
                  isActive 
                    ? "text-primary bg-primary/10" 
                    : "hover:text-primary hover:bg-primary/5",
                  isMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8",
                  // Add staggered delay based on index
                  `transition-all duration-300 delay-[${i * 50}ms]`
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                <span>{link.label}</span>
                {isActive && (
                  <span className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-full" />
                )}
              </Link>
            );
          })}
        </div>
        
        <div className="mt-auto p-6 border-t">
          <div 
            className={cn(
              "text-sm text-muted-foreground text-center transition-all duration-500",
              isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            <p>© {new Date().getFullYear()} Tom Lai</p>
            <p className="mt-1">AI Engineer & Developer</p>
          </div>
        </div>
      </div>
    </header>
  );
}
