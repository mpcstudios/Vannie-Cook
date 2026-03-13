import Link from "next/link";
import Image from "next/image";

const footerLinks: Record<string, { label: string; href: string; external?: boolean }[]> = {
  "About Us": [
    { label: "History", href: "/about-us/history" },
    {
      label: "About Vannie E. Cook Jr.",
      href: "/about-us/about-vannie-e-cook-jr",
    },
    {
      label: "Board of Directors & Staff",
      href: "/about-us/board-of-directors",
    },
    { label: "About the Clinic", href: "https://www.texaschildrens.org/departments/vannie-cook-childrens-clinic", external: true },
  ],
  "How You Can Help": [
    { label: "Ways to Help", href: "/how-you-can-help" },
    {
      label: "Saving Our Children Society",
      href: "/how-you-can-help/saving-our-children-society",
    },
  ],
  Resources: [
    { label: "Contact Us", href: "/contact" },
    { label: "For IRA Owners 70½ or Older", href: "/brand/IRA.QCD_.FLYER_.2018-1-1.pdf", external: true },
  ],
};

const usefulLinks = [
  { label: "American Cancer Society", href: "https://www.cancer.org/" },
  { label: "National Childhood Cancer Foundation", href: "https://curesearch.org/" },
  { label: "Children's Cancer Association", href: "https://www.joyrx.org/" },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--color-charcoal)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-14 pb-10">
        {/* Newsletter signup */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-20 pb-12 border-b border-white/10 mb-12">
          <div className="flex-1 text-center lg:text-left">
            <h3 className="font-display text-white text-[clamp(1.4rem,2vw,1.9rem)] font-medium tracking-[-0.01em] leading-tight">
              Stay Connected{" "}
              <em className="not-italic text-[var(--color-gold)]">
                with Our Mission
              </em>
            </h3>
            <p className="font-body text-white text-sm leading-relaxed mt-2">
              Receive updates on how we&apos;re changing lives in the Rio Grande Valley.
            </p>
          </div>
          <form className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto lg:min-w-[400px]">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-5 py-3.5 rounded-full border-2 border-white/15 bg-white/8 font-body text-sm text-white placeholder:text-white/35 focus:outline-none focus:border-[var(--color-gold)]/60 transition-colors duration-200"
              suppressHydrationWarning
            />
            <button
              type="submit"
              className="px-7 py-3.5 rounded-full bg-[var(--color-gold)] text-[var(--color-charcoal)] font-body font-semibold text-sm tracking-wide transition-all duration-200 hover:bg-[var(--color-gold-dark)] hover:shadow-[0_4px_18px_rgba(245,166,35,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)] active:scale-95"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-10 border-b border-white/10">
          {/* Foundation info */}
          <div className="lg:col-span-1">
            <Image
              src="/brand/logo.png"
              alt="Vannie E. Cook Jr. Cancer Foundation"
              width={240}
              height={80}
              className="h-20 w-auto object-contain mb-5"
            />
            <address className="not-italic font-body text-white text-sm space-y-0.5">
              <p>101 West Expressway 83</p>
              <p>McAllen, Texas 78503</p>
              <p className="pt-1.5">
                <a
                  href="tel:+19566875146"
                  className="hover:text-[var(--color-gold)] transition-colors duration-200 focus-visible:outline-none focus-visible:text-[var(--color-gold)]"
                >
                  (956) 687-5146
                </a>
              </p>
            </address>
          </div>

          {/* Nav columns */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h3 className="font-display text-white text-lg font-medium mb-4 tracking-wide">
                {section}
              </h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="font-body text-white text-sm hover:text-[var(--color-gold)] transition-colors duration-200 focus-visible:outline-none focus-visible:text-[var(--color-gold)]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Useful links + accreditation logos */}
        <div className="pt-8 pb-6 border-b border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div>
            <p className="font-body text-white text-xs uppercase tracking-[0.14em] mb-3">
              Useful Links
            </p>
            <div className="flex flex-wrap gap-x-8 gap-y-2">
              {usefulLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-white text-sm hover:text-[var(--color-gold)] transition-colors duration-200 focus-visible:outline-none focus-visible:text-[var(--color-gold)]"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-6 shrink-0">
            <a
              href="https://give.org/charity-reviews/other-charitable-organizations/vannie-e-cook-jr-cancer-foundation-inc-in-mcallen-tx-0915-37000703"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity duration-200 hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)] rounded"
            >
              <Image
                src="/brand/BBB_ACSeal_V_7469_US-808x1201-9fdba04.png"
                alt="BBB Accredited Charity"
                width={40}
                height={60}
                className="h-14 w-auto object-contain opacity-70"
              />
            </a>
            <a
              href="https://www.guidestar.org/profile/23-7175760"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity duration-200 hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)] rounded"
            >
              <Image
                src="/brand/gximage2.svg"
                alt="Candid Platinum Transparency"
                width={48}
                height={48}
                className="h-12 w-auto object-contain opacity-70"
              />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="font-body text-white text-xs">
            © {new Date().getFullYear()} Vannie E. Cook Jr. Cancer Foundation.
            All rights reserved.
          </p>
          <div className="flex flex-col sm:items-end gap-1">
            <p className="font-body text-white text-xs">
              A non-profit 501(c)(3) organization
            </p>
            <p className="font-body text-white text-xs">
              Non-Profit Website Design By{" "}
              <a
                href="https://www.mpcstudios.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--color-gold)] transition-colors duration-200 focus-visible:outline-none focus-visible:text-[var(--color-gold)]"
              >
                MPC Studios, Inc.
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
