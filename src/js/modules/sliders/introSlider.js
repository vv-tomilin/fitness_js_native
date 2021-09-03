import Swiper from 'swiper/bundle';

const swiper = new Swiper(".mySwiper", {
	spaceBetween: 30,
	centeredSlides: true,
	effect: 'fade',
	autoplay: {
		delay: 7000,
		disableOnInteraction: false,
	},
});

export default swiper;