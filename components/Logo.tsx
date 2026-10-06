export function LogoMark({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true" className="shrink-0">
      <defs>
        <linearGradient id="agMark" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#8eeaff" />
          <stop offset=".55" stopColor="#3fb8ff" />
          <stop offset="1" stopColor="#8b63ff" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="60" height="60" rx="18" fill="var(--logo-bg, #07111d)" stroke="url(#agMark)" strokeWidth="1.5" />
      <path d="M12 38c4-15 12-24 20-24s16 9 20 24" fill="none" stroke="url(#agMark)" strokeWidth="2.2" opacity=".85" />
      <path d="M16 39c5-8 10-12 16-12s11 4 16 12" fill="none" stroke="#d9f8ff" strokeOpacity=".45" />
      <path d="M25 22v21M39 22v21M28 25c-3 3-4 6-4 9s1 6 4 9M36 25c3 3 4 6 4 9s-1 6-4 9" fill="none" stroke="#d9f8ff" strokeWidth="1.5" />
      <circle cx="32" cy="47" r="3" fill="#69ddff" />
    </svg>
  );
}

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <LogoMark size={36}/>
      <span className={`font-display text-[24px] font-semibold leading-none tracking-[-.045em] sm:text-[28px] ${light ? "text-paper" : "text-ink"}`}>
        Aether <span className="font-normal text-cyan">Grove</span>
      </span>
    </span>
  );
}
