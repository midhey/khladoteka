import './to-top-button.js'
import './dropdown-footer.js'
import './swiper.js'

document.addEventListener('DOMContentLoaded', function () {
    const searchIcon = document.querySelector('.search-icon');
    const menuSearchInput = document.querySelector('.menu-icon-search');
    const topMenu = document.querySelector('.top-menu');
    const topBarMenu = document.querySelector('.top-bar-menu');
    let isExpanded = false;

    searchIcon.addEventListener('click', function (event) {
        if (!isExpanded) {
            menuSearchInput.classList.add('active');
            topBarMenu.classList.add('hidden');
            topMenu.classList.add('search-active');
            isExpanded = true;
            menuSearchInput.focus();
        } else {
            console.log('Логика для поиска сюда');
        }
        event.stopPropagation(); // Предотвращаем дальнейшее распространение события вверх по дереву DOM
    });

    // Обработчик события для клика по документу
    document.addEventListener('click', function (event) {
        // Проверяем, был ли клик совершен вне области поиска
        if (!menuSearchInput.contains(event.target)) {
            // Закрываем меню поиска
            menuSearchInput.classList.remove('active');
            topBarMenu.classList.remove('hidden');
            topMenu.classList.remove('search-active');
            isExpanded = false;
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



