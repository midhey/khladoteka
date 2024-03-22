import './to-top-button.js'
import './search.js'
import './dropdown-footer.js'
import './scrollMagic.js'
import './swiper.js'
import './feedback-form.js'
import './video-preview.js'
import './articles.js'
import './gallery-modal.js'



const dropdownBtns = document.querySelectorAll('.dropdown-btn');
const dropdowns = document.querySelectorAll('.dropdown');
const desktopTriggers = document.querySelectorAll('.desktop-trigger');
const dropdownIcons = document.querySelectorAll('.dropdown-icon');

// Функция для открытия/закрытия списка
function toggleDropdown(index) {
    dropdowns[index].classList.toggle('active');
    if (dropdowns[index].classList.contains('active')) {
        dropdownIcons[index].classList.add('icon-rotate');
    } else {
        dropdownIcons[index].classList.remove('icon-rotate');
    }
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
        event.preventDefault();
        const isMenuBtn = event.currentTarget.contains(event.target); // Проверяем, был ли клик на самой кнопке
        if (!isMenuBtn) return; // Если клик был не на кнопке, прекращаем выполнение функции
        toggleDropdown(index);
        const checkbox = document.getElementById('top-menu-btn'); // Получаем элемент чекбокса
        if (btn.closest('.menu-icon')) { // Проверяем, находится ли кнопка внутри .menu-icon
            checkbox.checked = false; // Устанавливаем состояние чекбокса на Unchecked
        }
        event.stopPropagation(); // Останавливаем всплытие события, чтобы оно не передавалось родительским элементам
    });
});








