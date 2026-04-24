# Accredian Enterprise — Partial Clone

A fully responsive Next.js clone of [enterprise.accredian.com](https://enterprise.accredian.com/), built as part of the Accredian Full Stack Developer Intern assignment.

---

## 🚀 Live Demo

> Deploy to Vercel (instructions below) and paste your URL here.

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS |
| Language | JavaScript (JSX) |
| Fonts | Sora (display) + Inter (body) via next/font |
| API | Next.js API Routes (App Router) |
| Deployment | Vercel |

---

## 📦 Setup Instructions

### Prerequisites
- Node.js 18+
- npm or yarn

### Local Development

```bash
# 1. Clone the repository
git clone https://github.com/YOUR_USERNAME/accredian-enterprise.git
cd accredian-enterprise

# 2. Install dependencies
npm install

# 3. Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## 🌐 Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repo to Vercel at [vercel.com/new](https://vercel.com/new).

---

## 📁 Project Structure

```
accredian-enterprise/
├── app/
│   ├── api/
│   │   ├── leads/route.js      # Lead capture API endpoint
│   │   └── programs/route.js   # Programs data API (mock)
│   ├── globals.css             # Tailwind + custom styles
│   ├── layout.jsx              # Root layout with fonts & metadata
│   └── page.jsx                # Main page (composes all sections)
├── components/
│   ├── Navbar.jsx              # Sticky nav with mobile menu
│   ├── Hero.jsx                # Full-screen hero with floating card
│   ├── TrustBar.jsx            # University logo bar
│   ├── Features.jsx            # 6-feature platform grid
│   ├── Programs.jsx            # Filterable program cards (API-driven)
│   ├── Stats.jsx               # Animated counter statistics
│   ├── HowItWorks.jsx          # 4-step process section
│   ├── Testimonials.jsx        # Interactive testimonial selector
│   ├── Partners.jsx            # Academic partner institutions
│   ├── LeadForm.jsx            # Lead capture form with API
│   └── Footer.jsx              # Multi-column footer
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

---

## 🎯 Approach Taken

### 1. Reference Analysis
Since I couldn't directly access the live site, I researched Accredian Enterprise's content through web searches to understand:
- Key value propositions (IIT/IIM partnerships, ROI, live mentorship)
- Section structure (hero, features, programs, stats, testimonials, form)
- Target audience (L&D heads, CHROs, enterprise decision-makers)

### 2. Component Architecture
Each section is a **self-contained functional component** with:
- Local state management with React hooks
- Intersection Observer for scroll-triggered animations
- No prop drilling — each section is independently composable

### 3. API Integration
- `/api/programs` — Mock database of 6 programs with filtering by category
- `/api/leads` — Full CRUD-ready endpoint with validation (in-memory store, ready for DB swap)
- Programs section fetches dynamically on category change

### 4. Design System
- **Colors**: Brand blue (#2563eb) as primary, amber accent
- **Typography**: Sora for display headings, Inter for body text
- **Motion**: CSS-only scroll reveals via IntersectionObserver + Tailwind keyframes
- **Responsive**: Mobile-first, tested at 375px, 768px, 1280px breakpoints

---

## 🤖 AI Usage Explanation

### Where Claude (AI) Helped

| Area | AI Contribution |
|------|----------------|
| **Content** | Researched and structured all copy (stats, testimonials, feature descriptions) based on the Accredian Enterprise brand |
| **Component scaffolding** | Generated base JSX structure for all 11 components |
| **Tailwind classes** | Suggested responsive grid layouts, hover states, and animation utilities |
| **API routes** | Scaffolded Next.js App Router API patterns with validation logic |
| **CSS animations** | Keyframe definitions for scroll reveals and counter animations |

### What I Modified / Would Improve Manually
- **Color-tuning**: The exact Accredian brand blue and gradient stops would be matched to the real site
- **Image assets**: Replace initials-based avatars with real institution logos and team photos
- **Form validation UX**: Add real-time field validation (not just on submit)
- **Mobile testing**: Test on actual devices and fix any edge cases
- **Accessibility**: Add proper ARIA labels, skip links, and keyboard nav testing
- **Performance**: Add `next/image` with blur placeholders for any real images

---

## ⚡ Improvements with More Time

1. **Database integration** — Swap in-memory lead store for Supabase or MongoDB
2. **Email notifications** — Send confirmation emails via Resend or Nodemailer on lead capture
3. **Animation polish** — Add staggered card reveals with Framer Motion
4. **SEO optimization** — Add structured data (JSON-LD), og:image, and sitemap
5. **Pixel-perfect design** — Match exact Accredian color palette, spacing, and typography
6. **Error boundaries** — Add React error boundaries for robust fault tolerance
7. **Testing** — Jest + React Testing Library unit tests for form validation and API routes
8. **CMS integration** — Connect programs data to a headless CMS for easy content management
9. **A/B testing** — Test different CTA copy on the hero section
10. **Analytics** — Integrate Posthog or Vercel Analytics for conversion tracking

---

## 📝 Notes

- The lead data is stored in-memory (resets on server restart). For production, connect a real database.
- Program data is served from a mock API endpoint — easily replaceable with a real DB query.
- All animations are CSS-based (no heavy JS animation libraries) for performance.
