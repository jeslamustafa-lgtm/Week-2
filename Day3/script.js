const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const statusMessage = document.getElementById('statusMessage');
const themeBtn = document.getElementById('themeBtn');

//Live message preview
messageInput.addEventListener('input',function () {
    if (messageInput.value.trim() === '') {
        statusMessage.textContent = 'Your message is empty. Please enter a message.';
        return;
    }
    statusMessage.textContent = `Preview: ${messageInput.value}`;
});

// Form submission
form.addEventListener('submit', function (event) {
    //Prevent page reload
    event.preventDefault();

    //Clear previous status message
    statusMessage.textContent = '';

    // Validate form inputs
    if (nameInput.value.trim() === '' || emailInput.value.trim() === '' || messageInput.value.trim() === '') {
        statusMessage.textContent = 'Please fill in all fields.';
        return;
    }

    //Validate email format
    if (!validateEmail(emailInput.value.trim())) {
        statusMessage.textContent = 'Please enter a valid email address.';
        return;
    }

    //Showing success message
    statusMessage.textContent = 'Thank you for your message! We will get back to you soon.';

    //Show success after 2 seconds and reset the form
    setTimeout(function () {
        statusMessage.textContent = 'Message send successfully!';
        statusMessage.style.color = 'green';
        form.reset();
        previewMessage.textContent = 'Your message will appear here as you type...';
    }, 2000);
});

//Email validation function
function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

//Extra interactive feature: Change theme
themeBtn.addEventListener('click', function () {
    document.body.classList.toggle('dark-theme');
});
