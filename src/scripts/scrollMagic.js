import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const screenWidth = window.innerWidth;

const bannerTitleAnimation = gsap.timeline();


bannerTitleAnimation.from(".banner-title", {
    y: 300,
    opacity: 0,
    duration: 1.2,
    ease: 'power4.out'
})
    .from(".banner-title-buttons", {
        y: 200,
        opacity: 0,
        duration: 0.8,
        ease: 'power4.out'
    }, 0)
    .from(".banner-description", {
        y: 300,
        opacity: 0,
        duration: 1.2,
        ease: 'power4.out'
    }, 0)
    .from(".banner-fridge", {
        x: 300,
        opacity: 0,
        duration: 0.8,
        ease: 'power4.out'
    }, 1)
    .from(".banner-circle", {
        opacity: 0,
        duration: 1.8,
        ease: 'power4.out'
    }, 1)
    .from(".banner-triangle", {
        y: 300,
        x: 300,
        opacity: 0,
        duration: 0.8,
        ease: 'power4.out'
    }, 2)
    .to(".banner-circle", {
        rotation: 0,
        duration: 0.8,
        ease: 'power4.out'
    }, 2)


bannerTitleAnimation.play();

// Анимация для блока "Наша продукция"



// Анимация для блока о нас
gsap.to(".about-goal-animation-circle-1", {
    scrollTrigger: {
        trigger: ".about-goal-animation",
        start: "top bottom", // Старт анимации при достижении верха окна браузера
        end: "bottom top", // Завершение анимации при достижении нижней границы окна браузера
        scrub: true // Плавное изменение анимации при прокрутке
    },
    x: screenWidth < 900 ? "25vw" : "40vw",
});
gsap.to(".about-goal-right-animation", {
    scrollTrigger: {
        trigger: ".about-goal-animation",
        start: "top bottom",
        end: "bottom top",
        scrub: true
    },
    x: screenWidth < 900 ? "-25vw" : "-40vw",
});





