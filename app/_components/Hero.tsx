'use client';

const CONTENT = {
  badge: 'TIL',
  title: 'KIM SEONG SU',
  subtitle: '안녕하세요. 좋은 코드를 고민하는 김성수입니다.',
  description:
    'React, Next.js, 오픈소스를 좋아하는 프론트엔드 개발자입니다. Toss와 DevFive 프로젝트에 꾸준히 기여하며, 제품을 만들고 해커톤에 참여하고 있습니다.',
  primaryCta: '깃허브 보기',
  secondaryCta: '연락하기',
} as const;

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { DockDemo } from './DockDemo';
import { Highlighter } from '@/components/ui/highlighter';
import { VideoText } from '@/components/ui/video-text';

export default function Hero() {
  return (
    <section className="relative w-full pt-24 pb-16 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        {/* Version Badge */}
        <div className="mb-8 flex justify-center">
          <Link
            href="https://github.com/kss2002/TIL"
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
              주요 기술
            </VideoText>
          </h3>
          <div className="mb-8 flex justify-center overflow-x-auto px-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://skillicons.dev/icons?i=react,nextjs,js,ts,nodejs,md,ruby,rails,html,css"
              alt="주요 기술 스택"
              className="h-10 sm:h-12 md:h-16 max-w-full object-contain"
            />
          </div>
          <h3 className="mb-6 font-mono text-base md:text-lg font-medium text-foreground">
            도구 및 기타 기술
          </h3>
          <div className="flex flex-col items-center gap-3 sm:gap-4 overflow-x-auto px-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://skillicons.dev/icons?i=git,github,bash,figma,notion,vite,webpack,vercel,netlify,tailwind,emotion,scss"
              alt="도구"
              className="h-8 sm:h-10 md:h-12 max-w-full object-contain"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://skillicons.dev/icons?i=py,npm,yarn,pnpm,supabase,vscode,idea,pycharm,eclipse"
              alt="기타 기술"
              className="h-8 sm:h-10 md:h-12 max-w-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
