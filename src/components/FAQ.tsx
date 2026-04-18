import { useState } from 'react';
import { faq } from '../data/content';

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section bg-bg-soft border-y border-black/5">
      <div className="container-page">
        <div className="max-w-3xl">
          <span className="eyebrow">FAQ</span>
          <h2 className="h-section mt-4">Часто задаваемые вопросы</h2>
        </div>

        <div className="mt-10 max-w-3xl divide-y divide-black/5 rounded-2xl border border-black/10 bg-white">
          {faq.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q}>
                <button
                  type="button"
                  className="flex w-full items-start justify-between gap-4 px-5 py-5 text-left"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span className="text-[15px] sm:text-base font-semibold text-ink leading-snug">
                    {item.q}
                  </span>
                  <span
                    className={`mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-black/10 text-ink/60 transition-transform ${
                      isOpen ? 'rotate-45 border-brand text-brand' : ''
                    }`}
                    aria-hidden
                  >
                    <svg width="10" height="10" viewBox="0 0 10 10">
                      <path d="M5 1v8M1 5h8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                    </svg>
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 pb-6 -mt-1 text-[14px] text-ink/70 leading-relaxed">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
