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
/* ============================================ MORE PRODUCTS2 ================================================= */
const moreDepartmentsBtn =
document.getElementById("moreDepartmentsBtn");

const moreDepartments =
document.getElementById("moreDepartments");

moreDepartmentsBtn.onclick = () => {

    moreDepartments.classList.toggle("active");

    if(moreDepartments.classList.contains("active")){
        moreDepartmentsBtn.textContent = "إخفاء";
    }else{
        moreDepartmentsBtn.textContent = "المزيد";
    }
};

/* ========================================== MORE PRODUCTS ================================================= */
const moreBtn = document.getElementById("moreBtn");
const moreProducts = document.getElementById("moreProducts");

function checkScreen(){

    if(window.innerWidth <= 768){

        // الموبايل
        moreProducts.classList.remove("active");
        moreBtn.innerText = "المزيد";

    }else{
         // اللابتوب
    moreProducts.classList.remove("active");
    moreBtn.innerText = "المزيد";
}
}

checkScreen();

window.addEventListener("resize", checkScreen);

moreBtn.addEventListener("click", () => {

    moreProducts.classList.toggle("active");

    if(moreProducts.classList.contains("active")){
        moreBtn.innerText = "إخفاء";
    }else{
        moreBtn.innerText = "المزيد";
    }

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

const clientsModal =
document.getElementById("clientsModal");

const clientsClose =
document.getElementById("clientsClose");

const clientsTrack =
document.getElementById("clientsTrack");

const clientsTitle =
document.getElementById("clientsTitle");

const nextClient =
document.getElementById("nextClient");

const prevClient =
document.getElementById("prevClient");

/* الأقسام */

const clientsData = {

    supermarket: {

        title:"عملاء السوبر ماركت",

        clients:[

            {image:"images/we7.jpeg",name:"سوبر ماركت المدينة"},
            {image:"images/we9.jpeg",name:"سوبر ماركت الهدى"},
            {image:"images/we7.jpeg",name:"سوبر ماركت البركة"},
            {image:"images/we9.jpeg",name:"سوبر ماركت الأمان"}

        ]

    },

    restaurant: {

        title:"عملاء المطاعم",

        clients:[

            {image:"images/we7.jpeg",name:"مطعم السلطان"},
            {image:"images/we9.jpeg",name:"مطعم الشام"},
            {image:"images/we7.jpeg",name:"مطعم البيت اللبناني"},
            {image:"images/we9.jpeg",name:"مطعم الريف"}

        ]

    }

};

/* متغيرات السلايدر */

let currentPage = 0;

let totalPages = 0;

/* تحميل العملاء */

function loadClients(section){

    clientsTrack.innerHTML = "";

    const data = clientsData[section];

    clientsTitle.innerText = data.title;

    for(let i=0; i<data.clients.length; i+=15){

        const page =
        document.createElement("div");

        page.classList.add("clients-page");

        const clientsSlice =
        data.clients.slice(i,i+15);

        clientsSlice.forEach(client=>{

            page.innerHTML += `

                <div class="client-card">

                    <img src="${client.image}">

                    <h3>${client.name}</h3>

                </div>

            `;

        });

        clientsTrack.appendChild(page);

    }

    currentPage = 0;

    totalPages =
    document.querySelectorAll(".clients-page").length;

    clientsTrack.style.transform =
    "translateX(0)";
}

/* فتح السوبر ماركت */

const supermarketBtn =
document.querySelector(".supermarket-btn");

if(supermarketBtn){

    supermarketBtn.addEventListener("click",()=>{

        loadClients("supermarket");

        clientsModal.classList.add("active");

    });

}

/* فتح المطاعم */

const restaurantBtn =
document.querySelector(".restaurant-btn");

if(restaurantBtn){

    restaurantBtn.addEventListener("click",()=>{

        loadClients("restaurant");

        clientsModal.classList.add("active");

    });

}

/* فتح ادوات منزلية */

const houseBtn =
document.querySelector(".house-btn");

if(houseBtn){

    houseBtn.addEventListener("click",()=>{

        loadClients("house");

        clientsModal.classList.add("active");

    });

}

/* فتح اشتراكات انترنت */

const InternetBtn =
document.querySelector(".Internet-btn");

if(InternetBtn){

    InternetBtn.addEventListener("click",()=>{

        loadClients("Internet");

        clientsModal.classList.add("active");

    });

}

/* فتح اشتراكات كهرباء */

const ElectricityBtn =
document.querySelector(".Electricity-btn");

if(ElectricityBtn){

    ElectricityBtn.addEventListener("click",()=>{

        loadClients("Electricity");

        clientsModal.classList.add("active");

    });

}

/* فتح المنظفات*/

const detergentsBtn =
document.querySelector(".detergents-btn");

if(detergentsBtn){

    detergentsBtn.addEventListener("click",()=>{

        loadClients("detergents");

        clientsModal.classList.add("active");

    });

}

/* فتح أدوات كهربائية*/

const electricaltoolsBtn =
document.querySelector(".electricaltools-btn");

if(electricaltoolsBtn){

    electricaltoolsBtn.addEventListener("click",()=>{

        loadClients("electricaltools");

        clientsModal.classList.add("active");

    });

}

/* فتح  صيدلية زراعية*/

const AgriculturalpharmacyBtn =
document.querySelector(".Agriculturalpharmacy-btn");

if(AgriculturalpharmacyBtn){

    AgriculturalpharmacyBtn.addEventListener("click",()=>{

        loadClients("Agriculturalpharmacy");

        clientsModal.classList.add("active");

    });

}

/* فتح   محلات البسة */

const clothesBtn =
document.querySelector(".clothes-btn");

if(clothesBtn){

    clothesBtn.addEventListener("click",()=>{

        loadClients("clothes");

        clientsModal.classList.add("active");

    });

}

/* فتح    إطارات وبطاريات */

const TiresBtn =
document.querySelector(".Tires-btn");

if(TiresBtn){

    TiresBtn.addEventListener("click",()=>{

        loadClients("Tires");

        clientsModal.classList.add("active");

    });

}

/* فتح    طاقة شمسية  */

const energyBtn =
document.querySelector(".energy-btn");

if(energyBtn){

    energyBtn.addEventListener("click",()=>{

        loadClients("energy");

        clientsModal.classList.add("active");

    });

}

/* فتح    محلات خضروات     */

const vegetableBtn =
document.querySelector(".vegetable-btn");

if(vegetableBtn){

    vegetableBtn.addEventListener("click",()=>{

        loadClients("vegetable");

        clientsModal.classList.add("active");

    });

}

/* فتح     محلات الاحذية     */

const shoesBtn =
document.querySelector(".shoes-btn");

if(shoesBtn){

    shoesBtn.addEventListener("click",()=>{

        loadClients("shoes");

        clientsModal.classList.add("active");

    });

}

/* فتح  أدوات صحية  */

const SanitaryBtn =
document.querySelector(".Sanitary-btn");

if(SanitaryBtn){

    SanitaryBtn.addEventListener("click",()=>{

        loadClients("Sanitary");

        clientsModal.classList.add("active");

    });

}

/* فتح  الأراغيل  */

const ShishaBtn =
document.querySelector(".Shisha-btn");

if(ShishaBtn){

    ShishaBtn.addEventListener("click",()=>{

        loadClients("Shisha");

        clientsModal.classList.add("active");

    });

}

/* فتح  محامص  */

const RoastersBtn =
document.querySelector(".Roasters-btn");

if(RoastersBtn){

    RoastersBtn.addEventListener("click",()=>{

        loadClients("Roasters");

        clientsModal.classList.add("active");

    });

}

/* فتح  محلات  الدواجن   */

const PoultryBtn =
document.querySelector(".Poultry-btn");

if(PoultryBtn){

    PoultryBtn.addEventListener("click",()=>{

        loadClients("Poultry");

        clientsModal.classList.add("active");

    });

}

/* فتح  محلات  عطورات   */

const PerfumesBtn =
document.querySelector(".Perfumes-btn");

if(PerfumesBtn){

    PerfumesBtn.addEventListener("click",()=>{

        loadClients("Perfumes");

        clientsModal.classList.add("active");

    });

}

/* فتح  محلات  معجنات   */

const pastriesBtn =
document.querySelector(".pastries-btn");

if(pastriesBtn){

    pastriesBtn.addEventListener("click",()=>{

        loadClients("pastries");

        clientsModal.classList.add("active");

    });

}

/* فتح  معارض الدهانات     */

const PaintBtn =
document.querySelector(".Paint-btn");

if(PaintBtn){

    PaintBtn.addEventListener("click",()=>{

        loadClients("Paint");

        clientsModal.classList.add("active");

    });

}

/* فتح  افران مخابز      */

const BakeryBtn =
document.querySelector(".Bakery-btn");

if(BakeryBtn){

    BakeryBtn.addEventListener("click",()=>{

        loadClients("Bakery");

        clientsModal.classList.add("active");

    });

}

/* فتح   ناولني      */

const NawlaniBtn =
document.querySelector(".Nawlani-btn");

if(NawlaniBtn){

    NawlaniBtn.addEventListener("click",()=>{

        loadClients("Nawlani");

        clientsModal.classList.add("active");

    });

}

/* فتح   الموتوسيكلات      */

const MotorBtn =
document.querySelector(".Motor-btn");

if(MotorBtn){

    MotorBtn.addEventListener("click",()=>{

        loadClients("Motor");

        clientsModal.classList.add("active");

    });

}

/* فتح   محلات الموبايلات      */

const MobileBtn =
document.querySelector(".Mobile-btn");

if(MobileBtn){

    MobileBtn.addEventListener("click",()=>{

        loadClients("Mobile");

        clientsModal.classList.add("active");

    });

}

/* فتح   محلات قطع غيار ميكانيكية       */

const MechanicalBtn =
document.querySelector(".Mechanical-btn");

if(MechanicalBtn){

    MechanicalBtn.addEventListener("click",()=>{

        loadClients("Mechanical");

        clientsModal.classList.add("active");

    });

}

/* فتح   اللحوم والأسماك          */

const MeatfishBtn =
document.querySelector(".Meatfish-btn");

if(MeatfishBtn){

    MeatfishBtn.addEventListener("click",()=>{

        loadClients("Meatfish");

        clientsModal.classList.add("active");

    });

}

/* فتح    محلات مكياج          */

const makeupBtn =
document.querySelector(".makeup-btn");

if(makeupBtn){

    makeupBtn.addEventListener("click",()=>{

        loadClients("makeup");

        clientsModal.classList.add("active");

    });

}

/* فتح     مكتبة          */

const libraryBtn =
document.querySelector(".library-btn");

if(libraryBtn){

    libraryBtn.addEventListener("click",()=>{

        loadClients("library");

        clientsModal.classList.add("active");

    });

}

/* فتح     محلات بوظة          */

const icecreamBtn =
document.querySelector(".icecream-btn");

if(icecreamBtn){

    icecreamBtn.addEventListener("click",()=>{

        loadClients("icecream");

        clientsModal.classList.add("active");

    });

}

/* فتح   نادي رياضي          */

const gymBtn =
document.querySelector(".gym-btn");

if(gymBtn){

    gymBtn.addEventListener("click",()=>{

        loadClients("gym");

        clientsModal.classList.add("active");

    });

}

/* فتح    ألعاب          */

const GamesBtn =
document.querySelector(".Games-btn");

if(GamesBtn){

    GamesBtn.addEventListener("click",()=>{

        loadClients("Games");

        clientsModal.classList.add("active");

    });

}

/* فتح    ملحمة          */

const EpicBtn =
document.querySelector(".Epic-btn");

if(EpicBtn){

    EpicBtn.addEventListener("click",()=>{

        loadClients("Epic");

        clientsModal.classList.add("active");

    });

}

/* فتح    ألبان و أجبان          */

const CheeseBtn =
document.querySelector(".Cheese-btn");

if(CheeseBtn){

    CheeseBtn.addEventListener("click",()=>{

        loadClients("Cheese");

        clientsModal.classList.add("active");

    });

}

/* فتح محلات مفروشات          */

const BradyBtn =
document.querySelector(".Brady-btn");

if(BradyBtn){

    BradyBtn.addEventListener("click",()=>{

        loadClients("Brady");

        clientsModal.classList.add("active");

    });

}

/* فتح محلات عطارة           */

const AttarBtn =
document.querySelector(".Attar-btn");

if(AttarBtn){

    AttarBtn.addEventListener("click",()=>{

        loadClients("Attar");

        clientsModal.classList.add("active");

    });

}

/* فتح  محلات وان دولار           */

const OnedollarBtn =
document.querySelector(".Onedollar-btn");

if(OnedollarBtn){

    OnedollarBtn.addEventListener("click",()=>{

        loadClients("Onedollar");

        clientsModal.classList.add("active");

    });

}

/* فتح    محطات الوقود           */

const stationsBtn =
document.querySelector(".stations-btn");

if(stationsBtn){

    stationsBtn.addEventListener("click",()=>{

        loadClients("stations");

        clientsModal.classList.add("active");

    });

}



/* إغلاق */

clientsClose.addEventListener("click",()=>{

    clientsModal.classList.remove("active");

});

/* التالي */

nextClient.addEventListener("click",()=>{

    if(currentPage < totalPages - 1){

        currentPage++;

        clientsTrack.style.transform =
        `translateX(-${currentPage * 100}%)`;

    }

});

/* السابق */

prevClient.addEventListener("click",()=>{

    if(currentPage > 0){

        currentPage--;

        clientsTrack.style.transform =
        `translateX(-${currentPage * 100}%)`;

    }

});
/* ======== عرض المزيد ======== */
const moreClientsBtn = document.getElementById("moreClientsBtn");

const clientsCards =
document.querySelectorAll(".services-grid .service-row");

/* إخفاء كل العناصر بعد أول 4 */

clientsCards.forEach((card,index)=>{

    if(index >= 4){

        card.classList.add("hidden-client");
    }

});

let opened = false;

moreClientsBtn.addEventListener("click",()=>{

    opened = !opened;

    clientsCards.forEach((card,index)=>{

        if(index >= 4){

            if(opened){

                card.classList.add("show");

            }else{

                card.classList.remove("show");
            }

        }

    });

    moreClientsBtn.textContent =
    opened ? "إخفاء" : "المزيد";

});