
document.addEventListener('DOMContentLoaded', function() {
    gsap.from('.hero-section .content', { duration: 1, opacity: 0, y: -50 });
    gsap.from('.about-section', { duration: 1, opacity: 0, x: -50, delay: 0.5 });
    gsap.from('.schedule-section', { duration: 1, opacity: 0, y: 50, delay: 1 });

    // Add scroll animation for about section image
    window.addEventListener('scroll', function() {
        const scrollY = window.scrollY;
        const image = document.getElementById('event-image');
        image.style.transform = `rotate(${scrollY / 10}deg)`;
    });
});
