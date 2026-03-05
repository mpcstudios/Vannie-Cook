"use client";

import { useState } from "react";
import PageHero from "../components/PageHero";
import AnimateIn from "../components/AnimateIn";

// ── Replace with your Formspree form ID after signing up at formspree.io ──────
const FORMSPREE_ID = "YOUR_FORM_ID";

type FormState = "idle" | "submitting" | "success" | "error";

const contactInfo = [
  {
    label: "Address",
    lines: ["101 West Expressway 83", "McAllen, Texas 78503"],
    href: "https://maps.google.com/?q=101+West+Expressway+83+McAllen+Texas+78503",
    external: true,
  },
  {
    label: "Phone",
    lines: ["(956) 687-5146"],
    href: "tel:+19566875146",
  },
  {
    label: "Fax",
    lines: ["(956) 687-5196"],
    href: null,
  },
  {
    label: "Executive Director",
    lines: ["Laura Martinez Ilgun"],
    href: null,
  },
];

// ── PAGE ──────────────────────────────────────────────────────────────────────

export default function ContactPage() {
  const [formState, setFormState] = useState<FormState>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setFormState("success");
        form.reset();
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  }

  return (
    <main>
      <PageHero
        eyebrow="Get in Touch"
        title="Contact Us"
        subtitle="We'd love to hear from you. Whether you have a question, want to learn more about giving, or just want to connect — reach out anytime."
      />

      <section className="bg-[var(--color-cream)] py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <AnimateIn>
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

              {/* ── Left: contact info ──────────────────────────────────── */}
              <div className="lg:w-[320px] shrink-0">
                <div className="flex items-center gap-3 mb-8">
                  <div className="h-px w-10 bg-[var(--color-gold)]" />
                  <span className="font-body text-[var(--color-charcoal-light)] text-xs tracking-[0.16em] uppercase">
                    Our Office
                  </span>
                </div>

                <div className="space-y-7 mb-10">
                  {contactInfo.map((item) => (
                    <div key={item.label}>
                      <p className="font-body text-[var(--color-gold)] text-xs font-semibold tracking-[0.12em] uppercase mb-1">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.external ? "_blank" : undefined}
                          rel={item.external ? "noopener noreferrer" : undefined}
                          className="font-body text-[var(--color-charcoal-medium)] text-base leading-[1.7] hover:text-[var(--color-purple)] transition-colors duration-150 focus-visible:outline-none focus-visible:text-[var(--color-purple)]"
                        >
                          {item.lines.map((line, i) => (
                            <span key={i} className="block">{line}</span>
                          ))}
                        </a>
                      ) : (
                        <div className="font-body text-[var(--color-charcoal-medium)] text-base leading-[1.7]">
                          {item.lines.map((line, i) => (
                            <span key={i} className="block">{line}</span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

              </div>

              {/* ── Right: form ─────────────────────────────────────────── */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-8">
                  <div className="h-px w-10 bg-[var(--color-gold)]" />
                  <span className="font-body text-[var(--color-charcoal-light)] text-xs tracking-[0.16em] uppercase">
                    Send a Message
                  </span>
                </div>

                {formState === "success" ? (
                  <div className="rounded-2xl bg-[var(--color-cream-dark)] border border-[var(--color-gold)]/30 p-10 text-center">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-gold)]/15 flex items-center justify-center mx-auto mb-4">
                      <svg className="w-6 h-6 text-[var(--color-gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="font-display text-[var(--color-charcoal)] text-2xl font-medium mb-2">
                      Message Sent
                    </h3>
                    <p className="font-body text-[var(--color-charcoal-medium)] text-base leading-[1.7]">
                      Thank you for reaching out. We&apos;ll be in touch shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name + Email row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block font-body text-[var(--color-charcoal)] text-sm font-medium mb-1.5">
                          Full Name <span className="text-[var(--color-gold)]">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          placeholder="Jane Smith"
                          className="w-full px-4 py-3 rounded-xl border border-[var(--color-cream-dark)] bg-white font-body text-sm text-[var(--color-charcoal)] placeholder:text-[var(--color-charcoal-light)]/60 focus:outline-none focus:border-[var(--color-purple)]/50 focus:ring-2 focus:ring-[var(--color-purple)]/10 transition-colors duration-150"
                        />
                      </div>
                      <div>
                        <label className="block font-body text-[var(--color-charcoal)] text-sm font-medium mb-1.5">
                          Email Address <span className="text-[var(--color-gold)]">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          placeholder="jane@example.com"
                          className="w-full px-4 py-3 rounded-xl border border-[var(--color-cream-dark)] bg-white font-body text-sm text-[var(--color-charcoal)] placeholder:text-[var(--color-charcoal-light)]/60 focus:outline-none focus:border-[var(--color-purple)]/50 focus:ring-2 focus:ring-[var(--color-purple)]/10 transition-colors duration-150"
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block font-body text-[var(--color-charcoal)] text-sm font-medium mb-1.5">
                        Phone Number <span className="font-normal text-[var(--color-charcoal-light)]">(optional)</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="(956) 000-0000"
                        className="w-full px-4 py-3 rounded-xl border border-[var(--color-cream-dark)] bg-white font-body text-sm text-[var(--color-charcoal)] placeholder:text-[var(--color-charcoal-light)]/60 focus:outline-none focus:border-[var(--color-purple)]/50 focus:ring-2 focus:ring-[var(--color-purple)]/10 transition-colors duration-150"
                      />
                    </div>

                    {/* Subject */}
                    <div>
                      <label className="block font-body text-[var(--color-charcoal)] text-sm font-medium mb-1.5">
                        Subject <span className="text-[var(--color-gold)]">*</span>
                      </label>
                      <select
                        name="subject"
                        required
                        defaultValue=""
                        className="w-full px-4 py-3 rounded-xl border border-[var(--color-cream-dark)] bg-white font-body text-sm text-[var(--color-charcoal)] focus:outline-none focus:border-[var(--color-purple)]/50 focus:ring-2 focus:ring-[var(--color-purple)]/10 transition-colors duration-150 appearance-none"
                      >
                        <option value="" disabled>Select a subject…</option>
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Donation / Giving">Donation / Giving</option>
                        <option value="Planned Giving / Estate Planning">Planned Giving / Estate Planning</option>
                        <option value="Fundraising Event">Fundraising Event</option>
                        <option value="Media / Press">Media / Press</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block font-body text-[var(--color-charcoal)] text-sm font-medium mb-1.5">
                        Message <span className="text-[var(--color-gold)]">*</span>
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={6}
                        placeholder="How can we help you?"
                        className="w-full px-4 py-3 rounded-xl border border-[var(--color-cream-dark)] bg-white font-body text-sm text-[var(--color-charcoal)] placeholder:text-[var(--color-charcoal-light)]/60 focus:outline-none focus:border-[var(--color-purple)]/50 focus:ring-2 focus:ring-[var(--color-purple)]/10 transition-colors duration-150 resize-none"
                      />
                    </div>

                    {/* Error message */}
                    {formState === "error" && (
                      <p className="font-body text-sm text-red-600">
                        Something went wrong. Please try again or call us at (956) 687-5146.
                      </p>
                    )}

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={formState === "submitting"}
                      className="px-8 py-3.5 rounded-full bg-[var(--color-gold)] text-[var(--color-charcoal)] font-body font-semibold text-sm tracking-wide transition-all duration-200 hover:bg-[var(--color-gold-dark)] hover:shadow-[0_4px_18px_rgba(245,166,35,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)] active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:shadow-none disabled:active:scale-100"
                    >
                      {formState === "submitting" ? "Sending…" : "Send Message"}
                    </button>
                  </form>
                )}
              </div>

            </div>
          </AnimateIn>
        </div>
      </section>
    </main>
  );
}
