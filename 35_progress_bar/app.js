document.addEventListener('DOMContentLoaded', () => {
	gsap.registerPlugin(ScrollTrigger);

	const trigger = '[data-scroll-trigger="trigger"]';
	const target = '[data-scroll-trigger="target"]';

	gsap
		.timeline({
			scrollTrigger: {
				trigger,
				start: '-=top bottom',
				end: 'bottom bottom',
				scrub: 1,
				markers: true,
			},
		})
		.to(target, { width: '100%' });
});
