const string = '/projects/blog-frontend/src/pages/[language]/blog/[posts]';
const splittedStrings = string.split('/');
const stringsInBracket = splittedStrings.filter((string) => string[0] === '[' && string[string.length - 1] === ']');
console.log(stringsInBracket);
