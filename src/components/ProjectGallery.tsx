"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin, X, MagnifyingGlassPlus } from "@phosphor-icons/react";
import { PROJECTS, type ProjectItem } from "@/data/site";

type CategoryFilter = "All" | ProjectItem["category"];

const CATEGORIES: CategoryFilter[] = [
  "All",
  "Kitchens",
  "Bathrooms",
  "Flooring",
  "Painting",
];

interface ProjectGalleryProps {
  showAll?: boolean;
}

export function ProjectGallery({ showAll = false }: ProjectGalleryProps) {
  const [filter, setFilter] = useState<CategoryFilter>("All");
  const [selected, setSelected] = useState<ProjectItem | null>(null);

  const baseList = showAll ? PROJECTS : PROJECTS.slice(0, 6);
  const filtered =
    filter === "All"
      ? baseList
      : PROJECTS.filter((project) => project.category === filter);

  useEffect(() => {
    if (!selected) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selected]);

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-xl space-y-3">
          <h2
            id="projects-heading"
            className="text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl"
          >
            Completed work across Greater Boston.
          </h2>
          <p className="text-base leading-relaxed text-ink-muted">
            Real jobsite photography from recent kitchen installations, tiled
            showers, LED-lit oak stairs, and interior paint refreshes.
          </p>
        </div>

        <div
          role="group"
          aria-label="Filter projects by trade"
          className="flex flex-wrap gap-2"
        >
          {CATEGORIES.map((category) => {
            const active = filter === category;
            return (
              <button
                key={category}
                type="button"
                aria-pressed={active}
                data-agent={`project-filter-${category.toLowerCase()}`}
                onClick={() => setFilter(category)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 ${
                  active
                    ? "bg-accent text-white"
                    : "border border-border-subtle bg-surface text-ink-muted hover:text-ink hover:bg-surface-soft"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-12">
        {filtered.map((project, idx) => {
          const spanClass =
            filter === "All" && !showAll && project.featuredSpan
              ? project.featuredSpan
              : idx === 0 && filtered.length > 2
              ? "md:col-span-8"
              : "md:col-span-4";
          const isTall =
            filter === "All" && !showAll && idx === 0
              ? "min-h-[360px] md:min-h-[480px]"
              : "aspect-[4/3]";

          return (
            <article
              key={project.id}
              className={`group relative overflow-hidden rounded-3xl border border-border-subtle bg-surface flex flex-col justify-between ${spanClass}`}
            >
              <button
                type="button"
                onClick={() => setSelected(project)}
                data-agent={`project-card-${project.id}`}
                aria-label={`Inspect ${project.title} details`}
                className="relative w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent"
              >
                <div className={`relative w-full overflow-hidden bg-surface-soft ${isTall}`}>
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  />
                  <span className="absolute top-4 left-4 rounded-full bg-surface/90 backdrop-blur-sm px-3 py-1 font-mono text-[11px] font-medium uppercase tracking-wider text-ink border border-border-subtle">
                    {project.category}
                  </span>
                  <span className="absolute top-4 right-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-surface/90 backdrop-blur-sm text-ink border border-border-subtle opacity-90 transition-transform group-hover:scale-105">
                    <MagnifyingGlassPlus weight="bold" className="h-4 w-4" aria-hidden="true" />
                  </span>
                </div>

                <div className="p-6 space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-lg font-bold tracking-tight text-ink">
                      {project.title}
                    </h3>
                    <span className="inline-flex items-center gap-1 text-xs font-mono text-ink-muted shrink-0">
                      <MapPin weight="bold" className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
                      {project.location}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-ink-muted line-clamp-2">
                    {project.scope}
                  </p>
                </div>
              </button>
            </article>
          );
        })}
      </div>

      {!showAll && (
        <div className="mt-10 flex justify-start">
          <Link
            href="/projects"
            data-agent="projects-view-all"
            className="inline-flex items-center gap-2 rounded-full border border-border-subtle bg-surface px-6 py-3 text-sm font-semibold text-ink transition-all hover:border-accent/40 hover:bg-surface-soft active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          >
            <span>Browse Full Project Archive</span>
            <ArrowUpRight weight="bold" className="h-4 w-4 text-accent" aria-hidden="true" />
          </Link>
        </div>
      )}

      {selected && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/60 p-4 backdrop-blur-sm"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative w-full max-w-3xl overflow-hidden rounded-3xl border border-border-subtle bg-surface shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelected(null)}
              aria-label="Close project preview"
              data-agent="project-modal-close"
              className="absolute top-4 right-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-surface/95 text-ink border border-border-subtle transition-all hover:bg-surface-soft active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <X weight="bold" className="h-5 w-5" aria-hidden="true" />
            </button>

            <div className="relative aspect-[16/10] w-full bg-surface-soft">
              <Image
                src={selected.image}
                alt={selected.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover"
              />
            </div>

            <div className="p-6 sm:p-8 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="rounded-full bg-accent-soft px-3 py-1 font-mono text-xs font-medium text-accent">
                  {selected.category}
                </span>
                <span className="inline-flex items-center gap-1.5 font-mono text-xs text-ink-muted">
                  <MapPin weight="bold" className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
                  {selected.location}
                </span>
              </div>
              <h3
                id="modal-project-title"
                className="text-2xl font-bold tracking-tight text-ink"
              >
                {selected.title}
              </h3>
              <p className="text-base leading-relaxed text-ink-muted">
                {selected.scope}
              </p>
              <div className="pt-2">
                <Link
                  href="/contact#estimate"
                  onClick={() => setSelected(null)}
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-accent-hover active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                >
                  <span>Plan a Similar Project</span>
                  <ArrowUpRight weight="bold" className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
