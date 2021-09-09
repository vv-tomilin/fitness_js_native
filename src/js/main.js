import introSwiper from './modules/sliders/introSlider';
import descriptionSwiper from './modules/sliders/descriptionSlider';
import headerMenuToggle from './modules/headerMenuToggle';
import modal from './modules/modal';

window.addEventListener('DOMContentLoaded', () => {
	introSwiper;
	descriptionSwiper;

	headerMenuToggle();
	modal();
});