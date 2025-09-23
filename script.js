// SVG Icons Collection
const icons = {
    sun: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>',
    moon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>',
    monitor: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="3" rx="2"/><path d="m8 21 4-4 4 4"/></svg>',
    database: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="m3 5v14c0 3 4 6 9 6s9-3 9-6V5"/><path d="m3 12c0 3 4 6 9 6s9-3 9-6"/></svg>',
    settings: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.15-.09a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.39a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>',
    award: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="m9 12 2 2 4-4"/><path d="m21 17-9 4-9-4"/><path d="m21 13-9 4-9-4"/><path d="M21 9l-9 4-9-4"/></svg>',
    code: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16,18 22,12 16,6"/><polyline points="8,6 2,12 8,18"/></svg>',
    'code-2': '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>',
    layout: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><line x1="3" x2="21" y1="9" y2="9"/><line x1="9" x2="9" y1="21" y2="9"/></svg>',
    palette: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>',
    'bar-chart': '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="20" y2="10"/><line x1="18" x2="18" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="16"/></svg>',
    calculator: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="20" x="4" y="2" rx="2"/><line x1="8" x2="16" y1="6" y2="6"/><line x1="16" x2="16" y1="14" y2="18"/><path d="M16 10h.01"/><path d="M12 10h.01"/><path d="M8 10h.01"/><path d="M12 14h.01"/><path d="M8 14h.01"/><path d="M12 18h.01"/><path d="M8 18h.01"/></svg>',
    'pie-chart': '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="m22 12-10-10v10z"/></svg>',
    'trending-up': '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22,7 13.5,15.5 8.5,10.5 2,17"/><polyline points="16,7 22,7 22,13"/></svg>',
    brain: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a3 3 0 0 0-3 3 4 4 0 0 0-1 2v1.5a2 2 0 1 0 4 0V8a3 3 0 0 1 3-3 3 3 0 0 1 3 3v.5a2 2 0 1 0 4 0V8a4 4 0 0 0-1-2 3 3 0 0 0-3-3 3 3 0 0 0-3 0z"/><path d="M9 18a2 2 0 1 1-4 0v-1a2 2 0 1 1 4 0v1z"/><path d="M19 18a2 2 0 1 0-4 0v-1a2 2 0 1 0 4 0v1z"/></svg>',
    'line-chart': '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>',
    'git-branch': '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="6" x2="6" y1="3" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="m18 9a9 9 0 0 1-9 9"/></svg>',
    github: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>',
    'book-open': '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>',
    wifi: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.55a11 11 0 0 1 14 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" x2="12.01" y1="20" y2="20"/></svg>',
    network: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 12h6"/><path d="M9 16h6"/><path d="M9 8h6"/><path d="M3 12h2"/><path d="M19 12h2"/><rect width="18" height="18" x="3" y="3" rx="2"/></svg>',
    radio: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9"/><path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5"/><circle cx="12" cy="12" r="2"/><path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5"/><path d="M19.1 4.9C23 8.8 23 15.2 19.1 19.1"/></svg>',
    edit: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-1"/><path d="M20.385 6.585a2.1 2.1 0 0 0-2.97-2.97L9 12v3h3l8.385-8.415z"/><path d="m16 5 3 3"/></svg>',
    'external-link': '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>',
    mail: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-10 5L2 7"/></svg>',
    linkedin: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>',
    'map-pin': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>'
};

// Data Storage
let portfolioData = {};

// Function to replace icon placeholders
function replaceIcons() {
    document.querySelectorAll('[data-icon]').forEach(element => {
        const iconName = element.getAttribute('data-icon');
        if (icons[iconName]) {
            element.innerHTML = icons[iconName];
        }
    });
}

// Theme Management
class ThemeManager {
    constructor() {
        this.currentTheme = localStorage.getItem('theme') || 'system';
        this.init();
    }

    init() {
        this.applyTheme(this.currentTheme);
        this.setupEventListeners();
        this.updateActiveButton();
    }

    setupEventListeners() {
        document.querySelectorAll('.theme-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const theme = btn.getAttribute('data-theme');
                this.setTheme(theme);
            });
        });

        // Listen for system theme changes
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
            if (this.currentTheme === 'system') {
                this.applyTheme('system');
            }
        });
    }

    setTheme(theme) {
        this.currentTheme = theme;
        localStorage.setItem('theme', theme);
        this.applyTheme(theme);
        this.updateActiveButton();
    }

    applyTheme(theme) {
        let actualTheme = theme;
        
        if (theme === 'system') {
            actualTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        }

        document.documentElement.setAttribute('data-theme', actualTheme);
    }

    updateActiveButton() {
        document.querySelectorAll('.theme-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-theme="${this.currentTheme}"]`).classList.add('active');
    }
}

// Data Loader
class DataLoader {
    constructor() {
        this.dataUrls = {
            profile: 'data/profile.json',
            about: 'data/about.json',
            techStack: 'data/tech-stack.json',
            projects: 'data/projects.json',
            contact: 'data/contact.json',
            config: 'data/config.json'
        };
    }

    async loadData() {
        try {
            // Load all JSON files in parallel
            const promises = Object.entries(this.dataUrls).map(async ([key, url]) => {
                try {
                    const response = await fetch(url);
                    if (!response.ok) {
                        throw new Error(`Failed to load ${url}: ${response.status}`);
                    }
                    const data = await response.json();
                    return [key, data];
                } catch (error) {
                    console.warn(`Error loading ${url}:`, error);
                    // Return fallback data for this section
                    return [key, this.getFallbackData(key)];
                }
            });

            const results = await Promise.all(promises);
            
            // Convert array of [key, value] pairs to object
            const portfolioData = Object.fromEntries(results);
            
            // Update document title and meta description from config
            if (portfolioData.config && portfolioData.config.site) {
                document.title = portfolioData.config.site.title;
                const metaDescription = document.querySelector('meta[name="description"]');
                if (metaDescription) {
                    metaDescription.content = portfolioData.config.site.description;
                }
            }
            
            return portfolioData;
        } catch (error) {
            console.error('Error loading portfolio data:', error);
            // Return complete fallback data
            return this.getFallbackPortfolioData();
        }
    }

    getFallbackData(key) {
        const fallbackData = {
            profile: {
                name: "Carlos Jiménez Hirashi",
                title: "Científico de Datos Jr.",
                subtitle: "Transformo datos en soluciones prácticas y optimizadas",
                badges: [
                    { text: "Data Scientist", icon: "database" },
                    { text: "HVAC Expert", icon: "settings" }
                ]
            },
            about: {
                text: "Científico de datos con experiencia en automatización HVAC.",
                stats: [
                    { number: "15+", label: "Años de Experiencia" },
                    { number: "5", label: "Proyectos ML" }
                ]
            },
            techStack: [
                {
                    category: "Lenguajes",
                    items: [
                        { name: "Python", icon: "code" },
                        { name: "SQL", icon: "database" }
                    ]
                }
            ],
            projects: [
                {
                    title: "Proyecto Demo",
                    description: "Proyecto de demostración",
                    technologies: ["Python"],
                    github: "#",
                    features: ["Funcionalidad básica"]
                }
            ],
            contact: [
                {
                    title: "Email",
                    info: "cjhirashi@gmail.com",
                    icon: "mail",
                    link: "mailto:cjhirashi@gmail.com"
                }
            ],
            config: {
                site: {
                    title: "Carlos Jiménez Hirashi - Data Scientist",
                    description: "Científico de Datos Jr.",
                    logo: "CJH"
                },
                navigation: [
                    { text: "Sobre mí", href: "#about" },
                    { text: "Proyectos", href: "#projects" },
                    { text: "Contacto", href: "#contact" }
                ],
                footer: {
                    text: "© 2025 Carlos Jiménez Hirashi"
                },
                settings: {
                    enableAnimations: true,
                    defaultTheme: "system"
                }
            }
        };

        return fallbackData[key] || {};
    }

    getFallbackPortfolioData() {
        return {
            profile: this.getFallbackData('profile'),
            about: this.getFallbackData('about'),
            techStack: this.getFallbackData('techStack'),
            projects: this.getFallbackData('projects'),
            contact: this.getFallbackData('contact'),
            config: this.getFallbackData('config')
        };
    }
}

// Portfolio Renderer
class PortfolioRenderer {
    constructor(data) {
        this.data = data;
    }

    render() {
        this.renderHero();
        this.renderAbout();
        this.renderTechStack();
        this.renderProjects();
        this.renderContact();
        this.renderFooter();
    }

    renderHero() {
        const { profile } = this.data;
        
        document.getElementById('hero-name').textContent = profile.name;
        document.getElementById('hero-subtitle').textContent = `${profile.title} · ${profile.subtitle}`;
        
        const badgesContainer = document.getElementById('hero-badges');
        badgesContainer.innerHTML = profile.badges.map(badge => `
            <div class="badge">
                <span data-icon="${badge.icon}"></span>
                ${badge.text}
            </div>
        `).join('');
    }

    renderAbout() {
        const { about } = this.data;
        
        document.getElementById('about-text').textContent = about.text;
        
        const statsContainer = document.getElementById('about-stats');
        statsContainer.innerHTML = about.stats.map(stat => `
            <div class="stat-card">
                <div class="stat-number">${stat.number}</div>
                <div class="stat-label">${stat.label}</div>
            </div>
        `).join('');
    }

    renderTechStack() {
        const { techStack } = this.data;
        
        const techGrid = document.getElementById('tech-grid');
        techGrid.innerHTML = techStack.map(category => `
            <div class="tech-category">
                <h3>${category.category}</h3>
                <div class="tech-items">
                    ${category.items.map(item => `
                        <div class="tech-badge">
                            <span data-icon="${item.icon}"></span>
                            ${item.name}
                        </div>
                    `).join('')}
                </div>
            </div>
        `).join('');
    }

    renderProjects() {
        const { projects } = this.data;
        
        const projectsGrid = document.getElementById('projects-grid');
        projectsGrid.innerHTML = projects.map(project => `
            <div class="project-card">
                <div class="project-header">
                    <div>
                        <h3 class="project-title">${project.title}</h3>
                        <div class="project-tech">
                            ${project.technologies.map(tech => `
                                <span class="project-tech-badge">${tech}</span>
                            `).join('')}
                        </div>
                    </div>
                    <div class="project-links">
                        <a href="${project.github}" class="project-link" target="_blank" title="Ver en GitHub">
                            <span data-icon="github"></span>
                        </a>
                        ${project.demo ? `
                            <a href="${project.demo}" class="project-link" target="_blank" title="Ver demo">
                                <span data-icon="external-link"></span>
                            </a>
                        ` : ''}
                    </div>
                </div>
                <p class="project-description">${project.description}</p>
                <ul style="color: var(--text-secondary); margin-top: 1rem; padding-left: 1.25rem;">
                    ${project.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
            </div>
        `).join('');
    }

    renderContact() {
        const { contact } = this.data;
        
        const contactGrid = document.getElementById('contact-grid');
        contactGrid.innerHTML = contact.map(item => `
            <div class="contact-card">
                <div class="contact-icon">
                    <span data-icon="${item.icon}"></span>
                </div>
                <h3 class="contact-title">${item.title}</h3>
                <p class="contact-info">
                    ${item.link ? `
                        <a href="${item.link}" class="contact-link" target="_blank">${item.info}</a>
                    ` : item.info}
                </p>
            </div>
        `).join('');
    }

    renderFooter() {
        const { config } = this.data;
        const footerText = config && config.footer ? config.footer.text : "© 2025 Carlos Jiménez Hirashi";
        document.getElementById('footer-text').textContent = footerText;
    }
}

// App Initialization
class PortfolioApp {
    constructor() {
        this.themeManager = new ThemeManager();
        this.dataLoader = new DataLoader();
        this.init();
    }

    async init() {
        try {
            // Load data
            const data = await this.dataLoader.loadData();
            
            // Render portfolio
            const renderer = new PortfolioRenderer(data);
            renderer.render();
            
            // Replace icon placeholders with SVGs
            replaceIcons();
            
            // Hide loading and show content
            this.showContent();
            
            // Setup scroll effects
            this.setupScrollEffects();
            
        } catch (error) {
            console.error('Error initializing portfolio:', error);
            this.showError();
        }
    }

    showContent() {
        document.getElementById('loading').style.display = 'none';
        document.getElementById('header').style.display = 'block';
        document.getElementById('main-content').style.display = 'block';
        document.getElementById('footer').style.display = 'block';
        
        // Animate content in
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.5s ease';
        
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
    }

    showError() {
        document.getElementById('loading').innerHTML = `
            <div style="text-align: center; color: var(--text-secondary);">
                <h2>Error al cargar el portafolio</h2>
                <p>Por favor, recarga la página</p>
                <button onclick="location.reload()" style="
                    background: var(--text-accent);
                    color: white;
                    border: none;
                    padding: 0.75rem 1.5rem;
                    border-radius: 0.5rem;
                    cursor: pointer;
                    margin-top: 1rem;
                ">Recargar</button>
            </div>
        `;
    }

    setupScrollEffects() {
        // Header scroll effect
        let lastScrollY = window.scrollY;
        
        window.addEventListener('scroll', () => {
            const header = document.getElementById('header');
            const currentScrollY = window.scrollY;
            
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                // Scrolling down
                header.style.transform = 'translateY(-100%)';
            } else {
                // Scrolling up
                header.style.transform = 'translateY(0)';
            }
            
            lastScrollY = currentScrollY;
        });

        // Intersection Observer for animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe sections for animation
        document.querySelectorAll('.section').forEach(section => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(30px)';
            section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(section);
        });

        // Observe cards for staggered animation
        document.querySelectorAll('.project-card, .tech-category, .contact-card').forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
            observer.observe(card);
        });
    }
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new PortfolioApp();
});

// Smooth scrolling for navigation links
document.addEventListener('click', (e) => {
    if (e.target.matches('a[href^="#"]')) {
        e.preventDefault();
        const target = document.querySelector(e.target.getAttribute('href'));
        if (target) {
            const headerHeight = document.getElementById('header').offsetHeight;
            const targetPosition = target.offsetTop - headerHeight - 20;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    }
});

// Keyboard navigation for accessibility
document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-navigation');
});