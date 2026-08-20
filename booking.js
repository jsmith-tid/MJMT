document.addEventListener('DOMContentLoaded', function () {
    const app = document.getElementById('booking-app');
    if (!app) return;

    const coaches = [
        { id: 'master-jud', name: 'Master Jud', price: 100 },
        { id: 'adam', name: 'Coach Adam', price: 50 },
        { id: 'nawaphon', name: 'Coach Nawaphon', price: 50 },
        { id: 'nin', name: 'Coach Nin', price: 50 },
        { id: 'noi', name: 'Coach Noi', price: 50 },
        { id: 'susun', name: 'Coach Susun', price: 50 }
    ];
    const programmes = {
        standard: { name: 'Standard 7-Day Intensive', price: 500 },
        elite: { name: 'Elite Coaching Week', price: 750 }
    };
    const times = Array.from({ length: 9 }, (_, index) => `${String(index + 9).padStart(2, '0')}:00`);
    const state = { type: '', sessions: [] };

    const programmeOptions = document.getElementById('programme-options');
    const sessionOptions = document.getElementById('session-options');
    const programmeDate = document.getElementById('programme-date');
    const sessionCoach = document.getElementById('session-coach');
    const availableCoach = document.getElementById('available-coach');
    const sessionDate = document.getElementById('session-date');
    const sessionTime = document.getElementById('session-time');
    const sessionBasket = document.getElementById('session-basket');
    const selectionError = document.getElementById('selection-error');

    function dateValue(date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    function phuketTomorrow() {
        const phuketNow = new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Bangkok' }));
        phuketNow.setHours(12, 0, 0, 0);
        phuketNow.setDate(phuketNow.getDate() + 1);
        return phuketNow;
    }

    function formatDate(value) {
        const parts = value.split('-').map(Number);
        return new Intl.DateTimeFormat('en-GB', {
            weekday: 'short', day: 'numeric', month: 'short', year: 'numeric'
        }).format(new Date(parts[0], parts[1] - 1, parts[2], 12));
    }

    function timeLabel(value) {
        const hour = Number(value.slice(0, 2));
        const end = hour + 1;
        const label = hour < 12 ? `${hour}:00am` : hour === 12 ? '12:00pm' : `${hour - 12}:00pm`;
        const endLabel = end < 12 ? `${end}:00am` : end === 12 ? '12:00pm' : `${end - 12}:00pm`;
        return `${label}–${endLabel}`;
    }

    function isAvailable(coachId, date, time) {
        const coachIndex = coaches.findIndex(coach => coach.id === coachId);
        const day = Number(date.slice(-2));
        const hour = Number(time.slice(0, 2));
        return (coachIndex * 3 + day + hour) % 5 !== 0;
    }

    function fillSelect(select, items, valueKey, label) {
        const previous = select.value;
        select.innerHTML = '';
        items.forEach(item => {
            const option = document.createElement('option');
            option.value = typeof valueKey === 'function' ? valueKey(item) : item[valueKey];
            option.textContent = label(item);
            select.appendChild(option);
        });
        if ([...select.options].some(option => option.value === previous)) select.value = previous;
    }

    function initialiseDates() {
        const firstDate = phuketTomorrow();
        programmeDate.min = dateValue(firstDate);
        programmeDate.value = dateValue(firstDate);
        const dates = Array.from({ length: 28 }, (_, index) => {
            const date = new Date(firstDate);
            date.setDate(firstDate.getDate() + index);
            return dateValue(date);
        });
        fillSelect(sessionDate, dates, value => value, value => formatDate(value));
    }

    function initialiseCoaches() {
        const coachLabel = coach => `${coach.name} · £${coach.price}`;
        fillSelect(sessionCoach, coaches, 'id', coachLabel);
        fillSelect(availableCoach, coaches, 'id', coachLabel);
    }

    function bookingOrder() {
        return document.querySelector('input[name="booking-order"]:checked').value;
    }

    function updatePicker() {
        const coachFirst = bookingOrder() === 'coach';
        document.querySelector('[data-picker="coach"]').hidden = !coachFirst;
        document.querySelector('[data-picker="available-coach"]').hidden = coachFirst;

        if (coachFirst) {
            const availableTimes = times.filter(time => isAvailable(sessionCoach.value, sessionDate.value, time));
            fillSelect(sessionTime, availableTimes, value => value, value => timeLabel(value));
        } else {
            fillSelect(sessionTime, times, value => value, value => timeLabel(value));
            updateAvailableCoaches();
        }
    }

    function updateAvailableCoaches() {
        if (bookingOrder() !== 'time') return;
        const available = coaches.filter(coach => isAvailable(coach.id, sessionDate.value, sessionTime.value));
        fillSelect(availableCoach, available, 'id', coach => `${coach.name} · £${coach.price}`);
    }

    function escapeHtml(value) {
        return String(value).replace(/[&<>'"]/g, character => ({
            '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;'
        })[character]);
    }

    function renderBasket() {
        if (!state.sessions.length) {
            sessionBasket.innerHTML = '<p class="field-help">No sessions added yet.</p>';
            return;
        }
        const rows = state.sessions.map((session, index) => `
            <div class="session-item">
                <div><strong>${escapeHtml(session.coachName)}</strong><small>${formatDate(session.date)} · ${timeLabel(session.time)} · Phuket time</small></div>
                <strong>£${session.price}</strong>
                <button type="button" class="remove-session" data-remove-session="${index}">Remove</button>
            </div>`).join('');
        const total = state.sessions.reduce((sum, session) => sum + session.price, 0);
        sessionBasket.innerHTML = `${rows}<div class="basket-total">Total: £${total}</div>`;
    }

    document.querySelectorAll('input[name="booking-type"]').forEach(input => {
        input.addEventListener('change', function () {
            state.type = this.value;
            programmeOptions.hidden = state.type !== 'programme';
            sessionOptions.hidden = state.type !== 'session';
            selectionError.textContent = '';
        });
    });

    document.querySelectorAll('input[name="booking-order"]').forEach(input => input.addEventListener('change', updatePicker));
    sessionCoach.addEventListener('change', updatePicker);
    sessionDate.addEventListener('change', updatePicker);
    sessionTime.addEventListener('change', updateAvailableCoaches);

    document.getElementById('add-session').addEventListener('click', function () {
        const coachId = bookingOrder() === 'coach' ? sessionCoach.value : availableCoach.value;
        const coach = coaches.find(item => item.id === coachId);
        if (!coach || !sessionDate.value || !sessionTime.value) return;
        const overlapping = state.sessions.some(session => session.date === sessionDate.value && session.time === sessionTime.value);
        if (overlapping) {
            selectionError.textContent = 'You already have a session at that time. Choose another one-hour slot.';
            return;
        }
        state.sessions.push({ coachId, coachName: coach.name, price: coach.price, date: sessionDate.value, time: sessionTime.value });
        selectionError.textContent = '';
        renderBasket();
    });

    sessionBasket.addEventListener('click', function (event) {
        const button = event.target.closest('[data-remove-session]');
        if (!button) return;
        state.sessions.splice(Number(button.dataset.removeSession), 1);
        renderBasket();
    });

    function selectedProgramme() {
        const input = document.querySelector('input[name="programme"]:checked');
        return input ? programmes[input.value] : null;
    }

    function validateSelection() {
        if (!state.type) return 'Choose a training programme or private session.';
        if (state.type === 'programme' && !selectedProgramme()) return 'Choose a training programme.';
        if (state.type === 'programme' && !programmeDate.value) return 'Choose your preferred start date.';
        if (state.type === 'session' && !state.sessions.length) return 'Add at least one private session.';
        return '';
    }

    function showStep(step) {
        document.querySelectorAll('.booking-step').forEach(section => {
            const active = Number(section.dataset.step) === step;
            section.hidden = !active;
            section.classList.toggle('active', active);
        });
        document.querySelectorAll('[data-progress]').forEach(item => {
            const number = Number(item.dataset.progress);
            item.classList.toggle('active', number === step);
            item.classList.toggle('complete', number < step);
        });
        window.scrollTo({ top: app.offsetTop - 90, behavior: 'smooth' });
    }

    document.querySelectorAll('[data-next]').forEach(button => {
        button.addEventListener('click', function () {
            const next = Number(this.dataset.next);
            if (next === 2) {
                const error = validateSelection();
                selectionError.textContent = error;
                if (error) return;
                document.getElementById('accommodation-group').hidden = state.type !== 'programme';
            }
            if (next === 3) {
                const detailsForm = document.getElementById('details-form');
                if (!detailsForm.reportValidity()) return;
                renderReview();
            }
            showStep(next);
        });
    });

    document.querySelectorAll('[data-back]').forEach(button => button.addEventListener('click', function () {
        showStep(Number(this.dataset.back));
    }));

    function summaryRows(includePayment) {
        let rows = '';
        if (state.type === 'programme') {
            const programme = selectedProgramme();
            rows += `<div class="summary-row"><span>Programme</span><strong>${programme.name}</strong></div>`;
            rows += `<div class="summary-row"><span>Preferred start</span><strong>${formatDate(programmeDate.value)}</strong></div>`;
            rows += `<div class="summary-row"><span>Status</span><strong>Request awaiting gym confirmation</strong></div>`;
            rows += `<div class="summary-row"><span>Programme price</span><strong>£${programme.price}</strong></div>`;
            if (includePayment) {
                const payFull = document.querySelector('input[name="payment-amount"]:checked').value === 'full';
                rows += `<div class="summary-row"><span>${payFull ? 'Paid in prototype' : 'Refundable deposit paid in prototype'}</span><strong>£${payFull ? programme.price : programme.price * 0.2}</strong></div>`;
            }
        } else {
            state.sessions.forEach((session, index) => {
                rows += `<div class="summary-row"><span>Session ${index + 1}</span><strong>${escapeHtml(session.coachName)} · ${formatDate(session.date)} · ${timeLabel(session.time)}</strong></div>`;
            });
            const total = state.sessions.reduce((sum, session) => sum + session.price, 0);
            rows += `<div class="summary-row"><span>${includePayment ? 'Paid in prototype' : 'Total to pay'}</span><strong>£${total}</strong></div>`;
        }
        return rows;
    }

    function renderReview() {
        document.getElementById('booking-summary').innerHTML = summaryRows(false);
        const options = document.getElementById('programme-payment-options');
        options.hidden = state.type !== 'programme';
        if (state.type === 'programme') {
            const programme = selectedProgramme();
            document.getElementById('deposit-label').textContent = `Pay £${programme.price * 0.2} refundable deposit (20%)`;
            document.getElementById('full-label').textContent = `Pay £${programme.price} in full`;
        }
        updatePayButton();
    }

    function updatePayButton() {
        let amount;
        if (state.type === 'programme') {
            const programme = selectedProgramme();
            const payFull = document.querySelector('input[name="payment-amount"]:checked').value === 'full';
            amount = payFull ? programme.price : programme.price * 0.2;
        } else {
            amount = state.sessions.reduce((sum, session) => sum + session.price, 0);
        }
        document.getElementById('pay-button').textContent = `Pay £${amount} (prototype)`;
    }

    document.querySelectorAll('input[name="payment-amount"]').forEach(input => input.addEventListener('change', updatePayButton));

    document.getElementById('pay-button').addEventListener('click', function () {
        const reference = `MJ-${new Date().getFullYear()}-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;
        const name = document.getElementById('booking-name').value.trim();
        const title = document.getElementById('confirmation-title');
        const message = document.getElementById('confirmation-message');
        if (state.type === 'programme') {
            title.textContent = 'Your programme request has been received';
            message.textContent = `${name ? `Thanks, ${name}. ` : ''}Your payment is recorded for this prototype. The gym will contact you to confirm your requested start date. If they cannot accommodate it, your payment is refundable.`;
        } else {
            title.textContent = state.sessions.length === 1 ? 'Your session is confirmed' : 'Your sessions are confirmed';
            message.textContent = `${name ? `Thanks, ${name}. ` : ''}Your private coaching is confirmed. Please arrive at the gym 15 minutes before your first session.`;
        }
        document.getElementById('confirmation-summary').innerHTML = `<div class="summary-row"><span>Booking reference</span><strong>${reference}</strong></div>${summaryRows(true)}<div class="summary-row"><span>Times shown in</span><strong>Phuket time · ICT (UTC+7)</strong></div>`;
        showStep(4);
    });

    initialiseDates();
    initialiseCoaches();
    updatePicker();
    renderBasket();
});
