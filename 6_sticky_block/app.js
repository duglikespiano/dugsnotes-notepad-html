const stickyAreaContainer = document.querySelector('.area1');
const stickyBlockContainer = document.querySelector('.area1 .sticky-block-container');
const stickyAreaContainerHeight = stickyAreaContainer.offsetHeight;

const updateStickyBlock = () => {
	const howMuchMoved = stickyAreaContainer.getBoundingClientRect().top;
	if (howMuchMoved < 0) {
		if (Math.abs(howMuchMoved) < stickyAreaContainerHeight) {
			stickyBlockContainer.style.transform = `translateY(${-howMuchMoved}px)`;
		} else {
			stickyBlockContainer.style.transform = `translateY(${stickyAreaContainerHeight}px)`;
		}
	}
};

const lenis = new Lenis();

lenis.on('scroll', (e) => {
	updateStickyBlock();
});

function raf(time) {
	lenis.raf(time);
	requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

window.addEventListener('scroll', updateStickyBlock);
