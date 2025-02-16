// script.js

document.addEventListener('DOMContentLoaded', () => {
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            // Example: basic check for "Name" field
            const name = document.getElementById('name').value.trim();
            if (!name) {
                e.preventDefault();
                alert('Please enter your name before submitting!');
            }
        });
    }
});