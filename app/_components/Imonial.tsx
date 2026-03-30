'use client';

const SECTIONS = {
  community: {
    title: '🌍 커뮤니티',
    subtitle: '활발한 멤버 및 운영진 활동',
    items: [
      { title: 'GDGoC', period: '2024.03 ~ 2025.09', badge: null },
      { title: '카카오 유니브', period: '2024.06 ~ 2024.12', badge: null },
      { title: '카카오 유니브', period: '2025.02 ~ 2025.12', badge: '운영진' },
      { title: '멋쟁이사자처럼', period: '2025.03 ~ 2025.12', badge: null },
      { title: '멋쟁이사자처럼', period: '2026.01 ~', badge: '운영진' },
    ],
  },
  product: {
    title: '🚀 프로덕트',
    subtitle: '직접 만든 서비스',
    items: [
      {
        title: 'ShortsGen',
        period: '진행 중',
        badge: '대모산 개발단',
        link: 'https://shorts-demodev.vercel.app',
      },
      {
        title: 'Pomodoro',
        period: '2025.12 ~ 2026.01',
        badge: '개인 프로젝트',
        link: 'https://github.com/kss2002/pomodoro',
      },
      {
        title: 'Samsika',
        period: '2024.10 ~ 2025.12',
        badge: '아이디어톤',
        link: 'https://github.com/kss2002/ThreeSix',
      },
    ],
  },
  project: {
    title: '💻 프로젝트',
    subtitle: '해커톤 및 팀 프로젝트',
    items: [
      {
        title: '카카오 단풍톤',
        period: '2024.11.01 ~ 12.10',
        badge: '팀장',
        link: 'https://github.com/kss2002/2024_DANPOONG_TEAM_60_FE',
      },
      {
        title: '멋쟁이사자처럼 해커톤',
        period: '2025.07.22 ~ 08.26',
        badge: null,
        link: 'https://github.com/kss2002/domo-fe',
      },
      {
        title: '카카오 시즌톤',
        period: '2025.08.18 ~ 09.07',
        badge: null,
        link: 'https://github.com/kss2002/2025_SEASONTHON_TEAM_63_FE',
      },
      {
        title: 'XRPL 해커톤',
        period: '2025.09.14 ~ 09.20',
        badge: null,
        link: 'https://github.com/kss2002/roasis-front',
      },
      {
        title: '멋쟁이사자처럼 간지톤',
        period: '2025.11.01 ~ 11.22',
        badge: '팀장',
        link: 'https://github.com/kss2002/SCamp',
      },
      {
        title: 'GDG onewave 해거톤',
        period: '2026.02.06 ~ 02.07',
        badge: null,
        link: 'https://github.com/jihongeek/onewave-t17-fe',
      },
    ],
  },
};

import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import { AuroraText } from '@/components/ui/aurora-text';

interface ActivityItem {
  title: string;
  period: string;
  badge: string | null;
  link?: string;
}

export default function Imonial() {
  const renderCard = (item: ActivityItem, index: number) => {
    const CardContent = (
      <div className="rounded-lg p-3 sm:p-4 bg-card border border-border transition-all hover:scale-[1.02]">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div className="flex items-center gap-2 flex-wrap">
            <h4 className="font-mono text-xs sm:text-sm font-medium truncate max-w-[150px] sm:max-w-none text-foreground">
              {item.title}
            </h4>
            {item.badge && (
              <span className="rounded-full px-2 py-0.5 font-mono text-[10px] sm:text-xs whitespace-nowrap bg-blue-500 text-white">
                {item.badge}
              </span>
            )}
          </div>
          <div className="flex items-center gap-2">
            <span className="font-mono text-[10px] sm:text-xs whitespace-nowrap text-muted-foreground">
              {item.period}
            </span>
            {item.link && (
              <ExternalLink className="h-3 w-3 sm:h-3.5 sm:w-3.5 shrink-0 text-blue-500" />
            )}
          </div>
        </div>
      </div>
    );

    return item.link ? (
      <Link key={index} href={item.link} className="block">
        {CardContent}
      </Link>
    ) : (
      <div key={index}>{CardContent}</div>
    );
  };

  return (
    <section className="w-full py-16 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Title */}
        <h2 className="mb-12 text-center font-mono text-2xl font-medium text-foreground">
          <AuroraText>활동</AuroraText> 및 프로젝트
        </h2>

        {/* Three Column Layout */}
        <div className="grid gap-8 md:grid-cols-3">
          {/* Community Section */}
          <div>
            <div className="mb-4">
              <h3 className="font-tossface text-lg font-bold text-foreground">
                {SECTIONS.community.title}
              </h3>
              <p className="font-mono text-xs text-muted-foreground">
                {SECTIONS.community.subtitle}
              </p>
            </div>
            <div className="space-y-3">
              {SECTIONS.community.items.map((item, index) =>
                renderCard(item, index),
              )}
            </div>
          </div>

          {/* Product Section */}
          <div>
            <div className="mb-4">
              <h3 className="font-tossface text-lg font-bold text-foreground">
                {SECTIONS.product.title}
              </h3>
              <p className="font-mono text-xs text-muted-foreground">
                {SECTIONS.product.subtitle}
              </p>
            </div>
            <div className="space-y-3">
              {SECTIONS.product.items.map((item, index) =>
                renderCard(item, index),
              )}
            </div>
          </div>

          {/* Project Section */}
          <div>
            <div className="mb-4">
              <h3 className="font-tossface text-lg font-bold text-foreground">
                {SECTIONS.project.title}
              </h3>
              <p className="font-mono text-xs text-muted-foreground">
                {SECTIONS.project.subtitle}
              </p>
            </div>
            <div className="space-y-3">
              {SECTIONS.project.items.map((item, index) =>
                renderCard(item, index),
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
