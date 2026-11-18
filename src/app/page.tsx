import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  CaretDown,
  Phone,
  EnvelopeSimple,
  MapPin,
  WhatsappLogo,
} from "@phosphor-icons/react/dist/ssr";
import { FAQS, SITE_INFO, STANDARDS } from "@/data/site";
import { FadeReveal, HeroEntrance } from "@/components/MotionPrimitives";
import { ServiceShowcase } from "@/components/ServiceShowcase";
import { ProjectGallery } from "@/components/ProjectGallery";
import { EstimateForm } from "@/components/EstimateForm";

export default function HomePage() {
  return (
    <>
      {/* 1. Asymmetric Architectural Split Hero */}
      <section className="mx-auto max-w-7xl px-4 pt-12 pb-16 sm:px-6 lg:px-8 lg:pt-20 lg:pb-24 min-h-[calc(100dvh-5rem)] flex items-center">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10 w-full">
          <HeroEntrance className="lg:col-span-6 space-y-6">
            <p className="inline-flex items-center gap-2 rounded-full border border-border-subtle bg-surface px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-accent">
              <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
              Licensed &amp; Insured · Greater Boston
            </p>

            <h1 className="text-4xl font-extrabold tracking-tight text-ink sm:text-5xl lg:text-6xl leading-[1.03]">
              Refined Homes. Built to Last.
            </h1>

            <p className="max-w-lg text-lg leading-relaxed text-ink-muted">
              Over 20 years of residential renovation craft: kitchens,
              bathrooms, custom hardwood flooring, and interior painting.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#estimate"
                data-agent="hero-cta-primary"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-4 text-sm font-semibold text-white transition-all hover:bg-accent-hover hover:scale-[1.01] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
              >
                <span>Request a Free Estimate</span>
                <ArrowRight weight="bold" className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="#projects"
                data-agent="hero-cta-secondary"
                className="inline-flex items-center gap-2 rounded-full border border-border-subtle bg-surface px-6 py-4 text-sm font-semibold text-ink transition-all hover:border-accent/40 hover:bg-surface-soft active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
              >
                <span>Explore Recent Work</span>
                <ArrowUpRight weight="bold" className="h-4 w-4 text-accent" aria-hidden="true" />
              </a>
            </div>
          </HeroEntrance>

          <HeroEntrance delay={0.12} className="lg:col-span-6">
            <div className="grid grid-cols-12 gap-4 items-end">
              <div className="col-span-8 relative aspect-[4/5] overflow-hidden rounded-3xl border border-border-subtle bg-surface-soft">
                <Image
                  src="/images/led-oak-staircase.jpg"
                  alt="Custom white oak staircase with recessed warm LED lighting installed by Ashori Partners LLC"
                  fill
                  priority
                  sizes="(max-width: 1024px) 66vw, 35vw"
                  className="object-cover"
                />
              </div>
              <div className="col-span-4 space-y-4">
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-border-subtle bg-surface-soft">
                  <Image
                    src="/images/craftsman-cabinetry.jpg"
                    alt="Ashori Partners craftsman fitting white kitchen cabinetry hardware"
                    fill
                    priority
                    sizes="(max-width: 1024px) 33vw, 18vw"
                    className="object-cover"
                  />
                </div>
                <div className="rounded-2xl border border-border-subtle bg-surface p-4">
                  <p className="font-mono text-2xl font-bold text-accent">20+</p>
                  <p className="mt-1 text-xs leading-snug text-ink-muted">
                    Years of construction experience across Greater Boston.
                  </p>
                </div>
              </div>
            </div>
          </HeroEntrance>
        </div>
      </section>

      {/* 2. Architectural Craftsmanship & Experience Band */}
      <section
        aria-labelledby="heritage-heading"
        className="border-y border-border-subtle bg-surface"
      >
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <FadeReveal className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6 space-y-5">
              <h2
                id="heritage-heading"
                className="text-3xl font-bold tracking-tight text-ink sm:text-4xl"
              >
                We treat every house as if it were our own home.
              </h2>
              <p className="text-base leading-relaxed text-ink-muted max-w-xl">
                Founded on direct jobsite accountability, Ashori Partners LLC
                brings more than 20 years of building experience and over 10
                years in business to homeowners across Boston. Every kitchen,
                bath, floor, and painted room is finished cleanly and on
                schedule.
              </p>
              <div>
                <Link
                  href="/about"
                  data-agent="heritage-about-link"
                  className="inline-flex items-center gap-2 rounded-full border border-border-subtle bg-canvas px-5 py-2.5 text-sm font-semibold text-ink transition-all hover:border-accent/40 hover:bg-surface-soft active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <span>Read Our Story</span>
                  <ArrowRight weight="bold" className="h-4 w-4 text-accent" aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-border-subtle bg-canvas p-6">
                <p className="font-mono text-3xl font-bold tracking-tight text-ink">
                  20+
                </p>
                <p className="mt-2 text-sm text-ink-muted">
                  Years of Construction Experience
                </p>
              </div>
              <div className="rounded-2xl border border-border-subtle bg-canvas p-6">
                <p className="font-mono text-3xl font-bold tracking-tight text-ink">
                  10+
                </p>
                <p className="mt-2 text-sm text-ink-muted">
                  Years Operating in Greater Boston
                </p>
              </div>
              <div className="col-span-2 sm:col-span-1 rounded-2xl border border-border-subtle bg-accent-soft p-6">
                <p className="font-mono text-3xl font-bold tracking-tight text-accent">
                  100%
                </p>
                <p className="mt-2 text-sm text-ink">
                  Licensed &amp; Insured Coverage
                </p>
              </div>
            </div>
          </FadeReveal>
        </div>
      </section>

      {/* 3. Interactive Service Explorer */}
      <ServiceShowcase />

      {/* 4. Completed Work Bento Portfolio */}
      <div className="border-t border-border-subtle bg-surface">
        <ProjectGallery />
      </div>

      {/* 5. The Ashori Standard (6-Point Architectural Matrix) */}
      <section
        aria-labelledby="standards-heading"
        className="border-t border-border-subtle bg-canvas"
      >
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <FadeReveal className="max-w-2xl space-y-3">
            <p className="font-mono text-xs uppercase tracking-widest text-accent">
              The Ashori Standard
            </p>
            <h2
              id="standards-heading"
              className="text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl"
            >
              Why Boston homeowners choose our crew.
            </h2>
          </FadeReveal>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {STANDARDS.map((item, idx) => (
              <FadeReveal
                key={item.number}
                delay={idx * 0.05}
                className="rounded-3xl border border-border-subtle bg-surface p-7 flex flex-col justify-between space-y-4"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-semibold tracking-widest text-accent bg-accent-soft px-3 py-1 rounded-full">
                    {item.number}
                  </span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold tracking-tight text-ink">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-ink-muted">
                    {item.description}
                  </p>
                </div>
              </FadeReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Native Accessible FAQ Accordion */}
      <section
        aria-labelledby="faq-heading"
        className="border-t border-border-subtle bg-surface"
      >
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4 space-y-4">
              <h2
                id="faq-heading"
                className="text-3xl font-bold tracking-tight text-ink sm:text-4xl"
              >
                Common questions before we walk your space.
              </h2>
              <p className="text-base leading-relaxed text-ink-muted">
                Straight answers on licensing, estimates, scheduling, and
                jobsite protection across Greater Boston.
              </p>
            </div>

            <div className="lg:col-span-8 space-y-3">
              {FAQS.map((faq) => (
                <details
                  key={faq.question}
                  className="faq-details group rounded-2xl border border-border-subtle bg-canvas transition-colors open:bg-surface"
                >
                  <summary className="flex cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left text-base font-semibold text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-inset rounded-2xl">
                    <span>{faq.question}</span>
                    <CaretDown
                      weight="bold"
                      className="faq-chevron h-5 w-5 shrink-0 text-accent"
                      aria-hidden="true"
                    />
                  </summary>
                  <div className="px-6 pb-6 text-sm leading-relaxed text-ink-muted">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. Estimate Request & Direct Boston Contact */}
      <section
        id="estimate"
        aria-labelledby="estimate-heading"
        className="border-t border-border-subtle bg-canvas"
      >
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <h2
                  id="estimate-heading"
                  className="text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl"
                >
                  Ready to start your next renovation?
                </h2>
                <p className="text-base leading-relaxed text-ink-muted">
                  Tell us what you are planning. We respond promptly to arrange
                  an on-site measurement and clear written estimate.
                </p>
              </div>

              <div className="space-y-4 rounded-3xl border border-border-subtle bg-surface p-6">
                <a
                  href={SITE_INFO.phoneHref}
                  data-agent="contact-phone-card"
                  className="flex items-center gap-4 rounded-2xl p-3 transition-colors hover:bg-surface-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent shrink-0">
                    <Phone weight="bold" className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-mono text-xs uppercase tracking-wider text-ink-muted">
                      Call Direct
                    </p>
                    <p className="text-base font-bold text-ink">
                      {SITE_INFO.phoneDisplay}
                    </p>
                  </div>
                </a>

                <a
                  href={SITE_INFO.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-agent="contact-whatsapp-card"
                  className="flex items-center gap-4 rounded-2xl p-3 transition-colors hover:bg-surface-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent shrink-0">
                    <WhatsappLogo weight="bold" className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-mono text-xs uppercase tracking-wider text-ink-muted">
                      WhatsApp Message
                    </p>
                    <p className="text-base font-bold text-ink">
                      Send Photos &amp; Measurements
                    </p>
                  </div>
                </a>

                <a
                  href={SITE_INFO.emailHref}
                  data-agent="contact-email-card"
                  className="flex items-center gap-4 rounded-2xl p-3 transition-colors hover:bg-surface-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent shrink-0">
                    <EnvelopeSimple weight="bold" className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-mono text-xs uppercase tracking-wider text-ink-muted">
                      Email Estimates
                    </p>
                    <p className="text-sm font-bold text-ink break-all">
                      {SITE_INFO.email}
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4 rounded-2xl p-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-surface-soft text-ink shrink-0">
                    <MapPin weight="bold" className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-mono text-xs uppercase tracking-wider text-ink-muted">
                      Office &amp; Service Area
                    </p>
                    <p className="text-sm font-medium text-ink">
                      {SITE_INFO.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <EstimateForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
