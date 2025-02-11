gsap.registerPlugin(ScrollTrigger);

const cards = document.querySelectorAll('.card');
const totalCards = cards.length - 1;
const cardWidth = document.querySelector('.card-intro').offsetWidth;
const containerWidth = document.querySelector('.section-container').offsetWidth;
const offset = (containerWidth - cardWidth) / (totalCards - 1);
const gap = 20;

gsap.to(cards, {
	x: (i) => {
		return i === 0 ? 0 : -i * cardWidth + i * offset - offset - gap * i;
	},
	duration: (i) => 5 * i,
	ease: 'none',
	scrollTrigger: {
		trigger: '.stacking-cards',
		pin: true,
		markers: true,
		scrub: true,
		end: `+=${totalCards * 100}% bottom`,
	},
});
