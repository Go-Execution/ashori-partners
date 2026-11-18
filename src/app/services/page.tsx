import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle, Clock } from "@phosphor-icons/react/dist/ssr";
import { SERVICES, SITE_INFO } from "@/data/site";

export const metadata: Metadata = {
  title: `Services | ${SITE_INFO.name}`,
  description:
    "Explore our residential renovation services in Greater Boston: kitchen remodeling, bathroom renovations, hardwood flooring, custom staircases, and interior painting.",
};

export default function ServicesOverviewPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24 space-y-16">
      <div className="max-w-3xl space-y-4">
        <p className="font-mono text-xs uppercase tracking-widest text-accent">
          Renovation Capabilities
        </p>
        <h1 className="text-4xl font-extrabold tracking-tight text-ink sm:text-5xl leading-[1.05]">
          Specialized trades tailored to Boston homes.
        </h1>
        <p className="text-lg leading-relaxed text-ink-muted">
          Whether updating a single room or coordinating a multi-room interior
          renovation, our crew executes each phase with consistent quality
          control.
        </p>
      </div>

      <div className="space-y-10">
        {SERVICES.map((service, index) => (
          <article
            key={service.slug}
            className="grid grid-cols-1 gap-8 rounded-3xl border border-border-subtle bg-surface p-6 sm:p-8 lg:grid-cols-12 lg:items-center lg:p-10"
          >
            <div
              className={`lg:col-span-5 relative aspect-[4/3] overflow-hidden rounded-2xl border border-border-subtle bg-surface-soft ${
                index % 2 === 1 ? "lg:order-2" : ""
              }`}
            >
              <Image
                src={service.image}
                alt={service.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>

            <div className={`lg:col-span-7 space-y-5 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-accent-soft px-3 py-1 font-mono text-xs font-medium text-accent inline-flex items-center gap-1.5">
                  <Clock weight="bold" className="h-3.5 w-3.5" aria-hidden="true" />
                  {service.timeline}
                </span>
                <span className="font-mono text-xs text-ink-muted">
                  {service.warranty}
                </span>
              </div>

              <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                {service.title}
              </h2>

              <p className="text-base leading-relaxed text-ink-muted">
                {service.description}
              </p>

              <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {service.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-ink">
                    <CheckCircle
                      weight="fill"
                      className="h-4 w-4 text-accent shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-2 flex flex-wrap gap-3">
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-accent-hover active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <span>View Full Scope</span>
                  <ArrowRight weight="bold" className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link
                  href="/contact#estimate"
                  className="inline-flex items-center gap-2 rounded-full border border-border-subtle bg-canvas px-6 py-3 text-sm font-semibold text-ink transition-all hover:bg-surface-soft active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <span>Get Estimate</span>
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
