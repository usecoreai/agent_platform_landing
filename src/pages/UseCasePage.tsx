import { useParams, Link } from 'react-router-dom';
import { useCasesDetail, type UseCaseDetail } from '../data/use-cases-detail';

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

const ArrowLeft = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
    <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ArrowRight = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
    <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

interface UseCasePageProps {
  onOpenContactForm: () => void
}

export default function UseCasePage({ onOpenContactForm }: UseCasePageProps) {
  const { slug } = useParams<{ slug: string }>();
  const data: UseCaseDetail | undefined = useCasesDetail.find((u) => u.slug === slug);

  if (!data) {
    return (
      <main className="section container-page text-center">
        <h1 className="h-section">Страница не найдена</h1>
        <Link to="/" className="btn-primary mt-6 inline-flex">
          На главную
        </Link>
      </main>
    );
  }

  const currentIndex = useCasesDetail.findIndex((u) => u.slug === slug);
  const prev = currentIndex > 0 ? useCasesDetail[currentIndex - 1] : null;
  const next = currentIndex < useCasesDetail.length - 1 ? useCasesDetail[currentIndex + 1] : null;

  return (
    <main>
      {/* Hero */}
      <section className="section bg-bg border-b border-black/5">
        <div className="container-page">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-sm text-ink/50 hover:text-ink transition mb-8"
          >
            <ArrowLeft />
            Все кейсы
          </Link>

          <div className="max-w-3xl">
            <span className="eyebrow">{data.role}</span>
            <h1 className="h-display mt-4 text-balance">{data.headline}</h1>
            <p className="lead mt-6">{data.subheadline}</p>
          </div>

          {/* Effect badge */}
          <div className="mt-10 inline-flex items-center gap-2 rounded-full bg-brand/10 px-5 py-2.5">
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-brand text-white">
              <Checkmark />
            </span>
            <span className="text-sm font-semibold text-brand">{data.effect}</span>
          </div>
        </div>
      </section>

      {/* Pain points */}
      <section className="section bg-bg-soft border-y border-black/5">
        <div className="container-page">
          <div className="max-w-3xl">
            <span className="eyebrow">Проблема</span>
            <h2 className="h-section mt-4 text-balance">Типичные боли</h2>
          </div>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {data.painPoints.map((point) => (
              <div key={point.title} className="card h-full">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-ink/20 mt-2" />
                  <div>
                    <h3 className="font-semibold text-ink">{point.title}</h3>
                    <p className="mt-1.5 text-sm text-ink/60 leading-relaxed">{point.copy}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="section bg-bg">
        <div className="container-page">
          <div className="max-w-3xl">
            <span className="eyebrow">Решение</span>
            <h2 className="h-section mt-4 text-balance">{data.solution.title}</h2>
            <p className="lead mt-5">{data.solution.copy}</p>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {data.solution.features.map((f) => (
              <div key={f.title} className="card card-hover flex flex-col gap-3">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand/10 text-brand">
                  <Checkmark />
                </span>
                <h3 className="h-card">{f.title}</h3>
                <p className="text-sm text-ink/60 leading-relaxed">{f.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scenarios */}
      <section className="section bg-bg-soft border-y border-black/5">
        <div className="container-page">
          <div className="max-w-3xl">
            <span className="eyebrow">Сценарии</span>
            <h2 className="h-section mt-4 text-balance">Как работает на практике</h2>
          </div>

          <div className="mt-12 space-y-6">
            {data.scenarios.map((scenario, i) => (
              <article key={scenario.title} className="card">
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="num">{String(i + 1).padStart(2, '0')}</span>
                      <h3 className="h-card">{scenario.title}</h3>
                    </div>
                    <p className="text-sm text-ink/70 leading-relaxed">{scenario.copy}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {scenario.tags.map((tag) => (
                        <span key={tag} className="chip-brand text-[11px]">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Steps */}
                  <div className="lg:w-72 shrink-0">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-ink/40 mb-3">
                      Шаги пайплайна
                    </p>
                    <ol className="space-y-2">
                      {scenario.steps.map((step, si) => (
                        <li key={si} className="flex items-start gap-2.5 text-[13px]">
                          <span className="num mt-0.5 shrink-0">{String(si + 1).padStart(2, '0')}</span>
                          <span className="text-ink/70 leading-snug">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="section bg-bg">
        <div className="container-page">
          <div className="max-w-3xl">
            <span className="eyebrow">Эффект</span>
            <h2 className="h-section mt-4 text-balance">Измеримый результат</h2>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {data.outcomes.map((o) => (
              <div key={o.label} className="card text-center">
                <p className="text-[36px] font-bold tracking-tight text-brand leading-none">{o.metric}</p>
                <p className="mt-2 font-semibold text-ink">{o.label}</p>
                <p className="mt-1.5 text-sm text-ink/50 leading-relaxed">{o.context}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Connectors */}
      <section className="py-14 bg-bg-soft border-y border-black/5">
        <div className="container-page">
          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-ink/40 mb-4">
            Коннекторы для этого сценария
          </p>
          <div className="flex flex-wrap gap-2">
            {data.connectors.map((c) => (
              <span key={c} className="chip">
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-graphite text-white">
        <div className="container-page text-center max-w-2xl mx-auto">
          <span className="eyebrow" style={{ color: '#FF5A1F' }}>
            Следующий шаг
          </span>
          <h2 className="h-section mt-4 text-white text-balance">
            Запустите пилот для роли «{data.role}»
          </h2>
          <p className="lead mt-5 text-white/60">
            Один процесс, один KPI, результат за 2–4 недели. Без замены существующих систем.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button className="btn-primary-lg" type="button" onClick={onOpenContactForm}>
              Запросить пилот
            </button>
            <Link to="/" className="btn-ghost-dark">
              Посмотреть все кейсы
            </Link>
          </div>
        </div>
      </section>

      {/* Prev / Next navigation */}
      {(prev || next) && (
        <nav className="py-10 border-t border-black/5 bg-bg" aria-label="Другие кейсы">
          <div className="container-page flex items-center justify-between gap-4">
            {prev ? (
              <Link
                to={`/cases/${prev.slug}`}
                className="group flex items-center gap-3 text-sm text-ink/60 hover:text-ink transition"
              >
                <ArrowLeft />
                <span>
                  <span className="block text-[10px] font-semibold uppercase tracking-[0.14em] text-ink/40 mb-0.5">
                    Предыдущий
                  </span>
                  {prev.role}
                </span>
              </Link>
            ) : (
              <div />
            )}
            {next ? (
              <Link
                to={`/cases/${next.slug}`}
                className="group flex items-center gap-3 text-sm text-ink/60 hover:text-ink transition text-right"
              >
                <span>
                  <span className="block text-[10px] font-semibold uppercase tracking-[0.14em] text-ink/40 mb-0.5">
                    Следующий
                  </span>
                  {next.role}
                </span>
                <ArrowRight />
              </Link>
            ) : (
              <div />
            )}
          </div>
        </nav>
      )}
    </main>
  );
}
