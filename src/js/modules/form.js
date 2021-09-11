const form = () => {
	
	const abonementForm = document.querySelector('.popup .form');
	const inputs = document.querySelectorAll('input');

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

	const clearInputs = () => {
		inputs.forEach((item) => {
			item.value = '';
		});
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
							clearInputs();
							setTimeout(() => {
								statusMessage.remove();
							}, 3000);
						});
	});
};

export default form;