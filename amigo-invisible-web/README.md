# Amigo Invisible Web

[![CI](https://github.com/Kolossus03/amigo-invisible-web/actions/workflows/ci.yml/badge.svg)](https://github.com/Kolossus03/amigo-invisible-web/actions/workflows/ci.yml)
[![Netlify Status](https://api.netlify.com/api/v1/badges/<BADGE_ID>/deploy-status)](https://app.netlify.com/sites/<SITE_NAME>/deploys)

Minimal React + Vite app to run a Secret Santa (Amigo Invisible) draw entirely on the client.

## Quick Start

**Requirements:** Node.js (>=16) and npm

1. Install dependencies:

```
npm install
```

2. Run dev server:

```
npm run dev
```

3. Build for production:

```
npm run build
```

4. Preview production build locally:

```
npm run preview
```

5. Run tests:

```
npm test
```

## Deployment

The app is a static Vite site. You can deploy to Netlify or Vercel (both have generous free tiers).

**Live demo:** https://amig0-invisible.netlify.app/  <!-- Replace with your actual site URL -->

Netlify (recommended for simplicity):
- Connect your GitHub repo to Netlify
- Set **Base directory** to `amigo-invisible-web` (this ensures files outside the web app, like `.py` files, are ignored)
- Build command: `npm run build`
- Publish directory: `dist`
- A `netlify.toml` is included to simplify configuration
- Add your deploy badge: Netlify → Site settings → Deploys → Badge and paste the markdown below where indicated in this README:

  `![Netlify Status](https://api.netlify.com/api/v1/badges/<BADGE_ID>/deploy-status)`

Vercel:
- Import the repo on Vercel
- Vercel usually auto-detects Vite; if needed set Build: `npm run build` and Output: `dist`

Manual (single deploy):
- Build locally `npm run build` and drag the contents of the `dist` folder to Netlify's drag-and-drop deploy area.

---

## CI & Dependabot

This repository includes:

- **GitHub Actions CI**: runs tests and builds for changes under `amigo-invisible-web/` (workflow file: `.github/workflows/ci.yml`).

- **Dependabot** (weekly): configured to open dependency update PRs for npm (`.github/dependabot.yml`).

You can add the CI badge to the README after your first run using:

`![CI](https://github.com/Kolossus03/amigo-invisible-web/actions/workflows/ci.yml/badge.svg)`


## Git / Commit

If you updated this README locally, commit & push:

```
git add README.md
git commit -m "Add README"
git push
```

If you need to create a new repo and push:

```
git init
git add .
git commit -m "Initial commit"
git branch -M main
# with GH CLI:
# gh repo create my-repo-name --public --source=. --remote=origin --push
# or set remote manually:
# git remote add origin https://github.com/YOUR_USER/YOUR_REPO.git
# git push -u origin main
```

## Notes

- On Windows PowerShell some npm script execution is blocked by policy; use CMD or run `npm` scripts from CMD, or run `gh` commands from CMD.
- Tests use Vitest and can run with `npm test`.
- The draw algorithm ensures no one is assigned themselves and runs entirely on the client.

[![Netlify Status](https://api.netlify.com/api/v1/badges/7c6abc98-2dd5-4d17-a7fa-d0424a600a67/deploy-status)](https://app.netlify.com/projects/amig0-invisible/deploys)

## License

MIT
