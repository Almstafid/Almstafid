/* ==================== MENU ======================= */

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const closeBtn = document.getElementById("closeBtn");

if(menuBtn && mobileMenu){

    menuBtn.addEventListener("click", () => {

        mobileMenu.classList.add("active");

    });
}

if(closeBtn && mobileMenu){

    closeBtn.addEventListener("click", () => {

        mobileMenu.classList.remove("active");

    });
}

/* ==================== HERO SLIDER ======================= */

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let currentSlide = 0;

function showSlide(index){

    slides.forEach((slide) => {

        slide.classList.remove("active");

    });

    dots.forEach((dot) => {

        dot.classList.remove("active");

    });

    if(slides[index]){

        slides[index].classList.add("active");
    }

    if(dots[index]){

        dots[index].classList.add("active");
    }
}

function nextSlide(){

    currentSlide++;

    if(currentSlide >= slides.length){

        currentSlide = 0;
    }

    showSlide(currentSlide);
}

function prevSlide(){

    currentSlide--;

    if(currentSlide < 0){

        currentSlide = slides.length - 1;
    }

    showSlide(currentSlide);
}

if(nextBtn){

    nextBtn.addEventListener("click", nextSlide);
}

if(prevBtn){

    prevBtn.addEventListener("click", prevSlide);
}

if(slides.length > 0){

    setInterval(nextSlide, 4000);
}

dots.forEach((dot, index) => {

    dot.addEventListener("click", () => {

        currentSlide = index;

        showSlide(currentSlide);

    });
});


/* ==================== كرمال يسحب بي ايده على لابتوب ======================= */

let touchStartX = 0;
let touchEndX = 0;

const heroSlider = document.querySelector(".hero-slider");

heroSlider.addEventListener("touchstart", (e) => {

    touchStartX = e.changedTouches[0].screenX;

});

heroSlider.addEventListener("touchend", (e) => {

    touchEndX = e.changedTouches[0].screenX;

    handleSwipe();

});

function handleSwipe(){

    if(touchEndX < touchStartX - 50){

        nextSlide();

    }

    if(touchEndX > touchStartX + 50){

        prevSlide();

    }

}
/* ==================== SEARCH BOX ======================= */

const searchIcon = document.querySelector(".nav-icons .fa-magnifying-glass");
const searchBox = document.getElementById("searchBox");
const searchInput = document.querySelector(".search-box input");

if(searchIcon && searchBox){

    searchIcon.addEventListener("click", () => {

        searchBox.classList.toggle("active");

        if(searchBox.classList.contains("active")){

            searchInput.focus();
        }
    });
}

document.addEventListener("click", (e) => {

    if(
        searchBox &&
        !searchBox.contains(e.target) &&
        searchIcon &&
        !searchIcon.contains(e.target)
    ){

        searchBox.classList.remove("active");
    }
});

/* ==================== PASSWORD SHOW / HIDE ======================= */

const togglePassword = document.getElementById("togglePassword");
const passwordInput = document.getElementById("passwordInput");

if(togglePassword && passwordInput){

    togglePassword.addEventListener("click", () => {

        if(passwordInput.type === "password"){

            passwordInput.type = "text";

            togglePassword.classList.remove("fa-eye-slash");
            togglePassword.classList.add("fa-eye");

        }else{

            passwordInput.type = "password";

            togglePassword.classList.remove("fa-eye");
            togglePassword.classList.add("fa-eye-slash");
        }
    });
}

/* ==================== LOGIN MODAL ======================= */

const userBtn = document.querySelector(".user-btn");
const loginModal = document.getElementById("loginModal");
const loginClose = document.getElementById("loginClose");

if(userBtn && loginModal){

    userBtn.addEventListener("click", () => {

        loginModal.classList.add("active");

    });
}

if(loginClose && loginModal){

    loginClose.addEventListener("click", () => {

        loginModal.classList.remove("active");

    });
}

/* ==================== CATEGORY SLIDER ======================= */

const categoriesList = document.querySelector(".categories-list");

const categoryArrows = document.querySelectorAll(".category-arrow");

const categoryItems = document.querySelectorAll(".category-item");

if(categoryArrows.length >= 2){

    categoryArrows[0].addEventListener("click", () => {

        categoriesList.scrollLeft -= 250;
    });

    categoryArrows[1].addEventListener("click", () => {

        categoriesList.scrollLeft += 250;
    });
}

categoryItems.forEach((item) => {

    item.addEventListener("click", () => {

        categoryItems.forEach((el) => {

            el.classList.remove("active");

        });

        item.classList.add("active");
    });
});

/* ======================   CONTACT MODAL       ================================*/
const contactBtn =
document.getElementById("contactBtn");

const contactModal =
document.getElementById("contactModal");

const closeContactModal =
document.getElementById("closeContactModal");

contactBtn.addEventListener("click",(e)=>{

    e.preventDefault();

    contactModal.classList.add("active");
});

closeContactModal.addEventListener("click",()=>{

    contactModal.classList.remove("active");

    });

/* ==========================================  ABOUT MODAL ========================================= */

const aboutBtn = document.getElementById("aboutBtn");

const aboutModal = document.getElementById("aboutModal");

const closeAbout = document.getElementById("closeAbout");

aboutBtn.addEventListener("click",(e)=>{

    e.preventDefault();

    aboutModal.classList.add("active");

});

closeAbout.addEventListener("click",()=>{

    aboutModal.classList.remove("active");

});

/* ============================================= PRODUCT MODAL =============================================== */

const productModal = document.getElementById("productModal");

const closeModal = document.getElementById("closeModal");

const openButtons = document.querySelectorAll(".open-product");

const currentImage = document.getElementById("currentImage");

const modalTitle = document.querySelector(".product-details h2");

const modalPrice = document.querySelector(".product-price");



const thumbnailsContainer = document.querySelector(".thumbnails");

const nextGallery = document.querySelector(".next-btn");

const prevGallery = document.querySelector(".prev-btn");

/* IMAGES */

let images = [];

let currentIndex = 0;

/* OPEN MODAL */

openButtons.forEach((btn) => {

    btn.addEventListener("click", () => {

        /* TEXT */

        modalTitle.innerText = btn.dataset.title;

        modalPrice.innerText = btn.dataset.price;


        /* IMAGES */

        images = btn.dataset.images.split(",");

        currentIndex = 0;

        currentImage.src = images[0];

        /* THUMBNAILS */

        thumbnailsContainer.innerHTML = "";

        images.forEach((img,index) => {

            const thumb = document.createElement("img");

            thumb.src = img;

            thumb.classList.add("thumb");

            if(index === 0){

                thumb.classList.add("active-thumb");
            }

            thumb.addEventListener("click", () => {

                currentIndex = index;

                showImage(currentIndex);
            });

            thumbnailsContainer.appendChild(thumb);
        });

        /* OPEN */

        productModal.classList.add("active");
    });
});

/* CLOSE */

closeModal.addEventListener("click", () => {

    productModal.classList.remove("active");
});

/* SHOW IMAGE */

function showImage(index){

    currentImage.src = images[index];

    const allThumbs = document.querySelectorAll(".thumb");

    allThumbs.forEach((thumb) => {

        thumb.classList.remove("active-thumb");
    });

    allThumbs[index].classList.add("active-thumb");
}

/* NEXT */

nextGallery.addEventListener("click", () => {

    currentIndex++;

    if(currentIndex >= images.length){

        currentIndex = 0;
    }

    showImage(currentIndex);
});

/* PREV */

prevGallery.addEventListener("click", () => {

    currentIndex--;

    if(currentIndex < 0){

        currentIndex = images.length - 1;
    }

    showImage(currentIndex);
});


document.querySelector(".order-now-btn")
.addEventListener("click",()=>{

window.open(
"https://wa.me/96181390018?text=مرحباً أريد طلب برنامج المستفيد للمحاسبة",
"_blank"
);

});


/* ======================================================================= CLIENTS MODAL ==================================== */
const clientsImages = {
  supermarket: [
    "images/we7.jpeg",
    "images/we9.jpeg",
    "images/we7.jpeg",
    "images/we9.jpeg",
    "images/we7.jpeg",
    "images/we9.jpeg",
    "images/we7.jpeg",
    "images/we9.jpeg",
    "images/we7.jpeg",
    "images/we9.jpeg"
  ],

  restaurant: [
    "images/Restaurants SIP COFFEE .jpeg",
    "images/we9.jpeg",
    "images/we7.jpeg",
    "images/we9.jpeg",
    "images/we7.jpeg",
    "images/we9.jpeg",
    "images/we7.jpeg",
    "images/we9.jpeg",
    "images/we7.jpeg",
    "images/we9.jpeg"
  ],

  house: [
    "images/VLOR.jpeg",
    "images/we7.jpeg",
    "images/we9.jpeg",
    "images/we7.jpeg",
    "images/we9.jpeg",
    "images/we7.jpeg",
    "images/we9.jpeg",
    "images/we7.jpeg",
    "images/we9.jpeg",
    "images/we7.jpeg"
  ],

  Internet: [
    "images/we7.jpeg",
    "images/we9.jpeg"
  ],

  Electricity: [
    "images/Mahmoud Al-Qawas  Electrician.jpeg",
    "images/we7.jpeg"
  ],

  detergents: [
    "images/we7.jpeg",
    "images/we9.jpeg"
  ]
};

const clientRows = document.querySelectorAll(".client-row");

clientRows.forEach(row => {
  row.addEventListener("click", () => {
    const section = row.dataset.section;
    const images = clientsImages[section];

    if (!images) return;

const oldGallery = row.nextElementSibling;

if (oldGallery && oldGallery.classList.contains("clients-gallery")) {

    oldGallery.classList.remove("active");
    row.classList.remove("active");

    setTimeout(() => {
        oldGallery.remove();
    }, 650);

    return;
}

    document.querySelectorAll(".clients-gallery").forEach(gallery => gallery.remove());
    document.querySelectorAll(".client-row").forEach(item => item.classList.remove("active"));

    const gallery = document.createElement("div");
    gallery.className = "clients-gallery active";

    images.forEach(image => {
      gallery.innerHTML += `
        <img src="${image}" alt="">
      `;
    });

    row.insertAdjacentElement("afterend", gallery);
    row.classList.add("active");
  });
});
