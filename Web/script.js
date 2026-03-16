document.addEventListener("DOMContentLoaded", () => {
    const contactContainer = document.querySelector(".contact-container");

    // Create an intersection observer to trigger the fade-in animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Apply inline styles for the transition
                entry.target.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out";
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                
                // Stop observing once the animation has run
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    // Start observing the contact container
    if (contactContainer) {
        observer.observe(contactContainer);
    }
});
