import { useCases } from '../data/content';

const Checkmark = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden>
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

export default function UseCases() {
  return (
    <section className="section bg-bg-soft border-y border-black/5">
      <div className="container-page">
        <div className="max-w-3xl">
          <span className="eyebrow">Use cases</span>
          <h2 className="h-section mt-4 text-balance">Сценарии по ролям</h2>
          <p className="lead mt-5">
            Где CoreAI даёт измеримый эффект для разных уровней управления и партнёров.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {useCases.map((u) => (
            <article key={u.role} className="card card-hover h-full flex flex-col">
              <h3 className="h-card">{u.role}</h3>

              <dl className="mt-5 space-y-4 text-[13px]">
                <div>
                  <dt className="text-[10px] font-semibold uppercase tracking-[0.14em] text-ink/40">
                    Боль
                  </dt>
                  <dd className="mt-1 text-ink/70 font-normal leading-relaxed">{u.pain}</dd>
                </div>

                <div className="border-t border-black/5 pt-4">
                  <dt className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand">
                    CoreAI
                  </dt>
                  <dd className="mt-1 text-ink font-medium leading-relaxed">{u.coreai}</dd>
                </div>

                <div className="border-t border-black/5 pt-4">
                  <dt className="text-[10px] font-semibold uppercase tracking-[0.14em] text-ink/40">
                    Эффект
                  </dt>
                  <dd className="mt-1.5 flex items-start gap-2 text-ink font-semibold leading-relaxed">
                    <span className="mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                      <Checkmark />
                    </span>
                    <span>{u.effect}</span>
                  </dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
