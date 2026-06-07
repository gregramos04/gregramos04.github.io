// Smooth scrolling for navigation links
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

// Contact form submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const message = this.querySelector('textarea').value;
        
        // Create mailto link
        const mailtoLink = `mailto:rgreg8377@gmail.com?subject=Portfolio Inquiry from ${encodeURIComponent(name)}&body=${encodeURIComponent('Name: ' + name + '\n\nEmail: ' + email + '\n\nMessage:\n' + message)}`;
        
        // Show success message
        alert('Thank you for your message! Opening email client...');
        
        // Open default email client
        window.location.href = mailtoLink;
        
        // Reset form
        this.reset();
    });
}

// Add scroll animation for elements
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all service cards and competency items
document.querySelectorAll('.service-card, .competency, .skill-category').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// Mobile menu toggle (if needed in future)
function setupMobileMenu() {
    // Add mobile menu functionality here if needed
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    setupMobileMenu();
    console.log('Portfolio loaded successfully!');
});