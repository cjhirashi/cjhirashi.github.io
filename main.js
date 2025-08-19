/**
 * Utilidades y carga dinámica de secciones
 * Este archivo se encarga de la configuración del tema,
 * manejo del menú y construcción de secciones a partir de
 * archivos JSON externos. Separar la lógica facilita futuras
 * adecuaciones.
 */

// Año dinámico
document.getElementById('year').textContent = new Date().getFullYear();

// Tema claro/oscuro/sistema
const themeSelect = document.getElementById('theme-select');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
function setTheme(mode) {
  if (mode === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
  } else if (mode === 'dark') {
    document.documentElement.removeAttribute('data-theme');
  } else {
    prefersDark.matches
      ? document.documentElement.removeAttribute('data-theme')
      : document.documentElement.setAttribute('data-theme', 'light');
  }
}
const savedTheme = localStorage.getItem('theme') || 'system';
themeSelect.value = savedTheme;
setTheme(savedTheme);
themeSelect.addEventListener('change', (e) => {
  const val = e.target.value;
  localStorage.setItem('theme', val);
  setTheme(val);
});
prefersDark.addEventListener('change', () => {
  if ((localStorage.getItem('theme') || 'system') === 'system') {
    setTheme('system');
  }
});

// cerrar menú al hacer click fuera (móvil)
document.addEventListener('click', (e) => {
  const menu = document.querySelector('.menu');
  const toggle = document.querySelector('.menu-toggle');
  if (!menu || !toggle) return;
  const clickInside = menu.contains(e.target) || toggle.contains(e.target);
  if (!clickInside) menu.classList.remove('show');
});

// accesibilidad: cerrar con Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.querySelector('.menu')?.classList.remove('show');
  }
});

/* =========================================================
   Carga dinámica de secciones desde archivos JSON
   Las funciones de construcción generan el HTML necesario
   para cada sección a partir de los datos proporcionados.
   ========================================================= */

// Helper genérico para cargar JSON
function loadJSON(url, builder) {
  fetch(url)
    .then(res => res.json())
    .then(builder)
    .catch(err => console.error(`Error al cargar ${url}`, err));
}

// Construye la sección de Habilidades
function buildSkills(data) {
  const section = document.getElementById('habilidades');
  let html = '<h2 class="section-title">🧠 Habilidades</h2><div class="grid-3">';
  data.forEach(cat => {
    html += `\n        <div class="meta-card">\n          <div class="small">${cat.titulo}</div>\n          <div class="chips">\n            ${cat.items.map(item => `<span class=\"chip\">${item}</span>`).join('')}\n          </div>\n        </div>`;
  });
  html += '</div>';
  section.innerHTML = html;
}

// Construye la sección de Proyectos
function buildProjects(data) {
  const section = document.getElementById('proyectos');
  let html = '<h2 class="section-title">🧩 Proyectos</h2><div class="cards">';
  data.forEach(p => {
    html += `\n        <article class="card">\n          <div class="thumb" role="img" aria-label="${p.thumb}"></div>\n          <div class="card-body">\n            <h3>${p.titulo}</h3>\n            <p class="muted">${p.descripcion}</p>\n            <div class="tags">\n              ${p.tags.map(tag => `<span class=\"tag\">${tag}</span>`).join('')}\n            </div>\n            <div class="card-actions">\n              <a class="btn" href="${p.codigo}" target="_blank" rel="noopener">Código</a>\n              ${p.demo ? `<a class=\"btn alt\" href="${p.demo}" target="_blank" rel="noopener">Demo</a>` : ''}\n            </div>\n          </div>\n        </article>`;
  });
  html += '</div><p class="small muted" style="margin-top:.6rem">Tip: puedes reemplazar las imágenes de portada (Unsplash) con capturas de tus notebooks o dashboards.</p>';
  section.innerHTML = html;
}

// Construye la sección de Experiencia
function buildExperience(data) {
  const section = document.getElementById('experiencia');
  let html = '<h2 class="section-title">🧭 Experiencia</h2><div class="timeline">';
  data.forEach(e => {
    html += `\n        <div class="t-item">\n          <div class="t-title">${e.empresa} · ${e.puesto}</div>\n          <div class="t-role">${e.periodo}</div>\n          <ul class="small">\n            ${e.logros.map(l => `<li>${l}</li>`).join('')}\n          </ul>\n        </div>`;
  });
  html += '</div>';
  section.innerHTML = html;
}

// Construye la sección de Educación
function buildEducation(data) {
  const section = document.getElementById('educacion');
  let html = '<h2 class="section-title">🎓 Educación</h2><div class="grid-2">';
  data.forEach(e => {
    html += `\n        <div class="meta-card">\n          <b>${e.institucion}</b>\n          <div class="small">${e.detalle}</div>\n        </div>`;
  });
  html += '</div>';
  section.innerHTML = html;
}

// Cargar datos y construir secciones
loadJSON('habilidades.json', buildSkills);
loadJSON('proyectos.json', buildProjects);
loadJSON('experiencia.json', buildExperience);
loadJSON('educacion.json', buildEducation);
