/* =========================
   MOBILE MENU
========================= */

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");


menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("show");

    const icon = menuToggle.querySelector("i");


    if (navMenu.classList.contains("show")) {

        icon.classList.remove("fa-bars");

        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    }

});


/* =========================
   ALL CATEGORIES DROPDOWN
========================= */

const categoryBtn = document.querySelector(".category-btn");

const categoryDropdown =
    document.querySelector(".category-dropdown");


categoryBtn.addEventListener("click", (event) => {

    event.stopPropagation();

    categoryDropdown.classList.toggle("show");

});


/* =========================
   CLOSE DROPDOWN
========================= */

document.addEventListener("click", (event) => {

    if (
        !categoryDropdown.contains(event.target) &&
        !categoryBtn.contains(event.target)
    ) {

        categoryDropdown.classList.remove("show");

    }

});


/* =========================
   CATEGORY SELECTION
========================= */

const categoryItems =
    document.querySelectorAll(".category-dropdown button");


categoryItems.forEach((item) => {

    item.addEventListener("click", () => {

        const selectedCategory = item.textContent.trim();

        categoryBtn.innerHTML =
            `${selectedCategory}
             <i class="fa-solid fa-chevron-down"></i>`;

        categoryDropdown.classList.remove("show");

    });

});

/* =========================
   ACTIVE NAV LINK
========================= */

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        navLinks.forEach((item) => {
            item.classList.remove("active");
        });

        link.classList.add("active");

        // Close mobile menu after selecting a link
        navMenu.classList.remove("show");

        const icon = menuToggle.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});

/* =========================
   HERO SLIDER
========================= */

const slides = document.querySelectorAll(".hero-slide");
const dots = document.querySelectorAll(".dot");

const prevButton = document.querySelector(".slider-arrow.prev");
const nextButton = document.querySelector(".slider-arrow.next");

let currentSlide = 0;


/* =========================
   SHOW SLIDE
========================= */

function showSlide(index) {

    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    dots.forEach((dot) => {
        dot.classList.remove("active");
    });


    slides[index].classList.add("active");
    dots[index].classList.add("active");

    currentSlide = index;
}


/* =========================
   NEXT SLIDE
========================= */

function nextSlide() {

    let nextIndex = currentSlide + 1;

    if (nextIndex >= slides.length) {
        nextIndex = 0;
    }

    showSlide(nextIndex);
}


/* =========================
   PREVIOUS SLIDE
========================= */

function previousSlide() {

    let previousIndex = currentSlide - 1;

    if (previousIndex < 0) {
        previousIndex = slides.length - 1;
    }

    showSlide(previousIndex);
}


/* =========================
   ARROWS
========================= */

nextButton.addEventListener("click", nextSlide);

prevButton.addEventListener("click", previousSlide);


/* =========================
   DOTS
========================= */

dots.forEach((dot, index) => {

    dot.addEventListener("click", () => {

        showSlide(index);

    });

});


/* =========================
   AUTOMATIC SLIDER
========================= */

setInterval(() => {

    nextSlide();

}, 5000);