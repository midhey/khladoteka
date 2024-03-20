import './to-top-button.js'
import './search.js'
import './dropdown-footer.js'
import './swiper.js'
import './feedback-form.js'
import './video-preview.js'
import './articles.js'
import './gallery-modal.js'





const dropdownBtns = document.querySelectorAll('.dropdown-btn');
const dropdowns = document.querySelectorAll('.dropdown');
const desktopTriggers = document.querySelectorAll('.desktop-trigger');
const dropdownIcons = document.querySelectorAll('.dropdown-icon')

// Функция для открытия/закрытия списка
function toggleDropdown(index) {
    dropdowns[index].classList.toggle('active');
    dropdownIcons[index].classList.toggle('icon-rotate');
}

// Обработчики событий для каждой кнопки
desktopTriggers.forEach((trigger, index) => {
    trigger.addEventListener('mouseenter', () => {
        if (window.innerWidth >= 990) {
            toggleDropdown(index);
        }
    });
});

dropdownBtns.forEach((btn, index) => {
    btn.addEventListener('click', (event) => {
        event.preventDefault(); // Предотвращаем переход по ссылке
        if (window.innerWidth < 990) {
            toggleDropdown(index);
        }
        event.stopPropagation(); // Остановка всплытия события
    });
});

// Закрытие списка при клике вне его области
document.addEventListener('click', (event) => {
    dropdownBtns.forEach((btn, index) => {
        if (!btn.contains(event.target) && !dropdowns[index].contains(event.target)) {
            dropdowns[index].classList.remove('active');
        }
    });
});




