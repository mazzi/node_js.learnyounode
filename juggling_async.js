// This problem is the same as the previous problem (HTTP COLLECT) in
// that you need to use `http.get()`. However, this time you will be
// provided with three URLs as the first three command-line arguments.

// You must collect the complete content provided to you by each of the
// URLs and print it to the console (stdout). You don't need to print out
// the length, just the data as a String; one line per URL. The catch is
// that you must print them out in the same order as the URLs are
// provided to you as command-line arguments.

var http = require('http');

var my_urls = process.argv.splice(2,3);
var results = [];
var endCount = 0;

for (var i in my_urls) {
  process_url(my_urls[i], i);
}

function process_url (url, i) {
    http.get( url, function(response) {
        var string = '';
        response.on('data', function(data) {
           string += data;
        });
        response.on('error', console.error);
        response.on('end', function() {
            results[i] = string;
            endCount++;
            if (endCount >= 3) {
                for( var j in results ){
                    console.log(results[j]);
                }
            }
        }).setEncoding('utf8');

    });
};

