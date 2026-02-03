'use client';

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    bg: '#141414',
    text: '#FAFAFA',
    textMuted: '#A1A1AA',
    buttonPrimaryBg: '#FAFAFA',
    buttonPrimaryText: '#141414',
    buttonSecondaryBg: 'transparent',
    buttonSecondaryText: '#FAFAFA',
    buttonSecondaryBorder: '#3F3F46',
  },
  dark: {
    bg: '#141414',
    text: '#FAFAFA',
    textMuted: '#A1A1AA',
    buttonPrimaryBg: '#FAFAFA',
    buttonPrimaryText: '#141414',
    buttonSecondaryBg: 'transparent',
    buttonSecondaryText: '#FAFAFA',
    buttonSecondaryBorder: '#3F3F46',
  },
} as const;

const CONTENT = {
  badge: 'Open Source Contributor',
  title: 'KIM SEONG SU',
  subtitle: "Hello. I'm thinking about a good code.",
  description:
    'Frontend Developer passionate about React, Next.js, and Open Source. Active contributor to Toss and DevFive projects. Building products and participating in hackathons.',
  primaryCta: 'View GitHub',
  secondaryCta: 'Contact Me',
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import Link from 'next/link';
import { Github, Mail, ArrowRight } from 'lucide-react';

interface HeroProps {
  mode?: 'light' | 'dark';
}

export default function Hero({ mode = 'dark' }: HeroProps) {
  const colors = COLORS[mode];

  return (
    <section
      className="relative w-full pt-24 pb-16"
      style={{ backgroundColor: colors.bg }}
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Version Badge */}
        <div className="mb-8 flex justify-center">
          <Link
            href="/changelog"
            className="inline-flex items-center gap-2 font-mono text-sm transition-colors hover:opacity-80"
            style={{ color: colors.textMuted }}
          >
            {CONTENT.badge}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* ASCII Art Title */}
        <div className="mb-8 flex justify-center">
          <pre
            className="font-mono text-xs leading-tight sm:text-sm md:text-base text-center"
            style={{ color: colors.text }}
          >
            {`░█▀▄░█▀▀░█░█░█▀▀░█░░░█▀█░█▀█░█▀▀░█▀▄
░█░█░█▀▀░▀▄▀░█▀▀░█░░░█░█░█▀▀░█▀▀░█▀▄
░▀▀░░▀▀▀░░▀░░▀▀▀░▀▀▀░▀▀▀░▀░░░▀▀▀░▀░▀`}
          </pre>
        </div>

        {/* Subtitle */}
        <h1
          className="mb-4 text-center font-mono text-2xl font-medium md:text-3xl"
          style={{ color: colors.text }}
        >
          {CONTENT.subtitle}
        </h1>

        {/* Description */}
        <p
          className="mx-auto mb-8 max-w-2xl text-center font-mono text-sm leading-relaxed md:text-base"
          style={{ color: colors.textMuted }}
        >
          {CONTENT.description}
        </p>

        {/* CTA Buttons */}
        <div className="mb-16 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="https://github.com/kss2002"
            target="_blank"
            className="flex items-center gap-2 rounded-md px-6 py-3 font-mono text-sm transition-colors hover:opacity-90"
            style={{
              backgroundColor: colors.buttonPrimaryBg,
              color: colors.buttonPrimaryText,
            }}
          >
            {CONTENT.primaryCta}
            <Github className="h-4 w-4" />
          </Link>
          <Link
            href="mailto:know.warehouse02@gmail.com"
            className="flex items-center gap-2 rounded-md border px-6 py-3 font-mono text-sm transition-colors hover:opacity-80"
            style={{
              backgroundColor: colors.buttonSecondaryBg,
              color: colors.buttonSecondaryText,
              borderColor: colors.buttonSecondaryBorder,
            }}
          >
            {CONTENT.secondaryCta}
            <Mail className="h-4 w-4" />
          </Link>
        </div>

        {/* Tech Stack */}
        <div className="text-center">
          <h3
            className="mb-6 font-mono text-lg font-medium"
            style={{ color: colors.text }}
          >
            Main Tech
          </h3>
          <div className="mb-8 flex justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://skillicons.dev/icons?i=react,nextjs,js,ts,nodejs,md,ruby,rails,html,css"
              alt="Main Tech Stack"
              className="h-16"
            />
          </div>
          <h3
            className="mb-6 font-mono text-lg font-medium"
            style={{ color: colors.text }}
          >
            Tools & Sub Tech
          </h3>
          <div className="flex flex-col items-center gap-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://skillicons.dev/icons?i=git,github,bash,figma,notion,vite,webpack,vercel,netlify,tailwind,emotion,scss"
              alt="Tools"
              className="h-12"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://skillicons.dev/icons?i=py,npm,yarn,pnpm,supabase,vscode,idea,pycharm,eclipse"
              alt="Sub Tech"
              className="h-12"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
