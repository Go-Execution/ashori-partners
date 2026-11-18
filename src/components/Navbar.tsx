"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { List, X, Phone, ArrowUpRight } from "@phosphor-icons/react";
import { SITE_INFO } from "@/data/site";

const NAV_LINKS = [
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [openForPath, setOpenForPath] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  const mobileOpen = openForPath === pathname;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-200 ${
        scrolled
          ? "bg-canvas/90 backdrop-blur-md border-b border-border-subtle"
          : "bg-canvas/75 backdrop-blur-sm border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          data-agent="nav-logo"
          className="group flex items-center gap-3 rounded-xl py-1 pr-2 transition-transform hover:scale-[1.01] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
        >
          <div className="relative h-11 w-12 shrink-0 overflow-hidden rounded-lg bg-white p-1 border border-border-subtle">
            <Image
              src="/images/ashori-logo.png"
              alt="Ashori Partners LLC Shield Logo"
              width={48}
              height={40}
              className="h-full w-full object-contain"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="text-base font-bold tracking-tight text-ink leading-tight">
              Ashori Partners
            </span>
            <span className="font-mono text-[11px] uppercase tracking-wider text-ink-muted">
              Boston, MA
            </span>
          </div>
        </Link>

        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-1"
        >
          {NAV_LINKS.map((item) => {
            const active =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                data-agent={`nav-${item.label.toLowerCase()}`}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all hover:bg-surface-soft active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 ${
                  active ? "bg-accent-soft text-accent font-semibold" : "text-ink-muted hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={SITE_INFO.phoneHref}
            data-agent="nav-phone"
            className="inline-flex items-center gap-2 rounded-full border border-border-subtle bg-surface px-4 py-2.5 text-sm font-medium text-ink transition-all hover:border-accent/40 hover:bg-surface-soft active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          >
            <Phone weight="bold" className="h-4 w-4 text-accent" aria-hidden="true" />
            <span>(617) 290-0302</span>
          </a>
          <Link
            href="/contact#estimate"
            data-agent="nav-cta"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-accent-hover hover:scale-[1.01] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          >
            <span>Free Estimate</span>
            <ArrowUpRight weight="bold" className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpenForPath(mobileOpen ? null : pathname)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          data-agent="nav-mobile-toggle"
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border-subtle bg-surface text-ink transition-all hover:bg-surface-soft active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 md:hidden"
        >
          {mobileOpen ? (
            <X weight="bold" className="h-5 w-5" aria-hidden="true" />
          ) : (
            <List weight="bold" className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      </div>

      {mobileOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-border-subtle bg-surface px-4 pb-6 pt-4 md:hidden"
        >
          <nav aria-label="Mobile Navigation" className="flex flex-col gap-1">
            {NAV_LINKS.map((item) => {
              const active =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpenForPath(null)}
                  className={`rounded-xl px-4 py-3 text-base font-medium transition-colors active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                    active ? "bg-accent-soft text-accent font-semibold" : "text-ink hover:bg-surface-soft"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="mt-4 flex flex-col gap-3 border-t border-border-subtle pt-4">
            <a
              href={SITE_INFO.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border-subtle bg-canvas px-4 py-3 text-sm font-semibold text-ink transition-colors hover:bg-surface-soft active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <Phone weight="bold" className="h-4 w-4 text-accent" aria-hidden="true" />
              <span>Call {SITE_INFO.phoneDisplay}</span>
            </a>
            <Link
              href="/contact#estimate"
              onClick={() => setOpenForPath(null)}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-hover active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <span>Request a Free Estimate</span>
              <ArrowUpRight weight="bold" className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
