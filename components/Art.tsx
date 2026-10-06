/* Premium Aether Grove SVG artwork. */

export function VinylHero({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 620 560" className={className} role="img" aria-label="Aether Grove signal portal with a luminous harp and sound waves">
      <defs>
        <radialGradient id="agAura"><stop offset="0" stopColor="#63ddff" stopOpacity=".34"/><stop offset=".55" stopColor="#4969ff" stopOpacity=".12"/><stop offset="1" stopColor="#07111d" stopOpacity="0"/></radialGradient>
        <linearGradient id="agRing" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#baf4ff"/><stop offset=".48" stopColor="#45caff"/><stop offset="1" stopColor="#8b63ff"/></linearGradient>
        <linearGradient id="agMetal"><stop stopColor="#dffaff"/><stop offset=".45" stopColor="#7fa6bd"/><stop offset="1" stopColor="#263f55"/></linearGradient>
        <filter id="agGlow"><feGaussianBlur stdDeviation="10"/></filter>
      </defs>
      <circle cx="320" cy="280" r="245" fill="url(#agAura)"/>
      <circle cx="320" cy="280" r="182" fill="none" stroke="#55d7ff" strokeOpacity=".13" strokeWidth="28" filter="url(#agGlow)"/>
      <g className="animate-float">
        <path d="M155 382V205c0-74 74-133 165-133s165 59 165 133v177" fill="none" stroke="url(#agMetal)" strokeWidth="22" strokeLinecap="round"/>
        <path d="M167 382V208c0-67 68-122 153-122s153 55 153 122v174" fill="#081522" stroke="url(#agRing)" strokeWidth="3"/>
        <path d="M189 370V213c0-54 58-99 131-99s131 45 131 99v157" fill="#0b2030" stroke="#8eeaff" strokeOpacity=".28" strokeWidth="2"/>
        <path d="M218 354c30-55 37-103 37-154M240 370c18-64 25-112 25-173M272 370V183M302 370V171M334 370V171M366 370v12M398 370c-18-64-25-112-25-173M420 354c-30-55-37-103-37-154" fill="none" stroke="#7be5ff" strokeOpacity=".5" strokeWidth="3"/>
        <path d="M257 190c-15 13-25 34-25 58 0 49 38 89 85 89s85-40 85-89c0-24-10-45-25-58" fill="none" stroke="#dffaff" strokeWidth="5" strokeLinecap="round"/>
        <path d="M276 181c14-20 30-29 41-29s27 9 41 29" fill="none" stroke="#dffaff" strokeWidth="5" strokeLinecap="round"/>
        <path d="M307 150v199M333 150v199" stroke="#63dfff" strokeWidth="2"/>
        <path d="M276 350h88" stroke="#dffaff" strokeWidth="4" strokeLinecap="round"/>
        <circle cx="320" cy="415" r="8" fill="#63dfff"/>
        <path d="M320 423v37" stroke="#63dfff" strokeWidth="3"/>
      </g>
      <g fill="none" stroke="url(#agRing)" strokeLinecap="round" opacity=".75">
        <path d="M126 244c-20 23-30 49-30 78s10 55 30 78" strokeWidth="3"/>
        <path d="M98 220c-28 31-42 66-42 102s14 71 42 102" strokeWidth="2" opacity=".55"/>
        <path d="M514 244c20 23 30 49 30 78s-10 55-30 78" strokeWidth="3"/>
        <path d="M542 220c28 31 42 66 42 102s-14 71-42 102" strokeWidth="2" opacity=".55"/>
      </g>
      <g fill="#c8f7ff">
        <circle cx="147" cy="154" r="2"/><circle cx="486" cy="146" r="2.5"/><circle cx="117" cy="326" r="2"/><circle cx="501" cy="340" r="2"/><circle cx="209" cy="112" r="1.5"/><circle cx="433" cy="107" r="1.5"/>
      </g>
      <text x="320" y="507" textAnchor="middle" fill="currentColor" fontSize="31" letterSpacing="6" style={{fontFamily:"var(--font-display)",fontWeight:600}}>AETHER GROVE</text>
      <text x="320" y="532" textAnchor="middle" fill="currentColor" opacity=".48" fontSize="9" letterSpacing="4" style={{fontFamily:"var(--font-mono)"}}>ROCK MUSIC NETWORK</text>
    </svg>
  );
}

export function CrateTile({ color, className = "" }: { color: string; className?: string }) {
  return (
    <svg viewBox="0 0 120 90" className={className} aria-hidden="true">
      <circle cx="78" cy="42" r="36" fill="#07111d" />
      <circle cx="78" cy="42" r="26" fill="none" stroke="#dffaff" strokeOpacity=".16" />
      <circle cx="78" cy="42" r="11" fill={color} stroke="#dffaff" strokeOpacity=".5" />
      <circle cx="78" cy="42" r="2" fill="#dffaff" />
      <rect x="10" y="12" width="66" height="66" fill={color} stroke="#07111d" strokeWidth="2.5" />
      <rect x="17" y="19" width="52" height="52" fill="none" stroke="#07111d" strokeOpacity=".4" />
      <circle cx="43" cy="45" r="14" fill="none" stroke="#07111d" strokeOpacity=".5" strokeWidth="1.5" />
      <circle cx="43" cy="45" r="4" fill="#dffaff" stroke="#07111d" strokeWidth="1.5" />
    </svg>
  );
}

export function Stylus({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="square">
      <circle cx="24" cy="24" r="19" />
      <circle cx="24" cy="24" r="12" />
      <circle cx="24" cy="24" r="4" fill="currentColor" />
      <path d="M43 5 30 21" />
    </svg>
  );
}
