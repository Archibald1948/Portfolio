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
    accentBlue: '#0064FF',
    accentPurple: '#5a44ff',
  },
  dark: {
    bg: '#141414',
    cardBg: '#1C1C1C',
    text: '#FAFAFA',
    textMuted: '#A1A1AA',
    accentBlue: '#0064FF',
    accentPurple: '#5a44ff',
  },
} as const;

const CONTRIBUTIONS = {
  organizations: [
    {
      name: 'Toss',
      badge: 'Contributor',
      color: '#0064FF',
      link: 'https://github.com/toss',
      projects: [
        {
          name: 'suspensive',
          prLink: 'https://github.com/toss/suspensive/pulls?q=kss2002',
          issueLink: 'https://github.com/toss/suspensive/issues?q=kss2002',
        },
        {
          name: 'frontend-fundamentals',
          prLink:
            'https://github.com/toss/frontend-fundamentals/pulls?q=kss2002',
          issueLink:
            'https://github.com/toss/frontend-fundamentals/issues?q=kss2002',
        },
        {
          name: 'granite',
          prLink: 'https://github.com/toss/granite/pulls?q=kss2002',
          issueLink: 'https://github.com/toss/granite/issues?q=kss2002',
        },
      ],
    },
    {
      name: 'DevFive',
      badge: 'Contributor',
      color: '#5a44ff',
      link: 'https://github.com/dev-five-git',
      projects: [
        {
          name: 'devup-ui',
          prLink: null,
          issueLink: null,
          graphsLink:
            'https://github.com/dev-five-git/devup-ui/graphs/contributors',
        },
      ],
    },
  ],
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import Link from 'next/link';
import {
  ExternalLink,
  GitPullRequest,
  CircleDot,
  BarChart3,
} from 'lucide-react';

interface OpenSourceProps {
  mode?: 'light' | 'dark';
}

export default function OpenSource({ mode = 'dark' }: OpenSourceProps) {
  const colors = COLORS[mode];

  return (
    <section className="w-full py-16" style={{ backgroundColor: colors.bg }}>
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Title */}
        <h2
          className="mb-4 text-center font-mono text-2xl font-medium"
          style={{ color: colors.text }}
        >
          Open Source Contributions
        </h2>
        <p
          className="mb-12 text-center font-mono text-sm"
          style={{ color: colors.textMuted }}
        >
          Contributing to the community, one PR at a time.
        </p>

        {/* Organizations Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {CONTRIBUTIONS.organizations.map((org, index) => (
            <div
              key={index}
              className="rounded-lg p-6 transition-all hover:scale-[1.02]"
              style={{ backgroundColor: colors.cardBg }}
            >
              {/* Organization Header */}
              <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <h3
                    className="font-mono text-xl font-bold"
                    style={{ color: colors.text }}
                  >
                    {org.name}
                  </h3>
                  <span
                    className="rounded-full px-3 py-1 font-mono text-xs font-medium"
                    style={{
                      backgroundColor: org.color,
                      color: '#FFFFFF',
                    }}
                  >
                    {org.badge}
                  </span>
                </div>
                <Link
                  href={org.link}
                  target="_blank"
                  className="transition-opacity hover:opacity-80"
                  style={{ color: colors.textMuted }}
                >
                  <ExternalLink className="h-5 w-5" />
                </Link>
              </div>

              {/* Projects */}
              <div className="space-y-4">
                {org.projects.map((project, pIndex) => (
                  <div
                    key={pIndex}
                    className="rounded-md border p-4"
                    style={{ borderColor: '#3F3F46' }}
                  >
                    <h4
                      className="mb-3 font-mono text-sm font-medium"
                      style={{ color: colors.text }}
                    >
                      {project.name}
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {project.prLink && (
                        <Link
                          href={project.prLink}
                          target="_blank"
                          className="flex items-center gap-1.5 rounded-md px-3 py-1.5 font-mono text-xs transition-opacity hover:opacity-80"
                          style={{
                            backgroundColor: '#22C55E20',
                            color: '#22C55E',
                          }}
                        >
                          <GitPullRequest className="h-3.5 w-3.5" />
                          Pull Requests
                        </Link>
                      )}
                      {project.issueLink && (
                        <Link
                          href={project.issueLink}
                          target="_blank"
                          className="flex items-center gap-1.5 rounded-md px-3 py-1.5 font-mono text-xs transition-opacity hover:opacity-80"
                          style={{
                            backgroundColor: '#8B5CF620',
                            color: '#8B5CF6',
                          }}
                        >
                          <CircleDot className="h-3.5 w-3.5" />
                          Issues
                        </Link>
                      )}
                      {'graphsLink' in project && project.graphsLink && (
                        <Link
                          href={project.graphsLink}
                          target="_blank"
                          className="flex items-center gap-1.5 rounded-md px-3 py-1.5 font-mono text-xs transition-opacity hover:opacity-80"
                          style={{
                            backgroundColor: '#F9731620',
                            color: '#F97316',
                          }}
                        >
                          <BarChart3 className="h-3.5 w-3.5" />
                          Contributors
                        </Link>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Community Note */}
        <div className="mt-12 text-center">
          <p className="font-mono text-xs" style={{ color: colors.textMuted }}>
            Also participated in 오픈소스기여 모임 10기 (2025.12.26 ~
            2026.01.25)
          </p>
          <Link
            className="font-mono text-xs hover:opacity-80"
            href="https://github.com/opensource-contributors-group/opensource-contributors"
            target="_blank"
          >
            🔗 Repository
          </Link>
        </div>
      </div>
    </section>
  );
}
