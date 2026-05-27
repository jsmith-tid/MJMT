// Form submission handling
document.addEventListener('DOMContentLoaded', function() {
    // ===== Language Selection =====
    const langToggle = document.getElementById('lang-toggle');
    const langDropdown = document.getElementById('lang-dropdown');
    const langOptions = document.querySelectorAll('.lang-option');
    
    // Load saved language preference or default to English
    let currentLang = localStorage.getItem('selectedLanguage') || 'en';
    updateLanguageDisplay(currentLang);
    
    // Toggle language dropdown
    langToggle.addEventListener('click', function() {
        langDropdown.classList.toggle('active');
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.language-selector')) {
            langDropdown.classList.remove('active');
        }
    });
    
    // Language option selection
    langOptions.forEach(option => {
        option.addEventListener('click', function() {
            const selectedLang = this.getAttribute('data-lang');
            currentLang = selectedLang;
            localStorage.setItem('selectedLanguage', selectedLang);
            updateLanguageDisplay(selectedLang);
            langDropdown.classList.remove('active');
            // TODO: Implement translation logic here when translations are ready
        });
    });
    
    function updateLanguageDisplay(lang) {
        const langMap = {
            'en': 'EN',
            'th': 'TH',
            'de': 'DE',
            'fr': 'FR',
            'ar': 'AR',
            'ru': 'RU',
            'zh': 'ZH'
        };
        langToggle.textContent = langMap[lang] || 'EN';
    }
    
    // ===== Mobile Menu Toggle =====
    const hamburger = document.getElementById('hamburger-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close menu when a link is clicked
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    const form = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            // Collect form data
            const formData = new FormData(form);
            
            // Create a message object
            const message = {
                name: formData.get('name'),
                email: formData.get('email'),
                phone: formData.get('phone'),
                experience: formData.get('experience'),
                package: formData.get('package'),
                message: formData.get('message'),
                timestamp: new Date().toISOString()
            };

            // Send to Formspree
            fetch('https://formspree.io/f/myzerkny', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(message)
            })
            .then(response => {
                if (response.ok) {
                    // Success
                    formMessage.className = 'form-message success';
                    formMessage.textContent = '✓ Thank you! We\'ll be in touch within 24 hours.';
                    form.reset();
                    
                    // Clear message after 5 seconds
                    setTimeout(() => {
                        formMessage.style.display = 'none';
                    }, 5000);
                } else {
                    throw new Error('Form submission failed');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                formMessage.className = 'form-message error';
                formMessage.textContent = 'Error submitting form. Please try again or email us directly.';
            });
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                document.querySelector(href).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
