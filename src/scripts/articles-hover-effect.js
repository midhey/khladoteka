document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll(".articles-glass-background, .articles-light-background, .articles-preservation-background, .articles-cooling-background");

    elements.forEach(function(element) {
        const originalBg = window.getComputedStyle(element).getPropertyValue('background-image');
        const hoverGif = element.dataset.hoverGif;

        element.addEventListener("mouseenter", function() {
            element.style.backgroundImage = `url(${hoverGif})`; // Установка GIF-анимации при наведении
        });

        element.addEventListener("mouseleave", function() {
            element.style.backgroundImage = originalBg; // Возврат исходного фонового изображения
        });
    });
});
