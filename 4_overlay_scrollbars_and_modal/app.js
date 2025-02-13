const { OverlayScrollbars, ScrollbarsHidingPlugin, SizeObserverPlugin, ClickScrollPlugin } = OverlayScrollbarsGlobal;
const modalToggleButtons = document.querySelectorAll('[data-modal-handle-button');
const modalElement = document.querySelector('.modal');

OverlayScrollbars(document.body, {});

const modalWindowHanlder = (boolean) => {
	if (boolean) {
		document.body.style.cssText = `
		position: fixed;
		top: -${window.scrollY}px;
		width: 100%;
  `;
	} else {
		const scrollY = document.body.style.top;
		document.body.style.cssText = '';
		window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
	}
};

const modalToggler = (modalElement, boolean) => {
	if (boolean) {
		modalElement.classList.add('active');
	} else {
		modalElement.classList.remove('active');
	}
};

modalToggleButtons.forEach((button) => {
	button.addEventListener('click', () => {
		if (button.dataset.modalHandleButton === 'to-open') {
			modalToggler(modalElement, true);
			modalWindowHanlder(true);
		} else if (button.dataset.modalHandleButton === 'to-close') {
			modalToggler(modalElement, false);
			modalWindowHanlder(false);
		}
	});
});
