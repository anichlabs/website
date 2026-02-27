# AnichLabs OÜ - Official Website

The official website of **AnichLabs OÜ**, a healthcare AI consulting company based in Tallinn, Estonia. Built with [Astro](https://astro.build), [Tailwind CSS](https://tailwindcss.com), and deployed via [Vercel](https://vercel.com).

---

## About

AnichLabs OÜ helps healthcare professionals, startups, and small teams leverage AI, data analytics, and smart apps to improve outcomes and streamline operations. Our approach is grounded in a **compliance-first philosophy** - EU AI Act, GDPR, and medical device standards are embedded from day one.

---

## Tech Stack

- **Framework:** [Astro 4](https://astro.build)
- **Styling:** [Tailwind CSS](https://tailwindcss.com)
- **Icons:** [astro-icon](https://github.com/natemoo-re/astro-icon) + [Unicons](https://iconscout.com/unicons)
- **Contact Form:** [Web3Forms](https://web3forms.com)
- **Booking:** [Calendly](https://calendly.com/chris-anichlabs/30min)
- **Deployment:** [Vercel](https://vercel.com)

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

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

### Preview production build

```bash
npm run preview
```

---

## Project Structure

```
src/
├── assets/          # Images and static assets (optimised by Astro)
├── components/      # Reusable UI components
│   ├── navbar/      # Navigation bar
│   ├── ui/          # Buttons, links, etc.
│   ├── hero.astro
│   ├── features.astro
│   ├── footer.astro
│   ├── cta.astro
│   └── contactform.astro
├── content/
│   └── blog/        # Blog posts in Markdown
├── layouts/
│   └── Layout.astro # Base HTML layout
└── pages/
    ├── index.astro  # Homepage
    ├── about.astro
    ├── contact.astro
    └── blog/
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
| `/about` | Founder bio and core expertise |
| `/contact` | Contact form + Calendly booking |
| `/blog` | Blog posts |

---

## Contact

- **Email:** contact@anichlabs.com
- **LinkedIn:** [linkedin.com/company/anichlabs](https://linkedin.com/company/anichlabs)
- **Book a call:** [calendly.com/chris-anichlabs/30min](https://calendly.com/chris-anichlabs/30min)
- **Location:** Tallinn, Estonia 🇪🇪

---

## License

This codebase is proprietary. The underlying Astro template ([Astroship](https://github.com/surjithctly/astroship)) is MIT licensed. All AnichLabs OÜ branding, content, and customisations are © 2025 AnichLabs OÜ. All rights reserved.
