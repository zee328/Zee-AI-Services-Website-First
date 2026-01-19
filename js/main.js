/**
 * Yorkshire Automation Services - Main JavaScript
 * Handles interactive features and user interactions
 */

/**
 * Mobile Menu Toggle
 */
function initMobileMenu() {
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    if (!menuBtn || !mobileMenu) return;

    menuBtn.addEventListener('click', () => {
        const isHidden = mobileMenu.classList.toggle('hidden');
        // Update ARIA attributes for accessibility
        menuBtn.setAttribute('aria-expanded', !isHidden);
        mobileMenu.setAttribute('aria-hidden', isHidden);
    });

    // Close menu when a link is clicked
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            menuBtn.setAttribute('aria-expanded', 'false');
            mobileMenu.setAttribute('aria-hidden', 'true');
        });
    });

    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
            menuBtn.setAttribute('aria-expanded', 'false');
            mobileMenu.setAttribute('aria-hidden', 'true');
            menuBtn.focus();
        }
    });
}

/**
 * Smooth Scroll for Navigation Links
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            
            // Only handle if href is not just "#"
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}

/**
 * Contact Form Handler
 */
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (!contactForm) return;

    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Get form data
        const formData = new FormData(contactForm);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            subject: formData.get('subject'),
            message: formData.get('message')
        };

        // Validate form data
        if (!validateContactForm(data)) {
            console.error('Form validation failed');
            return;
        }

        // Show success message
        showSuccessMessage('Message sent successfully! We\'ll be in touch soon.');

        // Reset form
        contactForm.reset();

        // In a real application, you would send this data to a server
        console.log('Form data:', data);
    });
}

/**
 * Validate Contact Form Data
 * @param {Object} data - Form data object
 * @returns {boolean} - True if valid, false otherwise
 */
function validateContactForm(data) {
    if (!data.name || data.name.trim() === '') {
        showErrorMessage('Please enter your name.');
        return false;
    }

    if (!data.email || !isValidEmail(data.email)) {
        showErrorMessage('Please enter a valid email address.');
        return false;
    }

    if (!data.subject || data.subject.trim() === '') {
        showErrorMessage('Please enter a subject.');
        return false;
    }

    if (!data.message || data.message.trim() === '') {
        showErrorMessage('Please enter a message.');
        return false;
    }

    return true;
}

/**
 * Validate Email Format
 * @param {string} email - Email address to validate
 * @returns {boolean} - True if valid, false otherwise
 */
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Show Success Message
 * @param {string} message - Success message to display
 */
function showSuccessMessage(message) {
    const notification = createNotification(message, 'success');
    document.body.appendChild(notification);

    // Auto-remove after 4 seconds
    setTimeout(() => {
        notification.remove();
    }, 4000);
}

/**
 * Show Error Message
 * @param {string} message - Error message to display
 */
function showErrorMessage(message) {
    const notification = createNotification(message, 'error');
    document.body.appendChild(notification);

    // Auto-remove after 4 seconds
    setTimeout(() => {
        notification.remove();
    }, 4000);
}

/**
 * Create Notification Element
 * @param {string} message - Message text
 * @param {string} type - Type of notification (success or error)
 * @returns {HTMLElement} - Notification element
 */
function createNotification(message, type) {
    const notification = document.createElement('div');
    
    const bgColor = type === 'success' ? 'bg-green-500' : 'bg-red-500';
    
    notification.className = `fixed top-4 right-4 ${bgColor} text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-fade-in`;
    notification.textContent = message;
    
    return notification;
}

/**
 * Add Scroll Animation for Elements
 */
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add appropriate animation class based on element type
                if (entry.target.classList.contains('service-card')) {
                    entry.target.classList.add('fade-in-up');
                } else if (entry.target.classList.contains('about-card')) {
                    entry.target.classList.add('slide-in-up');
                } else if (entry.target.classList.contains('why-choose-card')) {
                    entry.target.classList.add('zoom-in');
                } else {
                    entry.target.classList.add('fade-in-up');
                }
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all animatable elements
    document.querySelectorAll(
        'article, .service-card, .about-card, .why-choose-card, .contact-info-card, section > .grid > div'
    ).forEach(el => {
        observer.observe(el);
    });

    // Stagger animations for grid items
    const gridContainers = document.querySelectorAll('section > .grid, section > div > .grid');
    gridContainers.forEach((container) => {
        const items = container.querySelectorAll('> div');
        items.forEach((item, index) => {
            item.style.setProperty('--animation-order', index);
        });
    });
}

/**
 * Initialize Navbar Scroll Effect
 */
function initNavbarScrollEffect() {
    const navbar = document.querySelector('nav');
    
    if (!navbar) return;

    let lastScrollTop = 0;

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;

        if (scrollTop > 50) {
            navbar.classList.add('shadow-lg');
        } else {
            navbar.classList.remove('shadow-lg');
        }

        lastScrollTop = scrollTop;
    });
}

/**
 * Add Hover Animation Enhancement
 * Adds smooth hover effects to interactive elements
 */
function initHoverAnimations() {
    // Add smooth hover effects to all cards
    const cards = document.querySelectorAll('article, .service-card, .about-card, .why-choose-card, .contact-info-card');
    
    cards.forEach(card => {
        if (!card.classList.contains('card-lift')) {
            card.classList.add('card-lift');
        }
    });

    // Add smooth transitions to all buttons
    const buttons = document.querySelectorAll('button:not(.hero-btn-primary):not(.hero-btn-secondary)');
    
    buttons.forEach(button => {
        button.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
    });
}

/**
 * Add Stagger Effect to Grid Items
 * Creates a cascade effect for grid items on load
 */
function initGridStagger() {
    const gridContainers = document.querySelectorAll('.grid');
    
    gridContainers.forEach(container => {
        const items = container.querySelectorAll('> div, > article');
        items.forEach((item, index) => {
            if (item.style.animationDelay === '') {
                item.style.animationDelay = `${index * 0.1}s`;
            }
        });
    });
}

/**
 * Initialize All Features
 */
function initializeApp() {
    console.log('Yorkshire Automation Services - Initializing...');
    
    initMobileMenu();
    initSmoothScroll();
    initContactForm();
    initScrollAnimations();
    initNavbarScrollEffect();
    initHoverAnimations();
    initGridStagger();

    console.log('App initialized successfully!');
}

/**
 * Wait for DOM to be ready
 */
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    initializeApp();
}
