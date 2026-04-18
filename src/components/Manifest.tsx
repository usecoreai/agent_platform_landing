import { manifest } from '../data/content';

export default function Manifest() {
  return (
    <section className="section">
      <div className="container-page">
        <div className="max-w-3xl">
          <span className="eyebrow">Манифест</span>
          <h2 className="h-section mt-4">{manifest.title}</h2>
          <p className="lead mt-5">{manifest.copy}</p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
          {manifest.cards.map((card, i) => (
            <article key={card.title} className="card relative">
              <div className="text-[11px] uppercase tracking-widest text-ink/40">0{i + 1}</div>
              <h3 className="h-card mt-2">{card.title}</h3>
              <p className="mt-3 text-sm text-ink/70 leading-relaxed">{card.copy}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-black/10 bg-graphite text-white p-6 sm:p-8">
          <p className="text-xl sm:text-2xl font-semibold tracking-tight leading-snug">
            {manifest.punchline[0]}
            <br />
            <span className="text-brand">{manifest.punchline[1]}</span>
          </p>
        </div>
      </div>
    </section>
  );
}
