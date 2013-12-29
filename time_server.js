//Write a TCP time server!
// Your server should listen to TCP connections on the port provided by the
// first argument to your program. For each connection you must write the
// current date & time in the format:
// YYYY-MM-DD hh:mm
// followed by a newline character. Month, day, hour and minute must be
// zero-filled to 2 integers. For example:
// 2013-07-06 07:42

var net = require('net');

function zeroFill(i) {
    return (i < 10 ? '0' : '') + i
}

var server = net.createServer( function(socket) {
    var date = new Date();
    var retvalue =  zeroFill(date.getFullYear()) + '-' +
                    zeroFill(date.getMonth()+1) + '-' +
                    zeroFill(date.getDate()) + ' ' +
                    zeroFill(date.getHours()) + ':' +
                    zeroFill(date.getMinutes());
    socket.end(retvalue + '\n');
});

server.listen(process.argv[2]);
