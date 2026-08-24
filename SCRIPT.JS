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


/* =========================
   MOBILE SEARCH
========================= */

const mobileSearch = document.querySelector(".mobile-search");
const searchBox = document.querySelector(".search-box");

if (mobileSearch && searchBox) {

    mobileSearch.addEventListener("click", () => {

        searchBox.classList.toggle("mobile-show");

    });

}


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
    name: "Washing Machine",
    image: "images/washin machine.jpeg",
  },

  {
    name: "Mini Household Products",
    image: "images/min.jpeg",
  },

  {
    name: "Cutlery",
    image: "images/cultery.jpeg",
  },

  {
    name: "Cooking Tools",
    image: "images/cooking-tools.jpeg",
  },

  {
    name: "Storage Baskets",
    image: "images/home-basket.jpeg",
  },

  {
    name: "Home Accessories",
    image: "images/home-access.jpeg",
  },

  {
    name: "Refrigerator",
    image: "images/talaagad.jpeg",
  },

  {
    name: "TCL TV",
    image: "images/TCL TV.jpeg",
  },
],


  /* =====================================================
       CAR ACCESSORIES
    ===================================================== */

     car: [
  {
    name: "Jump Starter",
    image: "images/car phone holder 50 pcs.jpg.jpeg",
  },

  {
    name: "Car USB Charger",
    image: "images/car usb charger 20pcs.jpg.jpeg",
  },

  {
    name: "Car Sun Shade",
    image: "images/car sun shade 300pcs.jpg.jpeg",
  },

  {
    name: "Car Seat Cover",
    image: "images/car seat 10pcs.jpg.jpeg",
  },

  {
    name: "Car Phone Holder",
    image: "images/car phone holder 50 pcs.jpg.jpeg",
  },

  {
    name: "Car Headlights",
    image: "images/car headlights 5pcs.jpg.jpeg",
  },

  {
    name: "Car Cleaner Set",
    image: "images/car cleaner set 700pcs.jpg.jpeg",
  },

  {
    name: "Car Air Freshener",
    image: "images/car air freshener 15pcs.jpg.jpeg",
  },

  {
    name: "Car Wheel Cover",
    image: "images/products/car-wheel-cover.jpg",
  },

  {
    name: "Car Accessory",
    image: "images/products/car-accessory.jpg",
  },
],

  /* =====================================================
       STATIONERY
    ===================================================== */

       stationery: [
  {
    name: "A4 Glossy",
    image: "images/products/a4-glossy.jpg",
  },

  {
    name: "Canon iR2224-1",
    image: "images/products/canon-ir2224-1.jpg",
  },

  {
    name: "Cutter",
    image: "images/products/cutter.jpg",
  },

  {
    name: "Desk Title",
    image: "images/products/desk-title.jpg",
  },

  {
    name: "Envelopes",
    image: "images/products/envelopes.jpg",
  },

  {
    name: "Epson",
    image: "images/products/epson.jpg",
  },

  {
    name: "Eraser and Cutting",
    image: "images/products/eraser-and-cutting.jpg",
  },

  {
    name: "Feather Flags",
    image: "images/products/feather-flags.jpg",
  },

  {
    name: "File Folders",
    image: "images/products/file-folders.jpg",
  },

  {
    name: "Highlighters",
    image: "images/products/highlighters.jpg",
  },

  {
    name: "HP LaserJet Pro Printer",
    image: "images/products/hp-laserjet-pro-printer.jpg",
  },

  {
    name: "Inks",
    image: "images/products/inks.jpg",
  },

  {
    name: "Konica",
    image: "images/products/konica.jpg",
  },

  {
    name: "Marker",
    image: "images/products/marker.jpg",
  },

  {
    name: "Note Books",
    image: "images/products/note-books.jpg",
  },

  {
    name: "Pen",
    image: "images/products/pen.jpg",
  },

  {
    name: "Pencils",
    image: "images/products/pencils.jpg",
  },

  {
    name: "PVC Cards",
    image: "images/products/pvc-cards.jpg",
  },

  {
    name: "Riso",
    image: "images/products/riso.jpg",
  },

  {
    name: "Rulers",
    image: "images/products/rulers.jpg",
  },

  {
    name: "Hand Sanitizer",
    image: "images/products/hand-sanitizer.jpg",
  },

  {
    name: "Sticky Notes",
    image: "images/products/sticky-notes.jpg",
  },

  {
    name: "Tray",
    image: "images/products/tray.jpg",
  },

  {
    name: "White Board",
    image: "images/products/white-board.jpg",
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

const individualProducts = {

  /* =====================================================
     HOME & KITCHEN
  ===================================================== */

  "Washing Machine": [
    {
      name: "Washing Machine",
      image: "images/washin machine.jpeg",
      price: "Wholesale",
      MOQ: 50
    }
  ],

  "Mini Household Products": [
    {
      name: "Mini Household Products",
      image: "images/min.jpeg",
      price: "Wholesale",
      MOQ: 50
    }
  ],

  "Cutlery": [
    {
      name: "Cutlery",
      image: "images/cultery.jpeg",
      price: "Wholesale",
      MOQ: 100
    }
  ],

  "Cooking Tools": [
    {
      name: "Cooking Tools",
      image: "images/cooking-tools.jpeg",
      price: "Wholesale",
      MOQ: 150
    }
  ],

  "Storage Baskets": [
    {
      name: "Storage Baskets",
      image: "images/home-basket.jpeg",
      price: "Wholesale",
      MOQ: 3000
    }
  ],

  "Home Accessories": [
    {
      name: "Home Accessories",
      image: "images/home-access.jpeg",
      price: "Wholesale",
      MOQ: 50
    }
  ],

  "Refrigerator": [
    {
      name: "Refrigerator",
      image: "images/talaagad.jpeg",
      price: "Wholesale",
      MOQ: 10
    }
  ],

  "TCL TV": [
    {
      name: "TCL TV",
      image: "images/TCL TV.jpeg",
      price: "Wholesale",
      MOQ: 5
    }
  ],


  /* =====================================================
     CAR ACCESSORIES
  ===================================================== */

  "Jump Starter": [
    {
      name: "Jump Starter",
      image: "images/car phone holder 50 pcs.jpg.jpeg",
      price: "Wholesale",
      MOQ: 50
    }
  ],

  "Car USB Charger": [
    {
      name: "Car USB Charger",
      image: "images/car usb charger 20pcs.jpg.jpeg",
      price: "Wholesale",
      MOQ: 20
    }
  ],

  "Car Sun Shade": [
    {
      name: "Car Sun Shade",
       image: "images/car sun shade 300pcs.jpg.jpeg",
      price: "Wholesale",
      MOQ: 300
    }
  ],

  "Car Seat Cover": [
    {
      name: "Car Seat Cover",
      image: "images/car seat 10pcs.jpg.jpeg",
      price: "Wholesale",
      MOQ: 10
    }
  ],

  "Car Phone Holder": [
    {
      name: "Car Phone Holder",
       image: "images/car phone holder 50 pcs.jpg.jpeg",
      price: "Wholesale",
      MOQ: 50
    }
  ],

  "Car Headlights": [
    {
      name: "Car Headlights",
      image: "images/car headlights 5pcs.jpg.jpeg",
      price: "Wholesale",
      MOQ: 5
    }
  ],

  "Car Cleaner Set": [
    {
      name: "Car Cleaner Set",
      image: "images/car cleaner set 700pcs.jpg.jpeg",
      price: "Wholesale",
      MOQ: 700
    }
  ],

  "Car Air Freshener": [
    {
      name: "Car Air Freshener",
      price: "Wholesale",
      MOQ: 15
    }
  ],

  "Car Wheel Cover": [
    {
      name: "Car Wheel Cover",
      price: "Wholesale",
      MOQ: 50
    }
  ],

  "Car Accessory": [
    {
      name: "Car Accessory",
      price: "Wholesale",
      MOQ: 100
    }
  ],


  /* =====================================================
     STATIONERY
  ===================================================== */

  "A4 Glossy": [
    {
      name: "A4 Glossy",
      price: "Wholesale",
      MOQ: 200
    }
  ],

  "Canon iR2224-1": [
    {
      name: "Canon iR2224-1",
      price: "Wholesale",
      MOQ: 1
    }
  ],

  "Cutter": [
    {
      name: "Cutter",
      price: "Wholesale",
      MOQ: 50
    }
  ],

  "Desk Title": [
    {
      name: "Desk Title",
      price: "Wholesale",
      MOQ: 50
    }
  ],

  "Envelopes": [
    {
      name: "Envelopes",
      price: "Wholesale",
      MOQ: 500
    }
  ],

  "Epson": [
    {
      name: "Epson",
      price: "Wholesale",
      MOQ: 30
    }
  ],

  "Eraser and Cutting": [
    {
      name: "Eraser and Cutting",
      price: "Wholesale",
      MOQ: 1000
    }
  ],

  "Feather Flags": [
    {
      name: "Feather Flags",
      price: "Wholesale",
      MOQ: 100
    }
  ],

  "File Folders": [
    {
      name: "File Folders",
      price: "Wholesale",
      MOQ: 800
    }
  ],

  "Highlighters": [
    {
      name: "Highlighters",
      price: "Wholesale",
      MOQ: 1000
    }
  ],

  "HP LaserJet Pro Printer": [
    {
      name: "HP LaserJet Pro Printer",
      price: "Wholesale",
      MOQ: 1
    }
  ],

  "Inks": [
    {
      name: "Inks",
      price: "Wholesale",
      MOQ: 1
    }
  ],

  "Konica": [
    {
      name: "Konica",
      price: "Wholesale",
      MOQ: 1
    }
  ],

  "Marker": [
    {
      name: "Marker",
      price: "Wholesale",
      MOQ: 2000
    }
  ],

  "Note Books": [
    {
      name: "Note Books",
      price: "Wholesale",
      MOQ: 3000
    }
  ],

  "Pen": [
    {
      name: "Pen",
      price: "Wholesale",
      MOQ: 3000
    }
  ],

  "Pencils": [
    {
      name: "Pencils",
      price: "Wholesale",
      MOQ: 3000
    }
  ],

  "PVC Cards": [
    {
      name: "PVC Cards",
      price: "Wholesale",
      MOQ: 1000
    }
  ],

  "Riso": [
    {
      name: "Riso",
      price: "Wholesale",
      MOQ: 1
    }
  ],

  "Rulers": [
    {
      name: "Rulers",
      price: "Wholesale",
      MOQ: 1000
    }
  ],

  "Hand Sanitizer": [
    {
      name: "Hand Sanitizer",
      price: "Wholesale",
      MOQ: 100
    }
  ],

  "Sticky Notes": [
    {
      name: "Sticky Notes",
      price: "Wholesale",
      MOQ: 300
    }
  ],

  "Tray": [
    {
      name: "Tray",
      price: "Wholesale",
      MOQ: 200
    }
  ],

  "White Board": [
    {
      name: "White Board",
      price: "Wholesale",
      MOQ: 50
    }
  ],


  /* =====================================================
     ELECTRONICS
     DATA WILL BE ADDED LATER
  ===================================================== */

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

              


                <h3>
                    ${product.name}
                </h3>


                <div class="individual-product-bottom">

                    <div class="product-price-moq">

                        <strong>
                            ${product.price}
                        </strong>

                        <span class="product-moq">
                            MOQ: ${product.MOQ}
                        </span>

                    </div>


                    <button
    class="add-cart-btn"
    type="button"
    onclick='addToCart(${JSON.stringify(product)})'
>
    Order Now
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

    cart.forEach((product, index) => {

        cartItems.innerHTML += `
            <div class="cart-item">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                >

                <div>

                    <h4>
                        ${product.name}
                    </h4>

                    <span>
                        ${product.price}
                    </span>

                    <small>
                        MOQ: ${product.MOQ}
                    </small>

                </div>

                <button onclick="removeFromCart(${index})">
                    <i class="fa-solid fa-trash"></i>
                </button>

            </div>
        `;

    });

    cartCount.textContent = cart.length;

    /*
       Since the product price is now "Wholesale"
       instead of a numeric price, the cart total
       will display Wholesale.
    */

    cartTotal.textContent = cart.length > 0
        ? "Wholesale"
        : "$0.00";
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

    cart.forEach((product) => {

        checkoutItems.innerHTML += `
            <div class="checkout-item">

                <div>

                    <span>
                        ${product.name}
                    </span>

                    <small>
                        MOQ: ${product.MOQ}
                    </small>

                </div>

                <strong>
                    ${product.price}
                </strong>

            </div>
        `;

    });

    checkoutTotal.textContent = "Wholesale";

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

                    <span>
                        MOQ: ${product.MOQ}
                    </span>

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
const categoryBtnSearch = document.querySelector(".category-btn");

let selectedSearchCategory = "All Categories";


/* =========================
   CATEGORY FILTER
========================= */

const searchCategoryItems =
    document.querySelectorAll(".category-dropdown button");

searchCategoryItems.forEach((item) => {

    item.addEventListener("click", () => {

        selectedSearchCategory =
            item.textContent.trim();

        if (categoryBtnSearch) {

            categoryBtnSearch.innerHTML =
                `${selectedSearchCategory}
                <i class="fa-solid fa-chevron-down"></i>`;

        }

        if (categoryDropdown) {
            categoryDropdown.classList.remove("show");
        }

    });

});


/* =========================
   SEARCH BUTTON
========================= */

if (searchButton && searchInput) {

    searchButton.addEventListener("click", searchProducts);

}


/* =========================
   ENTER KEY
========================= */

if (searchInput) {

    searchInput.addEventListener("keydown", (event) => {

        if (event.key === "Enter") {

            event.preventDefault();

            searchProducts();

        }

    });

}


/* =========================
   CLEAR SEARCH
========================= */

if (searchInput) {

    searchInput.addEventListener("input", () => {

        if (searchInput.value.trim() === "") {

            hideSearchResults();

        }

    });

}


/* =========================
   HIDE SEARCH RESULTS
========================= */

function hideSearchResults() {

    const searchResults =
        document.querySelector("#search-results");

    if (!searchResults) {
        return;
    }

    searchResults.classList.remove("show");

    searchResults.style.display = "none";

}


/* =========================
   SEARCH PRODUCTS
========================= */

function searchProducts() {

    if (!searchInput) {
        return;
    }

    const query =
        searchInput.value.trim().toLowerCase();


    /* Empty search */

    if (!query) {

        hideSearchResults();

        return;

    }


    const results = [];


    Object.entries(individualProducts).forEach(
        ([subcategory, products]) => {

            products.forEach((product) => {

                const mainCategory =
                    getMainCategory(subcategory);

                const categoryMatch =
                    selectedSearchCategory === "All Categories" ||
                    mainCategory === selectedSearchCategory;

                const searchMatch =
                    product.name
                        .toLowerCase()
                        .includes(query) ||

                    subcategory
                        .toLowerCase()
                        .includes(query);


                if (categoryMatch && searchMatch) {

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


/* =========================
   GET MAIN CATEGORY
========================= */

function getMainCategory(subcategory) {

    for (const category in productsData) {

        const subcategories =
            productsData[category];

        const exists =
            subcategories.some(
                (item) =>
                    item.name === subcategory
            );

        if (exists) {

            return categoryNames[category];

        }

    }

    return "";

}


/* =========================
   SHOW SEARCH RESULTS
========================= */

function showSearchResults(results, query) {

    const searchResults =
        document.querySelector("#search-results");

    const searchResultsGrid =
        document.querySelector("#search-results-grid");

    const searchResultsTitle =
        document.querySelector("#search-results-title");


    if (
        !searchResults ||
        !searchResultsGrid ||
        !searchResultsTitle
    ) {

        return;

    }


    if (!query || query.trim() === "") {

        hideSearchResults();

        return;

    }


    searchResultsTitle.textContent =
        `Search Results for "${query}"`;

    searchResultsGrid.innerHTML = "";


    /* =========================
       NO RESULTS
    ========================= */

    if (results.length === 0) {

        searchResultsGrid.innerHTML = `

            <div class="products-empty">

                <i class="fa-solid fa-magnifying-glass"></i>

                <h3>
                    No Products Found
                </h3>

                <p>
                    We couldn't find a product matching your search.
                </p>

            </div>

        `;

    }


    /* =========================
       PRODUCTS FOUND
    ========================= */

    else {

        results.forEach((product) => {

            const card =
                document.createElement("div");

            card.className =
                "individual-product-card";


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

                  


                    <h3>
                        ${product.name}
                    </h3>


                    <div class="individual-product-bottom">

                        <div class="product-price-moq">

                            <strong>
                                ${product.price}
                            </strong>

                            <span class="product-moq">
                                MOQ: ${product.MOQ}
                            </span>

                        </div>

                           <button
    class="add-cart-btn"
    type="button"
    onclick='addToCart(${JSON.stringify(product)})'
>
    Order Now
</button>

                    </div>

                </div>

            `;

            searchResultsGrid.appendChild(card);

        });

    }


    /* =========================
       SHOW RESULTS
    ========================= */

    searchResults.style.display = "block";

    searchResults.classList.add("show");


    setTimeout(() => {

        searchResults.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }, 100);

}


/* =========================
   NEWSLETTER
========================= */

const newsletterForm =
document.getElementById("newsletter-form");

const newsletterEmail =
document.getElementById("newsletter-email");

const newsletterMessage =
document.getElementById("newsletter-message");

if (newsletterForm) {

    newsletterForm.addEventListener(
        "submit",
        function (e) {

            e.preventDefault();

            const email =
            newsletterEmail.value.trim();

            if (email === "") {

                newsletterMessage.textContent =
                "Please enter your email.";

                newsletterMessage.style.color =
                "#ff4d4d";

                return;
            }

            newsletterMessage.textContent =
            "Thank you for subscribing!";

            newsletterMessage.style.color =
            "#00e676";

            newsletterForm.reset();

            setTimeout(() => {

                newsletterMessage.textContent =
                "";

            }, 3000);

        }
    );

}