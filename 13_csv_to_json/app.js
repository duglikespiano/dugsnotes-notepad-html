const csvToJson = require('convert-csv-to-json');

let inputFile = `${__dirname}/dummy.csv`;
let outputFile = `${__dirname}/dummy.json`;

csvToJson.fieldDelimiter(',').generateJsonFileFromCsv(inputFile, outputFile);
