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
  badge: 'TIL',
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
import { ArrowRight } from 'lucide-react';
import { DockDemo } from './DockDemo';
import { Highlighter } from '@/components/ui/highlighter';
import { VideoText } from '@/components/ui/video-text';

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
            href="https://github.com/kss2002/TIL"
            className="inline-flex items-center gap-2 font-mono text-sm transition-colors hover:opacity-80"
            style={{ color: colors.textMuted }}
          >
            {CONTENT.badge}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* ASCII Art Title */}
        <div className="mb-8 flex justify-center overflow-hidden px-2">
          <pre
            className="font-mono text-[8px] leading-tight xs:text-[10px] sm:text-sm md:text-base text-center whitespace-pre scale-[0.85] sm:scale-100 origin-center"
            style={{ color: colors.text }}
          >
            {`░█▀▄░█▀▀░█░█░█▀▀░█░░░█▀█░█▀█░█▀▀░█▀▄
░█░█░█▀▀░▀▄▀░█▀▀░█░░░█░█░█▀▀░█▀▀░█▀▄
░▀▀░░▀▀▀░░▀░░▀▀▀░▀▀▀░▀▀▀░▀░░░▀▀▀░▀░▀`}
          </pre>
        </div>

        {/* Subtitle – mobile (no highlight) */}
        <h1
          className="mb-4 text-center font-mono text-2xl font-medium md:hidden"
          style={{ color: colors.text }}
        >
          {CONTENT.subtitle}
        </h1>

        {/* Subtitle – md+ (with highlight) */}
        <h1
          className="mb-4 hidden text-center font-mono text-3xl font-medium md:block"
          style={{ color: colors.text }}
        >
          <Highlighter action="underline" color="#d19b75">
            {CONTENT.subtitle}
          </Highlighter>
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
          <DockDemo />
        </div>

        {/* Tech Stack */}
        <div className="relative text-center overflow-hidden">
          <h3
            className="relative mb-6 font-mono text-base md:text-lg font-medium h-12 md:h-16"
            style={{ color: colors.text }}
          >
            <VideoText
              src="https://cdn.magicui.design/ocean-small.webm"
              fontSize="4vw"
            >
              Main Tech
            </VideoText>
          </h3>
          <div className="mb-8 flex justify-center overflow-x-auto px-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://skillicons.dev/icons?i=react,nextjs,js,ts,nodejs,md,ruby,rails,html,css"
              alt="Main Tech Stack"
              className="h-10 sm:h-12 md:h-16 max-w-full object-contain"
            />
          </div>
          <h3
            className="mb-6 font-mono text-base md:text-lg font-medium"
            style={{ color: colors.text }}
          >
            Tools & Sub Tech
          </h3>
          <div className="flex flex-col items-center gap-3 sm:gap-4 overflow-x-auto px-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://skillicons.dev/icons?i=git,github,bash,figma,notion,vite,webpack,vercel,netlify,tailwind,emotion,scss"
              alt="Tools"
              className="h-8 sm:h-10 md:h-12 max-w-full object-contain"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://skillicons.dev/icons?i=py,npm,yarn,pnpm,supabase,vscode,idea,pycharm,eclipse"
              alt="Sub Tech"
              className="h-8 sm:h-10 md:h-12 max-w-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
