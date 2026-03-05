export default function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="relative bg-[var(--color-purple-deepest)] pt-44 pb-16 lg:pt-52 lg:pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-purple-deepest)] via-[var(--color-purple-dark)] to-[var(--color-purple-deepest)]" />
      <div className="absolute inset-0 bg-cta-glow" />
      <div className="absolute inset-0 bg-dot-pattern" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-10">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px w-10 bg-[var(--color-gold)]" />
          <span className="font-body text-[var(--color-gold)] text-xs font-medium tracking-[0.16em] uppercase">
            {eyebrow}
          </span>
        </div>

        {/* Title */}
        <h1 className="font-display text-white text-[clamp(2.5rem,5vw,4.5rem)] font-light leading-[1.1] tracking-[-0.02em] mb-6">
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="font-body text-white/65 text-lg leading-[1.75] max-w-2xl">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
