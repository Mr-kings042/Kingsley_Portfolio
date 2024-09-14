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


// feeback section
document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting immediately
    var submitButton = this.querySelector('button[type="submit"]');
    
    emailjs.sendForm('service_w4f7wqm', 'template_0ugreux', this)
    .then(function() {
        document.getElementById('statusMessage').textContent = 'Feedback submitted. Thank you for your time!';
    }, function(error) {
        document.getElementById('statusMessage').textContent = 'Failed to send feedback. Please try again.';
    });
    // Disable the button after it's clicked
    submitButton.disabled = true;
     // Disable all input and textarea fields
     var inputs = this.querySelectorAll('input, textarea');
     inputs.forEach(function(input) {
         input.disabled = true;
     });
    // Show a status message after the form is submitted
    document.getElementById('statusMessage').textContent = 'Feedback submitted. Thank you for your Time';
});