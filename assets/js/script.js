
let scrollToTopBtn = document.getElementById("scrollToTopBtn");
let rootElement = document.documentElement;

function scrollToTop() {
    // Scroll to top logic
    rootElement.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

scrollToTopBtn.addEventListener("click", scrollToTop);

//fixed menu and resize when 800px scrolled with pure js
myContent = document.getElementsByClassName("dv-custom-navbar")[0];
let myScrollFunc = function () {
    let scrollY = window.scrollY;
    if (scrollY >= 800) {
        myContent.classList.add("dv-custom-navbar-scroll");
    } else {
        myContent.classList.remove("dv-custom-navbar-scroll");
    }
};
window.addEventListener("scroll", myScrollFunc);

//swiper card one
let swiperTab = new Swiper(".swiper-tab", {
    pagination: {
        el: ".swiper-pagination",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    // autoplay : true,
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
        577: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        768.1: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        1280: {
            slidesPerView: 4,
            spaceBetween: 100,
        },
    },
});
//swiper card two
let swiperCard = new Swiper(".swiper_card", {
    pagination: {
        el: ".swiper_card .swiper-pagination",
    },
    navigation: {
        nextEl: ".swiper_card .swiper-button-next",
        prevEl: ".swiper_card .swiper-button-prev",
    },
    // autoplay : true,
    slidesPerView: 1,
    spaceBetween: 5,
    breakpoints: {
        577: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        768.1: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        1280: {
            slidesPerView: 4,
            spaceBetween: 60,
        },
        1860: {
            slidesPerView: 5,
            spaceBetween: 20,
        },
    },
});
let thumbGallerySlider = new Swiper(".thumbGallerySlider", {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
    // autoplay : true,
});
let thumbGallerySlider2 = new Swiper(".thumbGallerySlider2  ", {
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: thumbGallerySlider,
    },
});











