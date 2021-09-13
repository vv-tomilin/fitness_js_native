import introSwiper from './modules/sliders/introSlider';
import descriptionSwiper from './modules/sliders/descriptionSlider';
import headerMenuToggle from './modules/headerMenuToggle';
import modal from './modules/modal';
import timer from './modules/timer';
import form from './modules/form';
import mask from './modules/mask';

window.addEventListener('DOMContentLoaded', () => {
	const deadline = '2021-11-31';

	introSwiper;
	descriptionSwiper;

	headerMenuToggle();
	modal();
	timer('.promos__timer', deadline);
	form();
	mask('[name="user_phone"]');
});