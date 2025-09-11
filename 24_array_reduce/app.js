// Example array
const numbers = [1, 2, 3, 4, 5];

/*
reduce() takes a callback function and an optional initial value.
The callback function itself takes up to 4 arguments:
1. accumulator → the result carried over each iteration
2. currentValue → the current element in the array
3. currentIndex → (optional) index of the current element
4. array → (optional) the whole array being processed

Syntax:
array.reduce((accumulator, currentValue, currentIndex, array) => { ... }, initialValue);
*/

// Case 1: Sum all numbers
const sum = numbers.reduce((acc, current) => {
	// Add the current number to the accumulator
	return acc + current;
}, 0); // <- initial value of the accumulator is 0

console.log('Sum:', sum); // Output: 15

// Case 2: Find maximum value
const max = numbers.reduce((acc, current) => {
	// Compare current with accumulator (max so far)
	return current > acc ? current : acc;
}, numbers[0]); // <- initial value is first element

console.log('Max:', max); // Output: 5

// Case 3: Transform array into an object (count occurrences)
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

const fruitCount = fruits.reduce((acc, current) => {
	// If the fruit exists, increment its count; otherwise, set to 1
	acc[current] = (acc[current] || 0) + 1;
	return acc;
}, {}); // <- initial value is an empty object

console.log('Fruit count:', fruitCount);
// Output: { apple: 3, banana: 2, orange: 1 }
