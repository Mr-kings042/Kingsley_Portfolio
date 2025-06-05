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

const contactForm = document.querySelector('form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form elements
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        
        // Show loading state
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Sending...';
        
        // Prepare form data for Netlify
        const formData = new FormData(this);
        
        // Submit to Netlify
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formData).toString()
        })
        .then(response => {
            if (response.ok) {
                // Success state
                submitBtn.innerHTML = '<i class="fas fa-check mr-2"></i>Message Sent!';
                
                // Reset form after success
                contactForm.reset();
                
                // Reset button after delay
                setTimeout(() => {
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = originalText;
                }, 2000);
            } else {
                throw new Error('Form submission failed');
            }
        })
        .catch(error => {
            // Error state
            submitBtn.innerHTML = '<i class="fas fa-times mr-2"></i>Error!';
            setTimeout(() => {
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalText;
            }, 2000);
            
            console.error('Form submission error:', error);
        });
    });
}
