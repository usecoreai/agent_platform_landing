import { enterprise } from '../data/content';

export default function EnterpriseControl() {
  return (
    <section id="enterprise" className="relative overflow-hidden bg-graphite text-white">
      {/* Top edge fade to soften transition from light sections */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[rgba(247,244,239,0.35)] to-transparent"
      />
      <div className="absolute inset-0 -z-10 bg-grid-dark opacity-40" />
      <div className="absolute top-0 left-0 -z-10 h-[300px] w-[300px] rounded-full bg-brand/15 blur-3xl" />

      <div className="container-page py-20 sm:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <span className="eyebrow">Enterprise control plane</span>
            <h2 className="h-section mt-4 text-balance text-white">{enterprise.title}</h2>
            <p className="mt-5 text-base sm:text-lg text-white/75 leading-relaxed">
              {enterprise.copy}
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
              {enterprise.features.map((f) => (
                <div
                  key={f}
                  className="rounded-lg border border-white/10 bg-white/[0.03] px-3.5 py-2.5 text-[13px] text-white/90 transition hover:border-brand/40 hover:bg-white/[0.06]"
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
