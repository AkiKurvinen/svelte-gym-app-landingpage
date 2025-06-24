# Svelte 5 demo project
- Single landing page with anchor link navigation
- Storybook and atomic design component structure
- Static site generation workflow to GitHub Pages

## Demo
[GitHub Pages](https://akikurvinen.github.io/svelte-gym-app-landingpage/)  
[Storybook](https://akikurvinen.github.io/svelte-gym-app-landingpage/storybook-static/)

## Developing
```bash
npm install  
npm run dev -- --open
```

## Building (static site generation)
Svelte adapter-static is activated.  
Check *svelte.config.js* to *set kit: paths: base* accordingly.
- base: '' (leave empty for developing, project will show in localhost:5174/)
- base: '/your-repository-name' (for deploying GitHub Pages, project will work in subfolder /your-repository-name/)

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.
