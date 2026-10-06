"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import Icon from "./Icon";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "/", label: "Home" },
  { href: "/search", label: "Discover" },
  { href: "/library", label: "My Crate" },
  { href: "/about", label: "The Network" },
];
const ticker = ["Aether Grove", "Rock Music Network", "Independent Artists", "Live Catalogue", "Signal On"];

export default function NavBar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => setOpen(false), [pathname]);
  const active = (href: string) => href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/80 backdrop-blur-2xl">
      <div className="overflow-hidden border-b border-cyan/10 bg-ink py-1.5 text-paper" aria-hidden="true">
        <div className="flex w-max animate-marquee gap-8 whitespace-nowrap font-mono text-[9px] uppercase tracking-[.22em]">
          {[...ticker, ...ticker, ...ticker, ...ticker].map((t, i) => (
            <span key={i} className="inline-flex items-center gap-8">{t}<span className="text-cyan">◆</span></span>
          ))}
        </div>
      </div>

      <div className="mx-auto grid h-[70px] max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-5 px-4 sm:h-[78px] sm:px-8">
        <button type="button" className="grid h-10 w-10 place-items-center border-2 border-ink/15 md:hidden" onClick={() => setOpen(v => !v)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
          <Icon name={open ? "close" : "menu"} size={18} />
        </button>
        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className={`relative py-2 font-mono text-[10px] uppercase tracking-[.16em] transition hover:text-cyan ${active(l.href) ? "text-cyan after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:bg-cyan" : "text-ink/70"}`}>
              {l.label}
            </Link>
          ))}
        </nav>
        <Link href="/" aria-label="Aether Grove home" className="justify-self-center md:justify-self-start"><Logo /></Link>
        <div className="flex items-center justify-end gap-2 sm:gap-3">
          <Link href="/search" aria-label="Search" className="grid h-10 w-10 place-items-center text-ink/70 transition hover:text-cyan"><Icon name="search" size={18} /></Link>
          <ThemeToggle />
          <Link href="/pricing" className="btn-ink hidden !min-h-10 !px-4 !py-2.5 sm:inline-flex">For artists</Link>
        </div>
      </div>

      {open && (
        <div className="border-t border-ink/10 bg-paper md:hidden">
          <nav className="mx-auto max-w-7xl px-4 pb-5 pt-1 sm:px-8" aria-label="Mobile">
            {[...links, { href: "/pricing", label: "For artists" }, { href: "/contact", label: "Contact" }].map(l => (
              <Link key={l.href} href={l.href} className={`flex min-h-14 items-center justify-between border-b border-ink/10 py-3 font-display text-[24px] font-medium ${active(l.href) ? "text-cyan" : ""}`}>
                {l.label}<Icon name="arrow" size={17} />
              </Link>
            ))}
            <div className="flex items-center justify-between pt-5"><span className="font-mono text-[10px] uppercase tracking-[.18em] text-muted">Appearance</span><ThemeToggle /></div>
          </nav>
        </div>
      )}
    </header>
  );
}
