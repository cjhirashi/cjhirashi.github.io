# 🚀 Portafolio Personal - Carlos Jiménez Hirashi

Un portafolio web moderno, responsive y completamente configurable construido con HTML, CSS y JavaScript vanilla. Diseñado para ser fácil de mantener y actualizar mediante archivos JSON.

## ✨ Características

### 🎨 **Diseño Moderno**
- **Temas múltiples**: Claro, Oscuro y Sistema (automático)
- **Diseño responsive** que se adapta a todos los dispositivos
- **Animaciones suaves** y efectos hover elegantes
- **Tipografía profesional** con Google Fonts (Inter)

### 🔧 **Totalmente Configurable**
- **Datos externos**: Todo el contenido se carga desde archivos JSON
- **Fácil actualización**: Solo edita los JSON, no toques el código
- **Iconos SVG**: Sin dependencias externas, completamente offline
- **Temas personalizables**: Colores y estilos fáciles de modificar

### ⚡ **Performance Optimizado**
- **Carga rápida**: Archivos separados y optimizados
- **Sin dependencias**: No requiere frameworks o librerías externas
- **Cacheable**: CSS y JS se pueden cachear por separado
- **SEO amigable**: HTML semántico y meta tags dinámicos

### 🎯 **Funcionalidades Avanzadas**
- **Navegación inteligente**: Header que se oculta al hacer scroll
- **Animaciones progresivas**: Secciones aparecen al hacer scroll
- **Accesibilidad mejorada**: Navegación por teclado y ARIA labels
- **Scroll suave**: Navegación fluida entre secciones

## 📁 Estructura del Proyecto

```
portafolio/
├── index.html              # Estructura HTML
├── styles.css              # Estilos y temas
├── script.js               # Lógica y funcionalidades
├── data/                   # Datos configurables
│   ├── profile.json        # Información personal
│   ├── about.json          # Sección "Sobre mí"
│   ├── tech-stack.json     # Tecnologías y herramientas
│   ├── projects.json       # Proyectos destacados
│   ├── contact.json        # Información de contacto
│   └── config.json         # Configuración general
└── README.md               # Documentación
```

## 🚀 Instalación y Uso

### **✅ Portafolio Ya Desplegado**

El portafolio de Carlos Jiménez Hirashi está **activo y funcionando** en:
🌐 **[cjhirashi.github.io](https://cjhirashi.github.io)**

### **🔄 Para Actualizar el Contenido**

Como el sitio ya está desplegado con GitHub Pages, cualquier cambio que hagas se reflejará automáticamente:

1. **Clona el repositorio localmente**:
```bash
git clone https://github.com/cjhirashi/cjhirashi.github.io.git
cd cjhirashi.github.io
```

2. **Edita los archivos JSON** que necesites actualizar:
   - `data/profile.json` - Información personal
   - `data/projects.json` - Agregar/editar proyectos
   - `data/tech-stack.json` - Tecnologías
   - `data/contact.json` - Información de contacto

3. **Sube los cambios**:
```bash
git add .
git commit -m "Update: [descripción del cambio]"
git push origin main
```

4. **¡Automático!** Los cambios aparecerán en el sitio en **1-2 minutos**.

### **🖥️ Desarrollo Local (Opcional)**

Si quieres previsualizar cambios antes de subirlos:

```bash
# Con Python 3
python -m http.server 8000

# Con Node.js
npx serve .

# Luego abre: http://localhost:8000
```

### **📱 Verificar Funcionalidad**

El sitio incluye:
- ✅ **Temas responsive** (claro/oscuro/sistema)
- ✅ **Navegación suave** entre secciones
- ✅ **Enlaces a GitHub** y redes sociales funcionando
- ✅ **Diseño mobile-first** optimizado

## 📝 Configuración

### **🔄 Actualizar Información Personal**

Edita `data/profile.json`:
```json
{
    "name": "Tu Nombre Completo",
    "title": "Tu Título Profesional",
    "subtitle": "Tu descripción breve",
    "location": "Tu ubicación",
    "badges": [
        {
            "text": "Tu especialidad",
            "icon": "database"
        }
    ]
}
```

### **📊 Agregar/Editar Proyectos**

Modifica `data/projects.json`:
```json
[
    {
        "title": "Nombre del Proyecto",
        "description": "Descripción detallada del proyecto",
        "technologies": ["Tech1", "Tech2", "Tech3"],
        "github": "https://github.com/usuario/proyecto",
        "demo": "https://proyecto-demo.com", // opcional
        "features": [
            "Característica 1",
            "Característica 2"
        ]
    }
]
```

### **🛠️ Personalizar Tecnologías**

Actualiza `data/tech-stack.json`:
```json
[
    {
        "category": "Nombre de Categoría",
        "items": [
            {
                "name": "Tecnología",
                "icon": "nombre-icono"
            }
        ]
    }
]
```

### **📧 Información de Contacto**

Modifica `data/contact.json`:
```json
[
    {
        "title": "Plataforma",
        "info": "tu-info",
        "icon": "icono-svg",
        "link": "https://enlace.com" // o null si no hay enlace
    }
]
```

### **⚙️ Configuración General**

Personaliza `data/config.json`:
```json
{
    "site": {
        "title": "Título de tu página",
        "description": "Meta descripción",
        "logo": "TUS INICIALES"
    },
    "settings": {
        "enableAnimations": true,
        "defaultTheme": "system" // light, dark, o system
    }
}
```

## 🎨 Personalización de Temas

### **Cambiar Colores**

Edita las variables CSS en `styles.css`:

```css
:root {
    /* Tema Claro */
    --bg-primary: #ffffff;
    --text-primary: #1e293b;
    --text-accent: #3b82f6; /* Color principal */
    --accent-blue: #3b82f6;
    --accent-green: #10b981;
    --accent-purple: #8b5cf6;
}

[data-theme="dark"] {
    /* Tema Oscuro */
    --bg-primary: #0f172a;
    --text-primary: #f8fafc;
    --text-accent: #60a5fa;
}
```

### **Personalizar Fuentes**

Cambia la fuente en `styles.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=TuFuente:wght@300;400;500;600;700;800&display=swap');

body {
    font-family: 'TuFuente', sans-serif;
}
```

## 🎯 Iconos Disponibles

El portafolio incluye los siguientes iconos SVG:

**Tecnología**: `code`, `database`, `layout`, `palette`, `git-branch`, `github`
**Datos**: `bar-chart`, `pie-chart`, `line-chart`, `calculator`, `trending-up`, `brain`
**Comunicación**: `mail`, `linkedin`, `whatsapp`, `map-pin`, `external-link`
**HVAC**: `wifi`, `network`, `radio`, `settings`, `edit`
**Generales**: `sun`, `moon`, `monitor`, `award`, `book-open`

### **Agregar Nuevos Iconos**

1. **Encuentra un icono SVG** (recomendado: [Lucide Icons](https://lucide.dev))
2. **Agrega el SVG** al objeto `icons` en `script.js`:
```javascript
const icons = {
    // ... iconos existentes
    'mi-nuevo-icono': '<svg xmlns="http://www.w3.org/2000/svg">...</svg>'
};
```
3. **Usa el icono** en tus archivos JSON:
```json
{
    "name": "Mi Tecnología",
    "icon": "mi-nuevo-icono"
}
```

## 🌐 Deployment

### **✅ Estado Actual - ACTIVO**

El portafolio está **desplegado y funcionando** en GitHub Pages:

- 🌐 **URL del sitio**: [cjhirashi.github.io](https://cjhirashi.github.io)
- 📁 **Repositorio**: [github.com/cjhirashi/cjhirashi.github.io](https://github.com/cjhirashi/cjhirashi.github.io)
- ⚡ **Estado**: Activo con GitHub Pages
- 🔄 **Auto-deploy**: Habilitado en rama `main`

### **🔧 Configuración GitHub Pages Actual**

- ✅ **Source**: Deploy from branch `main`
- ✅ **Folder**: `/ (root)`
- ✅ **Custom domain**: No configurado (usando subdomain de GitHub)
- ✅ **HTTPS**: Habilitado automáticamente

### **📝 Para Hacer Cambios**

Cualquier modificación al repositorio se desplegará automáticamente:

```bash
# Hacer cambios locales
git add .
git commit -m "Update: descripción del cambio"
git push origin main

# GitHub Pages se actualiza automáticamente en 1-2 minutos
```

### **🌍 Configurar Dominio Personalizado (Opcional)**

Si quieres usar un dominio propio como `carlosjhirashi.com`:

1. **Compra un dominio**
2. **Configura DNS** apuntando a GitHub:
   ```
   A Records:
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```
3. **En GitHub**: Settings → Pages → Custom domain → Agregar tu dominio
4. **GitHub generará automáticamente** el certificado SSL

### **📊 Monitoreo**

- **Último deploy**: Se puede ver en la pestaña "Actions" del repositorio
- **Status**: GitHub muestra si el deployment fue exitoso
- **Logs**: Disponibles en caso de errores

### **🚀 Alternativas de Deployment**

Si en el futuro quieres cambiar de plataforma:

#### **Netlify** (Más features)
1. Conectar repositorio GitHub
2. Auto-deploy configurado
3. Formularios y funciones serverless disponibles

#### **Vercel** (Optimizado para performance)
1. Import desde GitHub
2. Edge functions disponibles
3. Analytics integrado

## 📱 Responsive Design

El portafolio está optimizado para:
- 📱 **Móviles**: 320px - 768px
- 📊 **Tablets**: 768px - 1024px  
- 🖥️ **Desktop**: 1024px+

Las características responsive incluyen:
- Navigation menu adaptable
- Grid layouts flexibles
- Tipografía escalable
- Imágenes responsive

## 🔧 Troubleshooting

### **❌ Los datos no cargan**
- **Verifica** que los archivos JSON estén en la carpeta `data/`
- **Ejecuta en un servidor** (no como archivo local)
- **Revisa la consola** del navegador para errores

### **❌ Los iconos no aparecen**
- **Verifica** que el nombre del icono en JSON coincida con `script.js`
- **Revisa** que el SVG esté bien formateado

### **❌ Los estilos no se aplican**
- **Confirma** que `styles.css` esté en la misma carpeta que `index.html`
- **Limpia el caché** del navegador (Ctrl+F5)

## 🚀 Optimizaciones Futuras

### **Ideas para Expandir**:
- 📊 **Métricas de GitHub**: API para mostrar estadísticas automáticas
- 🌍 **Internacionalización**: Soporte para múltiples idiomas
- 📝 **Blog integrado**: Sistema de posts con Markdown
- 🎨 **Más temas**: Temas personalizados adicionales
- 📈 **Analytics**: Integración con Google Analytics
- 🔍 **SEO avanzado**: Structured data y Open Graph

## 📄 Licencia

Este proyecto está bajo la **Licencia MIT**. Puedes usarlo, modificarlo y distribuirlo libremente.

## 🙋‍♂️ Soporte

Si encuentras algún problema o tienes sugerencias:

1. **Revisa el troubleshooting** arriba
2. **Verifica que todos los archivos** estén en su lugar
3. **Consulta la documentación** de cada sección

---

## 📋 Checklist de Deployment

- [ ] ✅ Todos los archivos JSON configurados
- [ ] ✅ Información personal actualizada
- [ ] ✅ Proyectos agregados con enlaces correctos
- [ ] ✅ Iconos funcionando correctamente
- [ ] ✅ Temas funcionando (claro/oscuro/sistema)
- [ ] ✅ Responsive design probado
- [ ] ✅ Enlaces de contacto verificados
- [ ] ✅ Meta tags actualizados
- [ ] ✅ Subido a repositorio de Git
- [ ] ✅ Deployed a plataforma de hosting

¡Tu portafolio profesional está listo! 🎉