import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { nav, hero } from '../data/content';
import { useCasesDetail } from '../data/use-cases-detail';
import Logo from './Logo';

const ChevronDown = ({ open }: { open: boolean }) => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    aria-hidden
    className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
  >
    <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// IDs nested inside the "Платформа" dropdown
const PLATFORM_CHILDREN = ['skills', 'pipelines', 'connectors'];

// Top-level nav items rendered as plain links (excludes platform children)
const TOP_LEVEL_IDS = ['platform', /* 'enterprise', */ 'partners', 'pilot'];

interface HeaderProps {
  onOpenContactForm: () => void
}

function useDropdown() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return { open, setOpen, ref };
}

export default function Header({ onOpenContactForm }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobilePlatformOpen, setMobilePlatformOpen] = useState(false);
  const [mobileCasesOpen, setMobileCasesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const platform = useDropdown();
  const cases = useDropdown();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  useEffect(() => {
    setMobileOpen(false);
    setMobilePlatformOpen(false);
    setMobileCasesOpen(false);
  }, [location.pathname]);

  const isHome = location.pathname === '/';
  function hashHref(id: string) {
    return isHome ? `#${id}` : `/#${id}`;
  }

  const platformChildren = nav.filter((n) => PLATFORM_CHILDREN.includes(n.id));
  const topLevelItems = nav.filter((n) => TOP_LEVEL_IDS.includes(n.id));

  const navLinkClass =
    'relative text-sm text-ink/70 transition hover:text-ink after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-brand after:transition-all hover:after:w-full';

  const dropdownTriggerClass =
    'relative flex items-center gap-1.5 text-sm text-ink/70 transition hover:text-ink after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-brand after:transition-all hover:after:w-full';

  return (
    <header
      id="top"
      className={`sticky top-0 z-50 transition-colors ${
        scrolled ? 'bg-bg/85 backdrop-blur border-b border-black/5' : 'bg-transparent'
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between">
        <Logo />

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-7" aria-label="Главная навигация">

          {/* CoreAI решение — first link */}
          {topLevelItems.filter((i) => i.id === 'platform').map((item) => (
            <a key={item.id} href={hashHref(item.id)} className={navLinkClass}>
              {item.label}
            </a>
          ))}

          {/* Платформа dropdown */}
          <div ref={platform.ref} className="relative">
            <button
              type="button"
              className={dropdownTriggerClass}
              onClick={() => platform.setOpen((v) => !v)}
              onMouseEnter={() => platform.setOpen(true)}
              aria-haspopup="true"
              aria-expanded={platform.open}
            >
              Платформа
              <ChevronDown open={platform.open} />
            </button>

            {platform.open && (
              <div
                className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-52 rounded-2xl border border-black/5 bg-white shadow-[0_8px_32px_rgba(0,0,0,0.10)] overflow-hidden"
                onMouseLeave={() => platform.setOpen(false)}
              >
                <div className="p-1.5">
                  {platformChildren.map((item) => (
                    <a
                      key={item.id}
                      href={hashHref(item.id)}
                      className="flex items-center rounded-xl px-3.5 py-2.5 text-[13px] font-medium text-ink hover:bg-bg transition"
                      onClick={() => platform.setOpen(false)}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Top-level plain links (excluding platform, rendered first) */}
          {topLevelItems.filter((i) => i.id !== 'platform').map((item) => (
            <a key={item.id} href={hashHref(item.id)} className={navLinkClass}>
              {item.label}
            </a>
          ))}

          {/* Кейсы dropdown */}
          <div ref={cases.ref} className="relative">
            <button
              type="button"
              className={dropdownTriggerClass}
              onClick={() => cases.setOpen((v) => !v)}
              onMouseEnter={() => cases.setOpen(true)}
              aria-haspopup="true"
              aria-expanded={cases.open}
            >
              Кейсы
              <ChevronDown open={cases.open} />
            </button>

            {cases.open && (
              <div
                className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 rounded-2xl border border-black/5 bg-white shadow-[0_8px_32px_rgba(0,0,0,0.10)] overflow-hidden"
                onMouseLeave={() => cases.setOpen(false)}
              >
                <div className="p-1.5">
                  {useCasesDetail.map((u) => (
                    <Link
                      key={u.slug}
                      to={`/cases/${u.slug}`}
                      className="flex flex-col rounded-xl px-3.5 py-3 hover:bg-bg transition"
                      onClick={() => cases.setOpen(false)}
                    >
                      <span className="text-[13px] font-semibold text-ink leading-snug">{u.role}</span>
                      <span className="text-[11px] text-ink/50 mt-0.5 leading-snug">{u.effect}</span>
                    </Link>
                  ))}
                </div>
                <div className="border-t border-black/5 px-3.5 py-3">
                  <Link
                    to="/cases"
                    className="text-[11px] font-semibold uppercase tracking-[0.12em] text-brand hover:text-brand/80 transition"
                    onClick={() => cases.setOpen(false)}
                  >
                    Все кейсы →
                  </Link>
                </div>
              </div>
            )}
          </div>
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <button className="btn-primary" type="button" onClick={onOpenContactForm}>
            {hero.ctaPrimary}
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white"
          aria-label={mobileOpen ? 'Закрыть меню' : 'Открыть меню'}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span className="relative block h-3 w-4">
            <span
              className={`absolute left-0 top-0 h-0.5 w-4 bg-ink transition-transform ${
                mobileOpen ? 'translate-y-1.5 rotate-45' : ''
              }`}
            />
            <span
              className={`absolute left-0 bottom-0 h-0.5 w-4 bg-ink transition-transform ${
                mobileOpen ? '-translate-y-1 -rotate-45' : ''
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-black/5 bg-bg">
          <div className="container-page py-6 flex flex-col gap-1">

            {/* CoreAI решение — first link */}
            {topLevelItems.filter((i) => i.id === 'platform').map((item) => (
              <a
                key={item.id}
                href={hashHref(item.id)}
                className="px-2 py-3 text-base text-ink/80 hover:text-ink"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </a>
            ))}

            {/* Платформа accordion */}
            <div>
              <button
                type="button"
                className="flex w-full items-center justify-between px-2 py-3 text-base text-ink/80 hover:text-ink"
                onClick={() => setMobilePlatformOpen((v) => !v)}
              >
                <span>Платформа</span>
                <ChevronDown open={mobilePlatformOpen} />
              </button>
              {mobilePlatformOpen && (
                <div className="ml-4 flex flex-col gap-0.5 pb-1">
                  {platformChildren.map((item) => (
                    <a
                      key={item.id}
                      href={hashHref(item.id)}
                      className="rounded-xl px-3 py-2.5 text-sm font-medium text-ink/70 hover:text-ink hover:bg-black/5 transition"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Top-level plain links (excluding platform, rendered first) */}
            {topLevelItems.filter((i) => i.id !== 'platform').map((item) => (
              <a
                key={item.id}
                href={hashHref(item.id)}
                className="px-2 py-3 text-base text-ink/80 hover:text-ink"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </a>
            ))}

            {/* Кейсы accordion */}
            <div>
              <button
                type="button"
                className="flex w-full items-center justify-between px-2 py-3 text-base text-ink/80 hover:text-ink"
                onClick={() => setMobileCasesOpen((v) => !v)}
              >
                <span>Кейсы</span>
                <ChevronDown open={mobileCasesOpen} />
              </button>
              {mobileCasesOpen && (
                <div className="ml-4 flex flex-col gap-0.5 pb-1">
                  {useCasesDetail.map((u) => (
                    <Link
                      key={u.slug}
                      to={`/cases/${u.slug}`}
                      className="rounded-xl px-3 py-2.5 text-sm text-ink/70 hover:text-ink hover:bg-black/5 transition"
                      onClick={() => setMobileOpen(false)}
                    >
                      <span className="font-medium">{u.role}</span>
                      <span className="block text-[11px] text-ink/40 mt-0.5">{u.effect}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <button
              className="btn-primary mt-4"
              type="button"
              onClick={() => {
                setMobileOpen(false);
                onOpenContactForm();
              }}
            >
              {hero.ctaPrimary}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
