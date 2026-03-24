const AI_LINKS = [
  { label: 'Claude', href: 'https://claude.com/product/claude-code' },
  { label: 'Codex', href: 'https://openai.com/ko-KR/codex/' },
  { label: 'Antigravity', href: 'https://antigravity.google/' },
  { label: 'Gemini', href: 'https://geminicli.com/' },
] as const;

import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { HyperText } from '@/components/ui/hyper-text';

export function Dropdown() {
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <button className="cursor-pointer">
          <HyperText className="font-mono text-sm text-foreground transition-colors hover:text-[#d19b75]">
            AI
          </HyperText>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {AI_LINKS.map((item) => (
          <DropdownMenuItem key={item.href}>
            <Link href={item.href}>{item.label}</Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
