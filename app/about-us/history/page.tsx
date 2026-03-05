import PageHero from "../../components/PageHero";
import AnimateIn from "../../components/AnimateIn";
import Link from "next/link";

const timeline = [
  {
    year: "1972",
    title: "The Foundation Is Born",
    body: "The Rio Grande Radiation Treatment and Cancer Research Foundation was incorporated, bringing together a founding board of physicians — including H.D. Gilliam, M.D., Francisco I. Pena, M.D., and Donald D. Walker, M.D. — united by a shared mission to bring cancer care to the Rio Grande Valley.",
  },
  {
    year: "1977",
    title: "Opening the Cancer Treatment Center",
    body: "Backed by $1.5 million raised through private philanthropists and Federal Hill-Burton Funds, the Rio Grande Cancer Treatment Center opened its doors — a landmark moment for a region that had long lacked access to specialized oncology care.",
  },
  {
    year: "1978",
    title: "Expanding Care: Chemotherapy",
    body: "A dedicated chemotherapy department was added to the center, broadening the range of treatments available to Valley patients and reducing the need for families to travel out of the region for life-saving care.",
  },
  {
    year: "1981",
    title: "Independence & Continued Excellence",
    body: "The center became an independent institution while maintaining its prestigious affiliation with M.D. Anderson Hospital, ensuring Valley patients continued to benefit from world-class oncology standards and expertise.",
  },
  {
    year: "1989",
    title: "A New Name, A Lasting Legacy",
    body: "In honor of the profound contributions of Vannie E. Cook Jr., the center was relocated and renamed The Vannie E. Cook Jr. Cancer Center — a tribute to the man whose vision and generosity shaped cancer care in South Texas.",
  },
  {
    year: "1995",
    title: "A Foundation for the Future",
    body: "The Cancer Center was dissolved and its assets were transferred to The Foundation, establishing a permanent philanthropic structure dedicated to sustaining and expanding pediatric cancer care in the Rio Grande Valley for generations to come.",
  },
  {
    year: "2000",
    title: "A Landmark Partnership",
    body: "The Foundation forged a landmark collaboration with Baylor College of Medicine and Texas Children's Hospital — two of the nation's foremost institutions in pediatric oncology — laying the groundwork for a world-class children's clinic right in the Valley.",
  },
  {
    year: "2001",
    title: "The Clinic Opens Its Doors",
    body: "The Vannie E. Cook Jr. Children's Cancer and Hematology Clinic officially opened, fulfilling decades of vision and work. For the first time, children across the Rio Grande Valley could receive specialized cancer and blood disorder care close to home — and no family would ever be turned away due to inability to pay.",
    highlight: true,
  },
];

export default function HistoryPage() {
  return (
    <main>
      <PageHero
        eyebrow="About Us"
        title="Our History"
        subtitle="Over five decades of building a legacy of care, hope, and healing in the Rio Grande Valley."
      />

      {/* ── INTRO ────────────────────────────────────────────────────────── */}
      <section className="bg-[var(--color-cream)] py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <AnimateIn>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-10 bg-[var(--color-gold)]" />
              <span className="font-body text-[var(--color-charcoal-light)] text-xs tracking-[0.16em] uppercase">
                Our Story
              </span>
            </div>
            <p className="font-display text-[var(--color-charcoal)] text-[clamp(1.25rem,2.4vw,1.9rem)] font-light italic leading-[1.6] tracking-[-0.01em] mb-6">
              What began as a shared vision among a handful of physicians has grown into a foundation that has served thousands of children and families — ensuring that a cancer diagnosis never means a child goes without care.
            </p>
            <p className="font-body text-[var(--color-charcoal-medium)] text-base leading-[1.8]">
              The Vannie E. Cook Jr. Cancer Foundation supports the Children&apos;s Cancer and Hematology Clinic, established in 2001 through a landmark partnership with Texas Children&apos;s Hospital and Baylor College of Medicine. Before the clinic opened, families in the Rio Grande Valley had to travel hundreds of miles for pediatric cancer care. Today, that journey is a thing of the past.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* ── TIMELINE ─────────────────────────────────────────────────────── */}
      <section className="bg-[var(--color-cream-dark)] py-20 lg:py-32">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">

          <AnimateIn>
            <div className="text-center mb-16 lg:mb-20">
              <div className="flex items-center justify-center gap-4 mb-5">
                <div className="h-px w-10 bg-[var(--color-gold)]" />
                <span className="font-body text-[var(--color-charcoal-light)] text-xs tracking-[0.18em] uppercase">
                  1972 – 2001
                </span>
                <div className="h-px w-10 bg-[var(--color-gold)]" />
              </div>
              <h2 className="font-display text-[var(--color-charcoal)] text-[clamp(2rem,3.5vw,3.25rem)] font-light tracking-[-0.02em]">
                Milestones That Shaped a Legacy
              </h2>
            </div>
          </AnimateIn>

          {/* Timeline items */}
          <div className="relative">
            {/* Vertical line */}
            <div className="hidden lg:block absolute left-[calc(50%-1px)] top-0 bottom-0 w-px bg-[var(--color-gold)]/20" />

            <div className="space-y-12 lg:space-y-0">
              {timeline.map((item, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <AnimateIn key={item.year} delay={i * 60}>
                    <div className={`relative lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center ${i > 0 ? "lg:mt-12" : ""}`}>

                      {/* Year bubble — center on desktop */}
                      <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 z-10 items-center justify-center">
                        <div className={`w-14 h-14 rounded-full flex items-center justify-center font-body text-xs font-semibold tracking-wide border-2 ${
                          item.highlight
                            ? "bg-[var(--color-gold)] border-[var(--color-gold)] text-[var(--color-charcoal)]"
                            : "bg-[var(--color-cream-dark)] border-[var(--color-gold)]/50 text-[var(--color-purple)]"
                        }`}>
                          {item.year}
                        </div>
                      </div>

                      {/* Left column — content or spacer */}
                      <div className={isLeft ? "lg:text-right lg:pr-16" : ""}>
                        {isLeft ? (
                          <div className={`rounded-2xl p-7 ${
                            item.highlight
                              ? "bg-[var(--color-purple-deepest)] text-white shadow-[0_12px_40px_rgba(45,27,85,0.25)]"
                              : "bg-white shadow-[0_4px_20px_rgba(123,94,167,0.08)]"
                          }`}>
                            {/* Mobile year */}
                            <span className={`lg:hidden inline-block font-body text-xs font-semibold tracking-[0.12em] uppercase mb-3 px-3 py-1 rounded-full ${
                              item.highlight
                                ? "bg-[var(--color-gold)] text-[var(--color-charcoal)]"
                                : "bg-[var(--color-cream-dark)] text-[var(--color-purple)]"
                            }`}>
                              {item.year}
                            </span>
                            <h3 className={`font-display text-xl font-medium leading-snug mb-3 ${
                              item.highlight ? "text-[var(--color-gold)]" : "text-[var(--color-charcoal)]"
                            }`}>
                              {item.title}
                            </h3>
                            <p className={`font-body text-sm leading-[1.8] ${
                              item.highlight ? "text-white" : "text-[var(--color-charcoal-medium)]"
                            }`}>
                              {item.body}
                            </p>
                          </div>
                        ) : (
                          <div className="hidden lg:block" />
                        )}
                      </div>

                      {/* Right column — content or spacer */}
                      <div className={!isLeft ? "lg:pl-16" : ""}>
                        {!isLeft ? (
                          <div className={`rounded-2xl p-7 ${
                            item.highlight
                              ? "bg-[var(--color-purple-deepest)] text-white shadow-[0_12px_40px_rgba(45,27,85,0.25)]"
                              : "bg-white shadow-[0_4px_20px_rgba(123,94,167,0.08)]"
                          }`}>
                            {/* Mobile year */}
                            <span className={`lg:hidden inline-block font-body text-xs font-semibold tracking-[0.12em] uppercase mb-3 px-3 py-1 rounded-full ${
                              item.highlight
                                ? "bg-[var(--color-gold)] text-[var(--color-charcoal)]"
                                : "bg-[var(--color-cream-dark)] text-[var(--color-purple)]"
                            }`}>
                              {item.year}
                            </span>
                            <h3 className={`font-display text-xl font-medium leading-snug mb-3 ${
                              item.highlight ? "text-[var(--color-gold)]" : "text-[var(--color-charcoal)]"
                            }`}>
                              {item.title}
                            </h3>
                            <p className={`font-body text-sm leading-[1.8] ${
                              item.highlight ? "text-white" : "text-[var(--color-charcoal-medium)]"
                            }`}>
                              {item.body}
                            </p>
                          </div>
                        ) : (
                          <div className="hidden lg:block" />
                        )}
                      </div>

                    </div>
                  </AnimateIn>
                );
              })}
            </div>
          </div>
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
                    Continue the Legacy
                  </span>
                </div>
                <h2 className="font-display text-[var(--color-charcoal)] text-[clamp(1.8rem,3vw,2.75rem)] font-medium leading-[1.15] tracking-[-0.02em] mb-5">
                  The Story Continues — With Your Help
                </h2>
                <p className="font-body text-[var(--color-charcoal-medium)] text-base leading-[1.8]">
                  Over 50 years in the making, this foundation runs on the generosity of people who believe every child deserves a fighting chance — regardless of where they were born or what their family can afford.
                </p>
              </div>
              <div className="flex flex-col gap-3 shrink-0">
                <Link
                  href="/how-you-can-help"
                  className="px-8 py-3.5 rounded-full bg-[var(--color-gold)] text-[var(--color-charcoal)] font-body font-semibold text-sm tracking-wide text-center transition-all duration-200 hover:bg-[var(--color-gold-dark)] hover:shadow-[0_6px_22px_rgba(245,166,35,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)] active:scale-95"
                >
                  Ways to Give
                </Link>
                <Link
                  href="/about-us/about-vannie-e-cook-jr"
                  className="px-8 py-3.5 rounded-full border-2 border-[var(--color-purple)]/30 text-[var(--color-purple)] font-body font-semibold text-sm tracking-wide text-center transition-all duration-200 hover:border-[var(--color-purple)] hover:bg-[var(--color-purple)]/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-purple)] active:scale-95"
                >
                  About Vannie E. Cook Jr.
                </Link>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>
    </main>
  );
}
