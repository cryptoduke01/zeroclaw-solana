# site

Marketing site for [Onca](https://github.com/cryptoduke01/onca) — Solana tools
for the ZeroClaw agent runtime.

This folder lives inside the monorepo on purpose. Plugin source stays under
`plugins/` and `crates/`. The site never needs to enter those trees.

## Stack

- Next.js 15 (App Router, static export)
- Tailwind CSS v4
- Instrument Sans (`next/font`)

## Develop

```bash
cd site
npm install
npm run dev      # http://localhost:3000
npm run build    # static output in site/out/
```

## Deploy

Push to `main` under `site/**` runs `.github/workflows/site.yml` and publishes
to GitHub Pages. The workflow sets:

- `NEXT_PUBLIC_BASE_PATH=/onca`
- `NEXT_PUBLIC_SITE_URL=https://cryptoduke01.github.io/onca`

For a root domain (Vercel / custom domain), leave those unset.

## Brand

See [brand.md](brand.md). Design follows the
[pols.dev anti-slop law](https://pols.dev/slop).

## License

MIT (same as the monorepo root).
