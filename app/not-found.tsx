'use client';

import Link from 'next/link';
import { Home } from 'lucide-react';
import { HyperText } from '@/components/ui/hyper-text';

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 bg-background">
      {/* ASCII Art 404 */}
      <pre className="mb-8 text-center font-mono text-xs leading-tight sm:text-sm md:text-base text-foreground">
        {`
░█░█░█▀█░█░█
░░▀█░█░█░░▀█
░░░▀░▀▀▀░░░▀
`}
      </pre>

      {/* Title */}
      <h1 className="mb-4 text-center font-mono text-3xl font-bold md:text-5xl text-foreground">
        <HyperText>Page Not Found</HyperText>
      </h1>

      {/* Description */}
      <p className="mb-8 max-w-md text-center font-mono text-sm md:text-base text-muted-foreground">
        Oops! <br />
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>

      {/* Buttons */}
      <div className="flex flex-col items-center gap-4 sm:flex-row">
        <Link
          href="/"
          className="flex items-center gap-2 rounded-md px-6 py-3 font-mono text-sm transition-colors hover:opacity-90 bg-foreground text-background"
        >
          <Home className="h-4 w-4" />
          Go Home
        </Link>
      </div>
    </main>
  );
}
