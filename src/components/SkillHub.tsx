import { skills } from '../data/content';

export default function SkillHub() {
  return (
    <section id="skills" className="section">
      <div className="container-page">
        <div className="max-w-3xl">
          <span className="eyebrow">Skill Hub</span>
          <h2 className="h-section mt-4">{skills.title}</h2>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {skills.items.map((s, i) => (
            <article key={s.title} className="card flex flex-col h-full">
              <div className="text-[11px] font-mono text-ink/40">SK/{String(i + 1).padStart(2, '0')}</div>
              <h3 className="mt-2 text-base font-semibold text-ink leading-snug">{s.title}</h3>
              <p className="mt-2 text-[13px] text-ink/65 leading-relaxed">{s.copy}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {s.tags.map((t) => (
                  <span key={t} className="chip text-[11px] py-0.5">
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
