const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Simple validation
    if (!name || !email || !message) {
        formMessage.textContent = 'Please fill in all fields.';
        formMessage.className = 'text-red-500';
        return;
    }

    // Here you would typically send the data to a server
    // For now, we'll just display a success message
    formMessage.textContent = 'Message sent successfully!';
    formMessage.className = 'text-green-500';
    form.reset(); // Clear the form
});
