/****************************************************************************
Write an HTTP server that serves JSON data when it receives a GET request
to the path '/api/parsetime'. Expect the request to contain a query string
with a key 'iso' and an ISO-format time as the value.

For example:

/api/parsetime?iso=2013-08-10T12:10:15.474Z

The JSON response should contain only 'hour', 'minute' and 'second'
properties. For example:

    {
    "hour": 14,
    "minute": 23,
    "second": 15
    }

Add second endpoint for the path '/api/unixtime' which accepts the same
query string but returns UNIX epoch time in milliseconds (the number of
milliseconds since 1 Jan 1970 00:00:00 UTC) under the property 'unixtime'.
For example:

    { "unixtime": 1376136615474 }

Your server should listen on the port provided by the first argument to
your program.
****************************************************************************/

"use strict";

const http = require('http');
const url = require('url');


function parsetime(date) {
    return {
        hour : date.getHours(),
        minute : date.getMinutes(),
        second : date.getSeconds()
    }
}

function unixtime(date) {
    return { unixtime: date.getTime() };
}


http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' })

    if( req.method === 'GET') {
        const query = url.parse(req.url, true);
        if (query.query.iso === 'undefined') { return };
        const date = new Date(query.query.iso);

        if ( query.pathname === '/api/parsetime' ){
            res.write(JSON.stringify(parsetime(date)));
        }
        else if (query.pathname === '/api/unixtime' ){
            res.write(JSON.stringify(unixtime(date)));
        }
        else {
            res.write('Wrong url.');
        }
        res.end();
    } else {
        res.write('Wrong method.');
        res.end();
    }

}).listen(Number(process.argv[2]));
