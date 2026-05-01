# GlossGo — Beauty, On Demand

[![Deploy to GitHub Pages](https://github.com/yourusername/glossgo/actions/workflows/deploy.yml/badge.svg)](https://github.com/yourusername/glossgo/actions/workflows/deploy.yml)

A luxury, mobile-first beauty marketplace platform. Discover, book, and pay for trusted beauty professionals — all in one place.

**Live Demo**: [https://yourusername.github.io/glossgo](https://yourusername.github.io/glossgo)

---

## Tech Stack

| Technology | Purpose |
|-----------|---------|
| Next.js 15 | React framework with App Router |
| TypeScript | Type-safe development |
| Tailwind CSS | Utility-first styling |
| Framer Motion | Smooth animations |
| Lucide React | Icon library |

---

## Pages

| Page | Route | Description |
|------|-------|-------------|
| Landing | `/` | Hero, categories, providers, testimonials, CTA |
| Search | `/search` | Filterable provider listings with grid/list view |
| Provider Profile | `/provider/[id]` | Portfolio, services, reviews, booking panel |
| Booking Flow | `/book` | 3-step checkout: details → payment → confirm |
| Authentication | `/auth` | Login / signup with client/provider toggle |

---

## Quick Start

### Prerequisites
- Node.js 18+ and npm

### Local Development

```bash
# Clone the repository
git clone https://github.com/yourusername/glossgo.git
cd glossgo

# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000
```

### Build for Production

```bash
npm run build
```

This generates a static export in the `dist/` folder.

---

## Deploy to GitHub Pages

This project includes a **GitHub Actions workflow** that automatically deploys to GitHub Pages on every push to `main`.

### Setup Steps

1. **Push this repo to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/glossgo.git
   git push -u origin main
   ```

2. **Enable GitHub Pages:**
   - Go to **Settings → Pages** in your repo
   - Under **Build and deployment**, select **GitHub Actions**
   - The workflow `.github/workflows/deploy.yml` will handle the rest

3. **Update the `basePath` (if needed):**
   If your repo is not at the root of your GitHub Pages domain, update `next.config.js`:
   ```js
   const nextConfig = {
     output: 'export',
     distDir: 'dist',
     basePath: '/glossgo',  // <-- add this for project pages
     images: { unoptimized: true },
   };
   ```

4. **Your site will be live at:**
   `https://YOUR_USERNAME.github.io/glossgo`

---

## Design System

### Colors
- **Black** `#0A0A0A` — Primary text, dark sections
- **Rose Gold** `#D4A5A5` — Accent, CTAs, highlights
- **Champagne** `#E8D5B7` — Secondary accent
- **White** `#FFFFFF` — Backgrounds

### Typography
- **Font**: Inter (Google Fonts)
- **Headings**: Bold, tight tracking (`tracking-tight`)
- **Body**: Relaxed line-height, 60-70% opacity for secondary text

### Key Components
- `btn-primary` — Black pill button with hover shadow
- `btn-rose` — Rose gold pill button
- `card-luxury` — White card with subtle border, hover lift effect
- `input-luxury` — Clean input with rose focus ring
- `glass-card` — Frosted glass backdrop blur

---

## Project Structure

```
glossgo/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions CI/CD
├── app/
│   ├── page.tsx                # Landing page
│   ├── layout.tsx              # Root layout + metadata
│   ├── globals.css             # Design tokens + utilities
│   ├── search/
│   │   └── page.tsx            # Search results
│   ├── provider/
│   │   └── [id]/
│   │       └── page.tsx        # Provider profile
│   ├── book/
│   │   └── page.tsx            # Booking flow
│   └── auth/
│       └── page.tsx            # Login / signup
├── components/
│   ├── Navbar.tsx              # Sticky navigation
│   ├── ProviderCard.tsx        # Reusable provider card
│   └── Footer.tsx              # Site footer
├── lib/
│   ├── utils.ts                # cn() utility
│   └── data.ts                 # Mock data & content
├── tailwind.config.ts          # Custom theme
├── next.config.js              # Next.js config (static export)
├── package.json
├── tsconfig.json
├── .gitignore
├── LICENSE                     # MIT License
├── CONTRIBUTING.md             # Contribution guide
└── README.md                   # This file
```

---

## Animations

All animations use **Framer Motion**:

| Animation | Trigger |
|-----------|---------|
| Fade-in on scroll | `whileInView` |
| Staggered card reveals | `delay: index * 0.1` |
| Hero parallax | `useScroll` + `useTransform` |
| Floating orbs | `animate` infinite loop |
| Tab transitions | `AnimatePresence` slide |
| Button hover | `hover:scale-95` + shadow |
| Image zoom | `group-hover:scale-110` |

---

## Browser Support

- Chrome / Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile Safari / Chrome

---

## License

MIT — see [LICENSE](./LICENSE)

---

Built with ♥ by the GlossGo team.
