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