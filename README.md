# Challotte Maahlamela - United Kingdom portfolio

Standalone React and TypeScript portfolio for United Kingdom engineering opportunities. Source, dependencies, CV and build output are owned by this project; no build-mode switch or sibling project is needed.

## Run locally

```powershell
npm ci
npm run dev
```

Development URL: http://127.0.0.1:4175/

## Validate and build

```powershell
npm run typecheck
npm run lint
npm run build
```

## Live portfolio and deployment

Live portfolio: https://challotte-uk.netlify.app/

GitHub repository: https://github.com/challotte14/challotte-portfolio-uk

Netlify builds the `main` branch with `npm run build` and publishes `dist`. The site's repository connection and push webhook keep this regional site independent. `netlify.toml` fixes the build runtime to Node.js 22.

The contact form uses EmailJS. `.env` is ignored by Git; the required values from `.env.example` are configured separately for this Netlify site. Keep credentials out of commits.

The downloadable CV's Portfolio link points to this regional live site.

CV: `src/assets/docs/challotte-maahlamela-cv.pdf`. AI-103 preparation is listed as in progress. Update regional hiring text in `src/App.tsx`.

Store all project work and artifacts locally under `C:\No backups`, never in OneDrive.
