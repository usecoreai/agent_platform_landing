import { partner, mailto } from '../data/content';

export default function PartnerSection() {
  return (
    <section id="partners" className="section">
      <div className="container-page">
        <div className="rounded-3xl border border-black/10 bg-graphite text-white p-8 sm:p-12 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-grid-dark opacity-40" />
          <div className="absolute -bottom-32 -right-20 -z-10 h-[400px] w-[400px] rounded-full bg-brand/15 blur-3xl" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-6">
              <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand">
                <span className="h-[6px] w-[6px] rounded-full bg-brand" />
                Партнёрам
              </span>
              <h2 className="h-section mt-4 text-white">{partner.title}</h2>
              <p className="mt-5 text-base sm:text-lg text-white/80 leading-relaxed">
                {partner.subheadline}
              </p>
              <p className="mt-4 text-sm text-white/65 leading-relaxed">{partner.copy}</p>

              <div className="mt-7">
                <a className="btn-primary" href={mailto.partner}>
                  {partner.cta}
                </a>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {partner.cards.map((c) => (
                  <div
                    key={c}
                    className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-[13px] text-white/85"
                  >
                    {c}
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
