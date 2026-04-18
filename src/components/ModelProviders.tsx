import { modelProviders } from '../data/content';

export default function ModelProviders() {
  return (
    <section className="section bg-bg-soft border-y border-black/5">
      <div className="container-page">
        <div className="max-w-3xl">
          <span className="eyebrow">Models</span>
          <h2 className="h-section mt-4">{modelProviders.title}</h2>
          <p className="lead mt-5">{modelProviders.copy}</p>
        </div>

        <ul className="mt-10 flex flex-wrap gap-2">
          {modelProviders.providers.map((p) => (
            <li
              key={p}
              className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-medium text-ink"
            >
              {p}
            </li>
          ))}
        </ul>

        <p className="mt-6 text-xs text-ink/55 max-w-3xl">{modelProviders.note}</p>
      </div>
    </section>
  );
}
