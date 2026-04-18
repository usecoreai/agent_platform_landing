# Deployment checklist — CoreAI Platform landing on GitHub Pages

## Stack

- Vite
- React
- TypeScript
- Tailwind CSS
- Static site
- GitHub Pages
- GitHub Actions
- Custom domain: `platform.core-ai.ru`

## Required files

```txt
package.json
index.html
vite.config.ts
tailwind.config.js
postcss.config.js
src/main.tsx
src/App.tsx
src/data/content.ts
src/styles/index.css
src/components/*.tsx
public/CNAME
.github/workflows/deploy.yml
README.md
```

## Vite config

`vite.config.ts`:

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',
})
```

## CNAME

`public/CNAME`:

```txt
platform.core-ai.ru
```

## GitHub Actions workflow

`.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: ["main"]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Setup Pages
        uses: actions/configure-pages@v5

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

## Manual GitHub setup

1. Open repository Settings.
2. Go to Pages.
3. Under Build and deployment, set Source = GitHub Actions.
4. Set custom domain = `platform.core-ai.ru`.
5. Save.
6. After DNS is propagated and certificate issued, enable Enforce HTTPS.

## DNS setup

At DNS provider for `core-ai.ru`:

- Type: CNAME
- Host: `platform`
- Value: `<github-owner>.github.io`

Replace `<github-owner>` with actual GitHub org/user.

## Local verification

```bash
npm install
npm run build
npm run preview
```

Check:

- No TypeScript errors.
- No missing imports.
- Responsive on mobile.
- CTAs point to `mailto:team@core-ai.ru` or configured contact.
- Policy link points to `https://www.core-ai.ru/policy/`.
- No external logos without rights.
- No OpenCode mentions.
- No claims of official 1C partnership.

## SEO checklist

`index.html` should include:

```html
<title>CoreAI Platform — Second Brain компании поверх 1С, CRM и корпоративных данных</title>
<meta name="description" content="Agentic Second Brain и enterprise-ready AI-платформа поверх 1С, CRM, SQL, документов и внутренних систем: агенты, скиллы, пайплайны, A2A-ready orchestration, выбор моделей, audit и on-prem." />
<meta property="og:title" content="CoreAI Platform — Second Brain компании" />
<meta property="og:description" content="Агентский слой поверх 1С, CRM, SQL, документов и внутренних систем." />
<meta property="og:type" content="website" />
<meta property="og:url" content="https://platform.core-ai.ru" />
```

## Accessibility checklist

- Semantic sections.
- Buttons and links have accessible labels.
- Keyboard-focus styles.
- Color contrast is acceptable.
- Images/mockups have alt text if image-based.
- Avoid text only in images.

## Final expected URL

https://platform.core-ai.ru
