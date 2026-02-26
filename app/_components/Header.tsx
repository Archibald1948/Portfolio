'use client';

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const NAV_LINKS = [
  { label: 'Blog', href: 'https://codingworld2002.tistory.com' },
  { label: 'GitHub', href: 'https://github.com/kss2002' },
  { label: 'Tailwind', href: 'https://tailwindcss.com/' },
  { label: 'MagicUI', href: 'https://magicui.design' },
] as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AnimatedThemeToggler } from '@/components/ui/animated-theme-toggler';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 border-b-2 border-double border-[#d19b75] bg-background">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center">
          <div className="flex font-mono text-xs leading-tight sm:text-sm md:text-base">
            <span className="text-foreground">k</span>
            <span
              className="inline-block overflow-hidden transition-all duration-500 ease-out text-foreground"
              style={{
                maxWidth: isScrolled ? '0px' : '2ch',
                opacity: isScrolled ? 0 : 1,
              }}
            >
              im
            </span>
            <span className="text-foreground">s</span>
            <span
              className="inline-block overflow-hidden transition-all duration-500 ease-out text-foreground"
              style={{
                maxWidth: isScrolled ? '0px' : '4ch',
                opacity: isScrolled ? 0 : 1,
              }}
            >
              eong
            </span>
            <span className="text-foreground">s</span>
            <span
              className="inline-block overflow-hidden transition-all duration-500 ease-out text-foreground"
              style={{
                maxWidth: isScrolled ? '0px' : '1ch',
                opacity: isScrolled ? 0 : 1,
              }}
            >
              u
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <AnimatedThemeToggler className="text-foreground cursor-pointer hover:text-[#d19b75] transition-colors" />
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="font-mono text-sm text-foreground transition-colors hover:text-[#d19b75]"
            >
              {label}
            </Link>
          ))}
          <Link
            href="https://claude.com/product/claude-code"
            className="flex items-center gap-1 rounded-md px-2 py-2 font-mono text-sm transition-colors hover:opacity-80"
            style={{
              backgroundColor: '#d19b75',
              color: '#1A1A1A',
            }}
          >
            <Image
              src="/anthropic.png"
              alt="Anthropic"
              width={24}
              height={24}
              className="rounded-sm"
            />
            Claude
          </Link>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden flex justify-center items-center w-8 h-8 cursor-pointer relative"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className="absolute block w-4 h-[2px] transition-all duration-300 ease-out"
            style={{
              backgroundColor: 'var(--foreground)',
              transform: isMobileMenuOpen
                ? 'rotate(45deg)'
                : 'translateY(-4px)',
            }}
          />
          <span
            className="absolute block w-4 h-[2px] transition-all duration-300 ease-out"
            style={{
              backgroundColor: 'var(--foreground)',
              opacity: isMobileMenuOpen ? 0 : 1,
            }}
          />
          <span
            className="absolute block w-4 h-[2px] transition-all duration-300 ease-out"
            style={{
              backgroundColor: 'var(--foreground)',
              transform: isMobileMenuOpen
                ? 'rotate(-45deg)'
                : 'translateY(4px)',
            }}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300 ease-out"
        style={{
          maxHeight: isMobileMenuOpen ? '300px' : '0px',
          opacity: isMobileMenuOpen ? 1 : 0,
        }}
      >
        <nav className="flex flex-col items-end px-6 pb-6 gap-4 bg-background">
          <div className="flex items-end gap-4">
            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="font-mono text-sm text-foreground transition-colors hover:text-[#d19b75] py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <AnimatedThemeToggler className="text-foreground cursor-pointer hover:text-[#d19b75] transition-colors" />
            <Link
              href="https://claude.com/product/claude-code"
              className="flex items-center gap-1 rounded-md px-3 py-2 font-mono text-sm transition-colors hover:opacity-80"
              style={{
                backgroundColor: '#d19b75',
                color: '#1A1A1A',
              }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Image
                src="/anthropic.png"
                alt="Anthropic"
                width={24}
                height={24}
                className="rounded-sm"
              />
              Claude
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
