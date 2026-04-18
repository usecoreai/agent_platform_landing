type Props = { className?: string; tone?: 'light' | 'dark' };

export default function Logo({ className = '', tone = 'light' }: Props) {
  const text = tone === 'dark' ? 'text-white' : 'text-ink';
  return (
    <a href="#top" className={`inline-flex items-center gap-2 ${className}`} aria-label="CoreAI Platform">
      <svg width="28" height="28" viewBox="0 0 32 32" aria-hidden="true">
        <rect width="32" height="32" rx="8" fill={tone === 'dark' ? '#FFFFFF' : '#111111'} />
        <circle cx="16" cy="16" r="7" fill="none" stroke="#FF5A1F" strokeWidth="2.4" />
        <circle cx="16" cy="16" r="2.4" fill="#FF5A1F" />
      </svg>
      <span className={`text-[15px] font-semibold tracking-tight ${text}`}>
        CoreAI <span className="text-brand">Platform</span>
      </span>
    </a>
  );
}
