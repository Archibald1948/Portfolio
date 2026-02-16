'use client';

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    bg: '#141414',
    cardBg: '#1C1C1C',
    text: '#FAFAFA',
    textMuted: '#A1A1AA',
    verifiedBadge: '#3B82F6',
  },
  dark: {
    bg: '#141414',
    cardBg: '#1C1C1C',
    text: '#FAFAFA',
    textMuted: '#A1A1AA',
    verifiedBadge: '#3B82F6',
  },
} as const;

const SECTIONS = {
  community: {
    title: '🌍 Community',
    subtitle: 'Active member & organizer',
    items: [
      { title: 'GDG', period: '2024.03 ~ 2025.09', badge: null },
      { title: '카카오 유니브', period: '2024.06 ~ 2024.12', badge: null },
      { title: '카카오 유니브', period: '2025.02 ~ 2025.12', badge: '운영진' },
      { title: '멋쟁이사자처럼', period: '2025.03 ~ 2025.12', badge: null },
      { title: '멋쟁이사자처럼', period: '2026.01 ~', badge: '운영진' },
    ],
  },
  product: {
    title: '🚀 Product',
    subtitle: 'Products built',
    items: [
      {
        title: 'ShortsGen',
        period: 'Active',
        badge: null,
        link: 'https://shorts-demodev.vercel.app',
      },
    ],
  },
  project: {
    title: '💻 Projects',
    subtitle: 'Hackathons & Team Projects',
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
    ],
  },
};

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import { AuroraText } from '@/components/ui/aurora-text';

interface ImonialProps {
  mode?: 'light' | 'dark';
}

interface ActivityItem {
  title: string;
  period: string;
  badge: string | null;
  link?: string;
}

export default function Imonial({ mode = 'dark' }: ImonialProps) {
  const colors = COLORS[mode];

  const renderCard = (item: ActivityItem, index: number) => {
    const CardContent = (
      <div
        className="rounded-lg p-3 sm:p-4 transition-all hover:scale-[1.02]"
        style={{ backgroundColor: colors.cardBg }}
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div className="flex items-center gap-2 flex-wrap">
            <h4
              className="font-mono text-xs sm:text-sm font-medium truncate max-w-[150px] sm:max-w-none"
              style={{ color: colors.text }}
            >
              {item.title}
            </h4>
            {item.badge && (
              <span
                className="rounded-full px-2 py-0.5 font-mono text-[10px] sm:text-xs whitespace-nowrap"
                style={{
                  backgroundColor: colors.verifiedBadge,
                  color: '#FFFFFF',
                }}
              >
                {item.badge}
              </span>
            )}
          </div>
          <div className="flex items-center gap-2">
            <span
              className="font-mono text-[10px] sm:text-xs whitespace-nowrap"
              style={{ color: colors.textMuted }}
            >
              {item.period}
            </span>
            {item.link && (
              <ExternalLink
                className="h-3 w-3 sm:h-3.5 sm:w-3.5 shrink-0"
                style={{ color: colors.verifiedBadge }}
              />
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
    <section className="w-full py-16" style={{ backgroundColor: colors.bg }}>
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Title */}
        <h2
          className="mb-12 text-center font-mono text-2xl font-medium"
          style={{ color: colors.text }}
        >
          <AuroraText>Activities</AuroraText> & Projects
        </h2>

        {/* Three Column Layout */}
        <div className="grid gap-8 md:grid-cols-3">
          {/* Community Section */}
          <div>
            <div className="mb-4">
              <h3
                className="font-tossface text-lg font-bold"
                style={{ color: colors.text }}
              >
                {SECTIONS.community.title}
              </h3>
              <p
                className="font-mono text-xs"
                style={{ color: colors.textMuted }}
              >
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
              <h3
                className="font-tossface text-lg font-bold"
                style={{ color: colors.text }}
              >
                {SECTIONS.product.title}
              </h3>
              <p
                className="font-mono text-xs"
                style={{ color: colors.textMuted }}
              >
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
              <h3
                className="font-tossface text-lg font-bold"
                style={{ color: colors.text }}
              >
                {SECTIONS.project.title}
              </h3>
              <p
                className="font-mono text-xs"
                style={{ color: colors.textMuted }}
              >
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
