# Humble Superhero API (test task)

This is Ejam's take home task.

## Setup

```bash
$ npm install
```

## Run

NOTE: `NODE_ENV` must NOT be switched to `test` in the `.env` file

```bash
$ npm start
```

## Run tests

NOTE: `NODE_ENV` must be switched to `test` in the `.env` file

```bash
$ npx jest
```

## "If I had more time"

1. The app can be implemented using NestJS and microservices architecture. In that case the structure could be this:

```text
   nest-heroes/
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




