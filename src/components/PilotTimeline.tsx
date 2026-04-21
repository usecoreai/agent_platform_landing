import { useEffect, useRef, useState } from 'react';
import { pilot, hero } from '../data/content';

const STEP_DURATION = 3500; // ms per step

interface PilotTimelineProps {
  onOpenContactForm: () => void
}

export default function PilotTimeline({ onOpenContactForm }: PilotTimelineProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  function startCycle() {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % pilot.weeks.length);
    }, STEP_DURATION);
  }

  useEffect(() => {
    if (!paused) startCycle();
    else if (intervalRef.current) clearInterval(intervalRef.current);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [paused]);

  function handleCardClick(i: number) {
    setActiveIndex(i);
    setPaused(true);
  }

  return (
    <section id="pilot" className="section bg-bg-soft border-y border-black/5">
      <div className="container-page">
        <div className="max-w-3xl">
          <span className="eyebrow">Пилот</span>
          <h2 className="h-section mt-4 text-balance">{pilot.title}</h2>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {pilot.weeks.map((w, i) => {
            const isActive = activeIndex === i;
            return (
              <article
                key={w.tag}
                onClick={() => handleCardClick(i)}
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => { setPaused(false); }}
                className={[
                  'relative h-full rounded-2xl border p-6 cursor-pointer',
                  'transition-all duration-500 overflow-hidden',
                  isActive
                    ? 'bg-white border-brand/30 shadow-[0_8px_28px_rgba(255,90,31,0.12)] -translate-y-0.5'
                    : 'bg-white border-black/5 shadow-card hover:-translate-y-0.5 hover:border-black/15 hover:shadow-[0_8px_28px_rgba(0,0,0,0.06)]',
                ].join(' ')}
              >
                {/* Progress bar */}
                <span
                  className={[
                    'absolute bottom-0 left-0 h-[3px] bg-brand rounded-full',
                    'transition-none',
                  ].join(' ')}
                  style={{
                    width: isActive && !paused ? '100%' : '0%',
                    transition: isActive && !paused
                      ? `width ${STEP_DURATION}ms linear`
                      : 'none',
                  }}
                />

                <div className="flex items-center justify-between">
                  <span
                    className={[
                      'inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold transition-colors duration-300',
                      isActive
                        ? 'bg-brand text-white'
                        : 'bg-brand/10 text-brand',
                    ].join(' ')}
                  >
                    {w.tag}
                  </span>
                  <span className="num">{String(i + 1).padStart(2, '0')}</span>
                </div>

                <h3
                  className={[
                    'mt-4 text-base font-semibold transition-colors duration-300',
                    isActive ? 'text-ink' : 'text-ink',
                  ].join(' ')}
                >
                  {w.title}
                </h3>
                <p className="mt-2 text-[13px] text-ink/65 leading-relaxed">{w.copy}</p>
              </article>
            );
          })}
        </div>

        {/* Step dots */}
        <div className="mt-5 flex items-center justify-center gap-2">
          {pilot.weeks.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Шаг ${i + 1}`}
              onClick={() => handleCardClick(i)}
              className={[
                'rounded-full transition-all duration-300',
                activeIndex === i
                  ? 'w-6 h-2 bg-brand'
                  : 'w-2 h-2 bg-ink/20 hover:bg-ink/40',
              ].join(' ')}
            />
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
              <button className="btn-primary" type="button" onClick={onOpenContactForm}>
                {hero.ctaPrimary}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
