const container = document.querySelector('.container');
const ctx = document.getElementById('myChart');
const observer = new IntersectionObserver(
	(elements) => {
		elements.forEach((element) => {
			if (element.isIntersecting && element.intersectionRatio >= 0.5) {
				console.log(element.intersectionRatio);
				new Chart(ctx, {
					type: 'doughnut',
					data: data,
				});
			}
		});
	},
	{
		threshold: 0.8,
	}
);

const data = {
	labels: ['Red', 'Blue', 'Yellow'],
	datasets: [
		{
			label: 'My First Dataset',
			data: [300, 50, 100],
			backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)'],
			hoverOffset: 4,
		},
	],
};

observer.observe(container);
