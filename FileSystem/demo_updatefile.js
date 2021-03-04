var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
    //Append "This is my text." to the end of the file "mynewfile1.txt":
    // fs.appendFile('mynewfile1.txt', ' This is my text.', function (err) {
    //   if (err) throw err;
    //   console.log('Updated!');
    // });

    //Replace the content of the file "mynewfile3.txt":
    fs.writeFile('mynewfile3.txt', 'This is my text', function (err) {
        if (err) throw err;
        console.log('Replaced!');
      });
}).listen(8080);