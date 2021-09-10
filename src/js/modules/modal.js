const modal = () => {
	
	const modal = document.querySelector('.popup');
	const triggers = document.querySelectorAll('[data-modal-open]');
	const close = document.querySelector('.popup__close');

	const scroll = calcScroll();

	triggers.forEach((trigger) => {
		trigger.addEventListener('click', () => {
			if (modal.classList.contains('popup--hide')) {
				modal.classList.remove('popup--hide');
				document.body.style.overflow = 'hidden';
				document.body.style.marginRight = `${scroll}px`;
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