const headerMenuToggle = () => {

	const menuToggle = document.querySelector('.header__menu-toggle');
	const modalBlock = document.querySelector('.header__menu-mobile-modal');
	const menuItems = document.querySelectorAll('.header__menu-mobile-modal-item');

	menuToggle.addEventListener('click', () => {
		if (menuToggle.classList.contains('header__menu-toggle--closed')) {
			openMenu();
		} else {
			closeMenu();
		}
	});

	menuItems.forEach((item) => {
		item.addEventListener('click', () => {
			closeMenu();
		});
	});

	function openMenu() {
		menuToggle.classList.remove('header__menu-toggle--closed');
		menuToggle.classList.add('header__menu-toggle--opened');
		modalBlock.classList.remove('header__menu-mobile-modal--hide');
	}

	function closeMenu() {
		menuToggle.classList.add('header__menu-toggle--closed');
		menuToggle.classList.remove('header__menu-toggle--opened');
		modalBlock.classList.add('header__menu-mobile-modal--hide');
	}
}

export default headerMenuToggle;