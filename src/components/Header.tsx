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
// Top-level nav items rendered as plain links
const TOP_LEVEL_IDS = ['platform', /* 'enterprise', */ 'partners', 'pilot'];
// Hash IDs to observe for scroll-spy (includes platform children for /platform page)
const OBSERVED_IDS = ['platform', 'partners', 'pilot', 'skills', 'pipelines', 'connectors'];

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
  const [activeSection, setActiveSection] = useState<string>('');

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
    setActiveSection('');
  }, [location.pathname]);

  // Scroll-spy: track which section is currently in view
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    OBSERVED_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.25, rootMargin: '-64px 0px -45% 0px' },
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [location.pathname]);

  const isHome = location.pathname === '/';
  function hashHref(id: string) {
    return isHome ? `#${id}` : `/#${id}`;
  }
  function platformHref(id: string) {
    return `/platform#${id}`;
  }

  // Active state helpers
  const isPlatformRoute = location.pathname === '/platform';
  const isCasesRoute = location.pathname.startsWith('/cases');

  function isHashActive(id: string) {
    return activeSection === id;
  }
  function isPlatformChildActive(id: string) {
    return isPlatformRoute && activeSection === id;
  }

  // Build class strings
  function navLinkCls(active: boolean) {
    return [
      'relative text-sm transition',
      'after:absolute after:left-0 after:-bottom-1 after:h-px after:bg-brand after:transition-all',
      active
        ? 'text-ink after:w-full'
        : 'text-ink/70 hover:text-ink after:w-0 hover:after:w-full',
    ].join(' ');
  }

  function dropdownTriggerCls(active: boolean) {
    return [
      'relative flex items-center gap-1.5 text-sm transition',
      'after:absolute after:left-0 after:-bottom-1 after:h-px after:bg-brand after:transition-all',
      active
        ? 'text-ink after:w-full'
        : 'text-ink/70 hover:text-ink after:w-0 hover:after:w-full',
    ].join(' ');
  }

  function dropdownItemCls(active: boolean) {
    return [
      'flex items-center rounded-xl px-3.5 py-2.5 text-[13px] font-medium transition',
      active ? 'bg-brand/8 text-brand' : 'text-ink hover:bg-bg',
    ].join(' ');
  }

  function caseItemCls(slug: string) {
    const active = location.pathname === `/cases/${slug}`;
    return [
      'flex flex-col rounded-xl px-3.5 py-3 transition',
      active ? 'bg-brand/8' : 'hover:bg-bg',
    ].join(' ');
  }

  const platformChildren = nav.filter((n) => PLATFORM_CHILDREN.includes(n.id));
  const topLevelItems = nav.filter((n) => TOP_LEVEL_IDS.includes(n.id));

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
            <a key={item.id} href={hashHref(item.id)} className={navLinkCls(isHashActive(item.id))}>
              {item.label}
            </a>
          ))}

          {/* Платформа dropdown */}
          <div ref={platform.ref} className="relative">
            <button
              type="button"
              className={dropdownTriggerCls(isPlatformRoute)}
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
                      href={platformHref(item.id)}
                      className={dropdownItemCls(isPlatformChildActive(item.id))}
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
            <a key={item.id} href={hashHref(item.id)} className={navLinkCls(isHashActive(item.id))}>
              {item.label}
            </a>
          ))}

          {/* Кейсы dropdown */}
          <div ref={cases.ref} className="relative">
            <button
              type="button"
              className={dropdownTriggerCls(isCasesRoute)}
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
                      className={caseItemCls(u.slug)}
                      onClick={() => cases.setOpen(false)}
                    >
                      <span className={`text-[13px] font-semibold leading-snug ${location.pathname === `/cases/${u.slug}` ? 'text-brand' : 'text-ink'}`}>
                        {u.role}
                      </span>
                      <span className="text-[11px] text-ink/50 mt-0.5 leading-snug">{u.effect}</span>
                    </Link>
                  ))}
                </div>
                <div className="border-t border-black/5 px-3.5 py-3">
                  <Link
                    to="/cases"
                    className={`text-[11px] font-semibold uppercase tracking-[0.12em] transition ${location.pathname === '/cases' ? 'text-brand' : 'text-brand/70 hover:text-brand'}`}
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
                className={`px-2 py-3 text-base transition ${isHashActive(item.id) ? 'text-brand font-semibold' : 'text-ink/80 hover:text-ink'}`}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </a>
            ))}

            {/* Платформа accordion */}
            <div>
              <button
                type="button"
                className={`flex w-full items-center justify-between px-2 py-3 text-base transition ${isPlatformRoute ? 'text-brand font-semibold' : 'text-ink/80 hover:text-ink'}`}
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
                      href={platformHref(item.id)}
                      className={`rounded-xl px-3 py-2.5 text-sm font-medium transition ${isPlatformChildActive(item.id) ? 'text-brand bg-brand/5' : 'text-ink/70 hover:text-ink hover:bg-black/5'}`}
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Top-level plain links (excluding platform) */}
            {topLevelItems.filter((i) => i.id !== 'platform').map((item) => (
              <a
                key={item.id}
                href={hashHref(item.id)}
                className={`px-2 py-3 text-base transition ${isHashActive(item.id) ? 'text-brand font-semibold' : 'text-ink/80 hover:text-ink'}`}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </a>
            ))}

            {/* Кейсы accordion */}
            <div>
              <button
                type="button"
                className={`flex w-full items-center justify-between px-2 py-3 text-base transition ${isCasesRoute ? 'text-brand font-semibold' : 'text-ink/80 hover:text-ink'}`}
                onClick={() => setMobileCasesOpen((v) => !v)}
              >
                <span>Кейсы</span>
                <ChevronDown open={mobileCasesOpen} />
              </button>
              {mobileCasesOpen && (
                <div className="ml-4 flex flex-col gap-0.5 pb-1">
                  {useCasesDetail.map((u) => {
                    const active = location.pathname === `/cases/${u.slug}`;
                    return (
                      <Link
                        key={u.slug}
                        to={`/cases/${u.slug}`}
                        className={`rounded-xl px-3 py-2.5 text-sm transition ${active ? 'text-brand bg-brand/5 font-semibold' : 'text-ink/70 hover:text-ink hover:bg-black/5'}`}
                        onClick={() => setMobileOpen(false)}
                      >
                        <span className="font-medium">{u.role}</span>
                        <span className="block text-[11px] text-ink/40 mt-0.5">{u.effect}</span>
                      </Link>
                    );
                  })}
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
