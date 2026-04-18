import { pipelineBuilder } from '../data/content';

export default function PipelineBuilder() {
  return (
    <section id="pipelines" className="section bg-bg-soft border-y border-black/5">
      <div className="container-page">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <span className="eyebrow">Pipeline Builder</span>
            <h2 className="h-section mt-4 text-balance">{pipelineBuilder.title}</h2>
            <p className="lead mt-5">{pipelineBuilder.copy}</p>

            <ul className="mt-7 space-y-2">
              {pipelineBuilder.examples.map((e) => (
                <li
                  key={e}
                  className="flex items-center gap-2 text-sm text-ink/80"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                  {e}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-black/10 bg-white p-5 sm:p-6 shadow-card">
              <div className="text-[11px] uppercase tracking-widest text-ink/55 mb-4">
                Pipeline schema
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {pipelineBuilder.steps.map((step, i) => (
                  <div
                    key={step}
                    className="rounded-xl border border-black/10 bg-bg-soft p-3.5 card-hover"
                  >
                    <div className="num">{String(i + 1).padStart(2, '0')}</div>
                    <div className="mt-1.5 text-sm font-semibold text-ink">{step}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-xl border border-dashed border-black/15 bg-bg-soft px-4 py-3.5 text-[12.5px] text-ink/70 leading-relaxed">
                <span className="font-semibold text-ink/85">Trigger</span>
                <span className="mx-1.5 text-ink/30">→</span>
                <span>Context</span>
                <span className="mx-1.5 text-ink/30">→</span>
                <span>Plan</span>
                <span className="mx-1.5 text-ink/30">→</span>
                <span>Agents</span>
                <span className="mx-1.5 text-ink/30">→</span>
                <span>Tools</span>
                <span className="mx-1.5 text-ink/30">→</span>
                <span>Verify</span>
                <span className="mx-1.5 text-ink/30">→</span>
                <span className="font-semibold text-ink/85">Action</span>
                <span className="mx-1.5 text-ink/30">→</span>
                <span>Audit</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
