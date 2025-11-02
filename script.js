// Smooth Scrolling für Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar Scroll-Effekt
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
    }

    lastScroll = currentScroll;
});

// Kontaktformular Handling
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Formulardaten sammeln
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            company: document.getElementById('company').value,
            message: document.getElementById('message').value
        };

        // Hier würde normalerweise eine API-Anfrage erfolgen
        console.log('Formulardaten:', formData);

        // Erfolgs-Nachricht anzeigen
        showMessage('Vielen Dank für Ihre Nachricht! Wir werden uns in Kürze bei Ihnen melden.', 'success');

        // Formular zurücksetzen
        contactForm.reset();
    });
}

// Funktion zum Anzeigen von Nachrichten
function showMessage(message, type = 'success') {
    // Überprüfen, ob bereits eine Nachricht existiert
    let messageDiv = document.querySelector('.message-notification');

    if (!messageDiv) {
        messageDiv = document.createElement('div');
        messageDiv.className = 'message-notification';
        document.body.appendChild(messageDiv);
    }

    messageDiv.textContent = message;
    messageDiv.className = `message-notification ${type} show`;

    // Nach 5 Sekunden ausblenden
    setTimeout(() => {
        messageDiv.classList.remove('show');
    }, 5000);
}

// Scroll-Animation für Elemente
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

// Alle animierbaren Elemente beobachten
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.service-card, .benefit-item, .reference-card');

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Navigation Highlight beim Scrollen
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-menu a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// CSS für die Nachrichtenanzeige dynamisch hinzufügen
const style = document.createElement('style');
style.textContent = `
    .message-notification {
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        background-color: #10b981;
        color: white;
        font-weight: 500;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        opacity: 0;
        transform: translateX(400px);
        transition: all 0.3s ease;
        z-index: 9999;
        max-width: 400px;
    }

    .message-notification.show {
        opacity: 1;
        transform: translateX(0);
    }

    .message-notification.error {
        background-color: #ef4444;
    }

    .nav-menu a.active {
        color: var(--primary-color);
        position: relative;
    }

    .nav-menu a.active::after {
        content: '';
        position: absolute;
        bottom: -5px;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: var(--primary-color);
    }
`;
document.head.appendChild(style);

// Mobile Menu Toggle (optional, falls später ein Burger-Menü gewünscht wird)
function createMobileMenu() {
    const navbar = document.querySelector('.navbar .container');
    const navMenu = document.querySelector('.nav-menu');

    // Prüfen ob Mobile
    if (window.innerWidth <= 768) {
        console.log('Mobile Ansicht erkannt');
        // Hier könnte später Burger-Menu-Logik implementiert werden
    }
}

// Bei Seitenladung und Größenänderung prüfen
window.addEventListener('load', createMobileMenu);
window.addEventListener('resize', createMobileMenu);
