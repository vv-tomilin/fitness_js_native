import Swiper from 'swiper/bundle';

const descriptionSwiper = new Swiper(".description-swiper", {
	slidesPerView: 2.2,
  spaceBetween: 10,
  centeredSlides: false,
	breakpoints: {
		200: {
      slidesPerView: 1.41,
      spaceBetween: 6
    },
		250: {
      slidesPerView: 1.7,
      spaceBetween: 6
    },
    320: {
      slidesPerView: 2.2,
      spaceBetween: 8
    },
		360: {
      slidesPerView: 2.35,
      spaceBetween: 8
    },
    370: {
      slidesPerView: 2.5,
      spaceBetween: 10
    },
    400: {
      slidesPerView: 2.7,
      spaceBetween: 11
    },
		550: {
      slidesPerView: 3.72,
      spaceBetween: 11
    },
  },
});

export default descriptionSwiper;