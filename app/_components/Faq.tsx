'use client';

import FaqShowcase from './FaqShowcase';

const CONTENT = {
  title: 'About Me',
  faqs: [
    {
      question: '주요 기술 스택은 무엇인가요?',
      answer:
        'React, Next.js, TypeScript, Node.js를 주로 사용합니다. Ruby on Rails와 다양한 CSS 프레임워크도 함께 다룹니다.',
    },
    {
      question: '어떤 오픈소스 프로젝트에 기여했나요?',
      answer:
        'Toss(suspensive, frontend-fundamentals, granite)와 DevFive(devup-ui) 프로젝트에 기여하고 있습니다.',
    },
    {
      question: '어떤 커뮤니티에서 활동하고 있나요?',
      answer:
        'GDG, 카카오 유니브(운영진), 멋쟁이사자처럼(운영진), 오픈소스 컨트리뷰터 그룹에서 활동하고 있습니다.',
    },
    {
      question: '어떻게 연락할 수 있나요?',
      answer:
        'know.warehouse02@gmail.com으로 메일을 보내거나 LinkedIn으로 연락 주세요.',
    },
  ],
  cta: {
    title: "Let's build something together.",
  },
} as const;

export default function Faq() {
  return (
    <section className="w-full py-20 bg-background">
      <div className="mx-auto max-w-2xl px-6">
        {/* FAQ Section */}
        <h2 className="mb-8 font-mono text-sm font-medium underline underline-offset-4 text-foreground">
          {CONTENT.title}
        </h2>

        <div className="mb-16 space-y-6">
          {CONTENT.faqs.map((faq, index) => (
            <div key={index}>
              <h3 className="mb-1 font-mono text-sm font-bold text-foreground">
                {faq.question}
              </h3>
              <p className="flex gap-2 font-mono text-sm">
                <span className="text-muted-foreground">|_</span>
                <span className="text-muted-foreground">{faq.answer}</span>
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="mb-1 font-mono text-sm font-bold text-foreground">
            {CONTENT.cta.title}
          </h3>
        </div>
      </div>
      <FaqShowcase />
    </section>
  );
}
