import Swiper from 'swiper/bundle';

const descriptionSwiper = new Swiper(".description-swiper", {
	slidesPerView: 2.2,
  spaceBetween: 10,
  centeredSlides: false,
	grabCursor: true,
	initialSlide: 2,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	breakpoints: {
		200: {
      slidesPerView: 1.2,
      spaceBetween: 6
    },
		250: {
      slidesPerView: 1.4,
      spaceBetween: 6
    },
    320: {
      slidesPerView: 1.86,
      spaceBetween: 10
    },
    370: {
      slidesPerView: 2.2,
      spaceBetween: 10
    },
    400: {
      slidesPerView: 2.4,
      spaceBetween: 11
    },
		450: {
      slidesPerView: 2.5,
      spaceBetween: 11
    },
		500: {
      slidesPerView: 2.9,
      spaceBetween: 11
    },
		550: {
      slidesPerView: 3.4,
      spaceBetween: 11
    },
		600: {
      slidesPerView: 3.74,
      spaceBetween: 11
    },
		650: {
      slidesPerView: 3.9,
      spaceBetween: 11
    },
		700: {
      slidesPerView: 4.2,
      spaceBetween: 11
    },
		740: {
      slidesPerView: 4.5,
      spaceBetween: 11
    },
		768: {
      slidesPerView: 3.3,
      spaceBetween: 15
    },
		800: {
      slidesPerView: 3.4,
      spaceBetween: 11
    },
		850: {
      slidesPerView: 3.7,
      spaceBetween: 11
    },
		900: {
      slidesPerView: 3.9,
      spaceBetween: 11
    },
		950: {
      slidesPerView: 4.2,
      spaceBetween: 11
    },
		1000: {
      slidesPerView: 4.2,
      spaceBetween: 15
    },
		1020: {
      slidesPerView: 4.3,
      spaceBetween: 15
    },
		1050: {
      slidesPerView: 4.5,
      spaceBetween: 15
    },
		1100: {
      slidesPerView: 4.7,
      spaceBetween: 20
    },
		1150: {
      slidesPerView: 4.9,
      spaceBetween: 20
    },
		1200: {
      slidesPerView: 5.2,
      spaceBetween: 20
    },
		1300: {
      slidesPerView: 5.5,
      spaceBetween: 20
    },
		1400: {
      slidesPerView: 5.9,
      spaceBetween: 20
    },
		1500: {
      slidesPerView: 6.2,
      spaceBetween: 20
    },
		1600: {
      slidesPerView: 6.5,
      spaceBetween: 20
    },
  },
});

export default descriptionSwiper;