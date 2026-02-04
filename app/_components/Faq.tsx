'use client';

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    bg: '#141414',
    text: '#FAFAFA',
    textMuted: '#A1A1AA',
    buttonBg: '#FAFAFA',
    buttonText: '#141414',
  },
  dark: {
    bg: '#141414',
    text: '#FAFAFA',
    textMuted: '#A1A1AA',
    buttonBg: '#FAFAFA',
    buttonText: '#141414',
  },
} as const;

const CONTENT = {
  title: 'About Me',
  faqs: [
    {
      question: 'What is your main tech stack?',
      answer:
        'React, Next.js, TypeScript, Node.js. I also work with Ruby on Rails and various CSS frameworks.',
    },
    {
      question: 'What open source projects have you contributed to?',
      answer:
        'I contribute to Toss (suspensive, frontend-fundamentals, granite) and DevFive (devup-ui) projects.',
    },
    {
      question: 'What communities are you involved in?',
      answer:
        'GDG, Kakao Univ (운영진), LikeLion (멋쟁이사자처럼 운영진), and Open Source Contributors Group.',
    },
    {
      question: 'How can I contact you?',
      answer: 'Email me at know.warehouse02@gmail.com or connect on LinkedIn.',
    },
  ],
  cta: {
    title: "Let's build something together.",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

interface FaqProps {
  mode?: 'light' | 'dark';
}

export default function Faq({ mode = 'dark' }: FaqProps) {
  const colors = COLORS[mode];

  return (
    <section className="w-full py-20" style={{ backgroundColor: colors.bg }}>
      <div className="mx-auto max-w-2xl px-6">
        {/* FAQ Section */}
        <h2
          className="mb-8 font-mono text-sm font-medium underline underline-offset-4"
          style={{ color: colors.text }}
        >
          {CONTENT.title}
        </h2>

        <div className="mb-16 space-y-6">
          {CONTENT.faqs.map((faq, index) => (
            <div key={index}>
              <h3
                className="mb-1 font-mono text-sm font-bold"
                style={{ color: colors.text }}
              >
                {faq.question}
              </h3>
              <p className="flex gap-2 font-mono text-sm">
                <span style={{ color: colors.textMuted }}>|_</span>
                <span style={{ color: colors.textMuted }}>{faq.answer}</span>
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3
            className="mb-1 font-mono text-sm font-bold"
            style={{ color: colors.text }}
          >
            {CONTENT.cta.title}
          </h3>
        </div>
      </div>

      <div className="mx-auto max-w-2xl px-6 py-10 overflow-hidden">
        <a
          href="https://www.gitanimals.org/en_US?utm_medium=image&utm_source=kss2002&utm_content=farm"
          className="block"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://render.gitanimals.org/farms/kss2002"
            alt="Git Animals Farm"
            className="w-full max-w-[600px] h-auto mx-auto"
          />
        </a>
      </div>
    </section>
  );
}
