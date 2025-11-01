const leftContainer = document.querySelector('.left-container');
const rightContainer = document.querySelector('.right-container');
const image = document.querySelector('.right-container img');
const area = document.querySelector('#area');
const output = document.querySelector('#output');

leftContainer.addEventListener('mouseenter', (e) => {
	leftContainer.classList.add('active');
	rightContainer.classList.add('active');
});
leftContainer.addEventListener('mouseleave', (e) => {
	leftContainer.classList.remove('active');
	rightContainer.classList.remove('active');
});

leftContainer.addEventListener('mousemove', (e) => {
	// Get element’s position relative to viewport
	const rect = leftContainer.getBoundingClientRect();

	// Define boundary values (these account for the border)
	const leftX = rect.left;
	const rightX = rect.right; // outer edge of right border
	const leftY = rect.top;
	const bottomY = rect.bottom; // outer edge of bottom border

	// Define inner dimensions (the width/height excluding border)
	const innerWidth = leftContainer.clientWidth; // 300px
	const innerHeight = leftContainer.clientHeight; // 300px

	// Define half the area box size
	const halfAreaW = area.clientWidth / 2; // 50px
	const halfAreaH = area.clientHeight / 2; // 50px

	// X and Y will be the center coordinate of the area box
	let x = 0;
	let y = 0;

	// 1. Calculate X
	const relativeX = e.clientX - leftX;

	// Clamp to the right: Max center X is innerWidth - halfAreaW (300 - 50 = 250)
	if (relativeX > innerWidth - halfAreaW) {
		x = innerWidth - halfAreaW;
	}
	// Clamp to the left: Min center X is halfAreaW (50)
	else if (relativeX < halfAreaW) {
		x = halfAreaW;
	}
	// No clamping needed (Area stays centered on mouse)
	else {
		x = relativeX;
	}

	// 2. Calculate Y
	const relativeY = e.clientY - leftY;

	// Clamp to the bottom: Max center Y is innerHeight - halfAreaH (300 - 50 = 250)
	if (relativeY > innerHeight - halfAreaH) {
		y = innerHeight - halfAreaH;
	}
	// Clamp to the top: Min center Y is halfAreaH (50)
	else if (relativeY < halfAreaH) {
		y = halfAreaH;
	}
	// No clamping needed (Area stays centered on mouse)
	else {
		y = relativeY;
	}

	output.textContent = `X: ${x.toFixed(1)}, Y: ${y.toFixed(1)}`;

	// Position the blue area (Top-left corner of the blue area)
	const areaLeft = x - halfAreaW; // E.g., 250 - 50 = 200px (Max left position)
	const areaTop = y - halfAreaH; // E.g., 250 - 50 = 200px (Max top position)
	area.style.left = `${areaLeft}px`;
	area.style.top = `${areaTop}px`;

	// --- Right Container Logic (from previous answer) ---
	const scale = 2;
	const maxAreaMoveX = innerWidth - area.clientWidth; // 200px
	const maxAreaMoveY = innerHeight - area.clientHeight; // 200px

	const percentageX = (areaLeft / maxAreaMoveX) * 100;
	const percentageY = (areaTop / maxAreaMoveY) * 100;

	// Apply the translation to the scaled image (figure)
	image.style.left = `-${percentageX * (scale - 1)}%`;
	image.style.top = `-${percentageY * (scale - 1)}%`;
});
