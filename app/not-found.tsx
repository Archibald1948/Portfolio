import Link from 'next/link';
import { Metadata } from 'next';
import { Home } from 'lucide-react';
import { HyperText } from '@/components/ui/hyper-text';

export const metadata: Metadata = {
  title: '404 - 페이지를 찾을 수 없습니다',
  description: '요청하신 페이지가 존재하지 않습니다.',
};

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
        <HyperText>페이지를 찾을 수 없습니다</HyperText>
      </h1>

      {/* Description */}
      <p className="mb-8 max-w-md text-center font-mono text-sm md:text-base text-muted-foreground">
        앗! <br />
        찾으시는 페이지가 없거나 이동되었습니다.
      </p>

      {/* Buttons */}
      <div className="flex flex-col items-center gap-4 sm:flex-row">
        <Link
          href="/"
          className="flex items-center gap-2 rounded-md px-6 py-3 font-mono text-sm transition-colors hover:opacity-90 bg-foreground text-background"
        >
          <Home className="h-4 w-4" />
          홈으로 가기
        </Link>
      </div>
    </main>
  );
}
