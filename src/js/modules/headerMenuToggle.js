const headerMenuToggle = () => {

	const menuToggle = document.querySelector('.header__menu-toggle');
	const modalBlock = document.querySelector('.header__menu-mobile-modal');

	menuToggle.addEventListener('click', function () {
		if (menuToggle.classList.contains('header__menu-toggle--closed')) {
			menuToggle.classList.remove('header__menu-toggle--closed');
			menuToggle.classList.add('header__menu-toggle--opened');
			modalBlock.classList.remove('header__menu-mobile-modal--hide');
		} else {
			menuToggle.classList.add('header__menu-toggle--closed');
			menuToggle.classList.remove('header__menu-toggle--opened');
			modalBlock.classList.add('header__menu-mobile-modal--hide');
		}
	});
}

export default headerMenuToggle;