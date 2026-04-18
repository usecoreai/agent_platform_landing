import { secondBrain } from '../data/content';

export default function SecondBrain() {
  return (
    <section className="section">
      <div className="container-page">
        <div className="max-w-3xl">
          <span className="eyebrow">Second Brain</span>
          <h2 className="h-section mt-4 text-balance">{secondBrain.title}</h2>
          <p className="lead mt-5 max-w-2xl">{secondBrain.copy}</p>

          <div className="mt-7 flex flex-wrap items-center gap-x-2 gap-y-2">
            {secondBrain.formula.split('+').map((part, i, arr) => (
              <span key={part} className="flex items-center gap-2">
                <span className="rounded-full border border-black/10 bg-white px-3.5 py-1.5 text-sm font-semibold tracking-tight text-ink">
                  {part.trim()}
                </span>
                {i < arr.length - 1 && (
                  <span className="text-brand font-semibold" aria-hidden>
                    +
                  </span>
                )}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {secondBrain.cards.map((c) => (
            <div
              key={c.title}
              className="rounded-xl border border-black/10 bg-white p-5 h-full card-hover hover:border-brand/40"
            >
              <div className="text-sm font-semibold text-ink">{c.title}</div>
              <div className="mt-1.5 text-[13px] text-ink/65 leading-relaxed">{c.copy}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
