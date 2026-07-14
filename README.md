# Mo's Pizza Website Redesign Concept

An independent restaurant website redesign concept inspired by Mo's Pizza in Westwego, Louisiana. The project explores a modern customer experience around the actions that matter most on mobile: browse the menu, order online, call the restaurant, check hours, and get directions.

## Project Status
This was a speculative portfolio project. It was not purchased, commissioned, approved, or adopted by Mo's Pizza, and it is not the restaurant's official website. Mo's Pizza is working with another website provider.

The project remains useful as a frontend case study, responsive restaurant demo, and foundation for future client work. Mo's Pizza names, trademarks, photography, and other brand assets belong to their respective owners. Replace or license those assets before adapting this project for another public deployment.

## Project Goals
- Replace the outdated static/PDF-style experience with a modern responsive website.
- Make the first viewport immediately show the brand, food, phone number, location, and ordering path.
- Give customers a full browsable menu instead of forcing them into a PDF.
- Keep the local Westwego identity, real food photography, and family restaurant feel.
- Demonstrate a polished restaurant workflow for portfolio review and local demos.

## Features
- Responsive React/Vite website with Home, Menu, About, and Contact routes.
- Full `/menu` page powered by typed menu data.
- Toast ordering handoff, phone links, directions links, hours, and review CTA.
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
  src/pages/           Home, Menu, Toast redirect, About, Contact routes
  src/styles/          Global design system and responsive styling
research/              Website audit notes and launch goals
screenshots/           Reference screenshots from the previous website
```

## Demo Deployment
Vercel is not required for local demos or GitHub review. For a private portfolio preview or a properly rebranded public demo, import the GitHub repository into Vercel and use:

| Setting | Value |
| --- | --- |
| Root directory | `mospizza-web` |
| Build command | `npm run build` |
| Output directory | `dist` |

Before any public deployment, replace or obtain permission for restaurant branding and photography, then confirm the domain, hours, phone number, email, ordering URL, and menu accuracy.
