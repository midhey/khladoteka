const scrollToTopBtn = document.querySelector('.scroll-to-top-btn');

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});