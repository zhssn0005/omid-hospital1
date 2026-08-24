# Cloudflare deployment

This project can run as one Cloudflare Worker serving the static website and the API, with Cloudflare D1 as the persistent database.

## Required setup

1. Create a D1 database named `omid-hospital`.
2. Put its database ID in `wrangler.toml` instead of `REPLACE_WITH_CLOUDFLARE_D1_DATABASE_ID`.
3. Set a secret JWT key of at least 32 characters:

```bash
wrangler secret put JWT_SECRET
```

4. Apply the schema:

```bash
bun run cf:migrate
```

5. Import the exported public content into D1. The repository includes `cloudflare/migrations/0002_seed_content.sql`, generated from the local database without private users or passwords. Applying `bun run cf:migrate` runs both the schema and this content migration.
6. Create the first admin row in D1 using a password hash generated locally:

```bash
node cloudflare/scripts/hash-password.js "your-admin-password"
```

Use the resulting value in an explicit D1 insert from your secure terminal or Cloudflare dashboard. Do not commit the password or hash to source control.

## Local Worker

```bash
bunx wrangler dev
```

The Worker expects `DB` and `JWT_SECRET` bindings. Local D1 state is separate from the existing Express/sql.js database. Doctor images are served from the committed `/assets/doctors/` directory; private `server/`, `data/`, and Wrangler state are excluded from the Worker asset upload.

## Deploy

```bash
bun run cf:deploy
```

Then attach the custom domain from Cloudflare Dashboard > Workers & Pages > the Worker > Settings > Domains & Routes. The domain must already use Cloudflare nameservers.

## Important

Cloudflare deployment is not complete until the D1 database ID, D1 data import, JWT secret, and custom domain are configured. The repository contains no Cloudflare token, database ID, or secret by design.
