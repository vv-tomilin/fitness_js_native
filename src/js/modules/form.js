const form = () => {
	
	const abonementForm = document.querySelector('.popup .form');
	const inputs = document.querySelectorAll('input');
	const selects = document.querySelectorAll('select');

	const modal = document.querySelector('.popup');

	const message = {
		loading: 'Загрузка...',
		success: 'Спасибо! Скоро мы с вами свяжемся.',
		failure: 'Что то пошло не так...'
	};

	const postData = async (url, data) => {
		document.querySelector('.status').textContent = message.loading;

		let result = await fetch(url, {
			method: 'POST',
			body: data
		});

		return await result.text();
	};

	const clearFormFields = () => {
		inputs.forEach((item) => {
			item.value = '';
		});

		selects.forEach((item) => {
			item.value = '0';
		});
	};

	const formClose = (selector) => {
		selector.classList.add('popup--hide');
		document.body.style.overflow = '';
		document.body.style.marginRight = '0px';
	};

	abonementForm.addEventListener('submit', (e) => {

		e.preventDefault();

		let statusMessage = document.createElement('div');
		statusMessage.classList.add('status');
		abonementForm.appendChild(statusMessage);

		const formData = new FormData(abonementForm);

		postData('db/server.php', formData)
						.then((res) => {
							console.log(res);
							statusMessage.textContent = message.success;
						})
						.catch(() => {
							statusMessage.textContent = message.failure;
						})
						.finally(() => {
							clearFormFields();
							setTimeout(() => {
								statusMessage.remove();
								formClose(modal);
							}, 3000);
						});
	});
};

export default form;