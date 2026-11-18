import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle, ShieldCheck } from "@phosphor-icons/react/dist/ssr";
import { SITE_INFO, STANDARDS, SERVICES } from "@/data/site";

export const metadata: Metadata = {
  title: `About Us | ${SITE_INFO.name}`,
  description:
    "Learn about Ashori Partners LLC: over 20 years of residential construction experience and more than 10 years serving Greater Boston homeowners.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24 space-y-24">
      <section className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-6 space-y-6">
          <p className="font-mono text-xs uppercase tracking-widest text-accent">
            About Ashori Partners LLC
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight text-ink sm:text-5xl leading-[1.05]">
            Your home, our passion. Craftsmanship in every detail.
          </h1>
          <p className="text-lg leading-relaxed text-ink-muted">
            At Ashori Partners LLC, we believe every home deserves disciplined
            care and honest execution. With more than 20 years in construction
            and over 10 years in business, our Boston team specializes in
            kitchens, bathrooms, hardwood flooring, custom staircases, and
            interior painting.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              href="/contact#estimate"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-accent-hover active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            >
              <span>Schedule a Walkthrough</span>
              <ArrowRight weight="bold" className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-full border border-border-subtle bg-surface px-6 py-3.5 text-sm font-semibold text-ink transition-all hover:bg-surface-soft active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <span>View Completed Projects</span>
            </Link>
          </div>
        </div>

        <div className="lg:col-span-6 grid grid-cols-2 gap-4">
          <div className="relative aspect-[3/4] overflow-hidden rounded-3xl border border-border-subtle bg-surface-soft">
            <Image
              src="/images/craftsman-cabinetry.jpg"
              alt="Ashori Partners craftsman installing white kitchen cabinet shelving"
              fill
              sizes="(max-width: 1024px) 50vw, 25vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[3/4] overflow-hidden rounded-3xl border border-border-subtle bg-surface-soft mt-8">
            <Image
              src="/images/open-kitchen-island.jpg"
              alt="Completed open-concept kitchen island and hardwood floor installation"
              fill
              sizes="(max-width: 1024px) 50vw, 25vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-border-subtle bg-surface p-8 sm:p-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="space-y-2">
            <p className="font-mono text-4xl font-bold text-accent">20+</p>
            <h2 className="text-lg font-bold text-ink">Years Construction Experience</h2>
            <p className="text-sm text-ink-muted leading-relaxed">
              Hands-on knowledge across framing, finish carpentry, waterproofing,
              tile setting, hardwood installation, and fine interior coatings.
            </p>
          </div>
          <div className="space-y-2">
            <p className="font-mono text-4xl font-bold text-accent">10+</p>
            <h2 className="text-lg font-bold text-ink">Years in Business</h2>
            <p className="text-sm text-ink-muted leading-relaxed">
              A decade-plus track record built on repeat Boston homeowners,
              transparent pricing, and clean jobsites.
            </p>
          </div>
          <div className="space-y-2">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent-soft text-accent">
              <ShieldCheck weight="fill" className="h-6 w-6" aria-hidden="true" />
            </div>
            <h2 className="text-lg font-bold text-ink">Licensed &amp; Insured</h2>
            <p className="text-sm text-ink-muted leading-relaxed">
              Full Massachusetts residential coverage so your renovation stays
              protected at every stage.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-10">
        <div className="max-w-2xl space-y-3">
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            How we work inside your home.
          </h2>
          <p className="text-base text-ink-muted leading-relaxed">
            Six non-negotiable standards that govern every project from initial
            measurement to final walkthrough.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {STANDARDS.map((item) => (
            <div
              key={item.number}
              className="rounded-3xl border border-border-subtle bg-surface p-7 space-y-3"
            >
              <span className="inline-block rounded-full bg-accent-soft px-3 py-1 font-mono text-xs font-semibold text-accent">
                {item.number}
              </span>
              <h3 className="text-lg font-bold text-ink">{item.title}</h3>
              <p className="text-sm leading-relaxed text-ink-muted">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-border-subtle bg-surface p-8 sm:p-12 space-y-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
            Specialized Residential Trades
          </h2>
          <Link
            href="/services"
            className="text-sm font-semibold text-accent hover:underline"
          >
            Explore All Services
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group rounded-2xl border border-border-subtle bg-canvas p-5 transition-all hover:border-accent/40 hover:bg-surface-soft"
            >
              <CheckCircle
                weight="fill"
                className="h-5 w-5 text-accent mb-3"
                aria-hidden="true"
              />
              <h3 className="text-base font-bold text-ink group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              <p className="mt-1.5 text-xs leading-relaxed text-ink-muted">
                {service.summary}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
