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


/* ====PREVIOUS SLIDE */

function previousSlide() {

    let previousIndex = currentSlide - 1;

    if (previousIndex < 0) {
        previousIndex = slides.length - 1;
    }

    showSlide(previousIndex);
}


/* ARROWS */

nextButton.addEventListener("click", nextSlide);

prevButton.addEventListener("click", previousSlide);


/* DOTS */

dots.forEach((dot, index) => {

    dot.addEventListener("click", () => {

        showSlide(index);

    });

});


/*  AUTOMATIC SLIDER */

// setInterval(() => {

//     nextSlide();

// }, 5000);


/* MOBILE SEARCH */

const mobileSearch = document.querySelector(".mobile-search");
const searchBox = document.querySelector(".search-box");

mobileSearch.addEventListener("click", () => {
    searchBox.classList.toggle("mobile-search-open");
});

/* =========================
   PRODUCTS DATA
========================= */

const productsData = {

    /* =========================
       HOME & KITCHEN
    ========================= */

    home: [
        {
            name: "Cooking Tools",
            image: "images/products/cooking-tools.jpg"
        },
        {
            name: "Plates, Bowls & Cutlery",
            image: "images/products/plates-bowls-cutlery.jpg"
        },
        {
            name: "Cups, Mugs & Water Bottles",
            image: "images/products/cups-mugs-water-bottles.jpg"
        },
        {
            name: "Food Storage & Containers",
            image: "images/products/food-storage-containers.jpg"
        },
        {
            name: "Spice & Kitchen Organizers",
            image: "images/products/spice-kitchen-organizers.jpg"
        },
        {
            name: "Cleaning & Laundry",
            image: "images/products/cleaning-laundry.jpg"
        },
        {
            name: "Bathroom Accessories",
            image: "images/products/bathroom-accessories.jpg"
        },
        {
            name: "Home Storage & Organization",
            image: "images/products/home-storage-organization.jpg"
        },
        {
            name: "Home Lighting",
            image: "images/products/home-lighting.jpg"
        },
        {
            name: "Home Decoration",
            image: "images/products/home-decoration.jpg"
        }
    ],


    /* =========================
       CAR ACCESSORIES
    ========================= */

    car: [
        {
            name: "Jump Starters",
            image: "images/products/jump-starters.jpg"
        },
        {
            name: "Car Phone Holders",
            image: "images/products/car-phone-holders.jpg"
        },
        {
            name: "Car Chargers & USB Adapters",
            image: "images/products/car-chargers-usb-adapters.jpg"
        },
        {
            name: "Tire Repair & Inflation Tools",
            image: "images/products/tire-repair-inflation-tools.jpg"
        },
        {
            name: "Emergency & Safety Tools",
            image: "images/products/emergency-safety-tools.jpg"
        },
        {
            name: "Car Cleaning Tools",
            image: "images/products/car-cleaning-tools.jpg"
        },
        {
            name: "Car Air Fresheners",
            image: "images/products/car-air-fresheners.jpg"
        },
        {
            name: "Sun Shades",
            image: "images/products/sun-shades.jpg"
        },
        {
            name: "Seat & Steering Wheel Covers",
            image: "images/products/seat-steering-wheel-covers.jpg"
        },
        {
            name: "Car LED Lights & Lighting Accessories",
            image: "images/products/car-led-lights.jpg"
        }
    ],


    /* =========================
       STATIONERY
    ========================= */

    stationery: [
        {
            name: "Notebooks",
            image: "images/products/notebooks.jpg"
        },
        {
            name: "Pens",
            image: "images/products/pens.jpg"
        },
        {
            name: "Pencils",
            image: "images/products/pencils.jpg"
        },
        {
            name: "Markers",
            image: "images/products/markers.jpg"
        },
        {
            name: "Highlighters",
            image: "images/products/highlighters.jpg"
        },
        {
            name: "Erasers & Sharpeners",
            image: "images/products/erasers-sharpeners.jpg"
        },
        {
            name: "Rulers & Geometry Sets",
            image: "images/products/rulers-geometry-sets.jpg"
        },
        {
            name: "Files & Folders",
            image: "images/products/files-folders.jpg"
        },
        {
            name: "Sticky Notes",
            image: "images/products/sticky-notes.jpg"
        },
        {
            name: "Printer Paper, Ink & Toner",
            image: "images/products/printer-paper-ink-toner.jpg"
        },
        {
            name: "Riso",
            image: "images/products/riso.jpg"
        },
        {
            name: "Konica",
            image: "images/products/konica.jpg"
        },
        {
            name: "HP Copier",
            image: "images/products/hp-copier.jpg"
        },
        {
            name: "Canon Copier",
            image: "images/products/canon-copier.jpg"
        }
    ],


    /* =========================
       ELECTRONICS
    ========================= */

    electronics: [
        {
            name: "Smartphones — iPhone, Samsung",
            image: "images/products/smartphones.jpg"
        },
        {
            name: "Earphones & Headphones",
            image: "images/products/earphones-headphones.jpg"
        },
        {
            name: "Bluetooth Speakers",
            image: "images/products/bluetooth-speakers.jpg"
        },
        {
            name: "Smart Watches",
            image: "images/products/smart-watches.jpg"
        },
        {
            name: "Power Banks",
            image: "images/products/power-banks.jpg"
        },
        {
            name: "Chargers & Adapters",
            image: "images/products/chargers-adapters.jpg"
        },
        {
            name: "USB Cables",
            image: "images/products/usb-cables.jpg"
        },
        {
            name: "USB Flash Drives",
            image: "images/products/usb-flash-drives.jpg"
        },
        {
            name: "Phone Cases & Screen Protectors",
            image: "images/products/phone-cases-screen-protectors.jpg"
        },
        {
            name: "Power Strips & Extension Cables",
            image: "images/products/power-strips-extension-cables.jpg"
        },
        {
            name: "Laptops",
            image: "images/products/laptops.jpg"
        }
    ]

};

/* =========================
   DISPLAY PRODUCTS
========================= */

const productsGrid = document.querySelector("#products-grid");
const productsTitle = document.querySelector("#products-title");

const productFilters =
    document.querySelectorAll(".product-filter");


function displayProducts(category) {

    const products = productsData[category];

    productsGrid.innerHTML = "";

    products.forEach((product) => {

        const productCard = document.createElement("div");

        productCard.className = "product-card";

        productCard.innerHTML = `

            <div class="product-image">

                <button
                    class="wishlist-btn"
                    type="button"
                    aria-label="Add to wishlist"
                >
                    <i class="fa-regular fa-heart"></i>
                </button>

                <img
                    src="${product.image}"
                    alt="${product.name}"
                >

            </div>


            <div class="product-info">

                <span class="product-category">
                    ${product.name}
                </span>

                <h3>
                    ${product.name}
                </h3>


                <div class="product-bottom">

                    <strong>
                        Price
                    </strong>

                    <button
                        class="add-cart-btn"
                        type="button"
                        aria-label="Add to cart"
                    >
                        <i class="fa-solid fa-cart-shopping"></i>
                    </button>

                </div>

            </div>

        `;

        productsGrid.appendChild(productCard);

    });

}

/* =========================
   PRODUCT CATEGORY FILTER
========================= */

productFilters.forEach((button) => {

    button.addEventListener("click", () => {

        productFilters.forEach((item) => {
            item.classList.remove("active");
        });

        button.classList.add("active");


        const selectedCategory =
            button.dataset.category;


        const categoryNames = {

            home: "Home & Kitchen",

            car: "Car Accessories",

            stationery: "Stationery",

            electronics: "Electronics"

        };


        productsTitle.textContent =
            categoryNames[selectedCategory];


        displayProducts(selectedCategory);

    });

});

/* =========================
   INITIAL PRODUCTS
========================= */

displayProducts("home");

