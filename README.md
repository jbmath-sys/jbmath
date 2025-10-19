# JBMATH — Starter (React + Vite + Tailwind)

Proyecto base para el sitio de videos de matemáticas de JBMATH.

## Requisitos
- Node.js 18+
- npm

## Instalación
```bash
npm install
npm run dev
```

## Producción (build)
```bash
npm run build
npm run preview
```

## Deploy a GitHub Pages
1. Edita `package.json` → `"homepage": "https://TU_USUARIO.github.io/jbmath"`
2. Asegúrate que en `vite.config.js` esté `base: '/jbmath/'`
3. Ejecuta:
```bash
npm run deploy
```

## Estructura
- `src/data/videos.json` → catálogo editable sin backend
- `src/pages` → Home y Video
- `src/components` → Tarjeta, búsqueda y filtros
