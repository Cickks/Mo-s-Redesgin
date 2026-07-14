# Mo's Pizza Redesign Demo

React/Vite portfolio concept inspired by Mo's Pizza in Westwego, Louisiana. It demonstrates fast restaurant actions: menu browsing, Toast ordering, phone calls, directions, hours, and local trust.

This project was not purchased, commissioned, approved, or adopted by Mo's Pizza and is not its official website. Brand names, trademarks, and restaurant photography belong to their respective owners.

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
- `/order` - Direct redirect to the restaurant's Toast ordering page.
- `/about` - Local restaurant story and trust signals.
- `/contact` - Map, hours, phone, email, and directions.

## Configuration
No local `.env` file is required for the static website. Deployment secrets live in GitHub/Vercel, not in source control.

## Demo Checks
Before portfolio review or a rebranded deployment:

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
