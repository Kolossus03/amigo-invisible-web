# Amigo Invisible Web

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

Netlify (recommended for simplicity):
- Connect your GitHub repo to Netlify
- Build command: `npm run build`
- Publish directory: `dist`
- A `netlify.toml` is included to simplify configuration

Vercel:
- Import the repo on Vercel
- Vercel usually auto-detects Vite; if needed set Build: `npm run build` and Output: `dist`

Manual (single deploy):
- Build locally `npm run build` and drag the contents of the `dist` folder to Netlify's drag-and-drop deploy area.

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

## License

MIT
