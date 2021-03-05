var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
    //Create a new file using the appendFile() method:
    // fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
    //     if (err) throw err;
    //     console.log('Saved!');
    //   });

    //Create a new, empty file using the open() method:
    // fs.open('mynewfile2.txt', 'w', function (err, file) {
    //     if (err) throw err;
    //     console.log('Saved!');
    //   });

    //Create a new file using the writeFile() method:
    // fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
    //     if (err) throw err;
    //     console.log('Saved!');
    //   });

}).listen(8080);