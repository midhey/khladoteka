document.addEventListener('DOMContentLoaded', function() {
    const galleryPhotos = document.querySelectorAll('.gallery-photo');
    const lightbox = document.getElementById('gallery-modal');
    const lightboxImg = document.querySelector('.gallery-modal-img');

    // Открывает модальное окно с увеличенным изображением
    function openLightbox(imageSrc) {
        lightboxImg.src = imageSrc;
        lightbox.style.display = 'flex';
    }

    // Закрывает модальное окно
    function closeLightbox() {
        lightbox.style.display = 'none';
    }

    // Добавляет обработчики событий для изображений в галерее
    galleryPhotos.forEach(function(photo) {
        photo.addEventListener('click', function() {
            const imageSrc = this.querySelector('img').src;
            openLightbox(imageSrc);
        });
    });

    // Закрытие модального окна при клике на крестик
    lightbox.querySelector('.close').addEventListener('click', function() {
        closeLightbox();
    });

    // Закрытие модального окна при клике вне изображения
    lightbox.addEventListener('click', function(event) {
        if (event.target === lightbox) {
            closeLightbox();
        }
    });

    // Закрытие модального окна при нажатии на клавишу Esc
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeLightbox();
        }
    });
});
