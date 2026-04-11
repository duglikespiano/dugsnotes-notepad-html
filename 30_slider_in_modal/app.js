const lazyLoadingImages = document.querySelectorAll('[data-src]');
const modalElement = document.querySelector('.modal');
const modalClosebuttonElement = document.querySelector('.modal-close-button');
const imagesElements = document.querySelectorAll('.image-wrapper');
const option = { rootMargin: '0px 0px 200px 0px' };

const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting && !entry.target.classList.contains('loaded')) {
			const { target } = entry;
			target.setAttribute('src', target.dataset.src);
			target.classList.add('loaded');
			observer.unobserve(target);
		}
	});
}, option);

lazyLoadingImages.forEach((image) => observer.observe(image));

let swiper = null;

imagesElements.forEach((element, i) => {
	element.addEventListener('click', () => {
		modalElement.classList.add('active');
		if (!swiper) {
			swiper = new Swiper('.swiper-container', {
				loop: true,
				slidesPerView: 1,
				// autoplay: {
				// 	delay: 3000,
				// },
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
				allowTouchMove: false,
			});
		}
		swiper.slideTo(i, 0);
		// swiper.autoplay.start();
		console.log('check');
	});
});

modalClosebuttonElement.addEventListener('click', (e) => {
	console.log('close triggered', e.target);
	modalElement.classList.remove('active');
	// swiper.autoplay.stop();
});
