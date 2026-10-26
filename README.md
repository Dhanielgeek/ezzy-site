# EzzyRids

Responsive Vite + React + TypeScript website for EzzyRids, a mobility platform in development for Lagos. Tailwind CSS v4 is configured through `@tailwindcss/vite`; page styling is composed in `src/index.css`.

## Run locally

```sh
npm install
npm run dev
```

Production build: `npm run build`. Preview it with `npm run preview`.

## Brand assets

Put the approved logo in `src/assets/brand/` (SVG preferred; PNG and WebP also work). Update `logo` in `src/config/brand.ts` to its public URL or import the asset there. The shared `BrandLogo` component uses a styled EzzyRids wordmark until a logo is configured; it preserves the image aspect ratio. Company contact placeholders and the proposed programme rate/duration are in the same config file.

The car visual currently uses a remotely hosted Unsplash image. Replace `heroPhoto` in `src/App.tsx` with an approved local asset when one is available.

## API integration

Set `VITE_API_BASE_URL` to the HTTPS backend origin (for example, `https://api.example.com`). The forms POST JSON to `/waitlist`, `/contact`, and `/investor`. The backend must validate payloads, apply spam controls and rate limits, restrict CORS, and return a successful HTTP response only after it has accepted the enquiry. Without this value the forms display an honest not-connected state; they do not persist data in the browser. Do not put secrets in `VITE_*` values.

The FAQ assistant uses local, conservative FAQ answers and can later be wired to a backend service. No live payment handling is implemented. The calculator values are illustrative and centrally configurable in `src/config/brand.ts`.

## Routes and admin

- `/about` — vision, planned services, waitlist
- `/investors` — proposed programme, calculator, investor enquiry
- `/contact` — general and category enquiries (supports `?type=driver-registration`, `?type=luxury-car-rental`, `?type=fleet-financing`, and `?type=investor-enquiry`)
- `/admin` — explicitly labelled development layout mock; it has no real authentication or production data

The admin mock is not secure and must not be exposed as an operational dashboard. Production admin use requires server-side authentication and authorization, protected APIs, database-backed enquiry management, audit logs, and staff assignment/follow-up controls. Also required before launch: approved legal/privacy terms, configured backend, confirmed company contact details, production image and logo assets, accessibility review, security review, and applicable legal and regulatory review of any financing programme.
