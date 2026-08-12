# Cómo editar el portfolio

## Colores y tipografía
- `src/styles/tokens/colors.css` — paleta y tonos de tarjeta
- `src/styles/tokens/typography.css` — fuentes
- `src/styles/tokens/radii.css` — bordes redondeados

## Textos y links globales
- `src/content/site.ts` — hero, about, lab, footer, redes

## Proyectos (orden en home)
- `src/content/projects/index.ts`

## Textos de cada case study
- `src/content/projects/rosetta.ts`
- `src/content/projects/conecta.ts`
- `src/content/projects/escuela.ts`
- `src/content/projects/violeta.ts`
- `src/content/projects/cucharita.ts`

## Imágenes
- Home: `public/images/home/`
- Cases: `public/images/projects/{slug}/`
- Extras: `public/media/`

Las rutas `src` de cada foto están en los archivos de content. Si el archivo no existe, se muestra un placeholder.
