const addMenuFunctionality = (menuId) => {
    const menuTitle = document.getElementById(menuId).querySelector('.footer-menu-title');
    const menuList = document.getElementById(menuId).querySelector('ul');
    const dropdownIcon = document.getElementById(menuId).querySelector('.footer-menu-title .dropdown-icon');

    menuTitle.addEventListener('click', () => {
        if (window.innerWidth < 700) {
            menuList.style.display = (menuList.style.display === 'flex') ? 'none' : 'flex';
            dropdownIcon.classList.toggle('icon-rotate');
        }
    });

    document.addEventListener('click', (event) => {
        const isMenuTitleClicked = menuTitle.contains(event.target);
        const isMenuListClicked = menuList.contains(event.target);
        const isDropdownIconClicked = dropdownIcon.contains(event.target);

        if (isMenuTitleClicked && isMenuListClicked && isDropdownIconClicked) {
            if (window.innerWidth < 700 && menuList.style.display === 'flex') {
                menuList.style.display = 'none';
                dropdownIcon.classList.remove('icon-rotate');
            }
        }
    });
};

// Добавьте слушатели для каждого меню
addMenuFunctionality('companyMenu');
addMenuFunctionality('clientsMenu');
addMenuFunctionality('productionMenu');
