'use client';

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const CONTENT = {
  copyright: '2026 Kim Seong Su',
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
import { Copyright } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full border-t-2 border-border py-12 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-end gap-4">
          {/* Links */}
          <nav className="flex flex-col md:flex-row items-end gap-2">
            {CONTENT.links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="font-mono text-sm text-muted-foreground transition-colors hover:opacity-80"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          {/* Copyright */}
          <div className="flex items-center gap-2">
            <p className="font-mono text-sm text-muted-foreground">
              {CONTENT.copyright}
            </p>
            <Copyright className="h-4 w-4 text-foreground" />
          </div>
        </div>
      </div>
    </footer>
  );
}
