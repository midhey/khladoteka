import './to-top-button.js'
import './dropdown-footer.js'

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


const dropdownBtn = document.querySelector('.dropdown-btn');
const dropdown = document.querySelector('.dropdown');
const desktopTrigger = document.querySelector('.desktop-trigger');
const dropdownIcon = document.querySelector('.dropdown-icon')

// Функция для открытия/закрытия списка
function toggleDropdown() {
    dropdown.classList.toggle('active');
    dropdownIcon.classList.toggle('icon-rotate');
}

// Обработчик события при наведении на десктопах
desktopTrigger.addEventListener('mouseenter', () => {
    if (window.innerWidth >= 990) {
        toggleDropdown();
    }
});

// Обработчик события клика на мобильных устройствах
dropdownBtn.addEventListener('click', (event) => {
    event.preventDefault(); // Предотвращаем переход по ссылке
    if (window.innerWidth < 990) {
        toggleDropdown();
    }
});

// Закрытие списка при клике вне его области
document.addEventListener('click', (event) => {
    if (!dropdownBtn.contains(event.target) && !dropdown.contains(event.target)) {
        dropdown.classList.remove('active');
    }
});


