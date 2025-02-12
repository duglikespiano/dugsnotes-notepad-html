//１。右下に固定されるメニューボタン設置
//２。スクロールの量によって見えたり見えなくなったりする
//３。メニューを選択するとindexを表示

// css用のclass名のよりはdata-を使ってみること

//変数宣言
const buttonContainer = document.querySelector('[data-button-container]');
const menuButtons = document.querySelectorAll('[data-menu]');
const menuIndicator = document.querySelector('[data-menu-indicator]');

//関数宣言
const buttonToggler = (boolean) => {
	const buttonToOpen = document.querySelector('[data-button-to-open]');
	const buttonToClose = document.querySelector('[data-button-to-close]');
	const buttons = document.querySelectorAll('[data-button]');

	buttons.forEach((element) => {
		element.classList.remove('active');
	});

	if (boolean === undefined) {
		buttonContainer.classList.toggle('active');
		if (buttonContainer.classList.contains('active')) {
			buttonToOpen.classList.add('active');
		} else {
			buttonToClose.classList.add('active');
		}
		return;
	}

	if (boolean) {
		buttonToOpen.classList.add('active');
		buttonContainer.classList.add('active');
	} else {
		buttonToClose.classList.add('active');
		buttonContainer.classList.remove('active');
	}
};

const menuIndicatorHandler = (i) => {
	menuIndicator.innerHTML = `${i}`;
};

// eventListener付着
buttonContainer.querySelector('.button').addEventListener('click', () => buttonToggler());

menuButtons.forEach((button, i) => {
	button.addEventListener('click', () => {
		menuIndicatorHandler(i);
		buttonToggler(false);
	});
});

document.addEventListener('scroll', () => {
	const scrollAmount = document.documentElement.scrollTop;
	if (scrollAmount > 10) {
		buttonContainer.classList.add('showing');
	} else {
		buttonContainer.classList.remove('showing');
	}
	buttonToggler(false);
});
