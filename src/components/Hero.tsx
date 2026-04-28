import { hero } from '../data/content';
import ProductMock from './ProductMock';

interface HeroProps {
  onOpenContactForm: () => void
}

export default function Hero({ onOpenContactForm }: HeroProps) {
  return (
    <section id="platform" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 gradient-radial" />
      <div className="absolute inset-x-0 top-0 -z-10 h-[480px] bg-grid opacity-40" />

      <div className="container-page pt-14 pb-20 sm:pt-20 sm:pb-28">
        <div className="flex flex-col gap-10 lg:gap-12">
          <div className="max-w-3xl">
            <span className="eyebrow">{hero.eyebrow}</span>
            <h1 className="h-display mt-4 text-balance">{hero.headline}</h1>
            <p className="lead mt-5 max-w-2xl">{hero.subheadline}</p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button className="btn-primary-lg" type="button" onClick={onOpenContactForm}>
                {hero.ctaPrimary}
              </button>
              <button className="btn-ghost" type="button" onClick={onOpenContactForm}>
                {hero.ctaSecondary}
              </button>
            </div>

            <ul className="mt-8 flex flex-wrap gap-2">
              {hero.badges.map((b) => (
                <li key={b} className="chip">
                  {b}
                </li>
              ))}
            </ul>
          </div>

          <ProductMock />
        </div>
      </div>
    </section>
  );
}
