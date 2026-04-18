import { hero, mailto } from '../data/content';
import ProductMock from './ProductMock';

export default function Hero() {
  return (
    <section id="platform" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 gradient-radial" />
      <div className="absolute inset-x-0 top-0 -z-10 h-[480px] bg-grid opacity-40" />

      <div className="container-page pt-14 pb-20 sm:pt-20 sm:pb-28">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10 items-start">
          <div className="lg:col-span-6 xl:col-span-7">
            <span className="eyebrow">{hero.eyebrow}</span>
            <h1 className="h-display mt-4">{hero.headline}</h1>
            <p className="lead mt-5 max-w-2xl">{hero.subheadline}</p>

            <div className="mt-6 rounded-2xl border border-black/10 bg-white/70 backdrop-blur p-4 sm:p-5 max-w-xl">
              <div className="text-[11px] uppercase tracking-widest text-ink/50">Манифест</div>
              <p className="mt-1.5 text-base sm:text-lg font-medium tracking-tight text-ink">
                {hero.manifest[0]}
                <br />
                {hero.manifest[1]}
              </p>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a className="btn-primary" href={mailto.pilot}>
                {hero.ctaPrimary}
              </a>
              <a className="btn-ghost" href={mailto.partner}>
                {hero.ctaSecondary}
              </a>
            </div>

            <ul className="mt-8 flex flex-wrap gap-2">
              {hero.badges.map((b) => (
                <li key={b} className="chip">
                  {b}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-6 xl:col-span-5">
            <ProductMock />
          </div>
        </div>
      </div>
    </section>
  );
}
