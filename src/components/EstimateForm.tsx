"use client";

import { useState, type FormEvent } from "react";
import {
  CheckCircle,
  WarningCircle,
  PaperPlaneTilt,
  WhatsappLogo,
} from "@phosphor-icons/react";
import { SITE_INFO } from "@/data/site";

const PROJECT_TYPES = [
  "Kitchen Renovation",
  "Bathroom Remodel",
  "Hardwood Flooring & Stairs",
  "Interior Painting",
  "Multi-Room Renovation",
];

export function EstimateForm() {
  const [selectedTrade, setSelectedTrade] = useState(PROJECT_TYPES[0]);
  const [submitted, setSubmitted] = useState(false);
  const [interacted, setInteracted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    neighborhood: "",
    details: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setInteracted(true);
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      const firstInvalid = form.querySelector<HTMLElement>(":invalid");
      firstInvalid?.focus();
      return;
    }
    setSubmitted(true);
  };

  if (submitted) {
    const summaryBody = encodeURIComponent(
      `Project Type: ${selectedTrade}\nName: ${formData.firstName} ${formData.lastName}\nPhone: ${formData.phone}\nLocation: ${formData.neighborhood}\nDetails: ${formData.details}`
    );

    return (
      <div
        role="status"
        aria-live="polite"
        className="rounded-3xl border border-accent/30 bg-surface p-8 sm:p-10 space-y-6"
      >
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-soft text-accent">
          <CheckCircle weight="fill" className="h-7 w-7" aria-hidden="true" />
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl font-bold tracking-tight text-ink">
            Estimate details prepared for {formData.firstName}.
          </h3>
          <p className="text-base leading-relaxed text-ink-muted">
            To connect immediately with our Boston estimating team, send your
            summary via WhatsApp or email, or call {SITE_INFO.phoneDisplay}.
          </p>
        </div>

        <div className="rounded-2xl border border-border-subtle bg-canvas p-4 text-sm space-y-1 text-ink">
          <p>
            <span className="font-semibold">Trade:</span> {selectedTrade}
          </p>
          <p>
            <span className="font-semibold">Contact:</span> {formData.email} /{" "}
            {formData.phone || "No phone entered"}
          </p>
          {formData.neighborhood && (
            <p>
              <span className="font-semibold">Area:</span> {formData.neighborhood}
            </p>
          )}
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            href={`${SITE_INFO.whatsappHref}?text=${summaryBody}`}
            target="_blank"
            rel="noopener noreferrer"
            data-agent="estimate-send-whatsapp"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-accent-hover active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          >
            <WhatsappLogo weight="bold" className="h-4 w-4" aria-hidden="true" />
            <span>Send via WhatsApp</span>
          </a>
          <a
            href={`${SITE_INFO.emailHref}?subject=${encodeURIComponent(
              `Estimate Request: ${selectedTrade}`
            )}&body=${summaryBody}`}
            data-agent="estimate-send-email"
            className="inline-flex items-center gap-2 rounded-full border border-border-subtle bg-surface px-6 py-3 text-sm font-semibold text-ink transition-all hover:bg-surface-soft active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <span>Open in Email App</span>
          </a>
          <button
            type="button"
            onClick={() => {
              setSubmitted(false);
              setInteracted(false);
            }}
            className="rounded-full px-4 py-3 text-sm font-medium text-ink-muted hover:text-ink"
          >
            Edit Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className="rounded-3xl border border-border-subtle bg-surface p-6 sm:p-10 space-y-6"
    >
      <div>
        <span className="block text-sm font-semibold text-ink mb-3">
          Project Focus
        </span>
        <div className="flex flex-wrap gap-2" role="radiogroup" aria-label="Project Focus">
          {PROJECT_TYPES.map((type) => {
            const active = selectedTrade === type;
            return (
              <button
                key={type}
                type="button"
                role="radio"
                aria-checked={active}
                onClick={() => setSelectedTrade(type)}
                className={`rounded-full px-3.5 py-2 text-xs font-semibold transition-all active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 ${
                  active
                    ? "bg-accent text-white"
                    : "border border-border-subtle bg-canvas text-ink-muted hover:text-ink hover:bg-surface-soft"
                }`}
              >
                {type}
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="firstName"
            className="block text-sm font-medium text-ink mb-1.5"
          >
            First Name <span className="text-accent">*</span>
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            required
            autoComplete="given-name"
            placeholder="Alex"
            value={formData.firstName}
            onChange={(e) =>
              setFormData({ ...formData, firstName: e.target.value })
            }
            className={`form-control w-full rounded-xl border border-border-subtle bg-canvas px-4 py-3 text-ink placeholder:text-ink-muted/60 transition-colors focus:border-accent focus:bg-surface focus:outline-none ${
              interacted && !formData.firstName ? "user-invalid-fallback" : ""
            }`}
          />
          <p className="error-msg">
            <WarningCircle weight="fill" className="h-4 w-4 shrink-0" aria-hidden="true" />
            Please enter your first name.
          </p>
        </div>

        <div>
          <label
            htmlFor="lastName"
            className="block text-sm font-medium text-ink mb-1.5"
          >
            Last Name <span className="text-accent">*</span>
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            required
            autoComplete="family-name"
            placeholder="Morgan"
            value={formData.lastName}
            onChange={(e) =>
              setFormData({ ...formData, lastName: e.target.value })
            }
            className={`form-control w-full rounded-xl border border-border-subtle bg-canvas px-4 py-3 text-ink placeholder:text-ink-muted/60 transition-colors focus:border-accent focus:bg-surface focus:outline-none ${
              interacted && !formData.lastName ? "user-invalid-fallback" : ""
            }`}
          />
          <p className="error-msg">
            <WarningCircle weight="fill" className="h-4 w-4 shrink-0" aria-hidden="true" />
            Please enter your last name.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-ink mb-1.5"
          >
            Email Address <span className="text-accent">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@example.com"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className={`form-control w-full rounded-xl border border-border-subtle bg-canvas px-4 py-3 text-ink placeholder:text-ink-muted/60 transition-colors focus:border-accent focus:bg-surface focus:outline-none ${
              interacted && !formData.email ? "user-invalid-fallback" : ""
            }`}
          />
          <p className="error-msg">
            <WarningCircle weight="fill" className="h-4 w-4 shrink-0" aria-hidden="true" />
            Please provide a valid email address.
          </p>
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-ink mb-1.5"
          >
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="(617) 555-0192"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            className="form-control w-full rounded-xl border border-border-subtle bg-canvas px-4 py-3 text-ink placeholder:text-ink-muted/60 transition-colors focus:border-accent focus:bg-surface focus:outline-none"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="neighborhood"
          className="block text-sm font-medium text-ink mb-1.5"
        >
          City or Neighborhood
        </label>
        <input
          id="neighborhood"
          name="neighborhood"
          type="text"
          placeholder="Boston, Brookline, Cambridge, Newton..."
          value={formData.neighborhood}
          onChange={(e) =>
            setFormData({ ...formData, neighborhood: e.target.value })
          }
          className="form-control w-full rounded-xl border border-border-subtle bg-canvas px-4 py-3 text-ink placeholder:text-ink-muted/60 transition-colors focus:border-accent focus:bg-surface focus:outline-none"
        />
      </div>

      <div>
        <label
          htmlFor="details"
          className="block text-sm font-medium text-ink mb-1.5"
        >
          Scope & Timeline Notes <span className="text-accent">*</span>
        </label>
        <textarea
          id="details"
          name="details"
          rows={4}
          required
          placeholder="Share room dimensions, approximate start date, or what you want to transform..."
          value={formData.details}
          onChange={(e) =>
            setFormData({ ...formData, details: e.target.value })
          }
          className={`form-control w-full rounded-xl border border-border-subtle bg-canvas px-4 py-3 text-ink placeholder:text-ink-muted/60 transition-colors focus:border-accent focus:bg-surface focus:outline-none ${
            interacted && !formData.details ? "user-invalid-fallback" : ""
          }`}
        />
        <p className="error-msg">
          <WarningCircle weight="fill" className="h-4 w-4 shrink-0" aria-hidden="true" />
          Please tell us a little about your project scope.
        </p>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between pt-2">
        <button
          type="submit"
          data-agent="estimate-submit"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-accent-hover hover:scale-[1.01] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
        >
          <span>Request Free Walkthrough</span>
          <PaperPlaneTilt weight="bold" className="h-4 w-4" aria-hidden="true" />
        </button>
        <p className="text-xs text-ink-muted">
          No obligation. Direct estimate from our Boston crew.
        </p>
      </div>
    </form>
  );
}
