        // Set current year in footer
        document.getElementById('currentYear').textContent = new Date().getFullYear();
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
// 

// Toggle Menu
const menuIcon = document.getElementById("menuIcon");
const closeIcon = document.getElementById("closeIcon");
const navLinks = document.getElementById("navLinks");
const NavLinks = document.querySelectorAll('#navLinks li a');

menuIcon.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    menuIcon.style.display = "none";
    closeIcon.style.display = "block";
});

closeIcon.addEventListener("click", () => {
    navLinks.classList.remove("active");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
});
const closeNavMenu = () => {
    navLinks.classList.remove("active");
    menuIcon.style.display = "block";
    closeIcon.style.display = "none";
  };
NavLinks.forEach((links) => {
    links.addEventListener("click", closeNavMenu);
})
// Back to Top Button
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});

backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Dark/Light Mode Toggle
// Theme Toggle Logic
// const themeToggle = document.querySelector('.theme-toggle');
// const themeIcon = document.getElementById('themeIcon');

// themeToggle.addEventListener('click', () => {
//     document.body.classList.toggle('light-mode');
    
//     // Toggle between moon and sun icons
//     if (document.body.classList.contains('light-mode')) {
//         themeIcon.classList.remove('fa-moon');
//         themeIcon.classList.add('fa-sun');
//     } else {
//         themeIcon.classList.remove('fa-sun');
//         themeIcon.classList.add('fa-moon');
//     }
// });

// Form Submission
// const feedbackForm = document.getElementById("feedbackForm");
// const statusMessage = document.getElementById("statusMessage");

// feedbackForm.addEventListener("submit", (e) => {
//     e.preventDefault();
//     const name = document.getElementById("name").value;
//     const email = document.getElementById("email").value;
//     const message = document.getElementById("message").value;

//     // Send feedback to your email (requires backend setup)
//     fetch("https://your-backend-endpoint.com/send-feedback", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ name, email, message }),
//     })
//     .then(response => response.json())
//     .then(data => {
//         statusMessage.textContent = "Feedback sent successfully!";
//         feedbackForm.reset();
//     })
//     .catch(error => {
//         statusMessage.textContent = "Failed to send feedback. Please try again.";
//     });
// });
 const contactForm = document.querySelector('form');
        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Simulate form submission
                const submitBtn = this.querySelector('button[type="submit"]');
                const originalText = submitBtn.textContent;
                
                submitBtn.disabled = true;
                submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Sending...';
                
                // Simulate network request
                setTimeout(() => {
                    submitBtn.innerHTML = '<i class="fas fa-check mr-2"></i>Message Sent!';
                    
                    // Reset form
                    setTimeout(() => {
                        contactForm.reset();
                        submitBtn.disabled = false;
                        submitBtn.textContent = originalText;
                    }, 2000);
                }, 1500);
            });
        }
// Scroll Animations
const fadeElements = document.querySelectorAll(".fade-in");

const checkFade = () => {
    fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < window.innerHeight - 100) {
            element.classList.add("visible");
        }
    });
};

//  const contactsForm = document.querySelector('form');
//         if (contactForm) {
//             contactForm.addEventListener('submit', function(e) {
//                 e.preventDefault();
                
//                 // Simulate form submission
//                 const submitBtn = this.querySelector('button[type="submit"]');
//                 const originalText = submitBtn.textContent;
                
//                 submitBtn.disabled = true;
//                 submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Sending...';
                
//                 // Simulate network request
//                 setTimeout(() => {
//                     submitBtn.innerHTML = '<i class="fas fa-check mr-2"></i>Message Sent!';
                    
//                     // Reset form
//                     setTimeout(() => {
//                         contactForm.reset();
//                         submitBtn.disabled = false;
//                         submitBtn.textContent = originalText;
//                     }, 2000);
//                 }, 1500);
//             });
//         }
        // Set current year in footer
document.getElementById('currentYear').textContent = new Date().getFullYear();
window.addEventListener("scroll", checkFade);
checkFade(); 