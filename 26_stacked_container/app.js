// Sticky containers
const root = document.documentElement;
function updateContentHeight() {
	const numberOfContainers = 7;
	for (let i = 1; i <= numberOfContainers; i++) {
		const content = document.querySelector(`.sticky-container${i}`);
		root.style.setProperty(`--container-height${i}`, `${content.offsetHeight}px`);
	}
}
window.addEventListener('load', updateContentHeight);
window.addEventListener('resize', updateContentHeight);
// Sticky containers
