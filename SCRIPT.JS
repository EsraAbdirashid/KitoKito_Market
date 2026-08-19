/* =========================================================
   MOBILE MENU
========================================================= */

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

if (menuToggle && navMenu) {
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
}

// /* =========================================================
//    MOBILE SEARCH
// ========================================================= */

// const mobileSearchButton = document.querySelector(".mobile-search");
// const searchBox = document.querySelector(".search-box");

// if (mobileSearchButton && searchBox) {

//     mobileSearchButton.addEventListener("click", function () {

//         searchBox.classList.toggle("mobile-show");

//     });

// }

/* =========================
   MOBILE SEARCH
========================= */

const mobileSearch =
    document.querySelector(".mobile-search");

const searchBox =
    document.querySelector(".search-box");


mobileSearch.addEventListener("click", () => {

    searchBox.classList.toggle("mobile-show");

});


/* =========================================================
   ALL CATEGORIES DROPDOWN
========================================================= */

const categoryBtn = document.querySelector(".category-btn");

const categoryDropdown = document.querySelector(".category-dropdown");

if (categoryBtn && categoryDropdown) {
  categoryBtn.addEventListener("click", (event) => {
    event.stopPropagation();

    categoryDropdown.classList.toggle("show");
  });

  document.addEventListener("click", (event) => {
    if (
      !categoryDropdown.contains(event.target) &&
      !categoryBtn.contains(event.target)
    ) {
      categoryDropdown.classList.remove("show");
    }
  });

  const categoryItems = document.querySelectorAll(".category-dropdown button");

  categoryItems.forEach((item) => {
    item.addEventListener("click", () => {
      const selectedCategory = item.textContent.trim();

      categoryBtn.innerHTML = `${selectedCategory}
                 <i class="fa-solid fa-chevron-down"></i>`;

      categoryDropdown.classList.remove("show");
    });
  });
}

/* =========================================================
   ACTIVE NAV LINK
========================================================= */

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((item) => {
      item.classList.remove("active");
    });

    link.classList.add("active");

    /* Close mobile menu */

    if (navMenu) {
      navMenu.classList.remove("show");
    }

    if (menuToggle) {
      const icon = menuToggle.querySelector("i");

      if (icon) {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
      }
    }
  });
});

/* =========================================================
   HERO SLIDER
========================================================= */

const slides = document.querySelectorAll(".hero-slide");

const dots = document.querySelectorAll(".dot");

const prevButton = document.querySelector(".slider-arrow.prev");

const nextButton = document.querySelector(".slider-arrow.next");

let currentSlide = 0;

function showSlide(index) {
  if (!slides.length) {
    return;
  }

  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  dots.forEach((dot) => {
    dot.classList.remove("active");
  });

  slides[index].classList.add("active");

  if (dots[index]) {
    dots[index].classList.add("active");
  }

  currentSlide = index;
}

function nextSlide() {
  let nextIndex = currentSlide + 1;

  if (nextIndex >= slides.length) {
    nextIndex = 0;
  }

  showSlide(nextIndex);
}

function previousSlide() {
  let previousIndex = currentSlide - 1;

  if (previousIndex < 0) {
    previousIndex = slides.length - 1;
  }

  showSlide(previousIndex);
}

if (nextButton) {
  nextButton.addEventListener("click", nextSlide);
}

if (prevButton) {
  prevButton.addEventListener("click", previousSlide);
}

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    showSlide(index);
  });
});

/* =========================================================
   PRODUCT / SUBCATEGORY DATA
========================================================= */

const productsData = {
  /* =====================================================
       HOME & KITCHEN
    ===================================================== */

  home: [
    {
      name: "Cooking Tools",
      image: "images/products/cooking-tools.jpg",
    },

    {
      name: "Plates, Bowls & Cutlery",
      image: "images/products/plates-bowls-cutlery.jpg",
    },

    {
      name: "Cups, Mugs & Water Bottles",
      image: "images/products/cups-mugs-water-bottles.jpg",
    },

    {
      name: "Food Storage & Containers",
      image: "images/products/food-storage-containers.jpg",
    },

    {
      name: "Spice & Kitchen Organizers",
      image: "images/products/spice-kitchen-organizers.jpg",
    },

    {
      name: "Cleaning & Laundry",
      image: "images/products/cleaning-laundry.jpg",
    },

    {
      name: "Bathroom Accessories",
      image: "images/products/bathroom-accessories.jpg",
    },

    {
      name: "Home Storage & Organization",
      image: "images/products/home-storage-organization.jpg",
    },

    {
      name: "Home Lighting",
      image: "images/products/home-lighting.jpg",
    },

    {
      name: "Home Decoration",
      image: "images/products/home-decoration.jpg",
    },
  ],

  /* =====================================================
       CAR ACCESSORIES
    ===================================================== */

  car: [
    {
      name: "Jump Starters",
      image: "images/products/jump-starters.jpg",
    },

    {
      name: "Car Phone Holders",
      image: "images/products/car-phone-holders.jpg",
    },

    {
      name: "Car Chargers & USB Adapters",
      image: "images/products/car-chargers-usb-adapters.jpg",
    },

    {
      name: "Tire Repair & Inflation Tools",
      image: "images/products/tire-repair-inflation-tools.jpg",
    },

    {
      name: "Emergency & Safety Tools",
      image: "images/products/emergency-safety-tools.jpg",
    },

    {
      name: "Car Cleaning Tools",
      image: "images/products/car-cleaning-tools.jpg",
    },

    {
      name: "Car Air Fresheners",
      image: "images/products/car-air-fresheners.jpg",
    },

    {
      name: "Sun Shades",
      image: "images/products/sun-shades.jpg",
    },

    {
      name: "Seat & Steering Wheel Covers",
      image: "images/products/seat-steering-wheel-covers.jpg",
    },

    {
      name: "Car LED Lights & Lighting Accessories",
      image: "images/products/car-led-lights.jpg",
    },
  ],

  /* =====================================================
       STATIONERY
    ===================================================== */

  stationery: [
    {
      name: "Notebooks",
      image: "images/products/notebooks.jpg",
    },

    {
      name: "Pens",
      image: "images/products/pens.jpg",
    },

    {
      name: "Pencils",
      image: "images/products/pencils.jpg",
    },

    {
      name: "Markers",
      image: "images/products/markers.jpg",
    },

    {
      name: "Highlighters",
      image: "images/products/highlighters.jpg",
    },

    {
      name: "Erasers & Sharpeners",
      image: "images/products/erasers-sharpeners.jpg",
    },

    {
      name: "Rulers & Geometry Sets",
      image: "images/products/rulers-geometry-sets.jpg",
    },

    {
      name: "Files & Folders",
      image: "images/products/files-folders.jpg",
    },

    {
      name: "Sticky Notes",
      image: "images/products/sticky-notes.jpg",
    },

    {
      name: "Printer Paper, Ink & Toner",
      image: "images/products/printer-paper-ink-toner.jpg",
    },

    {
      name: "Riso",
      image: "images/products/riso.jpg",
    },

    {
      name: "Konica",
      image: "images/products/konica.jpg",
    },

    {
      name: "HP Copier",
      image: "images/products/hp-copier.jpg",
    },

    {
      name: "Canon Copier",
      image: "images/products/canon-copier.jpg",
    },
  ],

  /* =====================================================
       ELECTRONICS
    ===================================================== */

  electronics: [
    {
      name: "Smartphones — iPhone, Samsung",
      image: "images/products/smartphones.jpg",
    },

    {
      name: "Earphones & Headphones",
      image: "images/products/earphones-headphones.jpg",
    },

    {
      name: "Bluetooth Speakers",
      image: "images/products/bluetooth-speakers.jpg",
    },

    {
      name: "Smart Watches",
      image: "images/products/smart-watches.jpg",
    },

    {
      name: "Power Banks",
      image: "images/products/power-banks.jpg",
    },

    {
      name: "Chargers & Adapters",
      image: "images/products/chargers-adapters.jpg",
    },

    {
      name: "USB Cables",
      image: "images/products/usb-cables.jpg",
    },

    {
      name: "USB Flash Drives",
      image: "images/products/usb-flash-drives.jpg",
    },

    {
      name: "Phone Cases & Screen Protectors",
      image: "images/products/phone-cases-screen-protectors.jpg",
    },

    {
      name: "Power Strips & Extension Cables",
      image: "images/products/power-strips-extension-cables.jpg",
    },

    {
      name: "Laptops",
      image: "images/products/laptops.jpg",
    },
  ],
};

/* =========================================================
   CATEGORY NAMES
========================================================= */

const categoryNames = {
  home: "Home & Kitchen",

  car: "Car Accessories",

  stationery: "Stationery",

  electronics: "Electronics",
};

/* =========================================================
   GET CATEGORY ELEMENTS
========================================================= */

const mainCategories = document.querySelector("#main-categories");

const subcategoriesView = document.querySelector("#subcategories-view");

const subcategoriesGrid = document.querySelector("#subcategories-grid");

const subcategoryTitle = document.querySelector("#subcategory-title");

const productsView = document.querySelector("#products-view");

const productsGrid = document.querySelector("#products-grid");

const productsTitle = document.querySelector("#products-title");

const backToCategories = document.querySelector("#back-to-categories");

const backToSubcategories = document.querySelector("#back-to-subcategories");

const shopCategoryButtons = document.querySelectorAll(".shop-category-btn");

/* =========================================================
   OPEN CATEGORY
========================================================= */

function openCategory(category) {
  const subcategories = productsData[category];

  if (!subcategories) {
    return;
  }

  /* Hide main categories */

  mainCategories.classList.add("hidden");

  /* Hide products view */

  productsView.classList.remove("show");

  /* Set title */

  subcategoryTitle.textContent = categoryNames[category];

  /* Clear old subcategories */

  subcategoriesGrid.innerHTML = "";

  /* Create subcategory cards */

  subcategories.forEach((subcategory) => {
    const card = document.createElement("div");

    card.className = "subcategory-card";

    card.innerHTML = `

            <div class="subcategory-image">

                <img
                    src="${subcategory.image}"
                    alt="${subcategory.name}"
                >

            </div>


            <div class="subcategory-info">

                <h3>
                    ${subcategory.name}
                </h3>

                <button
                    class="view-products-btn"
                    data-subcategory="${subcategory.name}"
                    type="button"
                >
                    View Products
                    <i class="fa-solid fa-arrow-right"></i>
                </button>

            </div>

        `;

    subcategoriesGrid.appendChild(card);
  });

  /* Show subcategories */

  subcategoriesView.classList.add("show");

  /* Scroll to categories section */

  setTimeout(() => {
    subcategoriesView.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, 100);
}

/* =========================================================
   SHOP NOW BUTTONS
========================================================= */

shopCategoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const category = button.dataset.category;

    openCategory(category);
  });
});

/* =========================================================
   INDIVIDUAL PRODUCTS DATA
========================================================= */

/*
   Halkan ayaan dambe ku gelin doonaa
   individual products-ka dhabta ah.

   Tusaale:

   "Cooking Tools": [
       {
           name: "Kitchen Knife",
           image: "images/products/knife.jpg",
           price: "$10"
       }
   ]
*/

const individualProducts = {
  "Cooking Tools": [

    {
        name: "Kitchen Knife Set",
        image: "images/products/kitchen-knife-set.jpg",
        price: "$15.00"
    },

    {
        name: "Kitchen Utensil Set",
        image: "images/products/kitchen-utensil-set.jpg",
        price: "$12.00"
    },

    {
        name: "Vegetable Peeler",
        image: "images/products/vegetable-peeler.jpg",
        price: "$5.00"
    },

    {
        name: "Cutting Board",
        image: "images/products/cutting-board.jpg",
        price: "$8.00"
    }


  ],

  "Plates, Bowls & Cutlery": [],

  "Cups, Mugs & Water Bottles": [],

  "Food Storage & Containers": [],

  "Spice & Kitchen Organizers": [],

  "Cleaning & Laundry": [],

  "Bathroom Accessories": [],

  "Home Storage & Organization": [],

  "Home Lighting": [],

  "Home Decoration": [],

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

  Notebooks: [],

  Pens: [],

  Pencils: [],

  Markers: [],

  Highlighters: [],

  "Erasers & Sharpeners": [],

  "Rulers & Geometry Sets": [],

  "Files & Folders": [],

  "Sticky Notes": [],

  "Printer Paper, Ink & Toner": [],

  Riso: [],

  Konica: [],

  "HP Copier": [],

  "Canon Copier": [],

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

  Laptops: [],
};

/* =========================================================
   OPEN INDIVIDUAL PRODUCTS
========================================================= */

function openProducts(subcategory) {
  const products = individualProducts[subcategory];

  if (!products) {
    return;
  }

  /* Hide subcategories */

  subcategoriesView.classList.remove("show");

  /* Product title */

  productsTitle.textContent = subcategory;

  /* Clear old products */

  productsGrid.innerHTML = "";

  /* No products */

  if (products.length === 0) {
    productsGrid.innerHTML = `

            <div class="products-empty">

                <i class="fa-solid fa-box-open"></i>

                <h3>
                    No Products Available
                </h3>

                <p>
                    Products will be added soon.
                </p>

            </div>

        `;
  }

  /* Create product cards */

  products.forEach((product) => {
    const card = document.createElement("div");

    card.className = "individual-product-card";

    card.innerHTML = `

            <div class="individual-product-image">
<button
    class="wishlist-btn"
    type="button"
    onclick='toggleWishlist(${JSON.stringify(product)})'
    aria-label="Add to wishlist"
>
    <i class="fa-regular fa-heart"></i>
</button>


                <img
                    src="${product.image}"
                    alt="${product.name}"
                >

            </div>


            <div class="individual-product-info">

                <span class="product-category">
                    ${subcategory}
                </span>


                <h3>
                    ${product.name}
                </h3>


                <div class="individual-product-bottom">

                    <strong>
                        ${product.price}
                    </strong>


                   <button
    class="add-cart-btn"
    type="button"
    onclick='addToCart(${JSON.stringify(product)})'
>
    <i class="fa-solid fa-cart-shopping"></i>
</button>
                </div>

            </div>

        `;

    productsGrid.appendChild(card);
  });

  /* Show products */

  productsView.classList.add("show");

  /* Scroll to products */

  setTimeout(() => {
    productsView.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, 100);
}

/* =========================================================
   VIEW PRODUCTS
========================================================= */

document.addEventListener("click", (event) => {
  const button = event.target.closest(".view-products-btn");

  if (!button) {
    return;
  }

  const subcategory = button.dataset.subcategory;

  if (subcategory) {
    openProducts(subcategory);
  }
});

/* =========================================================
   BACK TO CATEGORIES
========================================================= */

if (backToCategories) {
  backToCategories.addEventListener("click", () => {
    subcategoriesView.classList.remove("show");

    productsView.classList.remove("show");

    mainCategories.classList.remove("hidden");

    setTimeout(() => {
      mainCategories.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  });
}

/* =========================================================
   BACK TO SUBCATEGORIES
========================================================= */

if (backToSubcategories) {
  backToSubcategories.addEventListener("click", () => {
    productsView.classList.remove("show");

    subcategoriesView.classList.add("show");

    setTimeout(() => {
      subcategoriesView.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  });
}


/* =========================
   CART
========================= */

let cart = [];

const cartPanel = document.querySelector("#cart-panel");
const cartItems = document.querySelector("#cart-items");
const cartCount = document.querySelector("#cart-count");
const cartTotal = document.querySelector("#cart-total");

document.querySelector(".cart-btn").addEventListener("click", () => {
    cartPanel.classList.add("show");
});

document.querySelector("#close-cart").addEventListener("click", () => {
    cartPanel.classList.remove("show");
});


function updateCart() {

    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach((product, index) => {

        total += parseFloat(product.price.replace("$", ""));

        cartItems.innerHTML += `
            <div class="cart-item">

                <img src="${product.image}" alt="${product.name}">

                <div>
                    <h4>${product.name}</h4>
                    <span>${product.price}</span>
                </div>

                <button onclick="removeFromCart(${index})">
                    <i class="fa-solid fa-trash"></i>
                </button>

            </div>
        `;

    });

    cartCount.textContent = cart.length;

    cartTotal.textContent = `$${total.toFixed(2)}`;
}


function addToCart(product) {

    cart.push(product);

    updateCart();

    cartPanel.classList.add("show");
}


function removeFromCart(index) {

    cart.splice(index, 1);

    updateCart();
}

/* =========================
   CHECKOUT
========================= */

const checkoutPanel =
    document.querySelector("#checkout-panel");

const checkoutItems =
    document.querySelector("#checkout-items");

const checkoutTotal =
    document.querySelector("#checkout-total");


document.querySelector(".checkout-btn").addEventListener("click", () => {

    if (cart.length === 0) {
        alert("Your cart is empty.");
        return;
    }

    checkoutItems.innerHTML = "";

    let total = 0;

    cart.forEach((product) => {

        const price =
            parseFloat(product.price.replace("$", ""));

        total += price;

        checkoutItems.innerHTML += `
            <div class="checkout-item">

                <span>${product.name}</span>

                <strong>${product.price}</strong>

            </div>
        `;

    });

    checkoutTotal.textContent =
        `$${total.toFixed(2)}`;

    checkoutPanel.classList.add("show");

});


document.querySelector("#close-checkout").addEventListener("click", () => {

    checkoutPanel.classList.remove("show");

});


document.querySelector("#place-order").addEventListener("click", () => {

    const name =
        document.querySelector("#customer-name").value.trim();

    const phone =
        document.querySelector("#customer-phone").value.trim();

    const address =
        document.querySelector("#customer-address").value.trim();


    if (!name || !phone || !address) {

        alert("Please fill in all customer information.");

        return;

    }


    alert(
        "Order ready! Backend will be connected later."
    );

});

/* =========================
   WISHLIST
========================= */

let wishlist = [];

const wishlistPanel =
    document.querySelector("#wishlist-panel");

const wishlistItems =
    document.querySelector("#wishlist-items");

const wishlistCount =
    document.querySelector("#wishlist-count");


/* Open Wishlist */

document
    .querySelector(".wishlist-nav-btn")
    .addEventListener("click", () => {

        wishlistPanel.classList.add("show");

    });


/* Close Wishlist */

document
    .querySelector("#close-wishlist")
    .addEventListener("click", () => {

        wishlistPanel.classList.remove("show");

    });


/* Add / Remove Wishlist */

function toggleWishlist(product) {

    const existingIndex =
        wishlist.findIndex(
            item => item.name === product.name
        );


    if (existingIndex !== -1) {

        wishlist.splice(existingIndex, 1);

    } else {

        wishlist.push(product);

    }


    updateWishlist();

}


/* Update Wishlist */

function updateWishlist() {

    wishlistItems.innerHTML = "";

    wishlistCount.textContent =
        wishlist.length;


    wishlist.forEach((product, index) => {

        wishlistItems.innerHTML += `

            <div class="wishlist-item">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                >

                <div class="wishlist-info">

                    <h4>
                        ${product.name}
                    </h4>

                    <strong>
                        ${product.price}
                    </strong>

                </div>


                <button
                    onclick="removeFromWishlist(${index})"
                    type="button"
                >
                    <i class="fa-solid fa-trash"></i>
                </button>

            </div>

        `;

    });

}


/* Remove */

function removeFromWishlist(index) {

    wishlist.splice(index, 1);

    updateWishlist();

}

/* =========================
   SEARCH
========================= */

const searchInput = document.querySelector(".search-box input");
const searchButton = document.querySelector(".search-btn");

searchButton.addEventListener("click", searchProducts);

searchInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        searchProducts();
    }
});


function searchProducts() {

    const query = searchInput.value.trim().toLowerCase();

    if (!query) {
        return;
    }

    const results = [];

    Object.entries(individualProducts).forEach(
        ([subcategory, products]) => {

            products.forEach((product) => {

                if (
                    product.name.toLowerCase().includes(query) ||
                    subcategory.toLowerCase().includes(query)
                ) {
                    results.push({
                        ...product,
                        subcategory
                    });
                }

            });

        }
    );


    showSearchResults(results, query);
}

