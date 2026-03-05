import Image from "next/image";
import Link from "next/link";
import PageHero from "../../components/PageHero";
import AnimateIn from "../../components/AnimateIn";

export default function AboutVanniePage() {
  return (
    <main>
      <PageHero
        eyebrow="About Us"
        title="About Vannie E. Cook Jr."
        subtitle="The man whose vision and generosity shaped cancer care in South Texas for generations."
      />

      {/* ── PORTRAIT + BIO ───────────────────────────────────────────────── */}
      <section className="bg-[var(--color-cream)] py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="lg:grid lg:grid-cols-[1fr_2fr] lg:gap-20 lg:items-start">

            {/* Portrait */}
            <AnimateIn variant="fade" className="mb-12 lg:mb-0">
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-[0_24px_64px_rgba(123,94,167,0.18)]">
                  <Image
                    src="/brand/vannie2-min.jpg"
                    alt="Vannie E. Cook Jr."
                    width={500}
                    height={620}
                    className="w-full h-auto object-cover"
                    priority
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[var(--color-purple-dark)]/40 to-transparent" />
                </div>
                {/* Decorative shapes — matching homepage treatment */}
                <div className="absolute -bottom-8 -right-8 w-44 h-44 rounded-2xl bg-[var(--color-gold)] opacity-14 -z-10" />
                <div className="absolute -top-8 -left-8 w-36 h-36 rounded-full bg-[var(--color-purple-light)] opacity-12 -z-10" />
              </div>
            </AnimateIn>

            {/* Biography */}
            <AnimateIn delay={150}>
              <div className="flex items-center gap-3 mb-8">
                <div className="h-px w-10 bg-[var(--color-gold)]" />
                <span className="font-body text-[var(--color-charcoal-light)] text-xs tracking-[0.16em] uppercase">
                  His Story
                </span>
              </div>

              <p className="font-display text-[var(--color-purple)] text-[clamp(1.2rem,2vw,1.5rem)] italic leading-[1.6] border-l-2 border-[var(--color-gold)] pl-5 mb-10">
                A kind man with a philanthropic spirit, Mr. Cook would most certainly be proud of the children&apos;s oncology and hematology clinic which bears his name.
              </p>

              <div className="space-y-5 font-body text-[var(--color-charcoal-medium)] text-base leading-[1.85]">
                <p>
                  Mr. Vannie E. Cook Jr. grew up in McAllen, Texas and was a prominent businessman and rancher who owned the Coca Cola Bottling Company in McAllen. His entrepreneurial spirit and deep roots in the Rio Grande Valley made him a pillar of the community.
                </p>
                <p>
                  Mr. Cook loved the outdoor life and was devoted to game and nature conservation — values that reflected his reverence for the land and the world around him.
                </p>
                <p>
                  He was extremely active in the community and in what was once the Rio Grande Valley Radiation and Cancer Treatment Center, which eventually became the Vannie E. Cook Jr. Cancer Foundation. His leadership and philanthropy were instrumental in bringing cancer care to a region long underserved by the medical establishment.
                </p>
                <p>
                  He was married to Carolyn Vance and had four children.
                </p>
                <p>
                  Mr. Cook&apos;s daughter, Kathy Collins, lives in McAllen and serves as Chair of the Board — carrying forward her father&apos;s legacy of service and compassion.
                </p>
              </div>
            </AnimateIn>

          </div>
        </div>
      </section>

      {/* ── LEGACY CALLOUT ───────────────────────────────────────────────── */}
      <section className="bg-[var(--color-cream-dark)] py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <AnimateIn>
            <div className="text-center">
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="h-px w-10 bg-[var(--color-gold)]" />
                <span className="font-body text-[var(--color-charcoal-light)] text-xs tracking-[0.18em] uppercase">
                  A Lasting Name
                </span>
                <div className="h-px w-10 bg-[var(--color-gold)]" />
              </div>

              <h2 className="font-display text-[var(--color-charcoal)] text-[clamp(2rem,3.5vw,3rem)] font-light tracking-[-0.02em] leading-[1.1] mb-6">
                The{" "}
                <span className="text-[var(--color-purple)]">Vannie E. Cook Jr.</span>{" "}
                Children&apos;s Cancer and Hematology Clinic
              </h2>
              <p className="font-body text-[var(--color-charcoal-medium)] text-base leading-[1.85] max-w-2xl mx-auto">
                Named in his honor and opened in 2001 through a landmark partnership with Texas Children&apos;s Hospital and Baylor College of Medicine, the clinic is his enduring gift to the children of the Rio Grande Valley — a promise that no family will ever be turned away due to inability to pay.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="bg-[var(--color-cream)] py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <AnimateIn>
            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
              <div className="flex-1 text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-3 mb-5">
                  <div className="h-px w-10 bg-[var(--color-gold)]" />
                  <span className="font-body text-[var(--color-purple)] text-xs font-medium tracking-[0.14em] uppercase">
                    Honor His Legacy
                  </span>
                </div>
                <h2 className="font-display text-[var(--color-charcoal)] text-[clamp(1.8rem,3vw,2.75rem)] font-medium leading-[1.15] tracking-[-0.02em] mb-5">
                  Carry the Mission Forward
                </h2>
                <p className="font-body text-[var(--color-charcoal-medium)] text-base leading-[1.8]">
                  Mr. Cook&apos;s generosity lives on through every child treated at the clinic that bears his name. Your support ensures that legacy continues for generations to come.
                </p>
              </div>
              <div className="flex flex-col gap-3 shrink-0">
                <Link
                  href="/how-you-can-help"
                  className="px-8 py-3.5 rounded-full bg-[var(--color-gold)] text-[var(--color-charcoal)] font-body font-semibold text-sm tracking-wide text-center transition-colors duration-200 hover:bg-[var(--color-gold-dark)] hover:shadow-[0_6px_22px_rgba(245,166,35,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)] active:scale-95"
                >
                  Ways to Give
                </Link>
                <Link
                  href="/about-us/history"
                  className="px-8 py-3.5 rounded-full border-2 border-[var(--color-purple)]/30 text-[var(--color-purple)] font-body font-semibold text-sm tracking-wide text-center transition-colors duration-200 hover:border-[var(--color-purple)] hover:bg-[var(--color-purple)]/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-purple)] active:scale-95"
                >
                  Our History
                </Link>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>
    </main>
  );
}
