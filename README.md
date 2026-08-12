# Portfolio de Sara 2027

Portfolio responsive con React, TypeScript, Vite y CSS. Incluye animaciones, casos de estudio y enlaces.

## Estructura

```
public/          → favicon e imágenes
src/
  pages/         → Home y página de proyecto
  data.ts        → textos y proyectos
  index.css      → estilos y animaciones
```

## Personalizar

- Textos y proyectos: `src/data.ts`
- Enlaces (GitHub, LinkedIn, email, CV): `src/pages/Home.tsx`
- Estilos: `src/index.css`
- Imágenes: añade archivos en `public/images/` y pon `image: "/images/tu-foto.jpg"` en cada proyecto

## Ejecutar

```bash
npm install
npm run dev
```

## Publicar

```bash
npm run build
```
