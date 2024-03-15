import './to-top-button.js'
import './dropdown-footer.js'
import './swiper.js'

document.addEventListener('DOMContentLoaded', function () {
    const searchIcon = document.querySelector('.search-icon');
    const menuSearchInput = document.querySelector('.menu-icon-search');
    const topMenu = document.querySelector('.top-menu');
    const topBarMenu = document.querySelector('.top-bar-menu');

    searchIcon.addEventListener('click', function () {
        menuSearchInput.classList.toggle('active');

        topBarMenu.classList.toggle('hidden');

        topMenu.classList.toggle('search-active');

        if (menuSearchInput.classList.contains('active')) {
            menuSearchInput.focus();
        }
    });
});


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



