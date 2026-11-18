import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  EnvelopeSimple,
  MapPin,
  InstagramLogo,
  FacebookLogo,
  WhatsappLogo,
} from "@phosphor-icons/react/dist/ssr";
import { SERVICES, SITE_INFO } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-border-subtle bg-surface-soft">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4 space-y-5">
            <Link
              href="/"
              className="inline-flex items-center gap-3 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <div className="h-12 w-14 overflow-hidden rounded-lg border border-border-subtle bg-white p-1.5">
                <Image
                  src="/images/ashori-logo.png"
                  alt="Ashori Partners LLC Logo"
                  width={56}
                  height={48}
                  className="h-full w-full object-contain"
                />
              </div>
              <div>
                <p className="text-lg font-bold tracking-tight text-ink">
                  {SITE_INFO.name}
                </p>
                <p className="text-xs font-mono uppercase tracking-wider text-ink-muted">
                  Licensed & Insured Remodeling
                </p>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-ink-muted max-w-sm">
              Over 20 years of residential renovation experience across Greater
              Boston. Kitchens, bathrooms, custom hardwood flooring, staircases,
              and interior painting delivered with respect for your home.
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a
                href={SITE_INFO.instagramHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ashori Partners LLC on Instagram"
                data-agent="footer-instagram"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border-subtle bg-surface text-ink transition-all hover:border-accent hover:text-accent active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <InstagramLogo weight="regular" className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href={SITE_INFO.facebookHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ashori Partners LLC on Facebook"
                data-agent="footer-facebook"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border-subtle bg-surface text-ink transition-all hover:border-accent hover:text-accent active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <FacebookLogo weight="regular" className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href={SITE_INFO.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Message Ashori Partners LLC on WhatsApp"
                data-agent="footer-whatsapp"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border-subtle bg-surface text-ink transition-all hover:border-accent hover:text-accent active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <WhatsappLogo weight="regular" className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-4">
            <h2 className="text-xs font-mono uppercase tracking-widest text-ink-muted">
              Core Trades
            </h2>
            <ul className="space-y-2.5 text-sm">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-block rounded-md py-0.5 text-ink transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-xs font-mono uppercase tracking-widest text-ink-muted">
              Company
            </h2>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/about"
                  className="inline-block rounded-md py-0.5 text-ink transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="inline-block rounded-md py-0.5 text-ink transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  Recent Work
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="inline-block rounded-md py-0.5 text-ink transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  All Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="inline-block rounded-md py-0.5 text-ink transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  Free Estimate
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-4">
            <h2 className="text-xs font-mono uppercase tracking-widest text-ink-muted">
              Boston Office & Direct Contact
            </h2>
            <ul className="space-y-3 text-sm text-ink">
              <li>
                <a
                  href={SITE_INFO.phoneHref}
                  className="inline-flex items-center gap-2.5 rounded-md py-0.5 transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <Phone weight="bold" className="h-4 w-4 text-accent shrink-0" aria-hidden="true" />
                  <span>{SITE_INFO.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={SITE_INFO.emailHref}
                  className="inline-flex items-center gap-2.5 rounded-md py-0.5 break-all transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <EnvelopeSimple weight="bold" className="h-4 w-4 text-accent shrink-0" aria-hidden="true" />
                  <span>{SITE_INFO.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-ink-muted">
                <MapPin weight="bold" className="h-4 w-4 text-accent shrink-0 mt-0.5" aria-hidden="true" />
                <span>{SITE_INFO.serviceArea}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border-subtle pt-8 text-xs text-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {SITE_INFO.name}. All rights reserved.</p>
          <p>Kitchens, Bathrooms, Hardwood Flooring & Interior Painting in Boston, MA.</p>
        </div>
      </div>
    </footer>
  );
}
