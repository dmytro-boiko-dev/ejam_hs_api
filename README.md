# Humble Superhero API (test task)

This is Ejam's take home task.

## Setup

In this monorepo `concurrently` lib used, so dependencies could be installed for both server and client with one command:

```bash
npm run install-all
```

(optional) Create .env file for the backend from the `.env.example`
```bash
cd server
cp .env.example .env
```

## Run

NOTE: `NODE_ENV` must NOT be switched to `test` in the `.env` file in the `server` sub folder

```bash
$ npm run start-both
```

## Run tests (backend only)

NOTE: `NODE_ENV` must be switched to `test` in the `.env` file in the `server` sub folder

```bash
$ cd server
```

```bash
$ npx jest
```

## "If I had more time"

1. The app can be implemented using NestJS and microservices architecture. In that case the structure could be this:

```text
   ejam_hs_api/
   ├─ src/
   │  ├─ app.module.ts
   │  ├─ main.ts
   │  └─ heroes/
   │     ├─ heroes.controller.ts
   │     ├─ heroes.service.ts
   │     ├─ heroes.module.ts
   │     ├─ dto/
   │     │  └─ create-hero.dto.ts
   │     └─ interfaces/
   │        └─ hero.interface.ts
   ├─ package.json
   ├─ tsconfig.json
   └─ ...
```

2. Database could be added, for example using TypeORM and PostgresSQL
3. Logging and more error handling could be added
4. Tests could be extended
5. Authentication could be added, e.g. to restrict creation of heroes to non-authorized users
