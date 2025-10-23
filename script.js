// === Mobile Navigation ===
const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");
const body = document.body;

function closeMenu() {
    navToggle.classList.remove("opened");
    nav.classList.remove("opened");
    body.classList.remove("stop-scroll");
}

function toggleMenu() {
    navToggle.classList.toggle("opened");
    nav.classList.toggle("opened");
    body.classList.toggle("stop-scroll");
}

navToggle.addEventListener("click", toggleMenu);
nav.addEventListener("click", (e) => {
    if (e.target.tagName === "A") closeMenu();
});

// === Window Resize ===
const windowResize = () => {
    if (window.innerWidth > 1024) closeMenu();
};
window.addEventListener("resize", windowResize);
windowResize();

// === Accordions ===
const accordions = document.getElementById("accordions");

accordions.addEventListener("click", (e) => {
    const accordion = e.target.closest(".accordion");
    const isActive = accordion.classList.contains("active");
    accordions.querySelectorAll(".accordion.active").forEach(item => item.classList.remove("active"));
    accordion.classList.toggle("active", !isActive);
});

// == Skeleton loader==
document.querySelectorAll(".skeleton-loader img").forEach(img => {
    img.addEventListener("load", () => {
        img.parentElement.classList.add("loaded");
    });
    
    if (img.complete) {
        img.parentElement.classList.add("loaded");
    }
});