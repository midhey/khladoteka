import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper styles
import 'swiper/css';

// init Swiper:
var newsSwiper = new Swiper(".newsSwiper", {
    modules: [Navigation],
    slidesPerView: 1.1,
    spaceBetween: 20,
    navigation: {
        nextEl: ".main-news-button-next",
        prevEl: ".main-news-button-prev",
    },
    breakpoints: {
        800: {
            slidesPerView: 3,
            spaceBetween: 50
        }
    }
});

var gallerySwiper = new Swiper(".gallerySwiper", {
    modules: [Navigation, Pagination],
    slidesPerView: 1.1,
    spaceBetween: 6,
    loop: true,
    navigation: {
        nextEl: ".gallery-button-next",
        prevEl: ".gallery-button-prev",
    },
    pagination: {
        el: ".gallery-counter",
        type: "fraction"
    },
    breakpoints: {
        800: {
            slidesPerView: 'auto',
            spaceBetween: 6
        }
    }
});



