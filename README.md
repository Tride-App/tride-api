# Tride API

> Learn More: https://tride-app.github.io/project

![Discord](https://img.shields.io/discord/1482790798016643103?style=for-the-badge&logo=discord&logoColor=white)

Tride is an intercity carpooling platform designed around transparent ride payments, seat inventory, and deterministic settlement. This repository contains the backend API layer that supports the product outside the blockchain contract surface.

The API is where Tride’s off-chain coordination logic will live: profiles, trip search, messaging hooks, verification workflows, and any application state that should not be stored on-chain.

## What Tride Is About

Tride connects drivers with empty seats to passengers looking for predictable intercity trips. The platform separates responsibilities clearly:

- on-chain: escrow, payout, refunds, no-show handling,
- off-chain: identity, discovery, messaging, trip coordination, and product workflows.

That separation is central to the architecture of this repository.

## What This Repo Covers

This repo is a lean [ArkStack-based](https://arkstack.toneflix.net/) API foundation intended for:

- health and service endpoints,
- rider and driver domain endpoints,
- search and discovery APIs,
- off-chain booking orchestration,
- integration with the Tride frontend and Soroban contract layer.

## Current Status

The API currently ships as a minimal baseline with:

- [ArkStack Express](https://arkstack.toneflix.net/guide/express-runtime) runtime,
- lint and unit test setup,
- dedicated API metadata and health endpoints,
- no database or Prisma dependency yet.

## Local Development

Install dependencies and start the development server:

```sh
npm install
npm run dev
```

The default web route responds at `http://localhost:3000/`.

## Scripts

```sh
npm run dev
npm run build
npm run lint
npm run lint:fix
npm run test
npm run test:watch
npx ark --help
```

## Project Structure

- `src/app/http/controllers`: HTTP controllers
- `src/routes`: route registration
- `src/core`: runtime and shared service modules
- `test`: Vitest test files

## Contribution Guide

Useful contribution areas include:

- route and controller design,
- booking and trip lifecycle endpoints,
- API contracts for profiles and ratings,
- Stellar integration adapters,
- validation and error handling,
- backend test coverage.

When contributing:

1. Keep API shapes explicit and easy to evolve.
2. Run `npm run lint` and `npm run test` before opening a PR.
3. Prefer additive changes over premature abstraction.
4. Keep the off-chain/on-chain boundary clear in your design.

## Design Notes

- The scaffold uses ArkStack's Express runtime.
- Database setup is intentionally deferred until the first real persistence requirements are locked down.
- API changes should support the initial intercity corridor MVP before broader marketplace expansion.
