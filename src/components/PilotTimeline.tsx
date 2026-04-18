import { pilot, mailto, hero } from '../data/content';

export default function PilotTimeline() {
  return (
    <section id="pilot" className="section bg-bg-soft border-y border-black/5">
      <div className="container-page">
        <div className="max-w-3xl">
          <span className="eyebrow">Пилот</span>
          <h2 className="h-section mt-4 text-balance">{pilot.title}</h2>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {pilot.weeks.map((w, i) => (
            <article key={w.tag} className="card card-hover relative h-full">
              <div className="flex items-center justify-between">
                <span className="chip-brand">{w.tag}</span>
                <span className="num">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <h3 className="mt-4 text-base font-semibold text-ink">{w.title}</h3>
              <p className="mt-2 text-[13px] text-ink/65 leading-relaxed">{w.copy}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 card">
            <div className="text-[11px] uppercase tracking-widest text-ink/55">KPI примеры</div>
            <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
              {pilot.kpis.map((k) => (
                <li key={k} className="flex items-center gap-2 text-sm text-ink/80">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                  {k}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-5 card-dark flex flex-col justify-between">
            <div>
              <div className="text-[11px] uppercase tracking-widest text-white/60">
                Готовы к пилоту?
              </div>
              <p className="mt-3 text-lg font-semibold leading-snug">
                Один процесс, владелец, KPI и безопасный контур. Остальное — на нас.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              <a className="btn-primary" href={mailto.pilot}>
                {hero.ctaPrimary}
              </a>
              <a className="btn-ghost-dark" href={mailto.partner}>
                {hero.ctaSecondary}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
