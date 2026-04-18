import { connectors } from '../data/content';

export default function Connectors() {
  return (
    <section id="connectors" className="section bg-bg-soft border-y border-black/5">
      <div className="container-page">
        <div className="max-w-3xl">
          <span className="eyebrow">Коннекторы</span>
          <h2 className="h-section mt-4 text-balance">{connectors.title}</h2>
          <p className="lead mt-5">{connectors.copy}</p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {connectors.groups.map((group) => (
            <article key={group.label} className="card card-hover h-full">
              <div className="text-[11px] uppercase tracking-widest text-ink/55">{group.label}</div>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((it) => (
                  <li key={it} className="chip">
                    {it}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-10 max-w-3xl border-t border-black/5 pt-5 flex items-start gap-2.5">
          <span
            aria-hidden
            className="mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-black/10 text-[10px] font-semibold text-ink/40"
          >
            i
          </span>
          <p className="text-[12.5px] italic text-ink/55 leading-relaxed">{connectors.note}</p>
        </div>
      </div>
    </section>
  );
}
