# MoroccoTV — Premium IPTV Subscription Website (Morocco)

A modern, premium IPTV subscription website targeting Moroccan users. Built with **React + TypeScript + Vite + Tailwind CSS**.

- Dark theme with neon blue / purple accents
- Fully responsive (mobile / tablet / desktop)
- Pages: Home, Pricing, Channels & Content, About, Contact
- Arabic / French / English copy (RTL-aware)
- WhatsApp floating button, testimonials, FAQ, trust badges
- Fake data for channels, movies, live content (easy to swap for a real API)

## Pricing plans (DH)

| Duration  | Price   |
| --------- | ------- |
| 1 Month   | 80 DH   |
| 3 Months  | 200 DH  |
| 6 Months  | 350 DH  |
| 12 Months | 600 DH  |

## Getting started

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build to ./dist
npm run preview   # preview the production build
npm run lint      # eslint check
```

## Project structure

```
src/
├── components/      # Shared UI components (Navbar, Footer, Cards, etc.)
├── pages/           # Route pages: Home, Pricing, Channels, About, Contact
├── data/            # JSON-like data for plans, channels, movies, content
├── config/          # Site-wide config (WhatsApp, socials, branding)
├── index.css        # Tailwind + theme tokens
└── main.tsx         # Router entry
```

## Customization

- **WhatsApp number / socials / email**: edit [`src/config/site.ts`](src/config/site.ts).
- **Pricing plans**: edit [`src/data/plans.ts`](src/data/plans.ts).
- **Channels & VOD**: edit [`src/data/channels.ts`](src/data/channels.ts).
- **Feature copy / FAQ / testimonials**: edit [`src/data/content.ts`](src/data/content.ts).
- **Colors, shadows, animations**: edit [`tailwind.config.js`](tailwind.config.js).

## Tech stack

- React 19 + TypeScript
- Vite 8
- Tailwind CSS 3
- React Router 6

## License

Unlicensed template — feel free to adapt it for your own business.
