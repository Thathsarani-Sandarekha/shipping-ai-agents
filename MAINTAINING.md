# Maintaining the site

Notes for the owner of the repository. Contributors don't need any of this.

## Publishing

The site is hosted on GitHub Pages at https://nimeshmora.github.io/shipping-ai-agents/.
Every push to `main` builds and publishes it with `.github/workflows/deploy.yml`.

One-time setup: in **Settings > Pages > Build and deployment**, set **Source** to **GitHub Actions**.
The address is set by `site` and `base` in `astro.config.mjs`.

### Using your own domain

Add a file called `public/CNAME` that contains only your domain (for example `agents.example.com`),
set `site` to `https://agents.example.com` and `base` to `'/'` in `astro.config.mjs`,
then add the domain under **Settings > Pages > Custom domain** and follow GitHub's DNS steps.

## The front page

The site front page is **Ship It with Nimesha** (`src/pages/index.astro`). It lists every notebook in `src/lib/notebooks.ts`;
the dashed "Notebook #2, in the works" card always appears after the last one. The `N` badge next to the speech bubble
is `src/sketches/chars/nimesha.svg`: replace it with your own sketch if you like (keep it about 60 × 60 and centered on 46, 42).

The notebook's cover moved to `/notebooks/shipping-ai-agents/`. Chapter addresses did not change.

## Visitor counts

The site uses [GoatCounter](https://www.goatcounter.com): free, no cookies, and no cookie banner needed.
The code is set in `src/lib/site.ts` (`GOATCOUNTER`). Counting only runs on the live site.

Besides page views, a **"Finished: …"** event is counted the first time a reader scrolls to the end of a page,
so you can compare how many people open a chapter with how many read it to the end.

## Reviewing contributions

- Issue forms are in `.github/ISSUE_TEMPLATE/` and tag issues `fix`, `example` or `topic idea`.
- Every pull request runs `.github/workflows/check.yml`, which makes sure the site still builds.
- Check that new facts link to official documentation and that `lastChecked` was updated.

## Keeping it accurate

Re-check the facts and the commands in chapter 12 every few months, then update each chapter's `lastChecked` date.
