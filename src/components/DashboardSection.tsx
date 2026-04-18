import { dashboardSection } from '../data/content';

const toneClass = (tone: string) => {
  if (tone === 'down') return 'text-brand';
  if (tone === 'warn') return 'text-amber-600';
  return 'text-ink';
};

export default function DashboardSection() {
  return (
    <section className="section">
      <div className="container-page">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <span className="eyebrow">Dashboard</span>
            <h2 className="h-section mt-4">{dashboardSection.title}</h2>
            <p className="lead mt-5">{dashboardSection.copy}</p>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-black/10 bg-white p-5 shadow-card">
              <div className="flex items-center justify-between text-[11px] text-ink/50">
                <span className="uppercase tracking-widest">CEO Dashboard</span>
                <span>обновлено · pipeline #4f81e2</span>
              </div>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {dashboardSection.cards.map((c) => (
                  <div
                    key={c.title}
                    className="rounded-xl border border-black/10 bg-bg-soft p-4"
                  >
                    <div className="text-[11px] uppercase tracking-widest text-ink/50">
                      {c.title}
                    </div>
                    <div className={`mt-2 text-2xl font-bold tracking-tight ${toneClass(c.tone)}`}>
                      {c.metric}
                    </div>
                    <div className="mt-1 text-[12px] text-ink/60">{c.detail}</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 rounded-xl border border-dashed border-black/15 bg-bg-soft p-4 text-[12px] text-ink/60">
                Sources verified · Tool calls logged · Human approval for actions
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
