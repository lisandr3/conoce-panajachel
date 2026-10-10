# Instalar esta actualización

1. Extrae el ZIP y copia su contenido dentro de conoce-panajachel, junto al README.md. Acepta reemplazar los archivos con el mismo nombre de esta actualización. Conserva las demás carpetas. Si ya editaste los JSON, guarda una copia antes de reemplazarlos.
2. Instala Node.js LTS (versión 20 o superior) si no lo tienes.
3. Abre Terminal en la carpeta del repositorio. En Windows puedes usar el Explorador: clic derecho en un espacio vacío > Abrir en Terminal.
4. Ejecuta `npm ci` y después `npm start`. En PowerShell, si npm está bloqueado por la política de scripts, utiliza `npm.cmd ci` y `npm.cmd start`.
5. Abre la dirección local indicada por Eleventy, normalmente http://localhost:8080. Detén el servidor con Ctrl+C.

## Editar

- Colores: src/styles/tokens.css.
- Menú: data/site/navigation.json. Cada enlace lleva label y href en es/en, enabled y children. Los submenús usan children.
- Footer: data/site/footer.json. Añade, reordena u oculta columnas y enlaces.
- Logo: copia el archivo a assets/images/brand y asigna a identity.logo la ruta /assets/images/brand/tu-logo.svg.
- Responsable y correo: data/site/identity.json. Activa footer.contact_enabled para mostrar el correo.
- Ejecuta de nuevo npm start después de cambiar los JSON.

Los destinos del menú son páginas de presentación honestas; no hay artículos, datos, buscador ni mapa todavía. La ilustración de portada es decorativa, no cartografía ni evidencia histórica.

## Compilar

`npm run build` genera dist. No subas node_modules ni dist a Git. Añade /dist/ y /.cache/ a tu .gitignore existente.
Para GitHub Pages de proyecto sin dominio propio: establece SITE_BASE=/conoce-panajachel/ antes de compilar. Con dominio raíz usa /. No hemos activado el despliegue.

En GitHub Desktop: revisa los cambios, commit Primera versión de header y footer y Push origin. El push actualiza el código; no publica automáticamente un sitio.
