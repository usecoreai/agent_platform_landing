import { productMock } from '../data/content';

export default function ProductMock() {
  return (
    <div className="relative">
      <div className="absolute -inset-6 -z-10 rounded-[32px] bg-gradient-to-br from-brand/15 via-transparent to-black/5 blur-2xl" />
      <div className="rounded-[24px] border border-black/10 bg-graphite text-white shadow-2xl overflow-hidden">
        {/* Window chrome */}
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          </div>
          <div className="text-[11px] uppercase tracking-widest text-white/40">
            CoreAI · Agent Workspace
          </div>
          <div className="text-[11px] text-white/40">trace · #4f81e2</div>
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-12 gap-px bg-white/10">
          {/* Left: agents */}
          <aside className="col-span-12 md:col-span-3 bg-graphite p-4">
            <div className="text-[10px] uppercase tracking-widest text-white/40 mb-3">Agents</div>
            <ul className="space-y-2">
              {productMock.agents.map((a, i) => (
                <li
                  key={a.name}
                  className={`rounded-lg border px-3 py-2 ${
                    i === 0
                      ? 'border-brand/40 bg-brand/10 text-white'
                      : 'border-white/10 bg-white/[0.03] text-white/80'
                  }`}
                >
                  <div className="text-xs font-semibold flex items-center gap-2">
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        i === 0 ? 'bg-brand' : 'bg-white/30'
                      }`}
                    />
                    {a.name}
                  </div>
                  <div className="text-[11px] text-white/50 mt-0.5">{a.role}</div>
                </li>
              ))}
            </ul>
          </aside>

          {/* Center: goal + pipeline */}
          <section className="col-span-12 md:col-span-6 bg-graphite p-5">
            <div className="text-[10px] uppercase tracking-widest text-white/40 mb-2">User goal</div>
            <p className="text-[13px] leading-relaxed text-white/90">
              <span className="text-white/50">›</span> {productMock.goal}
            </p>

            <div className="mt-5 text-[10px] uppercase tracking-widest text-white/40 mb-3">
              Pipeline
            </div>
            <ol className="space-y-1.5">
              {productMock.pipeline.map((step, i) => {
                const status = i < 5 ? 'done' : i === 5 ? 'active' : 'queued';
                return (
                  <li
                    key={step}
                    className="flex items-center justify-between rounded-md border border-white/10 bg-white/[0.03] px-3 py-2"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span
                        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-semibold ${
                          status === 'done'
                            ? 'bg-brand text-white'
                            : status === 'active'
                            ? 'border border-brand text-brand'
                            : 'border border-white/20 text-white/40'
                        }`}
                      >
                        {i + 1}
                      </span>
                      <span
                        className={`text-[12.5px] truncate ${
                          status === 'queued' ? 'text-white/40' : 'text-white/85'
                        }`}
                      >
                        {step}
                      </span>
                    </div>
                    <span
                      className={`text-[10px] uppercase tracking-wider ${
                        status === 'done'
                          ? 'text-brand'
                          : status === 'active'
                          ? 'text-white'
                          : 'text-white/30'
                      }`}
                    >
                      {status}
                    </span>
                  </li>
                );
              })}
            </ol>
          </section>

          {/* Right: context */}
          <aside className="col-span-12 md:col-span-3 bg-graphite p-4">
            <div className="text-[10px] uppercase tracking-widest text-white/40 mb-3">Context</div>
            <ul className="space-y-1.5">
              {productMock.context.map((ctx) => (
                <li
                  key={ctx}
                  className="flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-2 text-[11px] text-white/80"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                  {ctx}
                </li>
              ))}
            </ul>

            <div className="mt-5 text-[10px] uppercase tracking-widest text-white/40 mb-2">
              Result
            </div>
            <div className="rounded-md border border-white/10 bg-white/[0.04] p-3">
              <div className="text-[11px] text-white/60">CEO Dashboard</div>
              <div className="mt-2 grid grid-cols-2 gap-2">
                <div className="rounded bg-black/40 p-2">
                  <div className="text-[10px] text-white/50">Revenue</div>
                  <div className="text-sm font-semibold text-white">−7,4%</div>
                </div>
                <div className="rounded bg-black/40 p-2">
                  <div className="text-[10px] text-white/50">Margin</div>
                  <div className="text-sm font-semibold text-brand">High risk</div>
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* Audit footer */}
        <div className="border-t border-white/10 px-4 py-3 text-[11px] text-white/55 flex items-center justify-between gap-3 flex-wrap">
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            {productMock.audit}
          </span>
          <span className="text-white/30">approval · audit · trace</span>
        </div>
      </div>
    </div>
  );
}
