'use client';

import Link from 'next/link';
import { Home } from 'lucide-react';

const COLORS = {
  bg: '#141414',
  text: '#FAFAFA',
  textMuted: '#A1A1AA',
  buttonPrimaryBg: '#FAFAFA',
  buttonPrimaryText: '#141414',
  buttonSecondaryBorder: '#3F3F46',
};

export default function NotFound() {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-center px-6"
      style={{ backgroundColor: COLORS.bg }}
    >
      {/* ASCII Art 404 */}
      <pre
        className="mb-8 text-center font-mono text-xs leading-tight sm:text-sm md:text-base"
        style={{ color: COLORS.text }}
      >
        {`
░█░█░█▀█░█░█
░░▀█░█░█░░▀█
░░░▀░▀▀▀░░░▀
`}
      </pre>

      {/* Title */}
      <h1
        className="mb-4 text-center font-mono text-3xl font-bold md:text-5xl"
        style={{ color: COLORS.text }}
      >
        Page Not Found
      </h1>

      {/* Description */}
      <p
        className="mb-8 max-w-md text-center font-mono text-sm md:text-base"
        style={{ color: COLORS.textMuted }}
      >
        Oops! <br />
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>

      {/* Buttons */}
      <div className="flex flex-col items-center gap-4 sm:flex-row">
        <Link
          href="/"
          className="flex items-center gap-2 rounded-md px-6 py-3 font-mono text-sm transition-colors hover:opacity-90"
          style={{
            backgroundColor: COLORS.buttonPrimaryBg,
            color: COLORS.buttonPrimaryText,
          }}
        >
          <Home className="h-4 w-4" />
          Go Home
        </Link>
      </div>
    </main>
  );
}
