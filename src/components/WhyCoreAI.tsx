import { whyCoreAI } from '../data/content';

export default function WhyCoreAI() {
  return (
    <section className="section">
      <div className="container-page">
        <div className="max-w-3xl">
          <span className="eyebrow">Why CoreAI</span>
          <h2 className="h-section mt-4 text-balance">{whyCoreAI.title}</h2>
          <p className="lead mt-5">{whyCoreAI.copy}</p>
        </div>

        <ul className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-3 max-w-4xl">
          {whyCoreAI.bullets.map((b) => (
            <li
              key={b}
              className="flex gap-3 rounded-xl border border-black/5 bg-white p-4 card-hover"
            >
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand" />
              <span className="text-[14px] text-ink/85 leading-relaxed">{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
