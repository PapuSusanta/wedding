// 1. Mobile Menu Toggle
function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');
}

// 2. Countdown Timer
// Target Date: May 3rd, 2026 at 6:00 PM
const weddingDate = new Date("May 3, 2026 18:00:00").getTime();

setInterval(function () {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const d = document.getElementById("days");
    if (d) {
        d.innerText = days;
        document.getElementById("hours").innerText = hours;
        document.getElementById("minutes").innerText = minutes;
        document.getElementById("seconds").innerText = seconds;
    }
}, 1000);

// 3. Falling Petals Animation (Bug Free)
function createPetal() {
    const container = document.getElementById('floating-container');
    // Safety check: if container missing, stop
    if (!container) return;

    const petal = document.createElement('div');
    petal.classList.add('petal');

    const size = Math.random() * 10 + 5;
    const left = Math.random() * 100;
    const duration = Math.random() * 5 + 5;

    petal.style.width = `${size}px`;
    petal.style.height = `${size}px`;
    petal.style.left = `${left}vw`;
    petal.style.animationDuration = `${duration}s`;

    // Vary colors between Gold and Red
    if (Math.random() > 0.5) {
        petal.style.backgroundColor = '#d4af37';
    } else {
        petal.style.backgroundColor = '#a41212';
    }

    container.appendChild(petal);
    setTimeout(() => { petal.remove(); }, duration * 1000);
}
setInterval(createPetal, 400);

// 4. Scroll Animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.hero-content, .profile-card, .timeline-item, .poem-card').forEach(el => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.8s ease-out';
    observer.observe(el);
});