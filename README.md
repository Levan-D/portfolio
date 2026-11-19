# Portfolio

Source code for my personal portfolio: experience, skills and projects. Designed in Figma, built with Next.js.

Live at https://levandolidze.dev

Feel free to fork it and use it as a template.

## Stack

- Next.js 16 (App Router), React 19, TypeScript
- Tailwind CSS 4 (theme lives in `src/app/globals.css`)
- next-themes for light/dark mode
- react-hook-form + zod for the contact form, validated again on the server
- Nodemailer (Gmail OAuth2) to deliver contact messages

## Getting started

Requires Node.js 20.9 or newer (24 LTS recommended).

```sh
npm install
npm run dev
```

Then open http://localhost:3000.

| Script                 | What it does             |
| ---------------------- | ------------------------ |
| `npm run dev`          | Dev server               |
| `npm run build`        | Production build         |
| `npm run lint`         | ESLint                   |
| `npm run typecheck`    | TypeScript, no emit      |
| `npm run format`       | Prettier, writes changes |
| `npm run format:check` | Prettier, check only     |

## Project structure

```
src/
  app/            routes only (homepage sections live in (homepage)/_sections)
  components/     shared UI: ui/ primitives, navigation/, contact/
  data/           projects, experience and technologies shown on the site
  hooks/          generic React hooks
  lib/            server-only wrappers (mailer)
  utils/          small pure helpers
  assets/         images
```

To make it yours, edit the files in `src/data/` and the copy in `src/app/(homepage)/_sections/`.

## Contact form

Messages are sent through Gmail with OAuth2. Create `.env.local` in the project root:

```sh
GMAIL_USER=you@gmail.com
GMAIL_CLIENT_ID=...
GMAIL_CLIENT_SECRET=...
GMAIL_REFRESH_TOKEN=...
```

Get the client ID and secret from an OAuth client in the Google Cloud Console (APIs & Services → Credentials), then generate a refresh token for the Gmail scope, for example with the OAuth 2.0 Playground. If the OAuth consent screen is left in "Testing" mode, Google expires refresh tokens after 7 days, so publish the app or the form will stop sending.

On Vercel, add the same variables under Project Settings → Environment Variables.

## License

MIT, see [LICENSE](LICENSE).
