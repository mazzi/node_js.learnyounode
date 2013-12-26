var fs = require('fs');
var path = require('path');

module.exports = function (path_to_read, extension, callback) {
 fs.readdir(path_to_read, function(err, list) {
        if (err)
            return callback(err);

        data = list.filter( function (file) {
            return path.extname(file) === '.' + extension
        });
        callback(null, data);
    });
};
