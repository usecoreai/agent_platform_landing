import { Link } from 'react-router-dom';
import { useCasesDetail } from '../data/use-cases-detail';

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

const ArrowRight = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
    <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

interface CasesPageProps {
  onOpenContactForm: () => void
}

export default function CasesPage({ onOpenContactForm }: CasesPageProps) {
  return (
    <main>
      {/* Hero */}
      <section className="section bg-bg border-b border-black/5">
        <div className="container-page">
          <div className="max-w-3xl">
            <span className="eyebrow">Кейсы</span>
            <h1 className="h-display mt-4 text-balance">Сценарии по ролям</h1>
            <p className="lead mt-6">
              Где CoreAI даёт измеримый эффект для разных уровней управления и партнёров.
            </p>
          </div>
        </div>
      </section>

      {/* Cases grid */}
      <section className="section bg-bg-soft border-b border-black/5">
        <div className="container-page">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {useCasesDetail.map((u) => (
              <Link
                key={u.slug}
                to={`/cases/${u.slug}`}
                className="card card-hover h-full flex flex-col group"
              >
                <h2 className="h-card group-hover:text-brand transition-colors">{u.role}</h2>

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

                <div className="mt-auto pt-4 flex items-center gap-1.5 text-[12px] font-semibold text-brand/70 group-hover:text-brand transition-colors">
                  Подробнее
                  <ArrowRight />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-bg">
        <div className="container-page text-center max-w-xl mx-auto">
          <h2 className="h-section text-balance">Не нашли свой сценарий?</h2>
          <p className="lead mt-5">
            Расскажите о вашем процессе — подберём подходящий сценарий и запустим пилот.
          </p>
          <button className="btn-primary-lg mt-8" type="button" onClick={onOpenContactForm}>
            Запросить пилот
          </button>
        </div>
      </section>
    </main>
  );
}
