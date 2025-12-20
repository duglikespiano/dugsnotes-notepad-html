const calendarContainer = document.querySelector('.calendar');
const yearElement = document.querySelector('[data-year]');
const monthElement = document.querySelector('[data-month]');
const proviousMonthButton = document.querySelector('[previous-month]');
const nextMonthButton = document.querySelector('[next-month]');

// Month and day are 0-indexed
const howManyDaysInAWeek = 7;
const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let monthDifferential = 0;

function updateCalendar(monthDifferential = 0) {
	const today = new Date();
	const selectedYearAndMonth = new Date(today.getFullYear(), today.getMonth() + monthDifferential);
	const year = selectedYearAndMonth.getFullYear();
	const month = selectedYearAndMonth.getMonth();
	const howManyDatesOnTheMonth = new Date(year, month + 1, 0).getDate();
	const howManyDatesOnPreviousMonth = new Date(year, month, 0).getDate();
	const whatDayItIsStartingOfTheMonth = new Date(year, month, 1).getDay();
	const calendarStartDate =
		whatDayItIsStartingOfTheMonth === 0 ? 1 : howManyDatesOnPreviousMonth - whatDayItIsStartingOfTheMonth + 1;

	const calendarFlatArray = [];
	const calendarTwoDimensionArray = [];

	// console.log(`This month starts on ${dayNames[whatDayItIsStartingOfTheMonth]}`);
	// console.log(`This month has ${howManyDatesOnTheMonth} days`);
	// console.log(`Previous month has ${howManyDatesOnPreviousMonth} days`);
	// console.log(`The first day of the month calendar starts with ${calendarStartDate}`);

	if (calendarStartDate !== 1) {
		for (let i = calendarStartDate; i <= howManyDatesOnPreviousMonth; i++) {
			calendarFlatArray.push(i);
		}
	}

	for (let i = 1; i <= howManyDatesOnTheMonth; i++) {
		calendarFlatArray.push(i);
	}

	for (let i = 1; calendarFlatArray.length % 7 !== 0; i++) {
		calendarFlatArray.push(i);
	}

	for (let i = 0; i < calendarFlatArray.length; i += howManyDaysInAWeek) {
		const daysForAWeekChunk = calendarFlatArray.slice(i, i + howManyDaysInAWeek);
		calendarTwoDimensionArray.push(daysForAWeekChunk);
	}

	calendarContainer.innerHTML = '';
	yearElement.innerText = year;
	monthElement.innerText = selectedYearAndMonth.toLocaleString('en-US', { month: 'long' });

	calendarTwoDimensionArray.forEach((week, i) => {
		const weekContainer = document.createElement('div');
		weekContainer.classList.add('week');
		calendarContainer.appendChild(weekContainer);
		week.forEach((day) => {
			const dayContainer = document.createElement('div');
			dayContainer.classList.add('day');

			if (day > 7 && i === 0) {
				dayContainer.classList.add('previous-month');
			} else if (day < 7 && i + 1 === calendarTwoDimensionArray.length) {
				dayContainer.classList.add('next-month');
			}

			dayContainer.innerText = day;
			weekContainer.appendChild(dayContainer);
		});
	});
}
updateCalendar();

proviousMonthButton.addEventListener('click', () => {
	monthDifferential--;
	updateCalendar(monthDifferential);
});

nextMonthButton.addEventListener('click', () => {
	monthDifferential++;
	updateCalendar(monthDifferential);
});
