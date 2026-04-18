import { whyCoreAI } from '../data/content';

export default function WhyCoreAI() {
  return (
    <section className="section">
      <div className="container-page">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <span className="eyebrow">Why CoreAI</span>
            <h2 className="h-section mt-4">{whyCoreAI.title}</h2>
          </div>
          <div className="lg:col-span-7">
            <p className="lead">{whyCoreAI.copy}</p>
            <ul className="mt-7 space-y-3">
              {whyCoreAI.bullets.map((b) => (
                <li
                  key={b}
                  className="flex gap-3 rounded-xl border border-black/5 bg-white p-4"
                >
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-brand" />
                  <span className="text-[14px] text-ink/85">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
