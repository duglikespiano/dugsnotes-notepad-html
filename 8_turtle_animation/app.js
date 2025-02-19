const turtle = document.querySelector('#turtle');
const leg1 = document.querySelector('#turtle .leg1');
const leg2 = document.querySelector('#turtle .leg2');

let animationName = 'init';

const leg1DefaultPoint =
	'M561.911 403.178C561.911 464.533 590.311 466.667 625.378 466.667C660.467 466.667 688.889 464.511 688.889 403.178C688.675 391.248 686.928 379.395 683.689 367.911C668.333 310.356 622.489 244.444 593.644 244.444C558.578 244.444 561.911 341.822 561.911 403.178Z';
const leg2DefaultPoint =
	'M371.444 403.178C371.444 464.533 343.022 466.667 307.956 466.667C272.889 466.667 244.444 464.511 244.444 403.178C244.444 392.311 246.333 380.311 249.644 367.911C264.978 310.356 310.844 244.444 339.689 244.444C374.756 244.444 371.444 341.822 371.444 403.178Z';
const leg1Movement1EndPoint =
	'M573.199 415.662C585.955 475.677 614.178 471.858 648.479 464.568C682.801 457.272 710.154 449.255 697.402 389.262C694.712 377.637 690.539 366.406 684.983 355.847C657.997 302.741 599.45 247.802 571.236 253.799C536.936 261.09 560.442 355.647 573.199 415.662Z';
const leg2Movement1EndPoint =
	'M360.157 415.664C347.4 475.679 319.155 471.856 284.855 464.566C250.555 457.275 223.18 449.252 235.932 389.259C238.191 378.63 242.534 367.285 248.351 355.845C275.315 302.735 333.883 247.8 362.097 253.797C396.398 261.088 372.913 355.649 360.157 415.664Z';
const leg1Movement2EndPoint =
	'M553.396 389.279C540.64 449.294 567.976 457.285 602.276 464.576C636.598 471.872 664.847 475.672 677.599 415.679C679.871 403.966 680.626 392.009 679.845 380.102C676.792 320.612 645.653 246.609 617.439 240.612C583.138 233.322 566.153 329.264 553.396 389.279Z';
const leg2Movement2EndPoint =
	'M379.959 389.277C392.715 449.292 365.358 457.288 331.058 464.578C296.757 471.869 268.486 475.675 255.734 415.682C253.475 405.052 252.828 392.922 253.488 380.104C256.52 320.619 287.681 246.612 315.895 240.614C350.195 233.324 367.202 329.262 379.959 389.277Z';

const checkIfAnimationIsOver = (parameter) => {
	if (parameter === 'init') {
		return leg1.getAttribute('d') === leg1DefaultPoint && leg2.getAttribute('d') === leg2DefaultPoint;
	} else if (parameter === 'open') {
		return leg1.getAttribute('d') === leg1Movement2EndPoint && leg2.getAttribute('d') === leg2Movement2EndPoint;
	} else if (parameter === 'close') {
		return leg1.getAttribute('d') === leg1Movement1EndPoint && leg2.getAttribute('d') === leg2Movement1EndPoint;
	}
};

const animationArray = [
	{
		animationName: 'init',
		leg1EndPoint: leg1Movement1EndPoint,
		leg2EndPoint: leg2Movement1EndPoint,
	},
	{
		animationName: 'close',
		leg1EndPoint: leg1Movement2EndPoint,
		leg2EndPoint: leg2Movement2EndPoint,
	},
	{
		animationName: 'open',
		leg1EndPoint: leg1Movement1EndPoint,
		leg2EndPoint: leg2Movement1EndPoint,
	},
];

const animateTurtle = (whichAnimation) => {
	const animationArrayIndex = animationArray.findIndex((array) => array.animationName === animationName);
	anime({
		targets: leg1,
		d: [{ value: animationArray[animationArrayIndex].leg1EndPoint }],
		duration: 1000,
		easing: 'linear',
	});
	anime({
		targets: leg2,
		d: [{ value: animationArray[animationArrayIndex].leg2EndPoint }],
		duration: 1000,
		easing: 'linear',
	});
	if (whichAnimation === 'init') {
		animationName = 'close';
	} else if (whichAnimation === 'open') {
		animationName = 'close';
	} else if (whichAnimation === 'close') {
		animationName = 'open';
	}
};

const turtleAnimationHanlder = () => {
	if (animationName === 'init' && checkIfAnimationIsOver('init')) {
		animateTurtle('init');
	} else if (animationName === 'close' && checkIfAnimationIsOver('close')) {
		animateTurtle('close');
	} else if (animationName === 'open' && checkIfAnimationIsOver('open')) {
		animateTurtle('open');
	}
	turtle.style.transform = `translateX(${window.scrollY / 20}px)`;
};

window.addEventListener('scroll', turtleAnimationHanlder);
