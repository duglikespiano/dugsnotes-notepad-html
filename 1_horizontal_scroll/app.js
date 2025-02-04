// TODO 페이지별 스크롤양 확인 할 것
// TODO https://gsap.com/community/forums/topic/41643-horizontal-scrolling-card-stacking-duration/

// https://gsap.com/community/forums/topic/41643-horizontal-scrolling-card-stacking-duration/

gsap.registerPlugin(ScrollTrigger);

const vw = (coef) => window.innerWidth * (coef / 100);
const vh = (coef) => window.innerHeight * (coef / 100);

// gsap.to('.horizontal-scroll', {
// 	scrollTrigger: {
// 		trigger: '.horizontal-scroll',
// 		start: 'top top',
// 		end: vw(400),
// 		// scrub: true,
// 		// markers: true,
// 		pin: true,
// 	},
// 	// x: '-0%',
// });

gsap.to('.inner1', {
	scrollTrigger: {
		trigger: '.horizontal-scroll',
		start: 'top top',
		end: vh(100),
		scrub: true,
		markers: true,
		pin: true,
	},
	x: '-100%',
});

gsap.to('.inner2', {
	scrollTrigger: {
		trigger: '.inner1',
		start: 'center top',
		end: vh(100),
		scrub: true,
		markers: true,
	},
	x: '-100%',
});
