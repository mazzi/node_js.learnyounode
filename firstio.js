// Write a program that uses a single synchronous filesystem operation to
// read a file and print the number of newlines it contains to the
// console (stdout), similar to running `cat file | wc -l`.

// The full path to the file to read will be provided as the first
// command-line argument.

var fs = require('fs');
var lines = fs.readFileSync(process.argv[2]).toString().split('\n').length - 1;
console.log(lines);

