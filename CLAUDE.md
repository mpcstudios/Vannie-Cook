# CLAUDE.md — Vannie E. Cook Jr. Cancer Foundation Website

## Project Overview
A Next.js rebuild of the Vannie E. Cook Jr. Cancer Foundation website — a non-profit supporting pediatric cancer care in the Rio Grande Valley of South Texas.

**Stack:** Next.js 14+ (App Router) · TypeScript · Tailwind CSS (no component library)

---

## Before Writing Any Code

Take time to think about the design direction before touching any code. Consider:

- **Purpose:** This is a non-profit serving families affected by childhood cancer. The design should feel trustworthy, warm, and emotionally resonant — not corporate or clinical.
- **Tone:** Commit to a bold, intentional aesthetic direction. Some options to consider: refined/editorial, warm/humanistic, modern non-profit, bold and hopeful. Pick one and execute it with precision.
- **Differentiation:** What will make this site memorable and feel genuinely designed — not like a generic charity template?

**CRITICAL:** Choose a clear conceptual direction and execute it fully. The worst outcome is something generic. Be intentional.

---

## Design Guidelines

### Typography
- Choose distinctive, characterful fonts — not Arial, Inter, Roboto, or system fonts.
- Pair a display/serif font for headings with a refined sans-serif for body text.
- Large headings: tight tracking (`-0.02em` to `-0.03em`)
- Body text: generous line-height (`1.7`)

### Color & Theme
- Use CSS variables for all brand colors.
- **Primary Purple:** `#7B5EA7`
- **Gold/Amber:** `#F5A623`
- **Dark Charcoal:** `#333333`
- **White:** `#FFFFFF`
- Never use default Tailwind blue or indigo. All colors must derive from the palette above.
- Dominant colors with sharp accents outperform timid, evenly-distributed palettes.

### Motion & Interaction
- Use animations for page load reveals, hover states, and micro-interactions.
- Staggered reveals on page load create delight.
- Only animate `transform` and `opacity` — never `transition-all`.
- Every interactive element needs hover, focus-visible, and active states. No exceptions.

### Spatial Composition
- Avoid predictable layouts. Consider asymmetry, overlap, diagonal flow, and grid-breaking elements.
- Use generous negative space OR controlled density — commit to one.

### Backgrounds & Depth
- Create atmosphere and depth — don't default to flat solid colors.
- Use gradient meshes, noise textures, layered transparencies, or dramatic shadows where appropriate.
- Surfaces should have a layering system (base → elevated → floating), not all sit at the same z-plane.
- Shadows: use layered, color-tinted shadows with low opacity — not flat `shadow-md`.

### What to Avoid
- Generic AI aesthetics: overused fonts, purple gradients on white, predictable layouts, cookie-cutter components.
- Default Tailwind blue or indigo as any color.
- Using the same font for headings and body.
- Placeholder images where real brand assets exist.

---

## Brand Assets
- Check `public/brand/` before designing anything.
- Logo file: `public/brand/logo.png` — always use the real logo, never a placeholder.

---

## Local Dev Server
- Start: `npm run dev` — serves at `http://localhost:3000`
- Never screenshot a `file:///` URL — always use localhost.
- Do not start a second instance if already running.

---

## Screenshot Workflow
- Always screenshot from `http://localhost:3000`
- Minimum **2 comparison rounds** when matching a reference. Stop only when no visible differences remain or the user says so.
- Be specific when comparing: call out exact pixel/color mismatches.

---

## Pages & Routes

```
app/
├── page.tsx                                  # Home
├── about-us/
│   ├── history/page.tsx                      # History
│   ├── about-vannie-e-cook-jr/page.tsx       # About Vannie E. Cook Jr.
│   ├── board-of-directors/page.tsx           # Board of Directors & Staff
│   └── careers/page.tsx                      # Careers
├── how-you-can-help/
│   ├── page.tsx                              # Ways to Help
│   └── saving-our-children-society/page.tsx  # Saving Our Children Society
├── media-gallery/page.tsx                    # Media Gallery
└── contact/page.tsx                          # Contact Us
```

---

## Hard Rules
- Do not use `transition-all`
- Do not use default Tailwind blue or indigo
- Use App Router — not Pages Router
- All components must be TypeScript with proper types
- Mobile-first responsive on all pages
- Every interactive element needs hover, focus-visible, and active states
