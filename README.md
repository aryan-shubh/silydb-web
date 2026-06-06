This is a [Next.js](https://nextjs.org) project with Drizzle ORM configured for PostgreSQL through the `node-postgres` driver.

## Getting Started

Install dependencies:

```bash
bun install
```

Create a local `.env` file and set your PostgreSQL connection string:

```bash
DATABASE_URL="postgresql://user:password@host:5432/postgres"
```

Apply the schema directly to a development database:

```bash
bun run db:push
```

Alternatively, generate and apply migrations:

```bash
bun run db:generate
bun run db:migrate
```

Run the Drizzle seed/query example:

```bash
bun run db:seed
```

Start the development server:

```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

## Drizzle Files

- `src/db/schema.ts` defines the `users` table.
- `drizzle.config.ts` points Drizzle Kit at the schema, migration folder, and `DATABASE_URL`.
- `drizzle/` contains generated SQL migrations and snapshots.
- `src/index.ts` creates, reads, updates, and deletes a sample user.

## Checks

Run linting, formatting checks, and type-aware checks:

```bash
bun run check
```
