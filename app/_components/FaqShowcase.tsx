'use client';

import Image from 'next/image';

import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from '@/components/ui/terminal';

export default function FaqShowcase() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-10">
      <div className="grid gap-6 lg:grid-cols-[0.90fr_1.05fr] lg:items-stretch">
        <a
          href="https://www.gitanimals.org/en_US?utm_medium=image&utm_source=kss2002&utm_content=farm"
          className="bg-emerald-700 group flex min-h-70 items-center justify-center rounded-2xl shadow-xl shadow-black/20 dark:shadow-white/20 p-4 transition-colors duration-300"
          aria-label="깃 애니멀 농장 보기"
        >
          <div className="relative flex w-full max-w-140 overflow-hidden rounded-xl">
            <Image
              src="https://render.gitanimals.org/farms/kss2002"
              alt="깃 애니멀 농장"
              width={1200}
              height={720}
              className="h-auto w-full object-contain"
              unoptimized
            />
          </div>
        </a>

        <div className="rounded-2xl border-2 border-border/60 shadow-xl shadow-black/20 dark:shadow-white/20 lg:border-l-0">
          <Terminal className="h-full max-w-none rounded-none border-0 bg-transparent">
            <TypingAnimation>&gt; who am i</TypingAnimation>

            <AnimatedSpan className="text-green-400">
              ✔ React, Next.js, TypeScript, Node.js
            </AnimatedSpan>

            <AnimatedSpan className="text-green-400">
              ✔ OSS contributions: Toss, DevFive
            </AnimatedSpan>

            <AnimatedSpan className="text-green-400">
              ✔ Community: GDG, Kakao Univ, Like Lions
            </AnimatedSpan>

            <AnimatedSpan className="text-blue-400">
              <span>ℹ Contact:</span>
              <span className="pl-2">know.warehouse02@gmail.com</span>
            </AnimatedSpan>

            <TypingAnimation className="text-muted-foreground">
              &gt; pnpm install
            </TypingAnimation>

            <TypingAnimation className="text-muted-foreground">
              &gt; pnpm dev
            </TypingAnimation>
          </Terminal>
        </div>
      </div>
    </div>
  );
}
