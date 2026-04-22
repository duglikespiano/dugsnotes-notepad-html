const cells = document.querySelectorAll('.grid__cell');
const marker = document.querySelector('.grid__marker');

window.addEventListener('mousemove', (e) => {
	marker.style.top = `${e.clientY - marker.clientWidth / 2}px`;
	marker.style.left = `${e.clientX - marker.clientHeight / 2}px`;

	if (marker.getBoundingClientRect().right > window.innerWidth) {
		marker.style.left = `${window.innerWidth - marker.clientWidth}px`;
	} else if (marker.getBoundingClientRect().left < 0) {
		marker.style.left = `0px`;
	}

	if (marker.getBoundingClientRect().top < 0) {
		marker.style.top = `0px`;
	} else if (marker.getBoundingClientRect().bottom > window.innerHeight) {
		marker.style.top = `${window.innerHeight - marker.clientHeight}px`;
	}

	let collisionArea = 0;
	let closestCell = null;

	cells.forEach((cell) => {
		if (touching(marker, cell)) {
			const area = getCollisionArea(marker, cell);
			if (area > collisionArea) {
				collisionArea = area;
				closestCell = cell;
			}
		}
	});

	cells.forEach((cell) => {
		cell.classList.toggle('active', cell === closestCell);
	});
});

function touching(d1, d2) {
	const r1 = d1.getBoundingClientRect();
	const r2 = d2.getBoundingClientRect();
	return !(r1.right < r2.left || r1.left > r2.right || r1.bottom < r2.top || r1.top > r2.bottom);
}

function getCollisionArea(d1, d2) {
	const r1 = d1.getBoundingClientRect();
	const r2 = d2.getBoundingClientRect();
	const w = Math.min(r1.right, r2.right) - Math.max(r1.left, r2.left);
	const h = Math.min(r1.bottom, r2.bottom) - Math.max(r1.top, r2.top);
	return w * h;
}
