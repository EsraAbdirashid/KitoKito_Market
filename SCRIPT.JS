


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

  const categoryItems = document.querySelectorAll(
    ".category-dropdown button",
  );

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
      image: "images/jump starter 50pcs.jpg.jpeg",
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
      image: "images/50pcs car wheel.jpg.jpeg",
    },

    {
      name: "Car Accessory",
      image: "images/100pcs.jpg.jpeg",
    },
  ],

  /* =====================================================
       STATIONERY
    ===================================================== */

  stationery: [
    {
      name: "A4 Glossy",
      image: "images/a4 glossy 200pcs.jpg",
    },

    {
      name: "Canon iR2224-1",
      image: "images/Canon-iR2224-1(1pcs).jpg",
    },

    {
      name: "Cutter",
      image: "images/Cutter(50pcs).jpg",
    },

    {
      name: "Desk Title",
      image: "images/desk title(50pcs).jpg",
    },

    {
      name: "Envelopes",
      image: "images/envelops(500pcs).jpg",
    },

    {
      name: "Epson",
      image: "images/epson(30pcs) .jpg",
    },

    {
      name: "Eraser and Cutting",
      image: "images/eraser and cutter(1000pcs).jpg",
    },

    {
      name: "Feather Flags",
      image: "images/feather flags(100pcs) .jpg",
    },

    {
      name: "File Folders",
      image: "images/file folders800pcs.jpg",
    },

    {
      name: "Highlighters",
      image: "images/highlightere 1000pcs.jpg",
    },

    {
      name: "HP LaserJet Pro Printer",
      image: "images/HP-LaserJet-Pro-3001dw-Laser-Pri(10pcs).jpg",
    },

    {
      name: "Inks",
      image: "images/inks.jpg",
    },

    {
      name: "Konica",
      image: "images/konica 1pcs.jpg",
    },

    {
      name: "Marker",
      image: "images/marker2000pcs.jpg",
    },

    {
      name: "Note Books",
      image: "images/note books. 3000pcs.jpg",
    },

    {
      name: "Pen",
      image: "images/pen 3000pcs.jpg",
    },

    {
      name: "Pencils",
      image: "images/pencils3000pcs.jpg",
    },

    {
      name: "PVC Cards",
      image: "images/pvc cards 1000pcs.jpg",
    },

    {
      name: "Riso",
      image: "images/riso 1pcs .jpg",
    },

    {
      name: "Rulers",
      image: "images/rullers3000pcs.jpg",
    },

    {
      name: "Stand Banners",
      image: "images/stand banners100pcs.jpg",
    },

    {
      name: "Sticky Notes",
      image: "images/sticky notes 3000pcs.jpg",
    },

    {
      name: "Tray",
      image: "images/Tray200pcs.jpg",
    },

    {
      name: "White Board",
      image: "images/white boards(50pcs).jpg",
    },
  ],

  /* =====================================================
       ELECTRONICS
    ===================================================== */

  electronics: [
    {
      name: "Phone Cases",
      image: "images/products/phone-cases.jpg",
    },

    {
      name: "Earphones",
      image: "images/products/earphones.jpg",
    },

    {
      name: "Bluetooth Speakers",
      image: "images/products/bluetooth-speakers.jpg",
    },

    {
      name: "Chargers & Adapters",
      image: "images/products/chargers-adapters.jpg",
    },

    {
      name: "Covers",
      image: "images/products/covers.jpg",
    },

    {
      name: "Headphones",
      image: "images/products/headphones.jpg",
    },

    {
      name: "Laptops",
      image: "images/products/laptops.jpg",
    },

    {
      name: "Power Banks",
      image: "images/products/power-banks.jpg",
    },

    {
      name: "Power Strips",
      image: "images/products/power-strips.jpg",
    },

    {
      name: "Screen Protectors",
      image: "images/products/screen-protectors.jpg",
    },

    {
      name: "Smart Phones",
      image: "images/products/smart-phones.jpg",
    },

    {
      name: "Smart Watches",
      image: "images/products/smart-watches.jpg",
    },

    {
      name: "USB Cables",
      image: "images/products/usb-cables.jpg",
    },

    {
      name: "USB Flash Drives",
      image: "images/products/usb-flash-drives.jpg",
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
   INDIVIDUAL PRODUCTS
========================================================= */

const individualProducts = {
  /* =====================================================
     HOME & KITCHEN
  ===================================================== */

  "Washing Machine": [
    {
      name: "Washing Machine",
      image: "images/washin machine.jpeg",
      wholesale: "Wholesale",
      moq: "50 pcs",
    },
  ],

  "Mini Household Products": [
    {
      name: "Mini Household Products",
      image: "images/min.jpeg",
      wholesale: "Wholesale",
      moq: "50 pcs",
    },
  ],

  Cutlery: [
    {
      name: "Cutlery",
      image: "images/cultery.jpeg",
      wholesale: "Wholesale",
      moq: "100 pcs",
    },
  ],

  "Cooking Tools": [
    {
      name: "Cooking Tools",
      image: "images/cooking-tools.jpeg",
      wholesale: "Wholesale",
      moq: "150 pcs",
    },
  ],

  "Storage Baskets": [
    {
      name: "Storage Baskets",
      image: "images/home-basket.jpeg",
      wholesale: "Wholesale",
      moq: "3000 pcs",
    },
  ],

  "Home Accessories": [
    {
      name: "Home Accessories",
      image: "images/home-access.jpeg",
      wholesale: "Wholesale",
      moq: "50 pcs",
    },
  ],

  Refrigerator: [
    {
      name: "Refrigerator",
      image: "images/talaagad.jpeg",
      wholesale: "Wholesale",
      moq: "10 pcs",
    },
  ],

  "TCL TV": [
    {
      name: "TCL TV",
      image: "images/TCL TV.jpeg",
      wholesale: "Wholesale",
      moq: "5 pcs",
    },
  ],

  /* =====================================================
     CAR ACCESSORIES
  ===================================================== */

  "Jump Starter": [
    {
      name: "Jump Starter",
      image: "images/jump starter 50pcs.jpg.jpeg",
      wholesale: "Wholesale",
      moq: "50 pcs",
    },
  ],

  "Car USB Charger": [
    {
      name: "Car USB Charger",
      image: "images/car usb charger 20pcs.jpg.jpeg",
      wholesale: "Wholesale",
      moq: "20 pcs",
    },
  ],

  "Car Sun Shade": [
    {
      name: "Car Sun Shade",
      image: "images/car sun shade 300pcs.jpg.jpeg",
      wholesale: "Wholesale",
      moq: "300 pcs",
    },
  ],

  "Car Seat Cover": [
    {
      name: "Car Seat Cover",
      image: "images/car seat 10pcs.jpg.jpeg",
      wholesale: "Wholesale",
      moq: "10 pcs",
    },
  ],

  "Car Phone Holder": [
    {
      name: "Car Phone Holder",
      image: "images/car phone holder 50 pcs.jpg.jpeg",
      wholesale: "Wholesale",
      moq: "50 pcs",
    },
  ],

  "Car Headlights": [
    {
      name: "Car Headlights",
      image: "images/car headlights 5pcs.jpg.jpeg",
      wholesale: "Wholesale",
      moq: "5 pcs",
    },
  ],

  "Car Cleaner Set": [
    {
      name: "Car Cleaner Set",
      image: "images/car cleaner set 700pcs.jpg.jpeg",
      wholesale: "Wholesale",
      moq: "700 pcs",
    },
  ],

  "Car Air Freshener": [
    {
      name: "Car Air Freshener",
      image: "images/car air freshener 15pcs.jpg.jpeg",
      wholesale: "Wholesale",
      moq: "15 pcs",
    },
  ],

  "Car Wheel Cover": [
    {
      name: "Car Wheel Cover",
      image: "images/50pcs car wheel.jpg.jpeg",
      wholesale: "Wholesale",
      moq: "50 pcs",
    },
  ],

  "Car Accessory": [
    {
      name: "Car Accessory",
      image: "images/100pcs.jpg.jpeg",
      wholesale: "Wholesale",
      moq: "100 pcs",
    },
  ],

  /* =====================================================
     STATIONERY
  ===================================================== */

  "A4 Glossy": [
    {
      name: "A4 Glossy",
      image: "images/a4 glossy 200pcs.jpg",
      wholesale: "Wholesale",
      moq: "200 pcs",
    },
  ],

  "Canon iR2224-1": [
    {
      name: "Canon iR2224-1",
      image: "images/Canon-iR2224-1(1pcs).jpg",
      wholesale: "Wholesale",
      moq: "1 pc",
    },
  ],

  Cutter: [
    {
      name: "Cutter",
      image: "images/Cutter(50pcs).jpg",
      wholesale: "Wholesale",
      moq: "50 pcs",
    },
  ],

  "Desk Title": [
    {
      name: "Desk Title",
      image: "images/desk title(50pcs).jpg",
      wholesale: "Wholesale",
      moq: "50 pcs",
    },
  ],

  Envelopes: [
    {
      name: "Envelopes",
      image: "images/envelops(500pcs).jpg",
      wholesale: "Wholesale",
      moq: "500 pcs",
    },
  ],

  Epson: [
    {
      name: "Epson",
      image: "images/epson(30pcs) .jpg",
      wholesale: "Wholesale",
      moq: "30 pcs",
    },
  ],

  "Eraser and Cutting": [
    {
      name: "Eraser and Cutting",
      image: "images/eraser and cutter(1000pcs).jpg",
      wholesale: "Wholesale",
      moq: "1000 pcs",
    },
  ],

  "Feather Flags": [
    {
      name: "Feather Flags",
      image: "images/feather flags(100pcs) .jpg",
      wholesale: "Wholesale",
      moq: "100 pcs",
    },
  ],

  "File Folders": [
    {
      name: "File Folders",
      image: "images/file folders800pcs.jpg",
      wholesale: "Wholesale",
      moq: "800 pcs",
    },
  ],

  Highlighters: [
    {
      name: "Highlighters",
      image: "images/highlightere 1000pcs.jpg",
      wholesale: "Wholesale",
      moq: "1000 pcs",
    },
  ],

  "HP LaserJet Pro Printer": [
    {
      name: "HP LaserJet Pro Printer",
      image:
        "images/HP-LaserJet-Pro-3001dw-Laser-Pri(10pcs).jpg",
      wholesale: "Wholesale",
      moq: "1 pc",
    },
  ],

  Inks: [
    {
      name: "Inks",
      image: "images/inks.jpg",
      wholesale: "Wholesale",
      moq: "1 pc",
    },
  ],

  Konica: [
    {
      name: "Konica",
      image: "images/konica 1pcs.jpg",
      wholesale: "Wholesale",
      moq: "1 pc",
    },
  ],

  Marker: [
    {
      name: "Marker",
      image: "images/marker2000pcs.jpg",
      wholesale: "Wholesale",
      moq: "2000 pcs",
    },
  ],

  "Note Books": [
    {
      name: "Note Books",
      image: "images/note books. 3000pcs.jpg",
      wholesale: "Wholesale",
      moq: "3000 pcs",
    },
  ],

  Pen: [
    {
      name: "Pen",
      image: "images/pen 3000pcs.jpg",
      wholesale: "Wholesale",
      moq: "3000 pcs",
    },
  ],

  Pencils: [
    {
      name: "Pencils",
      image: "images/pencils3000pcs.jpg",
      wholesale: "Wholesale",
      moq: "3000 pcs",
    },
  ],

  "PVC Cards": [
    {
      name: "PVC Cards",
      image: "images/pvc cards 1000pcs.jpg",
      wholesale: "Wholesale",
      moq: "1000 pcs",
    },
  ],

  Riso: [
    {
      name: "Riso",
      image: "images/riso 1pcs .jpg",
      wholesale: "Wholesale",
      moq: "1 pc",
    },
  ],

  Rulers: [
    {
      name: "Rulers",
      image: "images/rullers3000pcs.jpg",
      wholesale: "Wholesale",
      moq: "1000 pcs",
    },
  ],

  "Hand Sanitizer": [
    {
      name: "Hand Sanitizer",
      image: "images/hand sanitizer.jpg",
      wholesale: "Wholesale",
      moq: "100 pcs",
    },
  ],

  "Sticky Notes": [
    {
      name: "Sticky Notes",
      image: "images/sticky notes 3000pcs.jpg",
      wholesale: "Wholesale",
      moq: "300 pcs",
    },
  ],

  Tray: [
    {
      name: "Tray",
      image: "images/Tray200pcs.jpg",
      wholesale: "Wholesale",
      moq: "200 pcs",
    },
  ],

  "White Board": [
    {
      name: "White Board",
      image: "images/white boards(50pcs).jpg",
      wholesale: "Wholesale",
      moq: "50 pcs",
    },
  ],

  /* =====================================================
     ELECTRONICS
     Type + Model will be entered when Order Now is clicked.
  ===================================================== */

  "Phone Cases": [
    {
      name: "Phone Cases",
      image: "images/products/phone-cases.jpg",
      wholesale: "Wholesale",
      moq: "",
    },
  ],

  Earphones: [
    {
      name: "Earphones",
      image: "images/products/earphones.jpg",
      wholesale: "Wholesale",
      moq: "100 pcs",
    },
  ],

  "Bluetooth Speakers": [
    {
      name: "Bluetooth Speakers",
      image: "images/products/bluetooth-speakers.jpg",
      wholesale: "Wholesale",
      moq: "10 pcs",
    },
  ],

  "Chargers & Adapters": [
    {
      name: "Chargers & Adapters",
      image: "images/products/chargers-adapters.jpg",
      wholesale: "Wholesale",
      moq: "5 boxes × 12 pcs",
    },
  ],

  Covers: [
    {
      name: "Covers",
      image: "images/products/covers.jpg",
      wholesale: "Wholesale",
      moq: "30 pcs",
    },
  ],

  Headphones: [
    {
      name: "Headphones",
      image: "images/products/headphones.jpg",
      wholesale: "Wholesale",
      moq: "10 pcs",
    },
  ],

  Laptops: [
    {
      name: "Laptops",
      image: "images/products/laptops.jpg",
      wholesale: "Wholesale",
      moq: "10 pcs",
    },
  ],

  "Power Banks": [
    {
      name: "Power Banks",
      image: "images/products/power-banks.jpg",
      wholesale: "Wholesale",
      moq: "50 pcs",
    },
  ],

  "Power Strips": [
    {
      name: "Power Strips",
      image: "images/products/power-strips.jpg",
      wholesale: "Wholesale",
      moq: "",
    },
  ],

  "Screen Protectors": [
    {
      name: "Screen Protectors",
      image: "images/products/screen-protectors.jpg",
      wholesale: "Wholesale",
      moq: "200 pcs",
    },
  ],

  "Smart Phones": [
    {
      name: "Smart Phones",
      image: "images/products/smart-phones.jpg",
      wholesale: "Wholesale",
      moq: "3 boxes × 12 pcs",
    },
  ],

  "Smart Watches": [
    {
      name: "Smart Watches",
      image: "images/products/smart-watches.jpg",
      wholesale: "Wholesale",
      moq: "50 pcs",
    },
  ],

  "USB Cables": [
    {
      name: "USB Cables",
      image: "images/products/usb-cables.jpg",
      wholesale: "Wholesale",
      moq: "30 pcs",
    },
  ],

  "USB Flash Drives": [
    {
      name: "USB Flash Drives",
      image: "images/products/usb-flash-drives.jpg",
      wholesale: "Wholesale",
      moq: "70 pcs",
    },
  ],
};

/* =========================================================
   CATEGORY HELPERS
========================================================= */

function getMainCategory(subcategory) {
  const normalized = String(subcategory || "").trim().toLowerCase();

  if (
    productsData.electronics.some(
      (item) => item.name.trim().toLowerCase() === normalized,
    )
  ) {
    return "Electronics";
  }

  if (
    productsData.home.some(
      (item) => item.name.trim().toLowerCase() === normalized,
    )
  ) {
    return "Home & Kitchen";
  }

  if (
    productsData.car.some(
      (item) => item.name.trim().toLowerCase() === normalized,
    )
  ) {
    return "Car Accessories";
  }

  if (
    productsData.stationery.some(
      (item) => item.name.trim().toLowerCase() === normalized,
    )
  ) {
    return "Stationery";
  }

  return "";
}

/* =========================================================
   OPEN PRODUCTS
========================================================= */

function openProducts(subcategory) {
  const productsSection = document.querySelector("#products-section");
  const productsGrid = document.querySelector("#products-grid");
  const productsTitle = document.querySelector("#products-title");

  if (!productsGrid) {
    return;
  }

  const products = individualProducts[subcategory] || [];

  productsGrid.innerHTML = "";

  if (productsTitle) {
    productsTitle.textContent = subcategory;
  }

  if (!products.length) {
    productsGrid.innerHTML = `
      <div class="no-products">
        <p>No products available in this category.</p>
      </div>
    `;
  }

  products.forEach((product, index) => {
    const productCard = document.createElement("div");

    productCard.className = "product-card";

    productCard.innerHTML = `
      <div class="product-image-wrapper">

        <img
          src="${product.image}"
          alt="${product.name}"
          class="product-image"
        >

        <button
          class="wishlist-btn"
          type="button"
          onclick='toggleWishlist(${JSON.stringify(product)})'
          aria-label="Add to wishlist"
        >
          <i class="fa-regular fa-heart"></i>
        </button>

      </div>

      <div class="product-info">

        <h3>${product.name}</h3>

        <p class="product-wholesale">
          ${product.wholesale || "Wholesale"}
        </p>

        ${
          product.moq
            ? `<p class="product-moq">MOQ: ${product.moq}</p>`
            : ""
        }

        <button
          class="order-now-btn"
          type="button"
          onclick='orderProduct(
            ${JSON.stringify(product)},
            ${JSON.stringify(subcategory)}
          )'
        >
          Order Now
        </button>

      </div>
    `;

    productsGrid.appendChild(productCard);
  });

  if (productsSection) {
    productsSection.classList.add("show");
    productsSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}

/* =========================================================
   ORDER DETAILS MODAL
   Electronics only
========================================================= */

function createOrderDetailsModal() {
  let modal = document.querySelector("#order-details-modal");

  if (modal) {
    return modal;
  }

  const style = document.createElement("style");

  style.id = "order-details-modal-style";

  style.textContent = `
    #order-details-modal {
      position: fixed;
      inset: 0;
      z-index: 9999;
      display: none;
      align-items: center;
      justify-content: center;
      padding: 20px;
      background: rgba(0, 0, 0, 0.55);
    }

    #order-details-modal.show {
      display: flex;
    }

    .order-details-box {
      width: min(420px, 100%);
      background: #fff;
      border-radius: 10px;
      padding: 24px;
      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
    }

    .order-details-box h3 {
      margin: 0 0 6px;
      color: #27316c;
      font-size: 20px;
    }

    .order-details-subtitle {
      margin: 0 0 20px;
      color: #666;
      font-size: 13px;
    }

    .order-details-field {
      margin-bottom: 14px;
    }

    .order-details-field label {
      display: block;
      margin-bottom: 6px;
      color: #27316c;
      font-size: 13px;
      font-weight: 600;
    }

    .order-details-field input {
      width: 100%;
      height: 42px;
      padding: 0 12px;
      border: 1px solid #ddd;
      border-radius: 6px;
      outline: none;
      box-sizing: border-box;
      color: #27316c;
      font-family: inherit;
      font-size: 14px;
    }

    .order-details-field input:focus {
      border-color: #27316c;
    }

    .order-details-actions {
      display: flex;
      gap: 10px;
      margin-top: 20px;
    }

    .order-details-actions button {
      flex: 1;
      height: 40px;
      border: none;
      border-radius: 6px;
      font-family: inherit;
      font-size: 13px;
      font-weight: 600;
      cursor: pointer;
    }

    #cancel-order-details {
      background: #eee;
      color: #333;
    }

    #confirm-order-details {
      background: #27316c;
      color: #fff;
    }

    #confirm-order-details:hover {
      background: #fcb316;
      color: #27316c;
    }

    @media (max-width: 480px) {
      #order-details-modal {
        padding: 14px;
      }

      .order-details-box {
        padding: 20px;
      }
    }
  `;

  document.head.appendChild(style);

  modal = document.createElement("div");

  modal.id = "order-details-modal";

  modal.innerHTML = `
    <div class="order-details-box">

      <h3 id="order-details-title">
        Order Product
      </h3>

      <p class="order-details-subtitle">
        Please enter the Type and Model you want.
      </p>

      <div class="order-details-field">

        <label for="order-type-input">
          Type
        </label>

        <input
          id="order-type-input"
          type="text"
          placeholder="Enter Type"
          autocomplete="off"
        >

      </div>

      <div class="order-details-field">

        <label for="order-model-input">
          Model
        </label>

        <input
          id="order-model-input"
          type="text"
          placeholder="Enter Model"
          autocomplete="off"
        >

      </div>

      <div class="order-details-actions">

        <button
          id="cancel-order-details"
          type="button"
        >
          Cancel
        </button>

        <button
          id="confirm-order-details"
          type="button"
        >
          Add to Cart
        </button>

      </div>

    </div>
  `;

  document.body.appendChild(modal);

  return modal;
}

/* =========================================================
   ORDER PRODUCT
========================================================= */

function orderProduct(product, subcategory) {
  const mainCategory = getMainCategory(subcategory);

  /*
    Non-Electronics:
    Keep the old behavior.
  */

  if (mainCategory !== "Electronics") {
    addToCart(product);
    return;
  }

  /*
    Electronics:
    Ask customer for Type and Model.
  */

  const modal = createOrderDetailsModal();

  const title = document.querySelector(
    "#order-details-title",
  );

  const typeInput = document.querySelector(
    "#order-type-input",
  );

  const modelInput = document.querySelector(
    "#order-model-input",
  );

  const cancelButton = document.querySelector(
    "#cancel-order-details",
  );

  const confirmButton = document.querySelector(
    "#confirm-order-details",
  );

  title.textContent = `Order ${product.name}`;

  typeInput.value = "";
  modelInput.value = "";

  modal.classList.add("show");

  const closeModal = () => {
    modal.classList.remove("show");
  };

  cancelButton.onclick = closeModal;

  confirmButton.onclick = () => {
    const type = typeInput.value.trim();
    const model = modelInput.value.trim();

    if (!type || !model) {
      alert("Please enter both Type and Model.");
      return;
    }

    const productWithDetails = {
      ...product,
      selectedType: type,
      selectedModel: model,
    };

    addToCart(productWithDetails);

    closeModal();
  };

  modal.onclick = (event) => {
    if (event.target === modal) {
      closeModal();
    }
  };
}

/* =========================================================
   WISHLIST
========================================================= */

let wishlist = [];

function toggleWishlist(product) {
  const existingIndex = wishlist.findIndex(
    (item) => item.name === product.name,
  );

  if (existingIndex !== -1) {
    wishlist.splice(existingIndex, 1);

    alert("Removed from wishlist.");
  } else {
    wishlist.push(product);

    alert("Added to wishlist.");
  }
}

/* =========================================================
   CART
========================================================= */

let cart = [];

/* =========================================================
   ADD TO CART
========================================================= */

function addToCart(product) {
  cart.push(product);

  updateCart();

  const cartPanel = document.querySelector("#cart-panel");

  if (cartPanel) {
    cartPanel.classList.add("show");
  }
}

/* =========================================================
   REMOVE FROM CART
========================================================= */

function removeFromCart(index) {
  cart.splice(index, 1);

  updateCart();
}

/* =========================================================
   UPDATE CART
========================================================= */

function updateCart() {
  const cartItems = document.querySelector("#cart-items");
  const cartCount = document.querySelector("#cart-count");
  const cartTotal = document.querySelector("#cart-total");

  if (!cartItems) {
    return;
  }

  cartItems.innerHTML = "";

  if (!cart.length) {
    cartItems.innerHTML = `
      <div class="empty-cart">
        <p>Your cart is empty.</p>
      </div>
    `;

    if (cartCount) {
      cartCount.textContent = "0";
    }

    if (cartTotal) {
      cartTotal.textContent = "$0.00";
    }

    return;
  }

  cart.forEach((product, index) => {
    const item = document.createElement("div");

    item.className = "cart-item";

    item.innerHTML = `
      <div class="cart-item-image">
        <img
          src="${product.image}"
          alt="${product.name}"
        >
      </div>

      <div class="cart-item-info">

        <h4>
          ${product.name}
        </h4>

        ${
          product.selectedType
            ? `<small>Type: ${product.selectedType}</small>`
            : ""
        }

        ${
          product.selectedModel
            ? `<small>Model: ${product.selectedModel}</small>`
            : ""
        }

        ${
          product.moq
            ? `<small>MOQ: ${product.moq}</small>`
            : ""
        }

        <small>
          ${product.wholesale || "Wholesale"}
        </small>

      </div>

      <button
        class="remove-cart-item"
        type="button"
        onclick="removeFromCart(${index})"
        aria-label="Remove product"
      >
        <i class="fa-solid fa-trash"></i>
      </button>
    `;

    cartItems.appendChild(item);
  });

  if (cartCount) {
    cartCount.textContent = cart.length;
  }

  if (cartTotal) {
    cartTotal.textContent = "Wholesale";
  }
}

/* =========================================================
   CART OPEN / CLOSE
========================================================= */

const cartButton = document.querySelector("#cart-button");
const cartPanel = document.querySelector("#cart-panel");
const closeCart = document.querySelector("#close-cart");

if (cartButton && cartPanel) {
  cartButton.addEventListener("click", () => {
    cartPanel.classList.add("show");

    updateCart();
  });
}

if (closeCart && cartPanel) {
  closeCart.addEventListener("click", () => {
    cartPanel.classList.remove("show");
  });
}

/* =========================================================
   CHECKOUT
========================================================= */

const checkoutButton = document.querySelector("#checkout-btn");
const checkoutPanel = document.querySelector("#checkout-panel");
const closeCheckout = document.querySelector("#close-checkout");

if (checkoutButton) {
  checkoutButton.addEventListener("click", () => {
    if (!cart.length) {
      alert("Your cart is empty.");
      return;
    }

    const checkoutItems = document.querySelector(
      "#checkout-items",
    );

    if (checkoutItems) {
      checkoutItems.innerHTML = "";

      cart.forEach((product) => {
        const item = document.createElement("div");

        item.className = "checkout-item";

        item.innerHTML = `
          <div class="checkout-product">

            <img
              src="${product.image}"
              alt="${product.name}"
            >

            <div>

              <h4>
                ${product.name}
              </h4>

              ${
                product.selectedType
                  ? `<p>Type: ${product.selectedType}</p>`
                  : ""
              }

              ${
                product.selectedModel
                  ? `<p>Model: ${product.selectedModel}</p>`
                  : ""
              }

              ${
                product.moq
                  ? `<p>MOQ: ${product.moq}</p>`
                  : ""
              }

              <p>
                ${product.wholesale || "Wholesale"}
              </p>

            </div>

          </div>
        `;

        checkoutItems.appendChild(item);
      });
    }

    if (cartPanel) {
      cartPanel.classList.remove("show");
    }

    if (checkoutPanel) {
      checkoutPanel.classList.add("show");
    }
  });
}

if (closeCheckout && checkoutPanel) {
  closeCheckout.addEventListener("click", () => {
    checkoutPanel.classList.remove("show");
  });
}

/* =========================================================
   PLACE ORDER
========================================================= */

const placeOrderButton =
  document.querySelector("#place-order");

if (placeOrderButton) {
  placeOrderButton.addEventListener("click", () => {
    const customerName =
      document.querySelector("#customer-name")?.value.trim();

    const customerPhone =
      document.querySelector("#customer-phone")?.value.trim();

    const customerAddress =
      document.querySelector("#customer-address")?.value.trim();

    if (!customerName || !customerPhone || !customerAddress) {
      alert("Please fill in all customer information.");
      return;
    }

    if (!cart.length) {
      alert("Your cart is empty.");
      return;
    }

    /* =====================================================
       WHATSAPP MESSAGE
    ===================================================== */

    let message = "KITOKITO MARKET ORDER\n\n";

    message += `Customer Name: ${customerName}\n`;
    message += `Phone: ${customerPhone}\n`;
    message += `Address: ${customerAddress}\n\n`;

    message += "ORDER DETAILS\n";
    message += "-------------------------\n\n";

    cart.forEach((product, index) => {
      message += `${index + 1}. ${product.name}\n`;

      if (product.selectedType) {
        message += `Type: ${product.selectedType}\n`;
      }

      if (product.selectedModel) {
        message += `Model: ${product.selectedModel}\n`;
      }

      if (product.moq) {
        message += `MOQ: ${product.moq}\n`;
      }

      message += `${product.wholesale || "Wholesale"}\n\n`;
    });

    message += "Please confirm my order.";

    /*
      Replace this number with the Kitokito Market
      WhatsApp business number if your existing number
      is different.
    */

    const whatsappNumber = "251XXXXXXXXX";

    const whatsappURL =
      `https://wa.me/${whatsappNumber}?text=` +
      encodeURIComponent(message);

    window.open(whatsappURL, "_blank");

    /* =====================================================
       CLEAR CUSTOMER INFORMATION
    ===================================================== */

    const nameInput =
      document.querySelector("#customer-name");

    const phoneInput =
      document.querySelector("#customer-phone");

    const addressInput =
      document.querySelector("#customer-address");

    if (nameInput) {
      nameInput.value = "";
    }

    if (phoneInput) {
      phoneInput.value = "";
    }

    if (addressInput) {
      addressInput.value = "";
    }

    /* =====================================================
       CLOSE CHECKOUT
    ===================================================== */

    if (checkoutPanel) {
      checkoutPanel.classList.remove("show");
    }

    /* =====================================================
       CLEAR CART
    ===================================================== */

    cart.length = 0;

    updateCart();
  });
}

/* =========================================================
   SEARCH
========================================================= */

const searchInput =
  document.querySelector("#search-input");

const searchResults =
  document.querySelector("#search-results");

function getAllProductsForSearch() {
  const allProducts = [];

  Object.keys(individualProducts).forEach(
    (subcategory) => {
      individualProducts[subcategory].forEach(
        (product) => {
          allProducts.push({
            ...product,
            subcategory: subcategory,
          });
        },
      );
    },
  );

  return allProducts;
}

function searchProducts(query) {
  if (!searchResults) {
    return;
  }

  const searchTerm = query.trim().toLowerCase();

  if (!searchTerm) {
    searchResults.innerHTML = "";
    searchResults.classList.remove("show");
    return;
  }

  const allProducts = getAllProductsForSearch();

  const results = allProducts.filter((product) => {
    return product.name
      .toLowerCase()
      .includes(searchTerm);
  });

  searchResults.innerHTML = "";

  if (!results.length) {
    searchResults.innerHTML = `
      <div class="no-search-results">
        No products found.
      </div>
    `;

    searchResults.classList.add("show");

    return;
  }

  results.forEach((product) => {
    const resultItem = document.createElement("div");

    resultItem.className = "search-result-item";

    resultItem.innerHTML = `
      <div class="search-result-image">

        <img
          src="${product.image}"
          alt="${product.name}"
        >

      </div>

      <div class="search-result-info">

        <h4>
          ${product.name}
        </h4>

        ${
          product.moq
            ? `<small>MOQ: ${product.moq}</small>`
            : ""
        }

        <button
          type="button"
          onclick='orderProduct(
            ${JSON.stringify(product)},
            ${JSON.stringify(product.subcategory)}
          )'
        >
          Order Now
        </button>

      </div>
    `;

    searchResults.appendChild(resultItem);
  });

  searchResults.classList.add("show");
}

if (searchInput) {
  searchInput.addEventListener("input", () => {
    searchProducts(searchInput.value);
  });
}

/* =========================================================
   CLOSE SEARCH RESULTS
========================================================= */

document.addEventListener("click", (event) => {
  if (!searchInput || !searchResults) {
    return;
  }

  if (
    !searchInput.contains(event.target) &&
    !searchResults.contains(event.target)
  ) {
    searchResults.classList.remove("show");
  }
});

/* =========================================================
   SHOP NOW / CATEGORY NAVIGATION
========================================================= */

const shopNowButtons =
  document.querySelectorAll(".shop-now-btn");

shopNowButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const category = button.dataset.category;

    if (!category) {
      return;
    }

    const subcategories =
      productsData[category] || [];

    const categoryGrid =
      document.querySelector("#subcategory-grid");

    const categorySection =
      document.querySelector("#subcategory-section");

    if (!categoryGrid) {
      return;
    }

    categoryGrid.innerHTML = "";

    subcategories.forEach((subcategory) => {
      const card = document.createElement("div");

      card.className = "subcategory-card";

      card.innerHTML = `
        <img
          src="${subcategory.image}"
          alt="${subcategory.name}"
        >

        <h3>
          ${subcategory.name}
        </h3>

        <button
          type="button"
          class="view-products-btn"
          onclick='openProducts(
            ${JSON.stringify(subcategory.name)}
          )'
        >
          View Products
        </button>
      `;

      categoryGrid.appendChild(card);
    });

    if (categorySection) {
      categorySection.classList.add("show");

      categorySection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

/* =========================================================
   INITIAL CART
========================================================= */

updateCart();

/* =========================================================
   CLOSE MODAL WITH ESCAPE
========================================================= */

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") {
    return;
  }

  const modal = document.querySelector(
    "#order-details-modal",
  );

  if (modal) {
    modal.classList.remove("show");
  }

  if (cartPanel) {
    cartPanel.classList.remove("show");
  }

  if (checkoutPanel) {
    checkoutPanel.classList.remove("show");
  }
});

/* =========================================================
   PAGE LOAD
========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  updateCart();

  if (slides.length) {
    showSlide(0);
  }
});