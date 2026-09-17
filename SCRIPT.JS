


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

