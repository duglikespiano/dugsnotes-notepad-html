const foo = { name: 'dug', age: 100, emotion: 'happy' };
const bar = { name: 'kim', age: 5, emotion: 'angry' };
const baz = { name: 'hong', age: 20, emotion: 'excited' };

// Not bad to read on node.js but bad on the browser
// console.log(foo);
// console.log(bar);
// console.log(baz);

// Turn them into a table👍
console.table([foo, bar, baz]);
