document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Check if the link is an anchor link on the same page
            if (this.hash !== "") {
                // Prevent default anchor click behavior
                e.preventDefault();

                // Store hash
                const hash = this.hash;

                // Get the target element
                const targetElement = document.querySelector(hash);

                if (targetElement) {
                    // Calculate position to scroll to
                    // Adjust '- 70' based on your sticky header's height if needed
                    const headerOffset = 70; // Example offset for sticky header
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    // Smooth scroll to target element
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth"
                    });

                     // Optional: Close mobile menu if you add one later
                     // closeMobileMenu();

                     // Optional: Update URL hash without jump
                     // history.pushState(null, null, hash);
                }
            }
        });
    });

    // Add any other JavaScript interactions here, e.g.,
    // - Active link highlighting on scroll
    // - Form validation (if using a form)
    // - Simple animations
});

// Example function (if you were to add a mobile menu toggle)
// function closeMobileMenu() {
//    const navUl = document.querySelector('nav ul');
//    navUl.classList.remove('active'); // Assuming 'active' class shows the menu
// }