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


/* ========================= PREVIOUS SLIDE */

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
   CATEGORY PRODUCTS
========================= */

const categoryProducts =
    document.querySelector("#category-products");

const categoryProductsTitle =
    document.querySelector("#category-products-title");

const categoryProductsGrid =
    document.querySelector("#category-products-grid");

const shopCategoryButtons =
    document.querySelectorAll(".shop-category-btn");


/* =========================
   CATEGORY NAMES
========================= */

const categoryNames = {

    home: "Home & Kitchen",

    car: "Car Accessories",

    stationery: "Stationery",

    electronics: "Electronics"

};


/* =========================
   SHOW CATEGORY PRODUCTS
========================= */

function showCategoryProducts(category) {

    const products = productsData[category];

    if (!products) {
        return;
    }


    /* CATEGORY TITLE */

    categoryProductsTitle.textContent =
        categoryNames[category];


    /* CLEAR OLD PRODUCTS */

    categoryProductsGrid.innerHTML = "";


    /* CREATE PRODUCT CARDS */

    products.forEach((product) => {

        const card =
            document.createElement("div");

        card.className =
            "category-product-card";


        card.innerHTML = `

            <div class="category-product-image">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                >

            </div>


            <div class="category-product-info">

                <h3>
                    ${product.name}
                </h3>

                <button
                    class="view-products-btn"
                    type="button"
                >
                    View Products
                    <i class="fa-solid fa-arrow-right"></i>
                </button>

            </div>

        `;


        categoryProductsGrid.appendChild(card);

    });


    /* SHOW SECTION */

    categoryProducts.classList.add("show");


    /* SCROLL TO PRODUCTS */

    setTimeout(() => {

        categoryProducts.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }, 100);

}


/* =========================
   INDIVIDUAL PRODUCTS DATA
========================= */

/*
   Product kasta wuxuu yeelan karaa:

   name
   image
   price

   Hadda waxaan ka dhigaynaa
   products: [] ilaa macmiilku
   bixiyo individual product names.
*/

const individualProducts = {

    /* =========================
       HOME & KITCHEN
    ========================= */

    "Cooking Tools": [],

    "Plates, Bowls & Cutlery": [],

    "Cups, Mugs & Water Bottles": [],

    "Food Storage & Containers": [],

    "Spice & Kitchen Organizers": [],

    "Cleaning & Laundry": [],

    "Bathroom Accessories": [],

    "Home Storage & Organization": [],

    "Home Lighting": [],

    "Home Decoration": [],


    /* =========================
       CAR ACCESSORIES
    ========================= */

    "Jump Starters": [],

    "Car Phone Holders": [],

    "Car Chargers & USB Adapters": [],

    "Tire Repair & Inflation Tools": [],

    "Emergency & Safety Tools": [],

    "Car Cleaning Tools": [],

    "Car Air Fresheners": [],

    "Sun Shades": [],

    "Seat & Steering Wheel Covers": [],

    "Car LED Lights & Lighting Accessories": [],


    /* =========================
       STATIONERY
    ========================= */

    "Notebooks": [],

    "Pens": [],

    "Pencils": [],

    "Markers": [],

    "Highlighters": [],

    "Erasers & Sharpeners": [],

    "Rulers & Geometry Sets": [],

    "Files & Folders": [],

    "Sticky Notes": [],

    "Printer Paper, Ink & Toner": [],

    "Riso": [],

    "Konica": [],

    "HP Copier": [],

    "Canon Copier": [],


    /* =========================
       ELECTRONICS
    ========================= */

    "Smartphones — iPhone, Samsung": [],

    "Earphones & Headphones": [],

    "Bluetooth Speakers": [],

    "Smart Watches": [],

    "Power Banks": [],

    "Chargers & Adapters": [],

    "USB Cables": [],

    "USB Flash Drives": [],

    "Phone Cases & Screen Protectors": [],

    "Power Strips & Extension Cables": [],

    "Laptops": []

};

/* =========================
   SHOP NOW BUTTONS
========================= */

shopCategoryButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const category =
            button.dataset.category;

        showCategoryProducts(category);

    });

});