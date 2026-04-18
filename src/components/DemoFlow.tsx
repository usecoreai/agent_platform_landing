import { demoFlow, productMock } from '../data/content';

export default function DemoFlow() {
  return (
    <section className="section bg-graphite text-white relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-grid-dark opacity-50" />
      <div className="absolute -top-32 right-0 -z-10 h-[420px] w-[420px] rounded-full bg-brand/20 blur-3xl" />

      <div className="container-page">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand">
            <span className="h-[6px] w-[6px] rounded-full bg-brand" />
            Demo flow
          </span>
          <h2 className="h-section mt-4">{demoFlow.title}</h2>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Goal */}
          <div className="lg:col-span-12 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <div className="text-[11px] uppercase tracking-widest text-white/40">User goal</div>
            <p className="mt-2 text-base sm:text-lg text-white/90 leading-relaxed">
              {demoFlow.goal}
            </p>
          </div>

          {/* Agents */}
          <div className="lg:col-span-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <div className="text-[11px] uppercase tracking-widest text-white/40 mb-3">Agents</div>
            <ul className="space-y-2">
              {productMock.agents.map((a) => (
                <li
                  key={a.name}
                  className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2.5"
                >
                  <div className="text-sm font-semibold flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                    {a.name}
                  </div>
                  <div className="text-[11px] text-white/55 mt-0.5">{a.role}</div>
                </li>
              ))}
            </ul>
          </div>

          {/* Pipeline */}
          <div className="lg:col-span-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <div className="text-[11px] uppercase tracking-widest text-white/40 mb-3">
              Pipeline trace
            </div>
            <ol className="space-y-1.5">
              {productMock.pipeline.map((s, i) => (
                <li
                  key={s}
                  className="flex items-center gap-2.5 rounded-md border border-white/10 bg-white/[0.03] px-3 py-2 text-[13px] text-white/85"
                >
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand text-[10px] font-semibold text-white">
                    {i + 1}
                  </span>
                  {s}
                </li>
              ))}
            </ol>
          </div>

          {/* Result */}
          <div className="lg:col-span-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <div className="text-[11px] uppercase tracking-widest text-white/40 mb-3">
              Dashboard result
            </div>
            <ul className="space-y-2">
              {demoFlow.results.map((r) => (
                <li
                  key={r}
                  className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-2.5 text-[13px] text-white/90"
                >
                  {r}
                </li>
              ))}
            </ul>
          </div>

          {/* Audit */}
          <div className="lg:col-span-12 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 flex flex-wrap items-center justify-between gap-3 text-[13px] text-white/70">
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" />
              {productMock.audit}
            </span>
            <span className="text-white/40 text-xs">trace · approval · audit</span>
          </div>
        </div>
      </div>
    </section>
  );
}
