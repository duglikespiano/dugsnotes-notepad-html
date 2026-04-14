const calculateElements = document.querySelectorAll('[data-time]');
const isPastElement = document.querySelector('.is-past');

function calculateTimeDifference() {
	const targetDate = {
		year: 2026,
		month: 8,
		day: 12,
		hour: 1,
		minute: 0,
	};

	const date = dayjs(
		`${targetDate.year}-${targetDate.month.toString().padStart(2, '0')}-${targetDate.day
			.toString()
			.padStart(2, '0')}T${targetDate.hour.toString().padStart(2, '0')}:${targetDate.minute.toString().padStart(2, '0')}:00`,
	);

	let now = dayjs();

	// 0. Is Past
	const isPast = date.diff(now) > 0;

	// 1. Years
	const years = date.diff(now, 'year').toString();
	now = now.add(years, 'year');

	// 2. Months
	const months = date.diff(now, 'month').toString();
	now = now.add(months, 'month');

	// 3. Days
	const days = date.diff(now, 'day').toString();
	now = now.add(days, 'day');

	// 4. Hours
	const hours = date.diff(now, 'hour').toString();
	now = now.add(hours, 'hour');

	// 5. Minutes
	const minutes = date.diff(now, 'minute').toString();
	now = now.add(minutes, 'minute');

	// 6. Seconds
	const seconds = date.diff(now, 'second').toString();

	const timeObject = {
		isPast,
		years: addPad(years),
		months: addPad(months),
		days: addPad(days),
		hours: addPad(hours),
		minutes: addPad(minutes),
		seconds: addPad(seconds),
	};
	console.log(timeObject);
	return timeObject;
}

function updateComponent() {
	const timeValues = calculateTimeDifference();
	calculateElements.forEach((el) => {
		el.textContent = timeValues[el.dataset.time];
	});
	if (timeValues.isPast) {
		isPastElement.textContent = '남았습니다';
	} else {
		isPastElement.textContent = '지났습니다';
	}
}

setInterval(updateComponent, 1000);

function addPad(string) {
	return string.padStart(2, '0');
}
