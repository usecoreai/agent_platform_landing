import { brand, footerDisclaimer, mailto } from '../data/content';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-deep text-white/70">
      <div className="container-page py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <Logo tone="dark" />
            <p className="mt-4 text-sm text-white/55 max-w-sm leading-relaxed">
              Second Brain компании поверх 1С, CRM, SQL, документов и внутренних систем.
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="text-[11px] uppercase tracking-widest text-white/40">Контакт</div>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a className="hover:text-white" href={mailto.general}>
                  {brand.email}
                </a>
              </li>
              <li>
                <a className="hover:text-white" href={brand.mainSite} target="_blank" rel="noreferrer">
                  www.core-ai.ru
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="text-[11px] uppercase tracking-widest text-white/40">Документы</div>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a
                  className="hover:text-white"
                  href={brand.policy}
                  target="_blank"
                  rel="noreferrer"
                >
                  Политика обработки персональных данных
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs text-white/45">
          <span>© 2026 Core AI. Все права защищены.</span>
          <span className="max-w-2xl text-white/40">{footerDisclaimer}</span>
        </div>
      </div>
    </footer>
  );
}
