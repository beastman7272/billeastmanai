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

// Initialize Lucide icons
if (typeof lucide !== 'undefined') {
    lucide.createIcons();
}

// Render use cases cards
function renderUseCases() {
    const cardsGrid = document.querySelector('.cards-grid');
    if (!cardsGrid) return;
    
    useCases.forEach(useCase => {
        const card = document.createElement('div');
        card.className = 'card';
        
        const cardContent = `
            <div class="card-header">
                <i data-lucide="${useCase.icon}"></i>
                <h3 class="card-title gradient-text">${useCase.title}</h3>
            </div>
            <ul class="card-list">
                ${useCase.items.map(item => `<li>${item}</li>`).join('')}
            </ul>
        `;
        
        card.innerHTML = cardContent;
        cardsGrid.appendChild(card);
    });
    
    // Reinitialize icons for newly added elements
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    // Wait a brief moment to ensure Lucide is loaded
    setTimeout(() => {
        renderUseCases();
    }, 100);
}); 