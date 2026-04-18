import { pillars } from '../data/content';

export default function PlatformPillars() {
  return (
    <section className="section bg-bg-soft border-y border-black/5">
      <div className="container-page">
        <div className="max-w-3xl">
          <span className="eyebrow">Платформа</span>
          <h2 className="h-section mt-4">{pillars.title}</h2>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {pillars.items.map((item, i) => (
            <article
              key={item.title}
              className="card flex flex-col h-full transition hover:border-brand/30"
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono text-ink/40">P/{String(i + 1).padStart(2, '0')}</span>
                <span className="h-2 w-2 rounded-full bg-brand" />
              </div>
              <h3 className="h-card mt-4">{item.title}</h3>
              <p className="mt-3 text-sm text-ink/70 leading-relaxed">{item.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
