# AnichLabs OÜ - Official Website

The official website of **AnichLabs OÜ**, a European software and AI company building intelligent systems where privacy, compliance, and reliability matter. Built with [Astro](https://astro.build), [Tailwind CSS](https://tailwindcss.com), and deployed via [Vercel](https://vercel.com).

---

## About

AnichLabs OÜ builds production AI and software systems for businesses across Europe and Latin America. Practice areas: AI Systems, EU Compliance, Data and Analytics, and Websites and Web Platforms. Founded by a medical doctor and AI engineer, registered in Estonia.

---

## Tech Stack

- **Framework:** [Astro 5](https://astro.build)
- **Styling:** [Tailwind CSS](https://tailwindcss.com)
- **Icons:** [astro-icon](https://github.com/natemoo-re/astro-icon) + [Unicons](https://iconscout.com/unicons)
- **3D Graphics:** [Three.js](https://threejs.org) for the homepage globe
- **Contact Form:** [Web3Forms](https://web3forms.com)
- **Booking:** [Calendly](https://calendly.com/chris-anichlabs/30min)
- **Deployment:** [Vercel](https://vercel.com)

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm or pnpm

### Installation

```bash
git clone https://github.com/anichlabs/website.git
cd website
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) in your browser.

### Build

```bash
npm run build
```

The build script runs `scripts/precompute-globe.mjs` first to generate `public/lib/globe-dots.json`, then runs the Astro build.

### Preview production build

```bash
npm run preview
```

---

## Project Structure

```
src/
├── assets/                  # Team photos, optimised by Astro
├── components/              # Reusable UI components
│   ├── navbar/              # Navigation bar with services dropdown
│   ├── ui/                  # Buttons, links
│   ├── hero.astro           # Homepage hero with Three.js globe
│   ├── features.astro       # Four practice area cards
│   ├── footer.astro
│   ├── cta.astro
│   ├── sectionhead.astro
│   └── contactform.astro
├── content/
│   └── team/                # Team member bios in Markdown
├── layouts/
│   └── Layout.astro         # Base HTML layout, SEO meta, OG tags
└── pages/
    ├── index.astro          # Homepage
    ├── about.astro          # Team and core expertise
    ├── contact.astro        # Contact form + Calendly
    ├── 404.astro
    └── services/
        ├── ai-systems.astro
        ├── eu-compliance.astro
        ├── data-analytics.astro
        └── websites-and-apps.astro
```

---

## Environment Variables

Create a `.env` file in the root with:

```env
# Web3Forms access key (get yours free at https://web3forms.com)
WEB3FORMS_ACCESS_KEY=your_key_here
```

Then update `src/components/contactform.astro` with your key.

---

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage with hero, services, and CTA |
| `/about` | Team bios and core expertise |
| `/contact` | Contact form + Calendly booking |
| `/services/ai-systems` | AI agents, automation, and clinical AI |
| `/services/eu-compliance` | EU AI Act, MDR, IVDR, and GDPR advisory |
| `/services/data-analytics` | Statistical modelling and dashboards |
| `/services/websites-and-apps` | Websites, web platforms, and custom apps |

---

## Contact

- **Email:** contact@anichlabs.com
- **LinkedIn:** [linkedin.com/company/anichlabs](https://linkedin.com/company/anichlabs)
- **GitHub:** [github.com/anichlabs](https://github.com/anichlabs)
- **Book a call:** [calendly.com/chris-anichlabs/30min](https://calendly.com/chris-anichlabs/30min)
- **Registered:** Estonia, EU
- **Operating from:** Dublin, Ireland

---

## License

This codebase is proprietary. The underlying Astro template ([Astroship](https://github.com/surjithctly/astroship)) is MIT licensed. All AnichLabs OÜ branding, content, and customisations are © 2026 AnichLabs OÜ. All rights reserved.
