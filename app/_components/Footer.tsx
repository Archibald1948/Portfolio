'use client';

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    bg: '#141414',
    text: '#FAFAFA',
    textMuted: '#71717A',
  },
  dark: {
    bg: '#141414',
    text: '#FAFAFA',
    textMuted: '#FAFAFA',
  },
} as const;

const CONTENT = {
  copyright: '© 2025 Kim Seong Su',
  links: [
    { label: 'Gist', href: 'https://gist.github.com/kss2002' },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/seong-su-kim-5b606338a',
    },
    { label: 'Gmail', href: 'mailto:know.warehouse02@gmail.com' },
    { label: 'Naver', href: 'mailto:sc00310@naver.com' },
  ],
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import Link from 'next/link';

interface FooterProps {
  mode?: 'light' | 'dark';
}

export default function Footer({ mode = 'dark' }: FooterProps) {
  const colors = COLORS[mode];

  return (
    <footer
      className="w-full border-t-2 border-gray-800 py-12"
      style={{ backgroundColor: colors.bg }}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-end gap-4">
          {/* Links */}
          <nav className="flex flex-col md:flex-row items-end gap-2">
            {CONTENT.links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="font-mono text-sm transition-colors hover:opacity-80"
                style={{ color: colors.textMuted }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          {/* Copyright */}
          <p className="font-mono text-sm" style={{ color: colors.textMuted }}>
            {CONTENT.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
