// NavToggle and Nav
const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");
const body = document.body;

navToggle.addEventListener("click", () => {
    navToggle.classList.toggle("opened");
    nav.classList.toggle("opened");
    body.classList.toggle("stop-scroll");
});

nav.addEventListener("click", (e) => {
    if (e.target.tagName === 'A') {
        navToggle.classList.remove("opened");
        nav.classList.remove("opened");
        body.classList.remove("stop-scroll");
    }
});

// Accordions
const accordions = document.getElementById("accordions");

accordions.addEventListener("click", (e) => {
    let item = e.target.closest(".accordion");
    if (item.classList.contains("accordion")) {
        if (item.classList.contains("active")) {
            item.classList.remove("active");
        } else {
            accordions.querySelectorAll(".accordion").forEach(el => {
                el.classList.remove("active");
            });
            item.classList.add("active");
        }
    }
});