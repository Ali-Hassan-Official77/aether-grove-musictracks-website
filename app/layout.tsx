import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Fraunces, DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import PlayerBar from "@/components/PlayerBar";
import PlayerProvider from "@/components/PlayerProvider";
import ThemeProvider from "@/components/ThemeProvider";
import SiteFooter from "@/components/SiteFooter";
import { SITE } from "@/lib/site";
export const runtime = 'edge';

const display = Fraunces({ subsets: ["latin"], style: ["normal", "italic"], variable: "--font-display", display: "swap" });
const body = DM_Sans({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const mono = DM_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  ...(SITE.url ? { metadataBase: new URL(SITE.url) } : {}),
  title: { default: `${SITE.name} — ${SITE.tagline}`, template: `%s — ${SITE.name}` },
  description: SITE.description,
  keywords: ["Aether Grove", "rock music", "independent music", "Audius", "music network", "alternative music"],
  openGraph: { title: `${SITE.name} — ${SITE.tagline}`, description: SITE.description, siteName: SITE.name, type: "website" },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg", apple: "/icon.svg" },
};
export const viewport: Viewport = { themeColor: "#07111D", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="font-body antialiased">
        <ThemeProvider>
          <PlayerProvider>
            <NavBar />
            <main className="pb-28">{children}</main>
            <SiteFooter />
            <PlayerBar />
          </PlayerProvider>
        </ThemeProvider>
        <script dangerouslySetInnerHTML={{__html:`(function(){try{var t=localStorage.getItem('aether-theme');if(!t)t=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';document.documentElement.dataset.theme=t}catch(e){}})()`}} />
      </body>
    </html>
  );
}
