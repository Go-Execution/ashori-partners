import type { Metadata } from "next";
import {
  Phone,
  EnvelopeSimple,
  MapPin,
  WhatsappLogo,
  Clock,
} from "@phosphor-icons/react/dist/ssr";
import { SITE_INFO } from "@/data/site";
import { EstimateForm } from "@/components/EstimateForm";

export const metadata: Metadata = {
  title: `Contact & Free Estimate | ${SITE_INFO.name}`,
  description:
    "Contact Ashori Partners LLC in Boston, MA at +1 (617) 290-0302 or request a free residential renovation estimate online.",
};

export default function ContactPage() {
  return (
    <div
      id="estimate"
      className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-4">
            <p className="font-mono text-xs uppercase tracking-widest text-accent">
              Boston Estimating Desk
            </p>
            <h1 className="text-4xl font-extrabold tracking-tight text-ink sm:text-5xl leading-[1.05]">
              Let us walk your project together.
            </h1>
            <p className="text-base leading-relaxed text-ink-muted">
              Share your renovation goals below, or reach out directly by phone
              or WhatsApp to schedule an in-home walkthrough.
            </p>
          </div>

          <div className="space-y-4 rounded-3xl border border-border-subtle bg-surface p-6">
            <a
              href={SITE_INFO.phoneHref}
              className="flex items-center gap-4 rounded-2xl p-3 transition-colors hover:bg-surface-soft"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent shrink-0">
                <Phone weight="bold" className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-ink-muted">
                  Phone
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
              className="flex items-center gap-4 rounded-2xl p-3 transition-colors hover:bg-surface-soft"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent shrink-0">
                <WhatsappLogo weight="bold" className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-ink-muted">
                  WhatsApp
                </p>
                <p className="text-base font-bold text-ink">
                  Direct Project Messaging
                </p>
              </div>
            </a>

            <a
              href={SITE_INFO.emailHref}
              className="flex items-center gap-4 rounded-2xl p-3 transition-colors hover:bg-surface-soft"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent shrink-0">
                <EnvelopeSimple weight="bold" className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-ink-muted">
                  Email
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
                  Service Area
                </p>
                <p className="text-sm font-medium text-ink leading-relaxed">
                  {SITE_INFO.serviceArea}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl p-3">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-surface-soft text-ink shrink-0">
                <Clock weight="bold" className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-ink-muted">
                  Response Window
                </p>
                <p className="text-sm font-medium text-ink">
                  Same-day callbacks and flexible walkthrough scheduling.
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
  );
}
