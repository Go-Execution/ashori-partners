"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { ArrowRight, CheckCircle, Clock, ShieldCheck } from "@phosphor-icons/react";
import { SERVICES, type ServiceSlug } from "@/data/site";

export function ServiceShowcase() {
  const [activeSlug, setActiveSlug] = useState<ServiceSlug>("kitchen");
  const prefersReducedMotion = useReducedMotion();

  const activeService =
    SERVICES.find((service) => service.slug === activeSlug) ?? SERVICES[0];

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl space-y-3">
          <p className="font-mono text-xs uppercase tracking-widest text-accent">
            What We Build
          </p>
          <h2
            id="services-heading"
            className="text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl"
          >
            Four core trades executed under one roof.
          </h2>
        </div>
        <p className="max-w-md text-base leading-relaxed text-ink-muted">
          Select a discipline below to inspect our scope, materials, and typical
          project turnaround across Boston homes.
        </p>
      </div>

      <div
        role="tablist"
        aria-label="Renovation Services"
        className="mt-10 grid grid-cols-2 gap-2 rounded-2xl border border-border-subtle bg-surface-soft p-2 sm:grid-cols-4"
      >
        {SERVICES.map((service) => {
          const isSelected = service.slug === activeSlug;
          return (
            <button
              key={service.slug}
              type="button"
              role="tab"
              aria-selected={isSelected}
              aria-controls={`panel-${service.slug}`}
              id={`tab-${service.slug}`}
              data-agent={`service-tab-${service.slug}`}
              onClick={() => setActiveSlug(service.slug)}
              className={`rounded-xl px-4 py-3 text-left text-sm font-semibold transition-all active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 ${
                isSelected
                  ? "bg-surface text-ink shadow-sm border border-border-subtle"
                  : "text-ink-muted hover:text-ink hover:bg-surface/60 border border-transparent"
              }`}
            >
              <span className="block">{service.shortTitle}</span>
              <span className="mt-0.5 block font-mono text-[11px] font-normal text-ink-muted">
                {service.timeline}
              </span>
            </button>
          );
        })}
      </div>

      <div className="mt-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeService.slug}
            id={`panel-${activeService.slug}`}
            role="tabpanel"
            aria-labelledby={`tab-${activeService.slug}`}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={prefersReducedMotion ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 gap-8 rounded-3xl border border-border-subtle bg-surface p-6 sm:p-8 lg:grid-cols-12 lg:p-10"
          >
            <div className="lg:col-span-6 relative overflow-hidden rounded-2xl border border-border-subtle bg-surface-soft aspect-[4/3]">
              <Image
                src={activeService.image}
                alt={activeService.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-ink-muted">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-soft px-3 py-1 font-medium text-accent">
                    <Clock weight="bold" className="h-3.5 w-3.5" aria-hidden="true" />
                    Typical timeline: {activeService.timeline}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-surface-soft px-3 py-1">
                    <ShieldCheck weight="bold" className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
                    {activeService.warranty}
                  </span>
                </div>

                <h3 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                  {activeService.headline}
                </h3>

                <p className="text-base leading-relaxed text-ink-muted">
                  {activeService.description}
                </p>

                <ul className="grid grid-cols-1 gap-3 pt-2 sm:grid-cols-2">
                  {activeService.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-ink"
                    >
                      <CheckCircle
                        weight="fill"
                        className="h-5 w-5 shrink-0 text-accent mt-0.5"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap items-center gap-4 border-t border-border-subtle pt-6">
                <Link
                  href={`/services/${activeService.slug}`}
                  data-agent={`service-detail-${activeService.slug}`}
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-accent-hover hover:scale-[1.01] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                >
                  <span>Inspect {activeService.shortTitle} Scope</span>
                  <ArrowRight weight="bold" className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1.5 rounded-full px-4 py-3 text-sm font-semibold text-ink-muted transition-colors hover:text-ink hover:bg-surface-soft active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <span>Compare All Services</span>
                </Link>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
