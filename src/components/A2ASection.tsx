import { a2a } from '../data/content';

export default function A2ASection() {
  return (
    <section className="section">
      <div className="container-page">
        <div className="max-w-3xl">
          <span className="eyebrow">A2A orchestration</span>
          <h2 className="h-section mt-4 text-balance">{a2a.title}</h2>
          <p className="lead mt-5">{a2a.copy}</p>
        </div>

        <div className="mt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {a2a.agents.map((agent, i) => (
              <article
                key={agent.name}
                className={`rounded-2xl border p-4 card-hover h-full ${
                  i === 0
                    ? 'border-brand/40 bg-brand/5'
                    : 'border-black/10 bg-white'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span
                    className={`h-2 w-2 rounded-full ${
                      i === 0 ? 'bg-brand' : 'bg-ink/25'
                    }`}
                  />
                  <span className="num">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <div className="mt-3 text-sm font-semibold text-ink">{agent.name}</div>
                <div className="mt-1.5 text-[12.5px] text-ink/65 leading-relaxed">
                  {agent.role}
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-10 max-w-3xl border-t border-black/5 pt-5 flex items-start gap-2.5">
          <span
            aria-hidden
            className="mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-black/10 text-[10px] font-semibold text-ink/40"
          >
            i
          </span>
          <p className="text-[12.5px] italic text-ink/55 leading-relaxed">{a2a.note}</p>
        </div>
      </div>
    </section>
  );
}
