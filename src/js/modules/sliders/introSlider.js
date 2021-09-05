import Swiper from 'swiper/bundle';

const introSwiper = new Swiper(".intro-swiper", {
	spaceBetween: 30,
	centeredSlides: true,
	effect: 'fade',
	autoplay: {
		delay: 7000,
		disableOnInteraction: false,
	},
});

export default introSwiper;