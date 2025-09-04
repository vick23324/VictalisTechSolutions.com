// This script provides basic functionality for form submission.
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the default form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Thank you for your message! We will get back to you soon.');
        // Here you would typically send the form data to a server
        // using a fetch() API or XMLHttpRequest.
        // For this example, we'll just log it.
        console.log('Form Submitted:', {
            name,
            email,
            message
        });
        this.reset(); // Resets the form after submission
    } else {
        alert('Please fill out all fields.');
    }
});