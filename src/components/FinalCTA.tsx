import { finalCta, hero, mailto } from '../data/content';

export default function FinalCTA() {
  return (
    <section className="section">
      <div className="container-page">
        <div className="rounded-3xl border border-black/10 bg-graphite text-white p-8 sm:p-14 relative overflow-hidden text-center">
          <div className="absolute inset-0 -z-10 bg-grid-dark opacity-40" />
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 -z-10 h-[400px] w-[600px] rounded-full bg-brand/20 blur-3xl" />

          <h2 className="text-[32px] sm:text-[44px] font-bold leading-[1.05] tracking-tight max-w-3xl mx-auto">
            {finalCta.title}
          </h2>
          <p className="mt-5 text-base sm:text-lg text-white/75 max-w-2xl mx-auto leading-relaxed">
            {finalCta.copy}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a className="btn-primary" href={mailto.pilot}>
              {hero.ctaPrimary}
            </a>
            <a className="btn-ghost-dark" href={mailto.partner}>
              {hero.ctaSecondary}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
