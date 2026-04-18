import { comparison } from '../data/content';

const Tick = ({ on }: { on: boolean }) =>
  on ? (
    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand text-white">
      <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden>
        <path
          d="M2 6.5l2.5 2.5L10 3.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  ) : (
    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-black/10 text-ink/30">
      <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden>
        <path
          d="M2 2l6 6M8 2l-6 6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );

export default function Comparison() {
  return (
    <section className="section">
      <div className="container-page">
        <div className="max-w-3xl">
          <span className="eyebrow">Сравнение</span>
          <h2 className="h-section mt-4 text-balance">{comparison.title}</h2>
          <p className="lead mt-5">
            Как CoreAI отличается от обычных AI-чатов, встроенного AI в одной системе и узких виджетов.
          </p>
        </div>

        <div className="mt-10 overflow-x-auto rounded-2xl border border-black/10 bg-white shadow-card">
          <table className="w-full min-w-[760px] text-left text-sm">
            <thead>
              <tr className="border-b border-black/5">
                <th className="px-5 py-4 text-[11px] font-semibold uppercase tracking-widest text-ink/50">
                  Возможность
                </th>
                {comparison.columns.map((col, i) => (
                  <th
                    key={col}
                    className={`px-5 py-4 text-[12px] font-semibold ${
                      i === comparison.columns.length - 1
                        ? 'text-brand'
                        : 'text-ink/60'
                    }`}
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparison.rows.map((row, ri) => (
                <tr
                  key={row.label}
                  className={`transition hover:bg-black/[0.015] ${
                    ri % 2 === 0 ? 'bg-white' : 'bg-bg-soft/70'
                  }`}
                >
                  <td className="px-5 py-3.5 text-[13px] text-ink/85">{row.label}</td>
                  {row.values.map((v, i) => (
                    <td
                      key={i}
                      className={`px-5 py-3.5 ${
                        i === row.values.length - 1 ? 'bg-brand/[0.06]' : ''
                      }`}
                    >
                      <Tick on={v} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
