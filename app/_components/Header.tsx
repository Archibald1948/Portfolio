'use client';

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const LINKS = {
  blog: 'https://codingworld2002.tistory.com',
  github: 'https://github.com/kss2002',
  claude: 'https://claude.com/product/claude-code',
} as const;

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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 border-b-2 border-double border-[#d19b75]"
      style={{
        backgroundColor: isMobileMenuOpen ? '#FAFAFA' : colors.bg,
      }}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center">
          <div className="flex font-mono text-xs leading-tight sm:text-sm md:text-base">
            <span style={{ color: isMobileMenuOpen ? '#141414' : colors.text }}>
              k
            </span>
            <span
              className="inline-block overflow-hidden transition-all duration-500 ease-out"
              style={{
                color: isMobileMenuOpen ? '#141414' : colors.text,
                maxWidth: isScrolled ? '0px' : '2ch',
                opacity: isScrolled ? 0 : 1,
              }}
            >
              im
            </span>
            <span style={{ color: isMobileMenuOpen ? '#141414' : colors.text }}>
              s
            </span>
            <span
              className="inline-block overflow-hidden transition-all duration-500 ease-out"
              style={{
                color: isMobileMenuOpen ? '#141414' : colors.text,
                maxWidth: isScrolled ? '0px' : '4ch',
                opacity: isScrolled ? 0 : 1,
              }}
            >
              eong
            </span>
            <span style={{ color: isMobileMenuOpen ? '#141414' : colors.text }}>
              s
            </span>
            <span
              className="inline-block overflow-hidden transition-all duration-500 ease-out"
              style={{
                color: isMobileMenuOpen ? '#141414' : colors.text,
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
          <Link
            href={LINKS.blog}
            className="font-mono text-sm text-[#FAFAFA] transition-colors hover:text-[#d19b75]"
          >
            Blog
          </Link>
          <Link
            href={LINKS.github}
            className="font-mono text-sm text-[#FAFAFA] transition-colors hover:text-[#d19b75]"
          >
            GitHub
          </Link>
          <Link
            href={LINKS.claude}
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
              backgroundColor: isMobileMenuOpen ? '#141414' : '#FAFAFA',
              transform: isMobileMenuOpen
                ? 'rotate(45deg)'
                : 'translateY(-4px)',
            }}
          />
          <span
            className="absolute block w-4 h-[2px] transition-all duration-300 ease-out"
            style={{
              backgroundColor: isMobileMenuOpen ? '#141414' : '#FAFAFA',
              opacity: isMobileMenuOpen ? 0 : 1,
            }}
          />
          <span
            className="absolute block w-4 h-[2px] transition-all duration-300 ease-out"
            style={{
              backgroundColor: isMobileMenuOpen ? '#141414' : '#FAFAFA',
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
          backgroundColor: '#FAFAFA',
        }}
      >
        <nav className="flex flex-col items-end px-6 pb-6 gap-4">
          <Link
            href={LINKS.blog}
            className="font-mono text-sm text-[#141414] transition-colors hover:text-[#d19b75] py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Blog
          </Link>
          <Link
            href={LINKS.github}
            className="font-mono text-sm text-[#141414] transition-colors hover:text-[#d19b75] py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            GitHub
          </Link>
          <Link
            href={LINKS.claude}
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
        </nav>
      </div>
    </header>
  );
}
