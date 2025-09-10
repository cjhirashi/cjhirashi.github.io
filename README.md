# 🌐 Portafolio Profesional - [cjhirashi.github.io](https://cjhirashi.github.io)

[![HTML](https://img.shields.io/badge/HTML-5-orange?logo=html5)](https://developer.mozilla.org/es/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/CSS-3-blue?logo=css3)](https://developer.mozilla.org/es/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow?logo=javascript)](https://developer.mozilla.org/es/docs/Web/JavaScript)
[![Status](https://img.shields.io/badge/Estado-Activo-brightgreen?style=flat)](https://cjhirashi.github.io)

---

## 🚀 Descripción

Sitio web estático que funciona como portafolio profesional de **Carlos Jiménez Hirashi**.  
Muestra habilidades, proyectos, experiencia laboral y educación de forma clara y dinámica, con información cargada desde archivos JSON.

🔗 **Demo en vivo:** [cjhirashi.github.io](https://cjhirashi.github.io)

---

## 🗂️ Archivos principales

| Archivo        | Descripción |
|----------------|-------------|
| `index.html`   | Página principal y estructura del sitio |
| `main.js`      | Utilidades y carga dinámica de contenido |
| `styles.css`   | Estilos y diseño responsivo |
| `habilidades.json` | Datos de categorías de habilidades |
| `proyectos.json`   | Proyectos destacados |
| `experiencia.json` | Historial laboral |
| `educacion.json`   | Formación académica |

---

## ⚙️ Visualización local

No requiere dependencias ni compilación.  
Simplemente abre `index.html` en tu navegador:

```bash
# macOS
open index.html

# Linux
xdg-open index.html
 
# Windows
start index.html
```

---

## 📝 Carga de contenido

El sitio carga cada sección desde archivos JSON ubicados en la raíz del proyecto.\
Para actualizar la información, edita estos archivos siguiendo su estructura:

- **habilidades.json** – Agrupa las habilidades por categoría usando `titulo` e `items`.
- **proyectos.json** – Lista proyectos con `thumb`, `titulo`, `descripcion`, array `tags` y enlaces `codigo`; opcionalmente `demo` e `image`.
- **experiencia.json** – Describe la trayectoria laboral mediante `empresa`, `puesto`, `periodo` y un array de `logros`.
- **educacion.json** – Detalla los estudios con `institucion` y `detalle`.

Guarda los cambios y vuelve a abrir `index.html` para verlos reflejados.
