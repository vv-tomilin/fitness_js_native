const form = () => {
	
	const abonementForm = document.querySelector('.popup .form');
	const inputs = document.querySelectorAll('input');
	const selects = document.querySelectorAll('select');

	const modal = document.querySelector('.popup');

	const formStatus = document.querySelector('.form-status');
	const formStatusLoading = formStatus.querySelector('.form-status__loading');
	const formStatusSuccess = formStatus.querySelector('.form-status__success');
	const formStatusFailure = formStatus.querySelector('.form-status__failure');

	const postData = async (url, data) => {

		showStatus(formStatus, formStatusLoading, [formStatusSuccess, formStatusFailure]);

		let result = await fetch(url, {
			method: 'POST',
			body: data
		});

		return await result.text();
	};

	abonementForm.addEventListener('submit', (e) => {

		e.preventDefault();

		const formData = new FormData(abonementForm);

		postData('db/server.php', formData)
						.then((res) => {
							console.log(res);
							showStatus(formStatus, formStatusSuccess, [formStatusLoading, formStatusFailure]);
						})
						.catch(() => {
							showStatus(formStatus, formStatusFailure, [formStatusLoading, formStatusSuccess]);
						})
						.finally(() => {
							clearFormFields();
							setTimeout(() => {
								formClose(modal);
							}, 3000);
						});
	});

	function formClose(selector) {
		selector.classList.add('popup--hide');
		document.body.style.overflow = '';
		document.body.style.marginRight = '0px';

		formStatus.classList.add('popup--hide');
	};

	function clearFormFields() {
		inputs.forEach((item) => {
			item.value = '';
		});

		selects.forEach((item) => {
			item.value = '0';
		});
	};

	function showStatus(statusBlockSelector, showStatusSelector, hideStatusSelectors=[]) {
		if (statusBlockSelector.classList.contains('popup--hide')) {
			statusBlockSelector.classList.remove('popup--hide');
		}

		if (showStatusSelector.classList.contains('popup--hide')) {
			showStatusSelector.classList.remove('popup--hide');

			hideStatusSelectors.forEach((hideSelector) => {
				if (!hideSelector.classList.contains('popup--hide')) {
					hideSelector.classList.add('popup--hide');
				}
			});
		}
	}
};

export default form;