// https://youtu.be/ttHgX40UgUU?si=kSR44Ei-_TShdSRg

const container = document.querySelector('.container');

for (let i = 1; i <= 144; i++) {
	const dot = document.createElement('div');
	dot.classList.add('dot');
	container.appendChild(dot);
}

const animation = anime.createTimeline({
	easing: 'easeInOutExpo',
	loop: true,
	delay: anime.stagger(20),
});

animation
	.add('.dot', { scale: [1, 0.1], duration: () => anime.random(500, 2000), easing: 'easeInOutExpo' })
	.add('.dot', { scale: [0.1, 1], duration: () => anime.random(100, 1000), easing: 'easeInOutExpo' });
