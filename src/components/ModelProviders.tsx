import { modelProviders } from '../data/content';

export default function ModelProviders() {
  return (
    <section className="section bg-bg-soft border-y border-black/5">
      <div className="container-page">
        <div className="max-w-3xl">
          <span className="eyebrow">Models</span>
          <h2 className="h-section mt-4 text-balance">{modelProviders.title}</h2>
          <p className="lead mt-5">{modelProviders.copy}</p>
        </div>

        <ul className="mt-10 flex flex-wrap gap-2">
          {modelProviders.providers.map((p) => (
            <li
              key={p}
              className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-medium text-ink transition hover:border-brand/40 hover:text-brand"
            >
              {p}
            </li>
          ))}
        </ul>

        <div className="mt-8 max-w-3xl border-t border-black/5 pt-5 flex items-start gap-2.5">
          <span
            aria-hidden
            className="mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-black/10 text-[10px] font-semibold text-ink/40"
          >
            i
          </span>
          <p className="text-[12.5px] italic text-ink/55 leading-relaxed">{modelProviders.note}</p>
        </div>
      </div>
    </section>
  );
}
