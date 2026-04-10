const lazyLoadingImages = document.querySelectorAll('[data-src]');
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
