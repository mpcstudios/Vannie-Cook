import Image from "next/image";
import AnimateIn from "./AnimateIn";


export default function AccreditationBar() {
  return (
    <section className="bg-[var(--color-cream-dark)] py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <AnimateIn>
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left: text */}
          <div className="flex-1 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-5">
              <div className="h-px w-8 bg-[var(--color-gold)]" />
              <span className="font-body text-[var(--color-charcoal-light)] text-xs tracking-[0.16em] uppercase">
                Accredited &amp; Trusted
              </span>
            </div>
            <h3 className="font-display text-[var(--color-charcoal)] text-[clamp(1.6rem,2.5vw,2.25rem)] font-medium tracking-[-0.01em] leading-tight mb-4">
              A Top Rated Children&apos;s Cancer{" "}
              <em className="not-italic text-[var(--color-purple)]">
                Charity Organization
              </em>
            </h3>
            <p className="font-body text-[var(--color-charcoal-medium)] text-base leading-relaxed">
              Donate with confidence when you give to the Vannie E. Cook Jr.
              Cancer Foundation.
            </p>
          </div>

          {/* Right: accreditation logos */}
          <div className="flex items-center gap-10 shrink-0">
            <a
              href="https://give.org/charity-reviews/other-charitable-organizations/vannie-e-cook-jr-cancer-foundation-inc-in-mcallen-tx-0915-37000703"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity duration-200 hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)] rounded"
            >
              <Image
                src="/brand/BBB_ACSeal_V_7469_US-808x1201-9fdba04.png"
                alt="BBB Accredited Charity"
                width={90}
                height={134}
                className="h-28 w-auto object-contain"
              />
            </a>
            <a
              href="https://www.guidestar.org/profile/23-7175760"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity duration-200 hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)] rounded"
            >
              <Image
                src="/brand/gximage2.svg"
                alt="Candid Platinum Transparency"
                width={108}
                height={108}
                className="h-24 w-auto object-contain"
              />
            </a>
          </div>
        </div>
        </AnimateIn>
      </div>
    </section>
  );
}
