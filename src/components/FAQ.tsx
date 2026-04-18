import { useState } from 'react';
import { faq } from '../data/content';

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section bg-bg-soft border-y border-black/5">
      <div className="container-page">
        <div className="max-w-3xl">
          <span className="eyebrow">FAQ</span>
          <h2 className="h-section mt-4 text-balance">Часто задаваемые вопросы</h2>
        </div>

        <div className="mt-10 max-w-3xl space-y-2.5">
          {faq.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.q}
                className={`rounded-2xl border bg-white transition ${
                  isOpen
                    ? 'border-brand/30 shadow-[0_8px_28px_-16px_rgba(255,90,31,0.3)]'
                    : 'border-black/10 hover:border-black/20'
                }`}
              >
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
                    className={`mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition ${
                      isOpen
                        ? 'border-brand bg-brand text-white rotate-45'
                        : 'border-black/15 text-ink/60'
                    }`}
                    aria-hidden
                  >
                    <svg width="12" height="12" viewBox="0 0 10 10">
                      <path
                        d="M5 1v8M1 5h8"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                      />
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
