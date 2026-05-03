// Use Cases Data
const useCases = [
    {
        title: "Prospecting",
        icon: "search",
        items: [
            "Identify prospective businesses and organizations, then research relevant contacts",
            "Find people expressing a need for your services"
        ]
    },
    {
        title: "Marketing and Sales",
        icon: "mail",
        items: [
            "Create emails, marketing copy and social media posts",
            "Support sales outreach, follow-up and customer communication",
            "Generate images, audio and music for advertising"
        ]
    },
    {
        title: "Communication",
        icon: "message-square",
        items: [
            "Manage your inbox and keep you informed of important messages",
            "Take, summarize and document meeting notes"
        ]
    },
    {
        title: "Process Automation",
        icon: "cog",
        items: [
            "Navigate websites and portals to capture information or respond to opportunities",
            "Replace manual tasks that are hard to scale",
            "Provide basic customer support and triage"
        ]
    },
    {
        title: "Analysis",
        icon: "bar-chart-3",
        items: [
            "Review and analyze documents",
            "Make sense of spreadsheets, sales reports, and other business data",
            "Track and report on competitor activity and news"
        ]
    },
    {
        title: "Strategy",
        icon: "brain",
        items: [
            "Consult on business strategy and tactics"
        ]
    }
];

// Render use cases cards
function renderUseCases() {
    const cardsGrid = document.querySelector('#use-cases .cards-grid');
    if (!cardsGrid) return;

    useCases.forEach(useCase => {
        const card = document.createElement('article');
        card.className = 'card';

        card.innerHTML = `
            <div class="card-header">
                <i data-lucide="${useCase.icon}"></i>
                <h3 class="card-title">${useCase.title}</h3>
            </div>
            <ul class="card-list">
                ${useCase.items.map(item => `<li>${item}</li>`).join('')}
            </ul>
        `;

        cardsGrid.appendChild(card);
    });

    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

// Smooth scrolling for navigation links + close mobile nav after click
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });

                // Close mobile menu after navigating
                const navLinks = document.getElementById('primary-nav');
                const navToggle = document.querySelector('.nav-toggle');
                if (navLinks && navLinks.classList.contains('open')) {
                    navLinks.classList.remove('open');
                    if (navToggle) navToggle.setAttribute('aria-expanded', 'false');
                }
            }
        });
    });
}

// Mobile nav toggle
function initMobileNav() {
    const toggle = document.querySelector('.nav-toggle');
    const navLinks = document.getElementById('primary-nav');
    if (!toggle || !navLinks) return;

    toggle.addEventListener('click', () => {
        const isOpen = navLinks.classList.toggle('open');
        toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        toggle.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
    });
}

// Scroll-spy: highlight nav link of section currently in view
function initScrollSpy() {
    const sections = document.querySelectorAll('main section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    if (!sections.length || !navLinks.length) return;

    const linkMap = new Map();
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
            linkMap.set(href.substring(1), link);
        }
    });

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.id;
                    navLinks.forEach(link => link.classList.remove('active'));
                    const activeLink = linkMap.get(id);
                    if (activeLink) activeLink.classList.add('active');
                }
            });
        },
        {
            rootMargin: '-40% 0px -55% 0px',
            threshold: 0
        }
    );

    sections.forEach(section => observer.observe(section));
}

// Initialize everything
document.addEventListener('DOMContentLoaded', () => {
    // Initial Lucide icon pass for static markup
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    initMobileNav();
    initSmoothScroll();

    // Render dynamic content + re-init icons, then start scroll-spy
    setTimeout(() => {
        renderUseCases();
        initScrollSpy();
    }, 50);
});
