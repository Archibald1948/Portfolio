'use client';

const CONTENT = {
  badge: 'TIL',
  title: 'KIM SEONG SU',
  subtitle: '안녕하세요. 좋은 코드와 구조를 고민합니다.',
  description:
    'React, Next.js, 오픈소스를 좋아하는 개발자입니다. Toss와 DevFive 프로젝트에 꾸준히 기여하며, 제품을 만들고 해커톤에 참여하고 있습니다.',
  primaryCta: '깃허브 보기',
  secondaryCta: '연락하기',
} as const;

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { DockDemo } from './DockDemo';
import { Highlighter } from '@/components/ui/highlighter';
import { VideoText } from '@/components/ui/video-text';
import { Marquee } from '@/components/ui/marquee';

const MAIN_TECHS = [
  'react',
  'nextjs',
  'js',
  'ts',
  'nodejs',
  'md',
  'ruby',
  'rails',
  'html',
  'css',
] as const;

const SUB_TECHS_A = [
  'git',
  'github',
  'bash',
  'figma',
  'notion',
  'vite',
  'webpack',
  'vercel',
  'netlify',
  'tailwind',
  'emotion',
  'scss',
] as const;

const SUB_TECHS_B = [
  'py',
  'npm',
  'yarn',
  'pnpm',
  'supabase',
  'vscode',
  'idea',
  'pycharm',
  'eclipse',
] as const;

function TechIcon({ slug, className }: { slug: string; className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`https://skillicons.dev/icons?i=${slug}`}
      alt={slug}
      className={className}
    />
  );
}

export default function Hero() {
  return (
    <section className="relative w-full pt-24 pb-16 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        {/* Version Badge */}
        <div className="mb-8 flex justify-center">
          <Link
            href="https://github.com/Archibald1948/TIL"
            className="inline-flex items-center gap-2 font-mono text-sm text-muted-foreground transition-colors hover:opacity-80"
          >
            {CONTENT.badge}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* ASCII Art Title */}
        <div className="mb-8 flex justify-center overflow-hidden px-2">
          <pre className="font-mono text-[8px] leading-tight xs:text-[10px] sm:text-sm md:text-base text-center whitespace-pre scale-[0.85] sm:scale-100 origin-center text-foreground">
            {`░█▀▄░█▀▀░█░█░█▀▀░█░░░█▀█░█▀█░█▀▀░█▀▄
░█░█░█▀▀░▀▄▀░█▀▀░█░░░█░█░█▀▀░█▀▀░█▀▄
░▀▀░░▀▀▀░░▀░░▀▀▀░▀▀▀░▀▀▀░▀░░░▀▀▀░▀░▀`}
          </pre>
        </div>

        {/* Subtitle – mobile (no highlight) */}
        <h1 className="mb-4 text-center font-mono text-2xl font-medium md:hidden text-foreground">
          {CONTENT.subtitle}
        </h1>

        {/* Subtitle – md+ (with highlight) */}
        <h1 className="mb-4 hidden text-center font-mono text-3xl font-medium md:block text-foreground">
          <Highlighter action="underline" color="#d19b75">
            {CONTENT.subtitle}
          </Highlighter>
        </h1>

        {/* Description */}
        <p className="mx-auto mb-8 max-w-2xl text-center font-mono text-sm leading-relaxed md:text-base text-muted-foreground">
          {CONTENT.description}
        </p>

        {/* CTA Buttons */}
        <div className="mb-16 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <DockDemo />
        </div>

        {/* Tech Stack */}
        <div className="relative text-center overflow-hidden">
          <h3 className="relative mb-6 font-mono text-base md:text-lg font-medium h-12 md:h-16 text-foreground">
            <VideoText
              src="https://cdn.magicui.design/ocean-small.webm"
              fontSize="4vw"
            >
              Main Techs
            </VideoText>
          </h3>
          <Marquee pauseOnHover className="mb-8 [--duration:25s]">
            {MAIN_TECHS.map((slug) => (
              <TechIcon
                key={slug}
                slug={slug}
                className="h-10 sm:h-12 md:h-16"
              />
            ))}
          </Marquee>
          <h3 className="mb-6 font-mono text-base md:text-lg font-medium text-foreground">
            Sub Techs
          </h3>
          <Marquee pauseOnHover className="[--duration:30s]">
            {SUB_TECHS_A.map((slug) => (
              <TechIcon
                key={slug}
                slug={slug}
                className="h-8 sm:h-10 md:h-12"
              />
            ))}
          </Marquee>
          <Marquee
            reverse
            pauseOnHover
            className="mt-3 sm:mt-4 [--duration:30s]"
          >
            {SUB_TECHS_B.map((slug) => (
              <TechIcon
                key={slug}
                slug={slug}
                className="h-8 sm:h-10 md:h-12"
              />
            ))}
          </Marquee>

          {/* 좌우 페이드 마스크 */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-linear-to-r from-background" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-linear-to-l from-background" />
        </div>
      </div>
    </section>
  );
}
