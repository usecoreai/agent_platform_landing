import { askVerifyAct } from '../data/content';

export default function AskVerifyAct() {
  return (
    <section className="section">
      <div className="container-page">
        <div className="max-w-3xl">
          <span className="eyebrow">How it works</span>
          <h2 className="h-section mt-4">{askVerifyAct.title}</h2>
          <p className="mt-5 text-base sm:text-lg font-medium text-brand">
            {askVerifyAct.tagline}
          </p>
        </div>

        <ol className="mt-12 grid grid-cols-1 md:grid-cols-5 gap-3">
          {askVerifyAct.steps.map((step, i) => (
            <li key={step.tag} className="relative">
              <div className="rounded-2xl border border-black/10 bg-white p-5 h-full">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono text-ink/50">{String(i + 1).padStart(2, '0')}</span>
                  <span className="chip-brand">{step.tag}</span>
                </div>
                <div className="mt-4 text-sm font-semibold text-ink">{step.title}</div>
                <p className="mt-2 text-[13px] text-ink/65 leading-relaxed">{step.copy}</p>
              </div>
              {i < askVerifyAct.steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-2 h-px w-4 bg-black/10" aria-hidden />
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
