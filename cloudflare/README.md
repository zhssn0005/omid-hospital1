# Cloudflare deployment

This project can run as one Cloudflare Worker serving the static website and the API, with Cloudflare D1 as the persistent database.

## Required setup

1. Create a D1 database named `omid-hospital`.
2. Put its database ID in `wrangler.toml` instead of `REPLACE_WITH_CLOUDFLARE_D1_DATABASE_ID`.
3. Set a secret JWT key of at least 32 characters:

```bash
wrangler secret put JWT_SECRET
```

4. Apply the schema and public content migrations:

```bash
bun run cf:migrate
```

5. Configure the admin password as a Cloudflare Worker secret. The value is never stored in this repository. The first successful admin login creates or synchronizes the `admin` row in D1:

```bash
wrangler secret put ADMIN_PASSWORD
```

Optionally set `ADMIN_USERNAME`, `ADMIN_EMAIL`, and `ADMIN_PHONE` as Worker variables/secrets. Do not commit any of these values or a password hash to source control.

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
