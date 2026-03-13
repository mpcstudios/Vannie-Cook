import Image from "next/image";
import Link from "next/link";
import StatsSection from "./components/StatsSection";
import AnimateIn from "./components/AnimateIn";
import AccreditationBar from "./components/AccreditationBar";
import HeroImageCarousel from "./components/HeroImageCarousel";

export default function HomePage() {
  return (
    <main>
      {/* ── HERO ───────────────────────────────────────────────────────── */}
      <section className="relative bg-[var(--color-purple-deepest)] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-purple-deepest)] via-[var(--color-purple-dark)] to-[var(--color-purple-deepest)]" />
        <div className="absolute inset-0 bg-cta-glow" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 min-h-screen flex flex-col">

          {/* Right: Image carousel — desktop only, absolutely positioned */}
          <div className="absolute right-0 top-32 bottom-0 w-1/2 hidden lg:block">
            <HeroImageCarousel />
          </div>

          {/* Desktop nav spacer — reserves space equal to nav height */}
          <div className="hidden lg:block h-40 shrink-0" />

          {/* Left: Text content — fills remaining height, centered within it */}
          <div className="flex-1 flex items-center pt-36 pb-8 lg:pt-0 lg:pb-16">
            <div className="w-full lg:w-1/2">
              {/* Eyebrow */}
              <div className="flex items-center gap-3 mb-6 animate-fade-in anim-delay-0">
                <div className="h-px w-10 bg-[var(--color-gold)] animate-grow-x anim-delay-100" />
                <span className="font-body text-[var(--color-gold)] text-xs font-medium tracking-[0.16em] uppercase">
                  A History of Caring
                </span>
              </div>

              {/* Headline */}
              <h1 className="font-display text-white text-[clamp(3rem,5.5vw,5.5rem)] font-light leading-[1.1] tracking-[-0.02em] mb-7 animate-fade-in-up anim-delay-200">
                <em className="italic text-[var(--color-gold)]">Saving</em>{" "}
                Our Children.{" "}
                <em className="italic text-[var(--color-gold)]">Healing</em>{" "}
                Our Families.
              </h1>

              {/* Description */}
              <p className="font-body text-white/78 text-lg leading-[1.75] mb-10 animate-fade-in-up anim-delay-350">
                Providing resources for pediatric cancer treatment, research, and
                education in South Texas — ensuring no child is ever turned away
                due to inability to pay.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 animate-fade-in-up anim-delay-500">
                <Link
                  href="/about-us"
                  className="px-8 py-3.5 rounded-full bg-[var(--color-gold)] text-[var(--color-charcoal)] font-body font-semibold text-sm tracking-wide transition-colors duration-200 hover:bg-[var(--color-gold-dark)] hover:shadow-[0_6px_22px_rgba(245,166,35,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)] active:scale-95"
                >
                  Learn Our Story
                </Link>
                <Link
                  href="/how-you-can-help"
                  className="px-8 py-3.5 rounded-full border-2 border-white/45 text-white font-body font-semibold text-sm tracking-wide transition-colors duration-200 hover:bg-white/10 hover:border-white/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 active:scale-95"
                >
                  How to Help
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile: carousel below text */}
          <div className="lg:hidden w-full h-[480px] relative">
            <HeroImageCarousel />
          </div>

        </div>
      </section>

      {/* ── MISSION STATEMENT ──────────────────────────────────────────── */}
      <section className="bg-[var(--color-cream)] py-24 lg:py-36">
        <div className="max-w-5xl mx-auto px-6 lg:px-10 text-center">
          <AnimateIn>
            {/* Our Mission label */}
            <div className="flex items-center justify-center gap-4 mb-14">
              <div className="h-px w-10 bg-[var(--color-gold)]" />
              <span className="font-body text-[var(--color-charcoal-light)] text-xs tracking-[0.18em] uppercase">
                Our Mission
              </span>
              <div className="h-px w-10 bg-[var(--color-gold)]" />
            </div>

            <blockquote>
              <p className="font-display text-[var(--color-charcoal)] text-[clamp(1.35rem,2.8vw,2.1rem)] font-light italic leading-[1.55] tracking-[-0.01em] max-w-3xl mx-auto">
                Ensuring every child in the Rio Grande Valley who faces cancer or
                a blood disease receives world-class care — close to home, and
                regardless of their family&apos;s inability to pay.
              </p>
            </blockquote>
          </AnimateIn>
        </div>
      </section>

      {/* ── STATS ──────────────────────────────────────────────────────── */}
      <StatsSection />

      {/* ── ABOUT THE FOUNDATION ───────────────────────────────────────── */}
      <section className="bg-[var(--color-cream)] py-24 lg:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-stretch">
            {/* Photo */}
            <AnimateIn variant="fade" className="h-full">
              <div className="relative h-full">
                <div className="relative rounded-2xl overflow-hidden shadow-[0_24px_64px_rgba(123,94,167,0.18)] h-full min-h-[380px]">
                  <Image
                    src="/brand/About Vannie Cook.jpeg"
                    alt="Vannie E. Cook Jr."
                    width={640}
                    height={500}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[var(--color-purple-dark)]/40 to-transparent" />
                </div>
                {/* Decorative shapes behind the photo */}
                <div className="absolute -bottom-8 -right-8 w-44 h-44 rounded-2xl bg-[var(--color-gold)] opacity-14 -z-10" />
                <div className="absolute -top-8 -left-8 w-36 h-36 rounded-full bg-[var(--color-purple-light)] opacity-12 -z-10" />
              </div>
            </AnimateIn>

            {/* Text */}
            <AnimateIn delay={150}>
              <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-10 bg-[var(--color-gold)]" />
                <span className="font-body text-[var(--color-purple)] text-xs font-medium tracking-[0.14em] uppercase">
                  About the Foundation
                </span>
              </div>

              <h2 className="font-display text-[var(--color-charcoal)] text-[clamp(2rem,3.5vw,3.25rem)] font-medium leading-[1.15] tracking-[-0.02em] mb-7">
                Bringing World-Class{" "}
                <em className="not-italic text-[var(--color-purple)]">
                  Pediatric Care
                </em>{" "}
                Close to Home
              </h2>

              <p className="font-body text-[var(--color-charcoal-medium)] text-base leading-[1.8] mb-5">
                The Vannie E. Cook Jr. Cancer Foundation supports the
                Children&apos;s Cancer and Hematology Clinic, established in
                2001 through a landmark collaboration with Texas Children&apos;s
                Hospital and Baylor College of Medicine.
              </p>
              <p className="font-body text-[var(--color-charcoal-medium)] text-base leading-[1.8] mb-9">
                Before the clinic opened, families in the Rio Grande Valley had
                to travel hundreds of miles for their children&apos;s cancer
                care. Today, those same families receive world-class
                treatment — right here in their own community, and never turned
                away regardless of their ability to pay.
              </p>

              <Link
                href="/about-us/history"
                className="inline-flex items-center gap-2 font-body text-[var(--color-purple)] font-semibold text-sm tracking-wide hover:gap-4 transition-all duration-200 group focus-visible:outline-none focus-visible:underline"
              >
                Read Our History
                <svg
                  className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ── COMMUNITY CTA ──────────────────────────────────────────────── */}
      <section className="relative py-28 lg:py-40 overflow-hidden bg-[var(--color-purple-deepest)]">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-purple-deepest)] via-[var(--color-purple-dark)] to-[var(--color-purple-deepest)]" />
        <div className="absolute inset-0 bg-cta-glow" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <AnimateIn>
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-10 bg-[var(--color-gold)]/50" />
              <span className="font-body text-[var(--color-gold)] text-xs font-medium tracking-[0.2em] uppercase">
                Saving Our Children Society
              </span>
              <div className="h-px w-10 bg-[var(--color-gold)]/50" />
            </div>

            <h2 className="font-display text-white text-[clamp(2.2rem,5vw,4rem)] font-light leading-[1.1] tracking-[-0.02em] mb-6">
              Our Success Depends on{" "}
              <em className="not-italic text-[var(--color-gold)]">
                Our Community
              </em>
            </h2>

            <p className="font-body text-white/72 text-lg leading-[1.75] max-w-2xl mx-auto mb-12">
              Will you help us? Through planned giving and ongoing support, we
              ensure every child in the Rio Grande Valley has access to the care
              they deserve — regardless of their family&apos;s ability to pay.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/how-you-can-help"
                className="px-9 py-4 rounded-full bg-[var(--color-gold)] text-[var(--color-charcoal)] font-body font-semibold text-sm tracking-wide transition-all duration-200 hover:bg-[var(--color-gold-dark)] hover:shadow-[0_8px_28px_rgba(245,166,35,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)] active:scale-95"
              >
                Ways to Give
              </Link>
              <Link
                href="/how-you-can-help/saving-our-children-society"
                className="px-9 py-4 rounded-full border-2 border-white/30 text-white font-body font-semibold text-sm tracking-wide transition-all duration-200 hover:bg-white/10 hover:border-white/55 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 active:scale-95"
              >
                Saving Our Children Society
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>

      <AccreditationBar />
    </main>
  );
}
