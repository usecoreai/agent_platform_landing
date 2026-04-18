import { whyCoreAI, brand } from '../data/content';

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

        <div className="mt-10">
          <a
            className="btn-coreai"
            href={brand.mainSite}
            target="_blank"
            rel="noreferrer"
            aria-label="Узнать больше о Core AI и нашей команде на core-ai.ru"
          >
            <span className="btn-coreai-inner">
              <span className="btn-coreai-label">Узнать больше о Core AI и нашей команде</span>
              <span className="btn-coreai-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" aria-hidden>
                  <path
                    d="M12.6667 8H3.33337"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.66671 3.99996L12.6667 7.99996L8.66671 12"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
