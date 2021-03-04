var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
    fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) {
        if (err) throw err;
        console.log('File Renamed!');
      });
}).listen(8080);