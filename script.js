// Review prototype: never send enquiry data to the retained placeholder endpoint.
document.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu-toggle');
    const links = document.getElementById('nav-menu');
    if (menu && links) {
        const closeMenu = () => {
            links.classList.remove('is-open');
            menu.setAttribute('aria-expanded', 'false');
        };
        menu.addEventListener('click', () => {
            const open = menu.getAttribute('aria-expanded') !== 'true';
            menu.setAttribute('aria-expanded', String(open));
            links.classList.toggle('is-open', open);
        });
        links.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
        document.addEventListener('keydown', event => {
            if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') {
                closeMenu();
                menu.focus();
            }
        });
    }

    const form = document.getElementById('contact-form');
    if (form) {
        // Protect legacy forms too: attaching this handler never enables live delivery.
        form.addEventListener('submit', event => {
            event.preventDefault();
            if (!form.reportValidity()) return;
            const status = document.getElementById('form-message');
            if (status) {
                status.textContent = 'Demo only - enquiry not sent. Your training is not confirmed. No details have been transmitted or saved by this site.';
                status.focus();
            }
        });
        const submit = document.getElementById('demo-submit');
        if (submit) submit.disabled = false;
        const start = document.getElementById('start-date');
        const end = document.getElementById('end-date');
        const flexible = document.getElementById('flexible');
        if (start && end && flexible) {
            const validateDates = () => {
                end.setCustomValidity(!flexible.checked && start.value && end.value && end.value < start.value
                    ? 'Choose an end date on or after your start date.' : '');
            };
            start.addEventListener('input', validateDates);
            end.addEventListener('input', validateDates);
            flexible.addEventListener('change', () => {
                start.disabled = flexible.checked;
                end.disabled = flexible.checked;
                validateDates();
            });
        }
    }

    const dialog = document.getElementById('photo-dialog');
    if (dialog) {
        const image = dialog.querySelector('img');
        const caption = dialog.querySelector('.photo-caption');
        document.querySelectorAll('[data-photo]').forEach(button => {
            button.addEventListener('click', () => {
                image.src = button.dataset.photo;
                image.alt = button.querySelector('img').alt;
                caption.textContent = button.dataset.caption;
                dialog.showModal();
            });
        });
        dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
        dialog.addEventListener('click', event => {
            if (event.target === dialog) {
                const bounds = dialog.getBoundingClientRect();
                if (event.clientX < bounds.left || event.clientX > bounds.right ||
                    event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
            }
        });
    }

    document.querySelectorAll('.whatsapp-placeholder').forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            // Keep the requested placeholder URL without sending visitors to an invalid number.
            if (dialog) {
                dialog.querySelector('img').hidden = true;
                dialog.querySelector('.photo-caption').textContent = 'WhatsApp demo placeholder. A contact number has not been configured.';
                dialog.showModal();
            }
        });
    });
    if (dialog) dialog.addEventListener('close', () => {
        dialog.querySelector('img').hidden = false;
    });
});
