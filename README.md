# LoBot Homepage

The official landing website for **LoBot LLC** — an AI-native startup building logistics and business solutions that help organizations of every size make future-ready strategic decisions.

<img width="2048" height="1152" alt="lobotintro" src="https://github.com/user-attachments/assets/562df521-125c-4a42-96c2-513a49e4c1be" />

## 🏢 About LoBot LLC

LoBot LLC is a fast-moving, AI-native company founded in October 2026. Our mission is simple:

- **Empower businesses** of every size with robust logistics and productivity solutions
- **Accelerate innovation** with AI built on open-source foundations
- **Keep open source at our core** — driving transparency, collaboration, and community-driven development
- **Design architectures that scale** from startups to large enterprises

Our flagship product is **LoBot TecnoIndicator** — an open-source web application that delivers real-time, AI-powered 10-year forecasts for global oil, electricity, and water prices with scenario analysis, dynamic factor insights, and actionable recommendations.

Visit our homepage **HERE**: https://lobotllc.vercel.app/

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** (v22+ recommended) with **npm**. Next.js is installed by `npm ci`.
- **PostgreSQL** database (local or managed like Neon, Supabase, etc.)

### Installation

```bash
# Clone the repository
git clone https://github.com/LoBot-LLC/homepage.git
cd homepage

# Install locked dependencies (reproducible builds)
npm ci
```

### Environment Variables

Create a `.env.local` file in the project root with the following variables:

| Variable | Required | Description |
|----------|----------|-------------|
| `DATABASE_URL` | **Yes** | PostgreSQL connection string (e.g., `postgresql://postgres:postgres@localhost:5432/app_db`) |

> **Note**: The database is required at runtime for persisted blog posts and the health endpoint. If unreachable, the blog gracefully falls back to seed posts. During CI/build, a placeholder URL is used because Next.js imports the database module during compilation but does not connect to it (all DB routes are `dynamic = "force-dynamic"`).

### Database Setup

The app uses Drizzle ORM with PostgreSQL. The database schema is managed via Drizzle Kit (`drizzle.config.json`). The blog tables (e.g., `blog_posts`) are created automatically on first use via the idempotent `ensureReady()` logic in `src/lib/blog.ts` — no manual migration step is required for basic local setup.

A local PostgreSQL instance is recommended for development; alternatively, use any managed PostgreSQL provider (Neon, Supabase, AWS RDS, etc.).

### Development

```bash
# Start development server with Turbopack
npm run dev
```

Visit `http://localhost:3000` to see the site.

### Production Build

```bash
# Type-check, lint, and build for production
npm run typecheck
npm run lint
npm run build

# Start production server
npm run start
```

---

## 📡 API Endpoints

All API routes are dynamic (`force-dynamic`). The health check needs a working database connection; the blog endpoints fall back to seed posts if PostgreSQL is unavailable.

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/health` | `GET` | Health check — returns `{ ok: true }` if DB is reachable, `{ ok: false }` with 500 otherwise |
| `/api/blog` | `GET` | List all blog posts (newest first) |
| `/api/blog/[slug]` | `GET` | Get a single blog post by slug |

### Example Response

**GET /api/blog**
```json
{
  "posts": [
    {
      "slug": "introducing-lobot-llc",
      "author": "LoBot LLC",
      "coverEmoji": "🚀",
      "publishedAt": "2026-10-28",
      "translations": {
        "en": { "title": "...", "excerpt": "...", "body": ["..."] },
        "es": { ... },
        "vi": { ... }
      }
    }
  ]
}
```

**GET /api/health**
```json
{ "ok": true }
```

---

## 📝 Blog

The blog is powered by a seeded editorial data pipeline (`src/lib/blog.ts`). Posts live in PostgreSQL (table `blog_posts`, auto-created on first use) and are kept in sync from the `SEED_POSTS` array — no manual migrations for editorial changes.

**Seeded articles** (newest first):

| Published | Slug | Topic |
|-----------|-----------------------|-------|
| 2026-11-13 | `how-cathay-cargo-terminal-powers-hkia-daily-logistics` | How Cathay Cargo Terminal powers the daily logistics of HKIA, the world’s busiest cargo airport — import/export flows, exception handling, live-animal care, and the HKIA Cargo Data Platform |
| 2026-11-07 | `how-operation-epic-fury-inspired-lobot-tecnoindicator` | How the 2026 Middle East conflict inspired LoBot TecnoIndicator |
| 2026-10-28 | `introducing-lobot-llc` | Company introduction |

**Article features** (all rendered by `src/components/pages/BlogContent.tsx`):

- **Cover image** — high-resolution image displayed at the top of the article (e.g. `cathay cargo terminal.jpg` for the HKIA logistics article), with a `coverEmoji` fallback.
- **Inline images** — body paragraphs can embed an image via the `__IMAGE__:/images/blog/<name>|<alt>|<caption>` marker.
- **IEEE-style references** — numbered citations such as `[1]`, `[2]` inside paragraphs are clickable and jump to the matching entry in the **References** section at the end of the article, where every reference links out to its source URL.
- **Localized references** — the reference labels follow IEEE conventions in each language (`[Online]. Available:` for English, `[En línea]. Disponible:` for Spanish, `[Trực tuyến]. Có tại:` for Vietnamese).
- **Metadata** — every article shows the author (`By LoBot LLC Team`), the publication date, and an automatic estimated reading time in all supported languages.

Every seeded post is fully translated into the **3 supported languages** (`en`, `es`, `vi`) — titles, excerpts, bodies, image alt/captions, and references.

---

## 🛠 Tech Stack

Package versions below are the ones installed by `npm ci` from [package-lock.json](package-lock.json).

| Category | Technology |
|----------|------------|
| Runtime & package manager | Node.js (22+ recommended), npm (lockfile v3) |
| Framework & UI | Next.js 16.4.5 (App Router, Turbopack), React and React DOM 19.2.6 |
| Language | TypeScript 5.9.3 (strict mode) |
| Type definitions | `@types/node` 22.19.15, `@types/pg` 8.18.0, `@types/react` 19.2.14, `@types/react-dom` 19.2.3 |
| Styling | Tailwind CSS and `@tailwindcss/postcss` 4.1.17, PostCSS 8.5.8 |
| Database | PostgreSQL via `pg` 8.20.0 and Drizzle ORM 0.45.2; Drizzle Kit 0.31.10 for schema tooling |
| Environment | Next.js `.env.local` support; `dotenv` 17.3.1 is also installed |
| Localization & themes | React Context with typed `en`, `es` and `vi` dictionaries; language and theme preferences persist in `localStorage` |
| Community statistics | GitHub REST API (contributors, commits, PRs, forks and most active developer) with hourly revalidation and a fallback snapshot |
| Hosting & analytics | Vercel, `@vercel/analytics` 2.0.1, `@vercel/speed-insights` 2.1.0 |
| Linting | ESLint 9.39.5, `eslint-config-next` 16.2.6 (Core Web Vitals) |
| CI | GitHub Actions on `ubuntu-latest` with Node.js `latest` and npm |

---

## 📁 Project Structure

Tracked files are shown below; installed dependencies, build output and local environment files are omitted.

```text
.
├── .github/
│   ├── ISSUE_TEMPLATE/                       # GitHub issue templates
│   │   ├── bug_report.md
│   │   └── feature_request.md
│   └── workflows/
│       ├── nextjs.yml                        # Type-check, lint and build
│       └── nodejs.yml                        # Node.js build check
├── images/                                   # Repository-level brand and marketing assets
│   ├── lobotfullbanner.png
│   ├── loboticon.png
│   ├── lobotlogoonly.svg
│   └── lobotmainbanner.png
├── public/
│   ├── images/blog/                          # Article covers and inline images
│   │   ├── cargo warning.jpg
│   │   ├── cathay cargo terminal.jpg
│   │   ├── HKIA air cargo data platform.jpg
│   │   ├── hong kong air cargo handling.png
│   │   ├── hong kong international airport.jpg
│   │   ├── logistics.png
│   │   ├── oil price rise.png
│   │   ├── oil rigs.png
│   │   ├── operation epic fury.png
│   │   └── tecnoindicator promotion.png
│   ├── llms.txt                              # Site information for AI agents
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── app/                                  # App Router pages and route handlers
│   │   ├── about/page.tsx                    # About page, including /about#milestones
│   │   ├── api/
│   │   │   ├── blog/
│   │   │   │   ├── [slug]/route.ts           # Get a single post
│   │   │   │   └── route.ts                  # List posts
│   │   │   └── health/route.ts               # PostgreSQL health check
│   │   ├── blog/
│   │   │   ├── [slug]/page.tsx
│   │   │   └── page.tsx
│   │   ├── careers/page.tsx
│   │   ├── policy/page.tsx
│   │   ├── products/
│   │   │   ├── tecnoindicator/page.tsx
│   │   │   └── page.tsx                      # Redirects to /products/tecnoindicator
│   │   ├── globals.css
│   │   ├── layout.tsx                        # Root layout, providers and analytics
│   │   ├── not-found.tsx
│   │   └── page.tsx                          # Homepage
│   ├── components/
│   │   ├── pages/
│   │   │   ├── AboutContent.tsx              # Includes the milestone timeline and community stats
│   │   │   ├── BlogContent.tsx               # Article list, images and citation links
│   │   │   ├── CareersContent.tsx            # Roles, departments and hiring steps
│   │   │   ├── HomeContent.tsx
│   │   │   ├── PolicyContent.tsx             # Employee rules and applicant rounds
│   │   │   └── ProductContent.tsx            # TecnoIndicator product page
│   │   ├── CopyEmail.tsx
│   │   ├── Footer.tsx
│   │   ├── Icons.tsx                         # SVG icons and brand marks
│   │   ├── Navbar.tsx                        # Navigation, language and theme selectors
│   │   ├── Providers.tsx                     # Language and theme context
│   │   └── ui.tsx                            # Shared sections, headers, NumberBadge and PageHero
│   ├── db/
│   │   ├── index.ts                          # Lazy PostgreSQL pool and Drizzle client
│   │   └── schema.ts                         # Blog table and translation types
│   ├── i18n/                                 # UI dictionaries, including about.milestones.items
│   │   ├── en.ts
│   │   ├── es.ts
│   │   └── vi.ts
│   └── lib/
│       ├── blog.ts                           # Translated seed posts and database access
│       ├── github.ts                         # GitHub community statistics
│       └── site.ts                           # Site URLs and contact details
├── .gitignore
├── AGENT_PROMPT.md                           # Sample task prompt
├── drizzle.config.json                       # Drizzle Kit configuration
├── eslint.config.mjs                         # ESLint flat configuration
├── LICENSE
├── next.config.ts                            # Next.js configuration
├── package-lock.json                         # Locked dependency versions
├── package.json                              # Dependencies and npm scripts
├── postcss.config.mjs                        # Tailwind PostCSS plugin
├── README.md
└── tsconfig.json                             # TypeScript configuration
```

`NumberBadge` is shared by the homepage, careers hiring steps, and policy applicant rounds. It displays numbers with a leading zero and keeps its 40px square size in flex layouts instead of shrinking beside text.

---

## 🧪 Quality Checks

```bash
# Run all checks (CI pipeline)
npm run typecheck   # Generates route types + tsc --noEmit
npm run lint        # ESLint
npm run build       # Production build
```

CI runs on pushes and pull requests targeting `main` with Node.js `latest` and `npm ci`. Both workflows also run `npm test --if-present`; there is currently no `test` script.

To check the timeline after building, run `npm start` and open `/about#milestones`. The entry immediately before **Continuous improvement** should read:

> **Nov 2026 — LoBot reached >500 commits and >100 pull requests (PRs)**
>
> A good first step for all LoBot engineers working towards the company's products.

Switch to Spanish and Vietnamese. The same entry should appear once, in the same position, with its localized date, title and description.

---

## 🌍 Internationalization

The site supports **3 languages** out of the box:
- **English** (`en`) — default
- **Spanish** (`es`)
- **Vietnamese** (`vi`)

The site defaults to English and saves the selected language in `localStorage` (`lobot-lang`). UI translations live in `src/i18n/*.ts`. To edit the About timeline, update `about.milestones.items` in all three dictionaries; entries render in array order.

---

## 🤝 Contributing

We welcome contributions from everyone, including AI-generated and AI-assisted code.

### Our Standards

- Be respectful and inclusive.
- Provide constructive feedback.
- Focus on improving the project.

### Contribution Guidelines

- All contributions are welcome (features, bug fixes, documentation, design improvements, etc.).
- AI-generated / AI-assisted contributions are explicitly allowed, but you must rigorously test the codebase before pushing to the main repository.
- Always run the site in multiple browsers and test responsiveness, chart rendering, data exports, and edge cases (horizon = 1 and horizon = 10).
- Open a Pull Request with a clear description of changes.
- You are required to justify why your UI looks better and more consistent compared to the original one (e.g., better functionality, etc.) if your Pull Requests has a different UI from the original or if you want to remove a feature.
- Ensure that your code has to work via the autotester before submitting a Pull Request.
- Reference any related issues.

Violations of this Code of Conduct may result in temporary or permanent bans from the project.

---

## 📄 License

**BSD 3-Clause License** — see [LICENSE](LICENSE) for details.

```
Copyright (c) 2026, LoBot LLC
```

---

## 🙏 Credits

**Author & Maintainer**  
🤖 [LoBot LLC](https://github.com/LoBot-LLC)

**Company Contact**  
📧 lobotllc@atomicmail.io

---

*Built with AI agents and human developers working together, all as a team.*
