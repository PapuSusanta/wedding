/* Curtain Animation */
window.onload = function () {
    setTimeout(() => {
        document.getElementById("intro").classList.add("open");
        setTimeout(() => {
            document.getElementById("intro").style.display = "none";
        }, 1800);
    }, 800);
};

/* Gold Particles */
function createParticle() {
    const p = document.createElement("div");
    p.classList.add("particle");
    p.style.left = Math.random() * 100 + "vw";
    p.style.bottom = "-10px";
    p.style.animationDuration = (Math.random() * 5 + 5) + "s";
    document.body.appendChild(p);
    setTimeout(() => p.remove(), 10000);
}
setInterval(createParticle, 200);

/* Petals */
function createPetal() {
    const petal = document.createElement("div");
    petal.classList.add("petal");
    petal.innerHTML = "🌸";
    petal.style.left = Math.random() * 100 + "vw";
    petal.style.animationDuration = (Math.random() * 6 + 5) + "s";
    document.body.appendChild(petal);
    setTimeout(() => petal.remove(), 10000);
}
setInterval(createPetal, 800);

/* Butterflies */
function createButterfly() {
    const b = document.createElement("div");
    b.classList.add("butterfly");
    b.innerHTML = "🦋";
    b.style.left = Math.random() * 100 + "vw";
    b.style.top = Math.random() * 60 + "vh";
    b.style.animationDuration = (Math.random() * 6 + 6) + "s";
    document.querySelector(".hero").appendChild(b);
    setTimeout(() => b.remove(), 12000);
}
setInterval(createButterfly, 2500);

/* Modal */
function openModal() {
    document.getElementById("modal").classList.add("active");
}

function closeModal() {
    document.getElementById("modal").classList.remove("active");
}
