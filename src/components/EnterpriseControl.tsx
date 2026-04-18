import { enterprise } from '../data/content';

export default function EnterpriseControl() {
  return (
    <section id="enterprise" className="section bg-graphite text-white relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-grid-dark opacity-40" />
      <div className="absolute top-0 left-0 -z-10 h-[300px] w-[300px] rounded-full bg-brand/15 blur-3xl" />

      <div className="container-page">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand">
              <span className="h-[6px] w-[6px] rounded-full bg-brand" />
              Enterprise control plane
            </span>
            <h2 className="h-section mt-4 text-white">{enterprise.title}</h2>
            <p className="mt-5 text-base sm:text-lg text-white/70 leading-relaxed">
              {enterprise.copy}
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
              {enterprise.features.map((f) => (
                <div
                  key={f}
                  className="rounded-lg border border-white/10 bg-white/[0.03] px-3.5 py-2.5 text-[13px] text-white/85 hover:border-brand/40 transition"
                >
                  {f}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
