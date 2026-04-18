import { useCases } from '../data/content';

export default function UseCases() {
  return (
    <section className="section bg-bg-soft border-y border-black/5">
      <div className="container-page">
        <div className="max-w-3xl">
          <span className="eyebrow">Use cases</span>
          <h2 className="h-section mt-4">Сценарии по ролям</h2>
          <p className="lead mt-5">
            Где CoreAI даёт измеримый эффект для разных уровней управления и партнёров.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {useCases.map((u) => (
            <article key={u.role} className="card flex flex-col h-full">
              <h3 className="h-card">{u.role}</h3>
              <dl className="mt-4 space-y-3 text-[13px]">
                <div>
                  <dt className="text-[11px] font-semibold uppercase tracking-widest text-ink/40">
                    Боль
                  </dt>
                  <dd className="mt-1 text-ink/80">{u.pain}</dd>
                </div>
                <div>
                  <dt className="text-[11px] font-semibold uppercase tracking-widest text-brand">
                    CoreAI
                  </dt>
                  <dd className="mt-1 text-ink/80">{u.coreai}</dd>
                </div>
                <div>
                  <dt className="text-[11px] font-semibold uppercase tracking-widest text-ink/40">
                    Эффект
                  </dt>
                  <dd className="mt-1 text-ink/80">{u.effect}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
