// Write an HTTP server that receives only POST requests and converts
// incoming POST body characters to upper-case and returns it to the client.

// Your server should listen on the port provided by the first argument to
// your program.

const http = require('http');
const map = require('through2-map')

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});

    if (req.method !== 'POST') {
        return res.end();
    }

    req.pipe( map((chunk) => chunk.toString().toUpperCase())).pipe(res);

}).listen(Number(process.argv[2]));

