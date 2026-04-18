import { problem } from '../data/content';

export default function Problem() {
  return (
    <section className="section bg-bg-soft border-y border-black/5">
      <div className="container-page">
        <div className="max-w-3xl">
          <span className="eyebrow">Проблема</span>
          <h2 className="h-section mt-4 text-balance">{problem.title}</h2>
        </div>
        <ul className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {problem.items.map((item, i) => (
            <li key={item} className="card card-hover h-full flex gap-4">
              <span className="num shrink-0 mt-0.5">{String(i + 1).padStart(2, '0')}</span>
              <span className="text-[15px] leading-relaxed text-ink/85">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
