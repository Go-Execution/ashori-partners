import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { SITE_INFO } from "@/data/site";
import { ProjectGallery } from "@/components/ProjectGallery";

export const metadata: Metadata = {
  title: `Projects | ${SITE_INFO.name}`,
  description:
    "Browse real renovation photos from Ashori Partners LLC across Boston: custom oak LED staircases, modern kitchens, tiled walk-in showers, and interior painting.",
};

export default function ProjectsPage() {
  return (
    <div>
      <div className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 lg:px-8 lg:pt-20">
        <p className="font-mono text-xs uppercase tracking-widest text-accent">
          Portfolio Archive
        </p>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl max-w-2xl leading-[1.05]">
          Real craftsmanship from recent Boston jobsites.
        </h1>
      </div>

      <ProjectGallery showAll />

      <div className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 rounded-3xl border border-border-subtle bg-surface p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
          <div className="space-y-2 max-w-xl">
            <h2 className="text-2xl font-bold tracking-tight text-ink">
              Planning a kitchen, bath, floor, or paint update?
            </h2>
            <p className="text-sm leading-relaxed text-ink-muted">
              Schedule an on-site measurement with Ashori Partners LLC and get a
              clear, detailed estimate.
            </p>
          </div>
          <Link
            href="/contact#estimate"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-accent-hover active:scale-[0.98]"
          >
            <span>Request Free Estimate</span>
            <ArrowRight weight="bold" className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </div>
  );
}
