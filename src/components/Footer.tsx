import { brand, footerDisclaimer, mailto, nav } from '../data/content';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-deep text-white/70 border-t border-white/5">
      <div className="container-page py-20 sm:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <Logo tone="dark" />
            <p className="mt-5 text-[15px] text-white/75 max-w-sm leading-relaxed">
              Second Brain компании поверх 1С, CRM, SQL, документов и внутренних систем.
            </p>
            <a
              href={mailto.pilot}
              className="btn-primary mt-6"
            >
              Запросить пилот
            </a>
          </div>

          <div className="md:col-span-3">
            <div className="text-[11px] font-semibold uppercase tracking-widest text-white/40">
              Разделы
            </div>
            <ul className="mt-4 space-y-2.5 text-sm">
              {nav.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="text-white/75 hover:text-white transition"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="text-[11px] font-semibold uppercase tracking-widest text-white/40">
              Контакт
            </div>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a
                  className="text-white/75 hover:text-white transition break-all"
                  href={mailto.general}
                >
                  {brand.email}
                </a>
              </li>
              <li>
                <a
                  className="text-white/75 hover:text-white transition"
                  href={brand.mainSite}
                  target="_blank"
                  rel="noreferrer"
                >
                  core-ai.ru
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="text-[11px] font-semibold uppercase tracking-widest text-white/40">
              Правовая информация
            </div>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a
                  className="text-white/75 hover:text-white transition"
                  href={brand.policy}
                  target="_blank"
                  rel="noreferrer"
                >
                  Политика персональных данных
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-6 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 text-xs text-white/50">
          <span>© 2026 Core AI. Все права защищены.</span>
          <span className="max-w-2xl text-white/45 leading-relaxed">{footerDisclaimer}</span>
        </div>
      </div>
    </footer>
  );
}
