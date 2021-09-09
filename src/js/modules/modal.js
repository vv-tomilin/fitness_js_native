const modals = () => {
	
	const modal = document.querySelector('.popup');
	const triggers = document.querySelectorAll('[data-modal-open]');
	const close = document.querySelector('.popup__close');

	triggers.forEach((trigger) => {
		trigger.addEventListener('click', () => {
			if (modal.classList.contains('popup--hide')) {
				modal.classList.remove('popup--hide');
			}
		});
	});

	close.addEventListener('click', () => {
		if (!modal.classList.contains('popup--hide')) {
			modal.classList.add('popup--hide');
		}
	});
};

export default modals;