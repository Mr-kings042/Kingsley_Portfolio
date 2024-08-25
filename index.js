// Intersection Observer to add fade-in effect
document.addEventListener('DOMContentLoaded', function() {
    const faders = document.querySelectorAll('.fade-in');

    const appearOptions = {
        threshold: 0.2,  // Adjust this value to control when the animation triggers
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('show');
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
});


// Toggle menu for mobile view
document.getElementById('menuIcon').addEventListener('click', function() {
    const navLinks = document.getElementById('navLinks');
    const closeIcon = document.getElementById('closeIcon');
    const menuIcon = document.getElementById('menuIcon');

    navLinks.classList.toggle('active');
    menuIcon.style.display = 'none';
    closeIcon.style.display = 'block';
});

document.getElementById('closeIcon').addEventListener('click', function() {
    const navLinks = document.getElementById('navLinks');
    const closeIcon = document.getElementById('closeIcon');
    const menuIcon = document.getElementById('menuIcon');

    navLinks.classList.toggle('active');
    closeIcon.style.display = 'none';
    menuIcon.style.display = 'block';
});

// Handle feedback form submission
document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting normally

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    emailjs.send("service_w4f7wqm", "template_qvwv2gj", {
        name: name,
        email: email,
        message: message
    })
    .then(response => {
        document.getElementById('statusMessage').textContent = 'Feedback sent successfully!';
    })
    .catch(error => {
        document.getElementById('statusMessage').textContent = 'Failed to send feedback. Please try again.';
    });
    // Here you would typically send the data to your server or email service
    // For now, we'll just display a success message

    document.getElementById('statusMessage').innerText = 'Thank you for your feedback, ' + name + '!';

    // Clear form fields
    document.getElementById('feedbackForm').reset();
});
