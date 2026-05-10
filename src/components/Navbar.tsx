'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone } from 'lucide-react';
import { clsx } from 'clsx';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activePath, setActivePath] = useState('/');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    setActivePath(window.location.pathname);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'glass-nav py-3 shadow-lg'
          : 'bg-transparent py-5'
      )}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between">
          {/* Logo - Highly Visible */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-12 h-12 bg-[#C8A97E] flex items-center justify-center shadow-lg">
                <span className="text-white font-outfit font-bold text-xl">S</span>
              </div>
            </div>
            <div className="hidden sm:block">
              <span className="font-outfit font-bold text-2xl text-white tracking-wide">
                SHAMS & SONS
              </span>
              <span className="font-outfit font-bold text-2xl text-[#C8A97E]"> CO.</span>
              <p className="text-xs text-[#D1D5DB] -mt-1 tracking-widest uppercase">Interior & Carpentry</p>
            </div>
          </Link>

          {/* Desktop Navigation - Premium Visible Tabs */}
          <div className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  'px-5 py-2.5 font-medium text-sm uppercase tracking-wider rounded-md transition-all duration-300 relative group',
                  activePath === link.href
                    ? 'bg-[#C8A97E] text-[#111827] shadow-md font-semibold'
                    : 'text-[#D6C2A3] hover:text-white hover:bg-white/5'
                )}
              >
                {link.label}
                {activePath !== link.href && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#C8A97E] transition-all duration-300 group-hover:w-full" />
                )}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <a
              href="tel:9819151908"
              className="flex items-center gap-2 bg-[#C8A97E] text-[#111827] px-6 py-3 font-semibold hover:bg-white transition-all duration-200 hover:shadow-lg text-sm tracking-wide"
            >
              <Phone className="w-4 h-4" />
              <span>Get Quote</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6 text-white" />
          </button>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-[#111827] z-50 lg:hidden animate-fadeIn">
          <div className="container-custom pt-24">
            <button
              className="absolute top-5 right-5 p-2 rounded-lg hover:bg-white/10 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            <nav className="flex flex-col gap-6">
              {navLinks.map((link, index) => (
                <div
                  key={link.href}
                  style={{ animationDelay: `${index * 0.05}s` }}
                  className="animate-slideIn"
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={clsx(
                      'text-2xl font-outfit font-semibold transition-colors',
                      activePath === link.href
                        ? 'text-[#C8A97E]'
                        : 'text-white hover:text-[#C8A97E]'
                    )}
                  >
                    {link.label}
                  </Link>
                </div>
              ))}

              <div className="pt-6 animate-fadeIn" style={{ animationDelay: '0.3s' }}>
                <a
                  href="tel:9819151908"
                  className="inline-flex items-center gap-2 bg-[#C8A97E] text-[#111827] px-8 py-4 font-semibold"
                >
                  <Phone className="w-5 h-5" />
                  <span>Get Free Quote</span>
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}