'use client';

const CONTRIBUTIONS = {
  organizations: [
    {
      name: 'Toss',
      badge: 'Contributors',
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
        {
          name: 'technical-writing',
          prLink:
            'https://github.com/toss/technical-writing/pulls?q=is%3Apr+is%3Aclosed',
          issueLink:
            'https://github.com/toss/technical-writing/issues?q=is%3Aissue%20state%3Aclosed',
        },
      ],
    },
    {
      name: 'DevFive',
      badge: 'Contributors',
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

const MEETING = {
  link: 'https://github.com/opensource-contributors-group/opensource-contributors',
} as const;

import Link from 'next/link';
import {
  ExternalLink,
  GitPullRequest,
  CircleDot,
  BarChart3,
} from 'lucide-react';
import { ShineBorder } from '@/components/ui/shine-border';

export default function OpenSource() {
  return (
    <section className="w-full py-16 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Title */}
        <h2 className="mb-4 text-center font-mono text-2xl font-medium text-foreground">
          Open Source Contributions
        </h2>
        <p className="mb-12 text-center font-mono text-sm text-muted-foreground">
          커뮤니티에 PR 하나씩 기여하고 있습니다.
        </p>

        {/* Organizations Grid */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
          {CONTRIBUTIONS.organizations.map((org, index) => (
            <div
              key={index}
              className="rounded-lg p-4 bg-card shadow-sm shadow-foreground/10 sm:p-6 transition-all hover:scale-[1.01]"
            >
              {/* Organization Header */}
              <div className="mb-4 sm:mb-6 flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                  <h3 className="font-mono text-lg sm:text-xl font-bold text-foreground">
                    {org.name}
                  </h3>
                  <span
                    className="rounded-full px-2 sm:px-3 py-0.5 sm:py-1 font-mono text-[10px] sm:text-xs font-medium"
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
                  className="transition-opacity hover:opacity-80 shrink-0 text-muted-foreground"
                >
                  <ExternalLink className="h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
              </div>

              {/* Projects */}
              <div className="space-y-3 sm:space-y-4">
                {org.projects.map((project, pIndex) => (
                  <div
                    key={pIndex}
                    className="relative rounded-md border border-border p-3 sm:p-4"
                  >
                    <ShineBorder
                      shineColor={['#A07CFE', '#FE8FB5', '#FFBE7B']}
                      borderWidth={2}
                    />
                    <h4 className="mb-2 sm:mb-3 font-mono text-xs sm:text-sm font-medium text-foreground">
                      {project.name}
                    </h4>
                    <div className=" flex flex-wrap gap-2 sm:gap-3">
                      {project.prLink && (
                        <Link
                          href={project.prLink}
                          className="flex items-center gap-1 sm:gap-1.5 rounded-md px-2 sm:px-3 py-1 sm:py-1.5 font-mono text-[10px] sm:text-xs transition-opacity hover:opacity-80"
                          style={{
                            backgroundColor: '#22C55E20',
                            color: '#22C55E',
                          }}
                        >
                          <GitPullRequest className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                          PR
                        </Link>
                      )}
                      {project.issueLink && (
                        <Link
                          href={project.issueLink}
                          className="flex items-center gap-1 sm:gap-1.5 rounded-md px-2 sm:px-3 py-1 sm:py-1.5 font-mono text-[10px] sm:text-xs transition-opacity hover:opacity-80"
                          style={{
                            backgroundColor: '#8B5CF620',
                            color: '#8B5CF6',
                          }}
                        >
                          <CircleDot className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                          Issues
                        </Link>
                      )}
                      {'graphsLink' in project && project.graphsLink && (
                        <Link
                          href={project.graphsLink}
                          className="flex items-center gap-1 sm:gap-1.5 rounded-md px-2 sm:px-3 py-1 sm:py-1.5 font-mono text-[10px] sm:text-xs transition-opacity hover:opacity-80"
                          style={{
                            backgroundColor: '#F9731620',
                            color: '#F97316',
                          }}
                        >
                          <BarChart3 className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
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
          <p className="font-mono text-xs text-muted-foreground">
            오픈소스기여 모임 10기에도 참여했습니다 (2025.12.26 ~ 2026.01.25)
          </p>
          <Link
            className="font-tossface text-sm text-foreground hover:opacity-80"
            href={MEETING.link}
          >
            🔗 Repository
          </Link>
        </div>
      </div>
    </section>
  );
}
