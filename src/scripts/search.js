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