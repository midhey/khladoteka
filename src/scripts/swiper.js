import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper styles
import 'swiper/css';

// init Swiper:
var newsSwiper = new Swiper(".newsSwiper", {
    modules: [Navigation],
    slidesPerView: 1.5,
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
