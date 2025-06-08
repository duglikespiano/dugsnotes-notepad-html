const entries = [
	['name', 'dug'],
	['age', 20],
];

// The Object.fromEntries() static method transforms a list of key-value pairs into an object.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries
const obj = Object.fromEntries(entries);

console.log(obj);
