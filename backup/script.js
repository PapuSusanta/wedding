// Countdown Timer Logic
// Target Date: May 3rd, 2026 at 6:00 PM (Wedding time)
const weddingDate = new Date("May 3, 2026 18:00:00").getTime();

const x = setInterval(function () {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    // Calculate time components
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display results in the HTML elements
    const daysEl = document.getElementById("days");
    const hoursEl = document.getElementById("hours");
    const minsEl = document.getElementById("minutes");
    const secsEl = document.getElementById("seconds");
    const countdownContainer = document.getElementById("countdown");

    if (daysEl && hoursEl && minsEl && secsEl) {
        daysEl.innerHTML = days;
        hoursEl.innerHTML = hours;
        minsEl.innerHTML = minutes;
        secsEl.innerHTML = seconds;
    }

    // If the count down is finished
    if (distance < 0) {
        clearInterval(x);
        if (countdownContainer) {
            countdownContainer.innerHTML = "<h3 style='color:var(--gold); width:100%; text-align:center;'>শুভ বিবাহ সম্পন্ন!</h3>";
        }
    }
}, 1000);

// Scroll Reveal Animation Observer
document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    // Apply animation styles to all sections
    document.querySelectorAll('section').forEach((el) => {
        el.style.opacity = 0;
        el.style.transform = 'translateY(50px)';
        el.style.transition = 'all 1s ease-out';
        observer.observe(el);
    });
});