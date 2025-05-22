const modalElement = document.querySelector('dialog');
const modalOpenButton = document.querySelector('[data-open-modal]');
const modalCloseButton = document.querySelector('[data-close-modal]');

modalOpenButton.addEventListener('click', () => {
	controllModalPosition(modalElement, true);
});

modalCloseButton.addEventListener('click', () => {
	controllModalPosition(modalElement, false);
});

modalElement.addEventListener('click', (e) => {
	if (
		e.clientX < modalElement.getBoundingClientRect().left ||
		e.clientX > modalElement.getBoundingClientRect().right ||
		e.clientY < modalElement.getBoundingClientRect().top ||
		e.clientY > modalElement.getBoundingClientRect().bottom
	) {
		controllModalPosition(modalElement, false);
	}
});

function controllModalPosition(modal, boolean) {
	if (boolean) {
		modal.showModal();

		document.body.style.cssText = `
			position: fixed; 
			top: -${window.scrollY}px;
			overflow-y: scroll;
			width: 100%;`;
	} else {
		modal.close();

		const scrollY = document.body.style.top;
		document.body.style.cssText = '';
		window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
	}
}
