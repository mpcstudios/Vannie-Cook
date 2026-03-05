import Link from "next/link";
import Image from "next/image";
import PageHero from "../../components/PageHero";
import AnimateIn from "../../components/AnimateIn";

// ── DATA ──────────────────────────────────────────────────────────────────────

const benefits = [
  "Welcome letter and gold childhood cancer awareness lapel pin",
  "Name recognition on the Society Recognition Wall at the Vannie Cook Clinic",
  "Invitation to the annual member reception",
  "Invitations to Foundation events throughout the year",
  "Recognition in mailings, newsletters, and on our website",
];

const giftTypes = [
  {
    title: "Bequests",
    description:
      "The most common form of planned giving. A bequest allows you to leave a gift of cash, securities, real estate, or personal property through your will — without affecting your assets during your lifetime. Various bequest structures can also provide potential estate tax savings.",
  },
  {
    title: "Charitable Remainder Trusts",
    description:
      "Transfer assets into a trust that provides income to you or a designated beneficiary for life or a set period. Upon the beneficiary's passing, the remaining funds are directed to the Foundation — a gift that continues to give.",
  },
  {
    title: "Life Insurance",
    description:
      "Gift a life insurance policy to the Foundation immediately, or designate the Foundation as a beneficiary upon your passing. This approach can offer estate tax advantages without the need to revise your will.",
  },
];


// ── PAGE ──────────────────────────────────────────────────────────────────────

export default function SavingOurChildrenSocietyPage() {
  return (
    <main>
      <PageHero
        eyebrow="How You Can Help"
        title="Saving Our Children Society"
        subtitle="An association of friends who have committed to the future of pediatric cancer care in the Rio Grande Valley through planned giving."
      />

      {/* ── INTRO ─────────────────────────────────────────────────────────── */}
      <section className="bg-[var(--color-cream)] py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <AnimateIn>
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-px w-10 bg-[var(--color-gold)]" />
                  <span className="font-body text-[var(--color-charcoal-light)] text-xs tracking-[0.16em] uppercase">
                    Legacy Giving
                  </span>
                </div>
                <p className="font-display text-[var(--color-charcoal)] text-[clamp(1.25rem,2.4vw,1.9rem)] font-light italic leading-[1.6] tracking-[-0.01em] mb-6">
                  A gift that outlasts a lifetime.
                </p>
                <p className="font-body text-[var(--color-charcoal-medium)] text-base leading-[1.8] mb-4">
                  The Saving Our Children Society is an association of friends of the Vannie E. Cook Jr.
                  Cancer Foundation who have made a commitment to include the Foundation in their estate
                  plans — ensuring that the children of South Texas have access to world-class cancer care
                  for generations to come.
                </p>
                <p className="font-body text-[var(--color-charcoal-medium)] text-base leading-[1.8] mb-8">
                  Planned giving can be structured in ways that benefit both your personal finances and
                  the families who depend on the Foundation. Our Executive Director is available to discuss
                  options with you and your financial advisor at any time.
                </p>
                <Link
                  href="/contact"
                  className="inline-block px-7 py-3 rounded-full bg-[var(--color-gold)] text-[var(--color-charcoal)] font-body font-semibold text-sm tracking-wide transition-all duration-200 hover:bg-[var(--color-gold-dark)] hover:shadow-[0_4px_18px_rgba(245,166,35,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)] active:scale-95"
                >
                  Speak with Our Director
                </Link>
              </div>

              {/* Quote */}
              <div className="lg:w-[360px] shrink-0">
                <div className="bg-[var(--color-purple-deepest)] rounded-2xl p-8 shadow-[0_12px_40px_rgba(45,27,85,0.22)]">
                  <div className="h-px w-10 bg-[var(--color-gold)] mb-6" />
                  <blockquote className="font-display text-white text-[clamp(1.1rem,1.8vw,1.35rem)] italic leading-[1.65] mb-6">
                    &ldquo;It brings me incredible joy knowing that I will leave a{" "}
                    <span className="text-[var(--color-gold)] not-italic font-medium">
                      legacy of hope
                    </span>{" "}
                    and support by providing for the future of the Foundation through a bequest under my will.&rdquo;
                  </blockquote>
                  <p className="font-body text-white/50 text-sm">
                    Dr. Ken Landrum
                  </p>
                  <p className="font-body text-white/35 text-xs mt-0.5">
                    Board Chair, 1995–2014
                  </p>
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── WAYS TO GIVE ──────────────────────────────────────────────────── */}
      <section className="bg-[var(--color-cream-dark)] py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <AnimateIn>
            <div className="text-center mb-14">
              <div className="flex items-center justify-center gap-4 mb-5">
                <div className="h-px w-10 bg-[var(--color-gold)]" />
                <span className="font-body text-[var(--color-charcoal-light)] text-xs tracking-[0.18em] uppercase">
                  Gift Options
                </span>
                <div className="h-px w-10 bg-[var(--color-gold)]" />
              </div>
              <h2 className="font-display text-[var(--color-charcoal)] text-[clamp(2rem,3vw,2.75rem)] font-light tracking-[-0.02em]">
                Ways to Make a Planned Gift
              </h2>
            </div>
          </AnimateIn>

          <AnimateIn delay={80}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {giftTypes.map((gift) => (
                <div
                  key={gift.title}
                  className="bg-white rounded-2xl p-7 shadow-[0_4px_20px_rgba(123,94,167,0.07)]"
                >
                  <h3 className="font-display text-[var(--color-charcoal)] text-xl font-medium mb-3">
                    {gift.title}
                  </h3>
                  <p className="font-body text-[var(--color-charcoal-medium)] text-sm leading-[1.8]">
                    {gift.description}
                  </p>
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── MEMBERSHIP BENEFITS ───────────────────────────────────────────── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <AnimateIn>
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-px w-10 bg-[var(--color-gold)]" />
                  <span className="font-body text-[var(--color-charcoal-light)] text-xs tracking-[0.16em] uppercase">
                    Member Benefits
                  </span>
                </div>
                <h2 className="font-display text-[var(--color-charcoal)] text-[clamp(1.9rem,3vw,2.5rem)] font-light tracking-[-0.02em] leading-[1.1] mb-6">
                  What Membership Includes
                </h2>
                <p className="font-body text-[var(--color-charcoal-medium)] text-base leading-[1.8] mb-8">
                  To become a member, prospective donors complete and sign a Letter of Intent.
                  Membership is a recognition of your extraordinary commitment — and we are
                  honored to welcome you into our community.
                </p>
                <ul className="space-y-4">
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--color-gold)] shrink-0" />
                      <span className="font-body text-[var(--color-charcoal-medium)] text-base leading-[1.7]">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image placeholder */}
              <div className="w-full lg:w-[380px] shrink-0">
                <div className="relative">
                  <div className="absolute -bottom-4 -left-4 w-full h-full rounded-2xl bg-[var(--color-purple)]/10" />
                  <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-[0_12px_40px_rgba(123,94,167,0.12)]">
                    <Image
                      src="/brand/Teen.jpg"
                      alt="A young patient supported by the Foundation"
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>


{/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="bg-[var(--color-purple-deepest)] py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-purple-deepest)] via-[var(--color-purple-dark)] to-[var(--color-purple-deepest)]" />
        <div className="absolute inset-0 bg-dot-pattern opacity-40" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-10 text-center">
          <AnimateIn>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-10 bg-[var(--color-gold)]" />
              <span className="font-body text-[var(--color-gold)] text-xs font-medium tracking-[0.16em] uppercase">
                Join the Society
              </span>
              <div className="h-px w-10 bg-[var(--color-gold)]" />
            </div>
            <h2 className="font-display text-white text-[clamp(2rem,3.5vw,3rem)] font-light tracking-[-0.02em] leading-[1.1] mb-5">
              Will You Help Us?
            </h2>
            <p className="font-body text-white/65 text-base leading-[1.75] max-w-xl mx-auto mb-10">
              If you are interested in becoming a member of the Saving Our Children Society, we would love to hear from you. Contact our Executive Director to learn more and request a Letter of Intent.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact"
                className="px-8 py-3.5 rounded-full bg-[var(--color-gold)] text-[var(--color-charcoal)] font-body font-semibold text-sm tracking-wide transition-all duration-200 hover:bg-[var(--color-gold-dark)] hover:shadow-[0_6px_22px_rgba(245,166,35,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)] active:scale-95"
              >
                Contact Us
              </Link>
              <Link
                href="/how-you-can-help"
                className="px-8 py-3.5 rounded-full border-2 border-white/25 text-white font-body font-semibold text-sm tracking-wide transition-all duration-200 hover:border-white/50 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 active:scale-95"
              >
                All Ways to Give
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>
    </main>
  );
}
