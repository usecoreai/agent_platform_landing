import { partner } from '../data/content';

const Check = () => (
  <svg width="10" height="10" viewBox="0 0 12 12" aria-hidden>
    <path
      d="M2 6.5l2.5 2.5L10 3.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface PartnerSectionProps {
  onOpenContactForm: () => void
}

export default function PartnerSection({ onOpenContactForm }: PartnerSectionProps) {
  return (
    <section id="partners" className="section">
      <div className="container-page">
        <div className="rounded-3xl border border-black/10 bg-graphite text-white p-8 sm:p-12 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-grid-dark opacity-40" />
          <div className="absolute -bottom-32 -right-20 -z-10 h-[400px] w-[400px] rounded-full bg-brand/15 blur-3xl" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-6">
              <span className="eyebrow">Партнёрам</span>
              <h2 className="h-section mt-4 text-balance text-white">{partner.title}</h2>
              <p className="mt-5 text-base sm:text-lg text-white/80 leading-relaxed">
                {partner.subheadline}
              </p>
              <p className="mt-4 text-sm text-white/65 leading-relaxed">{partner.copy}</p>

              <div className="mt-7">
                <button className="btn-primary" type="button" onClick={onOpenContactForm}>
                  {partner.cta}
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {partner.cards.map((c) => (
                  <div
                    key={c}
                    className="flex items-start gap-2.5 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-[13px] text-white/90 transition hover:border-brand/40 hover:bg-white/[0.07]"
                  >
                    <span className="mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-brand/15 text-brand">
                      <Check />
                    </span>
                    <span>{c}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
