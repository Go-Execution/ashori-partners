import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, CheckCircle, Clock, ShieldCheck } from "@phosphor-icons/react/dist/ssr";
import { SERVICES, SITE_INFO, PROJECTS } from "@/data/site";

export function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return { title: SITE_INFO.name };
  return {
    title: `${service.title} | ${SITE_INFO.name}`,
    description: service.description,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  const relatedCategory =
    service.slug === "kitchen"
      ? "Kitchens"
      : service.slug === "bathroom"
      ? "Bathrooms"
      : service.slug === "flooring"
      ? "Flooring"
      : "Painting";

  const relatedProjects = PROJECTS.filter(
    (p) => p.category === relatedCategory
  );

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-20 space-y-20">
      <div>
        <Link
          href="/services"
          className="inline-flex items-center gap-2 rounded-full border border-border-subtle bg-surface px-4 py-2 text-xs font-semibold text-ink-muted transition-colors hover:text-ink hover:bg-surface-soft"
        >
          <ArrowLeft weight="bold" className="h-3.5 w-3.5" aria-hidden="true" />
          <span>All Renovation Services</span>
        </Link>
      </div>

      <section className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-6 space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-soft px-3.5 py-1.5 font-mono text-xs font-medium text-accent">
              <Clock weight="bold" className="h-3.5 w-3.5" aria-hidden="true" />
              Typical Timeline: {service.timeline}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border-subtle bg-surface px-3.5 py-1.5 font-mono text-xs text-ink-muted">
              <ShieldCheck weight="bold" className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
              {service.warranty}
            </span>
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight text-ink sm:text-5xl leading-[1.05]">
            {service.headline}
          </h1>

          <p className="text-lg leading-relaxed text-ink-muted">
            {service.description}
          </p>

          <ul className="space-y-3 pt-1">
            {service.highlights.map((item) => (
              <li key={item} className="flex items-start gap-3 text-base text-ink">
                <CheckCircle
                  weight="fill"
                  className="h-5 w-5 text-accent shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              href="/contact#estimate"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-accent-hover active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <span>Request a {service.shortTitle} Estimate</span>
              <ArrowRight weight="bold" className="h-4 w-4" aria-hidden="true" />
            </Link>
            <a
              href={SITE_INFO.phoneHref}
              className="inline-flex items-center gap-2 rounded-full border border-border-subtle bg-surface px-6 py-3.5 text-sm font-semibold text-ink transition-all hover:bg-surface-soft"
            >
              <span>Call {SITE_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>

        <div className="lg:col-span-6 relative aspect-[4/3] overflow-hidden rounded-3xl border border-border-subtle bg-surface-soft">
          <Image
            src={service.image}
            alt={service.imageAlt}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </section>

      <section className="space-y-8">
        <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
          Included in Every {service.shortTitle} Scope
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {service.deliverables.map((del, idx) => (
            <div
              key={del.name}
              className="rounded-3xl border border-border-subtle bg-surface p-7 space-y-3"
            >
              <span className="inline-block rounded-full bg-accent-soft px-3 py-1 font-mono text-xs font-semibold text-accent">
                0{idx + 1}
              </span>
              <h3 className="text-lg font-bold text-ink">{del.name}</h3>
              <p className="text-sm leading-relaxed text-ink-muted">
                {del.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      {relatedProjects.length > 0 && (
        <section className="space-y-8 border-t border-border-subtle pt-16">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              Recent {service.shortTitle} Work
            </h2>
            <Link
              href="/projects"
              className="text-sm font-semibold text-accent hover:underline"
            >
              See Full Portfolio
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {relatedProjects.map((proj) => (
              <article
                key={proj.id}
                className="overflow-hidden rounded-3xl border border-border-subtle bg-surface"
              >
                <div className="relative aspect-[4/3] bg-surface-soft">
                  <Image
                    src={proj.image}
                    alt={proj.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6 space-y-2">
                  <p className="font-mono text-xs text-accent">{proj.location}</p>
                  <h3 className="text-lg font-bold text-ink">{proj.title}</h3>
                  <p className="text-sm text-ink-muted leading-relaxed">
                    {proj.scope}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
