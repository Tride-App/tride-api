# Tride API

Basic ArkStack API workspace for Tride, initialized from the official Express starter and trimmed to a lean, non-database baseline.

## Getting Started

Install dependencies and start the development server:

```sh
npm install
npm run dev
```

The default web route responds at `http://localhost:3000/`.

## Available Scripts

```sh
npm run dev
npm run build
npm run lint
npm run lint:fix
npx ark
```

## Notes

- The scaffold uses ArkStack's Express runtime.
- Database and Prisma setup were intentionally omitted for the initial API baseline.
- Add `src/routes/api.ts` later if you want a dedicated `/api` route group.
