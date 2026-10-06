import Link from "next/link";
import Logo from "./Logo";
import { SITE } from "@/lib/site";

const cols: { title: string; links: [string, string][] }[] = [
  { title: "Listen", links: [["Discover", "/search"], ["My Crate", "/library"], ["Rock", "/search?genre=Rock"], ["Electronic", "/search?genre=Electronic"]] },
  { title: "Network", links: [["The Network", "/about"], ["For artists", "/pricing"], ["Contact", "/contact"], ["FAQ", "/#faq"]] },
];

export default function SiteFooter() {
  return (
    <footer className="mt-28 border-t border-cyan/15 bg-ink text-paper">
      <div className="mx-auto max-w-7xl px-5 pb-10 pt-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <Logo light />
            <p className="mt-5 max-w-sm text-[15px] leading-7 text-paper/60">{SITE.description}</p>
            <Link href="/search" className="btn-red mt-7">Enter the network</Link>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <p className="kicker">{c.title}</p>
              <ul className="mt-5 space-y-3">
                {c.links.map(([label, href]) => (
                  <li key={label}><Link href={href} className="font-display text-[20px] tracking-[-.01em] text-paper/80 transition hover:text-cyan">{label}</Link></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-16 select-none font-display text-[clamp(58px,16vw,230px)] font-semibold leading-[.8] tracking-[-.07em] text-paper/[.055]" aria-hidden="true">AETHER</p>
        <div className="mt-8 flex flex-col gap-3 border-t border-paper/10 pt-6 font-mono text-[10px] uppercase tracking-[.16em] text-paper/45 sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} Aether Grove</span>
          <span>Powered by Audius · Built for independent sound</span>
        </div>
      </div>
    </footer>
  );
}
