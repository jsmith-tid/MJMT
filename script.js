// Form submission handling and language routing

document.addEventListener('DOMContentLoaded', function() {
    // ===== Language Selection =====
    const langToggle = document.getElementById('lang-toggle');
    const langDropdown = document.getElementById('lang-dropdown');
    const langOptions = document.querySelectorAll('.lang-option');

    const pageLang = document.documentElement.lang && document.documentElement.lang.startsWith('th') ? 'th' : 'en';
    updateLanguageDisplay(pageLang);

    function getPageKey() {
        const path = window.location.pathname;
        const file = path.substring(path.lastIndexOf('/') + 1) || 'index.html';
        const hash = window.location.hash;

        if (file === 'coaches.html') return 'coaches';
        if (file === 'gallery.html') return 'gallery';
        if (file === 'overseas.html') return 'overseas';
        if (file === 'training.html') return 'training';
        if (file === 'enquire.html') return 'enquire';
        if (hash === '#packages') return 'training';
        if (hash === '#inquiry-form') return 'enquire';
        return 'home';
    }

    function getLanguageUrl(lang) {
        const isThaiPage = window.location.pathname.includes('/th/');
        const pageKey = getPageKey();
        const thaiUrls = {
            home: 'index.html',
            training: 'training.html',
            coaches: 'coaches.html',
            gallery: 'gallery.html',
            overseas: 'overseas.html',
            enquire: 'enquire.html'
        };
        const englishUrls = {
            home: '../index.html',
            training: '../index.html#packages',
            coaches: '../coaches.html',
            gallery: '../gallery.html',
            overseas: '../overseas.html',
            enquire: '../index.html#inquiry-form'
        };

        if (lang === 'th') {
            return isThaiPage ? thaiUrls[pageKey] : `th/${thaiUrls[pageKey]}`;
        }

        if (lang === 'en') {
            return isThaiPage ? englishUrls[pageKey] : (pageKey === 'home' ? 'index.html' : englishUrls[pageKey].replace('../', ''));
        }

        return null;
    }

    if (langToggle && langDropdown) {
        langToggle.addEventListener('click', function() {
            langDropdown.classList.toggle('active');
        });

        document.addEventListener('click', function(e) {
            if (!e.target.closest('.language-selector')) {
                langDropdown.classList.remove('active');
            }
        });
    }

    langOptions.forEach(option => {
        option.addEventListener('click', function() {
            const selectedLang = this.getAttribute('data-lang');
            const targetUrl = getLanguageUrl(selectedLang);

            if (targetUrl) {
                localStorage.setItem('selectedLanguage', selectedLang);
                window.location.href = targetUrl;
                return;
            }

            // Other languages are shown in the selector for the demo but are not built yet.
            updateLanguageDisplay(pageLang);
            if (langDropdown) langDropdown.classList.remove('active');
        });
    });

    function updateLanguageDisplay(lang) {
        if (!langToggle) return;
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

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    const form = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            const formData = new FormData(form);
            const message = {
                name: formData.get('name'),
                email: formData.get('email'),
                phone: formData.get('phone'),
                country: formData.get('country'),
                experience: formData.get('experience'),
                package: formData.get('package'),
                dates: formData.get('dates'),
                message: formData.get('message'),
                page_language: pageLang,
                timestamp: new Date().toISOString()
            };

            fetch('https://formspree.io/f/myzerkny', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(message)
            })
            .then(response => {
                if (response.ok) {
                    if (formMessage) {
                        formMessage.className = 'form-message success';
                        formMessage.style.display = 'block';
                        formMessage.textContent = pageLang === 'th'
                            ? '✓ ขอบคุณครับ/ค่ะ เราจะติดต่อกลับภายใน 24 ชั่วโมง'
                            : '✓ Thank you! We\'ll be in touch within 24 hours.';
                    }
                    form.reset();
                    setTimeout(() => {
                        if (formMessage) formMessage.style.display = 'none';
                    }, 5000);
                } else {
                    throw new Error('Form submission failed');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                if (formMessage) {
                    formMessage.className = 'form-message error';
                    formMessage.style.display = 'block';
                    formMessage.textContent = pageLang === 'th'
                        ? 'ส่งแบบฟอร์มไม่สำเร็จ กรุณาลองอีกครั้งหรือส่งอีเมลโดยตรง'
                        : 'Error submitting form. Please try again or email us directly.';
                }
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
