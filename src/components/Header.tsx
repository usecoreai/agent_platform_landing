import { useEffect, useState } from 'react';
import { nav, hero, mailto } from '../data/content';
import Logo from './Logo';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      id="top"
      className={`sticky top-0 z-50 transition-colors ${
        scrolled ? 'bg-bg/85 backdrop-blur border-b border-black/5' : 'bg-transparent'
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between">
        <Logo />
        <nav className="hidden lg:flex items-center gap-7" aria-label="Главная навигация">
          {nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="relative text-sm text-ink/70 transition hover:text-ink after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-brand after:transition-all hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-3">
          <a className="btn-primary" href={mailto.pilot}>
            {hero.ctaPrimary}
          </a>
        </div>
        <button
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white"
          aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-3 w-4">
            <span
              className={`absolute left-0 top-0 h-0.5 w-4 bg-ink transition-transform ${
                open ? 'translate-y-1.5 rotate-45' : ''
              }`}
            />
            <span
              className={`absolute left-0 bottom-0 h-0.5 w-4 bg-ink transition-transform ${
                open ? '-translate-y-1 -rotate-45' : ''
              }`}
            />
          </span>
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-black/5 bg-bg">
          <div className="container-page py-6 flex flex-col gap-1">
            {nav.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="px-2 py-3 text-base text-ink/80 hover:text-ink"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a className="btn-primary mt-4" href={mailto.pilot} onClick={() => setOpen(false)}>
              {hero.ctaPrimary}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
