const modal = () => {
	
	const modal = document.querySelector('.popup');
	const triggers = document.querySelectorAll('[data-modal-open]');
	const close = document.querySelector('.popup__close');

	const abonementSelect = document.getElementById('abonement-select');
	//const abonementOptions = abonementSelect.options; //! для использования с HTML коллекцией

	const scroll = calcScroll();

	triggers.forEach((trigger) => {
		trigger.addEventListener('click', () => {
			if (modal.classList.contains('popup--hide')) {
				modal.classList.remove('popup--hide');
				document.body.style.overflow = 'hidden';
				document.body.style.marginRight = `${scroll}px`;

				switch (trigger.getAttribute('data-modal-open')) {
					case '1':
						//abonementOptions.selectedIndex = 1; //! для использования с HTML коллекцией
						abonementSelect.value = '1';
						break;
					case '2':
						//abonementOptions.selectedIndex = 2; //! для использования с HTML коллекцией
						abonementSelect.value = '2';
						break;
					case '3':
						//abonementOptions.selectedIndex = 3; //! для использования с HTML коллекцией
						abonementSelect.value = '3';
						break;
					case 'trial':
						//abonementOptions.selectedIndex = 6; //! для использования с HTML коллекцией
						abonementSelect.value = '6';
					default:
						//* не нужен
						//* при включении по умолчанию на value="0" не работает case 'trial'
				};
			}
		});
	});

	close.addEventListener('click', () => {
		if (!modal.classList.contains('popup--hide')) {
			modal.classList.add('popup--hide');
			document.body.style.overflow = '';
			document.body.style.marginRight = '0px';
		}
	});

	function calcScroll() {
    const div = document.createElement('div');

    div.style.width = '50px';
    div.style.height = '50px';
    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidded';

    document.body.appendChild(div);
    const scrollWidth = div.offsetWidth - div.clientWidth;

    div.remove();

    return scrollWidth;
  }
};

export default modal;