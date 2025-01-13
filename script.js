// Use Cases Data
const useCases = [
    {
        title: "Marketing and Sales",
        icon: "mail",
        items: [
            "Writing e-mails, marketing copy and social media posts",
            "Acting as a sales assistant",
            "Creating images, audio and music for advertising"
        ]
    },
    {
        title: "Communication",
        icon: "message-square",
        items: [
            "Managing e-mail and other communications",
            "Taking, summarizing and documenting meeting notes"
        ]
    },
    {
        title: "Process Automation",
        icon: "cog",
        items: [
            "Acting as a customer service agent",
            "Centralizing and simplifying access to company knowledge"
        ]
    },
    {
        title: "Analysis",
        icon: "bar-chart-3",
        items: [
            "​Reviewing and analyzing documents",
            "Analyzing data and reporting",
            "Tracking and reporting on competitor activity and news"
        ]
    },
    {
        title: "Strategy",
        icon: "brain",
        items: [
            "Consulting on business strategy and tactics"
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