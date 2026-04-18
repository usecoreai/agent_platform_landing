import { secondBrain } from '../data/content';

export default function SecondBrain() {
  return (
    <section className="section">
      <div className="container-page">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <span className="eyebrow">Second Brain</span>
            <h2 className="h-section mt-4">{secondBrain.title}</h2>
            <p className="lead mt-5">{secondBrain.copy}</p>
            <div className="mt-7 inline-flex flex-wrap items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-semibold tracking-tight text-ink">
              {secondBrain.formula.split('+').map((part, i, arr) => (
                <span key={part} className="flex items-center gap-2">
                  <span>{part.trim()}</span>
                  {i < arr.length - 1 && <span className="text-brand">+</span>}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {secondBrain.cards.map((c) => (
                <div
                  key={c.title}
                  className="rounded-xl border border-black/10 bg-white p-4 hover:border-brand/40 transition"
                >
                  <div className="text-sm font-semibold text-ink">{c.title}</div>
                  <div className="mt-1 text-[13px] text-ink/65 leading-relaxed">{c.copy}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
