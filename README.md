# Mo's Pizza Website Redesign

A professional restaurant website redesign for Mo's Pizza in Westwego, Louisiana. The project modernizes the customer experience around the actions that matter most on mobile: browse the menu, order online, call the restaurant, check hours, and get directions.

## Project Goals
- Replace the outdated static/PDF-style experience with a modern responsive website.
- Make the first viewport immediately show the brand, food, phone number, location, and ordering path.
- Give customers a full browsable menu instead of forcing them into a PDF.
- Keep the local Westwego identity, real food photography, and family restaurant feel.
- Prepare the project for GitHub review, local demo, and future public deployment.

## Features
- Responsive React/Vite website with dedicated routes for Home, Menu, Order, About, and Contact.
- Full `/menu` page powered by typed menu data.
- Toast ordering links, phone links, directions links, map embeds, hours, and review CTA.
- Real Mo's Pizza photography and brand assets.
- SEO title/description, Open Graph metadata, local restaurant schema, `robots.txt`, and `sitemap.xml`.
- GitHub Actions build check for lint and production build.

## Tech Stack
- React 19
- TypeScript
- Vite
- React Router
- Framer Motion
- CSS design tokens and responsive custom CSS
- Oxlint

## Getting Started
```powershell
cd "C:\Apps\websites\Mo’s Pizza Redesign\mospizza-web"
npm install
npm run dev
```

Local development usually runs at:

```text
http://127.0.0.1:5173/
```

If that port is busy, Vite will choose the next available port.

## Quality Checks
```powershell
cd "C:\Apps\websites\Mo’s Pizza Redesign\mospizza-web"
npm run lint
npm run build
```

## Project Structure
```text
mospizza-web/
  public/              Icons, social image, redirects, robots, sitemap
  src/assets/          Food, storefront, interior, and brand photography
  src/components/      Shared UI, layout, home, and menu components
  src/data/            Menu, reviews, hours, location, and ordering data
  src/pages/           Home, Menu, Order, About, Contact routes
  src/styles/          Global design system and responsive styling
research/              Website audit notes and launch goals
screenshots/           Reference screenshots from the previous website
```

## Deployment Notes
Vercel is not required for local demos or GitHub review. When a public demo or production launch is needed, import the GitHub repository into Vercel and use:

| Setting | Value |
| --- | --- |
| Root directory | `mospizza-web` |
| Build command | `npm run build` |
| Output directory | `dist` |

Before launch, confirm the final domain, restaurant hours, phone number, email, Toast ordering URL, and menu accuracy.
