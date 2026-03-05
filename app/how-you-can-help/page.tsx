import Link from "next/link";
import Image from "next/image";
import PageHero from "../components/PageHero";
import AnimateIn from "../components/AnimateIn";

// ── DATA ──────────────────────────────────────────────────────────────────────

const waysToGive = [
  {
    title: "Give Online",
    description:
      "The fastest and most convenient way to support our mission. Donate securely online in just a few minutes using a credit or debit card.",
    cta: { label: "Donate Now", href: "https://vanniecook46072.thankyou4caring.org/sslpage.aspx?pid=298", external: true },
  },
  {
    title: "Give by Mail",
    description:
      "Prefer to write a check? You can submit a check or credit card gift using our printed donation form, mailed to our McAllen office.",
    detail: "101 West Expressway 83, McAllen, Texas 78503",
  },
  {
    title: "Honorary & Memorial Gifts",
    description:
      "Honor a loved one or celebrate a special occasion with a gift to the Foundation. Gift amounts are kept confidential, and separate acknowledgments are sent to both the honoree and the donor.",
  },
  {
    title: "Matching Gifts",
    description:
      "Many employers match their employees' charitable contributions — sometimes doubling or tripling your gift. Check with your HR department to find out if your company participates.",
  },
  {
    title: "Endowments",
    description:
      "Establish a permanent endowed fund with a minimum commitment of $25,000. We work with each donor to create a fund that reflects their values and supports the programs most meaningful to them.",
  },
  {
    title: "Third-Party Fundraising",
    description:
      "Organizations and individuals are welcome to propose fundraising events on behalf of the Foundation. Events require a 10-week advance notice before any public announcement, and recurring events must be resubmitted annually.",
  },
];

const plannedGiving = [
  {
    title: "Life Insurance",
    description:
      "Name the Foundation as a beneficiary of an existing policy, or gift a policy outright as an immediate charitable contribution.",
  },
  {
    title: "Charitable Remainder Trusts",
    description:
      "Transfer assets into a trust that provides you with income for life, with the remaining principal supporting the Foundation upon the trust's termination.",
  },
  {
    title: "Retirement Plans",
    description:
      "Designate the Foundation as a beneficiary of your IRA, 401(k), 403(b), or other qualified retirement plan. Because these assets are pre-tax, they can be especially efficient charitable gifts.",
  },
  {
    title: "Bequests",
    description:
      "Include the Foundation in your will through a percentage-based, fixed-dollar, residual, or contingent bequest — leaving a lasting legacy for children in the Rio Grande Valley.",
  },
  {
    title: "IRA Qualified Charitable Distribution",
    description:
      "Donors aged 70½ or older can make a direct transfer from their IRA to the Foundation, satisfying required minimum distributions while minimizing taxable income.",
    link: { label: "Download the IRA Flyer", href: "/brand/IRA.QCD_.FLYER_.2018-1-1.pdf", external: true },
  },
];

// ── PAGE ──────────────────────────────────────────────────────────────────────

export default function HowYouCanHelpPage() {
  return (
    <main>
      <PageHero
        eyebrow="Get Involved"
        title="How You Can Help"
        subtitle="Our success depends on the support of our community. Every gift — in any form — helps ensure that no child in the Rio Grande Valley goes without the care they need."
      />

      {/* ── INTRO ─────────────────────────────────────────────────────────── */}
      <section className="bg-[var(--color-cream)] py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <AnimateIn>
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-px w-10 bg-[var(--color-gold)]" />
                  <span className="font-body text-[var(--color-charcoal-light)] text-xs tracking-[0.16em] uppercase">
                    Make a Difference
                  </span>
                </div>
                <p className="font-display text-[var(--color-charcoal)] text-[clamp(1.25rem,2.4vw,1.9rem)] font-light italic leading-[1.6] tracking-[-0.01em] mb-6">
                  &ldquo;Will you help us? Every contribution makes a real difference in the lives of children and families in the Rio Grande Valley.&rdquo;
                </p>
                <p className="font-body text-[var(--color-charcoal-medium)] text-base leading-[1.8] mb-4">
                  The Vannie E. Cook Jr. Cancer Foundation is a 501(c)(3) nonprofit organization committed to
                  funding pediatric cancer care in the Rio Grande Valley. We depend entirely on the generosity
                  of donors like you to keep the clinic running — and to ensure that no family is ever turned
                  away due to inability to pay.
                </p>
                <p className="font-body text-[var(--color-charcoal-medium)] text-base leading-[1.8]">
                  There are many ways to give, whether you prefer to donate online, by mail, through a
                  planned gift, or by organizing a fundraiser in your community.
                </p>
              </div>

              {/* Image */}
              <div className="w-full lg:w-[420px] shrink-0">
                <div className="relative">
                  <div className="absolute -top-4 -right-4 w-full h-full rounded-2xl bg-[var(--color-gold)]/15" />
                  <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-[0_12px_40px_rgba(123,94,167,0.12)]">
                    <Image
                      src="/brand/310629742_526090952854146_1378438148205001764_n-686x1024.jpg"
                      alt="A doctor with a young patient supported by the Foundation"
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

      {/* ── WAYS TO GIVE ──────────────────────────────────────────────────── */}
      <section className="bg-[var(--color-cream-dark)] py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <AnimateIn>
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-4 mb-5">
                <div className="h-px w-10 bg-[var(--color-gold)]" />
                <span className="font-body text-[var(--color-charcoal-light)] text-xs tracking-[0.18em] uppercase">
                  Ways to Give
                </span>
                <div className="h-px w-10 bg-[var(--color-gold)]" />
              </div>
              <h2 className="font-display text-[var(--color-charcoal)] text-[clamp(2rem,3vw,2.75rem)] font-light tracking-[-0.02em]">
                Choose How You&apos;d Like to Give
              </h2>
            </div>
          </AnimateIn>

          <AnimateIn delay={80} threshold={0.05}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {waysToGive.map((item, i) => (
                <div
                  key={item.title}
                  className={`rounded-2xl p-8 flex flex-col gap-4 ${
                    i === 0
                      ? "bg-[var(--color-purple-deepest)] text-white shadow-[0_12px_40px_rgba(45,27,85,0.22)]"
                      : "bg-white shadow-[0_4px_20px_rgba(123,94,167,0.07)]"
                  }`}
                >
                  <h3
                    className={`font-display text-xl font-medium leading-snug ${
                      i === 0 ? "text-[var(--color-gold)]" : "text-[var(--color-charcoal)]"
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`font-body text-sm leading-[1.8] flex-1 ${
                      i === 0 ? "text-white" : "text-[var(--color-charcoal-medium)]"
                    }`}
                  >
                    {item.description}
                  </p>
                  {item.detail && (
                    <p className="font-body text-xs text-[var(--color-charcoal-light)] italic">
                      {item.detail}
                    </p>
                  )}
                  {item.cta && (
                    <Link
                      href={item.cta.href}
                      target={item.cta.external ? "_blank" : undefined}
                      rel={item.cta.external ? "noopener noreferrer" : undefined}
                      className="mt-2 self-start px-6 py-2.5 rounded-full bg-[var(--color-gold)] text-[var(--color-charcoal)] font-body text-sm font-semibold tracking-wide transition-all duration-200 hover:bg-[var(--color-gold-dark)] hover:shadow-[0_4px_14px_rgba(245,166,35,0.45)] active:scale-95"
                    >
                      {item.cta.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── PLANNED GIVING ────────────────────────────────────────────────── */}
      <section className="bg-[var(--color-cream)] py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <AnimateIn>
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">

              {/* Left: heading + intro */}
              <div className="lg:w-[340px] shrink-0 lg:sticky lg:top-32">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-px w-10 bg-[var(--color-gold)]" />
                  <span className="font-body text-[var(--color-charcoal-light)] text-xs tracking-[0.16em] uppercase">
                    Legacy Giving
                  </span>
                </div>
                <h2 className="font-display text-[var(--color-charcoal)] text-[clamp(1.9rem,3vw,2.75rem)] font-light tracking-[-0.02em] leading-[1.1] mb-5">
                  Planned Giving
                </h2>
                <p className="font-body text-[var(--color-charcoal-medium)] text-base leading-[1.8] mb-6">
                  A planned gift is one of the most meaningful ways to extend your support beyond your lifetime. Working with your financial advisor, you can structure a gift that benefits both your estate and the children of the Rio Grande Valley.
                </p>
                <p className="font-body text-[var(--color-charcoal-medium)] text-base leading-[1.8] mb-8">
                  Planned giving donors may also qualify for membership in our{" "}
                  <Link
                    href="/how-you-can-help/saving-our-children-society"
                    className="text-[var(--color-purple)] underline underline-offset-2 hover:text-[var(--color-purple-dark)] transition-colors duration-150"
                  >
                    Saving Our Children Society
                  </Link>
                  .
                </p>

                {/* Image */}
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(123,94,167,0.08)] hidden lg:block">
                  <Image
                    src="/brand/Planned Giving.jpg"
                    alt="A child supported by the Foundation"
                    fill
                    className="object-cover object-top"
                  />
                </div>
              </div>

              {/* Right: planned giving items */}
              <div className="flex-1 space-y-4">
                {plannedGiving.map((item) => (
                  <div
                    key={item.title}
                    className="bg-white rounded-2xl p-7 shadow-[0_4px_20px_rgba(123,94,167,0.07)]"
                  >
                    <h3 className="font-display text-[var(--color-charcoal)] text-xl font-medium mb-3">
                      {item.title}
                    </h3>
                    <p className="font-body text-[var(--color-charcoal-medium)] text-sm leading-[1.8]">
                      {item.description}
                    </p>
                    {item.link && (
                      <Link
                        href={item.link.href}
                        target={item.link.external ? "_blank" : undefined}
                        rel={item.link.external ? "noopener noreferrer" : undefined}
                        className="inline-block mt-3 font-body text-sm text-[var(--color-purple)] font-medium underline underline-offset-2 hover:text-[var(--color-purple-dark)] transition-colors duration-150"
                      >
                        {item.link.label} →
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── SAVING OUR CHILDREN SOCIETY CTA ──────────────────────────────── */}
      <section className="bg-[var(--color-purple-deepest)] py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-purple-deepest)] via-[var(--color-purple-dark)] to-[var(--color-purple-deepest)]" />
        <div className="absolute inset-0 bg-dot-pattern opacity-40" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <AnimateIn>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-10 bg-[var(--color-gold)]" />
              <span className="font-body text-[var(--color-gold)] text-xs font-medium tracking-[0.16em] uppercase">
                Recognition Society
              </span>
              <div className="h-px w-10 bg-[var(--color-gold)]" />
            </div>
            <h2 className="font-display text-white text-[clamp(2rem,3.5vw,3rem)] font-light tracking-[-0.02em] leading-[1.1] mb-6">
              Saving Our Children Society
            </h2>
            <p className="font-body text-white/65 text-lg leading-[1.75] max-w-2xl mx-auto mb-10">
              The Saving Our Children Society honors donors who have made a commitment to include the Foundation in their long-term estate plans. Membership is a recognition of your extraordinary dedication to the children of the Rio Grande Valley.
            </p>
            <Link
              href="/how-you-can-help/saving-our-children-society"
              className="inline-block px-8 py-3.5 rounded-full bg-[var(--color-gold)] text-[var(--color-charcoal)] font-body font-semibold text-sm tracking-wide transition-all duration-200 hover:bg-[var(--color-gold-dark)] hover:shadow-[0_6px_22px_rgba(245,166,35,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)] active:scale-95"
            >
              Learn About Membership
            </Link>
          </AnimateIn>
        </div>
      </section>

      {/* ── BOTTOM CTA ────────────────────────────────────────────────────── */}
      <section className="bg-[var(--color-cream)] py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <AnimateIn>
            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
              <div className="flex-1 text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-3 mb-5">
                  <div className="h-px w-10 bg-[var(--color-gold)]" />
                  <span className="font-body text-[var(--color-purple)] text-xs font-medium tracking-[0.14em] uppercase">
                    Questions?
                  </span>
                </div>
                <h2 className="font-display text-[var(--color-charcoal)] text-[clamp(1.8rem,3vw,2.5rem)] font-medium leading-[1.15] tracking-[-0.02em] mb-5">
                  We&apos;re Here to Help
                </h2>
                <p className="font-body text-[var(--color-charcoal-medium)] text-base leading-[1.8]">
                  Have questions about giving options, matching gifts, or setting up a planned gift? Our team would love to speak with you.
                </p>
                <p className="font-body text-[var(--color-charcoal-medium)] text-base leading-[1.8] mt-2">
                  Call us at{" "}
                  <a
                    href="tel:+19566875146"
                    className="text-[var(--color-purple)] font-medium hover:text-[var(--color-purple-dark)] transition-colors duration-150"
                  >
                    (956) 687-5146
                  </a>{" "}
                  or send us a message.
                </p>
              </div>
              <div className="flex flex-col gap-3 shrink-0">
                <Link
                  href="/contact"
                  className="px-8 py-3.5 rounded-full bg-[var(--color-gold)] text-[var(--color-charcoal)] font-body font-semibold text-sm tracking-wide text-center transition-all duration-200 hover:bg-[var(--color-gold-dark)] hover:shadow-[0_6px_22px_rgba(245,166,35,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)] active:scale-95"
                >
                  Contact Us
                </Link>
                <Link
                  href="/about-us/history"
                  className="px-8 py-3.5 rounded-full border-2 border-[var(--color-purple)]/30 text-[var(--color-purple)] font-body font-semibold text-sm tracking-wide text-center transition-all duration-200 hover:border-[var(--color-purple)] hover:bg-[var(--color-purple)]/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-purple)] active:scale-95"
                >
                  Our Story
                </Link>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>
    </main>
  );
}
