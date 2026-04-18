import { connectors } from '../data/content';

export default function Connectors() {
  return (
    <section id="connectors" className="section bg-bg-soft border-y border-black/5">
      <div className="container-page">
        <div className="max-w-3xl">
          <span className="eyebrow">Коннекторы</span>
          <h2 className="h-section mt-4">{connectors.title}</h2>
          <p className="lead mt-5">{connectors.copy}</p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {connectors.groups.map((group) => (
            <article key={group.label} className="card">
              <div className="text-[11px] uppercase tracking-widest text-ink/50">{group.label}</div>
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

        <p className="mt-8 text-xs text-ink/55 max-w-3xl">{connectors.note}</p>
      </div>
    </section>
  );
}
