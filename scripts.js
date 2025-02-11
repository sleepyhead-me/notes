// Fade-in effect on scroll
document.addEventListener('DOMContentLoaded', function () {
    const elements = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(element => {
        observer.observe(element);
    });
});

// Toggle Hamburger Menu
const hamburgerMenu = document.getElementById('hamburger-menu');
const navbarNav = document.querySelector('.navbar-nav');

hamburgerMenu.addEventListener('click', () => {
    navbarNav.classList.toggle('show');
});

// Smooth Scroll
document.querySelectorAll('.navbar-nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});

// Accordion functionality for syllabus
document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const body = header.nextElementSibling;
        body.style.display = body.style.display === 'block' ? 'none' : 'block';
    });
});
