'use client';

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    bg: '#141414',
    text: '#FAFAFA',
    textMuted: '#A1A1AA',
    buttonBg: '#FAFAFA',
    buttonText: '#141414',
  },
  dark: {
    bg: '#141414',
    text: '#FAFAFA',
    textMuted: '#A1A1AA',
    buttonBg: '#FAFAFA',
    buttonText: '#141414',
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface HeaderProps {
  mode?: 'light' | 'dark';
}

export default function Header({ mode = 'dark' }: HeaderProps) {
  const colors = COLORS[mode];
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300"
      style={{ backgroundColor: colors.bg }}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo with scroll animation - shrinking effect */}
        <Link href="/" className="flex items-center">
          <div className="flex font-mono text-xs leading-tight sm:text-sm md:text-base">
            {/* k - always visible */}
            <span style={{ color: colors.text }}>k</span>

            {/* im - fades and collapses on scroll */}
            <span
              className="inline-block overflow-hidden transition-all duration-500 ease-out"
              style={{
                color: colors.text,
                maxWidth: isScrolled ? '0px' : '2ch',
                opacity: isScrolled ? 0 : 1,
              }}
            >
              im
            </span>

            {/* s - always visible */}
            <span style={{ color: colors.text }}>s</span>

            {/* eong - fades and collapses on scroll */}
            <span
              className="inline-block overflow-hidden transition-all duration-500 ease-out"
              style={{
                color: colors.text,
                maxWidth: isScrolled ? '0px' : '4ch',
                opacity: isScrolled ? 0 : 1,
              }}
            >
              eong
            </span>

            {/* s - always visible */}
            <span style={{ color: colors.text }}>s</span>

            {/* u - fades and collapses on scroll */}
            <span
              className="inline-block overflow-hidden transition-all duration-500 ease-out"
              style={{
                color: colors.text,
                maxWidth: isScrolled ? '0px' : '1ch',
                opacity: isScrolled ? 0 : 1,
              }}
            >
              u
            </span>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-8">
          <Link
            href="https://codingworld2002.tistory.com"
            className="font-mono text-sm text-[#FAFAFA] transition-colors hover:text-[#d19b75]"
            target="_blank"
          >
            Blog
          </Link>
          <Link
            href="https://github.com/kss2002"
            className="font-mono text-sm text-[#FAFAFA] transition-colors hover:text-[#d19b75]"
            target="_blank"
          >
            GitHub
          </Link>
          <Link
            href="https://www.anthropic.com/"
            target="_blank"
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
      </div>
    </header>
  );
}
