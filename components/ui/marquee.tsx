import { cn } from '@/lib/utils';
import { ComponentPropsWithoutRef } from 'react';

interface MarqueeProps extends ComponentPropsWithoutRef<'div'> {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
}

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}: MarqueeProps) {
  return (
    <div
      {...props}
      className={cn(
        'marquee group',
        vertical && 'marquee--vertical',
        reverse && 'marquee--reverse',
        pauseOnHover && 'marquee--pause',
        className
      )}
    >
      {Array.from({ length: repeat }).map((_, i) => (
        <div key={i} className="marquee__group">
          {children}
        </div>
      ))}
    </div>
  );
}
