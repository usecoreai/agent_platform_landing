import { a2a } from '../data/content';

export default function A2ASection() {
  return (
    <section className="section">
      <div className="container-page">
        <div className="max-w-3xl">
          <span className="eyebrow">A2A orchestration</span>
          <h2 className="h-section mt-4">{a2a.title}</h2>
          <p className="lead mt-5">{a2a.copy}</p>
        </div>

        <div className="mt-12 relative">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {a2a.agents.map((agent, i) => (
              <article
                key={agent.name}
                className={`rounded-2xl border p-4 ${
                  i === 0
                    ? 'border-brand/40 bg-brand/5'
                    : 'border-black/10 bg-white'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span
                    className={`h-2 w-2 rounded-full ${
                      i === 0 ? 'bg-brand' : 'bg-ink/30'
                    }`}
                  />
                  <span className="text-[11px] font-mono text-ink/50">
                    A/{String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className="mt-3 text-sm font-semibold text-ink">{agent.name}</div>
                <div className="mt-1.5 text-[12px] text-ink/65 leading-relaxed">
                  {agent.role}
                </div>
              </article>
            ))}
          </div>
        </div>

        <p className="mt-8 text-xs text-ink/55 max-w-3xl">{a2a.note}</p>
      </div>
    </section>
  );
}
