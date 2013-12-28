// Write a program that performs an HTTP GET request to a URL provided to
// you as the first command-line argument. Write the String contents of
// each "data" event from the response to a new line on the console
// (stdout).

var http = require('http');

var client = http.get( process.argv[2], function(response) {
   response.on('data', function(data) {
        console.log(data);
    }).setEncoding('utf8');
    response.on('error', console.error);
});
