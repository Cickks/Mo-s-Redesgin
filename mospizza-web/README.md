# Mo's Pizza Web App

React/Vite website for Mo's Pizza in Westwego, LA. The production experience is built around fast restaurant actions: menu browsing, Toast ordering, phone calls, directions, hours, and local trust.

## Commands
```powershell
npm install
npm run dev
npm run lint
npm run build
npm run preview
```

## Routes
- `/` - Home page with hero, featured menu, reviews, order CTA, and location.
- `/menu` - Full browsable menu from typed menu data.
- `/order` - Online ordering handoff and call-to-order path.
- `/about` - Local restaurant story and trust signals.
- `/contact` - Map, hours, phone, email, and directions.

## Configuration
No local `.env` file is required for the static website. Deployment secrets live in GitHub/Vercel, not in source control.

## Launch Checks
Before handoff or deploy:

```powershell
npm run lint
npm run build
```

Then smoke test desktop and mobile:
- Home loads with real food imagery.
- Menu route shows categories and item cards.
- Order links open Toast.
- Phone links use `tel:`.
- Directions links open maps.
- No console errors.
