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

const ACTIVITIES = [
  {
    category: '🌍 Community',
    title: 'GDG',
    period: '2024.03 ~ 2025.09',
    badge: null,
  },
  {
    category: '🌍 Community',
    title: '카카오 유니브',
    period: '2024.06 ~ 2024.12',
    badge: null,
  },
  {
    category: '🌍 Community',
    title: '카카오 유니브',
    period: '2025.02 ~ 2025.12',
    badge: '운영진',
  },
  {
    category: '🌍 Community',
    title: '멋쟁이사자처럼',
    period: '2025.03 ~ 2025.12',
    badge: null,
  },
  {
    category: '🌍 Community',
    title: '멋쟁이사자처럼',
    period: '2026.01 ~',
    badge: '운영진',
  },
  {
    category: '🚀 Product',
    title: 'ShortsGen',
    period: 'Active',
    badge: null,
    link: 'https://shorts-demodev.vercel.app',
  },
  {
    category: '💻 Project',
    title: '카카오 단풍톤',
    period: '2024.11.01 ~ 12.10',
    badge: '팀장',
    link: 'https://github.com/kss2002/2024_DANPOONG_TEAM_60_FE',
  },
  {
    category: '💻 Project',
    title: '멋쟁이사자처럼 해커톤',
    period: '2025.07.22 ~ 08.26',
    badge: null,
    link: 'https://github.com/kss2002/domo-fe',
  },
  {
    category: '💻 Project',
    title: '카카오 시즌톤',
    period: '2025.08.18 ~ 09.07',
    badge: null,
    link: 'https://github.com/kss2002/2025_SEASONTHON_TEAM_63_FE',
  },
  {
    category: '💻 Project',
    title: 'XRPL 해커톤',
    period: '2025.09.14 ~ 09.20',
    badge: null,
    link: 'https://github.com/kss2002/roasis-front',
  },
  {
    category: '💻 Project',
    title: '멋쟁이사자처럼 간지톤',
    period: '2025.11.01 ~ 11.22',
    badge: '팀장',
    link: 'https://github.com/kss2002/SCamp',
  },
  {
    category: '🔓 Open Source',
    title: 'Toss Contributor',
    period: 'Active',
    badge: 'Contributor',
    link: 'https://github.com/toss/suspensive/pulls?q=kss2002',
  },
  {
    category: '🔓 Open Source',
    title: 'DevFive Contributor',
    period: 'Active',
    badge: 'Contributor',
    link: 'https://github.com/dev-five-git/devup-ui/graphs/contributors',
  },
];

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

interface ImonialProps {
  mode?: 'light' | 'dark';
}

export default function Imonial({ mode = 'dark' }: ImonialProps) {
  const colors = COLORS[mode];

  return (
    <section className="w-full py-16" style={{ backgroundColor: colors.bg }}>
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Title */}
        <h2
          className="mb-8 text-center font-mono text-2xl font-medium"
          style={{ color: colors.text }}
        >
          Activities & Projects
        </h2>
        {/* Masonry Grid */}
        <div className="columns-1 gap-4 md:columns-2 lg:columns-3">
          {ACTIVITIES.map((activity, index) => {
            const CardContent = (
              <div
                key={index}
                className="mb-4 break-inside-avoid rounded-lg p-6 transition-all hover:scale-[1.02]"
                style={{ backgroundColor: colors.cardBg }}
              >
                {/* Category */}
                <span
                  className="mb-2 inline-block font-mono text-xs"
                  style={{ color: colors.textMuted }}
                >
                  {activity.category}
                </span>

                {/* Title & Badge */}
                <div className="mb-2 flex items-center gap-2">
                  <h3
                    className="font-mono text-base font-medium"
                    style={{ color: colors.text }}
                  >
                    {activity.title}
                  </h3>
                  {activity.badge && (
                    <span
                      className="rounded-full px-2 py-0.5 font-mono text-xs"
                      style={{
                        backgroundColor: colors.verifiedBadge,
                        color: '#FFFFFF',
                      }}
                    >
                      {activity.badge}
                    </span>
                  )}
                </div>

                {/* Period */}
                <p
                  className="font-mono text-sm"
                  style={{ color: colors.textMuted }}
                >
                  {activity.period}
                </p>

                {/* Link indicator */}
                {activity.link && (
                  <div
                    className="mt-3 flex items-center gap-1 font-mono text-xs"
                    style={{ color: colors.verifiedBadge }}
                  >
                    <ExternalLink className="h-3 w-3" />
                    <span>View Project</span>
                  </div>
                )}
              </div>
            );

            return activity.link ? (
              <Link
                key={index}
                href={activity.link}
                target="_blank"
                className="block"
              >
                {CardContent}
              </Link>
            ) : (
              CardContent
            );
          })}
        </div>
      </div>
    </section>
  );
}
