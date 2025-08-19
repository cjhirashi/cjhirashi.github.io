# cjhirashi.github.io

Portafolio profesional de Carlos Jiménez Hirashi.

Sitio estático construido con **HTML**, **CSS** y **JavaScript**. Las secciones de habilidades, proyectos, experiencia y educación se cargan dinámicamente desde archivos JSON.

## Archivos principales

- `index.html`: página principal y estructura del sitio.
- `main.js`: utilidades y carga dinámica de contenido.
- `styles.css`: estilos y diseño responsivo.
- `habilidades.json`: datos de categorías de habilidades.
- `proyectos.json`: datos de proyectos destacados.
- `experiencia.json`: historial laboral.
- `educacion.json`: formación académica.

## Visualización local

No se requieren dependencias ni compilación. Para ver el sitio abre `index.html` en el navegador:

```bash
# macOS
open index.html

# Linux
xdg-open index.html
```

## Actualizar contenido

Cada sección se alimenta de un archivo JSON:

- **Habilidades** (`habilidades.json`): lista de objetos con `titulo` e `items`.
- **Proyectos** (`proyectos.json`): cada proyecto incluye `titulo`, `descripcion`, `tags`, `codigo` y opcionalmente `demo` e `image`.
- **Experiencia** (`experiencia.json`): objetos con `empresa`, `puesto`, `periodo` y un arreglo de `logros`.
- **Educación** (`educacion.json`): objetos con `institucion` y `detalle`.

Edita los archivos correspondientes y recarga `index.html` para ver los cambios.

