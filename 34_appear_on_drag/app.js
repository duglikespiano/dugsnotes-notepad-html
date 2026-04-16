document.addEventListener('DOMContentLoaded', () => {
	gsap.registerPlugin(ScrollTrigger);

	const trigger = '[data-scroll-trigger="trigger"]';
	const target = '[data-scroll-trigger="target"]';

	gsap
		.timeline({
			scrollTrigger: {
				trigger,
				pin: true,
				start: 'bottom bottom',
				scrub: 1,
				pinSpacing: false,
				markers: true,
			},
		})
		.to(target, {
			// NOTE: document.querySelector(target) returns an HTMLElement, not a value.
			// You may want .offsetTop or .offsetHeight here instead.
			y: `+=${document.querySelector(target)}`,
		});

	gsap
		.timeline({
			scrollTrigger: {
				trigger: target,
				start: 'top bottom',
				end: 'top top',
				scrub: 1,
				markers: true,
			},
		})
		.to(trigger, { opacity: 0 })
		.to(`${trigger} img`, { rotation: 360 }, '<');
});
