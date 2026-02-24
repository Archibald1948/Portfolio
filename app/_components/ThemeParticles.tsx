'use client';

import { useEffect, useState } from 'react';
import { Particles } from '@/components/ui/particles';

export default function ThemeParticles() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const update = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };

    update();

    const observer = new MutationObserver(update);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <Particles
      className="fixed inset-0 z-50 pointer-events-none opacity-50"
      quantity={40}
      staticity={60}
      ease={50}
      size={0.4}
      refresh={false}
      color={isDark ? '#ffffff' : '#000000'}
      vx={0}
      vy={0}
    />
  );
}
