import Image from "next/image";
import PageHero from "../../components/PageHero";
import AnimateIn from "../../components/AnimateIn";

// ── DATA ──────────────────────────────────────────────────────────────────────

const allMembers = [
  { name: "Mrs. Kathy C. Collins", title: "Board Chair", photo: "/brand/people/KathyCollins-small.jpg" },
  { name: "Mr. James C. Brown", title: "Board Vice Chair", photo: "/brand/people/James Brown.jpg" },
  { name: "Ms. Stephanie M. Wilson", title: "Secretary", photo: "/brand/people/Stephanie.jpg" },
  { name: "Dr. Juan Carlos Bernini", title: null, photo: "/brand/people/juan-carlos.jpg" },
  { name: "Dr. Rodrigo Erana", title: null, photo: "/brand/people/Rodrigo.jpg" },
  { name: "Mr. Jack Ewing", title: null, photo: "/brand/people/jack.jpg" },
  { name: "Mrs. Patty Falleck", title: null, photo: "/brand/people/Patty.jpg" },
  { name: "Mr. Juan A. Garcia Jr.", title: null, photo: "/brand/people/Juan.Garcia.jpg" },
  { name: "Dr. Jennifer Garza", title: null, photo: "/brand/people/JenniferGarza.jpg" },
  { name: "Mr. Danny Gurwitz", title: null, photo: "/brand/people/DGG-Small.jpg" },
  { name: "Mrs. Shannon S. Honrubia", title: null, photo: "/brand/people/Shannon.jpg" },
  { name: "Mr. S. Foss Jones", title: null, photo: "/brand/people/FossJones.jpg" },
  { name: "Ms. Dru LaMantia", title: null, photo: "/brand/people/Dru-LaMantia.jpg" },
  { name: "Mr. Mark Magnon", title: null, photo: "/brand/people/Mark magnon.jpg" },
  { name: "Mrs. Melissa Mikulik", title: null, photo: null },
  { name: "Dr. Edward Requenez", title: null, photo: "/brand/people/Edward.png" },
  { name: "Mrs. Melissa Martinez Smith", title: null, photo: null },
  { name: "Mrs. Jennifer Collins Stone", title: null, photo: "/brand/people/IMG_9997-768x1024.jpg" },
  { name: "Mr. Ronnie Tavarez", title: null, photo: "/brand/people/Ronnie.jpg" },
  { name: "Mrs. Bennie Thompson", title: null, photo: "/brand/people/Bennie.jpg" },
  { name: "Mrs. Alicia C. Vela", title: null, photo: "/brand/people/AliciaVela.jpg" },
  { name: "Mrs. Patricia G. Vela", title: null, photo: "/brand/people/patsy.jpg" },
  { name: "Mrs. Jennifer Yarto", title: null, photo: "/brand/people/Jennifer-Yarto-Szutz.jpg" },
];

const staff = [
  { name: "Laura Martinez Ilgun", title: "Executive Director", photo: "/brand/people/Laura-Milgun-small.jpg" },
  { name: "Nora Suarez", title: "Administrative Coordinator", photo: null },
];

// ── HELPERS ───────────────────────────────────────────────────────────────────

function getInitials(name: string) {
  const parts = name.replace(/^(Mr\.|Mrs\.|Ms\.|Dr\.)\s+/, "").split(" ");
  return parts
    .filter((p) => /^[A-Z]/.test(p))
    .slice(0, 2)
    .map((p) => p[0])
    .join("");
}

// ── COMPONENTS ────────────────────────────────────────────────────────────────

function PersonCard({ person }: { person: { name: string; title: string | null; photo: string | null } }) {
  return (
    <div className="flex flex-col items-center text-center group">
      <div className="w-40 h-40 mb-4 shrink-0">
        {person.photo ? (
          <div className="w-full h-full rounded-full overflow-hidden ring-2 ring-[var(--color-gold)]/30 shadow-[0_8px_28px_rgba(123,94,167,0.18)] group-hover:ring-[var(--color-gold)]/60 transition-all duration-300">
            <Image
              src={person.photo}
              alt={person.name}
              width={160}
              height={160}
              className="w-full h-full object-cover object-top"
            />
          </div>
        ) : (
          <div className="w-full h-full rounded-full bg-[var(--color-purple-deepest)] ring-2 ring-[var(--color-gold)]/30 flex items-center justify-center shadow-[0_8px_28px_rgba(123,94,167,0.18)]">
            <span className="font-display text-[var(--color-gold)] text-2xl font-medium">
              {getInitials(person.name)}
            </span>
          </div>
        )}
      </div>
      {person.title && (
        <p className="font-body text-[var(--color-gold)] text-xs font-semibold tracking-[0.12em] uppercase mb-1">
          {person.title}
        </p>
      )}
      <p className="font-display text-[var(--color-charcoal)] text-lg font-medium leading-snug">
        {person.name}
      </p>
    </div>
  );
}

// ── PAGE ──────────────────────────────────────────────────────────────────────

export default function BoardPage() {
  return (
    <main>
      <PageHero
        eyebrow="About Us"
        title="Board of Directors & Staff"
        subtitle="Dedicated volunteers and professionals committed to advancing pediatric cancer care in the Rio Grande Valley."
      />

      {/* ── BOARD ─────────────────────────────────────────────────────────── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <AnimateIn>
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-4 mb-5">
                <div className="h-px w-10 bg-[var(--color-gold)]" />
                <span className="font-body text-[var(--color-charcoal-light)] text-xs tracking-[0.18em] uppercase">
                  Leadership
                </span>
                <div className="h-px w-10 bg-[var(--color-gold)]" />
              </div>
              <h2 className="font-display text-[var(--color-charcoal)] text-[clamp(2rem,3vw,2.75rem)] font-light tracking-[-0.02em]">
                Board of Directors
              </h2>
            </div>
          </AnimateIn>

          <AnimateIn delay={80} threshold={0.05}>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12">
              {allMembers.map((person) => (
                <PersonCard key={person.name} person={person} />
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── STAFF ─────────────────────────────────────────────────────────── */}
      <section className="bg-[var(--color-cream-dark)] py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <AnimateIn>
            <div className="text-center mb-14">
              <div className="flex items-center justify-center gap-4 mb-5">
                <div className="h-px w-10 bg-[var(--color-gold)]" />
                <span className="font-body text-[var(--color-charcoal-light)] text-xs tracking-[0.18em] uppercase">
                  Our Team
                </span>
                <div className="h-px w-10 bg-[var(--color-gold)]" />
              </div>
              <h2 className="font-display text-[var(--color-charcoal)] text-[clamp(2rem,3vw,2.75rem)] font-light tracking-[-0.02em]">
                Staff
              </h2>
            </div>
          </AnimateIn>

          <AnimateIn delay={80}>
            <div className="flex flex-wrap justify-center gap-16">
              {staff.map((person) => (
                <PersonCard key={person.name} person={person} />
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>
    </main>
  );
}
