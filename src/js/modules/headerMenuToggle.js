const headerMenuToggle = () => {

	const menuToggle = document.querySelector('.header__menu-toggle');
	const modalBlock = document.querySelector('.header__menu-mobile-modal');
	const mobileMenuItems = document.querySelectorAll('.header__menu-mobile-modal-item');
	const desktopMenuItems = document.querySelectorAll('.header__desktop-menu-item');

	const promosSection = document.getElementById('promos');
	const addressesSection = document.getElementById('addresses');
	const aboutClubSection = document.getElementById('about-club');

	menuToggle.addEventListener('click', () => {
		if (menuToggle.classList.contains('header__menu-toggle--closed')) {
			openMenu();
		} else {
			closeMenu();
		}
	});

	mobileMenuItems.forEach((item) => {
		item.addEventListener('click', () => {
			closeMenu();
			switch (item.dataset.modal) {
				case 'promos':
					scrollToSection(promosSection);
					break;
				case 'addresses':
					scrollToSection(addressesSection);
					break;
				case 'about-club':
					scrollToSection(aboutClubSection);
					break;
			};
		});
	});

	desktopMenuItems.forEach((item) => {
		item.addEventListener('click', () => {
			closeMenu();
			switch (item.dataset.modal) {
				case 'promos':
					scrollToSection(promosSection);
					break;
				case 'addresses':
					scrollToSection(addressesSection);
					break;
				case 'about-club':
					scrollToSection(aboutClubSection);
					break;
			};
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

	function scrollToSection(targetElement) {
		
		const scrollOptions = {
			block: 'center',
			behavior: 'smooth'
		};

			targetElement.scrollIntoView(scrollOptions);
	}
}

export default headerMenuToggle;